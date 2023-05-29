// Масив з даними про замовлення
const ordersData = [
    { id: 1, name: "Замовлення 1", status: "pending" },
    { id: 2, name: "Замовлення 2", status: "processing" },
    { id: 3, name: "Замовлення 3", status: "completed" },
    { id: 4, name: "Замовлення 4", status: "pending" },
    { id: 5, name: "Замовлення 5", status: "processing" },
  ];
  
  // Отримуємо елемент таблиці
  const ordersTable = document.getElementById("orders-table");
  
  // Функція для заповнення таблиці замовлень
  function populateOrdersTable() {
    // Очищаємо таблицю
    ordersTable.innerHTML = "";
  
    // Перевіряємо наявність замовлень
    if (ordersData.length === 0) {
      const emptyMessage = document.createElement("p");
      emptyMessage.textContent = "Немає доступних замовлень.";
      emptyMessage.classList.add("empty-message");
      ordersTable.appendChild(emptyMessage);
      return;
    }
  
    // Додаємо заголовок таблиці
    const tableHeaderRow = document.createElement("tr");
    const idHeader = document.createElement("th");
    idHeader.textContent = "ID";
    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Назва";
    const statusHeader = document.createElement("th");
    statusHeader.textContent = "Статус";
    tableHeaderRow.appendChild(idHeader);
    tableHeaderRow.appendChild(nameHeader);
    tableHeaderRow.appendChild(statusHeader);
    ordersTable.appendChild(tableHeaderRow);
  
    // Додаємо дані про замовлення
    ordersData.forEach(order => {
      const tableRow = document.createElement("tr");
      const idCell = document.createElement("td");
      idCell.textContent = order.id;
      const nameCell = document.createElement("td");
      nameCell.textContent = order.name;
      const statusCell = document.createElement("td");
      statusCell.textContent = order.status;
      statusCell.classList.add("status-" + order.status);
      tableRow.appendChild(idCell);
      tableRow.appendChild(nameCell);
      tableRow.appendChild(statusCell);
      ordersTable.appendChild(tableRow);
    });
  }
  
  // Викликаємо функцію для заповнення таблиці замовлень
  populateOrdersTable();
  