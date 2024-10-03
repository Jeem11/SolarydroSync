const body = document.querySelector("body"),
      sidebar = body.querySelector(".sidebar"),
      toggle = sidebar.querySelector(".toggle"),  // Ensuring toggle is correctly referenced
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text"),
      opaqueBoard = document.querySelector('.board');

// Toggle sidebar visibility
toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

    // Check if sidebar is closed or open
    if (sidebar.classList.contains("close")) {
        // Hide the opaque board when sidebar is closed
        opaqueBoard.style.opacity = '0';
        opaqueBoard.style.pointerEvents = 'none'; // Disable interaction
    } else {
        // Show the opaque board when sidebar is open
        opaqueBoard.style.opacity = '1';
        opaqueBoard.style.pointerEvents = 'auto'; // Enable interaction
    }
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

const footerLinks = document.querySelectorAll('.footer-link');

footerLinks.forEach(link => {
    let timeout; // Variable to hold the timeout

    // Mouse over event
    link.addEventListener('mouseenter', () => {
        // Clear any existing timeouts to ensure the tooltip can be shown again
        clearTimeout(timeout);

        // Set a timeout to show the tooltip after 1 second
        timeout = setTimeout(() => {
            const tooltip = link.querySelector('.tooltiptext');
            tooltip.style.visibility = 'visible'; // Set visibility to visible
            tooltip.style.opacity = '1'; // Set opacity to 1
        }, 1000); // Show after 1 second (1000 ms)
    });

    // Mouse leave event
    link.addEventListener('mouseleave', () => {
        // Clear the timeout if mouse leaves before 1 second
        clearTimeout(timeout);
        
        const tooltip = link.querySelector('.tooltiptext');
        tooltip.style.visibility = 'hidden'; // Set visibility to hidden
        tooltip.style.opacity = '0'; // Reset opacity to 0
    });
});
