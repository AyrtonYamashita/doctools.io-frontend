import { useState } from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../Popup/usePopup";
import validateForm from "./validateForm";
import resetForm from "../Register Form/resetForm";
import "./RegisterForm.css";

function RegisterForm() {
  const { showPopup } = usePopup();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(
      email,
      confirmEmail,
      password,
      confirmPassword,
      name
    );

    if (Object.keys(newErrors).length > 0) {
      const errorList = Object.values(newErrors);
      showPopup(errorList, "error");
      return;
    }
    console.log(errors);

    resetForm(
      setEmail,
      setConfirmEmail,
      setConfirmPassword,
      setPassword,
      setName
    );
    setErrors({});
    showPopup(
      "Cadastro realizado com sucesso! Enviamos um link para validação do seu e-mail, verifique a caixa de entrada e clique no link enviado para continuar.",
      "success"
    );
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Informe seu nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
            }}
          />

          <input
            type="email"
            placeholder="Confirme seu e-mail"
            value={confirmEmail}
            onChange={(e) => {
              setConfirmEmail(e.target.value.toLowerCase());
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
          <button type="submit">Cadastrar</button>
          <p className="already-register">Já possui cadastro?</p>
          <p className="access-login">
            <Link to="/login">Acesse aqui</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default RegisterForm;
