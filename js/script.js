// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the portfolio
  initPortfolio()
})

// Initialize all portfolio functionality
function initPortfolio() {
  // Setup persona toggle
  setupPersonaToggle()

  // Setup mobile navigation
  setupMobileNav()

  // Setup scroll animations
  setupScrollAnimations()

  // Setup form submission
  setupContactForm()

  // Animate skill bars when they come into view
  animateSkillBars()

  // Setup process section animations
  setupProcessAnimations()

  // Setup testimonials slider
  setupTestimonials()
}

// Setup persona toggle functionality
function setupPersonaToggle() {
  const toggleBtns = document.querySelectorAll(".toggle-btn")
  const body = document.body

  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Remove active class from all buttons
      toggleBtns.forEach((b) => b.classList.remove("active"))

      // Add active class to clicked button
      this.classList.add("active")

      // Get the persona type
      const persona = this.getAttribute("data-persona")

      // Toggle body class
      if (persona === "designer") {
        body.classList.add("designer-mode")
        switchToDesignerMode()
      } else {
        body.classList.remove("designer-mode")
        switchToDeveloperMode()
      }
    })
  })
}

// Switch to developer mode
function switchToDeveloperMode() {
  // Show developer content, hide designer content
  const devContent = document.querySelectorAll(".developer-content")
  const designContent = document.querySelectorAll(".designer-content")
  const devVisual = document.querySelector(".developer-visual")
  const designVisual = document.querySelector(".designer-visual")

  devContent.forEach((el) => {
    el.classList.add("active")
  })

  designContent.forEach((el) => {
    el.classList.remove("active")
  })

  devVisual.classList.add("active")
  designVisual.classList.remove("active")

  // Show developer image, hide designer image in about section
  const devImage = document.querySelector(".about-image .developer-content")
  const designImage = document.querySelector(".about-image .designer-content")
  if (devImage && designImage) {
    devImage.classList.add("active")
    designImage.classList.remove("active")
  }

  // Update CSS variables
  document.documentElement.style.setProperty("--primary", "var(--dev-primary)")
  document.documentElement.style.setProperty("--secondary", "var(--dev-secondary)")
  document.documentElement.style.setProperty("--accent", "var(--dev-accent)")
}

// Switch to designer mode
function switchToDesignerMode() {
  // Show designer content, hide developer content
  const devContent = document.querySelectorAll(".developer-content")
  const designContent = document.querySelectorAll(".designer-content")
  const devVisual = document.querySelector(".developer-visual")
  const designVisual = document.querySelector(".designer-visual")

  devContent.forEach((el) => {
    el.classList.remove("active")
  })

  designContent.forEach((el) => {
    el.classList.add("active")
  })

  devVisual.classList.remove("active")
  designVisual.classList.add("active")

  // Show designer image, hide developer image in about section
  const devImage = document.querySelector(".about-image .developer-content")
  const designImage = document.querySelector(".about-image .designer-content")
  if (devImage && designImage) {
    devImage.classList.remove("active")
    designImage.classList.add("active")
  }

  // Update CSS variables
  document.documentElement.style.setProperty("--primary", "var(--design-primary)")
  document.documentElement.style.setProperty("--secondary", "var(--design-secondary)")
  document.documentElement.style.setProperty("--accent", "var(--design-accent)")
}

// Setup mobile navigation
function setupMobileNav() {
  const navToggle = document.querySelector(".nav-toggle")
  const navLinks = document.querySelector(".nav-links")

  navToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active")

    // Animate toggle button
    const spans = this.querySelectorAll("span")
    if (navLinks.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)"
      spans[1].style.opacity = "0"
      spans[2].style.transform = "rotate(-45deg) translate(5px, -5px)"
    } else {
      spans[0].style.transform = "none"
      spans[1].style.opacity = "1"
      spans[2].style.transform = "none"
    }
  })

  // Close mobile menu when clicking on a link
  const links = navLinks.querySelectorAll("a")
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navToggle.click()
      }
    })
  })
}

// Setup scroll animations
function setupScrollAnimations() {
  const sections = document.querySelectorAll("section")

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active")

          // Animate elements inside the section
          const elements = entry.target.querySelectorAll(".reveal")
          elements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add("active")
            }, index * 100)
          })
        }
      })
    },
    { threshold: 0.1 },
  )

  // Observe each section
  sections.forEach((section) => {
    observer.observe(section)

    // Add reveal class to elements that should animate
    const animatedElements = section.querySelectorAll(
      ".skill-card, .project-card, .contact-item, .designer-testimonial",
    )
    animatedElements.forEach((el) => {
      el.classList.add("reveal")
    })
  })
}

// Animate skill bars when they come into view
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Get the width from the style attribute
          const width = entry.target.style.width

          // First set width to 0
          entry.target.style.width = "0"

          // Then animate to the target width
          setTimeout(() => {
            entry.target.style.width = width
          }, 100)

          // Unobserve after animation
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  // Observe each skill bar
  skillBars.forEach((bar) => {
    observer.observe(bar)
  })
}

// Setup process section animations
function setupProcessAnimations() {
  const processSteps = document.querySelectorAll(".process-step")

  // Create an Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  // Observe each process step
  processSteps.forEach((step) => {
    observer.observe(step)
  })

  // Add delay to each step for sequential animation
  processSteps.forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`
  })
}

// Setup testimonials slider
function setupTestimonials() {
  const testimonialCards = document.querySelectorAll(".testimonial-card")
  const dots = document.querySelectorAll(".dot")
  const prevBtn = document.querySelector(".prev-testimonial")
  const nextBtn = document.querySelector(".next-testimonial")
  let currentIndex = 0

  // Function to show a specific testimonial
  function showTestimonial(index) {
    // Hide all testimonials
    testimonialCards.forEach((card) => {
      card.classList.remove("active")
      card.classList.remove("slide-in-right")
      card.classList.remove("slide-out-left")
    })

    // Update dots
    dots.forEach((dot) => {
      dot.classList.remove("active")
    })

    // Show the selected testimonial
    testimonialCards[index].classList.add("active")
    testimonialCards[index].classList.add("slide-in-right")
    dots[index].classList.add("active")

    // Update current index
    currentIndex = index
  }

  // Event listeners for dots
  dots.forEach((dot) => {
    dot.addEventListener("click", function () {
      const index = Number.parseInt(this.getAttribute("data-index"))
      showTestimonial(index)
    })
  })

  // Event listeners for prev/next buttons
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener("click", () => {
      let newIndex = currentIndex - 1
      if (newIndex < 0) {
        newIndex = testimonialCards.length - 1
      }
      showTestimonial(newIndex)
    })

    nextBtn.addEventListener("click", () => {
      let newIndex = currentIndex + 1
      if (newIndex >= testimonialCards.length) {
        newIndex = 0
      }
      showTestimonial(newIndex)
    })
  }

  // Auto-rotate testimonials
  setInterval(() => {
    let newIndex = currentIndex + 1
    if (newIndex >= testimonialCards.length) {
      newIndex = 0
    }
    showTestimonial(newIndex)
  }, 8000)

  // Initialize first testimonial
  showTestimonial(0)
}

// Setup contact form submission
function setupContactForm() {
  const form = document.getElementById("contactForm")

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Here you would typically send the form data to a server
      // For this demo, we'll just log it to the console
      console.log("Form submitted:", { name, email, subject, message })

      // Show success message
      alert("Thank you for your message! I will get back to you soon.")

      // Reset form
      form.reset()
    })
  }
}

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Change navigation style on scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".main-nav")

  if (window.scrollY > 50) {
    nav.style.padding = "15px 5%"
    nav.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
  } else {
    nav.style.padding = "20px 5%"
    nav.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)"
  }
})
