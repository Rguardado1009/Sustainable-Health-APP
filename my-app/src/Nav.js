import React from "react";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav className="NavCont">
			<Link className="Links" to="/">
				{" "}
				Home{" "}
			</Link>
			<Link className="Links" to="/products">
				{" "}
				Products{" "}
			</Link>
			<Link className="Links" to="/about">
				{" "}
				About{" "}
			</Link>
		</nav>
	);
}
export default Nav;
