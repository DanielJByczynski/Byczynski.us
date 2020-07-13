import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpsComponent } from './rsvps.component';

describe('RsvpsComponent', () => {
  let component: RsvpsComponent;
  let fixture: ComponentFixture<RsvpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
