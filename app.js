var testApp = angular.module('testApp', []);

testApp.controller('testCtrl', function($scope, $http) {

var testData;

$scope.init = function () {
 console.log("And away we go....!");

}//end init



 $scope.getData = function () {
    console.log("getData - Gimme some data, baby!!!");
   	
 /*$http.get( 'http://localhost:3000').success(function(data) {
			console.log("dataControl.getData data:  ",data);
			
		}); */
  }//end getData 


});//end controller


testApp.controller('expertCtrl', function($scope, $http) {



var expertData = new Array();
var optionNo = 0;
var firsttime = true;

var ctgArr =[ {"id":"0", "cat": "Please select category, untill all categories are selected..."},
				{"id":"1", "cat": "Science"},
				{"id":"2","cat":"Design"},
				{"id":"3","cat":"Engineering"},
				{"id":"4","cat": "Finance"},
				{"id":"5","cat":"Food"}];

/*var ctgObj = { 
      id: $scope.catId,
      cat: $scope.category 
      } */

 console.log("Set up categories: ", ctgArr);

   var options = ctgArr;
    // make sure the selector get the final options
       $scope.options = options;
       $scope.selectedOption = $scope.options[0];
       var first = false; 

 $scope.$watch('selectedOption', function(newValue, oldValue) {
                    // handle selection change ...
                    var selectObj;
                    selectObj = $scope.selectedOption;

                    console.log("expertController - selection: " , $scope.selectedOption.id );
                    var newOptions = new Array(); 
                    var option = $scope.selectedOption;
                  
                    console.log("current options: " +  options );
                    ++optionNo;

                    if ( (optionNo != 0) && ($scope.selectedOption.id != 0 )) {
                      for ( var i=0 ; i <  $scope.options.length ; i++) {
                        if ( $scope.options[i].cat != $scope.selectedOption.cat ) {
                           newOptions.push($scope.options[i]);
                        } else {
                            console.log("add to expert array: " + $scope.options[i].cat);
                            //expertData[optionNo] = { id: optionNo , cat: $scope.options[i].cat };
                            expertData.push({id: optionNo, cat: $scope.options[i].cat });
                        }//end if          
                      } //end for
  
                      $scope.options = newOptions;
                      $scope.selectedOption = newOptions[0];
                      //++optionNo;
                    }//end iff 
                   
                });//end watch selectedOption 


 $scope.showProfile = function () {
  	 console.log("getProfile - Build our user profile: " , expertData );

   	 var showArr = new Array();
     for ( var i=0; i < expertData.length ; ++i ) {
        showArr[i] = expertData[i].cat;
     }

   	 alert("Here is your profile preferences: " + showArr );
   	 alert("Get ready for those emails!!!"); 
  }//end getData

});//end controller