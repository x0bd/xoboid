import projects from "@/data/projects";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { ArrowUpRight, ArrowUpRightSquare } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import Image from "next/image";

const ProjectCardSmall = () => {
	return (
		<div className="grid grid-cols-2 gap-8">
			{projects.map(
				(project) =>
					project.promoted && (
						<Card
							key={project.description}
							className="flex flex-col justify-between"
						>
							<CardHeader className="flex-row gap-4 items-center p-2">
								<Avatar>
									<AvatarImage
										src={`/img/projects/${project.image}`}
										alt={project.title}
									/>
									<AvatarFallback>
										{project.title.slice(0, 2)}
									</AvatarFallback>
								</Avatar>
								<div className="flex flex-row w-full justify-between">
									<div>
										<CardTitle className="text-lg font-normal">
											{project.title}
										</CardTitle>
									</div>
									<div>
										{project.isComingSoon && (
											<Badge variant="default">
												Soon
											</Badge>
										)}
									</div>
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
						</Card>
					)
			)}
		</div>
	);
};

export default ProjectCardSmall;
