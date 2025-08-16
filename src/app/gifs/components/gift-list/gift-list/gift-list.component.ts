import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GiftListItemComponent } from '../gift-list-item/gift-list-item.component';
import { Gif } from 'src/app/gifs/interfaces/gift.interface';

@Component({
  selector: 'app-gift-list',
  standalone: true,
  imports: [CommonModule, GiftListItemComponent],
  templateUrl: './gift-list.component.html',
})
export class GiftListComponent {
  gifs =  input.required<Gif[]>();
}
