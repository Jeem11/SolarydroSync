// Toggle the visibility of the dropdown menu
function toggleMenu(element) {
    var dropdown = element.nextElementSibling;
    var isVisible = dropdown.style.display === 'block';
    dropdown.style.display = isVisible ? 'none' : 'block';
}

// Close the dropdown if clicked outside of it
window.addEventListener('click', function(event) {
    var dropdowns = document.querySelectorAll('.action-dropdown');
    dropdowns.forEach(function(dropdown) {
        if (!dropdown.contains(event.target) && !event.target.classList.contains('action-icon')) {
            dropdown.style.display = 'none';
        }
    });
});

// Toggle current/inactive resident view
function updateLabel() {
    var toggle = document.getElementById("resToggle");
    var label = document.querySelector(".rToggleLbl");
    label.textContent = toggle.checked ? 'Current' : 'Inactive';
}
