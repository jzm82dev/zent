var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, checkAvailability, cordovaInstance, instanceAvailability, instancePropertyGet, instancePropertySet, getPromise } from '@ionic-native/core';
var Contact = /** @class */ (function () {
    function Contact() {
        if (checkAvailability('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
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
    Contact.prototype.remove = function () { return cordovaInstance(this, "remove", {}, arguments); };
    Contact.prototype.save = function () {
        var _this = this;
        return (function () {
            if (instanceAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    _this._objectInstance.save(function (contact) {
                        _this._objectInstance = contact;
                        resolve(_this);
                    }, reject);
                });
            }
        })();
    };
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return instancePropertyGet(this, "id"); },
        set: function (value) { instancePropertySet(this, "id", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return instancePropertyGet(this, "displayName"); },
        set: function (value) { instancePropertySet(this, "displayName", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return instancePropertyGet(this, "name"); },
        set: function (value) { instancePropertySet(this, "name", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return instancePropertyGet(this, "nickname"); },
        set: function (value) { instancePropertySet(this, "nickname", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return instancePropertyGet(this, "phoneNumbers"); },
        set: function (value) { instancePropertySet(this, "phoneNumbers", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return instancePropertyGet(this, "emails"); },
        set: function (value) { instancePropertySet(this, "emails", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return instancePropertyGet(this, "addresses"); },
        set: function (value) { instancePropertySet(this, "addresses", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return instancePropertyGet(this, "ims"); },
        set: function (value) { instancePropertySet(this, "ims", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return instancePropertyGet(this, "organizations"); },
        set: function (value) { instancePropertySet(this, "organizations", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return instancePropertyGet(this, "birthday"); },
        set: function (value) { instancePropertySet(this, "birthday", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return instancePropertyGet(this, "note"); },
        set: function (value) { instancePropertySet(this, "note", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return instancePropertyGet(this, "photos"); },
        set: function (value) { instancePropertySet(this, "photos", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return instancePropertyGet(this, "categories"); },
        set: function (value) { instancePropertySet(this, "categories", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return instancePropertyGet(this, "urls"); },
        set: function (value) { instancePropertySet(this, "urls", value); },
        enumerable: false,
        configurable: true
    });
    return Contact;
}());
export { Contact };
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
export { ContactName };
var ContactField = /** @class */ (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());
export { ContactField };
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
export { ContactAddress };
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
export { ContactOrganization };
var ContactFindOptions = /** @class */ (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());
export { ContactFindOptions };
var Contacts = /** @class */ (function (_super) {
    __extends(Contacts, _super);
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
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
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
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
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
}(IonicNativePlugin));
export { Contacts };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbnRhY3RzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHlIQVFMLFVBQVUsRUFDWCxNQUFNLG9CQUFvQixDQUFDOztJQXVHMUI7UUFDRSxJQUFJLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxJQUFJLEVBQUU7WUFDMUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3BEO0lBQ0gsQ0FBQztJQUdELHVCQUFLOzs7c0RBQVk7Z0JBQ2YsSUFBTSxVQUFVLEdBQVEsSUFBSSxPQUFPLEVBQUUsQ0FBQztnQkFDdEMsS0FBSyxJQUFNLElBQUksSUFBSSxLQUFJLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxLQUFLLElBQUk7d0JBQUUsT0FBTztvQkFDMUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsT0FBTyxVQUFVLENBQUM7YUFDbkI7OztJQUdELHdCQUFNO0lBS04sc0JBQUk7OztzREFBaUI7Z0JBQ25CLE9BQU8sVUFBVSxDQUFDLFVBQUMsT0FBaUIsRUFBRSxNQUFnQjtvQkFDcEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBQyxPQUFZO3dCQUNyQyxLQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQzt3QkFDL0IsT0FBTyxDQUFDLEtBQUksQ0FBQyxDQUFDO29CQUNoQixDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ2IsQ0FBQyxDQUFDLENBQUM7YUFDSjs7OzBCQS9DbUIsdUJBQUU7Ozs7OzswQkFDRixnQ0FBVzs7Ozs7OzBCQUNYLHlCQUFJOzs7Ozs7MEJBQ0osNkJBQVE7Ozs7Ozsw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QWdDLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzdGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O21CQXRZSDtFQWdXOEIsaUJBQWlCO1NBQWxDLFFBQVE7QUF5Q3JCOztHQUVHO0FBQ0gsU0FBUyxjQUFjLENBQUMsT0FBWTtJQUNsQyxJQUFNLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ2pDLEtBQUssSUFBTSxJQUFJLElBQUksT0FBTyxFQUFFO1FBQzFCLElBQUksT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVTtZQUFFLFNBQVM7UUFDbEQsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQztJQUNELE9BQU8sVUFBVSxDQUFDO0FBQ3BCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb3Jkb3ZhQ2hlY2ssXG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHksXG4gIGdldFByb21pc2UsXG59IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnksIG5hdmlnYXRvcjogYW55O1xuXG5leHBvcnQgdHlwZSBDb250YWN0RmllbGRUeXBlID1cbiAgfCAnKidcbiAgfCAnYWRkcmVzc2VzJ1xuICB8ICdiaXJ0aGRheSdcbiAgfCAnY2F0ZWdvcmllcydcbiAgfCAnY291bnRyeSdcbiAgfCAnZGVwYXJ0bWVudCdcbiAgfCAnZGlzcGxheU5hbWUnXG4gIHwgJ2VtYWlscydcbiAgfCAnbmFtZS5mYW1pbHlOYW1lJ1xuICB8ICduYW1lLmZvcm1hdHRlZCdcbiAgfCAnbmFtZS5naXZlbk5hbWUnXG4gIHwgJ25hbWUuaG9ub3JpZmljUHJlZml4J1xuICB8ICduYW1lLmhvbm9yaWZpY1N1ZmZpeCdcbiAgfCAnaWQnXG4gIHwgJ2ltcydcbiAgfCAnbG9jYWxpdHknXG4gIHwgJ25hbWUubWlkZGxlTmFtZSdcbiAgfCAnbmFtZSdcbiAgfCAnbmlja25hbWUnXG4gIHwgJ25vdGUnXG4gIHwgJ29yZ2FuaXphdGlvbnMnXG4gIHwgJ3Bob25lTnVtYmVycydcbiAgfCAncGhvdG9zJ1xuICB8ICdwb3N0YWxDb2RlJ1xuICB8ICdyZWdpb24nXG4gIHwgJ3N0cmVldEFkZHJlc3MnXG4gIHwgJ3RpdGxlJ1xuICB8ICd1cmxzJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdFByb3BlcnRpZXMge1xuICAvKiogQSBnbG9iYWxseSB1bmlxdWUgaWRlbnRpZmllci4gKi9cbiAgaWQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIgb24gQW5kcm9pZC4gKi9cbiAgcmF3SWQ/OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBuYW1lIG9mIHRoaXMgQ29udGFjdCwgc3VpdGFibGUgZm9yIGRpc3BsYXkgdG8gZW5kIHVzZXJzLiAqL1xuICBkaXNwbGF5TmFtZT86IHN0cmluZztcblxuICAvKiogQW4gb2JqZWN0IGNvbnRhaW5pbmcgYWxsIGNvbXBvbmVudHMgb2YgYSBwZXJzb25zIG5hbWUuICovXG4gIG5hbWU/OiBJQ29udGFjdE5hbWU7XG5cbiAgLyoqIEEgY2FzdWFsIG5hbWUgYnkgd2hpY2ggdG8gYWRkcmVzcyB0aGUgY29udGFjdC4gKi9cbiAgbmlja25hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIHBob25lIG51bWJlcnMuICovXG4gIHBob25lTnVtYmVycz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3MgZW1haWwgYWRkcmVzc2VzLiAqL1xuICBlbWFpbHM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGFkZHJlc3Nlcy4gKi9cbiAgYWRkcmVzc2VzPzogSUNvbnRhY3RBZGRyZXNzW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIElNIGFkZHJlc3Nlcy4gKi9cbiAgaW1zPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBvcmdhbml6YXRpb25zLiAqL1xuICBvcmdhbml6YXRpb25zPzogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcblxuICAvKiogVGhlIGJpcnRoZGF5IG9mIHRoZSBjb250YWN0LiAqL1xuICBiaXJ0aGRheT86IERhdGU7XG5cbiAgLyoqIEEgbm90ZSBhYm91dCB0aGUgY29udGFjdC4gKi9cbiAgbm90ZT86IHN0cmluZztcblxuICAvKiogQW4gYXJyYXkgb2YgdGhlIGNvbnRhY3QncyBwaG90b3MuICovXG4gIHBob3Rvcz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSB1c2VyLWRlZmluZWQgY2F0ZWdvcmllcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRhY3QuICovXG4gIGNhdGVnb3JpZXM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIHdlYiBwYWdlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRhY3QuICovXG4gIHVybHM/OiBJQ29udGFjdEZpZWxkW107XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdCBpbXBsZW1lbnRzIElDb250YWN0UHJvcGVydGllcyB7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgaWQ6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBkaXNwbGF5TmFtZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG5hbWU6IElDb250YWN0TmFtZTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuaWNrbmFtZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHBob25lTnVtYmVyczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGVtYWlsczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGFkZHJlc3NlczogSUNvbnRhY3RBZGRyZXNzW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgaW1zOiBJQ29udGFjdEZpZWxkW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgb3JnYW5pemF0aW9uczogSUNvbnRhY3RPcmdhbml6YXRpb25bXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBiaXJ0aGRheTogRGF0ZTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBub3RlOiBzdHJpbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgcGhvdG9zOiBJQ29udGFjdEZpZWxkW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgY2F0ZWdvcmllczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHVybHM6IElDb250YWN0RmllbGRbXTtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KCduYXZpZ2F0b3IuY29udGFjdHMnLCAnY3JlYXRlJywgJ0NvbnRhY3RzJykgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmF2aWdhdG9yLmNvbnRhY3RzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgY2xvbmUoKTogQ29udGFjdCB7XG4gICAgY29uc3QgbmV3Q29udGFjdDogYW55ID0gbmV3IENvbnRhY3QoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgPT09ICdpZCcpIHJldHVybjtcbiAgICAgIG5ld0NvbnRhY3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udGFjdDtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBASW5zdGFuY2VDaGVjaygpXG4gIHNhdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNhdmUoKGNvbnRhY3Q6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvbnRhY3Q7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RXJyb3Ige1xuICAvKiogRXJyb3IgY29kZSAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiBFcnJvciBtZXNzYWdlICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbnRhY3RFcnJvcjoge1xuICBuZXcgKGNvZGU6IG51bWJlcik6IElDb250YWN0RXJyb3I7XG4gIFVOS05PV05fRVJST1I6IG51bWJlcjtcbiAgSU5WQUxJRF9BUkdVTUVOVF9FUlJPUjogbnVtYmVyO1xuICBUSU1FT1VUX0VSUk9SOiBudW1iZXI7XG4gIFBFTkRJTkdfT1BFUkFUSU9OX0VSUk9SOiBudW1iZXI7XG4gIElPX0VSUk9SOiBudW1iZXI7XG4gIE5PVF9TVVBQT1JURURfRVJST1I6IG51bWJlcjtcbiAgUEVSTUlTU0lPTl9ERU5JRURfRVJST1I6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3ROYW1lIHtcbiAgLyoqIFRoZSBjb21wbGV0ZSBuYW1lIG9mIHRoZSBjb250YWN0LiAqL1xuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIGZhbWlseSBuYW1lLiAqL1xuICBmYW1pbHlOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBnaXZlbiBuYW1lLiAqL1xuICBnaXZlbk5hbWU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIG1pZGRsZSBuYW1lLiAqL1xuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBwcmVmaXggKGV4YW1wbGUgTXIuIG9yIERyLikgKi9cbiAgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBzdWZmaXggKGV4YW1wbGUgRXNxLikuICovXG4gIGhvbm9yaWZpY1N1ZmZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0TmFtZSBpbXBsZW1lbnRzIElDb250YWN0TmFtZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXG4gICAgcHVibGljIGZhbWlseU5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGdpdmVuTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgbWlkZGxlTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBob25vcmlmaWNTdWZmaXg/OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RmllbGQge1xuICAvKiogQSBzdHJpbmcgdGhhdCBpbmRpY2F0ZXMgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkLCBzdWNoIGFzIGEgcGhvbmUgbnVtYmVyIG9yIGVtYWlsIGFkZHJlc3MuICovXG4gIHZhbHVlPzogc3RyaW5nO1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0RmllbGQgY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RGaWVsZCBpbXBsZW1lbnRzIElDb250YWN0RmllbGQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgdHlwZT86IHN0cmluZywgcHVibGljIHZhbHVlPzogc3RyaW5nLCBwdWJsaWMgcHJlZj86IGJvb2xlYW4pIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RBZGRyZXNzIHtcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdEFkZHJlc3MgY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xuICAvKiogQSBzdHJpbmcgaW5kaWNhdGluZyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIFRoZSBmdWxsIGFkZHJlc3MgZm9ybWF0dGVkIGZvciBkaXNwbGF5LiAqL1xuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZnVsbCBzdHJlZXQgYWRkcmVzcy4gKi9cbiAgc3RyZWV0QWRkcmVzcz86IHN0cmluZztcbiAgLyoqIFRoZSBjaXR5IG9yIGxvY2FsaXR5LiAqL1xuICBsb2NhbGl0eT86IHN0cmluZztcbiAgLyoqIFRoZSBzdGF0ZSBvciByZWdpb24uICovXG4gIHJlZ2lvbj86IHN0cmluZztcbiAgLyoqIFRoZSB6aXAgY29kZSBvciBwb3N0YWwgY29kZS4gKi9cbiAgcG9zdGFsQ29kZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb3VudHJ5IG5hbWUuICovXG4gIGNvdW50cnk/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdEFkZHJlc3MgaW1wbGVtZW50cyBJQ29udGFjdEFkZHJlc3Mge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW4sXG4gICAgcHVibGljIHR5cGU/OiBzdHJpbmcsXG4gICAgcHVibGljIGZvcm1hdHRlZD86IHN0cmluZyxcbiAgICBwdWJsaWMgc3RyZWV0QWRkcmVzcz86IHN0cmluZyxcbiAgICBwdWJsaWMgbG9jYWxpdHk/OiBzdHJpbmcsXG4gICAgcHVibGljIHJlZ2lvbj86IHN0cmluZyxcbiAgICBwdWJsaWMgcG9zdGFsQ29kZT86IHN0cmluZyxcbiAgICBwdWJsaWMgY291bnRyeT86IHN0cmluZ1xuICApIHt9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RPcmdhbml6YXRpb24ge1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0T3JnYW5pemF0aW9uIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbiAgLyoqIEEgc3RyaW5nIHRoYXQgaW5kaWNhdGVzIHdoYXQgdHlwZSBvZiBmaWVsZCB0aGlzIGlzLCBob21lIGZvciBleGFtcGxlLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogVGhlIG5hbWUgb2YgdGhlIG9yZ2FuaXphdGlvbi4gKi9cbiAgbmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBkZXBhcnRtZW50IHRoZSBjb250cmFjdCB3b3JrcyBmb3IuICovXG4gIGRlcGFydG1lbnQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIHRpdGxlIGF0IHRoZSBvcmdhbml6YXRpb24uICovXG4gIHRpdGxlPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RPcmdhbml6YXRpb24gaW1wbGVtZW50cyBJQ29udGFjdE9yZ2FuaXphdGlvbiB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyB0eXBlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBuYW1lPzogc3RyaW5nLFxuICAgIHB1YmxpYyBkZXBhcnRtZW50Pzogc3RyaW5nLFxuICAgIHB1YmxpYyB0aXRsZT86IHN0cmluZyxcbiAgICBwdWJsaWMgcHJlZj86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG4vKiogU2VhcmNoIG9wdGlvbnMgdG8gZmlsdGVyIG5hdmlnYXRvci5jb250YWN0cy4gICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RmluZE9wdGlvbnMge1xuICAvKiogVGhlIHNlYXJjaCBzdHJpbmcgdXNlZCB0byBmaW5kIG5hdmlnYXRvci5jb250YWN0cy4gKi9cbiAgZmlsdGVyPzogc3RyaW5nO1xuICAvKiogRGV0ZXJtaW5lcyBpZiB0aGUgZmluZCBvcGVyYXRpb24gcmV0dXJucyBtdWx0aXBsZSBuYXZpZ2F0b3IuY29udGFjdHMuIERlZmF1bHRzIHRvIGZhbHNlLiAqL1xuICBtdWx0aXBsZT86IGJvb2xlYW47XG4gIC8qKiBDb250YWN0IGZpZWxkcyB0byBiZSByZXR1cm5lZCBiYWNrLiBJZiBzcGVjaWZpZWQsIHRoZSByZXN1bHRpbmcgQ29udGFjdCBvYmplY3Qgb25seSBmZWF0dXJlcyB2YWx1ZXMgZm9yIHRoZXNlIGZpZWxkcy4gKi9cbiAgZGVzaXJlZEZpZWxkcz86IHN0cmluZ1tdO1xuICAvKipcbiAgICogKEFuZHJvaWQgb25seSk6IEZpbHRlcnMgdGhlIHNlYXJjaCB0byBvbmx5IHJldHVybiBjb250YWN0cyB3aXRoIGEgcGhvbmUgbnVtYmVyIGluZm9ybWVkLlxuICAgKi9cbiAgaGFzUGhvbmVOdW1iZXI/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RGaW5kT3B0aW9ucyBpbXBsZW1lbnRzIElDb250YWN0RmluZE9wdGlvbnMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZmlsdGVyPzogc3RyaW5nLFxuICAgIHB1YmxpYyBtdWx0aXBsZT86IGJvb2xlYW4sXG4gICAgcHVibGljIGRlc2lyZWRGaWVsZHM/OiBzdHJpbmdbXSxcbiAgICBwdWJsaWMgaGFzUGhvbmVOdW1iZXI/OiBib29sZWFuXG4gICkge31cbn1cblxuLyoqXG4gKiBAbmFtZSBDb250YWN0c1xuICogQHByZW1pZXIgY29udGFjdHNcbiAqIEBkZXNjcmlwdGlvblxuICogQWNjZXNzIGFuZCBtYW5hZ2UgQ29udGFjdHMgb24gdGhlIGRldmljZS5cbiAqXG4gKiBAZGVwcmVjYXRlZFxuICogQHVzYWdlXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgQ29udGFjdHMsIENvbnRhY3QsIENvbnRhY3RGaWVsZCwgQ29udGFjdE5hbWUgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvbnRhY3RzL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb250YWN0czogQ29udGFjdHMpIHsgfVxuICpcbiAqIGxldCBjb250YWN0OiBDb250YWN0ID0gdGhpcy5jb250YWN0cy5jcmVhdGUoKTtcbiAqXG4gKiBjb250YWN0Lm5hbWUgPSBuZXcgQ29udGFjdE5hbWUobnVsbCwgJ1NtaXRoJywgJ0pvaG4nKTtcbiAqIGNvbnRhY3QucGhvbmVOdW1iZXJzID0gW25ldyBDb250YWN0RmllbGQoJ21vYmlsZScsICc2NDcxMjM0NTY3JyldO1xuICogY29udGFjdC5zYXZlKCkudGhlbihcbiAqICAgKCkgPT4gY29uc29sZS5sb2coJ0NvbnRhY3Qgc2F2ZWQhJywgY29udGFjdCksXG4gKiAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzYXZpbmcgY29udGFjdC4nLCBlcnJvcilcbiAqICk7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogQ29udGFjdFxuICogQGludGVyZmFjZXNcbiAqIElDb250YWN0UHJvcGVydGllc1xuICogSUNvbnRhY3RFcnJvclxuICogSUNvbnRhY3ROYW1lXG4gKiBJQ29udGFjdEZpZWxkXG4gKiBJQ29udGFjdEFkZHJlc3NcbiAqIElDb250YWN0T3JnYW5pemF0aW9uXG4gKiBJQ29udGFjdEZpbmRPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ29udGFjdHMnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb250YWN0cycsXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb250YWN0cycsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNvbnRhY3RzJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FuZHJvaWQnLFxuICAgICdCbGFja0JlcnJ5IDEwJyxcbiAgICAnQnJvd3NlcicsXG4gICAgJ0ZpcmVmb3ggT1MnLFxuICAgICdpT1MnLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyA4JyxcbiAgICAnV2luZG93cyBQaG9uZScsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RzIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogQ3JlYXRlIGEgc2luZ2xlIGNvbnRhY3QuXG4gICAqIEByZXR1cm5zIHtDb250YWN0fSBSZXR1cm5zIGEgQ29udGFjdCBvYmplY3RcbiAgICovXG4gIGNyZWF0ZSgpOiBDb250YWN0IHtcbiAgICByZXR1cm4gbmV3IENvbnRhY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggZm9yIGNvbnRhY3RzIGluIHRoZSBDb250YWN0cyBsaXN0LlxuICAgKiBAcGFyYW0ge0NvbnRhY3RGaWVsZFR5cGVbXX0gZmllbGRzIENvbnRhY3QgZmllbGRzIHRvIGJlIHVzZWQgYXMgYSBzZWFyY2ggcXVhbGlmaWVyXG4gICAqIEBwYXJhbSB7SUNvbnRhY3RGaW5kT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgZm9yIHRoZSBxdWVyeVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250YWN0W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNlYXJjaCByZXN1bHRzIChhbiBhcnJheSBvZiBDb250YWN0IG9iamVjdHMpXG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgZmluZChmaWVsZHM6IENvbnRhY3RGaWVsZFR5cGVbXSwgb3B0aW9ucz86IElDb250YWN0RmluZE9wdGlvbnMpOiBQcm9taXNlPENvbnRhY3RbXT4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xuICAgICAgbmF2aWdhdG9yLmNvbnRhY3RzLmZpbmQoXG4gICAgICAgIGZpZWxkcyxcbiAgICAgICAgKGNvbnRhY3RzOiBhbnlbXSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoY29udGFjdHMubWFwKHByb2Nlc3NDb250YWN0KSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdCxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWxlY3QgYSBzaW5nbGUgQ29udGFjdC5cbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udGFjdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2VsZWN0ZWQgQ29udGFjdFxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIHBpY2tDb250YWN0KCk6IFByb21pc2U8Q29udGFjdD4ge1xuICAgIHJldHVybiBnZXRQcm9taXNlKChyZXNvbHZlOiBGdW5jdGlvbiwgcmVqZWN0OiBGdW5jdGlvbikgPT4ge1xuICAgICAgbmF2aWdhdG9yLmNvbnRhY3RzLnBpY2tDb250YWN0KChjb250YWN0OiBhbnkpID0+IHJlc29sdmUocHJvY2Vzc0NvbnRhY3QoY29udGFjdCkpLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5mdW5jdGlvbiBwcm9jZXNzQ29udGFjdChjb250YWN0OiBhbnkpIHtcbiAgY29uc3QgbmV3Q29udGFjdCA9IG5ldyBDb250YWN0KCk7XG4gIGZvciAoY29uc3QgcHJvcCBpbiBjb250YWN0KSB7XG4gICAgaWYgKHR5cGVvZiBjb250YWN0W3Byb3BdID09PSAnZnVuY3Rpb24nKSBjb250aW51ZTtcbiAgICBuZXdDb250YWN0W3Byb3BdID0gY29udGFjdFtwcm9wXTtcbiAgfVxuICByZXR1cm4gbmV3Q29udGFjdDtcbn1cbiJdfQ==