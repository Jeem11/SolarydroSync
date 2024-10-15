// Image Upload Preview
document.getElementById('J_fileInput').addEventListener('change', function(event) {
    const [file] = event.target.files;
    if (file) {
        const imgPreview = document.getElementById('J_imagePreview');
        imgPreview.src = URL.createObjectURL(file);
        imgPreview.style.display = 'block';
    }
});

// Modal for Search Results
const modal = document.getElementById("J_modal");
const searchButton = document.querySelector(".J_search-button");
const closeButton = document.querySelector(".J_close-button");

const addressInput = document.getElementById("J_address");
const ageInput = document.getElementById("J_age");
const birthdayInput = document.getElementById("J_birthday");

const nameItems = document.querySelectorAll(".J_table tbody tr");

searchButton.onclick = function() {
    modal.style.display = "block";
}

closeButton.onclick = function() {
    modal.style.display = "none";
}

nameItems.forEach(item => {
    item.onclick = function() {
        const address = item.getAttribute("data-address");
        const age = item.getAttribute("data-age");
        const birthday = item.getAttribute("data-birthday");

        addressInput.value = address || "";
        ageInput.value = age || "";
        birthdayInput.value = birthday || "";

        modal.style.display = "none";
    }
});

// Modal for Save Confirmation
const saveModal = document.getElementById('J_saveModal');
const authorizeButton = document.querySelector('.J_save-button');
const confirmButton = document.getElementById('J_confirm');
const cancelButton = document.getElementById('J_cancel');

function openSaveModal() {
    saveModal.style.display = 'block';
}

function closeSaveModal() {
    saveModal.style.display = 'none';
}

authorizeButton.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent form submission
    if (validateForm()) {
        openSaveModal(); // Open the confirmation modal if form is valid
    }
});

confirmButton.addEventListener('click', () => {
    alert("Resident record saved!");
    closeSaveModal();
});

cancelButton.addEventListener('click', closeSaveModal);

// Form Validation Function
function validateForm() {
    const lastName = document.getElementById("J_lastName").value;
    const firstName = document.getElementById("J_firstName").value;
    const email = document.getElementById("J_email").value;
    const contactNo = document.getElementById("J_contactNo").value;
    const emergencyContactNo = document.getElementById("J_emergencyContactNo").value;
    const imageInput = document.getElementById('J_fileInput');
    const imageFile = imageInput.files[0]; // Get the selected file

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation
    const contactPattern = /^\d{10,15}$/; // Ensures the contact number is between 10-15 digits

    // Check if required fields are filled
    if (!lastName || !firstName || !email || !contactNo || !emergencyContactNo) {
        alert("Please fill all required fields.");
        return false;
    }

    // Check if an image is selected
    if (!imageFile) {
        alert("Please select an image.");
        return false;
    }

    // Check email format
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email format.");
        return false;
    }

    // Check contact number format
    if (!contactPattern.test(contactNo)) {
        alert("Please enter a valid contact number (10-15 digits).");
        return false;
    }

    // Check emergency contact number format
    if (!contactPattern.test(emergencyContactNo)) {
        alert("Please enter a valid emergency contact number (10-15 digits).");
        return false;
    }

    return true;
}
