const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Home Page', message: 'Welcome to EJS with Node.js!' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About Page', message: 'This is the About Page.' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
