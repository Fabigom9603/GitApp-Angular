import { Component } from '@angular/core';
import { GifsSideMenuHeaderComponent } from './gifs-side-menu-header/gifs-side-menu-header.component';
import { GifsSideMenuOptionsComponent } from './gifs-side-menu-options/gifs-side-menu-options.component';
import { GifsSideMenuHistoryComponent } from "./gifs-side-menu-history/gifs-side-menu-history.component";

@Component({
  selector: 'app-side-menu',
  imports: [GifsSideMenuHeaderComponent, GifsSideMenuOptionsComponent, GifsSideMenuHistoryComponent],
  templateUrl: './side-menu.component.html',

})
export class SideMenuComponent { }
