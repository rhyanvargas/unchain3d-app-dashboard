"use server";
import { cache } from "react";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";

export const createServerSupabaseClient = cache(() => {
	const cookieStore = cookies();
	return createServerComponentClient({ cookies: () => cookieStore });
});
export const createRouteSupabaseClient = cache(() => {
	const cookieStore = cookies();
	return createRouteHandlerClient({ cookies: () => cookieStore });
});

export const getUser = async () => {
	const supabase = await getSupabase({ typeOfHandler: "server" });

	if (!supabase) {
		throw new Error("Supabase client not found");
	}
	try {
		const {
			data: { user },
		} = await supabase.auth.getUser();

		if (user) {
			return {
				message: "success",
				user,
			};
		} else throw new Error("User not found");
	} catch (error) {
		console.error(error);
		return {
			message: `${error}`,
			user: null,
		};
	}
};

type TypeOfHandler = "server" | "route";
export async function getSupabase({
	typeOfHandler = "server",
}: {
	typeOfHandler: TypeOfHandler;
}) {
	const supabase =
		typeOfHandler === "server"
			? createServerSupabaseClient()
			: createRouteSupabaseClient();

	if (!supabase) {
		throw new Error("Supabase client not found");
	}

	return supabase;
}
