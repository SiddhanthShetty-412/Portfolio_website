"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSending(true);
		console.log({ name, email, message });
		await new Promise((r) => setTimeout(r, 400));
		setSending(false);
		setSent(true);
	}

	return (
		<form onSubmit={handleSubmit} className="mx-auto w-full max-w-xl space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<div>
					<label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
						Name
					</label>
					<input
						id="name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
						className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
					/>
				</div>
				<div>
					<label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
						Email
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
						className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
					/>
				</div>
			</div>
			<div>
				<label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
					Message
				</label>
				<textarea
					id="message"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					rows={5}
					required
					className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
				/>
			</div>
			<div className="flex items-center justify-between">
				<button
					type="submit"
					disabled={sending}
					className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-70"
				>
					{sending ? "Sending..." : "Send Message"}
				</button>
				{sent ? <span className="text-sm text-green-600">Sent! Check console.</span> : null}
			</div>
		</form>
	);
}


