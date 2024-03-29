import Mustache from 'https://cdnjs.cloudflare.com/ajax/libs/mustache.js/4.2.0/mustache.js';

const date = localStorage.getItem('date');
const formData = JSON.parse(localStorage.getItem('formData'));

const menuData = [
	{
		week: 'Week 1',
		days: [
			{
				day: 'Tuesday',
			},
			{
				day: 'Wednesday',
			},
		],
	},
	{
		week: 'Week 2',
		days: [
			{
				day: 'Tuesday',
			},
			{
				day: 'Wednesday',
			},
		],
	},
	{
		week: 'Week 3',
		days: [
			{
				day: 'Tuesday',
			},
			{
				day: 'Wednesday',
			},
		],
	},
	{
		week: 'Week 4',
		days: [
			{
				day: 'Tuesday',
			},
			{
				day: 'Wednesday',
			},
		],
	},
];

for (let i = 0; i < formData.length; i += 2) {
	const dish = formData[i];
	const description = formData[i + 1];

	const weekIndex = Math.floor(i / 8);
	const dayIndex = Math.floor((i % 8) / 4);
	const dishIndex = (i % 4) / 2 + 1;

	const day = menuData[weekIndex].days[dayIndex];
	day[`dish${dishIndex}`] = dish;
	day[`dish${dishIndex}Description`] = description;
}

function renderDate() {
	const dateTemplate = document.getElementById('date-template').innerHTML;

	const dateRendered = Mustache.render(dateTemplate, { date });

	document.getElementById('date').innerHTML = dateRendered;
}

renderDate();

function renderMenu() {
	const menuTemplate = document.getElementById('menu-template').innerHTML;

	const menuRendered = Mustache.render(menuTemplate, { weeks: menuData });

	document.getElementById('menu').innerHTML = menuRendered;
}

renderMenu();
