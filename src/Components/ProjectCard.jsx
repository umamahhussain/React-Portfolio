import React from "react";

export default function ProjectCard({ title, description, image, githubLink }) {
	return (
		<div className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
			{image && (
				<img
					src={image}
					alt={title}
					className="w-50 h-48 object-cover rounded-lg mb-4"
				/>
			)}
			<h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
			<p className="text-gray-600 mb-4">{description}</p>
			{githubLink && (
				<a
					href={githubLink}
					target="_blank"
					rel="noopener noreferrer"
					className="text-blue-500 hover:text-blue-600 transition-colors"
				>
					View on GitHub
				</a>
			)}
		</div>
	);
}
