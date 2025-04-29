import FileUpload from "../../components/FileUpload/FileUpload";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background-Extract/bgExtract";
import "./Extract.css";

function Extract() {
  return (
    <>
      <Background />
      <Header />
      <div className="container-extract"></div>
      <Footer />
    </>
  );
}

export default Extract;
