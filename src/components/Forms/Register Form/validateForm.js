export default function validateForm(email, confirmEmail, password, confirmPassword, name) {
  const errors = {};

  if (!email.trim() || !confirmEmail.trim()) {
    errors.email = 'É necessário inserir e confirmar o e-mail.';
  } else if (!/\S+@\S+\.\S+/.test(email) || !/\S+@\S+\.\S+/.test(confirmEmail)) {
    errors.email = 'Informe um e-mail válido.'
  }

  if (email != confirmEmail) {
    errors.email = 'Os dois e-mails precisam ser iguais.'
  }

  if (password != confirmPassword) {
    errors.password = 'As senhas precisam ser iguais.'
  }

  if (!password.trim() || !confirmPassword.trim()) errors.description = 'Você precisa informar e confirmar senha para seu cadastro.'
  if (!name.trim()) errors.name = 'Informe um nome de usuário.'

  return errors;
}
