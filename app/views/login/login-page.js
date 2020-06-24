var dialogsModule = require("tns-core-modules/ui/dialogs");
var frameModule = require("tns-core-modules/ui/frame");
var observableModule = require("tns-core-modules/data/observable");
var UserViewModel = require("../shared/view-models/user-view-model");

var user = new UserViewModel(
    {
        email: "nisapinklava12@gmail.com",
        password: "password"
    });
    
exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.Frame.topmost().navigate("views/list/list-page");
        });
};

exports.register = function () {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () {
                    exports.toggleDisplay();
                });
        }).catch(function (error) {
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
};

var page;
var email;

exports.loaded = function (args) {
    console.log("hello, nisa!");
    alert("hello, Nisa!");
    page = args.object;
    page.bindingContext = user;
};

