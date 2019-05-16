const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js');


const MountainListView = function(container) {
  this.container = container;

}

MountainListView.prototype.bindEvents = function() {
  PubSub.subscribe('Mountains:mountains-data-ready', (event) => {
    this.mountains = event.detail;
    this.render();
    // console.log(event.detail);
  });

}

MountainListView.prototype.render = function() {
  this.mountains.forEach((mountain) =>{
    const mountainView = new MountainView(this.container);
    mountainView.render(mountain);
    // console.log(mountainView);
  })

}




module.exports = MountainListView;
