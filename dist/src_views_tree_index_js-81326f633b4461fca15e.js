"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_tree_index_js"],{

/***/ "./src/components/AnchorFix.js"
/*!*************************************!*\
  !*** ./src/components/AnchorFix.js ***!
  \*************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useMedia */ "./src/hooks/useMedia.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();


var AnchorFix = function AnchorFix(_ref) {
  _s2();
  _s();
  var _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? -56 : _ref$offset,
    _ref$mdOffset = _ref.mdOffset,
    mdOffset = _ref$mdOffset === void 0 ? -56 : _ref$mdOffset,
    _ref$xlOffset = _ref.xlOffset,
    xlOffset = _ref$xlOffset === void 0 ? -80 : _ref$xlOffset,
    id = _ref.id,
    className = _ref.className,
    text = _ref.text;
  var isTabletLayout = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"])('(min-width: 768px)');
  var isDesktopLayout = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"])('(min-width: 1200px)');
  var topOffset = isDesktopLayout && xlOffset || isTabletLayout && mdOffset || offset;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    className: "d-block w-0 h-0 absolute-top-left text-hide pointer-events-none ".concat(className),
    title: text,
    tabIndex: "-1",
    id: id,
    style: {
      marginTop: topOffset
    }
  }, text);
};
_s2(AnchorFix, "180pvNqzEOAIDyErXxfIQjv75hI=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c3 = AnchorFix;
_s(AnchorFix, "180pvNqzEOAIDyErXxfIQjv75hI=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c = AnchorFix;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AnchorFix));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "AnchorFix");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "AnchorFix");

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

/***/ "./src/components/TreeCard.js"
/*!************************************!*\
  !*** ./src/components/TreeCard.js ***!
  \************************************/
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



var TreeCard = function TreeCard(_ref) {
  var data = _ref.data,
    config = _ref.config;
  var color = config.color,
    cardClassName = config.cardClassName,
    iconClassName = config.iconClassName;
  var id = data.id,
    duration = data.duration,
    countyName = data.countyName,
    categoryName = data.categoryName;
  if (!data) {
    return null; // 如果 data 為 null 或未定義，返回 null
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/tree-info/".concat(id),
    className: "".concat(cardClassName, " flex justify-between py-[16px] px-[24px] border-[1px] border-solid border-[#f0f0f0] rounded-[16px] md:rounded-[32px]  hover:ring-[1px] trs-all")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-start items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[#3c3c3c] text-[18px] font-bold"
  }, categoryName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "".concat(color, " flex justify-center items-center ml-[8px] w-[55px] h-[20px] text-[13px] font-bold rounded-[32px]")
  }, countyName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-[8px] text-[#767676] text-[13px]"
  }, "\u767B\u8A18\u8A8D\u990A\u671F\u9593"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[#3c3c3c] text-[16px] font-bold"
  }, duration)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "".concat(iconClassName, " icon icon-arrow-right text-[24px]")
  }));
};
_c3 = TreeCard;
_c = TreeCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TreeCard));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TreeCard");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TreeCard");

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

/***/ "./src/views/tree/TreeList.js"
/*!************************************!*\
  !*** ./src/views/tree/TreeList.js ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* harmony import */ var _components_TreeCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TreeCard */ "./src/components/TreeCard.js");
/* harmony import */ var _components_AnchorFix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/AnchorFix */ "./src/components/AnchorFix.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var TREE_AREA = [{
  title: '北區',
  city: '基隆市',
  color: 'text-[#d12727] bg-[#ffeeef]',
  fill: '#ff8a8a',
  cardClassName: 'hover:border-[#ff8a8a] hover:ring-[#ff8a8a]',
  iconClassName: 'text-[#ff8a8a]',
  areaName: 'north',
  area: 1
}, {
  title: '中區',
  city: '基隆市',
  color: 'text-[#2d7316] bg-[#e4f4dd]',
  fill: '#82be66',
  cardClassName: 'hover:border-[#82be66] hover:ring-[#82be66]',
  iconClassName: 'text-[#82be66]',
  areaName: 'central',
  area: 2
}, {
  title: '南區',
  city: '基隆市',
  color: 'text-[#106fa2] bg-[#e7f7ff]',
  fill: '#6ebde6',
  cardClassName: 'hover:border-[#6ebde6] hover:ring-[#6ebde6]',
  iconClassName: 'text-[#6ebde6]',
  areaName: 'south',
  area: 3
}, {
  title: '東區',
  city: '基隆市',
  color: 'text-[#bd4f00] bg-[#fff6de]',
  fill: '#fbce4c',
  cardClassName: 'hover:border-[#fbce4c] hover:ring-[#fbce4c]',
  iconClassName: 'text-[#fbce4c]',
  areaName: 'east',
  area: 4
}];
var TreeList = function TreeList(_ref) {
  var data = _ref.data;
  /*    //根據 aera_id 分組
  const aeraData = [
      data.filter((item) => item.aera_id === 1), // aeraData[0]
      data.filter((item) => item.aera_id === 2), // aeraData[1]
      data.filter((item) => item.aera_id === 3), // aeraData[2]
      data.filter((item) => item.aera_id === 4) // aeraData[3]
  ]
  */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "mx-auto mb-[56px] md:mb-[96px] px-[16px] max-w-[1280px]"
  }, TREE_AREA.map(function (area, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "py-[24px] md:py-[40px] xl:py-[64px] relative",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AnchorFix__WEBPACK_IMPORTED_MODULE_3__["default"], {
      id: "anchor-".concat(area.areaName)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
      title: area.title,
      fill: area.fill
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "pt-[40px]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "grid gap-[16px] md:gap-[24px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    }, data.filter(function (item) {
      return item.area_id === area.area;
    }) //aeraData[area.area - 1] 根據aeraData陣列給的分區跑迴圈
    .map(function (item, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: j,
        className: "grid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TreeCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
        config: area,
        data: item,
        category: item
      }));
    }))));
  }));
};
_c3 = TreeList;
_c = TreeList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TreeList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TreeList");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TreeList");

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

/***/ "./src/views/tree/TreeNav.js"
/*!***********************************!*\
  !*** ./src/views/tree/TreeNav.js ***!
  \***********************************/
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


var CONFIG_TREE = [{
  title: '北區',
  Color: 'border-[#ff8a8a]',
  actClassName: 'hover:border-[#ff8a8a] hover:bg-[#ff8a8a] hover:text-[#fff]',
  act: true,
  area: 'north'
}, {
  title: '中區',
  Color: 'border-[#82be66]',
  actClassName: 'hover:border-[#82be66] hover:bg-[#82be66] hover:text-[#fff]',
  area: 'central'
}, {
  title: '南區',
  Color: 'border-[#6ebde6]',
  actClassName: 'hover:border-[#6ebde6] hover:bg-[#6ebde6] hover:text-[#fff]',
  area: 'south'
}, {
  title: '東區',
  Color: 'border-[#fbce4c]',
  actClassName: 'hover:border-[#fbce4c] hover:bg-[#fbce4c] hover:text-[#fff]',
  area: 'east'
}];
var TreeNav = function TreeNav(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] xl:pt-[80px] px-[16px] ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-2 md:grid-cols-4 justify-center items-center flex-wrap gap-[16px] md:gap-[24px]"
  }, CONFIG_TREE.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "".concat(item.Color, " ").concat(item.actClassName, " py-[8px] text-center text-[22px] font-bold border-[2px] rounded-pill border-solid trs-all"),
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      onClick: function onClick() {
        className = 'd-block md:w-[100%] w-[100px]';
        var target = document.querySelector(
        //查找符合指定 CSS 選擇器的第一個元素
        "#anchor-".concat(item.area));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        } else {
          console.error("Target not found: #anchor-".concat(item.area));
        }
      }
    }, item.title));
  })));
};
_c3 = TreeNav;
_c = TreeNav;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TreeNav));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TreeNav");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TreeNav");

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

/***/ "./src/views/tree/index.js"
/*!*********************************!*\
  !*** ./src/views/tree/index.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AREA_CONFIG: () => (/* binding */ AREA_CONFIG),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bannerTitle */ "./src/components/bannerTitle.js");
/* harmony import */ var _TreeNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TreeNav */ "./src/views/tree/TreeNav.js");
/* harmony import */ var _TreeList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TreeList */ "./src/views/tree/TreeList.js");
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



var AREA_CONFIG = [{
  id: 1,
  title: '北部',
  counties: [1, 2, 3, 5, 6, 7, 8]
}, {
  id: 2,
  title: '中部',
  counties: [9, 11, 10, 14, 12, 13]
}, {
  id: 3,
  title: '南部',
  counties: [15, 16, 17]
}, {
  id: 4,
  title: '東部',
  counties: [4, 19, 18]
}];
var Page = function Page() {
  _s2();
  _s();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch('/_api/zh-tw/fruit-trees', {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (resp) {
      return resp.json();
    }).then(function (_ref) {
      var success = _ref.success,
        data = _ref.data,
        county = _ref.county,
        category = _ref.category;
      if (success) {
        data.forEach(function (item) {
          var _AREA_CONFIG$find, _county$find;
          // 對 data 陣列的每個項目 (item) 執行以下操作
          //item新增.area_id屬性，並尋找第一個符合條件的元素
          item.area_id = (_AREA_CONFIG$find = AREA_CONFIG.find(function (area) {
            return area.counties.includes(item.region_id);
          } // 判斷 AREA_CONFIG 的 counties 屬性是否包含當前 item 的 region_id
          )) === null || _AREA_CONFIG$find === void 0 ? void 0 : _AREA_CONFIG$find.id; // 如果找到符合條件的元素，取該元素的 id，否則 area_id 設為 undefined
          item.countyName = (_county$find = county.find(function (c) {
            return c.id === item.region_id;
          })) === null || _county$find === void 0 ? void 0 : _county$find.name;
          item.categoryName = item.categories.map(
          //item.categories 是一個陣列[314]，使用map對陣列中的每個元素，例如[314]進行遍歷
          // 這裡的 categoryId 是 item.categories 陣列中的每個值
          function (categoryId) {
            var _category$find;
            return (_category$find = category.find(function (c) {
              return c.id === categoryId;
            })) === null || _category$find === void 0 ? void 0 : _category$find.name;
          });
        });
        setData(data); // 更新資料到 state
      } else {
        swal({
          title: data.toString(),
          icon: 'info'
        });
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '共同分享採收的樂趣',
    sub: "\u679C\u6A39\u8A8D\u990A",
    content: "\u900F\u904E\u679C\u6A39\u8A8D\u990A\u4E86\u89E3\u8FB2\u4F5C\u7269\u683D\u57F9\u7684\u904E\u7A0B\uFF0C\u5BE6\u969B\u53C3\u8207\u8FB2\u6709\u5728\u7530\u9593\u4F5C\u696D\u3001\u7BA1\u7406\u8207\u63A1\u6536\u7684\u8F9B\u52E4\uFF0C \u8B93\u5404\u591A\u4EBA\u9AD4\u6703\u4E00\u9846\u6C34\u679C\u5F9E\u7121\u5230\u6709\u7684\u6210\u9577\u6545\u4E8B",
    img: "tree.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: ""
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeNav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "mx-auto max-w-[600px]"
  }), !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_TreeList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data
  }))));
};
_s2(Page, "tI2Yw2SRoosw9pK9cWqe8e9ln4A=");
_c3 = Page;
_s(Page, "fQZRxy/+nAZ7NLS1X4dVhrlp8Go=");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3RyZWVfaW5kZXhfanMtODEzMjZmNjMzYjQ0NjFmY2ExNWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNZO0FBQ3JDLElBQU1FLFNBQVMsR0FBRyxTQUFaQSxTQUFTQSxDQUFBQyxJQUFBLEVBT1Q7RUFBQUMsR0FBQTtFQUFBQyxFQUFBO0VBQUEsSUFBQUMsV0FBQSxHQUFBSCxJQUFBLENBTkZJLE1BQU07SUFBTkEsTUFBTSxHQUFBRCxXQUFBLGNBQUcsQ0FBQyxFQUFFLEdBQUFBLFdBQUE7SUFBQUUsYUFBQSxHQUFBTCxJQUFBLENBQ1pNLFFBQVE7SUFBUkEsUUFBUSxHQUFBRCxhQUFBLGNBQUcsQ0FBQyxFQUFFLEdBQUFBLGFBQUE7SUFBQUUsYUFBQSxHQUFBUCxJQUFBLENBQ2RRLFFBQVE7SUFBUkEsUUFBUSxHQUFBRCxhQUFBLGNBQUcsQ0FBQyxFQUFFLEdBQUFBLGFBQUE7SUFDZEUsRUFBRSxHQUFBVCxJQUFBLENBQUZTLEVBQUU7SUFDRkMsU0FBUyxHQUFBVixJQUFBLENBQVRVLFNBQVM7SUFDVEMsSUFBSSxHQUFBWCxJQUFBLENBQUpXLElBQUk7RUFFSixJQUFNQyxjQUFjLEdBQUdkLDBEQUFRLENBQUMsb0JBQW9CLENBQUM7RUFDckQsSUFBTWUsZUFBZSxHQUFHZiwwREFBUSxDQUFDLHFCQUFxQixDQUFDO0VBQ3ZELElBQU1nQixTQUFTLEdBQ1ZELGVBQWUsSUFBSUwsUUFBUSxJQUFNSSxjQUFjLElBQUlOLFFBQVMsSUFBSUYsTUFBTTtFQUUzRSxvQkFDSVAsMERBQUE7SUFDSWEsU0FBUyxxRUFBQU0sTUFBQSxDQUFxRU4sU0FBUyxDQUFHO0lBQzFGTyxLQUFLLEVBQUVOLElBQUs7SUFDWk8sUUFBUSxFQUFDLElBQUk7SUFDYlQsRUFBRSxFQUFFQSxFQUFHO0lBQ1BVLEtBQUssRUFBRTtNQUFFQyxTQUFTLEVBQUVOO0lBQVU7RUFBRSxHQUUvQkgsSUFDRixDQUFDO0FBRVosQ0FBQztBQUFBVixH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SyxFQUFFLFdBQVk7SUFDbkIwQyxHQUFHLDRCQUFTO0lBQ1pDLE9BQU8sMlZBQStEO0lBQ3RFQyxHQUFHO0VBQWEsQ0FDbkIsQ0FBQyxlQUNGaEUsMERBQUE7SUFBU2EsU0FBUyxFQUFDO0VBQUUsZ0JBQ2pCYiwwREFBQSxDQUFDNEYsZ0RBQU87SUFBQy9FLFNBQVMsRUFBQztFQUF1QixDQUFFLENBQUMsRUFDNUMsQ0FBQyxDQUFDcUIsSUFBSSxpQkFBSWxDLDBEQUFBLENBQUNpRixpREFBUTtJQUFDL0MsSUFBSSxFQUFFQTtFQUFLLENBQUUsQ0FDN0IsQ0FDUixDQUNKLENBQUM7QUFFZCxDQUFDO0FBQUE5QixHQUFBLENBdERLbUcsSUFBSTtBQUFBL0UsR0FBQSxHQUFKK0UsSUFBSTtBQXNEVGxHLEVBQUEsQ0F0REtrRyxJQUFJO0FBQUE5RSxFQUFBLEdBQUo4RSxJQUFJO0FBd0RWLGlFQUFBN0UsR0FBQSxnQkFBZTFCLGlEQUFVLENBQUN1RyxJQUFJLENBQUM7QUFBQSxJQUFBOUUsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLHNDQUFBLENBQUFILEVBQUE7QUFBQUcsc0NBQUEsQ0FBQUYsR0FBQTtBQUFBLElBQUFGLEdBQUE7QUFBQUksc0NBQUEsQ0FBQUosR0FBQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvQW5jaG9yRml4LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL0JyZWFkY3J1bWJzLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL1RyZWVDYXJkLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL2Jhbm5lclRpdGxlLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy90cmVlL1RyZWVMaXN0LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy90cmVlL1RyZWVOYXYuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3RyZWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ2hvb2tzL3VzZU1lZGlhJ1xuY29uc3QgQW5jaG9yRml4ID0gKHtcbiAgICBvZmZzZXQgPSAtNTYsXG4gICAgbWRPZmZzZXQgPSAtNTYsXG4gICAgeGxPZmZzZXQgPSAtODAsXG4gICAgaWQsXG4gICAgY2xhc3NOYW1lLFxuICAgIHRleHRcbn0pID0+IHtcbiAgICBjb25zdCBpc1RhYmxldExheW91dCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKVxuICAgIGNvbnN0IGlzRGVza3RvcExheW91dCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiAxMjAwcHgpJylcbiAgICBjb25zdCB0b3BPZmZzZXQgPVxuICAgICAgICAoaXNEZXNrdG9wTGF5b3V0ICYmIHhsT2Zmc2V0KSB8fCAoaXNUYWJsZXRMYXlvdXQgJiYgbWRPZmZzZXQpIHx8IG9mZnNldFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtYmxvY2sgdy0wIGgtMCBhYnNvbHV0ZS10b3AtbGVmdCB0ZXh0LWhpZGUgcG9pbnRlci1ldmVudHMtbm9uZSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgdGl0bGU9e3RleHR9XG4gICAgICAgICAgICB0YWJJbmRleD1cIi0xXCJcbiAgICAgICAgICAgIGlkPXtpZH1cbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogdG9wT2Zmc2V0IH19XG4gICAgICAgID5cbiAgICAgICAgICAgIHt0ZXh0fVxuICAgICAgICA8L2E+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEFuY2hvckZpeClcbiIsImltcG9ydCBJMThOIGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJ2hvb2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoeyBkYXRhLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSB1c2VMb2NhbGUoKVxuICAgIGNvbnN0IFtzZWFyY2hdID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBpc0VtYmVkID0gc2VhcmNoLmdldCgnZW1iZWQnKSA9PT0gJzEnXG4gICAgaWYgKGlzRW1iZWQpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJyZWFkY3J1bWJzIHB5LTIgZnVsbC13aWR0aCAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYXctMTQwMHB4IGgtNCBteC1hdXRvIGZ6LTE0cHhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXk9XCJDXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuS4remWk+WumuS9jem7nihDKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLWJsb2NrIHctMiBtbC1uMiB0ZXh0LWluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA6OjpcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1pbmhlcml0IGhvdmVyLXByaW1hcnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPummlumggTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgeyEhZGF0YT8ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoeyB0aXRsZSwgdXJsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWluaGVyaXQgaG92ZXItcHJpbWFyeWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCcmVhZGNydW1icylcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluaydcblxuY29uc3QgVHJlZUNhcmQgPSAoeyBkYXRhLCBjb25maWcgfSkgPT4ge1xuICAgIGNvbnN0IHsgY29sb3IsIGNhcmRDbGFzc05hbWUsIGljb25DbGFzc05hbWUgfSA9IGNvbmZpZ1xuICAgIGNvbnN0IHsgaWQsIGR1cmF0aW9uLCBjb3VudHlOYW1lLCBjYXRlZ29yeU5hbWUgfSA9IGRhdGFcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgLy8g5aaC5p6cIGRhdGEg54K6IG51bGwg5oiW5pyq5a6a576p77yM6L+U5ZueIG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGlua1xuICAgICAgICAgICAgaHJlZj17YC90cmVlLWluZm8vJHtpZH1gfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtjYXJkQ2xhc3NOYW1lfSBmbGV4IGp1c3RpZnktYmV0d2VlbiBweS1bMTZweF0gcHgtWzI0cHhdIGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjZjBmMGYwXSByb3VuZGVkLVsxNnB4XSBtZDpyb3VuZGVkLVszMnB4XSAgaG92ZXI6cmluZy1bMXB4XSB0cnMtYWxsYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjM2MzYzNjXSB0ZXh0LVsxOHB4XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeU5hbWV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NvbG9yfSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBtbC1bOHB4XSB3LVs1NXB4XSBoLVsyMHB4XSB0ZXh0LVsxM3B4XSBmb250LWJvbGQgcm91bmRlZC1bMzJweF1gfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y291bnR5TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC1bOHB4XSB0ZXh0LVsjNzY3Njc2XSB0ZXh0LVsxM3B4XVwiPlxuICAgICAgICAgICAgICAgICAgICDnmbvoqJjoqo3ppIrmnJ/plpNcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWyMzYzNjM2NdIHRleHQtWzE2cHhdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICB7ZHVyYXRpb259XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtpY29uQ2xhc3NOYW1lfSBpY29uIGljb24tYXJyb3ctcmlnaHQgdGV4dC1bMjRweF1gfVxuICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUcmVlQ2FyZClcbiIsImltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBCYW5uZXJUaXRsZSA9ICh7IHRpdGxlLCBzdWIsIGNvbnRlbnQsIGltZyB9KSA9PiB7XG4gICAgY29uc3QgaXNMYXlvdXRNRCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGgtWzM3NXB4XSBsZzpoLVszM3Z3XSBtYXgtaC1bNjQwcHhdYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2Jhbm5lci8ke2ltZ30nKWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmFkaWVudC10by10IGZyb20tWyMwMDAwMDA2MF0gdG8tWyMwMDAwMDAwMF0gdy0xMDAgaC0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctWzBfMF84cHhfcmdiYSgwLDAsMCwwLjgpXSBwdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTIwcHggZnotbWQtMjRweCBtYi00cHhcIj57c3VifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0zMnB4IGZ6LW1kLTQwcHggZnoteGwtNDhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0xNHB4IGZ6LW1kLTE2cHggZnoteGwtMThweCBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0xheW91dE1EID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNwbGl0KCcgJykubWFwKChzdHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57c3RyfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57Y29udGVudH08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W3sgdGl0bGU6IHN1YiB9XX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC02IGJvdHRvbS0wIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lclRpdGxlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlTGluZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RpdGxlTGluZSdcbmltcG9ydCBUcmVlQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyZWVDYXJkJ1xuaW1wb3J0IEFuY2hvckZpeCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0FuY2hvckZpeCdcblxuY29uc3QgVFJFRV9BUkVBID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfljJfljYAnLFxuICAgICAgICBjaXR5OiAn5Z+66ZqG5biCJyxcbiAgICAgICAgY29sb3I6ICd0ZXh0LVsjZDEyNzI3XSBiZy1bI2ZmZWVlZl0nLFxuICAgICAgICBmaWxsOiAnI2ZmOGE4YScsXG4gICAgICAgIGNhcmRDbGFzc05hbWU6ICdob3Zlcjpib3JkZXItWyNmZjhhOGFdIGhvdmVyOnJpbmctWyNmZjhhOGFdJyxcbiAgICAgICAgaWNvbkNsYXNzTmFtZTogJ3RleHQtWyNmZjhhOGFdJyxcbiAgICAgICAgYXJlYU5hbWU6ICdub3J0aCcsXG4gICAgICAgIGFyZWE6IDFcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfkuK3ljYAnLFxuICAgICAgICBjaXR5OiAn5Z+66ZqG5biCJyxcbiAgICAgICAgY29sb3I6ICd0ZXh0LVsjMmQ3MzE2XSBiZy1bI2U0ZjRkZF0nLFxuICAgICAgICBmaWxsOiAnIzgyYmU2NicsXG4gICAgICAgIGNhcmRDbGFzc05hbWU6ICdob3Zlcjpib3JkZXItWyM4MmJlNjZdIGhvdmVyOnJpbmctWyM4MmJlNjZdJyxcbiAgICAgICAgaWNvbkNsYXNzTmFtZTogJ3RleHQtWyM4MmJlNjZdJyxcbiAgICAgICAgYXJlYU5hbWU6ICdjZW50cmFsJyxcbiAgICAgICAgYXJlYTogMlxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+WNl+WNgCcsXG4gICAgICAgIGNpdHk6ICfln7rpmobluIInLFxuICAgICAgICBjb2xvcjogJ3RleHQtWyMxMDZmYTJdIGJnLVsjZTdmN2ZmXScsXG4gICAgICAgIGZpbGw6ICcjNmViZGU2JyxcbiAgICAgICAgY2FyZENsYXNzTmFtZTogJ2hvdmVyOmJvcmRlci1bIzZlYmRlNl0gaG92ZXI6cmluZy1bIzZlYmRlNl0nLFxuICAgICAgICBpY29uQ2xhc3NOYW1lOiAndGV4dC1bIzZlYmRlNl0nLFxuICAgICAgICBhcmVhTmFtZTogJ3NvdXRoJyxcbiAgICAgICAgYXJlYTogM1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+adseWNgCcsXG4gICAgICAgIGNpdHk6ICfln7rpmobluIInLFxuICAgICAgICBjb2xvcjogJ3RleHQtWyNiZDRmMDBdIGJnLVsjZmZmNmRlXScsXG4gICAgICAgIGZpbGw6ICcjZmJjZTRjJyxcbiAgICAgICAgY2FyZENsYXNzTmFtZTogJ2hvdmVyOmJvcmRlci1bI2ZiY2U0Y10gaG92ZXI6cmluZy1bI2ZiY2U0Y10nLFxuICAgICAgICBpY29uQ2xhc3NOYW1lOiAndGV4dC1bI2ZiY2U0Y10nLFxuICAgICAgICBhcmVhTmFtZTogJ2Vhc3QnLFxuICAgICAgICBhcmVhOiA0XG4gICAgfVxuXVxuXG5jb25zdCBUcmVlTGlzdCA9ICh7IGRhdGEgfSkgPT4ge1xuICAgIC8qICAgIC8v5qC55pOaIGFlcmFfaWQg5YiG57WEXG4gICAgY29uc3QgYWVyYURhdGEgPSBbXG4gICAgICAgIGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmFlcmFfaWQgPT09IDEpLCAvLyBhZXJhRGF0YVswXVxuICAgICAgICBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hZXJhX2lkID09PSAyKSwgLy8gYWVyYURhdGFbMV1cbiAgICAgICAgZGF0YS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uYWVyYV9pZCA9PT0gMyksIC8vIGFlcmFEYXRhWzJdXG4gICAgICAgIGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmFlcmFfaWQgPT09IDQpIC8vIGFlcmFEYXRhWzNdXG4gICAgXVxuICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm14LWF1dG8gbWItWzU2cHhdIG1kOm1iLVs5NnB4XSBweC1bMTZweF0gbWF4LXctWzEyODBweF1cIj5cbiAgICAgICAgICAgIHtUUkVFX0FSRUEubWFwKChhcmVhLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB5LVsyNHB4XSBtZDpweS1bNDBweF0geGw6cHktWzY0cHhdIHJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEFuY2hvckZpeCBpZD17YGFuY2hvci0ke2FyZWEuYXJlYU5hbWV9YH0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFRpdGxlTGluZSB0aXRsZT17YXJlYS50aXRsZX0gZmlsbD17YXJlYS5maWxsfSAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LVs0MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImdyaWQgZ2FwLVsxNnB4XSBtZDpnYXAtWzI0cHhdIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIHhsOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5hcmVhX2lkID09PSBhcmVhLmFyZWEpIC8vYWVyYURhdGFbYXJlYS5hcmVhIC0gMV0g5qC55pOaYWVyYURhdGHpmaPliJfntabnmoTliIbljYDot5Hov7TlnIhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbSwgaikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17an0gY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVlQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e2FyZWF9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5PXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVHJlZUxpc3QpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuY29uc3QgQ09ORklHX1RSRUUgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+WMl+WNgCcsXG4gICAgICAgIENvbG9yOiAnYm9yZGVyLVsjZmY4YThhXScsXG4gICAgICAgIGFjdENsYXNzTmFtZTpcbiAgICAgICAgICAgICdob3Zlcjpib3JkZXItWyNmZjhhOGFdIGhvdmVyOmJnLVsjZmY4YThhXSBob3Zlcjp0ZXh0LVsjZmZmXScsXG4gICAgICAgIGFjdDogdHJ1ZSxcbiAgICAgICAgYXJlYTogJ25vcnRoJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+S4reWNgCcsXG4gICAgICAgIENvbG9yOiAnYm9yZGVyLVsjODJiZTY2XScsXG4gICAgICAgIGFjdENsYXNzTmFtZTpcbiAgICAgICAgICAgICdob3Zlcjpib3JkZXItWyM4MmJlNjZdIGhvdmVyOmJnLVsjODJiZTY2XSBob3Zlcjp0ZXh0LVsjZmZmXScsXG4gICAgICAgIGFyZWE6ICdjZW50cmFsJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+WNl+WNgCcsXG4gICAgICAgIENvbG9yOiAnYm9yZGVyLVsjNmViZGU2XScsXG4gICAgICAgIGFjdENsYXNzTmFtZTpcbiAgICAgICAgICAgICdob3Zlcjpib3JkZXItWyM2ZWJkZTZdIGhvdmVyOmJnLVsjNmViZGU2XSBob3Zlcjp0ZXh0LVsjZmZmXScsXG4gICAgICAgIGFyZWE6ICdzb3V0aCdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmnbHljYAnLFxuICAgICAgICBDb2xvcjogJ2JvcmRlci1bI2ZiY2U0Y10nLFxuICAgICAgICBhY3RDbGFzc05hbWU6XG4gICAgICAgICAgICAnaG92ZXI6Ym9yZGVyLVsjZmJjZTRjXSBob3ZlcjpiZy1bI2ZiY2U0Y10gaG92ZXI6dGV4dC1bI2ZmZl0nLFxuICAgICAgICBhcmVhOiAnZWFzdCdcbiAgICB9XG5dXG5cbmNvbnN0IFRyZWVOYXYgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHB5LVsyNHB4XSBtZDpweS1bNDBweF0geGw6cHQtWzgwcHhdIHB4LVsxNnB4XSAke2NsYXNzTmFtZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtNCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC13cmFwIGdhcC1bMTZweF0gbWQ6Z2FwLVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgIHtDT05GSUdfVFJFRS5tYXAoKGl0ZW0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake2l0ZW0uQ29sb3J9ICR7aXRlbS5hY3RDbGFzc05hbWV9IHB5LVs4cHhdIHRleHQtY2VudGVyIHRleHQtWzIycHhdIGZvbnQtYm9sZCBib3JkZXItWzJweF0gcm91bmRlZC1waWxsIGJvcmRlci1zb2xpZCB0cnMtYWxsYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lID0gJ2QtYmxvY2sgbWQ6dy1bMTAwJV0gdy1bMTAwcHhdJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/mn6Xmib7nrKblkIjmjIflrpogQ1NTIOmBuOaTh+WZqOeahOesrOS4gOWAi+WFg+e0oFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYCNhbmNob3ItJHtpdGVtLmFyZWF9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgVGFyZ2V0IG5vdCBmb3VuZDogI2FuY2hvci0ke2l0ZW0uYXJlYX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oVHJlZU5hdilcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQmFubmVyVGl0bGUgZnJvbSAnY29tcG9uZW50cy9iYW5uZXJUaXRsZSdcbmltcG9ydCBUcmVlTmF2IGZyb20gJy4vVHJlZU5hdidcbmltcG9ydCBUcmVlTGlzdCBmcm9tICcuL1RyZWVMaXN0J1xuXG5leHBvcnQgY29uc3QgQVJFQV9DT05GSUcgPSBbXG4gICAge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgdGl0bGU6ICfljJfpg6gnLFxuICAgICAgICBjb3VudGllczogWzEsIDIsIDMsIDUsIDYsIDcsIDhdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogJ+S4remDqCcsXG4gICAgICAgIGNvdW50aWVzOiBbOSwgMTEsIDEwLCAxNCwgMTIsIDEzXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgdGl0bGU6ICfljZfpg6gnLFxuICAgICAgICBjb3VudGllczogWzE1LCAxNiwgMTddXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA0LFxuICAgICAgICB0aXRsZTogJ+adsemDqCcsXG4gICAgICAgIGNvdW50aWVzOiBbNCwgMTksIDE4XVxuICAgIH1cbl1cblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKCcvX2FwaS96aC10dy9mcnVpdC10cmVlcycsIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHJlc3ApID0+IHJlc3AuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oKHsgc3VjY2VzcywgZGF0YSwgY291bnR5LCBjYXRlZ29yeSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI0gZGF0YSDpmaPliJfnmoTmr4/lgIvpoIXnm64gKGl0ZW0pIOWft+ihjOS7peS4i+aTjeS9nFxuICAgICAgICAgICAgICAgICAgICAgICAgLy9pdGVt5paw5aKeLmFyZWFfaWTlsazmgKfvvIzkuKblsIvmib7nrKzkuIDlgIvnrKblkIjmop3ku7bnmoTlhYPntKBcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uYXJlYV9pZCA9IEFSRUFfQ09ORklHLmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGFyZWEpID0+IGFyZWEuY291bnRpZXMuaW5jbHVkZXMoaXRlbS5yZWdpb25faWQpIC8vIOWIpOaWtyBBUkVBX0NPTkZJRyDnmoQgY291bnRpZXMg5bGs5oCn5piv5ZCm5YyF5ZCr55W25YmNIGl0ZW0g55qEIHJlZ2lvbl9pZFxuICAgICAgICAgICAgICAgICAgICAgICAgKT8uaWQgLy8g5aaC5p6c5om+5Yiw56ym5ZCI5qKd5Lu255qE5YWD57Sg77yM5Y+W6Kmy5YWD57Sg55qEIGlk77yM5ZCm5YmHIGFyZWFfaWQg6Kit54K6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3VudHlOYW1lID0gY291bnR5LmZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGMpID0+IGMuaWQgPT09IGl0ZW0ucmVnaW9uX2lkXG4gICAgICAgICAgICAgICAgICAgICAgICApPy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNhdGVnb3J5TmFtZSA9IGl0ZW0uY2F0ZWdvcmllcy5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9pdGVtLmNhdGVnb3JpZXMg5piv5LiA5YCL6Zmj5YiXWzMxNF3vvIzkvb/nlKhtYXDlsI3pmaPliJfkuK3nmoTmr4/lgIvlhYPntKDvvIzkvovlpoJbMzE0XemAsuihjOmBjeatt1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmAmeijoeeahCBjYXRlZ29yeUlkIOaYryBpdGVtLmNhdGVnb3JpZXMg6Zmj5YiX5Lit55qE5q+P5YCL5YC8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNhdGVnb3J5SWQpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LmZpbmQoKGMpID0+IGMuaWQgPT09IGNhdGVnb3J5SWQpPy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKSAvLyDmm7TmlrDos4fmlpnliLAgc3RhdGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnaW5mbydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICAgICAgPEJhbm5lclRpdGxlXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsn5YWx5ZCM5YiG5Lqr5o6h5pS255qE5qiC6LajJ31cbiAgICAgICAgICAgICAgICAgICAgc3ViPXtg5p6c5qi56KqN6aSKYH1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YOmAj+mBjuaenOaoueiqjemkiuS6huino+i+suS9nOeJqeagveWfueeahOmBjueoi++8jOWvpumam+WPg+iIh+i+suacieWcqOeUsOmWk+S9nOalreOAgeeuoeeQhuiIh+aOoeaUtueahOi+m+WLpO+8jCDorpPlkITlpJrkurrpq5TmnIPkuIDpoYbmsLTmnpzlvp7nhKHliLDmnInnmoTmiJDplbfmlYXkuotgfVxuICAgICAgICAgICAgICAgICAgICBpbWc9e2B0cmVlLmpwZ2B9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFRyZWVOYXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bNjAwcHhdXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgeyEhZGF0YSAmJiA8VHJlZUxpc3QgZGF0YT17ZGF0YX0gLz59XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYWdlKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVkaWEiLCJBbmNob3JGaXgiLCJfcmVmIiwiX3MyIiwiX3MiLCJfcmVmJG9mZnNldCIsIm9mZnNldCIsIl9yZWYkbWRPZmZzZXQiLCJtZE9mZnNldCIsIl9yZWYkeGxPZmZzZXQiLCJ4bE9mZnNldCIsImlkIiwiY2xhc3NOYW1lIiwidGV4dCIsImlzVGFibGV0TGF5b3V0IiwiaXNEZXNrdG9wTGF5b3V0IiwidG9wT2Zmc2V0IiwiY3JlYXRlRWxlbWVudCIsImNvbmNhdCIsInRpdGxlIiwidGFiSW5kZXgiLCJzdHlsZSIsIm1hcmdpblRvcCIsIl9jMyIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCIsIkkxOE4iLCJMaW5rIiwidXNlTG9jYWxlIiwidXNlU2VhcmNoUGFyYW1zIiwiQnJlYWRjcnVtYnMiLCJkYXRhIiwibGFuZyIsIl91c2VTZWFyY2hQYXJhbXMiLCJfdXNlU2VhcmNoUGFyYW1zMiIsIl9zbGljZWRUb0FycmF5Iiwic2VhcmNoIiwiaXNFbWJlZCIsImdldCIsImFjY2Vzc0tleSIsImhyZWYiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibWFwIiwiX3JlZjIiLCJpIiwidXJsIiwia2V5IiwiVHJlZUNhcmQiLCJjb25maWciLCJjb2xvciIsImNhcmRDbGFzc05hbWUiLCJpY29uQ2xhc3NOYW1lIiwiZHVyYXRpb24iLCJjb3VudHlOYW1lIiwiY2F0ZWdvcnlOYW1lIiwiQmFubmVyVGl0bGUiLCJzdWIiLCJjb250ZW50IiwiaW1nIiwiaXNMYXlvdXRNRCIsImJhY2tncm91bmRJbWFnZSIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1BBVEgiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJzcGxpdCIsInN0ciIsIlRpdGxlTGluZSIsIlRSRUVfQVJFQSIsImNpdHkiLCJmaWxsIiwiYXJlYU5hbWUiLCJhcmVhIiwiVHJlZUxpc3QiLCJmaWx0ZXIiLCJpdGVtIiwiYXJlYV9pZCIsImoiLCJjYXRlZ29yeSIsInVzZVN0YXRlIiwiQ09ORklHX1RSRUUiLCJDb2xvciIsImFjdENsYXNzTmFtZSIsImFjdCIsIlRyZWVOYXYiLCJ0YXJnZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiY29uc29sZSIsImVycm9yIiwidXNlRWZmZWN0IiwiQVJFQV9DT05GSUciLCJjb3VudGllcyIsIlBhZ2UiLCJfdXNlU3RhdGUiLCJfdXNlU3RhdGUyIiwic2V0RGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsInN1Y2Nlc3MiLCJjb3VudHkiLCJmb3JFYWNoIiwiX0FSRUFfQ09ORklHJGZpbmQiLCJfY291bnR5JGZpbmQiLCJmaW5kIiwiaW5jbHVkZXMiLCJyZWdpb25faWQiLCJjIiwibmFtZSIsImNhdGVnb3JpZXMiLCJjYXRlZ29yeUlkIiwiX2NhdGVnb3J5JGZpbmQiLCJzd2FsIiwidG9TdHJpbmciLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==