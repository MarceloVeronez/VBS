import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule, RequestOptions, Http } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';
import { TooltipsModule } from 'ionic-tooltips';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapsPage } from '../pages/maps/maps';
import { Geolocation } from '@ionic-native/geolocation';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';

//imports Logins
import { LoginPage } from '../pages/login/login';
import { GlobalServiceProvider } from '../providers/global-service/global-service';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { DirectivesModule } from '../directives/directives.module';
import { AuthConfig } from 'angular2-jwt';
import { AuthInterceptor } from '../interceptors/auth-interceptor';
import { StorageService } from '../providers/storage.service/storage.service';

import { GoogleMaps } from '@ionic-native/google-maps';
export function authHttpServiceFactory(auth: AuthServiceProvider, http: Http, options: RequestOptions) {
  const config = new AuthConfig({
    globalHeaders: [
      { 'Content-Type': 'application/json' }
    ]
  });
  return new AuthInterceptor(auth, config, http, options);
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,  
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot(),
    DirectivesModule,
    TooltipsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    GlobalServiceProvider,
    AuthServiceProvider,
    HttpModule,
    StorageService,
  ]
})
export class AppModule {}
