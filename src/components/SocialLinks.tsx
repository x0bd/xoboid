import { Github, Linkedin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import presentation from "@/data/presentation";

const SocialLinks = () => {
	return (
		<div>
			<div className="flex gap-2">
				<Link href={`https://${presentation.socials[0].link}`}>
					<TwitterIcon />
				</Link>
				<Link href={`https://${presentation.socials[2].link}`}>
					<Github />
				</Link>
				<Link href={`https://${presentation.socials[1].link}`}>
					<Linkedin />
				</Link>
			</div>
		</div>
	);
};

export default SocialLinks;
