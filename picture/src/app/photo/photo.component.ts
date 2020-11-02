import { Component, Input } from "@angular/core";

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html'
})
export class PhotoComponent {
  // img = 'https://portosaopedro.com.br/wp-content/uploads/2019/03/aproximacao-da-natureza-promove-qualidade-de-vida-1.jpg';
  // imgAlt = 'Natureza';
  @Input() img = '';
  @Input() imgAlt = '';
}
