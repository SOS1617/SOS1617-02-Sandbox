angular
    .module("ContactManagerApp")
    .controller("ListCtrl",["$scope","$http",function ($scope,$http){
        console.log("Controller initialized");
         url = "/api/v1/contacts";
         function refresh(){
             $http
              .get(url)
              .then(function (response){
                    console.log("Data received:"+ JSON.stringify(response.data,null,2));
                    $scope.contacts = response.data;
              });
         }
         
        $scope.addContact = function(){
            $http.post(url, $scope.newContact).then(function(response){
                console.log("POST Finished");
                refresh();
            })    
        } 
}]);

