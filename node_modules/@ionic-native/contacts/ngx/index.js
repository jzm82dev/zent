import { __extends } from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbnRhY3RzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx5SEFRTCxVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1RzFCO1FBQ0UsSUFBSSxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFHRCx1QkFBSzs7O3NEQUFZO2dCQUNmLElBQU0sVUFBVSxHQUFRLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBTSxJQUFJLElBQUksS0FBSSxFQUFFO29CQUN2QixJQUFJLElBQUksS0FBSyxJQUFJO3dCQUFFLE9BQU87b0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sVUFBVSxDQUFDO2FBQ25COzs7SUFHRCx3QkFBTTtJQUtOLHNCQUFJOzs7c0RBQWlCO2dCQUNuQixPQUFPLFVBQVUsQ0FBQyxVQUFDLE9BQWlCLEVBQUUsTUFBZ0I7b0JBQ3BELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBWTt3QkFDckMsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OzswQkEvQ21CLHVCQUFFOzs7Ozs7MEJBQ0YsZ0NBQVc7Ozs7OzswQkFDWCx5QkFBSTs7Ozs7OzBCQUNKLDZCQUFROzs7Ozs7MEJBQ1Is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QUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUM3RixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7OzttQkF0WUg7RUFnVzhCLGlCQUFpQjtTQUFsQyxRQUFRO0FBeUNyQjs7R0FFRztBQUNILFNBQVMsY0FBYyxDQUFDLE9BQVk7SUFDbEMsSUFBTSxVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztJQUNqQyxLQUFLLElBQU0sSUFBSSxJQUFJLE9BQU8sRUFBRTtRQUMxQixJQUFJLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVU7WUFBRSxTQUFTO1FBQ2xELFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbEM7SUFDRCxPQUFPLFVBQVUsQ0FBQztBQUNwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29yZG92YUNoZWNrLFxuICBDb3Jkb3ZhSW5zdGFuY2UsXG4gIEluc3RhbmNlQ2hlY2ssXG4gIEluc3RhbmNlUHJvcGVydHksXG4gIElvbmljTmF0aXZlUGx1Z2luLFxuICBQbHVnaW4sXG4gIGNoZWNrQXZhaWxhYmlsaXR5LFxuICBnZXRQcm9taXNlLFxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55LCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IHR5cGUgQ29udGFjdEZpZWxkVHlwZSA9XG4gIHwgJyonXG4gIHwgJ2FkZHJlc3NlcydcbiAgfCAnYmlydGhkYXknXG4gIHwgJ2NhdGVnb3JpZXMnXG4gIHwgJ2NvdW50cnknXG4gIHwgJ2RlcGFydG1lbnQnXG4gIHwgJ2Rpc3BsYXlOYW1lJ1xuICB8ICdlbWFpbHMnXG4gIHwgJ25hbWUuZmFtaWx5TmFtZSdcbiAgfCAnbmFtZS5mb3JtYXR0ZWQnXG4gIHwgJ25hbWUuZ2l2ZW5OYW1lJ1xuICB8ICduYW1lLmhvbm9yaWZpY1ByZWZpeCdcbiAgfCAnbmFtZS5ob25vcmlmaWNTdWZmaXgnXG4gIHwgJ2lkJ1xuICB8ICdpbXMnXG4gIHwgJ2xvY2FsaXR5J1xuICB8ICduYW1lLm1pZGRsZU5hbWUnXG4gIHwgJ25hbWUnXG4gIHwgJ25pY2tuYW1lJ1xuICB8ICdub3RlJ1xuICB8ICdvcmdhbml6YXRpb25zJ1xuICB8ICdwaG9uZU51bWJlcnMnXG4gIHwgJ3Bob3RvcydcbiAgfCAncG9zdGFsQ29kZSdcbiAgfCAncmVnaW9uJ1xuICB8ICdzdHJlZXRBZGRyZXNzJ1xuICB8ICd0aXRsZSdcbiAgfCAndXJscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RQcm9wZXJ0aWVzIHtcbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIuICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKiBBIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyIG9uIEFuZHJvaWQuICovXG4gIHJhd0lkPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGlzIENvbnRhY3QsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGVuZCB1c2Vycy4gKi9cbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzIG9mIGEgcGVyc29ucyBuYW1lLiAqL1xuICBuYW1lPzogSUNvbnRhY3ROYW1lO1xuXG4gIC8qKiBBIGNhc3VhbCBuYW1lIGJ5IHdoaWNoIHRvIGFkZHJlc3MgdGhlIGNvbnRhY3QuICovXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBwaG9uZSBudW1iZXJzLiAqL1xuICBwaG9uZU51bWJlcnM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGVtYWlsIGFkZHJlc3Nlcy4gKi9cbiAgZW1haWxzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBhZGRyZXNzZXMuICovXG4gIGFkZHJlc3Nlcz86IElDb250YWN0QWRkcmVzc1tdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBJTSBhZGRyZXNzZXMuICovXG4gIGltcz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3Mgb3JnYW5pemF0aW9ucy4gKi9cbiAgb3JnYW5pemF0aW9ucz86IElDb250YWN0T3JnYW5pemF0aW9uW107XG5cbiAgLyoqIFRoZSBiaXJ0aGRheSBvZiB0aGUgY29udGFjdC4gKi9cbiAgYmlydGhkYXk/OiBEYXRlO1xuXG4gIC8qKiBBIG5vdGUgYWJvdXQgdGhlIGNvbnRhY3QuICovXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFycmF5IG9mIHRoZSBjb250YWN0J3MgcGhvdG9zLiAqL1xuICBwaG90b3M/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgdXNlci1kZWZpbmVkIGNhdGVnb3JpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICBjYXRlZ29yaWVzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiB3ZWIgcGFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICB1cmxzPzogSUNvbnRhY3RGaWVsZFtdO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3QgaW1wbGVtZW50cyBJQ29udGFjdFByb3BlcnRpZXMge1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGlkOiBzdHJpbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuYW1lOiBJQ29udGFjdE5hbWU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmlja25hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBwaG9uZU51bWJlcnM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlbWFpbHM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBhZGRyZXNzZXM6IElDb250YWN0QWRkcmVzc1tdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGltczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9yZ2FuaXphdGlvbnM6IElDb250YWN0T3JnYW5pemF0aW9uW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgYmlydGhkYXk6IERhdGU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm90ZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHBob3RvczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGNhdGVnb3JpZXM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB1cmxzOiBJQ29udGFjdEZpZWxkW107XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eSgnbmF2aWdhdG9yLmNvbnRhY3RzJywgJ2NyZWF0ZScsICdDb250YWN0cycpID09PSB0cnVlKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5hdmlnYXRvci5jb250YWN0cy5jcmVhdGUoKTtcbiAgICB9XG4gIH1cblxuICBASW5zdGFuY2VDaGVjaygpXG4gIGNsb25lKCk6IENvbnRhY3Qge1xuICAgIGNvbnN0IG5ld0NvbnRhY3Q6IGFueSA9IG5ldyBDb250YWN0KCk7XG4gICAgZm9yIChjb25zdCBwcm9wIGluIHRoaXMpIHtcbiAgICAgIGlmIChwcm9wID09PSAnaWQnKSByZXR1cm47XG4gICAgICBuZXdDb250YWN0W3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld0NvbnRhY3Q7XG4gIH1cblxuICBAQ29yZG92YUluc3RhbmNlKClcbiAgcmVtb3ZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgQEluc3RhbmNlQ2hlY2soKVxuICBzYXZlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZS5zYXZlKChjb250YWN0OiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSBjb250YWN0O1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEVycm9yIHtcbiAgLyoqIEVycm9yIGNvZGUgKi9cbiAgY29kZTogbnVtYmVyO1xuICAvKiogRXJyb3IgbWVzc2FnZSAqL1xuICBtZXNzYWdlOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb250YWN0RXJyb3I6IHtcbiAgbmV3IChjb2RlOiBudW1iZXIpOiBJQ29udGFjdEVycm9yO1xuICBVTktOT1dOX0VSUk9SOiBudW1iZXI7XG4gIElOVkFMSURfQVJHVU1FTlRfRVJST1I6IG51bWJlcjtcbiAgVElNRU9VVF9FUlJPUjogbnVtYmVyO1xuICBQRU5ESU5HX09QRVJBVElPTl9FUlJPUjogbnVtYmVyO1xuICBJT19FUlJPUjogbnVtYmVyO1xuICBOT1RfU1VQUE9SVEVEX0VSUk9SOiBudW1iZXI7XG4gIFBFUk1JU1NJT05fREVOSUVEX0VSUk9SOiBudW1iZXI7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0TmFtZSB7XG4gIC8qKiBUaGUgY29tcGxldGUgbmFtZSBvZiB0aGUgY29udGFjdC4gKi9cbiAgZm9ybWF0dGVkPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBmYW1pbHkgbmFtZS4gKi9cbiAgZmFtaWx5TmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3MgZ2l2ZW4gbmFtZS4gKi9cbiAgZ2l2ZW5OYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBtaWRkbGUgbmFtZS4gKi9cbiAgbWlkZGxlTmFtZT86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3MgcHJlZml4IChleGFtcGxlIE1yLiBvciBEci4pICovXG4gIGhvbm9yaWZpY1ByZWZpeD86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3Mgc3VmZml4IChleGFtcGxlIEVzcS4pLiAqL1xuICBob25vcmlmaWNTdWZmaXg/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdE5hbWUgaW1wbGVtZW50cyBJQ29udGFjdE5hbWUge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZm9ybWF0dGVkPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmYW1pbHlOYW1lPzogc3RyaW5nLFxuICAgIHB1YmxpYyBnaXZlbk5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIG1pZGRsZU5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGhvbm9yaWZpY1ByZWZpeD86IHN0cmluZyxcbiAgICBwdWJsaWMgaG9ub3JpZmljU3VmZml4Pzogc3RyaW5nXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpZWxkIHtcbiAgLyoqIEEgc3RyaW5nIHRoYXQgaW5kaWNhdGVzIHdoYXQgdHlwZSBvZiBmaWVsZCB0aGlzIGlzLCBob21lIGZvciBleGFtcGxlLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogVGhlIHZhbHVlIG9mIHRoZSBmaWVsZCwgc3VjaCBhcyBhIHBob25lIG51bWJlciBvciBlbWFpbCBhZGRyZXNzLiAqL1xuICB2YWx1ZT86IHN0cmluZztcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdEZpZWxkIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0RmllbGQgaW1wbGVtZW50cyBJQ29udGFjdEZpZWxkIHtcbiAgY29uc3RydWN0b3IocHVibGljIHR5cGU/OiBzdHJpbmcsIHB1YmxpYyB2YWx1ZT86IHN0cmluZywgcHVibGljIHByZWY/OiBib29sZWFuKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0QWRkcmVzcyB7XG4gIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIENvbnRhY3RBZGRyZXNzIGNvbnRhaW5zIHRoZSB1c2VyJ3MgcHJlZmVycmVkIHZhbHVlLiAqL1xuICBwcmVmPzogYm9vbGVhbjtcbiAgLyoqIEEgc3RyaW5nIGluZGljYXRpbmcgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZnVsbCBhZGRyZXNzIGZvcm1hdHRlZCBmb3IgZGlzcGxheS4gKi9cbiAgZm9ybWF0dGVkPzogc3RyaW5nO1xuICAvKiogVGhlIGZ1bGwgc3RyZWV0IGFkZHJlc3MuICovXG4gIHN0cmVldEFkZHJlc3M/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY2l0eSBvciBsb2NhbGl0eS4gKi9cbiAgbG9jYWxpdHk/OiBzdHJpbmc7XG4gIC8qKiBUaGUgc3RhdGUgb3IgcmVnaW9uLiAqL1xuICByZWdpb24/OiBzdHJpbmc7XG4gIC8qKiBUaGUgemlwIGNvZGUgb3IgcG9zdGFsIGNvZGUuICovXG4gIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY291bnRyeSBuYW1lLiAqL1xuICBjb3VudHJ5Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RBZGRyZXNzIGltcGxlbWVudHMgSUNvbnRhY3RBZGRyZXNzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHByZWY/OiBib29sZWFuLFxuICAgIHB1YmxpYyB0eXBlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXG4gICAgcHVibGljIHN0cmVldEFkZHJlc3M/OiBzdHJpbmcsXG4gICAgcHVibGljIGxvY2FsaXR5Pzogc3RyaW5nLFxuICAgIHB1YmxpYyByZWdpb24/OiBzdHJpbmcsXG4gICAgcHVibGljIHBvc3RhbENvZGU/OiBzdHJpbmcsXG4gICAgcHVibGljIGNvdW50cnk/OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0T3JnYW5pemF0aW9uIHtcbiAgLyoqIFNldCB0byB0cnVlIGlmIHRoaXMgQ29udGFjdE9yZ2FuaXphdGlvbiBjb250YWlucyB0aGUgdXNlcidzIHByZWZlcnJlZCB2YWx1ZS4gKi9cbiAgcHJlZj86IGJvb2xlYW47XG4gIC8qKiBBIHN0cmluZyB0aGF0IGluZGljYXRlcyB3aGF0IHR5cGUgb2YgZmllbGQgdGhpcyBpcywgaG9tZSBmb3IgZXhhbXBsZS4gKi9cbiAgdHlwZT86IHN0cmluZztcbiAgLyoqIFRoZSBuYW1lIG9mIHRoZSBvcmdhbml6YXRpb24uICovXG4gIG5hbWU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgZGVwYXJ0bWVudCB0aGUgY29udHJhY3Qgd29ya3MgZm9yLiAqL1xuICBkZXBhcnRtZW50Pzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyB0aXRsZSBhdCB0aGUgb3JnYW5pemF0aW9uLiAqL1xuICB0aXRsZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0T3JnYW5pemF0aW9uIGltcGxlbWVudHMgSUNvbnRhY3RPcmdhbml6YXRpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcbiAgICBwdWJsaWMgbmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgZGVwYXJ0bWVudD86IHN0cmluZyxcbiAgICBwdWJsaWMgdGl0bGU/OiBzdHJpbmcsXG4gICAgcHVibGljIHByZWY/OiBib29sZWFuXG4gICkge31cbn1cblxuLyoqIFNlYXJjaCBvcHRpb25zIHRvIGZpbHRlciBuYXZpZ2F0b3IuY29udGFjdHMuICAqL1xuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEZpbmRPcHRpb25zIHtcbiAgLyoqIFRoZSBzZWFyY2ggc3RyaW5nIHVzZWQgdG8gZmluZCBuYXZpZ2F0b3IuY29udGFjdHMuICovXG4gIGZpbHRlcj86IHN0cmluZztcbiAgLyoqIERldGVybWluZXMgaWYgdGhlIGZpbmQgb3BlcmF0aW9uIHJldHVybnMgbXVsdGlwbGUgbmF2aWdhdG9yLmNvbnRhY3RzLiBEZWZhdWx0cyB0byBmYWxzZS4gKi9cbiAgbXVsdGlwbGU/OiBib29sZWFuO1xuICAvKiogQ29udGFjdCBmaWVsZHMgdG8gYmUgcmV0dXJuZWQgYmFjay4gSWYgc3BlY2lmaWVkLCB0aGUgcmVzdWx0aW5nIENvbnRhY3Qgb2JqZWN0IG9ubHkgZmVhdHVyZXMgdmFsdWVzIGZvciB0aGVzZSBmaWVsZHMuICovXG4gIGRlc2lyZWRGaWVsZHM/OiBzdHJpbmdbXTtcbiAgLyoqXG4gICAqIChBbmRyb2lkIG9ubHkpOiBGaWx0ZXJzIHRoZSBzZWFyY2ggdG8gb25seSByZXR1cm4gY29udGFjdHMgd2l0aCBhIHBob25lIG51bWJlciBpbmZvcm1lZC5cbiAgICovXG4gIGhhc1Bob25lTnVtYmVyPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0RmluZE9wdGlvbnMgaW1wbGVtZW50cyBJQ29udGFjdEZpbmRPcHRpb25zIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGZpbHRlcj86IHN0cmluZyxcbiAgICBwdWJsaWMgbXVsdGlwbGU/OiBib29sZWFuLFxuICAgIHB1YmxpYyBkZXNpcmVkRmllbGRzPzogc3RyaW5nW10sXG4gICAgcHVibGljIGhhc1Bob25lTnVtYmVyPzogYm9vbGVhblxuICApIHt9XG59XG5cbi8qKlxuICogQG5hbWUgQ29udGFjdHNcbiAqIEBwcmVtaWVyIGNvbnRhY3RzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBhbmQgbWFuYWdlIENvbnRhY3RzIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbnRhY3RzLCBDb250YWN0LCBDb250YWN0RmllbGQsIENvbnRhY3ROYW1lIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb250YWN0cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHM6IENvbnRhY3RzKSB7IH1cbiAqXG4gKiBsZXQgY29udGFjdDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuY3JlYXRlKCk7XG4gKlxuICogY29udGFjdC5uYW1lID0gbmV3IENvbnRhY3ROYW1lKG51bGwsICdTbWl0aCcsICdKb2huJyk7XG4gKiBjb250YWN0LnBob25lTnVtYmVycyA9IFtuZXcgQ29udGFjdEZpZWxkKCdtb2JpbGUnLCAnNjQ3MTIzNDU2NycpXTtcbiAqIGNvbnRhY3Quc2F2ZSgpLnRoZW4oXG4gKiAgICgpID0+IGNvbnNvbGUubG9nKCdDb250YWN0IHNhdmVkIScsIGNvbnRhY3QpLFxuICogICAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGNvbnRhY3QuJywgZXJyb3IpXG4gKiApO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIENvbnRhY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBJQ29udGFjdFByb3BlcnRpZXNcbiAqIElDb250YWN0RXJyb3JcbiAqIElDb250YWN0TmFtZVxuICogSUNvbnRhY3RGaWVsZFxuICogSUNvbnRhY3RBZGRyZXNzXG4gKiBJQ29udGFjdE9yZ2FuaXphdGlvblxuICogSUNvbnRhY3RGaW5kT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NvbnRhY3RzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY29udGFjdHMnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY29udGFjdHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jb250YWN0cycsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tCZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94IE9TJyxcbiAgICAnaU9TJyxcbiAgICAnVWJ1bnR1JyxcbiAgICAnV2luZG93cycsXG4gICAgJ1dpbmRvd3MgOCcsXG4gICAgJ1dpbmRvd3MgUGhvbmUnLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb250YWN0cyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENyZWF0ZSBhIHNpbmdsZSBjb250YWN0LlxuICAgKiBAcmV0dXJucyB7Q29udGFjdH0gUmV0dXJucyBhIENvbnRhY3Qgb2JqZWN0XG4gICAqL1xuICBjcmVhdGUoKTogQ29udGFjdCB7XG4gICAgcmV0dXJuIG5ldyBDb250YWN0KCk7XG4gIH1cblxuICAvKipcbiAgICogU2VhcmNoIGZvciBjb250YWN0cyBpbiB0aGUgQ29udGFjdHMgbGlzdC5cbiAgICogQHBhcmFtIHtDb250YWN0RmllbGRUeXBlW119IGZpZWxkcyBDb250YWN0IGZpZWxkcyB0byBiZSB1c2VkIGFzIGEgc2VhcmNoIHF1YWxpZmllclxuICAgKiBAcGFyYW0ge0lDb250YWN0RmluZE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25hbCBvcHRpb25zIGZvciB0aGUgcXVlcnlcbiAgICogQHJldHVybnMge1Byb21pc2U8Q29udGFjdFtdPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWFyY2ggcmVzdWx0cyAoYW4gYXJyYXkgb2YgQ29udGFjdCBvYmplY3RzKVxuICAgKi9cbiAgQENvcmRvdmFDaGVjaygpXG4gIGZpbmQoZmllbGRzOiBDb250YWN0RmllbGRUeXBlW10sIG9wdGlvbnM/OiBJQ29udGFjdEZpbmRPcHRpb25zKTogUHJvbWlzZTxDb250YWN0W10+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIG5hdmlnYXRvci5jb250YWN0cy5maW5kKFxuICAgICAgICBmaWVsZHMsXG4gICAgICAgIChjb250YWN0czogYW55W10pID0+IHtcbiAgICAgICAgICByZXNvbHZlKGNvbnRhY3RzLm1hcChwcm9jZXNzQ29udGFjdCkpO1xuICAgICAgICB9LFxuICAgICAgICByZWplY3QsXG4gICAgICAgIG9wdGlvbnNcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU2VsZWN0IGEgc2luZ2xlIENvbnRhY3QuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRhY3Q+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHNlbGVjdGVkIENvbnRhY3RcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBwaWNrQ29udGFjdCgpOiBQcm9taXNlPENvbnRhY3Q+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIG5hdmlnYXRvci5jb250YWN0cy5waWNrQ29udGFjdCgoY29udGFjdDogYW55KSA9PiByZXNvbHZlKHByb2Nlc3NDb250YWN0KGNvbnRhY3QpKSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc0NvbnRhY3QoY29udGFjdDogYW55KSB7XG4gIGNvbnN0IG5ld0NvbnRhY3QgPSBuZXcgQ29udGFjdCgpO1xuICBmb3IgKGNvbnN0IHByb3AgaW4gY29udGFjdCkge1xuICAgIGlmICh0eXBlb2YgY29udGFjdFtwcm9wXSA9PT0gJ2Z1bmN0aW9uJykgY29udGludWU7XG4gICAgbmV3Q29udGFjdFtwcm9wXSA9IGNvbnRhY3RbcHJvcF07XG4gIH1cbiAgcmV0dXJuIG5ld0NvbnRhY3Q7XG59XG4iXX0=