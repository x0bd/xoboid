import projects from "@/data/projects";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import { ArrowUpRight, ArrowUpRightSquare } from "lucide-react";

const ProjectCardSmall = () => {
	return (
		<>
			{projects.map(
				(project) =>
					project.promoted && (
						<Card
							className="flex flex-row justify-between items-center"
							key={project.title}
						>
							<CardHeader className="flex-row flex py-3 px-5 gap-5 items-center">
								<CardTitle className="font-normal text-base">
									{project.title}
								</CardTitle>
								<CardDescription>
									{project.description}
								</CardDescription>
							</CardHeader>
						</Card>
					)
			)}
		</>
	);
};

export default ProjectCardSmall;
