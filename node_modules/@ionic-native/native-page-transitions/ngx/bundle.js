'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var NativePageTransitions = /** @class */ (function (_super) {
    tslib.__extends(NativePageTransitions, _super);
    function NativePageTransitions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativePageTransitions.prototype.slide = function (options) { return core.cordova(this, "slide", {}, arguments); };
    NativePageTransitions.prototype.flip = function (options) { return core.cordova(this, "flip", {}, arguments); };
    NativePageTransitions.prototype.fade = function (options) { return core.cordova(this, "fade", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.drawer = function (options) { return core.cordova(this, "drawer", { "platforms": ["iOS", "Android"] }, arguments); };
    NativePageTransitions.prototype.curl = function (options) { return core.cordova(this, "curl", { "platforms": ["iOS"] }, arguments); };
    NativePageTransitions.prototype.executePendingTransition = function () { return core.cordova(this, "executePendingTransition", {}, arguments); };
    NativePageTransitions.prototype.cancelPendingTransition = function () { return core.cordova(this, "cancelPendingTransition", {}, arguments); };
    NativePageTransitions.pluginName = "NativePageTransitions";
    NativePageTransitions.plugin = "com.telerik.plugins.nativepagetransitions";
    NativePageTransitions.pluginRef = "plugins.nativepagetransitions";
    NativePageTransitions.repo = "https://github.com/Telerik-Verified-Plugins/NativePageTransitions";
    NativePageTransitions.platforms = ["Android", "iOS", "Windows Phone 8"];
    NativePageTransitions.decorators = [
        { type: core$1.Injectable }
    ];
    return NativePageTransitions;
}(core.IonicNativePlugin));

exports.NativePageTransitions = NativePageTransitions;
