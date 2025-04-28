import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Doctools.io" className="w-32 align-middle" />
      </Link>
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/">Extrair documentos</Link>
        </li>
        <li>
          <Link to="/">Mesclar PDFs</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
        <li>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
