const PubSub = require('../helpers/pub_sub.js');

const CountryView = function(container) {
  this.container = container;

}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Countries:countries-data-ready' , (event) =>{

    this.render(event.detail)

  })
}

CountryView.prototype.render = function(country){

  const countryName = this.createElement('h2', country.name);
  countryName.className = "countryName";
  this.container.appendChild(countryName)

  const countryCapital = this.createElement('h3', country.capital);
  countryCapital.className = "countryCapital";
  this.container.appendChild(countryCapital);

  const countryLanguages = this.createElement('p', country.languages[0].name);
  countryLanguages.className = "countryLanguages";
  this.container.appendChild(countryLanguages);

  const countryPopulation = this.createElement('p', country.population);
  countryPopulation.className = "countryPopulation";
  this.container.appendChild(countryPopulation);


}


CountryView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element
}


// CountryView.prototype.populateList = function(list) {
//   this.country.countries.forEach((country) =>{
//     const countriesListItem = document.createElement('li');
//     // countriesListItem.className = "countryItem";
//     countriesListItem.textContent = country.name;
//     list.appendChild(countriesListItem);
//   })
// }
//
//   CountryView.prototype.clearCountry = function(){
//     this.container.innerHTML = '';
//   }




module.exports = CountryView;
