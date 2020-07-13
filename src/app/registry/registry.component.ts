import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { $ } from 'protractor';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css'],
  styles: [':host { width: 100%; height: 100%; }']
})
export class RegistryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @HostListener('window:click', ['$event.target'])
  onClick(targetElement) {
    if(targetElement.classList.contains('registrybox')){
      this.designBox();
    }
  }

  designBox() {
    this.router.navigate(['rsvp/list']);
  }
}
