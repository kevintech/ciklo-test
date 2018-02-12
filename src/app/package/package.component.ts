import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  packages: any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get("/api/packages").subscribe(data => {
      this.packages = data;
    });
  }

}
