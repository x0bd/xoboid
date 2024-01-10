"use client";

import { Github, Linkedin, TwitterIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import projects from "@/data/projects";
import presentation from "@/data/presentation";
import ProjectCardSmall from "@/components/ProjectCardSmall";

import strongTag from "@/utils/strongTag";

export default function Home() {
	return (
		<main className="flex flex-col gap-20">
			<article className="flex flex-col gap-8 md:justify-end md:gap-12">
				<div className="flex gap-6 items-center md:flex-row sm:flex-col">
					<Image
						src="/img/xoboid.jpg"
						alt="void"
						className="w-1/6 self-center rounded-full"
						width="180"
						height="180"
					/>
					<div className="flex flex-col gap-3">
						<h1 className="text-3xl font-bold md:text-3xl">
							{presentation.name}
						</h1>
						<div className="flex gap-2">
							<Link href="/">
								<TwitterIcon />
							</Link>
							<Link href="/">
								<Github />
							</Link>
							<Link href="/">
								<Linkedin />
							</Link>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<p className="font-bold text-xl">{presentation.title}</p>
					<p className="text-justify">{presentation.description}</p>
					<p className="text-justify">
						{presentation.currentProject}
					</p>
				</div>
			</article>
			<article className="flex flex-col gap-8">
				<header className="flex w-full flex-row justify-between gap-2">
					<h3 className="text-lg">Featured Projects</h3>
					<Link
						href="/projects"
						target="_self"
					>
						All
					</Link>
				</header>
				{projects.length === 0 && <p>I must work</p>}

				<section className="flex flex-col gap-4">
					<ProjectCardSmall />
				</section>
			</article>
		</main>
	);
}
