document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.tab-button');
    const contentItems = document.querySelectorAll('.content-item');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            buttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#1D839F'; // Reset to original color
                btn.style.color = '#fff'; // Reset text color
                btn.style.borderColor = 'transparent'; // Reset border color to transparent
                btn.style.borderTopLeftRadius = '0';  // Reset the border radius
                btn.style.borderBottomLeftRadius = '0'; // Reset the border radius
            });

            // Add active class to the clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#fff'; // Change background to white
            this.style.color = '#1D839F'; // Change text color to the original button color
            this.style.borderColor = '#1D839F'; // Set border color to original color
            this.style.border = '2px solid #1D839F'; // Set border to ensure it's visible
            this.style.borderTopLeftRadius = '15px'; // Set the border radius
            this.style.borderBottomLeftRadius = '15px'; // Set the border radius

            // Remove active class from all content items
            contentItems.forEach(item => item.classList.remove('active'));

            // Get target content ID and add active class to corresponding content item
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });
});
