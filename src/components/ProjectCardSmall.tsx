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

const ProjectCardSmall = () => {
	return (
		<div className="grid lg:md:grid-cols-2 gap-8 sm:grid-cols-1 md:gap-6">
			{projects.map(
				(project) =>
					project.promoted && (
						<Card
							key={project.description}
							className="flex flex-col justify-between"
						>
							<Link href={`https://${project.link}`}>
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
											{project.isComingSoon && (
												<Badge variant="default">
													Soon
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
									<p>{project.description}</p>
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

export default ProjectCardSmall;
