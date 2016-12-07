"use strict";
function openForm() {
	document.querySelector(".modal-content").classList.add("modal-content-show");
	document.querySelector(".modal-overlay").style.display = 'block';

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
/*window.addEventListener('click', function( e )
  if (e.target == document.querySelector(".modal-content"))
    document.querySelector(".modal-content").classList.remove("modal-content-show");
  }
}, false);*/
document.querySelector(".modal-overlay").addEventListener("click", function(){
			
				if (document.querySelector(".modal-content").classList.contains("modal-content-show")) {
					document.querySelector(".modal-content").classList.remove("modal-content-show");
					document.querySelector(".modal-overlay").style.display = 'none';
				}
});
/*document.querySelector(".search-form").parentNode.onclick = function () {
    document.querySelector(".modal-content").classList.remove("modal-content-show");
}*/
window.addEventListener("keydown", function(){
			if (event.keyCode === 27) {
				if (document.querySelector(".modal-content").classList.contains("modal-content-show")) {
					document.querySelector(".modal-content").classList.remove("modal-content-show");
					document.querySelector(".modal-overlay").style.display = 'none';
				}
			}
});

