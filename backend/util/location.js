const axios = require('axios');

const HttpError = require('../models/http-error');

async function getCoordsForAddress(address) {
  return {
    lat: 27.9191169,
    lng: 76.459994
  };
  
}

module.exports = getCoordsForAddress;
