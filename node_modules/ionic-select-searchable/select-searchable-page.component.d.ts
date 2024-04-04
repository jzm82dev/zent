import { AfterViewInit } from '@angular/core';
import { Content, InfiniteScroll, NavParams, ViewController } from 'ionic-angular';
import { SelectSearchableComponent } from './select-searchable.component';
export declare class SelectSearchablePageComponent implements AfterViewInit {
    private navParams;
    private viewController;
    private _cssClass;
    private readonly _canClearCssClass;
    private readonly _isMultipleCssClass;
    private readonly _isSearchingCssClass;
    private readonly _isAddItemTemplateVisibleCssClass;
    private readonly _isIos;
    private _isMD();
    private _searchbarComponent;
    _content: Content;
    selectComponent: SelectSearchableComponent;
    constructor(navParams: NavParams, viewController: ViewController);
    ngAfterViewInit(): void;
    private _setItemsToConfirm(items);
    _getMoreItems(infiniteScroll: InfiniteScroll): void;
    _select(item: any): void;
    _ok(): void;
    _close(): void;
    _clear(): void;
}
