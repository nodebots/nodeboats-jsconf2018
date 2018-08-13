# Tips for Building The Motor-powered Nodeboat!

This build does require soldering, so ask for help if you need it.

In order to power the boat, the battery will connect directly to the ESC and share the power from the ESC to the breadboard. See the hookup diagram below. The battery has an XT60 connector that needs a matching connector soldered onto the ESC's red and black wires. Check out the sides of the XT60 for a plus (+) and a minus (-) sign with the red wire (power) lining up with the plus sign and the black wire (ground) lining up with the minus sign. Once the battery is hooked up to the ESC, you can use the power switch on the ESC to test the connection.

The following is an example hookup for using the Electronic Speed Controller (ESC):
![Arduino Nano to ESC hookup](./diagrams/Nano-HC06-ESC_bb.png)

Pin hookup:

- RXD on HC-06 <-> TX1 on Nano
- TXD on HC-06 <-> RX0 on Nano
- Orange wire on ESC <-> D10 on Nano
- Every black wire goes to the ground (GND) rail
- Every red wire goes to the power rail

Adding the servo for steering is as simple as adding three more wires to the breadboard:
![Arduino Nano with ESC and Servo hookup](./diagrams/Nano-HC06-ESC-Servo_bb.png)

Pin hookup:

- RXD on HC-06 <-> TX1 on Nano
- TXD on HC-06 <-> RX0 on Nano
- Orange wire on ESC <-> D10 on Nano
- **Yellow wire on Servo <-> D11 on Nano**
- Every black wire goes to the ground (GND) rail
- Every red wire goes to the power rail

The L-shaped connector included in the kit should be attached with one end on the top of the servo and the other end to the back of the motor. You can use glue, duct tape, or whatever method you'd like for attaching it.

## Wiring Tips

- You may notice the 5V pin on the Arduino Nano is not powering the HC-06 or any other device. This is to prevent [brownouts](https://en.wikipedia.org/wiki/Brownout_(electricity)) that can be caused by spikes in power draw from the servo or motor.

## General Tips

- Before drilling a hole in the boat hull to pass through the wires from the motor pod, it is strongly recommended that you put all of your components in the boat first, to test the bouyancy and add the appropriate amount of styrafoam to the boat.
