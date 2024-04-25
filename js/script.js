// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

const randomNumber = Math.floor(Math.random() * 6) + 1
console.log(randomNumber)

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  numberGuessed = document.getElementById('positive-number').checked

  if (numberGuessed == true) {
    document.getElementById("number-answer").innerHTML =
      "The random number is: " + randomNumber + "."
  } else {
    numberGuessed = (-1 * randomNumber)
    document.getElementById("number-answer").innerHTML =
      "The random number is: - " + randomNumber + "."
  }
}
