var express = require('express')
var multer  = require('multer')
var Tesseract = require('tesseract.js')
const { createApolloFetch } = require('apollo-fetch');

const fetch = createApolloFetch({
  uri: 'http://10.14.10.94:4466',
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    Tesseract.recognize(file)
    .progress(function  (p) { console.log('progress', p)    })
    .then(function (result) { console.log('result', result) })

    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Hello BlueCoding!')
})

app.listen(8080, function () {
  console.log('app listening on port 8080!')
})

app.post('/imgSimulate', function (req, res) {
  fetch({
    query: `
    mutation createWine(
      $name: String!
      $grapes: [WineGrapes!]
      $winery: String
      $year: Int
      $alcohol: Float
      $price: Float
    ) {
      createWine(
        data: {
          name: $name
          grapes: { set: $grapes }
          winery: $winery
          year: $year
          alcohol: $alcohol
          price: $price
        }
      ) {
        id
        name
        grapes
        winery
        year
        alcohol
        price
      }
    }
  `,
    variables: {
      name: req.body.name,
      grapes: req.body.grapes,
      winery: req.body.winery, 
      year: req.body.year, 
      alcohol: req.body.alcohol,
      price: req.body.price
    },
  }).then();
    res.send("DONE");
  })


  app.post('/newimg', upload.single('file-to-upload'), (req, res) => {    
    res.send(req.bodyParser.name);
  });


  