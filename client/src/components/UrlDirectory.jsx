import { UrlItem } from "./UrlItem";

export function UrlDirectory({ urls, onDelUrl }) {
  return (
    <ul className="url-list">
      {urls.map((url) => (
        <UrlItem key={Math.random()} url={url} onDelUrl={onDelUrl} />
      ))}
    </ul>
  );
}
