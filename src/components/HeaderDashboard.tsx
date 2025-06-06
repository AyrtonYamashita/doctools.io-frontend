import pdfIcon from "../assets/pdf.svg";
import { Button } from "./Button";

type Props = React.ComponentProps<"header"> & {
  filename?: string;
};

export function HeaderDashboard({ filename = "root.pdf", ...rest }: Props) {
  return (
    <header
      {...rest}
      className={`flex justify-between bg-gray-500 mb-4 px-8 py-4 rounded-xl shadow-xl`}
    >
      <div className="flex items-center gap-2 font-semibold text-gray-100">
        <img src={pdfIcon} alt="icon file" className="w-8" />
        <span>{filename}</span>
      </div>
      <div className="flex items-center gap-3">
        <ul className="flex gap-4 text-xs text-gray-100 mr-8">
          <li>
            Total extraído: <strong className="text-gray-100">14</strong>
          </li>
          <span>•</span>
          <li>
            Executados: <strong className="text-gray-100">1</strong>
          </li>
          <span>•</span>

          <li>
            Não executados: <strong className="text-gray-100">13</strong>
          </li>
        </ul>

        <Button className="bg-gray-300 p-2 font-bold text-xs rounded-lg text-gray-100 hover:bg-gray-400 transition ease-linear cursor-pointer">
          Nova extração
        </Button>
        <Button className="bg-blue-100 p-2 font-bold text-xs rounded-lg text-blue-500 hover:bg-blue-200 transition ease-linear cursor-pointer">
          Copiar script
        </Button>
      </div>
    </header>
  );
}
