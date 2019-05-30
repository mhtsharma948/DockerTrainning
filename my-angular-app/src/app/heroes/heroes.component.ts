import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'my-angular-app';

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    window.alert('you are a hero')
    this.http.get('/application/mohit').subscribe(data => {
      console.log(data);
      alert(data);
    }, error => {
      console.log(error);
      alert(error);
    });
  }
}