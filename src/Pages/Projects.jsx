import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ProjectCard from "../Components/ProjectCard";
import data from "../assets/data.json"; // Import the JSON file

export default function ProjectsSection({gradient}) {
	const [projects, setProjects] = useState([]);

	// Fetch project data from data.json
	useEffect(() => {
		setProjects(data); // Set the projects state with the imported data
	}, []);

	// Handle drag-and-drop reordering
	const handleDragEnd = (result) => {
		if (!result.destination) return;

		const reorderedProjects = Array.from(projects);
		const [movedProject] = reorderedProjects.splice(result.source.index, 1);
		reorderedProjects.splice(result.destination.index, 0, movedProject);

		setProjects(reorderedProjects);
	};

	return (
		<div className={`${gradient} py-16`}>
			<div className="max-w-4xl mx-auto px-4">
				<h2 className="text-3xl mt-10 font-bold text-gray-800 mb-8 text-center">
					Projects
				</h2>
				<DragDropContext onDragEnd={handleDragEnd}>
					<Droppable droppableId="projects">
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className="space-y-6"
							>
								{projects.map((project, index) => (
									<Draggable
										key={project.id}
										draggableId={project.id.toString()}
										index={index}
									>
										{(provided) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<ProjectCard
													title={project.title}
													description={project.description}
													image={project.image}
													githubLink={project.githubLink}
												/>
											</div>
										)}
									</Draggable>
								))}
								{provided.placeholder}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
		</div>
	);
}
