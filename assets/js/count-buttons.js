[].forEach.call(document.getElementsByClassName("count-btn"), (el) => {
	el.addEventListener("click", () => {
		if (el.dataset.state==="primal") {
			el.dataset.state="secondary";
		}
	}, true);

	const childs = Array.from(el.children);
	const btn_decrease = childs.find(e => e.classList.contains('count-btn__decrease'));
	const btn_count = childs.find(e => e.classList.contains('count-btn__count'));
	const btn_increase = childs.find(e => e.classList.contains('count-btn__increase'));


	btn_decrease.addEventListener("click", (e) => {
		if (btn_count.innerText === "1") {
			el.dataset.state="primal";
		} else {
			btn_count.innerText = Number(btn_count.innerText)-1;
		}
	});

	btn_increase.addEventListener("click", (e) => {
		btn_count.innerText = Number(btn_count.innerText)+1;
	});
	
});

