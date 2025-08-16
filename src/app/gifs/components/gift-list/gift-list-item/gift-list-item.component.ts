import {Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-gift-list-item',
  standalone: true,
  templateUrl: './gift-list-item.component.html',

})
export class GiftListItemComponent {
  imageUrl = input.required<string>();
}
