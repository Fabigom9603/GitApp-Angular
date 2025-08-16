import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service.service';
import { GiftListComponent } from "../../components/gift-list/gift-list/gift-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GiftListComponent],
  templateUrl: './gif-history.component.html',

})
export default class GifHistoryComponent {

  gifService = inject(GifsService)
  query = toSignal(
    inject(ActivatedRoute).params.pipe(
      map((params) => params['query'])
    )
  );

  gifsByKey = computed (() =>this.gifService.getHistoryGifts(this.query()));

}
