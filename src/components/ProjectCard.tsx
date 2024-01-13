import projects from "@/data/projects";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import Link from "next/link";

const ProjectCard = () => {
	return (
		<div className="grid lg:md:grid-cols-2 gap-8 sm:grid-cols-1 md:gap-6">
			{projects.length === 0 && <p>Cooking Something 🧑‍🍳</p>}
			{projects.map(
				(project) =>
					!project.isComingSoon && (
						<Card
							key={project.description}
							className="flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:border-ambient justify-between"
						>
							<Link
								href={`https://${project.link}`}
								target="_blank"
							>
								<CardHeader className="flex-col gap-4 px-6 py-2">
									<div className="flex flex-row w-full items-center justify-between">
										<Avatar>
											<AvatarImage
												src={`/img/projects/${project.image}`}
												alt={project.title}
											/>
											<AvatarFallback>
												{project.title.slice(0, 2)}
											</AvatarFallback>
										</Avatar>
										<div>
											{project.wip && (
												<Badge
													className="bg-ambient font-light text-white"
													variant="default"
												>
													wip
												</Badge>
											)}
										</div>
									</div>
									<div>
										<CardTitle className="text-lg font-medium">
											{project.title}
										</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										{project.description}
									</CardDescription>
								</CardContent>
								<CardFooter className="flex flex-wrap gap-1">
									{project.techs.map((tech) => (
										<Badge
											variant="outline"
											key={project.title}
										>
											{tech}
										</Badge>
									))}
								</CardFooter>
							</Link>
						</Card>
					)
			)}
		</div>
	);
};

export default ProjectCard;
