import React, { useState } from 'react'
import './style.scss';
import {Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
	const [ collapsed, setCollapsed ] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Menu theme="dark" mode="inline" defaultSelectedKeys={[ '1' ]}>
					<Menu.Item key="1" icon={<UserOutlined />}>
						<Link to="/">Home</Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<VideoCameraOutlined />}>
					<Link to="/print">Print</Link>
					</Menu.Item>
					<Menu.Item key="3" icon={<UploadOutlined />}>
						nav 3
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{ padding: 0 }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						className: 'trigger',
						onClick: toggle
					})}
				</Header>
				<Content
					className="site-layout-background"
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280
					}}
				>
					{children}
				</Content>
			</Layout>
		</Layout>
	);
};
export default MainLayout;
