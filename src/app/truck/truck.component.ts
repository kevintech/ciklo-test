import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck',
  templateUrl: './truck.component.html',
  styleUrls: ['./truck.component.css']
})
export class TruckComponent implements OnInit {

  trucks: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/trucks").subscribe(data => {
      this.trucks = data;
    })
  }

}
