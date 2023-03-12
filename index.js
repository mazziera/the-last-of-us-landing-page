const carouselButtons = document.querySelectorAll('.button');


const images = document.querySelectorAll('.image');

carouselButtons.forEach((button, indice) => {

    button.addEventListener('click', () => {
        const buttonSelected = document.querySelector('.selected');
        buttonSelected.classList.remove('selected');

        button.classList.add('selected');

        const activeImage = document.querySelector('.active');
        activeImage.classList.remove('active');

        images[indice].classList.add('active');
    });
})
