import Sidebar from '../../SideBar/Sidebar'
import MintNft from './MintNft'

const index = () => {
  return (
    <>
    <div className="flex overflow-hidden bg-white">
    <Sidebar/>
    <MintNft/>
    </div>
    </>
  )
}

export default index