import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="relative h-auto w-[128px]">
			<Link href="/">
				<Image
					src="/logo-unchain3d.png" // replace with your logo path
					alt="UNCHAIN3D Logo"
					fill
					sizes="(max-width: 768px)  128px, (max-width: 1200px)  128px"
				/>
			</Link>
		</div>
	);
};

export default Logo;
