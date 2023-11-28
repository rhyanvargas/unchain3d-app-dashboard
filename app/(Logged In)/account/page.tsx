import { ProfileForm } from "@/app/profile/profile-form";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function SettingsProfilePage() {
	const cookieStore = cookies();
	const supabase = createClient(cookieStore);
	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div className="space-y-6">
			<div>
				<h2>Profile</h2>
			</div>

			<div className="">
				<ProfileForm user={user} />
			</div>
		</div>
	);
}
