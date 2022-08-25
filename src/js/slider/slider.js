import Flickity from 'flickity';
import 'flickity/dist/flickity.css';

const slider = document.querySelector('.slider');

export function renderSliderMarkup(response) {
  let markup = response.results
    .map(({ poster_path }) => {
      return `
      <div class="slider__cell">
      <img class="slider__img" src="https://image.tmdb.org/t/p/w500${poster_path}"
      alt="" height="430" loading="lazy"/>
      </div>`;
    })
    .join('');

  slider.innerHTML = markup;
  let flickity = new Flickity('.slider', {
    contain: true,
    // cellAlign: 'left',
    autoPlay: 3000,
    groupCells: true,
    wrapAround: true,
    fullscreen: true,
    //prevNextButtons: true,
    accessibility: true,
    lazyLoad: true,
    fade: true,
  });
}
