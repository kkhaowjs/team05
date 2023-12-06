import React, { CSSProperties } from 'react';
import Headbarlogo from '../../component/headbarlogo';
import Navbar from '../../component/navbar';
import Footerbar from '../../component/footerbar';
import { Content } from 'antd/es/layout/layout';
import { Button, Checkbox, Form, Image, Input } from 'antd';
import bg from '../../assets/3bears.jpg';

const CustomerRegister = () => {
    const contentStyle: CSSProperties = {
        justifyContent: 'center',
        backgroundColor: '#D9E2D9',
        minHeight: '800px',
        alignItems: 'center',
        display: 'flex',
    };

    const sectionStyle: CSSProperties = {
        display: 'flex',
        width: '1000px',
        height: '600px',
        backgroundColor: 'white',
        flexDirection: 'row',
    };

    const leftSectionStyle: CSSProperties = {
        textAlign: 'left',
        flex: 1,
        overflow: 'hidden',
    };

    const rightSectionStyle: CSSProperties = {
        textAlign: 'left',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
        alignItems: 'center',
    };

    const formStyle: CSSProperties = {
        width: '70%',
        maxWidth: '400px',
        marginTop: '50px',
        textAlign: 'left',
    };

    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Headbarlogo />
            <Navbar />
            <Content style={contentStyle}>
                <div style={sectionStyle}>
                    <div style={leftSectionStyle}>
                        <Image
                            style={{ objectFit: 'cover' }}
                            height='100%'
                            width='100%'
                            src={bg}
                            preview={false}
                        />
                    </div>
                    <div style={rightSectionStyle}>
                        <div style={{ flexDirection: 'column', display: 'flex', marginTop: '50px' }}>
                            <h1 style={{ fontSize: '32px' }}>Sign up for FREE!</h1>
                            <span>No credit card - No commitment</span>
                        </div>
                        <Form
                            name="registrationForm"
                            initialValues={{ remember: true }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            style={formStyle}
                        >
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                            >
                                <Input.Password count={{
                                    show: true,
                                    max: 10,
                                }} />
                            </Form.Item>
                            <Form.Item
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value ? Promise.resolve() : Promise.reject('Please accept the agreement'),
                                    },
                                ]}
                            >
                                <Checkbox>
                                    I have read the <a href="#">Term of Service</a>
                                </Checkbox>
                            </Form.Item>
                            <Form.Item style={{ textAlign: 'center', }}>
                                <Button type="primary" htmlType="submit" style={{ flex: 1, backgroundColor: '#003d29', color: '#fff', }}>
                                    Next
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>

                        </div>
                    </div>
                </div>
            </Content>
            <Footerbar />
        </>
    );
};

export default CustomerRegister;