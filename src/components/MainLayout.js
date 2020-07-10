import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const MainLayout = ({ children }) => {
	return (
		<Layout className="layout">
			<div id="mainheader">
				<div>
					<img id="mainlogo" src="hawkeye.png" alt="Home Page" />
				</div>
			</div>
			{/* <div id="mainNavbar">
				<MainNavbar />
			</div> */}
			<Content>
				<div className="site-layout-content">{children}</div>
			</Content>
		</Layout>
	);
};
export default MainLayout;
