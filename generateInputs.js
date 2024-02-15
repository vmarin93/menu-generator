for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 2; j++) {
		// LABELS
		const dishLabel = document.createElement('label');
		dishLabel.setAttribute('for', `dish${j}-day${i}`);
		dishLabel.textContent = `Dish${j + 1}: `;

		const descriptionLabel = document.createElement('label');
		descriptionLabel.setAttribute('for', `description${j}-day${i}`);
		descriptionLabel.textContent = `Description${j + 1}: `;

		// INPUTS
		const dishInput = document.createElement('input');
		dishInput.setAttribute('id', `dish${j}-day${i}`);
		dishInput.setAttribute('name', `dish${j}-day${i}`);
		dishInput.setAttribute('type', 'text');

		const descriptionInput = document.createElement('input');
		descriptionInput.setAttribute('id', `description${j}-day${i}`);
		descriptionInput.setAttribute('name', `description${j}-day${i}`);
		descriptionInput.setAttribute('type', 'text');

		// APPENDING
		dishLabel.appendChild(dishInput);
		descriptionLabel.appendChild(descriptionInput);

		const daysFieldset = document.getElementById(`day${i}`);
		if (daysFieldset) {
			daysFieldset.appendChild(dishLabel);
			daysFieldset.appendChild(descriptionLabel);
		} else {
			console.error(`Days fieldset with id 'day${i}' not found.`);
		}
	}
}
