import extract_icon from "/assets/extract-icon.png";

function ExtractInfo() {
  return (
    <div className="details-inner">
      <img src={extract_icon} alt="Imagem ilustrativa de um documento." />
      <h2>
        Extração de Texto <span>(exclusivo Sistema SSW)</span>
      </h2>
      <p>
        Extraia documentos específicos para automações dentro de um sistema
        embarcado.
      </p>
    </div>
  );
}

export default ExtractInfo;
