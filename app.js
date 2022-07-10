const express = require('express')
const app = express()
const path = require('path');
const port = 3000

app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/docs', (req, res) => {
    res.render('pages/docs')
})

app.get('/about', (req, res) => {
    res.render('pages/about')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})