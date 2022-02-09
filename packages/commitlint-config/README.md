<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=# Captive Commitlint configuration _(${name})_) -->
# Captive Commitlint configuration _(@captive/commitlint-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=> ${description}&unknownTxt= ) -->
> Commitlint configuration presets
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=```console\nnpm install --save-dev ${name} @commitlint/cli\n```) -->
```console
npm install --save-dev @captive/commitlint-config @commitlint/cli
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

In the `package.json` of your project

```json
{
    "commitlint": {
        "extends": ["@captive/commitlint-config"],
        "rules": {}
    }
}
```

In the `.husky/pre-commit` of your project

```shell
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm exec --no -- commitlint --edit $1
```

## License
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@captive.fr>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/commitlint-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/commitlint-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKGJSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE
