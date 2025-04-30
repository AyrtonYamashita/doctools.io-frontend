import Background from "../../components/Background-Login/bgLogin";
import Recovery from "../../components/Forms/Recovery Form/RecoveryForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/pageAnimations";

function RecoveryPage() {
  return (
    <>
      <motion.div {...pageTransition}>
        <Background />
        <Recovery />
      </motion.div>
    </>
  );
}

export default RecoveryPage;
