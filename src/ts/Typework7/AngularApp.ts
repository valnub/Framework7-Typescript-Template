/// <reference path="../angular/angular.d.ts"/>
module Typework7{
  export class AngularApp{
    app: ng.IModule;
 
    constructor( name: string, modules: Array< string > ){
      this.app = angular.module( name, modules );
    }
 
    addController( name: string, controller: Function ){
      this.app.controller( name, controller );
    }
  }
}