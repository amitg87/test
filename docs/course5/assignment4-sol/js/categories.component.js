(function () {
    angular.module("MenuApp").component("categories", {
        templateUrl: 'js/templates/categories.template.html',
        bindings: {
            items: '<'
        }
    });
})();