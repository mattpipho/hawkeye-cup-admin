import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
	return (
		<div className="menu">
			<Menu mode="horizontal" theme="light">
				<Menu.Item key="tasks">
					<Link to="/tasks">Tasks</Link>
				</Menu.Item>
				<Menu.Item key="configurations">
					<Link to="/configurations">Configurations</Link>
				</Menu.Item>
				<Menu.Item key="courses">
					<Link to="/courses">Courses</Link>
				</Menu.Item>
				<Menu.Item key="golfers">
					<Link to="/golfers">Golfers</Link>
				</Menu.Item>
				<Menu.Item key="rounds">
					<Link to="/rounds">Rounds</Link>
				</Menu.Item>
				<Menu.Item key="scorecard">
					<Link to="/scorecard">Scorecard</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Navbar;
