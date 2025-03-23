import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import DataEntry from "./Pages/DataEntry";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

function App() {
	const dark = "dark bg-gray-700 text-white text-lg";
	const light = "light bg-blue-100 text-black text-lg";
	const darkGradient =
		"bg-gradient-to-b from-gray-200 via-gray-500 to-gray-900 w-full h-full animate-gradient-move";
	const lightGradient =
		"bg-gradient-to-r from-blue-50 via-blue-200 to-blue-300 w-full h-full animate-gradient-move";
	const [theme, setTheme] = useState(dark);
	const [gradient, setGradient] = useState(darkGradient);
	const [formTheme, setformTheme] = useState("bg-gray-100");

	const [name, setName] = useState(null)
	const [desc, setDesc] = useState(null)
	const [pic, setPic] = useState(null)
	const [skills, setSkill] = useState(null)

	// ✅ Store component references correctly
	const links = [
		{ component: Home, path: "/" },
		{ component: About, path: "/about" },
		{ component: Contact, path: "/contact" },
		{ component: DataEntry, path: "/entry" },
		{ component: Projects, path: "/projects" },
	];

	const ToggleTheme = () => {
		if (theme === dark) {
			setTheme(light);
			setGradient(lightGradient);
			setformTheme("bg-indigo-50");
		} else {
			setTheme(dark);
			setGradient(darkGradient);
			setformTheme("bg-gray-50");
		}
	};

	return (
		<BrowserRouter>
			<Navbar theme={theme} toggleTheme={ToggleTheme} />

			{/* Routes */}
			<Routes>
				{links.map((obj, index) => (
					<Route
						key={index}
						path={obj.path}
						element={<obj.component gradient={gradient} 
						theme={theme} formTheme={formTheme} 
						name={name} setName={setName}
						desc={desc} setDesc={setDesc}
						pic={pic} setPic={setPic}
						skills={skills} setSkill={setSkill}
						/>}
					/>
				))}
			</Routes>

			<Footer theme={theme} toggleTheme={ToggleTheme} />
		</BrowserRouter>
	);
}

export default App;
