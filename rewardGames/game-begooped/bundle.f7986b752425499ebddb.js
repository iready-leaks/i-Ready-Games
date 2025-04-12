webpackJsonp([0, 2], [
    /* 0 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/_export.js ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var core = __webpack_require__( /*! ./_core */ 19);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var PROTOTYPE = 'prototype';

        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                // extend global
                if (target) redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        global.core = core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        module.exports = $export;


        /***/
    }),
    /* 1 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_an-object.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        module.exports = function(it) {
            if (!isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };


        /***/
    }),
    /* 2 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/_global.js ***!
      \**************************************/
    /***/
    (function(module, exports) {

        // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
        var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
            window : typeof self != 'undefined' && self.Math == Math ? self
            // eslint-disable-next-line no-new-func
            :
            Function('return this')();
        if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


        /***/
    }),
    /* 3 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./~/core-js/modules/_fails.js ***!
      \*************************************/
    /***/
    (function(module, exports) {

        module.exports = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };


        /***/
    }),
    /* 4 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_is-object.js ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = function(it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };


        /***/
    }),
    /* 5 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./~/core-js/modules/_wks.js ***!
      \***********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var store = __webpack_require__( /*! ./_shared */ 54)('wks');
        var uid = __webpack_require__( /*! ./_uid */ 44);
        var Symbol = __webpack_require__( /*! ./_global */ 2).Symbol;
        var USE_SYMBOL = typeof Symbol == 'function';

        var $exports = module.exports = function(name) {
            return store[name] || (store[name] =
                USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
        };

        $exports.store = store;


        /***/
    }),
    /* 6 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_to-length.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.15 ToLength
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var min = Math.min;
        module.exports = function(it) {
            return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };


        /***/
    }),
    /* 7 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_descriptors.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // Thank's IE8 for his funny defineProperty
        module.exports = !__webpack_require__( /*! ./_fails */ 3)(function() {
            return Object.defineProperty({}, 'a', {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });


        /***/
    }),
    /* 8 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_object-dp.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ 114);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var dP = Object.defineProperty;

        exports.f = __webpack_require__( /*! ./_descriptors */ 7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            anObject(O);
            P = toPrimitive(P, true);
            anObject(Attributes);
            if (IE8_DOM_DEFINE) try {
                return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };


        /***/
    }),
    /* 9 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_to-object.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.13 ToObject(argument)
        var defined = __webpack_require__( /*! ./_defined */ 24);
        module.exports = function(it) {
            return Object(defined(it));
        };


        /***/
    }),
    /* 10 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_a-function.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        module.exports = function(it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };


        /***/
    }),
    /* 11 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_hide.js ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ 8);
        var createDesc = __webpack_require__( /*! ./_property-desc */ 40);
        module.exports = __webpack_require__( /*! ./_descriptors */ 7) ? function(object, key, value) {
            return dP.f(object, key, createDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };


        /***/
    }),
    /* 12 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_redefine.js ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var has = __webpack_require__( /*! ./_has */ 14);
        var SRC = __webpack_require__( /*! ./_uid */ 44)('src');
        var $toString = __webpack_require__( /*! ./_function-to-string */ 166);
        var TO_STRING = 'toString';
        var TPL = ('' + $toString).split(TO_STRING);

        __webpack_require__( /*! ./_core */ 19).inspectSource = function(it) {
            return $toString.call(it);
        };

        (module.exports = function(O, key, val, safe) {
            var isFunction = typeof val == 'function';
            if (isFunction) has(val, 'name') || hide(val, 'name', key);
            if (O[key] === val) return;
            if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
            if (O === global) {
                O[key] = val;
            } else if (!safe) {
                delete O[key];
                hide(O, key, val);
            } else if (O[key]) {
                O[key] = val;
            } else {
                hide(O, key, val);
            }
            // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
        })(Function.prototype, TO_STRING, function toString() {
            return typeof this == 'function' && this[SRC] || $toString.call(this);
        });


        /***/
    }),
    /* 13 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_string-html.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        var quot = /"/g;
        // B.2.3.2.1 CreateHTML(string, tag, attribute, value)
        var createHTML = function(string, tag, attribute, value) {
            var S = String(defined(string));
            var p1 = '<' + tag;
            if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
            return p1 + '>' + S + '</' + tag + '>';
        };
        module.exports = function(NAME, exec) {
            var O = {};
            O[NAME] = exec(createHTML);
            $export($export.P + $export.F * fails(function() {
                var test = '' [NAME]('"');
                return test !== test.toLowerCase() || test.split('"').length > 3;
            }), 'String', O);
        };


        /***/
    }),
    /* 14 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./~/core-js/modules/_has.js ***!
      \***********************************/
    /***/
    (function(module, exports) {

        var hasOwnProperty = {}.hasOwnProperty;
        module.exports = function(it, key) {
            return hasOwnProperty.call(it, key);
        };


        /***/
    }),
    /* 15 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_object-gopd.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var pIE = __webpack_require__( /*! ./_object-pie */ 53);
        var createDesc = __webpack_require__( /*! ./_property-desc */ 40);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var has = __webpack_require__( /*! ./_has */ 14);
        var IE8_DOM_DEFINE = __webpack_require__( /*! ./_ie8-dom-define */ 114);
        var gOPD = Object.getOwnPropertyDescriptor;

        exports.f = __webpack_require__( /*! ./_descriptors */ 7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = toIObject(O);
            P = toPrimitive(P, true);
            if (IE8_DOM_DEFINE) try {
                return gOPD(O, P);
            } catch (e) { /* empty */ }
            if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
        };


        /***/
    }),
    /* 16 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_object-gpo.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
        var has = __webpack_require__( /*! ./_has */ 14);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ 89)('IE_PROTO');
        var ObjectProto = Object.prototype;

        module.exports = Object.getPrototypeOf || function(O) {
            O = toObject(O);
            if (has(O, IE_PROTO)) return O[IE_PROTO];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };


        /***/
    }),
    /* 17 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_to-iobject.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // to indexed object, toObject with fallback for non-array-like ES3 strings
        var IObject = __webpack_require__( /*! ./_iobject */ 52);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        module.exports = function(it) {
            return IObject(defined(it));
        };


        /***/
    }),
    /* 18 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./~/core-js/modules/_cof.js ***!
      \***********************************/
    /***/
    (function(module, exports) {

        var toString = {}.toString;

        module.exports = function(it) {
            return toString.call(it).slice(8, -1);
        };


        /***/
    }),
    /* 19 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_core.js ***!
      \************************************/
    /***/
    (function(module, exports) {

        var core = module.exports = {
            version: '2.6.12'
        };
        if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


        /***/
    }),
    /* 20 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./~/core-js/modules/_ctx.js ***!
      \***********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // optional / simple context binding
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        module.exports = function(fn, that, length) {
            aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };


        /***/
    }),
    /* 21 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_strict-method.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var fails = __webpack_require__( /*! ./_fails */ 3);

        module.exports = function(method, arg) {
            return !!method && fails(function() {
                // eslint-disable-next-line no-useless-call
                arg ? method.call(null, function() { /* empty */ }, 1) : method.call(null);
            });
        };


        /***/
    }),
    /* 22 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_to-integer.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        module.exports = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };


        /***/
    }),
    /* 23 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_array-methods.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 0 -> Array#forEach
        // 1 -> Array#map
        // 2 -> Array#filter
        // 3 -> Array#some
        // 4 -> Array#every
        // 5 -> Array#find
        // 6 -> Array#findIndex
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var IObject = __webpack_require__( /*! ./_iobject */ 52);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var asc = __webpack_require__( /*! ./_array-species-create */ 73);
        module.exports = function(TYPE, $create) {
            var IS_MAP = TYPE == 1;
            var IS_FILTER = TYPE == 2;
            var IS_SOME = TYPE == 3;
            var IS_EVERY = TYPE == 4;
            var IS_FIND_INDEX = TYPE == 6;
            var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
            var create = $create || asc;
            return function($this, callbackfn, that) {
                var O = toObject($this);
                var self = IObject(O);
                var f = ctx(callbackfn, that, 3);
                var length = toLength(self.length);
                var index = 0;
                var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
                var val, res;
                for (; length > index; index++)
                    if (NO_HOLES || index in self) {
                        val = self[index];
                        res = f(val, index, O);
                        if (TYPE) {
                            if (IS_MAP) result[index] = res; // map
                            else if (res) switch (TYPE) {
                                case 3:
                                    return true; // some
                                case 5:
                                    return val; // find
                                case 6:
                                    return index; // findIndex
                                case 2:
                                    result.push(val); // filter
                            } else if (IS_EVERY) return false; // every
                        }
                    }
                return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
            };
        };


        /***/
    }),
    /* 24 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_defined.js ***!
      \***************************************/
    /***/
    (function(module, exports) {

        // 7.2.1 RequireObjectCoercible(argument)
        module.exports = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };


        /***/
    }),
    /* 25 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_object-sap.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // most Object methods by ES6 should accept primitives
        var $export = __webpack_require__( /*! ./_export */ 0);
        var core = __webpack_require__( /*! ./_core */ 19);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        module.exports = function(KEY, exec) {
            var fn = (core.Object || {})[KEY] || Object[KEY];
            var exp = {};
            exp[KEY] = exec(fn);
            $export($export.S + $export.F * fails(function() {
                fn(1);
            }), 'Object', exp);
        };


        /***/
    }),
    /* 26 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/_to-primitive.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.1.1 ToPrimitive(input [, PreferredType])
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        module.exports = function(it, S) {
            if (!isObject(it)) return it;
            var fn, val;
            if (S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            if (typeof(fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
            if (!S && typeof(fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };


        /***/
    }),
    /* 27 */
    ,
    /* 28 */
    /* exports provided: GAME_MODES, SESSION_DURATION_SECONDS, GOOPER_DATA, LAYOUT, SCORE */
    /* exports used: GAME_MODES, GOOPER_DATA, SESSION_DURATION_SECONDS, LAYOUT, SCORE */
    /*!**********************************!*\
      !*** ./src/js/Game/Constants.js ***!
      \**********************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return GAME_MODES;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return SESSION_DURATION_SECONDS;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return GOOPER_DATA;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return LAYOUT;
        });
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return SCORE;
        });
        var GAME_MODES = {
            FREE_SELECT_BY_COLOR: 0,
            ADDITION: 1
        };

        var SESSION_DURATION_SECONDS = 90;

        var GOOPER_DATA = {
            NUM_FACES_PER_COLOR: 2,
            NUM_COLORS: 6,
            WIDTH: 106,
            HEIGHT: 106,
            TEXT_X: 37,
            TEXT_Y: 32,
            HIGHLIGHT_GOOPER_OFFSET: 7,
            SPECIAL_IDS: {
                NONE: '',
                SUPER: 'SUPER',
                POOPER: 'POOPER'
            },
            SPECIAL_CHANCES: { // chances are in the range [0, 1] and the total should be < 1 so that non-special goopers can be generated
                SUPER: 0.05,
                POOPER: 0.05
            },
            MAX_SUPER_ROW_REMOVAL: 2,
            SUPER_EXTRA_ROW_GROUP_THRESHOLD: 3,
            SUPER_ROW_ADDITIONAL_GOOPER_SPAWN: 5,
            NUM_SUPER_GOOPER_OPTIONS: 5,

            SPREAD_ANI: {
                DELAY_MS: 1000,
                DURATION_MS: 6000,

                Y_OFFSET: -53,
                LEFT_OFFSET: -53,
                LINE_OFFSET: 0,
                RIGHT_OFFSET: 54,

                LINE_SCALE_X: 104 / 4, // dividing by 4 due to line image width being 4px
                RIGHT_FINAL_X: 157
            },
            POOPER_SPREAD_ANI_OFFSET: -53,
            POOPER_SPREAD_ANI_RIGHT_OFFSET: 54,

            PARTICLE_SYSTEM: {
                GRAVITY: 2000,
                NUM_PARTICLES: 10,
                LIFESPAN_MS: 500,
                SCALE: 0.5,
                FADE_RATE: 100,
                MIN_SPEED: -500,
                MAX_SPEED: 500
            }
        };

        var LAYOUT = {
            SCREEN_PAD: 40,

            GROUP_BOX_X: 40,
            GROUP_BOX_Y: 150,

            TIMER_X: 40,
            TIMER_Y: 325,
            TIMER_WIDTH: 130,
            TIMER_HEIGHT: 50,

            SCORE_COUNTER_BG_X: 40,
            SCORE_COUNTER_BG_Y: 820,

            SCORE_COUNTER_X: 40,
            SCORE_COUNTER_Y: 823,
            SCORE_COUNTER_WIDTH: 155,
            SCORE_COUNTER_HEIGHT: 30
        };

        var SCORE = {
            POINTS_PER_GOOPER: 10,
            POINTS_PER_SUPER_GOOPER: 50,
            POINTS_PER_GOOPER_BEYOND_MIN: 10,
            POINTS_PER_SECOND: 500
        };

        /***/
    }),
    /* 29 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_metadata.js ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var Map = __webpack_require__( /*! ./es6.map */ 136);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var shared = __webpack_require__( /*! ./_shared */ 54)('metadata');
        var store = shared.store || (shared.store = new(__webpack_require__( /*! ./es6.weak-map */ 140))());

        var getOrCreateMetadataMap = function(target, targetKey, create) {
            var targetMetadata = store.get(target);
            if (!targetMetadata) {
                if (!create) return undefined;
                store.set(target, targetMetadata = new Map());
            }
            var keyMetadata = targetMetadata.get(targetKey);
            if (!keyMetadata) {
                if (!create) return undefined;
                targetMetadata.set(targetKey, keyMetadata = new Map());
            }
            return keyMetadata;
        };
        var ordinaryHasOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
        };
        var ordinaryGetOwnMetadata = function(MetadataKey, O, P) {
            var metadataMap = getOrCreateMetadataMap(O, P, false);
            return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
        };
        var ordinaryDefineOwnMetadata = function(MetadataKey, MetadataValue, O, P) {
            getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
        };
        var ordinaryOwnMetadataKeys = function(target, targetKey) {
            var metadataMap = getOrCreateMetadataMap(target, targetKey, false);
            var keys = [];
            if (metadataMap) metadataMap.forEach(function(_, key) {
                keys.push(key);
            });
            return keys;
        };
        var toMetaKey = function(it) {
            return it === undefined || typeof it == 'symbol' ? it : String(it);
        };
        var exp = function(O) {
            $export($export.S, 'Reflect', O);
        };

        module.exports = {
            store: store,
            map: getOrCreateMetadataMap,
            has: ordinaryHasOwnMetadata,
            get: ordinaryGetOwnMetadata,
            set: ordinaryDefineOwnMetadata,
            keys: ordinaryOwnMetadataKeys,
            key: toMetaKey,
            exp: exp
        };


        /***/
    }),
    /* 30 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_typed-array.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        if (__webpack_require__( /*! ./_descriptors */ 7)) {
            var LIBRARY = __webpack_require__( /*! ./_library */ 32);
            var global = __webpack_require__( /*! ./_global */ 2);
            var fails = __webpack_require__( /*! ./_fails */ 3);
            var $export = __webpack_require__( /*! ./_export */ 0);
            var $typed = __webpack_require__( /*! ./_typed */ 68);
            var $buffer = __webpack_require__( /*! ./_typed-buffer */ 94);
            var ctx = __webpack_require__( /*! ./_ctx */ 20);
            var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
            var propertyDesc = __webpack_require__( /*! ./_property-desc */ 40);
            var hide = __webpack_require__( /*! ./_hide */ 11);
            var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
            var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
            var toLength = __webpack_require__( /*! ./_to-length */ 6);
            var toIndex = __webpack_require__( /*! ./_to-index */ 134);
            var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
            var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
            var has = __webpack_require__( /*! ./_has */ 14);
            var classof = __webpack_require__( /*! ./_classof */ 46);
            var isObject = __webpack_require__( /*! ./_is-object */ 4);
            var toObject = __webpack_require__( /*! ./_to-object */ 9);
            var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ 80);
            var create = __webpack_require__( /*! ./_object-create */ 37);
            var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
            var gOPN = __webpack_require__( /*! ./_object-gopn */ 38).f;
            var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ 96);
            var uid = __webpack_require__( /*! ./_uid */ 44);
            var wks = __webpack_require__( /*! ./_wks */ 5);
            var createArrayMethod = __webpack_require__( /*! ./_array-methods */ 23);
            var createArrayIncludes = __webpack_require__( /*! ./_array-includes */ 56);
            var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ 55);
            var ArrayIterators = __webpack_require__( /*! ./es6.array.iterator */ 97);
            var Iterators = __webpack_require__( /*! ./_iterators */ 47);
            var $iterDetect = __webpack_require__( /*! ./_iter-detect */ 61);
            var setSpecies = __webpack_require__( /*! ./_set-species */ 42);
            var arrayFill = __webpack_require__( /*! ./_array-fill */ 72);
            var arrayCopyWithin = __webpack_require__( /*! ./_array-copy-within */ 106);
            var $DP = __webpack_require__( /*! ./_object-dp */ 8);
            var $GOPD = __webpack_require__( /*! ./_object-gopd */ 15);
            var dP = $DP.f;
            var gOPD = $GOPD.f;
            var RangeError = global.RangeError;
            var TypeError = global.TypeError;
            var Uint8Array = global.Uint8Array;
            var ARRAY_BUFFER = 'ArrayBuffer';
            var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
            var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
            var PROTOTYPE = 'prototype';
            var ArrayProto = Array[PROTOTYPE];
            var $ArrayBuffer = $buffer.ArrayBuffer;
            var $DataView = $buffer.DataView;
            var arrayForEach = createArrayMethod(0);
            var arrayFilter = createArrayMethod(2);
            var arraySome = createArrayMethod(3);
            var arrayEvery = createArrayMethod(4);
            var arrayFind = createArrayMethod(5);
            var arrayFindIndex = createArrayMethod(6);
            var arrayIncludes = createArrayIncludes(true);
            var arrayIndexOf = createArrayIncludes(false);
            var arrayValues = ArrayIterators.values;
            var arrayKeys = ArrayIterators.keys;
            var arrayEntries = ArrayIterators.entries;
            var arrayLastIndexOf = ArrayProto.lastIndexOf;
            var arrayReduce = ArrayProto.reduce;
            var arrayReduceRight = ArrayProto.reduceRight;
            var arrayJoin = ArrayProto.join;
            var arraySort = ArrayProto.sort;
            var arraySlice = ArrayProto.slice;
            var arrayToString = ArrayProto.toString;
            var arrayToLocaleString = ArrayProto.toLocaleString;
            var ITERATOR = wks('iterator');
            var TAG = wks('toStringTag');
            var TYPED_CONSTRUCTOR = uid('typed_constructor');
            var DEF_CONSTRUCTOR = uid('def_constructor');
            var ALL_CONSTRUCTORS = $typed.CONSTR;
            var TYPED_ARRAY = $typed.TYPED;
            var VIEW = $typed.VIEW;
            var WRONG_LENGTH = 'Wrong length!';

            var $map = createArrayMethod(1, function(O, length) {
                return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
            });

            var LITTLE_ENDIAN = fails(function() {
                // eslint-disable-next-line no-undef
                return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
            });

            var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function() {
                new Uint8Array(1).set({});
            });

            var toOffset = function(it, BYTES) {
                var offset = toInteger(it);
                if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
                return offset;
            };

            var validate = function(it) {
                if (isObject(it) && TYPED_ARRAY in it) return it;
                throw TypeError(it + ' is not a typed array!');
            };

            var allocate = function(C, length) {
                if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
                    throw TypeError('It is not a typed array constructor!');
                }
                return new C(length);
            };

            var speciesFromList = function(O, list) {
                return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
            };

            var fromList = function(C, list) {
                var index = 0;
                var length = list.length;
                var result = allocate(C, length);
                while (length > index) result[index] = list[index++];
                return result;
            };

            var addGetter = function(it, key, internal) {
                dP(it, key, {
                    get: function() {
                        return this._d[internal];
                    }
                });
            };

            var $from = function from(source /* , mapfn, thisArg */ ) {
                var O = toObject(source);
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var iterFn = getIterFn(O);
                var i, length, values, result, step, iterator;
                if (iterFn != undefined && !isArrayIter(iterFn)) {
                    for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
                        values.push(step.value);
                    }
                    O = values;
                }
                if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
                for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
                    result[i] = mapping ? mapfn(O[i], i) : O[i];
                }
                return result;
            };

            var $of = function of ( /* ...items */ ) {
                var index = 0;
                var length = arguments.length;
                var result = allocate(this, length);
                while (length > index) result[index] = arguments[index++];
                return result;
            };

            // iOS Safari 6.x fails here
            var TO_LOCALE_BUG = !!Uint8Array && fails(function() {
                arrayToLocaleString.call(new Uint8Array(1));
            });

            var $toLocaleString = function toLocaleString() {
                return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
            };

            var proto = {
                copyWithin: function copyWithin(target, start /* , end */ ) {
                    return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
                },
                every: function every(callbackfn /* , thisArg */ ) {
                    return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                fill: function fill(value /* , start, end */ ) { // eslint-disable-line no-unused-vars
                    return arrayFill.apply(validate(this), arguments);
                },
                filter: function filter(callbackfn /* , thisArg */ ) {
                    return speciesFromList(this, arrayFilter(validate(this), callbackfn,
                        arguments.length > 1 ? arguments[1] : undefined));
                },
                find: function find(predicate /* , thisArg */ ) {
                    return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                findIndex: function findIndex(predicate /* , thisArg */ ) {
                    return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
                },
                forEach: function forEach(callbackfn /* , thisArg */ ) {
                    arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                indexOf: function indexOf(searchElement /* , fromIndex */ ) {
                    return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                includes: function includes(searchElement /* , fromIndex */ ) {
                    return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
                },
                join: function join(separator) { // eslint-disable-line no-unused-vars
                    return arrayJoin.apply(validate(this), arguments);
                },
                lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */ ) { // eslint-disable-line no-unused-vars
                    return arrayLastIndexOf.apply(validate(this), arguments);
                },
                map: function map(mapfn /* , thisArg */ ) {
                    return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                reduce: function reduce(callbackfn /* , initialValue */ ) { // eslint-disable-line no-unused-vars
                    return arrayReduce.apply(validate(this), arguments);
                },
                reduceRight: function reduceRight(callbackfn /* , initialValue */ ) { // eslint-disable-line no-unused-vars
                    return arrayReduceRight.apply(validate(this), arguments);
                },
                reverse: function reverse() {
                    var that = this;
                    var length = validate(that).length;
                    var middle = Math.floor(length / 2);
                    var index = 0;
                    var value;
                    while (index < middle) {
                        value = that[index];
                        that[index++] = that[--length];
                        that[length] = value;
                    }
                    return that;
                },
                some: function some(callbackfn /* , thisArg */ ) {
                    return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
                },
                sort: function sort(comparefn) {
                    return arraySort.call(validate(this), comparefn);
                },
                subarray: function subarray(begin, end) {
                    var O = validate(this);
                    var length = O.length;
                    var $begin = toAbsoluteIndex(begin, length);
                    return new(speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
                        O.buffer,
                        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
                        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
                    );
                }
            };

            var $slice = function slice(start, end) {
                return speciesFromList(this, arraySlice.call(validate(this), start, end));
            };

            var $set = function set(arrayLike /* , offset */ ) {
                validate(this);
                var offset = toOffset(arguments[1], 1);
                var length = this.length;
                var src = toObject(arrayLike);
                var len = toLength(src.length);
                var index = 0;
                if (len + offset > length) throw RangeError(WRONG_LENGTH);
                while (index < len) this[offset + index] = src[index++];
            };

            var $iterators = {
                entries: function entries() {
                    return arrayEntries.call(validate(this));
                },
                keys: function keys() {
                    return arrayKeys.call(validate(this));
                },
                values: function values() {
                    return arrayValues.call(validate(this));
                }
            };

            var isTAIndex = function(target, key) {
                return isObject(target) &&
                    target[TYPED_ARRAY] &&
                    typeof key != 'symbol' &&
                    key in target &&
                    String(+key) == String(key);
            };
            var $getDesc = function getOwnPropertyDescriptor(target, key) {
                return isTAIndex(target, key = toPrimitive(key, true)) ?
                    propertyDesc(2, target[key]) :
                    gOPD(target, key);
            };
            var $setDesc = function defineProperty(target, key, desc) {
                if (isTAIndex(target, key = toPrimitive(key, true)) &&
                    isObject(desc) &&
                    has(desc, 'value') &&
                    !has(desc, 'get') &&
                    !has(desc, 'set')
                    // TODO: add validation descriptor w/o calling accessors
                    &&
                    !desc.configurable &&
                    (!has(desc, 'writable') || desc.writable) &&
                    (!has(desc, 'enumerable') || desc.enumerable)
                ) {
                    target[key] = desc.value;
                    return target;
                }
                return dP(target, key, desc);
            };

            if (!ALL_CONSTRUCTORS) {
                $GOPD.f = $getDesc;
                $DP.f = $setDesc;
            }

            $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
                getOwnPropertyDescriptor: $getDesc,
                defineProperty: $setDesc
            });

            if (fails(function() {
                    arrayToString.call({});
                })) {
                arrayToString = arrayToLocaleString = function toString() {
                    return arrayJoin.call(this);
                };
            }

            var $TypedArrayPrototype$ = redefineAll({}, proto);
            redefineAll($TypedArrayPrototype$, $iterators);
            hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
            redefineAll($TypedArrayPrototype$, {
                slice: $slice,
                set: $set,
                constructor: function() { /* noop */ },
                toString: arrayToString,
                toLocaleString: $toLocaleString
            });
            addGetter($TypedArrayPrototype$, 'buffer', 'b');
            addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
            addGetter($TypedArrayPrototype$, 'byteLength', 'l');
            addGetter($TypedArrayPrototype$, 'length', 'e');
            dP($TypedArrayPrototype$, TAG, {
                get: function() {
                    return this[TYPED_ARRAY];
                }
            });

            // eslint-disable-next-line max-statements
            module.exports = function(KEY, BYTES, wrapper, CLAMPED) {
                CLAMPED = !!CLAMPED;
                var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
                var GETTER = 'get' + KEY;
                var SETTER = 'set' + KEY;
                var TypedArray = global[NAME];
                var Base = TypedArray || {};
                var TAC = TypedArray && getPrototypeOf(TypedArray);
                var FORCED = !TypedArray || !$typed.ABV;
                var O = {};
                var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
                var getter = function(that, index) {
                    var data = that._d;
                    return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
                };
                var setter = function(that, index, value) {
                    var data = that._d;
                    if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
                    data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
                };
                var addElement = function(that, index) {
                    dP(that, index, {
                        get: function() {
                            return getter(this, index);
                        },
                        set: function(value) {
                            return setter(this, index, value);
                        },
                        enumerable: true
                    });
                };
                if (FORCED) {
                    TypedArray = wrapper(function(that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME, '_d');
                        var index = 0;
                        var offset = 0;
                        var buffer, byteLength, length, klass;
                        if (!isObject(data)) {
                            length = toIndex(data);
                            byteLength = length * BYTES;
                            buffer = new $ArrayBuffer(byteLength);
                        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            buffer = data;
                            offset = toOffset($offset, BYTES);
                            var $len = data.byteLength;
                            if ($length === undefined) {
                                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                                byteLength = $len - offset;
                                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
                            } else {
                                byteLength = toLength($length) * BYTES;
                                if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
                            }
                            length = byteLength / BYTES;
                        } else if (TYPED_ARRAY in data) {
                            return fromList(TypedArray, data);
                        } else {
                            return $from.call(TypedArray, data);
                        }
                        hide(that, '_d', {
                            b: buffer,
                            o: offset,
                            l: byteLength,
                            e: length,
                            v: new $DataView(buffer)
                        });
                        while (index < length) addElement(that, index++);
                    });
                    TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
                    hide(TypedArrayPrototype, 'constructor', TypedArray);
                } else if (!fails(function() {
                        TypedArray(1);
                    }) || !fails(function() {
                        new TypedArray(-1); // eslint-disable-line no-new
                    }) || !$iterDetect(function(iter) {
                        new TypedArray(); // eslint-disable-line no-new
                        new TypedArray(null); // eslint-disable-line no-new
                        new TypedArray(1.5); // eslint-disable-line no-new
                        new TypedArray(iter); // eslint-disable-line no-new
                    }, true)) {
                    TypedArray = wrapper(function(that, data, $offset, $length) {
                        anInstance(that, TypedArray, NAME);
                        var klass;
                        // `ws` module bug, temporarily remove validation length for Uint8Array
                        // https://github.com/websockets/ws/pull/645
                        if (!isObject(data)) return new Base(toIndex(data));
                        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
                            return $length !== undefined ?
                                new Base(data, toOffset($offset, BYTES), $length) :
                                $offset !== undefined ?
                                new Base(data, toOffset($offset, BYTES)) :
                                new Base(data);
                        }
                        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
                        return $from.call(TypedArray, data);
                    });
                    arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key) {
                        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
                    });
                    TypedArray[PROTOTYPE] = TypedArrayPrototype;
                    if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
                }
                var $nativeIterator = TypedArrayPrototype[ITERATOR];
                var CORRECT_ITER_NAME = !!$nativeIterator &&
                    ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
                var $iterator = $iterators.values;
                hide(TypedArray, TYPED_CONSTRUCTOR, true);
                hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
                hide(TypedArrayPrototype, VIEW, true);
                hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

                if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
                    dP(TypedArrayPrototype, TAG, {
                        get: function() {
                            return NAME;
                        }
                    });
                }

                O[NAME] = TypedArray;

                $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

                $export($export.S, NAME, {
                    BYTES_PER_ELEMENT: BYTES
                });

                $export($export.S + $export.F * fails(function() {
                    Base.of.call(TypedArray, 1);
                }), NAME, {
                    from: $from,
                    of: $of
                });

                if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

                $export($export.P, NAME, proto);

                setSpecies(NAME);

                $export($export.P + $export.F * FORCED_SET, NAME, {
                    set: $set
                });

                $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

                if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

                $export($export.P + $export.F * fails(function() {
                    new TypedArray(1).slice();
                }), NAME, {
                    slice: $slice
                });

                $export($export.P + $export.F * (fails(function() {
                    return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
                }) || !fails(function() {
                    TypedArrayPrototype.toLocaleString.call([1, 2]);
                })), NAME, {
                    toLocaleString: $toLocaleString
                });

                Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
                if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
            };
        } else module.exports = function() { /* empty */ };


        /***/
    }),
    /* 31 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/_add-to-unscopables.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = __webpack_require__( /*! ./_wks */ 5)('unscopables');
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__( /*! ./_hide */ 11)(ArrayProto, UNSCOPABLES, {});
        module.exports = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };


        /***/
    }),
    /* 32 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_library.js ***!
      \***************************************/
    /***/
    (function(module, exports) {

        module.exports = false;


        /***/
    }),
    /* 33 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_meta.js ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var META = __webpack_require__( /*! ./_uid */ 44)('meta');
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var has = __webpack_require__( /*! ./_has */ 14);
        var setDesc = __webpack_require__( /*! ./_object-dp */ 8).f;
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var FREEZE = !__webpack_require__( /*! ./_fails */ 3)(function() {
            return isExtensible(Object.preventExtensions({}));
        });
        var setMeta = function(it) {
            setDesc(it, META, {
                value: {
                    i: 'O' + ++id, // object ID
                    w: {} // weak collections IDs
                }
            });
        };
        var fastKey = function(it, create) {
            // return primitive with prefix
            if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return 'F';
                // not necessary to add metadata
                if (!create) return 'E';
                // add missing metadata
                setMeta(it);
                // return object ID
            }
            return it[META].i;
        };
        var getWeak = function(it, create) {
            if (!has(it, META)) {
                // can't set metadata to uncaught frozen object
                if (!isExtensible(it)) return true;
                // not necessary to add metadata
                if (!create) return false;
                // add missing metadata
                setMeta(it);
                // return hash weak collections IDs
            }
            return it[META].w;
        };
        // add metadata on freeze-family methods calling
        var onFreeze = function(it) {
            if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
            return it;
        };
        var meta = module.exports = {
            KEY: META,
            NEED: false,
            fastKey: fastKey,
            getWeak: getWeak,
            onFreeze: onFreeze
        };


        /***/
    }),
    /* 34 */
    /* exports provided: ExitButton, HelpButton, StartButton, Timer, ToggleAudioButton, Boot, MainMenu, ScoreBoard, USER_DATA_STATES, userDataManager, gameBridge, webAudioUtil */
    /* exports used: Boot, gameBridge, ExitButton, StartButton, HelpButton, ToggleAudioButton, Timer, webAudioUtil */
    /*!**********************************************!*\
      !*** ./~/@cainc/game-common/src/js/index.js ***!
      \**********************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__components_ExitButton__ = __webpack_require__( /*! ./components/ExitButton */ 99);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__components_HelpButton__ = __webpack_require__( /*! ./components/HelpButton */ 143);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__components_StartButton__ = __webpack_require__( /*! ./components/StartButton */ 144);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__components_Timer__ = __webpack_require__( /*! ./components/Timer */ 145);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__components_ToggleAudioButton__ = __webpack_require__( /*! ./components/ToggleAudioButton */ 146);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__game_states_Boot__ = __webpack_require__( /*! ./game_states/Boot */ 147);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__game_states_MainMenu__ = __webpack_require__( /*! ./game_states/MainMenu */ 148);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__game_states_ScoreBoard__ = __webpack_require__( /*! ./game_states/ScoreBoard */ 149);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_8__util_UserDataManager__ = __webpack_require__( /*! ./util/UserDataManager */ 150);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_9__util_GameBridge__ = __webpack_require__( /*! ./util/GameBridge */ 50);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_10__util_WebAudioUtil__ = __webpack_require__( /*! ./util/WebAudioUtil */ 151);
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "c", function() {
            return __WEBPACK_IMPORTED_MODULE_0__components_ExitButton__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "e", function() {
            return __WEBPACK_IMPORTED_MODULE_1__components_HelpButton__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "d", function() {
            return __WEBPACK_IMPORTED_MODULE_2__components_StartButton__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "g", function() {
            return __WEBPACK_IMPORTED_MODULE_3__components_Timer__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "f", function() {
            return __WEBPACK_IMPORTED_MODULE_4__components_ToggleAudioButton__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return __WEBPACK_IMPORTED_MODULE_5__game_states_Boot__["a"];
        });
        /* unused harmony reexport MainMenu */
        /* unused harmony reexport ScoreBoard */
        /* unused harmony reexport USER_DATA_STATES */
        /* unused harmony reexport userDataManager */
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "b", function() {
            return __WEBPACK_IMPORTED_MODULE_9__util_GameBridge__["a"];
        });
        /* harmony reexport (binding) */
        __webpack_require__.d(__webpack_exports__, "h", function() {
            return __WEBPACK_IMPORTED_MODULE_10__util_WebAudioUtil__["a"];
        });


















        /***/
    }),
    /* 35 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_an-instance.js ***!
      \*******************************************/
    /***/
    (function(module, exports) {

        module.exports = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                throw TypeError(name + ': incorrect invocation!');
            }
            return it;
        };


        /***/
    }),
    /* 36 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/_for-of.js ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var call = __webpack_require__( /*! ./_iter-call */ 117);
        var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ 80);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ 96);
        var BREAK = {};
        var RETURN = {};
        var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
            var iterFn = ITERATOR ? function() {
                return iterable;
            } : getIterFn(iterable);
            var f = ctx(fn, that, entries ? 2 : 1);
            var index = 0;
            var length, step, iterator, result;
            if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
            // fast case for arrays with default iterator
            if (isArrayIter(iterFn))
                for (length = toLength(iterable.length); length > index; index++) {
                    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else
                    for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                        result = call(iterator, f, step.value, entries);
                        if (result === BREAK || result === RETURN) return result;
                    }
        };
        exports.BREAK = BREAK;
        exports.RETURN = RETURN;


        /***/
    }),
    /* 37 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_object-create.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var dPs = __webpack_require__( /*! ./_object-dps */ 123);
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ 76);
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ 89)('IE_PROTO');
        var Empty = function() { /* empty */ };
        var PROTOTYPE = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = __webpack_require__( /*! ./_dom-create */ 75)('iframe');
            var i = enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            __webpack_require__( /*! ./_html */ 78).appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
            return createDict();
        };

        module.exports = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE] = anObject(O);
                result = new Empty();
                Empty[PROTOTYPE] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : dPs(result, Properties);
        };


        /***/
    }),
    /* 38 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_object-gopn.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
        var $keys = __webpack_require__( /*! ./_object-keys-internal */ 125);
        var hiddenKeys = __webpack_require__( /*! ./_enum-bug-keys */ 76).concat('length', 'prototype');

        exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return $keys(O, hiddenKeys);
        };


        /***/
    }),
    /* 39 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_object-keys.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)
        var $keys = __webpack_require__( /*! ./_object-keys-internal */ 125);
        var enumBugKeys = __webpack_require__( /*! ./_enum-bug-keys */ 76);

        module.exports = Object.keys || function keys(O) {
            return $keys(O, enumBugKeys);
        };


        /***/
    }),
    /* 40 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_property-desc.js ***!
      \*********************************************/
    /***/
    (function(module, exports) {

        module.exports = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };


        /***/
    }),
    /* 41 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/_redefine-all.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        module.exports = function(target, src, safe) {
            for (var key in src) redefine(target, key, src[key], safe);
            return target;
        };


        /***/
    }),
    /* 42 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_set-species.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ 2);
        var dP = __webpack_require__( /*! ./_object-dp */ 8);
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var SPECIES = __webpack_require__( /*! ./_wks */ 5)('species');

        module.exports = function(KEY) {
            var C = global[KEY];
            if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                configurable: true,
                get: function() {
                    return this;
                }
            });
        };


        /***/
    }),
    /* 43 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_to-absolute-index.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var max = Math.max;
        var min = Math.min;
        module.exports = function(index, length) {
            index = toInteger(index);
            return index < 0 ? max(index + length, 0) : min(index, length);
        };


        /***/
    }),
    /* 44 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./~/core-js/modules/_uid.js ***!
      \***********************************/
    /***/
    (function(module, exports) {

        var id = 0;
        var px = Math.random();
        module.exports = function(key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };


        /***/
    }),
    /* 45 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/_validate-collection.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        module.exports = function(it, TYPE) {
            if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
            return it;
        };


        /***/
    }),
    /* 46 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_classof.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // getting tag from 19.1.3.6 Object.prototype.toString()
        var cof = __webpack_require__( /*! ./_cof */ 18);
        var TAG = __webpack_require__( /*! ./_wks */ 5)('toStringTag');
        // ES3 wrong here
        var ARG = cof(function() {
            return arguments;
        }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) { /* empty */ }
        };

        module.exports = function(it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                :
                typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                :
                ARG ? cof(O)
                // ES3 arguments fallback
                :
                (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };


        /***/
    }),
    /* 47 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_iterators.js ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = {};


        /***/
    }),
    /* 48 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_set-to-string-tag.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var def = __webpack_require__( /*! ./_object-dp */ 8).f;
        var has = __webpack_require__( /*! ./_has */ 14);
        var TAG = __webpack_require__( /*! ./_wks */ 5)('toStringTag');

        module.exports = function(it, tag, stat) {
            if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
                configurable: true,
                value: tag
            });
        };


        /***/
    }),
    /* 49 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_string-trim.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var spaces = __webpack_require__( /*! ./_string-ws */ 92);
        var space = '[' + spaces + ']';
        var non = '\u200b\u0085';
        var ltrim = RegExp('^' + space + space + '*');
        var rtrim = RegExp(space + space + '*$');

        var exporter = function(KEY, exec, ALIAS) {
            var exp = {};
            var FORCE = fails(function() {
                return !!spaces[KEY]() || non[KEY]() != non;
            });
            var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
            if (ALIAS) exp[ALIAS] = fn;
            $export($export.P + $export.F * FORCE, 'String', exp);
        };

        // 1 -> String#trimLeft
        // 2 -> String#trimRight
        // 3 -> String#trim
        var trim = exporter.trim = function(string, TYPE) {
            string = String(defined(string));
            if (TYPE & 1) string = string.replace(ltrim, '');
            if (TYPE & 2) string = string.replace(rtrim, '');
            return string;
        };

        module.exports = exporter;


        /***/
    }),
    /* 50 */
    /* exports provided: gameBridge */
    /* exports used: gameBridge */
    /*!********************************************************!*\
      !*** ./~/@cainc/game-common/src/js/util/GameBridge.js ***!
      \********************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


        class InternalizedGameBridge {
            constructor() {
                if (parent.window.gameBridge) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(parent.window.gameBridge, (field, name) => {
                        this[name] = field;
                    });
                    parent.window.gameBridge = undefined;
                } else {
                    this.start = () => {
                        return new Promise((resolve) => {
                            resolve();
                        });
                    };
                    this.close = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.noop;
                    this.initialized = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.noop;
                    this.sendScore = undefined;
                    this.updateLoadProgress = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.noop;
                    this.getUserData = undefined;
                    this.saveUserData = undefined;
                    this.info = {
                        numberOfRetries: 1,
                        studentId: 3141592653,
                    };
                }
            }

            get usingRealBridge() {
                return this.sendScore !== undefined;
            }

            /**
             * We show the exit button when we are not in the diag
             */
            get shouldShowExitButton() {
                return (this.isWithinDiag !== true);
            }
        }


        const gameBridge = new InternalizedGameBridge();
        /* harmony export (immutable) */
        __webpack_exports__["a"] = gameBridge;



        /***/
    }),
    /* 51 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./~/core-js/modules/_flags.js ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 21.2.5.3 get RegExp.prototype.flags
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        module.exports = function() {
            var that = anObject(this);
            var result = '';
            if (that.global) result += 'g';
            if (that.ignoreCase) result += 'i';
            if (that.multiline) result += 'm';
            if (that.unicode) result += 'u';
            if (that.sticky) result += 'y';
            return result;
        };


        /***/
    }),
    /* 52 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_iobject.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // fallback for non-array-like ES3 and non-enumerable old V8 strings
        var cof = __webpack_require__( /*! ./_cof */ 18);
        // eslint-disable-next-line no-prototype-builtins
        module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
            return cof(it) == 'String' ? it.split('') : Object(it);
        };


        /***/
    }),
    /* 53 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_object-pie.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        exports.f = {}.propertyIsEnumerable;


        /***/
    }),
    /* 54 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/_shared.js ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var core = __webpack_require__( /*! ./_core */ 19);
        var global = __webpack_require__( /*! ./_global */ 2);
        var SHARED = '__core-js_shared__';
        var store = global[SHARED] || (global[SHARED] = {});

        (module.exports = function(key, value) {
            return store[key] || (store[key] = value !== undefined ? value : {});
        })('versions', []).push({
            version: core.version,
            mode: __webpack_require__( /*! ./_library */ 32) ? 'pure' : 'global',
            copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
        });


        /***/
    }),
    /* 55 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/_species-constructor.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.3.20 SpeciesConstructor(O, defaultConstructor)
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var SPECIES = __webpack_require__( /*! ./_wks */ 5)('species');
        module.exports = function(O, D) {
            var C = anObject(O).constructor;
            var S;
            return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
        };


        /***/
    }),
    /* 56 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/_array-includes.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // false -> Array#indexOf
        // true  -> Array#includes
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        module.exports = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = toIObject($this);
                var length = toLength(O.length);
                var index = toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el)
                    while (length > index) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                return !IS_INCLUDES && -1;
            };
        };


        /***/
    }),
    /* 57 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_collection.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ 2);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
        var meta = __webpack_require__( /*! ./_meta */ 33);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var $iterDetect = __webpack_require__( /*! ./_iter-detect */ 61);
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ 48);
        var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ 79);

        module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
            var Base = global[NAME];
            var C = Base;
            var ADDER = IS_MAP ? 'set' : 'add';
            var proto = C && C.prototype;
            var O = {};
            var fixMethod = function(KEY) {
                var fn = proto[KEY];
                redefine(proto, KEY,
                    KEY == 'delete' ? function(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'has' ? function has(a) {
                        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'get' ? function get(a) {
                        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'add' ? function add(a) {
                        fn.call(this, a === 0 ? 0 : a);
                        return this;
                    } :
                    function set(a, b) {
                        fn.call(this, a === 0 ? 0 : a, b);
                        return this;
                    }
                );
            };
            if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function() {
                    new C().entries().next();
                }))) {
                // create collection constructor
                C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                redefineAll(C.prototype, methods);
                meta.NEED = true;
            } else {
                var instance = new C();
                // early implementations not supports chaining
                var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                var THROWS_ON_PRIMITIVES = fails(function() {
                    instance.has(1);
                });
                // most early implementations doesn't supports iterables, most modern - not close it correctly
                var ACCEPT_ITERABLES = $iterDetect(function(iter) {
                    new C(iter);
                }); // eslint-disable-line no-new
                // for early implementations -0 and +0 not the same
                var BUGGY_ZERO = !IS_WEAK && fails(function() {
                    // V8 ~ Chromium 42- fails only with 5+ elements
                    var $instance = new C();
                    var index = 5;
                    while (index--) $instance[ADDER](index, index);
                    return !$instance.has(-0);
                });
                if (!ACCEPT_ITERABLES) {
                    C = wrapper(function(target, iterable) {
                        anInstance(target, C, NAME);
                        var that = inheritIfRequired(new Base(), target, C);
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                        return that;
                    });
                    C.prototype = proto;
                    proto.constructor = C;
                }
                if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                    fixMethod('delete');
                    fixMethod('has');
                    IS_MAP && fixMethod('get');
                }
                if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                // weak collections should not contains .clear method
                if (IS_WEAK && proto.clear) delete proto.clear;
            }

            setToStringTag(C, NAME);

            O[NAME] = C;
            $export($export.G + $export.W + $export.F * (C != Base), O);

            if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

            return C;
        };


        /***/
    }),
    /* 58 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_fix-re-wks.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ./es6.regexp.exec */ 137);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        var wks = __webpack_require__( /*! ./_wks */ 5);
        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ 87);

        var SPECIES = wks('species');

        var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
            // #replace needs built-in support for named groups.
            // #match works fine because it just return the exec results, even if it has
            // a "grops" property.
            var re = /./;
            re.exec = function() {
                var result = [];
                result.groups = {
                    a: '7'
                };
                return result;
            };
            return ''.replace(re, '$<a>') !== '7';
        });

        var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function() {
            // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
            var re = /(?:)/;
            var originalExec = re.exec;
            re.exec = function() {
                return originalExec.apply(this, arguments);
            };
            var result = 'ab'.split(re);
            return result.length === 2 && result[0] === 'a' && result[1] === 'b';
        })();

        module.exports = function(KEY, length, exec) {
            var SYMBOL = wks(KEY);

            var DELEGATES_TO_SYMBOL = !fails(function() {
                // String methods call symbol-named RegEp methods
                var O = {};
                O[SYMBOL] = function() {
                    return 7;
                };
                return '' [KEY](O) != 7;
            });

            var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function() {
                // Symbol-named RegExp methods call .exec
                var execCalled = false;
                var re = /a/;
                re.exec = function() {
                    execCalled = true;
                    return null;
                };
                if (KEY === 'split') {
                    // RegExp[@@split] doesn't call the regex's exec method, but first creates
                    // a new one. We need to return the patched regex when creating the new one.
                    re.constructor = {};
                    re.constructor[SPECIES] = function() {
                        return re;
                    };
                }
                re[SYMBOL]('');
                return !execCalled;
            }) : undefined;

            if (!DELEGATES_TO_SYMBOL ||
                !DELEGATES_TO_EXEC ||
                (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
                (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
            ) {
                var nativeRegExpMethod = /./ [SYMBOL];
                var fns = exec(
                    defined,
                    SYMBOL,
                    '' [KEY],
                    function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
                        if (regexp.exec === regexpExec) {
                            if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
                                // The native String method already delegates to @@method (this
                                // polyfilled function), leasing to infinite recursion.
                                // We avoid it by directly calling the native @@method method.
                                return {
                                    done: true,
                                    value: nativeRegExpMethod.call(regexp, str, arg2)
                                };
                            }
                            return {
                                done: true,
                                value: nativeMethod.call(str, regexp, arg2)
                            };
                        }
                        return {
                            done: false
                        };
                    }
                );
                var strfn = fns[0];
                var rxfn = fns[1];

                redefine(String.prototype, KEY, strfn);
                hide(RegExp.prototype, SYMBOL, length == 2
                    // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
                    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
                    ?
                    function(string, arg) {
                        return rxfn.call(string, this, arg);
                    }
                    // 21.2.5.6 RegExp.prototype[@@match](string)
                    // 21.2.5.9 RegExp.prototype[@@search](string)
                    :
                    function(string) {
                        return rxfn.call(string, this);
                    }
                );
            }
        };


        /***/
    }),
    /* 59 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_is-array.js ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.2.2 IsArray(argument)
        var cof = __webpack_require__( /*! ./_cof */ 18);
        module.exports = Array.isArray || function isArray(arg) {
            return cof(arg) == 'Array';
        };


        /***/
    }),
    /* 60 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_is-regexp.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 7.2.8 IsRegExp(argument)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var cof = __webpack_require__( /*! ./_cof */ 18);
        var MATCH = __webpack_require__( /*! ./_wks */ 5)('match');
        module.exports = function(it) {
            var isRegExp;
            return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
        };


        /***/
    }),
    /* 61 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_iter-detect.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var ITERATOR = __webpack_require__( /*! ./_wks */ 5)('iterator');
        var SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR]();
            riter['return'] = function() {
                SAFE_CLOSING = true;
            };
            // eslint-disable-next-line no-throw-literal
            Array.from(riter, function() {
                throw 2;
            });
        } catch (e) { /* empty */ }

        module.exports = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
                var arr = [7];
                var iter = arr[ITERATOR]();
                iter.next = function() {
                    return {
                        done: safe = true
                    };
                };
                arr[ITERATOR] = function() {
                    return iter;
                };
                exec(arr);
            } catch (e) { /* empty */ }
            return safe;
        };


        /***/
    }),
    /* 62 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_object-forced-pam.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // Forced replacement prototype accessors methods
        module.exports = __webpack_require__( /*! ./_library */ 32) || !__webpack_require__( /*! ./_fails */ 3)(function() {
            var K = Math.random();
            // In FF throws only define methods
            // eslint-disable-next-line no-undef, no-useless-call
            __defineSetter__.call(null, K, function() { /* empty */ });
            delete __webpack_require__( /*! ./_global */ 2)[K];
        });


        /***/
    }),
    /* 63 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_object-gops.js ***!
      \*******************************************/
    /***/
    (function(module, exports) {

        exports.f = Object.getOwnPropertySymbols;


        /***/
    }),
    /* 64 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/_regexp-exec-abstract.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var classof = __webpack_require__( /*! ./_classof */ 46);
        var builtinExec = RegExp.prototype.exec;

        // `RegExpExec` abstract operation
        // https://tc39.github.io/ecma262/#sec-regexpexec
        module.exports = function(R, S) {
            var exec = R.exec;
            if (typeof exec === 'function') {
                var result = exec.call(R, S);
                if (typeof result !== 'object') {
                    throw new TypeError('RegExp exec method returned something other than an Object or null');
                }
                return result;
            }
            if (classof(R) !== 'RegExp') {
                throw new TypeError('RegExp#exec called on incompatible receiver');
            }
            return builtinExec.call(R, S);
        };


        /***/
    }),
    /* 65 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/_set-collection-from.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__( /*! ./_export */ 0);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);

        module.exports = function(COLLECTION) {
            $export($export.S, COLLECTION, {
                from: function from(source /* , mapFn, thisArg */ ) {
                    var mapFn = arguments[1];
                    var mapping, A, n, cb;
                    aFunction(this);
                    mapping = mapFn !== undefined;
                    if (mapping) aFunction(mapFn);
                    if (source == undefined) return new this();
                    A = [];
                    if (mapping) {
                        n = 0;
                        cb = ctx(mapFn, arguments[2], 2);
                        forOf(source, false, function(nextItem) {
                            A.push(cb(nextItem, n++));
                        });
                    } else {
                        forOf(source, false, A.push, A);
                    }
                    return new this(A);
                }
            });
        };


        /***/
    }),
    /* 66 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_set-collection-of.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-setmap-offrom/
        var $export = __webpack_require__( /*! ./_export */ 0);

        module.exports = function(COLLECTION) {
            $export($export.S, COLLECTION, { of: function of () {
                    var length = arguments.length;
                    var A = new Array(length);
                    while (length--) A[length] = arguments[length];
                    return new this(A);
                }
            });
        };


        /***/
    }),
    /* 67 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_string-at.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        // true  -> String#at
        // false -> String#codePointAt
        module.exports = function(TO_STRING) {
            return function(that, pos) {
                var s = String(defined(that));
                var i = toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                    TO_STRING ? s.charAt(i) : a :
                    TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };


        /***/
    }),
    /* 68 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./~/core-js/modules/_typed.js ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var uid = __webpack_require__( /*! ./_uid */ 44);
        var TYPED = uid('typed_array');
        var VIEW = uid('view');
        var ABV = !!(global.ArrayBuffer && global.DataView);
        var CONSTR = ABV;
        var i = 0;
        var l = 9;
        var Typed;

        var TypedArrayConstructors = (
            'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
        ).split(',');

        while (i < l) {
            if (Typed = global[TypedArrayConstructors[i++]]) {
                hide(Typed.prototype, TYPED, true);
                hide(Typed.prototype, VIEW, true);
            } else CONSTR = false;
        }

        module.exports = {
            ABV: ABV,
            CONSTR: CONSTR,
            TYPED: TYPED,
            VIEW: VIEW
        };


        /***/
    }),
    /* 69 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_user-agent.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var navigator = global.navigator;

        module.exports = navigator && navigator.userAgent || '';


        /***/
    }),
    /* 70 */
    /* exports provided: default */
    /* exports used: default */
    /*!*******************************!*\
      !*** ./src/js/Game/Gooper.js ***!
      \*******************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Constants_js__ = __webpack_require__( /*! ./Constants.js */ 28);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }



        var Gooper = function() {
            function Gooper(assetIndex, specialId, text, x, y, row, col, game) {
                _classCallCheck(this, Gooper);

                this._row = row;
                this._col = col;

                this._specialId = specialId;

                this._display = game.add.group();
                this._display.x = x;
                this._display.y = y;

                this._highlight = this._display.create(0, 0, 'gooper_highlight');
                this._highlight.visible = false;

                if (this._specialId === __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE) {
                    this._gooper = this._display.create(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, 'goopers', assetIndex);
                    this._gooper.inputEnabled = true;
                    this._gooper.input.useHandCursor = true;
                } else if (this._specialId === __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER) {
                    this._gooper = this._display.create(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, 'supergooper' + _.random(1, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].NUM_SUPER_GOOPER_OPTIONS));
                    this._gooper.inputEnabled = true;
                    this._gooper.input.useHandCursor = true;
                } else {
                    this._gooper = this._display.create(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, 'pooper');
                    this._gooper.animations.add('idle', null, 24, true);
                    this._gooper.play('idle');
                }
                this._gooper.gooper = this;

                this._rawText = text;
                if (text) {
                    if (this._specialId === __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE) {
                        this._text = this._display.create(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].TEXT_X, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].TEXT_Y, 'numbers');
                        this._text.frame = text - 1;
                    }
                }
            }

            _createClass(Gooper, [{
                key: 'highlight',
                value: function highlight() {
                    this._highlight.visible = true;
                }
            }, {
                key: 'unhighlight',
                value: function unhighlight() {
                    this._highlight.visible = false;
                }
            }, {
                key: 'makePooper',
                value: function makePooper() {
                    this._specialId = __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.POOPER;
                    this._display.remove(this._gooper, true);
                    this._gooper = this._display.create(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET, 'pooper');
                    this._gooper.animations.add('idle', null, 24, true);
                    this._gooper.play('idle');
                }
            }, {
                key: 'display',
                get: function get() {
                    return this._display;
                }
            }, {
                key: 'colorKey',
                get: function get() {
                    return Math.floor(this._gooper.frame / 2);
                }
            }, {
                key: 'row',
                set: function set(num) {
                    this._row = num;
                },
                get: function get() {
                    return this._row;
                }
            }, {
                key: 'col',
                get: function get() {
                    return this._col;
                }
            }, {
                key: 'rawText',
                get: function get() {
                    return this._rawText;
                }
            }, {
                key: 'specialId',
                get: function get() {
                    return this._specialId;
                }
            }]);

            return Gooper;
        }();

        /* harmony default export */
        __webpack_exports__["a"] = Gooper;

        /***/
    }),
    /* 71 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/_advance-string-index.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var at = __webpack_require__( /*! ./_string-at */ 67)(true);

        // `AdvanceStringIndex` abstract operation
        // https://tc39.github.io/ecma262/#sec-advancestringindex
        module.exports = function(S, index, unicode) {
            return index + (unicode ? at(S, index).length : 1);
        };


        /***/
    }),
    /* 72 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_array-fill.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        module.exports = function fill(value /* , start = 0, end = @length */ ) {
            var O = toObject(this);
            var length = toLength(O.length);
            var aLen = arguments.length;
            var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
            var end = aLen > 2 ? arguments[2] : undefined;
            var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
            while (endPos > index) O[index++] = value;
            return O;
        };


        /***/
    }),
    /* 73 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/_array-species-create.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 9.4.2.3 ArraySpeciesCreate(originalArray, length)
        var speciesConstructor = __webpack_require__( /*! ./_array-species-constructor */ 162);

        module.exports = function(original, length) {
            return new(speciesConstructor(original))(length);
        };


        /***/
    }),
    /* 74 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_create-property.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $defineProperty = __webpack_require__( /*! ./_object-dp */ 8);
        var createDesc = __webpack_require__( /*! ./_property-desc */ 40);

        module.exports = function(object, index, value) {
            if (index in object) $defineProperty.f(object, index, createDesc(0, value));
            else object[index] = value;
        };


        /***/
    }),
    /* 75 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_dom-create.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var document = __webpack_require__( /*! ./_global */ 2).document;
        // typeof document.createElement is 'object' in old IE
        var is = isObject(document) && isObject(document.createElement);
        module.exports = function(it) {
            return is ? document.createElement(it) : {};
        };


        /***/
    }),
    /* 76 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_enum-bug-keys.js ***!
      \*********************************************/
    /***/
    (function(module, exports) {

        // IE 8- don't enum bug keys
        module.exports = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');


        /***/
    }),
    /* 77 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_fails-is-regexp.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var MATCH = __webpack_require__( /*! ./_wks */ 5)('match');
        module.exports = function(KEY) {
            var re = /./;
            try {
                '/./' [KEY](re);
            } catch (e) {
                try {
                    re[MATCH] = false;
                    return !'/./' [KEY](re);
                } catch (f) { /* empty */ }
            }
            return true;
        };


        /***/
    }),
    /* 78 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_html.js ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var document = __webpack_require__( /*! ./_global */ 2).document;
        module.exports = document && document.documentElement;


        /***/
    }),
    /* 79 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/_inherit-if-required.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var setPrototypeOf = __webpack_require__( /*! ./_set-proto */ 88).set;
        module.exports = function(that, target, C) {
            var S = target.constructor;
            var P;
            if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
                setPrototypeOf(that, P);
            }
            return that;
        };


        /***/
    }),
    /* 80 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_is-array-iter.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // check on default Array iterator
        var Iterators = __webpack_require__( /*! ./_iterators */ 47);
        var ITERATOR = __webpack_require__( /*! ./_wks */ 5)('iterator');
        var ArrayProto = Array.prototype;

        module.exports = function(it) {
            return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
        };


        /***/
    }),
    /* 81 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_iter-create.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var create = __webpack_require__( /*! ./_object-create */ 37);
        var descriptor = __webpack_require__( /*! ./_property-desc */ 40);
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ 48);
        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        __webpack_require__( /*! ./_hide */ 11)(IteratorPrototype, __webpack_require__( /*! ./_wks */ 5)('iterator'), function() {
            return this;
        });

        module.exports = function(Constructor, NAME, next) {
            Constructor.prototype = create(IteratorPrototype, {
                next: descriptor(1, next)
            });
            setToStringTag(Constructor, NAME + ' Iterator');
        };


        /***/
    }),
    /* 82 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_iter-define.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */ 32);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var Iterators = __webpack_require__( /*! ./_iterators */ 47);
        var $iterCreate = __webpack_require__( /*! ./_iter-create */ 81);
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ 48);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var ITERATOR = __webpack_require__( /*! ./_wks */ 5)('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function() {
            return this;
        };

        module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            $iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS:
                        return function keys() {
                            return new Constructor(this, kind);
                        };
                    case VALUES:
                        return function values() {
                            return new Constructor(this, kind);
                        };
                }
                return function entries() {
                    return new Constructor(this, kind);
                };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = $native || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() {
                    return $native.call(this);
                };
            }
            // Define iterator
            if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                hide(proto, ITERATOR, $default);
            }
            // Plug for library
            Iterators[NAME] = $default;
            Iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED)
                    for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };


        /***/
    }),
    /* 83 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_math-expm1.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        // 20.2.2.14 Math.expm1(x)
        var $expm1 = Math.expm1;
        module.exports = (!$expm1
            // Old FF bug
            ||
            $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
            // Tor Browser bug
            ||
            $expm1(-2e-17) != -2e-17
        ) ? function expm1(x) {
            return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
        } : $expm1;


        /***/
    }),
    /* 84 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_math-sign.js ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        // 20.2.2.28 Math.sign(x)
        module.exports = Math.sign || function sign(x) {
            // eslint-disable-next-line no-self-compare
            return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
        };


        /***/
    }),
    /* 85 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_microtask.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var macrotask = __webpack_require__( /*! ./_task */ 93).set;
        var Observer = global.MutationObserver || global.WebKitMutationObserver;
        var process = global.process;
        var Promise = global.Promise;
        var isNode = __webpack_require__( /*! ./_cof */ 18)(process) == 'process';

        module.exports = function() {
            var head, last, notify;

            var flush = function() {
                var parent, fn;
                if (isNode && (parent = process.domain)) parent.exit();
                while (head) {
                    fn = head.fn;
                    head = head.next;
                    try {
                        fn();
                    } catch (e) {
                        if (head) notify();
                        else last = undefined;
                        throw e;
                    }
                }
                last = undefined;
                if (parent) parent.enter();
            };

            // Node.js
            if (isNode) {
                notify = function() {
                    process.nextTick(flush);
                };
                // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
            } else if (Observer && !(global.navigator && global.navigator.standalone)) {
                var toggle = true;
                var node = document.createTextNode('');
                new Observer(flush).observe(node, {
                    characterData: true
                }); // eslint-disable-line no-new
                notify = function() {
                    node.data = toggle = !toggle;
                };
                // environments with maybe non-completely correct, but existent Promise
            } else if (Promise && Promise.resolve) {
                // Promise.resolve without an argument throws an error in LG WebOS 2
                var promise = Promise.resolve(undefined);
                notify = function() {
                    promise.then(flush);
                };
                // for other environments - macrotask based on:
                // - setImmediate
                // - MessageChannel
                // - window.postMessag
                // - onreadystatechange
                // - setTimeout
            } else {
                notify = function() {
                    // strange IE + webpack dev server bug - use .call(global)
                    macrotask.call(global, flush);
                };
            }

            return function(fn) {
                var task = {
                    fn: fn,
                    next: undefined
                };
                if (last) last.next = task;
                if (!head) {
                    head = task;
                    notify();
                }
                last = task;
            };
        };


        /***/
    }),
    /* 86 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************************!*\
      !*** ./~/core-js/modules/_new-promise-capability.js ***!
      \******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 25.4.1.5 NewPromiseCapability(C)
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);

        function PromiseCapability(C) {
            var resolve, reject;
            this.promise = new C(function($$resolve, $$reject) {
                if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                resolve = $$resolve;
                reject = $$reject;
            });
            this.resolve = aFunction(resolve);
            this.reject = aFunction(reject);
        }

        module.exports.f = function(C) {
            return new PromiseCapability(C);
        };


        /***/
    }),
    /* 87 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_regexp-exec.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var regexpFlags = __webpack_require__( /*! ./_flags */ 51);

        var nativeExec = RegExp.prototype.exec;
        // This always refers to the native implementation, because the
        // String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
        // which loads this file before patching the method.
        var nativeReplace = String.prototype.replace;

        var patchedExec = nativeExec;

        var LAST_INDEX = 'lastIndex';

        var UPDATES_LAST_INDEX_WRONG = (function() {
            var re1 = /a/,
                re2 = /b*/g;
            nativeExec.call(re1, 'a');
            nativeExec.call(re2, 'a');
            return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
        })();

        // nonparticipating capturing group, copied from es5-shim's String#split patch.
        var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

        var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

        if (PATCH) {
            patchedExec = function exec(str) {
                var re = this;
                var lastIndex, reCopy, match, i;

                if (NPCG_INCLUDED) {
                    reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
                }
                if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

                match = nativeExec.call(re, str);

                if (UPDATES_LAST_INDEX_WRONG && match) {
                    re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
                }
                if (NPCG_INCLUDED && match && match.length > 1) {
                    // Fix browsers whose `exec` methods don't consistently return `undefined`
                    // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
                    // eslint-disable-next-line no-loop-func
                    nativeReplace.call(match[0], reCopy, function() {
                        for (i = 1; i < arguments.length - 2; i++) {
                            if (arguments[i] === undefined) match[i] = undefined;
                        }
                    });
                }

                return match;
            };
        }

        module.exports = patchedExec;


        /***/
    }),
    /* 88 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_set-proto.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var check = function(O, proto) {
            anObject(O);
            if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        module.exports = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                function(test, buggy, set) {
                    try {
                        set = __webpack_require__( /*! ./_ctx */ 20)(Function.call, __webpack_require__( /*! ./_object-gopd */ 15).f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) {
                        buggy = true;
                    }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
            check: check
        };


        /***/
    }),
    /* 89 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_shared-key.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var shared = __webpack_require__( /*! ./_shared */ 54)('keys');
        var uid = __webpack_require__( /*! ./_uid */ 44);
        module.exports = function(key) {
            return shared[key] || (shared[key] = uid(key));
        };


        /***/
    }),
    /* 90 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/_string-context.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // helper for String#{startsWith, endsWith, includes}
        var isRegExp = __webpack_require__( /*! ./_is-regexp */ 60);
        var defined = __webpack_require__( /*! ./_defined */ 24);

        module.exports = function(that, searchString, NAME) {
            if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
            return String(defined(that));
        };


        /***/
    }),
    /* 91 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_string-repeat.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var defined = __webpack_require__( /*! ./_defined */ 24);

        module.exports = function repeat(count) {
            var str = String(defined(this));
            var res = '';
            var n = toInteger(count);
            if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
            for (; n > 0;
                (n >>>= 1) && (str += str))
                if (n & 1) res += str;
            return res;
        };


        /***/
    }),
    /* 92 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_string-ws.js ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
            '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


        /***/
    }),
    /* 93 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_task.js ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var invoke = __webpack_require__( /*! ./_invoke */ 115);
        var html = __webpack_require__( /*! ./_html */ 78);
        var cel = __webpack_require__( /*! ./_dom-create */ 75);
        var global = __webpack_require__( /*! ./_global */ 2);
        var process = global.process;
        var setTask = global.setImmediate;
        var clearTask = global.clearImmediate;
        var MessageChannel = global.MessageChannel;
        var Dispatch = global.Dispatch;
        var counter = 0;
        var queue = {};
        var ONREADYSTATECHANGE = 'onreadystatechange';
        var defer, channel, port;
        var run = function() {
            var id = +this;
            // eslint-disable-next-line no-prototype-builtins
            if (queue.hasOwnProperty(id)) {
                var fn = queue[id];
                delete queue[id];
                fn();
            }
        };
        var listener = function(event) {
            run.call(event.data);
        };
        // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
        if (!setTask || !clearTask) {
            setTask = function setImmediate(fn) {
                var args = [];
                var i = 1;
                while (arguments.length > i) args.push(arguments[i++]);
                queue[++counter] = function() {
                    // eslint-disable-next-line no-new-func
                    invoke(typeof fn == 'function' ? fn : Function(fn), args);
                };
                defer(counter);
                return counter;
            };
            clearTask = function clearImmediate(id) {
                delete queue[id];
            };
            // Node.js 0.8-
            if (__webpack_require__( /*! ./_cof */ 18)(process) == 'process') {
                defer = function(id) {
                    process.nextTick(ctx(run, id, 1));
                };
                // Sphere (JS game engine) Dispatch API
            } else if (Dispatch && Dispatch.now) {
                defer = function(id) {
                    Dispatch.now(ctx(run, id, 1));
                };
                // Browsers with MessageChannel, includes WebWorkers
            } else if (MessageChannel) {
                channel = new MessageChannel();
                port = channel.port2;
                channel.port1.onmessage = listener;
                defer = ctx(port.postMessage, port, 1);
                // Browsers with postMessage, skip WebWorkers
                // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
            } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                defer = function(id) {
                    global.postMessage(id + '', '*');
                };
                global.addEventListener('message', listener, false);
                // IE8-
            } else if (ONREADYSTATECHANGE in cel('script')) {
                defer = function(id) {
                    html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function() {
                        html.removeChild(this);
                        run.call(id);
                    };
                };
                // Rest old browsers
            } else {
                defer = function(id) {
                    setTimeout(ctx(run, id, 1), 0);
                };
            }
        }
        module.exports = {
            set: setTask,
            clear: clearTask
        };


        /***/
    }),
    /* 94 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/_typed-buffer.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ 2);
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var LIBRARY = __webpack_require__( /*! ./_library */ 32);
        var $typed = __webpack_require__( /*! ./_typed */ 68);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var toIndex = __webpack_require__( /*! ./_to-index */ 134);
        var gOPN = __webpack_require__( /*! ./_object-gopn */ 38).f;
        var dP = __webpack_require__( /*! ./_object-dp */ 8).f;
        var arrayFill = __webpack_require__( /*! ./_array-fill */ 72);
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ 48);
        var ARRAY_BUFFER = 'ArrayBuffer';
        var DATA_VIEW = 'DataView';
        var PROTOTYPE = 'prototype';
        var WRONG_LENGTH = 'Wrong length!';
        var WRONG_INDEX = 'Wrong index!';
        var $ArrayBuffer = global[ARRAY_BUFFER];
        var $DataView = global[DATA_VIEW];
        var Math = global.Math;
        var RangeError = global.RangeError;
        // eslint-disable-next-line no-shadow-restricted-names
        var Infinity = global.Infinity;
        var BaseBuffer = $ArrayBuffer;
        var abs = Math.abs;
        var pow = Math.pow;
        var floor = Math.floor;
        var log = Math.log;
        var LN2 = Math.LN2;
        var BUFFER = 'buffer';
        var BYTE_LENGTH = 'byteLength';
        var BYTE_OFFSET = 'byteOffset';
        var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
        var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
        var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

        // IEEE754 conversions based on https://github.com/feross/ieee754
        function packIEEE754(value, mLen, nBytes) {
            var buffer = new Array(nBytes);
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
            var i = 0;
            var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
            var e, m, c;
            value = abs(value);
            // eslint-disable-next-line no-self-compare
            if (value != value || value === Infinity) {
                // eslint-disable-next-line no-self-compare
                m = value != value ? 1 : 0;
                e = eMax;
            } else {
                e = floor(log(value) / LN2);
                if (value * (c = pow(2, -e)) < 1) {
                    e--;
                    c *= 2;
                }
                if (e + eBias >= 1) {
                    value += rt / c;
                } else {
                    value += rt * pow(2, 1 - eBias);
                }
                if (value * c >= 2) {
                    e++;
                    c /= 2;
                }
                if (e + eBias >= eMax) {
                    m = 0;
                    e = eMax;
                } else if (e + eBias >= 1) {
                    m = (value * c - 1) * pow(2, mLen);
                    e = e + eBias;
                } else {
                    m = value * pow(2, eBias - 1) * pow(2, mLen);
                    e = 0;
                }
            }
            for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
            e = e << mLen | m;
            eLen += mLen;
            for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
            buffer[--i] |= s * 128;
            return buffer;
        }

        function unpackIEEE754(buffer, mLen, nBytes) {
            var eLen = nBytes * 8 - mLen - 1;
            var eMax = (1 << eLen) - 1;
            var eBias = eMax >> 1;
            var nBits = eLen - 7;
            var i = nBytes - 1;
            var s = buffer[i--];
            var e = s & 127;
            var m;
            s >>= 7;
            for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
            m = e & (1 << -nBits) - 1;
            e >>= -nBits;
            nBits += mLen;
            for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
            if (e === 0) {
                e = 1 - eBias;
            } else if (e === eMax) {
                return m ? NaN : s ? -Infinity : Infinity;
            } else {
                m = m + pow(2, mLen);
                e = e - eBias;
            }
            return (s ? -1 : 1) * m * pow(2, e - mLen);
        }

        function unpackI32(bytes) {
            return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
        }

        function packI8(it) {
            return [it & 0xff];
        }

        function packI16(it) {
            return [it & 0xff, it >> 8 & 0xff];
        }

        function packI32(it) {
            return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
        }

        function packF64(it) {
            return packIEEE754(it, 52, 8);
        }

        function packF32(it) {
            return packIEEE754(it, 23, 4);
        }

        function addGetter(C, key, internal) {
            dP(C[PROTOTYPE], key, {
                get: function() {
                    return this[internal];
                }
            });
        }

        function get(view, bytes, index, isLittleEndian) {
            var numIndex = +index;
            var intIndex = toIndex(numIndex);
            if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b;
            var start = intIndex + view[$OFFSET];
            var pack = store.slice(start, start + bytes);
            return isLittleEndian ? pack : pack.reverse();
        }

        function set(view, bytes, index, conversion, value, isLittleEndian) {
            var numIndex = +index;
            var intIndex = toIndex(numIndex);
            if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
            var store = view[$BUFFER]._b;
            var start = intIndex + view[$OFFSET];
            var pack = conversion(+value);
            for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
        }

        if (!$typed.ABV) {
            $ArrayBuffer = function ArrayBuffer(length) {
                anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
                var byteLength = toIndex(length);
                this._b = arrayFill.call(new Array(byteLength), 0);
                this[$LENGTH] = byteLength;
            };

            $DataView = function DataView(buffer, byteOffset, byteLength) {
                anInstance(this, $DataView, DATA_VIEW);
                anInstance(buffer, $ArrayBuffer, DATA_VIEW);
                var bufferLength = buffer[$LENGTH];
                var offset = toInteger(byteOffset);
                if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
                byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
                if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
                this[$BUFFER] = buffer;
                this[$OFFSET] = offset;
                this[$LENGTH] = byteLength;
            };

            if (DESCRIPTORS) {
                addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
                addGetter($DataView, BUFFER, '_b');
                addGetter($DataView, BYTE_LENGTH, '_l');
                addGetter($DataView, BYTE_OFFSET, '_o');
            }

            redefineAll($DataView[PROTOTYPE], {
                getInt8: function getInt8(byteOffset) {
                    return get(this, 1, byteOffset)[0] << 24 >> 24;
                },
                getUint8: function getUint8(byteOffset) {
                    return get(this, 1, byteOffset)[0];
                },
                getInt16: function getInt16(byteOffset /* , littleEndian */ ) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
                },
                getUint16: function getUint16(byteOffset /* , littleEndian */ ) {
                    var bytes = get(this, 2, byteOffset, arguments[1]);
                    return bytes[1] << 8 | bytes[0];
                },
                getInt32: function getInt32(byteOffset /* , littleEndian */ ) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1]));
                },
                getUint32: function getUint32(byteOffset /* , littleEndian */ ) {
                    return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
                },
                getFloat32: function getFloat32(byteOffset /* , littleEndian */ ) {
                    return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
                },
                getFloat64: function getFloat64(byteOffset /* , littleEndian */ ) {
                    return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
                },
                setInt8: function setInt8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setUint8: function setUint8(byteOffset, value) {
                    set(this, 1, byteOffset, packI8, value);
                },
                setInt16: function setInt16(byteOffset, value /* , littleEndian */ ) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setUint16: function setUint16(byteOffset, value /* , littleEndian */ ) {
                    set(this, 2, byteOffset, packI16, value, arguments[2]);
                },
                setInt32: function setInt32(byteOffset, value /* , littleEndian */ ) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setUint32: function setUint32(byteOffset, value /* , littleEndian */ ) {
                    set(this, 4, byteOffset, packI32, value, arguments[2]);
                },
                setFloat32: function setFloat32(byteOffset, value /* , littleEndian */ ) {
                    set(this, 4, byteOffset, packF32, value, arguments[2]);
                },
                setFloat64: function setFloat64(byteOffset, value /* , littleEndian */ ) {
                    set(this, 8, byteOffset, packF64, value, arguments[2]);
                }
            });
        } else {
            if (!fails(function() {
                    $ArrayBuffer(1);
                }) || !fails(function() {
                    new $ArrayBuffer(-1); // eslint-disable-line no-new
                }) || fails(function() {
                    new $ArrayBuffer(); // eslint-disable-line no-new
                    new $ArrayBuffer(1.5); // eslint-disable-line no-new
                    new $ArrayBuffer(NaN); // eslint-disable-line no-new
                    return $ArrayBuffer.name != ARRAY_BUFFER;
                })) {
                $ArrayBuffer = function ArrayBuffer(length) {
                    anInstance(this, $ArrayBuffer);
                    return new BaseBuffer(toIndex(length));
                };
                var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
                for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
                    if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
                }
                if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
            }
            // iOS Safari 7.x bug
            var view = new $DataView(new $ArrayBuffer(2));
            var $setInt8 = $DataView[PROTOTYPE].setInt8;
            view.setInt8(0, 2147483648);
            view.setInt8(1, 2147483649);
            if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
                setInt8: function setInt8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                },
                setUint8: function setUint8(byteOffset, value) {
                    $setInt8.call(this, byteOffset, value << 24 >> 24);
                }
            }, true);
        }
        setToStringTag($ArrayBuffer, ARRAY_BUFFER);
        setToStringTag($DataView, DATA_VIEW);
        hide($DataView[PROTOTYPE], $typed.VIEW, true);
        exports[ARRAY_BUFFER] = $ArrayBuffer;
        exports[DATA_VIEW] = $DataView;


        /***/
    }),
    /* 95 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_wks-define.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var core = __webpack_require__( /*! ./_core */ 19);
        var LIBRARY = __webpack_require__( /*! ./_library */ 32);
        var wksExt = __webpack_require__( /*! ./_wks-ext */ 135);
        var defineProperty = __webpack_require__( /*! ./_object-dp */ 8).f;
        module.exports = function(name) {
            var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
                value: wksExt.f(name)
            });
        };


        /***/
    }),
    /* 96 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/core.get-iterator-method.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var classof = __webpack_require__( /*! ./_classof */ 46);
        var ITERATOR = __webpack_require__( /*! ./_wks */ 5)('iterator');
        var Iterators = __webpack_require__( /*! ./_iterators */ 47);
        module.exports = __webpack_require__( /*! ./_core */ 19).getIteratorMethod = function(it) {
            if (it != undefined) return it[ITERATOR] ||
                it['@@iterator'] ||
                Iterators[classof(it)];
        };


        /***/
    }),
    /* 97 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.array.iterator.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var addToUnscopables = __webpack_require__( /*! ./_add-to-unscopables */ 31);
        var step = __webpack_require__( /*! ./_iter-step */ 118);
        var Iterators = __webpack_require__( /*! ./_iterators */ 47);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);

        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        module.exports = __webpack_require__( /*! ./_iter-define */ 82)(Array, 'Array', function(iterated, kind) {
            this._t = toIObject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return step(1);
            }
            if (kind == 'keys') return step(0, index);
            if (kind == 'values') return step(0, O[index]);
            return step(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        Iterators.Arguments = Iterators.Array;

        addToUnscopables('keys');
        addToUnscopables('values');
        addToUnscopables('entries');


        /***/
    }),
    /* 98 */
    ,
    /* 99 */
    /* exports provided: default */
    /* exports used: default */
    /*!**************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/ExitButton.js ***!
      \**************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__util_GameBridge__ = __webpack_require__( /*! ../util/GameBridge */ 50);


        class ExitButton {
            /**
             * @param  {State} gameState    the current state - used as a parent for the button
             * @param  {number} x           left coordinate of the button
             * @param  {number} y           top coordinate of the button
             * @param  {AssetOptions} asset see typedef in StartButton
             */
            constructor(gameState, x, y, asset) {
                this._button = gameState.add.button(x, y, asset.atlas, () => {
                    __WEBPACK_IMPORTED_MODULE_0__util_GameBridge__["a" /* gameBridge */ ].close();
                }, null, asset.over, asset.out, asset.down, asset.up);
                this._button.setUpSound(asset.upSound);
            }

            get button() {
                return this._button;
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = ExitButton;



        /***/
    }),
    /* 100 */
    /* exports provided: default */
    /* exports used: default */
    /*!**************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/HelpDialog.js ***!
      \**************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


        class HelpDialog {
            constructor(gameState, onComplete, helpScreens, clickSound) {
                this._onComplete = onComplete;
                this._gameState = gameState;
                this._helpScreens = helpScreens;
                this._activeScreen = 0;
                this._clickSound = clickSound;

                this._screenAssets = [];

                this._background = gameState.add.image(0, 0, 'help_background');
                this._background.inputEnabled = true;
                this._background.input.useHandCursor = true;
                this._background.events.onInputDown.add(this.onClick, this);

                this.showScreen();
            }

            onClick() {
                ++this._activeScreen;
                if (this._activeScreen >= this._helpScreens.length) {
                    this.removeCurrentScreen();
                    this._gameState.world.remove(this._background, true);
                    this._onComplete();
                } else {
                    this.removeCurrentScreen();
                    this.showScreen();
                }
                if (this._clickSound) {
                    this._clickSound.play();
                }
            }

            removeCurrentScreen() {
                this._screenAssets.forEach((asset) => {
                    this._gameState.world.remove(asset, true);
                });
            }

            showScreen() {
                const screen = this._helpScreens[this._activeScreen];
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(screen, (dataObj) => {
                    if (dataObj.type === 'image') {
                        this._screenAssets.push(this._gameState.add.image(dataObj.x, dataObj.y, dataObj.assetName));
                    } else if (dataObj.type === 'text') {
                        this._screenAssets.push(this._gameState.add.text(dataObj.x, dataObj.y, dataObj.text, dataObj.style));
                    }
                });
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = HelpDialog;



        /***/
    }),
    /* 101 */
    /* exports provided: default */
    /* exports used: default */
    /*!*********************************!*\
      !*** ./src/js/Game/GroupBox.js ***!
      \*********************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Constants_js__ = __webpack_require__( /*! ./Constants.js */ 28);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }



        var GroupBox = function() {
            function GroupBox(game) {
                _classCallCheck(this, GroupBox);

                this._display = game.add.sprite(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].GROUP_BOX_X, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].GROUP_BOX_Y, 'groupBox', 0);
            }

            _createClass(GroupBox, [{
                key: 'setColor',
                value: function setColor(colorKey) {
                    var frameIndex = 0;
                    switch (colorKey) {
                        case 0:
                            frameIndex = 6;
                            break;

                        case 1:
                            frameIndex = 5;
                            break;

                        case 2:
                            frameIndex = 4;
                            break;

                        case 3:
                            frameIndex = 3;
                            break;

                        case 4:
                            frameIndex = 2;
                            break;

                        case 5:
                            frameIndex = 1;
                            break;
                    }

                    this._display.frame = frameIndex;
                }
            }, {
                key: 'setText',
                value: function setText(text, game) {
                    this._display.frame = 7;
                    this._text = game.add.text(0, 0, text, {
                        boundsAlignH: 'center',
                        boundsAlignV: 'middle'
                    });
                    this._text.setTextBounds(this._display.x, this._display.y, this._display.width, this._display.height);
                }
            }]);

            return GroupBox;
        }();

        /* harmony default export */
        __webpack_exports__["a"] = GroupBox;

        /***/
    }),
    /* 102 */
    /* exports provided: default */
    /* exports used: default */
    /*!***************************************!*\
      !*** ./src/js/Game/Modes/GameMode.js ***!
      \***************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Constants_js__ = __webpack_require__( /*! ../Constants.js */ 28);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__util_ArrayFuncs_js__ = __webpack_require__( /*! ../../util/ArrayFuncs.js */ 104);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }




        /**
         * Base class for the various game modes.  The modes should encapulate the logic for a particular grouping criteria.  The display of the level should be handled by ../GameStates/Game.js.
         */

        var GameMode = function() {
            function GameMode() {
                _classCallCheck(this, GameMode);
            }

            _createClass(GameMode, [{
                key: 'createBoard',

                /**
                 * Creates a board for the game mode.  This should populate this._board with a 2D array in column major order representing the board.
                 * @access public
                 * @param {Number} boardWidth - integer for number of Goopers wide the board should be
                 * @param {Number} boardHeight - integer for number of Goopers wide the board should be
                 * @param {Function} colToX - function for converting a column index (left = 0, increments to the right) to an x coordinate
                 * @param {Function} rowToY - function for converting a row index (bottom = 0, increments upward) to an y coordinate
                 * @param {Phaser.State} gameState - game state to add the Goopers to
                 */
                value: function createBoard(boardWidth, boardHeight, colToX, rowToY, gameState) {
                    throw new Error('Subclasses must override createBoard');
                }

                /**
                 * Retrieves the board
                 * @returns {Array<Array<Gooper> >} - a column major 2D array representing the board
                 */

            }, {
                key: 'allowAddToGroup',


                /**
                 * Checks whether a particular gooper can be added to the selection group
                 * @access public
                 * @param {Array<Gooper>} groupSoFar - array containing the current selection
                 * @param {Gooper} gooper - Gooper under consideration for adding to the group
                 * @param {boolean} backFill - true if this being called as part of the backfilling step, false if it is from user interaction
                 * @returns {boolean} true if the gooper can be added, false otherwise
                 */
                value: function allowAddToGroup(groupSoFar, gooper, backFill) {
                    throw new Error('Subclasses must override allowAddToGroup');
                }

                /**
                 * Called when a Gooper is added to the selection group
                 * @access public
                 * @param {Array<Gooper>} groupSoFar - array containing the current selection
                 * @param {Gooper} gooper - Gooper that was just added to the group
                 */

            }, {
                key: 'onAddToGroup',
                value: function onAddToGroup(groupSoFar, gooper) {
                    throw new Error('Subclasses must override onAddToGroup');
                }

                /**
                 * Called when a selection group is complete and about to be evaluated by isValidGroup
                 * @access public
                 */

            }, {
                key: 'onGroupingComplete',
                value: function onGroupingComplete() {
                    throw new Error('Subclasses must override onGroupingComplete');
                }

                /**
                 * Checks if a group is valid for removing
                 * @access public
                 * @param {Array<Gooper>} group - array containing the current selection
                 * @returns {boolean} true if the group is valid, false otherwise
                 */

            }, {
                key: 'isValidGroup',
                value: function isValidGroup(group) {
                    throw new Error('Subclasses must override isValidGroup');
                }

                /**
                 * Creates additional Goopers after the correctly selected group has been removed
                 * @access public
                 * @param {Array<Number>} numSpacesPerColumn - for each column, how many spaces are available for filling
                 * @param {Number} numRemainingGoopersCreatable - suggested max number of Goopers that can be brought on for the remainder of the level
                 * @param {Function} colToX - function for converting a column index (left = 0, increments to the right) to an x coordinate
                 * @param {Function} rowToY - function for converting a row index (bottom = 0, increments upward) to an y coordinate
                 * @param {Phaser.State} gameState - game state to add the Goopers to
                 * @returns {Array<Gooper>} - newly created Goopers
                 */

            }, {
                key: 'backFill',
                value: function backFill(numSpacesPerColumn, numRemainingGoopersCreatable, colToX, rowToY, gameState) {
                    this._resetChainCheckFlag();

                    var newGoopers = [];
                    var numSpaces = _.sum(numSpacesPerColumn);
                    var adjoiningExistingChains = _.sortBy(this._getChainsAdjoiningSpaces(numSpacesPerColumn), function(chain) {
                        return chain.length;
                    });
                    if (adjoiningExistingChains.length > 0 && numRemainingGoopersCreatable <= 0 && this.isValidGroup(adjoiningExistingChains[0])) {
                        return newGoopers;
                    }
                    var chainIndex = 0;
                    while (newGoopers.length < numSpaces && chainIndex < adjoiningExistingChains.length) {
                        newGoopers = _.concat(newGoopers, this._backFillChain(adjoiningExistingChains[chainIndex], colToX, rowToY, gameState));

                        ++chainIndex;
                    }

                    return newGoopers;
                }

                /**
                 * Checks if the game is over by the board being cleared
                 *
                 * @returns {boolean} true if the game is over, false otherwise
                 */

            }, {
                key: 'isGameOver',
                value: function isGameOver() {
                    return !this._anyValidMoves();
                }
            }, {
                key: '_anyValidMoves',
                value: function _anyValidMoves() {
                    var returnValue = false;

                    this._resetChainCheckFlag();
                    for (var col = 0; col < this._board.length && !returnValue; col++) {
                        for (var row = 0; row < this._board[col].length && !returnValue; row++) {
                            var chain = this._createChainFromBoard(col, row, null);
                            returnValue = this.isValidGroup(chain);
                        }
                    }

                    return returnValue;
                }
            }, {
                key: 'areGoopersAdjacent',
                value: function areGoopersAdjacent(gooper1, gooper2) {
                    return Math.abs(gooper1.row - gooper2.row) <= 1 && Math.abs(gooper1.col - gooper2.col) <= 1;
                }

                /**
                 * Retrieves the index of a random column that has at least 1 empty cell
                 * @access protected
                 * @returns {Number} index of a column with at least 1 empty cell
                 */

            }, {
                key: '_getRandomColumnIndexWithEmptyCells',
                value: function _getRandomColumnIndexWithEmptyCells() {
                    var colIndicesWithEmptyCells = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_ArrayFuncs_js__["a" /* findAllIndices */ ])(this._board, function(column) {
                        return -1 !== _.findIndex(column, function(cell) {
                            return cell === null;
                        });
                    });
                    return _.sample(colIndicesWithEmptyCells);
                }

                /**
                 * Retrieves the index of a row where in the specified column the cell is empty
                 * @access protected
                 * @returns {Number} row index of a random empty cell in the specified column
                 */

            }, {
                key: '_getRandomEmptyCellRowIndex',
                value: function _getRandomEmptyCellRowIndex(colIndex) {
                    var emptyCellIndices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_ArrayFuncs_js__["a" /* findAllIndices */ ])(this._board[colIndex], function(cell) {
                        return cell === null;
                    });
                    return _.sample(emptyCellIndices);
                }

                /**
                 * Retrieves all the column and row indices of empty cells that are adjacent (including diagonals) to the specified cell
                 * @access protected
                 * @param {Number} col - column index of the cell to search neighbors of
                 * @param {Number} row - row index of the cell to search neighbors of
                 * @returns {Array<Object>} array of column/row indices for empty adjacent cells
                 */

            }, {
                key: '_findEmptyNeighbors',
                value: function _findEmptyNeighbors(col, row) {
                    var _this = this;

                    return this._findNeighborsPredicate(col, row, function(x, y) {
                        return _this._board[x][y] === null;
                    });
                }
            }, {
                key: 'findPopulatedNonSpeicalNeighbors',
                value: function findPopulatedNonSpeicalNeighbors(col, row) {
                    var _this2 = this;

                    return this._findNeighborsPredicate(col, row, function(x, y) {
                        return !!_this2._board[x][y] && _this2._board[x][y].specialId === __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;
                    });
                }
            }, {
                key: '_findNeighborsPredicate',
                value: function _findNeighborsPredicate(col, row, pred) {
                    var back = [];

                    for (var x = col - 1; x <= col + 1; x++) {
                        for (var y = row - 1; y <= row + 1; y++) {
                            if (x >= 0 && y >= 0 && x < this._board.length && y < this._board[0].length && !(x === col && y === row) && pred(x, y)) {
                                back.push({
                                    col: x,
                                    row: y
                                });
                            }
                        }
                    }

                    return back;
                }

                /**
                 * Adds Goopers to the chain to back fill the board
                 * @access protected
                 * @param {Array<Gooper>} chain - Chain/group of goopers to add goopers to
                 * @param {Function} colToX - function for converting a column index (left = 0, increments to the right) to an x coordinate
                 * @param {Function} rowToY - function for converting a row index (bottom = 0, increments upward) to an y coordinate
                 * @param {Phaser.State} gameState - game state to add the Goopers to
                 * @returns {Array<Goopers>} array of the new Goopers that were added to the board
                 */

            }, {
                key: '_backFillChain',
                value: function _backFillChain(chain, colToX, rowToY, gameState) {
                    throw new Error('Subclasses must override _backFillChain');
                }
            }, {
                key: '_getChainsAdjoiningSpaces',
                value: function _getChainsAdjoiningSpaces(numSpacesPerColumn) {
                    var existingChains = [];

                    for (var col = 0; col < this._board.length; col++) {
                        this._getChainAdjoiningSpaceInColumn(col, numSpacesPerColumn[col], existingChains);
                        this._getChainAdjoiningSpaceInAdjacentColumn(col, col - 1, numSpacesPerColumn[col], existingChains);
                        this._getChainAdjoiningSpaceInAdjacentColumn(col, col + 1, numSpacesPerColumn[col], existingChains);
                    }

                    return existingChains;
                }
            }, {
                key: '_getChainAdjoiningSpaceInColumn',
                value: function _getChainAdjoiningSpaceInColumn(col, numSpaces, existingChains) {
                    if (numSpaces > 0) {
                        // spaces in a column means only the top remaining Gooper in the column needs to be checked
                        var column = this._board[col];
                        var row = column.length - numSpaces - 1;
                        if (row < column.length) {
                            var chain = this._createChainFromBoard(col, row, existingChains);
                            if (chain.length > 0) {
                                existingChains.push(chain);
                            }
                        }
                    }
                }
            }, {
                key: '_getChainAdjoiningSpaceInAdjacentColumn',
                value: function _getChainAdjoiningSpaceInAdjacentColumn(col, adjCol, numSpaces, existingChains) {
                    if (adjCol >= 0 && adjCol < this._board.length - 1) {
                        // spaces in an adjoining column need each Gooper next to or on a diagonal from a space to be checked
                        var topPopulatedRow = this._board[col].length - numSpaces - 1;
                        var adjColumn = this._board[adjCol];
                        for (var row = adjColumn.length - 1; row >= topPopulatedRow; row--) {
                            if (adjColumn[row]) {
                                var chain = this._createChainFromBoard(adjCol, row, existingChains);
                                if (chain.length > 0) {
                                    existingChains.push(chain);
                                }
                            }
                        }
                    }
                }
            }, {
                key: '_createChainFromBoard',
                value: function _createChainFromBoard(col, row, existingChains) {
                    var _this3 = this;

                    var chainSoFar = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

                    var gooper = this._board[col][row];
                    if (gooper && !gooper.partOfChain) {
                        if (this.allowAddToGroup(chainSoFar, gooper, true)) {
                            gooper.partOfChain = true;
                            chainSoFar.push(gooper);
                        }
                        if (gooper.partOfChain) {
                            var neighbors = this._getAdjacentMatchingGoopers(gooper);
                            _.forEach(neighbors, function(neighbor) {
                                _this3._createChainFromBoard(neighbor.col, neighbor.row, existingChains, chainSoFar);
                            });
                        }
                    }

                    return chainSoFar;
                }
            }, {
                key: '_getAdjacentMatchingGoopers',
                value: function _getAdjacentMatchingGoopers(gooper) {
                    var returnValue = [];
                    var tmpGroup = [gooper];

                    for (var col = gooper.col - 1; col <= gooper.col + 1; col++) {
                        if (col >= 0 && col < this._board.length) {
                            for (var row = gooper.row - 1; row <= gooper.row + 1; row++) {
                                if (row >= 0 && row < this._board[0].length) {
                                    var checkGooper = this._board[col][row];
                                    if (checkGooper && gooper != checkGooper && this.allowAddToGroup(tmpGroup, checkGooper, true)) {
                                        returnValue.push(checkGooper);
                                    }
                                }
                            }
                        }
                    }

                    return returnValue;
                }
            }, {
                key: '_resetChainCheckFlag',
                value: function _resetChainCheckFlag() {
                    for (var col = 0; col < this._board.length; col++) {
                        var column = this._board[col];
                        for (var row = 0; row < column.length; row++) {
                            var gooper = column[row];
                            if (gooper) {
                                gooper.partOfChain = false;
                            }
                        }
                    }
                }
            }, {
                key: '_getSpecialIdForNewGooper',
                value: function _getSpecialIdForNewGooper() {
                    var specialId = __WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;

                    var rnd = Math.random();
                    var specialCheck = 0;
                    _.forEach(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_CHANCES, function(chance, key) {
                        specialCheck += chance;
                        if (rnd < specialCheck) {
                            specialId = key;
                            return false;
                        }
                    });

                    return specialId;
                }
            }, {
                key: 'board',
                get: function get() {
                    return this._board;
                }
            }]);

            return GameMode;
        }();

        /* harmony default export */
        __webpack_exports__["a"] = GameMode;

        /***/
    }),
    /* 103 */
    /* exports provided: scoreManager */
    /* exports used: scoreManager */
    /*!*************************************!*\
      !*** ./src/js/Game/ScoreManager.js ***!
      \*************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (binding) */
        __webpack_require__.d(__webpack_exports__, "a", function() {
            return scoreManager;
        });
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var COMPLETE_SCORE = 10000;
        var SCORE_PER_ROT_BEYOND = -10;
        var POINTS_PER_SECOND = 10;

        var ScoreManager = function() {
            function ScoreManager() {
                _classCallCheck(this, ScoreManager);

                this._currentScore = 0;
                this._updateSignal = new Phaser.Signal();
            }

            _createClass(ScoreManager, [{
                key: "updateScore",
                value: function updateScore(gooperPoints, timePoints) {
                    this._currentScore += gooperPoints + timePoints;
                    this._updateSignal.dispatch(this._currentScore);
                }
            }, {
                key: "score",
                get: function get() {
                    return Math.max(Math.floor(this._currentScore), 0);
                }
            }, {
                key: "updateSignal",
                get: function get() {
                    return this._updateSignal;
                }
            }]);

            return ScoreManager;
        }();

        var scoreManager = new ScoreManager();

        /***/
    }),
    /* 104 */
    /* exports provided: findAllIndices */
    /* exports used: findAllIndices */
    /*!***********************************!*\
      !*** ./src/js/util/ArrayFuncs.js ***!
      \***********************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony export (immutable) */
        __webpack_exports__["a"] = findAllIndices;

        /**
         * Finds all the indices in the specified array for which the predicate function returns a truthy value
         *
         * @param {Array} arr - array to search
         * @param {function} predicate - function invoked for each element of the array
         *
         * @returns {Array<Number>} An array of indices for which predicate returned a truthy value
         */
        function findAllIndices(arr, predicate) {
            var back = [];

            _.forEach(arr, function(entry, i) {
                if (predicate(entry)) {
                    back.push(i);
                }
            });

            return back;
        }

        /***/
    }),
    /* 105 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/_a-number-value.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var cof = __webpack_require__( /*! ./_cof */ 18);
        module.exports = function(it, msg) {
            if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
            return +it;
        };


        /***/
    }),
    /* 106 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_array-copy-within.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);

        module.exports = [].copyWithin || function copyWithin(target /* = 0 */ , start /* = 0, end = @length */ ) {
            var O = toObject(this);
            var len = toLength(O.length);
            var to = toAbsoluteIndex(target, len);
            var from = toAbsoluteIndex(start, len);
            var end = arguments.length > 2 ? arguments[2] : undefined;
            var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
            var inc = 1;
            if (from < to && to < from + count) {
                inc = -1;
                from += count - 1;
                to += count - 1;
            }
            while (count-- > 0) {
                if (from in O) O[to] = O[from];
                else delete O[to];
                to += inc;
                from += inc;
            }
            return O;
        };


        /***/
    }),
    /* 107 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/_array-from-iterable.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var forOf = __webpack_require__( /*! ./_for-of */ 36);

        module.exports = function(iter, ITERATOR) {
            var result = [];
            forOf(iter, false, result.push, result, ITERATOR);
            return result;
        };


        /***/
    }),
    /* 108 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/_array-reduce.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var IObject = __webpack_require__( /*! ./_iobject */ 52);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);

        module.exports = function(that, callbackfn, aLen, memo, isRight) {
            aFunction(callbackfn);
            var O = toObject(that);
            var self = IObject(O);
            var length = toLength(O.length);
            var index = isRight ? length - 1 : 0;
            var i = isRight ? -1 : 1;
            if (aLen < 2)
                for (;;) {
                    if (index in self) {
                        memo = self[index];
                        index += i;
                        break;
                    }
                    index += i;
                    if (isRight ? index < 0 : length <= index) {
                        throw TypeError('Reduce of empty array with no initial value');
                    }
                }
            for (; isRight ? index >= 0 : length > index; index += i)
                if (index in self) {
                    memo = callbackfn(memo, self[index], index, O);
                }
            return memo;
        };


        /***/
    }),
    /* 109 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./~/core-js/modules/_bind.js ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var invoke = __webpack_require__( /*! ./_invoke */ 115);
        var arraySlice = [].slice;
        var factories = {};

        var construct = function(F, len, args) {
            if (!(len in factories)) {
                for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                // eslint-disable-next-line no-new-func
                factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
            }
            return factories[len](F, args);
        };

        module.exports = Function.bind || function bind(that /* , ...args */ ) {
            var fn = aFunction(this);
            var partArgs = arraySlice.call(arguments, 1);
            var bound = function( /* args... */ ) {
                var args = partArgs.concat(arraySlice.call(arguments));
                return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
            };
            if (isObject(fn.prototype)) bound.prototype = fn.prototype;
            return bound;
        };


        /***/
    }),
    /* 110 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_collection-strong.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var dP = __webpack_require__( /*! ./_object-dp */ 8).f;
        var create = __webpack_require__( /*! ./_object-create */ 37);
        var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);
        var $iterDefine = __webpack_require__( /*! ./_iter-define */ 82);
        var step = __webpack_require__( /*! ./_iter-step */ 118);
        var setSpecies = __webpack_require__( /*! ./_set-species */ 42);
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var fastKey = __webpack_require__( /*! ./_meta */ 33).fastKey;
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var SIZE = DESCRIPTORS ? '_s' : 'size';

        var getEntry = function(that, key) {
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return that._i[index];
            // frozen object case
            for (entry = that._f; entry; entry = entry.n) {
                if (entry.k == key) return entry;
            }
        };

        module.exports = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._t = NAME; // collection type
                    that._i = create(null); // index
                    that._f = undefined; // first entry
                    that._l = undefined; // last entry
                    that[SIZE] = 0; // size
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.1.3.1 Map.prototype.clear()
                    // 23.2.3.2 Set.prototype.clear()
                    clear: function clear() {
                        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                            entry.r = true;
                            if (entry.p) entry.p = entry.p.n = undefined;
                            delete data[entry.i];
                        }
                        that._f = that._l = undefined;
                        that[SIZE] = 0;
                    },
                    // 23.1.3.3 Map.prototype.delete(key)
                    // 23.2.3.4 Set.prototype.delete(value)
                    'delete': function(key) {
                        var that = validate(this, NAME);
                        var entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.n;
                            var prev = entry.p;
                            delete that._i[entry.i];
                            entry.r = true;
                            if (prev) prev.n = next;
                            if (next) next.p = prev;
                            if (that._f == entry) that._f = next;
                            if (that._l == entry) that._l = prev;
                            that[SIZE]--;
                        }
                        return !!entry;
                    },
                    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                    forEach: function forEach(callbackfn /* , that = undefined */ ) {
                        validate(this, NAME);
                        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var entry;
                        while (entry = entry ? entry.n : this._f) {
                            f(entry.v, entry.k, this);
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                        }
                    },
                    // 23.1.3.7 Map.prototype.has(key)
                    // 23.2.3.7 Set.prototype.has(value)
                    has: function has(key) {
                        return !!getEntry(validate(this, NAME), key);
                    }
                });
                if (DESCRIPTORS) dP(C.prototype, 'size', {
                    get: function() {
                        return validate(this, NAME)[SIZE];
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var entry = getEntry(that, key);
                var prev, index;
                // change existing entry
                if (entry) {
                    entry.v = value;
                    // create new entry
                } else {
                    that._l = entry = {
                        i: index = fastKey(key, true), // <- index
                        k: key, // <- key
                        v: value, // <- value
                        p: prev = that._l, // <- previous entry
                        n: undefined, // <- next entry
                        r: false // <- removed
                    };
                    if (!that._f) that._f = entry;
                    if (prev) prev.n = entry;
                    that[SIZE]++;
                    // add to index
                    if (index !== 'F') that._i[index] = entry;
                }
                return that;
            },
            getEntry: getEntry,
            setStrong: function(C, NAME, IS_MAP) {
                // add .keys, .values, .entries, [@@iterator]
                // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                $iterDefine(C, NAME, function(iterated, kind) {
                    this._t = validate(iterated, NAME); // target
                    this._k = kind; // kind
                    this._l = undefined; // previous
                }, function() {
                    var that = this;
                    var kind = that._k;
                    var entry = that._l;
                    // revert to the last existing entry
                    while (entry && entry.r) entry = entry.p;
                    // get next entry
                    if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                        // or finish the iteration
                        that._t = undefined;
                        return step(1);
                    }
                    // return step by kind
                    if (kind == 'keys') return step(0, entry.k);
                    if (kind == 'values') return step(0, entry.v);
                    return step(0, [entry.k, entry.v]);
                }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                // add [@@species], 23.1.2.2, 23.2.2.2
                setSpecies(NAME);
            }
        };


        /***/
    }),
    /* 111 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/_collection-to-json.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var classof = __webpack_require__( /*! ./_classof */ 46);
        var from = __webpack_require__( /*! ./_array-from-iterable */ 107);
        module.exports = function(NAME) {
            return function toJSON() {
                if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                return from(this);
            };
        };


        /***/
    }),
    /* 112 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_collection-weak.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
        var getWeak = __webpack_require__( /*! ./_meta */ 33).getWeak;
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);
        var createArrayMethod = __webpack_require__( /*! ./_array-methods */ 23);
        var $has = __webpack_require__( /*! ./_has */ 14);
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var arrayFind = createArrayMethod(5);
        var arrayFindIndex = createArrayMethod(6);
        var id = 0;

        // fallback for uncaught frozen keys
        var uncaughtFrozenStore = function(that) {
            return that._l || (that._l = new UncaughtFrozenStore());
        };
        var UncaughtFrozenStore = function() {
            this.a = [];
        };
        var findUncaughtFrozen = function(store, key) {
            return arrayFind(store.a, function(it) {
                return it[0] === key;
            });
        };
        UncaughtFrozenStore.prototype = {
            get: function(key) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) return entry[1];
            },
            has: function(key) {
                return !!findUncaughtFrozen(this, key);
            },
            set: function(key, value) {
                var entry = findUncaughtFrozen(this, key);
                if (entry) entry[1] = value;
                else this.a.push([key, value]);
            },
            'delete': function(key) {
                var index = arrayFindIndex(this.a, function(it) {
                    return it[0] === key;
                });
                if (~index) this.a.splice(index, 1);
                return !!~index;
            }
        };

        module.exports = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    anInstance(that, C, NAME, '_i');
                    that._t = NAME; // collection type
                    that._i = id++; // collection id
                    that._l = undefined; // leak store for uncaught frozen objects
                    if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                });
                redefineAll(C.prototype, {
                    // 23.3.3.2 WeakMap.prototype.delete(key)
                    // 23.4.3.3 WeakSet.prototype.delete(value)
                    'delete': function(key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
                        return data && $has(data, this._i) && delete data[this._i];
                    },
                    // 23.3.3.4 WeakMap.prototype.has(key)
                    // 23.4.3.4 WeakSet.prototype.has(value)
                    has: function has(key) {
                        if (!isObject(key)) return false;
                        var data = getWeak(key);
                        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
                        return data && $has(data, this._i);
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var data = getWeak(anObject(key), true);
                if (data === true) uncaughtFrozenStore(that).set(key, value);
                else data[that._i] = value;
                return that;
            },
            ufstore: uncaughtFrozenStore
        };


        /***/
    }),
    /* 113 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/_flatten-into-array.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
        var isArray = __webpack_require__( /*! ./_is-array */ 59);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var IS_CONCAT_SPREADABLE = __webpack_require__( /*! ./_wks */ 5)('isConcatSpreadable');

        function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
            var targetIndex = start;
            var sourceIndex = 0;
            var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
            var element, spreadable;

            while (sourceIndex < sourceLen) {
                if (sourceIndex in source) {
                    element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

                    spreadable = false;
                    if (isObject(element)) {
                        spreadable = element[IS_CONCAT_SPREADABLE];
                        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
                    }

                    if (spreadable && depth > 0) {
                        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
                    } else {
                        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
                        target[targetIndex] = element;
                    }

                    targetIndex++;
                }
                sourceIndex++;
            }
            return targetIndex;
        }

        module.exports = flattenIntoArray;


        /***/
    }),
    /* 114 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/_ie8-dom-define.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = !__webpack_require__( /*! ./_descriptors */ 7) && !__webpack_require__( /*! ./_fails */ 3)(function() {
            return Object.defineProperty(__webpack_require__( /*! ./_dom-create */ 75)('div'), 'a', {
                get: function() {
                    return 7;
                }
            }).a != 7;
        });


        /***/
    }),
    /* 115 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/_invoke.js ***!
      \**************************************/
    /***/
    (function(module, exports) {

        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        module.exports = function(fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
                case 0:
                    return un ? fn() :
                        fn.call(that);
                case 1:
                    return un ? fn(args[0]) :
                        fn.call(that, args[0]);
                case 2:
                    return un ? fn(args[0], args[1]) :
                        fn.call(that, args[0], args[1]);
                case 3:
                    return un ? fn(args[0], args[1], args[2]) :
                        fn.call(that, args[0], args[1], args[2]);
                case 4:
                    return un ? fn(args[0], args[1], args[2], args[3]) :
                        fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
        };


        /***/
    }),
    /* 116 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_is-integer.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.3 Number.isInteger(number)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var floor = Math.floor;
        module.exports = function isInteger(it) {
            return !isObject(it) && isFinite(it) && floor(it) === it;
        };


        /***/
    }),
    /* 117 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_iter-call.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // call something on iterator step with safe closing on error
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        module.exports = function(iterator, fn, value, entries) {
            try {
                return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) anObject(ret.call(iterator));
                throw e;
            }
        };


        /***/
    }),
    /* 118 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_iter-step.js ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = function(done, value) {
            return {
                value: value,
                done: !!done
            };
        };


        /***/
    }),
    /* 119 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_math-fround.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.16 Math.fround(x)
        var sign = __webpack_require__( /*! ./_math-sign */ 84);
        var pow = Math.pow;
        var EPSILON = pow(2, -52);
        var EPSILON32 = pow(2, -23);
        var MAX32 = pow(2, 127) * (2 - EPSILON32);
        var MIN32 = pow(2, -126);

        var roundTiesToEven = function(n) {
            return n + 1 / EPSILON - 1 / EPSILON;
        };

        module.exports = Math.fround || function fround(x) {
            var $abs = Math.abs(x);
            var $sign = sign(x);
            var a, result;
            if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
            a = (1 + EPSILON32 / EPSILON) * $abs;
            result = a - (a - $abs);
            // eslint-disable-next-line no-self-compare
            if (result > MAX32 || result != result) return $sign * Infinity;
            return $sign * result;
        };


        /***/
    }),
    /* 120 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_math-log1p.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        // 20.2.2.20 Math.log1p(x)
        module.exports = Math.log1p || function log1p(x) {
            return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
        };


        /***/
    }),
    /* 121 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_math-scale.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        // https://rwaldron.github.io/proposal-math-extensions/
        module.exports = Math.scale || function scale(x, inLow, inHigh, outLow, outHigh) {
            if (
                arguments.length === 0
                // eslint-disable-next-line no-self-compare
                ||
                x != x
                // eslint-disable-next-line no-self-compare
                ||
                inLow != inLow
                // eslint-disable-next-line no-self-compare
                ||
                inHigh != inHigh
                // eslint-disable-next-line no-self-compare
                ||
                outLow != outLow
                // eslint-disable-next-line no-self-compare
                ||
                outHigh != outHigh
            ) return NaN;
            if (x === Infinity || x === -Infinity) return x;
            return (x - inLow) * (outHigh - outLow) / (inHigh - inLow) + outLow;
        };


        /***/
    }),
    /* 122 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/_object-assign.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 19.1.2.1 Object.assign(target, source, ...)
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var getKeys = __webpack_require__( /*! ./_object-keys */ 39);
        var gOPS = __webpack_require__( /*! ./_object-gops */ 63);
        var pIE = __webpack_require__( /*! ./_object-pie */ 53);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var IObject = __webpack_require__( /*! ./_iobject */ 52);
        var $assign = Object.assign;

        // should work with symbols and should have deterministic property order (V8 bug)
        module.exports = !$assign || __webpack_require__( /*! ./_fails */ 3)(function() {
            var A = {};
            var B = {};
            // eslint-disable-next-line no-undef
            var S = Symbol();
            var K = 'abcdefghijklmnopqrst';
            A[S] = 7;
            K.split('').forEach(function(k) {
                B[k] = k;
            });
            return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
        }) ? function assign(target, source) { // eslint-disable-line no-unused-vars
            var T = toObject(target);
            var aLen = arguments.length;
            var index = 1;
            var getSymbols = gOPS.f;
            var isEnum = pIE.f;
            while (aLen > index) {
                var S = IObject(arguments[index++]);
                var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
                var length = keys.length;
                var j = 0;
                var key;
                while (length > j) {
                    key = keys[j++];
                    if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
                }
            }
            return T;
        } : $assign;


        /***/
    }),
    /* 123 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_object-dps.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ 8);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var getKeys = __webpack_require__( /*! ./_object-keys */ 39);

        module.exports = __webpack_require__( /*! ./_descriptors */ 7) ? Object.defineProperties : function defineProperties(O, Properties) {
            anObject(O);
            var keys = getKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) dP.f(O, P = keys[i++], Properties[P]);
            return O;
        };


        /***/
    }),
    /* 124 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_object-gopn-ext.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var gOPN = __webpack_require__( /*! ./_object-gopn */ 38).f;
        var toString = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
            Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function(it) {
            try {
                return gOPN(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        module.exports.f = function getOwnPropertyNames(it) {
            return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
        };


        /***/
    }),
    /* 125 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/_object-keys-internal.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var has = __webpack_require__( /*! ./_has */ 14);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var arrayIndexOf = __webpack_require__( /*! ./_array-includes */ 56)(false);
        var IE_PROTO = __webpack_require__( /*! ./_shared-key */ 89)('IE_PROTO');

        module.exports = function(object, names) {
            var O = toIObject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
                if (key != IE_PROTO) has(O, key) && result.push(key);
            // Don't enum bug & hidden keys
            while (names.length > i)
                if (has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                }
            return result;
        };


        /***/
    }),
    /* 126 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_object-to-array.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var getKeys = __webpack_require__( /*! ./_object-keys */ 39);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var isEnum = __webpack_require__( /*! ./_object-pie */ 53).f;
        module.exports = function(isEntries) {
            return function(it) {
                var O = toIObject(it);
                var keys = getKeys(O);
                var length = keys.length;
                var i = 0;
                var result = [];
                var key;
                while (length > i) {
                    key = keys[i++];
                    if (!DESCRIPTORS || isEnum.call(O, key)) {
                        result.push(isEntries ? [key, O[key]] : O[key]);
                    }
                }
                return result;
            };
        };


        /***/
    }),
    /* 127 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_own-keys.js ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // all object keys, includes non-enumerable and symbols
        var gOPN = __webpack_require__( /*! ./_object-gopn */ 38);
        var gOPS = __webpack_require__( /*! ./_object-gops */ 63);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var Reflect = __webpack_require__( /*! ./_global */ 2).Reflect;
        module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
            var keys = gOPN.f(anObject(it));
            var getSymbols = gOPS.f;
            return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };


        /***/
    }),
    /* 128 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/_parse-float.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $parseFloat = __webpack_require__( /*! ./_global */ 2).parseFloat;
        var $trim = __webpack_require__( /*! ./_string-trim */ 49).trim;

        module.exports = 1 / $parseFloat(__webpack_require__( /*! ./_string-ws */ 92) + '-0') !== -Infinity ? function parseFloat(str) {
            var string = $trim(String(str), 3);
            var result = $parseFloat(string);
            return result === 0 && string.charAt(0) == '-' ? -0 : result;
        } : $parseFloat;


        /***/
    }),
    /* 129 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_parse-int.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $parseInt = __webpack_require__( /*! ./_global */ 2).parseInt;
        var $trim = __webpack_require__( /*! ./_string-trim */ 49).trim;
        var ws = __webpack_require__( /*! ./_string-ws */ 92);
        var hex = /^[-+]?0[xX]/;

        module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
            var string = $trim(String(str), 3);
            return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
        } : $parseInt;


        /***/
    }),
    /* 130 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_perform.js ***!
      \***************************************/
    /***/
    (function(module, exports) {

        module.exports = function(exec) {
            try {
                return {
                    e: false,
                    v: exec()
                };
            } catch (e) {
                return {
                    e: true,
                    v: e
                };
            }
        };


        /***/
    }),
    /* 131 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/_promise-resolve.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var newPromiseCapability = __webpack_require__( /*! ./_new-promise-capability */ 86);

        module.exports = function(C, x) {
            anObject(C);
            if (isObject(x) && x.constructor === C) return x;
            var promiseCapability = newPromiseCapability.f(C);
            var resolve = promiseCapability.resolve;
            resolve(x);
            return promiseCapability.promise;
        };


        /***/
    }),
    /* 132 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_same-value.js ***!
      \******************************************/
    /***/
    (function(module, exports) {

        // 7.2.9 SameValue(x, y)
        module.exports = Object.is || function is(x, y) {
            // eslint-disable-next-line no-self-compare
            return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
        };


        /***/
    }),
    /* 133 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/_string-pad.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-string-pad-start-end
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var repeat = __webpack_require__( /*! ./_string-repeat */ 91);
        var defined = __webpack_require__( /*! ./_defined */ 24);

        module.exports = function(that, maxLength, fillString, left) {
            var S = String(defined(that));
            var stringLength = S.length;
            var fillStr = fillString === undefined ? ' ' : String(fillString);
            var intMaxLength = toLength(maxLength);
            if (intMaxLength <= stringLength || fillStr == '') return S;
            var fillLen = intMaxLength - stringLength;
            var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
            if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
            return left ? stringFiller + S : S + stringFiller;
        };


        /***/
    }),
    /* 134 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_to-index.js ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/ecma262/#sec-toindex
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        module.exports = function(it) {
            if (it === undefined) return 0;
            var number = toInteger(it);
            var length = toLength(number);
            if (number !== length) throw RangeError('Wrong length!');
            return length;
        };


        /***/
    }),
    /* 135 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/_wks-ext.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        exports.f = __webpack_require__( /*! ./_wks */ 5);


        /***/
    }),
    /* 136 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/es6.map.js ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var strong = __webpack_require__( /*! ./_collection-strong */ 110);
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var MAP = 'Map';

        // 23.1 Map Objects
        module.exports = __webpack_require__( /*! ./_collection */ 57)(MAP, function(get) {
            return function Map() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        }, {
            // 23.1.3.6 Map.prototype.get(key)
            get: function get(key) {
                var entry = strong.getEntry(validate(this, MAP), key);
                return entry && entry.v;
            },
            // 23.1.3.9 Map.prototype.set(key, value)
            set: function set(key, value) {
                return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
            }
        }, strong, true);


        /***/
    }),
    /* 137 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.regexp.exec.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ 87);
        __webpack_require__( /*! ./_export */ 0)({
            target: 'RegExp',
            proto: true,
            forced: regexpExec !== /./.exec
        }, {
            exec: regexpExec
        });


        /***/
    }),
    /* 138 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.regexp.flags.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 21.2.5.3 get RegExp.prototype.flags()
        if (__webpack_require__( /*! ./_descriptors */ 7) && /./g.flags != 'g') __webpack_require__( /*! ./_object-dp */ 8).f(RegExp.prototype, 'flags', {
            configurable: true,
            get: __webpack_require__( /*! ./_flags */ 51)
        });


        /***/
    }),
    /* 139 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./~/core-js/modules/es6.set.js ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var strong = __webpack_require__( /*! ./_collection-strong */ 110);
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var SET = 'Set';

        // 23.2 Set Objects
        module.exports = __webpack_require__( /*! ./_collection */ 57)(SET, function(get) {
            return function Set() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        }, {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
                return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
            }
        }, strong);


        /***/
    }),
    /* 140 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es6.weak-map.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ 2);
        var each = __webpack_require__( /*! ./_array-methods */ 23)(0);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var meta = __webpack_require__( /*! ./_meta */ 33);
        var assign = __webpack_require__( /*! ./_object-assign */ 122);
        var weak = __webpack_require__( /*! ./_collection-weak */ 112);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var NATIVE_WEAK_MAP = __webpack_require__( /*! ./_validate-collection */ 45);
        var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
        var WEAK_MAP = 'WeakMap';
        var getWeak = meta.getWeak;
        var isExtensible = Object.isExtensible;
        var uncaughtFrozenStore = weak.ufstore;
        var InternalMap;

        var wrapper = function(get) {
            return function WeakMap() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        };

        var methods = {
            // 23.3.3.3 WeakMap.prototype.get(key)
            get: function get(key) {
                if (isObject(key)) {
                    var data = getWeak(key);
                    if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
                    return data ? data[this._i] : undefined;
                }
            },
            // 23.3.3.5 WeakMap.prototype.set(key, value)
            set: function set(key, value) {
                return weak.def(validate(this, WEAK_MAP), key, value);
            }
        };

        // 23.3 WeakMap Objects
        var $WeakMap = module.exports = __webpack_require__( /*! ./_collection */ 57)(WEAK_MAP, wrapper, methods, weak, true, true);

        // IE11 WeakMap frozen keys fix
        if (NATIVE_WEAK_MAP && IS_IE11) {
            InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
            assign(InternalMap.prototype, methods);
            meta.NEED = true;
            each(['delete', 'has', 'get', 'set'], function(key) {
                var proto = $WeakMap.prototype;
                var method = proto[key];
                redefine(proto, key, function(a, b) {
                    // store frozen objects on internal weakmap shim
                    if (isObject(a) && !isExtensible(a)) {
                        if (!this._f) this._f = new InternalMap();
                        var result = this._f[key](a, b);
                        return key == 'set' ? this : result;
                        // store all the rest on native weakmap
                    }
                    return method.call(this, a, b);
                });
            });
        }


        /***/
    }),
    /* 141 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************!*\
      !*** ./src/js/index.js ***!
      \*************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        Object.defineProperty(__webpack_exports__, "__esModule", {
            value: true
        });
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__GameStates_Preloader_js__ = __webpack_require__( /*! ./GameStates/Preloader.js */ 160);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__GameStates_MainMenu_js__ = __webpack_require__( /*! ./GameStates/MainMenu.js */ 159);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__GameStates_Help_js__ = __webpack_require__( /*! ./GameStates/Help.js */ 158);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__GameStates_Game_js__ = __webpack_require__( /*! ./GameStates/Game.js */ 157);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__GameStates_AnimatedScoreBoard_js__ = __webpack_require__( /*! ./GameStates/AnimatedScoreBoard.js */ 156);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);








        window.onload = function() {
            var game = new Phaser.Game(1250, 937, Phaser.CANVAS, 'gameContainer');

            game.state.add('Boot', __WEBPACK_IMPORTED_MODULE_6__cainc_game_common__["a" /* Boot */ ]);
            game.state.add('Preloader', __WEBPACK_IMPORTED_MODULE_1__GameStates_Preloader_js__["a" /* default */ ]);
            game.state.add('MainMenu', __WEBPACK_IMPORTED_MODULE_2__GameStates_MainMenu_js__["a" /* default */ ]);
            game.state.add('Help', __WEBPACK_IMPORTED_MODULE_3__GameStates_Help_js__["a" /* default */ ]);
            game.state.add('Game', __WEBPACK_IMPORTED_MODULE_4__GameStates_Game_js__["a" /* default */ ]);
            game.state.add('GameOver', __WEBPACK_IMPORTED_MODULE_5__GameStates_AnimatedScoreBoard_js__["a" /* default */ ]);

            game.state.start('Boot');
        };

        /***/
    }),
    /* 142 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/babel-polyfill/lib/index.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        /* WEBPACK VAR INJECTION */
        (function(global) {

            __webpack_require__( /*! core-js/shim */ 360);

            __webpack_require__( /*! regenerator-runtime/runtime */ 361);

            __webpack_require__( /*! core-js/fn/regexp/escape */ 161);

            if (global._babelPolyfill) {
                throw new Error("only one instance of babel-polyfill is allowed");
            }
            global._babelPolyfill = true;

            var DEFINE_PROPERTY = "defineProperty";

            function define(O, key, value) {
                O[key] || Object[DEFINE_PROPERTY](O, key, {
                    writable: true,
                    configurable: true,
                    value: value
                });
            }

            define(String.prototype, "padLeft", "".padStart);
            define(String.prototype, "padRight", "".padEnd);

            "pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function(key) {
                [][key] && define(Array, key, Function.call.bind([][key]));
            });
            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__( /*! ./../../webpack/buildin/global.js */ 98)))

        /***/
    }),
    /* 143 */
    /* exports provided: default */
    /* exports used: default */
    /*!**************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/HelpButton.js ***!
      \**************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__HelpDialog_js__ = __webpack_require__( /*! ./HelpDialog.js */ 100);



        class HelpButton {
            /**
             * @param  {State} gameState    the current state - used as a parent for the button
             * @param  {number} x           left coordinate of the button
             * @param  {number} y           top coordinate of the button
             * @param  {AssetOptions} asset see typedef in StartButton
             * @param  {array} helpScreens  array of data that is consumed by HelpDialog
             */
            constructor(gameState, x, y, asset, helpScreens) {
                this._button = gameState.add.button(x, y, asset.atlas, () => {
                    new __WEBPACK_IMPORTED_MODULE_1__HelpDialog_js__["a" /* default */ ](gameState, __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.noop, helpScreens, asset.upSound);
                }, null, asset.over, asset.out, asset.down, asset.up);
                this._button.setUpSound(asset.upSound);
            }

            get button() {
                return this._button;
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = HelpButton;



        /***/
    }),
    /* 144 */
    /* exports provided: default */
    /* exports used: default */
    /*!***************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/StartButton.js ***!
      \***************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__HelpDialog_js__ = __webpack_require__( /*! ./HelpDialog.js */ 100);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__util_GameBridge__ = __webpack_require__( /*! ../util/GameBridge */ 50);



        class StartButton {
            /**
             * @param  {State} gameState                  the current state - used as a parent for the button
             * @param  {number} x                         left coordinate of the button
             * @param  {number} y                         top coordinate of the button
             * @param  {AssetOptions} asset               see typedef in StartButton
             * @param  {?array} helpScreens               array of data that is consumed by HelpDialog
             * @param  {String} [nextState='Game']        state name to start after the help screens have been presented
             * @param  {object} [nextStateData=undefined] data to pass to the next state
             */
            constructor(gameState, x, y, asset, helpScreens, nextState = 'Game', nextStateData = undefined) {
                this._button = gameState.add.button(x, y, asset.atlas, () => {
                    __WEBPACK_IMPORTED_MODULE_1__util_GameBridge__["a" /* gameBridge */ ].start();
                    if (helpScreens) {
                        new __WEBPACK_IMPORTED_MODULE_0__HelpDialog_js__["a" /* default */ ](gameState, () => {
                            gameState.state.start(nextState, true, false, nextStateData);
                        }, helpScreens, asset.upSound);
                    } else {
                        gameState.state.start(nextState, true, false, nextStateData);
                    }
                }, null, asset.over, asset.out, asset.down, asset.up);
                this._button.setUpSound(asset.upSound);
            }

            get button() {
                return this._button;
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = StartButton;


        /**
         * An object with properties for the texture atlas name to use, and various states/frames within it.
         * Note that the `atlas` and `out` keys are required.
         * See the Phaser button docs here: https://phaser.io/docs/2.6.2/Phaser.Button.html
         * @typedef {Object} AssetOptions
         * @property {!string} atlas - The atlas id to take the assets from.
         * @property {string=} over - frame name for the 'over' state.
         * @property {!string} out - frame name for the 'out' state.
         * @property {string=} down - frame name for the 'down' state.
         * @property {string=} up - frame name for the 'up' state.
         * @property {string=} offOver - frame name for a toggleButton 'off over' state.
         * @property {string=} offOut - frame name for a toggleButton 'off out' state.
         * @property {string=} offDown - frame name for a toggleButton 'off down' state.
         * @property {string=} offUp - frame name for a toggleButton 'off up' state.
         * @property {Sound=} upSound - Phaser.Sound to play when the user taps the button.
         */


        /***/
    }),
    /* 145 */
    /* exports provided: default */
    /* exports used: default */
    /*!*********************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/Timer.js ***!
      \*********************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);


        class Timer {
            constructor(gameState, seconds, x, y, width, height, fontColor = '#ffffff', halign = 'right', fontSize = undefined) {
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.bindAll(this, '_tick');

                this._signals = {
                    tick: new Phaser.Signal(),
                    expire: new Phaser.Signal(),
                };

                this._seconds = seconds;

                this._text = gameState.add.text(0, 0, this.formatTime(), {
                    boundsAlignH: halign,
                    fill: fontColor,
                    fontSize,
                });
                this._text.setTextBounds(x, y, width, height);
            }

            formatTime() {
                const minutes = Math.floor(this._seconds / 60);
                let seconds = this._seconds % 60;
                if (seconds < 10) {
                    seconds = `0${seconds}`;
                }
                return `${minutes}:${seconds}`;
            }

            start() {
                this._interval = setInterval(this._tick, 1000);
            }

            stop() {
                clearInterval(this._interval);
            }

            get secondsRemaining() {
                return this._seconds;
            }

            get tick() {
                return this._signals.tick;
            }

            get expire() {
                return this._signals.expire;
            }

            _tick() {
                --this._seconds;
                this._text.text = this.formatTime();
                this._signals.tick.dispatch(this._seconds);

                if (this._seconds === 0) {
                    this._signals.expire.dispatch();
                    clearInterval(this._interval);
                }
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = Timer;



        /***/
    }),
    /* 146 */
    /* exports provided: default */
    /* exports used: default */
    /*!*********************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/components/ToggleAudioButton.js ***!
      \*********************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        class ToggleAudioButton {
            /**
             * @param  {State} gameState    the current state - used as a parent for the button
             * @param  {number} x           left coordinate of the button
             * @param  {number} y           top coordinate of the button
             * @param  {AssetOptions} asset see typedef in StartButton
             */
            constructor(gameState, x, y, asset) {
                const currentAssets =
                    gameState.sound.mute ? {
                        over: asset.offOver,
                        out: asset.offOut,
                        down: asset.offDown,
                        up: asset.offUp,
                    } :
                    {
                        over: asset.over,
                        out: asset.out,
                        down: asset.down,
                        up: asset.up,
                    };

                this._button = gameState.add.button(x, y, asset.atlas, () => {
                    if (gameState.sound.mute) {
                        // toggle audio on
                        this._button.setFrames(asset.over, asset.out, asset.down, asset.up);
                        gameState.sound.mute = false;
                    } else {
                        // toggle audio off
                        this._button.setFrames(asset.offOver, asset.offOut, asset.offDown, asset.offUp);
                        gameState.sound.mute = true;
                    }
                }, null, currentAssets.over, currentAssets.out, currentAssets.down, currentAssets.up);
                this._button.setUpSound(asset.upSound);
            }

            get button() {
                return this._button;
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = ToggleAudioButton;



        /***/
    }),
    /* 147 */
    /* exports provided: default */
    /* exports used: default */
    /*!*********************************************************!*\
      !*** ./~/@cainc/game-common/src/js/game_states/Boot.js ***!
      \*********************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        class Boot extends Phaser.State {
            preload() {}

            create() {
                this.input.maxPointers = 1;
                this.stage.disableVisibilityChange = true;
                this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                this.scale.parentIsWindow = true;
                this.scale.pageAlignHorizontally = true;
                this.scale.pageAlignVertically = false;

                this.input.addPointer();

                this.state.start('Preloader');
            }
        }
        /* harmony export (immutable) */
        __webpack_exports__["a"] = Boot;



        /***/
    }),
    /* 148 */
    /* exports provided: default */
    /*!*************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/game_states/MainMenu.js ***!
      \*************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__( /*! ../index.js */ 34);


        const LAYOUT = {
            START_X: 497,
            START_Y: 421,

            EXIT_X: 1185,
            EXIT_Y: 10,

            HELP_X: 10,
            HELP_Y: 870,

            AUDIO_X: 1185,
            AUDIO_Y: 870,
        };
        Object.freeze(LAYOUT);

        class MainMenu extends Phaser.State {
            init(helpScreens) {
                this._helpScreens = helpScreens;
            }

            create() {
                this.add.image(0, 0, 'main_menu_background');
                this.startButton = new __WEBPACK_IMPORTED_MODULE_0__index_js__["d" /* StartButton */ ](this, LAYOUT.START_X, LAYOUT.START_Y, 'start_button', this._helpScreens);
                if (__WEBPACK_IMPORTED_MODULE_0__index_js__["b" /* gameBridge */ ].shouldShowExitButton) {
                    this.exitButton = new __WEBPACK_IMPORTED_MODULE_0__index_js__["c" /* ExitButton */ ](this, LAYOUT.EXIT_X, LAYOUT.EXIT_Y, 'exit_button');
                }
                this.helpButton = new __WEBPACK_IMPORTED_MODULE_0__index_js__["e" /* HelpButton */ ](this, LAYOUT.HELP_X, LAYOUT.HELP_Y, 'help_button', this._helpScreens);
                this.toggleAudioButton = new __WEBPACK_IMPORTED_MODULE_0__index_js__["f" /* ToggleAudioButton */ ](this, LAYOUT.AUDIO_X, LAYOUT.AUDIO_Y, 'toggle_audio');

                displayGame();
            }
        }
        /* unused harmony export default */



        /***/
    }),
    /* 149 */
    /* exports provided: default */
    /*!***************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/game_states/ScoreBoard.js ***!
      \***************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__components_ExitButton__ = __webpack_require__( /*! ../components/ExitButton */ 99);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__util_GameBridge__ = __webpack_require__( /*! ../util/GameBridge */ 50);




        const NAME_MAX = 8;
        const SCORE_ROWS = 5;

        class ScoreBoard extends Phaser.State {
            init(score, styling) {
                this._score = score;
                this._styling = styling;
            }

            create() {
                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.bindAll(this, 'showHighScores');

                const exitAtlas = {
                    atlas: 'close_button'
                };
                const yourScoreBounds = {
                    x: 455,
                    y: 170,
                    width: 356,
                    height: 46,
                };
                const exitPos = {
                    x: 473,
                    y: 800,
                };
                const yourScoreFont = {
                    boundsAlignH: 'center'
                };
                if (this._styling) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(exitAtlas, this._styling.exitAsset);
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(yourScoreFont, this._styling.yourScoreFont);
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(yourScoreBounds, this._styling.yourScoreBounds);
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(exitPos, this._styling.exitPosition);
                }

                this.background = this.add.image(0, 0, 'game_over_background');

                if (__WEBPACK_IMPORTED_MODULE_2__util_GameBridge__["a" /* gameBridge */ ].shouldShowExitButton) {
                    this.exitButton = new __WEBPACK_IMPORTED_MODULE_1__components_ExitButton__["a" /* default */ ](this, exitPos.x, exitPos.y, exitAtlas);
                }

                this._text = this.add.text(0, 0, this._score, yourScoreFont);
                this._text.setTextBounds(yourScoreBounds.x, yourScoreBounds.y, yourScoreBounds.width, yourScoreBounds.height);

                if (__WEBPACK_IMPORTED_MODULE_2__util_GameBridge__["a" /* gameBridge */ ].sendScore) {
                    __WEBPACK_IMPORTED_MODULE_2__util_GameBridge__["a" /* gameBridge */ ].sendScore(this._score).then(this.showHighScores);
                } else {
                    this.showHighScores(this.createDefaultHighScores());
                }
            }

            showHighScores(scores) {
                const allTimeLayout = {
                    star_x: 121,
                    list_x: 176,
                    name_x: 206,
                    score_x: 500,
                    score_width: 67,

                    start_y: 467,
                    row_height: 50,
                    star_row_dy: 10,
                };
                const weeklyLayout = {
                    star_x: 621,
                    list_x: 676,
                    name_x: 706,
                    score_x: 999,
                    score_width: 67,

                    start_y: 467,
                    row_height: 50,
                    star_row_dy: 10,
                };
                if (this._styling) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(allTimeLayout, this._styling.allTimeLayout);
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(weeklyLayout, this._styling.weeklyLayout);
                }
                this._createHighScoreDisplay(scores.allTimeScores, allTimeLayout);
                this._createHighScoreDisplay(scores.currentWeekScores, weeklyLayout);
            }

            _createHighScoreDisplay(scoreArray, layout) {
                const fontOptions = {};
                const scoreFontOptions = {
                    boundsAlignH: 'right'
                };
                if (this._styling) {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(fontOptions, this._styling.highScoresFont);
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(scoreFontOptions, this._styling.highScoresFont);
                }

                const starIndex = this._findScoreForPlaySession(scoreArray);
                for (let i = 0; i < SCORE_ROWS && i < scoreArray.length; i++) {
                    const scoreObj = scoreArray[i];
                    const y = layout.start_y + i * layout.row_height;
                    if (i === starIndex) {
                        this.add.image(layout.star_x, y + layout.star_row_dy, 'star');
                    }
                    this.add.text(layout.list_x, y, `${i + 1}.`, fontOptions);
                    this.add.text(layout.name_x, y, this._trimName(scoreObj.firstName), fontOptions);
                    const score = this.add.text(0, 0, scoreObj.score, scoreFontOptions);
                    score.setTextBounds(layout.score_x, y, layout.score_width, y + layout.row_height);
                }
            }

            _trimName(name) {
                if (name.length > NAME_MAX) {
                    name = name.substring(0, NAME_MAX) + '…';
                }
                return name;
            }

            _findScoreForPlaySession(scoreArray) {
                let index = -1;
                if (__WEBPACK_IMPORTED_MODULE_2__util_GameBridge__["a" /* gameBridge */ ].usingRealBridge) {
                    const studentId = __WEBPACK_IMPORTED_MODULE_2__util_GameBridge__["a" /* gameBridge */ ].info.studentId;
                    index = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(scoreArray, (scoreObj) => {
                        return scoreObj.studentId === studentId && scoreObj.score === this._score;
                    });
                }
                return index;
            }

            createDefaultHighScores() {
                const scoreObj = {
                    allTimeScores: [{
                            studentId: 0,
                            firstName: 'Matt',
                            score: 20000
                        },
                        {
                            studentId: 1,
                            firstName: 'Tif',
                            score: 20000
                        },
                        {
                            studentId: 2,
                            firstName: 'Kim',
                            score: 20000
                        },
                        {
                            studentId: 3,
                            firstName: 'Ken',
                            score: 20000
                        },
                        {
                            studentId: 4,
                            firstName: 'lengthTest',
                            score: 20000
                        },
                    ],
                    currentWeekScores: [{
                            studentId: 0,
                            firstName: 'Matt',
                            score: 20000
                        },
                        {
                            studentId: 1,
                            firstName: 'Tif',
                            score: 20000
                        },
                        {
                            studentId: 2,
                            firstName: 'Kim',
                            score: 20000
                        },
                        {
                            studentId: 3,
                            firstName: 'Ken',
                            score: 20000
                        },
                        {
                            studentId: 4,
                            firstName: 'lengthTest',
                            score: 20000
                        },
                    ],
                };
                scoreObj.allTimeScores = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.shuffle(scoreObj.allTimeScores);
                scoreObj.currentWeekScores = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.shuffle(scoreObj.currentWeekScores);

                return scoreObj;
            }
        }
        /* unused harmony export default */



        /***/
    }),
    /* 150 */
    /* exports provided: USER_DATA_STATES, userDataManager */
    /*!*************************************************************!*\
      !*** ./~/@cainc/game-common/src/js/util/UserDataManager.js ***!
      \*************************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__GameBridge__ = __webpack_require__( /*! ./GameBridge */ 50);


        const USER_DATA_STATES = {
            NOT_LOADED: 0,
            LOADING: 1,
            LOADED: 2,
        };
        /* unused harmony export USER_DATA_STATES */


        /**
         * Class that manages retrieving and saving user data as well as provided a centralized run-time place to query that data
         */
        class UserDataManager {
            constructor() {
                this._state = USER_DATA_STATES.NOT_LOADED;
                this._data = {
                    gameData: {},
                };
            }

            /**
             * Retrieves the loading state of the user data
             */
            get loadingState() {
                return this._state;
            }

            /**
             * Retrieves the current user data
             */
            get data() {
                return this._data.gameData;
            }

            /**
             * Loads the user data
             *
             * @param {Function} onSuccess - callback for when the data was successfully loaded
             * @param {Function} onFailure - callback for when the data was unable to be retrieved.  Takes a string reason as an argument.
             */
            load(onSuccess = _.noop, onFailure = _.noop) {
                if (__WEBPACK_IMPORTED_MODULE_0__GameBridge__["a" /* gameBridge */ ].usingRealBridge) {
                    this._state = USER_DATA_STATES.LOADING;
                    __WEBPACK_IMPORTED_MODULE_0__GameBridge__["a" /* gameBridge */ ].getUserData().then((userData) => {
                        this._state = USER_DATA_STATES.LOADED;
                        this._data = _.clone(userData); // cloning since I don't want to mutate the gameData field from the dashboard's API
                        this._data.gameData = JSON.parse(userData.gameData) || {};
                        onSuccess();
                    }, (reason) => {
                        this._state = USER_DATA_STATES.NOT_LOADED;
                        onFailure(reason);
                    });
                } else {
                    this._state = USER_DATA_STATES.LOADED;
                    onSuccess();
                }
            }

            /**
             * Saves the user data
             *
             * @param {Function} onSuccess - callback for when the data was successfully saved
             * @param {Function} onFailure - callback for when the data was unable to be saved.  Takes a string reason as an argument.
             */
            save(onSuccess = _.noop, onFailure = _.noop) {
                if (__WEBPACK_IMPORTED_MODULE_0__GameBridge__["a" /* gameBridge */ ].usingRealBridge) {
                    __WEBPACK_IMPORTED_MODULE_0__GameBridge__["a" /* gameBridge */ ].saveUserData(JSON.stringify(this._data.gameData)).then(onSuccess, onFailure);
                } else {
                    onSuccess();
                }
            }
        }

        const userDataManager = new UserDataManager();
        /* unused harmony export userDataManager */



        /***/
    }),
    /* 151 */
    /* exports provided: webAudioUtil */
    /* exports used: webAudioUtil */
    /*!**********************************************************!*\
      !*** ./~/@cainc/game-common/src/js/util/WebAudioUtil.js ***!
      \**********************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        class WebAudioUtil {

            testAudioDecoding() {
                const TEST_AUDIO = '7romps,v7h4km,8y6lhp,2t4w,8y6lhp,ud4ajt,dzs8yx,27wr28,s4thly,17k9nnk,wahpbh,l3561q,eta6w1,e7cdh4,dddlbo,tyuyi8,1im8aej,kofo99,biyc69,feztsp,zjtcmc,1luzhbt,1pekbj9,1l981wu,1xmvqzh,tviurq,1t8fs3e,1q6kwez,1jswwl7,nesq0w,1vgjg7d,itvp7x,1aklzf6,1883ecn,18rzr6x,1uqxfuc,1amykjz,1tztjq,1q1vxbg,1spnp3j,1qgesbh,ei9j7y,ndra8k,1kipc97,1nhk6xl,1oyoorh,gknpfh,q16ywr,1xlfbis,n8jabh,hh3qa7,6tmman,1h1fe76,1lo8mf3,h5fby4,18zr63y,1vliave,1lf60un,j8dsbk,1sxrdw4,3vvrh1,h5unbs,14f07q,8hjw12,1pjusn4,fg6o60,1tvrmhl,9td9ed,y5vkf2,7veddi,ehbauw,13avlbi,1nhsz92,si49nd,e2dbhy,1fh2uq8,yjwxn5,ff7fr0,1fmwhmu,jd0u5t,1wyujqa,11l2vhv,1y26vau,69dybj,1v38oto,a4jmir,101y5mo,o9fegw,vcqtjs,510zr,1a19c15,m5y,1y6n1ts,1lu8be7,1xx5og,1o36hti,4vp,vl9s00,ho8bev,11nd,0,25detb,qmcwzh,3j4cj,nuzvof,hqzh7u,4kc9k,pixmov,ymls6m,bv0kgf,1xxloc,1e308w1,tys8g,ux3g1z,3a,szg4fg,2s,0,0,tys5c,6g,1el4,74,0,0,1ekg,0,0,0,1ekg,0,0,0,cn4,0,0,0,0,0,0,0,jz6rm,r1ddtd,2z,sz0pjw,2s,3,0,0,1,0,o,0,0,75,1ekg,0,0,0,1ekg,0,0,0,cn4,0,0,0,walx5w,37,w0xkbg,38,0,1,13ydjs,1ekg,9zlds,t8qfmx,2p,syqu5c,2s,0,0,1bq25ts,13ydl0,7ns4i,0,u2p6p9,36,0,wl11j4,32,0,0,wl0v7k,qzqaum,s538tq,36,t92xoh,k8e,ud9d6o,ju0,0,0,t8q134,k8e,vqmby8,k85,0,74,vra4g0,6ek,74,wb6kg1,leq,wb70n4,jub,0,74,v704jk,j78,0,74,0,jz6rk,35s,j1xzpc,0,w0nh1c,msk,zio8ow,1goe8,zipn9d,hs70xs,l,5k8qo0,5k8qo0,znkiyt,nvcf0l,zisgkl,k1aps,8vn08w,w18vw3,0,jz6rk,jz6rk,5m9s,9zlds,9fm70g,7romps,rldz77,0,9zlds,9zlds,tys5c,9zlds,8vn08w,xz4n03,0,0,tys5c,1ixrls0,1k1pzb4,1dxyww,5jrvnk,uwmmpf,0,9zlds,c7i4u8,77pfy8,rv9ab7,1,u30goi,jz6rk,9zlds,1ekf,rbdwcg,m7b,ux7280,lf0,74,lc,74,rvga2o,j90,s54lc0,j90,0,ruxnuo,mlo,0,rv4i68,v6jejt,lf4,0,0,t6kkqo,4jkoc,1axjcow,4cj1w,rs04qo,3sw2p,1ekg,l35534,eteeld,f1jl14,ddc7ce';
                const promise = new Promise((resolve, reject) => {
                    const arrayBuffer = Uint32Array.from(TEST_AUDIO.split(',').map(n => parseInt(n, 36))).buffer;
                    const AudioContext = window.AudioContext || window.webkitAudioContext;
                    const audioContext = new AudioContext();

                    // Reference: https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData
                    // Apple's trillions of dollars unforunately can't buy quality audio playback on the web even more than 10 years after they said we don't need Flash.
                    try {
                        // let's try the new promise syntax first
                        audioContext
                            .decodeAudioData(arrayBuffer)
                            .then(() => {
                                resolve(true);
                            })
                            .catch((err) => {
                                // next syntax rejected meaining a decode error
                                resolve(false);
                            });
                    } catch (err) {
                        // new promise syntax not supported, fallback to old

                        audioContext
                            .decodeAudioData(arrayBuffer, function() {
                                    resolve(true);
                                },
                                function(e) {
                                    // errorCallback if an error occurs when the audio data is being decoded.
                                    resolve(false);
                                });
                    }
                });

                return promise;
            }

            enableAlternateDecoder(av, ctx) {
                BaseAudioContext.prototype.decodeAudioData = function(arraybuffer, success, error) {
                    var decode = function(resolve) {
                        var asset = av.Asset.fromBuffer(arraybuffer);
                        asset.decodeToBuffer(function(buffer) {
                            const bufferLength = buffer.length;
                            var channels = asset.format.channelsPerFrame;
                            var samples = bufferLength / channels;
                            var audiobuffer = ctx.createBuffer(channels, samples, asset.format.sampleRate);
                            // https://github.com/audiocogs/aurora.js/issues/122#issuecomment-169372744
                            var audioChans = [];
                            for (var i = 0; i < channels; i++) {
                                audioChans.push(audiobuffer.getChannelData(i));
                            }
                            for (var i = 0; i < bufferLength; i++) {
                                audioChans[i % channels][Math.round(i / channels)] = buffer[i];
                            }
                            // console.info('decoded with aurora', asset);
                            resolve(audiobuffer);
                        });
                    };

                    if (typeof success === 'function') {
                        // old callback style
                        decode(success);
                    } else {
                        // newer Promise style
                        return new Promise((resolve, reject) => {
                            decode(resolve);
                        });
                    }
                };
            }
        }
        const webAudioUtil = new WebAudioUtil();
        /* harmony export (immutable) */
        __webpack_exports__["a"] = webAudioUtil;


        /***/
    }),
    /* 152 */
    /* exports provided: default */
    /* exports used: default */
    /*!******************************************!*\
      !*** ./src/js/Components/StartButton.js ***!
      \******************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }



        /**
         * A customized start button for this game (instead of using the one from game-common)
         * since the help dialog isn't used and the main menu needs to animate out before
         * changing state
         */

        var StartButton = function() {
            function StartButton(gameState, x, y, asset) {
                var nextState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'Game';
                var nextStateData = arguments[5];
                var onClick = arguments[6];

                _classCallCheck(this, StartButton);

                var onClickHandlerComplete = function onClickHandlerComplete() {
                    __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["b" /* gameBridge */ ].start();
                    gameState.state.start(nextState, true, false, nextStateData);
                };

                this._button = gameState.add.button(x, y, asset.atlas, function() {
                    onClick(onClickHandlerComplete);
                }, null, asset.over, asset.out, asset.down, asset.up);
                this._button.setUpSound(asset.upSound);
            }

            _createClass(StartButton, [{
                key: 'enable',
                value: function enable() {
                    this._button.input.enabled = true;
                }
            }, {
                key: 'disable',
                value: function disable() {
                    this._button.input.enabled = false;
                }
            }, {
                key: 'button',
                get: function get() {
                    return this._button;
                }
            }]);

            return StartButton;
        }();

        /* harmony default export */
        __webpack_exports__["a"] = StartButton;

        /***/
    }),
    /* 153 */
    /* exports provided: default */
    /* exports used: default */
    /*!***********************************************!*\
      !*** ./src/js/Game/Modes/AdditionGameMode.js ***!
      \***********************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__GameMode_js__ = __webpack_require__( /*! ./GameMode.js */ 102);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Gooper_js__ = __webpack_require__( /*! ../Gooper.js */ 70);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__GroupBox_js__ = __webpack_require__( /*! ../GroupBox.js */ 101);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__Constants_js__ = __webpack_require__( /*! ../Constants.js */ 28);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }






        var MIN_GOOPER_VAL = 1;
        var MAX_GOOPER_VAL = 5;

        var TARGET_NUM = 10;

        var AdditionGameMode = function(_GameMode) {
            _inherits(AdditionGameMode, _GameMode);

            function AdditionGameMode(gameState) {
                _classCallCheck(this, AdditionGameMode);

                var _this = _possibleConstructorReturn(this, (AdditionGameMode.__proto__ || Object.getPrototypeOf(AdditionGameMode)).call(this));

                _this._groupBox = new __WEBPACK_IMPORTED_MODULE_2__GroupBox_js__["a" /* default */ ](gameState);
                _this._groupBox.setText(TARGET_NUM, gameState);
                _this._sumSoFar = 0;
                return _this;
            }

            _createClass(AdditionGameMode, [{
                key: 'createBoard',
                value: function createBoard(boardWidth, boardHeight, colToX, rowToY, gameState) {
                    this._board = [];
                    for (var col = 0; col < boardWidth; col++) {
                        this._board.push(new Array(boardHeight).fill(null));
                    }

                    var totalCells = boardWidth * boardHeight;
                    var atLeastOneMove = false;
                    var resetBoard = false;
                    while (!atLeastOneMove) {
                        if (resetBoard) {
                            for (var _col = 0; _col < boardWidth; _col++) {
                                for (var row = 0; row < boardHeight; row++) {
                                    this._board[_col][row] = null;
                                }
                            }
                        }

                        var numCellsPopulated = 0;
                        while (numCellsPopulated < totalCells) {
                            var _createGooperChain2 = this._createGooperChain(colToX, rowToY, gameState),
                                chainTotal = _createGooperChain2.chainTotal,
                                chainLength = _createGooperChain2.chainLength;

                            atLeastOneMove = atLeastOneMove || chainTotal === TARGET_NUM;
                            numCellsPopulated += chainLength;
                        }
                        resetBoard = true;
                    }
                }
            }, {
                key: 'allowAddToGroup',
                value: function allowAddToGroup(groupSoFar, gooper, backFill) {
                    var back = false;

                    if (gooper.specialId !== __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.POOPER) {
                        if (groupSoFar.length === 0) {
                            back = true;
                        } else {
                            var index = _.findIndex(groupSoFar, function(entry) {
                                return entry === gooper;
                            });
                            if (index === -1) {
                                var lastGooper = groupSoFar[groupSoFar.length - 1];
                                back = this.areGoopersAdjacent(lastGooper, gooper);
                                if (backFill && back) {
                                    var sum = gooper.rawText;
                                    _.forEach(groupSoFar, function(gopperIter) {
                                        sum += gopperIter.rawText;
                                    });
                                    back = sum <= TARGET_NUM;
                                }
                            }
                        }
                    }

                    return back;
                }
            }, {
                key: 'onAddToGroup',
                value: function onAddToGroup(groupSoFar, gooper) {
                    this._sumSoFar += gooper.rawText;
                }
            }, {
                key: 'onGroupingComplete',
                value: function onGroupingComplete() {
                    this._sumSoFar = 0;
                }
            }, {
                key: 'isValidGroup',
                value: function isValidGroup(group) {
                    var sum = 0;
                    _.forEach(group, function(gooper) {
                        sum += gooper.rawText;
                    });
                    return sum === TARGET_NUM;
                }
            }, {
                key: '_backFillChain',
                value: function _backFillChain(chain, colToX, rowToY, gameState) {
                    var newGoopers = [];

                    var sumSoFar = _.sum(_.map(chain, function(gooper) {
                        return gooper.rawText;
                    }));
                    var remainder = TARGET_NUM - sumSoFar;
                    if (remainder > 0) {
                        var chainPath = [];
                        var lastChainPos = chain[0];
                        var emptyNeighbors = this._findEmptyNeighbors(lastChainPos.col, lastChainPos.row);
                        while (emptyNeighbors.length > 0) {
                            var _$sample = _.sample(emptyNeighbors),
                                col = _$sample.col,
                                row = _$sample.row;

                            chainPath.push({
                                col: col,
                                row: row
                            });
                            this._board[col][row] = lastChainPos; // temp fill the cell so subsequent _findEmptyNeighbors won't include this one
                            for (var checkRow = row - 1; checkRow >= 0 && !this._board[col][checkRow]; checkRow--) {
                                this._board[col][checkRow] = lastChainPos; // temp fill the cell so subsequent _findEmptyNeighbors won't include this one
                                chainPath.push({
                                    col: col,
                                    row: checkRow
                                });
                            }

                            emptyNeighbors = this._findEmptyNeighbors(col, row);
                        }

                        if (chainPath.length > 0) {
                            var minVal = Math.ceil(remainder / chainPath.length);
                            var i = 0;
                            while (i < chainPath.length && remainder > 0) {
                                var _chainPath$i = chainPath[i],
                                    col = _chainPath$i.col,
                                    row = _chainPath$i.row;

                                var superId = this._getSpecialIdForNewGooper();
                                var val = superId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER ? 0 : _.random(minVal, remainder);
                                remainder -= val;

                                var gooper = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(), superId, val, colToX(col), rowToY(row), row, col, gameState);
                                gooper.partOfChain = true;
                                this._board[col][row] = gooper;
                                newGoopers.push(gooper);

                                var j = i + 1;
                                for (; j < chainPath.length && chainPath[i].col === chainPath[j].col && chainPath[i].row > chainPath[j].row; j++) {
                                    superId = this._getSpecialIdForNewGooper();
                                    if (superId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER) {
                                        val = 0;
                                    } else if (remainder <= 0) {
                                        val = 1;
                                    } else {
                                        val = _.random(minVal, remainder);
                                    }
                                    remainder -= val;

                                    var _checkRow = chainPath[j].row;

                                    gooper = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(), superId, val, colToX(col), rowToY(_checkRow), _checkRow, col, gameState);
                                    gooper.partOfChain = true;
                                    this._board[col][_checkRow] = gooper;
                                    newGoopers.push(gooper);
                                }

                                i = j;
                            }
                            while (i < chainPath.length) {
                                var _chainPath$i2 = chainPath[i],
                                    col = _chainPath$i2.col,
                                    row = _chainPath$i2.row;

                                this._board[col][row] = null; // clean up earlier temp fills
                                ++i;
                            }
                        }
                    }

                    return newGoopers;
                }
            }, {
                key: 'getPointsForGroup',
                value: function getPointsForGroup(group) {
                    var numRegularGoopers = _.filter(group, function(test) {
                        return test.specialId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;
                    }).length;
                    var numSuperGoopers = group.length - numRegularGoopers;
                    return (numRegularGoopers * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["e" /* SCORE */ ].POINTS_PER_GOOPER * 2 + numSuperGoopers * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["e" /* SCORE */ ].POINTS_PER_SUPER_GOOPER) * 10;
                }
            }, {
                key: '_getRandomGooperAssetIndex',
                value: function _getRandomGooperAssetIndex() {
                    return __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_COLORS * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_FACES_PER_COLOR + _.random(0, __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_COLORS - 1);
                }
            }, {
                key: '_createGooperChain',
                value: function _createGooperChain(colToX, rowToY, gameState) {
                    var returnValue = {
                        chainTotal: 0,
                        chainLength: 0
                    };

                    var col = this._getRandomColumnIndexWithEmptyCells();
                    var row = this._getRandomEmptyCellRowIndex(col);

                    var emptyNeighbors = [{
                        col: col,
                        row: row
                    }];
                    do {
                        var next = _.sample(emptyNeighbors);
                        col = next.col;
                        row = next.row;

                        var maxGooperVal = Math.min(MAX_GOOPER_VAL, TARGET_NUM - returnValue.chainTotal); // note: assumes TARGET_NUM > MAX_GOOPER_VAL
                        var minGooperVal = Math.min(MIN_GOOPER_VAL, maxGooperVal);
                        var val = _.random(minGooperVal, maxGooperVal);
                        this._board[col][row] = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(), __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE, val, colToX(col), rowToY(row), row, col, gameState);
                        returnValue.chainTotal += val;
                        ++returnValue.chainLength;

                        emptyNeighbors = this._findEmptyNeighbors(col, row);
                    } while (returnValue.chainTotal < TARGET_NUM && emptyNeighbors.length > 0);

                    return returnValue;
                }
            }]);

            return AdditionGameMode;
        }(__WEBPACK_IMPORTED_MODULE_0__GameMode_js__["a" /* default */ ]);

        /* harmony default export */
        __webpack_exports__["a"] = AdditionGameMode;

        /***/
    }),
    /* 154 */
    /* exports provided: default */
    /* exports used: default */
    /*!****************************************************!*\
      !*** ./src/js/Game/Modes/FreeSelectByColorMode.js ***!
      \****************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__GameMode_js__ = __webpack_require__( /*! ./GameMode.js */ 102);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Gooper_js__ = __webpack_require__( /*! ../Gooper.js */ 70);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__GroupBox_js__ = __webpack_require__( /*! ../GroupBox.js */ 101);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__Constants_js__ = __webpack_require__( /*! ../Constants.js */ 28);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__util_ArrayFuncs_js__ = __webpack_require__( /*! ../../util/ArrayFuncs.js */ 104);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }







        var MIN_GROUP_SIZE = 3;
        var MAX_GEN_CHAIN_SIZE = 4;

        var FreeSelectByColorMode = function(_GameMode) {
            _inherits(FreeSelectByColorMode, _GameMode);

            function FreeSelectByColorMode(gameState) {
                _classCallCheck(this, FreeSelectByColorMode);

                var _this = _possibleConstructorReturn(this, (FreeSelectByColorMode.__proto__ || Object.getPrototypeOf(FreeSelectByColorMode)).call(this));

                _this._groupBox = new __WEBPACK_IMPORTED_MODULE_2__GroupBox_js__["a" /* default */ ](gameState);
                return _this;
            }

            _createClass(FreeSelectByColorMode, [{
                key: 'createBoard',
                value: function createBoard(boardWidth, boardHeight, colToX, rowToY, gameState) {
                    this._board = [];
                    for (var col = 0; col < boardWidth; col++) {
                        this._board.push(new Array(boardHeight).fill(null));
                    }

                    var totalCells = boardWidth * boardHeight;
                    var atLeastOneMove = false;
                    var resetBoard = false;
                    while (!atLeastOneMove) {
                        if (resetBoard) {
                            for (var _col = 0; _col < boardWidth; _col++) {
                                for (var row = 0; row < boardHeight; row++) {
                                    this._board[_col][row] = null;
                                }
                            }
                        }

                        var numCellsPopulated = 0;
                        var chainColors = _.shuffle(_.range(__WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_COLORS));
                        while (numCellsPopulated < totalCells) {
                            if (chainColors.length === 0) {
                                chainColors = _.shuffle(_.range(__WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_COLORS));
                            }
                            var color = chainColors[0];
                            chainColors = _.drop(chainColors);
                            var chainLength = this._createGooperChain(_.random(MIN_GROUP_SIZE, MAX_GEN_CHAIN_SIZE), color, colToX, rowToY, gameState);
                            atLeastOneMove = atLeastOneMove || chainLength > MIN_GROUP_SIZE;
                            numCellsPopulated += chainLength;
                        }
                        resetBoard = true;
                    }
                }
            }, {
                key: '_createGooperChain',
                value: function _createGooperChain(requestedChainLength, chainColor, colToX, rowToY, gameState) {
                    var numCellsUsed = 0;

                    var col = this._getRandomColumnIndexWithEmptyCells();
                    var row = this._getRandomEmptyCellRowIndex(col);

                    var emptyNeighbors = [{
                        col: col,
                        row: row
                    }];

                    do {
                        var next = _.sample(emptyNeighbors);
                        col = next.col;
                        row = next.row;

                        this._board[col][row] = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(chainColor), __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE, null, colToX(col), rowToY(row), row, col, gameState);
                        ++numCellsUsed;

                        emptyNeighbors = this._findEmptyNeighbors(col, row);
                    } while (numCellsUsed < requestedChainLength && emptyNeighbors.length > 0);

                    return numCellsUsed;
                }
            }, {
                key: '_getFirstRegularGooper',
                value: function _getFirstRegularGooper(group) {
                    return _.find(group, function(test) {
                        return test.specialId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;
                    });
                }
            }, {
                key: 'allowAddToGroup',
                value: function allowAddToGroup(groupSoFar, gooper, backFill) {
                    var back = false;
                    if (gooper.specialId !== __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.POOPER) {
                        if (groupSoFar.length === 0) {
                            back = true;
                        } else {
                            var firstRegularGooper = this._getFirstRegularGooper(groupSoFar);
                            var key = firstRegularGooper ? firstRegularGooper.colorKey : gooper.colorKey;
                            if (key === gooper.colorKey || !backFill && gooper.specialId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER) {
                                var index = _.findIndex(groupSoFar, function(entry) {
                                    return entry === gooper;
                                });
                                if (index === -1) {
                                    var lastGooper = groupSoFar[groupSoFar.length - 1];
                                    back = this.areGoopersAdjacent(lastGooper, gooper);
                                }
                            }
                        }
                    }
                    return back;
                }
            }, {
                key: 'onAddToGroup',
                value: function onAddToGroup(groupSoFar, gooper) {
                    var firstRegularGooper = this._getFirstRegularGooper(groupSoFar); // todo: groupSoFar undefined
                    if (firstRegularGooper) {
                        this._groupBox.setColor(firstRegularGooper.colorKey);
                    }
                }
            }, {
                key: 'onGroupingComplete',
                value: function onGroupingComplete() {
                    this._groupBox.setColor(-1);
                }
            }, {
                key: 'isValidGroup',
                value: function isValidGroup(group) {
                    return _.filter(group, function(test) {
                        return test.specialId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;
                    }).length >= MIN_GROUP_SIZE;
                }
            }, {
                key: 'getPointsForGroup',
                value: function getPointsForGroup(group) {
                    var numRegularGoopers = _.filter(group, function(test) {
                        return test.specialId === __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.NONE;
                    }).length;
                    var numSuperGoopers = group.length - numRegularGoopers;
                    return numRegularGoopers * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["e" /* SCORE */ ].POINTS_PER_GOOPER + (numRegularGoopers - MIN_GROUP_SIZE) * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["e" /* SCORE */ ].POINTS_PER_GOOPER_BEYOND_MIN + numSuperGoopers * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["e" /* SCORE */ ].POINTS_PER_SUPER_GOOPER;
                }
            }, {
                key: '_backFillChain',
                value: function _backFillChain(chain, colToX, rowToY, gameState) {
                    var newGoopers = [];

                    var minAddChainSize = Math.max(MIN_GROUP_SIZE - chain.length, 1);
                    var chainSize = _.random(minAddChainSize, MAX_GEN_CHAIN_SIZE); // todo: handle not enough empty cells to make a complete chain
                    var lastChainPos = chain[0];
                    var chainColor = lastChainPos.colorKey;
                    for (var i = 0; i < chainSize; i++) {
                        var emptyNeighbors = this._findEmptyNeighbors(lastChainPos.col, lastChainPos.row);
                        if (emptyNeighbors.length > 0) {
                            var _$sample = _.sample(emptyNeighbors),
                                col = _$sample.col,
                                row = _$sample.row;

                            lastChainPos = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(chainColor), this._getSpecialIdForNewGooper(), null, colToX(col), rowToY(row), row, col, gameState);
                            lastChainPos.partOfChain = true;
                            this._board[col][row] = lastChainPos;
                            newGoopers.push(lastChainPos);

                            for (var tempRow = row - 1; tempRow >= 0 && !this._board[col][tempRow]; tempRow--, i++) {
                                lastChainPos = new __WEBPACK_IMPORTED_MODULE_1__Gooper_js__["a" /* default */ ](this._getRandomGooperAssetIndex(chainColor), this._getSpecialIdForNewGooper(), null, colToX(col), rowToY(tempRow), tempRow, col, gameState);
                                lastChainPos.partOfChain = true;
                                this._board[col][tempRow] = lastChainPos;
                                newGoopers.push(lastChainPos);
                            }
                        } else {
                            break;
                        }
                    }

                    return newGoopers;
                }
            }, {
                key: '_getRandomGooperColorStartIndex',
                value: function _getRandomGooperColorStartIndex() {
                    return _.random(0, __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_COLORS - 1);
                }
            }, {
                key: '_getRandomGooperAssetIndex',
                value: function _getRandomGooperAssetIndex(colorIndex) {
                    return colorIndex * __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_FACES_PER_COLOR + _.random(0, __WEBPACK_IMPORTED_MODULE_3__Constants_js__["b" /* GOOPER_DATA */ ].NUM_FACES_PER_COLOR - 1);
                }
            }]);

            return FreeSelectByColorMode;
        }(__WEBPACK_IMPORTED_MODULE_0__GameMode_js__["a" /* default */ ]);

        /* harmony default export */
        __webpack_exports__["a"] = FreeSelectByColorMode;

        /***/
    }),
    /* 155 */
    /* exports provided: default */
    /* exports used: default */
    /*!*************************************!*\
      !*** ./src/js/Game/ScoreCounter.js ***!
      \*************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Constants_js__ = __webpack_require__( /*! ./Constants.js */ 28);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Game_ScoreManager_js__ = __webpack_require__( /*! ../Game/ScoreManager.js */ 103);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }




        var ScoreCounter = function() {
            function ScoreCounter(gameState) {
                _classCallCheck(this, ScoreCounter);

                _.bindAll(this, '_scoreUpdate', '_onTweenUpdate');
                this._gameState = gameState;

                this._bg = this._gameState.add.image(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_BG_X, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_BG_Y, 'score_counter_background');
                this._display = this._gameState.add.text(0, 0, '0', {
                    boundsAlignH: 'right',
                    fill: '#003b00',
                    fontSize: '32px'
                });
                this._display.setTextBounds(__WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_X, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_Y, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_WIDTH, __WEBPACK_IMPORTED_MODULE_0__Constants_js__["d" /* LAYOUT */ ].SCORE_COUNTER_HEIGHT);
                this._tweenObj = {
                    val: 0
                };

                __WEBPACK_IMPORTED_MODULE_1__Game_ScoreManager_js__["a" /* scoreManager */ ].updateSignal.add(this._scoreUpdate);
            }

            _createClass(ScoreCounter, [{
                key: '_scoreUpdate',
                value: function _scoreUpdate(score) {
                    this._tween = this._gameState.add.tween(this._tweenObj).to({
                        val: score
                    }, 500, Phaser.Easing.Default, true);
                    this._tween.onUpdateCallback(this._onTweenUpdate);
                    this._tween.onComplete.add(this._onTweenUpdate);
                }
            }, {
                key: '_onTweenUpdate',
                value: function _onTweenUpdate() {
                    this._display.text = '' + Math.floor(this._tweenObj.val).toLocaleString('en');
                }
            }]);

            return ScoreCounter;
        }();

        /* harmony default export */
        __webpack_exports__["a"] = ScoreCounter;

        /***/
    }),
    /* 156 */
    /* exports provided: default */
    /* exports used: default */
    /*!*************************************************!*\
      !*** ./src/js/GameStates/AnimatedScoreBoard.js ***!
      \*************************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }




        var NAME_MAX = 8;
        var SCORE_ROWS = 5;

        /**
         * Duplicating ScoreBoard from game-common due to a babel issue.  This was to be a sublcass that
         * adds animating in the score board
         */

        var AnimatedScoreBoard = function(_Phaser$State) {
            _inherits(AnimatedScoreBoard, _Phaser$State);

            function AnimatedScoreBoard() {
                _classCallCheck(this, AnimatedScoreBoard);

                return _possibleConstructorReturn(this, (AnimatedScoreBoard.__proto__ || Object.getPrototypeOf(AnimatedScoreBoard)).apply(this, arguments));
            }

            _createClass(AnimatedScoreBoard, [{
                key: 'init',
                value: function init(score, styling) {
                    this._score = score;
                    this._styling = styling;
                }
            }, {
                key: 'create',
                value: function create() {
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.bindAll(this, 'showHighScores');

                    var exitAtlas = {
                        atlas: 'close_button'
                    };
                    var yourScoreBounds = {
                        x: 455,
                        y: 170,
                        width: 356,
                        height: 46
                    };
                    var exitPos = {
                        x: 473,
                        y: 800
                    };
                    var yourScoreFont = {
                        boundsAlignH: 'center'
                    };
                    if (this._styling) {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(exitAtlas, this._styling.exitAsset);
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(yourScoreFont, this._styling.yourScoreFont);
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(yourScoreBounds, this._styling.yourScoreBounds);
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(exitPos, this._styling.exitPosition);
                    }

                    this._scoreBoardObjects = [];

                    this.add.image(0, 0, 'main_menu_background');
                    this.background = this.add.image(168, 221, 'game_over_background');

                    if (__WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].shouldShowExitButton) {
                        this.exitButton = new __WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["c" /* ExitButton */ ](this, exitPos.x, exitPos.y, exitAtlas);
                        this.exitButton.button.visible = false;
                    }

                    this.scoreText = this.add.image(550, 19, 'score_text');

                    this._text = this.add.text(0, 0, this._score, yourScoreFont);
                    this._text.setTextBounds(yourScoreBounds.x, yourScoreBounds.y, yourScoreBounds.width, yourScoreBounds.height);

                    if (__WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].sendScore) {
                        __WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].sendScore(this._score).then(this.showHighScores);
                    } else {
                        this.showHighScores(this.createDefaultHighScores());
                    }

                    this.animateIn();
                }
            }, {
                key: 'animateIn',
                value: function animateIn() {
                    var _this2 = this;

                    this._bgTween = this.add.tween(this.background);
                    this._bgTween.from({
                        x: 1288
                    }, 250, Phaser.Easing.Quadratic.Out, true, 0);

                    if (__WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].shouldShowExitButton) {
                        this.exitButtonTween = this.add.tween(this.exitButton.button);
                        this.exitButtonTween.onStart.add(function() {
                            _this2.exitButton.button.visible = true;
                        });
                        this.exitButtonTween.from({
                            y: 954
                        }, 250, Phaser.Easing.Quadratic.Out, true, 0);
                    }

                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(this._scoreBoardObjects, function(obj) {
                        _this2.add.tween(obj).from({
                            x: obj.x + 1120
                        }, 250, Phaser.Easing.Quadratic.Out, true, 0);
                    });
                }
            }, {
                key: 'showHighScores',
                value: function showHighScores(scores) {
                    var allTimeLayout = {
                        star_x: 121,
                        list_x: 176,
                        name_x: 206,
                        score_x: 500,
                        score_width: 67,

                        start_y: 467,
                        row_height: 50,
                        star_row_dy: 10
                    };
                    var weeklyLayout = {
                        star_x: 621,
                        list_x: 676,
                        name_x: 706,
                        score_x: 999,
                        score_width: 67,

                        start_y: 467,
                        row_height: 50,
                        star_row_dy: 10
                    };
                    if (this._styling) {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(allTimeLayout, this._styling.allTimeLayout);
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(weeklyLayout, this._styling.weeklyLayout);
                    }
                    this._createHighScoreDisplay(scores.allTimeScores, allTimeLayout);
                    this._createHighScoreDisplay(scores.currentWeekScores, weeklyLayout);
                }
            }, {
                key: '_createHighScoreDisplay',
                value: function _createHighScoreDisplay(scoreArray, layout) {
                    var fontOptions = {};
                    var scoreFontOptions = {
                        boundsAlignH: 'right'
                    };
                    if (this._styling) {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(fontOptions, this._styling.highScoresFont);
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.merge(scoreFontOptions, this._styling.highScoresFont);
                    }

                    var starIndex = this._findScoreForPlaySession(scoreArray);
                    for (var i = 0; i < SCORE_ROWS && i < scoreArray.length; i++) {
                        var scoreObj = scoreArray[i];
                        var y = layout.start_y + i * layout.row_height;
                        if (i === starIndex) {
                            this._scoreBoardObjects.push(this.add.image(layout.star_x, y + layout.star_row_dy, 'star'));
                        }
                        this._scoreBoardObjects.push(this.add.text(layout.list_x, y, i + 1 + '.', fontOptions));
                        this._scoreBoardObjects.push(this.add.text(layout.name_x, y, this._trimName(scoreObj.firstName), fontOptions));
                        var score = this.add.text(0, 0, scoreObj.score, scoreFontOptions);
                        score.setTextBounds(layout.score_x, y, layout.score_width, y + layout.row_height);
                        this._scoreBoardObjects.push(score);
                    }
                }
            }, {
                key: '_trimName',
                value: function _trimName(name) {
                    if (name.length > NAME_MAX) {
                        name = name.substring(0, NAME_MAX) + '…';
                    }
                    return name;
                }
            }, {
                key: '_findScoreForPlaySession',
                value: function _findScoreForPlaySession(scoreArray) {
                    var _this3 = this;

                    var index = -1;
                    if (__WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].usingRealBridge) {
                        var studentId = __WEBPACK_IMPORTED_MODULE_1__cainc_game_common__["b" /* gameBridge */ ].info.studentId;
                        index = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(scoreArray, function(scoreObj) {
                            return scoreObj.studentId === studentId && scoreObj.score === _this3._score;
                        });
                    }
                    return index;
                }
            }, {
                key: 'createDefaultHighScores',
                value: function createDefaultHighScores() {
                    var scoreObj = {
                        allTimeScores: [{
                            studentId: 0,
                            firstName: 'Matt',
                            score: 20000
                        }, {
                            studentId: 1,
                            firstName: 'Tif',
                            score: 20000
                        }, {
                            studentId: 2,
                            firstName: 'Kim',
                            score: 20000
                        }, {
                            studentId: 3,
                            firstName: 'Ken',
                            score: 20000
                        }, {
                            studentId: 4,
                            firstName: 'lengthTest',
                            score: 20000
                        }],
                        currentWeekScores: [{
                            studentId: 0,
                            firstName: 'Matt',
                            score: 20000
                        }, {
                            studentId: 1,
                            firstName: 'Tif',
                            score: 20000
                        }, {
                            studentId: 2,
                            firstName: 'Kim',
                            score: 20000
                        }, {
                            studentId: 3,
                            firstName: 'Ken',
                            score: 20000
                        }, {
                            studentId: 4,
                            firstName: 'lengthTest',
                            score: 20000
                        }]
                    };
                    scoreObj.allTimeScores = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.shuffle(scoreObj.allTimeScores);
                    scoreObj.currentWeekScores = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.shuffle(scoreObj.currentWeekScores);

                    return scoreObj;
                }
            }]);

            return AnimatedScoreBoard;
        }(Phaser.State);

        /* harmony default export */
        __webpack_exports__["a"] = AnimatedScoreBoard;

        /***/
    }),
    /* 157 */
    /* exports provided: default */
    /* exports used: default */
    /*!***********************************!*\
      !*** ./src/js/GameStates/Game.js ***!
      \***********************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__( /*! lodash */ 27);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__ = __webpack_require__( /*! ../Game/Constants.js */ 28);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_3__Game_Gooper_js__ = __webpack_require__( /*! ../Game/Gooper.js */ 70);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_4__Game_Modes_FreeSelectByColorMode_js__ = __webpack_require__( /*! ../Game/Modes/FreeSelectByColorMode.js */ 154);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_5__Game_Modes_AdditionGameMode_js__ = __webpack_require__( /*! ../Game/Modes/AdditionGameMode.js */ 153);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_6__Game_ScoreManager_js__ = __webpack_require__( /*! ../Game/ScoreManager.js */ 103);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_7__Game_ScoreCounter_js__ = __webpack_require__( /*! ../Game/ScoreCounter.js */ 155);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }










        var EXIT_X = 1143;
        var EXIT_Y = 27;

        var Game = function(_Phaser$State) {
            _inherits(Game, _Phaser$State);

            function Game() {
                _classCallCheck(this, Game);

                return _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).apply(this, arguments));
            }

            _createClass(Game, [{
                key: 'init',
                value: function init(mode) {
                    this._selectedMode = mode;
                }
            }, {
                key: 'create',
                value: function create() {
                    var _this2 = this;

                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.bindAll(this, 'gameOver', '_getXForCol', '_getYForRow', '_pooperSpawn');

                    this.physics.startSystem(Phaser.Physics.ARCADE);

                    this._background = this.add.image(0, 0, 'main_menu_background');
                    this._pooperSpreadLayer = this.add.group();

                    this._scoreCounter = new __WEBPACK_IMPORTED_MODULE_7__Game_ScoreCounter_js__["a" /* default */ ](this);

                    if (this._selectedMode === __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["a" /* GAME_MODES */ ].FREE_SELECT_BY_COLOR) {
                        this._mode = new __WEBPACK_IMPORTED_MODULE_4__Game_Modes_FreeSelectByColorMode_js__["a" /* default */ ](this);
                    } else {
                        this._mode = new __WEBPACK_IMPORTED_MODULE_5__Game_Modes_AdditionGameMode_js__["a" /* default */ ](this);
                    }
                    this._numCols = 6; // todo: selection of different widths/heights and number of extra goopers
                    this._numRows = 6;
                    this._numGoopersCreatable = 14;
                    this._boardWidth = this._numCols * __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].WIDTH;
                    this._boardHeight = this._numRows * __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].HEIGHT;
                    this._mode.createBoard(this._numCols, this._numRows, this._getXForCol, this._getYForRow, this);

                    var board = this._mode.board;
                    board.forEach(function(column) {
                        column.forEach(function(gooper) {
                            gooper.display.onChildInputDown.add(_this2._onGooperMouseOver, _this2); // for when starting a selection while already over a gooper
                            gooper.display.onChildInputOver.add(_this2._onGooperMouseOver, _this2);
                        });
                    });
                    this.input.onUp.add(this._mouseUp, this);

                    this._timer = new __WEBPACK_IMPORTED_MODULE_2__cainc_game_common__["g" /* Timer */ ](this, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["c" /* SESSION_DURATION_SECONDS */ ], __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].TIMER_X, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].TIMER_Y, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].TIMER_WIDTH, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].TIMER_HEIGHT, '#000000');
                    this._timer.expire.add(this.gameOver);
                    this._timer.start();

                    if (__WEBPACK_IMPORTED_MODULE_2__cainc_game_common__["b" /* gameBridge */ ].shouldShowExitButton) {
                        this._exitButton = new __WEBPACK_IMPORTED_MODULE_2__cainc_game_common__["c" /* ExitButton */ ](this, EXIT_X, EXIT_Y, {
                            atlas: 'exit_button'
                        });
                    }

                    this._activeGroup = [];

                    this._bgSound = this.sound.play('background_music', 1, true);
                }
            }, {
                key: 'gameOver',
                value: function gameOver() {
                    console.log('ellapsed time: ' + (__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["c" /* SESSION_DURATION_SECONDS */ ] - this._timer.secondsRemaining));
                    this._timer.stop();
                    this._bgSound.stop();
                    // todo: animation for conveying time based part of the score
                    this.state.start('GameOver', true, false, __WEBPACK_IMPORTED_MODULE_6__Game_ScoreManager_js__["a" /* scoreManager */ ].score, {
                        yourScoreBounds: {
                            x: 546,
                            y: 75,
                            width: 151,
                            height: 44
                        },
                        yourScoreFont: {
                            fontSize: '44px'
                        },
                        allTimeLayout: {
                            star_x: 219,
                            list_x: 244,
                            name_x: 274,
                            score_x: 479,
                            score_width: 67,

                            start_y: 420,
                            row_height: 54,
                            star_row_dy: 5
                        },
                        weeklyLayout: {
                            star_x: 680,
                            list_x: 705,
                            name_x: 735,
                            score_x: 940,
                            score_width: 67,

                            start_y: 420,
                            row_height: 54,
                            star_row_dy: 5
                        },
                        exitPosition: {
                            x: 519,
                            y: 755
                        }
                    });
                }
            }, {
                key: '_getXForCol',
                value: function _getXForCol(col) {
                    return this.world.width - __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].SCREEN_PAD - this._boardWidth + __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].WIDTH * col;
                }
            }, {
                key: '_getYForRow',
                value: function _getYForRow(row) {
                    return this.world.height - __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["d" /* LAYOUT */ ].SCREEN_PAD - __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].HEIGHT * (row + 1);
                }
            }, {
                key: '_onGooperMouseOver',
                value: function _onGooperMouseOver(gooperDisplay, pointer) {
                    if (pointer.isDown) {
                        var gooper = gooperDisplay.gooper;
                        if (this._mode.allowAddToGroup(this._activeGroup, gooper, false)) {
                            this.sound.play('add_to_selection' + __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.random(1, 5));
                            this._activeGroup.push(gooper);
                            gooper.highlight();
                            this._mode.onAddToGroup(this._activeGroup, gooper);
                        }
                    }
                }
            }, {
                key: '_mouseUp',
                value: function _mouseUp(pointer, x, y, click) {
                    var _this3 = this;

                    if (this._activeGroup) {
                        this._activeGroup.forEach(function(gooper) {
                            gooper.unhighlight();
                        });
                        if (this._mode.isValidGroup(this._activeGroup)) {
                            if (-1 === __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(this._activeGroup, function(gooper) {
                                    return gooper.specialId === __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER;
                                })) {
                                this.sound.play('valid_selection_complete');
                            } else {
                                this.sound.play('valid_selection_complete_with_super');
                            }

                            var removedGoopers = [];
                            __WEBPACK_IMPORTED_MODULE_6__Game_ScoreManager_js__["a" /* scoreManager */ ].updateScore(this._mode.getPointsForGroup(this._activeGroup), 0);
                            var removeRows = this._getSuperRowsToRemove();
                            this._activeGroup.forEach(function(gooper) {
                                removedGoopers.push(gooper);
                                _this3._mode.board[gooper.col][gooper.row] = null;
                                if (window.hasOwnProperty('caDashboard')) {
                                    gooper.display.destroy();
                                } else {
                                    _this3.time.events.add(250, function() {
                                        gooper.display.destroy();
                                    });
                                }
                            });
                            __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(this._mode.board, function(column, columnIndex) {
                                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(column, function(gooper, rowIndex) {
                                    if (gooper && __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(removeRows, function(removeIndex) {
                                            return removeIndex === rowIndex;
                                        }) !== -1) {
                                        removedGoopers.push(gooper);
                                        _this3._mode.board[columnIndex][rowIndex] = null;
                                        if (window.hasOwnProperty('caDashboard')) {
                                            gooper.display.destroy();
                                        } else {
                                            _this3.time.events.add(250, function() {
                                                gooper.display.destroy();
                                            });
                                        }
                                    }
                                });
                            });
                            this.time.events.add(250, this._fillHoles, this);

                            if (!window.hasOwnProperty('caDashboard')) {
                                __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(removedGoopers, function(gooper) {
                                    var emitter = _this3.add.emitter(gooper.display.x + __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].WIDTH / 2, gooper.display.y + __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].HEIGHT / 2, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.NUM_PARTICLES);
                                    emitter.gravity = __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.GRAVITY;
                                    emitter.minParticleScale = __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.SCALE;
                                    emitter.maxParticleScale = __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.SCALE;
                                    emitter.makeParticles('goopers', gooper._gooper.frame);
                                    emitter.setAlpha(1, 0.2, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.FADE_RATE);
                                    emitter.setXSpeed(__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.MIN_SPEED, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.MAX_SPEED);
                                    emitter.setYSpeed(__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.MIN_SPEED, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.MAX_SPEED);
                                    emitter.start(true, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.LIFESPAN_MS, null, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].PARTICLE_SYSTEM.NUM_PARTICLES);
                                });
                            }
                        } else if (this._activeGroup.length > 0) {
                            this.sound.play('invalid_selection_complete');
                        }
                        this._mode.onGroupingComplete();
                        this._activeGroup = [];
                    }
                }
            }, {
                key: '_getSuperRowsToRemove',
                value: function _getSuperRowsToRemove() {
                    var superGooperRemovalRows = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.uniq(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.map(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(this._activeGroup, function(test) {
                        return test.specialId === __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.SUPER;
                    }), function(superGooper) {
                        return superGooper.row;
                    }));
                    var superRowsToRemove = superGooperRemovalRows.length > 0 ? this._activeGroup.length - __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SUPER_EXTRA_ROW_GROUP_THRESHOLD : 0;
                    if (superRowsToRemove > superGooperRemovalRows.length) {
                        var numAdditionalRows = superRowsToRemove - superGooperRemovalRows.length;
                        for (var i = 0; i < numAdditionalRows; i++) {
                            var matchFound = false;
                            var startRow = superGooperRemovalRows[i % superGooperRemovalRows.length];

                            var _loop = function _loop(checkRow) {
                                if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(superRowsToRemove, function(removeRow) {
                                        return removeRow === checkRow;
                                    }) === -1) {
                                    superGooperRemovalRows.push(checkRow);
                                    matchFound = true;
                                }
                            };

                            for (var checkRow = startRow - 1; checkRow >= 0 && !matchFound; checkRow--) {
                                _loop(checkRow);
                            }

                            var _loop2 = function _loop2(checkRow) {
                                if (__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(superRowsToRemove, function(removeRow) {
                                        return removeRow === checkRow;
                                    }) === -1) {
                                    superGooperRemovalRows.push(checkRow);
                                    matchFound = true;
                                }
                            };

                            for (var checkRow = startRow + 1; checkRow < this._numRows && !matchFound; checkRow++) {
                                _loop2(checkRow);
                            }
                        }

                        if (superGooperRemovalRows.length > __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].MAX_SUPER_ROW_REMOVAL) {
                            superGooperRemovalRows = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.slice(superGooperRemovalRows, 0, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].MAX_SUPER_ROW_REMOVAL);
                        }
                        this._numGoopersCreatable += superGooperRemovalRows.length * __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SUPER_ROW_ADDITIONAL_GOOPER_SPAWN;
                    }

                    return superGooperRemovalRows;
                }
            }, {
                key: '_fillHoles',
                value: function _fillHoles() {
                    var _this4 = this;

                    var numSpacesPerColumn = this._getNumSpacesPerColumn();

                    var newGoopers = this._mode.backFill(numSpacesPerColumn, this._numGoopersCreatable, this._getXForCol, this._getYForRow, this);
                    this._numGoopersCreatable -= newGoopers.length;
                    newGoopers.forEach(function(gooper) {
                        gooper.display.onChildInputDown.add(_this4._onGooperMouseOver, _this4); // for when starting a selection while already over a gooper
                        gooper.display.onChildInputOver.add(_this4._onGooperMouseOver, _this4);
                        _this4.add.tween(gooper.display).from({
                            y: -100
                        }, 250, Phaser.Easing.Bounce.Out, true);
                    });
                    this._checkNewPooperToSpawnFrom();

                    if (this._mode.isGameOver()) {
                        this._timer.stop();
                        __WEBPACK_IMPORTED_MODULE_6__Game_ScoreManager_js__["a" /* scoreManager */ ].updateScore(0, this._timer.secondsRemaining * __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["e" /* SCORE */ ].POINTS_PER_SECOND);
                        setTimeout(function() {
                            _this4.gameOver();
                        }, 1000);
                    }
                }
            }, {
                key: '_getNumSpacesPerColumn',
                value: function _getNumSpacesPerColumn() {
                    var _this5 = this;

                    var numSpacesPerColumn = [];
                    this._mode.board.forEach(function(column, col) {
                        var numSpaces = 0;

                        var _loop3 = function _loop3(row) {
                            if (!column[row]) {
                                var nextFilledRow = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(column, function(entry, i) {
                                    return !!entry && i > row;
                                });
                                if (nextFilledRow !== -1) {
                                    var dropGooper = column[nextFilledRow];
                                    column[nextFilledRow] = null;
                                    column[row] = dropGooper;
                                    dropGooper.row = row;
                                    _this5.add.tween(dropGooper.display).to({
                                        y: _this5._getYForRow(row)
                                    }, 250, Phaser.Easing.Bounce.Out, true);
                                } else {
                                    ++numSpaces;
                                }
                            }
                        };

                        for (var row = 0; row < column.length; row++) {
                            _loop3(row);
                        }
                        numSpacesPerColumn.push(numSpaces);
                    });

                    return numSpacesPerColumn;
                }
            }, {
                key: '_checkNewPooperToSpawnFrom',
                value: function _checkNewPooperToSpawnFrom() {
                    var _this6 = this;

                    // check if the current spawning pooper has been cleared
                    if (this._pooperSpawnerData && this._pooperSpawnerData.gooper !== this._mode.board[this._pooperSpawnerData.spawnerOrigPos.col][this._pooperSpawnerData.spawnerOrigPos.row]) {
                        this._stopPooperSpawning();
                    }

                    // if the current spawning pooper is still valid, but the one it was expanding to was cleared, reset
                    if (this._pooperSpawnerData && this._pooperSpawnerData.expandTo !== this._mode.board[this._pooperSpawnerData.expandToOrigPos.col][this._pooperSpawnerData.expandToOrigPos.row]) {
                        this._stopPooperSpawning();
                    }

                    // if there is no current spawning pooper, check if one should be created
                    if (!this._pooperSpawnerData) {
                        this._pooperSpawnerData = this._getPooperToSpawnFrom();
                        if (this._pooperSpawnerData) {
                            var expandCoords = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.sample(this._pooperSpawnerData.neighbors);
                            this._pooperSpawnerData.expandTo = this._mode.board[expandCoords.col][expandCoords.row];

                            this._pooperSpawnerData.spawnerOrigPos = {
                                col: this._pooperSpawnerData.gooper.col,
                                row: this._pooperSpawnerData.gooper.row
                            };
                            this._pooperSpawnerData.expandToOrigPos = expandCoords;

                            var dcol = this._pooperSpawnerData.expandTo.col - this._pooperSpawnerData.gooper.col;
                            var drow = this._pooperSpawnerData.expandTo.row - this._pooperSpawnerData.gooper.row;

                            var scale = dcol !== 0 && drow !== 0 ? 1.414213562373095 : 1; // diagonals need a longer scale than cardinal directions for the long axis of the animation: sqrt(1^2 + 1^2)
                            var theta = Math.atan2(-drow, dcol);

                            this._pooperSpreadLayer.x = this._getXForCol(this._pooperSpawnerData.gooper.col) + __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET + this._pooperSpawnerData.gooper.display.width / 2;
                            this._pooperSpreadLayer.y = this._getYForRow(this._pooperSpawnerData.gooper.row) + __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].HIGHLIGHT_GOOPER_OFFSET + this._pooperSpawnerData.gooper.display.height / 2;
                            this._pooperSpreadLayer.rotation = theta;
                            this._pooperSpawnerData.left = this._pooperSpreadLayer.create(__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.LEFT_OFFSET, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.Y_OFFSET, 'spread_half_circle');
                            this._pooperSpawnerData.line = this._pooperSpreadLayer.create(__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.LINE_OFFSET, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.Y_OFFSET, 'spread_line');
                            this._pooperSpawnerData.line.scale.x = 0.25;
                            this._pooperSpawnerData.right = this._pooperSpreadLayer.create(__WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.RIGHT_OFFSET, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.Y_OFFSET, 'spread_half_circle');
                            this._pooperSpawnerData.right.scale.x = -1;
                            this._pooperSpawnerData.spreadLineAnimation = this.add.tween(this._pooperSpawnerData.line.scale);
                            this._pooperSpawnerData.spreadLineAnimation.to({
                                x: __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.LINE_SCALE_X * scale
                            }, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.DURATION_MS, Phaser.Easing.Linear.None, true, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.DELAY_MS);
                            this._pooperSpawnerData.spreadRightAnimation = this.add.tween(this._pooperSpawnerData.right);
                            this._pooperSpawnerData.spreadRightAnimation.to({
                                x: __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.RIGHT_FINAL_X * (scale === 1 ? 1 : 1.275)
                            }, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.DURATION_MS, Phaser.Easing.Linear.None, true, __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPREAD_ANI.DELAY_MS);

                            this._pooperSpreadLayer.visible = false;
                            this._pooperSpawnerData.spreadLineAnimation.onStart.add(function() {
                                _this6._pooperSpreadLayer.visible = true;
                                _this6.sound.play('pooper_expansion');
                            });

                            this._pooperSpawnerData.spreadLineAnimation.onComplete.add(this._pooperSpawn, this);
                        }
                    }
                }
            }, {
                key: '_stopPooperSpawning',
                value: function _stopPooperSpawning() {
                    if (this._pooperSpawnerData) {
                        this._pooperSpawnerData.spreadLineAnimation.stop();
                        this._pooperSpawnerData.spreadRightAnimation.stop();
                        this._pooperSpreadLayer.remove(this._pooperSpawnerData.left, true);
                        this._pooperSpreadLayer.remove(this._pooperSpawnerData.line, true);
                        this._pooperSpreadLayer.remove(this._pooperSpawnerData.right, true);
                    }
                    this._pooperSpawnerData = null;
                }
            }, {
                key: '_getPooperToSpawnFrom',
                value: function _getPooperToSpawnFrom() {
                    var _this7 = this;

                    var pooperData = [];
                    __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(this._mode.board, function(column, colIndex) {
                        __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.forEach(column, function(gooper, rowIndex) {
                            if (gooper && gooper.specialId === __WEBPACK_IMPORTED_MODULE_1__Game_Constants_js__["b" /* GOOPER_DATA */ ].SPECIAL_IDS.POOPER) {
                                var neighbors = _this7._mode.findPopulatedNonSpeicalNeighbors(colIndex, rowIndex);
                                if (neighbors.length > 0) {
                                    pooperData.push({
                                        gooper: gooper,
                                        neighbors: neighbors
                                    });
                                }
                            }
                        });
                    });

                    return __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.sample(pooperData);
                }
            }, {
                key: '_pooperSpawn',
                value: function _pooperSpawn() {
                    var _this8 = this;

                    var wasPartOfSelection = -1 !== __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.findIndex(this._activeGroup, function(gooper) {
                        return gooper === _this8._pooperSpawnerData.expandTo;
                    });
                    if (wasPartOfSelection) {
                        this._activeGroup.forEach(function(gooper) {
                            gooper.unhighlight();
                            _this8._mode.onGroupingComplete();
                            _this8._activeGroup = [];
                        });
                        this.sound.play('pooper_conversion_break_selection');
                    } else {
                        this.sound.play('pooper_conversion');
                    }

                    this._pooperSpawnerData.expandTo.makePooper();
                    this._stopPooperSpawning();

                    if (this._mode.isGameOver()) {
                        this._timer.stop();
                        setTimeout(function() {
                            _this8.gameOver();
                        }, 1000);
                    } else {
                        this._checkNewPooperToSpawnFrom();
                    }
                }
            }]);

            return Game;
        }(Phaser.State);

        /* harmony default export */
        __webpack_exports__["a"] = Game;

        /***/
    }),
    /* 158 */
    /* exports provided: default */
    /* exports used: default */
    /*!***********************************!*\
      !*** ./src/js/GameStates/Help.js ***!
      \***********************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__Game_Constants_js__ = __webpack_require__( /*! ../Game/Constants.js */ 28);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }



        var Help = function(_Phaser$State) {
            _inherits(Help, _Phaser$State);

            function Help() {
                _classCallCheck(this, Help);

                return _possibleConstructorReturn(this, (Help.__proto__ || Object.getPrototypeOf(Help)).apply(this, arguments));
            }

            _createClass(Help, [{
                key: 'init',
                value: function init(_ref) {
                    var mode = _ref.mode,
                        nextState = _ref.nextState;

                    this._selectedMode = mode;
                    this._nextState = nextState;
                }
            }, {
                key: 'create',
                value: function create() {
                    this.add.image(0, 0, 'main_menu_background');

                    if (this._selectedMode === undefined) {
                        this.add.image(118, 136, 'help_main_menu');
                    } else if (this._selectedMode === __WEBPACK_IMPORTED_MODULE_0__Game_Constants_js__["a" /* GAME_MODES */ ].ADDITION) {
                        this.add.image(118, 184, 'help_addition');
                    } else {
                        this.add.image(118, 136, 'help_color');
                    }

                    this.add.button(950, 743, 'help_next', this._onClick, this);
                }
            }, {
                key: '_onClick',
                value: function _onClick() {
                    this.state.start(this._nextState, true, false, this._selectedMode);
                }
            }]);

            return Help;
        }(Phaser.State);

        /* harmony default export */
        __webpack_exports__["a"] = Help;

        /***/
    }),
    /* 159 */
    /* exports provided: default */
    /* exports used: default */
    /*!***************************************!*\
      !*** ./src/js/GameStates/MainMenu.js ***!
      \***************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_1__Components_StartButton_js__ = __webpack_require__( /*! ../Components/StartButton.js */ 152);
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_2__Game_Constants_js__ = __webpack_require__( /*! ../Game/Constants.js */ 28);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }





        var LAYOUT = {
            FREE_START_X: 222,
            FREE_START_Y: 557,

            ADD_START_X: 497,
            ADD_START_Y: 557,

            EXIT_X: 1143,
            EXIT_Y: 27,

            HELP_X: 770,
            HELP_Y: 557,

            AUDIO_X: 23,
            AUDIO_Y: 27
        };
        Object.freeze(LAYOUT);

        var MainMenu = function(_Phaser$State) {
            _inherits(MainMenu, _Phaser$State);

            function MainMenu() {
                _classCallCheck(this, MainMenu);

                return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
            }

            _createClass(MainMenu, [{
                key: 'create',
                value: function create() {
                    var _this2 = this;

                    _.bindAll(this, 'animateOut', 'startHelp');

                    this.add.image(0, 0, 'main_menu_background');
                    this._title = this.add.image(119, 300, 'main_menu_title'); // todo: tween
                    this._title.scale.x = 1.4;
                    this._title.scale.y = 1.4;
                    this._title.visible = false;
                    this._titleTween = this.add.tween(this._title);
                    this._titleTween.onStart.add(function() {
                        _this2._title.visible = true;
                    });
                    this._titleTween.from({
                        y: -220
                    }, 250, Phaser.Easing.Quadratic.Out, true, 416);

                    this._freeStartButton = new __WEBPACK_IMPORTED_MODULE_1__Components_StartButton_js__["a" /* default */ ](this, LAYOUT.FREE_START_X, LAYOUT.FREE_START_Y, {
                        atlas: 'free_start_button'
                    }, 'Help', {
                        mode: __WEBPACK_IMPORTED_MODULE_2__Game_Constants_js__["a" /* GAME_MODES */ ].FREE_SELECT_BY_COLOR,
                        nextState: 'Game'
                    }, this.animateOut);
                    this._freeStartButton.button.visible = false;
                    this._freeStartButton.disable();
                    this._freeStartTween = this.add.tween(this._freeStartButton.button);
                    this._freeStartTween.onStart.add(function() {
                        _this2._freeStartButton.button.visible = true;
                    });
                    this._freeStartTween.from({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 750);

                    this._addStartButton = new __WEBPACK_IMPORTED_MODULE_1__Components_StartButton_js__["a" /* default */ ](this, LAYOUT.ADD_START_X, LAYOUT.ADD_START_Y, {
                        atlas: 'add_start_button'
                    }, 'Help', {
                        mode: __WEBPACK_IMPORTED_MODULE_2__Game_Constants_js__["a" /* GAME_MODES */ ].ADDITION,
                        nextState: 'Game'
                    }, this.animateOut);
                    this._addStartButton.button.visible = false;
                    this._addStartButton.disable();
                    this._addStartTween = this.add.tween(this._addStartButton.button);
                    this._addStartTween.onStart.add(function() {
                        _this2._addStartButton.button.visible = true;
                    });
                    this._addStartTween.from({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 833);

                    if (__WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["b" /* gameBridge */ ].shouldShowExitButton) {
                        this._exitButton = new __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["c" /* ExitButton */ ](this, LAYOUT.EXIT_X, LAYOUT.EXIT_Y, {
                            atlas: 'exit_button'
                        });
                        this._exitButton.button.visible = false;
                        this._exitButton.button.input.enabled = false;
                        this._exitTween = this.add.tween(this._exitButton.button);
                        this._exitTween.onStart.add(function() {
                            _this2._exitButton.button.visible = true;
                        });
                        this._exitTween.from({
                            y: -132
                        }, 208, Phaser.Easing.Quadratic.Out, true, 958);
                    }

                    this._helpButton = this.add.button(LAYOUT.HELP_X, LAYOUT.HELP_Y, 'help_button', this.animateOut.bind(this, this.startHelp));
                    this._helpButton.visible = false;
                    this._helpButton.input.enabled = false;
                    this._helpTween = this.add.tween(this._helpButton);
                    this._helpTween.onStart.add(function() {
                        _this2._helpButton.visible = true;
                    });
                    this._helpTween.from({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 875);

                    this._toggleAudioButton = new __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["f" /* ToggleAudioButton */ ](this, LAYOUT.AUDIO_X, LAYOUT.AUDIO_Y, {
                        atlas: 'toggle_audio',
                        out: 'btn_audio0000',
                        over: 'btn_audio0000',
                        down: 'btn_audio0000',
                        up: 'btn_audio0000',
                        offOut: 'btn_audio0001',
                        offOver: 'btn_audio0001',
                        offDown: 'btn_audio0001',
                        offUp: 'btn_audio0001'
                    });
                    this._toggleAudioButton.button.visible = false;
                    this._toggleAudioButton.button.input.enabled = false;
                    this._audioTween = this.add.tween(this._toggleAudioButton.button);
                    this._audioTween.onStart.add(function() {
                        _this2._toggleAudioButton.button.visible = true;
                    });
                    this._audioTween.onComplete.add(function() {
                        _this2._toggleAudioButton.button.input.enabled = true;
                        _this2._helpButton.input.enabled = true;
                        if (_this2._exitButton) {
                            _this2._exitButton.button.input.enabled = true;
                        }
                        _this2._addStartButton.enable();
                        _this2._freeStartButton.enable();
                    });
                    this._audioTween.from({
                        y: -132
                    }, 208, Phaser.Easing.Quadratic.Out, true, 958);

                    displayGame();
                    setTimeout(function() {
                        _this2.sound.play('main_menu_enter');
                    }, 200);
                }
            }, {
                key: 'startHelp',
                value: function startHelp() {
                    this.state.start('Help', true, false, {
                        nextState: 'MainMenu'
                    });
                }
            }, {
                key: 'animateOut',
                value: function animateOut(onComplete) {
                    this._helpButton.input.enabled = false;
                    this._addStartButton.button.input.enabled = false;
                    this._freeStartButton.button.input.enabled = false;

                    this.sound.play('main_menu_exit');
                    this._helpTween = this.add.tween(this._helpButton);
                    this._helpTween.to({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 0);

                    this._addStartTween = this.add.tween(this._addStartButton.button);
                    this._addStartTween.to({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 41);

                    this._freeStartButton = this.add.tween(this._freeStartButton.button);
                    this._freeStartButton.to({
                        y: 989
                    }, 208, Phaser.Easing.Quadratic.Out, true, 82);

                    this._titleTween = this.add.tween(this._title);
                    this._titleTween.to({
                        y: -220
                    }, 167, Phaser.Easing.Quadratic.Out, true, 416);

                    this.time.events.add(750, onComplete);
                }
            }]);

            return MainMenu;
        }(Phaser.State);

        /* harmony default export */
        __webpack_exports__["a"] = MainMenu;

        /***/
    }),
    /* 160 */
    /* exports provided: default */
    /* exports used: default */
    /*!****************************************!*\
      !*** ./src/js/GameStates/Preloader.js ***!
      \****************************************/
    /***/
    (function(module, __webpack_exports__, __webpack_require__) {

        "use strict";
        /* harmony import */
        var __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__ = __webpack_require__( /*! @cainc/game-common */ 34);
        var _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }



        // main menu assets for webpack
        var mainMenuBackground = __webpack_require__( /*! ../../assets/main_menu/background.png */ 374);
        var mainMenuTitle = __webpack_require__( /*! ../../assets/main_menu/title.png */ 379);
        var exitButtonImage = __webpack_require__( /*! ../../assets/main_menu/exit.png */ 376);
        var exitButtonJson = __webpack_require__( /*! ../../assets/main_menu/exit.json */ 396);
        var helpButtonImage = __webpack_require__( /*! ../../assets/main_menu/help.png */ 377);
        var helpButtonJson = __webpack_require__( /*! ../../assets/main_menu/help.json */ 397);
        var addStartButtonImage = __webpack_require__( /*! ../../assets/main_menu/number.png */ 378);
        var addStartButtonJson = __webpack_require__( /*! ../../assets/main_menu/number.json */ 398);
        var freeStartButtonImage = __webpack_require__( /*! ../../assets/main_menu/color.png */ 375);
        var freeStartButtonJson = __webpack_require__( /*! ../../assets/main_menu/color.json */ 395);
        var toggleAudioSpriteSheetImage = __webpack_require__( /*! ../../assets/main_menu/audio_toggle.png */ 373);
        var toggleAudioSpriteSheetJson = __webpack_require__( /*! ../../assets/main_menu/audio_toggle.json */ 394);

        // help dialog assets for webpack
        var helpMainMenu = __webpack_require__( /*! ../../assets/help/main_menu.png */ 366);
        var helpColorMode = __webpack_require__( /*! ../../assets/help/color.png */ 365);
        var helpAdditionMode = __webpack_require__( /*! ../../assets/help/number.png */ 368);
        var helpNext = __webpack_require__( /*! ../../assets/help/next.png */ 367);

        // game assets for webpack
        var gooperSpriteSheetImage = __webpack_require__( /*! ../../assets/goopers_prime.png */ 363);
        var gooperSpriteSheetJson = __webpack_require__( /*! ../../assets/goopers_prime.json */ 391);
        var gooperHighlight = __webpack_require__( /*! ../../assets/gooper_highlight.png */ 362);
        var groupBoxSpriteSheetImage = __webpack_require__( /*! ../../assets/group_box.png */ 364);
        var groupBoxSpriteSheetJson = __webpack_require__( /*! ../../assets/group_box.json */ 392);
        var superGooper1Image = __webpack_require__( /*! ../../assets/supergooper1.png */ 385);
        var superGooper2Image = __webpack_require__( /*! ../../assets/supergooper2.png */ 386);
        var superGooper3Image = __webpack_require__( /*! ../../assets/supergooper3.png */ 387);
        var superGooper4Image = __webpack_require__( /*! ../../assets/supergooper4.png */ 388);
        var superGooper5Image = __webpack_require__( /*! ../../assets/supergooper5.png */ 389);
        var pooperImage = __webpack_require__( /*! ../../assets/pooper.png */ 381);
        var pooperJson = __webpack_require__( /*! ../../assets/pooper.json */ 400);
        var spreadHalfCircle = __webpack_require__( /*! ../../assets/spread_half_circle.png */ 383);
        var spreadLine = __webpack_require__( /*! ../../assets/spread_line.png */ 384);
        var scoreCounterBackground = __webpack_require__( /*! ../../assets/score_counter_background.png */ 382);
        var numbersSpriteSheetImage = __webpack_require__( /*! ../../assets/numbers.png */ 380);
        var numbersSpriteSheetJson = __webpack_require__( /*! ../../assets/numbers.json */ 399);

        // game over assets for webpack
        var gameOverBackground = __webpack_require__( /*! ../../assets/high_score/background.png */ 369);
        var closeButtonImage = __webpack_require__( /*! ../../assets/high_score/exit.png */ 370);
        var closeButtonJson = __webpack_require__( /*! ../../assets/high_score/exit.json */ 393);
        var star = __webpack_require__( /*! ../../assets/high_score/star.png */ 372);
        var scoreText = __webpack_require__( /*! ../../assets/high_score/score_text.png */ 371);

        function ireadyApp() {
            return window.hasOwnProperty('caDashboard');
        }

        function isSafari() {
            return !!navigator.userAgent.match(/Version\/[\d\.]+.*Safari/);
        }

        function audioFileToUrls(path) {
            if (location.host === 'localhost:8082') {
                path = 'https://dev-cdn.i-ready.com' + path;
            }
            var exts = ireadyApp() || isSafari() ? ['mp3'] : ['m4a', 'ogg', 'mp3'];
            var noProto = path.replace(/^http[s]*:/, '');
            var noExt = noProto.substr(0, noProto.lastIndexOf('.'));
            return exts.map(function(ext) {
                return '' + document.location.protocol + noExt + '.' + ext;
            });
        }

        var Preloader = function(_Phaser$State) {
            _inherits(Preloader, _Phaser$State);

            function Preloader() {
                _classCallCheck(this, Preloader);

                return _possibleConstructorReturn(this, (Preloader.__proto__ || Object.getPrototypeOf(Preloader)).apply(this, arguments));
            }

            _createClass(Preloader, [{
                key: 'init',
                value: function init() {
                    var _this2 = this;

                    __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["h" /* webAudioUtil */ ].testAudioDecoding().then(function(result) {
                        if (!result) {
                            console.info('Detected decoding issue...');
                            // AV comes from aurora
                            // eslint-disable-next-line no-undef
                            __WEBPACK_IMPORTED_MODULE_0__cainc_game_common__["h" /* webAudioUtil */ ].enableAlternateDecoder(AV, _this2.sound.context);
                        }
                    });
                }
            }, {
                key: 'preload',
                value: function preload() {
                    // main menu assets
                    this.load.image('main_menu_background', mainMenuBackground);
                    this.load.image('main_menu_title', mainMenuTitle);
                    this.load.atlas('exit_button', exitButtonImage, null, exitButtonJson);
                    this.load.atlas('help_button', helpButtonImage, null, helpButtonJson);
                    this.load.atlas('add_start_button', addStartButtonImage, null, addStartButtonJson);
                    this.load.atlas('free_start_button', freeStartButtonImage, null, freeStartButtonJson);
                    this.load.atlas('toggle_audio', toggleAudioSpriteSheetImage, null, toggleAudioSpriteSheetJson);
                    this.load.audio('main_menu_enter', audioFileToUrls('../shared/global/audio/sfx/g3_5_zoom_in.mp3'));
                    this.load.audio('main_menu_exit', audioFileToUrls('../shared/global/audio/sfx/g3_5_numberpad_expand.mp3'));

                    // help dialog assets
                    this.load.image('help_main_menu', helpMainMenu);
                    this.load.image('help_color', helpColorMode);
                    this.load.image('help_addition', helpAdditionMode);
                    this.load.image('help_next', helpNext);

                    // game assets
                    this.load.image('gooper_highlight', gooperHighlight);
                    this.load.atlas('goopers', gooperSpriteSheetImage, null, gooperSpriteSheetJson);
                    this.load.atlas('groupBox', groupBoxSpriteSheetImage, null, groupBoxSpriteSheetJson);
                    this.load.atlas('numbers', numbersSpriteSheetImage, null, numbersSpriteSheetJson);
                    this.load.image('supergooper1', superGooper1Image);
                    this.load.image('supergooper2', superGooper2Image);
                    this.load.image('supergooper3', superGooper3Image);
                    this.load.image('supergooper4', superGooper4Image);
                    this.load.image('supergooper5', superGooper5Image);
                    this.load.atlas('pooper', pooperImage, null, pooperJson);
                    this.load.image('spread_half_circle', spreadHalfCircle);
                    this.load.image('spread_line', spreadLine);
                    this.load.image('score_counter_background', scoreCounterBackground);
                    this.load.audio('add_to_selection1', audioFileToUrls('../shared/global/audio/sfx/goop_select01.mp3'));
                    this.load.audio('add_to_selection2', audioFileToUrls('../shared/global/audio/sfx/goop_select02.mp3'));
                    this.load.audio('add_to_selection3', audioFileToUrls('../shared/global/audio/sfx/goop_select03.mp3'));
                    this.load.audio('add_to_selection4', audioFileToUrls('../shared/global/audio/sfx/goop_select04.mp3'));
                    this.load.audio('add_to_selection5', audioFileToUrls('../shared/global/audio/sfx/goop_select05.mp3'));
                    this.load.audio('valid_selection_complete', audioFileToUrls('../shared/global/audio/sfx/pop.mp3'));
                    this.load.audio('valid_selection_complete_with_super', audioFileToUrls('../shared/global/audio/sfx/g3_5_accolade_1.mp3'));
                    this.load.audio('invalid_selection_complete', audioFileToUrls('../shared/global/audio/sfx/arcade_4.mp3'));
                    this.load.audio('pooper_expansion', audioFileToUrls('../shared/global/audio/sfx/beam2.mp3'));
                    this.load.audio('pooper_conversion', audioFileToUrls('../shared/global/audio/sfx/plop_1.mp3'));
                    this.load.audio('pooper_conversion_break_selection', audioFileToUrls('../shared/global/audio/sfx/stretch3.mp3'));
                    this.load.audio('background_music', audioFileToUrls('../shared/global/audio/sfx/begooped_theme_loop.mp3'));

                    // game over assets
                    this.load.image('game_over_background', gameOverBackground);
                    this.load.atlas('close_button', closeButtonImage, null, closeButtonJson);
                    this.load.image('star', star);
                    this.load.image('score_text', scoreText);
                }
            }, {
                key: 'create',
                value: function create() {}
            }, {
                key: 'update',
                value: function update() {
                    this.state.start('MainMenu');
                }
            }]);

            return Preloader;
        }(Phaser.State);

        /* harmony default export */
        __webpack_exports__["a"] = Preloader;

        /***/
    }),
    /* 161 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/fn/regexp/escape.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ../../modules/core.regexp.escape */ 168);
        module.exports = __webpack_require__( /*! ../../modules/_core */ 19).RegExp.escape;


        /***/
    }),
    /* 162 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************************!*\
      !*** ./~/core-js/modules/_array-species-constructor.js ***!
      \*********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var isArray = __webpack_require__( /*! ./_is-array */ 59);
        var SPECIES = __webpack_require__( /*! ./_wks */ 5)('species');

        module.exports = function(original) {
            var C;
            if (isArray(original)) {
                C = original.constructor;
                // cross-realm fallback
                if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                if (isObject(C)) {
                    C = C[SPECIES];
                    if (C === null) C = undefined;
                }
            }
            return C === undefined ? Array : C;
        };


        /***/
    }),
    /* 163 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/_date-to-iso-string.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var getTime = Date.prototype.getTime;
        var $toISOString = Date.prototype.toISOString;

        var lz = function(num) {
            return num > 9 ? num : '0' + num;
        };

        // PhantomJS / old WebKit has a broken implementations
        module.exports = (fails(function() {
            return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
        }) || !fails(function() {
            $toISOString.call(new Date(NaN));
        })) ? function toISOString() {
            if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
            var d = this;
            var y = d.getUTCFullYear();
            var m = d.getUTCMilliseconds();
            var s = y < 0 ? '-' : y > 9999 ? '+' : '';
            return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
                '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
                'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
                ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
        } : $toISOString;


        /***/
    }),
    /* 164 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/_date-to-primitive.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var NUMBER = 'number';

        module.exports = function(hint) {
            if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
            return toPrimitive(anObject(this), hint != NUMBER);
        };


        /***/
    }),
    /* 165 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/_enum-keys.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // all enumerable object keys, includes symbols
        var getKeys = __webpack_require__( /*! ./_object-keys */ 39);
        var gOPS = __webpack_require__( /*! ./_object-gops */ 63);
        var pIE = __webpack_require__( /*! ./_object-pie */ 53);
        module.exports = function(it) {
            var result = getKeys(it);
            var getSymbols = gOPS.f;
            if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = pIE.f;
                var i = 0;
                var key;
                while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };


        /***/
    }),
    /* 166 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/_function-to-string.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__( /*! ./_shared */ 54)('native-function-to-string', Function.toString);


        /***/
    }),
    /* 167 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./~/core-js/modules/_replacer.js ***!
      \****************************************/
    /***/
    (function(module, exports) {

        module.exports = function(regExp, replace) {
            var replacer = replace === Object(replace) ? function(part) {
                return replace[part];
            } : replace;
            return function(it) {
                return String(it).replace(regExp, replacer);
            };
        };


        /***/
    }),
    /* 168 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/core.regexp.escape.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/benjamingr/RexExp.escape
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $re = __webpack_require__( /*! ./_replacer */ 167)(/[\\^$*+?.()|[\]{}]/g, '\\$&');

        $export($export.S, 'RegExp', {
            escape: function escape(it) {
                return $re(it);
            }
        });


        /***/
    }),
    /* 169 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.array.copy-within.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P, 'Array', {
            copyWithin: __webpack_require__( /*! ./_array-copy-within */ 106)
        });

        __webpack_require__( /*! ./_add-to-unscopables */ 31)('copyWithin');


        /***/
    }),
    /* 170 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.array.every.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $every = __webpack_require__( /*! ./_array-methods */ 23)(4);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].every, true), 'Array', {
            // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
            every: function every(callbackfn /* , thisArg */ ) {
                return $every(this, callbackfn, arguments[1]);
            }
        });


        /***/
    }),
    /* 171 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.fill.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P, 'Array', {
            fill: __webpack_require__( /*! ./_array-fill */ 72)
        });

        __webpack_require__( /*! ./_add-to-unscopables */ 31)('fill');


        /***/
    }),
    /* 172 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.array.filter.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $filter = __webpack_require__( /*! ./_array-methods */ 23)(2);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].filter, true), 'Array', {
            // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
            filter: function filter(callbackfn /* , thisArg */ ) {
                return $filter(this, callbackfn, arguments[1]);
            }
        });


        /***/
    }),
    /* 173 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.array.find-index.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $find = __webpack_require__( /*! ./_array-methods */ 23)(6);
        var KEY = 'findIndex';
        var forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() {
            forced = false;
        });
        $export($export.P + $export.F * forced, 'Array', {
            findIndex: function findIndex(callbackfn /* , that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__( /*! ./_add-to-unscopables */ 31)(KEY);


        /***/
    }),
    /* 174 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.find.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $find = __webpack_require__( /*! ./_array-methods */ 23)(5);
        var KEY = 'find';
        var forced = true;
        // Shouldn't skip holes
        if (KEY in []) Array(1)[KEY](function() {
            forced = false;
        });
        $export($export.P + $export.F * forced, 'Array', {
            find: function find(callbackfn /* , that = undefined */ ) {
                return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
            }
        });
        __webpack_require__( /*! ./_add-to-unscopables */ 31)(KEY);


        /***/
    }),
    /* 175 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.array.for-each.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $forEach = __webpack_require__( /*! ./_array-methods */ 23)(0);
        var STRICT = __webpack_require__( /*! ./_strict-method */ 21)([].forEach, true);

        $export($export.P + $export.F * !STRICT, 'Array', {
            // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
            forEach: function forEach(callbackfn /* , thisArg */ ) {
                return $forEach(this, callbackfn, arguments[1]);
            }
        });


        /***/
    }),
    /* 176 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.from.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var call = __webpack_require__( /*! ./_iter-call */ 117);
        var isArrayIter = __webpack_require__( /*! ./_is-array-iter */ 80);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var createProperty = __webpack_require__( /*! ./_create-property */ 74);
        var getIterFn = __webpack_require__( /*! ./core.get-iterator-method */ 96);

        $export($export.S + $export.F * !__webpack_require__( /*! ./_iter-detect */ 61)(function(iter) {
            Array.from(iter);
        }), 'Array', {
            // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
            from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */ ) {
                var O = toObject(arrayLike);
                var C = typeof this == 'function' ? this : Array;
                var aLen = arguments.length;
                var mapfn = aLen > 1 ? arguments[1] : undefined;
                var mapping = mapfn !== undefined;
                var index = 0;
                var iterFn = getIterFn(O);
                var length, result, step, iterator;
                if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                // if object isn't iterable or it's array with default iterator - use simple case
                if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
                    for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
                    }
                } else {
                    length = toLength(O.length);
                    for (result = new C(length); length > index; index++) {
                        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                    }
                }
                result.length = index;
                return result;
            }
        });


        /***/
    }),
    /* 177 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.array.index-of.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $indexOf = __webpack_require__( /*! ./_array-includes */ 56)(false);
        var $native = [].indexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__( /*! ./_strict-method */ 21)($native)), 'Array', {
            // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
            indexOf: function indexOf(searchElement /* , fromIndex = 0 */ ) {
                return NEGATIVE_ZERO
                    // convert -0 to +0
                    ?
                    $native.apply(this, arguments) || 0 :
                    $indexOf(this, searchElement, arguments[1]);
            }
        });


        /***/
    }),
    /* 178 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.array.is-array.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Array', {
            isArray: __webpack_require__( /*! ./_is-array */ 59)
        });


        /***/
    }),
    /* 179 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.join.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 22.1.3.13 Array.prototype.join(separator)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var arrayJoin = [].join;

        // fallback for not array-like strings
        $export($export.P + $export.F * (__webpack_require__( /*! ./_iobject */ 52) != Object || !__webpack_require__( /*! ./_strict-method */ 21)(arrayJoin)), 'Array', {
            join: function join(separator) {
                return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
            }
        });


        /***/
    }),
    /* 180 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************************!*\
      !*** ./~/core-js/modules/es6.array.last-index-of.js ***!
      \******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var $native = [].lastIndexOf;
        var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

        $export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__( /*! ./_strict-method */ 21)($native)), 'Array', {
            // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
            lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */ ) {
                // convert -0 to +0
                if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
                var O = toIObject(this);
                var length = toLength(O.length);
                var index = length - 1;
                if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
                if (index < 0) index = length + index;
                for (; index >= 0; index--)
                    if (index in O)
                        if (O[index] === searchElement) return index || 0;
                return -1;
            }
        });


        /***/
    }),
    /* 181 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.array.map.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $map = __webpack_require__( /*! ./_array-methods */ 23)(1);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].map, true), 'Array', {
            // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
            map: function map(callbackfn /* , thisArg */ ) {
                return $map(this, callbackfn, arguments[1]);
            }
        });


        /***/
    }),
    /* 182 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es6.array.of.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var createProperty = __webpack_require__( /*! ./_create-property */ 74);

        // WebKit Array.of isn't generic
        $export($export.S + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            function F() { /* empty */ }
            return !(Array.of.call(F) instanceof F);
        }), 'Array', {
            // 22.1.2.3 Array.of( ...items)
            of: function of ( /* ...args */ ) {
                var index = 0;
                var aLen = arguments.length;
                var result = new(typeof this == 'function' ? this : Array)(aLen);
                while (aLen > index) createProperty(result, index, arguments[index++]);
                result.length = aLen;
                return result;
            }
        });


        /***/
    }),
    /* 183 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.array.reduce-right.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $reduce = __webpack_require__( /*! ./_array-reduce */ 108);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].reduceRight, true), 'Array', {
            // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
            reduceRight: function reduceRight(callbackfn /* , initialValue */ ) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], true);
            }
        });


        /***/
    }),
    /* 184 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.array.reduce.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $reduce = __webpack_require__( /*! ./_array-reduce */ 108);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].reduce, true), 'Array', {
            // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
            reduce: function reduce(callbackfn /* , initialValue */ ) {
                return $reduce(this, callbackfn, arguments.length, arguments[1], false);
            }
        });


        /***/
    }),
    /* 185 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.array.slice.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var html = __webpack_require__( /*! ./_html */ 78);
        var cof = __webpack_require__( /*! ./_cof */ 18);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var arraySlice = [].slice;

        // fallback for not array-like ES3 strings and DOM objects
        $export($export.P + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            if (html) arraySlice.call(html);
        }), 'Array', {
            slice: function slice(begin, end) {
                var len = toLength(this.length);
                var klass = cof(this);
                end = end === undefined ? len : end;
                if (klass == 'Array') return arraySlice.call(this, begin, end);
                var start = toAbsoluteIndex(begin, len);
                var upTo = toAbsoluteIndex(end, len);
                var size = toLength(upTo - start);
                var cloned = new Array(size);
                var i = 0;
                for (; i < size; i++) cloned[i] = klass == 'String' ?
                    this.charAt(start + i) :
                    this[start + i];
                return cloned;
            }
        });


        /***/
    }),
    /* 186 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.some.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $some = __webpack_require__( /*! ./_array-methods */ 23)(3);

        $export($export.P + $export.F * !__webpack_require__( /*! ./_strict-method */ 21)([].some, true), 'Array', {
            // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
            some: function some(callbackfn /* , thisArg */ ) {
                return $some(this, callbackfn, arguments[1]);
            }
        });


        /***/
    }),
    /* 187 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.array.sort.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var $sort = [].sort;
        var test = [1, 2, 3];

        $export($export.P + $export.F * (fails(function() {
            // IE8-
            test.sort(undefined);
        }) || !fails(function() {
            // V8 bug
            test.sort(null);
            // Old WebKit
        }) || !__webpack_require__( /*! ./_strict-method */ 21)($sort)), 'Array', {
            // 22.1.3.25 Array.prototype.sort(comparefn)
            sort: function sort(comparefn) {
                return comparefn === undefined ?
                    $sort.call(toObject(this)) :
                    $sort.call(toObject(this), aFunction(comparefn));
            }
        });


        /***/
    }),
    /* 188 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.array.species.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_set-species */ 42)('Array');


        /***/
    }),
    /* 189 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es6.date.now.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.3.3.1 / 15.9.4.4 Date.now()
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Date', {
            now: function() {
                return new Date().getTime();
            }
        });


        /***/
    }),
    /* 190 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.date.to-iso-string.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
        var $export = __webpack_require__( /*! ./_export */ 0);
        var toISOString = __webpack_require__( /*! ./_date-to-iso-string */ 163);

        // PhantomJS / old WebKit has a broken implementations
        $export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
            toISOString: toISOString
        });


        /***/
    }),
    /* 191 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.date.to-json.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);

        $export($export.P + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            return new Date(NaN).toJSON() !== null ||
                Date.prototype.toJSON.call({
                    toISOString: function() {
                        return 1;
                    }
                }) !== 1;
        }), 'Date', {
            // eslint-disable-next-line no-unused-vars
            toJSON: function toJSON(key) {
                var O = toObject(this);
                var pv = toPrimitive(O);
                return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
            }
        });


        /***/
    }),
    /* 192 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.date.to-primitive.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var TO_PRIMITIVE = __webpack_require__( /*! ./_wks */ 5)('toPrimitive');
        var proto = Date.prototype;

        if (!(TO_PRIMITIVE in proto)) __webpack_require__( /*! ./_hide */ 11)(proto, TO_PRIMITIVE, __webpack_require__( /*! ./_date-to-primitive */ 164));


        /***/
    }),
    /* 193 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.date.to-string.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var DateProto = Date.prototype;
        var INVALID_DATE = 'Invalid Date';
        var TO_STRING = 'toString';
        var $toString = DateProto[TO_STRING];
        var getTime = DateProto.getTime;
        if (new Date(NaN) + '' != INVALID_DATE) {
            __webpack_require__( /*! ./_redefine */ 12)(DateProto, TO_STRING, function toString() {
                var value = getTime.call(this);
                // eslint-disable-next-line no-self-compare
                return value === value ? $toString.call(this) : INVALID_DATE;
            });
        }


        /***/
    }),
    /* 194 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.function.bind.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P, 'Function', {
            bind: __webpack_require__( /*! ./_bind */ 109)
        });


        /***/
    }),
    /* 195 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************************!*\
      !*** ./~/core-js/modules/es6.function.has-instance.js ***!
      \********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var HAS_INSTANCE = __webpack_require__( /*! ./_wks */ 5)('hasInstance');
        var FunctionProto = Function.prototype;
        // 19.2.3.6 Function.prototype[@@hasInstance](V)
        if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__( /*! ./_object-dp */ 8).f(FunctionProto, HAS_INSTANCE, {
            value: function(O) {
                if (typeof this != 'function' || !isObject(O)) return false;
                if (!isObject(this.prototype)) return O instanceof this;
                // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
                while (O = getPrototypeOf(O))
                    if (this.prototype === O) return true;
                return false;
            }
        });


        /***/
    }),
    /* 196 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.function.name.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var dP = __webpack_require__( /*! ./_object-dp */ 8).f;
        var FProto = Function.prototype;
        var nameRE = /^\s*function ([^ (]*)/;
        var NAME = 'name';

        // 19.2.4.2 name
        NAME in FProto || __webpack_require__( /*! ./_descriptors */ 7) && dP(FProto, NAME, {
            configurable: true,
            get: function() {
                try {
                    return ('' + this).match(nameRE)[1];
                } catch (e) {
                    return '';
                }
            }
        });


        /***/
    }),
    /* 197 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.acosh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.3 Math.acosh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var log1p = __webpack_require__( /*! ./_math-log1p */ 120);
        var sqrt = Math.sqrt;
        var $acosh = Math.acosh;

        $export($export.S + $export.F * !($acosh
            // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
            &&
            Math.floor($acosh(Number.MAX_VALUE)) == 710
            // Tor Browser bug: Math.acosh(Infinity) -> NaN
            &&
            $acosh(Infinity) == Infinity
        ), 'Math', {
            acosh: function acosh(x) {
                return (x = +x) < 1 ? NaN : x > 94906265.62425156 ?
                    Math.log(x) + Math.LN2 :
                    log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
            }
        });


        /***/
    }),
    /* 198 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.asinh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.5 Math.asinh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $asinh = Math.asinh;

        function asinh(x) {
            return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
        }

        // Tor Browser bug: Math.asinh(0) -> -0
        $export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {
            asinh: asinh
        });


        /***/
    }),
    /* 199 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.atanh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.7 Math.atanh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $atanh = Math.atanh;

        // Tor Browser bug: Math.atanh(-0) -> 0
        $export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
            atanh: function atanh(x) {
                return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
            }
        });


        /***/
    }),
    /* 200 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.cbrt.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.9 Math.cbrt(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var sign = __webpack_require__( /*! ./_math-sign */ 84);

        $export($export.S, 'Math', {
            cbrt: function cbrt(x) {
                return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
            }
        });


        /***/
    }),
    /* 201 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.clz32.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.11 Math.clz32(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            clz32: function clz32(x) {
                return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
            }
        });


        /***/
    }),
    /* 202 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.cosh.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.12 Math.cosh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var exp = Math.exp;

        $export($export.S, 'Math', {
            cosh: function cosh(x) {
                return (exp(x = +x) + exp(-x)) / 2;
            }
        });


        /***/
    }),
    /* 203 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.expm1.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.14 Math.expm1(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $expm1 = __webpack_require__( /*! ./_math-expm1 */ 83);

        $export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', {
            expm1: $expm1
        });


        /***/
    }),
    /* 204 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.math.fround.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.16 Math.fround(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            fround: __webpack_require__( /*! ./_math-fround */ 119)
        });


        /***/
    }),
    /* 205 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.hypot.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
        var $export = __webpack_require__( /*! ./_export */ 0);
        var abs = Math.abs;

        $export($export.S, 'Math', {
            hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
                var sum = 0;
                var i = 0;
                var aLen = arguments.length;
                var larg = 0;
                var arg, div;
                while (i < aLen) {
                    arg = abs(arguments[i++]);
                    if (larg < arg) {
                        div = larg / arg;
                        sum = sum * div * div + 1;
                        larg = arg;
                    } else if (arg > 0) {
                        div = arg / larg;
                        sum += div * div;
                    } else sum += arg;
                }
                return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
            }
        });


        /***/
    }),
    /* 206 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.imul.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.18 Math.imul(x, y)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $imul = Math.imul;

        // some WebKit versions fails with big numbers, some has wrong arity
        $export($export.S + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
        }), 'Math', {
            imul: function imul(x, y) {
                var UINT16 = 0xffff;
                var xn = +x;
                var yn = +y;
                var xl = UINT16 & xn;
                var yl = UINT16 & yn;
                return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
            }
        });


        /***/
    }),
    /* 207 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.log10.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.21 Math.log10(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            log10: function log10(x) {
                return Math.log(x) * Math.LOG10E;
            }
        });


        /***/
    }),
    /* 208 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.log1p.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.20 Math.log1p(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            log1p: __webpack_require__( /*! ./_math-log1p */ 120)
        });


        /***/
    }),
    /* 209 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.log2.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.22 Math.log2(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            log2: function log2(x) {
                return Math.log(x) / Math.LN2;
            }
        });


        /***/
    }),
    /* 210 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.sign.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.28 Math.sign(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            sign: __webpack_require__( /*! ./_math-sign */ 84)
        });


        /***/
    }),
    /* 211 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.sinh.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.30 Math.sinh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var expm1 = __webpack_require__( /*! ./_math-expm1 */ 83);
        var exp = Math.exp;

        // V8 near Chromium 38 has a problem with very small numbers
        $export($export.S + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            return !Math.sinh(-2e-17) != -2e-17;
        }), 'Math', {
            sinh: function sinh(x) {
                return Math.abs(x = +x) < 1 ?
                    (expm1(x) - expm1(-x)) / 2 :
                    (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
            }
        });


        /***/
    }),
    /* 212 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.math.tanh.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.33 Math.tanh(x)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var expm1 = __webpack_require__( /*! ./_math-expm1 */ 83);
        var exp = Math.exp;

        $export($export.S, 'Math', {
            tanh: function tanh(x) {
                var a = expm1(x = +x);
                var b = expm1(-x);
                return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
            }
        });


        /***/
    }),
    /* 213 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.math.trunc.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.2.2.34 Math.trunc(x)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            trunc: function trunc(it) {
                return (it > 0 ? Math.floor : Math.ceil)(it);
            }
        });


        /***/
    }),
    /* 214 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.number.constructor.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var global = __webpack_require__( /*! ./_global */ 2);
        var has = __webpack_require__( /*! ./_has */ 14);
        var cof = __webpack_require__( /*! ./_cof */ 18);
        var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ 79);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var gOPN = __webpack_require__( /*! ./_object-gopn */ 38).f;
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15).f;
        var dP = __webpack_require__( /*! ./_object-dp */ 8).f;
        var $trim = __webpack_require__( /*! ./_string-trim */ 49).trim;
        var NUMBER = 'Number';
        var $Number = global[NUMBER];
        var Base = $Number;
        var proto = $Number.prototype;
        // Opera ~12 has broken Object#toString
        var BROKEN_COF = cof(__webpack_require__( /*! ./_object-create */ 37)(proto)) == NUMBER;
        var TRIM = 'trim' in String.prototype;

        // 7.1.3 ToNumber(argument)
        var toNumber = function(argument) {
            var it = toPrimitive(argument, false);
            if (typeof it == 'string' && it.length > 2) {
                it = TRIM ? it.trim() : $trim(it, 3);
                var first = it.charCodeAt(0);
                var third, radix, maxCode;
                if (first === 43 || first === 45) {
                    third = it.charCodeAt(2);
                    if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
                } else if (first === 48) {
                    switch (it.charCodeAt(1)) {
                        case 66:
                        case 98:
                            radix = 2;
                            maxCode = 49;
                            break; // fast equal /^0b[01]+$/i
                        case 79:
                        case 111:
                            radix = 8;
                            maxCode = 55;
                            break; // fast equal /^0o[0-7]+$/i
                        default:
                            return +it;
                    }
                    for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
                        code = digits.charCodeAt(i);
                        // parseInt parses a string to a first unavailable symbol
                        // but ToNumber should return NaN if a string contains unavailable symbols
                        if (code < 48 || code > maxCode) return NaN;
                    }
                    return parseInt(digits, radix);
                }
            }
            return +it;
        };

        if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
            $Number = function Number(value) {
                var it = arguments.length < 1 ? 0 : value;
                var that = this;
                return that instanceof $Number
                    // check on 1..constructor(foo) case
                    &&
                    (BROKEN_COF ? fails(function() {
                        proto.valueOf.call(that);
                    }) : cof(that) != NUMBER) ?
                    inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
            };
            for (var keys = __webpack_require__( /*! ./_descriptors */ 7) ? gOPN(Base) : (
                    // ES3:
                    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
                    // ES6 (in case, if modules with ES6 Number statics required before):
                    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
                    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
                ).split(','), j = 0, key; keys.length > j; j++) {
                if (has(Base, key = keys[j]) && !has($Number, key)) {
                    dP($Number, key, gOPD(Base, key));
                }
            }
            $Number.prototype = proto;
            proto.constructor = $Number;
            __webpack_require__( /*! ./_redefine */ 12)(global, NUMBER, $Number);
        }


        /***/
    }),
    /* 215 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.number.epsilon.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.1 Number.EPSILON
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Number', {
            EPSILON: Math.pow(2, -52)
        });


        /***/
    }),
    /* 216 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.number.is-finite.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.2 Number.isFinite(number)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var _isFinite = __webpack_require__( /*! ./_global */ 2).isFinite;

        $export($export.S, 'Number', {
            isFinite: function isFinite(it) {
                return typeof it == 'number' && _isFinite(it);
            }
        });


        /***/
    }),
    /* 217 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.number.is-integer.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.3 Number.isInteger(number)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Number', {
            isInteger: __webpack_require__( /*! ./_is-integer */ 116)
        });


        /***/
    }),
    /* 218 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.number.is-nan.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.4 Number.isNaN(number)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Number', {
            isNaN: function isNaN(number) {
                // eslint-disable-next-line no-self-compare
                return number != number;
            }
        });


        /***/
    }),
    /* 219 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************************!*\
      !*** ./~/core-js/modules/es6.number.is-safe-integer.js ***!
      \*********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.5 Number.isSafeInteger(number)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var isInteger = __webpack_require__( /*! ./_is-integer */ 116);
        var abs = Math.abs;

        $export($export.S, 'Number', {
            isSafeInteger: function isSafeInteger(number) {
                return isInteger(number) && abs(number) <= 0x1fffffffffffff;
            }
        });


        /***/
    }),
    /* 220 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.number.max-safe-integer.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.6 Number.MAX_SAFE_INTEGER
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Number', {
            MAX_SAFE_INTEGER: 0x1fffffffffffff
        });


        /***/
    }),
    /* 221 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.number.min-safe-integer.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 20.1.2.10 Number.MIN_SAFE_INTEGER
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Number', {
            MIN_SAFE_INTEGER: -0x1fffffffffffff
        });


        /***/
    }),
    /* 222 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.number.parse-float.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $parseFloat = __webpack_require__( /*! ./_parse-float */ 128);
        // 20.1.2.12 Number.parseFloat(string)
        $export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', {
            parseFloat: $parseFloat
        });


        /***/
    }),
    /* 223 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.number.parse-int.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $parseInt = __webpack_require__( /*! ./_parse-int */ 129);
        // 20.1.2.13 Number.parseInt(string, radix)
        $export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', {
            parseInt: $parseInt
        });


        /***/
    }),
    /* 224 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es6.number.to-fixed.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var aNumberValue = __webpack_require__( /*! ./_a-number-value */ 105);
        var repeat = __webpack_require__( /*! ./_string-repeat */ 91);
        var $toFixed = 1.0.toFixed;
        var floor = Math.floor;
        var data = [0, 0, 0, 0, 0, 0];
        var ERROR = 'Number.toFixed: incorrect invocation!';
        var ZERO = '0';

        var multiply = function(n, c) {
            var i = -1;
            var c2 = c;
            while (++i < 6) {
                c2 += n * data[i];
                data[i] = c2 % 1e7;
                c2 = floor(c2 / 1e7);
            }
        };
        var divide = function(n) {
            var i = 6;
            var c = 0;
            while (--i >= 0) {
                c += data[i];
                data[i] = floor(c / n);
                c = (c % n) * 1e7;
            }
        };
        var numToString = function() {
            var i = 6;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || data[i] !== 0) {
                    var t = String(data[i]);
                    s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
                }
            }
            return s;
        };
        var pow = function(x, n, acc) {
            return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
        };
        var log = function(x) {
            var n = 0;
            var x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            }
            return n;
        };

        $export($export.P + $export.F * (!!$toFixed && (
            0.00008.toFixed(3) !== '0.000' ||
            0.9.toFixed(0) !== '1' ||
            1.255.toFixed(2) !== '1.25' ||
            1000000000000000128.0.toFixed(0) !== '1000000000000000128'
        ) || !__webpack_require__( /*! ./_fails */ 3)(function() {
            // V8 ~ Android 4.3-
            $toFixed.call({});
        })), 'Number', {
            toFixed: function toFixed(fractionDigits) {
                var x = aNumberValue(this, ERROR);
                var f = toInteger(fractionDigits);
                var s = '';
                var m = ZERO;
                var e, z, j, k;
                if (f < 0 || f > 20) throw RangeError(ERROR);
                // eslint-disable-next-line no-self-compare
                if (x != x) return 'NaN';
                if (x <= -1e21 || x >= 1e21) return String(x);
                if (x < 0) {
                    s = '-';
                    x = -x;
                }
                if (x > 1e-21) {
                    e = log(x * pow(2, 69, 1)) - 69;
                    z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
                    z *= 0x10000000000000;
                    e = 52 - e;
                    if (e > 0) {
                        multiply(0, z);
                        j = f;
                        while (j >= 7) {
                            multiply(1e7, 0);
                            j -= 7;
                        }
                        multiply(pow(10, j, 1), 0);
                        j = e - 1;
                        while (j >= 23) {
                            divide(1 << 23);
                            j -= 23;
                        }
                        divide(1 << j);
                        multiply(1, 1);
                        divide(2);
                        m = numToString();
                    } else {
                        multiply(0, z);
                        multiply(1 << -e, 0);
                        m = numToString() + repeat.call(ZERO, f);
                    }
                }
                if (f > 0) {
                    k = m.length;
                    m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
                } else {
                    m = s + m;
                }
                return m;
            }
        });


        /***/
    }),
    /* 225 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************************!*\
      !*** ./~/core-js/modules/es6.number.to-precision.js ***!
      \******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $fails = __webpack_require__( /*! ./_fails */ 3);
        var aNumberValue = __webpack_require__( /*! ./_a-number-value */ 105);
        var $toPrecision = 1.0.toPrecision;

        $export($export.P + $export.F * ($fails(function() {
            // IE7-
            return $toPrecision.call(1, undefined) !== '1';
        }) || !$fails(function() {
            // V8 ~ Android 4.3-
            $toPrecision.call({});
        })), 'Number', {
            toPrecision: function toPrecision(precision) {
                var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
                return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
            }
        });


        /***/
    }),
    /* 226 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.object.assign.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.1 Object.assign(target, source)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S + $export.F, 'Object', {
            assign: __webpack_require__( /*! ./_object-assign */ 122)
        });


        /***/
    }),
    /* 227 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.object.create.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
        $export($export.S, 'Object', {
            create: __webpack_require__( /*! ./_object-create */ 37)
        });


        /***/
    }),
    /* 228 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************************!*\
      !*** ./~/core-js/modules/es6.object.define-properties.js ***!
      \***********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
        $export($export.S + $export.F * !__webpack_require__( /*! ./_descriptors */ 7), 'Object', {
            defineProperties: __webpack_require__( /*! ./_object-dps */ 123)
        });


        /***/
    }),
    /* 229 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************************!*\
      !*** ./~/core-js/modules/es6.object.define-property.js ***!
      \*********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
        $export($export.S + $export.F * !__webpack_require__( /*! ./_descriptors */ 7), 'Object', {
            defineProperty: __webpack_require__( /*! ./_object-dp */ 8).f
        });


        /***/
    }),
    /* 230 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.object.freeze.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.5 Object.freeze(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var meta = __webpack_require__( /*! ./_meta */ 33).onFreeze;

        __webpack_require__( /*! ./_object-sap */ 25)('freeze', function($freeze) {
            return function freeze(it) {
                return $freeze && isObject(it) ? $freeze(meta(it)) : it;
            };
        });


        /***/
    }),
    /* 231 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************************************!*\
      !*** ./~/core-js/modules/es6.object.get-own-property-descriptor.js ***!
      \*********************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var $getOwnPropertyDescriptor = __webpack_require__( /*! ./_object-gopd */ 15).f;

        __webpack_require__( /*! ./_object-sap */ 25)('getOwnPropertyDescriptor', function() {
            return function getOwnPropertyDescriptor(it, key) {
                return $getOwnPropertyDescriptor(toIObject(it), key);
            };
        });


        /***/
    }),
    /* 232 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************************!*\
      !*** ./~/core-js/modules/es6.object.get-own-property-names.js ***!
      \****************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.7 Object.getOwnPropertyNames(O)
        __webpack_require__( /*! ./_object-sap */ 25)('getOwnPropertyNames', function() {
            return __webpack_require__( /*! ./_object-gopn-ext */ 124).f;
        });


        /***/
    }),
    /* 233 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.object.get-prototype-of.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.9 Object.getPrototypeOf(O)
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var $getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);

        __webpack_require__( /*! ./_object-sap */ 25)('getPrototypeOf', function() {
            return function getPrototypeOf(it) {
                return $getPrototypeOf(toObject(it));
            };
        });


        /***/
    }),
    /* 234 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es6.object.is-extensible.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.11 Object.isExtensible(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);

        __webpack_require__( /*! ./_object-sap */ 25)('isExtensible', function($isExtensible) {
            return function isExtensible(it) {
                return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
            };
        });


        /***/
    }),
    /* 235 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.object.is-frozen.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.12 Object.isFrozen(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);

        __webpack_require__( /*! ./_object-sap */ 25)('isFrozen', function($isFrozen) {
            return function isFrozen(it) {
                return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
            };
        });


        /***/
    }),
    /* 236 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.object.is-sealed.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.13 Object.isSealed(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);

        __webpack_require__( /*! ./_object-sap */ 25)('isSealed', function($isSealed) {
            return function isSealed(it) {
                return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
            };
        });


        /***/
    }),
    /* 237 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.object.is.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.10 Object.is(value1, value2)
        var $export = __webpack_require__( /*! ./_export */ 0);
        $export($export.S, 'Object', {
            is: __webpack_require__( /*! ./_same-value */ 132)
        });


        /***/
    }),
    /* 238 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.object.keys.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.14 Object.keys(O)
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var $keys = __webpack_require__( /*! ./_object-keys */ 39);

        __webpack_require__( /*! ./_object-sap */ 25)('keys', function() {
            return function keys(it) {
                return $keys(toObject(it));
            };
        });


        /***/
    }),
    /* 239 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************************!*\
      !*** ./~/core-js/modules/es6.object.prevent-extensions.js ***!
      \************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.15 Object.preventExtensions(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var meta = __webpack_require__( /*! ./_meta */ 33).onFreeze;

        __webpack_require__( /*! ./_object-sap */ 25)('preventExtensions', function($preventExtensions) {
            return function preventExtensions(it) {
                return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
            };
        });


        /***/
    }),
    /* 240 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.object.seal.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.2.17 Object.seal(O)
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var meta = __webpack_require__( /*! ./_meta */ 33).onFreeze;

        __webpack_require__( /*! ./_object-sap */ 25)('seal', function($seal) {
            return function seal(it) {
                return $seal && isObject(it) ? $seal(meta(it)) : it;
            };
        });


        /***/
    }),
    /* 241 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.object.set-prototype-of.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 19.1.3.19 Object.setPrototypeOf(O, proto)
        var $export = __webpack_require__( /*! ./_export */ 0);
        $export($export.S, 'Object', {
            setPrototypeOf: __webpack_require__( /*! ./_set-proto */ 88).set
        });


        /***/
    }),
    /* 242 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.object.to-string.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 19.1.3.6 Object.prototype.toString()
        var classof = __webpack_require__( /*! ./_classof */ 46);
        var test = {};
        test[__webpack_require__( /*! ./_wks */ 5)('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
            __webpack_require__( /*! ./_redefine */ 12)(Object.prototype, 'toString', function toString() {
                return '[object ' + classof(this) + ']';
            }, true);
        }


        /***/
    }),
    /* 243 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.parse-float.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $parseFloat = __webpack_require__( /*! ./_parse-float */ 128);
        // 18.2.4 parseFloat(string)
        $export($export.G + $export.F * (parseFloat != $parseFloat), {
            parseFloat: $parseFloat
        });


        /***/
    }),
    /* 244 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es6.parse-int.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $parseInt = __webpack_require__( /*! ./_parse-int */ 129);
        // 18.2.5 parseInt(string, radix)
        $export($export.G + $export.F * (parseInt != $parseInt), {
            parseInt: $parseInt
        });


        /***/
    }),
    /* 245 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/core-js/modules/es6.promise.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var LIBRARY = __webpack_require__( /*! ./_library */ 32);
        var global = __webpack_require__( /*! ./_global */ 2);
        var ctx = __webpack_require__( /*! ./_ctx */ 20);
        var classof = __webpack_require__( /*! ./_classof */ 46);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ 55);
        var task = __webpack_require__( /*! ./_task */ 93).set;
        var microtask = __webpack_require__( /*! ./_microtask */ 85)();
        var newPromiseCapabilityModule = __webpack_require__( /*! ./_new-promise-capability */ 86);
        var perform = __webpack_require__( /*! ./_perform */ 130);
        var userAgent = __webpack_require__( /*! ./_user-agent */ 69);
        var promiseResolve = __webpack_require__( /*! ./_promise-resolve */ 131);
        var PROMISE = 'Promise';
        var TypeError = global.TypeError;
        var process = global.process;
        var versions = process && process.versions;
        var v8 = versions && versions.v8 || '';
        var $Promise = global[PROMISE];
        var isNode = classof(process) == 'process';
        var empty = function() { /* empty */ };
        var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
        var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

        var USE_NATIVE = !! function() {
            try {
                // correct subclassing with @@species support
                var promise = $Promise.resolve(1);
                var FakePromise = (promise.constructor = {})[__webpack_require__( /*! ./_wks */ 5)('species')] = function(exec) {
                    exec(empty, empty);
                };
                // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                return (isNode || typeof PromiseRejectionEvent == 'function') &&
                    promise.then(empty) instanceof FakePromise
                    // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
                    // we can't detect it synchronously, so just check versions
                    &&
                    v8.indexOf('6.6') !== 0 &&
                    userAgent.indexOf('Chrome/66') === -1;
            } catch (e) { /* empty */ }
        }();

        // helpers
        var isThenable = function(it) {
            var then;
            return isObject(it) && typeof(then = it.then) == 'function' ? then : false;
        };
        var notify = function(promise, isReject) {
            if (promise._n) return;
            promise._n = true;
            var chain = promise._c;
            microtask(function() {
                var value = promise._v;
                var ok = promise._s == 1;
                var i = 0;
                var run = function(reaction) {
                    var handler = ok ? reaction.ok : reaction.fail;
                    var resolve = reaction.resolve;
                    var reject = reaction.reject;
                    var domain = reaction.domain;
                    var result, then, exited;
                    try {
                        if (handler) {
                            if (!ok) {
                                if (promise._h == 2) onHandleUnhandled(promise);
                                promise._h = 1;
                            }
                            if (handler === true) result = value;
                            else {
                                if (domain) domain.enter();
                                result = handler(value); // may throw
                                if (domain) {
                                    domain.exit();
                                    exited = true;
                                }
                            }
                            if (result === reaction.promise) {
                                reject(TypeError('Promise-chain cycle'));
                            } else if (then = isThenable(result)) {
                                then.call(result, resolve, reject);
                            } else resolve(result);
                        } else reject(value);
                    } catch (e) {
                        if (domain && !exited) domain.exit();
                        reject(e);
                    }
                };
                while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
                promise._c = [];
                promise._n = false;
                if (isReject && !promise._h) onUnhandled(promise);
            });
        };
        var onUnhandled = function(promise) {
            task.call(global, function() {
                var value = promise._v;
                var unhandled = isUnhandled(promise);
                var result, handler, console;
                if (unhandled) {
                    result = perform(function() {
                        if (isNode) {
                            process.emit('unhandledRejection', value, promise);
                        } else if (handler = global.onunhandledrejection) {
                            handler({
                                promise: promise,
                                reason: value
                            });
                        } else if ((console = global.console) && console.error) {
                            console.error('Unhandled promise rejection', value);
                        }
                    });
                    // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                    promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                }
                promise._a = undefined;
                if (unhandled && result.e) throw result.v;
            });
        };
        var isUnhandled = function(promise) {
            return promise._h !== 1 && (promise._a || promise._c).length === 0;
        };
        var onHandleUnhandled = function(promise) {
            task.call(global, function() {
                var handler;
                if (isNode) {
                    process.emit('rejectionHandled', promise);
                } else if (handler = global.onrejectionhandled) {
                    handler({
                        promise: promise,
                        reason: promise._v
                    });
                }
            });
        };
        var $reject = function(value) {
            var promise = this;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            promise._v = value;
            promise._s = 2;
            if (!promise._a) promise._a = promise._c.slice();
            notify(promise, true);
        };
        var $resolve = function(value) {
            var promise = this;
            var then;
            if (promise._d) return;
            promise._d = true;
            promise = promise._w || promise; // unwrap
            try {
                if (promise === value) throw TypeError("Promise can't be resolved itself");
                if (then = isThenable(value)) {
                    microtask(function() {
                        var wrapper = {
                            _w: promise,
                            _d: false
                        }; // wrap
                        try {
                            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                        } catch (e) {
                            $reject.call(wrapper, e);
                        }
                    });
                } else {
                    promise._v = value;
                    promise._s = 1;
                    notify(promise, false);
                }
            } catch (e) {
                $reject.call({
                    _w: promise,
                    _d: false
                }, e); // wrap
            }
        };

        // constructor polyfill
        if (!USE_NATIVE) {
            // 25.4.3.1 Promise(executor)
            $Promise = function Promise(executor) {
                anInstance(this, $Promise, PROMISE, '_h');
                aFunction(executor);
                Internal.call(this);
                try {
                    executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                } catch (err) {
                    $reject.call(this, err);
                }
            };
            // eslint-disable-next-line no-unused-vars
            Internal = function Promise(executor) {
                this._c = []; // <- awaiting reactions
                this._a = undefined; // <- checked in isUnhandled reactions
                this._s = 0; // <- state
                this._d = false; // <- done
                this._v = undefined; // <- value
                this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                this._n = false; // <- notify
            };
            Internal.prototype = __webpack_require__( /*! ./_redefine-all */ 41)($Promise.prototype, {
                // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                then: function then(onFulfilled, onRejected) {
                    var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                    reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                    reaction.fail = typeof onRejected == 'function' && onRejected;
                    reaction.domain = isNode ? process.domain : undefined;
                    this._c.push(reaction);
                    if (this._a) this._a.push(reaction);
                    if (this._s) notify(this, false);
                    return reaction.promise;
                },
                // 25.4.5.1 Promise.prototype.catch(onRejected)
                'catch': function(onRejected) {
                    return this.then(undefined, onRejected);
                }
            });
            OwnPromiseCapability = function() {
                var promise = new Internal();
                this.promise = promise;
                this.resolve = ctx($resolve, promise, 1);
                this.reject = ctx($reject, promise, 1);
            };
            newPromiseCapabilityModule.f = newPromiseCapability = function(C) {
                return C === $Promise || C === Wrapper ?
                    new OwnPromiseCapability(C) :
                    newGenericPromiseCapability(C);
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Promise: $Promise
        });
        __webpack_require__( /*! ./_set-to-string-tag */ 48)($Promise, PROMISE);
        __webpack_require__( /*! ./_set-species */ 42)(PROMISE);
        Wrapper = __webpack_require__( /*! ./_core */ 19)[PROMISE];

        // statics
        $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
            // 25.4.4.5 Promise.reject(r)
            reject: function reject(r) {
                var capability = newPromiseCapability(this);
                var $$reject = capability.reject;
                $$reject(r);
                return capability.promise;
            }
        });
        $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
            // 25.4.4.6 Promise.resolve(x)
            resolve: function resolve(x) {
                return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
            }
        });
        $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__( /*! ./_iter-detect */ 61)(function(iter) {
            $Promise.all(iter)['catch'](empty);
        })), PROMISE, {
            // 25.4.4.1 Promise.all(iterable)
            all: function all(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var resolve = capability.resolve;
                var reject = capability.reject;
                var result = perform(function() {
                    var values = [];
                    var index = 0;
                    var remaining = 1;
                    forOf(iterable, false, function(promise) {
                        var $index = index++;
                        var alreadyCalled = false;
                        values.push(undefined);
                        remaining++;
                        C.resolve(promise).then(function(value) {
                            if (alreadyCalled) return;
                            alreadyCalled = true;
                            values[$index] = value;
                            --remaining || resolve(values);
                        }, reject);
                    });
                    --remaining || resolve(values);
                });
                if (result.e) reject(result.v);
                return capability.promise;
            },
            // 25.4.4.4 Promise.race(iterable)
            race: function race(iterable) {
                var C = this;
                var capability = newPromiseCapability(C);
                var reject = capability.reject;
                var result = perform(function() {
                    forOf(iterable, false, function(promise) {
                        C.resolve(promise).then(capability.resolve, reject);
                    });
                });
                if (result.e) reject(result.v);
                return capability.promise;
            }
        });


        /***/
    }),
    /* 246 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.apply.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var rApply = (__webpack_require__( /*! ./_global */ 2).Reflect || {}).apply;
        var fApply = Function.apply;
        // MS Edge argumentsList argument is optional
        $export($export.S + $export.F * !__webpack_require__( /*! ./_fails */ 3)(function() {
            rApply(function() { /* empty */ });
        }), 'Reflect', {
            apply: function apply(target, thisArgument, argumentsList) {
                var T = aFunction(target);
                var L = anObject(argumentsList);
                return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
            }
        });


        /***/
    }),
    /* 247 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.construct.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
        var $export = __webpack_require__( /*! ./_export */ 0);
        var create = __webpack_require__( /*! ./_object-create */ 37);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var bind = __webpack_require__( /*! ./_bind */ 109);
        var rConstruct = (__webpack_require__( /*! ./_global */ 2).Reflect || {}).construct;

        // MS Edge supports only 2 arguments and argumentsList argument is optional
        // FF Nightly sets third argument as `new.target`, but does not create `this` from it
        var NEW_TARGET_BUG = fails(function() {
            function F() { /* empty */ }
            return !(rConstruct(function() { /* empty */ }, [], F) instanceof F);
        });
        var ARGS_BUG = !fails(function() {
            rConstruct(function() { /* empty */ });
        });

        $export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
            construct: function construct(Target, args /* , newTarget */ ) {
                aFunction(Target);
                anObject(args);
                var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
                if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
                if (Target == newTarget) {
                    // w/o altered newTarget, optimization for 0-4 arguments
                    switch (args.length) {
                        case 0:
                            return new Target();
                        case 1:
                            return new Target(args[0]);
                        case 2:
                            return new Target(args[0], args[1]);
                        case 3:
                            return new Target(args[0], args[1], args[2]);
                        case 4:
                            return new Target(args[0], args[1], args[2], args[3]);
                    }
                    // w/o altered newTarget, lot of arguments case
                    var $args = [null];
                    $args.push.apply($args, args);
                    return new(bind.apply(Target, $args))();
                }
                // with altered newTarget, not support built-in constructors
                var proto = newTarget.prototype;
                var instance = create(isObject(proto) ? proto : Object.prototype);
                var result = Function.apply.call(Target, instance, args);
                return isObject(result) ? result : instance;
            }
        });


        /***/
    }),
    /* 248 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.define-property.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
        var dP = __webpack_require__( /*! ./_object-dp */ 8);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);

        // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
        $export($export.S + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            // eslint-disable-next-line no-undef
            Reflect.defineProperty(dP.f({}, 1, {
                value: 1
            }), 1, {
                value: 2
            });
        }), 'Reflect', {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
                anObject(target);
                propertyKey = toPrimitive(propertyKey, true);
                anObject(attributes);
                try {
                    dP.f(target, propertyKey, attributes);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });


        /***/
    }),
    /* 249 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.delete-property.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.4 Reflect.deleteProperty(target, propertyKey)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15).f;
        var anObject = __webpack_require__( /*! ./_an-object */ 1);

        $export($export.S, 'Reflect', {
            deleteProperty: function deleteProperty(target, propertyKey) {
                var desc = gOPD(anObject(target), propertyKey);
                return desc && !desc.configurable ? false : delete target[propertyKey];
            }
        });


        /***/
    }),
    /* 250 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.enumerate.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 26.1.5 Reflect.enumerate(target)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var Enumerate = function(iterated) {
            this._t = anObject(iterated); // target
            this._i = 0; // next index
            var keys = this._k = []; // keys
            var key;
            for (key in iterated) keys.push(key);
        };
        __webpack_require__( /*! ./_iter-create */ 81)(Enumerate, 'Object', function() {
            var that = this;
            var keys = that._k;
            var key;
            do {
                if (that._i >= keys.length) return {
                    value: undefined,
                    done: true
                };
            } while (!((key = keys[that._i++]) in that._t));
            return {
                value: key,
                done: false
            };
        });

        $export($export.S, 'Reflect', {
            enumerate: function enumerate(target) {
                return new Enumerate(target);
            }
        });


        /***/
    }),
    /* 251 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.get-own-property-descriptor.js ***!
      \**********************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);

        $export($export.S, 'Reflect', {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                return gOPD.f(anObject(target), propertyKey);
            }
        });


        /***/
    }),
    /* 252 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.get-prototype-of.js ***!
      \***********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.8 Reflect.getPrototypeOf(target)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var getProto = __webpack_require__( /*! ./_object-gpo */ 16);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);

        $export($export.S, 'Reflect', {
            getPrototypeOf: function getPrototypeOf(target) {
                return getProto(anObject(target));
            }
        });


        /***/
    }),
    /* 253 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.reflect.get.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.6 Reflect.get(target, propertyKey [, receiver])
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var has = __webpack_require__( /*! ./_has */ 14);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);

        function get(target, propertyKey /* , receiver */ ) {
            var receiver = arguments.length < 3 ? target : arguments[2];
            var desc, proto;
            if (anObject(target) === receiver) return target[propertyKey];
            if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value') ?
                desc.value :
                desc.get !== undefined ?
                desc.get.call(receiver) :
                undefined;
            if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
        }

        $export($export.S, 'Reflect', {
            get: get
        });


        /***/
    }),
    /* 254 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.reflect.has.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.9 Reflect.has(target, propertyKey)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Reflect', {
            has: function has(target, propertyKey) {
                return propertyKey in target;
            }
        });


        /***/
    }),
    /* 255 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.is-extensible.js ***!
      \********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.10 Reflect.isExtensible(target)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var $isExtensible = Object.isExtensible;

        $export($export.S, 'Reflect', {
            isExtensible: function isExtensible(target) {
                anObject(target);
                return $isExtensible ? $isExtensible(target) : true;
            }
        });


        /***/
    }),
    /* 256 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.own-keys.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.11 Reflect.ownKeys(target)
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Reflect', {
            ownKeys: __webpack_require__( /*! ./_own-keys */ 127)
        });


        /***/
    }),
    /* 257 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.prevent-extensions.js ***!
      \*************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.12 Reflect.preventExtensions(target)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var $preventExtensions = Object.preventExtensions;

        $export($export.S, 'Reflect', {
            preventExtensions: function preventExtensions(target) {
                anObject(target);
                try {
                    if ($preventExtensions) $preventExtensions(target);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });


        /***/
    }),
    /* 258 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************************!*\
      !*** ./~/core-js/modules/es6.reflect.set-prototype-of.js ***!
      \***********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.14 Reflect.setPrototypeOf(target, proto)
        var $export = __webpack_require__( /*! ./_export */ 0);
        var setProto = __webpack_require__( /*! ./_set-proto */ 88);

        if (setProto) $export($export.S, 'Reflect', {
            setPrototypeOf: function setPrototypeOf(target, proto) {
                setProto.check(target, proto);
                try {
                    setProto.set(target, proto);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });


        /***/
    }),
    /* 259 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.reflect.set.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
        var dP = __webpack_require__( /*! ./_object-dp */ 8);
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var has = __webpack_require__( /*! ./_has */ 14);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var createDesc = __webpack_require__( /*! ./_property-desc */ 40);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);

        function set(target, propertyKey, V /* , receiver */ ) {
            var receiver = arguments.length < 4 ? target : arguments[3];
            var ownDesc = gOPD.f(anObject(target), propertyKey);
            var existingDescriptor, proto;
            if (!ownDesc) {
                if (isObject(proto = getPrototypeOf(target))) {
                    return set(proto, propertyKey, V, receiver);
                }
                ownDesc = createDesc(0);
            }
            if (has(ownDesc, 'value')) {
                if (ownDesc.writable === false || !isObject(receiver)) return false;
                if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
                    if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
                    existingDescriptor.value = V;
                    dP.f(receiver, propertyKey, existingDescriptor);
                } else dP.f(receiver, propertyKey, createDesc(0, V));
                return true;
            }
            return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }

        $export($export.S, 'Reflect', {
            set: set
        });


        /***/
    }),
    /* 260 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.regexp.constructor.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var global = __webpack_require__( /*! ./_global */ 2);
        var inheritIfRequired = __webpack_require__( /*! ./_inherit-if-required */ 79);
        var dP = __webpack_require__( /*! ./_object-dp */ 8).f;
        var gOPN = __webpack_require__( /*! ./_object-gopn */ 38).f;
        var isRegExp = __webpack_require__( /*! ./_is-regexp */ 60);
        var $flags = __webpack_require__( /*! ./_flags */ 51);
        var $RegExp = global.RegExp;
        var Base = $RegExp;
        var proto = $RegExp.prototype;
        var re1 = /a/g;
        var re2 = /a/g;
        // "new" creates a new object, old webkit buggy here
        var CORRECT_NEW = new $RegExp(re1) !== re1;

        if (__webpack_require__( /*! ./_descriptors */ 7) && (!CORRECT_NEW || __webpack_require__( /*! ./_fails */ 3)(function() {
                re2[__webpack_require__( /*! ./_wks */ 5)('match')] = false;
                // RegExp constructor can alter flags and IsRegExp works correct with @@match
                return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
            }))) {
            $RegExp = function RegExp(p, f) {
                var tiRE = this instanceof $RegExp;
                var piRE = isRegExp(p);
                var fiU = f === undefined;
                return !tiRE && piRE && p.constructor === $RegExp && fiU ? p :
                    inheritIfRequired(CORRECT_NEW ?
                        new Base(piRE && !fiU ? p.source : p, f) :
                        Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f), tiRE ? this : proto, $RegExp);
            };
            var proxy = function(key) {
                key in $RegExp || dP($RegExp, key, {
                    configurable: true,
                    get: function() {
                        return Base[key];
                    },
                    set: function(it) {
                        Base[key] = it;
                    }
                });
            };
            for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
            proto.constructor = $RegExp;
            $RegExp.prototype = proto;
            __webpack_require__( /*! ./_redefine */ 12)(global, 'RegExp', $RegExp);
        }

        __webpack_require__( /*! ./_set-species */ 42)('RegExp');


        /***/
    }),
    /* 261 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.regexp.match.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ 71);
        var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ 64);

        // @@match logic
        __webpack_require__( /*! ./_fix-re-wks */ 58)('match', 1, function(defined, MATCH, $match, maybeCallNative) {
            return [
                // `String.prototype.match` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.match
                function match(regexp) {
                    var O = defined(this);
                    var fn = regexp == undefined ? undefined : regexp[MATCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
                },
                // `RegExp.prototype[@@match]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
                function(regexp) {
                    var res = maybeCallNative($match, regexp, this);
                    if (res.done) return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    if (!rx.global) return regExpExec(rx, S);
                    var fullUnicode = rx.unicode;
                    rx.lastIndex = 0;
                    var A = [];
                    var n = 0;
                    var result;
                    while ((result = regExpExec(rx, S)) !== null) {
                        var matchStr = String(result[0]);
                        A[n] = matchStr;
                        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                        n++;
                    }
                    return n === 0 ? null : A;
                }
            ];
        });


        /***/
    }),
    /* 262 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.regexp.replace.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ 71);
        var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ 64);
        var max = Math.max;
        var min = Math.min;
        var floor = Math.floor;
        var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
        var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

        var maybeToString = function(it) {
            return it === undefined ? it : String(it);
        };

        // @@replace logic
        __webpack_require__( /*! ./_fix-re-wks */ 58)('replace', 2, function(defined, REPLACE, $replace, maybeCallNative) {
            return [
                // `String.prototype.replace` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.replace
                function replace(searchValue, replaceValue) {
                    var O = defined(this);
                    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
                    return fn !== undefined ?
                        fn.call(searchValue, O, replaceValue) :
                        $replace.call(String(O), searchValue, replaceValue);
                },
                // `RegExp.prototype[@@replace]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
                function(regexp, replaceValue) {
                    var res = maybeCallNative($replace, regexp, this, replaceValue);
                    if (res.done) return res.value;

                    var rx = anObject(regexp);
                    var S = String(this);
                    var functionalReplace = typeof replaceValue === 'function';
                    if (!functionalReplace) replaceValue = String(replaceValue);
                    var global = rx.global;
                    if (global) {
                        var fullUnicode = rx.unicode;
                        rx.lastIndex = 0;
                    }
                    var results = [];
                    while (true) {
                        var result = regExpExec(rx, S);
                        if (result === null) break;
                        results.push(result);
                        if (!global) break;
                        var matchStr = String(result[0]);
                        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
                    }
                    var accumulatedResult = '';
                    var nextSourcePosition = 0;
                    for (var i = 0; i < results.length; i++) {
                        result = results[i];
                        var matched = String(result[0]);
                        var position = max(min(toInteger(result.index), S.length), 0);
                        var captures = [];
                        // NOTE: This is equivalent to
                        //   captures = result.slice(1).map(maybeToString)
                        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
                        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
                        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
                        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
                        var namedCaptures = result.groups;
                        if (functionalReplace) {
                            var replacerArgs = [matched].concat(captures, position, S);
                            if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
                            var replacement = String(replaceValue.apply(undefined, replacerArgs));
                        } else {
                            replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
                        }
                        if (position >= nextSourcePosition) {
                            accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
                            nextSourcePosition = position + matched.length;
                        }
                    }
                    return accumulatedResult + S.slice(nextSourcePosition);
                }
            ];

            // https://tc39.github.io/ecma262/#sec-getsubstitution
            function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
                var tailPos = position + matched.length;
                var m = captures.length;
                var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
                if (namedCaptures !== undefined) {
                    namedCaptures = toObject(namedCaptures);
                    symbols = SUBSTITUTION_SYMBOLS;
                }
                return $replace.call(replacement, symbols, function(match, ch) {
                    var capture;
                    switch (ch.charAt(0)) {
                        case '$':
                            return '$';
                        case '&':
                            return matched;
                        case '`':
                            return str.slice(0, position);
                        case "'":
                            return str.slice(tailPos);
                        case '<':
                            capture = namedCaptures[ch.slice(1, -1)];
                            break;
                        default: // \d\d?
                            var n = +ch;
                            if (n === 0) return match;
                            if (n > m) {
                                var f = floor(n / 10);
                                if (f === 0) return match;
                                if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
                                return match;
                            }
                            capture = captures[n - 1];
                    }
                    return capture === undefined ? '' : capture;
                });
            }
        });


        /***/
    }),
    /* 263 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.regexp.search.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var sameValue = __webpack_require__( /*! ./_same-value */ 132);
        var regExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ 64);

        // @@search logic
        __webpack_require__( /*! ./_fix-re-wks */ 58)('search', 1, function(defined, SEARCH, $search, maybeCallNative) {
            return [
                // `String.prototype.search` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.search
                function search(regexp) {
                    var O = defined(this);
                    var fn = regexp == undefined ? undefined : regexp[SEARCH];
                    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
                },
                // `RegExp.prototype[@@search]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
                function(regexp) {
                    var res = maybeCallNative($search, regexp, this);
                    if (res.done) return res.value;
                    var rx = anObject(regexp);
                    var S = String(this);
                    var previousLastIndex = rx.lastIndex;
                    if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
                    var result = regExpExec(rx, S);
                    if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
                    return result === null ? -1 : result.index;
                }
            ];
        });


        /***/
    }),
    /* 264 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.regexp.split.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";


        var isRegExp = __webpack_require__( /*! ./_is-regexp */ 60);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ 55);
        var advanceStringIndex = __webpack_require__( /*! ./_advance-string-index */ 71);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var callRegExpExec = __webpack_require__( /*! ./_regexp-exec-abstract */ 64);
        var regexpExec = __webpack_require__( /*! ./_regexp-exec */ 87);
        var fails = __webpack_require__( /*! ./_fails */ 3);
        var $min = Math.min;
        var $push = [].push;
        var $SPLIT = 'split';
        var LENGTH = 'length';
        var LAST_INDEX = 'lastIndex';
        var MAX_UINT32 = 0xffffffff;

        // babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
        var SUPPORTS_Y = !fails(function() {
            RegExp(MAX_UINT32, 'y');
        });

        // @@split logic
        __webpack_require__( /*! ./_fix-re-wks */ 58)('split', 2, function(defined, SPLIT, $split, maybeCallNative) {
            var internalSplit;
            if (
                'abbc' [$SPLIT](/(b)*/)[1] == 'c' ||
                'test' [$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
                'ab' [$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
                '.' [$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
                '.' [$SPLIT](/()()/)[LENGTH] > 1 ||
                '' [$SPLIT](/.?/)[LENGTH]
            ) {
                // based on es5-shim implementation, need to rework it
                internalSplit = function(separator, limit) {
                    var string = String(this);
                    if (separator === undefined && limit === 0) return [];
                    // If `separator` is not a regex, use native split
                    if (!isRegExp(separator)) return $split.call(string, separator, limit);
                    var output = [];
                    var flags = (separator.ignoreCase ? 'i' : '') +
                        (separator.multiline ? 'm' : '') +
                        (separator.unicode ? 'u' : '') +
                        (separator.sticky ? 'y' : '');
                    var lastLastIndex = 0;
                    var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    var separatorCopy = new RegExp(separator.source, flags + 'g');
                    var match, lastIndex, lastLength;
                    while (match = regexpExec.call(separatorCopy, string)) {
                        lastIndex = separatorCopy[LAST_INDEX];
                        if (lastIndex > lastLastIndex) {
                            output.push(string.slice(lastLastIndex, match.index));
                            if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
                            lastLength = match[0][LENGTH];
                            lastLastIndex = lastIndex;
                            if (output[LENGTH] >= splitLimit) break;
                        }
                        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
                    }
                    if (lastLastIndex === string[LENGTH]) {
                        if (lastLength || !separatorCopy.test('')) output.push('');
                    } else output.push(string.slice(lastLastIndex));
                    return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
                };
                // Chakra, V8
            } else if ('0' [$SPLIT](undefined, 0)[LENGTH]) {
                internalSplit = function(separator, limit) {
                    return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
                };
            } else {
                internalSplit = $split;
            }

            return [
                // `String.prototype.split` method
                // https://tc39.github.io/ecma262/#sec-string.prototype.split
                function split(separator, limit) {
                    var O = defined(this);
                    var splitter = separator == undefined ? undefined : separator[SPLIT];
                    return splitter !== undefined ?
                        splitter.call(separator, O, limit) :
                        internalSplit.call(String(O), separator, limit);
                },
                // `RegExp.prototype[@@split]` method
                // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
                //
                // NOTE: This cannot be properly polyfilled in engines that don't support
                // the 'y' flag.
                function(regexp, limit) {
                    var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
                    if (res.done) return res.value;

                    var rx = anObject(regexp);
                    var S = String(this);
                    var C = speciesConstructor(rx, RegExp);

                    var unicodeMatching = rx.unicode;
                    var flags = (rx.ignoreCase ? 'i' : '') +
                        (rx.multiline ? 'm' : '') +
                        (rx.unicode ? 'u' : '') +
                        (SUPPORTS_Y ? 'y' : 'g');

                    // ^(? + rx + ) is needed, in combination with some S slicing, to
                    // simulate the 'y' flag.
                    var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
                    var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
                    if (lim === 0) return [];
                    if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
                    var p = 0;
                    var q = 0;
                    var A = [];
                    while (q < S.length) {
                        splitter.lastIndex = SUPPORTS_Y ? q : 0;
                        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
                        var e;
                        if (
                            z === null ||
                            (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
                        ) {
                            q = advanceStringIndex(S, q, unicodeMatching);
                        } else {
                            A.push(S.slice(p, q));
                            if (A.length === lim) return A;
                            for (var i = 1; i <= z.length - 1; i++) {
                                A.push(z[i]);
                                if (A.length === lim) return A;
                            }
                            q = p = e;
                        }
                    }
                    A.push(S.slice(p));
                    return A;
                }
            ];
        });


        /***/
    }),
    /* 265 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.regexp.to-string.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        __webpack_require__( /*! ./es6.regexp.flags */ 138);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var $flags = __webpack_require__( /*! ./_flags */ 51);
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var TO_STRING = 'toString';
        var $toString = /./ [TO_STRING];

        var define = function(fn) {
            __webpack_require__( /*! ./_redefine */ 12)(RegExp.prototype, TO_STRING, fn, true);
        };

        // 21.2.5.14 RegExp.prototype.toString()
        if (__webpack_require__( /*! ./_fails */ 3)(function() {
                return $toString.call({
                    source: 'a',
                    flags: 'b'
                }) != '/a/b';
            })) {
            define(function toString() {
                var R = anObject(this);
                return '/'.concat(R.source, '/',
                    'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
            });
            // FF44- RegExp#toString has a wrong name
        } else if ($toString.name != TO_STRING) {
            define(function toString() {
                return $toString.call(this);
            });
        }


        /***/
    }),
    /* 266 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.string.anchor.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.2 String.prototype.anchor(name)
        __webpack_require__( /*! ./_string-html */ 13)('anchor', function(createHTML) {
            return function anchor(name) {
                return createHTML(this, 'a', 'name', name);
            };
        });


        /***/
    }),
    /* 267 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.string.big.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.3 String.prototype.big()
        __webpack_require__( /*! ./_string-html */ 13)('big', function(createHTML) {
            return function big() {
                return createHTML(this, 'big', '', '');
            };
        });


        /***/
    }),
    /* 268 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.string.blink.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.4 String.prototype.blink()
        __webpack_require__( /*! ./_string-html */ 13)('blink', function(createHTML) {
            return function blink() {
                return createHTML(this, 'blink', '', '');
            };
        });


        /***/
    }),
    /* 269 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.string.bold.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.5 String.prototype.bold()
        __webpack_require__( /*! ./_string-html */ 13)('bold', function(createHTML) {
            return function bold() {
                return createHTML(this, 'b', '', '');
            };
        });


        /***/
    }),
    /* 270 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es6.string.code-point-at.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $at = __webpack_require__( /*! ./_string-at */ 67)(false);
        $export($export.P, 'String', {
            // 21.1.3.3 String.prototype.codePointAt(pos)
            codePointAt: function codePointAt(pos) {
                return $at(this, pos);
            }
        });


        /***/
    }),
    /* 271 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.string.ends-with.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var context = __webpack_require__( /*! ./_string-context */ 90);
        var ENDS_WITH = 'endsWith';
        var $endsWith = '' [ENDS_WITH];

        $export($export.P + $export.F * __webpack_require__( /*! ./_fails-is-regexp */ 77)(ENDS_WITH), 'String', {
            endsWith: function endsWith(searchString /* , endPosition = @length */ ) {
                var that = context(this, searchString, ENDS_WITH);
                var endPosition = arguments.length > 1 ? arguments[1] : undefined;
                var len = toLength(that.length);
                var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
                var search = String(searchString);
                return $endsWith ?
                    $endsWith.call(that, search, end) :
                    that.slice(end - search.length, end) === search;
            }
        });


        /***/
    }),
    /* 272 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.string.fixed.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.6 String.prototype.fixed()
        __webpack_require__( /*! ./_string-html */ 13)('fixed', function(createHTML) {
            return function fixed() {
                return createHTML(this, 'tt', '', '');
            };
        });


        /***/
    }),
    /* 273 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.string.fontcolor.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.7 String.prototype.fontcolor(color)
        __webpack_require__( /*! ./_string-html */ 13)('fontcolor', function(createHTML) {
            return function fontcolor(color) {
                return createHTML(this, 'font', 'color', color);
            };
        });


        /***/
    }),
    /* 274 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es6.string.fontsize.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.8 String.prototype.fontsize(size)
        __webpack_require__( /*! ./_string-html */ 13)('fontsize', function(createHTML) {
            return function fontsize(size) {
                return createHTML(this, 'font', 'size', size);
            };
        });


        /***/
    }),
    /* 275 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************************!*\
      !*** ./~/core-js/modules/es6.string.from-code-point.js ***!
      \*********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        var fromCharCode = String.fromCharCode;
        var $fromCodePoint = String.fromCodePoint;

        // length should be 1, old FF problem
        $export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
            // 21.1.2.2 String.fromCodePoint(...codePoints)
            fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
                var res = [];
                var aLen = arguments.length;
                var i = 0;
                var code;
                while (aLen > i) {
                    code = +arguments[i++];
                    if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
                    res.push(code < 0x10000 ?
                        fromCharCode(code) :
                        fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
                    );
                }
                return res.join('');
            }
        });


        /***/
    }),
    /* 276 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es6.string.includes.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.7 String.prototype.includes(searchString, position = 0)

        var $export = __webpack_require__( /*! ./_export */ 0);
        var context = __webpack_require__( /*! ./_string-context */ 90);
        var INCLUDES = 'includes';

        $export($export.P + $export.F * __webpack_require__( /*! ./_fails-is-regexp */ 77)(INCLUDES), 'String', {
            includes: function includes(searchString /* , position = 0 */ ) {
                return !!~context(this, searchString, INCLUDES)
                    .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
            }
        });


        /***/
    }),
    /* 277 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es6.string.italics.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.9 String.prototype.italics()
        __webpack_require__( /*! ./_string-html */ 13)('italics', function(createHTML) {
            return function italics() {
                return createHTML(this, 'i', '', '');
            };
        });


        /***/
    }),
    /* 278 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es6.string.iterator.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $at = __webpack_require__( /*! ./_string-at */ 67)(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        __webpack_require__( /*! ./_iter-define */ 82)(String, 'String', function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return {
                value: undefined,
                done: true
            };
            point = $at(O, index);
            this._i += point.length;
            return {
                value: point,
                done: false
            };
        });


        /***/
    }),
    /* 279 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.string.link.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.10 String.prototype.link(url)
        __webpack_require__( /*! ./_string-html */ 13)('link', function(createHTML) {
            return function link(url) {
                return createHTML(this, 'a', 'href', url);
            };
        });


        /***/
    }),
    /* 280 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.string.raw.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);

        $export($export.S, 'String', {
            // 21.1.2.4 String.raw(callSite, ...substitutions)
            raw: function raw(callSite) {
                var tpl = toIObject(callSite.raw);
                var len = toLength(tpl.length);
                var aLen = arguments.length;
                var res = [];
                var i = 0;
                while (len > i) {
                    res.push(String(tpl[i++]));
                    if (i < aLen) res.push(String(arguments[i]));
                }
                return res.join('');
            }
        });


        /***/
    }),
    /* 281 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.string.repeat.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P, 'String', {
            // 21.1.3.13 String.prototype.repeat(count)
            repeat: __webpack_require__( /*! ./_string-repeat */ 91)
        });


        /***/
    }),
    /* 282 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es6.string.small.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.11 String.prototype.small()
        __webpack_require__( /*! ./_string-html */ 13)('small', function(createHTML) {
            return function small() {
                return createHTML(this, 'small', '', '');
            };
        });


        /***/
    }),
    /* 283 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.string.starts-with.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // 21.1.3.18 String.prototype.startsWith(searchString [, position ])

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var context = __webpack_require__( /*! ./_string-context */ 90);
        var STARTS_WITH = 'startsWith';
        var $startsWith = '' [STARTS_WITH];

        $export($export.P + $export.F * __webpack_require__( /*! ./_fails-is-regexp */ 77)(STARTS_WITH), 'String', {
            startsWith: function startsWith(searchString /* , position = 0 */ ) {
                var that = context(this, searchString, STARTS_WITH);
                var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
                var search = String(searchString);
                return $startsWith ?
                    $startsWith.call(that, search, index) :
                    that.slice(index, index + search.length) === search;
            }
        });


        /***/
    }),
    /* 284 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es6.string.strike.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.12 String.prototype.strike()
        __webpack_require__( /*! ./_string-html */ 13)('strike', function(createHTML) {
            return function strike() {
                return createHTML(this, 'strike', '', '');
            };
        });


        /***/
    }),
    /* 285 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.string.sub.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.13 String.prototype.sub()
        __webpack_require__( /*! ./_string-html */ 13)('sub', function(createHTML) {
            return function sub() {
                return createHTML(this, 'sub', '', '');
            };
        });


        /***/
    }),
    /* 286 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es6.string.sup.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // B.2.3.14 String.prototype.sup()
        __webpack_require__( /*! ./_string-html */ 13)('sup', function(createHTML) {
            return function sup() {
                return createHTML(this, 'sup', '', '');
            };
        });


        /***/
    }),
    /* 287 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es6.string.trim.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // 21.1.3.25 String.prototype.trim()
        __webpack_require__( /*! ./_string-trim */ 49)('trim', function($trim) {
            return function trim() {
                return $trim(this, 3);
            };
        });


        /***/
    }),
    /* 288 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/es6.symbol.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // ECMAScript 6 symbols shim
        var global = __webpack_require__( /*! ./_global */ 2);
        var has = __webpack_require__( /*! ./_has */ 14);
        var DESCRIPTORS = __webpack_require__( /*! ./_descriptors */ 7);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var META = __webpack_require__( /*! ./_meta */ 33).KEY;
        var $fails = __webpack_require__( /*! ./_fails */ 3);
        var shared = __webpack_require__( /*! ./_shared */ 54);
        var setToStringTag = __webpack_require__( /*! ./_set-to-string-tag */ 48);
        var uid = __webpack_require__( /*! ./_uid */ 44);
        var wks = __webpack_require__( /*! ./_wks */ 5);
        var wksExt = __webpack_require__( /*! ./_wks-ext */ 135);
        var wksDefine = __webpack_require__( /*! ./_wks-define */ 95);
        var enumKeys = __webpack_require__( /*! ./_enum-keys */ 165);
        var isArray = __webpack_require__( /*! ./_is-array */ 59);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var createDesc = __webpack_require__( /*! ./_property-desc */ 40);
        var _create = __webpack_require__( /*! ./_object-create */ 37);
        var gOPNExt = __webpack_require__( /*! ./_object-gopn-ext */ 124);
        var $GOPD = __webpack_require__( /*! ./_object-gopd */ 15);
        var $GOPS = __webpack_require__( /*! ./_object-gops */ 63);
        var $DP = __webpack_require__( /*! ./_object-dp */ 8);
        var $keys = __webpack_require__( /*! ./_object-keys */ 39);
        var gOPD = $GOPD.f;
        var dP = $DP.f;
        var gOPN = gOPNExt.f;
        var $Symbol = global.Symbol;
        var $JSON = global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE = 'prototype';
        var HIDDEN = wks('_hidden');
        var TO_PRIMITIVE = wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = shared('symbol-registry');
        var AllSymbols = shared('symbols');
        var OPSymbols = shared('op-symbols');
        var ObjectProto = Object[PROTOTYPE];
        var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
        var QObject = global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = DESCRIPTORS && $fails(function() {
            return _create(dP({}, 'a', {
                get: function() {
                    return dP(this, 'a', {
                        value: 7
                    }).a;
                }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD(ObjectProto, key);
            if (protoDesc) delete ObjectProto[key];
            dP(it, key, D);
            if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
        } : dP;

        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
            sym._k = tag;
            return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
            return typeof it == 'symbol';
        } : function(it) {
            return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
            anObject(it);
            key = toPrimitive(key, true);
            anObject(D);
            if (has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _create(D, {
                        enumerable: createDesc(0, false)
                    });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            anObject(it);
            var keys = enumKeys(P = toIObject(P));
            var i = 0;
            var l = keys.length;
            var key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _create(it) : $defineProperties(_create(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = toPrimitive(key, true));
            if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
            return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = toIObject(it);
            key = toPrimitive(key, true);
            if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
            var D = gOPD(it, key);
            if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto;
            var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto) $set.call(OPSymbols, value);
                    if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, createDesc(1, value));
                };
                if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
                    configurable: true,
                    set: $set
                });
                return wrap(tag);
            };
            redefine($Symbol[PROTOTYPE], 'toString', function toString() {
                return this._k;
            });

            $GOPD.f = $getOwnPropertyDescriptor;
            $DP.f = $defineProperty;
            __webpack_require__( /*! ./_object-gopn */ 38).f = gOPNExt.f = $getOwnPropertyNames;
            __webpack_require__( /*! ./_object-pie */ 53).f = $propertyIsEnumerable;
            $GOPS.f = $getOwnPropertySymbols;

            if (DESCRIPTORS && !__webpack_require__( /*! ./_library */ 32)) {
                redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }

            wksExt.f = function(name) {
                return wrap(wks(name));
            };
        }

        $export($export.G + $export.W + $export.F * !USE_NATIVE, {
            Symbol: $Symbol
        });

        for (var es6Symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
            ).split(','), j = 0; es6Symbols.length > j;) wks(es6Symbols[j++]);

        for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

        $export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            'for': function(key) {
                return has(SymbolRegistry, key += '') ?
                    SymbolRegistry[key] :
                    SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                for (var key in SymbolRegistry)
                    if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() {
                setter = true;
            },
            useSimple: function() {
                setter = false;
            }
        });

        $export($export.S + $export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
        // https://bugs.chromium.org/p/v8/issues/detail?id=3443
        var FAILS_ON_PRIMITIVES = $fails(function() {
            $GOPS.f(1);
        });

        $export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
            getOwnPropertySymbols: function getOwnPropertySymbols(it) {
                return $GOPS.f(toObject(it));
            }
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({
                a: S
            }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
            stringify: function stringify(it) {
                var args = [it];
                var i = 1;
                var replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                $replacer = replacer = args[1];
                if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                if (!isArray(replacer)) replacer = function(key, value) {
                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__( /*! ./_hide */ 11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        setToStringTag($Symbol, 'Symbol');
        // 20.2.1.9 Math[@@toStringTag]
        setToStringTag(Math, 'Math', true);
        // 24.3.3 JSON[@@toStringTag]
        setToStringTag(global.JSON, 'JSON', true);


        /***/
    }),
    /* 289 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.array-buffer.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $typed = __webpack_require__( /*! ./_typed */ 68);
        var buffer = __webpack_require__( /*! ./_typed-buffer */ 94);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toAbsoluteIndex = __webpack_require__( /*! ./_to-absolute-index */ 43);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var isObject = __webpack_require__( /*! ./_is-object */ 4);
        var ArrayBuffer = __webpack_require__( /*! ./_global */ 2).ArrayBuffer;
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ 55);
        var $ArrayBuffer = buffer.ArrayBuffer;
        var $DataView = buffer.DataView;
        var $isView = $typed.ABV && ArrayBuffer.isView;
        var $slice = $ArrayBuffer.prototype.slice;
        var VIEW = $typed.VIEW;
        var ARRAY_BUFFER = 'ArrayBuffer';

        $export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), {
            ArrayBuffer: $ArrayBuffer
        });

        $export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
            // 24.1.3.1 ArrayBuffer.isView(arg)
            isView: function isView(it) {
                return $isView && $isView(it) || isObject(it) && VIEW in it;
            }
        });

        $export($export.P + $export.U + $export.F * __webpack_require__( /*! ./_fails */ 3)(function() {
            return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
        }), ARRAY_BUFFER, {
            // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
            slice: function slice(start, end) {
                if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
                var len = anObject(this).byteLength;
                var first = toAbsoluteIndex(start, len);
                var fin = toAbsoluteIndex(end === undefined ? len : end, len);
                var result = new(speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
                var viewS = new $DataView(this);
                var viewT = new $DataView(result);
                var index = 0;
                while (first < fin) {
                    viewT.setUint8(index++, viewS.getUint8(first++));
                }
                return result;
            }
        });

        __webpack_require__( /*! ./_set-species */ 42)(ARRAY_BUFFER);


        /***/
    }),
    /* 290 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es6.typed.data-view.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        $export($export.G + $export.W + $export.F * !__webpack_require__( /*! ./_typed */ 68).ABV, {
            DataView: __webpack_require__( /*! ./_typed-buffer */ 94).DataView
        });


        /***/
    }),
    /* 291 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************************!*\
      !*** ./~/core-js/modules/es6.typed.float32-array.js ***!
      \******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Float32', 4, function(init) {
            return function Float32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 292 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************************!*\
      !*** ./~/core-js/modules/es6.typed.float64-array.js ***!
      \******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Float64', 8, function(init) {
            return function Float64Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 293 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.int16-array.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Int16', 2, function(init) {
            return function Int16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 294 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.int32-array.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Int32', 4, function(init) {
            return function Int32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 295 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es6.typed.int8-array.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Int8', 1, function(init) {
            return function Int8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 296 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.uint16-array.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Uint16', 2, function(init) {
            return function Uint16Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 297 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.uint32-array.js ***!
      \*****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Uint32', 4, function(init) {
            return function Uint32Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 298 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es6.typed.uint8-array.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Uint8', 1, function(init) {
            return function Uint8Array(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        });


        /***/
    }),
    /* 299 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************************!*\
      !*** ./~/core-js/modules/es6.typed.uint8-clamped-array.js ***!
      \************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_typed-array */ 30)('Uint8', 1, function(init) {
            return function Uint8ClampedArray(data, byteOffset, length) {
                return init(this, data, byteOffset, length);
            };
        }, true);


        /***/
    }),
    /* 300 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es6.weak-set.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var weak = __webpack_require__( /*! ./_collection-weak */ 112);
        var validate = __webpack_require__( /*! ./_validate-collection */ 45);
        var WEAK_SET = 'WeakSet';

        // 23.4 WeakSet Objects
        __webpack_require__( /*! ./_collection */ 57)(WEAK_SET, function(get) {
            return function WeakSet() {
                return get(this, arguments.length > 0 ? arguments[0] : undefined);
            };
        }, {
            // 23.4.3.1 WeakSet.prototype.add(value)
            add: function add(value) {
                return weak.def(validate(this, WEAK_SET), value, true);
            }
        }, weak, false, true);


        /***/
    }),
    /* 301 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es7.array.flat-map.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
        var $export = __webpack_require__( /*! ./_export */ 0);
        var flattenIntoArray = __webpack_require__( /*! ./_flatten-into-array */ 113);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var arraySpeciesCreate = __webpack_require__( /*! ./_array-species-create */ 73);

        $export($export.P, 'Array', {
            flatMap: function flatMap(callbackfn /* , thisArg */ ) {
                var O = toObject(this);
                var sourceLen, A;
                aFunction(callbackfn);
                sourceLen = toLength(O.length);
                A = arraySpeciesCreate(O, 0);
                flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
                return A;
            }
        });

        __webpack_require__( /*! ./_add-to-unscopables */ 31)('flatMap');


        /***/
    }),
    /* 302 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es7.array.flatten.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatten
        var $export = __webpack_require__( /*! ./_export */ 0);
        var flattenIntoArray = __webpack_require__( /*! ./_flatten-into-array */ 113);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var toInteger = __webpack_require__( /*! ./_to-integer */ 22);
        var arraySpeciesCreate = __webpack_require__( /*! ./_array-species-create */ 73);

        $export($export.P, 'Array', {
            flatten: function flatten( /* depthArg = 1 */ ) {
                var depthArg = arguments[0];
                var O = toObject(this);
                var sourceLen = toLength(O.length);
                var A = arraySpeciesCreate(O, 0);
                flattenIntoArray(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
                return A;
            }
        });

        __webpack_require__( /*! ./_add-to-unscopables */ 31)('flatten');


        /***/
    }),
    /* 303 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es7.array.includes.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/Array.prototype.includes
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $includes = __webpack_require__( /*! ./_array-includes */ 56)(true);

        $export($export.P, 'Array', {
            includes: function includes(el /* , fromIndex = 0 */ ) {
                return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
            }
        });

        __webpack_require__( /*! ./_add-to-unscopables */ 31)('includes');


        /***/
    }),
    /* 304 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./~/core-js/modules/es7.asap.js ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/rwaldron/tc39-notes/blob/master/es6/2014-09/sept-25.md#510-globalasap-for-enqueuing-a-microtask
        var $export = __webpack_require__( /*! ./_export */ 0);
        var microtask = __webpack_require__( /*! ./_microtask */ 85)();
        var process = __webpack_require__( /*! ./_global */ 2).process;
        var isNode = __webpack_require__( /*! ./_cof */ 18)(process) == 'process';

        $export($export.G, {
            asap: function asap(fn) {
                var domain = isNode && process.domain;
                microtask(domain ? domain.bind(fn) : fn);
            }
        });


        /***/
    }),
    /* 305 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es7.error.is-error.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/ljharb/proposal-is-error
        var $export = __webpack_require__( /*! ./_export */ 0);
        var cof = __webpack_require__( /*! ./_cof */ 18);

        $export($export.S, 'Error', {
            isError: function isError(it) {
                return cof(it) === 'Error';
            }
        });


        /***/
    }),
    /* 306 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/es7.global.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-global
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.G, {
            global: __webpack_require__( /*! ./_global */ 2)
        });


        /***/
    }),
    /* 307 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es7.map.from.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
        __webpack_require__( /*! ./_set-collection-from */ 65)('Map');


        /***/
    }),
    /* 308 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/es7.map.of.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
        __webpack_require__( /*! ./_set-collection-of */ 66)('Map');


        /***/
    }),
    /* 309 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.map.to-json.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P + $export.R, 'Map', {
            toJSON: __webpack_require__( /*! ./_collection-to-json */ 111)('Map')
        });


        /***/
    }),
    /* 310 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.clamp.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            clamp: function clamp(x, lower, upper) {
                return Math.min(upper, Math.max(lower, x));
            }
        });


        /***/
    }),
    /* 311 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.math.deg-per-rad.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            DEG_PER_RAD: Math.PI / 180
        });


        /***/
    }),
    /* 312 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es7.math.degrees.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);
        var RAD_PER_DEG = 180 / Math.PI;

        $export($export.S, 'Math', {
            degrees: function degrees(radians) {
                return radians * RAD_PER_DEG;
            }
        });


        /***/
    }),
    /* 313 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.math.fscale.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);
        var scale = __webpack_require__( /*! ./_math-scale */ 121);
        var fround = __webpack_require__( /*! ./_math-fround */ 119);

        $export($export.S, 'Math', {
            fscale: function fscale(x, inLow, inHigh, outLow, outHigh) {
                return fround(scale(x, inLow, inHigh, outLow, outHigh));
            }
        });


        /***/
    }),
    /* 314 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.iaddh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            iaddh: function iaddh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0;
                var $x1 = x1 >>> 0;
                var $y0 = y0 >>> 0;
                return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
            }
        });


        /***/
    }),
    /* 315 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.imulh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            imulh: function imulh(u, v) {
                var UINT16 = 0xffff;
                var $u = +u;
                var $v = +v;
                var u0 = $u & UINT16;
                var v0 = $v & UINT16;
                var u1 = $u >> 16;
                var v1 = $v >> 16;
                var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
            }
        });


        /***/
    }),
    /* 316 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.isubh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            isubh: function isubh(x0, x1, y0, y1) {
                var $x0 = x0 >>> 0;
                var $x1 = x1 >>> 0;
                var $y0 = y0 >>> 0;
                return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
            }
        });


        /***/
    }),
    /* 317 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.math.rad-per-deg.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            RAD_PER_DEG: 180 / Math.PI
        });


        /***/
    }),
    /* 318 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es7.math.radians.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);
        var DEG_PER_RAD = Math.PI / 180;

        $export($export.S, 'Math', {
            radians: function radians(degrees) {
                return degrees * DEG_PER_RAD;
            }
        });


        /***/
    }),
    /* 319 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.scale.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://rwaldron.github.io/proposal-math-extensions/
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            scale: __webpack_require__( /*! ./_math-scale */ 121)
        });


        /***/
    }),
    /* 320 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/es7.math.signbit.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // http://jfbastien.github.io/papers/Math.signbit.html
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            signbit: function signbit(x) {
                // eslint-disable-next-line no-self-compare
                return (x = +x) != x ? x : x == 0 ? 1 / x == Infinity : x > 0;
            }
        });


        /***/
    }),
    /* 321 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.math.umulh.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://gist.github.com/BrendanEich/4294d5c212a6d2254703
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'Math', {
            umulh: function umulh(u, v) {
                var UINT16 = 0xffff;
                var $u = +u;
                var $v = +v;
                var u0 = $u & UINT16;
                var v0 = $v & UINT16;
                var u1 = $u >>> 16;
                var v1 = $v >>> 16;
                var t = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
                return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
            }
        });


        /***/
    }),
    /* 322 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.object.define-getter.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var $defineProperty = __webpack_require__( /*! ./_object-dp */ 8);

        // B.2.2.2 Object.prototype.__defineGetter__(P, getter)
        __webpack_require__( /*! ./_descriptors */ 7) && $export($export.P + __webpack_require__( /*! ./_object-forced-pam */ 62), 'Object', {
            __defineGetter__: function __defineGetter__(P, getter) {
                $defineProperty.f(toObject(this), P, {
                    get: aFunction(getter),
                    enumerable: true,
                    configurable: true
                });
            }
        });


        /***/
    }),
    /* 323 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.object.define-setter.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var $defineProperty = __webpack_require__( /*! ./_object-dp */ 8);

        // B.2.2.3 Object.prototype.__defineSetter__(P, setter)
        __webpack_require__( /*! ./_descriptors */ 7) && $export($export.P + __webpack_require__( /*! ./_object-forced-pam */ 62), 'Object', {
            __defineSetter__: function __defineSetter__(P, setter) {
                $defineProperty.f(toObject(this), P, {
                    set: aFunction(setter),
                    enumerable: true,
                    configurable: true
                });
            }
        });


        /***/
    }),
    /* 324 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es7.object.entries.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $entries = __webpack_require__( /*! ./_object-to-array */ 126)(true);

        $export($export.S, 'Object', {
            entries: function entries(it) {
                return $entries(it);
            }
        });


        /***/
    }),
    /* 325 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************************!*\
      !*** ./~/core-js/modules/es7.object.get-own-property-descriptors.js ***!
      \**********************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-getownpropertydescriptors
        var $export = __webpack_require__( /*! ./_export */ 0);
        var ownKeys = __webpack_require__( /*! ./_own-keys */ 127);
        var toIObject = __webpack_require__( /*! ./_to-iobject */ 17);
        var gOPD = __webpack_require__( /*! ./_object-gopd */ 15);
        var createProperty = __webpack_require__( /*! ./_create-property */ 74);

        $export($export.S, 'Object', {
            getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
                var O = toIObject(object);
                var getDesc = gOPD.f;
                var keys = ownKeys(O);
                var result = {};
                var i = 0;
                var key, desc;
                while (keys.length > i) {
                    desc = getDesc(O, key = keys[i++]);
                    if (desc !== undefined) createProperty(result, key, desc);
                }
                return result;
            }
        });


        /***/
    }),
    /* 326 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.object.lookup-getter.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var getOwnPropertyDescriptor = __webpack_require__( /*! ./_object-gopd */ 15).f;

        // B.2.2.4 Object.prototype.__lookupGetter__(P)
        __webpack_require__( /*! ./_descriptors */ 7) && $export($export.P + __webpack_require__( /*! ./_object-forced-pam */ 62), 'Object', {
            __lookupGetter__: function __lookupGetter__(P) {
                var O = toObject(this);
                var K = toPrimitive(P, true);
                var D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.get;
                } while (O = getPrototypeOf(O));
            }
        });


        /***/
    }),
    /* 327 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.object.lookup-setter.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        var $export = __webpack_require__( /*! ./_export */ 0);
        var toObject = __webpack_require__( /*! ./_to-object */ 9);
        var toPrimitive = __webpack_require__( /*! ./_to-primitive */ 26);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var getOwnPropertyDescriptor = __webpack_require__( /*! ./_object-gopd */ 15).f;

        // B.2.2.5 Object.prototype.__lookupSetter__(P)
        __webpack_require__( /*! ./_descriptors */ 7) && $export($export.P + __webpack_require__( /*! ./_object-forced-pam */ 62), 'Object', {
            __lookupSetter__: function __lookupSetter__(P) {
                var O = toObject(this);
                var K = toPrimitive(P, true);
                var D;
                do {
                    if (D = getOwnPropertyDescriptor(O, K)) return D.set;
                } while (O = getPrototypeOf(O));
            }
        });


        /***/
    }),
    /* 328 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es7.object.values.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-object-values-entries
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $values = __webpack_require__( /*! ./_object-to-array */ 126)(false);

        $export($export.S, 'Object', {
            values: function values(it) {
                return $values(it);
            }
        });


        /***/
    }),
    /* 329 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./~/core-js/modules/es7.observable.js ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/zenparsing/es-observable
        var $export = __webpack_require__( /*! ./_export */ 0);
        var global = __webpack_require__( /*! ./_global */ 2);
        var core = __webpack_require__( /*! ./_core */ 19);
        var microtask = __webpack_require__( /*! ./_microtask */ 85)();
        var OBSERVABLE = __webpack_require__( /*! ./_wks */ 5)('observable');
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var anInstance = __webpack_require__( /*! ./_an-instance */ 35);
        var redefineAll = __webpack_require__( /*! ./_redefine-all */ 41);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var forOf = __webpack_require__( /*! ./_for-of */ 36);
        var RETURN = forOf.RETURN;

        var getMethod = function(fn) {
            return fn == null ? undefined : aFunction(fn);
        };

        var cleanupSubscription = function(subscription) {
            var cleanup = subscription._c;
            if (cleanup) {
                subscription._c = undefined;
                cleanup();
            }
        };

        var subscriptionClosed = function(subscription) {
            return subscription._o === undefined;
        };

        var closeSubscription = function(subscription) {
            if (!subscriptionClosed(subscription)) {
                subscription._o = undefined;
                cleanupSubscription(subscription);
            }
        };

        var Subscription = function(observer, subscriber) {
            anObject(observer);
            this._c = undefined;
            this._o = observer;
            observer = new SubscriptionObserver(this);
            try {
                var cleanup = subscriber(observer);
                var subscription = cleanup;
                if (cleanup != null) {
                    if (typeof cleanup.unsubscribe === 'function') cleanup = function() {
                        subscription.unsubscribe();
                    };
                    else aFunction(cleanup);
                    this._c = cleanup;
                }
            } catch (e) {
                observer.error(e);
                return;
            }
            if (subscriptionClosed(this)) cleanupSubscription(this);
        };

        Subscription.prototype = redefineAll({}, {
            unsubscribe: function unsubscribe() {
                closeSubscription(this);
            }
        });

        var SubscriptionObserver = function(subscription) {
            this._s = subscription;
        };

        SubscriptionObserver.prototype = redefineAll({}, {
            next: function next(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    try {
                        var m = getMethod(observer.next);
                        if (m) return m.call(observer, value);
                    } catch (e) {
                        try {
                            closeSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                }
            },
            error: function error(value) {
                var subscription = this._s;
                if (subscriptionClosed(subscription)) throw value;
                var observer = subscription._o;
                subscription._o = undefined;
                try {
                    var m = getMethod(observer.error);
                    if (!m) throw value;
                    value = m.call(observer, value);
                } catch (e) {
                    try {
                        cleanupSubscription(subscription);
                    } finally {
                        throw e;
                    }
                }
                cleanupSubscription(subscription);
                return value;
            },
            complete: function complete(value) {
                var subscription = this._s;
                if (!subscriptionClosed(subscription)) {
                    var observer = subscription._o;
                    subscription._o = undefined;
                    try {
                        var m = getMethod(observer.complete);
                        value = m ? m.call(observer, value) : undefined;
                    } catch (e) {
                        try {
                            cleanupSubscription(subscription);
                        } finally {
                            throw e;
                        }
                    }
                    cleanupSubscription(subscription);
                    return value;
                }
            }
        });

        var $Observable = function Observable(subscriber) {
            anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
        };

        redefineAll($Observable.prototype, {
            subscribe: function subscribe(observer) {
                return new Subscription(observer, this._f);
            },
            forEach: function forEach(fn) {
                var that = this;
                return new(core.Promise || global.Promise)(function(resolve, reject) {
                    aFunction(fn);
                    var subscription = that.subscribe({
                        next: function(value) {
                            try {
                                return fn(value);
                            } catch (e) {
                                reject(e);
                                subscription.unsubscribe();
                            }
                        },
                        error: reject,
                        complete: resolve
                    });
                });
            }
        });

        redefineAll($Observable, {
            from: function from(x) {
                var C = typeof this === 'function' ? this : $Observable;
                var method = getMethod(anObject(x)[OBSERVABLE]);
                if (method) {
                    var observable = anObject(method.call(x));
                    return observable.constructor === C ? observable : new C(function(observer) {
                        return observable.subscribe(observer);
                    });
                }
                return new C(function(observer) {
                    var done = false;
                    microtask(function() {
                        if (!done) {
                            try {
                                if (forOf(x, false, function(it) {
                                        observer.next(it);
                                        if (done) return RETURN;
                                    }) === RETURN) return;
                            } catch (e) {
                                if (done) throw e;
                                observer.error(e);
                                return;
                            }
                            observer.complete();
                        }
                    });
                    return function() {
                        done = true;
                    };
                });
            },
            of: function of () {
                for (var i = 0, l = arguments.length, items = new Array(l); i < l;) items[i] = arguments[i++];
                return new(typeof this === 'function' ? this : $Observable)(function(observer) {
                    var done = false;
                    microtask(function() {
                        if (!done) {
                            for (var j = 0; j < items.length; ++j) {
                                observer.next(items[j]);
                                if (done) return;
                            }
                            observer.complete();
                        }
                    });
                    return function() {
                        done = true;
                    };
                });
            }
        });

        hide($Observable.prototype, OBSERVABLE, function() {
            return this;
        });

        $export($export.G, {
            Observable: $Observable
        });

        __webpack_require__( /*! ./_set-species */ 42)('Observable');


        /***/
    }),
    /* 330 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************************!*\
      !*** ./~/core-js/modules/es7.promise.finally.js ***!
      \**************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";
        // https://github.com/tc39/proposal-promise-finally

        var $export = __webpack_require__( /*! ./_export */ 0);
        var core = __webpack_require__( /*! ./_core */ 19);
        var global = __webpack_require__( /*! ./_global */ 2);
        var speciesConstructor = __webpack_require__( /*! ./_species-constructor */ 55);
        var promiseResolve = __webpack_require__( /*! ./_promise-resolve */ 131);

        $export($export.P + $export.R, 'Promise', {
            'finally': function(onFinally) {
                var C = speciesConstructor(this, core.Promise || global.Promise);
                var isFunction = typeof onFinally == 'function';
                return this.then(
                    isFunction ? function(x) {
                        return promiseResolve(C, onFinally()).then(function() {
                            return x;
                        });
                    } : onFinally,
                    isFunction ? function(e) {
                        return promiseResolve(C, onFinally()).then(function() {
                            throw e;
                        });
                    } : onFinally
                );
            }
        });


        /***/
    }),
    /* 331 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.promise.try.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-promise-try
        var $export = __webpack_require__( /*! ./_export */ 0);
        var newPromiseCapability = __webpack_require__( /*! ./_new-promise-capability */ 86);
        var perform = __webpack_require__( /*! ./_perform */ 130);

        $export($export.S, 'Promise', {
            'try': function(callbackfn) {
                var promiseCapability = newPromiseCapability.f(this);
                var result = perform(callbackfn);
                (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
                return promiseCapability.promise;
            }
        });


        /***/
    }),
    /* 332 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.define-metadata.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toMetaKey = metadata.key;
        var ordinaryDefineOwnMetadata = metadata.set;

        metadata.exp({
            defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey) {
                ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
            }
        });


        /***/
    }),
    /* 333 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.delete-metadata.js ***!
      \**********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var toMetaKey = metadata.key;
        var getOrCreateMetadataMap = metadata.map;
        var store = metadata.store;

        metadata.exp({
            deleteMetadata: function deleteMetadata(metadataKey, target /* , targetKey */ ) {
                var targetKey = arguments.length < 3 ? undefined : toMetaKey(arguments[2]);
                var metadataMap = getOrCreateMetadataMap(anObject(target), targetKey, false);
                if (metadataMap === undefined || !metadataMap['delete'](metadataKey)) return false;
                if (metadataMap.size) return true;
                var targetMetadata = store.get(target);
                targetMetadata['delete'](targetKey);
                return !!targetMetadata.size || store['delete'](target);
            }
        });


        /***/
    }),
    /* 334 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.get-metadata-keys.js ***!
      \************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var Set = __webpack_require__( /*! ./es6.set */ 139);
        var from = __webpack_require__( /*! ./_array-from-iterable */ 107);
        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var ordinaryOwnMetadataKeys = metadata.keys;
        var toMetaKey = metadata.key;

        var ordinaryMetadataKeys = function(O, P) {
            var oKeys = ordinaryOwnMetadataKeys(O, P);
            var parent = getPrototypeOf(O);
            if (parent === null) return oKeys;
            var pKeys = ordinaryMetadataKeys(parent, P);
            return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
        };

        metadata.exp({
            getMetadataKeys: function getMetadataKeys(target /* , targetKey */ ) {
                return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            }
        });


        /***/
    }),
    /* 335 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.get-metadata.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var ordinaryHasOwnMetadata = metadata.has;
        var ordinaryGetOwnMetadata = metadata.get;
        var toMetaKey = metadata.key;

        var ordinaryGetMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return ordinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
        };

        metadata.exp({
            getMetadata: function getMetadata(metadataKey, target /* , targetKey */ ) {
                return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });


        /***/
    }),
    /* 336 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.get-own-metadata-keys.js ***!
      \****************************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var ordinaryOwnMetadataKeys = metadata.keys;
        var toMetaKey = metadata.key;

        metadata.exp({
            getOwnMetadataKeys: function getOwnMetadataKeys(target /* , targetKey */ ) {
                return ordinaryOwnMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey(arguments[1]));
            }
        });


        /***/
    }),
    /* 337 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.get-own-metadata.js ***!
      \***********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var ordinaryGetOwnMetadata = metadata.get;
        var toMetaKey = metadata.key;

        metadata.exp({
            getOwnMetadata: function getOwnMetadata(metadataKey, target /* , targetKey */ ) {
                return ordinaryGetOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });


        /***/
    }),
    /* 338 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.has-metadata.js ***!
      \*******************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var getPrototypeOf = __webpack_require__( /*! ./_object-gpo */ 16);
        var ordinaryHasOwnMetadata = metadata.has;
        var toMetaKey = metadata.key;

        var ordinaryHasMetadata = function(MetadataKey, O, P) {
            var hasOwn = ordinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn) return true;
            var parent = getPrototypeOf(O);
            return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
        };

        metadata.exp({
            hasMetadata: function hasMetadata(metadataKey, target /* , targetKey */ ) {
                return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });


        /***/
    }),
    /* 339 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.has-own-metadata.js ***!
      \***********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var ordinaryHasOwnMetadata = metadata.has;
        var toMetaKey = metadata.key;

        metadata.exp({
            hasOwnMetadata: function hasOwnMetadata(metadataKey, target /* , targetKey */ ) {
                return ordinaryHasOwnMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey(arguments[2]));
            }
        });


        /***/
    }),
    /* 340 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.reflect.metadata.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $metadata = __webpack_require__( /*! ./_metadata */ 29);
        var anObject = __webpack_require__( /*! ./_an-object */ 1);
        var aFunction = __webpack_require__( /*! ./_a-function */ 10);
        var toMetaKey = $metadata.key;
        var ordinaryDefineOwnMetadata = $metadata.set;

        $metadata.exp({
            metadata: function metadata(metadataKey, metadataValue) {
                return function decorator(target, targetKey) {
                    ordinaryDefineOwnMetadata(
                        metadataKey, metadataValue,
                        (targetKey !== undefined ? anObject : aFunction)(target),
                        toMetaKey(targetKey)
                    );
                };
            }
        });


        /***/
    }),
    /* 341 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./~/core-js/modules/es7.set.from.js ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
        __webpack_require__( /*! ./_set-collection-from */ 65)('Set');


        /***/
    }),
    /* 342 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/es7.set.of.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
        __webpack_require__( /*! ./_set-collection-of */ 66)('Set');


        /***/
    }),
    /* 343 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.set.to-json.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/DavidBruant/Map-Set.prototype.toJSON
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.P + $export.R, 'Set', {
            toJSON: __webpack_require__( /*! ./_collection-to-json */ 111)('Set')
        });


        /***/
    }),
    /* 344 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/es7.string.at.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/mathiasbynens/String.prototype.at
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $at = __webpack_require__( /*! ./_string-at */ 67)(true);
        var $fails = __webpack_require__( /*! ./_fails */ 3);

        var FORCED = $fails(function() {
            return '𠮷'.at(0) !== '𠮷';
        });

        $export($export.P + $export.F * FORCED, 'String', {
            at: function at(pos) {
                return $at(this, pos);
            }
        });


        /***/
    }),
    /* 345 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.string.match-all.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://tc39.github.io/String.prototype.matchAll/
        var $export = __webpack_require__( /*! ./_export */ 0);
        var defined = __webpack_require__( /*! ./_defined */ 24);
        var toLength = __webpack_require__( /*! ./_to-length */ 6);
        var isRegExp = __webpack_require__( /*! ./_is-regexp */ 60);
        var getFlags = __webpack_require__( /*! ./_flags */ 51);
        var RegExpProto = RegExp.prototype;

        var $RegExpStringIterator = function(regexp, string) {
            this._r = regexp;
            this._s = string;
        };

        __webpack_require__( /*! ./_iter-create */ 81)($RegExpStringIterator, 'RegExp String', function next() {
            var match = this._r.exec(this._s);
            return {
                value: match,
                done: match === null
            };
        });

        $export($export.P, 'String', {
            matchAll: function matchAll(regexp) {
                defined(this);
                if (!isRegExp(regexp)) throw TypeError(regexp + ' is not a regexp!');
                var S = String(this);
                var flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp);
                var rx = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
                rx.lastIndex = toLength(regexp.lastIndex);
                return new $RegExpStringIterator(rx, S);
            }
        });


        /***/
    }),
    /* 346 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./~/core-js/modules/es7.string.pad-end.js ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $pad = __webpack_require__( /*! ./_string-pad */ 133);
        var userAgent = __webpack_require__( /*! ./_user-agent */ 69);

        // https://github.com/zloirock/core-js/issues/280
        var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

        $export($export.P + $export.F * WEBKIT_BUG, 'String', {
            padEnd: function padEnd(maxLength /* , fillString = ' ' */ ) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
            }
        });


        /***/
    }),
    /* 347 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.string.pad-start.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/tc39/proposal-string-pad-start-end
        var $export = __webpack_require__( /*! ./_export */ 0);
        var $pad = __webpack_require__( /*! ./_string-pad */ 133);
        var userAgent = __webpack_require__( /*! ./_user-agent */ 69);

        // https://github.com/zloirock/core-js/issues/280
        var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

        $export($export.P + $export.F * WEBKIT_BUG, 'String', {
            padStart: function padStart(maxLength /* , fillString = ' ' */ ) {
                return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
            }
        });


        /***/
    }),
    /* 348 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************************!*\
      !*** ./~/core-js/modules/es7.string.trim-left.js ***!
      \***************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__( /*! ./_string-trim */ 49)('trimLeft', function($trim) {
            return function trimLeft() {
                return $trim(this, 1);
            };
        }, 'trimStart');


        /***/
    }),
    /* 349 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es7.string.trim-right.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        "use strict";

        // https://github.com/sebmarkbage/ecmascript-string-left-right-trim
        __webpack_require__( /*! ./_string-trim */ 49)('trimRight', function($trim) {
            return function trimRight() {
                return $trim(this, 2);
            };
        }, 'trimEnd');


        /***/
    }),
    /* 350 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************************!*\
      !*** ./~/core-js/modules/es7.symbol.async-iterator.js ***!
      \********************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_wks-define */ 95)('asyncIterator');


        /***/
    }),
    /* 351 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************************!*\
      !*** ./~/core-js/modules/es7.symbol.observable.js ***!
      \****************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./_wks-define */ 95)('observable');


        /***/
    }),
    /* 352 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es7.system.global.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://github.com/tc39/proposal-global
        var $export = __webpack_require__( /*! ./_export */ 0);

        $export($export.S, 'System', {
            global: __webpack_require__( /*! ./_global */ 2)
        });


        /***/
    }),
    /* 353 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es7.weak-map.from.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
        __webpack_require__( /*! ./_set-collection-from */ 65)('WeakMap');


        /***/
    }),
    /* 354 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.weak-map.of.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
        __webpack_require__( /*! ./_set-collection-of */ 66)('WeakMap');


        /***/
    }),
    /* 355 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./~/core-js/modules/es7.weak-set.from.js ***!
      \************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.from
        __webpack_require__( /*! ./_set-collection-from */ 65)('WeakSet');


        /***/
    }),
    /* 356 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./~/core-js/modules/es7.weak-set.of.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // https://tc39.github.io/proposal-setmap-offrom/#sec-weakset.of
        __webpack_require__( /*! ./_set-collection-of */ 66)('WeakSet');


        /***/
    }),
    /* 357 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./~/core-js/modules/web.dom.iterable.js ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $iterators = __webpack_require__( /*! ./es6.array.iterator */ 97);
        var getKeys = __webpack_require__( /*! ./_object-keys */ 39);
        var redefine = __webpack_require__( /*! ./_redefine */ 12);
        var global = __webpack_require__( /*! ./_global */ 2);
        var hide = __webpack_require__( /*! ./_hide */ 11);
        var Iterators = __webpack_require__( /*! ./_iterators */ 47);
        var wks = __webpack_require__( /*! ./_wks */ 5);
        var ITERATOR = wks('iterator');
        var TO_STRING_TAG = wks('toStringTag');
        var ArrayValues = Iterators.Array;

        var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
        };

        for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
                if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
                if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = ArrayValues;
                if (explicit)
                    for (key in $iterators)
                        if (!proto[key]) redefine(proto, key, $iterators[key], true);
            }
        }


        /***/
    }),
    /* 358 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************************!*\
      !*** ./~/core-js/modules/web.immediate.js ***!
      \********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        var $export = __webpack_require__( /*! ./_export */ 0);
        var $task = __webpack_require__( /*! ./_task */ 93);
        $export($export.G + $export.B, {
            setImmediate: $task.set,
            clearImmediate: $task.clear
        });


        /***/
    }),
    /* 359 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./~/core-js/modules/web.timers.js ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        // ie9- setTimeout & setInterval additional parameters fix
        var global = __webpack_require__( /*! ./_global */ 2);
        var $export = __webpack_require__( /*! ./_export */ 0);
        var userAgent = __webpack_require__( /*! ./_user-agent */ 69);
        var slice = [].slice;
        var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
        var wrap = function(set) {
            return function(fn, time /* , ...args */ ) {
                var boundArgs = arguments.length > 2;
                var args = boundArgs ? slice.call(arguments, 2) : false;
                return set(boundArgs ? function() {
                    // eslint-disable-next-line no-new-func
                    (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
                } : fn, time);
            };
        };
        $export($export.G + $export.B + $export.F * MSIE, {
            setTimeout: wrap(global.setTimeout),
            setInterval: wrap(global.setInterval)
        });


        /***/
    }),
    /* 360 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************!*\
      !*** ./~/core-js/shim.js ***!
      \***************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! ./modules/es6.symbol */ 288);
        __webpack_require__( /*! ./modules/es6.object.create */ 227);
        __webpack_require__( /*! ./modules/es6.object.define-property */ 229);
        __webpack_require__( /*! ./modules/es6.object.define-properties */ 228);
        __webpack_require__( /*! ./modules/es6.object.get-own-property-descriptor */ 231);
        __webpack_require__( /*! ./modules/es6.object.get-prototype-of */ 233);
        __webpack_require__( /*! ./modules/es6.object.keys */ 238);
        __webpack_require__( /*! ./modules/es6.object.get-own-property-names */ 232);
        __webpack_require__( /*! ./modules/es6.object.freeze */ 230);
        __webpack_require__( /*! ./modules/es6.object.seal */ 240);
        __webpack_require__( /*! ./modules/es6.object.prevent-extensions */ 239);
        __webpack_require__( /*! ./modules/es6.object.is-frozen */ 235);
        __webpack_require__( /*! ./modules/es6.object.is-sealed */ 236);
        __webpack_require__( /*! ./modules/es6.object.is-extensible */ 234);
        __webpack_require__( /*! ./modules/es6.object.assign */ 226);
        __webpack_require__( /*! ./modules/es6.object.is */ 237);
        __webpack_require__( /*! ./modules/es6.object.set-prototype-of */ 241);
        __webpack_require__( /*! ./modules/es6.object.to-string */ 242);
        __webpack_require__( /*! ./modules/es6.function.bind */ 194);
        __webpack_require__( /*! ./modules/es6.function.name */ 196);
        __webpack_require__( /*! ./modules/es6.function.has-instance */ 195);
        __webpack_require__( /*! ./modules/es6.parse-int */ 244);
        __webpack_require__( /*! ./modules/es6.parse-float */ 243);
        __webpack_require__( /*! ./modules/es6.number.constructor */ 214);
        __webpack_require__( /*! ./modules/es6.number.to-fixed */ 224);
        __webpack_require__( /*! ./modules/es6.number.to-precision */ 225);
        __webpack_require__( /*! ./modules/es6.number.epsilon */ 215);
        __webpack_require__( /*! ./modules/es6.number.is-finite */ 216);
        __webpack_require__( /*! ./modules/es6.number.is-integer */ 217);
        __webpack_require__( /*! ./modules/es6.number.is-nan */ 218);
        __webpack_require__( /*! ./modules/es6.number.is-safe-integer */ 219);
        __webpack_require__( /*! ./modules/es6.number.max-safe-integer */ 220);
        __webpack_require__( /*! ./modules/es6.number.min-safe-integer */ 221);
        __webpack_require__( /*! ./modules/es6.number.parse-float */ 222);
        __webpack_require__( /*! ./modules/es6.number.parse-int */ 223);
        __webpack_require__( /*! ./modules/es6.math.acosh */ 197);
        __webpack_require__( /*! ./modules/es6.math.asinh */ 198);
        __webpack_require__( /*! ./modules/es6.math.atanh */ 199);
        __webpack_require__( /*! ./modules/es6.math.cbrt */ 200);
        __webpack_require__( /*! ./modules/es6.math.clz32 */ 201);
        __webpack_require__( /*! ./modules/es6.math.cosh */ 202);
        __webpack_require__( /*! ./modules/es6.math.expm1 */ 203);
        __webpack_require__( /*! ./modules/es6.math.fround */ 204);
        __webpack_require__( /*! ./modules/es6.math.hypot */ 205);
        __webpack_require__( /*! ./modules/es6.math.imul */ 206);
        __webpack_require__( /*! ./modules/es6.math.log10 */ 207);
        __webpack_require__( /*! ./modules/es6.math.log1p */ 208);
        __webpack_require__( /*! ./modules/es6.math.log2 */ 209);
        __webpack_require__( /*! ./modules/es6.math.sign */ 210);
        __webpack_require__( /*! ./modules/es6.math.sinh */ 211);
        __webpack_require__( /*! ./modules/es6.math.tanh */ 212);
        __webpack_require__( /*! ./modules/es6.math.trunc */ 213);
        __webpack_require__( /*! ./modules/es6.string.from-code-point */ 275);
        __webpack_require__( /*! ./modules/es6.string.raw */ 280);
        __webpack_require__( /*! ./modules/es6.string.trim */ 287);
        __webpack_require__( /*! ./modules/es6.string.iterator */ 278);
        __webpack_require__( /*! ./modules/es6.string.code-point-at */ 270);
        __webpack_require__( /*! ./modules/es6.string.ends-with */ 271);
        __webpack_require__( /*! ./modules/es6.string.includes */ 276);
        __webpack_require__( /*! ./modules/es6.string.repeat */ 281);
        __webpack_require__( /*! ./modules/es6.string.starts-with */ 283);
        __webpack_require__( /*! ./modules/es6.string.anchor */ 266);
        __webpack_require__( /*! ./modules/es6.string.big */ 267);
        __webpack_require__( /*! ./modules/es6.string.blink */ 268);
        __webpack_require__( /*! ./modules/es6.string.bold */ 269);
        __webpack_require__( /*! ./modules/es6.string.fixed */ 272);
        __webpack_require__( /*! ./modules/es6.string.fontcolor */ 273);
        __webpack_require__( /*! ./modules/es6.string.fontsize */ 274);
        __webpack_require__( /*! ./modules/es6.string.italics */ 277);
        __webpack_require__( /*! ./modules/es6.string.link */ 279);
        __webpack_require__( /*! ./modules/es6.string.small */ 282);
        __webpack_require__( /*! ./modules/es6.string.strike */ 284);
        __webpack_require__( /*! ./modules/es6.string.sub */ 285);
        __webpack_require__( /*! ./modules/es6.string.sup */ 286);
        __webpack_require__( /*! ./modules/es6.date.now */ 189);
        __webpack_require__( /*! ./modules/es6.date.to-json */ 191);
        __webpack_require__( /*! ./modules/es6.date.to-iso-string */ 190);
        __webpack_require__( /*! ./modules/es6.date.to-string */ 193);
        __webpack_require__( /*! ./modules/es6.date.to-primitive */ 192);
        __webpack_require__( /*! ./modules/es6.array.is-array */ 178);
        __webpack_require__( /*! ./modules/es6.array.from */ 176);
        __webpack_require__( /*! ./modules/es6.array.of */ 182);
        __webpack_require__( /*! ./modules/es6.array.join */ 179);
        __webpack_require__( /*! ./modules/es6.array.slice */ 185);
        __webpack_require__( /*! ./modules/es6.array.sort */ 187);
        __webpack_require__( /*! ./modules/es6.array.for-each */ 175);
        __webpack_require__( /*! ./modules/es6.array.map */ 181);
        __webpack_require__( /*! ./modules/es6.array.filter */ 172);
        __webpack_require__( /*! ./modules/es6.array.some */ 186);
        __webpack_require__( /*! ./modules/es6.array.every */ 170);
        __webpack_require__( /*! ./modules/es6.array.reduce */ 184);
        __webpack_require__( /*! ./modules/es6.array.reduce-right */ 183);
        __webpack_require__( /*! ./modules/es6.array.index-of */ 177);
        __webpack_require__( /*! ./modules/es6.array.last-index-of */ 180);
        __webpack_require__( /*! ./modules/es6.array.copy-within */ 169);
        __webpack_require__( /*! ./modules/es6.array.fill */ 171);
        __webpack_require__( /*! ./modules/es6.array.find */ 174);
        __webpack_require__( /*! ./modules/es6.array.find-index */ 173);
        __webpack_require__( /*! ./modules/es6.array.species */ 188);
        __webpack_require__( /*! ./modules/es6.array.iterator */ 97);
        __webpack_require__( /*! ./modules/es6.regexp.constructor */ 260);
        __webpack_require__( /*! ./modules/es6.regexp.exec */ 137);
        __webpack_require__( /*! ./modules/es6.regexp.to-string */ 265);
        __webpack_require__( /*! ./modules/es6.regexp.flags */ 138);
        __webpack_require__( /*! ./modules/es6.regexp.match */ 261);
        __webpack_require__( /*! ./modules/es6.regexp.replace */ 262);
        __webpack_require__( /*! ./modules/es6.regexp.search */ 263);
        __webpack_require__( /*! ./modules/es6.regexp.split */ 264);
        __webpack_require__( /*! ./modules/es6.promise */ 245);
        __webpack_require__( /*! ./modules/es6.map */ 136);
        __webpack_require__( /*! ./modules/es6.set */ 139);
        __webpack_require__( /*! ./modules/es6.weak-map */ 140);
        __webpack_require__( /*! ./modules/es6.weak-set */ 300);
        __webpack_require__( /*! ./modules/es6.typed.array-buffer */ 289);
        __webpack_require__( /*! ./modules/es6.typed.data-view */ 290);
        __webpack_require__( /*! ./modules/es6.typed.int8-array */ 295);
        __webpack_require__( /*! ./modules/es6.typed.uint8-array */ 298);
        __webpack_require__( /*! ./modules/es6.typed.uint8-clamped-array */ 299);
        __webpack_require__( /*! ./modules/es6.typed.int16-array */ 293);
        __webpack_require__( /*! ./modules/es6.typed.uint16-array */ 296);
        __webpack_require__( /*! ./modules/es6.typed.int32-array */ 294);
        __webpack_require__( /*! ./modules/es6.typed.uint32-array */ 297);
        __webpack_require__( /*! ./modules/es6.typed.float32-array */ 291);
        __webpack_require__( /*! ./modules/es6.typed.float64-array */ 292);
        __webpack_require__( /*! ./modules/es6.reflect.apply */ 246);
        __webpack_require__( /*! ./modules/es6.reflect.construct */ 247);
        __webpack_require__( /*! ./modules/es6.reflect.define-property */ 248);
        __webpack_require__( /*! ./modules/es6.reflect.delete-property */ 249);
        __webpack_require__( /*! ./modules/es6.reflect.enumerate */ 250);
        __webpack_require__( /*! ./modules/es6.reflect.get */ 253);
        __webpack_require__( /*! ./modules/es6.reflect.get-own-property-descriptor */ 251);
        __webpack_require__( /*! ./modules/es6.reflect.get-prototype-of */ 252);
        __webpack_require__( /*! ./modules/es6.reflect.has */ 254);
        __webpack_require__( /*! ./modules/es6.reflect.is-extensible */ 255);
        __webpack_require__( /*! ./modules/es6.reflect.own-keys */ 256);
        __webpack_require__( /*! ./modules/es6.reflect.prevent-extensions */ 257);
        __webpack_require__( /*! ./modules/es6.reflect.set */ 259);
        __webpack_require__( /*! ./modules/es6.reflect.set-prototype-of */ 258);
        __webpack_require__( /*! ./modules/es7.array.includes */ 303);
        __webpack_require__( /*! ./modules/es7.array.flat-map */ 301);
        __webpack_require__( /*! ./modules/es7.array.flatten */ 302);
        __webpack_require__( /*! ./modules/es7.string.at */ 344);
        __webpack_require__( /*! ./modules/es7.string.pad-start */ 347);
        __webpack_require__( /*! ./modules/es7.string.pad-end */ 346);
        __webpack_require__( /*! ./modules/es7.string.trim-left */ 348);
        __webpack_require__( /*! ./modules/es7.string.trim-right */ 349);
        __webpack_require__( /*! ./modules/es7.string.match-all */ 345);
        __webpack_require__( /*! ./modules/es7.symbol.async-iterator */ 350);
        __webpack_require__( /*! ./modules/es7.symbol.observable */ 351);
        __webpack_require__( /*! ./modules/es7.object.get-own-property-descriptors */ 325);
        __webpack_require__( /*! ./modules/es7.object.values */ 328);
        __webpack_require__( /*! ./modules/es7.object.entries */ 324);
        __webpack_require__( /*! ./modules/es7.object.define-getter */ 322);
        __webpack_require__( /*! ./modules/es7.object.define-setter */ 323);
        __webpack_require__( /*! ./modules/es7.object.lookup-getter */ 326);
        __webpack_require__( /*! ./modules/es7.object.lookup-setter */ 327);
        __webpack_require__( /*! ./modules/es7.map.to-json */ 309);
        __webpack_require__( /*! ./modules/es7.set.to-json */ 343);
        __webpack_require__( /*! ./modules/es7.map.of */ 308);
        __webpack_require__( /*! ./modules/es7.set.of */ 342);
        __webpack_require__( /*! ./modules/es7.weak-map.of */ 354);
        __webpack_require__( /*! ./modules/es7.weak-set.of */ 356);
        __webpack_require__( /*! ./modules/es7.map.from */ 307);
        __webpack_require__( /*! ./modules/es7.set.from */ 341);
        __webpack_require__( /*! ./modules/es7.weak-map.from */ 353);
        __webpack_require__( /*! ./modules/es7.weak-set.from */ 355);
        __webpack_require__( /*! ./modules/es7.global */ 306);
        __webpack_require__( /*! ./modules/es7.system.global */ 352);
        __webpack_require__( /*! ./modules/es7.error.is-error */ 305);
        __webpack_require__( /*! ./modules/es7.math.clamp */ 310);
        __webpack_require__( /*! ./modules/es7.math.deg-per-rad */ 311);
        __webpack_require__( /*! ./modules/es7.math.degrees */ 312);
        __webpack_require__( /*! ./modules/es7.math.fscale */ 313);
        __webpack_require__( /*! ./modules/es7.math.iaddh */ 314);
        __webpack_require__( /*! ./modules/es7.math.isubh */ 316);
        __webpack_require__( /*! ./modules/es7.math.imulh */ 315);
        __webpack_require__( /*! ./modules/es7.math.rad-per-deg */ 317);
        __webpack_require__( /*! ./modules/es7.math.radians */ 318);
        __webpack_require__( /*! ./modules/es7.math.scale */ 319);
        __webpack_require__( /*! ./modules/es7.math.umulh */ 321);
        __webpack_require__( /*! ./modules/es7.math.signbit */ 320);
        __webpack_require__( /*! ./modules/es7.promise.finally */ 330);
        __webpack_require__( /*! ./modules/es7.promise.try */ 331);
        __webpack_require__( /*! ./modules/es7.reflect.define-metadata */ 332);
        __webpack_require__( /*! ./modules/es7.reflect.delete-metadata */ 333);
        __webpack_require__( /*! ./modules/es7.reflect.get-metadata */ 335);
        __webpack_require__( /*! ./modules/es7.reflect.get-metadata-keys */ 334);
        __webpack_require__( /*! ./modules/es7.reflect.get-own-metadata */ 337);
        __webpack_require__( /*! ./modules/es7.reflect.get-own-metadata-keys */ 336);
        __webpack_require__( /*! ./modules/es7.reflect.has-metadata */ 338);
        __webpack_require__( /*! ./modules/es7.reflect.has-own-metadata */ 339);
        __webpack_require__( /*! ./modules/es7.reflect.metadata */ 340);
        __webpack_require__( /*! ./modules/es7.asap */ 304);
        __webpack_require__( /*! ./modules/es7.observable */ 329);
        __webpack_require__( /*! ./modules/web.timers */ 359);
        __webpack_require__( /*! ./modules/web.immediate */ 358);
        __webpack_require__( /*! ./modules/web.dom.iterable */ 357);
        module.exports = __webpack_require__( /*! ./modules/_core */ 19);


        /***/
    }),
    /* 361 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./~/regenerator-runtime/runtime.js ***!
      \******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        /* WEBPACK VAR INJECTION */
        (function(global) {
            /**
             * Copyright (c) 2014, Facebook, Inc.
             * All rights reserved.
             *
             * This source code is licensed under the BSD-style license found in the
             * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
             * additional grant of patent rights can be found in the PATENTS file in
             * the same directory.
             */

            !(function(global) {
                "use strict";

                var Op = Object.prototype;
                var hasOwn = Op.hasOwnProperty;
                var undefined; // More compressible than void 0.
                var $Symbol = typeof Symbol === "function" ? Symbol : {};
                var iteratorSymbol = $Symbol.iterator || "@@iterator";
                var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
                var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

                var inModule = typeof module === "object";
                var runtime = global.regeneratorRuntime;
                if (runtime) {
                    if (inModule) {
                        // If regeneratorRuntime is defined globally and we're in a module,
                        // make the exports object identical to regeneratorRuntime.
                        module.exports = runtime;
                    }
                    // Don't bother evaluating the rest of this file if the runtime was
                    // already defined globally.
                    return;
                }

                // Define the runtime globally (as expected by generated code) as either
                // module.exports (if we're in a module) or a new, empty object.
                runtime = global.regeneratorRuntime = inModule ? module.exports : {};

                function wrap(innerFn, outerFn, self, tryLocsList) {
                    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
                    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
                    var generator = Object.create(protoGenerator.prototype);
                    var context = new Context(tryLocsList || []);

                    // The ._invoke method unifies the implementations of the .next,
                    // .throw, and .return methods.
                    generator._invoke = makeInvokeMethod(innerFn, self, context);

                    return generator;
                }
                runtime.wrap = wrap;

                // Try/catch helper to minimize deoptimizations. Returns a completion
                // record like context.tryEntries[i].completion. This interface could
                // have been (and was previously) designed to take a closure to be
                // invoked without arguments, but in all the cases we care about we
                // already have an existing method we want to call, so there's no need
                // to create a new function object. We can even get away with assuming
                // the method takes exactly one argument, since that happens to be true
                // in every case, so we don't have to touch the arguments object. The
                // only additional allocation required is the completion record, which
                // has a stable shape and so hopefully should be cheap to allocate.
                function tryCatch(fn, obj, arg) {
                    try {
                        return {
                            type: "normal",
                            arg: fn.call(obj, arg)
                        };
                    } catch (err) {
                        return {
                            type: "throw",
                            arg: err
                        };
                    }
                }

                var GenStateSuspendedStart = "suspendedStart";
                var GenStateSuspendedYield = "suspendedYield";
                var GenStateExecuting = "executing";
                var GenStateCompleted = "completed";

                // Returning this object from the innerFn has the same effect as
                // breaking out of the dispatch switch statement.
                var ContinueSentinel = {};

                // Dummy constructor functions that we use as the .constructor and
                // .constructor.prototype properties for functions that return Generator
                // objects. For full spec compliance, you may wish to configure your
                // minifier not to mangle the names of these two functions.
                function Generator() {}

                function GeneratorFunction() {}

                function GeneratorFunctionPrototype() {}

                // This is a polyfill for %IteratorPrototype% for environments that
                // don't natively support it.
                var IteratorPrototype = {};
                IteratorPrototype[iteratorSymbol] = function() {
                    return this;
                };

                var getProto = Object.getPrototypeOf;
                var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
                if (NativeIteratorPrototype &&
                    NativeIteratorPrototype !== Op &&
                    hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
                    // This environment has a native %IteratorPrototype%; use it instead
                    // of the polyfill.
                    IteratorPrototype = NativeIteratorPrototype;
                }

                var Gp = GeneratorFunctionPrototype.prototype =
                    Generator.prototype = Object.create(IteratorPrototype);
                GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
                GeneratorFunctionPrototype.constructor = GeneratorFunction;
                GeneratorFunctionPrototype[toStringTagSymbol] =
                    GeneratorFunction.displayName = "GeneratorFunction";

                // Helper for defining the .next, .throw, and .return methods of the
                // Iterator interface in terms of a single ._invoke method.
                function defineIteratorMethods(prototype) {
                    ["next", "throw", "return"].forEach(function(method) {
                        prototype[method] = function(arg) {
                            return this._invoke(method, arg);
                        };
                    });
                }

                runtime.isGeneratorFunction = function(genFun) {
                    var ctor = typeof genFun === "function" && genFun.constructor;
                    return ctor ?
                        ctor === GeneratorFunction ||
                        // For the native GeneratorFunction constructor, the best we can
                        // do is to check its .name property.
                        (ctor.displayName || ctor.name) === "GeneratorFunction" :
                        false;
                };

                runtime.mark = function(genFun) {
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
                    } else {
                        genFun.__proto__ = GeneratorFunctionPrototype;
                        if (!(toStringTagSymbol in genFun)) {
                            genFun[toStringTagSymbol] = "GeneratorFunction";
                        }
                    }
                    genFun.prototype = Object.create(Gp);
                    return genFun;
                };

                // Within the body of any async function, `await x` is transformed to
                // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
                // `hasOwn.call(value, "__await")` to determine if the yielded value is
                // meant to be awaited.
                runtime.awrap = function(arg) {
                    return {
                        __await: arg
                    };
                };

                function AsyncIterator(generator) {
                    function invoke(method, arg, resolve, reject) {
                        var record = tryCatch(generator[method], generator, arg);
                        if (record.type === "throw") {
                            reject(record.arg);
                        } else {
                            var result = record.arg;
                            var value = result.value;
                            if (value &&
                                typeof value === "object" &&
                                hasOwn.call(value, "__await")) {
                                return Promise.resolve(value.__await).then(function(value) {
                                    invoke("next", value, resolve, reject);
                                }, function(err) {
                                    invoke("throw", err, resolve, reject);
                                });
                            }

                            return Promise.resolve(value).then(function(unwrapped) {
                                // When a yielded Promise is resolved, its final value becomes
                                // the .value of the Promise<{value,done}> result for the
                                // current iteration. If the Promise is rejected, however, the
                                // result for this iteration will be rejected with the same
                                // reason. Note that rejections of yielded Promises are not
                                // thrown back into the generator function, as is the case
                                // when an awaited Promise is rejected. This difference in
                                // behavior between yield and await is important, because it
                                // allows the consumer to decide what to do with the yielded
                                // rejection (swallow it and continue, manually .throw it back
                                // into the generator, abandon iteration, whatever). With
                                // await, by contrast, there is no opportunity to examine the
                                // rejection reason outside the generator function, so the
                                // only option is to throw it from the await expression, and
                                // let the generator function handle the exception.
                                result.value = unwrapped;
                                resolve(result);
                            }, reject);
                        }
                    }

                    if (typeof global.process === "object" && global.process.domain) {
                        invoke = global.process.domain.bind(invoke);
                    }

                    var previousPromise;

                    function enqueue(method, arg) {
                        function callInvokeWithMethodAndArg() {
                            return new Promise(function(resolve, reject) {
                                invoke(method, arg, resolve, reject);
                            });
                        }

                        return previousPromise =
                            // If enqueue has been called before, then we want to wait until
                            // all previous Promises have been resolved before calling invoke,
                            // so that results are always delivered in the correct order. If
                            // enqueue has not been called before, then it is important to
                            // call invoke immediately, without waiting on a callback to fire,
                            // so that the async generator function has the opportunity to do
                            // any necessary setup in a predictable way. This predictability
                            // is why the Promise constructor synchronously invokes its
                            // executor callback, and why async functions synchronously
                            // execute code before the first await. Since we implement simple
                            // async functions in terms of async generators, it is especially
                            // important to get this right, even though it requires care.
                            previousPromise ? previousPromise.then(
                                callInvokeWithMethodAndArg,
                                // Avoid propagating failures to Promises returned by later
                                // invocations of the iterator.
                                callInvokeWithMethodAndArg
                            ) : callInvokeWithMethodAndArg();
                    }

                    // Define the unified helper method that is used to implement .next,
                    // .throw, and .return (see defineIteratorMethods).
                    this._invoke = enqueue;
                }

                defineIteratorMethods(AsyncIterator.prototype);
                AsyncIterator.prototype[asyncIteratorSymbol] = function() {
                    return this;
                };
                runtime.AsyncIterator = AsyncIterator;

                // Note that simple async functions are implemented on top of
                // AsyncIterator objects; they just return a Promise for the value of
                // the final result produced by the iterator.
                runtime.async = function(innerFn, outerFn, self, tryLocsList) {
                    var iter = new AsyncIterator(
                        wrap(innerFn, outerFn, self, tryLocsList)
                    );

                    return runtime.isGeneratorFunction(outerFn) ?
                        iter // If outerFn is a generator, return the full iterator.
                        :
                        iter.next().then(function(result) {
                            return result.done ? result.value : iter.next();
                        });
                };

                function makeInvokeMethod(innerFn, self, context) {
                    var state = GenStateSuspendedStart;

                    return function invoke(method, arg) {
                        if (state === GenStateExecuting) {
                            throw new Error("Generator is already running");
                        }

                        if (state === GenStateCompleted) {
                            if (method === "throw") {
                                throw arg;
                            }

                            // Be forgiving, per 25.3.3.3.3 of the spec:
                            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                            return doneResult();
                        }

                        context.method = method;
                        context.arg = arg;

                        while (true) {
                            var delegate = context.delegate;
                            if (delegate) {
                                var delegateResult = maybeInvokeDelegate(delegate, context);
                                if (delegateResult) {
                                    if (delegateResult === ContinueSentinel) continue;
                                    return delegateResult;
                                }
                            }

                            if (context.method === "next") {
                                // Setting context._sent for legacy support of Babel's
                                // function.sent implementation.
                                context.sent = context._sent = context.arg;

                            } else if (context.method === "throw") {
                                if (state === GenStateSuspendedStart) {
                                    state = GenStateCompleted;
                                    throw context.arg;
                                }

                                context.dispatchException(context.arg);

                            } else if (context.method === "return") {
                                context.abrupt("return", context.arg);
                            }

                            state = GenStateExecuting;

                            var record = tryCatch(innerFn, self, context);
                            if (record.type === "normal") {
                                // If an exception is thrown from innerFn, we leave state ===
                                // GenStateExecuting and loop back for another invocation.
                                state = context.done ?
                                    GenStateCompleted :
                                    GenStateSuspendedYield;

                                if (record.arg === ContinueSentinel) {
                                    continue;
                                }

                                return {
                                    value: record.arg,
                                    done: context.done
                                };

                            } else if (record.type === "throw") {
                                state = GenStateCompleted;
                                // Dispatch the exception by looping back around to the
                                // context.dispatchException(context.arg) call above.
                                context.method = "throw";
                                context.arg = record.arg;
                            }
                        }
                    };
                }

                // Call delegate.iterator[context.method](context.arg) and handle the
                // result, either by returning a { value, done } result from the
                // delegate iterator, or by modifying context.method and context.arg,
                // setting context.delegate to null, and returning the ContinueSentinel.
                function maybeInvokeDelegate(delegate, context) {
                    var method = delegate.iterator[context.method];
                    if (method === undefined) {
                        // A .throw or .return when the delegate iterator has no .throw
                        // method always terminates the yield* loop.
                        context.delegate = null;

                        if (context.method === "throw") {
                            if (delegate.iterator.return) {
                                // If the delegate iterator has a return method, give it a
                                // chance to clean up.
                                context.method = "return";
                                context.arg = undefined;
                                maybeInvokeDelegate(delegate, context);

                                if (context.method === "throw") {
                                    // If maybeInvokeDelegate(context) changed context.method from
                                    // "return" to "throw", let that override the TypeError below.
                                    return ContinueSentinel;
                                }
                            }

                            context.method = "throw";
                            context.arg = new TypeError(
                                "The iterator does not provide a 'throw' method");
                        }

                        return ContinueSentinel;
                    }

                    var record = tryCatch(method, delegate.iterator, context.arg);

                    if (record.type === "throw") {
                        context.method = "throw";
                        context.arg = record.arg;
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    var info = record.arg;

                    if (!info) {
                        context.method = "throw";
                        context.arg = new TypeError("iterator result is not an object");
                        context.delegate = null;
                        return ContinueSentinel;
                    }

                    if (info.done) {
                        // Assign the result of the finished delegate to the temporary
                        // variable specified by delegate.resultName (see delegateYield).
                        context[delegate.resultName] = info.value;

                        // Resume execution at the desired location (see delegateYield).
                        context.next = delegate.nextLoc;

                        // If context.method was "throw" but the delegate handled the
                        // exception, let the outer generator proceed normally. If
                        // context.method was "next", forget context.arg since it has been
                        // "consumed" by the delegate iterator. If context.method was
                        // "return", allow the original .return call to continue in the
                        // outer generator.
                        if (context.method !== "return") {
                            context.method = "next";
                            context.arg = undefined;
                        }

                    } else {
                        // Re-yield the result returned by the delegate method.
                        return info;
                    }

                    // The delegate iterator is finished, so forget it and continue with
                    // the outer generator.
                    context.delegate = null;
                    return ContinueSentinel;
                }

                // Define Generator.prototype.{next,throw,return} in terms of the
                // unified ._invoke helper method.
                defineIteratorMethods(Gp);

                Gp[toStringTagSymbol] = "Generator";

                // A Generator should always return itself as the iterator object when the
                // @@iterator function is called on it. Some browsers' implementations of the
                // iterator prototype chain incorrectly implement this, causing the Generator
                // object to not be returned from this call. This ensures that doesn't happen.
                // See https://github.com/facebook/regenerator/issues/274 for more details.
                Gp[iteratorSymbol] = function() {
                    return this;
                };

                Gp.toString = function() {
                    return "[object Generator]";
                };

                function pushTryEntry(locs) {
                    var entry = {
                        tryLoc: locs[0]
                    };

                    if (1 in locs) {
                        entry.catchLoc = locs[1];
                    }

                    if (2 in locs) {
                        entry.finallyLoc = locs[2];
                        entry.afterLoc = locs[3];
                    }

                    this.tryEntries.push(entry);
                }

                function resetTryEntry(entry) {
                    var record = entry.completion || {};
                    record.type = "normal";
                    delete record.arg;
                    entry.completion = record;
                }

                function Context(tryLocsList) {
                    // The root entry object (effectively a try statement without a catch
                    // or a finally block) gives us a place to store values thrown from
                    // locations where there is no enclosing try statement.
                    this.tryEntries = [{
                        tryLoc: "root"
                    }];
                    tryLocsList.forEach(pushTryEntry, this);
                    this.reset(true);
                }

                runtime.keys = function(object) {
                    var keys = [];
                    for (var key in object) {
                        keys.push(key);
                    }
                    keys.reverse();

                    // Rather than returning an object with a next method, we keep
                    // things simple and return the next function itself.
                    return function next() {
                        while (keys.length) {
                            var key = keys.pop();
                            if (key in object) {
                                next.value = key;
                                next.done = false;
                                return next;
                            }
                        }

                        // To avoid creating an additional object, we just hang the .value
                        // and .done properties off the next function object itself. This
                        // also ensures that the minifier will not anonymize the function.
                        next.done = true;
                        return next;
                    };
                };

                function values(iterable) {
                    if (iterable) {
                        var iteratorMethod = iterable[iteratorSymbol];
                        if (iteratorMethod) {
                            return iteratorMethod.call(iterable);
                        }

                        if (typeof iterable.next === "function") {
                            return iterable;
                        }

                        if (!isNaN(iterable.length)) {
                            var i = -1,
                                next = function next() {
                                    while (++i < iterable.length) {
                                        if (hasOwn.call(iterable, i)) {
                                            next.value = iterable[i];
                                            next.done = false;
                                            return next;
                                        }
                                    }

                                    next.value = undefined;
                                    next.done = true;

                                    return next;
                                };

                            return next.next = next;
                        }
                    }

                    // Return an iterator with no values.
                    return {
                        next: doneResult
                    };
                }
                runtime.values = values;

                function doneResult() {
                    return {
                        value: undefined,
                        done: true
                    };
                }

                Context.prototype = {
                    constructor: Context,

                    reset: function(skipTempReset) {
                        this.prev = 0;
                        this.next = 0;
                        // Resetting context._sent for legacy support of Babel's
                        // function.sent implementation.
                        this.sent = this._sent = undefined;
                        this.done = false;
                        this.delegate = null;

                        this.method = "next";
                        this.arg = undefined;

                        this.tryEntries.forEach(resetTryEntry);

                        if (!skipTempReset) {
                            for (var name in this) {
                                // Not sure about the optimal order of these conditions:
                                if (name.charAt(0) === "t" &&
                                    hasOwn.call(this, name) &&
                                    !isNaN(+name.slice(1))) {
                                    this[name] = undefined;
                                }
                            }
                        }
                    },

                    stop: function() {
                        this.done = true;

                        var rootEntry = this.tryEntries[0];
                        var rootRecord = rootEntry.completion;
                        if (rootRecord.type === "throw") {
                            throw rootRecord.arg;
                        }

                        return this.rval;
                    },

                    dispatchException: function(exception) {
                        if (this.done) {
                            throw exception;
                        }

                        var context = this;

                        function handle(loc, caught) {
                            record.type = "throw";
                            record.arg = exception;
                            context.next = loc;

                            if (caught) {
                                // If the dispatched exception was caught by a catch block,
                                // then let that catch block handle the exception normally.
                                context.method = "next";
                                context.arg = undefined;
                            }

                            return !!caught;
                        }

                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            var record = entry.completion;

                            if (entry.tryLoc === "root") {
                                // Exception thrown outside of any try block that could handle
                                // it, so set the completion value of the entire function to
                                // throw the exception.
                                return handle("end");
                            }

                            if (entry.tryLoc <= this.prev) {
                                var hasCatch = hasOwn.call(entry, "catchLoc");
                                var hasFinally = hasOwn.call(entry, "finallyLoc");

                                if (hasCatch && hasFinally) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    } else if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else if (hasCatch) {
                                    if (this.prev < entry.catchLoc) {
                                        return handle(entry.catchLoc, true);
                                    }

                                } else if (hasFinally) {
                                    if (this.prev < entry.finallyLoc) {
                                        return handle(entry.finallyLoc);
                                    }

                                } else {
                                    throw new Error("try statement without catch or finally");
                                }
                            }
                        }
                    },

                    abrupt: function(type, arg) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc <= this.prev &&
                                hasOwn.call(entry, "finallyLoc") &&
                                this.prev < entry.finallyLoc) {
                                var finallyEntry = entry;
                                break;
                            }
                        }

                        if (finallyEntry &&
                            (type === "break" ||
                                type === "continue") &&
                            finallyEntry.tryLoc <= arg &&
                            arg <= finallyEntry.finallyLoc) {
                            // Ignore the finally entry if control is not jumping to a
                            // location outside the try/catch block.
                            finallyEntry = null;
                        }

                        var record = finallyEntry ? finallyEntry.completion : {};
                        record.type = type;
                        record.arg = arg;

                        if (finallyEntry) {
                            this.method = "next";
                            this.next = finallyEntry.finallyLoc;
                            return ContinueSentinel;
                        }

                        return this.complete(record);
                    },

                    complete: function(record, afterLoc) {
                        if (record.type === "throw") {
                            throw record.arg;
                        }

                        if (record.type === "break" ||
                            record.type === "continue") {
                            this.next = record.arg;
                        } else if (record.type === "return") {
                            this.rval = this.arg = record.arg;
                            this.method = "return";
                            this.next = "end";
                        } else if (record.type === "normal" && afterLoc) {
                            this.next = afterLoc;
                        }

                        return ContinueSentinel;
                    },

                    finish: function(finallyLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.finallyLoc === finallyLoc) {
                                this.complete(entry.completion, entry.afterLoc);
                                resetTryEntry(entry);
                                return ContinueSentinel;
                            }
                        }
                    },

                    "catch": function(tryLoc) {
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var entry = this.tryEntries[i];
                            if (entry.tryLoc === tryLoc) {
                                var record = entry.completion;
                                if (record.type === "throw") {
                                    var thrown = record.arg;
                                    resetTryEntry(entry);
                                }
                                return thrown;
                            }
                        }

                        // The context.catch method must only be called with a location
                        // argument that corresponds to a known catch block.
                        throw new Error("illegal catch attempt");
                    },

                    delegateYield: function(iterable, resultName, nextLoc) {
                        this.delegate = {
                            iterator: values(iterable),
                            resultName: resultName,
                            nextLoc: nextLoc
                        };

                        if (this.method === "next") {
                            // Deliberately forget the last sent value so that we don't
                            // accidentally pass it on to the delegate.
                            this.arg = undefined;
                        }

                        return ContinueSentinel;
                    }
                };
            })(
                // Among the various tricks for obtaining a reference to the global
                // object, this seems to be the most reliable technique that does not
                // use indirect eval (which violates Content Security Policy).
                typeof global === "object" ? global :
                typeof window === "object" ? window :
                typeof self === "object" ? self : this
            );

            /* WEBPACK VAR INJECTION */
        }.call(exports, __webpack_require__( /*! ./../webpack/buildin/global.js */ 98)))

        /***/
    }),
    /* 362 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./src/assets/gooper_highlight.png ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "494e94d68437c75f416f96d636f7212b.png";

        /***/
    }),
    /* 363 */
    /* unknown exports provided */
    /* all exports used */
    /*!**************************************!*\
      !*** ./src/assets/goopers_prime.png ***!
      \**************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "82013919b195c4dd4c778d0c41e68315.png";

        /***/
    }),
    /* 364 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************!*\
      !*** ./src/assets/group_box.png ***!
      \**********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "5aecc92c1a92ccf1628db11f0ea0086d.png";

        /***/
    }),
    /* 365 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./src/assets/help/color.png ***!
      \***********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "5cfc27b6c1bca80614fde19ec4271337.png";

        /***/
    }),
    /* 366 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./src/assets/help/main_menu.png ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "e5a4511e0c936a70b1b65c10c5e15d94.png";

        /***/
    }),
    /* 367 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************!*\
      !*** ./src/assets/help/next.png ***!
      \**********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "74541b64ddfd164c35252958753de030.png";

        /***/
    }),
    /* 368 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./src/assets/help/number.png ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "e8af2643136ea1f93903b18d2187db34.png";

        /***/
    }),
    /* 369 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./src/assets/high_score/background.png ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "22a65b009f7809878a45ed190ec56a3b.png";

        /***/
    }),
    /* 370 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/high_score/exit.png ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "f2f5172fc8773cc6e14cb731180c6aec.png";

        /***/
    }),
    /* 371 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** ./src/assets/high_score/score_text.png ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "32c424f7fded141273ef187bf3708b78.png";

        /***/
    }),
    /* 372 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/high_score/star.png ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "852dd867c0a4f46a9c1432d9715e7896.png";

        /***/
    }),
    /* 373 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************************!*\
      !*** ./src/assets/main_menu/audio_toggle.png ***!
      \***********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "b219644acbf1e36728e3bab9e2e0c2e2.png";

        /***/
    }),
    /* 374 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************************!*\
      !*** ./src/assets/main_menu/background.png ***!
      \*********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "7a5b4b59ccd6d6ee0f2fff4150abbbc3.png";

        /***/
    }),
    /* 375 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/main_menu/color.png ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "41bfae9299f95df3ebc853d2ca77dc81.png";

        /***/
    }),
    /* 376 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./src/assets/main_menu/exit.png ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "7ed2b44b684b70020dea15247f40d02b.png";

        /***/
    }),
    /* 377 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./src/assets/main_menu/help.png ***!
      \***************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "b138876b65a8c88b02f231477247763f.png";

        /***/
    }),
    /* 378 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./src/assets/main_menu/number.png ***!
      \*****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "71dc3e713d6bc50dbc0f79c3cebd6e5a.png";

        /***/
    }),
    /* 379 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/main_menu/title.png ***!
      \****************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "e05fd7bf499e85e175046c06fed723ca.png";

        /***/
    }),
    /* 380 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************!*\
      !*** ./src/assets/numbers.png ***!
      \********************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "7333146c065b51d62cd033ea9c1709aa.png";

        /***/
    }),
    /* 381 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************!*\
      !*** ./src/assets/pooper.png ***!
      \*******************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "0e3cf9617829d3feb1172a6858919002.png";

        /***/
    }),
    /* 382 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************************!*\
      !*** ./src/assets/score_counter_background.png ***!
      \*************************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "b803d02cae159e949cef9d513ff4e329.png";

        /***/
    }),
    /* 383 */
    /* unknown exports provided */
    /* all exports used */
    /*!*******************************************!*\
      !*** ./src/assets/spread_half_circle.png ***!
      \*******************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "57dfc57c844c41a24be556b4fc805441.png";

        /***/
    }),
    /* 384 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************!*\
      !*** ./src/assets/spread_line.png ***!
      \************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "6424bb050de83cfbb4edb6a626fc18d9.png";

        /***/
    }),
    /* 385 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./src/assets/supergooper1.png ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "7786280575d93239c4c63d26312709a5.png";

        /***/
    }),
    /* 386 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./src/assets/supergooper2.png ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "1784fe2121cc48b5c1789862dcacec1f.png";

        /***/
    }),
    /* 387 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./src/assets/supergooper3.png ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "fc781e9d1cd260a6f660462868f7a4cf.png";

        /***/
    }),
    /* 388 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./src/assets/supergooper4.png ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "c0ca741047c01ec3dca657972f18932f.png";

        /***/
    }),
    /* 389 */
    /* unknown exports provided */
    /* all exports used */
    /*!*************************************!*\
      !*** ./src/assets/supergooper5.png ***!
      \*************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        module.exports = __webpack_require__.p + "ffa58675618a76c11ba6d585127d9545.png";

        /***/
    }),
    /* 390 */
    ,
    /* 391 */
    /* unknown exports provided */
    /* all exports used */
    /*!***************************************!*\
      !*** ./src/assets/goopers_prime.json ***!
      \***************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "BLUE_FROWN_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "BLUE_SMILE_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 78,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "MAUVE_FROWN_TWOEYE_COUNTER0000": {
                    "frame": {
                        "x": 156,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "MAUVE_SMILE_TWOEYE_COUNTER0000": {
                    "frame": {
                        "x": 0,
                        "y": 78,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "ORANGE_FROWN_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 78,
                        "y": 78,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "ORANGE_SMILE_TWOEYE_COUNTER0000": {
                    "frame": {
                        "x": 156,
                        "y": 78,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "PINK_FROWN_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 0,
                        "y": 156,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "PINK_SMILE_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 78,
                        "y": 156,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "PURPLE_FROWN_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 156,
                        "y": 156,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "PURPLE_SMILE_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 0,
                        "y": 234,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "RED_FROWN_ONEEYE_COUNTER0000": {
                    "frame": {
                        "x": 78,
                        "y": 234,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "RED_SMILE_TWOEYE_COUNTER0000": {
                    "frame": {
                        "x": 156,
                        "y": 234,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_BLUE_JUST_BG0000": {
                    "frame": {
                        "x": 0,
                        "y": 312,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_MAUVE_JUST_BG0000": {
                    "frame": {
                        "x": 78,
                        "y": 312,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_ORANGE_JUST_BG0000": {
                    "frame": {
                        "x": 156,
                        "y": 312,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_PINK_JUST_BG0000": {
                    "frame": {
                        "x": 0,
                        "y": 390,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_PURPLE_JUST_BG0000": {
                    "frame": {
                        "x": 78,
                        "y": 390,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                },
                "z_RED_JUST_BG0000": {
                    "frame": {
                        "x": 156,
                        "y": 390,
                        "w": 78,
                        "h": 78
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 78,
                        "h": 78
                    },
                    "sourceSize": {
                        "w": 78,
                        "h": 78
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "16.2.0.24",
                "image": "goopers_prime.png",
                "format": "RGBA8888",
                "size": {
                    "w": 256,
                    "h": 512
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 392 */
    /* unknown exports provided */
    /* all exports used */
    /*!***********************************!*\
      !*** ./src/assets/group_box.json ***!
      \***********************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "GroupBox0000": {
                    "frame": {
                        "x": 0,
                        "y": 0,
                        "w": 202,
                        "h": 142
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0001": {
                    "frame": {
                        "x": 202,
                        "y": 0,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0002": {
                    "frame": {
                        "x": 0,
                        "y": 142,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0003": {
                    "frame": {
                        "x": 200,
                        "y": 142,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0004": {
                    "frame": {
                        "x": 0,
                        "y": 282,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0005": {
                    "frame": {
                        "x": 200,
                        "y": 282,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0006": {
                    "frame": {
                        "x": 0,
                        "y": 422,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                },
                "GroupBox0007": {
                    "frame": {
                        "x": 200,
                        "y": 422,
                        "w": 200,
                        "h": 140
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 1,
                        "w": 202,
                        "h": 142
                    },
                    "sourceSize": {
                        "w": 202,
                        "h": 142
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "16.2.0.24",
                "image": "group_box.png",
                "format": "RGBA8888",
                "size": {
                    "w": 512,
                    "h": 1024
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 393 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./src/assets/high_score/exit.json ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "btn_exit0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 257,
                        "h": 139
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 257,
                        "h": 139
                    },
                    "sourceSize": {
                        "w": 257,
                        "h": 139
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "exit.png",
                "format": "RGBA8888",
                "size": {
                    "w": 261,
                    "h": 143
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 394 */
    /* unknown exports provided */
    /* all exports used */
    /*!************************************************!*\
      !*** ./src/assets/main_menu/audio_toggle.json ***!
      \************************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "btn_audio0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 100,
                        "h": 100
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 100
                    },
                    "sourceSize": {
                        "w": 100,
                        "h": 100
                    }
                },
                "btn_audio0001": {
                    "frame": {
                        "x": 2,
                        "y": 102,
                        "w": 100,
                        "h": 100
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 100
                    },
                    "sourceSize": {
                        "w": 100,
                        "h": 100
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "audio_toggle.png",
                "format": "RGBA8888",
                "size": {
                    "w": 104,
                    "h": 204
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 395 */
    /* unknown exports provided */
    /* all exports used */
    /*!*****************************************!*\
      !*** ./src/assets/main_menu/color.json ***!
      \*****************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "btn_color0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 257,
                        "h": 139
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 257,
                        "h": 139
                    },
                    "sourceSize": {
                        "w": 257,
                        "h": 139
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "color.png",
                "format": "RGBA8888",
                "size": {
                    "w": 261,
                    "h": 143
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 396 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/main_menu/exit.json ***!
      \****************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "blt_close0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 100,
                        "h": 100
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 100,
                        "h": 100
                    },
                    "sourceSize": {
                        "w": 100,
                        "h": 100
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "exit.png",
                "format": "RGBA8888",
                "size": {
                    "w": 104,
                    "h": 104
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 397 */
    /* unknown exports provided */
    /* all exports used */
    /*!****************************************!*\
      !*** ./src/assets/main_menu/help.json ***!
      \****************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "btn_help0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 257,
                        "h": 139
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 257,
                        "h": 139
                    },
                    "sourceSize": {
                        "w": 257,
                        "h": 139
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "help.png",
                "format": "RGBA8888",
                "size": {
                    "w": 261,
                    "h": 143
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 398 */
    /* unknown exports provided */
    /* all exports used */
    /*!******************************************!*\
      !*** ./src/assets/main_menu/number.json ***!
      \******************************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "btn_number0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 257,
                        "h": 139
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 257,
                        "h": 139
                    },
                    "sourceSize": {
                        "w": 257,
                        "h": 139
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "number.png",
                "format": "RGBA8888",
                "size": {
                    "w": 261,
                    "h": 143
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 399 */
    /* unknown exports provided */
    /* all exports used */
    /*!*********************************!*\
      !*** ./src/assets/numbers.json ***!
      \*********************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "NumberAtlas0000": {
                    "frame": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0001": {
                    "frame": {
                        "x": 18,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0002": {
                    "frame": {
                        "x": 36,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0003": {
                    "frame": {
                        "x": 0,
                        "y": 32,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0004": {
                    "frame": {
                        "x": 18,
                        "y": 32,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0005": {
                    "frame": {
                        "x": 36,
                        "y": 32,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0006": {
                    "frame": {
                        "x": 0,
                        "y": 64,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0007": {
                    "frame": {
                        "x": 18,
                        "y": 64,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                },
                "NumberAtlas0008": {
                    "frame": {
                        "x": 36,
                        "y": 64,
                        "w": 18,
                        "h": 32
                    },
                    "rotated": false,
                    "trimmed": false,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 18,
                        "h": 32
                    },
                    "sourceSize": {
                        "w": 18,
                        "h": 32
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.2.126",
                "image": "numbers.png",
                "format": "RGBA8888",
                "size": {
                    "w": 54,
                    "h": 96
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 400 */
    /* unknown exports provided */
    /* all exports used */
    /*!********************************!*\
      !*** ./src/assets/pooper.json ***!
      \********************************/
    /***/
    (function(module, exports) {

        module.exports = {
            "frames": {
                "Pooper0000": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0001": {
                    "frame": {
                        "x": 74,
                        "y": 2,
                        "w": 73,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0002": {
                    "frame": {
                        "x": 147,
                        "y": 2,
                        "w": 74,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0003": {
                    "frame": {
                        "x": 2,
                        "y": 75,
                        "w": 74,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0004": {
                    "frame": {
                        "x": 76,
                        "y": 75,
                        "w": 74,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0005": {
                    "frame": {
                        "x": 150,
                        "y": 75,
                        "w": 74,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0006": {
                    "frame": {
                        "x": 2,
                        "y": 148,
                        "w": 74,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 0,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0007": {
                    "frame": {
                        "x": 76,
                        "y": 148,
                        "w": 73,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0008": {
                    "frame": {
                        "x": 149,
                        "y": 148,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0009": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0010": {
                    "frame": {
                        "x": 2,
                        "y": 221,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0011": {
                    "frame": {
                        "x": 74,
                        "y": 221,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0012": {
                    "frame": {
                        "x": 146,
                        "y": 221,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0013": {
                    "frame": {
                        "x": 2,
                        "y": 294,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0014": {
                    "frame": {
                        "x": 74,
                        "y": 294,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0015": {
                    "frame": {
                        "x": 146,
                        "y": 294,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0016": {
                    "frame": {
                        "x": 2,
                        "y": 367,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0017": {
                    "frame": {
                        "x": 74,
                        "y": 367,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0018": {
                    "frame": {
                        "x": 146,
                        "y": 367,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                },
                "Pooper0019": {
                    "frame": {
                        "x": 2,
                        "y": 2,
                        "w": 72,
                        "h": 73
                    },
                    "rotated": false,
                    "trimmed": true,
                    "spriteSourceSize": {
                        "x": 1,
                        "y": 0,
                        "w": 74,
                        "h": 73
                    },
                    "sourceSize": {
                        "w": 74,
                        "h": 73
                    }
                }
            },
            "meta": {
                "app": "Adobe Animate",
                "version": "18.0.1.115",
                "image": "pooper.png",
                "format": "RGBA8888",
                "size": {
                    "w": 226,
                    "h": 442
                },
                "scale": "1"
            }
        }

        /***/
    }),
    /* 401 */
    /* unknown exports provided */
    /* all exports used */
    /*!**********************************************!*\
      !*** multi babel-polyfill ./src/js/index.js ***!
      \**********************************************/
    /***/
    (function(module, exports, __webpack_require__) {

        __webpack_require__( /*! babel-polyfill */ 142);
        module.exports = __webpack_require__( /*! /home/ubuntu/workspace/digit_game-begooped_v1.6.x/src/js/index.js */ 141);


        /***/
    })
], [401]);