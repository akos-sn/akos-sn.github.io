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
	{ force: true, recursive: true },
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
 * @typedef {Object} PostMeta
 * @property {string} title
 * @property {string} date
 * @property {string[]} tags
 * @property {string} slug
 * @property {string} thumbnail
 * @property {string} description
 */

/**
 * @param {Object} options
 * @param {string} options.contentDir
 * @param {string} options.outputDir
 * @param {(markdown: string) => string} options.convertMdToHtml
 */
async function build({ contentDir, outputDir, convertMdToHtml }) {
	// Clear output directory
	await rm(outputDir, { recursive: true, force: true });

	/** @type {PostMeta[]} */
	const postsMeta = [];

	/** @type {PostMeta[]} */
	const foundryMeta = [];

	const mdFiles = (await readdir(contentDir, {
		recursive: true,
		withFileTypes: true,
		encoding: 'utf-8',
	}))
		.filter(file => file.isFile())
		.filter(file => file.name.toLowerCase().endsWith('.md'));

	const mdFilesRead = await Promise.all(
		mdFiles.map(async ({ name, parentPath }) => {
			const fullPath = resolve(parentPath, name);
			const content = await readFile(fullPath, { encoding: 'utf-8' });
			return { path: fullPath, content };
		})
	);

	/**
 * Parses front matter from the top of a markdown file.
 * Expects YAML-style delimiters (`---`) at top and bottom of metadata block.
 * Only parses `title`, `date`, and `tags` keys.
 *
 * @param {string} content
 * @returns {{
 *   metadata: { title?: string, date?: string, tags?: string[], thumbnail?: string, description?: string },
 *   body: string
 * }}
 */
	function parseFrontMatter(content) {
		if (typeof content !== 'string') {
			return { metadata: {}, body: '' };
		}

		const lines = content.split('\n');
		if (lines.length === 0) {
			return { metadata: {}, body: content };
		}

		const firstLine = lines[0];
		if (typeof firstLine !== 'string' || firstLine.trim() !== '---') {
			return { metadata: {}, body: content };
		}

		/** @type {{ title?: string, date?: string, tags?: string[], thumbnail?: string, description?: string }} */
		const metadata = {};
		let i = 1;

		while (i < lines.length) {
			const rawLine = lines[i];
			if (typeof rawLine !== 'string') {
				i++;
				continue;
			}

			const line = rawLine.trim();
			if (line === '---') {
				i++;
				break;
			}

			const [rawKey, ...rawValueParts] = line.split(':');
			if (!rawKey || rawValueParts.length === 0) {
				i++;
				continue;
			}

			const key = rawKey.trim();
			const value = rawValueParts.join(':').trim();

			switch (key) {
				case 'title':
					metadata.title = value;
					break;
				case 'date':
					metadata.date = value;
					break;
				case 'tags':
					metadata.tags = value
						.split(',')
						.map(tag => tag.trim())
						.filter(Boolean);
					break;
				case 'thumbnail':
					metadata.thumbnail = value;
					break;
				case 'description':
					metadata.description = value;
					break;
				default:
					break;
			}

			i++;
		}

		const body = lines.slice(i).join('\n');
		return { metadata, body };
	}


	const htmlFiles = mdFilesRead.map(({ path, content }) => {
		const isPost = path.includes('/posts/');
		const isFoundry = path.includes('/foundry/');
		const isPortfolio = path.includes('/portfolio/');
		const isDraft = path.includes('/drafts/');
		const { metadata, body } = parseFrontMatter(content);

		let html = convertMdToHtml(body);

		if (isPost || isPortfolio || isDraft || isFoundry) {
			html = `<article>\n${html}\n</article>`;
		}

		const outputPath = path.replace(contentDir, outputDir).replace(/\.md$/, '.html');

		if (isPost && metadata.title && metadata.date) {
			postsMeta.push({
				title: metadata.title,
				date: metadata.date,
				tags: metadata.tags ?? [],
				thumbnail: metadata.thumbnail ?? '',
				description: metadata.description ?? '',
				slug: path.replace(contentDir, '').replace(/\.md$/, '.html'),
			});
		}
		if (isFoundry && metadata.title && metadata.date) {
			foundryMeta.push({
				title: metadata.title,
				date: metadata.date,
				tags: metadata.tags ?? [],
				thumbnail: metadata.thumbnail ?? '',
				description: metadata.description ?? '',
				slug: path.replace(contentDir, '').replace(/\.md$/, '.html'),
			});
		}

		return { path: outputPath, content: html };
	});

	// Write all HTML files
	await Promise.all(
		htmlFiles.map(async ({ path, content }) => {
			const { dir } = parse(path);
			await mkdir(dir, { recursive: true });
			await writeFile(path, content, 'utf-8');
		})
	);

	// Generate posts.html
	if (postsMeta.length > 0) {
		postsMeta.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		const originalPostsMd = await readFile('content/posts.md', 'utf-8');


		let postsListHtml = '<ul class="posts-list">\n';
		for (const post of postsMeta) {
			postsListHtml +=
				'<li class="posts-list-item">' +
				'<a href="' + post.slug + '"> <img src="' + post.thumbnail + '" /> </a>' +
				'<div class="posts-metadata">' +
				'<div class="post-tags">' + post.tags + '</div>' +
				'<span>' + '•' + '</span>' +
				'<span class="post-date">' + post.date + '</span><br />' +
				'</div>' +
				'<a href="' + post.slug + '"><h3>' + post.title + '</h3></a>' +
				'<p class="posts-description">' + post.description + '</p>' +
				'</li>\n';
		}
		postsListHtml += '</ul>';

		const fullPostsMd = `${originalPostsMd.trim()}\n\n${postsListHtml}`;
		const postsHtml = convertMdToHtml(fullPostsMd);
		const postsOutputPath = resolve(outputDir, 'posts.html');
		await writeFile(postsOutputPath, postsHtml, 'utf-8');

		console.log('Generated posts.html');

	}
	// Generate foundry.html
	if (foundryMeta.length > 0) {
		foundryMeta.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

		const originalFoundryMd = await readFile('content/foundry.md', 'utf-8');

		let foundryListHtml = '<ul class="foundry-list">\n';
		for (const item of foundryMeta) {
			foundryListHtml +=
				'<li class="posts-list-item">' +
				'<a href="' + item.slug + '"> <img src="' + item.thumbnail + '" /> </a> <br/>' +
				'<a href="' + item.slug + '">' + item.title + '</a>' +
				'<p class="posts-description">' + item.description + '</p>' +
				'</li>\n';
		}
		foundryListHtml += '</ul>';

		const fullFoundryMd = originalFoundryMd.replace('<!-- FOUNDRY-LIST -->', foundryListHtml);
		const foundryHtml = convertMdToHtml(fullFoundryMd);
		const foundryOutputPath = resolve(outputDir, 'foundry.html');

		await writeFile(foundryOutputPath, foundryHtml, 'utf-8');
		console.log('Generated foundry.html');
	}

}

