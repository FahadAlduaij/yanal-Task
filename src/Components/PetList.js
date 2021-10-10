import React from "react";
import Pet from "./Pet";
import petArray from "../petArray";

function PetList({ search, type }) {
	let list = petArray
		.filter(
			(pet) =>
				pet.name.toLowerCase().includes(search.toLowerCase()) &&
				pet.type.includes(type)
		)
		.map((pet) => (
			<Pet
				key={pet.id}
				name={pet.name}
				image1={pet.image}
				image2={pet.image2}
			/>
		));
	return <div className="list">{list}</div>;
}

export default PetList;
