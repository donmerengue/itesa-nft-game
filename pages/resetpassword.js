import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SendResetPassword from "../components/auth/SendResetPassword";

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <SendResetPassword />
      <Footer />
    </>
  );
};

export default LoginPage;
