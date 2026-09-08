"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_souvenirs_index_js"],{

/***/ "./src/api/useSouvenirsData.js"
/*!*************************************!*\
  !*** ./src/api/useSouvenirsData.js ***!
  \*************************************/
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

var useSouvenirsData = function useSouvenirsData(_ref) {
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
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch('/_api/zh-tw/souvenirs', {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref2) {
      var success = _ref2.success,
        data = _ref2.data,
        fruit = _ref2.fruit,
        county = _ref2.county;
      if (success) {
        //const fruitIds = new Set(fruit.map((f) => f.id)) //map() 會遍歷 fruit 陣列的每一個物件，提取 id 值，形成一個新的陣列[345, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359]
        var fruitIds = fruit.map(function (f) {
          return f.id;
        });
        var filteredData = data.filter(function (item) {
          return item.categories.some(function (cat) {
            return fruitIds.includes(cat);
          });
        });
        // 篩選 data，確保 categories 至少包含一個 fruit ID
        //const filteredData = data.filter((item) =>
        //item.categories.some((cat) => fruitIds.has(cat))
        //)

        filteredData.forEach(function (item) {
          var _item$phone, _item$phone2, _item$images, _item$images2;
          item.tel = ((_item$phone = item.phone1) === null || _item$phone === void 0 ? void 0 : _item$phone.trim()) && item.phone1 || ((_item$phone2 = item.phone2) === null || _item$phone2 === void 0 ? void 0 : _item$phone2.trim()) && item.phone2 || '無電話號碼';
          item.cover = ((_item$images = item.images) === null || _item$images === void 0 || (_item$images = _item$images.find(function (images) {
            return images.url;
          })) === null || _item$images === void 0 ? void 0 : _item$images.url) || ((_item$images2 = item.images) === null || _item$images2 === void 0 || (_item$images2 = _item$images2[0]) === null || _item$images2 === void 0 ? void 0 : _item$images2.url) || "".concat("/fruits-travel", "/images/not-found/miss.jpg");
        });
        setData(filteredData);
        setFruit(fruit);
        setCounty(county);
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
  }, []);
  return {
    data: data,
    fruit: fruit,
    county: county
  };
};
_s2(useSouvenirsData, "IXRIbJAEpAqA0JX/AI9CjlG2l4A=");
_s(useSouvenirsData, "AhVVs8pKQvZdccHulfAZHRmNWqY=");
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useSouvenirsData);

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

/***/ },

/***/ "./src/components/SearchBar.js"
/*!*************************************!*\
  !*** ./src/components/SearchBar.js ***!
  \*************************************/
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


var SearchBar = function SearchBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-between my-[32px] md:my-[64px] mx-auto max-w-[800px] rounded-pill border-[1px] border-solid border-[#f0f0f0]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center p-[12px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-search text-[24px]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    className: "w-100 h-100",
    type: "text",
    name: "search",
    placeholder: "\u8ACB\u8F38\u5165\u95DC\u9375\u5B57"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "flex justify-center items-center py-[12px] px-[24px] rounded-pill border-[2px] border-solid border-[#82be66] trs-all hover:bg-[#E4F4DD]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-adv-fill text-[24px] text-[#82be66]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "hidden md:block ml-[4px] font-bold text-[#2d7316] text-[18px]"
  }, "\u9032\u968E\u641C\u5C0B")));
};
_c3 = SearchBar;
_c = SearchBar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SearchBar));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SearchBar");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SearchBar");

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

/***/ "./src/components/SouvenirsCard.js"
/*!*****************************************!*\
  !*** ./src/components/SouvenirsCard.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var components_AutoSwitchLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AutoSwitchLink */ "./src/components/AutoSwitchLink.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var SouvenirsCard = function SouvenirsCard(_ref) {
  var data = _ref.data;
  var id = data.id,
    name = data.name,
    spot_name = data.spot_name,
    tel = data.tel,
    cover = data.cover;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_AutoSwitchLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: name,
    isLinkOut: false,
    href: "/souvenir/".concat(id),
    className: "flex relative h-[110px] md:h-[184px] rounded-[16px] md:rounded-[32px] border-solid border-[1px] border-[#f0f0f0] transition-all duration-500 hover:border-[#82be66] hover:ring-[2px] hover:ring-[#82be66] group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "relative aspect-[1.3] flex-shrink-0 w-[143px] md:w-[245px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-l-[14px] md:rounded-l-[30px]",
    src: cover,
    alt: spot_name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col justify-center mb-[5px] px-[16px] md:my-[24px] md:px-[24px] w-inherit h-inherit text-ellipsis overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:mb-[16px] text-[16px] md:text-[22px] text-[#3c3c3c]"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center flex-shrink-0 mr-[8px] w-[20px] h-[20px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-location text-[#82be66]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, spot_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center flex-shrink-0 mr-[8px] w-[20px] h-[20px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-tel text-[#82be66]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, tel)))));
};
_c3 = SouvenirsCard;
_c = SouvenirsCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SouvenirsCard));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SouvenirsCard");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SouvenirsCard");

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

/***/ "./src/components/bannerTitle.js"
/*!***************************************!*\
  !*** ./src/components/bannerTitle.js ***!
  \***************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! components/Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();




var BannerTitle = function BannerTitle(_ref) {
  _s2();
  _s();
  var title = _ref.title,
    sub = _ref.sub,
    content = _ref.content,
    img = _ref.img;
  var isLayoutMD = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 768px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "w-100 h-[375px] lg:h-[33vw] max-h-[640px]",
    style: {
      backgroundImage: "url('".concat("/fruits-travel", "/images/banner/").concat(img, "')"),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "relative bg-gradient-to-t from-[#00000060] to-[#00000000] w-100 h-100 flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "text-center text-white drop-shadow-[0_0_8px_rgba(0,0,0,0.8)] pt-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "font-weight-bold mb-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "fz-20px fz-md-24px mb-4px"
  }, sub), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "fz-32px fz-md-40px fz-xl-48px"
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "fz-14px fz-md-16px fz-xl-18px px-3"
  }, content && (isLayoutMD ? content.split(' ').map(function (str, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, str));
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, content))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_0__["default"], {
    data: [{
      title: sub
    }],
    className: "absolute left-6 bottom-0 text-white"
  })));
};
_s2(BannerTitle, "O2xUH2KjBaSOsD5xiYeUmnw/Tas=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c3 = BannerTitle;
_s(BannerTitle, "O2xUH2KjBaSOsD5xiYeUmnw/Tas=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = BannerTitle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(BannerTitle));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "BannerTitle");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "BannerTitle");

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

/***/ "./src/views/souvenirs/SouvenirsList.js"
/*!**********************************************!*\
  !*** ./src/views/souvenirs/SouvenirsList.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SouvenirsCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/SouvenirsCard */ "./src/components/SouvenirsCard.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var SouvenirsList = function SouvenirsList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-[24px] max-w-[1280px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-[24px] pb-[40px] md:pb-[80px]"
  }, (data === null || data === void 0 ? void 0 : data.length) > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[24] pt-[8px] md:pt-[32px]"
  }, data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SouvenirsCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item
    }));
  }))));
};
_c3 = SouvenirsList;
_c = SouvenirsList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SouvenirsList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SouvenirsList");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SouvenirsList");

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

/***/ "./src/views/souvenirs/SouvenirsNav.js"
/*!*********************************************!*\
  !*** ./src/views/souvenirs/SouvenirsNav.js ***!
  \*********************************************/
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


var SouvenirsNav = function SouvenirsNav(_ref) {
  var fruit = _ref.fruit,
    setSelectedFruit = _ref.setSelectedFruit;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] "
  }, !!fruit > length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center md:justify-center gap-[16px] mx-n3 pl-[16px] md:pl-[80px] xl:pl-[0px] text-center overflow-x-auto md:overflow-visible"
  }, fruit.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "flex-shrink-0 py-[12px] px-[24px] border border-[#f0f0f0] rounded-pill cursor-pointer hover:bg-[#82be66] group trs-all",
      key: i,
      onClick: function onClick() {
        return setSelectedFruit(item);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-[18px] text-[#767676] group-hover:text-[#fff]"
    }, item.name));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null), " "));
};
_c3 = SouvenirsNav;
_c = SouvenirsNav;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SouvenirsNav));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SouvenirsNav");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SouvenirsNav");

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

/***/ "./src/views/souvenirs/index.js"
/*!**************************************!*\
  !*** ./src/views/souvenirs/index.js ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bannerTitle */ "./src/components/bannerTitle.js");
/* harmony import */ var _components_SearchBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _SouvenirsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SouvenirsNav */ "./src/views/souvenirs/SouvenirsNav.js");
/* harmony import */ var _SouvenirsList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SouvenirsList */ "./src/views/souvenirs/SouvenirsList.js");
/* harmony import */ var _api_useSouvenirsData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/useSouvenirsData */ "./src/api/useSouvenirsData.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
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






var Page = function Page() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_6__.useLocale)();
  var _ref = (0,_api_useSouvenirsData__WEBPACK_IMPORTED_MODULE_5__["default"])({
      lang: lang
    }) || {},
    data = _ref.data,
    fruit = _ref.fruit,
    county = _ref.county;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    selectedFruit = _useState2[0],
    setSelectedFruit = _useState2[1];
  var filteredData = selectedFruit ? data.filter(function (item) {
    return item.categories.includes(selectedFruit.id);
  }) : data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '嚴選臺灣農特產好禮',
    sub: "\u6C34\u679C\u4F34\u624B\u79AE",
    content: "\u300C\u56B4\u9078\u88FD\u9020\u3001\u5728\u5730\u751F\u7522\u300D\u5B55\u80B2\u51FA\u5BF6\u5CF6\u5728\u5730\u597D\u6ECB\u5473\uFF0C\u81FA\u7063\u8FB2\u7279\u7522\u6CE8\u91CD\u7BA1\u63A7\u53CA\u5B89\u5168\u54C1\u8CEA\uFF0C \u5404\u7A2E\u7279\u8272\u7522\u54C1\u591A\u5143\u9078\u64C7\uFF0C\u5E74\u7BC0\u9001\u79AE\u3001\u5B57\u9001\u5169\u76F8\u5B9C\uFF01",
    img: "gift.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-5 py-xl-10 md:mb-[40px] xl:mb-[0px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[800px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SouvenirsNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    fruit: fruit,
    setSelectedFruit: setSelectedFruit
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[16px] md:px-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SearchBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fruit: fruit,
    county: county,
    filteredData: filteredData
  }))), !!data > length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[1280px] border-b-[1px] border-solid border-[#c4c4c4]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "py-[8px] text-[#767676] text-[14px md:text-[16px]"
  }, "\u5171\u6709", filteredData.length, " \u9805\u7D50\u679C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SouvenirsList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: filteredData
  })));
};
_s2(Page, "zwUh5HsT/CoqNilYMS4wX083bPg=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_6__.useLocale, _api_useSouvenirsData__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c3 = Page;
_s(Page, "W52s/TU14ThG8t917XF17O+jwBM=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_6__.useLocale, _api_useSouvenirsData__WEBPACK_IMPORTED_MODULE_5__["default"]];
});
_c = Page;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Page));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Page");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Page");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3NvdXZlbmlyc19pbmRleF9qcy1hYzIwZjU4YzZlNmNkNTU4ZTI4Ni5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQTJDO0FBQ2Q7QUFFN0IsSUFBTUcsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQkEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBQyxHQUFBO0VBQUFDLEVBQUE7RUFBQSxJQUFYQyxJQUFJLEdBQUFILElBQUEsQ0FBSkcsSUFBSTtFQUM1QixJQUFBQyxTQUFBLEdBQXdCUiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBUyxVQUFBLEdBQUFDLGNBQUEsQ0FBQUYsU0FBQTtJQUEvQkcsSUFBSSxHQUFBRixVQUFBO0lBQUVHLE9BQU8sR0FBQUgsVUFBQTtFQUNwQixJQUFBSSxVQUFBLEdBQTBCYiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFBYyxVQUFBLEdBQUFKLGNBQUEsQ0FBQUcsVUFBQTtJQUFqQ0UsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUN0QixJQUFBRyxVQUFBLEdBQTRCakIsK0NBQVEsQ0FBQyxJQUFJLENBQUM7SUFBQWtCLFVBQUEsR0FBQVIsY0FBQSxDQUFBTyxVQUFBO0lBQW5DRSxNQUFNLEdBQUFELFVBQUE7SUFBRUUsU0FBUyxHQUFBRixVQUFBO0VBQ3hCakIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1pvQixLQUFLLENBQUMsdUJBQXVCLEVBQUU7TUFDM0JDLE9BQU8sRUFBRTtRQUNMLGtCQUFrQixFQUFFO01BQ3hCO0lBQ0osQ0FBQyxDQUFDLENBQ0dDLElBQUksQ0FBQyxVQUFDQyxJQUFJO01BQUEsT0FBS0EsSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FDM0JGLElBQUksQ0FBQyxVQUFBRyxLQUFBLEVBQXNDO01BQUEsSUFBbkNDLE9BQU8sR0FBQUQs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YSxDQUM5QixDQUNBLENBQ0osQ0FBQyxFQUNMLENBQUMsQ0FBQ3JCLElBQUksR0FBR3FFLE1BQU0saUJBQ1pmLDBEQUFBO0lBQUtHLFNBQVMsRUFBQztFQUFXLGdCQUN0QkgsMERBQUE7SUFBS0csU0FBUyxFQUFDO0VBQXFFLGdCQUNoRkgsMERBQUE7SUFBR0csU0FBUyxFQUFDO0VBQW1ELEdBQUMsY0FDM0QsRUFBQ3BDLFlBQVksQ0FBQ2dELE1BQU0sRUFBQyxxQkFDeEIsQ0FDRixDQUNKLENBQ1IsZUFDRGYsMERBQUEsQ0FBQytDLHNEQUFhO0lBQUNyRyxJQUFJLEVBQUVxQjtFQUFhLENBQUUsQ0FDL0IsQ0FDUixDQUFDO0FBRWQsQ0FBQztBQUFBM0IsR0FBQSxDQTNDSzhHLElBQUk7RUFBQSxRQUNPbkQsNENBQVMsRUFDVTdELDZEQUFnQjtBQUFBO0FBQUFnRixHQUFBLEdBRjlDZ0MsSUFBSTtBQTJDVDdHLEVBQUEsQ0EzQ0s2RyxJQUFJO0VBQUEsUUFDT25ELDRDQUFTLEVBQ1U3RCw2REFBZ0I7QUFBQTtBQUFBaUYsRUFBQSxHQUY5QytCLElBQUk7QUE2Q1YsaUVBQUE5QixHQUFBLGdCQUFlcEIsaURBQVUsQ0FBQ2tELElBQUksQ0FBQztBQUFBLElBQUEvQixFQUFBLEVBQUFDLEdBQUE7QUFBQUUsc0NBQUEsQ0FBQUgsRUFBQTtBQUFBRyxzQ0FBQSxDQUFBRixHQUFBO0FBQUEsSUFBQUYsR0FBQTtBQUFBSSxzQ0FBQSxDQUFBSixHQUFBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvYXBpL3VzZVNvdXZlbmlyc0RhdGEuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvQnJlYWRjcnVtYnMuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL1NvdXZlbmlyc0NhcmQuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvYmFubmVyVGl0bGUuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3NvdXZlbmlycy9Tb3V2ZW5pcnNMaXN0LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zb3V2ZW5pcnMvU291dmVuaXJzTmF2LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zb3V2ZW5pcnMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN3YWwgZnJvbSAnc3dlZXRhbGVydCdcblxuY29uc3QgdXNlU291dmVuaXJzRGF0YSA9ICh7IGxhbmcgfSkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2ZydWl0LCBzZXRGcnVpdF0gPSB1c2VTdGF0ZShudWxsKVxuICAgIGNvbnN0IFtjb3VudHksIHNldENvdW50eV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvX2FwaS96aC10dy9zb3V2ZW5pcnMnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ1gtUmVxdWVzdGVkLVdpdGgnOiAnWE1MSHR0cFJlcXVlc3QnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigocmVzcCkgPT4gcmVzcC5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoeyBzdWNjZXNzLCBkYXRhLCBmcnVpdCwgY291bnR5IH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZydWl0SWRzID0gbmV3IFNldChmcnVpdC5tYXAoKGYpID0+IGYuaWQpKSAvL21hcCgpIOacg+mBjeattyBmcnVpdCDpmaPliJfnmoTmr4/kuIDlgIvnianku7bvvIzmj5Dlj5YgaWQg5YC877yM5b2i5oiQ5LiA5YCL5paw55qE6Zmj5YiXWzM0NSwgMzQ3LCAzNDgsIDM0OSwgMzUwLCAzNTEsIDM1MiwgMzUzLCAzNTQsIDM1NSwgMzU2LCAzNTcsIDM1OCwgMzU5XVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcnVpdElkcyA9IGZydWl0Lm1hcCgoZikgPT4gZi5pZClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNhdGVnb3JpZXMuc29tZSgoY2F0KSA9PiBmcnVpdElkcy5pbmNsdWRlcyhjYXQpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIC8vIOevqemBuCBkYXRh77yM56K65L+dIGNhdGVnb3JpZXMg6Iez5bCR5YyF5ZCr5LiA5YCLIGZydWl0IElEXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgZmlsdGVyZWREYXRhID0gZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgIC8vaXRlbS5jYXRlZ29yaWVzLnNvbWUoKGNhdCkgPT4gZnJ1aXRJZHMuaGFzKGNhdCkpXG4gICAgICAgICAgICAgICAgICAgIC8vKVxuXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRlbCA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0ucGhvbmUxPy50cmltKCkgJiYgaXRlbS5waG9uZTEpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0ucGhvbmUyPy50cmltKCkgJiYgaXRlbS5waG9uZTIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ+eEoembu+ipseiZn+eivCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY292ZXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzPy5maW5kKChpbWFnZXMpID0+IGltYWdlcy51cmwpPy51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcz8uWzBdPy51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9ub3QtZm91bmQvbWlzcy5qcGdgXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZmlsdGVyZWREYXRhKVxuICAgICAgICAgICAgICAgICAgICBzZXRGcnVpdChmcnVpdClcbiAgICAgICAgICAgICAgICAgICAgc2V0Q291bnR5KGNvdW50eSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHN3YWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+mMr+iqpCcsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICB9LCBbXSlcbiAgICByZXR1cm4geyBkYXRhLCBmcnVpdCwgY291bnR5IH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgdXNlU291dmVuaXJzRGF0YVxuIiwiaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBCcmVhZGNydW1icyA9ICh7IGRhdGEsIGNsYXNzTmFtZSB9KSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgW3NlYXJjaF0gPSB1c2VTZWFyY2hQYXJhbXMoKVxuICAgIGNvbnN0IGlzRW1iZWQgPSBzZWFyY2guZ2V0KCdlbWJlZCcpID09PSAnMSdcbiAgICBpZiAoaXNFbWJlZCkgcmV0dXJuIG51bGxcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYnJlYWRjcnVtYnMgcHktMiBmdWxsLXdpZHRoICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1hdy0xNDAwcHggaC00IG14LWF1dG8gZnotMTRweFwiPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleT1cIkNcIlxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Lit6ZaT5a6a5L2N6bueKEMpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ub25lIGQteGwtYmxvY2sgdy0yIG1sLW4yIHRleHQtaW5oZXJpdFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDo6OlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggY3J1bWJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC8ke2xhbmd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWluaGVyaXQgaG92ZXItcHJpbWFyeWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+6aaW6aCBPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICB7ISFkYXRhPy5sZW5ndGggJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEubWFwKCh7IHRpdGxlLCB1cmwgfSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkLWZsZXggY3J1bWJcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISF1cmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtaW5oZXJpdCBob3Zlci1wcmltYXJ5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3RpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJyZWFkY3J1bWJzKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTZWFyY2hCYXIgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBteS1bMzJweF0gbWQ6bXktWzY0cHhdIG14LWF1dG8gbWF4LXctWzgwMHB4XSByb3VuZGVkLXBpbGwgYm9yZGVyLVsxcHhdIGJvcmRlci1zb2xpZCBib3JkZXItWyNmMGYwZjBdXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtWzEycHhdXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXNlYXJjaCB0ZXh0LVsyNHB4XVwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgaC0xMDBcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuiri+i8uOWFpemXnOmNteWtl1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBweS1bMTJweF0gcHgtWzI0cHhdIHJvdW5kZWQtcGlsbCBib3JkZXItWzJweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bIzgyYmU2Nl0gdHJzLWFsbCBob3ZlcjpiZy1bI0U0RjRERF1cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tYWR2LWZpbGwgdGV4dC1bMjRweF0gdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6YmxvY2sgbWwtWzRweF0gZm9udC1ib2xkIHRleHQtWyMyZDczMTZdIHRleHQtWzE4cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIOmAsumajuaQnOWwi1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWFyY2hCYXIpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGh1bWJGcmFtZSBmcm9tICdjb21wb25lbnRzL1RodW1iRnJhbWUnXG5pbXBvcnQgQXV0b1N3aXRjaExpbmsgZnJvbSAnY29tcG9uZW50cy9BdXRvU3dpdGNoTGluaydcblxuY29uc3QgU291dmVuaXJzQ2FyZCA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIHNwb3RfbmFtZSwgdGVsLCBjb3ZlciB9ID0gZGF0YVxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRvU3dpdGNoTGlua1xuICAgICAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgICAgICBpc0xpbmtPdXQ9e2ZhbHNlfVxuICAgICAgICAgICAgaHJlZj17YC9zb3V2ZW5pci8ke2lkfWB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IHJlbGF0aXZlIGgtWzExMHB4XSBtZDpoLVsxODRweF0gcm91bmRlZC1bMTZweF0gbWQ6cm91bmRlZC1bMzJweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XSBib3JkZXItWyNmMGYwZjBdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTUwMCBob3Zlcjpib3JkZXItWyM4MmJlNjZdIGhvdmVyOnJpbmctWzJweF0gaG92ZXI6cmluZy1bIzgyYmU2Nl0gZ3JvdXBcIlxuICAgICAgICA+XG4gICAgICAgICAgICA8VGh1bWJGcmFtZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGFzcGVjdC1bMS4zXSBmbGV4LXNocmluay0wIHctWzE0M3B4XSBtZDp3LVsyNDVweF0gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI2ZmZjVkOV0gdG8tWyNmYmNlNGNdIGgtc2NyZWVuIHctZnVsbCByb3VuZGVkLWwtWzE0cHhdIG1kOnJvdW5kZWQtbC1bMzBweF1cIlxuICAgICAgICAgICAgICAgIHNyYz17Y292ZXJ9XG4gICAgICAgICAgICAgICAgYWx0PXtzcG90X25hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIG1iLVs1cHhdIHB4LVsxNnB4XSBtZDpteS1bMjRweF0gbWQ6cHgtWzI0cHhdIHctaW5oZXJpdCBoLWluaGVyaXQgdGV4dC1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOm1iLVsxNnB4XSB0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsyMnB4XSB0ZXh0LVsjM2MzYzNjXVwiPlxuICAgICAgICAgICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBtci1bOHB4XSB3LVsyMHB4XSBoLVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1sb2NhdGlvbiB0ZXh0LVsjODJiZTY2XVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgdGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3BvdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1zaHJpbmstMCBtci1bOHB4XSB3LVsyMHB4XSBoLVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10ZWwgdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1maWxsIHRleHQtWzE0cHhdIG1kOnRleHQtWzE4cHhdIHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0F1dG9Td2l0Y2hMaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTb3V2ZW5pcnNDYXJkKVxuIiwiaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ2NvbXBvbmVudHMvQnJlYWRjcnVtYnMnXG5pbXBvcnQgSTE4TiBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgdXNlTWVkaWEgZnJvbSAnaG9va3MvdXNlTWVkaWEnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEJhbm5lclRpdGxlID0gKHsgdGl0bGUsIHN1YiwgY29udGVudCwgaW1nIH0pID0+IHtcbiAgICBjb25zdCBpc0xheW91dE1EID0gdXNlTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDAgaC1bMzc1cHhdIGxnOmgtWzMzdnddIG1heC1oLVs2NDBweF1gfVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJyR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfS9pbWFnZXMvYmFubmVyLyR7aW1nfScpYCxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGJnLWdyYWRpZW50LXRvLXQgZnJvbS1bIzAwMDAwMDYwXSB0by1bIzAwMDAwMDAwXSB3LTEwMCBoLTEwMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBkcm9wLXNoYWRvdy1bMF8wXzhweF9yZ2JhKDAsMCwwLDAuOCldIHB0LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIG1iLTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnotMjBweCBmei1tZC0yNHB4IG1iLTRweFwiPntzdWJ9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTMycHggZnotbWQtNDBweCBmei14bC00OHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTE0cHggZnotbWQtMTZweCBmei14bC0xOHB4IHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb250ZW50ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlzTGF5b3V0TUQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuc3BsaXQoJyAnKS5tYXAoKHN0ciwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPntzdHJ9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPntjb250ZW50fTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxCcmVhZGNydW1ic1xuICAgICAgICAgICAgICAgICAgICBkYXRhPXtbeyB0aXRsZTogc3ViIH1dfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBsZWZ0LTYgYm90dG9tLTAgdGV4dC13aGl0ZVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQmFubmVyVGl0bGUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgU291dmVuaXJzQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NvdXZlbmlyc0NhcmQnXG5cbmNvbnN0IFNvdXZlbmlyc0xpc3QgPSAoeyBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHgtWzE2cHhdIG1kOnB4LVsyNHB4XSBtYXgtdy1bMTI4MHB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC1bMjRweF0gcGItWzQwcHhdIG1kOnBiLVs4MHB4XVwiPlxuICAgICAgICAgICAgICAgIHtkYXRhPy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgeGw6Z3JpZC1jb2xzLTIgZ2FwLVsxNnB4XSBtZDpnYXAtWzI0XSBwdC1bOHB4XSBtZDpwdC1bMzJweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U291dmVuaXJzQ2FyZCBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTb3V2ZW5pcnNMaXN0KVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBTb3V2ZW5pcnNOYXYgPSAoeyBmcnVpdCwgc2V0U2VsZWN0ZWRGcnVpdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1bMjRweF0gXCI+XG4gICAgICAgICAgICB7LyogY2xhc3NOYW1l5o6l5pS25aSW6Z2i5YKz6YCy5L6G55qE5qij5byPICovfVxuICAgICAgICAgICAgeyEhZnJ1aXQgPiBsZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBtZDpqdXN0aWZ5LWNlbnRlciBnYXAtWzE2cHhdIG14LW4zIHBsLVsxNnB4XSBtZDpwbC1bODBweF0geGw6cGwtWzBweF0gdGV4dC1jZW50ZXIgb3ZlcmZsb3cteC1hdXRvIG1kOm92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZydWl0Lm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMCBweS1bMTJweF0gcHgtWzI0cHhdIGJvcmRlciBib3JkZXItWyNmMGYwZjBdIHJvdW5kZWQtcGlsbCBjdXJzb3ItcG9pbnRlciBob3ZlcjpiZy1bIzgyYmU2Nl0gZ3JvdXAgdHJzLWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlbGVjdGVkRnJ1aXQoaXRlbSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxOHB4XSB0ZXh0LVsjNzY3Njc2XSBncm91cC1ob3Zlcjp0ZXh0LVsjZmZmXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHsvKiBrZXkg6KitaSBqIGsg77yM6Iul6L+05ZyI6KOh6Z2i6YKE5pyJ6L+05ZyI77yM6Kit5LiN5LiA5qij55qEa2V577yM5Y+N5LmL6YO955SoaeWNs+WPryAqL31cbiAgICAgICAgICAgICAgICAgICAgPGxpPjwvbGk+IHsvKiDlpJroqK3kuIDlgItsaeiuk+acgOW+jOS4gOWAi2xp5LiN5pyD6LK85Zyo6YKK6YKKICovfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU291dmVuaXJzTmF2KVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFubmVyVGl0bGUgZnJvbSAnY29tcG9uZW50cy9iYW5uZXJUaXRsZSdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgU291dmVuaXJzTmF2IGZyb20gJy4vU291dmVuaXJzTmF2J1xuaW1wb3J0IFNvdXZlbmlyc0xpc3QgZnJvbSAnLi9Tb3V2ZW5pcnNMaXN0J1xuaW1wb3J0IHVzZVNvdXZlbmlyc0RhdGEgZnJvbSAnLi4vLi4vYXBpL3VzZVNvdXZlbmlyc0RhdGEnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICdob29rcydcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gdXNlTG9jYWxlKClcbiAgICBjb25zdCB7IGRhdGEsIGZydWl0LCBjb3VudHkgfSA9IHVzZVNvdXZlbmlyc0RhdGEoeyBsYW5nIH0pIHx8IHt9XG4gICAgY29uc3QgW3NlbGVjdGVkRnJ1aXQsIHNldFNlbGVjdGVkRnJ1aXRdID0gdXNlU3RhdGUobnVsbClcblxuICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHNlbGVjdGVkRnJ1aXRcbiAgICAgICAgPyBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5jYXRlZ29yaWVzLmluY2x1ZGVzKHNlbGVjdGVkRnJ1aXQuaWQpKVxuICAgICAgICA6IGRhdGFcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgICAgICA8QmFubmVyVGl0bGVcbiAgICAgICAgICAgICAgICB0aXRsZT17J+WatOmBuOiHuueBo+i+sueJueeUouWlveemrid9XG4gICAgICAgICAgICAgICAgc3ViPXtg5rC05p6c5Ly05omL56auYH1cbiAgICAgICAgICAgICAgICBjb250ZW50PXtg44CM5Zq06YG46KO96YCg44CB5Zyo5Zyw55Sf55Si44CN5a2V6IKy5Ye65a+25bO25Zyo5Zyw5aW95ruL5ZGz77yM6Ie654Gj6L6y54m555Si5rOo6YeN566h5o6n5Y+K5a6J5YWo5ZOB6LOq77yMIOWQhOeorueJueiJsueUouWTgeWkmuWFg+mBuOaTh++8jOW5tOevgOmAgeemruOAgeWtl+mAgeWFqeebuOWunO+8gWB9XG4gICAgICAgICAgICAgICAgaW1nPXtgZ2lmdC5qcGdgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTUgcHkteGwtMTAgbWQ6bWItWzQwcHhdIHhsOm1iLVswcHhdXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LVs4MDBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFNvdXZlbmlyc05hdlxuICAgICAgICAgICAgICAgICAgICAgICAgZnJ1aXQ9e2ZydWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRGcnVpdD17c2V0U2VsZWN0ZWRGcnVpdH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1bMTZweF0gbWQ6cHgtWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoQmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJ1aXQ9e2ZydWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eT17Y291bnR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkRGF0YT17ZmlsdGVyZWREYXRhfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgeyEhZGF0YSA+IGxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctWzEyODBweF0gYm9yZGVyLWItWzFweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bI2M0YzRjNF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJweS1bOHB4XSB0ZXh0LVsjNzY3Njc2XSB0ZXh0LVsxNHB4IG1kOnRleHQtWzE2cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWFseaciXtmaWx0ZXJlZERhdGEubGVuZ3RofSDpoIXntZDmnpxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8U291dmVuaXJzTGlzdCBkYXRhPXtmaWx0ZXJlZERhdGF9IC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYWdlKVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic3dhbCIsInVzZVNvdXZlbmlyc0RhdGEiLCJfcmVmIiwiX3MyIiwiX3MiLCJsYW5nIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsIl9zbGljZWRUb0FycmF5IiwiZGF0YSIsInNldERhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZydWl0Iiwic2V0RnJ1aXQiLCJfdXNlU3RhdGU1IiwiX3VzZVN0YXRlNiIsImNvdW50eSIsInNldENvdW50eSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsIl9yZWYyIiwic3VjY2VzcyIsImZydWl0SWRzIiwibWFwIiwiZiIsImlkIiwiZmlsdGVyZWREYXRhIiwiZmlsdGVyIiwiaXRlbSIsImNhdGVnb3JpZXMiLCJzb21lIiwiY2F0IiwiaW5jbHVkZXMiLCJmb3JFYWNoIiwiX2l0ZW0kcGhvbmUiLCJfaXRlbSRwaG9uZTIiLCJfaXRlbSRpbWFnZXMiLCJfaXRlbSRpbWFnZXMyIiwidGVsIiwicGhvbmUxIiwidHJpbSIsInBob25lMiIsImNvdmVyIiwiaW1hZ2VzIiwiZmluZCIsInVybCIsImNvbmNhdCIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1BBVEgiLCJ0aXRsZSIsInRvU3RyaW5nIiwiaWNvbiIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJJMThOIiwiTGluayIsInVzZUxvY2FsZSIsIlJlYWN0IiwidXNlU2VhcmNoUGFyYW1zIiwiQnJlYWRjcnVtYnMiLCJjbGFzc05hbWUiLCJfdXNlU2VhcmNoUGFyYW1zIiwiX3VzZVNlYXJjaFBhcmFtczIiLCJzZWFyY2giLCJpc0VtYmVkIiwiZ2V0IiwiY3JlYXRlRWxlbWVudCIsImFjY2Vzc0tleSIsImhyZWYiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwiaSIsImtleSIsIl9jMyIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCIsIlNlYXJjaEJhciIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJUaHVtYkZyYW1lIiwiQXV0b1N3aXRjaExpbmsiLCJTb3V2ZW5pcnNDYXJkIiwic3BvdF9uYW1lIiwiaXNMaW5rT3V0Iiwic3JjIiwiYWx0IiwidXNlTWVkaWEiLCJCYW5uZXJUaXRsZSIsInN1YiIsImNvbnRlbnQiLCJpbWciLCJpc0xheW91dE1EIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJzcGxpdCIsInN0ciIsIlNvdXZlbmlyc0xpc3QiLCJTb3V2ZW5pcnNOYXYiLCJzZXRTZWxlY3RlZEZydWl0IiwiUGFnZSIsInNlbGVjdGVkRnJ1aXQiXSwic291cmNlUm9vdCI6IiJ9