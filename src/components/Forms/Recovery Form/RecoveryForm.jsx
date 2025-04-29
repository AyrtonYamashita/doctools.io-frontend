import { useState } from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../Popup/usePopup";
import validateForm from "./validateForm";
import resetForm from "../Survey Form/resetForm";
import "./RecoveryForm.css";

function RecoveryForm() {
  const { showPopup } = usePopup();
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(email);

    if (Object.keys(newErrors).length > 0) {
      const errorList = Object.values(newErrors);
      showPopup(errorList, "error");
      return;
    }
    console.log(errors);

    resetForm(setEmail);
    setErrors({});
    showPopup(
      "Enviamos um e-mail para você com um link de verificação. Verifique sua caixa de entrada e clique no link fornecido para continuar.",
      "success"
    );
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={handleSubmit} className="recovery-form">
          <h2>Recuperar senha</h2>
          <p>Informe seu e-mail cadastrado</p>
          <div className="input-recovery">
            <input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value.toLowerCase());
              }}
            />
            <button type="submit">Enviar link</button>
          </div>
          <p>
            <Link to="/login">Ir para tela de Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RecoveryForm;
