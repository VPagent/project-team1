// import { GENRES_KEY } from '../../index';

const GENRES_KEY = 'genres';

export function matchGenresById(genresIds) {
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
    } Other`;
  }
  return genresArray.join(', ');
}
