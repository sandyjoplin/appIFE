'use strict';

describe('module: main, controller: IniciarSesionCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var IniciarSesionCtrl;
  beforeEach(inject(function ($controller) {
    IniciarSesionCtrl = $controller('IniciarSesionCtrl');
  }));

  it('should do something', function () {
    expect(!!IniciarSesionCtrl).toBe(true);
  });

});
