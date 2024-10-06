function updateLabel() {
    const toggle = document.getElementById('resToggle');
    const label = document.querySelector('.rToggleLbl');

    if (toggle.checked) {
        label.textContent = 'Former'; 
    } else {
        label.textContent = 'Current'; 
    }
}



document.addEventListener('DOMContentLoaded', function () {
    //nav location pages:
    var S_bldg = document.getElementById('bldgSelect');
    var S_flr = document.getElementById('floorSelect');
    var S_Clst = document.getElementById('clusterSelect');
    var S_brg = document.getElementById('bridgeSelect');

    const locSelect = document.getElementById("locationSelect");

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

    for (let i = 1; i <= 5; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Floor ${i}`;  
        floorselect.appendChild(option);
    }

    const clusterSelect = document.getElementById("clusterSelect");

    const clrallOption = document.createElement("option");
    clrallOption.value = "all";
    clrallOption.textContent = "All";
    clusterSelect.appendChild(clrallOption);

    for (let i = 1; i <= 7; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Cluster ${i}`;
        clusterSelect.appendChild(option);
    }

    const bridgeSelect = document.getElementById("bridgeSelect");

    const brgallOption = document.createElement("option");
    brgallOption.value = "all";
    brgallOption.textContent = "All";
    bridgeSelect.appendChild(brgallOption);

    for (let i = 1; i <= 2; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = `Bridge ${i}`;
        bridgeSelect.appendChild(option);
    }

    let selectedValue;
    let selectedBlg;
    let selectedFloor;
    let selectedCluster;
    let selectedBridge;

    locSelect.addEventListener('change', function() {
        selectedValue = locSelect.value;
    
        S_bldg.classList.remove('active');
        S_flr.classList.remove('active');
        S_Clst.classList.remove('active');
        S_brg.classList.remove('active');

        bldgselect.selectedIndex = 0; 
        floorselect.selectedIndex = 0; 
        clusterSelect.selectedIndex = 0; 
        bridgeSelect.selectedIndex = 0; 
    
        switch (selectedValue) {
            case "all":
                break;
            case "bldg":
                S_bldg.classList.add('active'); 
                S_flr.classList.add('active');  
                break;
            case "bldg_ext":
                S_bldg.classList.add('active');
                break;
            case "mlla":
                S_Clst.classList.add('active');
                break;
            case "mllabrg":
                S_brg.classList.add('active'); 
                break;
            case "up_mt":
                S_Clst.classList.add('active');
                break;
            default:
                break;
        }
    });
    

    bldgselect.addEventListener('change', function() {
        selectedBlg = bldgselect.value;
    });

    floorselect.addEventListener('change', function(){
        selectedFloor = floorselect.value;
    });

    clusterSelect.addEventListener('change', function(){
        selectedCluster = clusterSelect.value;
    });

    bridgeSelect.addEventListener('change', function(){
        selectedBridge = bridgeSelect.value;
    });

    const addSetContainer = document.getElementById('addSetContainer');
    const additionalButtons = document.querySelector('.additional-buttons');
    let isRolled = false;

    // Add a click event listener to addSetContainer
    addSetContainer.addEventListener('click', () => {
        if (isRolled) {
            // Remove the 'roll' and 'show' classes, and add the 'hide' class
            addSetContainer.classList.remove('roll', 'active-state');
            additionalButtons.classList.remove('show');
            additionalButtons.classList.add('hide');
        } else {
            // Add the 'roll' and 'show' classes, and the 'active-state' class to keep the color
            addSetContainer.classList.add('roll', 'active-state');
            additionalButtons.classList.remove('hide');
            additionalButtons.classList.add('show');
        }
        isRolled = !isRolled; // Toggle the state
    });



    

    
    
    

});