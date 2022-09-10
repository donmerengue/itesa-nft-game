import { useRouter } from "next/router";

const IdPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <p>User ID: {id}</p>;
};

export default IdPage;
