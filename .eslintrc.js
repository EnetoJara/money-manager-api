module.exports = {
	"env": {
		"es6": true,
		"node": true
	},
	"plugins": [
    	"@typescript-eslint/tslint"
  	],
	"extends": "eslint:recommended",
	"parser": "@typescript-eslint/parser",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"project": "tsconfig.json",
	},
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};
