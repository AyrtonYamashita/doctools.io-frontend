import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log(name, email, password, confirmPassword);
  }

  return (
    <form onSubmit={onSubmit} className="w-full flex flex-col gap-4">
      <Input
        placeholder="Seu nome"
        legend="Nome"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="seu@email.com"
        legend="Email"
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="123456"
        legend="Senha"
        required
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="123456"
        legend="Confirme sua senha"
        required
        type="password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button type="submit">Cadastrar</Button>
      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-10 mb-4 text-center hover:text-blue-600 transition ease-linear"
      >
        Já tenho uma conta
      </a>
    </form>
  );
}
