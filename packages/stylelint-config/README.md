<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive StyleLint configuration _(${name})_) -->
# Captive StyleLint configuration _(@captive/stylelint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> StyleLint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @captive/stylelint-config stylelint
```
<!-- AUTO-GENERATED-CONTENT:END -->

Update your `package.json` :

```jsonc
{
  ...
  "scripts": {
    ...
    "lint:style": "stylelint \"app/**/*.{css,scss}\"",
    "format:style": "stylelint \"app/**/*.{css,scss}\" --fix"
  },
  "stylelint": {
    "extends": [
      "@captive/stylelint-config"
    ]
  }
}
```

add `stylelintignore` file : 

```
/public
/node_modules
/tmp
/log
/vendor

/www
**/*.bundle.scss
**/generateur/**/*.scss
**/vendor/**/*.scss
**/root/**/*.scss

/app/assets/builds
**/*.min.css
```

## Usage

To check your style :

```bash
npm run lint:style
```

To autocorrect your style :

```bash
npm run format:style
```


**Features :**

- `CSS` and `SCSS` validation

## Common Errors

<details>
  <summary>
    <strong>😩 My project has too many errors</strong>
  </summary>
  
## Explanation

the configuration is very strict, it is normal to have many errors

## Solution

### Solution 1 : Auto-correct all errors

```shell
npm run format:style
```

### Solution 2 : Ignore errors and progressively fix them

create `.stylelint_todo.cjs` for all non passing rules. It is advised to fix them later, rule by rule : 

```js
module.exports = {
  rules: {}
}
```

update your `package.json` :

```diff
{
  ...
  "stylelint": {
    "extends": [
      "@captive/stylelint-config",
+     "./.stylelint_todo.cjs"
    ]
  }
}
```

</details>


## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@captive.fr>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/stylelint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/stylelint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE

About Captive
-------------

![captive](https://raw.githubusercontent.com/Captive-Studio/assets/main/logo_captive_blue_avec_fond.webp)

@captive/stylelint-config is maintained and funded by Captive.
The names and logos for captive are trademarks of captive-studio.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/Captive-Studio
[hire]: https://www.captive.fr/contact?utm_source=github
