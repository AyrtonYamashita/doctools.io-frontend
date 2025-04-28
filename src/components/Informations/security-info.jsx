import security_icon from "/assets/security-icon.png";

function SecurityInfo() {
  return (
    <div className="info-inner">
      <img src={security_icon} alt="ícone ilustrativo de um cadeado." />
      <p>Os arquivos não são armazenados em nossa base de dados.</p>
    </div>
  );
}

export default SecurityInfo;
