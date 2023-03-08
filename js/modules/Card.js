export default class Card {
    constructor(bowOpen, words, rectangle) {
        this.bowOpen = document.querySelectorAll(bowOpen);
        this.words = document.querySelectorAll(words);
        this.rectangle = document.querySelectorAll(rectangle);
    }

    init() {
        this.bowOpen.forEach((bow, i) => {
            bow.addEventListener('click', () => {
                bow.classList.add('animated', 'fadeOutDown');

                setTimeout(() => {
                    this.words[i].style.opacity = 1;
                    this.rectangle[i].classList.add('green_shadow');
                }, 300);

                setTimeout(() => {
                    bow.remove();
                }, 1000)
            });
        });
    }
}