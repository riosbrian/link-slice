const API_URL = import.meta.env.VITE_API_URL;

export const getUserUrls = async () => {
  const res = await fetch(`${API_URL}/api/links`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const sliceUrl = async (urlInfo) => {
  const res = await fetch(`${API_URL}/api/slice`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(urlInfo),
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const deleteUrl = async (linkID) => {
  const res = await fetch(`${API_URL}/api/${linkID}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};
