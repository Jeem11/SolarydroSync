document.addEventListener("DOMContentLoaded", function(){
    //Img background transition:

    //Images (to be edited w/ pictures from tondo (currently using dummy pics from google))
    const images = [
        'url("DummyPic1.jpeg")',
        'url("DummyPic2.jpeg")'
    ];
    
    let currentIndex = 0;
    
    function changeBackground() {
        const backgroundContainer = document.querySelector('.background-container');
        
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(() => {
            backgroundContainer.style.backgroundImage = images[currentIndex];
        }, 2000);
    }
    
    setInterval(changeBackground, 2000);
    
    document.querySelector('.background-container').style.backgroundImage = images[0];
    
    //******************************************************************************************************* 



});

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the username and password from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send a POST request to your Node.js server
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login (e.g., redirect to another page)
            alert('Login successful');
            // Redirect or navigate to the dashboard, for example:
            // window.location.href = '/dashboard';
        } else {
            // Handle error (e.g., invalid credentials)
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while logging in.');
    }
});
