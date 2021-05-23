// body parser작성한 코드

const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require('body-parser');                                                                     

//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

//CORS
app.use(cors());

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
});

////
// const passport = require('./lib/passport');
const placeRouter = require("./routers/nearPlace");
const specialWayRouter = require("./routers/specialWay");
const whereverPlacesRouter = require("./routers/whereverPlaces");
const bottomMenuRouter = require("./routers/bottomMenu");
const locationRouter = require("./routers/location");

// app.use('/auth/google',passport);
app.use('/place', placeRouter);
app.use('/special_way',specialWayRouter);
app.use('/whereverPlaces',whereverPlacesRouter);
app.use('/bottomMenus', bottomMenuRouter);
app.use('/location', locationRouter);


// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.post('/', (req, res) => {
  res.send(req.body);

})

