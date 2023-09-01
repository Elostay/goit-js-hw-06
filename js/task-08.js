const mainForm = document.querySelector(".login-form");
const email = document.querySelector('input[type="email"]');
const password = document.querySelector('input[type="password"]');

mainForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const { email, password } = form.elements;

  if (form.email.value === "" || form.password.value === "") {
    alert("всі поля повинні бути заповнені");
  }
  const userInfo = {
    email: email.value,
    password: password.value,
  };
  console.log(userInfo);
  form.reset();
  //   const formData = new FormData(form);
  //   formData.forEach((value, name) => {
  //     console.log(name);
  //     console.log(value);
  //   });
}
