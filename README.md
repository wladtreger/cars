# Geolocation and Mapping Toolkit

This is a JavaScript package that provides basic geolocation and mapping functionalities using the Google Maps Geocoding API.

## Installation

You can install this package via npm:

```bash
npm install geolocation-mapping-toolkit
```

## Usage

First, instantiate an instance of the `GeolocationToolkit` class with your Google Maps API key:

```javascript
const GeolocationToolkit = require('geolocation-mapping-toolkit');

const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
const geolocationToolkit = new GeolocationToolkit(apiKey);
```

### Geocoding

Use the `geocode` method to convert an address to geographic coordinates (latitude and longitude):

```javascript
const address = '1600 Amphitheatre Parkway, Mountain View, CA';
geolocationToolkit.geocode(address)
  .then(results => {
    console.log('Geocoding results:', results);
  })
  .catch(error => {
    console.error('Geocoding failed:', error.message);
  });
```

### Reverse Geocoding

Use the `reverseGeocode` method to convert coordinates to a human-readable address:

```javascript
const lat = 37.4224082;
const lng = -122.0856086;
geolocationToolkit.reverseGeocode(lat, lng)
  .then(results => {
    console.log('Reverse geocoding results:', results);
  })
  .catch(error => {
    console.error('Reverse geocoding failed:', error.message);
  });
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
