import { Separator } from "@/components/ui/separator";
import { ProfileForm } from "./profile-form";

export default function SettingsProfilePage() {
	return (
		<div className="">
			<div>
				<h2>Profile</h2>
				<p className="text-sm text-muted-foreground">
					This is how others will see you on the site.
				</p>
			</div>
			<Separator />
			<div>
				<ProfileForm />
			</div>
		</div>
	);
}
