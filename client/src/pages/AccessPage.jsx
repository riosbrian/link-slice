import { useUser } from "../hooks/useUser";
import { Button } from "../components/communs/Button";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { GoogleIcon } from "../components/icons/GoogleIcon";

export function AccessPage() {
  const { handleLoginGitHub, handleLoginGoogle } = useUser();

  return (
    <>
      <main className="home-hero">
        <div className="wrapper home-hero__wrapper">
          <h1 className="heading heading--1">
            Simplify, Share, and Organize Your URLs
          </h1>
          <p>
            A Chrome extension that simplifies link management and sharing by
            allowing users to shorten, save, delete, and edit URLs quickly and
            conveniently.
          </p>
          <div className="home-hero__auth-opts">
            <Button
              text={"Login with GitHub"}
              icon={<GitHubIcon />}
              onClick={handleLoginGitHub}
            />
            <Button
              text={"Login with Google"}
              icon={<GoogleIcon />}
              onClick={handleLoginGoogle}
            />
          </div>
        </div>
      </main>
    </>
  );
}
