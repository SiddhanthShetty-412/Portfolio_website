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
		<div className="group relative flex flex-col rounded-xl border border-gray-700 bg-gray-800/60 p-6 text-gray-200 shadow-md shadow-purple-900/40 transition hover:translate-y-1 hover:border-purple-500 hover:shadow-lg">
			<h3 className="text-lg font-semibold text-gray-200 transition-colors group-hover:text-gray-100">{title}</h3>
			<p className="mt-2 text-sm text-gray-200 transition-colors group-hover:text-gray-100">{description}</p>
			<ul className="mt-4 flex flex-wrap gap-2">
				{tech.map((t) => (
					<li key={t} className="rounded-full bg-indigo-500/10 px-2.5 py-1 text-xs text-indigo-300">
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
						aria-label={`View Project on GitHub: ${title}`}
						className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-800 px-3 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:from-indigo-700 hover:to-indigo-900 hover:scale-[1.02] hover:shadow-md"
					>
						GitHub
					</Link>
				) : null}
				{demo ? (
					<Link
						href={demo}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`Open Live Demo: ${title}`}
						className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-800 px-3 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:from-indigo-700 hover:to-indigo-900 hover:scale-[1.02] hover:shadow-md"
					>
						Live Demo
					</Link>
				) : null}
			</div>
			<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-gray-200" />
		</div>
	);
}



