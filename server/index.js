require('newrelic');
const express = require('express');

const app = express();
const port = 8080;

const { getAllInfo } = require('./database/index.js');

app.get(`/${process.env.VAR4}`, (req, res) => {
  res.send(`${process.env.VAR4}`);
});

app.use('/:id', express.static('public'));

app.get('/api/homes/:id/reviews', (req, res) => {
  getAllInfo(req.params.id, (err, data) => {
    if (err) {
      res.end(err);
    }
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// Below is Sequelize version
// const parser = require('body-parser');
// const {Review, Customer} = require('./database/index.js');
// const bodyparser = parser.json();
// app.get('/api/homes/:id/reviews', (req, res) => {
/// ///below is sequilizedxs
// const { id } = req.params;
// Review.findAll({
// attributes: ['id', 'listing_id', 'customer_id', 'review', 'review_date', 'cleanliness', \
// 'communication', 'check_in', 'accuracy', 'location_review', 'value_review'],
//   where: { listing_id : id },
//   include: [{model: Customer}],
// })
//   .then((data) => {
//     res.send(data);
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// });

// app.post('/api/homes/:id/reviews', bodyparser, (req, res) => {
//   const body = req.body
//   console.log('req', req);
//   Review.create(body)
//   .then(() => {
//     res.status(201).send('created');
//   })
//   .catch((err) => {
//     res.send(err);
//   })
// })
