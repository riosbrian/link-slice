const GET_USER = import.meta.env.VITE_API_DEV_URL_USER;
const LOGOUT = import.meta.env.VITE_API_DEV_URL_LOGOUT;

export const login = (authUrl) => {
  try {
    // window.open(authUrl, "_self");
    window.location.href = authUrl;
  } catch (error) {
    return error;
  }
};

export const getLoggedUser = async () => {
  try {
    const res = await fetch(GET_USER, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    return error;
  }
};

export const logout = async () => {
  try {
    const res = await fetch(LOGOUT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.message);
    return data;
  } catch (error) {
    return error;
  }
};
