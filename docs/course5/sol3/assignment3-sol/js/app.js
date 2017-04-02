(function () {
    angular.module("NarrowItDownApp", [])
    .service("MenuSearchService", ["$http", "$filter", "$q", function ($http, $filter, $q) {
            var service = this;
            service.getMatchedMenuItems = function (searchTerm) {
                var defer = $q.defer();
                var url = "https://davids-restaurant.herokuapp.com/menu_items.json";
                $http({
                    method: "GET",
                    url: url
                }).success(function (response) {
                    console.log(response);
                    var menu = response.menu_items;
                    var filtered = menu.filter(function (menu_item) {
                        return menu_item.description.indexOf(searchTerm) >= 0;
                    });
                    defer.resolve(filtered);
                }).error(function (response) {
                    defer.reject(response.data)
                });
                return defer.promise;
            }
        }])
        .controller("NarrowItDownController", ["MenuSearchService", function (MenuSearchService) {
            var vm = this;
            vm.narrow = function () {
                MenuSearchService.getMatchedMenuItems(vm.searchTerm).then(
                    function (response) {
                        "use strict";
                        vm.foundItems = response;
                    },
                    function (response) {

                    }
                );
            };

            vm.removeFound = function (index) {
                console.log("remove-" + index);
                vm.foundItems.splice(index, 1);
            }
        }])
        .directive("foundItems", function () {
            return {
                replace: true,
                templateUrl: "loader/foundItems.html",
                controller: function () {
                    var foundItemsCtrl = this;
                },
                controllerAs: "foundItemsCtrl",
                bindToController: true,
                restrict: "E",
                scope: {
                    items: "<foundItems",
                    remove: "&onRemove"
                }
            }
        } );

})();
