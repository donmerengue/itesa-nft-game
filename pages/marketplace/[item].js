import { useRouter } from "next/router";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <p>El id del item para ser renderizado: {id}</p>;
};

export default ItemPage;
