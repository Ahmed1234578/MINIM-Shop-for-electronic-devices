// Sample order data
let orders = [
    { id: 12345, user: 'Ahmed Khaled', date: '2024-08-01', status: 'Pending' }
];

// Function to load orders into the table
function loadOrders() {
    const tbody = document.querySelector('#ordersTable tbody');
    tbody.innerHTML = '';
    orders.forEach((order, index) => {
        const row = `
            <tr>
                <td>${order.id}</td>
                <td>${order.user}</td>
                <td>${order.date}</td>
                <td>${order.status}</td>
                <td>
                    <button type="button" onclick="ViewOrderFun(${index})">View</button>
                    <button type="button" onclick="UpdateStatusFun(${index})">Update Status</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to view order details
function ViewOrderFun(index) {
    const order = orders[index];
    alert(`Order Details:
    ID: ${order.id}
    User: ${order.user}
    Date: ${order.date}
    Status: ${order.status}`);
}

// Function to update order status
function UpdateStatusFun(index) {
    const newStatus = prompt('Enter new status (e.g., Pending, Shipped, Delivered):');
    if (newStatus) {
        orders[index].status = newStatus;
        loadOrders();
    }
}

// Load orders when the page loads
window.onload = loadOrders;