import { Provider } from "react-redux";
import store from "../state/store";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import "../styles/globals.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
