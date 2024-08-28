export type Book = {
	title: string;
	author: string;
	cover: string;
	reading?: "currently reading";
};

export const books: Book[] = [
	{
		title: "Chainsaw Man",
		author: "Tatsuki Fujimoto",
		cover: "/books/pochita.jpg",
		reading: "currently reading",
	},
	{
		title: "The Three-Body Problem",
		author: "Cixin Liu",
		cover: "/books/3body.jpg",
	},
	{
		title: "Klara and the Sun",
		author: "Kazuo Ishiguro",
		cover: "/books/klara.png",
	},
	{
		title: "The Nature Of Code",
		author: "Daniel Shiffman",
		cover: "/books/code.jpg",
		reading: "currently reading",
	},
	{
		title: "Neuromancer",
		author: "William Gibson",
		cover: "/books/neuromancer.jpg",
	},
	{
		title: "Dune",
		author: "Frank Herbert",
		cover: "/books/dune.jpg",
	},
	{
		title: "The Metamorphosis",
		author: "Franz Kafka",
		cover: "/books/kafka.jpg",
	},
	{
		title: "Geometry For Programmers",
		author: "Oleksandr Kaleniuk",
		cover: "/books/geometry.png",
	},
	{
		title: "The Creative Gene",
		author: "Hideo Kojima",
		cover: "/books/gene.jpg",
	},
	{
		title: "The Magician's Nephew",
		author: "C.S Lewis",
		cover: "/books/magic.jpg",
	},
	{
		title: "Children of Time",
		author: "Adrian Tchaikovsky",
		cover: "/books/time.jpg",
	},
	{
		title: "Zero To One",
		author: "Peter Thiel",
		cover: "/books/0to1.jpg",
	},
	{
		title: "Elon Musk",
		author: "Walter Isaacson",
		cover: "/books/elon.jpg",
	},
	{
		title: "86-Eighty Six",
		author: "Asato Asato",
		cover: "/books/86.jpg",
	},
	{
		title: "Superintelligence",
		author: "Nick Bostrom",
		cover: "/books/super.jpg",
	},
	{
		title: "Astrophysics for People in a Hurry",
		author: "Neil deGrasse Tyson",
		cover: "/books/astro.jpg",
	},
	{
		title: "12 Rules for Life",
		author: "Jordan B. Peterson",
		cover: "/books/12-rules.jpg",
		reading: "currently reading",
	},
	{
		title: "Designing Games",
		author: "Tynan Sylvester",
		cover: "/books/games.jpg",
	},

	{
		title: "The Science of Interstellar",
		author: "Kip Thorne",
		cover: "/books/interstellar.jpg",
	},
];
