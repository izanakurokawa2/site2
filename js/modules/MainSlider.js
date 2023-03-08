export default class MainSlider {
    constructor(modules, arrowNext) {
        this.arrowNext = document.querySelectorAll(arrowNext);
        this.modules = document.querySelectorAll(modules);
        this.slideIndex = 0;
    }

    init() {
        this.modules.forEach(slide => {
            slide.style.display = 'none';
        })
        this.modules[this.slideIndex].style.display = 'block';
    };

    nextSlide() {

        this.arrowNext.forEach(arrow => {
            arrow.addEventListener('click', () => {
                if (this.slideIndex >= this.modules.length - 1) {
                    this.slideIndex = 0;
                    this.init();
                } else {
                    this.slideIndex++;
                    this.init();
                }

            })
        });
    }
};

