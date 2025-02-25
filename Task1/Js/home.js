
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    menuIcon.addEventListener('click', function() {
      dropdownMenu.classList.toggle('active');
    });
  });