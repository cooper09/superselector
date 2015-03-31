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

var ctgObj = { 
      id: $scope.catId,
      cat: $scope.category 
      } 

  /*    $scope.campaign.title,
      description: $scope.campaign.description,
      launch: $scope.launchDate,
      end: $scope.drawingDate,
      country: $scope.campaign.country,
      image: $scope.campaign.image,
      video: $scope.campaign.video,
      clicks: 0
    }  */

 console.log("Set up categories: ", ctgArr);

   var options = ctgArr;
    // make sure the selector get the final options
       $scope.options = options;
       //$scope.selectedOption = $scope.options[0];
       var first = false; 

 $scope.$watch('selectedOption', function(newValue, oldValue) {
                    // handle selection change ...

          var ctgObj = { 
            id: "myId",
            cat: $scope.options[0].cat  
            } 


          //ctgObj = $scope.selectedOption;

                    	console.log ("My expert Controller is in control! " , ctgObj.cat );

                    var selectObj;
                    selectObj = $scope.selectedOption;

                    console.log("expertController - selection: " , oldValue );
                    var newOptions = new Array(); 
                    var option = $scope.selectedOption;
                    //optionNo = $scope.selectedOption.id;

                    console.log("choice number: " + optionNo+ " option selected: ", $scope.options[optionNo].cat );
                    console.log("current options: " +  options );

                    expertData[optionNo] = option;

                   //reset option array to exclude selection / add selection to profile array FIFO  
                     for ( var i=0 ; i <  $scope.options.length ; i++) {
                        if ( $scope.options[i].cat != $scope.options[optionNo].cat ) {
                           console.log("ExpertController - comparing: " + $scope.options[i].cat + " with current selected option:  ", $scope.options[optionNo].cat );
                            newOptions.push($scope.options[i]);
                        } //end if          
                    }//end for loop..
                    ++optionNo;
                    console.log("new options list: " , newOptions );
                    $scope.options = newOptions;
                    $scope.selectedOption = $scope.options[0];

                    //$scope.options = options;
                	first = true;
                } );//end watch selectedOption 


 $scope.showProfile = function () {
 /*  	 console.log("getProfile - Build our user profile: " , expertData[1].cat );

   	 var showArr = new Array();

   	 for (var i=1 ;i < expertData.length ; i++) {
   	 	console.log("preference: " , expertData[i] );
   	 	showArr[i] = expertData[i].cat+" ";
   	 }

   	 alert("Here is your profile preferences: " + showArr );
   	 alert("Get ready for those emails!!!"); */
  }//end getData

});//end controller