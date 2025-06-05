import { Input } from "../components/Input";
import uploadSvg from "../assets/upload.svg";

export function ExtractPDF() {
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px] shadow-xl mt-10"
    >
      <h2 className="font-semibold text-2xl text-center">
        Envie seu PDF mesclado
      </h2>
      <div className="rounded-xl flex flex-col justify-center items-center border-dashed border-2 border-gray-300 py-8 text-sm">
        <img src={uploadSvg} alt="Upload" className="w-32" />
        <p className="text-center mb-3">
          Arrasque e solte seu arquivo aqui <br /> ou
        </p>
        <label
          htmlFor="pdfInput"
          className="bg-blue-500 p-3 font-semibold text-white rounded-xl mb-8 hover:bg-blue-400 transition ease-linear cursor-pointer"
        >
          Procurar
        </label>
        <span className="text-sm text-gray-300">
          Apenas arquivos .pdf são permitidos
        </span>
      </div>

      <Input
        type="file"
        id="pdfInput"
        accept="application/pdf "
        required
        hidden
      />
    </form>
  );
}
