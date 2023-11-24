import { cookies } from "next/headers";
import { createClient } from "./server";
import { redirect } from "next/navigation";

export const LogOut = async () => {
	"use server";
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	await supabase.auth.signOut();

	return redirect("/login");
};
