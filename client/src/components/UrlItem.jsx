import { deleteUrl } from "../services/url.service";
import { Button } from "./communs/Button";
import { CopyIcon } from "./icons/CopyIcon";
import { DelIcon } from "./icons/DelIcon";
const API_URL = import.meta.env.VITE_API_URL;

export function UrlItem({ url, onDelUrl }) {
  const handleDelete = async () => {
    try {
      const { data } = await deleteUrl(url._id);
      onDelUrl(data._id);
    } catch (error) {
      console.log(error);
    }
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(url.shortLink).then(() => {
      console.log("copied");
    });
  };

  return (
    <li className="url-box">
      <div className="url-box__header">
        <a
          className="url-box__short"
          href={`${API_URL}/${url.shortLink}`}
          target="_blank"
        >
          /{url.shortLink}
        </a>
        <div className="url-box__actions">
          <span className="url-box__clicks">{`Clicks: ${url.clickCount}`}</span>
          <Button icon={<CopyIcon />} onClick={copyUrl} />
          <Button icon={<DelIcon />} onClick={handleDelete} />
        </div>
      </div>
      <a className="url-box__original" href={url.originalLink} target="_blank">
        {url.originalLink}
      </a>
      <p className="url-box__description">{url.description}</p>
    </li>
  );
}
