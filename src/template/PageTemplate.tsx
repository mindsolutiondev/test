import React from 'react'
import Navbar from '../components/Navbar.component'
import Sidebar from '../components/SidebarMenu.component'

const PageTemplate: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div>{children}</div>
    </div>
  )
}

export default PageTemplate
