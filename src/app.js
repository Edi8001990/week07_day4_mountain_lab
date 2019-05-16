const Mountains = require('./models/mountains.js');
const MountainListView = require('./views/mountain_list_view.js');
const MountainView = require('./views/mountain_view.js');

document.addEventListener('DOMContentLoaded', () =>{

const mountainsListContainer = document.querySelector('section#mountains');
const mountainListView = new MountainListView(mountainsListContainer);
mountainListView.bindEvents();

const mountains = new Mountains('https://munroapi.herokuapp.com/munros');
// mountains.bindEvents();
mountains.getData();
})
