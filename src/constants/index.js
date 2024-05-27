import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	amazon,
	real,
	stock,
	tripguide,
	threejs,
	nonceblox,
	hubinit,
	self,
	sawaliram,
	aman,
	kanika,
	saqib,
	udemy,
	facebook,
	car,
	wipiway
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Full Stack Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "Web3 Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "Full Stack developer",
		company_name: "Eklavya Foundation",
		icon: sawaliram,
		iconBg: "#383E56",
		date: "Mar 2021 - Dec 2021",
		points: [
			"Developed and designed a full-stack website for this Education Institute using HTML, CSS, Bootsrtap5, Javascript, and Python(Django).",
			"Implemented LMS to conduct Tests/Quizzes, with a developed admin dashboard for this E-platform with an increase in the efficiency of 15-20%.",
			"Developed Sign-up/Login Authentication via social accounts(Ex;- Facebook, Google) via Django all auth which achieved a 15% increase in efficiency and functionality of code.",
			"Participating in code reviews and providing constructive feedback to other developers.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "HubinIT",
		icon: hubinit,
		iconBg: "#E6DEDD",
		date: "Dec 2021 - May 2022",
		points: [
			"Developing and maintaining web applications using React.js and Vue.js and other related technologies.",
			"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
			"Implemented User Services for CRUD operations and Assessed the efficiency and speed of the Application.",
			"Developed Vue JS components for front-end web pages, increased efficiency by 15%, and Implemented Creating tools that Improve site interaction regardless of the browser.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Nonceblox Pvt Ltd",
		icon: nonceblox,
		iconBg: "#383E56",
		date: "May 2022 - Oct 2022",
		points: [
			"Implemented Minting NFTs UI with API Integration and added Staking and Unstaking NFTs functionality for user and admin functionality with UI and API integration.",
			"Worked on implementation of storing NFTS and contract address and also worked on debugging and Error Handling.",
			"Implemented most of the Frontend Reusable component from scratch for Seed Project with State management as redux-toolkit with a 20% increase in efficiency, SEO, performance, and accessibility with a score of at least greater than 90.",
			"Worked on the backend for CRUD operations of NFTs, and contract addresses, worked on debugging and Error Handling.",
		],
	},
	{
		title: "Full Stack Developer",
		company_name: "Self Employed",
		icon: self,
		iconBg: "#383E56",
		date: "Oct 2022 - Feb 2023",
		points: [
			"Developed End to End Ecommerce Website for a client with all the functionalities like Buy/Sell with admin dashboard.",
			"Developed an NFT Marketplace with Minting. Staking and Unstaking and storing tokens with its Meta data in the backend.",
			"Implemented these and some more projects in Tech Stack Like MERN Stack with Typescript, AWS, and Docker with quality code.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},{
		title: "Full Stack Developer",
		company_name: "Wipiway",
		icon: wipiway,
		iconBg: "#383E56",
		date: "Apr 2023 - Present",
		points: [
			"Developing Decentralized Social Platform with Biconomy with Farcaster integration",
			"Working on Web3 Marketplaces such as Real Nifty and worked on licensing of NFTs with MERN Stack.",
			"Implementing Solidity Auditing project in Tech Stack Like MERN Stack with Typescript, AWS, and Docker with quality code.",
			"Implementing responsive design and ensuring cross-browser compatibility.",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Abdul Sagheer with his keen knowledge in development helped me in planning the structure of my project and gave very good suggestions and reviews of my work I would definitely recommend him for Website as well as Full stack development and management work.",
		name: "Aman Dwivedi",
		designation: "Technical Writer",
		company: "Scaler",
		image: aman,
	},
	{
		testimonial:
			"Abdul Sagheer is very hardworking and highly skilled in his professional life. He works very firmly with his clients and is very well mannered in delivering his services. If you wanna hire him I would definitely recommend to give him a chance.",
		name: "kanika aggarwal",
		designation: "kanika aggarwal ",
		company: "Webmyne Systems Private Limited",
		image: kanika,
	},
	{
		testimonial:
			"Abdul sagheer has a genuine knowledge about web development and he is a full stack developer people can approach him directly if they have doubts regarding web development,  If you wanna hire him I would definitely recommend to give him a chance.!",
		name: "Mohammed Saqib Ahmed",
		designation: "Test Automation Engineer",
		company: "Viatris",
		image: saqib,
	},
];

const projects = [
	{
		name: "E Shop",
		description:
			"Developed an E-commerce website by the name 'E-SHOP' which can contain all categories of products, to buy products and admin to manage the inventory with stripe api integration for payments.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "blue-text-gradient",
			},
		],
		image: amazon,
		source_code_link: "https://github.com/abdulsagheer/complete-amazon-MERN",
	},
	{
		name: "Real Estate",
		description:
			"Web application With modern material design, a fully functional dashboard, a property management page, and a users page - both connected to our database and a profile page that connects the two realtors.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "blue-text-gradient",
			},
		],
		image: real,
		source_code_link: "https://github.com/abdulsagheer/MERN-Real-Estate",
	},
	{
		name: "Stock Exchange System",
		description:
			"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "redultoolkit",
				color: "green-text-gradient",
			},
		],
		image: stock,
		source_code_link: "https://github.com/abdulsagheer/Stock-Exchange-App",
	},
	{
		name: "Eth Course Marketplace",
		description:
			"Developed an Ethereum marketplace for buying a Programming course and to Learn programming and web development the easy way!",
		tags: [
			{
				name: "nextjs",
				color: "blue-text-gradient",
			},
			{
				name: "web3js",
				color: "green-text-gradient",
			},
			{
				name: "tailwindcss",
				color: "pink-text-gradient",
			},
			{
				name: "truffle",
				color: "green-text-gradient",
			},
		],
		image: udemy,
		source_code_link:
			"https://github.com/abdulsagheer/Ethereum-Course-Marketplace",
	},
	{
		name: "Facebook",
		description:
			"A comprehensive Facebook social media web app to post the items, save the post, add story, search profile, and send/accept friend request to share memories and happiness",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "mongodb",
				color: "pink-text-gradient",
			},
			{
				name: "express",
				color: "green-text-gradient",
			},
		],
		image: facebook,
		source_code_link: "https://github.com/abdulsagheer/Facebook",
	},
	{
		name: "Car Booking System",
		description:
			"A comprehensive car booking platform that allows users to rental cars, and offers curated recommendations for popular cars.",
		tags: [
			{
				name: "reactjs",
				color: "blue-text-gradient",
			},
			{
				name: "nestjs",
				color: "green-text-gradient",
			},
			{
				name: "mysql",
				color: "pink-text-gradient",
			},
			{
				name: "typescript",
				color: "green-text-gradient",
			},
		],
		image: car,
		source_code_link: "https://github.com/abdulsagheer/Car-Booking-System",
	},
];

export { services, technologies, experiences, testimonials, projects };
