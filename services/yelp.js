const fetch = require('node-fetch');

const yelp = {};
const YelpToken = process.env.Yelp_Token;

yelp.search = (city) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term="attractions"&location=${city}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${YelpToken}`
    }
  })
};

module.exports = yelp;
