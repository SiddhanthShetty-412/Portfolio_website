import Link from "next/link";

type HeroProps = {
	name?: string;
	tagline?: string;
};

export default function Hero({ name = "Your Name", tagline = "Short tagline from your resume." }: HeroProps) {
	return (
		<section className="flex min-h-[70vh] items-center justify-center text-center">
			<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
				<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
					{name}
				</h1>
				<p className="mt-4 text-base text-gray-600 sm:text-lg">
					{tagline}
				</p>
				<div className="mt-8">
					<Link
						href="/resume.pdf"
						className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800"
						prefetch={false}
					>
						Download Resume
					</Link>
				</div>
			</div>
		</section>
	);
}


