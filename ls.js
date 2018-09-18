const fs = require('fs');

module.exports = () => {
  fs.readdir('./', 'utf8', (err, file) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(file.join('\n'));
      process.stdout.write('\nprompt > ');
    }
  });
};
