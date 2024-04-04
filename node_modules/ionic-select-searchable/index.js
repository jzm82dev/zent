import { CommonModule } from '@angular/common';
import { Component, ContentChild, Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, IterableDiffers, NgModule, Optional, Output, TemplateRef, ViewChild, forwardRef } from '@angular/core';
import { Content, Form, IonicPageModule, Item, ModalController, NavParams, Platform, ViewController } from 'ionic-angular';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableAddItemTemplateDirective = (function () {
    function SelectSearchableAddItemTemplateDirective() {
    }
    SelectSearchableAddItemTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableAddItemTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableAddItemTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableAddItemTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableCloseButtonTemplateDirective = (function () {
    function SelectSearchableCloseButtonTemplateDirective() {
    }
    SelectSearchableCloseButtonTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableCloseButtonTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableCloseButtonTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableCloseButtonTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableGroupRightTemplateDirective = (function () {
    function SelectSearchableGroupRightTemplateDirective() {
    }
    SelectSearchableGroupRightTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableGroupRightTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableGroupRightTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableGroupRightTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableGroupTemplateDirective = (function () {
    function SelectSearchableGroupTemplateDirective() {
    }
    SelectSearchableGroupTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableGroupTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableGroupTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableGroupTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableItemRightTemplateDirective = (function () {
    function SelectSearchableItemRightTemplateDirective() {
    }
    SelectSearchableItemRightTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableItemRightTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableItemRightTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableItemRightTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableItemTemplateDirective = (function () {
    function SelectSearchableItemTemplateDirective() {
    }
    SelectSearchableItemTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableItemTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableItemTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableItemTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableMessageTemplateDirective = (function () {
    function SelectSearchableMessageTemplateDirective() {
    }
    SelectSearchableMessageTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableMessageTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableMessageTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableMessageTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchablePageComponent = (function () {
    function SelectSearchablePageComponent(navParams, viewController) {
        var _this = this;
        this.navParams = navParams;
        this.viewController = viewController;
        this._cssClass = true;
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._selectPageComponent = this;
        this.selectComponent._selectedItems = [];
        if (!this.selectComponent._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_canClearCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.canClear;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isSearchingCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isAddItemTemplateVisibleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isAddItemTemplateVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchablePageComponent.prototype, "_isIos", {
        get: /**
         * @return {?}
         */
        function () {
            return this.selectComponent._isIos;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._isMD = /**
     * @return {?}
     */
    function () {
        return this.selectComponent._isMD;
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this._searchbarComponent && this.selectComponent.focusSearchbar) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(function () {
                _this._searchbarComponent.setFocus();
            }, 1000);
        }
    };
    /**
     * @param {?} items
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._setItemsToConfirm = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        // Return a copy of original array, so it couldn't be changed from outside.
        this.selectComponent._itemsToConfirm = [].concat(items);
    };
    /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._getMoreItems = /**
     * @param {?} infiniteScroll
     * @return {?}
     */
    function (infiniteScroll) {
        // TODO: Try to get infiniteScroll via ViewChild. Maybe it works in a newer Ionic version.
        // For now assign it here.
        this.selectComponent._infiniteScroll = infiniteScroll;
        this.selectComponent.onInfiniteScroll.emit({
            component: this.selectComponent,
            text: this.selectComponent._searchText
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._select = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this.selectComponent.isMultiple) {
            if (this.selectComponent._isItemSelected(item)) {
                this.selectComponent._deleteSelectedItem(item);
            }
            else {
                this.selectComponent._addSelectedItem(item);
            }
            this._setItemsToConfirm(this.selectComponent._selectedItems);
        }
        else {
            if (!this.selectComponent._isItemSelected(item)) {
                this.selectComponent._selectedItems = [];
                this.selectComponent._addSelectedItem(item);
                if (this.selectComponent._shouldStoreItemValue) {
                    this.selectComponent._select(this.selectComponent._getItemValue(item));
                }
                else {
                    this.selectComponent._select(item);
                }
            }
            this._close();
        }
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._ok = /**
     * @return {?}
     */
    function () {
        this.selectComponent._select(this.selectComponent._selectedItems);
        this._close();
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._close = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Focused input interferes with the animation.
        // Blur it first, wait a bit and then close the page.
        if (this._searchbarComponent) {
            this._searchbarComponent._fireBlur();
        }
        setTimeout(function () {
            _this.selectComponent.close().then(function () {
                _this.selectComponent.onClose.emit({
                    component: _this.selectComponent
                });
            });
            if (!_this.selectComponent._hasOnSearch()) {
                _this.selectComponent._searchText = '';
                _this.selectComponent._setHasSearchText();
            }
        });
    };
    /**
     * @return {?}
     */
    SelectSearchablePageComponent.prototype._clear = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectComponent.clear();
        this.selectComponent._emitValueChange();
        this.selectComponent.close().then(function () {
            _this.selectComponent.onClose.emit({
                component: _this.selectComponent
            });
        });
    };
    SelectSearchablePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-searchable-page',
                    template: "<ion-header> <ion-navbar [color]=\"selectComponent.headerColor ? selectComponent.headerColor : null\"> <ion-title> <!-- Use span for titleTemplate to preserve Ionic ellipsis styles. --> <span *ngIf=\"selectComponent.titleTemplate\" [ngTemplateOutlet]=\"selectComponent.titleTemplate\"> </span> <span *ngIf=\"!selectComponent.titleTemplate\"> {{selectComponent._labelText}} </span> </ion-title> <ion-buttons start> <button ion-button (click)=\"_close()\"> <span *ngIf=\"selectComponent.closeButtonTemplate\" [ngTemplateOutlet]=\"selectComponent.closeButtonTemplate\"> </span> <span *ngIf=\"!selectComponent.closeButtonTemplate\" ion-text showWhen=\"ios\"> {{selectComponent.closeButtonText}} </span> <ion-icon *ngIf=\"!selectComponent.closeButtonTemplate\" name=\"md-close\" hideWhen=\"ios\"> </ion-icon> </button> </ion-buttons> </ion-navbar> <ion-toolbar *ngIf=\"selectComponent.canSearch || selectComponent.messageTemplate\"> <ion-searchbar *ngIf=\"selectComponent.canSearch\" #searchbarComponent [(ngModel)]=\"selectComponent._searchText\" (ionInput)=\"selectComponent._filterItems()\" [placeholder]=\"selectComponent.searchPlaceholder || 'Search'\" [debounce]=\"selectComponent.searchDebounce\"> </ion-searchbar> <div class=\"select-searchable-message\" *ngIf=\"selectComponent.messageTemplate\"> <div [ngTemplateOutlet]=\"selectComponent.messageTemplate\"> </div> </div> </ion-toolbar> </ion-header> <ion-content> <div class=\"select-searchable-spinner\" *ngIf=\"selectComponent._isSearching\"> <div class=\"select-searchable-spinner-background\"></div> <ion-spinner></ion-spinner> </div> <ion-list no-margin *ngIf=\"!selectComponent.hasVirtualScroll && selectComponent._filteredGroups.length\"> <ion-item-group *ngFor=\"let group of selectComponent._filteredGroups\" class=\"select-searchable-group\"> <ion-item-divider *ngIf=\"selectComponent._hasGroups\" [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\"> <!-- Use span for groupTemplate to preserve Ionic ellipsis styles. --> <span *ngIf=\"selectComponent.groupTemplate\" [ngTemplateOutlet]=\"selectComponent.groupTemplate\" [ngTemplateOutletContext]=\"{ group: group }\"> </span> <span *ngIf=\"!selectComponent.groupTemplate\"> {{group.text}} </span> <div *ngIf=\"selectComponent.groupRightTemplate\" item-right> <div [ngTemplateOutlet]=\"selectComponent.groupRightTemplate\" [ngTemplateOutletContext]=\"{ group: group }\"> </div> </div> </ion-item-divider> <button ion-item detail-none *ngFor=\"let item of group.items\" (click)=\"_select(item)\" class=\"select-searchable-item\" [ngClass]=\"{ 'select-searchable-item-is-selected': selectComponent._isItemSelected(item), 'select-searchable-item-is-disabled': selectComponent._isItemDisabled(item) }\" [disabled]=\"selectComponent._isItemDisabled(item)\"> <ion-icon [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\" [color]=\"selectComponent._isItemSelected(item) ? 'primary' : 'daek'\" item-left> </ion-icon> <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. --> <span *ngIf=\"selectComponent.itemTemplate\" [ngTemplateOutlet]=\"selectComponent.itemTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"> </span> <span *ngIf=\"!selectComponent.itemTemplate\"> {{selectComponent._formatItem(item)}} </span> <div *ngIf=\"selectComponent.itemRightTemplate\" item-right> <div [ngTemplateOutlet]=\"selectComponent.itemRightTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"> </div> </div> <button *ngIf=\"selectComponent.canSaveItem\" class=\"select-searchable-item-button\" ion-button icon-only item-end outline (click)=\"selectComponent._saveItem($event, item)\"> <ion-icon name=\"md-create\"></ion-icon> </button> <button *ngIf=\"selectComponent.canDeleteItem\" class=\"select-searchable-item-button\" ion-button icon-only item-end outline (click)=\"selectComponent._deleteItemClick($event, item)\"> <ion-icon name=\"md-trash\"></ion-icon> </button> </button> </ion-item-group> </ion-list> <ion-infinite-scroll *ngIf=\"!selectComponent.hasVirtualScroll\" [enabled]=\"selectComponent.hasInfiniteScroll\" (ionInfinite)=\"_getMoreItems($event)\"> <ion-infinite-scroll-content></ion-infinite-scroll-content> </ion-infinite-scroll> <ion-list no-margin *ngIf=\"selectComponent.hasVirtualScroll && selectComponent._filteredGroups.length\" [virtualScroll]=\"selectComponent._filteredGroups[0].items\" [approxItemHeight]=\"selectComponent.virtualScrollApproxItemHeight\" [approxItemWidth]=\"selectComponent.virtualScrollApproxItemWidth\" [bufferRatio]=\"selectComponent.virtualScrollBufferRatio\" [headerFn]=\"selectComponent.virtualScrollHeaderFn\"> <ion-item-divider *virtualHeader=\"let header\" [color]=\"selectComponent.groupColor ? selectComponent.groupColor : null\"> {{header}} </ion-item-divider> <button ion-item detail-none *virtualItem=\"let item\" (click)=\"_select(item)\" class=\"select-searchable-item\" [ngClass]=\"{ 'select-searchable-item-is-selected': selectComponent._isItemSelected(item), 'select-searchable-item-is-disabled': selectComponent._isItemDisabled(item) }\" [disabled]=\"selectComponent._isItemDisabled(item)\"> <ion-icon [name]=\"selectComponent._isItemSelected(item) ? 'checkmark-circle' : 'radio-button-off'\" [color]=\"selectComponent._isItemSelected(item) ? 'primary' : 'daek'\" item-left> </ion-icon> <!-- Use span for itemTemplate to preserve Ionic ellipsis styles. --> <span *ngIf=\"selectComponent.itemTemplate\" [ngTemplateOutlet]=\"selectComponent.itemTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"> </span> <span *ngIf=\"!selectComponent.itemTemplate\"> {{selectComponent._formatItem(item)}} </span> <div *ngIf=\"selectComponent.itemRightTemplate\" item-right> <div [ngTemplateOutlet]=\"selectComponent.itemRightTemplate\" [ngTemplateOutletContext]=\"{ item: item }\"> </div> </div> <button *ngIf=\"selectComponent.canSaveItem\" class=\"select-searchable-item-button\" ion-button icon-only item-end outline (click)=\"selectComponent._saveItem($event, item)\"> <ion-icon name=\"md-create\"></ion-icon> </button> <button *ngIf=\"selectComponent.canDeleteItem\" class=\"select-searchable-item-button\" ion-button icon-only item-end outline (click)=\"selectComponent._deleteItemClick($event, item)\"> <ion-icon name=\"md-trash\"></ion-icon> </button> </button> </ion-list> <div *ngIf=\"!selectComponent._filteredGroups.length || !selectComponent._filteredGroups[0].items.length\"> <span *ngIf=\"selectComponent.searchFailTemplate\" [ngTemplateOutlet]=\"selectComponent.searchFailTemplate\"> </span> <div *ngIf=\"!selectComponent.searchFailTemplate\" margin> {{selectComponent.searchFailText}} </div> </div> <div class=\"select-searchable-add-item-template\" *ngIf=\"selectComponent._isAddItemTemplateVisible\" [ngStyle]=\"{ 'top.px': _content.contentTop }\"> <span [ngTemplateOutlet]=\"selectComponent.addItemTemplate\" [ngTemplateOutletContext]=\"{ item: selectComponent._itemToAdd, isAdd: selectComponent._itemToAdd === null }\"> </span> </div> </ion-content> <ion-footer *ngIf=\"selectComponent._footerButtonsCount > 0\" [ngStyle]=\"{ 'visibility': selectComponent._isFooterVisible ? 'initial' : 'hidden' }\"> <ion-toolbar> <ion-row> <ion-col *ngIf=\"selectComponent.canClear\" [attr.col-4]=\"selectComponent._footerButtonsCount === 3 ? '' : null\" [attr.col-6]=\"selectComponent._footerButtonsCount === 2 ? '' : null\" [attr.col-12]=\"selectComponent._footerButtonsCount === 1 ? '' : null\"> <button ion-button full no-margin (click)=\"_clear()\" [disabled]=\"!selectComponent._selectedItems.length\"> {{selectComponent.clearButtonText}} </button> </ion-col> <ion-col *ngIf=\"selectComponent.canAddItem\" [attr.col-4]=\"selectComponent._footerButtonsCount === 3 ? '' : null\" [attr.col-6]=\"selectComponent._footerButtonsCount === 2 ? '' : null\" [attr.col-12]=\"selectComponent._footerButtonsCount === 1 ? '' : null\"> <button ion-button full no-margin (click)=\"selectComponent._addItemClick()\"> {{selectComponent.addButtonText}} </button> </ion-col> <ion-col *ngIf=\"selectComponent.isMultiple\" [attr.col-4]=\"selectComponent._footerButtonsCount === 3 ? '' : null\" [attr.col-6]=\"selectComponent._footerButtonsCount === 2 ? '' : null\" [attr.col-12]=\"selectComponent._footerButtonsCount === 1 ? '' : null\"> <button ion-button full no-margin (click)=\"_ok()\" [disabled]=\"!selectComponent.isOkButtonEnabled\"> {{selectComponent.okButtonText}} </button> </ion-col> </ion-row> </ion-toolbar> </ion-footer> "
                },] },
    ];
    /** @nocollapse */
    SelectSearchablePageComponent.ctorParameters = function () { return [
        { type: NavParams, },
        { type: ViewController, },
    ]; };
    SelectSearchablePageComponent.propDecorators = {
        "_cssClass": [{ type: HostBinding, args: ['class.select-searchable-page',] },],
        "_canClearCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-can-clear',] },],
        "_isMultipleCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-is-multiple',] },],
        "_isSearchingCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-is-searching',] },],
        "_isAddItemTemplateVisibleCssClass": [{ type: HostBinding, args: ['class.select-searchable-page-is-add-item-template-visible',] },],
        "_isIos": [{ type: HostBinding, args: ['class.select-searchable-page-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.select-searchable-page-md',] },],
        "_searchbarComponent": [{ type: ViewChild, args: ['searchbarComponent',] },],
        "_content": [{ type: ViewChild, args: [Content,] },],
    };
    return SelectSearchablePageComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchablePlaceholderTemplateDirective = (function () {
    function SelectSearchablePlaceholderTemplateDirective() {
    }
    SelectSearchablePlaceholderTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchablePlaceholderTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchablePlaceholderTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchablePlaceholderTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableSearchFailTemplateDirective = (function () {
    function SelectSearchableSearchFailTemplateDirective() {
    }
    SelectSearchableSearchFailTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableSearchFailTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableSearchFailTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableSearchFailTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableTitleTemplateDirective = (function () {
    function SelectSearchableTitleTemplateDirective() {
    }
    SelectSearchableTitleTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableTitleTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableTitleTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableTitleTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableValueTemplateDirective = (function () {
    function SelectSearchableValueTemplateDirective() {
    }
    SelectSearchableValueTemplateDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[selectSearchableValueTemplate]',
                },] },
    ];
    /** @nocollapse */
    SelectSearchableValueTemplateDirective.ctorParameters = function () { return []; };
    return SelectSearchableValueTemplateDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectSearchableComponent = (function () {
    function SelectSearchableComponent(_modalController, ionForm, _platform, ionItem, _iterableDiffers, element) {
        this._modalController = _modalController;
        this.ionForm = ionForm;
        this._platform = _platform;
        this.ionItem = ionItem;
        this._iterableDiffers = _iterableDiffers;
        this.element = element;
        this._cssClass = true;
        this._isOnSearchEnabled = true;
        this._isEnabled = true;
        this._isOpened = false;
        this._valueItems = [];
        this._value = null;
        this._canClear = false;
        this._isMultiple = false;
        this._canAddItem = false;
        this.onItemsChange = new EventEmitter();
        this._searchText = '';
        this._hasSearchText = false;
        this._groups = [];
        this._itemsToConfirm = [];
        this._selectedItems = [];
        this._filteredGroups = [];
        this._isAddItemTemplateVisible = false;
        this._isFooterVisible = true;
        this._itemToAdd = null;
        this._footerButtonsCount = 0;
        this.items = [];
        this.itemsChange = new EventEmitter();
        this.isOkButtonEnabled = true;
        this.canSearch = false;
        this.hasInfiniteScroll = false;
        this.hasVirtualScroll = false;
        this.virtualScrollApproxItemHeight = '40px';
        this.virtualScrollApproxItemWidth = '100%';
        this.virtualScrollBufferRatio = 3;
        this.virtualScrollHeaderFn = function () { return null; };
        this.searchFailText = 'No items found.';
        this.clearButtonText = 'Clear';
        this.addButtonText = 'Add';
        this.okButtonText = 'OK';
        this.closeButtonText = 'Cancel';
        this.focusSearchbar = false;
        this.onChange = new EventEmitter();
        this.onSearch = new EventEmitter();
        this.onSearchFail = new EventEmitter();
        this.onSearchSuccess = new EventEmitter();
        this.onInfiniteScroll = new EventEmitter();
        this.onOpen = new EventEmitter();
        this.onClose = new EventEmitter();
        this.searchDebounce = 250;
        this.disabledItems = [];
        this.shouldStoreItemValue = false;
        this.canSaveItem = false;
        this.canDeleteItem = false;
        this.onSaveItem = new EventEmitter();
        this.onDeleteItem = new EventEmitter();
        this.onAddItem = new EventEmitter();
        this.propagateOnChange = function (_) { };
        this.propagateOnTouched = function () { };
        if (!this.items || !this.items.length) {
            this.items = [];
        }
        this._itemsDiffer = this._iterableDiffers.find(this.items).create();
    }
    Object.defineProperty(SelectSearchableComponent.prototype, "_isMultipleCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isMultiple;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "_hasValueCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.hasValue();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "_hasPlaceholderCssClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasPlaceholder;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "_shouldStoreItemValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this.shouldStoreItemValue && this._hasObjects;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "searchText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isSearching", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isSearching;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "hasSearchText", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasSearchText;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            // Set value items.
            this._valueItems.splice(0, this._valueItems.length);
            if (this.isMultiple) {
                if (value && value.length) {
                    Array.prototype.push.apply(this._valueItems, value);
                }
            }
            else {
                if (!this._isNullOrWhiteSpace(value)) {
                    this._valueItems.push(value);
                }
            }
            this._setIonItemHasValue();
            this._setHasPlaceholder();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isEnabled;
        },
        set: /**
         * @param {?} isEnabled
         * @return {?}
         */
        function (isEnabled) {
            this._isEnabled = !!isEnabled;
            this.enableIonItem(this._isEnabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isOpened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOpened;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isOnSearchEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isOnSearchEnabled;
        },
        set: /**
         * @param {?} isOnSearchEnabled
         * @return {?}
         */
        function (isOnSearchEnabled) {
            this._isOnSearchEnabled = !!isOnSearchEnabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "canClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._canClear;
        },
        set: /**
         * @param {?} canClear
         * @return {?}
         */
        function (canClear) {
            this._canClear = !!canClear;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "isMultiple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._isMultiple;
        },
        set: /**
         * @param {?} isMultiple
         * @return {?}
         */
        function (isMultiple) {
            this._isMultiple = !!isMultiple;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "itemsToConfirm", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemsToConfirm;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectSearchableComponent.prototype, "canAddItem", {
        get: /**
         * @return {?}
         */
        function () {
            return this._canAddItem;
        },
        set: /**
         * @param {?} canAddItem
         * @return {?}
         */
        function (canAddItem) {
            this._canAddItem = !!canAddItem;
            this._countFooterButtons();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.initFocus = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    SelectSearchableComponent.prototype.enableIonItem = /**
     * @param {?} isEnabled
     * @return {?}
     */
    function (isEnabled) {
        if (!this.ionItem) {
            return;
        }
        this.ionItem.setElementClass('item-input-disabled', !isEnabled);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectSearchableComponent.prototype._click = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        if (!this.isEnabled || event.detail === 0) {
            // Don't continue if the click event came from a form submit.
            return;
        }
        this._labelText = this._getLabelText();
        event.preventDefault();
        event.stopPropagation();
        this.open().then(function () {
            _this.onOpen.emit({
                component: _this
            });
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectSearchableComponent.prototype._isNullOrWhiteSpace = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._setHasSearchText = /**
     * @return {?}
     */
    function () {
        this._hasSearchText = !this._isNullOrWhiteSpace(this._searchText);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._hasOnSearch = /**
     * @return {?}
     */
    function () {
        return this.isOnSearchEnabled && this.onSearch.observers.length > 0;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._hasOnSaveItem = /**
     * @return {?}
     */
    function () {
        return this.canSaveItem && this.onSaveItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._hasOnAddItem = /**
     * @return {?}
     */
    function () {
        return this.canAddItem && this.onAddItem.observers.length > 0;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._hasOnDeleteItem = /**
     * @return {?}
     */
    function () {
        return this.canDeleteItem && this.onDeleteItem.observers.length > 0;
    };
    /**
     * @param {?} selectedItem
     * @return {?}
     */
    SelectSearchableComponent.prototype._select = /**
     * @param {?} selectedItem
     * @return {?}
     */
    function (selectedItem) {
        this.value = selectedItem;
        this._emitValueChange();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._emitValueChange = /**
     * @return {?}
     */
    function () {
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._emitSearch = /**
     * @return {?}
     */
    function () {
        if (!this.canSearch) {
            return;
        }
        this.onSearch.emit({
            component: this,
            text: this._searchText
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._formatItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._isNullOrWhiteSpace(item)) {
            return null;
        }
        return this.itemTextField ? item[this.itemTextField] : item.toString();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._getLabelText = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ label = this.ionItem ? this.ionItem.getNativeElement().querySelector('ion-label') : null;
        return label ? label.textContent : null;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._getItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return item[this.itemValueField];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._getStoredItemValue = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (!this._hasObjects) {
            return item;
        }
        return this._shouldStoreItemValue ? item : item[this.itemValueField];
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._filterItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._setHasSearchText();
        if (this._hasOnSearch()) {
            // Delegate filtering to the event.
            this._emitSearch();
        }
        else {
            // Default filtering.
            var /** @type {?} */ groups_1 = [];
            if (!this._searchText || !this._searchText.trim()) {
                groups_1 = this._groups;
            }
            else {
                var /** @type {?} */ filterText_1 = this._searchText.trim().toLowerCase();
                this._groups.forEach(function (group) {
                    var /** @type {?} */ items = group.items.filter(function (item) {
                        var /** @type {?} */ itemText = (_this.itemTextField ?
                            item[_this.itemTextField] : item).toString().toLowerCase();
                        return itemText.indexOf(filterText_1) !== -1;
                    });
                    if (items.length) {
                        groups_1.push({
                            value: group.value,
                            text: group.text,
                            items: items
                        });
                    }
                });
                // No items found.
                if (!groups_1.length) {
                    groups_1.push({
                        items: []
                    });
                }
            }
            this._filteredGroups = groups_1;
            if (this._areGroupsEmpty(groups_1)) {
                this.onSearchFail.emit({
                    component: this,
                    text: this._searchText
                });
            }
            else {
                this.onSearchSuccess.emit({
                    component: this,
                    text: this._searchText
                });
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._isItemDisabled = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (!this.disabledItems) {
            return;
        }
        return this.disabledItems.some(function (_item) {
            return _this._getItemValue(_item) === _this._getItemValue(item);
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._isItemSelected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        return this._selectedItems.find(function (selectedItem) {
            return _this._getItemValue(item) === _this._getStoredItemValue(selectedItem);
        }) !== undefined;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._addSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        if (this._shouldStoreItemValue) {
            this._selectedItems.push(this._getItemValue(item));
        }
        else {
            this._selectedItems.push(item);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._deleteSelectedItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        var /** @type {?} */ itemToDeleteIndex;
        this._selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this._getItemValue(item) ===
                _this._getStoredItemValue(selectedItem)) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this._selectedItems.splice(itemToDeleteIndex, 1);
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._saveItem = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnSaveItem()) {
            this.onSaveItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._deleteItemClick = /**
     * @param {?} event
     * @param {?} item
     * @return {?}
     */
    function (event, item) {
        event.stopPropagation();
        this._itemToAdd = item;
        if (this._hasOnDeleteItem()) {
            // Delegate logic to event.
            this.onDeleteItem.emit({
                component: this,
                item: this._itemToAdd
            });
        }
        else {
            this.deleteItem(this._itemToAdd);
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._addItemClick = /**
     * @return {?}
     */
    function () {
        this._itemToAdd = null;
        if (this._hasOnAddItem()) {
            this.onAddItem.emit({
                component: this
            });
        }
        else {
            this.showAddItemTemplate();
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._countFooterButtons = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ footerButtonsCount = 0;
        if (this.canClear) {
            footerButtonsCount++;
        }
        if (this.isMultiple) {
            footerButtonsCount++;
        }
        if (this.canAddItem) {
            footerButtonsCount++;
        }
        this._footerButtonsCount = footerButtonsCount;
    };
    /**
     * @param {?} groups
     * @return {?}
     */
    SelectSearchableComponent.prototype._areGroupsEmpty = /**
     * @param {?} groups
     * @return {?}
     */
    function (groups) {
        return groups.length === 0 || groups.every(function (group) {
            return !group.items || group.items.length === 0;
        });
    };
    /**
     * @param {?} items
     * @return {?}
     */
    SelectSearchableComponent.prototype._setItems = /**
     * @param {?} items
     * @return {?}
     */
    function (items) {
        var _this = this;
        // It's important to have an empty starting group with empty items (groups[0].items),
        // because we bind to it when using VirtualScroll.
        // See https://github.com/eakoriakin/ionic-select-searchable/issues/70.
        var /** @type {?} */ groups = [{
                items: items || []
            }];
        if (items && items.length) {
            if (this._hasGroups) {
                groups = [];
                items.forEach(function (item) {
                    var /** @type {?} */ groupValue = _this._getPropertyValue(item, _this.groupValueField), /** @type {?} */
                    group = groups.find(function (_group) { return _group.value === groupValue; });
                    if (group) {
                        group.items.push(item);
                    }
                    else {
                        groups.push({
                            value: groupValue,
                            text: _this._getPropertyValue(item, _this.groupTextField),
                            items: [item]
                        });
                    }
                });
            }
        }
        this._groups = groups;
        this._filteredGroups = this._groups;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype._formatValueItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        if (this._shouldStoreItemValue) {
            // Get item text from the list as we store it's value only.
            var /** @type {?} */ selectedItem = this.items.find(function (_item) {
                return _item[_this.itemValueField] === item;
            });
            return this._formatItem(selectedItem);
        }
        else {
            return this._formatItem(item);
        }
    };
    /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    SelectSearchableComponent.prototype._getPropertyValue = /**
     * @param {?} object
     * @param {?} property
     * @return {?}
     */
    function (object, property) {
        if (!property) {
            return null;
        }
        return property.split('.').reduce(function (_object, _property) {
            return _object ? _object[_property] : null;
        }, object);
    };
    /**
     * @param {?} hasFocus
     * @return {?}
     */
    SelectSearchableComponent.prototype._setIonItemHasFocus = /**
     * @param {?} hasFocus
     * @return {?}
     */
    function (hasFocus) {
        if (!this.ionItem) {
            return;
        }
        // Apply focus CSS class for proper stylying of ion-item/ion-label.
        this.ionItem.setElementClass('item-input-has-focus', hasFocus);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._setIonItemHasValue = /**
     * @return {?}
     */
    function () {
        if (!this.ionItem) {
            return;
        }
        // Apply value CSS class for proper stylying of ion-item/ion-label.
        this.ionItem.setElementClass('item-input-has-value', this.hasValue());
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._setHasPlaceholder = /**
     * @return {?}
     */
    function () {
        this._hasPlaceholder = !this.hasValue() &&
            (!this._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate) ?
            true : false;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype._setIonItemValidityClasses = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.ionItem) {
            return;
        }
        // Use requestAnimationFrame() here as Ionic does.
        // This probably helps make animation smooth.
        // See https://github.com/rintoj/angular2-virtual-scroll/issues/33.
        requestAnimationFrame(function () {
            var /** @type {?} */ classList = _this.element.nativeElement.classList;
            _this.ionItem.setElementClass('ng-invalid', false);
            _this.ionItem.setElementClass('ng-valid', false);
            _this.ionItem.setElementClass('ng-touched', false);
            _this.ionItem.setElementClass('ng-untouched', false);
            _this.ionItem.setElementClass('ng-dirty', false);
            _this.ionItem.setElementClass('ng-pristine', false);
            classList.forEach(function (className) {
                if (className === 'ng-invalid') {
                    _this.ionItem.setElementClass('ng-invalid', true);
                }
                if (className === 'ng-valid') {
                    _this.ionItem.setElementClass('ng-valid', true);
                }
                if (className === 'ng-touched') {
                    _this.ionItem.setElementClass('ng-touched', true);
                }
                if (className === 'ng-untouched') {
                    _this.ionItem.setElementClass('ng-untouched', true);
                }
                if (className === 'ng-dirty') {
                    _this.ionItem.setElementClass('ng-dirty', true);
                }
                if (className === 'ng-pristine') {
                    _this.ionItem.setElementClass('ng-pristine', true);
                }
            });
        });
    };
    /**
     * @param {?} isVisible
     * @return {?}
     */
    SelectSearchableComponent.prototype._toggleAddItemTemplate = /**
     * @param {?} isVisible
     * @return {?}
     */
    function (isVisible) {
        // It should be possible to show/hide the template regardless
        // canAddItem or canSaveItem parameters, so we could implement some
        // custom behavior. E.g. adding item when search fails using onSearchFail event.
        if (!this.addItemTemplate) {
            return;
        }
        // To make SaveItemTemplate visible we just position it over list using CSS.
        // We don't hide list with *ngIf or [hidden] to prevent its scroll position.
        this._isAddItemTemplateVisible = isVisible;
        this._isFooterVisible = !isVisible;
    };
    /* ControlValueAccessor */
    /**
     * @param {?} value
     * @return {?}
     */
    SelectSearchableComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this._setIonItemValidityClasses();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectSearchableComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateOnChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectSearchableComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.propagateOnTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectSearchableComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.isEnabled = !isDisabled;
        // We could have used _setIonItemValidityClasses() to update classes,
        // but shouldn't as it will remove ng-valid class and probably some other
        // ng classes, which will in turn break Ionic item highlighting styles.
    };
    /* .ControlValueAccessor */
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._isIos = this._platform.is('ios');
        this._isMD = !this._isIos;
        this._hasObjects = !this._isNullOrWhiteSpace(this.itemValueField);
        // Grouping is supported for objects only.
        // Ionic VirtualScroll has it's own implementation of grouping.
        this._hasGroups = Boolean(this._hasObjects && this.groupValueField && !this.hasVirtualScroll);
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-input', true);
            this.ionItem.setElementClass('item-select-searchable', true);
        }
        this.enableIonItem(this.isEnabled);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.ionForm.deregister(this);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ itemsChanges = this._itemsDiffer.diff(this.items);
        if (itemsChanges) {
            this._setItems(this.items);
            this.value = this.value;
            this.onItemsChange.emit({
                component: this
            });
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype.addItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var /** @type {?} */ self = this;
        // Adding item triggers onItemsChange.
        // Return a promise that resolves when onItemsChange finishes.
        // We need a promise os user could do something after item has been added,
        // e.g. use search() method to find the added item.
        this.items.unshift(item);
        // Close any running subscription.
        if (this._addItemObservable) {
            this._addItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._addItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._addItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._addItemObservable.unsubscribe();
                reject();
            });
        });
    };
    /**
     * @param {?} item
     * @return {?}
     */
    SelectSearchableComponent.prototype.deleteItem = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        var _this = this;
        var /** @type {?} */ self = this, /** @type {?} */
        hasValueChanged = false;
        // Remove deleted item from selected items.
        if (this._selectedItems) {
            this._selectedItems = this._selectedItems.filter(function (_item) {
                return _this._getItemValue(item) !== _this._getStoredItemValue(_item);
            });
        }
        // Remove deleted item from value.
        if (this.value) {
            if (this.isMultiple) {
                var /** @type {?} */ values = this.value.filter(function (value) {
                    return value.id !== item.id;
                });
                if (values.length !== this.value.length) {
                    this.value = values;
                    hasValueChanged = true;
                }
            }
            else {
                if (item === this.value) {
                    this.value = null;
                    hasValueChanged = true;
                }
            }
        }
        if (hasValueChanged) {
            this._emitValueChange();
        }
        // Remove deleted item from list.
        var /** @type {?} */ items = this.items.filter(function (_item) {
            return _item.id !== item.id;
        });
        // Refresh items on parent component.
        this.itemsChange.emit(items);
        // Refresh list.
        this._setItems(items);
        this.onItemsChange.emit({
            component: this
        });
        // Close any running subscription.
        if (this._deleteItemObservable) {
            this._deleteItemObservable.unsubscribe();
        }
        return new Promise(function (resolve, reject) {
            // Complete callback isn't fired for some reason,
            // so unsubscribe in both success and fail cases.
            self._deleteItemObservable = self.onItemsChange.asObservable().subscribe(function () {
                self._deleteItemObservable.unsubscribe();
                resolve();
            }, function () {
                self._deleteItemObservable.unsubscribe();
                reject();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.hasValue = /**
     * @return {?}
     */
    function () {
        if (this.isMultiple) {
            return this._valueItems.length !== 0;
        }
        else {
            return this._valueItems.length !== 0 && !this._isNullOrWhiteSpace(this._valueItems[0]);
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || self._isOpened) {
                reject('SelectSearchable is disabled or already opened.');
                return;
            }
            self._filterItems();
            self._isOpened = true;
            self._modal = self._modalController.create(SelectSearchablePageComponent, {
                selectComponent: self
            });
            self._modal.present().then(function () {
                // Set focus after page has opened to avoid flickering of focus highlighting
                // before page opening.
                self._setIonItemHasFocus(true);
                resolve();
            });
            self._modal.onWillDismiss(function () {
                self._setIonItemHasFocus(false);
            });
            self._modal.onDidDismiss(function (data, role) {
                self._isOpened = false;
                if (self.isMultiple) {
                    self._itemsToConfirm = [];
                }
                // Closed by clicking on backdrop outside modal.
                if (role === 'backdrop') {
                    self.onClose.emit({
                        component: self
                    });
                }
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isEnabled || !self._isOpened) {
                reject('SelectSearchable is disabled or already closed.');
                return;
            }
            self.propagateOnTouched();
            self._setIonItemValidityClasses();
            // Delete old instance of infinite scroll, to avoid "Cannot read property 'enableEvents' of null"
            // error from it when page is opened next time.
            self._infiniteScroll = null;
            self._isOpened = false;
            self._itemToAdd = null;
            self._modal.dismiss().then(function () {
                self._setIonItemHasFocus(false);
                self.hideAddItemTemplate();
                resolve();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.value = this.isMultiple ? [] : null;
        if (this.isMultiple) {
            this._itemsToConfirm = [];
        }
        this.propagateOnChange(this.value);
        this._setIonItemValidityClasses();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.scrollToTop = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('SelectSearchable content cannot be scrolled.');
                return;
            }
            self._selectPageComponent._content.scrollToTop().then(function () {
                resolve();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.scrollToBottom = /**
     * @return {?}
     */
    function () {
        var /** @type {?} */ self = this;
        return new Promise(function (resolve, reject) {
            if (!self._isOpened) {
                reject('SelectSearchable content cannot be scrolled.');
                return;
            }
            self._selectPageComponent._content.scrollToBottom().then(function () {
                resolve();
            });
        });
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.startSearch = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.showLoading();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.endSearch = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this.hideLoading();
        // When inside Ionic Modal and onSearch event is used,
        // ngDoCheck() doesn't work as _itemsDiffer fails to detect changes.
        // See https://github.com/eakoriakin/ionic-select-searchable/issues/44.
        // Refresh items manually.
        this._setItems(this.items);
        if (this._areGroupsEmpty(this._filteredGroups)) {
            this.onSearchFail.emit({
                component: this,
                text: this._searchText
            });
        }
        else {
            this.onSearchSuccess.emit({
                component: this,
                text: this._searchText
            });
        }
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.enableInfiniteScroll = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(true);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.disableInfiniteScroll = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.enable(false);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.endInfiniteScroll = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled || !this._infiniteScroll) {
            return;
        }
        this._infiniteScroll.complete();
        this._setItems(this.items);
    };
    /**
     * @param {?} text
     * @return {?}
     */
    SelectSearchableComponent.prototype.search = /**
     * @param {?} text
     * @return {?}
     */
    function (text) {
        if (!this._isEnabled || !this._isOpened || !this.canSearch) {
            return;
        }
        this._searchText = text;
        this._setHasSearchText();
        this._filterItems();
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.showLoading = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = true;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.hideLoading = /**
     * @return {?}
     */
    function () {
        if (!this._isEnabled) {
            return;
        }
        this._isSearching = false;
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.showAddItemTemplate = /**
     * @return {?}
     */
    function () {
        this._toggleAddItemTemplate(true);
    };
    /**
     * @return {?}
     */
    SelectSearchableComponent.prototype.hideAddItemTemplate = /**
     * @return {?}
     */
    function () {
        this._toggleAddItemTemplate(false);
    };
    SelectSearchableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'select-searchable',
                    template: "<div class=\"select-searchable-value\"> <div *ngIf=\"valueTemplate && _valueItems.length && isMultiple\" [ngTemplateOutlet]=\"valueTemplate\" [ngTemplateOutletContext]=\"{ value: _valueItems }\"> </div> <div class=\"select-searchable-value-item\" *ngIf=\"valueTemplate && _valueItems.length && !isMultiple\"> <div [ngTemplateOutlet]=\"valueTemplate\" [ngTemplateOutletContext]=\"{ value: _valueItems[0] }\"> </div> </div> <span *ngIf=\"!valueTemplate && _valueItems.length\"> <div class=\"select-searchable-value-item\" *ngFor=\"let valueItem of _valueItems\"> {{_formatValueItem(valueItem)}} </div> </span> <div *ngIf=\"_hasPlaceholder && placeholderTemplate\" class=\"select-searchable-value-item\"> <div [ngTemplateOutlet]=\"placeholderTemplate\"> </div> </div> <div class=\"select-searchable-value-item\" *ngIf=\"_hasPlaceholder && !placeholderTemplate\"> {{placeholder}} </div> </div> <div class=\"select-searchable-icon\"> <div class=\"select-searchable-icon-inner\"></div> </div> <button aria-haspopup=\"true\" ion-button=\"item-cover\" class=\"item-cover\" [disabled]=\"!isEnabled\"> </button> ",
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return SelectSearchableComponent; }),
                            multi: true
                        }]
                },] },
    ];
    /** @nocollapse */
    SelectSearchableComponent.ctorParameters = function () { return [
        { type: ModalController, },
        { type: Form, },
        { type: Platform, },
        { type: Item, decorators: [{ type: Optional },] },
        { type: IterableDiffers, },
        { type: ElementRef, },
    ]; };
    SelectSearchableComponent.propDecorators = {
        "_cssClass": [{ type: HostBinding, args: ['class.select-searchable',] },],
        "_isIos": [{ type: HostBinding, args: ['class.select-searchable-ios',] },],
        "_isMD": [{ type: HostBinding, args: ['class.select-searchable-md',] },],
        "_isMultipleCssClass": [{ type: HostBinding, args: ['class.select-searchable-is-multiple',] },],
        "_hasValueCssClass": [{ type: HostBinding, args: ['class.select-searchable-has-value',] },],
        "_hasPlaceholderCssClass": [{ type: HostBinding, args: ['class.select-searchable-has-placeholder',] },],
        "items": [{ type: Input },],
        "itemsChange": [{ type: Output },],
        "isEnabled": [{ type: HostBinding, args: ['class.select-searchable-is-enabled',] }, { type: Input, args: ['isEnabled',] },],
        "isOkButtonEnabled": [{ type: Input, args: ['isOkButtonEnabled',] },],
        "itemValueField": [{ type: Input },],
        "itemTextField": [{ type: Input },],
        "groupValueField": [{ type: Input },],
        "groupTextField": [{ type: Input },],
        "canSearch": [{ type: Input },],
        "isOnSearchEnabled": [{ type: Input, args: ['isOnSearchEnabled',] },],
        "canClear": [{ type: HostBinding, args: ['class.select-searchable-can-clear',] }, { type: Input, args: ['canClear',] },],
        "hasInfiniteScroll": [{ type: Input },],
        "hasVirtualScroll": [{ type: Input },],
        "virtualScrollApproxItemHeight": [{ type: Input },],
        "virtualScrollApproxItemWidth": [{ type: Input },],
        "virtualScrollBufferRatio": [{ type: Input },],
        "virtualScrollHeaderFn": [{ type: Input },],
        "searchPlaceholder": [{ type: Input },],
        "placeholder": [{ type: Input },],
        "isMultiple": [{ type: Input, args: ['isMultiple',] },],
        "searchFailText": [{ type: Input },],
        "clearButtonText": [{ type: Input },],
        "addButtonText": [{ type: Input },],
        "okButtonText": [{ type: Input },],
        "closeButtonText": [{ type: Input },],
        "focusSearchbar": [{ type: Input },],
        "headerColor": [{ type: Input },],
        "groupColor": [{ type: Input },],
        "onChange": [{ type: Output },],
        "onSearch": [{ type: Output },],
        "onSearchFail": [{ type: Output },],
        "onSearchSuccess": [{ type: Output },],
        "onInfiniteScroll": [{ type: Output },],
        "onOpen": [{ type: Output },],
        "onClose": [{ type: Output },],
        "valueTemplate": [{ type: ContentChild, args: [SelectSearchableValueTemplateDirective, { read: TemplateRef },] },],
        "itemTemplate": [{ type: ContentChild, args: [SelectSearchableItemTemplateDirective, { read: TemplateRef },] },],
        "itemRightTemplate": [{ type: ContentChild, args: [SelectSearchableItemRightTemplateDirective, { read: TemplateRef },] },],
        "titleTemplate": [{ type: ContentChild, args: [SelectSearchableTitleTemplateDirective, { read: TemplateRef },] },],
        "placeholderTemplate": [{ type: ContentChild, args: [SelectSearchablePlaceholderTemplateDirective, { read: TemplateRef },] },],
        "messageTemplate": [{ type: ContentChild, args: [SelectSearchableMessageTemplateDirective, { read: TemplateRef },] },],
        "groupTemplate": [{ type: ContentChild, args: [SelectSearchableGroupTemplateDirective, { read: TemplateRef },] },],
        "groupRightTemplate": [{ type: ContentChild, args: [SelectSearchableGroupRightTemplateDirective, { read: TemplateRef },] },],
        "closeButtonTemplate": [{ type: ContentChild, args: [SelectSearchableCloseButtonTemplateDirective, { read: TemplateRef },] },],
        "searchFailTemplate": [{ type: ContentChild, args: [SelectSearchableSearchFailTemplateDirective, { read: TemplateRef },] },],
        "addItemTemplate": [{ type: ContentChild, args: [SelectSearchableAddItemTemplateDirective, { read: TemplateRef },] },],
        "searchDebounce": [{ type: Input },],
        "disabledItems": [{ type: Input },],
        "shouldStoreItemValue": [{ type: Input },],
        "canSaveItem": [{ type: Input },],
        "canDeleteItem": [{ type: Input },],
        "canAddItem": [{ type: Input, args: ['canAddItem',] },],
        "onSaveItem": [{ type: Output },],
        "onDeleteItem": [{ type: Output },],
        "onAddItem": [{ type: Output },],
        "_click": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return SelectSearchableComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var components = [SelectSearchableComponent, SelectSearchablePageComponent];
var SelectSearchableModule = (function () {
    function SelectSearchableModule() {
    }
    SelectSearchableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicPageModule.forChild(SelectSearchableComponent),
                        IonicPageModule.forChild(SelectSearchablePageComponent)
                    ],
                    declarations: components.concat([
                        SelectSearchableValueTemplateDirective,
                        SelectSearchableItemTemplateDirective,
                        SelectSearchableItemRightTemplateDirective,
                        SelectSearchableTitleTemplateDirective,
                        SelectSearchablePlaceholderTemplateDirective,
                        SelectSearchableMessageTemplateDirective,
                        SelectSearchableGroupTemplateDirective,
                        SelectSearchableGroupRightTemplateDirective,
                        SelectSearchableCloseButtonTemplateDirective,
                        SelectSearchableSearchFailTemplateDirective,
                        SelectSearchableAddItemTemplateDirective
                    ]),
                    exports: components.concat([
                        SelectSearchableValueTemplateDirective,
                        SelectSearchableItemTemplateDirective,
                        SelectSearchableItemRightTemplateDirective,
                        SelectSearchableTitleTemplateDirective,
                        SelectSearchablePlaceholderTemplateDirective,
                        SelectSearchableMessageTemplateDirective,
                        SelectSearchableGroupTemplateDirective,
                        SelectSearchableGroupRightTemplateDirective,
                        SelectSearchableCloseButtonTemplateDirective,
                        SelectSearchableSearchFailTemplateDirective,
                        SelectSearchableAddItemTemplateDirective
                    ]),
                    entryComponents: components
                },] },
    ];
    /** @nocollapse */
    SelectSearchableModule.ctorParameters = function () { return []; };
    return SelectSearchableModule;
}());

export { SelectSearchableModule, SelectSearchableAddItemTemplateDirective, SelectSearchableCloseButtonTemplateDirective, SelectSearchableGroupRightTemplateDirective, SelectSearchableGroupTemplateDirective, SelectSearchableItemRightTemplateDirective, SelectSearchableItemTemplateDirective, SelectSearchableMessageTemplateDirective, SelectSearchablePageComponent, SelectSearchablePlaceholderTemplateDirective, SelectSearchableSearchFailTemplateDirective, SelectSearchableTitleTemplateDirective, SelectSearchableValueTemplateDirective, SelectSearchableComponent };
