// Exercise 6

// Get the input fields
const inputName = document.getElementById("fName");
const inputEmail = document.getElementById("fEmail");
const inputAddress = document.getElementById("fAddress");
const inputLastName = document.getElementById("fLastN");
const inputPassword = document.getElementById("fPassword");
const inputPhone = document.getElementById("fPhone");
const form = document.querySelector("form");

const errorName = document.getElementById("errorName");

const errorAddress = document.getElementById("errorAddress");
const errorLastName = document.getElementById("errorLastN");
const errorPassword = document.getElementById("errorPassword");
const errorPhone = document.getElementById("errorPhone");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
  });
}

const validate = () => {
  validateNameLasName(inputName, errorName);
  validateNameLasName(inputLastName, errorLastName);
  validateEmail();
  validatePassword();
  validateAdress();
  validatePhone();
};

const validateNameLasName = (input, errorClass) => {
  if (input.value.trim() == "" || input.value.length < 3) {
    input.classList.add("is-invalid");
    errorClass.textContent =
      "This field is required and must have, at least, 3 characters";
  } else if (/\d/.test(input.value)) {
    input.classList.add("is-invalid");
    errorClass.textContent = "The field cannot contain numbers";
  } else {
    input.classList.remove("is-invalid");
    input.classList.add("is-valid");
  }
};

const validateEmail = () => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(inputEmail.value)) {
    inputEmail.classList.add("is-invalid");
  } else {
    inputEmail.classList.remove("is-invalid");
    inputEmail.classList.add("is-valid");
  }
};
const validatePassword = () => {};
const validateAdress = () => {};
const validatePhone = () => {};
