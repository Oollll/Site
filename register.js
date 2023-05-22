// Отримуємо елементи форми реєстрації
const registerForm = document.getElementById("register-form");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");

// Обробник події для подання форми реєстрації
function handleRegisterFormSubmit(event) {
  event.preventDefault(); // Перешкоджаємо відправленню форми

  // Отримуємо значення полів форми
  const username = usernameInput.value;
  const email = emailInput.value;
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Валідація введених даних
  if (username.trim() === "" || email.trim() === "" || password.trim() === "" || confirmPassword.trim() === "") {
    alert("Будь ласка, заповніть усі поля форми.");
    return;
  }

  if (password !== confirmPassword) {
    alert("Паролі не співпадають.");
    return;
  }

  // Виконуємо логіку реєстрації
  // Тут можна додати код для збереження даних користувача

  // Очищаємо поля форми
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
  confirmPasswordInput.value = "";

  alert("Ви успішно зареєстровані!");
}

// Додаємо обробник події для подання форми реєстрації
registerForm.addEventListener("submit", handleRegisterFormSubmit);
