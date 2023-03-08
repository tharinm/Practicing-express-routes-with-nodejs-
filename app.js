const express = require('express');

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views')

app.get('/', (req, res, next) => {
    res.render('users', { docTitle: 'View Users',users:users });
})

app.get('/add', (req, res, next) => {
    res.render('add-user', { docTitle: 'Add User' });
})

app.post('/add-user', (req, res, next) => {
    users.push({name:req.body.username})
    res.redirect('/')
})


app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: '404' });
})


app.listen(3001)