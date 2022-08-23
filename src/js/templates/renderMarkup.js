import { matchGenresById } from '../findGenres/findGenres';
export function renderMarkup(data) {
  const markup = data.results
    .map(
      ({
        title,
        name,
        id,
        poster_path,
        vote_average,
        release_date,
        genre_ids,
      }) => {
        return `<li class="film-gallery__item" id="${id}">
                  <div class="film-gallery__image-wrapper">
                    <img class="film-gallery__image" src="https://image.tmdb.org/t/p/original${poster_path}"
                        alt="${title || name}" width ="394" height ="336"/>
                  </div>
                  <div class="film-gallery__info-wrapper">
                    <h3 class="film-gallery__name">${name || title}</h3>
                    <p class="film-gallery__info">
                      <span class="film-gallery__info-genres">${matchGenresById(
                        genre_ids
                      )}</span>
                      |
                      <span class="film-gallery__info-year">${release_date.slice(
                        0,
                        4
                      )}</span>
                      <span class="film-gallery__info-vote">${vote_average}</span>
                    </p>
                  </div>
                </li>`;
      }
    )
    .join('');
  return markup;
}
