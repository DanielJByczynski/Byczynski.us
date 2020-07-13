import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, AngularFirestore } from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RsvpsComponent } from './rsvps/rsvps.component';
import { RsvpListComponent } from './rsvp-list/rsvp-list.component';
import { RsvpsService } from './shared/rsvps.service';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { DetailsComponent } from './details/details.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpSuccessComponent } from './rsvp-success/rsvp-success.component';

@NgModule({
   declarations: [
      AppComponent,
      RsvpsComponent,
      RsvpListComponent,
      HomeComponent,
      NavComponent,
      DetailsComponent,
      RegistryComponent,
      RsvpSuccessComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule
   ],
   providers: [
      RsvpsService,
      AngularFirestore
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
