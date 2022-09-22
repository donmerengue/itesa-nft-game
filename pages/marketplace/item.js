import { useRouter } from "next/router";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import ItemPage from "../../components/Marketplace/itemPage";


const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  /* <p>El id del item para ser renderizado: {id}</p> */
  return (
    <>
      <Navbar />
      <ItemPage />
      <Footer />
    </>

  )
};

export default Item;
