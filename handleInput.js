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
