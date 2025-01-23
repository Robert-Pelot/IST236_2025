import { createServer } from 'node:https';
import { readFileSync, existsSync } from 'fs';
import express from 'express';

const app = express();

// Verify if SSL certificate files exist
if (!existsSync('./ssl/key.pem')) {
    console.error('Private key file not found!');
    process.exit(1);
}

if (!existsSync('./ssl/cert.pem')) {
    console.error('Certificate file not found!');
    process.exit(1);
}

app.get('/', (req, res) => {
    res.send('Hello, secure world!');
});

// Function to safely read and log certificate/key contents
function readCertificate(path) {
    try {
        const content = readFileSync(path, 'utf8');
        console.log(`Successfully read file: ${path}`);
        console.log(`File size: ${content.length} characters`); // Log file size for verification
        return content;
    } catch (error) {
        console.error(`Error reading file: ${path}`);
        console.error(error);
        process.exit(1); // Exit if reading the file fails
    }
}

// SSL certificate options
const options = {
    key: readCertificate('./ssl/key.pem'),
    cert: readCertificate('./ssl/cert.pem')
};

// Create the server and listen on port 3000
try {
    const server = createServer(options, app).listen(3000, () => {
        console.log('Secure server running on https://localhost:3000');
    });
} catch (error) {
    console.error('Error creating HTTPS server:', error);
    console.error(error.stack);
    // Optionally, log the error specifics
    if (error.message.includes('wrong tag')) {
        console.error('This seems to be an ASN.1 encoding error. Check certificate format.');
    }
    process.exit(1); // Exit if server creation fails
}