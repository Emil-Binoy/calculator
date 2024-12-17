// Get the toggle button and the menu
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-cta"]');
const menu = document.getElementById("navbar-cta");

// Add event listener to the hamburger button to toggle the menu
toggleButton.addEventListener("click", function () {
    // Toggle the 'hidden' class on the menu to show/hide it
    menu.classList.toggle("hidden");

    // Toggle aria-expanded attribute for better accessibility
    const isExpanded = menu.classList.contains("hidden");
    toggleButton.setAttribute("aria-expanded", !isExpanded);
});
