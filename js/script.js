let app = new angular.module('ShoppingListApp', [])

app.controller('mainCtrl', function($scope){
    $scope.title = "Shopping List Application"
    $scope.company = 'Bajai SZC Türr István Technikum'
    $scope.author = '2/14.szft Szoftverfejlesztő'
    $scope.categories = ['Food', 'Health&Beauty', 'Household', 'Other']
    $scope.newData = {}

    $scope.data = angular.fromJson(window.localStorage.getItem('shoppinglist'))
    if($scope.data == null){
        $scope.data = []
    }

    $scope.hozzadas = function( {
        if ($scope.newData) {
            
        }
    })


})