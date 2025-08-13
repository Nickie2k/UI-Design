"use strict";

const modal = document.querySelector(".modal"); //* Gather the class list into variable
const btnCloseModal = document.querySelector(".close-modal"); //* Targeted the close button
const btnOpenModal = document.querySelectorAll(".show-modal"); //* Target the modal button
const overlay = document.querySelector(".overlay"); //* Target the background blur class

const openModal = function () {
  console.log("OPEN MODAL BUTTON CLICKED");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  console.log("CLOSE MODAL BUTTON CLICKED");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);

// 2 Predefined functions that target the OpenModal and CloseModal
// each function will either add or remove the word "hidden" out of the class name, same as for the overlay class

//! ------------------------------------------------------------------------------------------------------------------------------------------------------ /

// Whatever key is pressed, cl the key info
// if key = escape then call the closeModal function()
document.addEventListener("keydown", function (randomKey) {
  console.log(randomKey.key);

  if (randomKey.key === "Escape") {
    closeModal();
  }
});
