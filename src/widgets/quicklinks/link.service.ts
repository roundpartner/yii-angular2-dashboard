import {Injectable}     from 'angular2/core';
import 'rxjs/Rx';
import {Http, Response} from 'angular2/http';
import {Link}           from './link';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class LinkService {
    constructor (private http: Http) {}

    private _linksUrl = '../json/links/links.json';

    getLinks () {
        return this.http.get(this._linksUrl)
            .map(res => <Link[]> res.json().data)
            //.do(data => console.log(data))
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}