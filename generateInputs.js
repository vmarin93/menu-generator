const dishID = [];
const descriptionID = [];

// Generate dish and description IDs
for (let i = 1; i <= 8; i++) {
	for (let j = 1; j <= 2; j++) {
		dishID.push(`dish${j}-${i}`);
		descriptionID.push(`description${j}-${i}`);
	}
}

// Create fieldsets for each week
for (let week = 1; week <= 4; week++) {
	const weekFieldset = document.createElement('fieldset');
	weekFieldset.setAttribute('class', 'weeks');
	const legendWeek = document.createElement('legend');
	legendWeek.textContent = `Week ${week}`;
	weekFieldset.appendChild(legendWeek);

	// Create fieldsets for each day
	for (let day = 1; day <= 2; day++) {
		const dayFieldset = document.createElement('fieldset');
		dayFieldset.setAttribute('class', 'days');
		const legendDay = document.createElement('legend');
		legendDay.textContent = day === 1 ? 'Tuesday' : 'Wednesday';
		dayFieldset.appendChild(legendDay);

		// Create inputs for dish and description
		for (let index = 0; index < 2; index++) {
			const dishLabel = document.createElement('label');
			dishLabel.setAttribute(
				'for',
				dishID[(week - 1) * 4 + (day - 1) * 2 + index]
			);
			dishLabel.textContent = 'Dish: ';
			const dishInput = document.createElement('input');
			dishInput.setAttribute(
				'id',
				dishID[(week - 1) * 4 + (day - 1) * 2 + index]
			);
			dishInput.setAttribute('name', `dish${index + 1}`);
			dishInput.setAttribute('type', 'text');
			dishLabel.appendChild(dishInput);
			dayFieldset.appendChild(dishLabel);

			const descriptionLabel = document.createElement('label');
			descriptionLabel.setAttribute(
				'for',
				descriptionID[(week - 1) * 4 + (day - 1) * 2 + index]
			);
			descriptionLabel.textContent = 'Description: ';
			const descriptionInput = document.createElement('input');
			descriptionInput.setAttribute(
				'id',
				descriptionID[(week - 1) * 4 + (day - 1) * 2 + index]
			);
			descriptionInput.setAttribute('name', `description${index + 1}`);
			descriptionInput.setAttribute('type', 'text');
			descriptionLabel.appendChild(descriptionInput);
			dayFieldset.appendChild(descriptionLabel);
		}

		weekFieldset.appendChild(dayFieldset);
	}

	// Append the week fieldset to the form
	document.getElementById('inputs').appendChild(weekFieldset);
}
