const BASE_URL = "https://seal-app-7asfv.ondigitalocean.app/api/"

async function populateProject() {
	//Get all projects
	fetch(BASE_URL)
}

async function fetchData(endpoint, params) {
	const output = await fetch(`${BASE_URL}${endpoint}?${params}`).then(
		(response) => response.json()
	)

	return output
}

async function populateProject(response) {
	const data = await response.data
	let iterator = 2
	data.forEach((project) => {
		const section = document.createElement("section")
		section.classList = "project subsection"

		const projectScreenshotContainer = document.createElement("div")
		projectScreenshotContainer.classList = `project-screenshot-container ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		section.appendChild(projectScreenshotContainer)

		// Loop through every screenshot
		project.attributes.screenshots.data.forEach((screenshot) => {
			const screenshotElement = document.createElement("img")
			screenshotElement.classList = "screenshot"
			screenshot.alt = ""
			screenshotElement.src = `https://seal-app-7asfv.ondigitalocean.app${screenshot.attributes.url}`
			console.log(screenshot.attributes)

			projectScreenshotContainer.appendChild(screenshotElement)
		})

		const projectTextContainer = document.createElement("div")
		projectTextContainer.classList = `project-text-container ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		section.appendChild(projectTextContainer)

		const projectTitleContainer = document.createElement("div")
		projectTitleContainer.classList = `project-title-container ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		projectTextContainer.appendChild(projectTitleContainer)

		if (project.attributes.logo.data) {
			const projectIcon = document.createElement("img")
			projectIcon.classList = "project-icon"
			projectIcon.src = `https://seal-app-7asfv.ondigitalocean.app${project.attributes.logo.data?.attributes.url}`
			projectTitleContainer.appendChild(projectIcon)
		}

		const projectTitle = document.createElement("h3")
		projectTitle.classList = `project-title ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		projectTitle.innerText = project.attributes.title
		projectTitleContainer.appendChild(projectTitle)

		const projectDescription = document.createElement("p")
		projectDescription.classList = `project-description drop-shadow ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		projectDescription.innerText = project.attributes.description
		projectTextContainer.appendChild(projectDescription)

		const projectTextContainerBottom = document.createElement("div")
		projectTextContainerBottom.classList = `project-text-container-bottom ${
			iterator % 2 === 0 ? "left" : "right"
		}`
		projectTextContainer.appendChild(projectTextContainerBottom)

		if (project.attributes.technologies.data) {
			const technologies = document.createElement("ul")
			technologies.classList = `technologies horizontal-scroll ${
				iterator % 2 === 0 ? "left" : "right"
			}`
			projectTextContainerBottom.appendChild(technologies)

			//Loop through each technology
			project.attributes.technologies.data.forEach((tech) => {
				const technology = document.createElement("li")
				technology.classList = "technology-item"
				technology.innerText = tech.attributes.name

				technologies.appendChild(technology)
			})
		}

		const projectLinks = document.createElement("ul")
		projectLinks.classList = "project-links"
		projectTextContainerBottom.appendChild(projectLinks)

		const mediaLink = document.createElement("li")
		mediaLink.classList = "media-link screenshots-link project-link"
		mediaLink.innerText = "Screenshots"
		projectLinks.appendChild(mediaLink)

		if (project.attributes.liveSiteURL) {
			const liveSiteLink = document.createElement("li")
			liveSiteLink.classList = "project-link live-site-link"

			const liveSiteAnchor = document.createElement("a")
			liveSiteAnchor.innerText = "Live Site"
			liveSiteAnchor.setAttribute("target", "blank")
			liveSiteAnchor.classList = "project-link live-site-link"
			liveSiteAnchor.setAttribute("href", project.attributes.liveSiteURL)
			liveSiteLink.appendChild(liveSiteAnchor)

			projectLinks.appendChild(liveSiteLink)
		}

		if (project.attributes.githubURL) {
			const githubLink = document.createElement("li")
			githubLink.classList = "project-link github-link"

			const githubAnchor = document.createElement("a")
			githubAnchor.innerText = "Github"
			githubAnchor.setAttribute("target", "blank")
			githubAnchor.classList = "project-link github-link"
			githubAnchor.setAttribute("href", project.attributes.githubURL)
			githubLink.appendChild(githubAnchor)

			projectLinks.appendChild(githubLink)
		}

		const projects = document.querySelector(".projects")
		projects.append(section)

		iterator++
	})
}

fetchData("projects", "populate=*").then((data) => {
	populateProject(data)
})
