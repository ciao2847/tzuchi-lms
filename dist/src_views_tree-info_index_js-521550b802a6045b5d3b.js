"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_tree-info_index_js"],{

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

/***/ "./src/components/FruitTitle.js"
/*!**************************************!*\
  !*** ./src/components/FruitTitle.js ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var FruitTitle = function FruitTitle(_ref) {
  var data = _ref.data;
  var duration = data.duration,
    categoryName = data.categoryName;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-[56px] xl:mt-[104px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-b from-[#fff] to-[#fff8e2] h-screen w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-[24px] xl:pl-[80px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      title: '四季水果'
    }, {
      title: categoryName
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-md-[16px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-0 py-[24px] md:py-[40px] max-w-[880px] text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "pt-[16px] pb-[8px] text-[40px] md:text-[56px] font-bold"
  }, categoryName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fz-16px text-justify text-md-center"
  }, duration)))));
};
_c3 = FruitTitle;
_c = FruitTitle;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitTitle));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitTitle");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitTitle");

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

/***/ "./src/views/tree-info/TreeInfo.js"
/*!*****************************************!*\
  !*** ./src/views/tree-info/TreeInfo.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* harmony import */ var _components_ThumbFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var _TreeLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeLink */ "./src/views/tree-info/TreeLink.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

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



var TreeInfo = function TreeInfo(_ref) {
  var data = _ref.data;
  var description = data.description,
    units = data.units,
    contact_info = data.contact_info,
    related_links = data.related_links;

  // 分割description標題：<strong><\/strong><br \/>與內容文字分段
  var parts = description.split(/(<strong>.*?<\/strong><br \/>)/g);

  // contact_info看到\r\n換行
  var contactInfoList = contact_info.split('\r\n');

  //將物件換成陣列
  var linksArray = Object.entries(related_links);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] xl:py-[64px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u8A8D\u990A\u65B9\u5F0F\u8AAA\u660E",
    fill: "#fbce4c",
    className: "mb-[24px] md:mb-[32px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] md:px-[40px]"
  }, parts.map(function (part, index) {
    if (/<strong>.*?<\/strong><br \/>/.test(part)) {
      // 標題
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        key: index,
        className: "md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold",
        dangerouslySetInnerHTML: {
          __html: part
        }
      });
    } else {
      // 內容
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
        key: index,
        className: "text-justify fz-18px text-[#3c3c3c]",
        dangerouslySetInnerHTML: {
          __html: part
        }
      });
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] xl:py-[64px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u63D0\u4F9B\u8A8D\u990A\u55AE\u4F4D",
    fill: "#fbce4c",
    className: "mb-[24px] md:mb-[32px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] md:px-[40px] mt-[16px] xl:mt-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-justify fz-18px text-[#3c3c3c]"
  }, units))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] xl:py-[64px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u806F\u7D61\u65B9\u5F0F",
    fill: "#fbce4c",
    className: "mb-[24px] md:mb-[32px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] md:px-[40px] mt-[16px] xl:mt-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null, contactInfoList.map(function (item, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: index,
      className: " text-justify fz-18px text-[#3c3c3c]",
      dangerouslySetInnerHTML: {
        __html: item
      }
    });
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] py-[24px] md:py-[40px] xl:py-[64px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[900px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ThumbFrame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative aspect-[1.33469388] rounded-[16px] md:rounded-[32px]",
    alt: "",
    src: ""
    // ratio="16by9"
  }))), !!(linksArray !== null && linksArray !== void 0 && linksArray.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-[24px] md:pt-[64px] pb-[80px] md:pb-[160px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "\u76F8\u95DC\u9023\u7D50",
    fill: "#fbce4c",
    className: "mb-[24px] md:mb-[32px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto py-[40px] px-[24px] max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex flex-wrap gap-[16px] justify-start"
  }, linksArray.map(function (_ref2, i) {
    var _ref3 = _slicedToArray(_ref2, 2),
      linkName = _ref3[0],
      href = _ref3[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      linksArray: [linkName, href]
    }));
  }))))));
};
_c3 = TreeInfo;
_c = TreeInfo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TreeInfo));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TreeInfo");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TreeInfo");

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

/***/ "./src/views/tree-info/TreeLink.js"
/*!*****************************************!*\
  !*** ./src/views/tree-info/TreeLink.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

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

var TreeLink = function TreeLink(_ref) {
  var linksArray = _ref.linksArray;
  var _linksArray = _slicedToArray(linksArray, 2),
    linkName = _linksArray[0],
    href = _linksArray[1];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: href,
    className: "flex justify-center items-center py-[12px] px-[24px] w-fit rounded-pill border-solid border-[#82be66] border-[2px] justify-self-start trs-all hover:bg-[#e4f4dd]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "mr-[8px] text-[#2d7316] icon icon-link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[20px] font-bold text-[#2d7316]"
  }, linkName));
};
_c3 = TreeLink;
_c = TreeLink;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TreeLink));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TreeLink");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TreeLink");

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

/***/ "./src/views/tree-info/index.js"
/*!**************************************!*\
  !*** ./src/views/tree-info/index.js ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Spinner */ "./src/components/Spinner.js");
/* harmony import */ var _TreeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeInfo */ "./src/views/tree-info/TreeInfo.js");
/* harmony import */ var _components_FruitTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FruitTitle */ "./src/components/FruitTitle.js");
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
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    id = _useParams.id;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("/_api/zh-tw/fruit-trees?id=".concat(id), {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref) {
      var success = _ref.success,
        data = _ref.data,
        category = _ref.category;
      if (success) {
        data.categoryName = data.categories.map(function (categoryId) {
          var _category$find;
          return (_category$find = category.find(function (c) {
            return c.id === categoryId;
          })) === null || _category$find === void 0 ? void 0 : _category$find.name;
        });
        setData(data);
      }
    })["catch"](console.error);
  }, []);
  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex justify-content-center p-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: 18,
      color: 'black'
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FruitTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    data: data
  }), !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data
  }));
};
_s2(Page, "7sPUS5LxhBP0twfAc0UPbpmLYsg=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams];
});
_c3 = Page;
_s(Page, "Dlp57UOu2IPKS/wIyN1kg8mipuo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3RyZWUtaW5mb19pbmRleF9qcy01MjE1NTBiODAyYTYwNDViNWQzYi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBa0M7QUFDQTtBQUNEO0FBQ1I7QUFDeUI7QUFFbEQsSUFBTUssV0FBVyxHQUFHLFNBQWRBLFdBQVdBLENBQUFDLElBQUEsRUFBNEI7RUFBQUMsR0FBQTtFQUFBQyxFQUFBO0VBQUEsSUFBdEJDLElBQUksR0FBQUgsSUFBQSxDQUFKRyxJQUFJO0lBQUVDLFNBQVMsR0FBQUosSUFBQSxDQUFUSSxTQUFTO0VBQ2xDLElBQU1DLElBQUksR0FBR1QsZ0RBQVMsQ0FBQyxDQUFDO0VBQ3hCLElBQUFVLGdCQUFBLEdBQWlCUixpRUFBZSxDQUFDLENBQUM7SUFBQVMsaUJBQUEsR0FBQUMsY0FBQSxDQUFBRixnQkFBQTtJQUEzQkcsTUFBTSxHQUFBRixpQkFBQTtFQUNiLElBQU1HLE9BQU8sR0FBR0QsTUFBTSxDQUFDRSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRztFQUMzQyxJQUFJRCxPQUFPLEVBQUUsT0FBTyxJQUFJO0VBRXhCLG9CQUNJYiwwREFBQTtJQUFLTyxTQUFTLGlDQUFBUyxNQUFBLENBQWlDVCxTQUFTO0VBQUcsZ0JBQ3ZEUCwwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBMEQsZ0JBQ3JFUCwwREFBQTtJQUNJaUIsU0FBUyxFQUFDLEdBQUc7SUFDYkMsSUFBSSxFQUFDLEdBQUc7SUFDUkMsS0FBSyxFQUFDLG1DQUFVO0lBQ2hCWixTQUFTLEVBQUMsMENBQTBDO0lBQ3BEYSxPQUFPLEVBQUUsU0FBVEEsT0FBT0EsQ0FBR0MsQ0FBQyxFQUFLO01BQ1pBLENBQUMsQ0FBQ0MsY0FBYyxDQUFDLENBQUM7SUFDdEI7RUFBRSxHQUNMLEtBRUUsQ0FBQyxlQUNKdEIsMERBQUE7SUFBSU8sU0FBUyxFQUFD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c0NBQUEsQ0FBQUgsRUFBQTtBQUFBRyxzQ0FBQSxDQUFBRixHQUFBO0FBQUEsSUFBQUYsR0FBQTtBQUFBSSxzQ0FBQSxDQUFBSixHQUFBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvY29tcG9uZW50cy9CcmVhZGNydW1icy5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvY29tcG9uZW50cy9GcnVpdFRpdGxlLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy90cmVlLWluZm8vVHJlZUluZm8uanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3RyZWUtaW5mby9UcmVlTGluay5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3MvdHJlZS1pbmZvL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOIGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJ2hvb2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoeyBkYXRhLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSB1c2VMb2NhbGUoKVxuICAgIGNvbnN0IFtzZWFyY2hdID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBpc0VtYmVkID0gc2VhcmNoLmdldCgnZW1iZWQnKSA9PT0gJzEnXG4gICAgaWYgKGlzRW1iZWQpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJyZWFkY3J1bWJzIHB5LTIgZnVsbC13aWR0aCAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYXctMTQwMHB4IGgtNCBteC1hdXRvIGZ6LTE0cHhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXk9XCJDXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuS4remWk+WumuS9jem7nihDKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLWJsb2NrIHctMiBtbC1uMiB0ZXh0LWluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA6OjpcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1pbmhlcml0IGhvdmVyLXByaW1hcnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPummlumggTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgeyEhZGF0YT8ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoeyB0aXRsZSwgdXJsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWluaGVyaXQgaG92ZXItcHJpbWFyeWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCcmVhZGNydW1icylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICcuL0JyZWFkY3J1bWJzJ1xuXG5jb25zdCBGcnVpdFRpdGxlID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgeyBkdXJhdGlvbiwgY2F0ZWdvcnlOYW1lIH0gPSBkYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bNTZweF0geGw6bXQtWzEwNHB4XVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1iIGZyb20tWyNmZmZdIHRvLVsjZmZmOGUyXSBoLXNjcmVlbiB3LWZ1bGwgXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHB4LVsxNnB4XSBtZDpweC1bMjRweF0geGw6cGwtWzgwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxCcmVhZGNydW1ic1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17W3sgdGl0bGU6ICflm5vlraPmsLTmnpwnIH0sIHsgdGl0bGU6IGNhdGVnb3J5TmFtZSB9XX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LW1kLVsxNnB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHgtWzE2cHhdIG1kOnB4LTAgcHktWzI0cHhdIG1kOnB5LVs0MHB4XSBtYXgtdy1bODgwcHhdIHRleHQtY2VudGVyIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInB0LVsxNnB4XSBwYi1bOHB4XSB0ZXh0LVs0MHB4XSBtZDp0ZXh0LVs1NnB4XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnlOYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZ6LTE2cHggdGV4dC1qdXN0aWZ5IHRleHQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2R1cmF0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnJ1aXRUaXRsZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZUxpbmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZUxpbmUnXG5pbXBvcnQgVGh1bWJGcmFtZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RodW1iRnJhbWUnXG5pbXBvcnQgVHJlZUxpbmsgZnJvbSAnLi9UcmVlTGluaydcblxuY29uc3QgVHJlZUluZm8gPSAoeyBkYXRhIH0pID0+IHtcbiAgICBjb25zdCB7IGRlc2NyaXB0aW9uLCB1bml0cywgY29udGFjdF9pbmZvLCByZWxhdGVkX2xpbmtzIH0gPSBkYXRhXG5cbiAgICAvLyDliIblibJkZXNjcmlwdGlvbuaomemhjO+8mjxzdHJvbmc+PFxcL3N0cm9uZz48YnIgXFwvPuiIh+WFp+WuueaWh+Wtl+WIhuautVxuICAgIGNvbnN0IHBhcnRzID0gZGVzY3JpcHRpb24uc3BsaXQoLyg8c3Ryb25nPi4qPzxcXC9zdHJvbmc+PGJyIFxcLz4pL2cpXG5cbiAgICAvLyBjb250YWN0X2luZm/nnIvliLBcXHJcXG7mj5vooYxcbiAgICBjb25zdCBjb250YWN0SW5mb0xpc3QgPSBjb250YWN0X2luZm8uc3BsaXQoJ1xcclxcbicpXG5cbiAgICAvL+Wwh+eJqeS7tuaPm+aIkOmZo+WIl1xuICAgIGNvbnN0IGxpbmtzQXJyYXkgPSBPYmplY3QuZW50cmllcyhyZWxhdGVkX2xpbmtzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bODgwcHhdXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS1bMjRweF0gbWQ6cHktWzQwcHhdIHhsOnB5LVs2NHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuiqjemkiuaWueW8j+iqquaYjlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZiY2U0Y1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi1bMjRweF0gbWQ6bWItWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1bMjRweF0gbWQ6cHgtWzQwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFydHMubWFwKChwYXJ0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgvPHN0cm9uZz4uKj88XFwvc3Ryb25nPjxiciBcXC8+Ly50ZXN0KHBhcnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOaomemhjFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6WzMycHhdIHBiLVsxNnB4XSBtZDpwYi1bMTZweF0gdGV4dC1sZWZ0IGZ6LTIwcHggdGV4dC1bIzJkNzMxNl0gZm9udC1ib2xkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IHBhcnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YWn5a65XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IGZ6LTE4cHggdGV4dC1bIzNjM2MzY11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogcGFydFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS1bMjRweF0gbWQ6cHktWzQwcHhdIHhsOnB5LVs2NHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8VGl0bGVMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuaPkOS+m+iqjemkiuWWruS9jVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZiY2U0Y1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi1bMjRweF0gbWQ6bWItWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1bMjRweF0gbWQ6cHgtWzQwcHhdIG10LVsxNnB4XSB4bDptdC1bMjRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtanVzdGlmeSBmei0xOHB4IHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3VuaXRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktWzI0cHhdIG1kOnB5LVs0MHB4XSB4bDpweS1bNjRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLoga/ntaHmlrnlvI9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmYmNlNGNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItWzI0cHhdIG1kOm1iLVszMnB4XVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtWzI0cHhdIG1kOnB4LVs0MHB4XSBtdC1bMTZweF0geGw6bXQtWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRhY3RJbmZvTGlzdC5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LWp1c3RpZnkgZnotMThweCB0ZXh0LVsjM2MzYzNjXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9faHRtbDogaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LVsyNHB4XSBweS1bMjRweF0gbWQ6cHktWzQwcHhdIHhsOnB5LVs2NHB4XVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bOTAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaHVtYkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3QtWzEuMzM0NjkzODhdIHJvdW5kZWQtWzE2cHhdIG1kOnJvdW5kZWQtWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmF0aW89XCIxNmJ5OVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshIWxpbmtzQXJyYXk/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LVs4ODBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC1bMjRweF0gbWQ6cHQtWzY0cHhdIHBiLVs4MHB4XSBtZDpwYi1bMTYwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLnm7jpl5zpgKPntZBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmJjZTRjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi1bMjRweF0gbWQ6bWItWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHktWzQwcHhdIHB4LVsyNHB4XSBtYXgtdy1bODgwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC1bMTZweF0ganVzdGlmeS1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bGlua3NBcnJheS5tYXAoKFtsaW5rTmFtZSwgaHJlZl0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rc0FycmF5PXtbbGlua05hbWUsIGhyZWZdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFRyZWVJbmZvKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuXG5jb25zdCBUcmVlTGluayA9ICh7IGxpbmtzQXJyYXkgfSkgPT4ge1xuICAgIGNvbnN0IFtsaW5rTmFtZSwgaHJlZl0gPSBsaW5rc0FycmF5XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17aHJlZn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LVsxMnB4XSBweC1bMjRweF0gdy1maXQgcm91bmRlZC1waWxsIGJvcmRlci1zb2xpZCBib3JkZXItWyM4MmJlNjZdIGJvcmRlci1bMnB4XSBqdXN0aWZ5LXNlbGYtc3RhcnQgdHJzLWFsbCBob3ZlcjpiZy1bI2U0ZjRkZF1cIlxuICAgICAgICA+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtci1bOHB4XSB0ZXh0LVsjMmQ3MzE2XSBpY29uIGljb24tbGlua1wiPjwvaT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjBweF0gZm9udC1ib2xkIHRleHQtWyMyZDczMTZdXCI+XG4gICAgICAgICAgICAgICAge2xpbmtOYW1lfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVHJlZUxpbmspXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvU3Bpbm5lcidcbmltcG9ydCBUcmVlSW5mbyBmcm9tICcuL1RyZWVJbmZvJ1xuaW1wb3J0IEZydWl0VGl0bGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GcnVpdFRpdGxlJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGAvX2FwaS96aC10dy9mcnVpdC10cmVlcz9pZD0ke2lkfWAsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHsgc3VjY2VzcywgZGF0YSwgY2F0ZWdvcnkgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY2F0ZWdvcnlOYW1lID0gZGF0YS5jYXRlZ29yaWVzLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAgIChjYXRlZ29yeUlkKSA9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmZpbmQoKGMpID0+IGMuaWQgPT09IGNhdGVnb3J5SWQpPy5uYW1lXG4gICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICBzZXREYXRhKGRhdGEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChjb25zb2xlLmVycm9yKVxuICAgIH0sIFtdKVxuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT17MTh9IGNvbG9yPXsnYmxhY2snfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgICAgeyEhZGF0YSAmJiA8RnJ1aXRUaXRsZSBkYXRhPXtkYXRhfSAvPn1cbiAgICAgICAgICAgIHshIWRhdGEgJiYgPFRyZWVJbmZvIGRhdGE9e2RhdGF9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUGFnZSlcbiJdLCJuYW1lcyI6WyJJMThOIiwiTGluayIsInVzZUxvY2FsZSIsIlJlYWN0IiwidXNlU2VhcmNoUGFyYW1zIiwiQnJlYWRjcnVtYnMiLCJfcmVmIiwiX3MyIiwiX3MiLCJkYXRhIiwiY2xhc3NOYW1lIiwibGFuZyIsIl91c2VTZWFyY2hQYXJhbXMiLCJfdXNlU2VhcmNoUGFyYW1zMiIsIl9zbGljZWRUb0FycmF5Iiwic2VhcmNoIiwiaXNFbWJlZCIsImdldCIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJhY2Nlc3NLZXkiLCJocmVmIiwidGl0bGUiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibWFwIiwiX3JlZjIiLCJpIiwidXJsIiwia2V5IiwiX2MzIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIiwiRnJ1aXRUaXRsZSIsImR1cmF0aW9uIiwiY2F0ZWdvcnlOYW1lIiwiVGl0bGVMaW5lIiwiVGh1bWJGcmFtZSIsIlRyZWVMaW5rIiwiVHJlZUluZm8iLCJkZXNjcmlwdGlvbiIsInVuaXRzIiwiY29udGFjdF9pbmZvIiwicmVsYXRlZF9saW5rcyIsInBhcnRzIiwic3BsaXQiLCJjb250YWN0SW5mb0xpc3QiLCJsaW5rc0FycmF5IiwiT2JqZWN0IiwiZW50cmllcyIsIkZyYWdtZW50IiwiZmlsbCIsInBhcnQiLCJpbmRleCIsInRlc3QiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsIml0ZW0iLCJhbHQiLCJzcmMiLCJfcmVmMyIsImxpbmtOYW1lIiwiX2xpbmtzQXJyYXkiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVBhcmFtcyIsIlNwaW5uZXIiLCJQYWdlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJfdXNlUGFyYW1zIiwiaWQiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdWNjZXNzIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwiY2F0ZWdvcnlJZCIsIl9jYXRlZ29yeSRmaW5kIiwiZmluZCIsImMiLCJuYW1lIiwiY29uc29sZSIsImVycm9yIiwic2l6ZSIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==