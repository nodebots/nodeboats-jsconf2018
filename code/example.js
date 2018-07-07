const five = require('johnny-five');
const keypress = require('keypress');

let esc;
let rudder;
let cur_pos = 90;
let rpos = 90;
const MAX = 130;
const MIN = 75;
const STOP = 90;

// set up the input
process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.setRawMode(true);

console.info('Setting up. Attempting to connect to Arduino')

const board = new five.Board({port: process.argv[2]});

const instructions = '↑↓ arrows for ESC speed, ← → arrows for rudder angle. SPACE to stop';

board.on('ready', () => {
  console.log(instructions)

  esc = new five.Servo(9);
  esc.to(STOP);
  cur_pos = STOP;

  rudder = new five.Servo(10);
  rudder.center();
  rpos = 90;
});

board.on('error', (err) => {
  console.log(err.message);
  process.exit();
});

process.stdin.on('keypress', function(chunk, key) {
  // process the keypresses
  if (key) {
    switch (key.name) {
      case 'left':
        rpos = (rpos < 40) ? 45 : rpos - 5;
        break;
      case 'right':
        rpos = (rpos > 140) ? 135 : rpos + 5;
        break;
      case 'up':
        cur_pos = (cur_pos >= MAX) ? MAX : cur_pos + 1;
        break;
      case 'down':
        cur_pos = (cur_pos <= MIN) ? MIN : cur_pos - 1;
        break;
      case 'space':
        console.log('stopping');
        esc.to(STOP);
        cur_pos = STOP;
        break;
      case 'q':
        console.log('Exiting');
        esc.stop();
        process.exit();
      default:
        console.log('Unknown key');
        console.log(instructions);
    }
  }
  console.log(`ESC: ${cur_pos} RUD: ${rpos}`);
  esc.to(cur_pos);
  rudder.to(rpos);
});
