import PetList from "./Components/PetList";
import "./App.css";
import { useState } from "react";
function App() {
	const [search, setSearch] = useState("");
	const [type, setType] = useState("");

	return (
		<div className="App">
			<div className="container">
				<div className="section">
					<h1>Fur-Ends</h1>
					<input
						className="searchbar"
						placeholder="Search"
						type="search"
						onChange={(event) => setSearch(event.target.value)}
					/>
					<div>
						<select
							className="select searchbar"
							onChange={(e) => setType(e.target.value)}
						>
							<option value="">All</option>
							<option value="Cat">Cat</option>
							<option value="Dog">Dog</option>
							<option value="Rabbit">Rabbit</option>
						</select>
					</div>
				</div>
				<PetList search={search} type={type} />
			</div>
		</div>
	);
}

export default App;
