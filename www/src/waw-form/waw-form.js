/****************************************************************************************
*************************   Waw Form -- Simple Contact Form   ***************************
*******  Module for manging and creating contact form component with Angular Js *********
******************  Copyright for Wafaa Hamdy Full Stack  Web developer  ****************
*************************  mail : eng.wafaa.hamdy@gmail.com   ***************************/


(function() {
"use strict";

/**  the module */
angular.module('wawFormModule', [])
.constant('DeveloperMail', 'eng.wafaa.hamdy@gmail.com')


/**  the component  */
.component('wawForm', {
  templateUrl: 'src/waw-form/wawform.template.html',
  bindings: {
  wawName : '=',
  wawEmail : '=',
  wawPhone : '=',
  wawMessage : '=',
  wawSend : '&' 
  }
});




})();