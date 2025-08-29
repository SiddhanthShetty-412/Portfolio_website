export type Certification = {
	title: string;
	issuer: string;
	date: string;
	link: string;
};

export const certifications: Certification[] = [
	{
		title: "Java Certification",
		issuer: "MBTB",
		date: "Feb 2024",
		link: "https://drive.google.com/drive/search?q=java%20certification",
	},
	{
		title: "Generative AI for Beginners",
		issuer: "Udemy",
		date: "Aug 2023",
		link:
			"https://www.udemy.com/certificate/UC-24dd17ed-e00b-4b9f-be19-acfe694c02c5/?utm_campaign=email&utm_medium=email&utm_source=sendgrid.com",
	},
	{
		title: "Data Science Certification",
		issuer: "Acmegrade",
		date: "2022",
		link: "https://drive.google.com/drive/search",
	},
];


