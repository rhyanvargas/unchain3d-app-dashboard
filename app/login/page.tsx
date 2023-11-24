import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { routes } from "@/utils/constants";

export default function Login({
	searchParams,
}: {
	searchParams: { message: string };
}) {
	const signIn = async (formData: FormData) => {
		"use server";

		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			return redirect("/login?message=Could not authenticate user");
		}

		return redirect(routes.dashboard.home);
	};

	const signUp = async (formData: FormData) => {
		"use server";

		const origin = headers().get("origin");
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		const cookieStore = cookies();
		const supabase = createClient(cookieStore);

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${origin}/auth/callback`,
			},
		});

		if (error) {
			return redirect("/login?message=Could not authenticate user");
		}

		return redirect("/login?message=Check email to continue sign in process");
	};

	return (
		<div className="sm:grid sm:grid-cols-8 gap-1 w-full">
			{/* col left */}
			<div className="col-span-3 flex flex-col w-full px-8 justify-center align-middle gap-2 h-screen">
				<div className="">
					<form
						className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground sm:max-w-md"
						action={signIn}
					>
						<label className="text-md" htmlFor="email">
							Email
						</label>
						<input
							className="rounded-md px-4 py-2 bg-inherit border mb-6"
							name="email"
							placeholder="you@example.com"
							required
						/>
						<label className="text-md" htmlFor="password">
							Password
						</label>
						<input
							className="rounded-md px-4 py-2 bg-inherit border mb-6"
							type="password"
							name="password"
							placeholder="••••••••"
							required
						/>
						<button className="bg-green-700 rounded-md px-4 py-2 text-foreground mb-2">
							Sign In
						</button>
						<button
							formAction={signUp}
							className="border border-foreground/20 rounded-md px-4 py-2 text-foreground mb-2"
						>
							Sign Up
						</button>
						{searchParams?.message && (
							<p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
								{searchParams.message}
							</p>
						)}
					</form>
				</div>
			</div>
			{/* col right */}
			<div className="col-span-5 flex justify-center align-middle items-center h-screen bg-[url('/unchain3d_world.jpg')] bg-cover bg-center ">
				<div className="backdrop-blur-sm w-full h-full flex items-center justify-center bg-black/60">
					<div className="p-8 text-center">
						<h1 className="bg-gradient font-bold text-7xl">Bet.Play.Earn</h1>
						<p>Sign up and enjoy your first bet on us!</p>
					</div>
				</div>
			</div>
		</div>
	);
}
