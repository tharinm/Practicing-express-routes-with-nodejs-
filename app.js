const express = require('express');
const viewuserRoutes = require('./routes/viewusers')
const adduserRoutes=require('./routes/add-user')

const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));



app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(viewuserRoutes);
app.use('/add-user',adduserRoutes.routes)



app.use((req, res, next) => {
    res.status(404).render('404', { docTitle: '404' });
})


app.listen(3001)