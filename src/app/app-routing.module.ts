import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RsvpsComponent } from './rsvps/rsvps.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { RegistryComponent } from './registry/registry.component';
import { RsvpListComponent } from './rsvp-list/rsvp-list.component';
import { RsvpSuccessComponent } from './rsvp-success/rsvp-success.component';


const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "details", component: DetailsComponent},
  { path: "registry", component: RegistryComponent},
  { path: "rsvp", component: RsvpsComponent },
  { path: "rsvp/list", component: RsvpListComponent},
  { path: "rsvp/success", component: RsvpSuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
