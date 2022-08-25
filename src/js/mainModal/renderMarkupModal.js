import { matchGenresByIdForModal } from '../findGenres/findGenres';
export function renderMarkupModal({
  poster_path,
  title,
  name,
  vote_average,
  vote_count,
  popularity,
  genre_ids,
  overview,
}) {
  return `            <div class="main-modal__preview">
                        <img src="${
                          poster_path
                            ? 'https://image.tmdb.org/t/p/w500' + poster_path
                            : 'https://img.freepik.com/free-vector/glitch-error-404-page_23-2148105404.jpg?w=1000'
                        }" alt="${title || name}"/>
                      </div>
                      <div>
                        <h2 class="main-modal__title">${title}</h2>
                        <div class="main-modal__box">
                          <table>
                            <tr>
                              <td class="main-modal__features">Vote / Votes</td>
                              <td class="main-modal__values"><span class="main-modal__values--vote">${
                                vote_average.toFixed(1) || 'No info'
                              }</span><span class="main-modal__values--slash"> /</span><span class="main-modal__values--votes">${vote_count}</span></td>
                            </tr>
                            <tr>
                              <td class="main-modal__features">Popularity</td>
                              <td class="main-modal__values">${popularity.toFixed(
                                1
                              )}</td>
                            </tr>
                              <tr>
                              <td class="main-modal__features">Original Title</td>
                              <td class="main-modal__values main-modal__values--title">${title}</td>
                            </tr>
                              <tr>
                              <td class="main-modal__features">Genre</td>
                              <td class="main-modal__values main-modal__values--2">${matchGenresByIdForModal(
                                genre_ids
                              )}</td>
                            </tr>
                          </table>
                           <div class="main-modal__description">
                            <p class="main-modal__about">about</p>
                            <p class="main-modal__text">${
                              overview || 'No overview found.'
                            }</p>
                          </div>
                        <ul class="main-modal__buttons">
                          <li>
                            <button class="main-modal__buttons--watched">add to Watched</button>
                          </li>
                          <li>
                            <button class="main-modal__buttons--queue">add to queue</button>
                          </li>
                        </ul>
                      </div>`;
}

/* <table>
  <tr>
    <td class="main-modal__features">Vote / Votes</td>
    <td class="main-modal__values"><span class="main-modal__values--vote">${vote_average.toFixed(
                                1
                              )}</span></td>
  </tr>
  <tr>
    <td class="main-modal__features">Popularity</td>
    <td class="main-modal__values">${popularity.toFixed(1)}</td>
  </tr>
    <tr>
    <td class="main-modal__features">Original Title</td>
    <td class="main-modal__values main-modal__values--title">${title}</td>
  </tr>
    <tr>
    <td class="main-modal__features">Genre</td>
    <td class="main-modal__values main-modal__values--2">${matchGenresByIdForModal(
                              genre_ids
                            )}</td>
  </tr>
</table> */

//  <div class="main-modal__features">
//     <p>Vote / Votes</p>
//     <p>Popularity</p>
//     <p>Original Title</p>
//     <p>Genre</p>
//   </div>
//   <div class="main-modal__values">
//     <p>
//       <span class="main-modal__values--vote">${vote_average.toFixed(
//         1
//       )}</span>
//       <span class="main-modal__values--slash">/</span>
//       <span class="main-modal__values--votes">${vote_count}</span>
//     </p>
//     <p>${popularity.toFixed(1)}</p>
//     <p class="main-modal__values--title">${title}</p>
//     <p class="main-modal__values--2">${matchGenresByIdForModal(
//       genre_ids
//     )}</p>
//   </div>
// </div>
