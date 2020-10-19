import React from 'react'
import '../styles/navbar.css'
// import { DownOutlined } from '@ant-design/icons'
import { BellOutlined } from '@ant-design/icons'
// import { Layout, Menu } from 'antd'
// const { Header } = Layout

// import styled from 'styled-components'

const Navbar: React.FC = () => {
  return (
    // <Layout className="layout">
    //   <Header>
    //     <div className="logo" />
    //     <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
    //       <Menu.Item key="1">nav 1</Menu.Item>
    //       <Menu.Item key="2">nav 2</Menu.Item>
    //       <Menu.Item key="3">nav 3</Menu.Item>
    //     </Menu>
    //   </Header>
    // </Layout>
    <div className="topnav" id="myTopnav">
      <a className="active">ASSET</a>
      <a className="cv">
        <BellOutlined style={{ fontSize: '16px', color: 'black' }} />{' '}
      </a>
      <a>
        Logout
        {/* <DownOutlined style={{ fontSize: '16px', color: 'black' }} /> */}
      </a>
    </div>
  )
}

export default Navbar
