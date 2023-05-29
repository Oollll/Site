// Масив з даними про товари
function filterProducts() {
  var category = document.getElementById("filter-category").value;
  var price = document.getElementById("filter-price").value;
  
  var products = document.getElementsByClassName("product");
  
  for (var i = 0; i < products.length; i++) {
    var product = products[i];
    var productCategory = product.getAttribute("data-category");
    var productPrice = parseInt(product.getAttribute("data-price"));
    
    var showProduct = true;
    
    if (category !== "all" && category !== productCategory) {
      showProduct = false;
    }
    
    if (price !== "" && productPrice > parseInt(price)) {
      showProduct = false;
    }
    
    if (showProduct) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  }
}

const productsData = [
    { id: 1, name: "Топка 1", price: 100 },
    { id: 2, name: "Топка 2", price: 200 },
    { id: 3, name: "Топка 3", price: 300 },
    { id: 4, name: "Топка 4", price: 400 },
    { id: 5, name: "Топка 5", price: 500 },
  ];
  
  // Отримуємо елементи
  const productsList = document.getElementById("products-list");
  const cartItemsList = document.getElementById("cart-items");
  
  // Змінна для зберігання обраних товарів
  const cartItems = [];
  
  // Функція для створення вікон товарів
  function createProductWindows() {
    productsData.forEach(product => {
      const productWindow = document.createElement("div");
      productWindow.classList.add("product-window");
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = "Ціна: $" + product.price;
  
      const addToCartButton = document.createElement("button");
      addToCartButton.textContent = "Додати до кошика";
      addToCartButton.addEventListener("click", () => addToCart(product));
  
      productWindow.appendChild(productName);
      productWindow.appendChild(productPrice);
      productWindow.appendChild(addToCartButton);
  
      productsList.appendChild(productWindow);
    });
  }
  
  // Функція для додавання товару до кошика
  function addToCart(product) {
    cartItems.push(product);
    updateCart();
  }
  
  // Функція для оновлення вмісту кошика
  function updateCart() {
    cartItemsList.innerHTML = "";
    cartItems.forEach(item => {
      const cartItem = document.createElement("li");
      cartItem.textContent = item.name + " - $" + item.price;
      cartItemsList.appendChild(cartItem);
    });
  }
  
  // Викликаємо функцію для створення вікон товарів
  createProductWindows();
  