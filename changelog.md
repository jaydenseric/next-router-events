# next-router-events changelog

## 2.1.0

- Updated dependencies.
- Updated Next.js peer dependency range to support v6.
- New ESLint config with [`eslint-config-env`](https://npm.im/eslint-config-env).
- Smarter package scripts.
- Compact package `repository` field.
- Setup Travis CI.
- Readme tweaks, with some badges removed and a new Travis CI status badge added.

## 2.0.0

- Updated dependencies and peer dependencies.
- No longer using Babel.
- Simplified project structure with `index.js` at the project root, allowing removal of the `package.json` `main` field.
- More efficient logic.
- Removed support for the `onAppUpdated` hook deprecated in [`next@5.0.1-canary.7`](https://github.com/zeit/next.js/releases/tag/5.0.1-canary.7), fixing [#1](https://github.com/jaydenseric/next-router-events/issues/1).
- Prettier markdown.

## 1.0.1

- Added a changelog.
- Fixed the `lib` directory not being Git ignored.

## 1.0.0

- Initial release.
