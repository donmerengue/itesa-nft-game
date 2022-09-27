import Sidebar from '../SideBar/Sidebar'
import NftPanel from './NftPanel'


const index = () => {
  return (
    <>
    <div className="flex overflow-hidden bg-white">
    <Sidebar/>
    <NftPanel/>
    </div>
    </>
  )
}

export default index