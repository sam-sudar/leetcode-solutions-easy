// import { getCountries, getStatesOfCountry, getCitiesOfState } from '@countrystatecity/countries';

// // Get all countries (lightweight - ~5KB)
// const countries = await getCountries();
// // console.log(countries[0]);
// // { id: 1, name: "United States", iso2: "US", emoji: "🇺🇸", ... }

// // Get all states in a country (~10-100KB depending on country)
// const states = await getStatesOfCountry('IN');
// // console.log(states);
// // { id: 1, name: "California", iso2: "CA", ... }

// // Get all cities in a state (~5-200KB depending on state)
// const cities = await getCitiesOfState('IN', 'MH');
// console.log(cities);
// // { id: 1, name: "Los Angeles", latitude: "34.05", ... }

fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));