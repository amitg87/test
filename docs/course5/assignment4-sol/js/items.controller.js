(function () {
    angular.module("MenuApp").controller("MenuController", function (items) {
        var itemDetail = this;
        itemDetail.items = items;
    });
})();