import logo from "../assets/logo.svg";
import logout from "../assets/logout.svg";

type Props = React.ComponentProps<"header"> & {
  size?: string;
};

export function Header({ size = "full", ...rest }: Props) {
  return (
    <header
      {...rest}
      className={`w-${size} flex justify-between bg-gray-500 mb-4 px-10 py-2 rounded-xl shadow-xl`}
    >
      <img src={logo} alt="logo" className="w-48" />
      <div className="flex items-center gap-3">
        <a href="/" className="text-sm">
          Início
        </a>
        <a href="/changelog" className="text-sm">
          Changelog
        </a>

        <span className="text-sm font-semibold text-gray-200 ml-6">
          Olá, Ayrton
        </span>
        <img src={logout} alt="Sair" className="w-5" />
      </div>
    </header>
  );
}
