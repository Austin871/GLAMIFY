 const menuIcon = document.getElementById('menu-icon');
  const navLinks = document.getElementById('nav-links');

  menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // Toggle icon class
    if (navLinks.classList.contains('active')) {
      menuIcon.classList.remove('ri-menu-2-line');
      menuIcon.classList.add('ri-close-line');
    } else {
      menuIcon.classList.remove('ri-close-line');
      menuIcon.classList.add('ri-menu-2-line');
    }
  });