import { useState } from "react";
import validateForm from "./validateForm";
import resetForm from "./resetForm";
import { usePopup } from "../Popup/usePopup";

function SuggestionForm() {
  const { showPopup } = usePopup();
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm(email, description);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      showPopup(`${newErrors.email}`, "warning");
      return;
    }
    console.log(errors);

    resetForm(setEmail, setDescription);
    setErrors({});
    showPopup("Mensagem enviada com sucesso", "success");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Nos ajude a melhorar, envie sua sugestão</h3>
        <input
          type="email"
          placeholder="Informe seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
