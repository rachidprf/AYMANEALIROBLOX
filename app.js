
// API URL
const API_URL = "https://script.google.com/macros/s/AKfycbxq7SovtpearRUX2g6QrJuAZ0IxQUWdtO3uoThOgFjPPStw9AaRkYVnmjtxwtLi9rBHlA/exec";

// Helpers

// ====== HELPERS ======
async function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

// ====== API ======
async function apiGetProducts() {
  const res = await fetch(API_URL, { method: "GET" });
  if (!res.ok) throw new Error("GET échoué");
  const data = await res.json();
  // data doit contenir __row pour chaque produit (renvoyé par doGet)
  return Array.isArray(data) ? data : [];
}

async function apiUpsertProduct(record) {
  const form = new FormData();
  form.append("route", "product");
  Object.entries(record).forEach(([k, v]) => form.append(k, v ?? ""));
  const res = await fetch(API_URL, { method: "POST", body: form });
  if (!res.ok) throw new Error("POST upsert échoué");
  return res.json().catch(() => ({ success: true }));
}

// ⚠️ CORRECTION CRITIQUE : suppression par POST (et accepte id OU row)
async function apiDeleteProduct(id, row) {
  const form = new FormData();
  form.append("route", "delete");
  if (id)  form.append("id", id);
  if (row) form.append("row", row); // fallback robuste si id vide
  const res = await fetch(API_URL, { method: "POST", body: form });
  if (!res.ok) throw new Error("POST delete échoué");
  return res.json();
}

async function apiPostOrder(order) {
  const form = new FormData();
  form.append("route", "commande");
  Object.entries(order).forEach(([k, v]) => form.append(k, v ?? ""));
  const res = await fetch(API_URL, { method: "POST", body: form });
  if (!res.ok) throw new Error("POST commande échoué");
  return res.json().catch(() => ({ success: true }));
}
