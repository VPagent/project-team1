export function renderMarkupModal(data) {
  const markup = data.results
    .map(
      ({
        poster_path,
        title,
        name,
        vote_average,
        vote_count,
        genre_ids,
        overview,
      }) => {
        return `<div class="main-modal__container">
                      <div class="main-modal__preview">
                        <img src="https://image.tmdb.org/t/p/original${poster_path}" alt="${
          title || name
        }" width="240" />
                      </div>
                      <div>
                        <h2 class="main-modal__title">${title}</h2>
                        <div class="main-modal__box">
                          <div class="main-modal__features">
                            <p>Vote / Votes</p>
                            <p>Popularity</p>
                            <p>Original Title</p>
                            <p>Genre</p>
                          </div>
                          <div class="main-modal__values">
                            <p>
                              <span class="main-modal__values--vote">${vote_average}</span>
                              <span class="main-modal__values--slash">/</span>
                              <span class="main-modal__values--votes">${vote_count}</span>
                            </p>
                            <p>${popularity}</p>
                            <p class="main-modal__values--title">${title}</p>
                            <p class="main-modal__values--2">${genre_ids}</p>
                          </div>
                        </div>
                        <div class="main-modal__description">
                          <p class="main-modal__about">about</p>
                          <p class="main-modal__text">${overview}</p>
                        </div>
                        <ul class="main-modal__buttons">
                          <li>
                            <button class="main-modal__buttons--watched">add to Watched</button>
                          </li>
                          <li>
                            <button class="main-modal__buttons--queue">add to queue</button>
                          </li>
                        </ul>
                      </div>
                    </div>`;
      }
    )
    .join('');
  return markup;
}
