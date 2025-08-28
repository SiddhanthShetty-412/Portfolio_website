import { ReactNode } from "react";

type SectionProps = {
	id?: string;
	title?: string;
	className?: string;
	children: ReactNode;
};

export default function Section({ id, title, className = "", children }: SectionProps) {
	return (
		<section id={id} className={`py-16 ${className}`}>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{title ? (
					<h2 className="mb-8 text-2xl font-bold tracking-tight text-gray-900">
						{title}
					</h2>
				) : null}
				{children}
			</div>
		</section>
	);
}



