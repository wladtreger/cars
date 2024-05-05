const axios = require('axios');

class GeolocationToolkit {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error('API key is required for GeolocationToolkit');
    }
    this.apiKey = apiKey;
    this.baseUrl = 'https://maps.googleapis.com/maps/api';
  }

  async geocode(address) {
    try {
      const response = await axios.get(`${this.baseUrl}/geocode/json`, {
        params: {
          address: address,
          key: this.apiKey,
        },
      });
      return response.data.results;
    } catch (error) {
      throw new Error(`Geocoding failed: ${error.message}`);
    }
  }

  async reverseGeocode(lat, lng) {
    try {
      const response = await axios.get(`${this.baseUrl}/geocode/json`, {
        params: {
          latlng: `${lat},${lng}`,
          key: this.apiKey,
        },
      });
      return response.data.results;
    } catch (error) {
      throw new Error(`Reverse geocoding failed: ${error.message}`);
    }
  }
}

module.exports = GeolocationToolkit;
