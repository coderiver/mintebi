var app = angular.module('mintebiApp', ['ngDialog', 'jcf', 'modalValidate', 'AccordionTools']);

 // Example of how to set default values for all dialogs
app.config(['ngDialogProvider', function (ngDialogProvider) {
	ngDialogProvider.setDefaults({
		className: 'ngdialog-theme-default',
		plain: false,
		showClose: false,
		closeByDocument: true,
		closeByEscape: true,
		appendTo: false,
		preCloseCallback: function () {
			// console.log('default pre-close callback');
		}
	});
}]);

app.controller('ModalCtrl', function ($scope, ngDialog, $rootScope) {
	$scope.openModalDelete = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openTemplateValidateModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-validate.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openSuccessValidateModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-validate-success.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openIndustriesModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-industries.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openSortModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-sort.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openCountryModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-country.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openSearchModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-search.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$scope.openCategoriesModal = function () {
		$scope.value = true;

		ngDialog.open({
			template: 'inc/modal-categories.html',
			className: 'ngdialog-theme-plain',
			scope: $scope,
			cache: false
		});
	};

	$rootScope.$on('ngDialog.opened', function (e, $dialog) {
		jcf.refreshAll();
	});
});
app.directive('resize', function ($window, $timeout) {
	return function (scope, element, attr) {

		var win = angular.element($window);
		scope.$watch(function () {
			return {
				'h': win.height(),
				'w': win.width()
			};
		}, function (newValue, oldValue) {
			scope.windowHeight = newValue.h;
			scope.windowWidth = newValue.win;

			scope.resizeWithOffset = function (offsetH) {
				// scope.$eval(attr.notifier);

				// return {
				// 	'height': (newValue.h - offsetH) + 'px'
				// };

				element.css('height', (newValue.h - offsetH) + 'px');
				jcf.refresh(element);
			};

		}, true);

		win.bind('resize', function () {
			scope.$apply();
		});
	}
});