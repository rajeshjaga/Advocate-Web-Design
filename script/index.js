// import { } from './import';

document.addEventListener('DOMContentLoaded', () => {
    //Variables declaration
    const navButton = document.getElementById('nav-button');
    const ul = document.querySelector('ul');
    const navBar = document.querySelectorAll('#nav-bar');
    const accordiano = document.getElementById('accordian');
    const closeAccordiano = document.getElementById('closeaccordian');
    const disabledCards = document.querySelectorAll('.disabled');
    const mediaQuery = window.matchMedia('(max-width:768px)');
    const phoneNumber = document.querySelector('.phone');
    //event listeners
    navButton.addEventListener('click', () => {
        ul.classList.toggle('show');
        navBar.forEach(bar => { bar.classList.toggle('show'); });
    });
    //accordian
    accordiano.addEventListener('click', () => {
        disabledCards.forEach(card => {
            if (card.classList.contains('disabled')) {
                card.style.display = 'block';
                accordiano.style.display = 'none';
                closeAccordiano.style.display = 'block';
            }
        })
    });
    closeAccordiano.addEventListener('click', () => {
        disabledCards.forEach(card => {
            if (card.classList.contains('disabled')) {
                card.style.display = 'none';
                accordiano.style.display = 'block';
                closeAccordiano.style.display = 'none';
            }
        })
    });
    if (mediaQuery.matches) {
        alert("hello mediaQuery");
    }
})  