(function () {
  'use strict';

  angular
    .module('sample_project.authentication', [
      'sample_project.authentication.controllers',
      'sample_project.authentication.services'
    ]);

  angular
    .module('sample_project.authentication.controllers', []);

  angular
    .module('sample_project.authentication.services', ['ngCookies']);
})();