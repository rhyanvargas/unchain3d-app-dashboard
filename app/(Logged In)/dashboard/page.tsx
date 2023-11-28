import Wallet from "@/components/Wallet";
import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function DashboardPage() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="w-full flex flex-col space-y-6 justify-center items-center">
			<h1 className="bg-gradient text-center">Welcome, {user?.email}</h1>
			<div>
				{user && (
					<Link href="/account">
						<Button variant="default">Go to Settings</Button>
					</Link>
				)}
			</div>
		</div>
	);
}
