console.log("linked")

function handleImageZoom(e) {
	const image = e.target.closest(".screenshot")
	if (!image) return

	image.classList.toggle("zoomed")
}

document.addEventListener("click", handleImageZoom)
