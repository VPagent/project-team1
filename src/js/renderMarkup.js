export function renderMarkup(data) {
  const markup = data
    .map(film => {
      `<li class="film__item">
        <img
      class="film__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      <p></p>
      <p></p>
    </li>`;
    })
    .join('');
  return markup;
}
