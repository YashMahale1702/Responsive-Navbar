const container = document.querySelector('.nav-list-container');
const menu = document.querySelector('.fa-bars');
const icon = document.querySelector('.nav-icon');

icon.addEventListener('click', function() {
	container.classList.toggle('hidden');

	if (menu.classList.contains('fa-bars')) {
		menu.classList.replace('fa-bars', 'fa-xmark');
	} else {
		menu.classList.replace('fa-xmark', 'fa-bars');
	}

	// if (container.classList.contains('.hidden')) {
	// 	container.classList.add('aniamte-zoom-out');
	// }
});
