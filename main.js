const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* CHANGE HEADER WHEN SCROLL */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight
function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* TESTIMONIALS CAROUSEL */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* SCROLLREVEAL */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
#home .image,
#home .text, 
#about .image, 
#about .text,
#services header,
#services .card,
#testimonials header,
#testimonials .testimonials,
#contact .text,
#contact .links,
footer .brand, footer .social
`,
  {
    interval: 100
  }
)

/* BACK TO TOP BUTTON */
const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* active menu */
const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  /* Abstraindo:
  Pega a altura visível da janela ("window.innerHeight")
  Divide esse valor em 8 partes e multiplica por 4
  Ou seja, tem-se o valor da metade da página, onde ficará o checkpoint
  Então, soma-se com o deslocamento do eixo Y
  Assim, tem-se o valor do checkpoint pela extensão da página
  */
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop // Valor do topo da section em relação a página inteira
    const sectionHeight = section.offsetHeight // Valor da altura da section
    const sectionId = section.getAttribute('id') // Valor do atributo id da section

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* WHEN SCROLL */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})
