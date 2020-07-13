import { Component, OnInit } from '@angular/core';
import { RsvpsService } from '../shared/rsvps.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-rsvp-list',
  templateUrl: './rsvp-list.component.html',
  styleUrls: ['./rsvp-list.component.css'],
  styles: [':host { width: 100%; height: 100%; }']
})
export class RsvpListComponent implements OnInit {

  constructor(
    private rsvpsService: RsvpsService,
    private firestore: AngularFirestore) { }
  private rsvps;
  guests = 0;

  ngOnInit() {
    this.getRsvps();
    this.calculateGuestCount().subscribe((r)=>this.guests = r);
  }

  getRsvps = () => this.rsvpsService
                       .getRsvps()
                       .subscribe(res => (this.rsvps = res));

  calculateGuestCount() {
    var guestCount = new Subject<number>();
    this.firestore.collection("rsvps").get().subscribe(function(querySnapshot) {
      var guestCounts = 0;
      querySnapshot.forEach(function(doc) {
        guestCounts += doc.data().guests;
        guestCount.next(guestCounts);
      });
    });
    return guestCount.asObservable();
  }


  downloadFile() {
      var data = this.rsvps;
      const replacer = (key, value) => value === null ? '' : value;
      console.log(data[0].payload.doc._document.proto.fields.rsvp.stringValue)
      var datas;
      for (var i = 0; i < data.length; i++)
      {
        datas += data[i].payload.doc._document.proto.fields.rsvp.stringValue + "\n";
      }
      let csv = datas;
      console.log(csv);

      var a = document.createElement('a');
      var blob = new Blob([datas], {type: 'text/csv' }),
      url = window.URL.createObjectURL(blob);

      a.href = url;
      var filename = "RSVPs.csv";
      a.download = filename;
      a.click();
      window.URL.revokeObjectURL(url);
      a.remove();
  }
}
