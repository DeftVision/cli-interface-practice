const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from backend!' });
});

const { exec } = require('child_process');

app.get('/api/date', (req, res) => {
    exec('date /T && time /T', (error, stdout, stderr) => {
        if (error) {
            console.error('Error executing date:', error.message);
            return res.status(500).json({ error: 'Failed to run date command' });
        }

        if (stderr) {
            console.error('Stderr output from date:', stderr);
            return res.status(500).json({ error: 'Problem running date command' });
        }

        console.log('Date command output:', stdout.trim());
        res.json({ time: stdout.trim() });
    });
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
