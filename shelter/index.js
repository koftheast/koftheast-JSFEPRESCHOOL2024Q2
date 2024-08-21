const modal = document.querySelector(".modal");
const burgerToOpen = document.querySelector('.burger');
const burgerPetsPage = document.querySelector('.burger__pets-page');
const burgerToClose = document.querySelector('.burger_open');
const navbar = document.querySelector('.navbar');

if (burgerToOpen) {
    burgerToOpen.addEventListener('click', handleClick);
}

if (burgerToClose) {
    burgerToClose.addEventListener('click', handleClickClose);
}

if (burgerPetsPage) {
    burgerPetsPage.addEventListener('click', handleClick);
}

window.addEventListener('resize', handleResize);

function handleClick() {
    modal.style.display = "block";
    if (burgerToOpen) burgerToOpen.style.display = 'none';
    if (burgerPetsPage) burgerPetsPage.style.display = 'none';
}


function handleClickClose() {
    modal.style.display = 'none';
    if (burgerToOpen) burgerToOpen.style.display = 'block';
    if (burgerPetsPage) burgerPetsPage.style.display = 'block';
}

function handleResize() {
    if (window.innerWidth > 768) {
        modal.style.display = 'none'; 
        if (burgerToOpen) burgerToOpen.style.display = 'none';
        if (navbar) navbar.style.display = 'block';
    } else {
        if (navbar) navbar.style.display = 'none';
        if (burgerToOpen) burgerToOpen.style.display = 'block';
    }
}

