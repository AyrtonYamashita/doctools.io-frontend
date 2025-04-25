import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Doctools.io
        </Link>
        <nav className="space-x-4">
          <Link
            to="/extract"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Extração
          </Link>
          <Link
            to="/merge"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Mesclar
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-600 transition"
          >
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
