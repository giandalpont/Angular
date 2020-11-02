import { Component } from '@angular/core';

import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Gian Dal Pont';

  photos: Object[] = [];

  // constructor(http: HttpClient) {
  //   http
  //     .get<Object[]>('http://localhost:3000/flavio/photos')
  //     .subscribe(
  //       photos => this.photos = photos,
  //       err => console.log(err.message)
  //     );
  // }

  constructor(photoService: PhotoService) {
    photoService
      .listFromUser('flavio')
      .subscribe(photos => {
        // console.log(photos[0])
        this.photos = photos
      })
  }
}
