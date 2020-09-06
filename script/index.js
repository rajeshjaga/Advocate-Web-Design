// import { } from './import';

document.addEventListener('DOMContentLoaded', () => {

    const navButton = document.getElementById('nav-button');
    navButton.addEventListener('click', () => {
        document.querySelector('ul').classList.toggle('show');
    })
})