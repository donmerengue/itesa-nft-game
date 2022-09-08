import { useRouter } from "next/router"
const item = () => {
  const router = useRouter()
  const { id } = router.query
  return <p>El id del item para ser renderizado: {id}</p>
}

export default item
