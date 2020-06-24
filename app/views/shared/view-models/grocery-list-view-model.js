var config = require("../../shared/config");
var fetchModule = require("tns-core-modules/fetch");
var ObservableArray = require("tns-core-modules/data/observable-array").ObservableArray;

function GroceryListViewModel(items) {
  var baseUrl = config.apiUrl + "appdata/" + config.appKey + "/Groceries";
  var viewModel = new ObservableArray(items);



  return viewModel;
}

function getCommonHeaders() {
  return {
    "Content-Type": "application/json",
    "Authorization": "Kinvey " + config.token
  }
}

function handleErrors(response) {
  if (!response.ok) {
    console.log(JSON.stringify(response));
    throw Error(response.statusText);
  }
  return response;
}

module.exports = GroceryListViewModel;