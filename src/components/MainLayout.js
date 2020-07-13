import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import MainNavbar from "./MainNavbar";

const { Content } = Layout;

const MainLayout = ({ children }) => {
	return (
		<Layout className="layout">
			<div id="mainheader">
				<div>
					<Link to="/">
						<img id="mainlogo" src="hawkeye.png" alt="Home Page" />
					</Link>
				</div>
			</div>
			<div id="mainNavbar">
				<MainNavbar />
			</div>
			<Content>
				<div className="site-layout-content">{children}</div>
			</Content>
		</Layout>
	);
};
export default MainLayout;
