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
                          <span className="ml-3 flex-1 whitespace-nowrap">Accesories
                          Nfts</span>
                       </a>
                       </Link>
                    </li>
                    <li>
                        <Link href="/admin/nfts">
                       <a  className="text-base text-gray-900 font-normal rounded-lg hover:bg-orange-100 flex items-center p-2 group ">
                          <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                          Arenas</span>
                       </a>
                       </Link>
                    </li>
                    <li>
                        <Link href="/admin/nfts">
                       <a  className="text-base text-gray-900 font-normal rounded-lg hover:bg-orange-100 flex items-center p-2 group ">
                          <svg className="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fillRule="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                             <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path>
                          </svg>
                          <span className="ml-3 flex-1 whitespace-nowrap">
                          Avatars</span>
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