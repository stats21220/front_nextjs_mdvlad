# front_nextjs_mdvlad
{
	"root": true,
	"parser": "@typescript-eslint/parser",
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"semi": "off",
		"@typescript-eslint/semi": [
			"warn"
		],
		"@typescript-eslint/no-empty-interface": [
			"error",
			{
				"allowSingleExtends": true
			}
		]
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	]
}
