# menu-generator

A very simple tool to automate the creation of restaurant menus.

Built using <a href="https://mustache.github.io/" alt="{{ mustache }}">{{ mustache }}</a> templating.

You can see the current menu or change it by filling in a form with all the dishes that you want to change.

Using localStorage to keep the data.

## Important Notes

- **Data Overwriting**: The data stored in localStorage is overwritten whenever you submit the menu change form. Make sure to review your changes before submitting.

- **Menu Structure**: The logic of the tool is built around the menu structure provided. If you want to change the menu structure, adjustments to the logic may be required.
