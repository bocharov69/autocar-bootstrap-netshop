'use strict'
document.addEventListener('DOMContentLoaded', function() {
	// radio logic
	const radios = document.querySelectorAll('.form-item-radio');
	radios.forEach(function(elem) {
		elem.addEventListener('change', function(event) {
			radios.forEach(function(radio) {
				let not_input = radio.parentElement;
				if (not_input.classList.contains('form-item-input')) {
					let inputs = not_input.querySelectorAll('.form-item-input');
					if (!(radio.checked)) {
						not_input.classList.add('disabled');
						inputs.forEach(function(input) {
							input.classList.remove('_req');
						})
					} else {
						not_input.classList.remove('disabled');
						inputs.forEach(function(input) {
							input.classList.add('_req');
						})
					}
				} else {
					let inputs = radio.parentElement.querySelectorAll('.form-item-input');

					if (!(radio.checked)) {
						inputs.forEach(function(input) {
							input.disabled = true;
							input.classList.remove('_req');
						});
					} else {
						inputs.forEach(function(input) {
							input.disabled = false;
							input.classList.add('_req');
						});
					}
				}
			});
		});
	});

	// form validation
	const main_form = document.getElementById('payment_form');
	const required = document.querySelectorAll('._req');
});