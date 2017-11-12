(function () {
"use strict";

angular.module('public')
.controller('feedbackController', feedbackController);


function feedbackController() {
  var $ctrl = this;
  $ctrl.feedback={name : "" , email : "", phone : "" , message : ""   } ;
  
  $ctrl.sendFeedback = function(){
	  
	  /// function to send the feedback to server or send it by mail
	  console.log ("the message of : " ,$ctrl.feedback.name );
	  console.log ("email : " ,$ctrl.feedback.email );
	  console.log ("phone : " ,$ctrl.feedback.phone );
	  console.log ("message: " ,$ctrl.feedback.message);
	 $ctrl.feedback={name : "" , email : "", phone : "" , message : ""   } ;
	  
	  }
  
}


})();