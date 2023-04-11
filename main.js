// ===== Resize Navbar on Scroll
var navbar = document.querySelector (".navbar");
// when the scroll is higher than 20 viewport height, add the sticky class to the tag a class navbar
window.onscroll = () => {
	this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
}

// product colors
var pic = document.querySelector("#main-shoe");
var cyan = document.querySelector(".cyan");
var purple = document.querySelector(".purple");
var blue = document.querySelector(".blue");
var pink = document.querySelector(".pink");
var yellow = document.querySelector(".yellow");
var Red = document.querySelector(".Red");
const colors = document.querySelectorAll(".color");

// store product info in object
var info = [
	{
		src:"images/products/cyan.jpg"
	},
	{
		src:"images/products/purple.jpg"
	},
	{
		src:"images/products/blue.jpg"
	},
	{
		src:"images/products/pink.jpg"
	},
	{
		src:"images/products/yellow.jpg"
	},
	{
		src:"images/products/Red.jpg"
	}
]
// change color
cyan.addEventListener("click", function(){
	pic.src = info[0].src;
})
purple.addEventListener("click", function(){
	pic.src = info[1].src;
})
blue.addEventListener("click", function(){
	pic.src = info[2].src;
})
pink.addEventListener("click", function(){
	pic.src = info[3].src;
})
green.addEventListener("click", function(){
	pic.src = info[4].src;
})
red.addEventListener("click", function(){
	pic.src = info[5].src;
})
// active color
function color(){
	colors.forEach(c => c.classList.remove('active'));
	this.classList.add('active');
}
colors.forEach(c => c.addEventListener('click', color));

// Navbar Toggler
const navMenu = document.querySelector(".menu");
navTogle = document.querySelector(".menu-btn");
if(navTogle){
	navTogle.addEventListener("click", () => {
		navMenu.classList.toggle("active");
	})
}

// Closing Menu When Navlink is Clicked
const navLink = document.querySelectorAll(".nav-Link");
function linkAction(){
	const navMenu = document.querySelector(".menu");
	navMenu.classList.remove("active")
}
navLink.forEach(n => n.addEventListener("click", linkAction));