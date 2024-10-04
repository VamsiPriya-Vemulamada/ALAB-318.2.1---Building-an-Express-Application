import express from "express";
import morgan from 'morgan';

const app = express();
const PORT = 5000;
// setup
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger


// routes
app.get('/', (req, res) => {
    // res.send('Hello')

    // fetching blog post...

    res.render('heriones', {username: 'priya', title: 'Drama Inc'});
});

app.get('/heroines', (req, res) => {
    // res.redirect('/pricing')
    res.render('heriones')
});

app.get('/heros', (req, res) => {
    res.render('heros')
});
// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger
app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));