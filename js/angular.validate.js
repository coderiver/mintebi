angular.module('modalValidate', [])
	.controller('ValidateController', function($scope, $element, $http) {
		$scope.sendForm = function () {
			$http({
				url: 'mail.php',
				method: 'POST',
				data: $element.serialize(),
				headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
				cache: false
			}).success(function () {});
		};
	})
	.directive('validateSelect', function($timeout) {
		function validSelects(scope, element, attrs) {
			$timeout(function() {
				var fakeElem = element.siblings('.jcf-select');

				if (fakeElem.length !== 0) {
					fakeElem.addClass('ng-invalid-required');

					element.on('change', function() {
						if (element.get(0).selectedIndex === 0){
							fakeElem.addClass('ng-invalid-required');
						} else {
							fakeElem.removeClass('ng-invalid-required');
						}
					});
				}
			}, 100);
		}

		return {
			restrict: 'A',
			link: validSelects,
			controller: function($scope) {},
			scope: true
		};
	});
