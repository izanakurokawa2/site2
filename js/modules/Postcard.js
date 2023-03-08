export default class Postcard {
    constructor(card, btn, content) {
        this.card = document.querySelector(card);
        this.btn = document.querySelector(btn);
        this.content = document.querySelector(content);
    }

    init() {
        this.btn.addEventListener('click', () => {
            this.btn.style.opacity = 0;
            this.card.style.opacity = 0;
            setTimeout(() => {
                this.btn.style.display = 'none';
                this.card.style.display = 'none';
                this.content.style.opacity = 1;
            }, 500);
        });
    }
}