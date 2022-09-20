
import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Dashboar from './Dashboard'


const Index = () => {
  return (
  <div className="flex overflow-hidden bg-white ">
     <Sidebar/>
     <Dashboar/>   
  </div>
  )
}

export default Index