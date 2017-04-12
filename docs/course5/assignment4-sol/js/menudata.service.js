(function () {
    angular.module("data").service("MenuDataService", function ($http, $q, $timeout) {
        var MenuDataService = this;
        MenuDataService.getAllCategories = function () {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/categories.json"
            }).then(function (response) {
                return response.data;
            });
        };

        MenuDataService.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
            }).then(function (response) {
                return response.data.menu_items;
            })
        }
    });
})();