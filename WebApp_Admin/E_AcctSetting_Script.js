// Define the function in the global scope
function displayImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            document.querySelector('.profile-img i').style.display = 'none'; // Hide the icon
            document.querySelector('.profile-img').style.backgroundImage = `url(${e.target.result})`; // Set the background image
            document.querySelector('.profile-img').style.backgroundSize = 'cover'; // Cover the div
            document.querySelector('.profile-img').style.backgroundPosition = 'center'; // Center the image
        }
        
        reader.readAsDataURL(input.files[0]);
    }
}

// Now, you can use the DOMContentLoaded event if needed
document.addEventListener("DOMContentLoaded", function() {
    // Any other initialization code can go here
});
