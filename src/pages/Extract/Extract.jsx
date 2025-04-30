import FileUpload from "../../components/FileUpload/FileUpload";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background-Extract/bgExtract";
import "./Extract.css";

function Extract() {
  return (
    <>
      <Header />
      <Background />
      <div className="container-extract">
        <div className="cont-1">
          <h1>Extração de Documentos</h1>
          <FileUpload />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Extract;
