const ExploreList = require('../../models/explore_list.js');
const GettyImages = require('../../services/getty_images.js');
const Yelp = require('../../services/yelp.js');
const Details = require('../../models/details.js');

const controller = {};

//send request to GettyImages API
controller.indexGetty = (req, res) => {
  console.log('made it inside Getty');
  GettyImages.search(req.params.city)
  // translate response into json
  .then(response => response.json()
    .then((data) => {
      console.log('indexGetty data is returned');
      // API response object has result_count and images keys
      res.send(data.images)
    })
    )
  .catch(err => console.log(err));
};

//send request to Yelp API
controller.indexYelp = (req, res) => {
  Yelp.search(req.params.city)
  .then(response => response.json()
    .then((data) => {
      // console.log('yelp data: ', data);
      res.send(data.businesses)
    }))
  .catch(err => console.log(err));
};



//add a city to a user's explore_list
controller.create = (req, res) => {
  console.log('req.body: ', req.body)
  ExploreList.create(req.body.city, req.params.user_id)
  .then(() => {
    console.log('create explore list item is working');
    res.sendStatus(201)
  })
  .catch(err => console.log('create error: ', err))
};

//send request to get explore_list for a user
controller.show = (req, res) => {
  ExploreList.findAllByUserId(req.params.user_id)
  .then((data) => {
    //*********then send data in request to Details.findDetails***********
    // console.log('show data: ', data)
    const finalData = Details.findDetails(data);
    res.send(finalData);

  })
  .catch((err) => console.log('show err: ', err))
};

//update an explore_list item (priority?)
controller.update = (req, res) => {
  ExploreList.update(req.body.explore_list.priority, req.params.explore_id)
  .then(() => {
    console.log('explorelist controller update is working');
    res.sendStatus(200);
  })
  .catch()
};

//delete an explore_list item
controller.destroy = (req, res) => {
  ExploreList.destroy(req.params.explore_id)
  .then(() => {
    res.sendStatus(200)
  })
  .catch(err => console.log('destroy err: ', err))
};


module.exports = controller;



