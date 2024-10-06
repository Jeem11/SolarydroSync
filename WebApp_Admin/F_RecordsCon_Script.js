document.addEventListener('DOMContentLoaded', function () {
    const Rbuttons = document.querySelectorAll('.R-tab-button');
    const RRcontentItems = document.querySelectorAll('.R-content-item');

    Rbuttons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all Rbuttons and reset styles
            Rbuttons.forEach(btn => {
                btn.classList.remove('active');
                btn.style.backgroundColor = '#fff'; // Original background color (white)
                btn.style.color = '#5C5A5A'; // Original text color (gray)
                btn.style.borderColor = 'transparent'; // Reset border color
            });

            // Add active class and styles to clicked button
            this.classList.add('active');
            this.style.backgroundColor = '#d4d6da'; // New background color for active
            this.style.color = '#1D839F'; // New text color for active
            this.style.borderColor = '#1D839F'; // New border color for active

            // Remove active class from all content items
            RRcontentItems.forEach(item => item.classList.remove('active'));

            // Show the target content
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

//button links
var r_residentbtn = document.getElementById('section-request');
var r_staffbtn = document.getElementById('section-staff');
var r_waterbtn = document.getElementById('section-water');
var r_schedbtn = document.getElementById('section-sched');

//Records Section:

//Residents Section
var residentDivSec = document.querySelector('.resident-container');

//Staff Section
var staffDivSec = document.querySelector('.staff-container');

//Water Distribution Record Section
var waterDivSec = document.querySelector('.water-container');

//Schedule Section
var schedDivSec = document.querySelector('.sched-container');

//************************************************************************************************ */

//Event listeners:

//Residents
r_residentbtn.addEventListener("click", function(){
    residentDivSec.style.display = 'block';

    staffDivSec.style.display = 'none';
    waterDivSec.style.display = 'none';
    schedDivSec.style.display = 'none';
})



//Staff
r_staffbtn.addEventListener("click", function(){
    staffDivSec.style.display = 'block';

    residentDivSec.style.display = 'none';
    waterDivSec.style.display = 'none';
    schedDivSec.style.display = 'none';
})



//Water Distribution Records
r_waterbtn.addEventListener("click", function(){
    waterDivSec.style.display = 'block';

    staffDivSec.style.display = 'none';
    residentDivSec.style.display = 'none';
    schedDivSec.style.display = 'none';
})



//Schedule
r_schedbtn.addEventListener("click", function(){
    schedDivSec.style.display = 'block';

    staffDivSec.style.display = 'none';
    waterDivSec.style.display = 'none';
    residentDivSec.style.display = 'none';
})























});
