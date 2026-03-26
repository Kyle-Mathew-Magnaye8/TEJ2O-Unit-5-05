/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Matthew
 * Created on: Mar 2026
 * This program will tell the distance in cm to the sonar.
*/

let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// find the distance from sonar
input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
  )
  basic.showNumber(distanceToObject)
  basic.showIcon(IconNames.Happy)
})
