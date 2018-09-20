const request = require('request');

module.exports = (done, url) => {
  request.get(url, (err, res, body) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(body);
    }
  });
};
