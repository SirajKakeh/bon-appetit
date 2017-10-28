import { SignUpPage } from './../pages/sign-up/sign-up';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { SignInPage } from '../pages/sign-in/sign-in';

//import { MapPage } from '../pages/map/map';
import { UserHomePage } from '../pages/user-home/user-home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {


  rootPage:any = SignUpPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen
  ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
