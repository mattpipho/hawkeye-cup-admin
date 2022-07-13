import React from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const Navbar = ({ signOut }) => {
	const links = [
		"Tasks",
		"Configurations",
		"Courses",
		"Golfers",
		"Rounds",
		"Scorecard",
	];

	let items = links.map((link) => ({
		label: <Link to={`/${link.toLowerCase()}`}>{link}</Link>,
		key: link,
	}));

	items.push({
		label: <button onClick={signOut}>Sign out</button>,
		key: "sign-out",
	});

	return (
		<div className="menu">
			<Menu mode="horizontal" theme="light" items={items} />
		</div>
	);
};

export default withAuthenticator(Navbar);
