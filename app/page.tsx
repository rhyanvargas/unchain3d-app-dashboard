import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Wallet from "@/components/Wallet";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Index() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="container space-y-6 h-full justify-center text-center py-24 px-24">
			<h1 className="bg-gradient">UNCHAIN3D AI Powered Internet Experiences</h1>
			<p className="px-36">
				Immersive Real and 3D Experiences. Live Streaming Sports and
				Entertainment. Peer 2 Peer Wagering. Gaming. Retail, Loyalty Rewards and
				more. Earn and Ownership with Digital Privacy, World Class Security and
				NO GAS FEES!
			</p>
			<div>
				<Link href="/login">
					<Button variant="default">Get Started</Button>
				</Link>
			</div>
		</div>
	);
}
