import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';
import { YoutubeSearchService } from './../youtube-search.service';
import { YoutubeVideo } from './../youtube-video.model';

@Component({
  selector: 'app-search-form',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>`,
  styles: []
})
export class SearchFormComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<YoutubeVideo[]> = new EventEmitter<YoutubeVideo[]>();

  constructor(private youtube: YoutubeSearchService,
              private el: ElementRef) {
  }

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.el.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.emit(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
        (results: YoutubeVideo[]) => { // on sucesss
          this.loading.emit(false);
          this.results.emit(results);
        },
        (err: any) => { // on error
          console.log(err);
          this.loading.emit(false);
        },
        () => { // on completion
          this.loading.emit(false);
        }
      );
  }
}
