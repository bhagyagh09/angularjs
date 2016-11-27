var app = angular.module('MyApp',[])

app.controller('nameCtrl',function($scope){
	$scope.name = 'Bhagya';
})

.directive('pageContent',function() {
	return {
		restrict:'E',
		controller:'nameCtrl',
		template:'			<div>"Let\'s get started with name?"</div>'+
			'<input type="text" ng-model="name">'+
			'<div class="thought">"Difficult Road leads to Beautiful Destinatons"</div>'
	}
})