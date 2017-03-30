const fetch = require('node-fetch');
const gettyImages = {};

const gettyImagesKey = process.env.Getty_Key;


gettyImages.search = (city) => {
  return fetch(`https://api.gettyimages.com/v3/search/images/creative?phrase=${city}&page=1&page_size=30&orientations=Horizontal`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Api-Key': gettyImagesKey
    }
  })
}


module.exports = gettyImages;
