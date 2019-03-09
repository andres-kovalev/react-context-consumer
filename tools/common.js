const fs = require('fs');

module.exports = {
    writeFile: (path, data) => fs.writeFileSync(path, data)
};
