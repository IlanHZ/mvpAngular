(function () {
  'use strict';

  angular.module('Artbeat').directive('footerStick', function () {
    return {
      restrict: "E",
      templateUrl: "/views/footer.html",
      link: function (scope, el, attrs) {
        var win = angular.element($('html'));
        scope.$watch(function () {
            return win[0].offsetHeight;
          },
          function (newValue, oldValue) {
            var newHeight = newValue + 60;
             $(el[0].firstElementChild).css('top',newHeight);
          });
      }
    };
  })
}());