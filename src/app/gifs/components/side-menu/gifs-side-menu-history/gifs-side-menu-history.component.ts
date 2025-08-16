import {Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Gif } from 'src/app/gifs/interfaces/gift.interface';
import { GifsService } from 'src/app/gifs/services/gifs.service.service';


@Component({
  selector: 'app-gifs-side-menu-history',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './gifs-side-menu-history.component.html',

})
export class GifsSideMenuHistoryComponent {

  gifService = inject(GifsService);

}
