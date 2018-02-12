import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck-new',
  templateUrl: './truck-new.component.html',
  styleUrls: ['./truck-new.component.css']
})
export class TruckNewComponent implements OnInit {
  
  truck = {};
  constructor(private http:HttpClient, private router: Router) { }
  
  ngOnInit() {
  }
  
  save() {
    this.http.post('/api/trucks/', this.truck)
    .subscribe(res => {
      this.router.navigate(['/trucks']);
    }, (err) => {
      console.log(err);
    }
  );
}

}
