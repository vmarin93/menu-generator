const dateForm = document.getElementById('dateForm');

dateForm.addEventListener('submit', function (event) {
	event.preventDefault();

	const date = document.getElementById('date').value;

	localStorage.setItem('date', date);

	window.location.href = 'menu.html';
});
