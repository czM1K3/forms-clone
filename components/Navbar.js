import React from "react";
import Link from "next/link";

const MyNavbar = () => {
	return (
		<nav className="navbar navbar-epand-md navbar-dark bg-dark mb-4">
			<div className="container">
				<Link href="/">
					<a className="navbar-brand">Fake Forms</a>
				</Link>
			</div>
		</nav>
	);
};

export default MyNavbar;
