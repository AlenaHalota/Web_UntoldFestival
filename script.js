let menuBar = document.querySelector('.menu-bar');
let menuOptions = document.querySelector('.menu-options');
let btnClose = document.querySelector('.btn-close');

	menuBar.addEventListener('click', function () {
		menuOptions.style.display = "block";
	});

	btnClose.addEventListener('click', function () {
		menuOptions.style.display = "none";
	});
