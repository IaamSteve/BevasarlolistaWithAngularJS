let app = new angular.module('ShoppingListApp', [])

app.controller('mainCtrl', function($scope){
    $scope.title = "Shopping List Application"
    $scope.company = 'Bajai SZC Türr István Technikum'
    $scope.author = '2/14.szft Szoftverfejlesztő'
    $scope.categories = ['Food', 'Health&Beauty', 'Household', 'Other']
    $scope.newData = {}
    $scope.fullPrice = 0;

    $scope.data = angular.fromJson(window.localStorage.getItem('shoppinglist'))
    if($scope.data == null){
        $scope.data = []
    }

    $scope.adding = function() {
        if($scope.newData.Product == null || $scope.newData.Quantity == null || $scope.newData.Price == null ) {
            $scope.message = "You didn't clarify everything..."
            $scope.Sum = function(){
                for(let i = 0; i < $scope.newData.length; i++){
                    $scope.fullPrice += $scope.newData[i].Price;
                }
            }
        }
    }
    $scope.delete = function(ID) {
        let idx = $scope.data.findIndex(item => item.ID == ID);
        $scope.data.splice(idx, 1);
        window.localStorage.setItem('telefonkonyv', angular.toJson($scope.data));
    }
    
})