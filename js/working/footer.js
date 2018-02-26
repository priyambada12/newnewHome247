//(function(){
var app = angular.module('footerApp',[]);

app.controller('footerCtrl',function($scope,networkFactory){
	 networkFactory.getCityDetails(function(success) {
        console.log(success.data);
		 $scope.cities = success.data.locations;
	
    });

});


//});