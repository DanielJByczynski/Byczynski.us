import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RsvpsService {

  constructor(private firestore: AngularFirestore) {
  }

  public form = new FormGroup({
    name: new FormControl(''),
    guests: new FormControl(''),
    vegs: new FormControl(''),
    comment: new FormControl('')
  });

  public dataList: Array<any>;
  public guestCount: any = 0;

  createRsvp(data) {
    data.rsvp = JSON.stringify(data);
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("rsvps")
            .add(data)
            .then(err => reject(err));
    });
  }

  getRsvps() {
    return this.firestore.collection("rsvps").snapshotChanges();
  }

  getGuestCount()
  {
    return this.guestCount;
  }

  getVegetarianCount() {
    return 0;
  }
}
