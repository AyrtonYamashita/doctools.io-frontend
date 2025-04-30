import Background from "../../components/Background-Login/bgLogin";
import Register from "../../components/Forms/Register Form/RegisterForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/pageAnimations";

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
