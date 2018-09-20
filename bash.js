const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');
const curl = require('./curl');
const date = require('./date');
const echo = require('./echo');

const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const [cmd, arg] = data
    .toString()
    .trim() // remove the newline
    .split(' ');

  switch (cmd) {
    case 'pwd':
      pwd(done);
      break;

    case 'ls':
      ls(done);
      break;

    case 'cat':
      cat(done, arg);
      break;

    case 'curl':
      curl(done, arg);
      break;

    case 'date':
      date(done);
      break;

    case 'echo':
      echo(done, arg);
      break;

    default:
      done(`command not found: ${cmd}`);
  }
});
