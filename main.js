import {
	handleImageZoom,
	expandScreenshotModalDesktop,
	expandScreenshotModalMobile,
	minimizeScreenshotModal
} from "./functions.js"

function handleNavExpander(e) {
	const navExpanderContainer = e.target.closest(".nav-expander-container")
	if (!navExpanderContainer) return
	const navExpander = navExpanderContainer.querySelector(".nav-expander")
	navExpander.classList.toggle("expanded")

	const navList = document.querySelector(".nav-list")
	navList.classList.toggle("mobile-hidden")
}

document.addEventListener("click", handleImageZoom)
document.addEventListener("click", expandScreenshotModalMobile)
document.addEventListener("click", expandScreenshotModalDesktop)
document.addEventListener("click", minimizeScreenshotModal)
document.addEventListener("click", handleNavExpander)
// document.addEventListener("scroll", autohideNav)
