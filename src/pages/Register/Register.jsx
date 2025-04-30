import Background from "../../components/Background-Login/bgLogin";
import Register from "../../components/Forms/Register Form/RegisterForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};
function RegisterPage() {
  return (
    <>
      <motion.div {...pageTransition}>
        <Background />
        <Register />
      </motion.div>
    </>
  );
}

export default RegisterPage;
