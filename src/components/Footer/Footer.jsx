import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" />
      <div class="footer-wrapper">
        <ul>
          <li>Produtos</li>
          <li>
            <Link to="/">Upload de arquivos</Link>
          </li>
          <li>
            <Link to="/">Meclar arquivos</Link>
          </li>
          <li>
            <Link to="/">Extrair texto</Link>
          </li>
        </ul>
        <ul>
          <li>Empresa</li>
          <li>
            <Link to="/">Sobre</Link>
          </li>
          <li>
            <Link to="/">Contato</Link>
          </li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>
            <Link to="/">Política de Privacidade</Link>
          </li>
          <li>
            <Link to="/">Termos de Serviço</Link>
          </li>
        </ul>
      </div>
      <div class="divisor"></div>
      <span>© 2025 doctools.io | made with 🔥 by Starx Plugin</span>
    </footer>
  );
}
