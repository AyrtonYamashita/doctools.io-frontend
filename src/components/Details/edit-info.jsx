import edit_icon from "/assets/edit-icon.png";

function EditInfo() {
  return (
    <div className="details-inner">
      <img src={edit_icon} alt="Imagem ilustrativa de um documento" />
      <h2>
        Edição de texto <span>(Experimental)</span>
      </h2>
      <p>
        Edite textos em um PDF e faça marcaçoes como desejar e salve do seu
        jeito.
      </p>
    </div>
  );
}

export default EditInfo;
