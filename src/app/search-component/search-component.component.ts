import { YoutubeVideo } from './../youtube-video.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  results: YoutubeVideo[];
  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

  updateResults(results: YoutubeVideo[]): void {
    this.results = results;
  }

}
