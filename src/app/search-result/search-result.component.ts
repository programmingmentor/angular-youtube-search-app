import { Component, OnInit, Input } from '@angular/core';

import { YoutubeVideo } from './../youtube-video.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result: YoutubeVideo;

  constructor() { }

  ngOnInit() {
  }

}
