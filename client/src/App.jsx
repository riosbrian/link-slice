import { AccessPage } from "./pages/AccessPage";
import { useUser } from "./hooks/useUser";
import { LoadingSpinner } from "./components/communs/LoadingSpinner";
import { Dashboard } from "./pages/Dashboard";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Button } from "./components/communs/Button";
import { StarIcon } from "./components/icons/StarIcon";
import { LogoIcon } from "./components/icons/LogoIcon";
import { DevelopBy } from "./components/communs/DevelopBy";

export function App() {
  const { user, loading, handleLogout } = useUser();
  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <Header>
        <LogoIcon />
        <div className="header__opts">
          {user && <Button text={"Logout"} onClick={handleLogout} />}
          <Button
            text={"Star on Github"}
            icon={<StarIcon />}
            onClick={() => console.log("Hola")}
          />
        </div>
      </Header>
      {user ? <Dashboard /> : <AccessPage />}
      <Footer>
        <DevelopBy />
      </Footer>
    </div>
  );
}
