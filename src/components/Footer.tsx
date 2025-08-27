export default function Footer() {
	return (
		<footer className="border-t border-gray-200 py-8">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
					<p className="text-sm text-gray-500">© 2025 Siddhanth Shetty</p>
					<div className="flex items-center gap-4">
						<a
							href="https://linkedin.com/in/siddhanth-shetty-372b48343"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-gray-600 transition hover:text-gray-900"
						>
							LinkedIn
						</a>
						<a
							href="https://github.com/SiddhanthShetty-412"
							target="_blank"
							rel="noopener noreferrer"
							className="text-sm text-gray-600 transition hover:text-gray-900"
						>
							GitHub
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}


