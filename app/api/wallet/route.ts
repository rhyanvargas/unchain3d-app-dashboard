import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(request: Request) {
	try {
		const email = new URL(request.url).searchParams.get("email");

		// Call the external API
		const response = await fetch(`https://api.metakeep.xyz/v3/getWallet`, {
			method: "POST",
			headers: {
				accept: "application/json",
				"Content-Type": "application/json",
				"x-api-key": process.env.METAKEEP_API_KEY!,
			},
			body: JSON.stringify({ user: { email: email } }),
		});
		if (!response.ok) {
			throw new Error(`Error fetching wallet: ${response.statusText}`);
		}
		const data = await response.json();

		// Log the wallet address
		console.log("Wallet Address:", data);

		// Return the wallet address to the client
		return new Response(JSON.stringify({ wallets: data.wallet }));
	} catch (error) {
		console.error("Error:", error.message);
		return new Response(JSON.stringify({ error: error.message }), {
			status: 500,
		});
	}
}
