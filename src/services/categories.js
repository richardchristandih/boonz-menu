import api from "./api";

/** Returns [{ _id?, name }] */
export async function listCategories() {
  try {
    const res = await api.get("/categories");
    const arr = Array.isArray(res.data) ? res.data : res.data?.items || [];
    return arr.map((c) => ({ _id: c._id || c.id, name: c.name || "" }));
  } catch {
    return [];
  }
}
