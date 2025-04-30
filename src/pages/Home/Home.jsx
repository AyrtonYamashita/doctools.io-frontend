import home_side from "/assets/home-side.png";
import qrcode from "/assets/qrcode2-icon.png";
import ExtractInfo from "../../components/Details/extract-info";
import MergeInfo from "../../components/Details/merge-info";
import EditInfo from "../../components/Details/edit-info";
import SecurityInfo from "../../components/Informations/security-info";
import FastInfo from "../../components/Informations/fast-info";
import OnlineInfo from "../../components/Informations/online-info";
import SuggestionForm from "../../components/Forms/Survey Form/suggestions";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";

// Configurações de animação
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Atraso entre os filhos
      delayChildren: 0.2, // Pequeno delay inicial
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

function Home() {
  return (
    <>
      <motion.div {...pageTransition}>
        <Header />
        <div className="container">
          <motion.main
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.h1 variants={itemVariants}>
              Simplifique a forma
              <br /> de lidar com documentos
            </motion.h1>

            <motion.p variants={itemVariants}>
              Mescle vários PDF, extraia informações com facilidade.
            </motion.p>

            <motion.p variants={itemVariants}>
              <Link to="/">Faça upload do seu documento</Link>
            </motion.p>
          </motion.main>

          <aside>
            <motion.img
              src={home_side}
              alt="Imagem ilustrativa"
              initial={{ opacity: 0, x: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                x: [0, -10, 0],
                scale: [1, 1.01, 1],
              }}
              transition={{
                opacity: { duration: 1 },
                x: { duration: 1 },
                y: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                },
              }}
            />
          </aside>
        </div>

        <div className="container">
          <div className="details-wrapper">
            <ExtractInfo />
            <MergeInfo />
            <EditInfo />
          </div>
        </div>

        <div className="container">
          <div className="info-wrapper">
            <SecurityInfo />
            <FastInfo />
            <OnlineInfo />
          </div>
        </div>

        <div className="container">
          <div className="purchase">
            <img src={qrcode} alt="QrCode ilustrativo" />
          </div>
          <div className="reviews">
            <div className="solidary">
              <h1>Ajude a manter este projeto ativo</h1>
              <p>
                Contribua para manter o site sem anúncios ou limite de
                transferências.
              </p>
            </div>
            <SuggestionForm />
          </div>
        </div>

        <Footer />
      </motion.div>
    </>
  );
}

export default Home;
