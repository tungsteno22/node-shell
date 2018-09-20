const fs = require('fs');

module.exports = (done, fileName) => {
  fs.readFile(`./${fileName}`, 'utf8', (err, file) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(file);
    }
  });
};
