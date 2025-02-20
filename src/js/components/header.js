export function header() {
    const header = document.querySelector('.header')

    const headerHeight = header.offsetHeight

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            start: `bottom 30%`,
            end: 'bottom top',
            onEnter: () => {
                header.classList.add('light-bg')
            },
            onLeaveBack: () => {
                header.classList.remove('light-bg')

            }
        }
    });



    const link = document.querySelectorAll('[data-to]')
    const navbar = document.querySelector('.navbar')
    const navbarCollapse = document.querySelector('.navbar__collapse')
    link.forEach(el => {
        const sec = document.querySelector(`.${el.getAttribute('data-to')}`)
        el.addEventListener('click', () => {
            window.scrollTo({
                top: sec.offsetTop - navbar.offsetHeight + 5,
                behavior: 'smooth'
            })
            navbarCollapse.classList.remove('show')
            document.body.classList.remove('disable-scroll')
        })
    })

}
