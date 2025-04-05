const getElementByIdManual = function(id) {
    const allElements = document.querySelectorAll('*'); // Query all elements in the DOM
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].id === id) {
            return allElements[i];
        }
    }
    return null;
};

const getElementsByClassName = function(className) {
    const allElements = document.querySelectorAll('*'); // Query all elements in the DOM
    const elements = [];
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].classList.contains(className)) {
            elements.push(allElements[i]);
        }
    }
    return elements.length === 1 ? elements[0] : elements;
};

const getElementsByTagName = function(tagName) {
    const allElements = document.querySelectorAll(tagName); // Query all elements in the DOM
    return allElements.length === 1 ? allElements[0] : allElements;
};

const manualQuerySelector = function(searchQuery) {
    if (searchQuery[0] === "#") {
        return getElementByIdManual(searchQuery.slice(1));
    } else if (searchQuery[0] === ".") {
        return getElementsByClassName(searchQuery.slice(1));
    } else {
        return getElementsByTagName(searchQuery);
    }
};
