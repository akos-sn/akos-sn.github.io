import { cp, rm, readdir, writeFile, mkdir, readFile } from 'node:fs/promises';
import { resolve, parse } from 'node:path';
import createMd from 'markdown-it';

const { convertMdToHtml } = await setupMarkdown({
	title: 'akos.sn',
	htmlTemplatePath: resolve(import.meta.dirname, '../page.template.html'),
});

await build({
	contentDir: resolve(import.meta.dirname, '../content'),
	outputDir: resolve(import.meta.dirname, '../public'),
	convertMdToHtml,
});
await cp(
	resolve(import.meta.dirname, '../src'),
	resolve(import.meta.dirname, '../public/assets'),
	{ force: true, recursive: true }
);

/**
 * @param {Object} options
 * @param {string} options.title
 * @param {string} options.htmlTemplatePath
 */
async function setupMarkdown({ htmlTemplatePath, title }) {
	const md = createMd({
		html: true,
	});
	const pageTemplate = String(await readFile(htmlTemplatePath, 'utf-8'));
	return {
		/** @param {string} markdown  */
		convertMdToHtml(markdown) {
			const html = md.render(markdown);
			return pageTemplate
					.replace('<!-- [title] -->', title)
					.replace('<!-- [content] -->', html);
		},
	};
}

/**
 * @param {Object} options
 * @param {string} options.contentDir
 * @param {string} options.outputDir
 * @param {(markdown: string) => string} options.convertMdToHtml
 */
async function build({ contentDir, outputDir, convertMdToHtml }) {
	await rm(outputDir, { recursive: true, force: true });
	const mdFiles = (await readdir(contentDir, { recursive: true, withFileTypes: true, encoding: 'utf-8' }))
			.filter(file => file.isFile())
			.filter(file => file.name.toLowerCase().endsWith('.md'));
	const mdFilesRead = await Promise.all(mdFiles.map(async ({ name, parentPath }) => {
		const path = resolve(parentPath, name);
		const content = await readFile(path, { encoding: 'utf-8' });
		return ({ path, content });
	}));

	const htmlFiles = mdFilesRead.map(file => {
		const path = file.path
				.replace(contentDir, outputDir)
				.replace(/\.md$/, '.html');
		const content = convertMdToHtml(file.content);
		return { path, content };
	});

	return Promise.all(htmlFiles.map(async ({ path, content }) => {
		const { dir } = parse(path);
		await mkdir(dir, { recursive: true });
		await writeFile(path, content, 'utf-8');
	}));
}
