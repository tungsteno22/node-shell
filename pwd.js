let directory = process.cwd();

module.exports = () => {
  process.stdout.write(directory);
  process.stdout.write('\nprompt > ');
};
