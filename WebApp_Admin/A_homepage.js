function openTab(tabName) {
    // Remove 'active' class from all buttons
    const tabLinks = document.querySelectorAll('.tab-link');
    tabLinks.forEach(link => link.classList.remove('active'));

    // Hide all tab sections
    const tabSections = document.querySelectorAll('.tab-section');
    tabSections.forEach(section => section.classList.remove('active'));

    // Add 'active' class to the clicked button
    document.querySelector(`[onclick="openTab('${tabName}')"]`).classList.add('active');

    // Show the corresponding tab section
    document.getElementById(tabName).classList.add('active');
}
