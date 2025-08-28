import Link from "next/link";

type ProjectCardProps = {
	title: string;
	description: string;
	tech: string[];
	github?: string;
	demo?: string;
};

export default function ProjectCard({ title, description, tech, github, demo }: ProjectCardProps) {
	return (
		<div className="group relative flex flex-col rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
			<h3 className="text-lg font-semibold text-gray-900">{title}</h3>
			<p className="mt-2 text-sm text-gray-600">{description}</p>
			<ul className="mt-4 flex flex-wrap gap-2">
				{tech.map((t) => (
					<li key={t} className="rounded-full bg-gray-100 px-2.5 py-1 text-xs text-gray-700">
						{t}
					</li>
				))}
			</ul>
			<div className="mt-5 flex gap-3">
				{github ? (
					<Link
						href={github}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:bg-gray-50"
					>
						GitHub
					</Link>
				) : null}
				{demo ? (
					<Link
						href={demo}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white transition group-hover:bg-gray-800"
					>
						Live Demo
					</Link>
				) : null}
			</div>
			<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-gray-200" />
		</div>
	);
}



