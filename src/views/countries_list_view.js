const PubSub = require('../helpers/pub_sub.js');
const CountryView = require('./country_view.js');

const CountriesListView = function(container) {
  this.container = container;
}

CountriesListView.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:countries-data-ready', (event) =>{
    this.countries = event.detail;
    this.render();
  });
}


CountriesListView.prototype.render = function() {
  this.countries.forEach((country) =>{
    const countryView = new CountryView(this.container);
    countryView.render(country);
  })
}




module.exports = CountriesListView;
