import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {

  package = {};
  constructor(private http:HttpClient, private router: Router) { }

  ngOnInit() {
  }

  save() {
    this.http.post('/api/packages/', this.package)
    .subscribe(res => {
      this.router.navigate(['/packages']);
    }, (err) => {
      console.log(err);
    }
    );
  }
}
