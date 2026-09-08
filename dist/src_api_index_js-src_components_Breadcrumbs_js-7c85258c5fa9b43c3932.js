"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_api_index_js-src_components_Breadcrumbs_js"],{

/***/ "./src/api/index.js"
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useFruitDataReduxVer: () => (/* reexport safe */ _api_useFruitDataReduxVer__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   useFruitsData: () => (/* reexport safe */ _useFruitsData__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   useFruitsDataWithoutRedux: () => (/* reexport safe */ _useFruitsDataWithoutRedux__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   useSpotsData: () => (/* reexport safe */ _useSpotsData__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _useFruitsData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useFruitsData */ "./src/api/useFruitsData.js");
/* harmony import */ var _useFruitsDataWithoutRedux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useFruitsDataWithoutRedux */ "./src/api/useFruitsDataWithoutRedux.js");
/* harmony import */ var _useSpotsData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useSpotsData */ "./src/api/useSpotsData.js");
/* harmony import */ var _api_useFruitDataReduxVer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/useFruitDataReduxVer */ "./src/api/useFruitDataReduxVer.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






/* import usePromotionsData from './usePromotionsData'
import useTicketsData from './useTicketsData'
import useToursData from './useToursData'
import useSocialMediasData from './useSocialMediasData'
import usePublicationsData from './usePublicationsData'
import useToursData from './useToursData'
import useEventsData from './useEventsData'
import useAttractionsData from './useAttractionsData' 
import useWeatherData from './useWeatherData'*/



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/api/useFruitDataReduxVer.js"
/*!*****************************************!*\
  !*** ./src/api/useFruitDataReduxVer.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_1__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
;

var useFruitDataReduxVer = function useFruitDataReduxVer(_ref) {
  _s2();
  _s();
  var lang = _ref.lang,
    id = _ref.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!id) return;
    fetch("/_api/zh-tw/fruit?id=".concat(id), {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref2) {
      var success = _ref2.success,
        data = _ref2.data;
      if (success) {
        setData(data);
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
          title: data.toString(),
          icon: 'info'
        });
      }
    })["catch"](function (error) {
      sweetalert__WEBPACK_IMPORTED_MODULE_1___default()({
        title: '錯誤',
        text: error.message,
        icon: 'error'
      });
    });
  }, [id]);
  return {
    data: data
  };
};
_s2(useFruitDataReduxVer, "tI2Yw2SRoosw9pK9cWqe8e9ln4A=");
_s(useFruitDataReduxVer, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFruitDataReduxVer);

/*import { useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { fetchFruitData } from 'store/fruitSliceReduxVer'
import { useParams } from 'react-router-dom'

const useFruitDataReduxVer = ({ lang }) => {
    const { id } = useParams()
    const data = useSelector(
        (state) => state.fruitSliceReduxVer?.[lang],
        shallowEqual
    )
    const dispatch = useDispatch()
    useEffect(() => {
        if (!data) {
            dispatch(fetchFruitData({ lang, id }))
        }
    }, [lang, id])
    return { data }
}

export default useFruitDataReduxVer*/

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/api/useFruitsData.js"
/*!**********************************!*\
  !*** ./src/api/useFruitsData.js ***!
  \**********************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_fruitsSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/fruitsSlice */ "./src/store/fruitsSlice.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();



var useFruitsData = function useFruitsData(_ref) {
  _s2();
  _s();
  var lang = _ref.lang;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var data = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    var _state$fruitsData;
    return (_state$fruitsData = state.fruitsData) === null || _state$fruitsData === void 0 ? void 0 : _state$fruitsData[lang];
  }, react_redux__WEBPACK_IMPORTED_MODULE_1__.shallowEqual);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!data) {
      dispatch((0,store_fruitsSlice__WEBPACK_IMPORTED_MODULE_2__.fetchFruitsData)(lang));
    }
  }, [data, lang]);
  return data;
};
_s2(useFruitsData, "8ZSi0OBRHkt2uIn6fVrA7mYaxeA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
_s(useFruitsData, "8ZSi0OBRHkt2uIn6fVrA7mYaxeA=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch, react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector];
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFruitsData);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/api/useFruitsDataWithoutRedux.js"
/*!**********************************************!*\
  !*** ./src/api/useFruitsDataWithoutRedux.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var constants_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! constants/utils */ "./src/constants/utils.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
;

var makeMonthNames = function makeMonthNames(value) {
  var arr = [];
  Object.keys(constants_utils__WEBPACK_IMPORTED_MODULE_1__.MONTHS_MAP).forEach(function (k) {
    k *= 1; // 將 k 字串轉換成數字
    if ((value & k) === k) {
      arr.push(constants_utils__WEBPACK_IMPORTED_MODULE_1__.MONTHS_MAP[k]);
    }
  });
  return arr;
};
var useFruitsDataWithoutRedux = function useFruitsDataWithoutRedux() {
  _s2();
  _s();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch('/_api/zh-tw/fruit', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref) {
      var success = _ref.success,
        data = _ref.data;
      if (success) {
        data.forEach(function (item) {
          item.cover = item.images && item.images.find(function (item) {
            return item.isCover;
          }) && item.images.find(function (item) {
            return item.isCover;
          }).url || item.images && item.images.length > 0 && item.images[0].url || "".concat("/fruits-travel", "/images/not-found/miss.jpg");
          item.months = makeMonthNames(item.months);
        });
        setData(data);
      }
    })["catch"](console.error);
  }, []);
  return data;
};
_s2(useFruitsDataWithoutRedux, "tI2Yw2SRoosw9pK9cWqe8e9ln4A=");
_s(useFruitsDataWithoutRedux, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useFruitsDataWithoutRedux);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/api/useSpotsData.js"
/*!*********************************!*\
  !*** ./src/api/useSpotsData.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
;

var makeSpotTypes = function makeSpotTypes(value) {
  var SPOT_TYPE_MAP = {
    0: '農遊點',
    1: '休閒農場',
    2: '田媽媽'
  };
  var arr = [];
  if (value === 0) {
    return [0];
  }
  Object.keys(SPOT_TYPE_MAP).forEach(function (k) {
    k *= 1;
    if ((value & k) == k) {
      arr.push(k);
    }
  });
  return arr;
};
var useSpotsData = function useSpotsData(_ref) {
  _s2();
  _s();
  var lang = _ref.lang;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    fruit = _useState4[0],
    setFruit = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState6 = _slicedToArray(_useState5, 2),
    county = _useState6[0],
    setCounty = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    allSpot = _useState8[0],
    setAllSpot = _useState8[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var dataArea, spotsResponse, fruitsResponse, dataSpots, fetchedCounty, fetchedFruit, AllSpot;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              _context.n = 1;
              return fetch('/_api/zh-tw/leisure-agriculture-area', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }).then(function (resp) {
                return resp.json();
              }).then(function (_ref3) {
                var success = _ref3.success,
                  data = _ref3.data;
                return data;
              });
            case 1:
              dataArea = _context.v;
              _context.n = 2;
              return fetch('/_api/zh-tw/agri-spots', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }).then(function (resp) {
                return resp.json();
              });
            case 2:
              spotsResponse = _context.v;
              _context.n = 3;
              return fetch('/_api/zh-tw/souvenirs', {
                headers: {
                  'X-Requested-With': 'XMLHttpRequest'
                }
              }).then(function (resp) {
                return resp.json();
              });
            case 3:
              fruitsResponse = _context.v;
              dataSpots = spotsResponse.data;
              fetchedCounty = spotsResponse.county;
              fetchedFruit = fruitsResponse.fruit;
              AllSpot = [].concat(_toConsumableArray(dataArea), _toConsumableArray(dataSpots));
              setAllSpot(AllSpot);
              if (AllSpot) {
                AllSpot.forEach(function (item) {
                  var _item$images, _item$images2;
                  item.cover = ((_item$images = item.images) === null || _item$images === void 0 || (_item$images = _item$images.find(function (item) {
                    return item.images;
                  })) === null || _item$images === void 0 ? void 0 : _item$images.url) || ((_item$images2 = item.images) === null || _item$images2 === void 0 || (_item$images2 = _item$images2[0]) === null || _item$images2 === void 0 ? void 0 : _item$images2.url) || "".concat("/fruits-travel", "/images/not-found/miss.jpg");
                  item.typeIds = makeSpotTypes(item.type);
                  if (item.typeIds.includes(0)) {
                    item.url = "https://ezgo.ardswc.gov.tw/zh-tw/leisure-area/".concat(item.id);
                  }
                  if (item.typeIds.includes(1)) {
                    item.url = "https://ezgo.ardswc.gov.tw/zh-tw/farms/".concat(item.id);
                  }
                  if (item.typeIds.includes(2)) {
                    item.url = "https://ezgo.ardswc.gov.tw/zh-tw/tianmama/".concat(item.id);
                  }
                });
              }

              //console.log(AllSpot)
              setData(AllSpot); // 更新 data
              setCounty(fetchedCounty);
              setFruit(fetchedFruit);
            case 4:
              return _context.a(2);
          }
        }, _callee);
      }));
      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();
    fetchData();
  }, []);
  return {
    data: data,
    county: county,
    fruit: fruit
  };
};
_s2(useSpotsData, "dTenhe5y1JukiGuPSYIQOQgszMA=");
_s(useSpotsData, "Ml8+CPPC7pR9xkYXWokDa2WMSZs=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSpotsData);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ },

/***/ "./src/components/Breadcrumbs.js"
/*!***************************************!*\
  !*** ./src/components/Breadcrumbs.js ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
;




var Breadcrumbs = function Breadcrumbs(_ref) {
  _s2();
  _s();
  var data = _ref.data,
    className = _ref.className;
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 1),
    search = _useSearchParams2[0];
  var isEmbed = search.get('embed') === '1';
  if (isEmbed) return null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "breadcrumbs py-2 full-width ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "d-flex align-items-center maw-1400px h-4 mx-auto fz-14px"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("a", {
    accessKey: "C",
    href: "#",
    title: "\u4E2D\u9593\u5B9A\u4F4D\u9EDE(C)",
    className: "d-none d-xl-block w-2 ml-n2 text-inherit",
    onClick: function onClick(e) {
      e.preventDefault();
    }
  }, ":::"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("ul", {
    className: "d-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
    className: "d-flex crumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/".concat(lang),
    className: "text-inherit hover-primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_0__["default"], null, "\u9996\u9801"))), !!(data !== null && data !== void 0 && data.length) && data.map(function (_ref2, i) {
    var title = _ref2.title,
      url = _ref2.url;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("li", {
      className: "d-flex crumb",
      key: i
    }, !!url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "text-inherit hover-primary",
      href: url
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_0__["default"], null, title)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_0__["default"], null, title));
  }))));
};
_s2(Breadcrumbs, "uot2/eFlbWLDVmHqM8G57rZIZnM=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_2__.useLocale, react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams];
});
_c3 = Breadcrumbs;
_s(Breadcrumbs, "zvJe2GiI22uP/sHYGZICpM5jRSc=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_2__.useLocale, react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useSearchParams];
});
_c = Breadcrumbs;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Breadcrumbs));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Breadcrumbs");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Breadcrumbs");

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		let errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		let testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2FwaV9pbmRleF9qcy1zcmNfY29tcG9uZW50c19CcmVhZGNydW1ic19qcy03Yzg1MjU4YzVmYTliNDNjMzkzMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7QUFDd0I7QUFDMUI7QUFDcUI7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsQ0FBMkM7QUFDZDtBQUU3QixJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQW9CQSxDQUFBSSxJQUFBLEVBQXFCO0VBQUFDLEdBQUE7RUFBQUMsRUFBQTtFQUFBLElBQWZDLElBQUksR0FBQUgsSUFBQSxDQUFKRyxJQUFJO0lBQUVDLEVBQUUsR0FBQUosSUFBQSxDQUFGSSxFQUFFO0VBQ3BDLElBQUFDLFNBQUEsR0FBd0JSLCtDQUFRLENBQUMsSUFBSSxDQUFDO0lBQUFTLFVBQUEsR0FBQUMsY0FBQSxDQUFBRixTQUFBO0lBQS9CRyxJQUFJLEdBQUFGLFVBQUE7SUFBRUcsT0FBTyxHQUFBSCxVQUFBO0VBRXBCUixnREFBUyxDQUFDLFlBQU07SUFDWixJQUFJLENBQUNNLEVBQUUsRUFBRTtJQUNUTSxLQUFLLHlCQUFBQyxNQUFBLENBQXlCUCxFQUFFLEdBQUk7TUFDaENRLE9BQU8sRUFBRTtRQUNMLGNBQWMsRUFBRSxrQkFBa0I7UUFDbEMsa0JBQWtCLEVBQUU7TUFDeEI7SUFDSixDQUFDLENBQUMsQ0FDR0MsSUFBSSxDQUFDLFVBQUNDLElBQUk7TUFBQSxPQUFLQSxJQUFJLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQUEsRUFBQyxDQUMzQkYsSUFBSSxDQUFDLFVBQUFHLEtBQUEsRUFBdUI7TUFBQSxJQUFwQkMsT0FBTyxHQUFBRCxLQUFBLENBQVBD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L0IsQ0FBQyxDQUFDZixHQUFHLGdCQUNGNEcsMERBQUEsQ0FBQ0YsdURBQUk7TUFDREssU0FBUyw4QkFBK0I7TUFDeENRLElBQUksRUFBRXZIO0lBQUksZ0JBRVY0RywwREFBQSxDQUFDSCx1REFBSSxRQUFFckksS0FBWSxDQUNqQixDQUFDLGdCQUVQd0ksMERBQUEsQ0FBQ0gsdURBQUksUUFBRXJJLEtBQVksQ0FFdkIsQ0FBQztFQUFBLENBQ1IsQ0FDTCxDQUNILENBQ0osQ0FBQztBQUVkLENBQUM7QUFBQWpCLEdBQUEsQ0FoREsySixXQUFXO0VBQUEsUUFDQUgsNENBQVMsRUFDTEUsNkRBQWU7QUFBQTtBQUFBZSxHQUFBLEdBRjlCZCxXQUFXO0FBZ0RoQjFKLEVBQUEsQ0FoREswSixXQUFXO0VBQUEsUUFDQUgsNENBQVMsRUFDTEUsNkRBQWU7QUFBQTtBQUFBZ0IsRUFBQSxHQUY5QmYsV0FBVztBQWtEakIsaUVBQUFnQixHQUFBLGdCQUFlbEIsaURBQVUsQ0FBQ0UsV0FBVyxDQUFDO0FBQUEsSUFBQWUsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLHNDQUFBLENBQUFILEVBQUE7QUFBQUcsc0NBQUEsQ0FBQUYsR0FBQTtBQUFBLElBQUFGLEdBQUE7QUFBQUksc0NBQUEsQ0FBQUosR0FBQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2FwaS91c2VGcnVpdERhdGFSZWR1eFZlci5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvYXBpL3VzZUZydWl0c0RhdGEuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2FwaS91c2VGcnVpdHNEYXRhV2l0aG91dFJlZHV4LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9hcGkvdXNlU3BvdHNEYXRhLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL0JyZWFkY3J1bWJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VGcnVpdHNEYXRhIGZyb20gJy4vdXNlRnJ1aXRzRGF0YSdcbmltcG9ydCB1c2VGcnVpdHNEYXRhV2l0aG91dFJlZHV4IGZyb20gJy4vdXNlRnJ1aXRzRGF0YVdpdGhvdXRSZWR1eCdcbmltcG9ydCB1c2VTcG90c0RhdGEgZnJvbSAnLi91c2VTcG90c0RhdGEnXG5pbXBvcnQgdXNlRnJ1aXREYXRhUmVkdXhWZXIgZnJvbSAnLi4vYXBpL3VzZUZydWl0RGF0YVJlZHV4VmVyJ1xuXG4vKiBpbXBvcnQgdXNlUHJvbW90aW9uc0RhdGEgZnJvbSAnLi91c2VQcm9tb3Rpb25zRGF0YSdcbmltcG9ydCB1c2VUaWNrZXRzRGF0YSBmcm9tICcuL3VzZVRpY2tldHNEYXRhJ1xuaW1wb3J0IHVzZVRvdXJzRGF0YSBmcm9tICcuL3VzZVRvdXJzRGF0YSdcbmltcG9ydCB1c2VTb2NpYWxNZWRpYXNEYXRhIGZyb20gJy4vdXNlU29jaWFsTWVkaWFzRGF0YSdcbmltcG9ydCB1c2VQdWJsaWNhdGlvbnNEYXRhIGZyb20gJy4vdXNlUHVibGljYXRpb25zRGF0YSdcbmltcG9ydCB1c2VUb3Vyc0RhdGEgZnJvbSAnLi91c2VUb3Vyc0RhdGEnXG5pbXBvcnQgdXNlRXZlbnRzRGF0YSBmcm9tICcuL3VzZUV2ZW50c0RhdGEnXG5pbXBvcnQgdXNlQXR0cmFjdGlvbnNEYXRhIGZyb20gJy4vdXNlQXR0cmFjdGlvbnNEYXRhJyBcbmltcG9ydCB1c2VXZWF0aGVyRGF0YSBmcm9tICcuL3VzZVdlYXRoZXJEYXRhJyovXG5cbmV4cG9ydCB7XG4gICAgdXNlRnJ1aXRzRGF0YSxcbiAgICB1c2VGcnVpdHNEYXRhV2l0aG91dFJlZHV4LFxuICAgIHVzZVNwb3RzRGF0YSxcbiAgICB1c2VGcnVpdERhdGFSZWR1eFZlclxuICAgIC8qIHVzZVdlYXRoZXJEYXRhLFxuXHR1c2VQcm9tb3Rpb25zRGF0YSxcblx0dXNlVGlja2V0c0RhdGEsXG5cdHVzZVRvdXJzRGF0YSxcblx0dXNlU29jaWFsTWVkaWFzRGF0YSxcblx0dXNlUHVibGljYXRpb25zRGF0YSAqL1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcblxuY29uc3QgdXNlRnJ1aXREYXRhUmVkdXhWZXIgPSAoeyBsYW5nLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghaWQpIHJldHVyblxuICAgICAgICBmZXRjaChgL19hcGkvemgtdHcvZnJ1aXQ/aWQ9JHtpZH1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKCh7IHN1Y2Nlc3MsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mMr+iqpCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9LCBbaWRdKVxuICAgIHJldHVybiB7IGRhdGEgfVxufVxuZXhwb3J0IGRlZmF1bHQgdXNlRnJ1aXREYXRhUmVkdXhWZXJcblxuLyppbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaEZydWl0RGF0YSB9IGZyb20gJ3N0b3JlL2ZydWl0U2xpY2VSZWR1eFZlcidcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IHVzZUZydWl0RGF0YVJlZHV4VmVyID0gKHsgbGFuZyB9KSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCBkYXRhID0gdXNlU2VsZWN0b3IoXG4gICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuZnJ1aXRTbGljZVJlZHV4VmVyPy5bbGFuZ10sXG4gICAgICAgIHNoYWxsb3dFcXVhbFxuICAgIClcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKGZldGNoRnJ1aXREYXRhKHsgbGFuZywgaWQgfSkpXG4gICAgICAgIH1cbiAgICB9LCBbbGFuZywgaWRdKVxuICAgIHJldHVybiB7IGRhdGEgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VGcnVpdERhdGFSZWR1eFZlciovXG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCwgc2hhbGxvd0VxdWFsIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBmZXRjaEZydWl0c0RhdGEgfSBmcm9tICdzdG9yZS9mcnVpdHNTbGljZSdcblxuY29uc3QgdXNlRnJ1aXRzRGF0YSA9ICh7IGxhbmcgfSkgPT4ge1xuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuICAgIGNvbnN0IGRhdGEgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmZydWl0c0RhdGE/LltsYW5nXSwgc2hhbGxvd0VxdWFsKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgZGlzcGF0Y2goZmV0Y2hGcnVpdHNEYXRhKGxhbmcpKVxuICAgICAgICB9XG4gICAgfSwgW2RhdGEsIGxhbmddKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZydWl0c0RhdGFcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE1PTlRIU19NQVAgfSBmcm9tICdjb25zdGFudHMvdXRpbHMnXG5cbmNvbnN0IG1ha2VNb250aE5hbWVzID0gKHZhbHVlKSA9PiB7XG4gICAgY29uc3QgYXJyID0gW11cbiAgICBPYmplY3Qua2V5cyhNT05USFNfTUFQKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGsgKj0gMSAvLyDlsIcgayDlrZfkuLLovYnmj5vmiJDmlbjlrZdcbiAgICAgICAgaWYgKCh2YWx1ZSAmIGspID09PSBrKSB7XG4gICAgICAgICAgICBhcnIucHVzaChNT05USFNfTUFQW2tdKVxuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYXJyXG59XG5cbmNvbnN0IHVzZUZydWl0c0RhdGFXaXRob3V0UmVkdXggPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbClcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL19hcGkvemgtdHcvZnJ1aXQnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKCh7IHN1Y2Nlc3MsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3ZlciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uaW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaXNDb3ZlcikgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pc0NvdmVyKS51cmwpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0uaW1hZ2VzICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXNbMF0udXJsKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL25vdC1mb3VuZC9taXNzLmpwZ2BcblxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5tb250aHMgPSBtYWtlTW9udGhOYW1lcyhpdGVtLm1vbnRocylcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIH0sIFtdKVxuICAgIHJldHVybiBkYXRhXG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZUZydWl0c0RhdGFXaXRob3V0UmVkdXhcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHNldCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSdcblxuY29uc3QgbWFrZVNwb3RUeXBlcyA9ICh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IFNQT1RfVFlQRV9NQVAgPSB7XG4gICAgICAgIDA6ICfovrLpgYrpu54nLFxuICAgICAgICAxOiAn5LyR6ZaS6L6y5aC0JyxcbiAgICAgICAgMjogJ+eUsOWqveWqvSdcbiAgICB9XG4gICAgY29uc3QgYXJyID0gW11cbiAgICBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFswXVxuICAgIH1cbiAgICBPYmplY3Qua2V5cyhTUE9UX1RZUEVfTUFQKS5mb3JFYWNoKChrKSA9PiB7XG4gICAgICAgIGsgKj0gMVxuICAgICAgICBpZiAoKHZhbHVlICYgaykgPT0gaykge1xuICAgICAgICAgICAgYXJyLnB1c2goaylcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGFyclxufVxuXG5jb25zdCB1c2VTcG90c0RhdGEgPSAoeyBsYW5nIH0pID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtmcnVpdCwgc2V0RnJ1aXRdID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbY291bnR5LCBzZXRDb3VudHldID0gdXNlU3RhdGUobnVsbClcbiAgICBjb25zdCBbYWxsU3BvdCwgc2V0QWxsU3BvdF0gPSB1c2VTdGF0ZShbXSlcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRhQXJlYSA9IGF3YWl0IGZldGNoKFxuICAgICAgICAgICAgICAgICcvX2FwaS96aC10dy9sZWlzdXJlLWFncmljdWx0dXJlLWFyZWEnLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgc3VjY2VzcywgZGF0YSB9KSA9PiBkYXRhKVxuXG4gICAgICAgICAgICBjb25zdCBzcG90c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9fYXBpL3poLXR3L2Fncmktc3BvdHMnLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG5cbiAgICAgICAgICAgIGNvbnN0IGZydWl0c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9fYXBpL3poLXR3L3NvdXZlbmlycycsIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyB9XG4gICAgICAgICAgICB9KS50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcblxuICAgICAgICAgICAgY29uc3QgZGF0YVNwb3RzID0gc3BvdHNSZXNwb25zZS5kYXRhXG4gICAgICAgICAgICBjb25zdCBmZXRjaGVkQ291bnR5ID0gc3BvdHNSZXNwb25zZS5jb3VudHlcbiAgICAgICAgICAgIGNvbnN0IGZldGNoZWRGcnVpdCA9IGZydWl0c1Jlc3BvbnNlLmZydWl0XG5cbiAgICAgICAgICAgIGNvbnN0IEFsbFNwb3QgPSBbLi4uZGF0YUFyZWEsIC4uLmRhdGFTcG90c11cbiAgICAgICAgICAgIHNldEFsbFNwb3QoQWxsU3BvdClcblxuICAgICAgICAgICAgaWYgKEFsbFNwb3QpIHtcbiAgICAgICAgICAgICAgICBBbGxTcG90LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3ZlciA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcz8uZmluZCgoaXRlbSkgPT4gaXRlbS5pbWFnZXMpPy51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzPy5bMF0/LnVybCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfS9pbWFnZXMvbm90LWZvdW5kL21pc3MuanBnYFxuXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZUlkcyA9IG1ha2VTcG90VHlwZXMoaXRlbS50eXBlKVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlSWRzLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnVybCA9IGBodHRwczovL2V6Z28uYXJkc3djLmdvdi50dy96aC10dy9sZWlzdXJlLWFyZWEvJHtpdGVtLmlkfWBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS50eXBlSWRzLmluY2x1ZGVzKDEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnVybCA9IGBodHRwczovL2V6Z28uYXJkc3djLmdvdi50dy96aC10dy9mYXJtcy8ke2l0ZW0uaWR9YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLnR5cGVJZHMuaW5jbHVkZXMoMikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udXJsID0gYGh0dHBzOi8vZXpnby5hcmRzd2MuZ292LnR3L3poLXR3L3RpYW5tYW1hLyR7aXRlbS5pZH1gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKEFsbFNwb3QpXG4gICAgICAgICAgICBzZXREYXRhKEFsbFNwb3QpIC8vIOabtOaWsCBkYXRhXG4gICAgICAgICAgICBzZXRDb3VudHkoZmV0Y2hlZENvdW50eSlcbiAgICAgICAgICAgIHNldEZydWl0KGZldGNoZWRGcnVpdClcbiAgICAgICAgfVxuXG4gICAgICAgIGZldGNoRGF0YSgpXG4gICAgfSwgW10pXG4gICAgcmV0dXJuIHsgZGF0YSwgY291bnR5LCBmcnVpdCB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNwb3RzRGF0YVxuIiwiaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBCcmVhZGNydW1icyA9ICh7IGRhdGEsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgW3NlYXJjaF0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IGlzRW1iZWQgPSBzZWFyY2guZ2V0KCdlbWJlZCcpID09PSAnMSdcbiAgICBpZiAoaXNFbWJlZCkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnJlYWRjcnVtYnMgcHktMiBmdWxsLXdpZHRoICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1hdy0xNDAwcHggaC00IG14LWF1dG8gZnotMTRweFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleT1cIkNcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Lit6ZaT5a6a5L2N6bueKEMpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtYmxvY2sgdy0yIG1sLW4yIHRleHQtaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDo6OlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggY3J1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWluaGVyaXQgaG92ZXItcHJpbWFyeWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+6aaW6aCBPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7ISFkYXRhPy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh7IHRpdGxlLCB1cmwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggY3J1bWJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF1cmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtaW5oZXJpdCBob3Zlci1wcmltYXJ5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3RpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJyZWFkY3J1bWJzKVxuIl0sIm5hbWVzIjpbInVzZUZydWl0c0RhdGEiLCJ1c2VGcnVpdHNEYXRhV2l0aG91dFJlZHV4IiwidXNlU3BvdHNEYXRhIiwidXNlRnJ1aXREYXRhUmVkdXhWZXIiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN3YWwiLCJfcmVmIiwiX3MyIiwiX3MiLCJsYW5nIiwiaWQiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJkYXRhIiwic2V0RGF0YSIsImZldGNoIiwiY29uY2F0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsIl9yZWYyIiwic3VjY2VzcyIsInRpdGxlIiwidG9TdHJpbmciLCJpY29uIiwiZXJyb3IiLCJ0ZXh0IiwibWVzc2FnZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzaGFsbG93RXF1YWwiLCJmZXRjaEZydWl0c0RhdGEiLCJkaXNwYXRjaCIsInN0YXRlIiwiX3N0YXRlJGZydWl0c0RhdGEiLCJmcnVpdHNEYXRhIiwiTU9OVEhTX01BUCIsIm1ha2VNb250aE5hbWVzIiwidmFsdWUiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImsiLCJwdXNoIiwiaXRlbSIsImNvdmVyIiwiaW1hZ2VzIiwiZmluZCIsImlzQ292ZXIiLCJ1cmwiLCJsZW5ndGgiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9QQVRIIiwibW9udGhzIiwiY29uc29sZSIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl90b0NvbnN1bWFibGVBcnJheSIsIl9hcnJheVdpdGhvdXRIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXkiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVTcHJlYWQiLCJBcnJheSIsImZyb20iLCJpc0FycmF5IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9hc3luY1RvR2VuZXJhdG9yIiwiYXJndW1lbnRzIiwiYXBwbHkiLCJfbmV4dCIsIl90aHJvdyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl9ub25JdGVyYWJsZVJlc3QiLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsInRlc3QiLCJuZXh0Iiwic2V0IiwibWFrZVNwb3RUeXBlcyIsIlNQT1RfVFlQRV9NQVAiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZydWl0Iiwic2V0RnJ1aXQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImNvdW50eSIsInNldENvdW50eSIsIl91c2VTdGF0ZTciLCJfdXNlU3RhdGU4IiwiYWxsU3BvdCIsInNldEFsbFNwb3QiLCJmZXRjaERhdGEiLCJfY2FsbGVlIiwiZGF0YUFyZWEiLCJzcG90c1Jlc3BvbnNlIiwiZnJ1aXRzUmVzcG9uc2UiLCJkYXRhU3BvdHMiLCJmZXRjaGVkQ291bnR5IiwiZmV0Y2hlZEZydWl0IiwiQWxsU3BvdCIsIl9jb250ZXh0IiwiX3JlZjMiLCJfaXRlbSRpbWFnZXMiLCJfaXRlbSRpbWFnZXMyIiwidHlwZUlkcyIsInR5cGUiLCJpbmNsdWRlcyIsIkkxOE4iLCJMaW5rIiwidXNlTG9jYWxlIiwiUmVhY3QiLCJ1c2VTZWFyY2hQYXJhbXMiLCJCcmVhZGNydW1icyIsImNsYXNzTmFtZSIsIl91c2VTZWFyY2hQYXJhbXMiLCJfdXNlU2VhcmNoUGFyYW1zMiIsInNlYXJjaCIsImlzRW1iZWQiLCJnZXQiLCJjcmVhdGVFbGVtZW50IiwiYWNjZXNzS2V5IiwiaHJlZiIsIm9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsImtleSIsIl9jMyIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=