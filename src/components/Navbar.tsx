"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
	{ href: "/", label: "Home" },
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "#resume", label: "Resume" },
	{ href: "#contact", label: "Contact" },
];

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between">
					<Link href="/" className="text-lg font-semibold">
						Portfolio
					</Link>

					{/* Desktop nav */}
					<nav className="hidden md:flex items-center gap-6 text-sm">
						{navItems.map(({ href, label }) => (
							<Link
								key={href}
								href={href}
								className="text-gray-600 transition hover:text-gray-900"
							>
								{label}
							</Link>
						))}
					</nav>

					{/* Mobile menu button */}
					<button
						className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
						aria-label="Toggle navigation"
						aria-expanded={open}
						onClick={() => setOpen((v) => !v)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="h-6 w-6"
						>
							{open ? (
								<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
							) : (
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
							)}
						</svg>
					</button>
				</div>

				{/* Mobile nav panel */}
				{open ? (
					<nav className="md:hidden pb-4">
						<ul className="flex flex-col gap-2 text-sm">
							{navItems.map(({ href, label }) => (
								<li key={href}>
									<Link
										href={href}
										className="block rounded px-3 py-2 text-gray-700 hover:bg-gray-100"
										onClick={() => setOpen(false)}
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				) : null}
			</div>
		</header>
	);
}


