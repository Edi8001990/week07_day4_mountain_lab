const Countries = require('./models/countries.js');
const CountriesListView = require('./views/countries_list_view.js');
const CountryView = require('./views/country_view.js');

document.addEventListener('DOMContentLoaded', () =>{

const countriesListContainer = document.querySelector('div.countries');
const countriesListView = new CountriesListView(countriesListContainer);
countriesListView.bindEvents();

const countries = new Countries('https://restcountries.eu/rest/v2/all');
countries.getData();

});
