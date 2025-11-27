// Navigation scroll effect
const navbar = document.getElementById("navbar")
const navLinks = document.querySelectorAll(".nav-link")
const sections = ["the-self", "pragmatist", "paths", "reflection"]

function handleScroll() {
  // Navbar background
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
  } else {
    navbar.classList.remove("scrolled")
  }

  // Active section highlighting
  let currentSection = ""
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId)
    if (section && window.scrollY >= section.offsetTop - 200) {
      currentSection = sectionId
    }
  }

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", handleScroll)

// Fade-in animations on scroll
const fadeElements = document.querySelectorAll(".fade-in")

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")

      // Animate value bars when they come into view
      const valueBars = entry.target.querySelectorAll(".value-bar")
      valueBars.forEach((bar, index) => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + "%"
        }, index * 200)
      })
    }
  })
}, observerOptions)

fadeElements.forEach((el) => fadeObserver.observe(el))

// Also observe value bars directly in The Self section
const selfSection = document.getElementById("the-self")
if (selfSection) {
  const valueBarsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bars = entry.target.querySelectorAll(".value-bar")
          bars.forEach((bar, index) => {
            setTimeout(
              () => {
                bar.style.width = bar.dataset.width + "%"
              },
              index * 200 + 500,
            )
          })
        }
      })
    },
    { threshold: 0.2 },
  )

  valueBarsObserver.observe(selfSection)
}

// Path selector
const pathBtns = document.querySelectorAll(".path-btn")
const pathContents = document.querySelectorAll(".path-content")

pathBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const path = btn.dataset.path

    // Update button states
    pathBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    // Update content visibility
    pathContents.forEach((content) => {
      content.classList.remove("active")
    })

    const targetContent = document.getElementById(`path-${path.toLowerCase()}-content`)
    if (targetContent) {
      targetContent.classList.add("active")
    }
  })
})

// Initial animation trigger for hero
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero-content")
  if (heroContent) {
    setTimeout(() => {
      heroContent.classList.add("visible")
    }, 100)
  }
})
