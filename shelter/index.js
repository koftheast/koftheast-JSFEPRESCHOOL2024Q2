document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    // const burgerMenu = document.getElementById('burger');
    // const closeMenuButton = document.querySelector('close-menu');
    // const header = document.querySelector('header');

    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
        body.classList.toggle('no-scroll');

    })
    document.getElementById('menu').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
        body.classList.toggle('no-scroll');
    })
    

    // function openMenu() {
    //     header.classList.add('open');
        
    // }

    // function closeMenu() {
    //     header.classList.remove('open');
    //     body.classList.remove('no-scroll');
    // }

    // burgerMenu.addEventListener('click', openMenu);
    // closeMenuButton.addEventListener('click', closeMenu);

})