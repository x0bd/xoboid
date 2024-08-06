export type Book = {
	title: string;
	author: string;
	cover: string;
	reading?: string;
};

export const books: Book[] = [
	{
		title: "Klara and the Sun",
		author: "Kazuo Ishiguro",
		cover: "/books/klara.png",
	},
	{
		title: "Neuromancer",
		author: "William Gibson",
		cover: "/books/neuromancer.jpg",
	},
	{
		title: "The Three-Body Problem",
		author: "Cixin Liu",
		cover: "/books/3body.jpg",
	},
	{
		title: "The Metamorphosis",
		author: "Franz Kafka",
		cover: "/books/kafka.jpg",
	},
	{
		title: "12 Rules for Life",
		author: "Jordan B. Peterson",
		cover: "/books/12-rules.jpg",
		reading: "currently reading",
	},
];
