import { Component, inject } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list/gift-list.component';
import { GifsService } from '../../services/gifs.service.service';

@Component({
  selector: 'app-trending',
  imports: [GiftListComponent],
  templateUrl: './trending-page.component.html',

})
export default class TrendingComponent {
  giftsService = inject(GifsService);
}
