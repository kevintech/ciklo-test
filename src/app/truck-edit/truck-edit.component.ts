import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-truck-edit',
  templateUrl: './truck-edit.component.html',
  styleUrls: ['./truck-edit.component.css']
})
export class TruckEditComponent implements OnInit {
  
  truck = {};
  constructor(private http: HttpClient, private router: Router, 
    private route: ActivatedRoute) { }
    
    ngOnInit() {
      this.getTruck(this.route.snapshot.params['id']);
    }
    
    getTruck(id) {
      this.http.get('/api/trucks/'+id).subscribe(data => {
        this.truck = data;
      });
    }

    remove(id) {
      this.http.delete("/api/trucks/"+id)
      .subscribe(res => {
        this.router.navigate(['/trucks']);
      }, (err) => {
        console.log(err);
      });
    }
    
    updateTruck(id, data) {
      this.http.put('/api/trucks/'+id, this.truck)
      .subscribe(res => {
        this.router.navigate(['/trucks']);
      }, (err) => {
        console.log(err);
      }
    );
  }
  
}
