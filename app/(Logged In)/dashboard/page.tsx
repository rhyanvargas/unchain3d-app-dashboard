import Wallet from "@/components/Wallet";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function DashboardPage() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const userWallet = <Wallet />;
	const truncWallet = userWallet.toString().substring(0, 2) + "...";

	return (
		<div className="w-full">
			<h1 className="bg-gradient">Welcome, {user?.email}</h1>
			<h2 className="text-wrap">Wallet</h2>
			<h3 className="text-wrap"> {user?.email && truncWallet}</h3>
		</div>
	);
}
