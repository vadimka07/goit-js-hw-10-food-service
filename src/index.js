import menuItems from './template/menu.hbs';
import menu from './menu.json';
import './sass/main.scss';

const menuContainer = document.querySelector('.js-menu');
const themeSwitcher = document.getElementById('theme-switch-toggle');
function cardItem( menu ) {
  menuContainer.innerHTML = menu.map( ( item ) => menuItems(item)).join( '' );
}

cardItem( menu ) ;

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

function setTheme() {
  const saveStatus = localStorage.getItem('Theme') || Theme.LIGHT;
  document.body.classList.remove(Theme.LIGHT, Theme.DARK);
  document.body.classList.add(saveStatus);
  themeSwitcher.checked = JSON.parse(localStorage.getItem('checked'));
}
setTheme();

themeSwitcher.addEventListener('click', function( e ) {
  if(e.target.checked) {
    localStorage.setItem( 'Theme', Theme.DARK );
  }else {
    localStorage.setItem('Theme', Theme.LIGHT );
  }
   localStorage.setItem('checked', e.target.checked);
  setTheme();

})
