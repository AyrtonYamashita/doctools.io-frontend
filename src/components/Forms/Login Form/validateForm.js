export default function validateForm(email, password) {
  const errors = {};

  if (!email.trim()) {
    errors.email = 'É necessário incluir um e-mail!';
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = 'Informe um e-mail válido!'
  }

  if (!password.trim()) errors.description = 'Insira a senha para acessar o sistema'

  return errors;
}
