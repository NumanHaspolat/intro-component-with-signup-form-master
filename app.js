const warning = document.querySelectorAll(".fa-circle-exclamation");
const firstNameError = document.querySelector(".f-name-error");
const firstName = document.getElementById("f-name");
const lastNameError = document.querySelector(".l-name-error");
const lastName = document.getElementById("l-name");
const emailError = document.querySelector(".email-error");
const email = document.getElementById("email");
const passError = document.querySelector(".pass-error");
const pass = document.getElementById("password");
const claimBtn = document.querySelector(".claim-btn");

claimBtn.addEventListener("click", () => {
  warning.forEach((e) => {
    if (e.parentElement.children[1].value === "") {
      e.parentElement.children[0].classList.remove("hidden");
    } else {
      e.parentElement.children[0].classList.add("hidden");
    }
  });

    localStorage.setItem("First Name", firstName.value);
    localStorage.setItem("Last Name", lastName.value);
    localStorage.setItem("Email", email.value);
    localStorage.setItem("Password", pass.value);
    

  const mailFormat = /\S+@\S+\.\S+/;
  if (firstName.value === "") {
    firstNameError.classList.remove("hidden");
    firstName.classList.add("error-border");
  } else {
    firstNameError.classList.add("hidden");
    firstName.classList.remove("error-border");
  }

  if (lastName.value === "") {
    lastNameError.classList.remove("hidden");
    lastName.classList.add("error-border");
  } else {
    lastNameError.classList.add("hidden");
    lastName.classList.remove("error-border");
  }

  if (!email.value.match(mailFormat)) {
    emailError.classList.remove("hidden");
    email.classList.add("error-border");
  } else {
    emailError.classList.add("hidden");
    email.classList.remove("error-border");
  }
  if (pass.value === "") {
    passError.classList.remove("hidden");
    pass.classList.add("error-border");
  } else {
    passError.classList.add("hidden");
    pass.classList.remove("error-border");
  }
});
