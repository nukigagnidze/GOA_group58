// 🧠 ფუნქცია მონაცემის შესანახად
export function store(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// 🧠 ფუნქცია მონაცემის წამოსაღებად
export function get(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}
