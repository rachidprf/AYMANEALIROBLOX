
// API URL
const API_URL = "https://script.google.com/macros/s/AKfycbxq7SovtpearRUX2g6QrJuAZ0IxQUWdtO3uoThOgFjPPStw9AaRkYVnmjtxwtLi9rBHlA/exec";

// Helpers
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

async function apiGetProducts() {
  const res = await fetch(API_URL, { method: 'GET' });
  if (!res.ok) throw new Error('GET échoué');
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function apiUpsertProduct(record) {
  const form = new FormData();
  form.append('route', 'product');
  Object.entries(record).forEach(([k,v]) => form.append(k, v ?? ''));
  const res = await fetch(API_URL, { method: 'POST', body: form });
  if (!res.ok) throw new Error('POST échoué');
  return res.json().catch(() => ({success:true}));
}

async function apiDeleteProduct(id) {
  const res = await fetch(`${API_URL}?id=${encodeURIComponent(id)}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('DELETE échoué');
  return res.json().catch(() => ({success:true}));
}

async function apiPostOrder(order) {
  const form = new FormData();
  form.append('route', 'commande');
  Object.entries(order).forEach(([k,v]) => form.append(k, v ?? ''));
  const res = await fetch(API_URL, { method: 'POST', body: form });
  if (!res.ok) throw new Error('POST commande échoué');
  return res.json().catch(() => ({success:true}));
}
