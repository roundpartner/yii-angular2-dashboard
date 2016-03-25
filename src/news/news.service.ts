import {Injectable}     from 'angular2/core';
import 'rxjs/Rx';
import {Http, Response} from 'angular2/http';
import {News}           from './news';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class NewsService {
    constructor (private http: Http) {}

    private _newsUrl = '../json/news/news.json';

    getNews () {
        return this.http.get(this._newsUrl)
            .map(res => <News[]> res.json().data)
            //.do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}