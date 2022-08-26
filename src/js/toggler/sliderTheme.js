const KEY_FOR_THEME = 'theme';
const linkEl = document.querySelector('.themetoggle');
const spanEl = document.querySelector('.material-symbol');

linkEl.addEventListener('click', event => {
  event.preventDefault();
  if (localStorage.getItem(KEY_FOR_THEME) === 'dark') {
    localStorage.removeItem(KEY_FOR_THEME);
  } else {
    localStorage.setItem(KEY_FOR_THEME, 'dark');
  }
  changeTheme();
});

function changeTheme() {
  if (localStorage.getItem('theme') === 'dark') {
    document.querySelector('body').classList.remove('light');
    document.querySelector('footer').classList.remove('footer-light');
    document.querySelector('body').classList.add('dark');
    document.querySelector('footer').classList.add('footer-dark');
    document.querySelector('header').classList.add('heared-shaddow');
    document.querySelector('.main-modal').classList.add('modal-dark');
    spanEl.textContent = 'dark_mode';
  } else {
    document.querySelector('body').classList.remove('dark');
    document.querySelector('footer').classList.remove('footer-dark');
    document.querySelector('header').classList.remove('heared-shaddow');
    document.querySelector('.main-modal').classList.remove('modal-dark');
    document.querySelector('body').classList.add('light');
    document.querySelector('footer').classList.add('footer-light');
    spanEl.textContent = 'wb_sunny';
  }
}
changeTheme();
