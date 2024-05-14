// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

"use strict"

function myButtonClicked() {
  /**
 * This function displays the slider value.
 */

  const randomNumber = Math.floor(Math.random() * 6) + 1
  console.log(randomNumber)
  const number = document.getElementById('radio').checked
  alwaysOnButtonChecked = document.getElementById('on-check').checked

  if (alwaysOnButtonChecked == true) {
    document.getElementById("positive-number").innerHTML =
      "The random number is: " + randomNumber + "."
  } else {
    randomNumber2 = (-1 * randomNumber)
    document.getElementById("negative-number").innerHTML =
      "The random number is: " + randomNumber2 + "."
  }
}
