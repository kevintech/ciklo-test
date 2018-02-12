import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver-new',
  templateUrl: './driver-new.component.html',
  styleUrls: ['./driver-new.component.css']
})
export class DriverNewComponent implements OnInit {

  driver = {};
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.http.post('/api/drivers/', this.driver)
    .subscribe(res => {
      this.router.navigate(['/drivers']);
    }, (err) => {
      console.log(err);
    }
    );
  }
}
