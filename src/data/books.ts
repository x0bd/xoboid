export type Book = {
	title: string;
	author: string;
	cover: string;
	reading?: "currently reading";
};

export const books: Book[] = [
	{
		title: "Klara and the Sun",
		author: "Kazuo Ishiguro",
		cover: "/books/klara.png",
		reading: "currently reading",
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
	{
		title: "Chainsaw Man",
		author: "Tatsuki Fujimoto",
		cover: "/books/pochita.jpg",
		reading: "currently reading",
	},
	{
		title: "Generative Design",
		author: " Benedikt Gross, Hartmut Bohnacker, and Julia Laub",
		cover: "/books/gen.jpg",
	},
	{ title: "Dune", author: "Frank Herbert", cover: "/books/dune.jpg" },
	{
		title: "Classic Computer Science Problems in Python",
		author: "David Kopec",
		cover: "/books/python.jpg",
	},
	{
		title: "The Magician's Nephew",
		author: "C.S Lewis",
		cover: "/books/magic.jpg",
	},
	{
		title: "The Science of Interstellar",
		author: "Kip Thorne",
		cover: "/books/interstellar.jpg",
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
		title: "Wandi's Little Voice",
		author: "Ellen Mulenga Banda-Aaku",
		cover: "/books/wandi.jpg",
	},
	{
		title: "Rendezvous with Rama",
		author: "Arthur C. Clarke",
		cover: "/books/rama.jpg",
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
		title: "The Creative Gene",
		author: "Hideo Kojima",
		cover: "/books/gene.jpg",
	},
	{
		title: "Designing Games",
		author: "Tynan Sylvester",
		cover: "/books/games.jpg",
	},
	// {
	// 	title: "Children of Time",
	// 	author: "Adrian Tachoski",
	// 	cover: "/books/time.jpg",
	// },
];
