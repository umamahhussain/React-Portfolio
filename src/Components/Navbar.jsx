import React, { useState } from "react";
import { Link } from "react-router-dom"; 

export default function Navbar({ theme, toggleTheme }) {
	const [isOpen, setIsOpen] = useState(false);

	const links = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Contact", href: "/contact" },
		{ name: "Data Entry", href: "/entry" },
		{ name: "Projects", href: "/projects" },
	];

	return (
		<div className={`${theme} fixed top-0 left-0 w-full p-4 z-50`}>
			<nav className="container mx-auto flex justify-between items-center relative">
				<span className="text-4xl font-bold">My Portfolio</span>

				{/* Mobile Menu Button (Hamburger) */}
				<button
					className="md:hidden text-2xl focus:outline-none"
					onClick={() => setIsOpen(!isOpen)}
				>
					☰
				</button>

				{/* Desktop Navigation */}
				<ul className="hidden md:flex space-x-6 text-white">
					{links.map((obj) => (
						<li key={obj.name} className="hover:text-gray-300 cursor-pointer">
							<Link to={obj.href}>
								<h4 className={theme}>{obj.name}</h4>
							</Link>
						</li>
					))}
				</ul>

				{/* Theme Toggle Button */}
				<button
					onClick={toggleTheme}
					className="px-4 py-2 rounded bg-blue-200 ml-4 text-black hover:bg-blue-300 transition"
				>
					{theme.includes("dark") ? "Light Theme" : "Dark Theme"}
				</button>
			</nav>

			{/* Mobile Dropdown Menu */}
			<ul className="md:hidden absolute left-0 top-full w-full bg-gray-800 text-white flex flex-col items-center py-4 space-y-4 shadow-md transition-all duration-300">
				{links.map((obj) => (
					<li
						key={obj.name}
						className="hover:text-gray-300 cursor-pointer"
						onClick={() => setIsOpen(false)}
					>
						<Link to={obj.href}>
							<h5 className={theme}>{obj.name}</h5>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
