const db = require('../config/database.js');

const ExploreList = {};

ExploreList.create = (city, user_id) => {
  console.log('exploreList.create, cityname and user: ', city.name, user_id)

  return db.none(`INSERT INTO explore_lists
    (user_id, city_name, priority) VALUES ($1, $2, $3)`,
    [user_id, city.name, city.priority])
};

ExploreList.findAllByUserId = (user_id) => {
  return db.manyOrNone(`SELECT * FROM explore_lists WHERE user_id = $1`,
   [user_id])
};

ExploreList.update = (priority, explore_id) => {
  return db.none(`UPDATE explore_lists SET priority = $1 WHERE id = $2`,
   [priority, explore_id])
};

ExploreList.destroy = (explore_id) => {
  return db.none(`DELETE FROM explore_lists WHERE id = $1`,
   [explore_id])
};


module.exports = ExploreList;
