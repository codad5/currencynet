const express = require('express')
const axios = require('axios')
const app = express()
const path = require('path');
const { response } = require('express');
const port = 3000

// async function getPaul() {
//     try {
//       const response = await axios.get('https://api.github.com/users/PTBYSR');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
// async function getJerry() {
//     try {
//       const response = await axios.get('https://api.github.com/users/jerrygeorge360');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }
async function getChibueze() {
    try {
      const response = await axios.get('https://api.github.com/users/codad5');
      console.log('github fetched');
    } catch (error) {
      console.error('github no fetch');
    }

    return response
  }

const data = getChibueze()
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
    res.render('pages/about')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})