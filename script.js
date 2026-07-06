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

const spineCursor = document.getElementById('spine-cursor');

spineCursor.style.cssText = `
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-4%, -4%);
  filter: drop-shadow(0 0 4px #f0c878);
  transition: left 0.08s ease, top 0.08s ease;
  left: -100px;
  top: -100px;
`;
document.body.style.cursor = 'none';


document.addEventListener('mousemove', function(event) {
  spineCursor.style.left = event.clientX + 'px';
  spineCursor.style.top = event.clientY + 'px';
});
document.addEventListener('mouseleave', function() {
  spineCursor.style.opacity = '0';
});

document.addEventListener('mouseenter', function() {
  spineCursor.style.opacity = '1';
});
const styleOverride = document.createElement('style');
styleOverride.textContent = '* { cursor: none !important; }';
document.head.appendChild(styleOverride);