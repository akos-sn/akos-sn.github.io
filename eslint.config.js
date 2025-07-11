export default [
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		files: [
			'cli.js',
			'run.js',
			'src/**/*.js',
			'scripts/**/*.js',
			'test/**/*.js',
		],
		rules: {
			quotes: ['error', 'single', { avoidEscape: true }],
			semi: ['error', 'always'],
			'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
			'comma-dangle': ['warn', 'always-multiline'],
			'comma-spacing': 'warn',
			indent: ['warn', 'tab', { MemberExpression: 2, CallExpression: { arguments: 2 }, ignoredNodes: ['TemplateLiteral'] }],
			'key-spacing': ['warn', { mode: 'strict' }],
			'max-len': ['warn', 140, 2, { ignoreComments: true }],
			'no-alert': 'warn',
			'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
			'no-debugger': 'warn',
			'no-trailing-spaces': 'warn',
			'object-curly-spacing': ['warn', 'always'],
			'operator-linebreak': ['warn', 'after'],
			'prefer-const': 'warn',
			'template-curly-spacing': 'off',
		},
	},
	{ ignores: ['node_modules/**'] },
];
