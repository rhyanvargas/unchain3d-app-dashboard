import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
	try {
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);
		const user = await supabase.auth.getUser();

		// Call the external API
		const response = await fetch(`https://api.metakeep.xyz/v3/getWallet`, {
			method: "POST",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				"x-api-key": process.env.METAKEEP_API_KEY!,
			},
			body: JSON.stringify({ user: { email: user.data.user?.email } }),
		});

		if (!response.ok) {
			throw new Error(`Error fetching wallet: ${response.statusText}`);
		}
		const data = await response.json();

		// Return the wallet address to the client
		return new Response(JSON.stringify({ wallets: data.wallet }));
	} catch (error: any) {
		console.error("Error:", error.message);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
