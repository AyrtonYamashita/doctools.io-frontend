import Background from "../../components/Background-Login/bgLogin";
import LoginForm from "../../components/Forms/Login Form/LoginForm";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { pageTransition } from "../../animations/pageAnimations.js";

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
