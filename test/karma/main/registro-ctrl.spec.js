'use strict';

describe('module: main, controller: RegistroCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var RegistroCtrl;
  beforeEach(inject(function ($controller) {
    RegistroCtrl = $controller('RegistroCtrl');
  }));

  it('should do something', function () {
    expect(!!RegistroCtrl).toBe(true);
  });

});
