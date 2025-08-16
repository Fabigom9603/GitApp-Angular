import { Gif } from "../interfaces/gift.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class gifMapper{

  static mapGiphyItemtoGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url

    }
  }

  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[]{
    return items.map(this.mapGiphyItemtoGif);
  }
}
