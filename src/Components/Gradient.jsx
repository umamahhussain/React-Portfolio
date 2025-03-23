import React from "react";

export default function Gradient({gradient}) {
	return (
		<div className="w-screen h-screen overflow-hidden">
			<div
				className={gradient}
			></div>
		</div>
	);
}
