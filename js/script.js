// main section stretch 
function main_stretch() {
	let hh = document.querySelector('header').offsetHeight;
	let fh = document.querySelector('footer').offsetHeight;
	let vh = window.innerHeight;
	document.querySelector('main').setAttribute('style', `min-height: ${vh - hh - fh}px`);
}
main_stretch();
window.addEventListener("resize", function(event) {
	main_stretch();
});

// burger
document.querySelector('.navbar-toggler').addEventListener('click', function(e) {
	document.querySelector('.navbar-toggler').classList.toggle('active');
	document.querySelector('.navbar-collapse').classList.toggle('active');
});

// filter btn 
document.querySelector('.navbar-filter').addEventListener('click', function(e) {
	e.preventDefault();
	let filterbar = document.querySelector('.filterbar')
	filterbar.style.display = filterbar.style.display === 'none' ? '' : 'none';
});

//price range
document.getElementById('price-scroll').addEventListener('change', function(e) {
	let max_price = document.getElementById('price-scroll').value;
	document.getElementById('max-price').textContent = max_price;
});

// like btn
const like_btns = document.querySelectorAll('.like-btn');
for (let like_btn of like_btns) {
	like_btn.addEventListener('click', function(e) {
		e.preventDefault();
		like_btn.classList.toggle('_icon-fav');
		let start = Date.now();
		let timer = setInterval(function() {
			let timePassed = Date.now() - start;
			if (timePassed >= 500) {
				clearInterval(timer);
				return;
			}

			function draw(timePassed) {
				like_btn.style.opacity = timePassed / 500;
			}
			draw(timePassed);
		}, 1);
		like_btn.classList.toggle('_icon-favorite');
	});
}