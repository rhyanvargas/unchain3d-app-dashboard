import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { cookies } from "next/headers";
import { Button } from "../ui/button";
import { LogOut } from "@/utils/supabase/actions";
import { routes } from "@/utils/constants";

export default async function AuthButton() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return user ? (
		<div className="w-full">
			<form className="py-0 w-full flex" action={LogOut}>
				<Button variant={"ghost"} className="w-full pl-2 justify-start">
					Logout
				</Button>
			</form>
		</div>
	) : (
		<Link className="w-full" href={routes.login}>
			<Button className="w-full pl-2 justify-start" variant={"ghost"}>
				Login
			</Button>
		</Link>
	);
}
