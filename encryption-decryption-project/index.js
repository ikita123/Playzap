const crypto = require('crypto');
require('dotenv').config();
const readline = require('readline');

const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const encrypt = (plaintext) => {

        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, iv);
        let encrypted = cipher.update(plaintext, 'utf8', 'base64');
        encrypted += cipher.final('base64');
        return {
                iv: iv.toString('base64'),
                encryptedData: encrypted
        };
};

const decrypt = (encryptedData, iv) => {

        const ivBuffer = Buffer.from(iv, 'base64');
        const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, ivBuffer);
        let decrypted = decipher.update(encryptedData, 'base64', 'utf8');
        decrypted += decipher.final('utf8');
        return decrypted;
};

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});

const handleInput = () => {
        rl.question('Enter the text to encrypt: ', (inputText) => {
                const encrypted = encrypt(inputText);
                console.log('Encrypted Data:', encrypted);

                const decrypted = decrypt(encrypted.encryptedData, encrypted.iv);
                console.log('Decrypted Text:', decrypted);

                rl.close();
        });
};

handleInput();
