import React from "react";

export default function Footer({ theme, toggleTheme }) {
	const items = [
		{ name: "Github", link: "https://github.com" },
		{ name: "LinkedIn", link: "https://linkedin.com" },
	];

	return (
		<div className={`${theme} fixed bottom-0 left-0 w-full p-4 z-50`}>
			<footer className="flex flex-row flex-wrap justify-center space-x-4">
				{items.map((item, index) => (
					<a
						key={index}
						href={item.link}
						className="hover:text-purple-400 cursor-pointer"
					>
						
							<h5 className={theme}>{item.name}</h5>
						
					</a>
				))}
			</footer>
		</div>
	);
}
