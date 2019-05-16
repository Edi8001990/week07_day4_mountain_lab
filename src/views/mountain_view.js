const PubSub = require('../helpers/pub_sub.js');

const MountainView = function(container){
  this.container = container;

}

MountainView.prototype.bindEvents = function() {
  PubSub.subscribe('Mountains:mountains-data-ready', (event) =>{
 console.log(event);
    this.render(event.detail)
  })
}

MountainView.prototype.render = function(mountain){
  const mountainName = this.createElement('h2', mountain.name);
  console.log(mountainName);
  this.container.appendChild(mountainName);



  const meaning = this.createElement('p', mountain.meaning);
  this.container.appendChild(meaning);

  const height = this.createElement('p', mountain.height);
  this.container.appendChild(height);


}

MountainView.prototype.createElement = function(elementType, text) {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;

}



MountainView.prototype.populateList = function(list) {
  this.mountain.mountains.forEach((mountain) =>{
    const mountainsListItem = document.createElement('li');
    mountainsListItem.textContent = mountain.name;
    list.appendChild(mountainsListItem);

  })

}

MountainView.prototype.clearMountain = function() {
  this.container.innerHTML = '';
}

module.exports = MountainView;
