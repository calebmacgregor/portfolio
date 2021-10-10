function handleImageZoom(e) {
	const image = e.target.closest(".screenshot")
	if (!image) return

	image.classList.toggle("zoomed")
}

function expandScreenshotModalMobile(e) {
	if (!e.target.classList.contains("screenshots-link")) return
	const project = e.target.closest(".project")
	if (!project) return
	const screenshotContainer = project.querySelector(
		".project-screenshot-container"
	)
	screenshotContainer.classList.add("open")

	//Disable scrolling
	const body = document.querySelector("body")
	body.classList.add("scroll-disabled")
}

function expandScreenshotModalDesktop(e) {
	if (!e.target.classList.contains("screenshot")) return
	const project = e.target.closest(".project")
	if (!project) return
	const screenshotContainer = project.querySelector(
		".project-screenshot-container"
	)
	screenshotContainer.classList.add("open")

	//Disable scrolling
	const body = document.querySelector("body")
	body.classList.add("scroll-disabled")
}

function minimizeScreenshotModal(e) {
	if (e.target.classList.contains("screenshots-link")) return
	if (e.target.classList.contains("screenshot")) return

	const screenshotContainers = Array.from(
		document.querySelectorAll(".project-screenshot-container")
	)

	const openScreenshotModals = screenshotContainers.filter((modal) => {
		return modal.classList.contains("open")
	})

	if (!openScreenshotModals.length > 0) return
	openScreenshotModals.forEach((modal) => {
		modal.classList.remove("open")
	})
	//Reenable scrolling
	const body = document.querySelector("body")
	body.classList.remove("scroll-disabled")
}

document.addEventListener("click", handleImageZoom)
document.addEventListener("click", expandScreenshotModalMobile)
document.addEventListener("click", expandScreenshotModalDesktop)
document.addEventListener("click", minimizeScreenshotModal)
