const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = sidebar.querySelector(".toggle"),  // Ensuring toggle is correctly referenced
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

// Toggle sidebar visibility
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

// Toggle dark/light mode
modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");

    // Change mode text based on current mode
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});

const dropdownToggle = document.getElementById('dropdownToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownToggle.addEventListener('click', (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown if clicking outside of it
window.addEventListener('click', () => {
    dropdownMenu.style.display = 'none';
});

