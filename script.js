/* script.js */

// Отримуємо елементи навігації
const navLinks = document.querySelectorAll('nav ul li a');

// Отримуємо елемент, в якому буде відображатися зміст сторінки
const contentSection = document.getElementById('content');

// Додаємо обробник події для навігації
navLinks.forEach(link => {
  link.addEventListener('click', navigate);
});

// Функція для навігації між сторінками
function navigate(event) {
  event.preventDefault();
  const targetPage = event.target.getAttribute('href');
  
  // Завантажуємо контент сторінки за допомогою AJAX
  const xhr = new XMLHttpRequest();
  xhr.open('GET', targetPage, true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      contentSection.innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Додаткові скрипти для вашого проекту

