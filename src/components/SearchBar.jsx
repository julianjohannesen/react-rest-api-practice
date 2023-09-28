import React from "react";

export default function SearchBar() {
	return (
        // Todo: Add code for normal, hover, and focus states
        // Todo: Add code for loading state
		<div className="field has-addons">
			<div className="control">
				<label
					htmlFor="searchInput"
					className="is-sr-only"
				>
					Search for images
				</label>
				<input
					id="searchInput"
					className="input is-primary is-medium"
					type="text"
					placeholder="Search for images"
					aria-label="Search for images"
				/>
			</div>
			<div className="control">
				<button
					className="button is-primary is-medium"
					aria-label="Search"
                    role="button"
				>
					Search
				</button>
			</div>
		</div>
	);
}
