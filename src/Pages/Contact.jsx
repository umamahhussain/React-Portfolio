import React, { useState, useEffect } from "react";

export default function Contact({gradient, formTheme}) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		// Basic validation
		if (!name || !email || !message) {
			setError("Please fill out all fields.");
			return;
		}

		// Simulate form submission (replace with actual API call)
		console.log("Form submitted:", { name, email, message });
		setSubmitted(true);
		setError("");
	};

	// Reset form after successful submission
	useEffect(() => {
		if (submitted) {
			const timer = setTimeout(() => {
				setSubmitted(false);
				setName("");
				setEmail("");
				setMessage("");
			}, 3000); // Reset after 3 seconds
			return () => clearTimeout(timer);
		}
	}, [submitted]);

	return (
		<div className={`min-h-screen p-8 mt-10 mb-15 ${gradient}`}>
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-3xl mt-8 font-bold text-gray-800 mb-8 text-center">
					Contact Me
				</h2>
				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Name Field */}
					<div className={`${formTheme} p-6 mt-4 mb-4 rounded-lg shadow-lg`}>
						<div>
							<label className="block text-sm font-medium mb-1">Name</label>
							<input
								type="text"
								value={name}
								onChange={(e) => setName(e.target.value)}
								className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
								placeholder="Enter your name"
								required
							/>
						</div>

						{/* Email Field */}
						<div className="mt-4 mb-4">
							<label className="block text-sm font-medium mb-1">Email</label>
							<input
								type="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
								placeholder="Enter your email"
								required
							/>
						</div>

						{/* Message Field */}
						<div className="mt-4 mb-4">
							<label className="block text-sm font-medium mb-1">Message</label>
							<textarea
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
								rows="4"
								placeholder="Enter your message"
								required
							/>
						</div>
					</div>

					{/* Error Message */}
					{error && <p className="text-red-500 text-sm">{error}</p>}

					{/* Success Message */}
					{submitted && (
						<p className="text-green-500 text-sm">
							Thank you! Your message has been sent.
						</p>
					)}

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
						>
							Send Message
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
