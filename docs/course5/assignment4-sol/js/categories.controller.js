(function () {
    angular.module("MenuApp").controller("CategoriesController", function (items) {
        var categories = this;
        categories.items = items;
    })
})();