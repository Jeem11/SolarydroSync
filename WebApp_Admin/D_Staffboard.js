document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contentItems = document.querySelectorAll('.content-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons and reset styles
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#1D839F'; // Original color
                btn.style.color = '#fff'; // Original text color
                btn.style.borderColor = 'transparent'; // Remove border color
            });

            // Add active class and styles to clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#fff'; // Change to white
            this.style.color = '#1D839F'; // Change text color
            this.style.borderColor = '#1D839F'; // Set border color

            // Remove active class from all content items
            contentItems.forEach(item => item.classList.remove('active'));

            // Show the target content
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
