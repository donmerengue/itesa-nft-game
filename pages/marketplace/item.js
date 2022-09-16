import { useRouter } from "next/router";
import ItemPage from "../../components/Marketplace/itemPage";

const Item = () => {
  const router = useRouter();
  const { id } = router.query;
  /* <p>El id del item para ser renderizado: {id}</p> */
  return (
    <ItemPage />
  )
};

export default Item;
