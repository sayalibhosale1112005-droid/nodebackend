
import express from 'express';

const app = express();
const port = 3000;


app.get('/getstudent', (req, res) => {
    res.json({
        id: 1,
        name: 'Sayali',
        branch: 'CSE'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
