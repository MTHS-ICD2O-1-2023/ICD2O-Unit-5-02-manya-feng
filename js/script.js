// Copyright (c) 2024 Manya All rights reserved
//
// Created by: Manya
// Created on: Apr 2024
// This file contains the JS functions for index.html

/**
 * This function displays the slider value.
 */
function myButtonClicked() {
  positiveButtonChecked = document.getElementById('on-check').checked

  if (positiveButtonChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: Positive</p>"
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "<p>Value is: Negative</p>"
  }
}
