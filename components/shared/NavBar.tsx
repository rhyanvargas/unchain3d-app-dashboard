import React from "react";
import { UserAccountCircle } from "./UserAccountCircle";
import Logo from "../ui/Logo";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { navBarHeight } from "@/utils/constants";
import Wallet from "../Wallet";

const NavBar: React.FC = async () => {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const styles = {
		divCenterNav: "container flex justify-center items-center",
		divBetweenNav: "container flex justify-between items-center",
		navHeight: `h-[${navBarHeight}]`,
	};
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<nav
			className={`w-full border-b border-b-foreground/10 py-3 fixed top-0 backdrop-blur-md ${styles.navHeight} z-10`}
		>
			<div className={user ? styles.divCenterNav : styles.divBetweenNav}>
				<Logo />
				{user && (
					<div className="container flex justify-end items-center">
						{user && (
							<div className="max-w-[105px] mr-6 overflow-x-hidden hover:max-w-none">
								<Wallet />
							</div>
						)}

						<UserAccountCircle user={user} />
					</div>
				)}
			</div>
		</nav>
	);
};

export default NavBar;
