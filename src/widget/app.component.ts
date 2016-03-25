import {Component, OnInit} from 'angular2/core';
import {Injectable}     from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NewsService} from './news.service';
import {News}           from './news';

@Component({
    selector: 'my-widget',
    template: `hello world
    <ul>
    <li *ngFor="#newsItem of news">
      {{ newsItem.title }}
    </li>
  </ul>`,
    providers: [
        HTTP_PROVIDERS,
        NewsService,
    ]
})

@Injectable()
export class AppComponent implements OnInit {
    constructor (private _newsService: NewsService) {}

    errorMessage: string;
    news:News[];

    ngOnInit() { this.getNews(); }

    getNews() {
        this._newsService.getNews()
            .subscribe(
                news => this.news = news,
                error =>  this.errorMessage = <any>error);
    }

}
