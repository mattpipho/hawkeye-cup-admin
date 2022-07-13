import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = () => {
	const links = [
		"Tasks",
		"Configurations",
		"Courses",
		"Golfers",
		"Rounds",
		"Scorecard",
	];

	const items = links.map((link) => ({
		label: <Link to={`/${link.toLowerCase()}`}>{link}</Link>,
		key: link,
	}));

	return (
		<div className="menu">
			<Menu mode="horizontal" theme="light" items={items} />
		</div>
	);
};

export default Navbar;
