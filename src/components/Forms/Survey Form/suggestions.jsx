import { useState } from "react";
import validateForm from "./validateForm";
import resetForm from "./resetForm";
import { usePopup } from "../../Popup/usePopup";
import "./suggestions.css";

function SuggestionForm() {
  const { showPopup } = usePopup();
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(email, description, null);

    if (Object.keys(newErrors).length > 0) {
      const errorList = Object.values(newErrors);
      showPopup(errorList, "error");
      return;
    }
    console.log(errors);

    resetForm(setEmail, setDescription);
    setErrors({});
    showPopup("Mensagem enviada com sucesso", "success");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="survey-form">
        <h3>Nos ajude a melhorar, envie sua sugestão</h3>
        <input
          type="email"
          placeholder="Informe seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value.toLowerCase())}
        />
        <textarea
          name="description"
          id="description"
          placeholder="Descreva suas ideias"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button type="submit">Enviar sugestão</button>
      </form>
    </>
  );
}

export default SuggestionForm;
