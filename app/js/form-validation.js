// https://www.freecodecamp.org/news/learn-javascript-form-validation-by-making-a-form/

console.log("hello");

let form = document.getElementById("form");
let email = document.getElementById("email");
let errorMessage = document.getElementById("error-email");

let engine = (id, message) => {
  if(id.value.trim() === "") {
    errorMessage.innerHTML = message;
    id.style.border = "1px solid red";
  } else {
    errorMessage.innerHTML = "";
  }
}

form.addEventListener("submit", (e) => {
  if(email.value.trim() === "" || email.value == null)  {
    e.preventDefault();
    errorMessage.innerHTML = "Email is required";
    email.classList.add("invalid");
  }
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email.value.match(emailformat)) {
    e.preventDefault();
    errorMessage.innerHTML = "Please enter a valid email address";
    email.classList.add("invalid");
  }
})