document.addEventListener('DOMContentLoaded', function () {
    // Select all tab buttons and content items
    const buttons = document.querySelectorAll('.tab-button');
    const contentItems = document.querySelectorAll('.content-item');

    // Iterate over each button to set up click event listeners
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and reset styles
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#fff'; // Original background color
                btn.style.color = '#1D839F'; // Original text color
                btn.style.borderColor = 'transparent'; // Remove border color
            });

            // Add active class and styles to clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#d4d6da'; // Change background
            this.style.color = '#1D839F'; // Change text color to match the theme
            this.style.borderColor = '#1D839F'; // Set border color

            // Remove active class from all content items
            contentItems.forEach(item => item.classList.remove('active'));

            // Show the target content based on data attribute
            const target = this.getAttribute('data-target');
            const targetElement = document.getElementById(target);

            // Check if the target element exists, then add 'active' class
            if (targetElement) {
                targetElement.classList.add('active');
            }
        });
    });
});
