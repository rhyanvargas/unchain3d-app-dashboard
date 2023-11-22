import React from "react";
import { UserAccountCircle } from "./UserAccountCircle";
import AuthButton from "./AuthButton";
import Logo from "../ui/Logo";

const NavBar: React.FC = () => {
	return (
		<nav className="w-full border-b border-b-foreground/10">
			<div className="container flex justify-between py-4">
				<Logo />

				<div className="flex space-x-4 lg:space-x-6 text-sm">
					<AuthButton />
					<UserAccountCircle />
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
