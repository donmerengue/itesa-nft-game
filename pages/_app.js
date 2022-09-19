import { Provider } from "react-redux";
import store from "../state/store";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Intergalaxy</title>
        <meta name="keywords" content="intergalaxy nft game"></meta>
      </Head>
      <Provider store={store}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
