import { useRouter } from "next/router";
import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import ItemPage from "../../components/Marketplace/itemPage";


const Item = () => {
  const router = useRouter();
  const {item} = router.query;
/*   console.log('id---->',item) */
  /* <p>El id del item para ser renderizado: {id}</p> */
  return (
    <>
      <Navbar />
      <ItemPage item={item} />
      <Footer />
    </>

  )
};

export default Item;
