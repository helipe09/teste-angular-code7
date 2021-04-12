import { Component, Input } from '@angular/core';

@Component({
  selector: 'ap-photo',
  templateUrl: 'photo.component.html',
  styleUrls: ['./photo.component.css'],
})
export class PhotoComponent {
  @Input() description = '';
  @Input() url = '';
  @Input() title = '';
  @Input() diretor = '';
  @Input() ano = '';
  @Input() genero = '';
}
