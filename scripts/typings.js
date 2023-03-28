const dts = require('dts-bundle');
const { join } = require('path');

const cwd = process.cwd();
const pkgJSON = require(join(cwd, 'package.json'));

/* index.js */
try {
  const name = pkgJSON.name;
  dts.bundle({
    main: join(cwd, 'es/index.d.ts'),
    name,
    out: join(cwd, 'typings/index.d.ts'),
  });
  console.log(`index.d.ts typings is DONE`);
} catch (e) {
  throw Error(e);
}
