// Set ROBOT_NAME to something unique
#define ROBOT_NAME "RandomBot"

// If you haven't configured your device before use this
#define BLUETOOTH_SPEED 9600 //This is the default baudrate that HC-06 uses
// If you are modifying your existing configuration, use this:
// #define BLUETOOTH_SPEED 57600

#include <SoftwareSerial.h>

// Swap RX/TX connections on bluetooth chip
//   Pin 10 --> Bluetooth TX
//   Pin 11 --> Bluetooth RX
SoftwareSerial mySerial(10, 11); // RX, TX

/*
  The possible baudrates are:
    AT+UART=1200,0,0 -------1200
    AT+UART=2400,0,0 -------2400
    AT+UART=4800,0,0 -------4800
    AT+UART=9600,0,0 -------9600 - Default for hc-06
    AT+UART=19200,0,0 ------19200
    AT+UART=38400,0,0 ------38400
    AT+UART=57600,0,0 ------57600 - Johnny-five speed
    AT+UART=115200,0,0 -----115200
    AT+UART=230400,0,0 -----230400
    AT+UART=460800,0,0 -----460800
    AT+UART=921600,0,0 -----921600
    AT+UART=1382400,0,0 ----1382400
*/

void setup() {
  Serial.begin(9600);

  Serial.println("Starting config");
  mySerial.begin(BLUETOOTH_SPEED);
  delay(1000);

  // Should respond with OK
  mySerial.print("AT\r\n");
  waitForResponse();

  // Should respond with its version
  mySerial.print("AT+VERSION\r\n");
  waitForResponse();

  // Should respond with default password
  mySerial.print("AT+PSWD\r\n");
  waitForResponse();

  // Set the name to ROBOT_NAME
  String rnc = String("AT+NAME=") + String(ROBOT_NAME) + String("\r\n"); 
  mySerial.print(rnc);
  waitForResponse();

  // Set baudrate to 57600
  mySerial.print("AT+UART=57600,0,0\r\n");
  waitForResponse();

  Serial.println("Done!");
}

void waitForResponse() {
    delay(1000);
    while (mySerial.available()) {
      Serial.write(mySerial.read());
    }
    Serial.write("\n");
}

void loop() {}
