const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path');
const { response } = require('express');
const port = 3000


async function getUser() {
  let one = 'https://api.github.com/users/codad5'
  let two = 'https://api.github.com/users/PTBYSR'
  let three = 'https://api.github.com/users/jerrygeorge360'

  const requestOne = axios.get(one);
  const requestTwo = axios.get(two);
  const requestThree = axios.get(three);

  axios.all([requestOne, requestTwo, requestThree])
    .then(axios.spread((...responses) => {
    const responseOne = responses[0]
    const responseTwo = responses[1]
    const responesThree = responses[2]
    })).catch(errors => {
    console.log(errors)
    })
}


app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views'))
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('pages/index')
})

app.get('/docs', (req, res) => {
    res.render('pages/docs')
})

app.get('/about', (req, res) => {
    res.render('pages/about', { data: data })
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})