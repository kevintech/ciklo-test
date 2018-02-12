import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  drivers: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/drivers").subscribe(data => {
      this.drivers = data;
    });
  }

}
