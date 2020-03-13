# @pushrocks/smartarchive
work with archives

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smartarchive)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smartarchive)
* [github.com (source mirror)](https://github.com/pushrocks/smartarchive)
* [docs (typedoc)](https://pushrocks.gitlab.io/smartarchive/)

## Status for master
[![pipeline status](https://gitlab.com/pushrocks/smartarchive/badges/master/pipeline.svg)](https://gitlab.com/pushrocks/smartarchive/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smartarchive/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smartarchive/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smartarchive.svg)](https://www.npmjs.com/package/@pushrocks/smartarchive)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smartarchive/badge.svg)](https://snyk.io/test/npm/@pushrocks/smartarchive)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

Use TypeScript for best in class instellisense.

```javascript
import * as smartarchive from 'smartarchive';
smartarchive
  .get({
    from: 'https://example.com/example.zip',
    toPath: '/some/local/absolute/path'
  })
  .then(/*...*/);
```

For further information read the linked docs at the top of this README.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
> | By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy.html)

[![repo-footer](https://pushrocks.gitlab.io/assets/repo-footer.svg)](https://push.rocks)


## Contribution

We are always happy for code contributions. If you are not the code contributing type that is ok. Still, maintaining Open Source repositories takes considerable time and thought. If you like the quality of what we do and our modules are useful to you we would appreciate a little monthly contribution: You can [contribute one time](https://lossless.link/contribute-onetime) or [contribute monthly](https://lossless.link/contribute). :)

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
