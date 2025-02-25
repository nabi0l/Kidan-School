function showCategory(category) {
    // Remove active class from all category buttons
    document.querySelectorAll('.nav-bar ul li a').forEach(button => {
        button.classList.remove('active');
    });

    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Hide all categories (including "All")
    document.querySelectorAll('.category').forEach(cat => {
        cat.style.display = 'none';
    });

    // Show the "All" category images if "All" is clicked
    if (category === 'all') {
        document.getElementById('all').style.display = 'grid'; // Show all images
    } else {
        // Show the specific category
        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
            selectedCategory.style.display = 'grid'; // Show selected category images
        }
        document.getElementById('all').style.display = 'none'; // Hide all images
    }
}

// Initialize with the 'All' category showing
document.addEventListener('DOMContentLoaded', () => {
    showCategory('all');
});

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    menuIcon.addEventListener('click', function() {
      dropdownMenu.classList.toggle('active');
    });
  });