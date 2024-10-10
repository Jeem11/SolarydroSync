document.getElementById('J_fileInput').addEventListener('change', function(event) {
    const [file] = event.target.files;
    if (file) {
        const imgPreview = document.getElementById('J_imagePreview');
        imgPreview.src = URL.createObjectURL(file);
        imgPreview.style.display = 'block';
    }
});

// Get modal element
const modal = document.getElementById("J_modal");

// Get the button that opens the modal
const searchButton = document.querySelector(".J_search-button");

// Get the <span> element that closes the modal
const closeButton = document.querySelector(".J_close-button");

// Get the input fields for autofilling
const addressInput = document.getElementById("J_address");
const ageInput = document.getElementById("J_age");
const birthdayInput = document.getElementById("J_birthday");
const emailInput = document.getElementById("J_email");
const contactNoInput = document.getElementById("J_contactNo");
const emergencyContactNoInput = document.getElementById("J_emergencyContactNo");

// Get all name list items in the modal (assuming there's a specific class or selector to target name rows)
const nameItems = document.querySelectorAll(".J_table tbody tr");

// When the user clicks the button, open the modal
searchButton.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeButton.onclick = function() {
    modal.style.display = "none";
}

// Autofill when a name is clicked
nameItems.forEach(item => {
    item.onclick = function() {
        // Get associated data attributes from the clicked row
        const address = item.getAttribute("data-address");
        const age = item.getAttribute("data-age");
        const birthday = item.getAttribute("data-birthday");

        // Fill in the input fields with the associated values
        addressInput.value = address || ""; // Fill address based on name
        ageInput.value = age || ""; // Fill age based on name
        birthdayInput.value = birthday || ""; // Fill birthday based on name

        // Hide the modal after autofill
        modal.style.display = "none";
    }
});


// Get modal elements
const saveModal = document.getElementById('J_saveModal');
const authorizeButton = document.querySelector('.J_save-button');
const closeModalButton = document.querySelector('.J_close-button');
const confirmButton = document.getElementById('J_confirm');
const cancelButton = document.getElementById('J_cancel');

// Function to open the Save New Staff modal
function openSaveModal() {
    saveModal.style.display = 'block'; // Show the modal
}

// Function to close the Save New Staff modal
function closeSaveModal() {
    saveModal.style.display = 'none'; // Hide the modal
}

// Event listener for the Authorize button
authorizeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    openSaveModal(); // Open the confirmation modal
});

// Event listener for the close button in the modal
if (closeModalButton) {
    closeModalButton.addEventListener('click', closeSaveModal);
}

// Event listener for the confirmation button
confirmButton.addEventListener('click', () => {
    // Logic to save the staff information goes here
    alert("Resident record saved!");
    closeSaveModal(); // Close the modal after saving
});

// Event listener for the cancellation button
cancelButton.addEventListener('click', closeSaveModal);


