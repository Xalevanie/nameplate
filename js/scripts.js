// Intialize Lettering JS
$('h1').lettering();

// Intialize Backstretch
$.backstretch('/img/balance2.jpg');

// Intialize Masonry
$('article').masonry({
	itemSelector: 'section',
	columnWidth: 300,
	gutter: 10,
	isFitWidth: true
});