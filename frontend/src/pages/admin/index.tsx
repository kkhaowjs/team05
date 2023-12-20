import React, { CSSProperties, useState } from 'react';
import { Layout,Button,Menu } from 'antd';

import {MenuFoldOutlined,MenuUnfoldOutlined,SkinOutlined,HomeOutlined,TeamOutlined,} from '@ant-design/icons';

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
        lineHeight: '100px',
        color: '#fff',
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
            <Sider trigger={null} collapsible collapsed={collapsed} style={siderStyle}>
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
                ]}
                style={{backgroundColor: '#D9E2D9',border: 'none',width: collapsed ? '80px' : '200px',}}
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