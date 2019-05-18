const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Countries = function(url) {
    this.url = url;
    this.countries = [];
}


Countries.prototype.getData = function() {
  const request = new RequestHelper(this.url);

  request.get()
  .then((data) =>{
    this.countries = data;
    console.log(data);
    PubSub.publish('Countries:countries-data-ready', this.countries);
  })

}

module.exports = Countries;
