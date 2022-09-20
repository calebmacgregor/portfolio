import {
  handleImageZoom,
  expandScreenshotModalDesktop,
  expandScreenshotModalMobile,
  minimizeScreenshotModal,
} from "./functions.js"

function handleNavExpander(e) {
  const navExpanderContainer = e.target.closest(".nav-expander-container")
  if (!navExpanderContainer) return
  const navExpander = navExpanderContainer.querySelector(".nav-expander")
  navExpander.classList.toggle("expanded")

  const navList = document.querySelector(".nav-list")
  navList.classList.toggle("mobile-hidden")
}

function minimiseNav(e) {
  if (!e.target.classList.contains("nav-item")) return
  const navList = document.querySelector(".nav-list")
  const navExpander = document.querySelector(".nav-expander")

  navList.classList.add("mobile-hidden")
  navExpander.classList.remove("expanded")
}

document.addEventListener("click", handleImageZoom)
document.addEventListener("click", expandScreenshotModalMobile)
document.addEventListener("click", expandScreenshotModalDesktop)
document.addEventListener("click", minimizeScreenshotModal)
document.addEventListener("click", handleNavExpander)
document.addEventListener("click", minimiseNav)
// document.addEventListener("scroll", autohideNav)

const images = Array.from(document.querySelectorAll(".anim"))

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `slide-up 500ms ${entry.target.dataset.delay} forwards ease-in-out`
    }
  })

  console.log(entries)
})

images.forEach((image) => {
  observer.observe(image)
})
