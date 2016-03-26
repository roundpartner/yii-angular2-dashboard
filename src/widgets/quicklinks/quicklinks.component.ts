import {Component, Injectable, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {LinkService} from './link.service';
import {Link}           from './link';

@Component({
    selector: 'widget-quick-links',
    template: `
    <div *ngFor="#item of links" class="row-fluid">
        <a class="span12 btn" href="{{ item.href }}">
        {{ item.title }}
        <span *ngIf="item.date" class="label label-info right">{{ item.date }}</span>
      </a>
    </div>
    `,
    providers: [
        HTTP_PROVIDERS,
        LinkService,
    ]
})

@Injectable()
export class QuickLinksComponent  implements OnInit {
    constructor (private _linkService: LinkService) {}
    
    errorMessage: string;
    links: Link[];
    
    ngOnInit() { this.getLinks(); }

    getLinks() {
        this._linkService.getLinks()
            .subscribe(
                links => this.links = links,
                error =>  this.errorMessage = <any>error);
    }
}