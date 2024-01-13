import posts from "@/data/posts";
import formatDate from "@/utils/formatDate";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const Posts = () => {
	return (
		<main className="flex flex-col gap-20">
			<h1 className="text-3xl font-medium">
				Notes, Ideas, Dumps at any random time.
			</h1>
			<div className="grid lg:md:grid-cols-1 gap-8 sm:grid-cols-1 md:gap-6 text-xl font-medium">
				{posts.sort().map(
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

										<Badge variant="outline">
											{formatDate(
												new Date(post.publishDate)
											)}
										</Badge>
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
		</main>
	);
};

export const metadata = {
	title: "Posts",
	description: "Notes, Ideas, Dumps at any random time.",
};

export default Posts;
