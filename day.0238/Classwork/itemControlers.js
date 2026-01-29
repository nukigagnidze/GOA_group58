const { readItems, writeItems } = require('../utils/file');

exports.getItems = (req, res) => {
  const items = readItems();
  res.json(items);
};

exports.addItem = (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ message: 'Text is required' });

  const items = readItems();
  const newItem = { id: Date.now(), text };
  items.push(newItem);
  writeItems(items);
  res.json(newItem);
};

exports.deleteItem = (req, res) => {
  const itemId = parseInt(req.params.id);
  let items = readItems();
  const newItems = items.filter(item => item.id !== itemId);

  if (items.length === newItems.length) {
    return res.status(404).json({ message: 'Item not found' });
  }

  writeItems(newItems);
  res.json({ message: 'Item deleted' });
};
