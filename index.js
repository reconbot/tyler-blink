'use strict';
const five = require('johnny-five');

let board = new five.Board();
board.on('ready', function() {
  let led = new five.Led(11);
  let servo = new five.Servo({
    pin: 3,
    range: [7, 180] // this tiny servo is kinda shitty
  });
  let pot = new five.Sensor('A0');
  let button = new five.Button(7);

  servo.to(0);

  // pot.on('change',function(brightness){
  //   led.brightness(this.scaleTo(0,255));
  // });

  var toggle = false;
  button.on('press', function() {
    servo.to(toggle ? 0 : 180);
    toggle = !toggle;
    led.on().fadeOut(700);
  });

  this.repl.inject({
    led,
    servo,
    pot,
    button
  });
});
