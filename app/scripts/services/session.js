'use strict';

angular.module('freezewebApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
