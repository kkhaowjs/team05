import React from 'react'
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import { Content } from 'antd/es/layout/layout'
import { Image } from 'antd'
import logo from '../../assets/amoungtou.png'
const Homepage = () => {
  return (<>
    <Headbarlogo/>
    <Navbar/>
    <Image height={632}
            width='100%'
            src={logo}
            preview={false}
            />
    <Content style={{minHeight:'2048px',backgroundColor:'gray'}}>
    content.exe
    </Content>
    <Footerbar/>
    </>
  )
}

export default Homepage