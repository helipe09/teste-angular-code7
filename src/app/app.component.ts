import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  photos: Object[] = [];

  constructor(http: HttpClient) {
    http.get<object[]>('./assets/filmes.json').subscribe((photos) => {
      this.photos = photos;
    });
  }
}
