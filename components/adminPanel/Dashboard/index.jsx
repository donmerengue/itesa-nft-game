
import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import Dashboar from './Dashboard'


const Index = () => {
  return (
  <div className="flex overflow-hidden bg-white pt-16">
     <Sidebar/>
     <Dashboar/>   
  </div>
  )
}

export default Index