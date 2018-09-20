const fs = require('fs');

module.exports = done => {
  fs.readdir('./', 'utf8', (err, file) => {
    if (err) {
      // throw err;
      done('Something went wrong!');
    } else {
      done(file.join('\n'));
      // process.stdout.write(file.join('\n'));
      // process.stdout.write('\nprompt > ');
    }
  });
};
