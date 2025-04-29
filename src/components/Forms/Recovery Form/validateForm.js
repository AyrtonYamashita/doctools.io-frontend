export default function validateForm(email) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'É necessário incluir um e-mail!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Informe um e-mail válido!'
  }

  return errors;
}
