export function Button({ text, icon, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button className="btn" onClick={handleClick}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
}
