const five = require('johnny-five');

const board = new five.Board({
  port: '', // path to bluetooth connection, i.e. /dev/tty.ROBOT_NAME-SPPDev or COMX
});

board.on('ready', () => {
  const led = new five.Led(13); // use built-in led on Arduino
  led.blink();
});
