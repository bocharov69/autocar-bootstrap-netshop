// filter
const cards = document.querySelectorAll('.filtered-card');
const filters = document.querySelectorAll('.filterbar-checkbox');

if (cards.length > 0 && filters.length > 0) {

	//checkboxes
	for (let filter of filters) {
		document.querySelector('.filterbar-loading-screen').style.display = 'flex';

		filter.addEventListener('change', function(e) {
			let filter_value = filter.dataset['filter'];
			let filtered_cards = [];
			let checked_filters = [];

			if (filter_value.includes('type-')) {
				filter_value = filter_value.replace('type-', '');

				cards.forEach(function(elem) {
					if (elem.dataset['type'] == filter_value)
						filtered_cards.push(elem);
				});

			} else if (filter_value.includes('capacity-')) {
				filter_value = filter_value.replace('capacity-', '');

				cards.forEach(function(elem) {
					if (elem.dataset['capacity'] == filter_value || (elem.dataset['capacity'] > 8 && filter_value == 8))
						filtered_cards.push(elem);
				});
			}


			if (filter.checked) {
				if (filtered_cards.length > 0) {
					filtered_cards.forEach(function(elem) {
						elem.classList.add('show');
					});
				}
			} else {
				if (filtered_cards.length > 0) {
					filtered_cards.forEach(function(elem) {
						elem.classList.remove('show');
					});
				}
			}


			cards.forEach(function(elem) {
				if (elem.classList.contains('show')) {
					if (elem.classList.contains('hide'))
						elem.classList.remove('hide');
				} else
					elem.classList.add('hide');
			});

			filters.forEach(function(elem) {
				if (elem.checked)
					checked_filters.push(elem);
			});


			if (checked_filters.length <= 0) {
				cards.forEach(function(elem) {
					if (elem.classList.contains('hide'))
						elem.classList.remove('hide');
				});
			}
		});

		document.querySelector('.filterbar-loading-screen').style.display = 'none';
	}
}