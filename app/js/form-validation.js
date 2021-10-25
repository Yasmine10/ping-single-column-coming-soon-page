let form = document.getElementById("form");
let email = document.getElementById("email");
let errorMessage = document.getElementById("error-email");

// validating email value
form.addEventListener("submit", (e) => {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  email.classList.remove("invalid");

  if(email.value === "" || email.value == null)  {
    e.preventDefault();
    errorMessage.innerHTML = "Whoops! It looks like you forgot to add your email";
    email.classList.add("invalid");
    return false;

  } else if(!email.value.match(emailformat)) {
    e.preventDefault();
    errorMessage.innerHTML = "Please enter a valid email address";
    email.classList.add("invalid");
    return false;

  } else {
    return true;
  }
})