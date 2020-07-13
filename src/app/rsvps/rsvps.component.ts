import { Component, OnInit } from '@angular/core';
import { RsvpsService } from '../shared/rsvps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rsvps',
  templateUrl: './rsvps.component.html',
  styleUrls: ['./rsvps.component.css'],
  styles: [':host { width: 100%; height: 100%; }']
})
export class RsvpsComponent implements OnInit {
  rsvp: any;
  alert: any;
  guestdefault = 1;
  vegdefault = 0;

  constructor(private rsvpService: RsvpsService,
    private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('rsvp') === 'confirmed')
    {
      this.router.navigate(['rsvp/success']);
    }
  }

  onSubmit() {
    this.rsvpService.form.value.rsvp = this.rsvp;
    let data = this.rsvpService.form.value;

    if (data.name.length <= 0)
    {
      this.alert = "name required";

      return false;
    }

    if (data.guests < 1 || data.guests > 9)
    {
      this.alert = "invalid # of guests";
      return false;
    }

    if (data.vegs < 0 || data.vegs > data.guests)
    {
      this.alert = "invalid # of vegetarians";
      return false;
    }

    if (!data.vegs)
    {
      data.vegs = 0;
    }

    this.rsvpService.createRsvp(data)
    localStorage.setItem('rsvp', 'confirmed');
    this.router.navigate(['rsvp/success']);
    return true;
  }
}
