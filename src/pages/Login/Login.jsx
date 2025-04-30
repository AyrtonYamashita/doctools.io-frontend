import Background from "../../components/Background-Login/bgLogin";
import LoginForm from "../../components/Forms/Login Form/LoginForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.4 },
};

function Login() {
  return (
    <>
      <motion.div {...pageTransition}>
        <Background />
        <LoginForm />
      </motion.div>
    </>
  );
}

export default Login;
