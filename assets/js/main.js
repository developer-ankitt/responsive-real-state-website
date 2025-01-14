/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // when the scroll is greater than 50 viewport height, add the
    if (this.scrollY >= 50) header.classList.add('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*=============== SWIPER POPULAR ===============*/
var swiperPopular = new Swiper(".popular__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== VALUE ACCORDION 1:06:22 ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item")
accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".value__accordion-header")

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)

        if (openItem && openItem !== item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }

}
/*=============== SCROLL SECTIONS ACTIVE LINK 01:41:26 ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY  > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a{href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP 01:48:00 ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with them
    if(this.scrollY >=350) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== DARK LIGHT THEME 01:52:41 ===============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.home__title .popular__container .subscribe__container .footer__container`)
sr.reveal(`.home__description footer__info`, {dealy: 500})
sr.reveal(`.home__search`, {dealy: 600})
sr.reveal(`.home__value`, {dealy: 700})
sr.reveal(`.home__images`, {dealy: 800, origin:'bottom'})
sr.reveal(`.logos__img`, {interval:100})
sr.reveal(`.value__images contact__content`, {origin: left})
sr.reveal(`.value__content contact__images`, {origin: right})