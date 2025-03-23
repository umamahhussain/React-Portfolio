import React from "react";
import profile from "../assets/profile.png";

export default function About({ gradient, theme, name, desc, skills, pic }) {
	return (
		<div
			className={`${gradient} ${theme} absolute inset-0 h-screen w-full flex items-center justify-center`}
		>
			<div className="bg-white/90 shadow-2xl backdrop-blur-lg rounded-2xl p-8 max-w-3xl w-full">
				<h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">
					About Me
				</h2>

				<div className="flex flex-col items-center text-center space-y-6">
					{/* Profile Picture */}
					<div className="relative">
						<img
							src={pic || profile}
							alt="Profile"
							className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 transition-transform duration-300 hover:scale-105"
							onError={(e) => (e.target.src = profile)} // Fallback image
						/>
					</div>

					{/* Name */}
					{name && (
						<h1 className="text-3xl font-extrabold text-gray-900">{name}</h1>
					)}

					{/* Description */}
					{desc && <p className="text-lg text-gray-700 px-4">{desc}</p>}

					{/* Skills */}
					{skills && (
						<div className="w-full flex flex-wrap justify-center gap-2">
							{skills.split(",").map((skill, index) => (
								<span
									key={index}
									className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-semibold shadow-md"
								>
									{skill.trim()}
								</span>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
