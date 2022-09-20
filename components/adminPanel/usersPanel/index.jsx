import React from 'react'
import Sidebar from '../SideBar/Sidebar'
import UsersPanel from './UsersPanel'


const index = () => {
  return (
    <>
    <div className="flex overflow-hidden bg-white  ">
    <Sidebar/>
    <UsersPanel/>
    </div>
    </>
  )
}

export default index