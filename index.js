import Mustache from './node_modules/mustache/mustache.mjs';

const date = localStorage.getItem('date');

const menuData = [
	{
		week: 'Week 1',
		days: [
			{
				day: 'Tuesday',
				dish1: 'Bircher Muesli',
				dish1Description: '',
				dish2: 'Greek Yoghurt',
				dish2Description: 'with berry compote / granola',
			},
			{
				day: 'Wednesday',
				dish1: 'Blueberry Muffins',
				dish1Description: '',
				dish2: 'Croissant / Pain au Chocolat',
				dish2Description: '',
			},
		],
	},
	{
		week: 'Week 2',
		days: [
			{
				day: 'Tuesday',
				dish1: 'American Pancakes',
				dish1Description: 'with berries / maple syrup',
				dish2: 'Acai Yoghurt',
				dish2Description: 'with berry compote / granola',
			},
			{
				day: 'Wednesday',
				dish1: 'Avocado Yoghurt',
				dish1Description: 'with berry compote / granola',
				dish2: 'Blueberry Pancakes',
				dish2Description: 'with whipped cream',
			},
		],
	},
	{
		week: 'Week 3',
		days: [
			{
				day: 'Tuesday',
				dish1: 'Oatmeal Muffins',
				dish1Description: 'with raisins',
				dish2: 'Cereal',
				dish2Description: '',
			},
			{
				day: 'Wednesday',
				dish1: 'Waffles',
				dish1Description: 'with maple syrup',
				dish2: 'Fresh Fruit',
				dish2Description: '',
			},
		],
	},
	{
		week: 'Week 4',
		days: [
			{
				day: 'Tuesday',
				dish1: 'Fruit Salad',
				dish1Description: '',
				dish2: 'Crepes',
				dish2Description: 'with nutella',
			},
			{
				day: 'Wednesday',
				dish1: 'Doughnuts',
				dish1Description: '',
				dish2: 'Buttermilk Scones',
				dish2Description: 'with jam / clotted cream',
			},
		],
	},
];

// this is the logic that handles the rendering of the data inside the menu

function renderMenu() {
	const dateTemplate = document.getElementById('date-template').innerHTML;
	const menuTemplate = document.getElementById('menu-template').innerHTML;

	const dateRendered = Mustache.render(dateTemplate, { date });
	const menuRendered = Mustache.render(menuTemplate, { weeks: menuData });

	document.getElementById('header').innerHTML = dateRendered;
	document.getElementById('menu').innerHTML = menuRendered;
}

renderMenu();
