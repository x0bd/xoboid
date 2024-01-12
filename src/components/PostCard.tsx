import posts from "@/data/posts";
import formatDate from "@/utils/formatDate";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "./ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "./ui/badge";

const PostCard = () => {
	return (
		<div className="grid lg:md:grid-cols-1 gap-8 sm:grid-cols-1 md:gap-6 text-xl font-medium">
			{posts.slice(0, 2).map(
				(post) =>
					post.isPublished && (
						<Card
							className="flex flex-col p-0 transition-all duration-300 hover:-translate-y-1 hover:border-ambient justify-between"
							key={post.slug}
						>
							<Link href={`/posts/${post.slug}`}>
								<CardHeader className="flex flex-row items-center justify-between">
									<CardTitle className="font-medium text-xl">
										{post.title}
									</CardTitle>
									<div className="flex flex-row gap-3 justify-center">
										<Badge variant="outline">
											{formatDate(
												new Date(post.publishDate)
											)}
										</Badge>
										<ArrowUpRight />
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription>
										{post.description}
									</CardDescription>
								</CardContent>
							</Link>
						</Card>
					)
			)}
		</div>
	);
};

export default PostCard;
