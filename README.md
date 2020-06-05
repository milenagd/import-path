# import-path

This project has the goal of changing the relative import path when import path goes up the directory tree by more than 2 levels.

Example:

You have a directory with the following structure:

```
example
├── a
│   └── b
│       └── c
│           └── d
│               └── x.js
└── y.js
```

```js
// file x.js
import { y } from "../../../../a";
```

After running your program you should have

```js
import { y } from "/y.js";
```

Note: Assume that the root of the directory (i.e. "/") is /a

## Get Start

1. Install the dependencies: `npm install` or `yarn install`;

2. Run `npm run import-path [root](optional)`.
   If you don't pass the root, by default it will be the root of the project.

## Example

The folder **example** contains the files: x.js and x-backup.js

1. Run `npm run import-path src/example`
   Then you will be able to see changes, comparing the new result of x.js and x-backup.js

## Tests

1. In order to see the tests, run: `npm run test` or `yarn test`;
