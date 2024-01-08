import React, { CSSProperties, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout, Button, Menu } from "antd";
import type { MenuProps } from "antd";
import { Table, Dropdown, Space } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SkinOutlined,
  HomeOutlined,
  TeamOutlined,
  FileTextOutlined,
  ShoppingOutlined,
  PoweroffOutlined,
  MoreOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const { Header, Footer, Sider, Content } = Layout;

const Employee = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const headerStyle: CSSProperties = {
    justifyContent: "center",
    minHeight: "200px",
    backgroundColor: "#f5f5f5",
    display: "flex",
  };

  const contentStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
    display: "flex",
    padding: 25,
  };

  const siderStyle: CSSProperties = {
    justifyContent: "center",
    backgroundColor: "#D9E2D9",
    display: "flex",
    // borderRight: "1px solid black",
  };

  const footerStyle: CSSProperties = {
    justifyContent: "center",
    lineHeight: "44px",
    color: "black",
    backgroundColor: "#f5f5f5",
    display: "flex",
  };

  const layoutStyle = {
    overflow: "hidden",
    width: "100%",
    height: "100%",
  };
  //content
  interface Employee {
    key: React.Key;
    employeeid: string;
    name: string;
    username: string;
    password: string;
    email: string;
    phone: string;
    department: string;
  }
  const columns: ColumnsType<Employee> = [
    {
      title: "ID",
      dataIndex: "employeeid",
      width: "3%",
    },
    {
      title: "Name",
      dataIndex: "name",
      width: "15%",
    },
    {
      title: "Username",
      dataIndex: "username",
      width: "12%",
    },
    {
      title: "Password",
      dataIndex: "password",
      width: "12%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "15%",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      width: "10%",
    },
    {
      title: "Department",
      dataIndex: "department",
      filters: [
        { text: "Restocker", value: "Restocker" },
        { text: "Checkpayment", value: "Checkpayment" },
      ],
      onFilter: (value, record) => record.department === value,
      width: "8%",
    },
    {
      title: "",
      width: "5%",
      render: (text, record) => (
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <MoreOutlined style={{ color: 'black' }}/>
            </Space>
          </a>
        </Dropdown>
      ),
    },
  ];
  //feature
  const items: MenuProps["items"] = [
    {
      label: <a><EditOutlined/>Edit</a>,
      key: "0",
    },
    {
      label: <a><DeleteOutlined/>Delete</a>,
      key: "1",
    },
  ];
  //sample
  const data: Employee[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      employeeid: `${i}`,
      name: "example name",
      username: "p",
      password: "1234",
      email: "p@1234.com",
      phone: "621566545",
      department: "Restocker",
    });
  }
  //header
  const headerRectangle: CSSProperties = {
    width: "300px",
    height: "150px",
    backgroundColor: "#D9E2D9",
    marginRight: "50px",
    marginTop: "35px",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    display: "flex",
  };
  const headerText: CSSProperties = {
    textAlign: "center",
    width: "100%",
    color: "black",
    marginTop: "90px",
    fontSize: "20px",
    fontWeight: "500",
  };

  return (
    <Layout style={layoutStyle}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
        collapsedWidth={115}
      >
        <ShoppingOutlined
          style={{
            position: "absolute",
            color: "#343434",
            marginTop: "20px",
            fontSize: "30px",
            left: collapsed ? "36%" : "10px",
          }}
        />
        <span
          style={{
            position: "absolute",
            display: collapsed ? "none" : "block",
            color: "#343434",
            marginTop: "23px",
            left: "40px",
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          Torhinozorus
        </span>
        <div className="sider menu" />
        <Menu
          onClick={({ key }) => {
            if (key == "signout") {
              //sign out feature
            } else {
              navigate(key);
            }
          }}
          theme="light"
          mode="inline"
          defaultSelectedKeys={["/admin/employee"]}
          items={[
            {
              key: "/admin",
              icon: <HomeOutlined />,
              label: "General",
            },
            {
              key: "/admin/employee",
              icon: <TeamOutlined />,
              label: "Employee",
            },
            {
              key: "/admin/product",
              icon: <SkinOutlined />,
              label: "Product",
            },
            {
              key: "/admin/order",
              icon: <FileTextOutlined />,
              label: "Order",
            },
            {
              key: "signout",
              icon: <PoweroffOutlined />,
              label: "Signout",
              style: { color: "red", marginTop: "650px" },
            },
          ]}
          style={{
            backgroundColor: "#D9E2D9",
            border: "none",
            color: "#343434",
            fontSize: "18px",
            marginTop: "70px",
          }}
        />
      </Sider>
      <Layout>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            position: "absolute",
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Header style={headerStyle}>
          <div style={headerRectangle}>
            <span style={headerText}>Employee</span>
          </div>
          <div style={{ ...headerRectangle, marginRight: "50px" }}>
            <span style={headerText}>Department</span>
          </div>
        </Header>
        <Content>
          <div style={contentStyle}>
            <Table
              columns={columns}
              dataSource={data}
              //   pagination={{ pageSize: 50 }}
              scroll={{ y: 550 }}
            />
          </div>
        </Content>
        <Footer style={footerStyle}>
          Torhinozorus ©{new Date().getFullYear()} Created by Torhinozorus DEV
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Employee;
