module.exports = (api) => {
	api.cache(() => process.env.NODE_ENV);

	return {
		plugins: [
			'@babel/syntax-dynamic-import',
    '@babel/transform-runtime',
    '@babel/transform-for-of',
    '@babel/proposal-class-properties',
    '@babel/transform-classes',
    '@babel/transform-object-super',
    '@babel/proposal-export-namespace-from',
    '@babel/proposal-export-default-from',
    '@babel/transform-function-name',
    '@babel/transform-arrow-functions',
    '@babel/transform-async-to-generator',
    'transform-member-expression-literals',
    'transform-property-literals',
    '@babel/transform-block-scoped-functions',
    '@babel/transform-block-scoping',
    '@babel/transform-destructuring',
    '@babel/transform-instanceof',
    '@babel/transform-parameters',
    '@babel/transform-shorthand-properties',
    '@babel/transform-spread',
    '@babel/transform-template-literals',
    '@babel/transform-exponentiation-operator',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-throw-expressions',
    'transform-minify-booleans',
		],
		presets: [
			["@babel/env", {
				"targets": {
					"node": "current"
				}}],
			"@babel/typescript"
		]
	}
}
