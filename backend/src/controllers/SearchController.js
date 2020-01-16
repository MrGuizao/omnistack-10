const Dev = require("../models/Dev");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
     async index(req, res) {
          const { latitude, longitude, techs } = req.query;

          const techsArray = parseStringAsArray(techs);

          return res.json({ devs: [] });
     },
     async store(req, res) {}
};
