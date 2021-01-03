let element = document.querySelector('.section__text')
document.addEventListener('scroll', () => {
    let divPosition = element.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;

    if (divPosition < screenPosition) {
        element.classList.add('slide-top');
    }
    else {
        element.classList.remove('slide-top');
    }
})