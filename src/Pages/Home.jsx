import React from "react";

export default function Home({ gradient, theme, name, desc }) {

	return (
		<div className={`${gradient} ${theme} absolute inset-0 h-screen w-full`}>
			<div className="flex flex-col items-center justify-center h-full w-full text-center">
				{/* Name (conditionally rendered) */}
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
					Welcome{name ? `, ${name}` : ""}
				</h1>

				{/* Desc (conditionally rendered) */}
				<h3 className="text-2xl md:text-5xl lg:text-6xl font-extrabold">
					{desc ? `, ${desc}` : ""}
				</h3>

				<p className="mt-4 text-lg md:text-xl max-w-2xl">
					I’m a passionate developer, building amazing digital experiences.
				</p>

				<div className="mt-6">
					<a
						href="/projects"
						className="px-6 py-3 text-lg font-semibold bg-indigo-400 hover:bg-indigo-500 rounded-lg shadow-md transition-all duration-300"
					>
						Explore My Work
					</a>
				</div>
			</div>
		</div>
	);
}
