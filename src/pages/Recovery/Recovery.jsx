import Background from "../../components/Background-Login/bgLogin";
import Recovery from "../../components/Forms/Recovery Form/RecoveryForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};
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
