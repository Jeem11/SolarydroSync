document.getElementById('generateBtn').addEventListener('click', function() {
    const qrText = document.getElementById('qrText').value;
    
    if (qrText) {
        const qrCodeDiv = document.getElementById('qrCode');
        qrCodeDiv.innerHTML = ""; // Clear previous QR code
        
        const qrCode = new QRCode(qrCodeDiv, {
            text: qrText,
            width: 200,
            height: 200
        });

        // Show the download button
        document.getElementById('downloadBtn').style.display = 'block';
        
        // Create a download link when QR code is generated
        document.getElementById('downloadBtn').addEventListener('click', function() {
            let qrCanvas = qrCodeDiv.querySelector('canvas');
            let qrImage = qrCanvas.toDataURL("image/png");

            // Create a link element and trigger the download
            let downloadLink = document.createElement('a');
            downloadLink.href = qrImage;
            downloadLink.download = 'qr_code.png';
            downloadLink.click();
        });
    } else {
        alert("Please enter text to generate QR code.");
    }
});
