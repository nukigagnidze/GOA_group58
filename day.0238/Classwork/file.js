const fs = require('fs');
const path = require('path');

const URL_ITEMS = path.join(__dirname, '../items.json');

const readItems = () => JSON.parse(fs.readFileSync(URL_ITEMS, 'utf8'));

const writeItems = (items) => fs.writeFileSync(URL_ITEMS, JSON.stringify(items, null, 2));

module.exports = { readItems, writeItems };
