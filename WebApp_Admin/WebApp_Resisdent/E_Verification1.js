// Mock data for family members
const familyMembers = [
    {
        id: 1,
        name: "John Doe",
        residentId: "123456",
        status: "Authenticated",
        photo: "https://via.placeholder.com/100"
    },
    {
        id: 2,
        name: "Jane Doe",
        residentId: "123457",
        status: "Rejected",
        photo: "https://via.placeholder.com/100"
    },
    {
        id: 3,
        name: "Sam Doe",
        residentId: "123458",
        status: "Authenticated",
        photo: "https://via.placeholder.com/100"
    },
    {
        id: 4,
        name: "Sarah Doe",
        residentId: "123459",
        status: "Authenticated",
        photo: "https://via.placeholder.com/100"
    }
];

// Load family member data into the HTML
window.onload = function() {
    const familyList = document.getElementById("familyList");
    familyMembers.forEach(member => {
        const card = document.createElement("div");
        card.className = "family-card";
        card.innerHTML = `
            <img src="${member.photo}" alt="Profile photo of ${member.name}">
            <div class="name">${member.name}</div>
            <div class="resident-id">Resident ID: ${member.residentId}</div>
            <div class="status">Status: ${member.status}</div>
            <button class="edit-btn" onclick="openEditModal(${member.id})">Edit</button>
        `;
        familyList.appendChild(card);
    });
};

// Modal handling
const modal = document.getElementById("editModal");
const closeModal = document.getElementsByClassName("close")[0];

function openEditModal(id) {
    const member = familyMembers.find(f => f.id === id);
    document.getElementById("editName").value = member.name;
    document.getElementById("editResidentId").value = member.residentId;
    document.getElementById("editStatus").value = member.status;
    modal.style.display = "block";

    // When the form is submitted, save changes
    document.getElementById("editForm").onsubmit = function(event) {
        event.preventDefault();
        member.name = document.getElementById("editName").value;
        member.residentId = document.getElementById("editResidentId").value;
        member.status = document.getElementById("editStatus").value;
        modal.style.display = "none";
        location.reload(); // Reload the page to reflect changes
    };
}

closeModal.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
