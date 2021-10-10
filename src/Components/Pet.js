import React from "react";
import { useState } from "react";

function Pet({ name, image1, image2 }) {
	const [change, setChange] = useState(image1);
	return (
		<div className="card">
			<div className="card-header">
				<h3>{name}</h3>
				<button
					className="btn"
					onClick={() => setChange(change === image1 ? image2 : image1)}
				>
					Pet
				</button>
			</div>
			<div>
				<img className="image" src={change} alt={name} />
			</div>
		</div>
	);
}

export default Pet;
