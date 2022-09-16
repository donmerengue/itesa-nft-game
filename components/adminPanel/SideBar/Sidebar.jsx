import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <>
    <aside id="sidebar" className=" z-20 h-full  flex lg:flex  flex-col w-64 transition-width duration-75" aria-label="Sidebar">
        <div className="relative flex-1 flex flex-col  border-r border-gray-200 bg-white ">
           <div className="flex-1 flex flex-col pt-5 pb-4  overflow-y-auto">
              <div className="flex-1 px-3 bg-white divide-y space-y-1">
                 <ul className="space-y-2 pb-2">
                  {/*Buscador */}
                    {/* <li>
                     
                       <form action="#" method="GET" >
                          <label  className="sr-only">Search</label>
                          <div className="relative">
                             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                   <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                                </svg>
                             </div>
                             <input type="text"   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:ring-cyan-600 block w-full pl-10 p-2.5" placeholder="Search"/>
                          </div>
                       </form>
                    </li> */}
                    <li>
                        <Link href="/admin/dashboard">
                       <a  className="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-orange-100 group">
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                             <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                          </svg>
                          <span className="ml-3">Dashboard</span>
                       </a>
                       </Link>
                    </li>
                    <li>
                       <Link href="/admin/users">
                        <a className="text-base text-gray-900 font-normal rounded-lg hover:bg-orange-100 flex items-center p-2 group ">
                          <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">Users</span>
                       </a>
                       </Link>
                    </li>
                    <li>
                        <Link href="/admin/nfts">
                       <a  className="text-base text-gray-900 font-normal rounded-lg hover:bg-orange-100 flex items-center p-2 group ">
                          <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">NFTS</span>
                       </a>
                       </Link>
                    </li>
                 </ul>
                
              </div>
           </div>
        </div>
     </aside>
    </>
  )
}

export default Sidebar