//output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remoce the newline
  //const fs = require('fs');
  var fs = require('fs');
  var path = require('path');

  if (cmd === 'pwd') {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
    //process.stdout.write(path.basename());
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
