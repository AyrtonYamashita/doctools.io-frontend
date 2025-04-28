import online_icon from "/assets/online-icon.png";

function OnlineInfo() {
  return (
    <div className="info-inner">
      <img
        src={online_icon}
        alt="ícone de um globo representando a internet."
      />
      <p>100% online, nada processado na sua máquina.</p>
    </div>
  );
}

export default OnlineInfo;
