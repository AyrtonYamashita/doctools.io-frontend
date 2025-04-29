import { useState } from "react";
import { Link } from "react-router-dom";
import { usePopup } from "../../Popup/usePopup";
import validateForm from "./validateForm";
import resetForm from "../Survey Form/resetForm";
import logo from "/assets/logo.png";
import "./LoginForm.css";

function LoginForm() {
  const { showPopup } = usePopup();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(email, password);

    if (Object.keys(newErrors).length > 0) {
      const errorList = Object.values(newErrors);
      showPopup(errorList, "error");
      return;
    }
    
    console.log(errors);

    resetForm(setEmail, setPassword);
    setErrors({});
    showPopup(
      "Login realizado com sucesso! Estamos te redirecionando.",
      "success"
    );
  };

  return (
    <>
      <div className="container-form">
        <form onSubmit={handleSubmit} className="login-form">
          <img src={logo} alt="" />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
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
          <p>
            <Link to="/recovery">Esqueci minha senha</Link>
          </p>
          <button type="submit">Acessar</button>
          <p>Ainda não possui cadastro?</p>
          <p>
            <Link to="/register">Cadastre-se aqui</Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
