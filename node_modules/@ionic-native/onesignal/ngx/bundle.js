'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

/**
 * **ANDROID** - Privacy setting for how the notification should be shown on the lockscreen of Android 5+ devices.
 */
exports.OSLockScreenVisibility = void 0;
(function (OSLockScreenVisibility) {
    /**
     * Fully visible (default)
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Public"] = 1] = "Public";
    /**
     * Contents are hidden
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Private"] = 0] = "Private";
    /**
     * Not shown
     */
    OSLockScreenVisibility[OSLockScreenVisibility["Secret"] = -1] = "Secret";
})(exports.OSLockScreenVisibility || (exports.OSLockScreenVisibility = {}));
/**
 * How the notification was displayed to the user. Part of OSNotification. See inFocusDisplaying for more information on how this is used.
 */
exports.OSDisplayType = void 0;
(function (OSDisplayType) {
    /**
     * notification is silent, or inFocusDisplaying is disabled.
     */
    OSDisplayType[OSDisplayType["None"] = 0] = "None";
    /**
     * (**DEFAULT**) - native alert dialog display.
     */
    OSDisplayType[OSDisplayType["InAppAlert"] = 1] = "InAppAlert";
    /**
     * native notification display.
     */
    OSDisplayType[OSDisplayType["Notification"] = 2] = "Notification";
})(exports.OSDisplayType || (exports.OSDisplayType = {}));
exports.OSActionType = void 0;
(function (OSActionType) {
    OSActionType[OSActionType["Opened"] = 0] = "Opened";
    OSActionType[OSActionType["ActionTake"] = 1] = "ActionTake";
})(exports.OSActionType || (exports.OSActionType = {}));
var OneSignal = /** @class */ (function (_super) {
    tslib.__extends(OneSignal, _super);
    function OneSignal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * constants to use in inFocusDisplaying()
         * @hidden
         */
        _this.OSInFocusDisplayOption = {
            None: 0,
            InAppAlert: 1,
            Notification: 2,
        };
        return _this;
    }
    OneSignal.prototype.startInit = function (appId, googleProjectNumber) { return core.cordova(this, "startInit", { "sync": true }, arguments); };
    OneSignal.prototype.handleNotificationReceived = function () { return core.cordova(this, "handleNotificationReceived", { "observable": true }, arguments); };
    OneSignal.prototype.handleNotificationOpened = function () { return core.cordova(this, "handleNotificationOpened", { "observable": true }, arguments); };
    OneSignal.prototype.handleInAppMessageClicked = function () { return core.cordova(this, "handleInAppMessageClicked", { "observable": true }, arguments); };
    OneSignal.prototype.iOSSettings = function (settings) { return core.cordova(this, "iOSSettings", { "sync": true, "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.endInit = function () { return core.cordova(this, "endInit", { "sync": true }, arguments); };
    OneSignal.prototype.promptForPushNotificationsWithUserResponse = function () { return core.cordova(this, "promptForPushNotificationsWithUserResponse", { "platforms": ["iOS"] }, arguments); };
    OneSignal.prototype.getTags = function () { return core.cordova(this, "getTags", {}, arguments); };
    OneSignal.prototype.getIds = function () { return core.cordova(this, "getIds", {}, arguments); };
    OneSignal.prototype.sendTag = function (key, value) { return core.cordova(this, "sendTag", { "sync": true }, arguments); };
    OneSignal.prototype.sendTags = function (json) { return core.cordova(this, "sendTags", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTag = function (key) { return core.cordova(this, "deleteTag", { "sync": true }, arguments); };
    OneSignal.prototype.deleteTags = function (keys) { return core.cordova(this, "deleteTags", { "sync": true }, arguments); };
    OneSignal.prototype.registerForPushNotifications = function () { return core.cordova(this, "registerForPushNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.enableVibrate = function (enable) { return core.cordova(this, "enableVibrate", { "sync": true }, arguments); };
    OneSignal.prototype.enableSound = function (enable) { return core.cordova(this, "enableSound", { "sync": true }, arguments); };
    OneSignal.prototype.inFocusDisplaying = function (displayOption) { return core.cordova(this, "inFocusDisplaying", { "sync": true }, arguments); };
    OneSignal.prototype.setSubscription = function (enable) { return core.cordova(this, "setSubscription", { "sync": true }, arguments); };
    OneSignal.prototype.getPermissionSubscriptionState = function () { return core.cordova(this, "getPermissionSubscriptionState", {}, arguments); };
    OneSignal.prototype.postNotification = function (notificationObj) { return core.cordova(this, "postNotification", {}, arguments); };
    OneSignal.prototype.cancelNotification = function (notificationId) { return core.cordova(this, "cancelNotification", { "sync": true }, arguments); };
    OneSignal.prototype.promptLocation = function () { return core.cordova(this, "promptLocation", { "sync": true }, arguments); };
    OneSignal.prototype.syncHashedEmail = function (email) { return core.cordova(this, "syncHashedEmail", { "sync": true }, arguments); };
    OneSignal.prototype.setLogLevel = function (logLevel) { return core.cordova(this, "setLogLevel", { "sync": true }, arguments); };
    OneSignal.prototype.setLocationShared = function (shared) { return core.cordova(this, "setLocationShared", { "sync": true }, arguments); };
    OneSignal.prototype.addPermissionObserver = function () { return core.cordova(this, "addPermissionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.addSubscriptionObserver = function () { return core.cordova(this, "addSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.setEmail = function (email, emailAuthToken) { return core.cordova(this, "setEmail", {}, arguments); };
    OneSignal.prototype.logoutEmail = function () { return core.cordova(this, "logoutEmail", {}, arguments); };
    OneSignal.prototype.addEmailSubscriptionObserver = function () { return core.cordova(this, "addEmailSubscriptionObserver", { "observable": true }, arguments); };
    OneSignal.prototype.clearOneSignalNotifications = function () { return core.cordova(this, "clearOneSignalNotifications", { "sync": true }, arguments); };
    OneSignal.prototype.setRequiresUserPrivacyConsent = function (required) { return core.cordova(this, "setRequiresUserPrivacyConsent", {}, arguments); };
    OneSignal.prototype.provideUserConsent = function (granted) { return core.cordova(this, "provideUserConsent", {}, arguments); };
    OneSignal.prototype.userProvidedPrivacyConsent = function (callback) { return core.cordova(this, "userProvidedPrivacyConsent", {}, arguments); };
    OneSignal.prototype.setExternalUserId = function (externalId) { return core.cordova(this, "setExternalUserId", {}, arguments); };
    OneSignal.prototype.removeExternalUserId = function () { return core.cordova(this, "removeExternalUserId", {}, arguments); };
    OneSignal.prototype.addTrigger = function (key, value) { return core.cordova(this, "addTrigger", { "sync": true }, arguments); };
    OneSignal.prototype.addTriggers = function (triggers) { return core.cordova(this, "addTriggers", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggerForKey = function (key) { return core.cordova(this, "removeTriggerForKey", { "sync": true }, arguments); };
    OneSignal.prototype.removeTriggersForKeys = function (keys) { return core.cordova(this, "removeTriggersForKeys", { "sync": true }, arguments); };
    OneSignal.prototype.getTriggerValueForKey = function (key) { return core.cordova(this, "getTriggerValueForKey", {}, arguments); };
    OneSignal.prototype.pauseInAppMessages = function (pause) { return core.cordova(this, "pauseInAppMessages", { "sync": true }, arguments); };
    OneSignal.pluginName = "OneSignal";
    OneSignal.plugin = "onesignal-cordova-plugin";
    OneSignal.pluginRef = "plugins.OneSignal";
    OneSignal.repo = "https://github.com/OneSignal/OneSignal-Cordova-SDK";
    OneSignal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    OneSignal.decorators = [
        { type: core$1.Injectable }
    ];
    return OneSignal;
}(core.IonicNativePlugin));

exports.OneSignal = OneSignal;
