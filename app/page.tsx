import DeployButton from "../components/DeployButton";
import AuthButton from "../components/AuthButton";
import { Button } from "@/components/ui/button";
import Wallet from "@/components/Wallet";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function Index() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="flex-1 w-full flex flex-col gap-20 items-center">
			<nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
				<div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
					<DeployButton />
					<AuthButton />
				</div>
			</nav>


			<div className="">
				<main className="">
					<div>
						<h1 className="bg-gradient">
							UNCHAIN3D AI Powered Internet Experiences
						</h1>
						<p>
							Immersive Real and 3D Experiences. Live Streaming Sports and
							Entertainment. Peer 2 Peer Wagering. Gaming. Retail, Loyalty
							Rewards and more. Earn and Ownership with Digital Privacy, World
							Class Security and NO GAS FEES!
						</p>
						<Button variant="default">Get Started</Button>
						{user?.email}
						{user?.email && <Wallet email={user.email} />}
					</div>
				</main>
			</div>

			<footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
				<p>
					Powered by{" "}
					<a
						href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
						target="_blank"
						className="font-bold hover:underline"
						rel="noreferrer"
					>
						Supabase
					</a>
				</p>
			</footer>
		</div>
	);
}
