import React, { CSSProperties } from 'react'
import { Image } from 'antd'
import logo from '../assets/Tmocho.jpg'
import { Button, Checkbox, Form, Input } from 'antd';
import Icon,{
    UserOutlined,
    ShoppingCartOutlined,
  } from '@ant-design/icons';

const navbar = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    type FieldType = {
        product?: string;
    };

    const navbarStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'row',
        height: '80px',
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        justifyContent: 'space-between',
        color: 'black',
        alignItems: 'center',
    }
    return (<>
        <div style={navbarStyle}>
            <div style={{ textAlign: 'left', flex: 1, }}>
                <div style={{ marginLeft: '150px' }}>
                    <Image height={60}
                        width={60}
                        src={logo}
                        preview={false}
                    />
                    <span style={{ marginLeft: '10px', fontSize: '24px',textShadow: '1px 1px 1px #000' }}>Torhinosaurus</span>
                </div>
            </div>
            <div style={{ textAlign: 'center', flex: 1 }}>
                {/* **fix later** */}
                <input placeholder='search for products,brands and shops' style={{width:'400px'}}></input>
                <button style={{margin:'10px',backgroundColor:'#003d29',color:'#fff'}}>Search</button>
            </div>
            <div style={{ textAlign: 'right', flex: 1 }}>
                <div style={{ marginRight: '100px' }}>
                    <UserOutlined style={{fontSize:'20px',margin:'10px'}}/>
                    <span>Account</span>
                    <span style={{ margin: '50px' }} />
                    <ShoppingCartOutlined style={{fontSize:'20px',margin:'10px'}}/>
                    <span>Cart</span>
                </div>
            </div>
        </div>
    </>
    )
}

export default navbar