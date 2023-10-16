import {useState} from 'react';

export default function SearchBar({queryHandler}) {

	const [term, setTerm] = useState("");

	const handleChange = (event) => {
		setTerm(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		queryHandler(event, term);
	}

	console.log("term: ", term);

	return (
        // Todo: Add code for normal, hover, and focus states
        // Todo: Add code for loading state
		// Todo: Figure out if Axios handles debounce automatically
		<form onSubmit={handleSubmit}>
			<div className="field has-addons">
				<div className="control">
					<label
						htmlFor="searchInput"
						className="is-sr-only"
					>
						Search for images
					</label>
					<input
						aria-label="Search for images"
						className="input is-primary is-medium"
						id="searchInput"
						onChange={handleChange}
						placeholder="Search for images"
						type="text"
						value={term}
					/>
				</div>
				<div className="control">
					<button
						aria-label="Search"
						className="button is-primary is-medium"
						role="button"
					>
						Search
					</button>
				</div>
			</div>
		</form>
	);
}
