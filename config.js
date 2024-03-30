import NodeGeocoder from 'node-geocoder';

export const DATABASE =
  'mongodb+srv://final-work:YkNj5sbe5KaUQgSn@final-work.dddipkc.mongodb.net/?retryWrites=true&w=majority';


const options = {
  provider: 'google',
  apiKey: 'AIzaSyAMMtG0ZrnsjjzoLjR8pH9axPj77bvw_HU',
  formatter: null, // 'gpx', 'string', ...
};
export const GOOGLE_GEOCODER = NodeGeocoder(options);

export const CLIENT_URL = 'http://localhost:3000';
