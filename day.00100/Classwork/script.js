// 1
function manualFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1; 
}

// 2
function manualReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    let startIndex = 0;

    if (initialValue === undefined) {
        if (array.length === 0) {
            throw new TypeError("Reduce of empty array with no initial value");
        }
        accumulator = array[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
}

// 3
function filterEvenIndexNames(names) {
    return names.filter((_, index) => index % 2 === 0);
}

// 4
function doubleOddIndexNumbers(numbers) {
    return numbers.map((num, index) => (index % 2 !== 0 ? num * 2 : num));
}

// 5
function calculateTotalOrder(orders) {
    return orders
        .filter(order => !order.cancelled) 
        .map(order => order.price * order.quantity) 
        .reduce((total, amount) => total + amount, 0);
}

// 6
function manageInventory(products) {
    const inStock = products.filter(product => product.stock > 0);
    
    products.forEach(product => {
        if (product.stock === 0) {
            console.warn(`პროდუქტი '${product.name}' ამოწურულია!`);
        }
    });
    
    return inStock;
}

// 7
function findInactiveUsers(users, inactiveDays = 30) {
    const threshold = Date.now() - inactiveDays * 24 * 60 * 60 * 1000;
    return users.filter(user => new Date(user.lastActive).getTime() < threshold);
}

function firstInactiveUserIndex(users, inactiveDays = 30) {
    const threshold = Date.now() - inactiveDays * 24 * 60 * 60 * 1000;
    return users.findIndex(user => new Date(user.lastActive).getTime() < threshold);
}

function hasInactiveUsers(users, inactiveDays = 30) {
    const threshold = Date.now() - inactiveDays * 24 * 60 * 60 * 1000;
    return users.some(user => new Date(user.lastActive).getTime() < threshold);
}


// 8
function allTasksCompleted(tasks) {
    return tasks.every(task => task.status === "დასრულებული");
}

function updateTaskStatus(tasks, newStatus) {
    return tasks.map(task => ({ ...task, status: newStatus }));
}

// 9
function calculateMonthlyBilling(users) {
    return users
        .filter(user => user.active) 
        .map(user => user.fee - user.discount + user.penalty) 
        .reduce((total, bill) => total + bill, 0); 
}