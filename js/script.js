import Slider from './modules/MainSlider.js';
import Postcard from './modules/Postcard.js';
import CardOpen from './modules/Card.js';

window.addEventListener('DOMContentLoaded', () => {

    let slider = new Slider('.module', '.aside_next');
    slider.init();
    slider.nextSlide();


    let Card = new Postcard('.jessyOpen', '.jessyBtn', '.content');
    Card.init();

    let CardThird = new Postcard('.giftOpen', '.giftBtn', '.contentThird');
    CardThird.init();

    let OpenCard = new CardOpen('.bow', '.rectangle_words', '.rectangle');
    OpenCard.init();

});