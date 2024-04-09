const SLICE_URL = import.meta.env.VITE_API_DEV_URL_SLICE;
const GET_LINKS = import.meta.env.VITE_API_DEV_URL_LINKS;

export const getUserUrls = async () => {
  const res = await fetch(GET_LINKS, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message);
  return data;
};

export const sliceUrl = async (urlInfo) => {
  const res = await fetch(SLICE_URL, {
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
  const res = await fetch(`http://localhost:8080/api/${linkID}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
  });
  const data = await res.json();

  if (!res.ok) throw new Error(data.message);
  return data;
};
