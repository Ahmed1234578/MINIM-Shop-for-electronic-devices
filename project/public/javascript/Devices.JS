// Sample device data
let devices = [
    { name: 'Lenovo IdeaPad', category: 'Laptop', price: 500 }
];

// Function to load devices into the table
function loadDevices() {
    const tbody = document.querySelector('#devicesTable tbody');
    tbody.innerHTML = '';
    devices.forEach((device, index) => {
        const row = `
            <tr>
                <td>${device.name}</td>
                <td>${device.category}</td>
                <td>$${device.price}</td>
                <td>
                    <button type="button" onclick="EditDeviceFun(${index})">Edit</button>
                    <button type="button" onclick="DeleteDeviceFun(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to add a new device
function AddDeviceFun() {
    const name = prompt('Enter device name:');
    const category = prompt('Enter device category:');
    const price = parseFloat(prompt('Enter device price:'));

    if (name && category && !isNaN(price)) {
        devices.push({ name, category, price });
        loadDevices();
    }
}

// Function to edit a device
function EditDeviceFun(index) {
    const device = devices[index];
    const newName = prompt('Enter new device name:', device.name);
    const newCategory = prompt('Enter new device category:', device.category);
    const newPrice = parseFloat(prompt('Enter new device price:', device.price));

    if (newName && newCategory && !isNaN(newPrice)) {
        devices[index] = { name: newName, category: newCategory, price: newPrice };
        loadDevices();
    }
}

// Function to delete a device
function DeleteDeviceFun(index) {
    if (confirm('Are you sure you want to delete this device?')) {
        devices.splice(index, 1);
        loadDevices();
    }
}

// Load devices when the page loads
window.onload = loadDevices;