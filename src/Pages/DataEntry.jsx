import React, { useState } from "react";
import profile from '../assets/profile.png'
import Home from "./Home";
import About from "./About";

export default function DataEntry({ gradient, formTheme, setName, setDesc, setSkill, setPic }) {
	const [studentName, setStudentName] = useState("");
	const [bio, setBio] = useState("");
	const [profilePicture, setProfilePicture] = useState(null);
	const [skills, setSkills] = useState("");
	const [interests, setInterests] = useState("");
	const [aboutDescription, setAboutDescription] = useState("");
	const [projects, setProjects] = useState([
		{ title: "", description: "", image: "", githubLink: "" },
	]);
	const [socialMedias, setSocialMedias] = useState([{ name: "", url: "" }]);

	const addProject = () => {
		setProjects([
			...projects,
			{ title: "", description: "", image: "", githubLink: "" },
		]);
	};

  const handleProfilePictureChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setProfilePicture(URL.createObjectURL(file));
			setPic(URL.createObjectURL(file));
		}
	};


	const addSocialMedia = () => {
		setSocialMedias([...socialMedias, { name: "", url: "" }]);
	};

	const handleProjectChange = (index, field, value) => {
		const updatedProjects = [...projects];
		updatedProjects[index][field] = value;
		setProjects(updatedProjects);
	};

	const handleSocialMediaChange = (index, field, value) => {
		const updatedSocials = [...socialMedias];
		updatedSocials[index][field] = value;
		setSocialMedias(updatedSocials);
	};

	const [generatedPortfolio, setGeneratedPortfolio] = useState(null);

	const handleSubmit = (e) => {
		console.log("Bio is: ", bio)
		e.preventDefault();
		const formData = {
			studentName,
			bio,
			profilePicture,
			skills: skills.split(",").map((skill) => skill.trim()),
			interests: interests.split(",").map((interest) => interest.trim()),
			aboutDescription,
			projects,
			socialMedias,
		};


		setName(studentName)
		setDesc(bio)
		setSkill(skills)
		// Generate portfolio preview
		setGeneratedPortfolio(formData);
		
	};


	return (
		<div className={`min-h-screen p-8 mt-10 mb-15 ${gradient}`}>
			{/* Portfolio Display */}
			{generatedPortfolio && (
				<div className="mt-8 p-8 bg-white rounded-lg shadow-lg">
					<div className="text-center">
						<h2 className="text-3xl font-bold text-gray-800 mb-4">
							{generatedPortfolio.studentName}'s Portfolio
						</h2>
						<img
							src={generatedPortfolio.profilePicture || profile}
							alt="Profile"
							className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-500"
							onError={(e) => {
								e.target.src = profile;
							}} // Fallback image
						/>

						<p className="text-gray-600 mb-4">
							<strong className="text-blue-600">Bio:</strong>{" "}
							{generatedPortfolio.bio}
						</p>
						<p className="text-gray-600 mb-4">
							<strong className="text-blue-600">Skills:</strong>{" "}
							{generatedPortfolio.skills.join(", ")}
						</p>
						<p className="text-gray-600 mb-8">
							<strong className="text-blue-600">Interests:</strong>{" "}
							{generatedPortfolio.interests.join(", ")}
						</p>
					</div>

					{/* Projects Section */}
					<h3 className="text-2xl font-semibold text-gray-800 mb-6">
						Projects
					</h3>
					<div className="space-y-6">
						{generatedPortfolio.projects.map((project, index) => (
							<div key={index} className="p-6 bg-gray-50 rounded-lg shadow-sm">
								<h4 className="text-xl font-semibold text-gray-700 mb-2">
									{project.title}
								</h4>
								<p className="text-gray-600 mb-4">{project.description}</p>
								{project.image && (
									<img
										src={project.image}
										alt="Project"
										className="w-48 h-32 object-cover rounded-lg mb-4"
									/>
								)}
								{project.githubLink && (
									<a
										href={project.githubLink}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue-500 hover:text-blue-600 transition-colors"
									>
										View on GitHub
									</a>
								)}
							</div>
						))}
					</div>

					{/* Social Media Section */}
					<h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">
						Social Media
					</h3>
					<div className="flex space-x-4">
						{generatedPortfolio.socialMedias.map((social, index) => (
							<a
								key={index}
								href={social.url}
								target="_blank"
								rel="noopener noreferrer"
								className="text-blue-500 hover:text-blue-600 transition-colors"
							>
								{social.name}
							</a>
						))}
					</div>
					
				</div>
			)}

			<div className="max-w-4xl mx-auto">
				<h1 className={`text-4xl mt-4 font-bold text-center text-white mb-8`}>
					Portfolio Data Entry
				</h1>

				<form onSubmit={handleSubmit} className="space-y-6">
					{/* Student Information */}
					<div className={`${formTheme} p-6 rounded-lg shadow-lg`}>
						<h2 className="text-xl font-semibold mb-4">Basic Information</h2>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium mb-1">
									Student Name
								</label>
								<input
									type="text"
									value={studentName}
									onChange={(e) => setStudentName(e.target.value)}
									className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									required
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">Bio</label>
								<input
									value={bio}
									onChange={(e) => setBio(e.target.value)}
									className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									rows="3"
								/>
							</div>
						</div>
					</div>

					{/* About Me */}
					<div className={`${formTheme} p-6 rounded-lg shadow-lg`}>
						<h2 className="text-xl font-semibold mb-4">About Me</h2>
						<div className="space-y-4">
							<div>
								<label className="block text-sm font-medium mb-1">
									Profile Picture
								</label>
								<input
									type="file"
									onChange={handleProfilePictureChange}
									className="w-full p-2 border rounded-md"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">
									Skills (comma-separated)
								</label>
								<input
									type="text"
									value={skills}
									onChange={(e) => setSkills(e.target.value)}
									className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">
									Interests (comma-separated)
								</label>
								<input
									type="text"
									value={interests}
									onChange={(e) => setInterests(e.target.value)}
									className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium mb-1">
									Detailed Description
								</label>
								<textarea
									value={aboutDescription}
									onChange={(e) => setAboutDescription(e.target.value)}
									className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									rows="4"
								/>
							</div>
						</div>
					</div>

					{/* Projects */}
					<div className={`${formTheme} p-6 rounded-lg shadow-lg`}>
						<h2 className="text-xl font-semibold mb-4">Projects</h2>
						{projects.map((project, index) => (
							<div key={index} className="space-y-4 mb-6">
								<div>
									<label className="block text-sm font-medium mb-1">
										Project Title
									</label>
									<input
										type="text"
										value={project.title}
										onChange={(e) =>
											handleProjectChange(index, "title", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										Description
									</label>
									<textarea
										value={project.description}
										onChange={(e) =>
											handleProjectChange(index, "description", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
										rows="3"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										Image URL
									</label>
									<input
										type="text"
										value={project.image}
										onChange={(e) =>
											handleProjectChange(index, "image", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">
										GitHub Link
									</label>
									<input
										type="url"
										value={project.githubLink}
										onChange={(e) =>
											handleProjectChange(index, "githubLink", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>
						))}
						<button
							type="button"
							onClick={addProject}
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
						>
							Add Project
						</button>
					</div>

					{/* Social Media */}
					<div className={`${formTheme} p-6 rounded-lg shadow-lg`}>
						<h2 className="text-xl font-semibold mb-4">Social Media Links</h2>
						{socialMedias.map((social, index) => (
							<div key={index} className="space-y-4 mb-4">
								<div>
									<label className="block text-sm font-medium mb-1">
										Platform Name
									</label>
									<input
										type="text"
										value={social.name}
										onChange={(e) =>
											handleSocialMediaChange(index, "name", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									/>
								</div>
								<div>
									<label className="block text-sm font-medium mb-1">URL</label>
									<input
										type="url"
										value={social.url}
										onChange={(e) =>
											handleSocialMediaChange(index, "url", e.target.value)
										}
										className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
									/>
								</div>
							</div>
						))}
						<button
							type="button"
							onClick={addSocialMedia}
							className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
						>
							Add Social Media
						</button>
					</div>

					{/* Submit Button */}
					<div className="text-center">
						<button
							type="submit"
							className="bg-green-500 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-semibold"
						>
							Generate Portfolio
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
