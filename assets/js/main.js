const toggleThemeButton = document.getElementById("toggleThemeButton");
const htmlElement = document.documentElement;
const moon = document.getElementsByClassName( 'fa-moon' )[0]
const sun = document.getElementsByClassName( 'fa-sun' )[0]

toggleThemeButton.addEventListener("click", () => {
  // Alternar la clase light-theme
  htmlElement.classList.toggle("light-theme");
  sun.classList.toggle('d-none')
  moon.classList.toggle('d-inline')

  if ( moon.classList.contains( 'visible' ) ) {
    moon.style.display = 'in-line'
  }

});