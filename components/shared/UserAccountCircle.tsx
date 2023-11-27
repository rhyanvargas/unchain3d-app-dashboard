import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/utils/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import AuthButton from "./AuthButton";

export function UserAccountCircle() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem className="p-0">
					<Link className="w-full" href={routes.dashboard.home}>
						<Button className="w-full pl-2 justify-start" variant={"ghost"}>
							Dashboard
						</Button>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem className="p-0">
					<Link className="w-full" href={routes.account.home}>
						<Button className="w-full pl-2 justify-start" variant={"ghost"}>
							Settings
						</Button>
					</Link>
				</DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem className="p-0">
					<AuthButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
