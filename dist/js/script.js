let burger = document.querySelector("#navToggle");
let menu__body = document.querySelector(".menu__body");

burger.addEventListener("click", function(event){
	event.preventDefault();
	burger.classList.toggle("active");
	menu__body.classList.toggle("active");
    
});
