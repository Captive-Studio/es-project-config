<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive Commitlint configuration _(${name})_) -->
# Captive Commitlint configuration _(@captive/commitlint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> Commitlint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Features

- ✅ Validates standard git message title

    ```shell
    <gitmoji>[optional scope:] <description>

    [optional body]

    [optional footer(s)]

    ```

- 😀 Gitmoji support

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @captive/commitlint-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

`/package.json`
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```json\n{\n  "commitlint": {\n    "extends": ["${name}"]\n  }\n}\n```) -->
```json
{
  "commitlint": {
    "extends": ["@captive/commitlint-config"]
  }
}
```
<!-- AUTO-GENERATED-CONTENT:END -->

Ensure the `commitlint` is setup on husky commit message hook (default `.husky/commit-msg`)

```shell
# <git_hooks_directory>/commit-msg

npm exec -- commitlint --edit $1
```

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@captive.fr>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/commitlint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/commitlint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE

About Captive
-------------

![captive](https://raw.githubusercontent.com/Captive-Studio/assets/main/logo_captive_blue_avec_fond.webp)

@captive/commitlint-config is maintained and funded by Captive.
The names and logos for captive are trademarks of captive-studio.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/Captive-Studio
[hire]: https://www.captive.fr/contact?utm_source=github
