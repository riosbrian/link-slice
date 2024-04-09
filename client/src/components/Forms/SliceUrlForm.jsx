import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { ErrorMessage } from "./ErrorMessage";
import { sliceUrl } from "../../services/url.service";

export function SliceUrlForm({ onAddUrl }) {
  const { form, onInputChange, onResetForm } = useForm({
    originalLink: "",
    customUrl: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleHideError = () => {
    setTimeout(() => {
      setError(false);
    }, 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await sliceUrl(form);
      onAddUrl(data);
      onResetForm();
    } catch (error) {
      setError(true);
      setErrorMsg(error.message);
    } finally {
      handleHideError();
    }
  };

  return (
    <>
      <form className="form form__slice" onSubmit={handleSubmit}>
        <div className="form__group">
          <label className="form__label" htmlFor="originalLink">
            Destination URL
          </label>
          <input
            className="form__input"
            type="text"
            id="originalLink"
            name="originalLink"
            value={form.originalLink}
            placeholder="URL"
            onChange={onInputChange}
            required
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="customUrl">
            Custom short link
          </label>
          <input
            className="form__input"
            type="text"
            id="customUrl"
            name="customUrl"
            value={form.customUrl}
            placeholder="Custom URL"
            onChange={onInputChange}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="description">
            Description (optional)
          </label>
          <input
            className="form__input"
            type="text"
            id="description"
            name="description"
            value={form.description}
            placeholder="Description"
            onChange={onInputChange}
          />
        </div>
        <button className="btn" type="submit">
          Slice
        </button>
      </form>
      {error && <ErrorMessage message={errorMsg} />}
    </>
  );
}
