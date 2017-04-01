const Details = {};

const cities = {

  tokyo: {
    country: "Japan",
    continent: "Asia"
  },

  new_york: {
    country: "USA",
    continent: "North America"
  },

  kyoto: {
    country: "Japan",
    continent: "Asia"
  },

  paris: {
    country: "France",
    continent: "Europe"
  }


} //closes cities



Details.findDetails = (arrCities) => {
  console.log('im in details.findDetails')

   let citiesDetails = [];

  arrCities.forEach((city) => {
    if (cities[city.city_name.toLowerCase()]) {
      let place = {
        city_name: city.city_name,
        country: cities[city.city_name.toLowerCase()].country,
        continent: cities[city.city_name.toLowerCase()].continent
      };

      citiesDetails.push(place);

    } else {
      // console.log('not found');
      let place = {
        city_name: city.city_name,
        country: 'not available',
        continent: 'not available'
      }
      citiesDetails.push(place)
    } //closes else
  }) //closes forEach
  console.log('citiesDetails: ', citiesDetails)
  return citiesDetails
};



module.exports = Details;
