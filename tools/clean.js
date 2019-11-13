const package = require('./../package.json');

const { writeFile } = require('./common');
const version = process.env.CIRCLE_TAG;

const allowedKeys = [
    "name",
    "version",
    "description",
    "main",
    "repository",
    "keywords",
    "author",
    "license",
    "bugs",
    "homepage",
    "dependencies",
    "engines"
];

Object.keys(package).forEach(
    key => allowedKeys.includes(key) || delete package[key]
);
Object.assign(package, {
    version,
    scripts: {
        test: 'echo "tests passed..."'
    }
});

writeFile('./package.json', JSON.stringify(package));
