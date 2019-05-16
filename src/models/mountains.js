const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Mountains = function(url) {
  this.url = url;
  this.mountains = [];
}


Mountains.prototype.getData = function() {
 const request = new RequestHelper(this.url);

 request.get()
  .then((data) =>{
    this.mountains = data;
    PubSub.publish('Mountains:mountains-data-ready', this.mountains);
    
  })
}


module.exports = Mountains;
