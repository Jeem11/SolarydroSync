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
    
    setInterval(changeBackground, 4000);
    
    document.querySelector('.background-container').style.backgroundImage = images[0];
    
    //******************************************************************************************************* 


    
});