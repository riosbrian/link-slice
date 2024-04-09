import { createContext, useEffect, useState } from "react";
import { getLoggedUser, login, logout } from "../services/auth.service";
import { getUserUrls } from "../services/url.service";
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
      login("http://localhost:8080/api/auth/github");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginGoogle = () => {
    try {
      login("http://localhost:8080/api/auth/google");
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
