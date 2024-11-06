// To hold the previous view of the record container
let previousView = '';

// Function to show details when a record is clicked
function showDetails(familyId, familyName, address) {
    // Get the details container
    const detailsContainer = document.getElementById('details-container');
    
    // Clear any previous content
    detailsContainer.innerHTML = '';

    // Create new container for family details
    const detailContainer = document.createElement('div');
    detailContainer.className = 'L_detail-container';

    // Create back button
    const backButton = document.createElement('div');
    backButton.className = 'L_back-button-container';
    backButton.innerHTML = '<i class="bx bx-left-arrow-alt L_back-button"></i>';
    backButton.onclick = function() {
        // When back button is clicked, reload the previous view
        detailsContainer.style.display = 'none'; // Hide the details
        document.getElementById('record-container').style.display = 'block'; // Show the record container
    };

    // Create family ID and address display
    const familyIdElement = document.createElement('p');
    familyIdElement.id = 'L_family-id';
    familyIdElement.innerHTML = `Family ID: <span id="L_family-id-value">${familyId}</span>`;

    const addressElement = document.createElement('p');
    addressElement.id = 'L_address';
    addressElement.innerHTML = `Address: <span id="L_address-value">${address}</span>`;

    // Append elements to the detailContainer
    detailContainer.appendChild(backButton);
    detailContainer.appendChild(familyIdElement);
    detailContainer.appendChild(addressElement);

    // Append additional info section (if needed)
    const additionalInfoSection = document.createElement('div');
    additionalInfoSection.className = 'L_additional-info-section';

    // Here you can include the detailed information input fields or any other info
    const additionalInfoText = document.createElement('p');
    additionalInfoText.innerText = "Detailed information will go here...";

    additionalInfoSection.appendChild(additionalInfoText);
    detailContainer.appendChild(additionalInfoSection);

    // Replace the current content in the detailsContainer
    detailsContainer.appendChild(detailContainer);

    // Show the details container and hide the record container
    detailsContainer.style.display = 'block';
    document.getElementById('record-container').style.display = 'none';
}
