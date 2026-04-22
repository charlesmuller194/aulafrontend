import "./index.css";

export default function Button({ onClick, type = "button", children }) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {children}
    </button>
  );
}