import React, { CSSProperties, useState } from 'react';
import { Layout,Button,Menu } from 'antd';

import {MenuFoldOutlined,MenuUnfoldOutlined,SkinOutlined,HomeOutlined,TeamOutlined,FileTextOutlined,ShoppingOutlined,} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Admin = () => {

    const [collapsed, setCollapsed] = useState(false);
    
    const headerStyle: CSSProperties = {
        justifyContent: 'center',
        minHeight: '200px',
        backgroundColor: '#4096ff',
        alignItems: 'center',
        color: '#fff',
        display: 'flex',
    };
    
    const contentStyle: CSSProperties = {
        justifyContent: 'center',
        lineHeight: '100px',
        minHeight: '600px',
        color: '#fff',
        backgroundColor: '#0958d9',
        display: 'flex',
        
    };
    
    const siderStyle: CSSProperties = {
        justifyContent: 'center',
        backgroundColor: '#D9E2D9',
        display: 'flex',
    };
      
    const footerStyle: CSSProperties = {
        minHeight: '200px',
        lineHeight: '100px',
        textAlign: 'center',
        color: '#fff',
        backgroundColor: '#4096ff',
    };

    const layoutStyle = {
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    };

    return (
        <Layout style={layoutStyle}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle} collapsedWidth={115}>
            <ShoppingOutlined style={{position: 'absolute',color: '#343434',marginTop: '20px',fontSize: '30px',left: collapsed ? '36%' : '10px',}}/>
            <span style={{position: 'absolute',display: collapsed ? 'none' : 'block',color: '#343434',marginTop: '23px',left: '40px',fontSize: '22px',fontWeight: 'bold',}}>Torhinozorus</span>
            <div className="logo" />
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                {
                    key: '1',
                    icon: <HomeOutlined/>,
                    label: 'General',
                },
                {
                    key: '2',
                    icon: <TeamOutlined/>,
                    label: 'Employee',
                },
                {
                    key: '3',
                    icon: <SkinOutlined/>,
                    label: 'Product',
                },
                {
                    key: '4',
                    icon: <FileTextOutlined/>,
                    label: 'Order',
                },
                ]}
                style={{backgroundColor: '#D9E2D9',border: 'none',color: '#343434',fontSize: '18px',marginTop: '70px',}}
            />
            </Sider>
            <Layout>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                    position: 'absolute',
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    }}
                />
                <Header style={headerStyle}>
                    Header
                </Header>
                <Content><div style={contentStyle}>Content</div></Content>
                <Footer style={footerStyle}>Footer</Footer>
            </Layout>
        </Layout>
    );
};

export default Admin;