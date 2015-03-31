/// <reference path="../../angular/angular.d.ts"/>
/// <reference path="PageController.ts"/>

module Typework7.pages{

  export interface IMyMessage{
    title: string;
  }

  export interface IndexPageScope extends IScope{
    message: IMyMessage;
  }
  
  export class IndexPageController extends PageController{
    scope: IndexPageScope;
 
    private model:IMyMessage;
    
    constructor($scope: IndexPageScope){
      super($scope);
      this.model = { title: 'Click me to test Angular data binding' };
      $scope.message = this.model;
    }
    
    public onClick():void{
      this.model.title = "Data binding works :-)";
    }
    
  }

}