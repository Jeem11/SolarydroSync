document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.S-tab-button');
    const contentItems = document.querySelectorAll('.S-content-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and reset styles
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#fff'; // Original color
                btn.style.color = '#03045eF'; // Original text color
                btn.style.borderColor = 'transparent'; // Remove border color
            });

            // Add active class and styles to clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#d4d6da'; // Change background
            this.style.color = '#03045e'; // Change text color
            this.style.borderColor = '#1D839F'; // Set border color

            // Remove active class from all content items
            contentItems.forEach(item => item.classList.remove('active'));

            // Show the target content
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
