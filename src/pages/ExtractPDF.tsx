import { Input } from "../components/Input";
import uploadSvg from "../assets/upload.svg";
import verifySvg from "../assets/verify.svg";
import { useRef, useState } from "react";

export function ExtractPDF() {
  const [file, setFile] = useState<File | null>(null);
  const [fileInfo, setFileInfo] = useState("");
  const [labelText, setLabelText] = useState("Procurar");
  const [imageSrc, setImageSrc] = useState(uploadSvg);

  const inputRef = useRef<HTMLInputElement>(null);
  const dragzoneRef = useRef<HTMLDivElement>(null);

  function formatFileSize(bytes: number): string {
    const units = ["Bytes", "KB", "MB", "GB", "TB"];
    if (bytes === 0) return "0 Bytes";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const value = bytes / Math.pow(1024, i);
    return `Tamanho do arquivo enviado: <strong classname="text-gray-100">${value.toFixed(
      2
    )} ${units[i]}</strong>`;
  }

  function handleFile(file: File) {
    if (!file.name.endsWith(".pdf")) {
      alert("Apenas arquivos PDF são permitidos.");
      return;
    }

    setFile(file);
    setFileInfo(formatFileSize(file.size));
    setLabelText("Extrair documentos");
    setImageSrc(verifySvg);
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files?.[0];
    if (selected) handleFile(selected);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    if (file) {
      alert(
        "Já existe um documento adicionado. Atualize a página para adicionar outro."
      );
      return;
    }
    const droppedFile = e.dataTransfer.files[0];
    handleFile(droppedFile);
  }

  function onDragOver(e: React.DragEvent) {
    if (file) return;
    e.preventDefault();
    dragzoneRef.current?.classList.remove("border-gray-300");
    dragzoneRef.current?.classList.add("border-blue-500");
    dragzoneRef.current?.classList.add("bg-blue-100");
  }

  function onDragLeave() {
    dragzoneRef.current?.classList.remove("border-blue-500");
    dragzoneRef.current?.classList.add("border-gray-300");
    dragzoneRef.current?.classList.remove("bg-blue-100");
  }

  function onButtonClick() {
    if (!file) {
      inputRef.current?.click();
    } else {
      console.log("Extrair PDF:", file);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmit}
      className="bg-gray-500 w-full rounded-xl flex flex-col p-10 gap-6 lg:min-w-[512px] shadow-xl mt-10"
    >
      {!file && (
        <h2 className="font-semibold text-2xl text-center">
          Envie seu PDF mesclado
        </h2>
      )}

      <div
        ref={dragzoneRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`${
          !file && "border-dashed border-2 border-gray-300"
        } rounded-xl flex flex-col justify-center items-center  py-8 text-sm transition ease-linear`}
      >
        <img
          src={imageSrc}
          alt="Upload"
          className={`${imageSrc === verifySvg && "w-32 mb-4"}`}
        />
        <p className="text-center mb-3">
          {file ? file.name : "Arraste e solte seu arquivo aqui"} <br />{" "}
          {!file && "ou"}
        </p>
        <label
          htmlFor={!file ? "pdfInput" : ""}
          onClick={onButtonClick}
          className={`${
            file
              ? "bg-green-200 hover:bg-green-100 text-green-900"
              : "bg-blue-600  hover:bg-blue-500 text-white"
          } p-3 font-semibold rounded-xl mb-8 transition ease-linear cursor-pointer`}
        >
          {labelText}
        </label>
        <span className="text-sm text-gray-200">
          {file ? (
            <span dangerouslySetInnerHTML={{ __html: fileInfo }} />
          ) : (
            "Apenas arquivos .pdf são permitidos"
          )}
        </span>
      </div>

      <Input
        type="file"
        id="pdfInput"
        accept="application/pdf "
        required
        onChange={onFileChange}
        hidden
      />
    </form>
  );
}
