export default function validateForm(email, description) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'É necessário incluir um e-mail!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Informe um e-mail válido!'
  }

  if (!description.trim()) errors.description = 'É importante descrever suas ideias.'

  return errors;
}
