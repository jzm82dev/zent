'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');

var SocialSharing = /** @class */ (function (_super) {
    tslib.__extends(SocialSharing, _super);
    function SocialSharing() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SocialSharing.prototype.share = function (message, subject, file, url) { return core.cordova(this, "share", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SocialSharing.prototype.shareWithOptions = function (options) { return core.cordova(this, "shareWithOptions", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareVia = function (appName, message, subject, image, url) { return core.cordova(this, "canShareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaTwitter = function (message, image, url) { return core.cordova(this, "shareViaTwitter", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebook = function (message, image, url) { return core.cordova(this, "shareViaFacebook", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaFacebookWithPasteMessageHint = function (message, image, url, pasteMessageHint) { return core.cordova(this, "shareViaFacebookWithPasteMessageHint", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaInstagram = function (message, image) { return core.cordova(this, "shareViaInstagram", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsApp = function (message, image, url) { return core.cordova(this, "shareViaWhatsApp", { "successIndex": 3, "errorIndex": 4, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToReceiver = function (receiver, message, image, url) { return core.cordova(this, "shareViaWhatsAppToReceiver", { "successIndex": 4, "errorIndex": 5, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaSMS = function (messge, phoneNumber) { return core.cordova(this, "shareViaSMS", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.canShareViaEmail = function () { return core.cordova(this, "canShareViaEmail", { "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.shareViaEmail = function (message, subject, to, cc, bcc, files) { return core.cordova(this, "shareViaEmail", { "platforms": ["iOS", "Android"], "successIndex": 6, "errorIndex": 7 }, arguments); };
    SocialSharing.prototype.shareVia = function (appName, message, subject, image, url) { return core.cordova(this, "shareVia", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.prototype.setIPadPopupCoordinates = function (targetBounds) { return core.cordova(this, "setIPadPopupCoordinates", { "sync": true, "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.saveToPhotoAlbum = function (fileOrFileArray) { return core.cordova(this, "saveToPhotoAlbum", { "platforms": ["iOS"] }, arguments); };
    SocialSharing.prototype.shareViaWhatsAppToPhone = function (phone, message, fileOrFileArray, url) { return core.cordova(this, "shareViaWhatsAppToPhone", { "successIndex": 5, "errorIndex": 6, "platforms": ["iOS", "Android"] }, arguments); };
    SocialSharing.pluginName = "SocialSharing";
    SocialSharing.plugin = "cordova-plugin-x-socialsharing";
    SocialSharing.pluginRef = "plugins.socialsharing";
    SocialSharing.repo = "https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin";
    SocialSharing.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone"];
    SocialSharing.decorators = [
        { type: core$1.Injectable }
    ];
    return SocialSharing;
}(core.IonicNativePlugin));

exports.SocialSharing = SocialSharing;
