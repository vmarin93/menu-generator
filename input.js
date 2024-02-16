// GENERATE INPUTS
for (let i = 0; i < 8; i++) {
	for (let j = 0; j < 2; j++) {
		// labels
		const dishLabel = document.createElement('label');
		dishLabel.setAttribute('for', `dish${j}-day${i}`);
		dishLabel.textContent = `Dish${j + 1}: `;

		const descriptionLabel = document.createElement('label');
		descriptionLabel.setAttribute('for', `description${j}-day${i}`);
		descriptionLabel.textContent = `Description${j + 1}: `;

		// inputs
		const dishInput = document.createElement('input');
		dishInput.setAttribute('id', `dish${j}-day${i}`);
		dishInput.setAttribute('name', `dish${j}-day${i}`);
		dishInput.setAttribute('type', 'text');

		const descriptionInput = document.createElement('input');
		descriptionInput.setAttribute('id', `description${j}-day${i}`);
		descriptionInput.setAttribute('name', `description${j}-day${i}`);
		descriptionInput.setAttribute('type', 'text');

		// appending
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

// HANDLE INPUTS
const inputForm = document.getElementById('inputs');

document.getElementById('submit').addEventListener('click', function (event) {
	event.preventDefault();

	const dateInput = document.getElementById('date').value;

	const formData = [];
	for (const [key, value] of new FormData(inputForm).entries()) {
		formData.push(value);
	}

	localStorage.setItem('date', dateInput);
	localStorage.setItem('formData', JSON.stringify(formData));

	window.location.href = 'menu.html';
});
