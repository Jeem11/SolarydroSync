
document.querySelector('.btn-save').addEventListener('click', function() {
    alert('Saved successfully!');
});

document.querySelector('.btn-return').addEventListener('click', function() {
    window.history.back(); 
});

document.querySelectorAll('.btn-upload').forEach(button => {
    button.addEventListener('click', function () {
        const inputId = this.getAttribute('data-input'); // Get associated input ID
        const fileInput = document.getElementById(inputId);
        if (fileInput) {
            fileInput.click(); // Open file selector
        }
    });
});

// Optional: Log the selected file name (for demonstration)
document.querySelectorAll('.hidden-input').forEach(input => {
    input.addEventListener('change', function () {
        if (this.files.length > 0) {
            alert(`Selected file: ${this.files[0].name}`);
        }
    });
});

