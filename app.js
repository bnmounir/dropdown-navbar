const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
console.log(links);
burger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    links.forEach(item => {
        item.classList.toggle('fade');
    });
});
