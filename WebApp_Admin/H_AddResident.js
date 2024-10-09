document.addEventListener('DOMContentLoaded', function () {
    const locSelect = document.getElementById("A_locationSelect");
    const S_bldg = document.getElementById('A_bldgSelect');
    const S_flr = document.getElementById('A_floorSelect');
    const S_Clst = document.getElementById('A_clusterSelect');
    const S_brg = document.getElementById('A_bridgeSelect');

    // Populate Building dropdown
    const bldgselect = document.getElementById("A_bldgSelect");
    for (let i = 1; i <= 30; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Bldg ${i}`; 
        bldgselect.appendChild(option);
    }

    // Populate Floor dropdown
    const floorselect = document.getElementById("A_floorSelect");
    for (let i = 1; i <= 5; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Floor ${i}`;  
        floorselect.appendChild(option);
    }

    // Populate Cluster dropdown
    const clusterSelect = document.getElementById("A_clusterSelect");
    for (let i = 1; i <= 7; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Cluster ${i}`;
        clusterSelect.appendChild(option);
    }

    // Populate Bridge dropdown
    const bridgeSelect = document.getElementById("A_bridgeSelect");
    for (let i = 1; i <= 2; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Bridge ${i}`;
        bridgeSelect.appendChild(option);
    }

    // Event Listener for Location Selection
    locSelect.addEventListener('change', function () {
        const selectedValue = locSelect.value;

        // Reset visibility
        S_bldg.style.display = 'none';
        S_flr.style.display = 'none';
        S_Clst.style.display = 'none';
        S_brg.style.display = 'none';

        // Show relevant dropdowns based on selection
        switch (selectedValue) {
            case "bldg":
                S_bldg.style.display = 'block';
                S_flr.style.display = 'block';
                break;
            case "bldg_ext":
                S_bldg.style.display = 'block';
                break;
            case "mlla":
                S_Clst.style.display = 'block';
                break;
            case "mllabrg":
                S_brg.style.display = 'block';
                break;
            case "up_mt":
                S_Clst.style.display = 'block';
                break;
            default:
                break;
        }
    });

    // Add Resident button functionality
    const addButton = document.getElementById('addResident');
    const additionalInfoSection = document.getElementById('additional-info-section');

    addButton.addEventListener('click', function() {
        const newResident = additionalInfoSection.cloneNode(true);
        additionalInfoSection.parentNode.insertBefore(newResident, addButton.parentNode);
    });

    // Remove Resident button functionality
    const removeButton = document.getElementById('removeResident');

    removeButton.addEventListener('click', function() {
        const residents = additionalInfoSection.parentNode.querySelectorAll('.additional-info-container');
        if (residents.length > 1) {
            residents[residents.length - 1].remove(); // Remove the last resident's additional info
        }
    });

    // Modal functionality for saving records
    const submitButton = document.getElementById('submitButton');
    const modal = document.getElementById('customModal');
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');

    submitButton.addEventListener('click', function() {
        modal.style.display = 'block'; // Show the modal when the save button is clicked
    });

    btnYes.addEventListener('click', function() {
        modal.style.display = 'none'; // Close the modal
        // Add your save logic here
        alert("Resident record saved!");
    });

    btnNo.addEventListener('click', function() {
        modal.style.display = 'none'; // Close the modal
    });
});

// Handle form submission
document.getElementById('residentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Show the custom modal
    document.getElementById('customModal').style.display = 'flex'; // Use 'flex' to center the modal
});

// Handle modal "Yes" button click
document.getElementById('btnYes').addEventListener('click', function() {
    // Hide modal first
    document.getElementById('customModal').style.display = 'none'; // Hide modal
});

// Handle modal "No" button click
document.getElementById('btnNo').addEventListener('click', function() {
    document.getElementById('customModal').style.display = 'none'; // Hide modal
});
