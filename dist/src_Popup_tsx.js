"use strict";
(self["webpackChunkreact_rust_test"] = self["webpackChunkreact_rust_test"] || []).push([["src_Popup_tsx"],{

/***/ "./src/Popup.tsx":
/*!***********************!*\
  !*** ./src/Popup.tsx ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! wasm-game-of-life */ "./wasm-game-of-life/pkg/wasm_game_of_life.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__]);
wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__.greet();
var Popup = function () {
    var pre = document.getElementById("game-of-life-canvas");
    var universe = wasm_game_of_life__WEBPACK_IMPORTED_MODULE_2__.Universe.new();
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(universe.render()), uni = _a[0], setUni = _a[1];
    var renderLoop = function () {
        setUni(universe.render());
        universe.tick();
        requestAnimationFrame(renderLoop);
    };
    requestAnimationFrame(renderLoop);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("pre", { id: "" }, uni),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", { src: "./bootstrap.js" })));
};
react_dom__WEBPACK_IMPORTED_MODULE_1__.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Popup, null), document.getElementById("root"));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./wasm-game-of-life/pkg/wasm_game_of_life.js":
/*!****************************************************!*\
  !*** ./wasm-game-of-life/pkg/wasm_game_of_life.js ***!
  \****************************************************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.Cell),
/* harmony export */   Universe: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.Universe),
/* harmony export */   __wbg_alert_d3b6e8db27c82dfa: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_alert_d3b6e8db27c82dfa),
/* harmony export */   __wbg_set_wasm: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_throw),
/* harmony export */   greet: () => (/* reexport safe */ _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.greet)
/* harmony export */ });
/* harmony import */ var _wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wasm_game_of_life_bg.wasm */ "./wasm-game-of-life/pkg/wasm_game_of_life_bg.wasm");
/* harmony import */ var _wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ "./wasm-game-of-life/pkg/wasm_game_of_life_bg.js");
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__]);
_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



(0,_wasm_game_of_life_bg_js__WEBPACK_IMPORTED_MODULE_0__.__wbg_set_wasm)(_wasm_game_of_life_bg_wasm__WEBPACK_IMPORTED_MODULE_1__);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./wasm-game-of-life/pkg/wasm_game_of_life_bg.js":
/*!*******************************************************!*\
  !*** ./wasm-game-of-life/pkg/wasm_game_of_life_bg.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cell: () => (/* binding */ Cell),
/* harmony export */   Universe: () => (/* binding */ Universe),
/* harmony export */   __wbg_alert_d3b6e8db27c82dfa: () => (/* binding */ __wbg_alert_d3b6e8db27c82dfa),
/* harmony export */   __wbg_set_wasm: () => (/* binding */ __wbg_set_wasm),
/* harmony export */   __wbindgen_throw: () => (/* binding */ __wbindgen_throw),
/* harmony export */   greet: () => (/* binding */ greet)
/* harmony export */ });
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}

function greet() {
    wasm.greet();
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error(`expected a number argument, found ${typeof(n)}`);
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

const Cell = Object.freeze({ Dead:0,"0":"Dead",Alive:1,"1":"Alive", });

const UniverseFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_universe_free(ptr >>> 0, 1));

class Universe {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        ptr = ptr >>> 0;
        const obj = Object.create(Universe.prototype);
        obj.__wbg_ptr = ptr;
        UniverseFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        UniverseFinalization.unregister(this);
        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_universe_free(ptr, 0);
    }
    tick() {
        if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.__wbg_ptr);
        wasm.universe_tick(this.__wbg_ptr);
    }
    /**
     * @returns {Universe}
     */
    static new() {
        const ret = wasm.universe_new();
        return Universe.__wrap(ret);
    }
    /**
     * @returns {string}
     */
    render() {
        let deferred1_0;
        let deferred1_1;
        try {
            if (this.__wbg_ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.__wbg_ptr);
            wasm.universe_render(retptr, this.__wbg_ptr);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            deferred1_0 = r0;
            deferred1_1 = r1;
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}

function __wbg_alert_d3b6e8db27c82dfa() { return logError(function (arg0, arg1) {
    alert(getStringFromWasm0(arg0, arg1));
}, arguments) };

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};



/***/ }),

/***/ "./wasm-game-of-life/pkg/wasm_game_of_life_bg.wasm":
/*!*********************************************************!*\
  !*** ./wasm-game-of-life/pkg/wasm_game_of_life_bg.wasm ***!
  \*********************************************************/
/***/ ((module, exports, __webpack_require__) => {

/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./wasm_game_of_life_bg.js */ "./wasm-game-of-life/pkg/wasm_game_of_life_bg.js");
module.exports = __webpack_require__.v(exports, module.id, "bb6c7c20b4bab9b1343a", {
	"./wasm_game_of_life_bg.js": {
		"__wbg_alert_d3b6e8db27c82dfa": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_d3b6e8db27c82dfa,
		"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw
	}
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX1BvcHVwX3RzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNsQjtBQUNTO0FBQ0c7QUFFN0Msb0RBQVUsRUFBRSxDQUFDO0FBRWIsSUFBTSxLQUFLLEdBQWE7SUFFcEIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzNELElBQU0sUUFBUSxHQUFHLHVEQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsU0FBZ0IsK0NBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBMUMsR0FBRyxVQUFFLE1BQU0sUUFBK0IsQ0FBQztJQUVsRCxJQUFNLFVBQVUsR0FBRztRQUNmLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUMxQixRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFaEIscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEMsQ0FBQyxDQUFDO0lBRUYscUJBQXFCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFFbEMsT0FBTyxDQUNIO1FBQ0ksb0VBQUssRUFBRSxFQUFDLEVBQUUsSUFBRyxHQUFHLENBQVE7UUFDeEIsdUVBQVEsR0FBRyxFQUFDLGdCQUFnQixHQUFVLENBQ3BDLENBQ1QsQ0FBQztBQUNOLENBQUMsQ0FBQztBQUVGLDZDQUFlLENBQUMsMkRBQUMsS0FBSyxPQUFHLEVBQUUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QlI7QUFDVjtBQUNpQjtBQUMzRCx3RUFBYyxDQUFDLHVEQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIbkI7QUFDTztBQUNQO0FBQ0E7OztBQUdBOztBQUVBLG9EQUFvRCw4QkFBOEI7O0FBRWxGOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLCtDQUErQyxVQUFVLGNBQWMsUUFBUTtBQUMvRSxjQUFjO0FBQ2Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxxRkFBcUYsVUFBVTtBQUMvRjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sNkJBQTZCLHdDQUF3Qzs7QUFFNUU7QUFDQSxRQUFRLGtCQUFrQjtBQUMxQjs7QUFFTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sMENBQTBDO0FBQ2pEO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWFjdC1ydXN0LXRlc3QvLi9zcmMvUG9wdXAudHN4Iiwid2VicGFjazovL3JlYWN0LXJ1c3QtdGVzdC8uL3dhc20tZ2FtZS1vZi1saWZlL3BrZy93YXNtX2dhbWVfb2ZfbGlmZS5qcyIsIndlYnBhY2s6Ly9yZWFjdC1ydXN0LXRlc3QvLi93YXNtLWdhbWUtb2YtbGlmZS9wa2cvd2FzbV9nYW1lX29mX2xpZmVfYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBSZWFjdERPTSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgKiBhcyB3YXNtIGZyb20gXCJ3YXNtLWdhbWUtb2YtbGlmZVwiO1xuaW1wb3J0IHsgVW5pdmVyc2UgfSBmcm9tIFwid2FzbS1nYW1lLW9mLWxpZmVcIjtcblxud2FzbS5ncmVldCgpO1xuXG5jb25zdCBQb3B1cDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtb2YtbGlmZS1jYW52YXNcIik7XG4gICAgY29uc3QgdW5pdmVyc2UgPSBVbml2ZXJzZS5uZXcoKTtcbiAgICBjb25zdCBbdW5pLCBzZXRVbmldID0gdXNlU3RhdGUodW5pdmVyc2UucmVuZGVyKCkpO1xuXG4gICAgY29uc3QgcmVuZGVyTG9vcCA9ICgpID0+IHtcbiAgICAgICAgc2V0VW5pKHVuaXZlcnNlLnJlbmRlcigpKTtcbiAgICAgICAgdW5pdmVyc2UudGljaygpO1xuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXJMb29wKTtcbiAgICB9O1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlckxvb3ApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwcmUgaWQ9XCJcIj57IHVuaSB9PC9wcmU+XG4gICAgICAgICAgICA8c2NyaXB0IHNyYz1cIi4vYm9vdHN0cmFwLmpzXCI+PC9zY3JpcHQ+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuXG5SZWFjdERPTS5yZW5kZXIoPFBvcHVwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvb3RcIikpO1xuIiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi93YXNtX2dhbWVfb2ZfbGlmZV9iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi93YXNtX2dhbWVfb2ZfbGlmZV9iZy5qc1wiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi93YXNtX2dhbWVfb2ZfbGlmZV9iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7IiwibGV0IHdhc207XG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X3dhc20odmFsKSB7XG4gICAgd2FzbSA9IHZhbDtcbn1cblxuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbnVsbDtcblxuZnVuY3Rpb24gZ2V0VWludDhBcnJheU1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuZnVuY3Rpb24gbG9nRXJyb3IoZiwgYXJncykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgbGV0IGVycm9yID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFcnJvciA/IGAke2UubWVzc2FnZX1cXG5cXG5TdGFjazpcXG4ke2Uuc3RhY2t9YCA6IGUudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gY2F0Y2goXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIjxmYWlsZWQgdG8gc3RyaW5naWZ5IHRocm93biB2YWx1ZT5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSgpKTtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIndhc20tYmluZGdlbjogaW1wb3J0ZWQgSlMgZnVuY3Rpb24gdGhhdCB3YXMgbm90IG1hcmtlZCBhcyBgY2F0Y2hgIHRocmV3IGFuIGVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHRocm93IGU7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ3JlZXQoKSB7XG4gICAgd2FzbS5ncmVldCgpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0TnVtKG4pIHtcbiAgICBpZiAodHlwZW9mKG4pICE9PSAnbnVtYmVyJykgdGhyb3cgbmV3IEVycm9yKGBleHBlY3RlZCBhIG51bWJlciBhcmd1bWVudCwgZm91bmQgJHt0eXBlb2Yobil9YCk7XG59XG5cbmxldCBjYWNoZWREYXRhVmlld01lbW9yeTAgPSBudWxsO1xuXG5mdW5jdGlvbiBnZXREYXRhVmlld01lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZERhdGFWaWV3TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWREYXRhVmlld01lbW9yeTAuYnVmZmVyLmRldGFjaGVkID09PSB0cnVlIHx8IChjYWNoZWREYXRhVmlld01lbW9yeTAuYnVmZmVyLmRldGFjaGVkID09PSB1bmRlZmluZWQgJiYgY2FjaGVkRGF0YVZpZXdNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSkge1xuICAgICAgICBjYWNoZWREYXRhVmlld01lbW9yeTAgPSBuZXcgRGF0YVZpZXcod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZERhdGFWaWV3TWVtb3J5MDtcbn1cblxuZXhwb3J0IGNvbnN0IENlbGwgPSBPYmplY3QuZnJlZXplKHsgRGVhZDowLFwiMFwiOlwiRGVhZFwiLEFsaXZlOjEsXCIxXCI6XCJBbGl2ZVwiLCB9KTtcblxuY29uc3QgVW5pdmVyc2VGaW5hbGl6YXRpb24gPSAodHlwZW9mIEZpbmFsaXphdGlvblJlZ2lzdHJ5ID09PSAndW5kZWZpbmVkJylcbiAgICA/IHsgcmVnaXN0ZXI6ICgpID0+IHt9LCB1bnJlZ2lzdGVyOiAoKSA9PiB7fSB9XG4gICAgOiBuZXcgRmluYWxpemF0aW9uUmVnaXN0cnkocHRyID0+IHdhc20uX193YmdfdW5pdmVyc2VfZnJlZShwdHIgPj4+IDAsIDEpKTtcblxuZXhwb3J0IGNsYXNzIFVuaXZlcnNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Nhbm5vdCBpbnZva2UgYG5ld2AgZGlyZWN0bHknKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgX193cmFwKHB0cikge1xuICAgICAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgICAgIGNvbnN0IG9iaiA9IE9iamVjdC5jcmVhdGUoVW5pdmVyc2UucHJvdG90eXBlKTtcbiAgICAgICAgb2JqLl9fd2JnX3B0ciA9IHB0cjtcbiAgICAgICAgVW5pdmVyc2VGaW5hbGl6YXRpb24ucmVnaXN0ZXIob2JqLCBvYmouX193YmdfcHRyLCBvYmopO1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cblxuICAgIF9fZGVzdHJveV9pbnRvX3JhdygpIHtcbiAgICAgICAgY29uc3QgcHRyID0gdGhpcy5fX3diZ19wdHI7XG4gICAgICAgIHRoaXMuX193YmdfcHRyID0gMDtcbiAgICAgICAgVW5pdmVyc2VGaW5hbGl6YXRpb24udW5yZWdpc3Rlcih0aGlzKTtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBmcmVlKCkge1xuICAgICAgICBjb25zdCBwdHIgPSB0aGlzLl9fZGVzdHJveV9pbnRvX3JhdygpO1xuICAgICAgICB3YXNtLl9fd2JnX3VuaXZlcnNlX2ZyZWUocHRyLCAwKTtcbiAgICB9XG4gICAgdGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuX193YmdfcHRyID09IDApIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICBfYXNzZXJ0TnVtKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgd2FzbS51bml2ZXJzZV90aWNrKHRoaXMuX193YmdfcHRyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge1VuaXZlcnNlfVxuICAgICAqL1xuICAgIHN0YXRpYyBuZXcoKSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20udW5pdmVyc2VfbmV3KCk7XG4gICAgICAgIHJldHVybiBVbml2ZXJzZS5fX3dyYXAocmV0KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQHJldHVybnMge3N0cmluZ31cbiAgICAgKi9cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBkZWZlcnJlZDFfMDtcbiAgICAgICAgbGV0IGRlZmVycmVkMV8xO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX193YmdfcHRyID09IDApIHRocm93IG5ldyBFcnJvcignQXR0ZW1wdCB0byB1c2UgYSBtb3ZlZCB2YWx1ZScpO1xuICAgICAgICAgICAgY29uc3QgcmV0cHRyID0gd2FzbS5fX3diaW5kZ2VuX2FkZF90b19zdGFja19wb2ludGVyKC0xNik7XG4gICAgICAgICAgICBfYXNzZXJ0TnVtKHRoaXMuX193YmdfcHRyKTtcbiAgICAgICAgICAgIHdhc20udW5pdmVyc2VfcmVuZGVyKHJldHB0ciwgdGhpcy5fX3diZ19wdHIpO1xuICAgICAgICAgICAgdmFyIHIwID0gZ2V0RGF0YVZpZXdNZW1vcnkwKCkuZ2V0SW50MzIocmV0cHRyICsgNCAqIDAsIHRydWUpO1xuICAgICAgICAgICAgdmFyIHIxID0gZ2V0RGF0YVZpZXdNZW1vcnkwKCkuZ2V0SW50MzIocmV0cHRyICsgNCAqIDEsIHRydWUpO1xuICAgICAgICAgICAgZGVmZXJyZWQxXzAgPSByMDtcbiAgICAgICAgICAgIGRlZmVycmVkMV8xID0gcjE7XG4gICAgICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHIwLCByMSk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICB3YXNtLl9fd2JpbmRnZW5fYWRkX3RvX3N0YWNrX3BvaW50ZXIoMTYpO1xuICAgICAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoZGVmZXJyZWQxXzAsIGRlZmVycmVkMV8xLCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FsZXJ0X2QzYjZlOGRiMjdjODJkZmEoKSB7IHJldHVybiBsb2dFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGFsZXJ0KGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX3Rocm93KGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==