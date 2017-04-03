const Details = {};

const cities = {

  tokyo: {
    country: "Japan",
    region: "Asia",
    language: "Japanese",
    population: "13.6 million"
  },

  new_york: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "8.4 million"
  },

  kyoto: {
    country: "Japan",
    region: "Asia",
    language: "Japanese",
    population: "1.5 million"
  },

  paris: {
    country: "France",
    region: "Europe",
    language: "French",
    population: "2.2 million"
  },

  prague: {
    country: "Czech Republic",
    region: "Europe",
    language: "Czech",
    population: "1.2 million"
  },

  vienna: {
    country: "Austria",
    region: "Europe",
    language: "German (Austro-Bavarian dialects)",
    population: "1.7 million"
  },

  kingston: {
    country: "Jamaica",
    region: "Caribbean",
    language: "English (Jamaican Standard)",
    population: "666 thousand"
  },

  istanbul: {
    country: "Turkey",
    region: "Europe",
    language: "Turkish",
    population: "14.8 million"
  },

  barcelona: {
    country: "Spain",
    region: "Europe",
    language: "Spanish/Catalan",
    population: "1.6 million"
  },

  copenhagen: {
    country: "Denmark",
    region: "Europe",
    language: "Danish",
    population: "562 thousand"
  },

  miami: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "418 thousand"
  },

  dublin: {
    country: "Ireland",
    region: "Europe",
    language: "English",
    population: "528 thousand"
  },

  san_francisco: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "837 thousand"
  },

  quebec: {
    country: "Canada",
    region: "North America",
    language: "French",
    population: "8.2 million"
  },

  havana: {
    country: "Cuba",
    region: "Latin America",
    language: "Spanish",
    population: "2.1 million"
  },

  petra: {
    country: "Jordan",
    region: "Middle East",
    language: "Arabic",
    population: "unknown"
  },

  munich: {
    country: "Germany",
    region: "Europe",
    language: "German",
    population: "1.4 million"
  },

  madrid: {
    country: "Spain",
    region: "Europe",
    language: "Spanish",
    population: "3.2 million"
  },

  denver: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "650 thousand"
  },

  johannesburg: {
    country: "South Africa",
    region: "Africa",
    language: "English/Afrikaans",
    population: "4.4 million"
  },

  sydney: {
    country: "Australia",
    region: "Oceania",
    language: "English",
    population: "4.3 million"
  },

  hong_kong: {
    country: "China",
    region: "Asia",
    language: "Chinese/English",
    population: "7.2 million"
  },

  melbourne: {
    country: "Australia",
    region: "Oceania",
    language: "English",
    population: "4.1 million"
  },

  phoenix: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "1.5 million"
  },

  rome: {
    country: "Italy",
    region: "Europe",
    language: "Italian",
    population: "2.6 million"
  },

  athens: {
    country: "Greece",
    region: "Europe",
    language: "Greek",
    population: "664 thousand"
  },

  london: {
    country: "UK",
    region: "Europe",
    language: "English",
    population: "8.7 million"
  },

  vancouver: {
    country: "Canada",
    region: "North America",
    language: "English",
    population: "604 thousand"
  },

  berlin: {
    country: "Germany",
    region: "Europe",
    language: "German",
    population: "3.5 million"
  },

  warsaw: {
    country: "Poland",
    region: "Europe",
    language: "Polish",
    population: "1.7 million"
  },

  florence: {
    country: "Italy",
    region: "Europe",
    language: "Italian",
    population: "362 thousand"
  },

  venice: {
    country: "Italy",
    region: "Europe",
    language: "Italian",
    population: "260 thousand"
  },

  chamonix: {
    country: "France",
    region: "Europe",
    language: "French",
    population: "10 thousand"
  },

  nashville: {
    country: "USA",
    region: "North America",
    language: "English",
    population: "679 thousand"
  },

  manila: {
    country: "the Philippines",
    region: "Asia",
    language: "Filipino/English",
    population: "1.7 million"
  },

  taipei: {
    country: "Taiwan",
    region: "Asia",
    language: "Mandarin",
    population: "2.7 million"
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
        language: cities[city.city_name.toLowerCase()].language
      };

      citiesDetails.push(place);

    } else {
      // console.log('not found');
      let place = {
        city_name: city.city_name,
        country: 'unavailable',
        region: 'unavailable',
        city_id: city.id,
        population: 'unavailable',
        language: 'unavailable'
      }
      citiesDetails.push(place)
    } //closes else
  }) //closes forEach

  return citiesDetails
};



module.exports = Details;
