import {Component, inject } from '@angular/core';
import { GiftListComponent } from '../../components/gift-list/gift-list/gift-list.component';
import { GifsService } from '../../services/gifs.service.service';

@Component({
  selector: 'app-search-page',
  imports: [GiftListComponent],
  templateUrl: './search-page.component.html',

})
export default class SearchPageComponent {
  giftsService = inject(GifsService);


  onSearch(query:string ){
    this.giftsService.loadSearchGifs(query);
  }
}
