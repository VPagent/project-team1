const GENRES_KEY = 'genres';

export function matchGenresById(genresIds) {
  if (!genresIds) {
    return '';
  }
  const localeGenres = localStorage.getItem(GENRES_KEY);
  const parsedGenres = JSON.parse(localeGenres);
  const filteredGenres = parsedGenres
    .filter(({ id }) => genresIds.includes(id))
    .map(({ name }) => name);

  return formateGenresToString(filteredGenres);
}

function formateGenresToString(genresArray) {
  if (genresArray.length > 3) {
    return `${genresArray[0]}, ${genresArray[1]} and ${
      genresArray.length - 2
    } Others`;
  }
  return genresArray.join(', ');
}

//Для модалки (треба рендерити всі жанри а не тільки 3)
export function matchGenresByIdForModal(genresIds) {
  if (!genresIds) {
    return '';
  }
  const localeGenres = localStorage.getItem(GENRES_KEY);
  const parsedGenres = JSON.parse(localeGenres);
  const filteredGenres = parsedGenres
    .filter(({ id }) => genresIds.includes(id))
    .map(({ name }) => name);

  if (filteredGenres.length == 0) {
    return 'No info';
  } else {
    return filteredGenres.join(', ');
  }
}
