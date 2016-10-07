var path = require('path');

var VERSION = require('./package.json').version;
var BASE_DIR = path.join(__dirname, 'bin', 'v' + VERSION);

function binFilePath(arch, platform) {
  if (arch !== 'x64') {
    return null;
  }

  switch (platform) {
    case 'darwin':
      return path.join(BASE_DIR, 'nagome_darwin_amd64');
    case 'linux':
      return path.join(BASE_DIR, 'nagome_linux_amd64');
    case 'win32':
      return path.join(BASE_DIR, 'nagome_windows_amd64.exe');
    default:
      return null;
  }
}

module.exports = binFilePath(process.arch, process.platform);
