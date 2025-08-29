"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [sending, setSending] = useState(false);
	const [sent, setSent] = useState(false);
	const [error, setError] = useState(false);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSending(true);
		setError(false);
		setSent(false);

		const formData = new FormData();
		formData.append("access_key", "3cea74ec-050a-4dbc-8016-e0dd99efd5c8");
		formData.append("name", name);
		formData.append("email", email);
		formData.append("message", message);

		const response = await fetch("https://api.web3forms.com/submit", {
			method: "POST",
			body: formData,
		});

		const result = await response.json();

		setSending(false);
		if (result.success) {
			setSent(true);
			setName("");
			setEmail("");
			setMessage("");
		} else {
			setError(true);
		}
	}

	return (
		<>
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
			</div>
			</form>
			{sent && (
				<div className="mx-auto mt-4 w-full max-w-xl rounded-md border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
					Your message has been sent successfully 🎉
				</div>
			)}
			{error && (
				<div className="mx-auto mt-4 w-full max-w-xl rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
					Something went wrong. Please try again.
				</div>
			)}
		</>
	);
}



