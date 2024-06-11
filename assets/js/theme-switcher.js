const theme_switcher_btn = document.getElementsByClassName("theme-switcher__btn")[0];
const theme_list = document.getElementsByClassName("theme-switcher__ul")[0];
const theme_btn_light = document.getElementsByClassName("theme-switcher__ul--light")[0];
const theme_btn_dark = document.getElementsByClassName("theme-switcher__ul--dark")[0];
let current_theme = localStorage.getItem('theme');

console.log(theme_switcher_btn);
theme_switcher_btn.addEventListener("click", (event) => {
	if (!theme_switcher_btn.classList.contains('show')) {
		theme_switcher_btn.classList.add('show');
		console.log("add");
		event.stopPropagation();
	}
}, true);

document.addEventListener("click", function(event) {
    if ((event.target == theme_switcher_btn && theme_switcher_btn.classList.contains('show')) ||
      !event.target.closest(".theme_switcher_btn")
    ) {
    	console.log("remove");
    	theme_switcher_btn.classList.remove('show');
    }
  },  false);

theme_btn_light.addEventListener("click", () => {
	document.documentElement.dataset.theme = "light";
	localStorage.setItem("theme", "light");
});

theme_btn_dark.addEventListener("click", () => {
	document.documentElement.dataset.theme = "dark";
	localStorage.setItem("theme", "dark");
});

if (current_theme === "dark") {
	document.documentElement.dataset.theme = "dark";
}