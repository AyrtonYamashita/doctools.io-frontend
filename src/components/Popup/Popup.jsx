import "./Popup.css";

function Popup({ message, type, onClose }) {
  const icons = {
    success: "/assets/icons/check.png",
    error: "/assets/icons/error.png",
    warning: "/assets/icons/warning.png",
  };

  let title = "";

  switch (type) {
    case "success":
      title = "Sucesso";
      break;
    case "warning":
      title = "Atenção";
      break;
    case "error":
      title = "Erro";
      break;
    default:
      break;
  }

  return (
    <div className={`popup ${type}`}>
      <img src={icons[type]} alt="ícone de estado" className="popup-icon" />
      <div className="popup-content">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-0.5 -0.5 16 16"
        fill="none"
        stroke="#424a52"
        stroke-linecap="round"
        stroke-linejoin="round"
        id="X--Streamline-Lucide"
        height="32"
        width="32"
        onClick={onClose}
      >
        <path d="M11.25 3.75 3.75 11.25" stroke-width="1"></path>
        <path d="m3.75 3.75 7.5 7.5" stroke-width="1"></path>
      </svg>
    </div>
  );
}

export default Popup;
