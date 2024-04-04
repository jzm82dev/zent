'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var PhotoViewer = /** @class */ (function (_super) {
    tslib.__extends(PhotoViewer, _super);
    function PhotoViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewer.prototype.show = function (url, title, options) { return core.cordova(this, "show", { "sync": true }, arguments); };
    PhotoViewer.pluginName = "PhotoViewer";
    PhotoViewer.plugin = "com-sarriaroman-photoviewer";
    PhotoViewer.pluginRef = "PhotoViewer";
    PhotoViewer.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewer.platforms = ["Android", "iOS"];
    PhotoViewer.decorators = [
        { type: core$1.Injectable }
    ];
    return PhotoViewer;
}(core.IonicNativePlugin));

exports.PhotoViewer = PhotoViewer;
