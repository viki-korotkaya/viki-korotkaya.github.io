"use strict";
function openForm() {
	document.querySelector(".modal-content").classList.add("modal-content-show");
};
document.querySelector(".child .count-minus").addEventListener("click", function() {
	var val = document.querySelector(".child-number").getAttribute('value');
	if (val > 0) {
		val = val - 1;
		document.querySelector(".child-number").setAttribute('value', val);
	}
});

document.querySelector(".child .count-plus").addEventListener("click", function() {
	var val = document.querySelector(".child-number").getAttribute('value');
	val = +val + 1;
	document.querySelector(".child-number").setAttribute('value', val);
	
});

document.querySelector(".adult .count-minus").addEventListener("click", function() {
	var val = document.querySelector(".adult-number").getAttribute('value');
	if (val > 0) {
		val = val - 1;
		document.querySelector(".adult-number").setAttribute('value', val);
	}
});

document.querySelector(".adult .count-plus").addEventListener("click", function() {
	var val = document.querySelector(".adult-number").getAttribute('value');
	val = +val + 1;
	document.querySelector(".adult-number").setAttribute('value', val);
	
});




