const axios = require('axios');

const apiClient = axios.create({
    baseURL: process.env.POKEAPI_BASE_URL,
    timeout: 5000,
});

module.exports = apiClient;
