import {Component, OnInit} from 'angular2/core';
import {Injectable}     from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {NewsService} from './news.service';
import {News}           from './news';

@Component({
    selector: 'widget-news',
    template: `
    <div *ngFor="#item of news" class="row-fluid">
        <a class="span12 btn" href="{{ item.href }}">
        {{ item.title }}
        <span class="label label-info right">{{ item.date }}</span>
      </a>
    </div>`,
    providers: [
        HTTP_PROVIDERS,
        NewsService,
    ]
})

@Injectable()
export class NewsComponent implements OnInit {
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
