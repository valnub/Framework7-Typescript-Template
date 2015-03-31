/// <reference path="../../angular/angular.d.ts"/>

module Typework7.pages{
  
  export interface IScope extends ng.IScope{
    events: PageController;  
  }
 
  /**
   * Do not instantiate this. This is just an abstract class.
   * If you'd like to create a new PageController extend this class.
   *
   * @class
   * @abstract
   */
  export class PageController{
    scope: IScope;
 
    constructor($scope: IScope){
      this.scope        = $scope;
      this.scope.events = this;
    }
  }
  
}