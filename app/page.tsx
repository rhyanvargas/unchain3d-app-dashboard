import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Wallet from "@/components/Wallet";
import { Button } from "@/components/ui/button";

export default async function Index() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="flex-1 w-full flex flex-col gap-20">
			<div className="">
				<div>
					<h1 className="bg-gradient">
						UNCHAIN3D AI Powered Internet Experiences
					</h1>
					<p>
						Immersive Real and 3D Experiences. Live Streaming Sports and
						Entertainment. Peer 2 Peer Wagering. Gaming. Retail, Loyalty Rewards
						and more. Earn and Ownership with Digital Privacy, World Class
						Security and NO GAS FEES!
					</p>
					{user?.email}
					{user?.email && <Wallet />}
					<Button variant="default">Get Started</Button>
				</div>
			</div>

			<footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
				<p>
					Powered by{" "}
					<a
						href="https://unchain3d.io"
						target="_blank"
						className="font-bold hover:underline"
						rel="noreferrer"
					>
						<span className="bg-gradient">UNCHAIN3D</span>
					</a>
				</p>
			</footer>
		</div>
	);
}
