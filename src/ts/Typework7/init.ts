/// <reference path="AngularApp.ts" />
/// <reference path="pages/IndexPageController.ts" />

module Typework7{
  
  declare var Framework7: any;
  
  interface Framework7View{
  }
  
  interface Framework7App{
    addView(view:String, callback:Framework7ViewOptions):Framework7View
  }
  
  interface Framework7ViewOptions{
    dynamicNavbar:boolean;
    domCache:boolean;
  }
  
  export class Init{    
    
    private fw7App:Framework7App;
    private mainView:Framework7View;
    private fw7ViewOptions:Framework7ViewOptions;
    private angularApp:AngularApp;
    
    constructor(){
      this.configApp();
    }
    
    private configApp():void {
      // Initialize your app
      this.fw7App = new Framework7({
        animateNavBackIcon: true
      });

      this.fw7ViewOptions = {
          // Because we use fixed-through navbar we can enable dynamic navbar
          dynamicNavbar: true,
          domCache: true
      }
      
      // Add view
      this.mainView = this.fw7App.addView('.view-main', this.fw7ViewOptions);
      
      // Init Angular
      this.angularApp = new AngularApp( 'Typework7', [] );
      
      // Init controllers
      this.angularApp.addController( 'IndexPageController', Typework7.pages.IndexPageController);
      
    }
    
  }
  
  // Everything starts here
  new Init();
  
}