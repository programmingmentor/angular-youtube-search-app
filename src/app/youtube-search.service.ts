import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { YoutubeVideo } from './youtube-video.model';

export const YOUTUBE_API_KEY = 'AIzaSyAFwyTkfjNRStnq7Zg8sYTzhTZaIkAQLQQ';
export const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3/search';

@Injectable()
export class YoutubeSearchService {

  constructor(private http: Http,
    @Inject(YOUTUBE_API_KEY) private apiKey: string,
    @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable <YoutubeVideo[] > {
    const params = `q=${query}&key=${this.apiKey}&part=snippet&type=video&maxResults=10`;
    const queryUrl = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl)
      .map((response: Response) => {
        return (<any>response.json()).items.map(item => {
          return new YoutubeVideo({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }
}
