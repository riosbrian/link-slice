const API_URL = import.meta.env.VITE_API_URL;

export const login = (authUrl) => {
  try {
    window.location.href = authUrl;
  } catch (error) {
    return error;
  }
};

export const getLoggedUser = async () => {
  try {
    const res = await fetch(`${API_URL}/api/auth/user`, {
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
    const res = await fetch(`${API_URL}/api/auth/logout`, {
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
