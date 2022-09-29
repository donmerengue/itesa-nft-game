import Sidebar from '../SideBar/Sidebar'
import Avatars from './Avatars'

const index = () => {
  return (
    <div className="flex overflow-hidden bg-white ">
     <Sidebar/>
     <Avatars/>
  </div>
  )
}

export default index