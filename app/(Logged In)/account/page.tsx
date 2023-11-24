import { Separator } from "@/components/ui/separator";

export default function SettingsProfilePage() {
	return (
		<div className="">
			<div>
				<h2>Avatar</h2>
				<p className="text-sm text-muted-foreground">
					Avatar This is your avatar. Click on the avatar to upload a custom one
					from your files.
				</p>
			</div>
			<Separator />
			<div>
				<h2>FORM GOES HERE</h2>
			</div>
		</div>
	);
}
