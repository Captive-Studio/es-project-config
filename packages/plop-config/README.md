<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=# Captive Plop Generators _(${name})_) -->
# Captive Plop Generators _(@captive/plop-config)_
<!-- AUTO-GENERATED-CONTENT:END -->

[![NPM Version][package-version-svg]][package-url]
[![License][license-image]][license-url]

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=> ${description}&unknownTxt= ) -->
> Plop generators
<!-- AUTO-GENERATED-CONTENT:END -->

## Installation

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=```console\nnpm install --save-dev ${name}\n```) -->
```console
npm install --save-dev @captive/plop-config
```
<!-- AUTO-GENERATED-CONTENT:END -->

## Usage

### Zero configuration

This configuration will detect generators from dependencies.

```ts
// plopfile.mjs
import plopPluginAuto from '@captive/plop-config';

export default async function plopConfig(/** @type {import('plop').NodePlopAPI} */ plop) {
  await plopPluginAuto(plop);
}
```

### Manual configuration

```ts
// plopfile.mjs
import { plopPlugin } from '@captive/plop-config';

export default async function plopConfig(/** @type {import('plop').NodePlopAPI} */ plop) {
  await plopPlugin({
    // react: true | false,
    // vue: true | false,
  })(plop);
}
```

**Features :**

UI Components :

- `Vue` component generator

Application Store :

- `Pinia` store module generator

Documentation

- `Tech Dive In` document generator

## License
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[${license}][license-url] © ${author}) -->
[MIT][license-url] © Julien Polo <julien.polo@captive.fr>
<!-- AUTO-GENERATED-CONTENT:END -->

<!-- VARIABLES -->

<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-version-svg]: https://img.shields.io/npm/v/${name}.svg?style=flat-square) -->
[package-version-svg]: https://img.shields.io/npm/v/@captive/plop-config.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[package-url]: https://www.npmjs.com/package/${name}) -->
[package-url]: https://www.npmjs.com/package/@captive/plop-config
<!-- AUTO-GENERATED-CONTENT:END -->
<!-- AUTO-GENERATED-CONTENT:START (PKG_JSON:template=[license-image]: https://img.shields.io/badge/license-${license}-green.svg?style=flat-square) -->
[license-image]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
<!-- AUTO-GENERATED-CONTENT:END -->
[license-url]: ../../LICENSE

About Captive
-------------

![captive](https://raw.githubusercontent.com/Captive-Studio/assets/main/logo_captive_blue_avec_fond.webp)

@captive/plop-config is maintained and funded by Captive.
The names and logos for captive are trademarks of captive-studio.

We love open source software!
See [our other projects][community] or
[hire us][hire] to design, develop, and grow your product.

[community]: https://github.com/Captive-Studio
[hire]: https://www.captive.fr/contact?utm_source=github
