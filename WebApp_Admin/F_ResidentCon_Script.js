function updateLabel() {
    const toggle = document.getElementById('resToggle');
    const label = document.querySelector('.rToggleLbl');

    if (toggle.checked) {
        label.textContent = 'Former'; // Update to Former Residents
    } else {
        label.textContent = 'Current'; // Update to Current Residents
    }
}
