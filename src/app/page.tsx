"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	ArrowBigLeft,
	Github,
	Link2,
	Linkedin,
	LucideLink,
	TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<Card className="flex flex-col outline-none justify-between">
				<CardHeader className="flex-row gap-16 items-center">
					<Avatar>
						<AvatarImage
							sizes="lg"
							src="/img/xoboid.jpg"
							alt="Tinodaishe Tembo"
						/>
						<AvatarFallback>xo</AvatarFallback>
					</Avatar>
					<div className="flex-row gap-2">
						<CardTitle>Tinodaishe Tembo</CardTitle>
						<CardDescription className="my-2">
							<div className="flex gap-1 flex-row">
								<Link href="/">
									<TwitterIcon />
								</Link>
								<Link href="">
									<Github />
								</Link>
								<Link href="">
									<Linkedin />
								</Link>
							</div>
						</CardDescription>
					</div>
				</CardHeader>
				<CardContent className="text-lg">
					<p>
						A guy who uses a computer to decode signals from the
						void through code and pixel experiments.
					</p>
					<p className="my-2">
						Currently building <Link href="/">celeste</Link>
					</p>
				</CardContent>
			</Card>
		</main>
	);
}
