<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive ESLint configuration _(${name})_) -->
# Captive ESLint configuration _(@captive/eslint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> ESLint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @captive/eslint-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

### Default JS/TS project

For most kind of project, just edit `eslintrc.json` and add default configuration

```js
{
  "extends": [
    "@captive/eslint-config"
  ]
}
```

**Features :**

- `ES` and `TS` validation
- `JSON`
- `YAML`
- `Prettier` formatting
- `JSX` and `React` syntax validation
- `Jest` tests
- `VueJS`
- `Cypress`

### Custom project

For most kind of project, just edit `eslintrc.json` and cherry pick only configurations

```js
{
  "root": true,
  "extends": [
    "@captive/eslint-config/dist/react",
    "@captive/eslint-config/dist/ts",
    // include more configurations here
  ]
  //...
}
```

**Available configurations :**

- `@captive/eslint-config/dist/es`: for ECMA Script (ES) files
- `@captive/eslint-config/dist/jest`: for jest environment tests
- `@captive/eslint-config/dist/json`: for jest environment tests
- `@captive/eslint-config/dist/react`: for react capability
- `@captive/eslint-config/dist/ts`: for typescript files

## Migration Guide

### Intention

This is a recommended way of migrating from another configuration / no configuration. The aim is to setup the shared configuration as soon as possible and progressively fix all errors.

All modifications should be :

- iterative : move safely from a step to another
- easy to review : the smallest changes possible
- safe : avoid touching business code if there is a chance that it could introduce regression

### Content

1. Add the configuration your eslint configuration file (follow Usage section)
2. Disable temporarily each rule that returns an error
    1. Get all the errors from eslint

        ```shell
        > yarn eslint .
        path/to/my-project/file.js
        1:1  error  'foo' is not defined  no-undef

        # ...
        ```

    2. Set each rule to `off`

        ```json
        {
            "rules": {
                "no-undef": "off"    
            }
        }  
        ```

    3. Run again eslint and check that no errors are reported
    4. Ship the code (Commit, Push, Merge, ...)
3. For each error iterate as the following :
    1. Enable the rule (remove the `off` line in the eslint configuration)
    2. Analyze the type of error :
        - When fixable and no breaking change could be introduced,
        then run `eslint --fix`
        - When the error is pretty obvious to fix manually,
        then correct manually all files
        - When the code is unsafe by nature or should not be changed (no tests, highly sensitive code),
        then the developer could take responsibility to ignore the rule using `// eslint-disable-line ...` and `// eslint-disable-next-line ...`
        - When the rule seems non relevant / impossible to fix in most cases, then post an issue on the `eslint-config` repository with your use case
    3. Ship the code (Commit, Push, Merge, ...)

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@captive.fr>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/eslint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/eslint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE

About Captive
-------------

![captive](https://raw.githubusercontent.com/Captive-Studio/assets/main/logo_captive_blue_avec_fond.webp)

@captive/eslint-config is maintained and funded by Captive.
The names and logos for captive are trademarks of captive-studio.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/Captive-Studio
[hire]: https://www.captive.fr/contact?utm_source=github
