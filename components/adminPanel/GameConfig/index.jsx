
import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import GameConfig from './GameConfig'


const Index = () => {
  return (
  <div className="flex overflow-hidden bg-white ">
     <Sidebar/>
     <GameConfig/>
  </div>
  )
}

export default Index