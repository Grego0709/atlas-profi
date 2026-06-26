const toggleButton = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  const clickedInsideMenu = navLinks.contains(event.target);
  const clickedToggleButton = toggleButton.contains(event.target);

  if (!clickedInsideMenu && !clickedToggleButton && navLinks.classList.contains('open')) {
    navLinks.classList.remove('open');
  }
});