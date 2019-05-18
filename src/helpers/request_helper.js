const RequestHelper = function(url) {
  this.url = url;
};

RequestHelper.prototype.get = function () {
  return fetch(this.url)
        .then(response => response.json())
          .catch(err => console.log("Sth is wront with get", err))


};

module.exports = RequestHelper;
