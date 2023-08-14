module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
	},
	parserOptions: { ecmaVersion: 8 },
	ignorePatterns: ['node_modules/*', '.next/*', '.out/*'],
	extends: ['eslint:recommended'],
	overrides: [
		{
			files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
			parser: '@typescript-eslint/parser',
			settings: { react: { version: 'detect' } },
			env: {
				browser: true,
				node: true,
				es6: true,
			},
			extends: [
				'eslint:recommended',
				'plugin:@typescript-eslint/recommended',
				'plugin:@next/next/recommended',
			],
			rules: {
				'react/prop-types': 'off',
				'@typescript-eslint/explicit-function-return-type': [
					'warn',
					{
						allowExpressions: true,
						allowConciseArrowFunctionExpressionsStartingWithVoid: true,
					},
				],
			},
			parserOptions: { sourceType: 'module' },
		},
	],
}
