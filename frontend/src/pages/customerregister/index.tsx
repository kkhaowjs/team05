import React from 'react'
import Headbarlogo from '../../component/headbarlogo'
import Navbar from '../../component/navbar'
import Footerbar from '../../component/footerbar'
import { Content } from 'antd/es/layout/layout'

const CustomerRegister = () => {
  return (<>
    <Headbarlogo/>
    <Navbar/>
    <Content style={{backgroundColor:'#D9E2D9',minHeight:'800px'}}>
        <div>

        </div>    
    </Content>
    <Footerbar/>
    </>
  )
}

export default CustomerRegister