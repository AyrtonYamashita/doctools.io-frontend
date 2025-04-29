import { useState } from "react";
import "./FileUpload.css";

function FileUpload() {
  const [file, setFile] = useState([]);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropedFile = e.dataTransfer.files[0];
    setFile(dropedFile);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div className="container-upload">
      <h1 className="upload-title">Upload de Arquivos</h1>

      <div
        className="drop-area"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Arraste e solte o arquivo aqui</p>
        <span>ou</span>
        <label className="file-label">
          Selecionar arquivo
          <input type="file" onChange={handleChange} hidden />
        </label>

        {file.length > 0 && (
          <div className="file-list">
            <h2>Arquivo selecionado:</h2>
            <p>{file.name}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload
