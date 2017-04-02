const Details = {};

const cities = {

  tokyo: {
    country: "Japan",
    region: "Asia"
  },

  new_york: {
    country: "USA",
    region: "North America"
  },

  kyoto: {
    country: "Japan",
    region: "Asia"
  },

  paris: {
    country: "France",
    region: "Europe"
  },

  prague: {
    country: "Czech Republic",
    region: "Europe"
  },

  vienna: {
    country: "Austria",
    region: "Europe"
  },

  kingston: {
    country: "Jamaica",
    region: "Caribbean"
  },

  istanbul: {
    country: "Turkey",
    region: "Europe"
  },

  barcelona: {
    country: "Spain",
    region: "Europe"
  },

  copenhagen: {
    country: "Denmark",
    region: "Europe"
  },

  miami: {
    country: "USA",
    region: "North America"
  },

  dublin: {
    country: "Ireland",
    region: "Europe"
  },

  san_francisco: {
    country: "USA",
    region: "North America"
  },

  quebec: {
    country: "Canada",
    region: "North America"
  },

  havana: {
    country: "Cuba",
    region: "Latin America"
  },

  petra: {
    country: "Jordan",
    region: "Middle East"
  },

  munich: {
    country: "Germany",
    region: "Europe"
  },

  madrid: {
    country: "Spain",
    region: "Europe"
  },

  denver: {
    country: "USA",
    region: "North America"
  },

  johannesburg: {
    country: "South Africa",
    region: "Africa"
  },

  sydney: {
    country: "Australia",
    region: "Oceania"
  },

  hong_kong: {
    country: "China",
    region: "Asia"
  },

  melbourne: {
    country: "Australia",
    region: "Oceania"
  },

  phoenix: {
    country: "USA",
    region: "North America"
  },

  rome: {
    country: "Italy",
    region: "Europe"
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
        region: cities[city.city_name.toLowerCase()].region,
        city_id: city.id,
        population: cities[city.city_name.toLowerCase()].population,
        language: cities[city.city_name.toLowerCase().language]
      };

      citiesDetails.push(place);

    } else {
      // console.log('not found');
      let place = {
        city_name: city.city_name,
        country: 'not available',
        region: 'not available'
      }
      citiesDetails.push(place)
    } //closes else
  }) //closes forEach
  console.log('citiesDetails: ', citiesDetails)
  return citiesDetails
};



module.exports = Details;
