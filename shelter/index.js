document.addEventListener("DOMContentLoaded", function() {
    const body = document.body;
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
        body.classList.toggle('no-scroll');

    })
    document.getElementById('menu').addEventListener('click', function() {
        document.querySelector('header').classList.toggle('open')
        body.classList.toggle('no-scroll');
    })

})