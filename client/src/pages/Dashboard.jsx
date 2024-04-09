import { SliceUrlForm } from "../components/Forms/SliceUrlForm";
import { UrlDirectory } from "../components/UrlDirectory";
import { useUser } from "../hooks/useUser";

export function Dashboard() {
  const { user, urls, handleAddUrl, handleDelUrl } = useUser();
  return (
    <section className="dashboard">
      <div className="wrapper">
        <h2 className="dashboard__heading">Welcome back {user.username} </h2>
        <SliceUrlForm onAddUrl={handleAddUrl} />
        <UrlDirectory urls={urls} onDelUrl={handleDelUrl} />
      </div>
    </section>
  );
}
