import FileUpload from "../../components/FileUpload/FileUpload";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Background from "../../components/Background-Extract/bgExtract";
import icon from "../../../public/assets/icons/extract.png";
import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/pageAnimations";
import "./Extract.css";

function Extract() {
  return (
    <>
      <motion.div {...pageTransition}>
        <Header />
        <Background />
        <div className="container-extract">
          <div className="cont-1">
            <h1>
              <img src={icon}></img>Extração de Documentos
            </h1>
            <p className="subtitle-extract">
              Identifique e organize dados de seus arquivos PDF em segundos.
            </p>
            <FileUpload />
            <div className="link-wrapper">
              <p>
                <Link to="/">Explore os exemplos</Link>
              </p>
              <p>
                <Link to="/">Leia o guia de usuário</Link>
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
}

export default Extract;
