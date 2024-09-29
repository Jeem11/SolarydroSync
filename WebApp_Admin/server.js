const express = require('express');
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
admin.initializeApp({
    credential: admin.credential.cert(require('./solarhydrosync-firebase-admin.json')),
    databaseURL: 'https://solarhydrosync-default-rtdb.asia-southeast1.firebasedatabase.app/' // Replace with your Firebase URL
});

const db = admin.firestore();

// POST route to handle login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        // Query Firestore for the admin document by Admin_Username
        const userRef = db.collection('Brgy_Admin').where('Admin_Username', '==', username);
        const snapshot = await userRef.get();
        
        console.log('Snapshot size:', snapshot.size); // Log the number of documents returned
        
        if (snapshot.empty) {
            return res.status(404).send('I don’t exist');
        }

        let user;
        snapshot.forEach(doc => {
            user = doc.data(); // Get user data from the first matching document
        });

        // Check if the password matches
        if (user.Admin_Password === password) {
            return res.send('I exist');
        } else {
            return res.status(401).send('Incorrect password');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        return res.status(500).send('Internal Server Error');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
