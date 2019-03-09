const package = require('./../package.json');

const { writeFile } = require('./common');

package.dependencies = Object.assign(package.dependencies || {}, package.peerDependencies);

writeFile('./package.json', JSON.stringify(package, null, 4));
