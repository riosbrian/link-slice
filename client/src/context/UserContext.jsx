import { createContext, useEffect, useState } from "react";
import { getLoggedUser, login, logout } from "../services/auth.service";
import { getUserUrls } from "../services/url.service";
const API_URL = import.meta.env.VITE_API_URL;

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);

  // GET LOGGED USER
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const { data: user } = await getLoggedUser();
        setUser(user);
        if (user) {
          const { data: links } = await getUserUrls();
          setUrls(links);
        }
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const handleAddUrl = async (url) => {
    try {
      setUrls((urls) => [...urls, url]);
    } catch (error) {
      return error;
    }
  };

  const handleDelUrl = async (id) => {
    try {
      setUrls((urls) => urls.filter((url) => url._id !== id));
    } catch (error) {
      return error;
    }
  };

  const handleLoginGitHub = () => {
    try {
      login(`${API_URL}/api/auth/github`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginGoogle = () => {
    try {
      console.log(`${API_URL}/api/auth/google`);
      login(`${API_URL}/api/auth/google`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        urls,
        handleLoginGitHub,
        handleLoginGoogle,
        handleLogout,
        handleAddUrl,
        handleDelUrl,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
