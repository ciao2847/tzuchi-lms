"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_souvenirs-country_index_js"],{

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

/***/ "./src/views/souvenirs-country/Introduction.js"
/*!*****************************************************!*\
  !*** ./src/views/souvenirs-country/Introduction.js ***!
  \*****************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var components_BlockTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/BlockTitle */ "./src/components/BlockTitle.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var tip = ['可以當作伴手禮攜帶出境', '經檢疫合格符合輸入國檢疫規定可攜帶出境', '不可當作伴手禮攜帶出境'];
var Introduction = function Introduction() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-xl-10 pt-md-5 pb-md-10 pt-4 py-8 bg-gradient-to-t from-[#FFF6DE] px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BlockTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u51FA\u5883\u4F34\u624B\u79AE",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100 max-w-[900px] mx-auto fz-md-20px fz-15px text-center leading-loose mb-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u5982\u679C\u8981\u5C07\u53F0\u7063\u7684\u6C34\u679C(\u9BAE\u679C)\u7576\u6210\u4F34\u624B\u79AE\u651C\u5E36\u81F3\u570B\u5916\uFF0C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u4F9D\u7167\u76EE\u7684\u5730\u570B\u5BB6\u3001\u5730\u5340\u548C\u6C34\u679C\uFF0C\u5927\u81F4\u5206\u62103\u7A2E\u898F\u5B9A\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, "\u4E86\u89E3\u76EE\u7684\u5730\u570B\u5BB6\u7684\u898F\u5B9A\uFF0C\u591A\u591A\u54C1\u5617\u53F0\u7063\u7684\u6C34\u679C\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100 max-w-[640px] mx-auto bg-[#fff] md:rounded-[32px] rounded-[16px] p-3 p-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list list-inside list-decimal"
  }, tip.map(function (rule, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "fz-18px fz-lx-20px mb-3 last:mb-[0]"
    }, rule);
  }))));
};
_c3 = Introduction;
_c = Introduction;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Introduction));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Introduction");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Introduction");

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

/***/ "./src/views/souvenirs-country/Rule.js"
/*!*********************************************!*\
  !*** ./src/views/souvenirs-country/Rule.js ***!
  \*********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var components_AnchorFix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AnchorFix */ "./src/components/AnchorFix.js");
/* harmony import */ var components_BlockTitle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/BlockTitle */ "./src/components/BlockTitle.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();






var rule = [{
  id: 1,
  title: '日本',
  img: 'flag-jp.jpg',
  content: '部分水果經檢疫合格符合輸入國檢疫規定可攜帶出境',
  detail: {
    title: '日本植物防疫所',
    url: 'https://www.maff.go.jp/pps/j/search/ikuni/tw.html#pc'
  },
  fruit: [{
    title: '鳳梨',
    url: '#'
  }, {
    title: '椰子'
  }, {
    title: '榴槤'
  }]
}, {
  id: 2,
  title: '韓國',
  img: 'flag-kr.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '韓國關稅廳',
    url: 'https://www.customs.go.kr/kcs/cm/cntnts/cntntsView.do?mi=2837&cntntsId=829'
  }
}, {
  id: 3,
  title: '中國大陸',
  img: 'flag-cn.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '中華人民共和國廈門海關',
    url: 'http://xiamen.customs.gov.cn/xiamen_customs/lkjjtgcjsfw/3966558/3971626/index.html?ess%24ctr151088%24ListC_Info%24ctl00%24KEYWORDS=%E7%A6%81%E6%AD%A2%E6%90%BA%E5%B8%A6%E5%85%A5%E5%A2%83'
  }
}, {
  id: 4,
  title: '香港',
  img: 'flag-hk.jpg',
  content: '可以當作伴手禮攜帶出境',
  detail: {
    title: '香港海關',
    url: 'https://www.customs.gov.hk/tc/service-enforcement-information/passenger-clearance/faqs/index.html'
  },
  fruit: [{
    title: '台灣四季水果',
    url: '/season-fruits'
  }]
}, {
  id: 5,
  title: '新加坡',
  img: 'flag-sg.jpg',
  content: '可以當作伴手禮攜帶出境',
  detail: {
    title: '新加坡食品局',
    url: 'https://www.sfa.gov.sg/food-import-export/bringing-food-for-personal-use'
  },
  fruit: [{
    title: '台灣四季水果',
    url: '/season-fruits'
  }]
}, {
  id: 6,
  title: '阿拉伯聯合大公國',
  img: 'flag-ae.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '外交部領事事務局',
    url: 'https://www.boca.gov.tw/sp-foof-countrycp-03-51-e5142-02-1.html'
  }
}, {
  id: 7,
  title: '馬來西亞',
  img: 'flag-my.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: 'KKday網站',
    url: 'https://www.kkday.com/zh-tw/blog/117272/asia-malaysia-covid19-entry-restrictions?srsltid=AfmBOooIarqPGLhvDeelXgkpsW1rocu45VOuPdaNcSSyyApYBIELGJNF'
  }
}, {
  id: 8,
  title: '歐盟',
  img: 'flag-eu.jpg',
  content: '部分水果可以當作伴手禮攜帶出境',
  detail: {
    title: '歐盟委員會',
    url: 'https://food.ec.europa.eu/plants/plant-health-and-biosecurity/trade-plants-plant-products-non-eu-countries_en'
  },
  fruit: [{
    title: '鳳梨',
    url: '#'
  }, {
    title: '椰子'
  }, {
    title: '榴槤'
  }, {
    title: '椰棗'
  }, {
    title: '香蕉'
  }]
}, {
  id: 9,
  title: '紐西蘭',
  img: 'flag-nz.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '外交部領事事務局',
    url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-19-2e478-02-1.html'
  }
}, {
  id: 10,
  title: '加拿大',
  img: 'flag-ca.jpg',
  content: '部分水果可以當作伴手禮攜帶出境',
  detail: {
    title: '加拿大食品檢驗局',
    url: 'https://inspection.canada.ca/en/food-safety-consumers/bringing-food-canada-personal-use'
  },
  fruit: [{
    title: '枇杷',
    url: '#'
  }, {
    title: '西瓜',
    url: '#'
  }, {
    title: '芒果',
    url: '#'
  }, {
    title: '荔枝',
    url: '#'
  }, {
    title: '柿子',
    url: '#'
  }, {
    title: '芭樂',
    url: '#'
  }]
}, {
  id: 11,
  title: '印尼',
  img: 'flag-id.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '外交部領事事務局',
    url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-12-c23b0-02-1.html'
  }
}, {
  id: 12,
  title: '泰國',
  img: 'flag-th.jpg',
  content: '部分水果經檢疫合格符合輸入國檢疫規定可攜帶出境',
  detail: {
    title: '泰國觀光局',
    url: 'https://www.tattpe.org.tw/HowToGo.html?id=2'
  },
  fruit: [{
    title: '台灣四季水果',
    url: '/season-fruits'
  }]
}, {
  id: 13,
  title: '瑞士',
  img: 'flag-ch.jpg',
  content: '部分水果可以當作伴手禮攜帶出境',
  detail: {
    title: '駐瑞士台北文化經濟代表團',
    url: 'https://www.roc-taiwan.org/ch/post/6427.html'
  },
  fruit: [{
    title: '鳳梨',
    url: '#'
  }, {
    title: '椰子'
  }, {
    title: '榴槤'
  }, {
    title: '椰棗'
  }, {
    title: '香蕉'
  }]
}, {
  id: 14,
  title: '美國',
  img: 'flag-us.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '外交部領事事務局',
    url: 'https://www.boca.gov.tw/sp-foof-countrycp-01-100-57cb3-1.html'
  }
}, {
  id: 15,
  title: '澳大利亞',
  img: 'flag-au.jpg',
  content: '不可當作伴手禮攜帶出境',
  detail: {
    title: '外交部領事事務局',
    url: 'https://www.boca.gov.tw/sp-foof-countrycp-03-17-c471c-02-1.html'
  }
}];
var Rule = function Rule() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
  var ANCHOR_CONFIG = [{
    id: 1,
    title: '日本',
    img: 'flag-jp.jpg'
  }, {
    id: 2,
    title: '韓國',
    img: 'flag-kr.jpg'
  }, {
    id: 3,
    title: '中國大陸',
    img: 'flag-cn.jpg'
  }, {
    id: 4,
    title: '香港',
    img: 'flag-hk.jpg'
  }, {
    id: 5,
    title: '新加坡',
    img: 'flag-sg.jpg'
  }, {
    id: 6,
    title: '阿拉伯聯合大公國',
    img: 'flag-ae.jpg'
  }, {
    id: 7,
    title: '馬來西亞',
    img: 'flag-my.jpg'
  }, {
    id: 8,
    title: '歐洲聯盟',
    img: 'flag-eu.jpg'
  }, {
    id: 9,
    title: '紐西蘭',
    img: 'flag-nz.jpg'
  }, {
    id: 10,
    title: '加拿大',
    img: 'flag-ca.jpg'
  }, {
    id: 11,
    title: '印尼',
    img: 'flag-id.jpg'
  }, {
    id: 12,
    title: '泰國',
    img: 'flag-th.jpg'
  }, {
    id: 13,
    title: '瑞士',
    img: 'flag-ch.jpg'
  }, {
    id: 14,
    title: '美國',
    img: 'flag-us.jpg'
  }, {
    id: 15,
    title: '澳大利亞',
    img: 'flag-au.jpg'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-10 px-[16px] lg:px-[0]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "md:max-w-[600px] max-w-[400px] mx-auto grid md:grid-cols-4 grid-cols-3 md:gap-x-10 gap-x-4 gap-y-5 mb-md-5 mb-2"
  }, ANCHOR_CONFIG.map(function (config, i) {
    if (config.hideIn && config.hideIn.includes(lang)) {
      return null;
    }
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "group flex flex-col items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      className: "d-block md:w-[100%] w-[100px]",
      onClick: function onClick() {
        document.querySelector("#anchor-".concat(config.id)).scrollIntoView({
          behavior: 'smooth'
        });
      },
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "md:h-[80px] h-[68px] w-100 mb-1 bg-info rounded-[8px] outline outline-[1px] outline-[#C4C4C4] group-hover:outline-[#82BE66] group-hover:outline-[2px] group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]",
      style: {
        backgroundImage: "url(".concat("/fruits-travel", "/images/country/").concat(config.img, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "h-8 w-100 px-1 block fz-20px text-center group-hover:text-[#2D7316]"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, config.title)));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "max-w-[880px] mx-auto fz-18px fz-md-20px px-3"
  }, "\u203B", ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u5C07\u690D\u7269\uFF08\u6C34\u679C\u3001\u852C\u83DC\u7B49\uFF09\u5E36\u5230\u570B\u5916\u7684\u65B9\u5F0F\uFF0C\u5206\u70BA\u65C5\u5BA2\u651C\u5E36\u3001\u8CA8\u7269\u3001\u90F5\u5BC4\u7B493\u7A2E\uFF0C\u672C\u7DB2\u7AD9\u4ECB\u7D39\u7684\u662F\u65C5\u5BA2\u651C\u5E36\u7684\u898F\u5B9A\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-10 px-2 px-md-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BlockTitle__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "\u65C5\u5BA2\u651C\u5E36\u898F\u5B9A",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "max-w-[900px] mx-auto"
  }, rule.map(function (rule, i) {
    var _rule$fruit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "relative px-md-5 py-md-3 p-2 mb-xl-4 mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_AnchorFix__WEBPACK_IMPORTED_MODULE_4__["default"], {
      id: "anchor-".concat(rule.id)
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "border border-[0] border-b-[2px] border-dashed pb-2 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-24px fz-md-28px font-weight-bold inline-flex gap-2 mb-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "h-[40px] w-[60px] bg-info rounded-[4px] outline outline-[1px] outline-[#C4C4C4] group-hover:outline-[#82BE66] group-hover:outline-[2px] group-hover:drop-shadow-[0_0_4px_rgba(0,0,0,0.1)]",
      style: {
        backgroundImage: "url(".concat("/fruits-travel", "/images/country/").concat(rule.img, ")"),
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, rule.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-16px fz-md-20px text-[#2D7316] "
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, rule.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u8A73\u60C5\u53C3\u8003\uFF1A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "text-[#BD4F00] hover:text-[#FBCE4C] inline-flex",
      title: "".concat((0,components_I18N__WEBPACK_IMPORTED_MODULE_2__.translate)(rule.detail.title, lang), " (").concat((0,components_I18N__WEBPACK_IMPORTED_MODULE_2__.translate)('另開視窗', lang), ")"),
      href: rule.detail.url,
      target: "_blank",
      rel: "noreferrer noopener"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "underline underline-offset-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, rule.detail.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "icon icon-link-out ml-4px",
      "aria-hidden": "true"
    }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
      className: "flex flex-wrap gap-3"
    }, (_rule$fruit = rule.fruit) === null || _rule$fruit === void 0 ? void 0 : _rule$fruit.map(function (fruit, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
        key: j,
        className: "group"
      }, fruit.url ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "inline-flex rounded-pill px-12px py-4px border group-hover:border-[#FBCE4C]",
        title: (0,components_I18N__WEBPACK_IMPORTED_MODULE_2__.translate)(fruit.title, lang),
        href: fruit.url
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, fruit.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "icon icon-arrow-right ml-4px text-[#C4C4C4] group-hover:text-[#FBCE4C]",
        "aria-hidden": "true"
      })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "inline-flex rounded-pill px-12px py-4px border"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, fruit.title)));
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "max-w-[880px] mx-auto fz-18px fz-md-20px pt-4 px-[16px] md:px-[40px] lg:px-[0] mb-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u82E5\u5C0D\u65BC\u51FA\u5883\u4F34\u624B\u79AE\u6709\u4EFB\u4F55\u554F\u984C\uFF0C\u8ACB\u6D3D\u8FB2\u696D\u90E8\u52D5\u690D\u7269\u9632\u75AB\u6AA2\u75AB\u7F72\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u96FB\u5B50\u90F5\u4EF6"), "\uFF1Adpq@aphia.gov.tw", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u96FB\u8A71"), "\uFF1A02-23431406")));
};
_s2(Rule, "BDYpxpAiK2IgDjBQW7dNBnbGjMk=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale];
});
_c3 = Rule;
_s(Rule, "BDYpxpAiK2IgDjBQW7dNBnbGjMk=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale];
});
_c = Rule;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Rule));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Rule");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Rule");

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

/***/ "./src/views/souvenirs-country/index.js"
/*!**********************************************!*\
  !*** ./src/views/souvenirs-country/index.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bannerTitle */ "./src/components/bannerTitle.js");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introduction */ "./src/views/souvenirs-country/Introduction.js");
/* harmony import */ var _Rule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Rule */ "./src/views/souvenirs-country/Rule.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! api */ "./src/api/index.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();







var Page = function Page() {
  _s2();
  _s();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)(),
    _useParams$id = _useParams.id,
    id = _useParams$id === void 0 ? '3' : _useParams$id;
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_5__.useLocale)();
  var _ref = (0,api__WEBPACK_IMPORTED_MODULE_4__.useFruitDataReduxVer)({
      lang: lang,
      id: id
    }) || {},
    data = _ref.data;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (!data) return;
  });
  console.log(data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '甜蜜滋味傳遞世界',
    sub: "\u51FA\u5883\u4F34\u624B\u79AE",
    content: "\u4E86\u89E3\u76EE\u7684\u5730\u570B\u5BB6\u7684\u898F\u5B9A\uFF0C\u5E36\u56DE\u570B\u7576\u4F34\u624B\u79AE",
    img: "foreign-gift.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Introduction__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Rule__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};
_s2(Page, "LkrR8A+deqbARZwkR26kXL6ouio=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams, hooks__WEBPACK_IMPORTED_MODULE_5__.useLocale, api__WEBPACK_IMPORTED_MODULE_4__.useFruitDataReduxVer];
});
_c3 = Page;
_s(Page, "uysZjQ2VRH+VlpJIEf3pbFWbgQo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams, hooks__WEBPACK_IMPORTED_MODULE_5__.useLocale, api__WEBPACK_IMPORTED_MODULE_4__.useFruitDataReduxVer];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3NvdXZlbmlycy1jb3VudHJ5X2luZGV4X2pzLWQ0NDU1Yzk1OWYxOWFlZTdkYTUyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNyQyxJQUFNRSxTQUFTLEdBQUcsU0FBWkEsU0FBU0EsQ0FBQUMsSUFBQSxFQU9UO0VBQUFDLEdBQUE7RUFBQUMsRUFBQTtFQUFBLElBQUFDLFdBQUEsR0FBQUgsSUFBQSxDQU5GSSxNQUFNO0lBQU5BLE1BQU0sR0FBQUQsV0FBQSxjQUFHLENBQUMsRUFBRSxHQUFBQSxXQUFBO0lBQUFFLGFBQUEsR0FBQUwsSUFBQSxDQUNaTSxRQUFRO0lBQVJBLFFBQVEsR0FBQUQsYUFBQSxjQUFHLENBQUMsRUFBRSxHQUFBQSxhQUFBO0lBQUFFLGFBQUEsR0FBQVAsSUFBQSxDQUNkUSxRQUFRO0lBQVJBLFFBQVEsR0FBQUQsYUFBQSxjQUFHLENBQUMsRUFBRSxHQUFBQSxhQUFBO0lBQ2RFLEVBQUUsR0FBQVQsSUFBQSxDQUFGUyxFQUFFO0lBQ0ZDLFNBQVMsR0FBQVYsSUFBQSxDQUFUVSxTQUFTO0lBQ1RDLElBQUksR0FBQVgsSUFBQSxDQUFKVyxJQUFJO0VBRUosSUFBTUMsY0FBYyxHQUFHZCwwREFBUSxDQUFDLG9CQUFvQixDQUFDO0VBQ3JELElBQU1lLGVBQWUsR0FBR2YsMERBQVEsQ0FBQyxxQkFBcUIsQ0FBQztFQUN2RCxJQUFNZ0IsU0FBUyxHQUNWRCxlQUFlLElBQUlMLFFBQVEsSUFBTUksY0FBYyxJQUFJTixRQUFTLElBQUlGLE1BQU07RUFFM0Usb0JBQ0lQLDBEQUFBO0lBQ0lhLFNBQVMscUVBQUFNLE1BQUEsQ0FBcUVOLFNBQVMsQ0FBRztJQUMxRk8sS0FBSyxFQUFFTixJQUFLO0lBQ1pPLFFBQVEsRUFBQyxJQUFJO0lBQ2JULEVBQUUsRUFBRUEsRUFBRztJQUNQVSxLQUFLLEVBQUU7TUFBRUMsU0FBUyxFQUFFTjtJQUFVO0VBQUUsR0FFL0JILElBQ0YsQ0FBQztBQUVa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ay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvQW5jaG9yRml4LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL2Jhbm5lclRpdGxlLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zb3V2ZW5pcnMtY291bnRyeS9JbnRyb2R1Y3Rpb24uanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3NvdXZlbmlycy1jb3VudHJ5L1J1bGUuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3NvdXZlbmlycy1jb3VudHJ5L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB1c2VNZWRpYSBmcm9tICdob29rcy91c2VNZWRpYSdcbmNvbnN0IEFuY2hvckZpeCA9ICh7XG4gICAgb2Zmc2V0ID0gLTU2LFxuICAgIG1kT2Zmc2V0ID0gLTU2LFxuICAgIHhsT2Zmc2V0ID0gLTgwLFxuICAgIGlkLFxuICAgIGNsYXNzTmFtZSxcbiAgICB0ZXh0XG59KSA9PiB7XG4gICAgY29uc3QgaXNUYWJsZXRMYXlvdXQgPSB1c2VNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJylcbiAgICBjb25zdCBpc0Rlc2t0b3BMYXlvdXQgPSB1c2VNZWRpYSgnKG1pbi13aWR0aDogMTIwMHB4KScpXG4gICAgY29uc3QgdG9wT2Zmc2V0ID1cbiAgICAgICAgKGlzRGVza3RvcExheW91dCAmJiB4bE9mZnNldCkgfHwgKGlzVGFibGV0TGF5b3V0ICYmIG1kT2Zmc2V0KSB8fCBvZmZzZXRcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BkLWJsb2NrIHctMCBoLTAgYWJzb2x1dGUtdG9wLWxlZnQgdGV4dC1oaWRlIHBvaW50ZXItZXZlbnRzLW5vbmUgJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIHRpdGxlPXt0ZXh0fVxuICAgICAgICAgICAgdGFiSW5kZXg9XCItMVwiXG4gICAgICAgICAgICBpZD17aWR9XG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IHRvcE9mZnNldCB9fVxuICAgICAgICA+XG4gICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgPC9hPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhBbmNob3JGaXgpXG4iLCJpbXBvcnQgQnJlYWRjcnVtYnMgZnJvbSAnY29tcG9uZW50cy9CcmVhZGNydW1icydcbmltcG9ydCBJMThOIGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCB1c2VNZWRpYSBmcm9tICdob29rcy91c2VNZWRpYSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuY29uc3QgQmFubmVyVGl0bGUgPSAoeyB0aXRsZSwgc3ViLCBjb250ZW50LCBpbWcgfSkgPT4ge1xuICAgIGNvbnN0IGlzTGF5b3V0TUQgPSB1c2VNZWRpYSgnKG1pbi13aWR0aDogNzY4cHgpJylcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9e2B3LTEwMCBoLVszNzVweF0gbGc6aC1bMzN2d10gbWF4LWgtWzY0MHB4XWB9XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9iYW5uZXIvJHtpbWd9JylgLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMDAwMDAwNjBdIHRvLVsjMDAwMDAwMDBdIHctMTAwIGgtMTAwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlIGRyb3Atc2hhZG93LVswXzBfOHB4X3JnYmEoMCwwLDAsMC44KV0gcHQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgbWItNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0yMHB4IGZ6LW1kLTI0cHggbWItNHB4XCI+e3N1Yn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnotMzJweCBmei1tZC00MHB4IGZ6LXhsLTQ4cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnotMTRweCBmei1tZC0xNnB4IGZ6LXhsLTE4cHggcHgtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXNMYXlvdXRNRCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5zcGxpdCgnICcpLm1hcCgoc3RyLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3N0cn08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e2NvbnRlbnR9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEJyZWFkY3J1bWJzXG4gICAgICAgICAgICAgICAgICAgIGRhdGE9e1t7IHRpdGxlOiBzdWIgfV19XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGxlZnQtNiBib3R0b20tMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCYW5uZXJUaXRsZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBJMThOIGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvQmxvY2tUaXRsZSdcblxuY29uc3QgdGlwID0gW1xuICAgICflj6/ku6XnlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICfntpPmqqLnlqvlkIjmoLznrKblkIjovLjlhaXlnIvmqqLnlqvopo/lrprlj6/mlJzluLblh7rlooMnLFxuICAgICfkuI3lj6/nlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnXG5dXG5cbmNvbnN0IEludHJvZHVjdGlvbiA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHkteGwtMTAgcHQtbWQtNSBwYi1tZC0xMCBwdC00IHB5LTggYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjRkZGNkRFXSBweC0yYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJsb2NrVGl0bGUgdGl0bGU9XCLlh7rlooPkvLTmiYvnpq5cIiBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbWF4LXctWzkwMHB4XSBteC1hdXRvIGZ6LW1kLTIwcHggZnotMTVweCB0ZXh0LWNlbnRlciBsZWFkaW5nLWxvb3NlIG1iLTVcIj5cbiAgICAgICAgICAgICAgICA8STE4Tj7lpoLmnpzopoHlsIflj7DngaPnmoTmsLTmnpwo6a6u5p6cKeeVtuaIkOS8tOaJi+emruaUnOW4tuiHs+Wci+Wklu+8jDwvSTE4Tj5cbiAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICA8STE4Tj7kvp3nhafnm67nmoTlnLDlnIvlrrbjgIHlnLDljYDlkozmsLTmnpzvvIzlpKfoh7TliIbmiJAz56iu6KaP5a6a44CCPC9JMThOPlxuICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgIDxJMThOPuS6huino+ebrueahOWcsOWci+WutueahOimj+Wumu+8jOWkmuWkmuWTgeWYl+WPsOeBo+eahOawtOaenOOAgjwvSTE4Tj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBtYXgtdy1bNjQwcHhdIG14LWF1dG8gYmctWyNmZmZdIG1kOnJvdW5kZWQtWzMycHhdIHJvdW5kZWQtWzE2cHhdIHAtMyBwLW1kLTZcIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdCBsaXN0LWluc2lkZSBsaXN0LWRlY2ltYWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3RpcC5tYXAoKHJ1bGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmei0xOHB4IGZ6LWx4LTIwcHggbWItMyBsYXN0Om1iLVswXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3J1bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSW50cm9kdWN0aW9uKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgSTE4TiwgeyB0cmFuc2xhdGUgfSBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgQW5jaG9yRml4IGZyb20gJ2NvbXBvbmVudHMvQW5jaG9yRml4J1xuaW1wb3J0IEJsb2NrVGl0bGUgZnJvbSAnY29tcG9uZW50cy9CbG9ja1RpdGxlJ1xuXG5jb25zdCBydWxlID0gW1xuICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHRpdGxlOiAn5pel5pysJyxcbiAgICAgICAgaW1nOiAnZmxhZy1qcC5qcGcnLFxuICAgICAgICBjb250ZW50OiAn6YOo5YiG5rC05p6c57aT5qqi55ar5ZCI5qC856ym5ZCI6Ly45YWl5ZyL5qqi55ar6KaP5a6a5Y+v5pSc5bi25Ye65aKDJyxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+aXpeacrOakjeeJqemYsueWq+aJgCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5tYWZmLmdvLmpwL3Bwcy9qL3NlYXJjaC9pa3VuaS90dy5odG1sI3BjJ1xuICAgICAgICB9LFxuICAgICAgICBmcnVpdDogW1xuICAgICAgICAgICAgeyB0aXRsZTogJ+mzs+aiqCcsIHVybDogJyMnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5qSw5a2QJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+amtOanpCcgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICB0aXRsZTogJ+mfk+WciycsXG4gICAgICAgIGltZzogJ2ZsYWcta3IuanBnJyxcbiAgICAgICAgY29udGVudDogJ+S4jeWPr+eVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICfpn5PlnIvpl5znqIXlu7MnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuY3VzdG9tcy5nby5rci9rY3MvY20vY250bnRzL2NudG50c1ZpZXcuZG8/bWk9MjgzNyZjbnRudHNJZD04MjknXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDMsXG4gICAgICAgIHRpdGxlOiAn5Lit5ZyL5aSn6Zm4JyxcbiAgICAgICAgaW1nOiAnZmxhZy1jbi5qcGcnLFxuICAgICAgICBjb250ZW50OiAn5LiN5Y+v55W25L2c5Ly05omL56au5pSc5bi25Ye65aKDJyxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+S4reiPr+S6uuawkeWFseWSjOWci+W7iOmWgOa1t+mXnCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8veGlhbWVuLmN1c3RvbXMuZ292LmNuL3hpYW1lbl9jdXN0b21zL2xramp0Z2Nqc2Z3LzM5NjY1NTgvMzk3MTYyNi9pbmRleC5odG1sP2VzcyUyNGN0cjE1MTA4OCUyNExpc3RDX0luZm8lMjRjdGwwMCUyNEtFWVdPUkRTPSVFNyVBNiU4MSVFNiVBRCVBMiVFNiU5MCVCQSVFNSVCOCVBNiVFNSU4NSVBNSVFNSVBMiU4MydcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgdGl0bGU6ICfpppnmuK8nLFxuICAgICAgICBpbWc6ICdmbGFnLWhrLmpwZycsXG4gICAgICAgIGNvbnRlbnQ6ICflj6/ku6XnlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn6aaZ5riv5rW36ZecJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmN1c3RvbXMuZ292LmhrL3RjL3NlcnZpY2UtZW5mb3JjZW1lbnQtaW5mb3JtYXRpb24vcGFzc2VuZ2VyLWNsZWFyYW5jZS9mYXFzL2luZGV4Lmh0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIGZydWl0OiBbeyB0aXRsZTogJ+WPsOeBo+Wbm+Wto+awtOaenCcsIHVybDogJy9zZWFzb24tZnJ1aXRzJyB9XVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogNSxcbiAgICAgICAgdGl0bGU6ICfmlrDliqDlnaEnLFxuICAgICAgICBpbWc6ICdmbGFnLXNnLmpwZycsXG4gICAgICAgIGNvbnRlbnQ6ICflj6/ku6XnlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5paw5Yqg5Z2h6aOf5ZOB5bGAJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LnNmYS5nb3Yuc2cvZm9vZC1pbXBvcnQtZXhwb3J0L2JyaW5naW5nLWZvb2QtZm9yLXBlcnNvbmFsLXVzZSdcbiAgICAgICAgfSxcbiAgICAgICAgZnJ1aXQ6IFt7IHRpdGxlOiAn5Y+w54Gj5Zub5a2j5rC05p6cJywgdXJsOiAnL3NlYXNvbi1mcnVpdHMnIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA2LFxuICAgICAgICB0aXRsZTogJ+mYv+aLieS8r+iBr+WQiOWkp+WFrOWciycsXG4gICAgICAgIGltZzogJ2ZsYWctYWUuanBnJyxcbiAgICAgICAgY29udGVudDogJ+S4jeWPr+eVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICflpJbkuqTpg6jpoJjkuovkuovli5nlsYAnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYm9jYS5nb3YudHcvc3AtZm9vZi1jb3VudHJ5Y3AtMDMtNTEtZTUxNDItMDItMS5odG1sJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA3LFxuICAgICAgICB0aXRsZTogJ+mmrOS+huilv+S6nicsXG4gICAgICAgIGltZzogJ2ZsYWctbXkuanBnJyxcbiAgICAgICAgY29udGVudDogJ+S4jeWPr+eVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdLS2Rheee2suermScsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5ra2RheS5jb20vemgtdHcvYmxvZy8xMTcyNzIvYXNpYS1tYWxheXNpYS1jb3ZpZDE5LWVudHJ5LXJlc3RyaWN0aW9ucz9zcnNsdGlkPUFmbUJPb29JYXJxUEdMaHZEZWVsWGdrcHNXMXJvY3U0NVZPdVBkYU5jU1N5eUFwWUJJRUxHSk5GJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA4LFxuICAgICAgICB0aXRsZTogJ+atkOebnycsXG4gICAgICAgIGltZzogJ2ZsYWctZXUuanBnJyxcbiAgICAgICAgY29udGVudDogJ+mDqOWIhuawtOaenOWPr+S7peeVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICfmrZDnm5/lp5Tlk6HmnIMnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly9mb29kLmVjLmV1cm9wYS5ldS9wbGFudHMvcGxhbnQtaGVhbHRoLWFuZC1iaW9zZWN1cml0eS90cmFkZS1wbGFudHMtcGxhbnQtcHJvZHVjdHMtbm9uLWV1LWNvdW50cmllc19lbidcbiAgICAgICAgfSxcbiAgICAgICAgZnJ1aXQ6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6ICfps7PmoqgnLCB1cmw6ICcjJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+aksOWtkCcgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfmprTmp6QnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5qSw5qOXJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+mmmeiViScgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiA5LFxuICAgICAgICB0aXRsZTogJ+e0kOilv+iYrScsXG4gICAgICAgIGltZzogJ2ZsYWctbnouanBnJyxcbiAgICAgICAgY29udGVudDogJ+S4jeWPr+eVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICflpJbkuqTpg6jpoJjkuovkuovli5nlsYAnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cuYm9jYS5nb3YudHcvc3AtZm9vZi1jb3VudHJ5Y3AtMDEtMTktMmU0NzgtMDItMS5odG1sJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMCxcbiAgICAgICAgdGl0bGU6ICfliqDmi7/lpKcnLFxuICAgICAgICBpbWc6ICdmbGFnLWNhLmpwZycsXG4gICAgICAgIGNvbnRlbnQ6ICfpg6jliIbmsLTmnpzlj6/ku6XnlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5Yqg5ou/5aSn6aOf5ZOB5qqi6amX5bGAJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vaW5zcGVjdGlvbi5jYW5hZGEuY2EvZW4vZm9vZC1zYWZldHktY29uc3VtZXJzL2JyaW5naW5nLWZvb2QtY2FuYWRhLXBlcnNvbmFsLXVzZSdcbiAgICAgICAgfSxcbiAgICAgICAgZnJ1aXQ6IFtcbiAgICAgICAgICAgIHsgdGl0bGU6ICfmnofmnbcnLCB1cmw6ICcjJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+ilv+eTnCcsIHVybDogJyMnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn6IqS5p6cJywgdXJsOiAnIycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfojZTmnp0nLCB1cmw6ICcjJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+afv+WtkCcsIHVybDogJyMnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn6Iqt5qiCJywgdXJsOiAnIycgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxMSxcbiAgICAgICAgdGl0bGU6ICfljbDlsLwnLFxuICAgICAgICBpbWc6ICdmbGFnLWlkLmpwZycsXG4gICAgICAgIGNvbnRlbnQ6ICfkuI3lj6/nlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5aSW5Lqk6YOo6aCY5LqL5LqL5YuZ5bGAJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmJvY2EuZ292LnR3L3NwLWZvb2YtY291bnRyeWNwLTAxLTEyLWMyM2IwLTAyLTEuaHRtbCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTIsXG4gICAgICAgIHRpdGxlOiAn5rOw5ZyLJyxcbiAgICAgICAgaW1nOiAnZmxhZy10aC5qcGcnLFxuICAgICAgICBjb250ZW50OiAn6YOo5YiG5rC05p6c57aT5qqi55ar5ZCI5qC856ym5ZCI6Ly45YWl5ZyL5qqi55ar6KaP5a6a5Y+v5pSc5bi25Ye65aKDJyxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+azsOWci+ingOWFieWxgCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy50YXR0cGUub3JnLnR3L0hvd1RvR28uaHRtbD9pZD0yJ1xuICAgICAgICB9LFxuICAgICAgICBmcnVpdDogW3sgdGl0bGU6ICflj7DngaPlm5vlraPmsLTmnpwnLCB1cmw6ICcvc2Vhc29uLWZydWl0cycgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6IDEzLFxuICAgICAgICB0aXRsZTogJ+eRnuWjqycsXG4gICAgICAgIGltZzogJ2ZsYWctY2guanBnJyxcbiAgICAgICAgY29udGVudDogJ+mDqOWIhuawtOaenOWPr+S7peeVtuS9nOS8tOaJi+emruaUnOW4tuWHuuWigycsXG4gICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgdGl0bGU6ICfpp5DnkZ7lo6vlj7DljJfmlofljJbntpPmv5/ku6PooajlnJgnLFxuICAgICAgICAgICAgdXJsOiAnaHR0cHM6Ly93d3cucm9jLXRhaXdhbi5vcmcvY2gvcG9zdC82NDI3Lmh0bWwnXG4gICAgICAgIH0sXG4gICAgICAgIGZydWl0OiBbXG4gICAgICAgICAgICB7IHRpdGxlOiAn6bOz5qKoJywgdXJsOiAnIycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfmpLDlrZAnIH0sXG4gICAgICAgICAgICB7IHRpdGxlOiAn5qa05qekJyB9LFxuICAgICAgICAgICAgeyB0aXRsZTogJ+aksOajlycgfSxcbiAgICAgICAgICAgIHsgdGl0bGU6ICfpppnolYknIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICBpZDogMTQsXG4gICAgICAgIHRpdGxlOiAn576O5ZyLJyxcbiAgICAgICAgaW1nOiAnZmxhZy11cy5qcGcnLFxuICAgICAgICBjb250ZW50OiAn5LiN5Y+v55W25L2c5Ly05omL56au5pSc5bi25Ye65aKDJyxcbiAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ+WkluS6pOmDqOmgmOS6i+S6i+WLmeWxgCcsXG4gICAgICAgICAgICB1cmw6ICdodHRwczovL3d3dy5ib2NhLmdvdi50dy9zcC1mb29mLWNvdW50cnljcC0wMS0xMDAtNTdjYjMtMS5odG1sJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAxNSxcbiAgICAgICAgdGl0bGU6ICfmvrPlpKfliKnkup4nLFxuICAgICAgICBpbWc6ICdmbGFnLWF1LmpwZycsXG4gICAgICAgIGNvbnRlbnQ6ICfkuI3lj6/nlbbkvZzkvLTmiYvnpq7mlJzluLblh7rlooMnLFxuICAgICAgICBkZXRhaWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAn5aSW5Lqk6YOo6aCY5LqL5LqL5YuZ5bGAJyxcbiAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vd3d3LmJvY2EuZ292LnR3L3NwLWZvb2YtY291bnRyeWNwLTAzLTE3LWM0NzFjLTAyLTEuaHRtbCdcbiAgICAgICAgfVxuICAgIH1cbl1cblxuY29uc3QgUnVsZSA9ICgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gdXNlTG9jYWxlKClcbiAgICBjb25zdCBBTkNIT1JfQ09ORklHID0gW1xuICAgICAgICB7IGlkOiAxLCB0aXRsZTogJ+aXpeacrCcsIGltZzogJ2ZsYWctanAuanBnJyB9LFxuICAgICAgICB7IGlkOiAyLCB0aXRsZTogJ+mfk+WciycsIGltZzogJ2ZsYWcta3IuanBnJyB9LFxuICAgICAgICB7IGlkOiAzLCB0aXRsZTogJ+S4reWci+Wkp+mZuCcsIGltZzogJ2ZsYWctY24uanBnJyB9LFxuICAgICAgICB7IGlkOiA0LCB0aXRsZTogJ+mmmea4rycsIGltZzogJ2ZsYWctaGsuanBnJyB9LFxuICAgICAgICB7IGlkOiA1LCB0aXRsZTogJ+aWsOWKoOWdoScsIGltZzogJ2ZsYWctc2cuanBnJyB9LFxuICAgICAgICB7IGlkOiA2LCB0aXRsZTogJ+mYv+aLieS8r+iBr+WQiOWkp+WFrOWciycsIGltZzogJ2ZsYWctYWUuanBnJyB9LFxuICAgICAgICB7IGlkOiA3LCB0aXRsZTogJ+mmrOS+huilv+S6nicsIGltZzogJ2ZsYWctbXkuanBnJyB9LFxuICAgICAgICB7IGlkOiA4LCB0aXRsZTogJ+atkOa0suiBr+ebnycsIGltZzogJ2ZsYWctZXUuanBnJyB9LFxuICAgICAgICB7IGlkOiA5LCB0aXRsZTogJ+e0kOilv+iYrScsIGltZzogJ2ZsYWctbnouanBnJyB9LFxuICAgICAgICB7IGlkOiAxMCwgdGl0bGU6ICfliqDmi7/lpKcnLCBpbWc6ICdmbGFnLWNhLmpwZycgfSxcbiAgICAgICAgeyBpZDogMTEsIHRpdGxlOiAn5Y2w5bC8JywgaW1nOiAnZmxhZy1pZC5qcGcnIH0sXG4gICAgICAgIHsgaWQ6IDEyLCB0aXRsZTogJ+azsOWciycsIGltZzogJ2ZsYWctdGguanBnJyB9LFxuICAgICAgICB7IGlkOiAxMywgdGl0bGU6ICfnkZ7lo6snLCBpbWc6ICdmbGFnLWNoLmpwZycgfSxcbiAgICAgICAgeyBpZDogMTQsIHRpdGxlOiAn576O5ZyLJywgaW1nOiAnZmxhZy11cy5qcGcnIH0sXG4gICAgICAgIHsgaWQ6IDE1LCB0aXRsZTogJ+a+s+Wkp+WIqeS6nicsIGltZzogJ2ZsYWctYXUuanBnJyB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB5LTEwIHB4LVsxNnB4XSBsZzpweC1bMF1cIj5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWQ6bWF4LXctWzYwMHB4XSBtYXgtdy1bNDAwcHhdIG14LWF1dG8gZ3JpZCBtZDpncmlkLWNvbHMtNCBncmlkLWNvbHMtMyBtZDpnYXAteC0xMCBnYXAteC00IGdhcC15LTUgbWItbWQtNSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtBTkNIT1JfQ09ORklHLm1hcCgoY29uZmlnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZmlnLmhpZGVJbiAmJiBjb25maWcuaGlkZUluLmluY2x1ZGVzKGxhbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIG1kOnctWzEwMCVdIHctWzEwMHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgI2FuY2hvci0ke2NvbmZpZy5pZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1kOmgtWzgwcHhdIGgtWzY4cHhdIHctMTAwIG1iLTEgYmctaW5mbyByb3VuZGVkLVs4cHhdIG91dGxpbmUgb3V0bGluZS1bMXB4XSBvdXRsaW5lLVsjQzRDNEM0XSBncm91cC1ob3ZlcjpvdXRsaW5lLVsjODJCRTY2XSBncm91cC1ob3ZlcjpvdXRsaW5lLVsycHhdIGdyb3VwLWhvdmVyOmRyb3Atc2hhZG93LVswXzBfNHB4X3JnYmEoMCwwLDAsMC4xKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2NvdW50cnkvJHtjb25maWcuaW1nfSlgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTggdy0xMDAgcHgtMSBibG9jayBmei0yMHB4IHRleHQtY2VudGVyIGdyb3VwLWhvdmVyOnRleHQtWyMyRDczMTZdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57Y29uZmlnLnRpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYXgtdy1bODgwcHhdIG14LWF1dG8gZnotMThweCBmei1tZC0yMHB4IHB4LTNcIj5cbiAgICAgICAgICAgICAgICAgICAg4oC7eycgJ31cbiAgICAgICAgICAgICAgICAgICAgPEkxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICDlsIfmpI3nianvvIjmsLTmnpzjgIHolKzoj5znrYnvvInluLbliLDlnIvlpJbnmoTmlrnlvI/vvIzliIbngrrml4XlrqLmlJzluLbjgIHosqjnianjgIHpg7Xlr4TnrYkz56iu77yM5pys57ay56uZ5LuL57S555qE5piv5peF5a6i5pSc5bi255qE6KaP5a6a44CCXG4gICAgICAgICAgICAgICAgICAgIDwvSTE4Tj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS0xMCBweC0yIHB4LW1kLTBcIj5cbiAgICAgICAgICAgICAgICA8QmxvY2tUaXRsZSB0aXRsZT1cIuaXheWuouaUnOW4tuimj+WumlwiIGNsYXNzTmFtZT1cIm14LWF1dG9cIiAvPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXgtdy1bOTAwcHhdIG14LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAge3J1bGUubWFwKChydWxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgcHgtbWQtNSBweS1tZC0zIHAtMiBtYi14bC00IG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmNob3JGaXggaWQ9e2BhbmNob3ItJHtydWxlLmlkfWB9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLVswXSBib3JkZXItYi1bMnB4XSBib3JkZXItZGFzaGVkIHBiLTIgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTI0cHggZnotbWQtMjhweCBmb250LXdlaWdodC1ib2xkIGlubGluZS1mbGV4IGdhcC0yIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1bNDBweF0gdy1bNjBweF0gYmctaW5mbyByb3VuZGVkLVs0cHhdIG91dGxpbmUgb3V0bGluZS1bMXB4XSBvdXRsaW5lLVsjQzRDNEM0XSBncm91cC1ob3ZlcjpvdXRsaW5lLVsjODJCRTY2XSBncm91cC1ob3ZlcjpvdXRsaW5lLVsycHhdIGdyb3VwLWhvdmVyOmRyb3Atc2hhZG93LVswXzBfNHB4X3JnYmEoMCwwLDAsMC4xKV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2NvdW50cnkvJHtydWxlLmltZ30pYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57cnVsZS50aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTE2cHggZnotbWQtMjBweCB0ZXh0LVsjMkQ3MzE2XSBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3J1bGUuY29udGVudH08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+6Kmz5oOF5Y+D6ICD77yaPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWyNCRDRGMDBdIGhvdmVyOnRleHQtWyNGQkNFNENdIGlubGluZS1mbGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2Ake3RyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJ1bGUuZGV0YWlsLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFuZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAoJHt0cmFuc2xhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn5Y+m6ZaL6KaW56qXJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0pYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17cnVsZS5kZXRhaWwudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub3JlZmVycmVyIG5vb3BlbmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZSB1bmRlcmxpbmUtb2Zmc2V0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPntydWxlLmRldGFpbC50aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGljb24gaWNvbi1saW5rLW91dCBtbC00cHhgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGdhcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtydWxlLmZydWl0Py5tYXAoKGZydWl0LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtqfSBjbGFzc05hbWU9XCJncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmcnVpdC51cmwgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCByb3VuZGVkLXBpbGwgcHgtMTJweCBweS00cHggYm9yZGVyIGdyb3VwLWhvdmVyOmJvcmRlci1bI0ZCQ0U0Q11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcnVpdC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17ZnJ1aXQudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57ZnJ1aXQudGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BpY29uIGljb24tYXJyb3ctcmlnaHQgbWwtNHB4IHRleHQtWyNDNEM0QzRdIGdyb3VwLWhvdmVyOnRleHQtWyNGQkNFNENdYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggcm91bmRlZC1waWxsIHB4LTEycHggcHktNHB4IGJvcmRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e2ZydWl0LnRpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1heC13LVs4ODBweF0gbXgtYXV0byBmei0xOHB4IGZ6LW1kLTIwcHggcHQtNCBweC1bMTZweF0gbWQ6cHgtWzQwcHhdIGxnOnB4LVswXSBtYi0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8STE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOiLpeWwjeaWvOWHuuWig+S8tOaJi+emruacieS7u+S9leWVj+mhjO+8jOiri+a0vei+sualremDqOWLleakjeeJqemYsueWq+aqoueWq+e9suOAglxuICAgICAgICAgICAgICAgICAgICA8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8STE4Tj7pm7vlrZDpg7Xku7Y8L0kxOE4+77yaZHBxQGFwaGlhLmdvdi50d1xuICAgICAgICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgICAgICAgPEkxOE4+6Zu76KmxPC9JMThOPu+8mjAyLTIzNDMxNDA2XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUnVsZSlcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBCYW5uZXJUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jhbm5lclRpdGxlJ1xuaW1wb3J0IEludHJvZHVjdGlvbiBmcm9tICcuL0ludHJvZHVjdGlvbidcbmltcG9ydCBSdWxlIGZyb20gJy4vUnVsZSdcbmltcG9ydCB7IHVzZUZydWl0RGF0YVJlZHV4VmVyIH0gZnJvbSAnYXBpJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgPSAnMycgfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VGcnVpdERhdGFSZWR1eFZlcih7IGxhbmcsIGlkIH0pIHx8IHt9XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFkYXRhKSByZXR1cm5cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICAgICAgPEJhbm5lclRpdGxlXG4gICAgICAgICAgICAgICAgdGl0bGU9eyfnlJzonJzmu4vlkbPlgrPpgZ7kuJbnlYwnfVxuICAgICAgICAgICAgICAgIHN1Yj17YOWHuuWig+S8tOaJi+emrmB9XG4gICAgICAgICAgICAgICAgY29udGVudD17YOS6huino+ebrueahOWcsOWci+WutueahOimj+Wumu+8jOW4tuWbnuWci+eVtuS8tOaJi+emrmB9XG4gICAgICAgICAgICAgICAgaW1nPXtgZm9yZWlnbi1naWZ0LmpwZ2B9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEludHJvZHVjdGlvbiAvPlxuICAgICAgICAgICAgPFJ1bGUgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFBhZ2UpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZWRpYSIsIkFuY2hvckZpeCIsIl9yZWYiLCJfczIiLCJfcyIsIl9yZWYkb2Zmc2V0Iiwib2Zmc2V0IiwiX3JlZiRtZE9mZnNldCIsIm1kT2Zmc2V0IiwiX3JlZiR4bE9mZnNldCIsInhsT2Zmc2V0IiwiaWQiLCJjbGFzc05hbWUiLCJ0ZXh0IiwiaXNUYWJsZXRMYXlvdXQiLCJpc0Rlc2t0b3BMYXlvdXQiLCJ0b3BPZmZzZXQiLCJjcmVhdGVFbGVtZW50IiwiY29uY2F0IiwidGl0bGUiLCJ0YWJJbmRleCIsInN0eWxlIiwibWFyZ2luVG9wIiwiX2MzIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIiwiQnJlYWRjcnVtYnMiLCJJMThOIiwiQmFubmVyVGl0bGUiLCJzdWIiLCJjb250ZW50IiwiaW1nIiwiaXNMYXlvdXRNRCIsImJhY2tncm91bmRJbWFnZSIsInByb2Nlc3MiLCJlbnYiLCJCQVNFX1BBVEgiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRSZXBlYXQiLCJzcGxpdCIsIm1hcCIsInN0ciIsImkiLCJrZXkiLCJkYXRhIiwiQmxvY2tUaXRsZSIsInRpcCIsIkludHJvZHVjdGlvbiIsInJ1bGUiLCJ1c2VMb2NhbGUiLCJ0cmFuc2xhdGUiLCJMaW5rIiwiZGV0YWlsIiwidXJsIiwiZnJ1aXQiLCJSdWxlIiwibGFuZyIsIkFOQ0hPUl9DT05GSUciLCJGcmFnbWVudCIsImNvbmZpZyIsImhpZGVJbiIsImluY2x1ZGVzIiwib25DbGljayIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJfcnVsZSRmcnVpdCIsImhyZWYiLCJ0YXJnZXQiLCJyZWwiLCJqIiwidXNlRWZmZWN0IiwidXNlRnJ1aXREYXRhUmVkdXhWZXIiLCJ1c2VQYXJhbXMiLCJQYWdlIiwiX3VzZVBhcmFtcyIsIl91c2VQYXJhbXMkaWQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==