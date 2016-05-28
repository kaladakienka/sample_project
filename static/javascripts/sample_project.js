(function () {
	'use strict';

  	angular
    	.module('sample_project', [
    		'sample_project.config',
      	'sample_project.routes',
      	'sample_project.authentication'
    	]);

    angular
      .module('sample_project.config', []);

  	angular
    	.module('sample_project.routes', ['ngRoute']);

  	angular
  		.module('sample_project')
  		.run(run);

	run.$inject = ['$http'];

	/**
	* @name run
	* @desc Update xsrf $http headers to align with Django's defaults
	*/
	function run($http) {
	  	$http.defaults.xsrfHeaderName = 'X-CSRFToken';
	  	$http.defaults.xsrfCookieName = 'csrftoken';
	}
})();