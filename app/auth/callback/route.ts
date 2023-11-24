import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: Request) {
	// The `/auth/callback` route is required for the server-side auth flow implemented
	// It exchanges an auth code for the user's session.

	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	try {
		const requestUrl = new URL(request.url);
		const code = requestUrl.searchParams.get("code");
		if (code) {
			await supabase.auth.exchangeCodeForSession(code);
		} else {
			throw new Error("Supabase Auth exchange Code not found");
		}

		// URL to redirect to after sign in process completes
		return NextResponse.redirect(requestUrl.origin);
	} catch (error) {
		console.error(error);
	}
}
