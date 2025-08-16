import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gift.interface';
import { gifMapper } from '../mapper/gif.mapper';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);
  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);
  searchGifs = signal<Gif[]>([]);
  searchGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(
  JSON.parse(localStorage.getItem('searchHistory') || '{}')
);
  searchHistoryKeys = computed(()=> Object.keys(this.searchHistory()));

  constructor(){
    this.loadTrendingGifs();
  }

loadTrendingGifs(){
  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`,{
    params:{
      api_key: environment.giphyapiKey,
      limit:30
    }
  }).subscribe( (resp) => {
    const gifs = gifMapper.mapGiphyItemsToGifArray(resp.data);
    this.trendingGifs.set(gifs);
    this.trendingGifsLoading.set(false);

  });
}

loadSearchGifs(query: string) {
  this.http.get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`,{
    params:{
      api_key: environment.giphyapiKey,
      q: query
    }
  }).subscribe( (resp) => {
    const gifs = gifMapper.mapGiphyItemsToGifArray(resp.data);
    this.searchGifs.set(gifs);
    this.searchGifsLoading.set(false);

    // Aquí actualizamos el historial
    this.searchHistory.update(history => {
      const newHistory = {
        ...history,
        [query.toLowerCase()]: gifs
      };
      localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      return newHistory;
    });
});
}

getHistoryGifts( query: string) {
  return this.searchHistory()[query] ?? [];
}
}
