import React from "react";

function Nav() {
	return (
		<nav className="NavCont">
			<button className="NavBtn"> Home </button>
			<button className="NavBtn"> Products </button>
			<button className="NavBtn"> Contact </button>
			<button className="NavBtn"> About </button>
			<button className="NavBtn"> Sign Up </button>
			{/* Second Nav */}
			{/* <button className ="NavBtn"Link to='/sign-in'>Sign In</button className ="NavBtn"Link> */}

			<button className="NavBtn">Sign In</button>
		</nav>
	);
}
export default Nav;
