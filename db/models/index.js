const dbConfig = require("../../config/db.config");
const Sequelize = require("sequelize"); //Sequelize is the framework/module. It is an ORM(Object-Relational-Mapping)

const sequelize = new Sequelize(
  process.env.DB_DBNAME_TEST,
  process.env.DB_USERNAME_TEST,
  process.env.DB_PASSWORD_TEST,
  {
    host: process.env.DB_HOST_TEST,
    dialect: dbConfig.dialect,
    // logging: false  //To log all the running queries
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Users = require("../models/Users.model")(sequelize, Sequelize);
db.Applicants = require("../models/Applicants.model")(sequelize, Sequelize);
db.Timeline = require("../models/Timeline.model")(sequelize, Sequelize);
db.Openings = require("../models/Openings.model")(sequelize, Sequelize);
//db.OpeningsTimelines = require('./OpeningsTimelines.model')(sequelize, Sequelize);

module.exports = db;
