import { useState } from "react";
import "./FileUpload.css";

function FileUpload() {
  const [file, setFile] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [dragOver, setDragOver] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) setFile(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = () => setDragOver(false);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };
  return (
    <div className="upload-wrapper">
      <input
        type="file"
        className="hidden-input"
        id="fileInput"
        onChange={handleChange}
      />
      <label
        htmlFor="fileInput"
        className="uploadLabel"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {file ? (
          <>
            <p>{file.name}</p>
            <p className="filename">
              Clique ou arraste para carregar um arquivo
            </p>
          </>
        ) : (
          <>
            <svg
              width="96"
              height="96"
              viewBox="0 0 96 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M48 16L32 32H40V56H56V32H64L48 16Z" fill="#bebebe" />
              <rect
                x="24"
                y="60"
                width="48"
                height="20"
                rx="2"
                fill="#bebebe"
              />
            </svg>

            <p>Arraste um arquivo aqui ou clique para selecionar</p>
            <p>Envie apenas documentos .pdf</p>
          </>
        )}
      </label>
    </div>
  );
}

export default FileUpload;
