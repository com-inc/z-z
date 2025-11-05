// Particle Background Animation
const canvas = document.getElementById("particleCanvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const particles = []
const particleCount = 80

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width
    this.y = Math.random() * canvas.height
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.size = Math.random() * 1.5
    this.opacity = Math.random() * 0.5 + 0.2
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    if (this.x < 0 || this.x > canvas.width) this.vx *= -1
    if (this.y < 0 || this.y > canvas.height) this.vy *= -1
  }

  draw() {
    ctx.fillStyle = `rgba(212, 175, 55, ${this.opacity})`
    ctx.fillRect(this.x, this.y, this.size, this.size)
  }
}

function initParticles() {
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle())
  }
}

function animateParticles() {
  ctx.fillStyle = "rgba(0, 10, 21, 0.05)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  particles.forEach((particle) => {
    particle.update()
    particle.draw()
  })

  requestAnimationFrame(animateParticles)
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

initParticles()
animateParticles()

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active")
  mobileMenu.classList.toggle("active")
})

// Close mobile menu when link is clicked
document.querySelectorAll(".mobile-nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active")
    mobileMenu.classList.remove("active")
  })
})

// Smooth scroll behavior for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
    }
  })
})

// Contact Form Submission
const contactForm = document.querySelector(".contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("Thank you for your message! We will get back to you soon.")
    contactForm.reset()
  })
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

document.querySelectorAll(".service-card").forEach((card) => {
  observer.observe(card)
})
