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
    const emailInput = document.getElementById("J_email");
    const contactNoInput = document.getElementById("J_contactNo");
    const emergencyContactNoInput = document.getElementById("J_emergencyContactNo");

    // Get all name and address list items
    const nameItems = document.querySelectorAll(".J_column:first-child li");
    const addressItems = document.querySelectorAll(".J_column:last-child li");

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
            const address = item.getAttribute("data-address");
            
            // Fill in the input fields
            addressInput.value = address; // Fill address based on name

            modal.style.display = "none"; // Close modal
        }
    });

    // Autofill when an address is clicked
    addressItems.forEach(item => {
        item.onclick = function() {
            const name = item.getAttribute("data-name");

            // Fill in the input fields
            addressInput.value = item.innerText; // Fill in the address

            modal.style.display = "none"; // Close modal
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


