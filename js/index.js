//img tabs
const tab_thumbs = document.querySelectorAll('.section1-recomendation-thumb');
for (tab_thumb of tab_thumbs) {
	tab_thumb.addEventListener('click', function(e) {
		document.querySelector('.section1-recomendation-img').firstElementChild.src = this.firstElementChild.src;
	});
}

//reviews spoiler
document.querySelector('.section2-spoiler').addEventListener('click', function(e) {
	document.querySelector('.section2-spoiler').classList.toggle('active');
	document.querySelector('.section2-spoiler').firstElementChild.classList.toggle('active');
	document.querySelector('.section2-reviews').classList.toggle('active');
});