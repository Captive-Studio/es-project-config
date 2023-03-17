<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive Prettier configuration _(${name})_) -->
# Captive Prettier configuration _(@captive/prettier-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> Prettier shared configuration
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @captive/prettier-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

In the `.prettierrc.json` for your project

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```json\n"${name}"\n```) -->
```json
"@captive/prettier-config"
```
<!-- AUTO-GENERATED-CONTENT:END -->

Or in the `.prettierrc.js`, to be able to override rules

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```js\nmodule.exports = {\n  ...require('${name}'),\n  // Override rules\n};\n```) -->
```js
module.exports = {
  ...require('@captive/prettier-config'),
  // Override rules
};
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Rules
<!-- AUTO-GENERATED-CONTENT:START (FILE:src=./node_modules/.docs/RULES.md) -->
<!-- The below content is automatically added from ./node_modules/.docs/RULES.md -->
<details>
<summary><code>@captive/prettier-config</code></summary>

```json
{
  "default": {
    "singleQuote": true,
    "trailingComma": "es5",
    "overrides": [
      {
        "files": [
          "*.css",
          "*.scss"
        ],
        "options": {
          "trailingComma": "none"
        }
      }
    ]
  }
}
```
</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## Requirements
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=Prettier: ${peerDependencies.prettier}&unknownTxt= ) -->
Prettier: 2.x
<!-- AUTO-GENERATED-CONTENT:END -->

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@gmail.com>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/prettier-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/prettier-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
