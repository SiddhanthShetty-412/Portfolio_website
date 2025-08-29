type CertificationCardProps = {
	title: string;
	issuer: string;
	date: string;
	url?: string;
};

export default function CertificationCard({ title, issuer, date, url }: CertificationCardProps) {
	return (
		<div className="group relative flex flex-col rounded-xl border border-gray-700 bg-gray-800/60 p-6 text-gray-200 shadow-md shadow-purple-900/40 transition hover:border-purple-500">
			<h3 className="text-lg font-bold text-gray-200 transition-colors group-hover:text-gray-100">{title}</h3>
			<p className="mt-2 text-sm text-gray-200 transition-colors group-hover:text-gray-100">{issuer}</p>
			<p className="mt-1 text-xs text-gray-300 transition-colors group-hover:text-gray-200">{date}</p>
			{url && (
				<div className="mt-5">
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						aria-label={`View Certificate: ${title} by ${issuer}`}
						className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-purple-800 px-3 py-2 text-sm font-medium text-white shadow-sm transition-transform hover:from-purple-700 hover:to-purple-900 hover:scale-[1.02] hover:shadow-md"
					>
						View Certificate
					</a>
				</div>
			)}
			<div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-transparent transition group-hover:ring-gray-200" />
		</div>
	);
}
