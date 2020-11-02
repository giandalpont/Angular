import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gian Dal Pont';

  photos = [
    {
      img: 'https://www.maxmilhas.com.br/blog/wp-content/uploads/2019/05/Ba%C3%ADa-de-Ha-Long-Vietn%C3%A3-1024x767.jpg',
      imgAlt: 'Natureza',
    },
    {
      img: 'https://portosaopedro.com.br/wp-content/uploads/2019/03/aproximacao-da-natureza-promove-qualidade-de-vida-1.jpg',
      imgAlt: 'Natureza',
    },
  ];
}
