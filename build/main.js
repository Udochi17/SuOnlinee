
const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobile-div')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('top-0')
        // mobileMenu.classList.toggle('flex')
        hamburgerBtn.classList.toggle('toggle-btn')
    }

    hamburgerBtn.addEventListener('click', toggleMenu)
    mobileMenu.addEventListener('click', toggleMenu)
}

document.addEventListener('DOMContentLoaded', initApp)
