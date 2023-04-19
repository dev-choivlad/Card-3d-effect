const card = {
	creat3DEffect: () => {
		const card = document.querySelector(".card");
		const mainContainer = document.querySelector(".main-container");

		mainContainer.addEventListener("mousemove", (e) => {
			let w = -(window.innerWidth / 2 - e.pageX) / 30;
			let h = (window.innerHeight / 2 - e.pageY) / 10;

			card.setAttribute("style", "transform: rotateY(" + w + "deg) rotateX(" + h + "deg);-webkit-transform: rotateY(" + w + "deg) rotateX(" + h + "deg);-moz-transform: rotateY(" + w + "deg) rotateX(" + h + "deg)")
		})
	}
};

export const generate3D = card.creat3DEffect;