"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_souvenir_index_js"],{

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

/***/ "./src/components/ReturnBtn.js"
/*!*************************************!*\
  !*** ./src/components/ReturnBtn.js ***!
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


var ReturnBtn = function ReturnBtn() {
  var handleBack = function handleBack() {
    window.history.back();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: handleBack,
    className: "py-[8px] px-[24px] text-[18px] text-[#767676] border-[2px] border-solid border-[#f0f0f0] rounded-pill trs-all hover:bg-[#767676] hover:text-[#fff]"
  }, "\u56DE\u4E0A\u4E00\u9801"));
};
_c3 = ReturnBtn;
_c = ReturnBtn;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ReturnBtn));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ReturnBtn");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "ReturnBtn");

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

/***/ "./src/views/souvenir/index.js"
/*!*************************************!*\
  !*** ./src/views/souvenir/index.js ***!
  \*************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _components_ReturnBtn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ReturnBtn */ "./src/components/ReturnBtn.js");
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
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
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
    id = _useParams.id;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    fetch("/_api/zh-tw/souvenirs?id=".concat(id), {
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
        var _data$phone, _data$phone2, _data$images, _data$images2;
        data.tel = ((_data$phone = data.phone1) === null || _data$phone === void 0 ? void 0 : _data$phone.trim()) && data.phone1 || ((_data$phone2 = data.phone2) === null || _data$phone2 === void 0 ? void 0 : _data$phone2.trim()) && data.phone2 || '無電話號碼';
        data.cover = ((_data$images = data.images) === null || _data$images === void 0 || (_data$images = _data$images.find(function (img) {
          return img.url;
        })) === null || _data$images === void 0 ? void 0 : _data$images.url) || ((_data$images2 = data.images) === null || _data$images2 === void 0 || (_data$images2 = _data$images2[0]) === null || _data$images2 === void 0 ? void 0 : _data$images2.url) || "".concat("/fruits-travel", "/images/not-found/miss.jpg");
        data.parts = data.specifications.split('(產期：');
        data.size = data.parts[0];
        data.during = data.parts[1].replace(')', '');
        setData(data);
      }
    })["catch"](console.error);
  }, [id]);
  var cover = data.cover,
    name = data.name,
    tel = data.tel,
    spot_name = data.spot_name,
    size = data.size,
    during = data.during;
  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex justify-content-center p-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Spinner, {
      size: 18,
      color: 'black'
    }));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-[56px] xl:pt-[104px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pb-0 md:pb-[80px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-[24px] max-w-[768px] xl:max-w-[1200px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      title: '水果伴手禮',
      url: "/souvenirs"
    }, {
      title: name,
      url: "/souvenir/".concat(id)
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "xl:flex mt-[21px] xl:mt-[56px] xl:w-[1200px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto md:w-[480px] xl:w-[494px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: " aspect-[1.33333333] rounded-[16px] md:rounded-[32px]",
    src: cover,
    alt: name

    //ratio="16by9"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill mt-[24px] md:mt-[56px] xl:mt-[32px] px-[16px] xl:pl-[56px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "text-justify",
    xmlns: "http://www.w3.org/2000/svg",
    width: "260",
    height: "16",
    viewBox: "0 0 256 16",
    fill: "#82be66",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M17.1139 1.23345C15.2073 1.40012 12.8739 3.76012 11.3339 5.91345C10.8673 6.56678 10.3539 7.37345 9.8806 8.24678C9.41394 7.37345 8.89394 6.56678 8.42727 5.91345C6.8806 3.76012 4.55394 1.40012 2.64727 1.23345C2.01394 1.18012 1.42727 1.37345 1.01394 1.78012C-0.859397 3.61345 1.5406 8.14012 3.24727 10.5201C4.79394 12.6734 7.1206 15.0334 9.02727 15.2001C9.1006 15.2001 9.16727 15.2068 9.2406 15.2068C9.46727 15.2068 9.6806 15.1668 9.8806 15.1001C10.0806 15.1601 10.3006 15.2068 10.5206 15.2068C10.5873 15.2068 10.6606 15.2068 10.7339 15.2001C12.6406 15.0334 14.9673 12.6734 16.5139 10.5201C18.2206 8.13345 20.6206 3.61345 18.7473 1.78012C18.3273 1.36678 17.7406 1.18012 17.1073 1.23345H17.1139ZM5.06727 9.22012C3.1006 6.47345 2.4406 4.10678 2.55394 3.47345C3.16727 3.59345 4.8206 4.71345 6.61394 7.22012C7.64727 8.66678 8.31394 9.99345 8.7006 11.0268C8.53394 11.5935 8.4406 12.1401 8.42727 12.6468C7.6206 12.1468 6.3806 11.0601 5.06727 9.22012ZM14.7006 9.22012C13.3806 11.0601 12.1473 12.1468 11.3406 12.6468C11.3273 12.1401 11.2273 11.6001 11.0673 11.0401C11.4539 9.99345 12.1139 8.66678 13.1539 7.22012C14.9273 4.74678 16.5606 3.62012 17.1939 3.48012C17.3073 4.21345 16.6339 6.53345 14.7073 9.22678L14.7006 9.22012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M63.4739 0.673451C61.5873 0.993451 59.4539 3.53345 58.0873 5.80012C57.6739 6.48678 57.2273 7.34012 56.8273 8.24012C56.2939 7.40678 55.7139 6.64012 55.1939 6.02678C53.4806 4.00012 50.9739 1.83345 49.0606 1.82678H49.0473C48.4139 1.82678 47.8539 2.06678 47.4739 2.50678C45.7606 4.48678 48.5073 8.80012 50.4006 11.0401C52.1139 13.0668 54.6273 15.2335 56.5406 15.2401H56.5539C56.8673 15.2401 57.1606 15.1801 57.4273 15.0668C57.5673 15.0935 57.7006 15.1335 57.8473 15.1335C57.9739 15.1335 58.1073 15.1201 58.2406 15.1001C60.1273 14.7801 62.2606 12.2401 63.6273 9.97345C65.1406 7.46012 67.1673 2.76012 65.1539 1.08012C64.7073 0.706785 64.1139 0.553451 63.4806 0.660118L63.4739 0.673451ZM52.1006 9.60012C49.9206 7.02012 49.0739 4.71345 49.1406 4.06678C49.7606 4.13345 51.4939 5.12012 53.4873 7.48012C54.6339 8.84012 55.4073 10.1068 55.8739 11.1135C55.7539 11.6868 55.7006 12.2401 55.7273 12.7468C54.8806 12.3135 53.5606 11.3268 52.1006 9.60012ZM61.7073 8.82678C60.5406 10.7668 59.3939 11.9468 58.6273 12.5135C58.5739 12.0135 58.4339 11.4801 58.2273 10.9335C58.5273 9.86012 59.0806 8.48012 60.0006 6.95345C61.5739 4.34012 63.1139 3.09345 63.7273 2.90012C63.9006 3.62012 63.4139 5.99345 61.7073 8.82678Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M39.9073 1.46678C38.0339 1.62678 35.7406 3.94678 34.2273 6.06012C33.7739 6.68678 33.2806 7.47345 32.8273 8.31345C32.3739 7.47345 31.8739 6.69345 31.4273 6.06012C29.9139 3.94678 27.6206 1.62678 25.7473 1.46678C25.1206 1.41345 24.5406 1.60678 24.1273 2.01345C22.2873 3.82012 24.6339 8.26679 26.3139 10.6068C27.8273 12.7201 30.1206 15.0401 31.9939 15.2001C32.0606 15.2001 32.1339 15.2068 32.2006 15.2068C32.4206 15.2068 32.6339 15.1668 32.8273 15.1068C33.0273 15.1668 33.2339 15.2068 33.4606 15.2068C33.5273 15.2068 33.6006 15.2068 33.6673 15.2001C35.5406 15.0401 37.8339 12.7201 39.3473 10.6068C41.0273 8.26679 43.3739 3.82012 41.5339 2.01345C41.1206 1.60678 40.5539 1.41345 39.9139 1.46678H39.9073ZM28.1206 9.30012C26.2139 6.64678 25.5606 4.34678 25.6539 3.70678C26.2606 3.84012 27.8673 4.94678 29.6006 7.36678C30.6139 8.77345 31.2606 10.0735 31.6406 11.0935C31.4873 11.6335 31.3939 12.1468 31.3739 12.6335C30.5873 12.1401 29.3873 11.0801 28.1139 9.30678L28.1206 9.30012ZM37.5273 9.30012C36.2539 11.0735 35.0606 12.1335 34.2673 12.6335C34.2473 12.1535 34.1606 11.6335 34.0073 11.1001C34.3806 10.0801 35.0339 8.78012 36.0473 7.36678C37.7606 4.98012 39.3406 3.88012 39.9673 3.71345C40.0606 4.45345 39.3939 6.70678 37.5339 9.30012H37.5273Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M87.7473 1.40678C85.8473 1.46012 83.4206 3.78678 81.7806 5.95345C81.2406 6.66678 80.7273 7.44012 80.2739 8.22678C79.8739 7.31345 79.4273 6.46012 79.0206 5.77345C77.6273 3.40678 75.4673 0.786784 73.5873 0.513451C72.9539 0.426785 72.3606 0.593451 71.9273 1.00012C70.0339 2.76678 72.0939 7.58678 73.6139 10.1601C75.0073 12.5268 77.1739 15.1468 79.0473 15.4201C79.1606 15.4334 79.2673 15.4468 79.3739 15.4468C79.5473 15.4468 79.7073 15.4201 79.8673 15.3801C80.1073 15.4734 80.3606 15.5268 80.6339 15.5268C80.6539 15.5268 80.6739 15.5268 80.7006 15.5268C82.6006 15.4735 85.0273 13.1468 86.6673 10.9801C88.9873 7.92012 90.8206 3.83345 89.3606 2.10012C88.9739 1.64012 88.4273 1.38678 87.7539 1.41345L87.7473 1.40678ZM75.5339 9.02012C73.7406 5.98678 73.2406 3.46012 73.4073 2.76012C74.0206 2.98012 75.5406 4.27345 77.0939 6.91345C78.0473 8.53345 78.6273 9.99345 78.9473 11.1201C78.7539 11.7068 78.6339 12.2735 78.5873 12.7868C77.8273 12.2001 76.6939 10.9801 75.5339 9.02012ZM84.8806 9.62012C83.5206 11.4068 82.2673 12.4735 81.4539 12.9601C81.4739 12.4201 81.4073 11.8335 81.2739 11.2201C81.7073 10.1401 82.4406 8.78012 83.5606 7.30678C85.3873 4.90012 87.0273 3.80678 87.6606 3.66012C87.7539 4.43345 86.9806 6.85345 84.8806 9.62012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M111.007 1.40678C109.107 1.46012 106.681 3.78678 105.041 5.95345C104.381 6.82679 103.761 7.78012 103.241 8.74012C102.681 7.67345 102.041 6.66678 101.474 5.89345C99.8539 3.67345 97.4539 1.27345 95.5539 1.18678C94.9273 1.16678 94.3473 1.38678 93.9473 1.83345C92.2339 3.77345 94.7539 8.37345 96.5073 10.7868C98.1273 13.0068 100.534 15.4068 102.427 15.4935C102.467 15.4935 102.501 15.4935 102.541 15.4935C102.767 15.4935 102.981 15.4535 103.181 15.3868C103.401 15.4668 103.634 15.5135 103.887 15.5135C103.907 15.5135 103.927 15.5135 103.954 15.5135C105.854 15.4601 108.281 13.1335 109.921 10.9668C112.241 7.90679 114.074 3.82012 112.614 2.08678C112.227 1.62678 111.701 1.38678 111.007 1.40012V1.40678ZM98.3206 9.46678C96.2473 6.62012 95.5006 4.16012 95.5939 3.44012C96.2273 3.60012 97.8673 4.74012 99.6673 7.21345C100.907 8.91345 101.661 10.4601 102.054 11.6001C101.921 12.0868 101.847 12.5535 101.827 12.9801C101.021 12.5068 99.7206 11.3935 98.3139 9.46678H98.3206ZM108.141 9.62012C106.721 11.4935 105.414 12.5668 104.607 13.0201C104.601 12.5735 104.521 12.1001 104.387 11.6001C104.794 10.4735 105.567 8.95345 106.821 7.30678C108.647 4.90012 110.287 3.80678 110.921 3.66012C111.014 4.43345 110.241 6.85345 108.141 9.62012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M135.147 1.23345C133.241 1.40012 130.914 3.76012 129.367 5.91345C128.901 6.56678 128.387 7.37345 127.921 8.24678C127.454 7.37345 126.941 6.56678 126.474 5.91345C124.927 3.76012 122.601 1.40012 120.694 1.23345C120.061 1.18012 119.474 1.37345 119.054 1.78012C117.187 3.61345 119.581 8.14012 121.287 10.5201C122.834 12.6735 125.161 15.0335 127.067 15.2001C127.141 15.2001 127.207 15.2068 127.281 15.2068C127.507 15.2068 127.721 15.1668 127.921 15.1001C128.121 15.1601 128.334 15.2068 128.561 15.2068C128.627 15.2068 128.701 15.2068 128.774 15.2001C130.681 15.0335 133.014 12.6735 134.554 10.5201C136.261 8.14012 138.654 3.61345 136.787 1.78012C136.367 1.37345 135.787 1.17345 135.147 1.23345ZM123.101 9.22012C121.134 6.47345 120.474 4.10678 120.587 3.46678C121.201 3.58678 122.854 4.70678 124.647 7.21345C125.681 8.66012 126.347 9.98679 126.734 11.0268C126.567 11.5935 126.474 12.1401 126.461 12.6468C125.654 12.1468 124.414 11.0601 123.094 9.22012H123.101ZM132.734 9.22012C131.414 11.0601 130.181 12.1468 129.374 12.6468C129.361 12.1401 129.261 11.6001 129.101 11.0401C129.487 9.99345 130.147 8.66678 131.187 7.22012C132.961 4.74678 134.594 3.62012 135.227 3.48012C135.341 4.21345 134.667 6.53345 132.741 9.22678L132.734 9.22012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M181.514 0.673451C179.627 0.993451 177.494 3.53345 176.127 5.80012C175.714 6.48678 175.267 7.33345 174.867 8.24012C174.334 7.40678 173.754 6.64012 173.234 6.03345C171.521 4.00678 169.007 1.84012 167.094 1.82678C166.474 1.78012 165.887 2.06678 165.507 2.50678C163.794 4.48678 166.541 8.80012 168.434 11.0401C170.147 13.0668 172.654 15.2335 174.567 15.2468H174.581C174.894 15.2468 175.187 15.1868 175.454 15.0735C175.594 15.1001 175.727 15.1401 175.874 15.1401C176.001 15.1401 176.134 15.1268 176.267 15.1068C178.154 14.7868 180.287 12.2468 181.654 9.98012C183.167 7.46679 185.194 2.76678 183.181 1.08678C182.734 0.713451 182.134 0.560118 181.507 0.666785L181.514 0.673451ZM170.141 9.60012C167.961 7.02012 167.114 4.71345 167.181 4.06678C167.801 4.14012 169.534 5.12012 171.527 7.48012C172.674 8.83345 173.441 10.1068 173.914 11.1135C173.794 11.6868 173.741 12.2401 173.767 12.7468C172.921 12.3135 171.601 11.3268 170.141 9.60012ZM179.741 8.83345C178.574 10.7735 177.427 11.9535 176.661 12.5201C176.607 12.0201 176.467 11.4868 176.261 10.9401C176.561 9.86679 177.114 8.48678 178.034 6.96678C179.607 4.36012 181.147 3.10678 181.761 2.91345C181.934 3.63345 181.447 6.00679 179.741 8.84012V8.83345Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M157.947 1.46678C156.074 1.62678 153.781 3.94678 152.267 6.06012C151.814 6.68678 151.321 7.47345 150.867 8.31345C150.414 7.47345 149.914 6.68678 149.467 6.06012C147.947 3.94678 145.661 1.62678 143.787 1.46678C143.154 1.41345 142.581 1.60678 142.167 2.01345C140.327 3.82012 142.674 8.26679 144.354 10.6068C145.867 12.7201 148.161 15.0401 150.034 15.2001C150.101 15.2001 150.174 15.2068 150.241 15.2068C150.461 15.2068 150.674 15.1668 150.874 15.1068C151.074 15.1668 151.281 15.2068 151.501 15.2068C151.567 15.2068 151.641 15.2068 151.707 15.2001C153.581 15.0401 155.874 12.7201 157.387 10.6068C159.067 8.26679 161.414 3.82012 159.574 2.01345C159.161 1.60678 158.581 1.41345 157.954 1.46678H157.947ZM146.161 9.30012C144.254 6.64678 143.601 4.34678 143.701 3.70678C144.307 3.84012 145.914 4.94678 147.647 7.36012C148.661 8.77345 149.307 10.0735 149.687 11.0868C149.534 11.6268 149.441 12.1401 149.421 12.6268C148.627 12.1335 147.434 11.0735 146.161 9.30012ZM155.567 9.30012C154.294 11.0735 153.101 12.1335 152.307 12.6335C152.287 12.1535 152.201 11.6335 152.047 11.1001C152.421 10.0801 153.074 8.78012 154.087 7.36678C155.801 4.98012 157.381 3.88012 158.007 3.71345C158.101 4.45345 157.434 6.70678 155.574 9.30012H155.567Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M205.781 1.40678C203.881 1.46012 201.454 3.78678 199.814 5.95345C199.274 6.66678 198.761 7.44012 198.307 8.22678C197.907 7.31345 197.467 6.46012 197.054 5.77345C195.661 3.40678 193.494 0.786784 191.621 0.513451C190.987 0.426785 190.394 0.593451 189.961 1.00012C188.067 2.76678 190.127 7.58678 191.647 10.1601C193.041 12.5268 195.201 15.1468 197.081 15.4201C197.194 15.4334 197.301 15.4468 197.407 15.4468C197.581 15.4468 197.741 15.4201 197.901 15.3801C198.141 15.4734 198.394 15.5268 198.667 15.5268C198.687 15.5268 198.707 15.5268 198.734 15.5268C200.634 15.4735 203.061 13.1468 204.701 10.9801C206.494 8.62012 209.074 4.08678 207.394 2.10012C207.007 1.64012 206.461 1.40012 205.787 1.41345L205.781 1.40678ZM193.567 9.02012C191.774 5.98678 191.274 3.46012 191.441 2.76012C192.054 2.98012 193.574 4.28012 195.127 6.91345C196.081 8.53345 196.661 9.99345 196.981 11.1201C196.787 11.7068 196.667 12.2735 196.621 12.7868C195.861 12.2001 194.727 10.9868 193.567 9.02678V9.02012ZM202.914 9.62012C201.554 11.4135 200.301 12.4735 199.487 12.9601C199.507 12.4201 199.441 11.8335 199.307 11.2201C199.741 10.1401 200.474 8.78012 201.594 7.30678C203.421 4.90012 205.061 3.80678 205.694 3.66012C205.787 4.43345 205.014 6.85345 202.914 9.62012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M254.847 2.09345C254.461 1.63345 253.907 1.39345 253.241 1.40678C251.341 1.46012 248.914 3.78678 247.274 5.95345C246.734 6.66678 246.221 7.44012 245.767 8.22678C245.367 7.31345 244.921 6.46012 244.514 5.77345C243.121 3.40678 240.954 0.786784 239.081 0.513451C238.447 0.420118 237.854 0.593451 237.421 1.00012C235.527 2.76678 237.587 7.58678 239.107 10.1601C240.501 12.5268 242.661 15.1468 244.541 15.4201C244.654 15.4335 244.761 15.4468 244.867 15.4468C245.041 15.4468 245.201 15.4201 245.361 15.3801C245.601 15.4735 245.854 15.5268 246.127 15.5268C246.147 15.5268 246.167 15.5268 246.194 15.5268C248.094 15.4735 250.521 13.1468 252.161 10.9801C254.481 7.92012 256.314 3.83345 254.854 2.10012L254.847 2.09345ZM241.027 9.02012C239.234 5.98678 238.734 3.46678 238.901 2.76012C239.514 2.98012 241.034 4.28012 242.587 6.91345C243.541 8.53345 244.121 9.99345 244.441 11.1201C244.247 11.7068 244.127 12.2735 244.081 12.7868C243.321 12.2001 242.187 10.9868 241.027 9.02678V9.02012ZM250.374 9.62012C249.014 11.4135 247.761 12.4735 246.947 12.9601C246.967 12.4201 246.901 11.8335 246.767 11.2201C247.201 10.1401 247.934 8.78012 249.054 7.30678C250.881 4.90012 252.521 3.80678 253.154 3.66012C253.247 4.43345 252.474 6.85345 250.374 9.62012Z"
  }), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    d: "M229.041 1.40678C227.141 1.46012 224.714 3.78678 223.074 5.95345C222.414 6.82678 221.794 7.78012 221.274 8.74012C220.714 7.67345 220.074 6.66678 219.507 5.89345C217.887 3.67345 215.481 1.27345 213.587 1.18678C212.941 1.16012 212.381 1.38678 211.981 1.83345C210.267 3.77345 212.787 8.37345 214.541 10.7868C216.161 13.0068 218.561 15.4068 220.461 15.4935C220.501 15.4935 220.534 15.4935 220.574 15.4935C220.801 15.4935 221.014 15.4535 221.214 15.3868C221.434 15.4668 221.667 15.5135 221.921 15.5135C221.941 15.5135 221.961 15.5135 221.987 15.5135C223.887 15.4601 226.314 13.1335 227.954 10.9668C230.274 7.90679 232.107 3.82012 230.647 2.08678C230.261 1.62678 229.707 1.37345 229.041 1.40012V1.40678ZM216.354 9.46678C214.281 6.62012 213.534 4.16012 213.627 3.44012C214.261 3.60012 215.901 4.74678 217.701 7.21345C218.941 8.91345 219.694 10.4668 220.087 11.6001C219.954 12.0868 219.881 12.5535 219.861 12.9801C219.054 12.5068 217.754 11.3935 216.347 9.46678H216.354ZM226.174 9.62012C224.754 11.4935 223.447 12.5668 222.641 13.0201C222.634 12.5735 222.554 12.1001 222.421 11.6001C222.827 10.4735 223.601 8.95345 224.854 7.30678C226.681 4.90012 228.321 3.80678 228.954 3.66012C229.047 4.43345 228.274 6.85345 226.174 9.62012Z"
  }), ' '), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[4px] text-justify text-[24px] md:text-[32px] text-[#3c3c3c] font-bold"
  }, name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-[24px] mb-[72px] md:mt-[40px] mx-auto max-w-[720px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[16px] md:mb-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[8px] text-left text-[20px] md:text-[24px] text-[#2d7316] font-bold"
  }, "\u7522\u671F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-justify text-[16px] md:text-[18px] text-[#3c3c3c]"
  }, during)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[16px] md:mb-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[8px] text-left text-[20px] md:text-[24px] text-[#2d7316] font-bold"
  }, "\u898F\u683C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list-disc pl-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
    className: "text-justify text-[16px] md:text-[18px] text-[#3c3c3c]"
  }, size))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[16px] md:mb-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[8px] text-left text-[20px] md:text-[24px] text-[#2d7316] font-bold"
  }, "\u8CA9\u552E\u5730\u9EDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-justify text-[16px] md:text-[18px] text-[#3c3c3c]"
  }, spot_name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[16px] md:mb-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[8px] text-left text-[20px] md:text-[24px] text-[#2d7316] font-bold"
  }, "\u9023\u7D61\u96FB\u8A71"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-start items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "mr-[16px] text-justify text-[16px] md:text-[18px] text-[#3c3c3c]"
  }, tel), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "tel:".concat(tel),
    className: "md:hidden flex justify-center items-center py-[12px] px-[24px] w-fit font-bold  border-[#106fa2] border-[2px] border-solid rounded-pill trs-all hover:bg-[#e7f7ff]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " text-[#106fa2]"
  }, "\u4F86\u96FB\u6D3D\u8A62"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "ml-[8px] icon icon-arrow-right text-[#106fa2] text-[16px]"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[16px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-[8px] text-left text-[20px] md:text-[24px] text-[#2d7316] font-bold"
  }, "\u8CA9\u552E\u5730\u9EDE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-justify text-[16px] md:text-[18px] text-[#3c3c3c]"
  }, "\u53F0\u4E2D\u5E02\u77F3\u5CA1\u5340\u842C\u5B89\u91CC\u77F3\u5CA1\u885767\u865F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center xl:justify-start pt-[40px] mb-[80px] md:mb-[120px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ReturnBtn__WEBPACK_IMPORTED_MODULE_2__["default"], null))))))))));
};
_s2(Page, "zL43zco/S1JMT4kv+gpdqRcHzo4=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
});
_c3 = Page;
_s(Page, "wVfWeeMVE2vlV8jk6VBPdHDgcxE=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3NvdXZlbmlyX2luZGV4X2pzLWY1MDU4MGZhZTAyY2I4NTZhOTNhLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUFrQztBQUNBO0FBQ0Q7QUFDUjtBQUN5QjtBQUVsRCxJQUFNSyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBQUMsSUFBQSxFQUE0QjtFQUFBQyxHQUFBO0VBQUFDLEVBQUE7RUFBQSxJQUF0QkMsSUFBSSxHQUFBSCxJQUFBLENBQUpHLElBQUk7SUFBRUMsU0FBUyxHQUFBSixJQUFBLENBQVRJLFNBQVM7RUFDbEMsSUFBTUMsSUFBSSxHQUFHVCxnREFBUyxDQUFDLENBQUM7RUFDeEIsSUFBQVUsZ0JBQUEsR0FBaUJSLGlFQUFlLENBQUMsQ0FBQztJQUFBUyxpQkFBQSxHQUFBQyxjQUFBLENBQUFGLGdCQUFBO0lBQTNCRyxNQUFNLEdBQUFGLGlCQUFBO0VBQ2IsSUFBTUcsT0FBTyxHQUFHRCxNQUFNLENBQUNFLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxHQUFHO0VBQzNDLElBQUlELE9BQU8sRUFBRSxPQUFPLElBQUk7RUFFeEIsb0JBQ0liLDBEQUFBO0lBQUtPLFNBQVMsaUNBQUFTLE1BQUEsQ0FBaUNULFNBQVM7RUFBRyxnQkFDdkRQLDBEQUFBO0lBQUtPLFNBQVMsRUFBQztFQUEwRCxnQkFDckVQLDBEQUFBO0lBQ0lpQixTQUFTLEVBQUMsR0FBRztJQUNiQyxJQUFJLEVBQUMsR0FBRztJQUNSQyxLQUFLLEVBQUMsbUNBQVU7SUFDaEJaLFNBQVMsRUFBQywwQ0FBMEM7SUFDcERhLE9BQU8sRUFBRSxTQUFUQSxPQUFPQSxDQUFHQyxDQUFDLEVBQUs7TUFDWkEsQ0FBQyxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUN0QjtFQUFFLEdBQ0wsS0FFRSxDQUFDLGVBQ0p0QiwwREFBQTtJQUFJTyxTQUFTLEVBQUM7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Q0FBQztBQUVkLENBQUM7QUFBQTlCLEdBQUEsQ0E5Skt1QyxJQUFJO0VBQUEsUUFDU0QsdURBQVM7QUFBQTtBQUFBYixHQUFBLEdBRHRCYyxJQUFJO0FBOEpUdEMsRUFBQSxDQTlKS3NDLElBQUk7RUFBQSxRQUNTRCx1REFBUztBQUFBO0FBQUFaLEVBQUEsR0FEdEJhLElBQUk7QUFnS1YsaUVBQUFaLEdBQUEsZ0JBQWUvQixpREFBVSxDQUFDMkMsSUFBSSxDQUFDO0FBQUEsSUFBQWIsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLHNDQUFBLENBQUFILEVBQUE7QUFBQUcsc0NBQUEsQ0FBQUYsR0FBQTtBQUFBLElBQUFGLEdBQUE7QUFBQUksc0NBQUEsQ0FBQUosR0FBQSxVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvQnJlYWRjcnVtYnMuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvUmV0dXJuQnRuLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zb3V2ZW5pci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSTE4TiBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICdob29rcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVNlYXJjaFBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IEJyZWFkY3J1bWJzID0gKHsgZGF0YSwgY2xhc3NOYW1lIH0pID0+IHtcbiAgICBjb25zdCBsYW5nID0gdXNlTG9jYWxlKClcbiAgICBjb25zdCBbc2VhcmNoXSA9IHVzZVNlYXJjaFBhcmFtcygpXG4gICAgY29uc3QgaXNFbWJlZCA9IHNlYXJjaC5nZXQoJ2VtYmVkJykgPT09ICcxJ1xuICAgIGlmIChpc0VtYmVkKSByZXR1cm4gbnVsbFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BicmVhZGNydW1icyBweS0yIGZ1bGwtd2lkdGggJHtjbGFzc05hbWV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWF3LTE0MDBweCBoLTQgbXgtYXV0byBmei0xNHB4XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5PVwiQ1wiXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCLkuK3plpPlrprkvY3pu54oQylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC14bC1ibG9jayB3LTIgbWwtbjIgdGV4dC1pbmhlcml0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgOjo6XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBjcnVtYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgLyR7bGFuZ31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtaW5oZXJpdCBob3Zlci1wcmltYXJ5YH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj7pppbpoIE8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIHshIWRhdGE/Lmxlbmd0aCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tYXAoKHsgdGl0bGUsIHVybCB9LCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImQtZmxleCBjcnVtYlwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXVybCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1pbmhlcml0IGhvdmVyLXByaW1hcnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e3VybH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3RpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQnJlYWRjcnVtYnMpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFJldHVybkJ0biA9ICgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBncm91cFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHktWzhweF0gcHgtWzI0cHhdIHRleHQtWzE4cHhdIHRleHQtWyM3Njc2NzZdIGJvcmRlci1bMnB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjZjBmMGYwXSByb3VuZGVkLXBpbGwgdHJzLWFsbCBob3ZlcjpiZy1bIzc2NzY3Nl0gaG92ZXI6dGV4dC1bI2ZmZl1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIOWbnuS4iuS4gOmggVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUmV0dXJuQnRuKVxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IFJldHVybkJ0biBmcm9tICcuLi8uLi9jb21wb25lbnRzL1JldHVybkJ0bidcbmltcG9ydCBUaHVtYkZyYW1lIGZyb20gJ2NvbXBvbmVudHMvVGh1bWJGcmFtZSdcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nXG5cbmNvbnN0IFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUGFyYW1zKClcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGAvX2FwaS96aC10dy9zb3V2ZW5pcnM/aWQ9JHtpZH1gLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKCh7IHN1Y2Nlc3MsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEudGVsID1cbiAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhLnBob25lMT8udHJpbSgpICYmIGRhdGEucGhvbmUxKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGEucGhvbmUyPy50cmltKCkgJiYgZGF0YS5waG9uZTIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAn54Sh6Zu76Kmx6Jmf56K8J1xuXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuY292ZXIgPVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXM/LmZpbmQoKGltZykgPT4gaW1nLnVybCk/LnVybCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXM/LlswXT8udXJsIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9ub3QtZm91bmQvbWlzcy5qcGdgXG4gICAgICAgICAgICAgICAgICAgIGRhdGEucGFydHMgPSBkYXRhLnNwZWNpZmljYXRpb25zLnNwbGl0KCco55Si5pyf77yaJylcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zaXplID0gZGF0YS5wYXJ0c1swXVxuICAgICAgICAgICAgICAgICAgICBkYXRhLmR1cmluZyA9IGRhdGEucGFydHNbMV0ucmVwbGFjZSgnKScsICcnKVxuXG4gICAgICAgICAgICAgICAgICAgIHNldERhdGEoZGF0YSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGNvbnNvbGUuZXJyb3IpXG4gICAgfSwgW2lkXSlcbiAgICBjb25zdCB7IGNvdmVyLCBuYW1lLCB0ZWwsIHNwb3RfbmFtZSwgc2l6ZSwgZHVyaW5nIH0gPSBkYXRhXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPXsxOH0gY29sb3I9eydibGFjayd9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtLWF1dG9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LVs1NnB4XSB4bDpwdC1bMTA0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItMCBtZDpwYi1bODBweF0gXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHgtWzE2cHhdIG1kOnB4LVsyNHB4XSBtYXgtdy1bNzY4cHhdIHhsOm1heC13LVsxMjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGU6ICfmsLTmnpzkvLTmiYvnpq4nLCB1cmw6IGAvc291dmVuaXJzYCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZTogbmFtZSwgdXJsOiBgL3NvdXZlbmlyLyR7aWR9YCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInhsOmZsZXggbXQtWzIxcHhdIHhsOm10LVs1NnB4XSB4bDp3LVsxMjAwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtZDp3LVs0ODBweF0geGw6dy1bNDk0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBhc3BlY3QtWzEuMzMzMzMzMzNdIHJvdW5kZWQtWzE2cHhdIG1kOnJvdW5kZWQtWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvdmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bmFtZX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vcmF0aW89XCIxNmJ5OVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZmlsbCBtdC1bMjRweF0gbWQ6bXQtWzU2cHhdIHhsOm10LVszMnB4XSBweC1bMTZweF0geGw6cGwtWzU2cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjYwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NiAxNlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjODJiZTY2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuMTEzOSAxLjIzMzQ1QzE1LjIwNzMgMS40MDAxMiAxMi44NzM5IDMuNzYwMTIgMTEuMzMzOSA1LjkxMzQ1QzEwLjg2NzMgNi41NjY3OCAxMC4zNTM5IDcuMzczNDUgOS44ODA2IDguMjQ2NzhDOS40MTM5NCA3LjM3MzQ1IDguODkzOTQgNi41NjY3OCA4LjQyNzI3IDUuOTEzNDVDNi44ODA2IDMuNzYwMTIgNC41NTM5NCAxLjQwMDEyIDIuNjQ3MjcgMS4yMzM0NUMyLjAxMzk0IDEuMTgwMTIgMS40MjcyNyAxLjM3MzQ1IDEuMDEzOTQgMS43ODAxMkMtMC44NTkzOTcgMy42MTM0NSAxLjU0MDYgOC4xNDAxMiAzLjI0NzI3IDEwLjUyMDFDNC43OTM5NCAxMi42NzM0IDcuMTIwNiAxNS4wMzM0IDkuMDI3MjcgMTUuMjAwMUM5LjEwMDYgMTUuMjAwMSA5LjE2NzI3IDE1LjIwNjggOS4yNDA2IDE1LjIwNjhDOS40NjcyNyAxNS4yMDY4IDkuNjgwNiAxNS4xNjY4IDkuODgwNiAxNS4xMDAxQzEwLjA4MDYgMTUuMTYwMSAxMC4zMDA2IDE1LjIwNjggMTAuNTIwNiAxNS4yMDY4QzEwLjU4NzMgMTUuMjA2OCAxMC42NjA2IDE1LjIwNjggMTAuNzMzOSAxNS4yMDAxQzEyLjY0MDYgMTUuMDMzNCAxNC45NjczIDEyLjY3MzQgMTYuNTEzOSAxMC41MjAxQzE4LjIyMDYgOC4xMzM0NSAyMC42MjA2IDMuNjEzNDUgMTguNzQ3MyAxLjc4MDEyQzE4LjMyNzMgMS4zNjY3OCAxNy43NDA2IDEuMTgwMTIgMTcuMTA3MyAxLjIzMzQ1SDE3LjExMzlaTTUuMDY3MjcgOS4yMjAxMkMzLjEwMDYgNi40NzM0NSAyLjQ0MDYgNC4xMDY3OCAyLjU1Mzk0IDMuNDczNDVDMy4xNjcyNyAzLjU5MzQ1IDQuODIwNiA0LjcxMzQ1IDYuNjEzOTQgNy4yMjAxMkM3LjY0NzI3IDguNjY2NzggOC4zMTM5NCA5Ljk5MzQ1IDguNzAwNiAxMS4wMjY4QzguNTMzOTQgMTEuNTkzNSA4LjQ0MDYgMTIuMTQwMSA4LjQyNzI3IDEyLjY0NjhDNy42MjA2IDEyLjE0NjggNi4zODA2IDExLjA2MDEgNS4wNjcyNyA5LjIyMDEyWk0xNC43MDA2IDkuMjIwMTJDMTMuMzgwNiAxMS4wNjAxIDEyLjE0NzMgMTIuMTQ2OCAxMS4zNDA2IDEyLjY0NjhDMTEuMzI3MyAxMi4xNDAxIDExLjIyNzMgMTEuNjAwMSAxMS4wNjczIDExLjA0MDFDMTEuNDUzOSA5Ljk5MzQ1IDEyLjExMzkgOC42NjY3OCAxMy4xNTM5IDcuMjIwMTJDMTQuOTI3MyA0Ljc0Njc4IDE2LjU2MDYgMy42MjAxMiAxNy4xOTM5IDMuNDgwMTJDMTcuMzA3MyA0LjIxMzQ1IDE2LjYzMzkgNi41MzM0NSAxNC43MDczIDkuMjI2NzhMMTQuNzAwNiA5LjIyMDEyWlwiIC8+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02My40NzM5IDAuNjczNDUxQzYxLjU4NzMgMC45OTM0NTEgNTkuNDUzOSAzLjUzMzQ1IDU4LjA4NzMgNS44MDAxMkM1Ny42NzM5IDYuNDg2NzggNTcuMjI3MyA3LjM0MDEyIDU2LjgyNzMgOC4yNDAxMkM1Ni4yOTM5IDcuNDA2NzggNTUuNzEzOSA2LjY0MDEyIDU1LjE5MzkgNi4wMjY3OEM1My40ODA2IDQuMDAwMTIgNTAuOTczOSAxLjgzMzQ1IDQ5LjA2MDYgMS44MjY3OEg0OS4wNDczQzQ4LjQxMzkgMS44MjY3OCA0Ny44NTM5IDIuMDY2NzggNDcuNDczOSAyLjUwNjc4QzQ1Ljc2MDYgNC40ODY3OCA0OC41MDczIDguODAwMTIgNTAuNDAwNiAxMS4wNDAxQzUyLjExMzkgMTMuMDY2OCA1NC42MjczIDE1LjIzMzUgNTYuNTQwNiAxNS4yNDAxSDU2LjU1MzlDNTYuODY3MyAxNS4yNDAxIDU3LjE2MDYgMTUuMTgwMSA1Ny40MjczIDE1LjA2NjhDNTcuNTY3MyAxNS4wOTM1IDU3LjcwMDYgMTUuMTMzNSA1Ny44NDczIDE1LjEzMzVDNTcuOTczOSAxNS4xMzM1IDU4LjEwNzMgMTUuMTIwMSA1OC4yNDA2IDE1LjEwMDFDNjAuMTI3MyAxNC43ODAxIDYyLjI2MDYgMTIuMjQwMSA2My42MjczIDkuOTczNDVDNjUuMTQwNiA3LjQ2MDEyIDY3LjE2NzMgMi43NjAxMiA2NS4xNTM5IDEuMDgwMTJDNjQuNzA3MyAwLjcwNjc4NSA2NC4xMTM5IDAuNTUzNDUxIDYzLjQ4MDYgMC42NjAxMThMNjMuNDczOSAwLjY3MzQ1MVpNNTIuMTAwNiA5LjYwMDEyQzQ5LjkyMDYgNy4wMjAxMiA0OS4wNzM5IDQuNzEzNDUgNDkuMTQwNiA0LjA2Njc4QzQ5Ljc2MDYgNC4xMzM0NSA1MS40OTM5IDUuMTIwMTIgNTMuNDg3MyA3LjQ4MDEyQzU0LjYzMzkgOC44NDAxMiA1NS40MDczIDEwLjEwNjggNTUuODczOSAxMS4xMTM1QzU1Ljc1MzkgMTEuNjg2OCA1NS43MDA2IDEyLjI0MDEgNTUuNzI3MyAxMi43NDY4QzU0Ljg4MDYgMTIuMzEzNSA1My41NjA2IDExLjMyNjggNTIuMTAwNiA5LjYwMDEyWk02MS43MDczIDguODI2NzhDNjAuNTQwNiAxMC43NjY4IDU5LjM5MzkgMTEuOTQ2OCA1OC42MjczIDEyLjUxMzVDNTguNTczOSAxMi4wMTM1IDU4LjQzMzkgMTEuNDgwMSA1OC4yMjczIDEwLjkzMzVDNTguNTI3MyA5Ljg2MDEyIDU5LjA4MDYgOC40ODAxMiA2MC4wMDA2IDYuOTUzNDVDNjEuNTczOSA0LjM0MDEyIDYzLjExMzkgMy4wOTM0NSA2My43MjczIDIuOTAwMTJDNjMuOTAwNiAzLjYyMDEyIDYzLjQxMzkgNS45OTM0NSA2MS43MDczIDguODI2NzhaXCIgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM5LjkwNzMgMS40NjY3OEMzOC4wMzM5IDEuNjI2NzggMzUuNzQwNiAzLjk0Njc4IDM0LjIyNzMgNi4wNjAxMkMzMy43NzM5IDYuNjg2NzggMzMuMjgwNiA3LjQ3MzQ1IDMyLjgyNzMgOC4zMTM0NUMzMi4zNzM5IDcuNDczNDUgMzEuODczOSA2LjY5MzQ1IDMxLjQyNzMgNi4wNjAxMkMyOS45MTM5IDMuOTQ2NzggMjcuNjIwNiAxLjYyNjc4IDI1Ljc0NzMgMS40NjY3OEMyNS4xMjA2IDEuNDEzNDUgMjQuNTQwNiAxLjYwNjc4IDI0LjEyNzMgMi4wMTM0NUMyMi4yODczIDMuODIwMTIgMjQuNjMzOSA4LjI2Njc5IDI2LjMxMzkgMTAuNjA2OEMyNy44MjczIDEyLjcyMDEgMzAuMTIwNiAxNS4wNDAxIDMxLjk5MzkgMTUuMjAwMUMzMi4wNjA2IDE1LjIwMDEgMzIuMTMzOSAxNS4yMDY4IDMyLjIwMDYgMTUuMjA2OEMzMi40MjA2IDE1LjIwNjggMzIuNjMzOSAxNS4xNjY4IDMyLjgyNzMgMTUuMTA2OEMzMy4wMjczIDE1LjE2NjggMzMuMjMzOSAxNS4yMDY4IDMzLjQ2MDYgMTUuMjA2OEMzMy41MjczIDE1LjIwNjggMzMuNjAwNiAxNS4yMDY4IDMzLjY2NzMgMTUuMjAwMUMzNS41NDA2IDE1LjA0MDEgMzcuODMzOSAxMi43MjAxIDM5LjM0NzMgMTAuNjA2OEM0MS4wMjczIDguMjY2NzkgNDMuMzczOSAzLjgyMDEyIDQxLjUzMzkgMi4wMTM0NUM0MS4xMjA2IDEuNjA2NzggNDAuNTUzOSAxLjQxMzQ1IDM5LjkxMzkgMS40NjY3OEgzOS45MDczWk0yOC4xMjA2IDkuMzAwMTJDMjYuMjEzOSA2LjY0Njc4IDI1LjU2MDYgNC4zNDY3OCAyNS42NTM5IDMuNzA2NzhDMjYuMjYwNiAzLjg0MDEyIDI3Ljg2NzMgNC45NDY3OCAyOS42MDA2IDcuMzY2NzhDMzAuNjEzOSA4Ljc3MzQ1IDMxLjI2MDYgMTAuMDczNSAzMS42NDA2IDExLjA5MzVDMzEuNDg3MyAxMS42MzM1IDMxLjM5MzkgMTIuMTQ2OCAzMS4zNzM5IDEyLjYzMzVDMzAuNTg3MyAxMi4xNDAxIDI5LjM4NzMgMTEuMDgwMSAyOC4xMTM5IDkuMzA2NzhMMjguMTIwNiA5LjMwMDEyWk0zNy41MjczIDkuMzAwMTJDMzYuMjUzOSAxMS4wNzM1IDM1LjA2MDYgMTIuMTMzNSAzNC4yNjczIDEyLjYzMzVDMzQuMjQ3MyAxMi4xNTM1IDM0LjE2MDYgMTEuNjMzNSAzNC4wMDczIDExLjEwMDFDMzQuMzgwNiAxMC4wODAxIDM1LjAzMzkgOC43ODAxMiAzNi4wNDczIDcuMzY2NzhDMzcuNzYwNiA0Ljk4MDEyIDM5LjM0MDYgMy44ODAxMiAzOS45NjczIDMuNzEzNDVDNDAuMDYwNiA0LjQ1MzQ1IDM5LjM5MzkgNi43MDY3OCAzNy41MzM5IDkuMzAwMTJIMzcuNTI3M1pcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODcuNzQ3MyAxLjQwNjc4Qzg1Ljg0NzMgMS40NjAxMiA4My40MjA2IDMuNzg2NzggODEuNzgwNiA1Ljk1MzQ1QzgxLjI0MDYgNi42NjY3OCA4MC43MjczIDcuNDQwMTIgODAuMjczOSA4LjIyNjc4Qzc5Ljg3MzkgNy4zMTM0NSA3OS40MjczIDYuNDYwMTIgNzkuMDIwNiA1Ljc3MzQ1Qzc3LjYyNzMgMy40MDY3OCA3NS40NjczIDAuNzg2Nzg0IDczLjU4NzMgMC41MTM0NTFDNzIuOTUzOSAwLjQyNjc4NSA3Mi4zNjA2IDAuNTkzNDUxIDcxLjkyNzMgMS4wMDAxMkM3MC4wMzM5IDIuNzY2NzggNzIuMDkzOSA3LjU4Njc4IDczLjYxMzkgMTAuMTYwMUM3NS4wMDczIDEyLjUyNjggNzcuMTczOSAxNS4xNDY4IDc5LjA0NzMgMTUuNDIwMUM3OS4xNjA2IDE1LjQzMzQgNzkuMjY3MyAxNS40NDY4IDc5LjM3MzkgMTUuNDQ2OEM3OS41NDczIDE1LjQ0NjggNzkuNzA3MyAxNS40MjAxIDc5Ljg2NzMgMTUuMzgwMUM4MC4xMDczIDE1LjQ3MzQgODAuMzYwNiAxNS41MjY4IDgwLjYzMzkgMTUuNTI2OEM4MC42NTM5IDE1LjUyNjggODAuNjczOSAxNS41MjY4IDgwLjcwMDYgMTUuNTI2OEM4Mi42MDA2IDE1LjQ3MzUgODUuMDI3MyAxMy4xNDY4IDg2LjY2NzMgMTAuOTgwMUM4OC45ODczIDcuOTIwMTIgOTAuODIwNiAzLjgzMzQ1IDg5LjM2MDYgMi4xMDAxMkM4OC45NzM5IDEuNjQwMTIgODguNDI3MyAxLjM4Njc4IDg3Ljc1MzkgMS40MTM0NUw4Ny43NDczIDEuNDA2NzhaTTc1LjUzMzkgOS4wMjAxMkM3My43NDA2IDUuOTg2NzggNzMuMjQwNiAzLjQ2MDEyIDczLjQwNzMgMi43NjAxMkM3NC4wMjA2IDIuOTgwMTIgNzUuNTQwNiA0LjI3MzQ1IDc3LjA5MzkgNi45MTM0NUM3OC4wNDczIDguNTMzNDUgNzguNjI3MyA5Ljk5MzQ1IDc4Ljk0NzMgMTEuMTIwMUM3OC43NTM5IDExLjcwNjggNzguNjMzOSAxMi4yNzM1IDc4LjU4NzMgMTIuNzg2OEM3Ny44MjczIDEyLjIwMDEgNzYuNjkzOSAxMC45ODAxIDc1LjUzMzkgOS4wMjAxMlpNODQuODgwNiA5LjYyMDEyQzgzLjUyMDYgMTEuNDA2OCA4Mi4yNjczIDEyLjQ3MzUgODEuNDUzOSAxMi45NjAxQzgxLjQ3MzkgMTIuNDIwMSA4MS40MDczIDExLjgzMzUgODEuMjczOSAxMS4yMjAxQzgxLjcwNzMgMTAuMTQwMSA4Mi40NDA2IDguNzgwMTIgODMuNTYwNiA3LjMwNjc4Qzg1LjM4NzMgNC45MDAxMiA4Ny4wMjczIDMuODA2NzggODcuNjYwNiAzLjY2MDEyQzg3Ljc1MzkgNC40MzM0NSA4Ni45ODA2IDYuODUzNDUgODQuODgwNiA5LjYyMDEyWlwiIC8+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTEuMDA3IDEuNDA2NzhDMTA5LjEwNyAxLjQ2MDEyIDEwNi42ODEgMy43ODY3OCAxMDUuMDQxIDUuOTUzNDVDMTA0LjM4MSA2LjgyNjc5IDEwMy43NjEgNy43ODAxMiAxMDMuMjQxIDguNzQwMTJDMTAyLjY4MSA3LjY3MzQ1IDEwMi4wNDEgNi42NjY3OCAxMDEuNDc0IDUuODkzNDVDOTkuODUzOSAzLjY3MzQ1IDk3LjQ1MzkgMS4yNzM0NSA5NS41NTM5IDEuMTg2NzhDOTQuOTI3MyAxLjE2Njc4IDk0LjM0NzMgMS4zODY3OCA5My45NDczIDEuODMzNDVDOTIuMjMzOSAzLjc3MzQ1IDk0Ljc1MzkgOC4zNzM0NSA5Ni41MDczIDEwLjc4NjhDOTguMTI3MyAxMy4wMDY4IDEwMC41MzQgMTUuNDA2OCAxMDIuNDI3IDE1LjQ5MzVDMTAyLjQ2NyAxNS40OTM1IDEwMi41MDEgMTUuNDkzNSAxMDIuNTQxIDE1LjQ5MzVDMTAyLjc2NyAxNS40OTM1IDEwMi45ODEgMTUuNDUzNSAxMDMuMTgxIDE1LjM4NjhDMTAzLjQwMSAxNS40NjY4IDEwMy42MzQgMTUuNTEzNSAxMDMuODg3IDE1LjUxMzVDMTAzLjkwNyAxNS41MTM1IDEwMy45MjcgMTUuNTEzNSAxMDMuOTU0IDE1LjUxMzVDMTA1Ljg1NCAxNS40NjAxIDEwOC4yODEgMTMuMTMzNSAxMDkuOTIxIDEwLjk2NjhDMTEyLjI0MSA3LjkwNjc5IDExNC4wNzQgMy44MjAxMiAxMTIuNjE0IDIuMDg2NzhDMTEyLjIyNyAxLjYyNjc4IDExMS43MDEgMS4zODY3OCAxMTEuMDA3IDEuNDAwMTJWMS40MDY3OFpNOTguMzIwNiA5LjQ2Njc4Qzk2LjI0NzMgNi42MjAxMiA5NS41MDA2IDQuMTYwMTIgOTUuNTkzOSAzLjQ0MDEyQzk2LjIyNzMgMy42MDAxMiA5Ny44NjczIDQuNzQwMTIgOTkuNjY3MyA3LjIxMzQ1QzEwMC45MDcgOC45MTM0NSAxMDEuNjYxIDEwLjQ2MDEgMTAyLjA1NCAxMS42MDAxQzEwMS45MjEgMTIuMDg2OCAxMDEuODQ3IDEyLjU1MzUgMTAxLjgyNyAxMi45ODAxQzEwMS4wMjEgMTIuNTA2OCA5OS43MjA2IDExLjM5MzUgOTguMzEzOSA5LjQ2Njc4SDk4LjMyMDZaTTEwOC4xNDEgOS42MjAxMkMxMDYuNzIxIDExLjQ5MzUgMTA1LjQxNCAxMi41NjY4IDEwNC42MDcgMTMuMDIwMUMxMDQuNjAxIDEyLjU3MzUgMTA0LjUyMSAxMi4xMDAxIDEwNC4zODcgMTEuNjAwMUMxMDQuNzk0IDEwLjQ3MzUgMTA1LjU2NyA4Ljk1MzQ1IDEwNi44MjEgNy4zMDY3OEMxMDguNjQ3IDQuOTAwMTIgMTEwLjI4NyAzLjgwNjc4IDExMC45MjEgMy42NjAxMkMxMTEuMDE0IDQuNDMzNDUgMTEwLjI0MSA2Ljg1MzQ1IDEwOC4xNDEgOS42MjAxMlpcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM1LjE0NyAxLjIzMzQ1QzEzMy4yNDEgMS40MDAxMiAxMzAuOTE0IDMuNzYwMTIgMTI5LjM2NyA1LjkxMzQ1QzEyOC45MDEgNi41NjY3OCAxMjguMzg3IDcuMzczNDUgMTI3LjkyMSA4LjI0Njc4QzEyNy40NTQgNy4zNzM0NSAxMjYuOTQxIDYuNTY2NzggMTI2LjQ3NCA1LjkxMzQ1QzEyNC45MjcgMy43NjAxMiAxMjIuNjAxIDEuNDAwMTIgMTIwLjY5NCAxLjIzMzQ1QzEyMC4wNjEgMS4xODAxMiAxMTkuNDc0IDEuMzczNDUgMTE5LjA1NCAxLjc4MDEyQzExNy4xODcgMy42MTM0NSAxMTkuNTgxIDguMTQwMTIgMTIxLjI4NyAxMC41MjAxQzEyMi44MzQgMTIuNjczNSAxMjUuMTYxIDE1LjAzMzUgMTI3LjA2NyAxNS4yMDAxQzEyNy4xNDEgMTUuMjAwMSAxMjcuMjA3IDE1LjIwNjggMTI3LjI4MSAxNS4yMDY4QzEyNy41MDcgMTUuMjA2OCAxMjcuNzIxIDE1LjE2NjggMTI3LjkyMSAxNS4xMDAxQzEyOC4xMjEgMTUuMTYwMSAxMjguMzM0IDE1LjIwNjggMTI4LjU2MSAxNS4yMDY4QzEyOC42MjcgMTUuMjA2OCAxMjguNzAxIDE1LjIwNjggMTI4Ljc3NCAxNS4yMDAxQzEzMC42ODEgMTUuMDMzNSAxMzMuMDE0IDEyLjY3MzUgMTM0LjU1NCAxMC41MjAxQzEzNi4yNjEgOC4xNDAxMiAxMzguNjU0IDMuNjEzNDUgMTM2Ljc4NyAxLjc4MDEyQzEzNi4zNjcgMS4zNzM0NSAxMzUuNzg3IDEuMTczNDUgMTM1LjE0NyAxLjIzMzQ1Wk0xMjMuMTAxIDkuMjIwMTJDMTIxLjEzNCA2LjQ3MzQ1IDEyMC40NzQgNC4xMDY3OCAxMjAuNTg3IDMuNDY2NzhDMTIxLjIwMSAzLjU4Njc4IDEyMi44NTQgNC43MDY3OCAxMjQuNjQ3IDcuMjEzNDVDMTI1LjY4MSA4LjY2MDEyIDEyNi4zNDcgOS45ODY3OSAxMjYuNzM0IDExLjAyNjhDMTI2LjU2NyAxMS41OTM1IDEyNi40NzQgMTIuMTQwMSAxMjYuNDYxIDEyLjY0NjhDMTI1LjY1NCAxMi4xNDY4IDEyNC40MTQgMTEuMDYwMSAxMjMuMDk0IDkuMjIwMTJIMTIzLjEwMVpNMTMyLjczNCA5LjIyMDEyQzEzMS40MTQgMTEuMDYwMSAxMzAuMTgxIDEyLjE0NjggMTI5LjM3NCAxMi42NDY4QzEyOS4zNjEgMTIuMTQwMSAxMjkuMjYxIDExLjYwMDEgMTI5LjEwMSAxMS4wNDAxQzEyOS40ODcgOS45OTM0NSAxMzAuMTQ3IDguNjY2NzggMTMxLjE4NyA3LjIyMDEyQzEzMi45NjEgNC43NDY3OCAxMzQuNTk0IDMuNjIwMTIgMTM1LjIyNyAzLjQ4MDEyQzEzNS4zNDEgNC4yMTM0NSAxMzQuNjY3IDYuNTMzNDUgMTMyLjc0MSA5LjIyNjc4TDEzMi43MzQgOS4yMjAxMlpcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgxLjUxNCAwLjY3MzQ1MUMxNzkuNjI3IDAuOTkzNDUxIDE3Ny40OTQgMy41MzM0NSAxNzYuMTI3IDUuODAwMTJDMTc1LjcxNCA2LjQ4Njc4IDE3NS4yNjcgNy4zMzM0NSAxNzQuODY3IDguMjQwMTJDMTc0LjMzNCA3LjQwNjc4IDE3My43NTQgNi42NDAxMiAxNzMuMjM0IDYuMDMzNDVDMTcxLjUyMSA0LjAwNjc4IDE2OS4wMDcgMS44NDAxMiAxNjcuMDk0IDEuODI2NzhDMTY2LjQ3NCAxLjc4MDEyIDE2NS44ODcgMi4wNjY3OCAxNjUuNTA3IDIuNTA2NzhDMTYzLjc5NCA0LjQ4Njc4IDE2Ni41NDEgOC44MDAxMiAxNjguNDM0IDExLjA0MDFDMTcwLjE0NyAxMy4wNjY4IDE3Mi42NTQgMTUuMjMzNSAxNzQuNTY3IDE1LjI0NjhIMTc0LjU4MUMxNzQuODk0IDE1LjI0NjggMTc1LjE4NyAxNS4xODY4IDE3NS40NTQgMTUuMDczNUMxNzUuNTk0IDE1LjEwMDEgMTc1LjcyNyAxNS4xNDAxIDE3NS44NzQgMTUuMTQwMUMxNzYuMDAxIDE1LjE0MDEgMTc2LjEzNCAxNS4xMjY4IDE3Ni4yNjcgMTUuMTA2OEMxNzguMTU0IDE0Ljc4NjggMTgwLjI4NyAxMi4yNDY4IDE4MS42NTQgOS45ODAxMkMxODMuMTY3IDcuNDY2NzkgMTg1LjE5NCAyLjc2Njc4IDE4My4xODEgMS4wODY3OEMxODIuNzM0IDAuNzEzNDUxIDE4Mi4xMzQgMC41NjAxMTggMTgxLjUwNyAwLjY2Njc4NUwxODEuNTE0IDAuNjczNDUxWk0xNzAuMTQxIDkuNjAwMTJDMTY3Ljk2MSA3LjAyMDEyIDE2Ny4xMTQgNC43MTM0NSAxNjcuMTgxIDQuMDY2NzhDMTY3LjgwMSA0LjE0MDEyIDE2OS41MzQgNS4xMjAxMiAxNzEuNTI3IDcuNDgwMTJDMTcyLjY3NCA4LjgzMzQ1IDE3My40NDEgMTAuMTA2OCAxNzMuOTE0IDExLjExMzVDMTczLjc5NCAxMS42ODY4IDE3My43NDEgMTIuMjQwMSAxNzMuNzY3IDEyLjc0NjhDMTcyLjkyMSAxMi4zMTM1IDE3MS42MDEgMTEuMzI2OCAxNzAuMTQxIDkuNjAwMTJaTTE3OS43NDEgOC44MzM0NUMxNzguNTc0IDEwLjc3MzUgMTc3LjQyNyAxMS45NTM1IDE3Ni42NjEgMTIuNTIwMUMxNzYuNjA3IDEyLjAyMDEgMTc2LjQ2NyAxMS40ODY4IDE3Ni4yNjEgMTAuOTQwMUMxNzYuNTYxIDkuODY2NzkgMTc3LjExNCA4LjQ4Njc4IDE3OC4wMzQgNi45NjY3OEMxNzkuNjA3IDQuMzYwMTIgMTgxLjE0NyAzLjEwNjc4IDE4MS43NjEgMi45MTM0NUMxODEuOTM0IDMuNjMzNDUgMTgxLjQ0NyA2LjAwNjc5IDE3OS43NDEgOC44NDAxMlY4LjgzMzQ1WlwiIC8+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTcuOTQ3IDEuNDY2NzhDMTU2LjA3NCAxLjYyNjc4IDE1My43ODEgMy45NDY3OCAxNTIuMjY3IDYuMDYwMTJDMTUxLjgxNCA2LjY4Njc4IDE1MS4zMjEgNy40NzM0NSAxNTAuODY3IDguMzEzNDVDMTUwLjQxNCA3LjQ3MzQ1IDE0OS45MTQgNi42ODY3OCAxNDkuNDY3IDYuMDYwMTJDMTQ3Ljk0NyAzLjk0Njc4IDE0NS42NjEgMS42MjY3OCAxNDMuNzg3IDEuNDY2NzhDMTQzLjE1NCAxLjQxMzQ1IDE0Mi41ODEgMS42MDY3OCAxNDIuMTY3IDIuMDEzNDVDMTQwLjMyNyAzLjgyMDEyIDE0Mi42NzQgOC4yNjY3OSAxNDQuMzU0IDEwLjYwNjhDMTQ1Ljg2NyAxMi43MjAxIDE0OC4xNjEgMTUuMDQwMSAxNTAuMDM0IDE1LjIwMDFDMTUwLjEwMSAxNS4yMDAxIDE1MC4xNzQgMTUuMjA2OCAxNTAuMjQxIDE1LjIwNjhDMTUwLjQ2MSAxNS4yMDY4IDE1MC42NzQgMTUuMTY2OCAxNTAuODc0IDE1LjEwNjhDMTUxLjA3NCAxNS4xNjY4IDE1MS4yODEgMTUuMjA2OCAxNTEuNTAxIDE1LjIwNjhDMTUxLjU2NyAxNS4yMDY4IDE1MS42NDEgMTUuMjA2OCAxNTEuNzA3IDE1LjIwMDFDMTUzLjU4MSAxNS4wNDAxIDE1NS44NzQgMTIuNzIwMSAxNTcuMzg3IDEwLjYwNjhDMTU5LjA2NyA4LjI2Njc5IDE2MS40MTQgMy44MjAxMiAxNTkuNTc0IDIuMDEzNDVDMTU5LjE2MSAxLjYwNjc4IDE1OC41ODEgMS40MTM0NSAxNTcuOTU0IDEuNDY2NzhIMTU3Ljk0N1pNMTQ2LjE2MSA5LjMwMDEyQzE0NC4yNTQgNi42NDY3OCAxNDMuNjAxIDQuMzQ2NzggMTQzLjcwMSAzLjcwNjc4QzE0NC4zMDcgMy44NDAxMiAxNDUuOTE0IDQuOTQ2NzggMTQ3LjY0NyA3LjM2MDEyQzE0OC42NjEgOC43NzM0NSAxNDkuMzA3IDEwLjA3MzUgMTQ5LjY4NyAxMS4wODY4QzE0OS41MzQgMTEuNjI2OCAxNDkuNDQxIDEyLjE0MDEgMTQ5LjQyMSAxMi42MjY4QzE0OC42MjcgMTIuMTMzNSAxNDcuNDM0IDExLjA3MzUgMTQ2LjE2MSA5LjMwMDEyWk0xNTUuNTY3IDkuMzAwMTJDMTU0LjI5NCAxMS4wNzM1IDE1My4xMDEgMTIuMTMzNSAxNTIuMzA3IDEyLjYzMzVDMTUyLjI4NyAxMi4xNTM1IDE1Mi4yMDEgMTEuNjMzNSAxNTIuMDQ3IDExLjEwMDFDMTUyLjQyMSAxMC4wODAxIDE1My4wNzQgOC43ODAxMiAxNTQuMDg3IDcuMzY2NzhDMTU1LjgwMSA0Ljk4MDEyIDE1Ny4zODEgMy44ODAxMiAxNTguMDA3IDMuNzEzNDVDMTU4LjEwMSA0LjQ1MzQ1IDE1Ny40MzQgNi43MDY3OCAxNTUuNTc0IDkuMzAwMTJIMTU1LjU2N1pcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjA1Ljc4MSAxLjQwNjc4QzIwMy44ODEgMS40NjAxMiAyMDEuNDU0IDMuNzg2NzggMTk5LjgxNCA1Ljk1MzQ1QzE5OS4yNzQgNi42NjY3OCAxOTguNzYxIDcuNDQwMTIgMTk4LjMwNyA4LjIyNjc4QzE5Ny45MDcgNy4zMTM0NSAxOTcuNDY3IDYuNDYwMTIgMTk3LjA1NCA1Ljc3MzQ1QzE5NS42NjEgMy40MDY3OCAxOTMuNDk0IDAuNzg2Nzg0IDE5MS42MjEgMC41MTM0NTFDMTkwLjk4NyAwLjQyNjc4NSAxOTAuMzk0IDAuNTkzNDUxIDE4OS45NjEgMS4wMDAxMkMxODguMDY3IDIuNzY2NzggMTkwLjEyNyA3LjU4Njc4IDE5MS42NDcgMTAuMTYwMUMxOTMuMDQxIDEyLjUyNjggMTk1LjIwMSAxNS4xNDY4IDE5Ny4wODEgMTUuNDIwMUMxOTcuMTk0IDE1LjQzMzQgMTk3LjMwMSAxNS40NDY4IDE5Ny40MDcgMTUuNDQ2OEMxOTcuNTgxIDE1LjQ0NjggMTk3Ljc0MSAxNS40MjAxIDE5Ny45MDEgMTUuMzgwMUMxOTguMTQxIDE1LjQ3MzQgMTk4LjM5NCAxNS41MjY4IDE5OC42NjcgMTUuNTI2OEMxOTguNjg3IDE1LjUyNjggMTk4LjcwNyAxNS41MjY4IDE5OC43MzQgMTUuNTI2OEMyMDAuNjM0IDE1LjQ3MzUgMjAzLjA2MSAxMy4xNDY4IDIwNC43MDEgMTAuOTgwMUMyMDYuNDk0IDguNjIwMTIgMjA5LjA3NCA0LjA4Njc4IDIwNy4zOTQgMi4xMDAxMkMyMDcuMDA3IDEuNjQwMTIgMjA2LjQ2MSAxLjQwMDEyIDIwNS43ODcgMS40MTM0NUwyMDUuNzgxIDEuNDA2NzhaTTE5My41NjcgOS4wMjAxMkMxOTEuNzc0IDUuOTg2NzggMTkxLjI3NCAzLjQ2MDEyIDE5MS40NDEgMi43NjAxMkMxOTIuMDU0IDIuOTgwMTIgMTkzLjU3NCA0LjI4MDEyIDE5NS4xMjcgNi45MTM0NUMxOTYuMDgxIDguNTMzNDUgMTk2LjY2MSA5Ljk5MzQ1IDE5Ni45ODEgMTEuMTIwMUMxOTYuNzg3IDExLjcwNjggMTk2LjY2NyAxMi4yNzM1IDE5Ni42MjEgMTIuNzg2OEMxOTUuODYxIDEyLjIwMDEgMTk0LjcyNyAxMC45ODY4IDE5My41NjcgOS4wMjY3OFY5LjAyMDEyWk0yMDIuOTE0IDkuNjIwMTJDMjAxLjU1NCAxMS40MTM1IDIwMC4zMDEgMTIuNDczNSAxOTkuNDg3IDEyLjk2MDFDMTk5LjUwNyAxMi40MjAxIDE5OS40NDEgMTEuODMzNSAxOTkuMzA3IDExLjIyMDFDMTk5Ljc0MSAxMC4xNDAxIDIwMC40NzQgOC43ODAxMiAyMDEuNTk0IDcuMzA2NzhDMjAzLjQyMSA0LjkwMDEyIDIwNS4wNjEgMy44MDY3OCAyMDUuNjk0IDMuNjYwMTJDMjA1Ljc4NyA0LjQzMzQ1IDIwNS4wMTQgNi44NTM0NSAyMDIuOTE0IDkuNjIwMTJaXCIgLz57JyAnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1NC44NDcgMi4wOTM0NUMyNTQuNDYxIDEuNjMzNDUgMjUzLjkwNyAxLjM5MzQ1IDI1My4yNDEgMS40MDY3OEMyNTEuMzQxIDEuNDYwMTIgMjQ4LjkxNCAzLjc4Njc4IDI0Ny4yNzQgNS45NTM0NUMyNDYuNzM0IDYuNjY2NzggMjQ2LjIyMSA3LjQ0MDEyIDI0NS43NjcgOC4yMjY3OEMyNDUuMzY3IDcuMzEzNDUgMjQ0LjkyMSA2LjQ2MDEyIDI0NC41MTQgNS43NzM0NUMyNDMuMTIxIDMuNDA2NzggMjQwLjk1NCAwLjc4Njc4NCAyMzkuMDgxIDAuNTEzNDUxQzIzOC40NDcgMC40MjAxMTggMjM3Ljg1NCAwLjU5MzQ1MSAyMzcuNDIxIDEuMDAwMTJDMjM1LjUyNyAyLjc2Njc4IDIzNy41ODcgNy41ODY3OCAyMzkuMTA3IDEwLjE2MDFDMjQwLjUwMSAxMi41MjY4IDI0Mi42NjEgMTUuMTQ2OCAyNDQuNTQxIDE1LjQyMDFDMjQ0LjY1NCAxNS40MzM1IDI0NC43NjEgMTUuNDQ2OCAyNDQuODY3IDE1LjQ0NjhDMjQ1LjA0MSAxNS40NDY4IDI0NS4yMDEgMTUuNDIwMSAyNDUuMzYxIDE1LjM4MDFDMjQ1LjYwMSAxNS40NzM1IDI0NS44NTQgMTUuNTI2OCAyNDYuMTI3IDE1LjUyNjhDMjQ2LjE0NyAxNS41MjY4IDI0Ni4xNjcgMTUuNTI2OCAyNDYuMTk0IDE1LjUyNjhDMjQ4LjA5NCAxNS40NzM1IDI1MC41MjEgMTMuMTQ2OCAyNTIuMTYxIDEwLjk4MDFDMjU0LjQ4MSA3LjkyMDEyIDI1Ni4zMTQgMy44MzM0NSAyNTQuODU0IDIuMTAwMTJMMjU0Ljg0NyAyLjA5MzQ1Wk0yNDEuMDI3IDkuMDIwMTJDMjM5LjIzNCA1Ljk4Njc4IDIzOC43MzQgMy40NjY3OCAyMzguOTAxIDIuNzYwMTJDMjM5LjUxNCAyLjk4MDEyIDI0MS4wMzQgNC4yODAxMiAyNDIuNTg3IDYuOTEzNDVDMjQzLjU0MSA4LjUzMzQ1IDI0NC4xMjEgOS45OTM0NSAyNDQuNDQxIDExLjEyMDFDMjQ0LjI0NyAxMS43MDY4IDI0NC4xMjcgMTIuMjczNSAyNDQuMDgxIDEyLjc4NjhDMjQzLjMyMSAxMi4yMDAxIDI0Mi4xODcgMTAuOTg2OCAyNDEuMDI3IDkuMDI2NzhWOS4wMjAxMlpNMjUwLjM3NCA5LjYyMDEyQzI0OS4wMTQgMTEuNDEzNSAyNDcuNzYxIDEyLjQ3MzUgMjQ2Ljk0NyAxMi45NjAxQzI0Ni45NjcgMTIuNDIwMSAyNDYuOTAxIDExLjgzMzUgMjQ2Ljc2NyAxMS4yMjAxQzI0Ny4yMDEgMTAuMTQwMSAyNDcuOTM0IDguNzgwMTIgMjQ5LjA1NCA3LjMwNjc4QzI1MC44ODEgNC45MDAxMiAyNTIuNTIxIDMuODA2NzggMjUzLjE1NCAzLjY2MDEyQzI1My4yNDcgNC40MzM0NSAyNTIuNDc0IDYuODUzNDUgMjUwLjM3NCA5LjYyMDEyWlwiIC8+eycgJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjkuMDQxIDEuNDA2NzhDMjI3LjE0MSAxLjQ2MDEyIDIyNC43MTQgMy43ODY3OCAyMjMuMDc0IDUuOTUzNDVDMjIyLjQxNCA2LjgyNjc4IDIyMS43OTQgNy43ODAxMiAyMjEuMjc0IDguNzQwMTJDMjIwLjcxNCA3LjY3MzQ1IDIyMC4wNzQgNi42NjY3OCAyMTkuNTA3IDUuODkzNDVDMjE3Ljg4NyAzLjY3MzQ1IDIxNS40ODEgMS4yNzM0NSAyMTMuNTg3IDEuMTg2NzhDMjEyLjk0MSAxLjE2MDEyIDIxMi4zODEgMS4zODY3OCAyMTEuOTgxIDEuODMzNDVDMjEwLjI2NyAzLjc3MzQ1IDIxMi43ODcgOC4zNzM0NSAyMTQuNTQxIDEwLjc4NjhDMjE2LjE2MSAxMy4wMDY4IDIxOC41NjEgMTUuNDA2OCAyMjAuNDYxIDE1LjQ5MzVDMjIwLjUwMSAxNS40OTM1IDIyMC41MzQgMTUuNDkzNSAyMjAuNTc0IDE1LjQ5MzVDMjIwLjgwMSAxNS40OTM1IDIyMS4wMTQgMTUuNDUzNSAyMjEuMjE0IDE1LjM4NjhDMjIxLjQzNCAxNS40NjY4IDIyMS42NjcgMTUuNTEzNSAyMjEuOTIxIDE1LjUxMzVDMjIxLjk0MSAxNS41MTM1IDIyMS45NjEgMTUuNTEzNSAyMjEuOTg3IDE1LjUxMzVDMjIzLjg4NyAxNS40NjAxIDIyNi4zMTQgMTMuMTMzNSAyMjcuOTU0IDEwLjk2NjhDMjMwLjI3NCA3LjkwNjc5IDIzMi4xMDcgMy44MjAxMiAyMzAuNjQ3IDIuMDg2NzhDMjMwLjI2MSAxLjYyNjc4IDIyOS43MDcgMS4zNzM0NSAyMjkuMDQxIDEuNDAwMTJWMS40MDY3OFpNMjE2LjM1NCA5LjQ2Njc4QzIxNC4yODEgNi42MjAxMiAyMTMuNTM0IDQuMTYwMTIgMjEzLjYyNyAzLjQ0MDEyQzIxNC4yNjEgMy42MDAxMiAyMTUuOTAxIDQuNzQ2NzggMjE3LjcwMSA3LjIxMzQ1QzIxOC45NDEgOC45MTM0NSAyMTkuNjk0IDEwLjQ2NjggMjIwLjA4NyAxMS42MDAxQzIxOS45NTQgMTIuMDg2OCAyMTkuODgxIDEyLjU1MzUgMjE5Ljg2MSAxMi45ODAxQzIxOS4wNTQgMTIuNTA2OCAyMTcuNzU0IDExLjM5MzUgMjE2LjM0NyA5LjQ2Njc4SDIxNi4zNTRaTTIyNi4xNzQgOS42MjAxMkMyMjQuNzU0IDExLjQ5MzUgMjIzLjQ0NyAxMi41NjY4IDIyMi42NDEgMTMuMDIwMUMyMjIuNjM0IDEyLjU3MzUgMjIyLjU1NCAxMi4xMDAxIDIyMi40MjEgMTEuNjAwMUMyMjIuODI3IDEwLjQ3MzUgMjIzLjYwMSA4Ljk1MzQ1IDIyNC44NTQgNy4zMDY3OEMyMjYuNjgxIDQuOTAwMTIgMjI4LjMyMSAzLjgwNjc4IDIyOC45NTQgMy42NjAxMkMyMjkuMDQ3IDQuNDMzNDUgMjI4LjI3NCA2Ljg1MzQ1IDIyNi4xNzQgOS42MjAxMlpcIiAvPnsnICd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1bNHB4XSB0ZXh0LWp1c3RpZnkgdGV4dC1bMjRweF0gbWQ6dGV4dC1bMzJweF0gdGV4dC1bIzNjM2MzY10gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzI0cHhdIG1iLVs3MnB4XSBtZDptdC1bNDBweF0gbXgtYXV0byBtYXgtdy1bNzIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1bMTZweF0gbWQ6bWItWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzhweF0gdGV4dC1sZWZ0IHRleHQtWzIwcHhdIG1kOnRleHQtWzI0cHhdIHRleHQtWyMyZDczMTZdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg55Si5pyfXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnkgdGV4dC1bMTZweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkdXJpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLVsxNnB4XSBtZDptYi1bMjRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1bOHB4XSB0ZXh0LWxlZnQgdGV4dC1bMjBweF0gbWQ6dGV4dC1bMjRweF0gdGV4dC1bIzJkNzMxNl0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDopo/moLxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWRpc2MgcGwtWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IHRleHQtWzE2cHhdIG1kOnRleHQtWzE4cHhdIHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NpemV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzE2cHhdIG1kOm1iLVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLVs4cHhdIHRleHQtbGVmdCB0ZXh0LVsyMHB4XSBtZDp0ZXh0LVsyNHB4XSB0ZXh0LVsjMmQ3MzE2XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiyqeWUruWcsOm7nlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IHRleHQtWzE2cHhdIG1kOnRleHQtWzE4cHhdIHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3BvdF9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1bMTZweF0gbWQ6bWItWzI0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzhweF0gdGV4dC1sZWZ0IHRleHQtWzIwcHhdIG1kOnRleHQtWzI0cHhdIHRleHQtWyMyZDczMTZdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YCj57Wh6Zu76KmxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1zdGFydCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLVsxNnB4XSB0ZXh0LWp1c3RpZnkgdGV4dC1bMTZweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgdGVsOiR7dGVsfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6aGlkZGVuIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LVsxMnB4XSBweC1bMjRweF0gdy1maXQgZm9udC1ib2xkICBib3JkZXItWyMxMDZmYTJdIGJvcmRlci1bMnB4XSBib3JkZXItc29saWQgcm91bmRlZC1waWxsIHRycy1hbGwgaG92ZXI6YmctWyNlN2Y3ZmZdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB0ZXh0LVsjMTA2ZmEyXVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkvobpm7vmtL3oqaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtbC1bOHB4XSBpY29uIGljb24tYXJyb3ctcmlnaHQgdGV4dC1bIzEwNmZhMl0gdGV4dC1bMTZweF1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzE2cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItWzhweF0gdGV4dC1sZWZ0IHRleHQtWzIwcHhdIG1kOnRleHQtWzI0cHhdIHRleHQtWyMyZDczMTZdIGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LKp5ZSu5Zyw6bueXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWp1c3RpZnkgdGV4dC1bMTZweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWPsOS4reW4guefs+WyoeWNgOiQrOWuiemHjOefs+WyoeihlzY36JmfXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgeGw6anVzdGlmeS1zdGFydCBwdC1bNDBweF0gbWItWzgwcHhdIG1kOm1iLVsxMjBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJldHVybkJ0biAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiDpoJDnlZljbGFzc05hbWXvvIzngrrlvoznuozlop7liqDlj6/mk43kvZznqbrplpMgKi99XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYWdlKVxuIl0sIm5hbWVzIjpbIkkxOE4iLCJMaW5rIiwidXNlTG9jYWxlIiwiUmVhY3QiLCJ1c2VTZWFyY2hQYXJhbXMiLCJCcmVhZGNydW1icyIsIl9yZWYiLCJfczIiLCJfcyIsImRhdGEiLCJjbGFzc05hbWUiLCJsYW5nIiwiX3VzZVNlYXJjaFBhcmFtcyIsIl91c2VTZWFyY2hQYXJhbXMyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZWFyY2giLCJpc0VtYmVkIiwiZ2V0IiwiY3JlYXRlRWxlbWVudCIsImNvbmNhdCIsImFjY2Vzc0tleSIsImhyZWYiLCJ0aXRsZSIsIm9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJsZW5ndGgiLCJtYXAiLCJfcmVmMiIsImkiLCJ1cmwiLCJrZXkiLCJfYzMiLCJfYyIsIl9jMiIsIm1lbW8iLCIkUmVmcmVzaFJlZyQiLCJSZXR1cm5CdG4iLCJoYW5kbGVCYWNrIiwid2luZG93IiwiaGlzdG9yeSIsImJhY2siLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlRodW1iRnJhbWUiLCJ1c2VQYXJhbXMiLCJQYWdlIiwiX3VzZVBhcmFtcyIsImlkIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJmZXRjaCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJzdWNjZXNzIiwiX2RhdGEkcGhvbmUiLCJfZGF0YSRwaG9uZTIiLCJfZGF0YSRpbWFnZXMiLCJfZGF0YSRpbWFnZXMyIiwidGVsIiwicGhvbmUxIiwidHJpbSIsInBob25lMiIsImNvdmVyIiwiaW1hZ2VzIiwiZmluZCIsImltZyIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1BBVEgiLCJwYXJ0cyIsInNwZWNpZmljYXRpb25zIiwic3BsaXQiLCJzaXplIiwiZHVyaW5nIiwicmVwbGFjZSIsImNvbnNvbGUiLCJlcnJvciIsIm5hbWUiLCJzcG90X25hbWUiLCJTcGlubmVyIiwiY29sb3IiLCJzcmMiLCJhbHQiLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJkIl0sInNvdXJjZVJvb3QiOiIifQ==