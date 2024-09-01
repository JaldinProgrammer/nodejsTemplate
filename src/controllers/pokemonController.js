const axios = require('axios');
const yup = require('yup');
const apiClient = require('../utils/apiClient');

const pokemonSchema = yup.object().shape({
    name: yup.string().required(),
});

const getPokemon = async (req, res) => {
    try {
        // Validate request parameters
        await pokemonSchema.validate(req.params);

        const { name } = req.params;
        const response = await apiClient.get(`pokemon/${name}`);

        res.status(200).json(response.data);
    } catch (error) {
        if (error.name === 'ValidationError') {
            res.status(400).json({ error: error.errors });
        } else {
            res.status(500).json({ error: 'Something went wrong' });
        }
    }
};

module.exports = { getPokemon };
