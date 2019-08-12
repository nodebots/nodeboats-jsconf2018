const {Board, Led} = require('johnny-five');

const board = new Board({
  port: '', // path to bluetooth connection, i.e. /dev/tty.ROBOT_NAME-SPPDev or COMX
});

board.on('ready', () => {
  const led = new Led(13); // use built-in led on Arduino
  led.blink();
});

board.on('error', error => {
  console.error(error);
  process.exit(1);
});
