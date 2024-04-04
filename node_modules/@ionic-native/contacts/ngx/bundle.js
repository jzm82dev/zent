'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@ionic-native/core');

var Contact = /** @class */ (function () {
    function Contact() {
        if (core.checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var _this = this;
        return (function () {
            if (core.instanceAvailability(_this) === true) {
                var newContact = new Contact();
                for (var prop in _this) {
                    if (prop === 'id')
                        return;
                    newContact[prop] = _this[prop];
                }
                return newContact;
            }
        })();
    };
    Contact.prototype.remove = function () { return core.cordovaInstance(this, "remove", {}, arguments); };
    Contact.prototype.save = function () {
        var _this = this;
        return (function () {
            if (core.instanceAvailability(_this) === true) {
                return core.getPromise(function (resolve, reject) {
                    _this._objectInstance.save(function (contact) {
                        _this._objectInstance = contact;
                        resolve(_this);
                    }, reject);
                });
            }
        })();
    };
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return core.instancePropertyGet(this, "id"); },
        set: function (value) { core.instancePropertySet(this, "id", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return core.instancePropertyGet(this, "displayName"); },
        set: function (value) { core.instancePropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return core.instancePropertyGet(this, "name"); },
        set: function (value) { core.instancePropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return core.instancePropertyGet(this, "nickname"); },
        set: function (value) { core.instancePropertySet(this, "nickname", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return core.instancePropertyGet(this, "phoneNumbers"); },
        set: function (value) { core.instancePropertySet(this, "phoneNumbers", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return core.instancePropertyGet(this, "emails"); },
        set: function (value) { core.instancePropertySet(this, "emails", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return core.instancePropertyGet(this, "addresses"); },
        set: function (value) { core.instancePropertySet(this, "addresses", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return core.instancePropertyGet(this, "ims"); },
        set: function (value) { core.instancePropertySet(this, "ims", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return core.instancePropertyGet(this, "organizations"); },
        set: function (value) { core.instancePropertySet(this, "organizations", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return core.instancePropertyGet(this, "birthday"); },
        set: function (value) { core.instancePropertySet(this, "birthday", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return core.instancePropertyGet(this, "note"); },
        set: function (value) { core.instancePropertySet(this, "note", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return core.instancePropertyGet(this, "photos"); },
        set: function (value) { core.instancePropertySet(this, "photos", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return core.instancePropertyGet(this, "categories"); },
        set: function (value) { core.instancePropertySet(this, "categories", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return core.instancePropertyGet(this, "urls"); },
        set: function (value) { core.instancePropertySet(this, "urls", value); },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
var ContactName = /** @class */ (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());
var ContactField = /** @class */ (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
var ContactAddress = /** @class */ (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());
var ContactOrganization = /** @class */ (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());
var ContactFindOptions = /** @class */ (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
var Contacts = /** @class */ (function (_super) {
    tslib.__extends(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    Contacts.prototype.create = function () {
        return new Contact();
    };
    Contacts.prototype.find = function (fields, options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve, reject) {
                    navigator.contacts.find(fields, function (contacts) {
                        resolve(contacts.map(processContact));
                    }, reject, options);
                });
            }
        })();
    };
    Contacts.prototype.pickContact = function () {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (resolve, reject) {
                    navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
                });
            }
        })();
    };
    Contacts.pluginName = "Contacts";
    Contacts.plugin = "cordova-plugin-contacts";
    Contacts.pluginRef = "navigator.contacts";
    Contacts.repo = "https://github.com/apache/cordova-plugin-contacts";
    Contacts.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Ubuntu", "Windows", "Windows 8", "Windows Phone"];
    return Contacts;
}(core.IonicNativePlugin));
/**
 * @hidden
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}

exports.Contact = Contact;
exports.ContactAddress = ContactAddress;
exports.ContactField = ContactField;
exports.ContactFindOptions = ContactFindOptions;
exports.ContactName = ContactName;
exports.ContactOrganization = ContactOrganization;
exports.Contacts = Contacts;
