import Image from "next/image";
import Link from "next/link";

const Logo = () => {
	return (
		<div className="relative h-auto max-h-30px w-[135px]">
			<Link href="/">
				<Image
					src="/logo-unchain3d.png" // replace with your logo path
					alt="UNCHAIN3D Logo"
					height={35}
					width={235}
				/>
			</Link>
		</div>
	);
};

export default Logo;
