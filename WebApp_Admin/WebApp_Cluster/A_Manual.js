// Preview the image when file is selected
document.getElementById('fileInput').addEventListener('change', function(event) {
    const [file] = event.target.files;
    if (file) {
        const imgPreview = document.getElementById('imagePreview');
        imgPreview.src = URL.createObjectURL(file);
        imgPreview.style.display = 'block';
    }
});

// Handle form submission
document.getElementById('residentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Show the custom modal
    document.getElementById('customModal').style.display = 'flex';
});

// Handle modal "Yes" button click
document.getElementById('btnYes').addEventListener('click', function() {
    alert("Resident Authorized!"); // Custom action for Yes button
    document.getElementById('customModal').style.display = 'none'; // Hide modal
});

// Handle modal "No" button click
document.getElementById('btnNo').addEventListener('click', function() {
    document.getElementById('customModal').style.display = 'none'; // Hide modal
});