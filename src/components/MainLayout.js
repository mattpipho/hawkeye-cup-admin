import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "antd";
import MainNavbar from "./MainNavbar";

import { useMainState } from "../context/mainContext";

const { Content } = Layout;

const MainLayout = ({ children }) => {
	const mainState = useMainState();

	if (mainState.loading) return <div>Loading ... </div>;
	if (mainState.errors)
		return (
			<div>
				The developer of this site has sliced it and is deep in the
				woods. He is hacking is way out!
			</div>
		);

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
