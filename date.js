const date = new Date();
const today = date.toString();

module.exports = done => {
  done(today);
};
