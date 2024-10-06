function updateLabel() {
    const toggle = document.getElementById('resToggle');
    const label = document.querybldgselector('.rToggleLbl');

    if (toggle.checked) {
        label.textContent = 'Former'; 
    } else {
        label.textContent = 'Current'; 
    }
}

const bldgselect = document.getElementById("bldgSelect");

const bldgallOption = document.createElement("option");
bldgallOption.value = "all";
bldgallOption.textContent = "All";
bldgselect.appendChild(bldgallOption); 

for (let i = 1; i <= 30; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Bldg ${i}`; 
    bldgselect.appendChild(option);
}

const floorselect = document.getElementById("floorSelect");

const flrallOption = document.createElement("option");
flrallOption.value = "all";
flrallOption.textContent = "All";
floorselect.appendChild(flrallOption); 

// Create and append floor numbers as "Floor 1-5"
for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = `Floor ${i}`;  
    floorselect.appendChild(option);
}


