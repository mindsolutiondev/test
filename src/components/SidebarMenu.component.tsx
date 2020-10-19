import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'
const SidebarMenu: React.FC = () => {
  return (
    <div className="sidenav">
      <Link to="/">Dashboard</Link>
      <Link to="/asset">Asset</Link>
    </div>
  )
}

export default SidebarMenu
