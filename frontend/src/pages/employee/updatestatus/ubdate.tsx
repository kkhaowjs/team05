import React, { useState, useEffect, CSSProperties } from "react";
import {
  Space,
  Button,
  Col,
  Row,
  Divider,
  Form,
  Input,
  Card,
  message,
  Upload,
  Select,
  Modal,
} from "antd";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import  Navbar  from '../../../component/navbar'
import  Headerbarlogo  from '../../../component/headbarlogo'
import back01 from '../../../assets/back01.png'

import { InboxOutlined } from '@ant-design/icons';
import TextArea from "antd/es/input/TextArea";
//import 'antd/dist/antd.css';
import "./style.css";
import oder01 from '../../../assets/oder01.svg'
import oder01_1 from '../../../assets/oder01-1.svg'
import oder02 from '../../../assets/oder02.svg'
import oder02_1 from '../../../assets/oder02-1.svg'
import oder03 from '../../../assets/oder03.svg'
import oder03_1 from '../../../assets/oder03-1.svg'
import oder04 from '../../../assets/oder04.svg'
import oder04_1 from '../../../assets/oder04-1.svg'
import oder05 from '../../../assets/oder05.svg'
import oder05_1 from '../../../assets/oder05-1.svg'

import { Link, useNavigate } from 'react-router-dom';



function Updatestatus() {
    const navigate = useNavigate();

    const handleImageClick = () => {
        // Use navigate to navigate programmatically
        navigate('/employee');
    };

    const Card_st: CSSProperties = {
        backgroundColor: '#ffffff',
        borderRadius: '10px',
        boxShadow: '0px 4px 4px #00000040',
        height: '274px',
        position: 'fixed', // You can adjust this value as needed
        width: '1098px',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        transition: 'box-shadow 5s ease-in-out', 
    };

    //เงื่อนไข

    let status = 1;
    let order1 ; let order2 ; let order3 ; let order4 ; let order5 ;

    if ( status >= 1) { order1 = oder01_1 }else{  order1 = oder01 }
    if ( status >= 2) { order2 = oder02_1 }else{  order2 = oder02 }
    if ( status >= 3) { order3 = oder03_1 }else{  order3 = oder03 }
    if ( status >= 4) { order4 = oder04_1 }else{  order4 = oder04 }
    if ( status >= 5) { order5 = oder05_1 }else{  order5 = oder05 }
    

    return (
        <>
            <Headerbarlogo />
            <Navbar />
            <Card style={Card_st}>
                <Row>
                    <img
                        src={back01}
                        style={{
                            height: '44px',
                            left: '1%',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '3%',
                            width: '65px',
                        }}
                        onClick={handleImageClick}
                        alt="Image"
                    />
                    <div className="label">
                        <div className="order-ID-status">Order ID.&nbsp;&nbsp;|&nbsp;&nbsp;status</div>
                    </div>

                </Row>
                <Row className="justify-content-center">
                    <img
                        src={order1}
                        style={{
                            height: '65px',
                            left: '96px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '65px',
                        }}
                    />
                    
                       
                    <img
                        src={order2}
                        style={{
                            height: '67px',
                            left: '161px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '201px',
                        }}
                    />
                    <img
                        src={order3}
                        style={{
                            height: '67px',
                            left: '362px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '218px',
                        }}
                    />
                    <img
                        src={order4}
                        style={{
                            height: '67px',
                            left: '580px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '216px',
                        }}
                    />
                    <img
                        src={order5}
                        style={{
                            height: '67px',
                            left: '796px',
                            objectFit: 'cover',
                            position: 'fixed',
                            top: '25%',
                            width: '206px',
                        }}
                    />
                </Row>
            </Card>
        </>
    );
}

export default Updatestatus;