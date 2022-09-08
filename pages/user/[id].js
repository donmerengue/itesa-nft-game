import { useRouter } from "next/router";

export default function id() {
  const router = useRouter();
  const { id } = router.query;

  return <p>Post: {id}</p>;
}