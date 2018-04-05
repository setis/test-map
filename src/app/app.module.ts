import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import {AppComponent} from './app.component';
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireModule} from "angularfire2";
import {CommonModule} from "@angular/common";

const config = {
  apiKey: "AIzaSyCemx_kAzwBUFHuI5lIru7FBJH8vSi6yIE",
  authDomain: "test-2422c.firebaseapp.com",
  databaseURL: "https://test-2422c.firebaseio.com",
  projectId: "test-2422c",
  storageBucket: "test-2422c.appspot.com",
  messagingSenderId: "290676460340"
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBC6NmXptsKPp_KJJf9G_fSj8DjwAA_-mc"
    })
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
