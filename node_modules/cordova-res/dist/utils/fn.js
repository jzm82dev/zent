"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const debug_1 = tslib_1.__importDefault(require("debug"));
const debug = debug_1.default('cordova-res:utils:fn');
async function tryFn(fn) {
    try {
        return await fn();
    }
    catch (e) {
        debug('Encountered error when trying function: %O', fn);
    }
}
exports.tryFn = tryFn;
function identity(t) {
    return t;
}
exports.identity = identity;
