let app = new angular.module('shopListApp', []);

app.controller('mainCtrl', function($scope){
    $scope.title = "Shopping List";
    $scope.company = 'Bajai SZC Türr István Technikum';
    $scope.author = '2/14.szft Szoftverfejlesztő';
    $scope.categories = ['Food', 'Health&Beauty', 'Household', 'Other'];
    //$scope.inTotal = 0;
    $scope.newData = {};

    $scope.data = angular.fromJSON(window.localStorage.getItem('shoplist'));
    if($scope.data == null){
        $scope.data = [];
    }

    $scope.add = function(){
        if ($scope.newData.product == null || $scope.newData.quantity == null || $scope.newData.price == null || $scope.newData.category == null) {
            $scope.message = 'You left something empty...';  
        } else{
            $scope.data.push({ID: $scope.data.length + 1, product: $scope.data.product, quantity: $scope.data.quantity, price: $scope.data.price, category: $scope.data.category});
            window.localStorage.setItem('shoplist', angular.toJSON($scope.data));
            $scope.newData = {};
        }
    }


})