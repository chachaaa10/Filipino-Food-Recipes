// Hiding the header according to pixels scrolled
window.onscroll = function () {
	const header = document.getElementById('header');
	const scrollPosition = window.scrollY; // Get scroll position
	const hideAfter = 500; // Pixels to scroll before hiding

	if (scrollPosition > hideAfter) {
		header.classList.add('hidden');
	} else {
		header.classList.remove('hidden');
	}
};
