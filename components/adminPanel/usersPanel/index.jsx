import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import UsersPanel from './UsersPanel'


const index = () => {
  return (
    <>
    <div className="flex overflow-hidden bg-white pt-16 h-[100vh]">
    <Sidebar/>
    <UsersPanel/>
    </div>
    </>
  )
}

export default index