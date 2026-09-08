"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_season-fruits_index_js"],{

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

/***/ "./src/views/season-fruits/SeasonCard.js"
/*!***********************************************!*\
  !*** ./src/views/season-fruits/SeasonCard.js ***!
  \***********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Card = function Card(_ref) {
  var data = _ref.data;
  var id = data.id,
    cover = data.cover,
    title = data.title,
    months = data.months,
    subtitle = data.subtitle,
    summary = data.summary;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "d-block w-100 border-[#f0f0f0] border-[1px] text-[#3c3c3c] relative  border-solid  rounded-[30px] bg-white  overflow-hidden hover:border-[#82be66] hover:ring-[#82be66] ring-[2px] ring-transparent group transition-all duration-300",
    href: "/season-fruit/".concat(id)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "aspect-[1.49781659]"
    //src="https://unsplash.it/200/200"
    ,

    src: cover.replace('480x360', '640x480'),
    alt: title
    //ratio="16by9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pb-[32px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[16px] px-[-32px] text-center fz-28px font-bold group-hover:text-[#fff] group-hover:bg-[#82be66] transition-all duration-300"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-start items-center py-[8px] text-[#bd4f00]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "pr-[8px] icon icon-sun"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[#bd4f00] fz-18px font-bold"
  }, months.join('、'), "\u6708")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pb-[8px] text-left text-[#767676] fz-16px font-bold"
  }, subtitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "pb-[32px] xl:pb-[8px] text-left text-[#3c3c3c] fz-14px font-normal w-100"
  }, summary))));
};
_c3 = Card;
_c = Card;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Card));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Card");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Card");

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

/***/ "./src/views/season-fruits/SeasonList.js"
/*!***********************************************!*\
  !*** ./src/views/season-fruits/SeasonList.js ***!
  \***********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SeasonCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SeasonCard */ "./src/views/season-fruits/SeasonCard.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var CONFIG_LIST = [{
  title: '紅龍果',
  month: '盛產期：6-11月',
  taste: '果肉味甜多汁，果香四溢',
  content: '紅龍果是仙人掌科的植物，外表宛如一團炙熱的紅色火球而得名。火龍果屬於涼性水果，在自然狀態下，果實於夏秋成熟，果肉味甜多汁，果香四溢，也因為佈滿了黑色的小籽，所以有人稱為芝麻果。'
}, {
  title: '百香果',
  month: '盛產期：7-9月',
  taste: '紫紅色外皮、果香酸甜好滋味',
  content: '紫紅色外皮、飄來天然的果香、嘗來酸甜滋味，你今年吃百香果了嗎？切開百香果，用小湯匙挖出黃澄澄的汁液，不斷挑動味蕾、口水直流。百香果的原產地在南美洲的巴西，英文名稱是passion fruit，熱情的水果。'
}, {
  title: '西瓜',
  month: '盛產期：4-8月',
  taste: '香甜多汁，被稱為「夏季瓜果之王」',
  content: '西瓜香甜多汁，消暑解渴，被稱為「夏季瓜果之王」。水分含量佔西瓜整體約94%，不含脂肪和膽固醇，卻具備許多人體所需的營養素。傳統中醫認為西瓜味甘、性寒，助於解暑、止渴、開胃、利尿等。'
}, {
  title: '李子',
  month: '盛產期：5-8月',
  taste: '豐富的氨基酸、維生素B12等營養成份',
  content: '李子又名「嘉慶子」，對氣候的適應性強、對土壤要求也不嚴格，生長迅速產量高，經濟價值高。用來鮮食外也能做成罐頭、糖漬等加工食品。許多人會把李子加冰糖燉煮，用來潤喉開嗓，而東歐則會用李子釀成李子白蘭地。'
}, {
  title: '芒果',
  month: '盛產期：5-9月',
  taste: '富含大量的維生素C，抗氧化及美膚',
  content: '「芒果」，中文稱呼來自於英文"Mango"的翻譯，漆樹科，原產於印度。早在明朝，李時珍便將芒果稱為「果中極品」，有止暈、行氣、消食等功效。另外，芒果富含大量的維生素C，也有助於抗氧化及美膚。'
}, {
  title: '桃子',
  month: '盛產期：3-4月',
  taste: '果肉酸甜適中，柔軟多汁',
  content: '枇杷是春季成熟的水果，果肉酸甜適中且柔軟多汁，除了鮮食之外還可製成加工品如果膏、果露，釀酒等，以及非常知名的枇杷膏。根據《本草綱目》所記載，枇杷能夠袪痰止咳、生津潤肺，清熱健胃。',
  act: true /* 預設的狀態為true */
}];
var SeasonList = function SeasonList(_ref) {
  var data = _ref.data,
    className = _ref.className;
  /* 為react添加className的設定 */
  {
    /*注意 html tag 的語意，這邊應該是一個列表*/
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid gap-[16px] xl:gap-[24px] pb-[80px] xl:pb-[160px] px-[16px] grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ".concat(className)
  }, data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "flex",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SeasonCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item
    }));
  }));
};
_c3 = SeasonList;
_c = SeasonList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SeasonList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SeasonList");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SeasonList");

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

/***/ "./src/views/season-fruits/SeasonNav.js"
/*!**********************************************!*\
  !*** ./src/views/season-fruits/SeasonNav.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();



var CONFIG = [{
  title: '春季',
  month: '3-5月',
  actClassName: 'text-[#d12727] border-[#ff8a8a] border-[2px] ring-[1px] ring-[#ff8a8a]',
  hoverClassName: 'hover:text-[#d12727] hover:border-[#ff8a8a] hover:border-[2px] hover:ring-[1px] hover:ring-[ff8a8a]',
  url: 'spring'
}, {
  title: '夏季',
  month: '6-8月',
  actClassName: 'text-[#2d7316] border-[#82be66] border-[2px] ring-[1px] ring-[#82be66]',
  hoverClassName: 'hover:text-[#2d7316] hover:border-[#82be66] hover:border-[2px] hover:ring-[1px] hover:ring-[82be66]',
  url: 'summer'
}, {
  title: '秋季',
  month: '9-11月',
  actClassName: 'text-[#bd4f00] border-[#fbce4c] border-[2px] ring-[1px] ring-[#fbce4c]',
  hoverClassName: 'hover:text-[#bd4f00] hover:border-[#fbce4c] hover:border-[2px] hover:ring-[1px] hover:ring-[#fbce4c]',
  url: 'autumn'
}, {
  title: '冬季',
  month: '12-2月',
  actClassName: 'text-[#0f6fa2] border-[#6ebde6] border-[2px] ring-[1px] ring-[#6ebde6]',
  hoverClassName: 'hover:text-[#0f6fa2] hover:border-[#6ebde6] hover:border-[2px] hover:ring-[1px] hover:ring-[#6ebde6]',
  url: 'winter'
}, {
  title: '全年',
  month: '1-12月',
  actClassName: 'text-[#bd4f00] border-[#f39306] border-[2px] ring-[1px] ring-[#f39306]',
  hoverClassName: 'hover:text-[#bd4f00] hover:border-[#f39306] hover:border-[2px] hover:ring-[1px] hover:ring-[#f39306]',
  url: 'all'
}, {
  title: '全季',
  month: '水果',
  actClassName: 'text-[#bc146f] border-[#ffa5cb] border-[2px] ring-[1px] ring-[#ffa5cb]',
  hoverClassName: 'hover:text-[#bc146f] hover:border-[#ffa5cb] hover:border-[2px] hover:ring-[1px] hover:ring-[#ffa5cb]',
  url: 'fruits'
}];
var SeasonNav = function SeasonNav(_ref) {
  _s2();
  _s();
  var className = _ref.className;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    season = _useParams.season;
  var activeSeason = season || 'all'; //確保預設情況下 "all" 被選中
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[24px] ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "flex items-center md:justify-center gap-[16px] mx-n3 pl-[4px] overflow-x-auto md:overflow-visible"
  }, CONFIG.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
      rel: "noopener noreferrer",
      href: "/season-fruits/".concat(item.url),
      className: "".concat(item.url === activeSeason //連結等於預設的all
      ? item.actClassName : "border-[2px] border-[#c4c4c4] trs-all ".concat(item.hoverClassName), " flex flex-col flex-shrink-0 justify-center items-center py-[12px] px-[16px] w-[104px] h-[88px] space-y-2 rounded-[16px] md:rounded-[24px] border-solid trs-all"),
      onClick: function onClick() {
        return (
          //瀏覽器的 history API，允許改變瀏覽歷史，而不會真的重新整理頁面
          window.history.pushState(null,
          //State
          '',
          //title忽略可用空字串
          "/season-fruits/".concat(item.url) //想要更新的url
          )
        );
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-22px font-bold"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-16px text-[#767676] font-normal"
    }, item.month)));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null)));
};
_s2(SeasonNav, "/p3WXf56Wgrgk8aKzt9QBHfhNxU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams];
});
_c3 = SeasonNav;
_s(SeasonNav, "brnGDIUOhAFaru97ohNfSCMp/xU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams];
});
_c = SeasonNav;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SeasonNav));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SeasonNav");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SeasonNav");

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

/***/ "./src/views/season-fruits/index.js"
/*!******************************************!*\
  !*** ./src/views/season-fruits/index.js ***!
  \******************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var components_bannerTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/bannerTitle */ "./src/components/bannerTitle.js");
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Spinner */ "./src/components/Spinner.js");
/* harmony import */ var _SeasonNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SeasonNav */ "./src/views/season-fruits/SeasonNav.js");
/* harmony import */ var _SeasonList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SeasonList */ "./src/views/season-fruits/SeasonList.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert */ "./node_modules/sweetalert/dist/sweetalert.min.js");
/* harmony import */ var sweetalert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var constants_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! constants/utils */ "./src/constants/utils.js");
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
  return Object.keys(constants_utils__WEBPACK_IMPORTED_MODULE_7__.MONTHS_MAP) //取得所有鍵（字串型態的數字） 輸出: ["1", "2", "4", "8", "16", "32", "64", "128", "256", "512", "1024", "2048"]
  .map(Number) //將字串轉換為數字 輸出: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048]
  .filter(function (k) {
    return (value & k) === k;
  }) //篩選出符合條件的鍵 假設 value = 20 ， 20 & 4 = 4，20 & 16 = 16 ， 輸出: [4, 16]
  .map(function (k) {
    return constants_utils__WEBPACK_IMPORTED_MODULE_7__.MONTHS_MAP[k];
  }); //根據篩選後的鍵，取得對應的月份值 [4, 16] 對應 3 和 5 月，輸出: [3, 5]
};
var Page = function Page() {
  _s2();
  _s();
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams)(),
    season = _useParams.season;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    filteredData = _useState4[0],
    setFilteredData = _useState4[1];
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
          var _item$images, _item$images2;
          item.cover = ((_item$images = item.images) === null || _item$images === void 0 || (_item$images = _item$images.find(function (img) {
            return img.isCover;
          })) === null || _item$images === void 0 ? void 0 : _item$images.url) || ((_item$images2 = item.images) === null || _item$images2 === void 0 || (_item$images2 = _item$images2[0]) === null || _item$images2 === void 0 ? void 0 : _item$images2.url) || "".concat("/fruits-travel", "/images/not-found/miss.jpg");
          item.months = makeMonthNames(item.months);
        });
        setData(data);
        filterData(data, season); // 初始載入時過濾數據
      } else {
        sweetalert__WEBPACK_IMPORTED_MODULE_6___default()({
          title: data.toString(),
          icon: 'info'
        });
      }
    })["catch"](console.error);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (data) {
      filterData(data, season); // 當 `season` 改變時，過濾數據
    }
  }, [season, data]);
  var filterData = function filterData(data, season) {
    var filterMonths = constants_utils__WEBPACK_IMPORTED_MODULE_7__.SEASON_MAP[season] || 'all';
    if (filterMonths === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(function (item) {
        return item.months.some(function (month) {
          return filterMonths.includes(month);
        });
      }));
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_bannerTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: '品嚐最鮮美的原味',
    sub: "\u56DB\u5B63\u6C34\u679C",
    content: "\u81FA\u7063\u6C34\u679C\u4F9D\u5B63\u7BC0\u5206\u6210\u6625\u3001\u590F\u3001\u79CB\u3001\u51AC\u8207\u5168\u5E74\u7522\u671F\u7684\u6C34\u679C \u6B61\u8FCE\u5927\u5BB6\u4F86\u8A8D\u8B58\u81FA\u7063\u6C34\u679C\uFF01",
    img: "season-fruit.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SeasonNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "py-5 py-xl-10 max-w-[768px] mx-auto"
  }), !filteredData ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-center p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
    size: 18,
    color: 'black'
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SeasonList__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "max-w-[1280px] mx-auto",
    data: filteredData
  })));
};
_s2(Page, "P9ZXm1/QNtWz4bNMIw4Md7DCQ0Y=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useParams];
});
_c3 = Page;
_s(Page, "qGcc+c3VX486KqEFgZkgSqnvQ2g=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3NlYXNvbi1mcnVpdHNfaW5kZXhfanMtZjc4MzJiYjdkNTQxZjg1NDlhN2MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQWtDO0FBQ0E7QUFDRDtBQUNSO0FBQ3lCO0FBRWxELElBQU1LLFdBQVcsR0FBRyxTQUFkQSxXQUFXQSxDQUFBQyxJQUFBLEVBQTRCO0VBQUFDLEdBQUE7RUFBQUMsRUFBQTtFQUFBLElBQXRCQyxJQUFJLEdBQUFILElBQUEsQ0FBSkcsSUFBSTtJQUFFQyxTQUFTLEdBQUFKLElBQUEsQ0FBVEksU0FBUztFQUNsQyxJQUFNQyxJQUFJLEdBQUdULGdEQUFTLENBQUMsQ0FBQztFQUN4QixJQUFBVSxnQkFBQSxHQUFpQlIsaUVBQWUsQ0FBQyxDQUFDO0lBQUFTLGlCQUFBLEdBQUFDLGNBQUEsQ0FBQUYsZ0JBQUE7SUFBM0JHLE1BQU0sR0FBQUYsaUJBQUE7RUFDYixJQUFNRyxPQUFPLEdBQUdELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUc7RUFDM0MsSUFBSUQsT0FBTyxFQUFFLE9BQU8sSUFBSTtFQUV4QixvQkFDSWIsMERBQUE7SUFBS08sU0FBUyxpQ0FBQVMsTUFBQSxDQUFpQ1QsU0FBUztFQUFHLGdCQUN2RFAsMERBQUE7SUFBS08sU0FBUyxFQUFDO0VBQTBELGdCQUNyRVAsMERBQUE7SUFDSWlCLFNBQVMsRUFBQyxHQUFHO0lBQ2JDLElBQUksRUFBQyxHQUFHO0lBQ1JDLEtBQUssRUFBQyxtQ0FBVTtJQUNoQlosU0FBUyxFQUFDLDBDQUEwQztJQUNwRGEsT0FBTyxFQUFFLFNBQVRBLE9BQU9BLENBQUdDLENBQUMsRUFBSztNQUNaQSxDQUFDLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0lBQ3RCO0VBQUUsR0FDTCxLQUVFLENBQUMsZUFDSnRCLDBEQUFBO0lBQUlPLFNBQVMs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b0JBQ0kvRCwwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBTyxnQkFDbEJQLDBEQUFBLENBQUNtQyw4REFBVztJQUNSaEIsS0FBSyxFQUFFLFVBQVc7SUFDbEJpQixHQUFHLDRCQUFTO0lBQ1pDLE9BQU8sNk5BQTBDO0lBQ2pEQyxHQUFHO0VBQXFCLENBQzNCLENBQUMsZUFDRnRDLDBEQUFBLCtCQUNJQSwwREFBQSxDQUFDeUUsa0RBQVM7SUFBQ2xFLFNBQVMsRUFBQztFQUFxQyxDQUFFLENBQUMsRUFDNUQsQ0FBQzRGLFlBQVksZ0JBQ1ZuRywwREFBQTtJQUFLTyxTQUFTLEVBQUM7RUFBb0MsZ0JBQy9DUCwwREFBQSxDQUFDa0YsMERBQU87SUFBQ3VDLElBQUksRUFBRSxFQUFHO0lBQUNDLEtBQUssRUFBRTtFQUFRLENBQUUsQ0FDbkMsQ0FBQyxnQkFFTjFILDBEQUFBLENBQUNrRSxtREFBVTtJQUNQM0QsU0FBUyxFQUFDLHdCQUF3QjtJQUNsQ0QsSUFBSSxFQUFFNkY7RUFBYSxDQUN0QixDQUVBLENBQ1IsQ0FBQztBQUVkLENBQUM7QUFBQS9GLEdBQUEsQ0E1RUt5RixJQUFJO0VBQUEsUUFDYXhCLHVEQUFTO0FBQUE7QUFBQXhDLEdBQUEsR0FEMUJnRSxJQUFJO0FBNEVUeEYsRUFBQSxDQTVFS3dGLElBQUk7RUFBQSxRQUNheEIsdURBQVM7QUFBQTtBQUFBdkMsRUFBQSxHQUQxQitELElBQUk7QUE4RVYsaUVBQUE5RCxHQUFBLGdCQUFlL0IsaURBQVUsQ0FBQzZGLElBQUksQ0FBQztBQUFBLElBQUEvRCxFQUFBLEVBQUFDLEdBQUE7QUFBQUUsc0NBQUEsQ0FBQUgsRUFBQTtBQUFBRyxzQ0FBQSxDQUFBRixHQUFBO0FBQUEsSUFBQUYsR0FBQTtBQUFBSSxzQ0FBQSxDQUFBSixHQUFBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvY29tcG9uZW50cy9CcmVhZGNydW1icy5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvY29tcG9uZW50cy9iYW5uZXJUaXRsZS5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3Mvc2Vhc29uLWZydWl0cy9TZWFzb25DYXJkLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zZWFzb24tZnJ1aXRzL1NlYXNvbkxpc3QuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3NlYXNvbi1mcnVpdHMvU2Vhc29uTmF2LmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zZWFzb24tZnJ1aXRzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJMThOIGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCBMaW5rIGZyb20gJ2NvbXBvbmVudHMvTGluaydcbmltcG9ydCB7IHVzZUxvY2FsZSB9IGZyb20gJ2hvb2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgQnJlYWRjcnVtYnMgPSAoeyBkYXRhLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSB1c2VMb2NhbGUoKVxuICAgIGNvbnN0IFtzZWFyY2hdID0gdXNlU2VhcmNoUGFyYW1zKClcbiAgICBjb25zdCBpc0VtYmVkID0gc2VhcmNoLmdldCgnZW1iZWQnKSA9PT0gJzEnXG4gICAgaWYgKGlzRW1iZWQpIHJldHVybiBudWxsXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGJyZWFkY3J1bWJzIHB5LTIgZnVsbC13aWR0aCAke2NsYXNzTmFtZX1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYXctMTQwMHB4IGgtNCBteC1hdXRvIGZ6LTE0cHhcIj5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBhY2Nlc3NLZXk9XCJDXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIuS4remWk+WumuS9jem7nihDKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtbm9uZSBkLXhsLWJsb2NrIHctMiBtbC1uMiB0ZXh0LWluaGVyaXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA6OjpcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImQtZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AvJHtsYW5nfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC1pbmhlcml0IGhvdmVyLXByaW1hcnlgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPummlumggTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgeyEhZGF0YT8ubGVuZ3RoICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLm1hcCgoeyB0aXRsZSwgdXJsIH0sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZC1mbGV4IGNydW1iXCIga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyEhdXJsID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LWluaGVyaXQgaG92ZXItcHJpbWFyeWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17dXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aXRsZX08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhCcmVhZGNydW1icylcbiIsImltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBCYW5uZXJUaXRsZSA9ICh7IHRpdGxlLCBzdWIsIGNvbnRlbnQsIGltZyB9KSA9PiB7XG4gICAgY29uc3QgaXNMYXlvdXRNRCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGgtWzM3NXB4XSBsZzpoLVszM3Z3XSBtYXgtaC1bNjQwcHhdYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2Jhbm5lci8ke2ltZ30nKWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmFkaWVudC10by10IGZyb20tWyMwMDAwMDA2MF0gdG8tWyMwMDAwMDAwMF0gdy0xMDAgaC0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctWzBfMF84cHhfcmdiYSgwLDAsMCwwLjgpXSBwdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTIwcHggZnotbWQtMjRweCBtYi00cHhcIj57c3VifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0zMnB4IGZ6LW1kLTQwcHggZnoteGwtNDhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0xNHB4IGZ6LW1kLTE2cHggZnoteGwtMThweCBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0xheW91dE1EID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNwbGl0KCcgJykubWFwKChzdHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57c3RyfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57Y29udGVudH08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W3sgdGl0bGU6IHN1YiB9XX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC02IGJvdHRvbS0wIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lclRpdGxlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IFRodW1iRnJhbWUgZnJvbSAnY29tcG9uZW50cy9UaHVtYkZyYW1lJ1xuXG5jb25zdCBDYXJkID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgeyBpZCwgY292ZXIsIHRpdGxlLCBtb250aHMsIHN1YnRpdGxlLCBzdW1tYXJ5IH0gPSBkYXRhXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImQtYmxvY2sgdy0xMDAgYm9yZGVyLVsjZjBmMGYwXSBib3JkZXItWzFweF0gdGV4dC1bIzNjM2MzY10gcmVsYXRpdmUgIGJvcmRlci1zb2xpZCAgcm91bmRlZC1bMzBweF0gYmctd2hpdGUgIG92ZXJmbG93LWhpZGRlbiBob3Zlcjpib3JkZXItWyM4MmJlNjZdIGhvdmVyOnJpbmctWyM4MmJlNjZdIHJpbmctWzJweF0gcmluZy10cmFuc3BhcmVudCBncm91cCB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDBcIlxuICAgICAgICAgICAgaHJlZj17YC9zZWFzb24tZnJ1aXQvJHtpZH1gfVxuICAgICAgICA+XG4gICAgICAgICAgICA8VGh1bWJGcmFtZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC1bMS40OTc4MTY1OV1cIlxuICAgICAgICAgICAgICAgIC8vc3JjPVwiaHR0cHM6Ly91bnNwbGFzaC5pdC8yMDAvMjAwXCJcbiAgICAgICAgICAgICAgICBzcmM9e2NvdmVyLnJlcGxhY2UoJzQ4MHgzNjAnLCAnNjQweDQ4MCcpfVxuICAgICAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICAgICAgLy9yYXRpbz1cIjE2Ynk5XCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLVszMnB4XVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktWzE2cHhdIHB4LVstMzJweF0gdGV4dC1jZW50ZXIgZnotMjhweCBmb250LWJvbGQgZ3JvdXAtaG92ZXI6dGV4dC1bI2ZmZl0gZ3JvdXAtaG92ZXI6YmctWyM4MmJlNjZdIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1bMjRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktc3RhcnQgaXRlbXMtY2VudGVyIHB5LVs4cHhdIHRleHQtWyNiZDRmMDBdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJwci1bOHB4XSBpY29uIGljb24tc3VuXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsjYmQ0ZjAwXSBmei0xOHB4IGZvbnQtYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb250aHMuam9pbign44CBJyl95pyIXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItWzhweF0gdGV4dC1sZWZ0IHRleHQtWyM3Njc2NzZdIGZ6LTE2cHggZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3VidGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwYi1bMzJweF0geGw6cGItWzhweF0gdGV4dC1sZWZ0IHRleHQtWyMzYzNjM2NdIGZ6LTE0cHggZm9udC1ub3JtYWwgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIHsvKuioreioiOeov+WcqOS6kuWLlemCj+i8r+S4iuS4jeS4gOWumuaYr+WwjeeahCovfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FyZClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBTZWFzb25DYXJkIGZyb20gJy4vU2Vhc29uQ2FyZCdcblxuY29uc3QgQ09ORklHX0xJU1QgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ+e0hem+jeaenCcsXG4gICAgICAgIG1vbnRoOiAn55ub55Si5pyf77yaNi0xMeaciCcsXG4gICAgICAgIHRhc3RlOiAn5p6c6IKJ5ZGz55Sc5aSa5rGB77yM5p6c6aaZ5Zub5rqiJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfntIXpvo3mnpzmmK/ku5nkurrmjoznp5HnmoTmpI3nianvvIzlpJbooajlrpvlpoLkuIDlnJjngpnnhrHnmoTntIXoibLngavnkIPogIzlvpflkI3jgILngavpvo3mnpzlsazmlrzmtrzmgKfmsLTmnpzvvIzlnKjoh6rnhLbni4DmhYvkuIvvvIzmnpzlr6bmlrzlpI/np4vmiJDnhp/vvIzmnpzogonlkbPnlJzlpJrmsYHvvIzmnpzpppnlm5vmuqLvvIzkuZ/lm6DngrrkvYjmu7/kuobpu5HoibLnmoTlsI/nsb3vvIzmiYDku6XmnInkurrnqLHngrroip3purvmnpzjgIInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn55m+6aaZ5p6cJyxcbiAgICAgICAgbW9udGg6ICfnm5vnlKLmnJ/vvJo3LTnmnIgnLFxuICAgICAgICB0YXN0ZTogJ+e0q+e0heiJsuWkluearuOAgeaenOmmmemFuOeUnOWlvea7i+WRsycsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAn57Sr57SF6Imy5aSW55qu44CB6aOE5L6G5aSp54S255qE5p6c6aaZ44CB5ZiX5L6G6YW455Sc5ruL5ZGz77yM5L2g5LuK5bm05ZCD55m+6aaZ5p6c5LqG5ZeO77yf5YiH6ZaL55m+6aaZ5p6c77yM55So5bCP5rmv5YyZ5oyW5Ye66buD5r6E5r6E55qE5rGB5ray77yM5LiN5pa35oyR5YuV5ZGz6JW+44CB5Y+j5rC055u05rWB44CC55m+6aaZ5p6c55qE5Y6f55Si5Zyw5Zyo5Y2X576O5rSy55qE5be06KW/77yM6Iux5paH5ZCN56ix5pivcGFzc2lvbiBmcnVpdO+8jOeGseaDheeahOawtOaenOOAgidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfopb/nk5wnLFxuICAgICAgICBtb250aDogJ+ebm+eUouacn++8mjQtOOaciCcsXG4gICAgICAgIHRhc3RlOiAn6aaZ55Sc5aSa5rGB77yM6KKr56ix54K644CM5aSP5a2j55Oc5p6c5LmL546L44CNJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfopb/nk5zpppnnlJzlpJrmsYHvvIzmtojmmpHop6PmuLTvvIzooqvnqLHngrrjgIzlpI/lraPnk5zmnpzkuYvnjovjgI3jgILmsLTliIblkKvph4/kvZTopb/nk5zmlbTpq5TntIQ5NCXvvIzkuI3lkKvohILogqrlkozohr3lm7rphofvvIzljbvlhbflgpnoqLHlpJrkurrpq5TmiYDpnIDnmoTnh5/ppIrntKDjgILlgrPntbHkuK3phqvoqo3ngrropb/nk5zlkbPnlJjjgIHmgKflr5LvvIzliqnmlrzop6PmmpHjgIHmraLmuLTjgIHplovog4PjgIHliKnlsL/nrYnjgIInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5p2O5a2QJyxcbiAgICAgICAgbW9udGg6ICfnm5vnlKLmnJ/vvJo1LTjmnIgnLFxuICAgICAgICB0YXN0ZTogJ+ixkOWvjOeahOawqOWfuumFuOOAgee2reeUn+e0oEIxMuetieeHn+mkiuaIkOS7vScsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAn5p2O5a2Q5Y+I5ZCN44CM5ZiJ5oW25a2Q44CN77yM5bCN5rCj5YCZ55qE6YGp5oeJ5oCn5by344CB5bCN5Zyf5aOk6KaB5rGC5Lmf5LiN5Zq05qC877yM55Sf6ZW36L+F6YCf55Si6YeP6auY77yM57aT5r+f5YO55YC86auY44CC55So5L6G6a6u6aOf5aSW5Lmf6IO95YGa5oiQ572Q6aCt44CB57OW5rys562J5Yqg5bel6aOf5ZOB44CC6Kix5aSa5Lq65pyD5oqK5p2O5a2Q5Yqg5Yaw57OW54eJ54Wu77yM55So5L6G5r2k5ZaJ6ZaL5ZeT77yM6ICM5p2x5q2Q5YmH5pyD55So5p2O5a2Q6YeA5oiQ5p2O5a2Q55m96Jit5Zyw44CCJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+iKkuaenCcsXG4gICAgICAgIG1vbnRoOiAn55ub55Si5pyf77yaNS055pyIJyxcbiAgICAgICAgdGFzdGU6ICflr4zlkKvlpKfph4/nmoTntq3nlJ/ntKBD77yM5oqX5rCn5YyW5Y+K576O6IaaJyxcbiAgICAgICAgY29udGVudDpcbiAgICAgICAgICAgICfjgIzoipLmnpzjgI3vvIzkuK3mlofnqLHlkbzkvoboh6rmlrzoi7HmlodcIk1hbmdvXCLnmoTnv7vora/vvIzmvIbmqLnnp5HvvIzljp/nlKLmlrzljbDluqbjgILml6nlnKjmmI7mnJ3vvIzmnY7mmYLnj43kvr/lsIfoipLmnpznqLHngrrjgIzmnpzkuK3mpbXlk4HjgI3vvIzmnInmraLmmojjgIHooYzmsKPjgIHmtojpo5/nrYnlip/mlYjjgILlj6blpJbvvIzoipLmnpzlr4zlkKvlpKfph4/nmoTntq3nlJ/ntKBD77yM5Lmf5pyJ5Yqp5pa85oqX5rCn5YyW5Y+K576O6Iaa44CCJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+ahg+WtkCcsXG4gICAgICAgIG1vbnRoOiAn55ub55Si5pyf77yaMy005pyIJyxcbiAgICAgICAgdGFzdGU6ICfmnpzogonphbjnlJzpgankuK3vvIzmn5Tou5/lpJrmsYEnLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ+aeh+adt+aYr+aYpeWto+aIkOeGn+eahOawtOaenO+8jOaenOiCiemFuOeUnOmBqeS4reS4lOaflOi7n+Wkmuaxge+8jOmZpOS6humurumjn+S5i+WklumChOWPr+ijveaIkOWKoOW3peWTgeWmguaenOiGj+OAgeaenOmcsu+8jOmHgOmFkuetie+8jOS7peWPiumdnuW4uOefpeWQjeeahOaeh+adt+iGj+OAguagueaTmuOAiuacrOiNiee2seebruOAi+aJgOiomOi8ie+8jOaeh+adt+iDveWkoOiiqueXsOatouWSs+OAgeeUn+a0pea9pOiCuu+8jOa4heeGseWBpeiDg+OAgicsXG5cbiAgICAgICAgYWN0OiB0cnVlIC8qIOmgkOioreeahOeLgOaFi+eCunRydWUgKi9cbiAgICB9XG5dXG5cbmNvbnN0IFNlYXNvbkxpc3QgPSAoeyBkYXRhLCBjbGFzc05hbWUgfSkgPT4ge1xuICAgIC8qIOeCunJlYWN05re75YqgY2xhc3NOYW1l55qE6Kit5a6aICovXG4gICAge1xuICAgICAgICAvKuazqOaEjyBodG1sIHRhZyDnmoToqp7mhI/vvIzpgJnpgormh4noqbLmmK/kuIDlgIvliJfooagqL1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWxcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGdyaWQgZ2FwLVsxNnB4XSB4bDpnYXAtWzI0cHhdIHBiLVs4MHB4XSB4bDpwYi1bMTYwcHhdIHB4LVsxNnB4XSBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiB4bDpncmlkLWNvbHMtMyAke2NsYXNzTmFtZX1gfVxuICAgICAgICA+XG4gICAgICAgICAgICB7LyogY2xhc3NOYW1l5o6l5pS25aSW6Z2i5YKz6YCy5L6G55qE5qij5byPICovfVxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImZsZXhcIiBrZXk9e2l9PlxuICAgICAgICAgICAgICAgICAgICA8U2Vhc29uQ2FyZCBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2Vhc29uTGlzdClcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnY29tcG9uZW50cy9MaW5rJ1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcblxuY29uc3QgQ09ORklHID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmmKXlraMnLFxuICAgICAgICBtb250aDogJzMtNeaciCcsXG4gICAgICAgIGFjdENsYXNzTmFtZTpcbiAgICAgICAgICAgICd0ZXh0LVsjZDEyNzI3XSBib3JkZXItWyNmZjhhOGFdIGJvcmRlci1bMnB4XSByaW5nLVsxcHhdIHJpbmctWyNmZjhhOGFdJyxcbiAgICAgICAgaG92ZXJDbGFzc05hbWU6XG4gICAgICAgICAgICAnaG92ZXI6dGV4dC1bI2QxMjcyN10gaG92ZXI6Ym9yZGVyLVsjZmY4YThhXSBob3Zlcjpib3JkZXItWzJweF0gaG92ZXI6cmluZy1bMXB4XSBob3ZlcjpyaW5nLVtmZjhhOGFdJyxcbiAgICAgICAgdXJsOiAnc3ByaW5nJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+Wkj+WtoycsXG4gICAgICAgIG1vbnRoOiAnNi045pyIJyxcbiAgICAgICAgYWN0Q2xhc3NOYW1lOlxuICAgICAgICAgICAgJ3RleHQtWyMyZDczMTZdIGJvcmRlci1bIzgyYmU2Nl0gYm9yZGVyLVsycHhdIHJpbmctWzFweF0gcmluZy1bIzgyYmU2Nl0nLFxuICAgICAgICBob3ZlckNsYXNzTmFtZTpcbiAgICAgICAgICAgICdob3Zlcjp0ZXh0LVsjMmQ3MzE2XSBob3Zlcjpib3JkZXItWyM4MmJlNjZdIGhvdmVyOmJvcmRlci1bMnB4XSBob3ZlcjpyaW5nLVsxcHhdIGhvdmVyOnJpbmctWzgyYmU2Nl0nLFxuICAgICAgICB1cmw6ICdzdW1tZXInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn56eL5a2jJyxcbiAgICAgICAgbW9udGg6ICc5LTEx5pyIJyxcbiAgICAgICAgYWN0Q2xhc3NOYW1lOlxuICAgICAgICAgICAgJ3RleHQtWyNiZDRmMDBdIGJvcmRlci1bI2ZiY2U0Y10gYm9yZGVyLVsycHhdIHJpbmctWzFweF0gcmluZy1bI2ZiY2U0Y10nLFxuICAgICAgICBob3ZlckNsYXNzTmFtZTpcbiAgICAgICAgICAgICdob3Zlcjp0ZXh0LVsjYmQ0ZjAwXSBob3Zlcjpib3JkZXItWyNmYmNlNGNdIGhvdmVyOmJvcmRlci1bMnB4XSBob3ZlcjpyaW5nLVsxcHhdIGhvdmVyOnJpbmctWyNmYmNlNGNdJyxcbiAgICAgICAgdXJsOiAnYXV0dW1uJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+WGrOWtoycsXG4gICAgICAgIG1vbnRoOiAnMTItMuaciCcsXG4gICAgICAgIGFjdENsYXNzTmFtZTpcbiAgICAgICAgICAgICd0ZXh0LVsjMGY2ZmEyXSBib3JkZXItWyM2ZWJkZTZdIGJvcmRlci1bMnB4XSByaW5nLVsxcHhdIHJpbmctWyM2ZWJkZTZdJyxcbiAgICAgICAgaG92ZXJDbGFzc05hbWU6XG4gICAgICAgICAgICAnaG92ZXI6dGV4dC1bIzBmNmZhMl0gaG92ZXI6Ym9yZGVyLVsjNmViZGU2XSBob3Zlcjpib3JkZXItWzJweF0gaG92ZXI6cmluZy1bMXB4XSBob3ZlcjpyaW5nLVsjNmViZGU2XScsXG4gICAgICAgIHVybDogJ3dpbnRlcidcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICflhajlubQnLFxuICAgICAgICBtb250aDogJzEtMTLmnIgnLFxuICAgICAgICBhY3RDbGFzc05hbWU6XG4gICAgICAgICAgICAndGV4dC1bI2JkNGYwMF0gYm9yZGVyLVsjZjM5MzA2XSBib3JkZXItWzJweF0gcmluZy1bMXB4XSByaW5nLVsjZjM5MzA2XScsXG4gICAgICAgIGhvdmVyQ2xhc3NOYW1lOlxuICAgICAgICAgICAgJ2hvdmVyOnRleHQtWyNiZDRmMDBdIGhvdmVyOmJvcmRlci1bI2YzOTMwNl0gaG92ZXI6Ym9yZGVyLVsycHhdIGhvdmVyOnJpbmctWzFweF0gaG92ZXI6cmluZy1bI2YzOTMwNl0nLFxuICAgICAgICB1cmw6ICdhbGwnXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5YWo5a2jJyxcbiAgICAgICAgbW9udGg6ICfmsLTmnpwnLFxuICAgICAgICBhY3RDbGFzc05hbWU6XG4gICAgICAgICAgICAndGV4dC1bI2JjMTQ2Zl0gYm9yZGVyLVsjZmZhNWNiXSBib3JkZXItWzJweF0gcmluZy1bMXB4XSByaW5nLVsjZmZhNWNiXScsXG4gICAgICAgIGhvdmVyQ2xhc3NOYW1lOlxuICAgICAgICAgICAgJ2hvdmVyOnRleHQtWyNiYzE0NmZdIGhvdmVyOmJvcmRlci1bI2ZmYTVjYl0gaG92ZXI6Ym9yZGVyLVsycHhdIGhvdmVyOnJpbmctWzFweF0gaG92ZXI6cmluZy1bI2ZmYTVjYl0nLFxuICAgICAgICB1cmw6ICdmcnVpdHMnXG4gICAgfVxuXVxuXG5jb25zdCBTZWFzb25OYXYgPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICAgIGNvbnN0IHsgc2Vhc29uIH0gPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IGFjdGl2ZVNlYXNvbiA9IHNlYXNvbiB8fCAnYWxsJyAvL+eiuuS/nemgkOioreaDheazgeS4iyBcImFsbFwiIOiiq+mBuOS4rVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgcHgtWzI0cHhdICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktY2VudGVyIGdhcC1bMTZweF0gbXgtbjMgcGwtWzRweF0gb3ZlcmZsb3cteC1hdXRvIG1kOm92ZXJmbG93LXZpc2libGVcIj5cbiAgICAgICAgICAgICAgICB7Q09ORklHLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zZWFzb24tZnJ1aXRzLyR7aXRlbS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnVybCA9PT0gYWN0aXZlU2Vhc29uIC8v6YCj57WQ562J5pa86aCQ6Kit55qEYWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uYWN0Q2xhc3NOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGBib3JkZXItWzJweF0gYm9yZGVyLVsjYzRjNGM0XSB0cnMtYWxsICR7aXRlbS5ob3ZlckNsYXNzTmFtZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBmbGV4IGZsZXgtY29sIGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LVsxMnB4XSBweC1bMTZweF0gdy1bMTA0cHhdIGgtWzg4cHhdIHNwYWNlLXktMiByb3VuZGVkLVsxNnB4XSBtZDpyb3VuZGVkLVsyNHB4XSBib3JkZXItc29saWQgdHJzLWFsbGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/ngI/opr3lmajnmoQgaGlzdG9yeSBBUEnvvIzlhYHoqLHmlLnororngI/opr3mrbflj7LvvIzogIzkuI3mnIPnnJ/nmoTph43mlrDmlbTnkIbpoIHpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCwgLy9TdGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsIC8vdGl0bGXlv73nlaXlj6/nlKjnqbrlrZfkuLJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAvc2Vhc29uLWZydWl0cy8ke2l0ZW0udXJsfWAgLy/mg7PopoHmm7TmlrDnmoR1cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTIycHggZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnotMTZweCB0ZXh0LVsjNzY3Njc2XSBmb250LW5vcm1hbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5tb250aH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8bGk+PC9saT5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTZWFzb25OYXYpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSdcbmltcG9ydCBCYW5uZXJUaXRsZSBmcm9tICdjb21wb25lbnRzL2Jhbm5lclRpdGxlJ1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnY29tcG9uZW50cy9TcGlubmVyJ1xuaW1wb3J0IFNlYXNvbk5hdiBmcm9tICcuL1NlYXNvbk5hdidcbmltcG9ydCBTZWFzb25MaXN0IGZyb20gJy4vU2Vhc29uTGlzdCdcbmltcG9ydCBzd2FsIGZyb20gJ3N3ZWV0YWxlcnQnXG5pbXBvcnQgeyBNT05USFNfTUFQLCBTRUFTT05fTUFQIH0gZnJvbSAnY29uc3RhbnRzL3V0aWxzJ1xuXG5jb25zdCBtYWtlTW9udGhOYW1lcyA9ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhNT05USFNfTUFQKSAvL+WPluW+l+aJgOaciemNte+8iOWtl+S4suWei+aFi+eahOaVuOWtl++8iSDovLjlh7o6IFtcIjFcIiwgXCIyXCIsIFwiNFwiLCBcIjhcIiwgXCIxNlwiLCBcIjMyXCIsIFwiNjRcIiwgXCIxMjhcIiwgXCIyNTZcIiwgXCI1MTJcIiwgXCIxMDI0XCIsIFwiMjA0OFwiXVxuICAgICAgICAubWFwKE51bWJlcikgLy/lsIflrZfkuLLovYnmj5vngrrmlbjlrZcg6Ly45Ye6OiBbMSwgMiwgNCwgOCwgMTYsIDMyLCA2NCwgMTI4LCAyNTYsIDUxMiwgMTAyNCwgMjA0OF1cbiAgICAgICAgLmZpbHRlcigoaykgPT4gKHZhbHVlICYgaykgPT09IGspIC8v56+p6YG45Ye656ym5ZCI5qKd5Lu255qE6Y21IOWBh+iorSB2YWx1ZSA9IDIwIO+8jCAyMCAmIDQgPSA077yMMjAgJiAxNiA9IDE2IO+8jCDovLjlh7o6IFs0LCAxNl1cbiAgICAgICAgLm1hcCgoaykgPT4gTU9OVEhTX01BUFtrXSkgLy/moLnmk5rnr6npgbjlvoznmoTpjbXvvIzlj5blvpflsI3mh4nnmoTmnIjku73lgLwgWzQsIDE2XSDlsI3mh4kgMyDlkowgNSDmnIjvvIzovLjlh7o6IFszLCA1XVxufVxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2Vhc29uIH0gPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG4gICAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKG51bGwpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaCgnL19hcGkvemgtdHcvZnJ1aXQnLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwKSA9PiByZXNwLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKCh7IHN1Y2Nlc3MsIGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jb3ZlciA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXM/LmZpbmQoKGltZykgPT4gaW1nLmlzQ292ZXIpPy51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcz8uWzBdPy51cmwgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9ub3QtZm91bmQvbWlzcy5qcGdgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGhzID0gbWFrZU1vbnRoTmFtZXMoaXRlbS5tb250aHMpXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2V0RGF0YShkYXRhKVxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJEYXRhKGRhdGEsIHNlYXNvbikgLy8g5Yid5aeL6LyJ5YWl5pmC6YGO5r++5pW45pOaXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7IHRpdGxlOiBkYXRhLnRvU3RyaW5nKCksIGljb246ICdpbmZvJyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goY29uc29sZS5lcnJvcilcbiAgICB9LCBbXSlcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICBmaWx0ZXJEYXRhKGRhdGEsIHNlYXNvbikgLy8g55W2IGBzZWFzb25gIOaUueiuiuaZgu+8jOmBjua/vuaVuOaTmlxuICAgICAgICB9XG4gICAgfSwgW3NlYXNvbiwgZGF0YV0pXG5cbiAgICBjb25zdCBmaWx0ZXJEYXRhID0gKGRhdGEsIHNlYXNvbikgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJNb250aHMgPSBTRUFTT05fTUFQW3NlYXNvbl0gfHwgJ2FsbCdcblxuICAgICAgICBpZiAoZmlsdGVyTW9udGhzID09PSAnYWxsJykge1xuICAgICAgICAgICAgc2V0RmlsdGVyZWREYXRhKGRhdGEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRGaWx0ZXJlZERhdGEoXG4gICAgICAgICAgICAgICAgZGF0YS5maWx0ZXIoKGl0ZW0pID0+XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubW9udGhzLnNvbWUoKG1vbnRoKSA9PiBmaWx0ZXJNb250aHMuaW5jbHVkZXMobW9udGgpKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICAgIDxCYW5uZXJUaXRsZVxuICAgICAgICAgICAgICAgIHRpdGxlPXsn5ZOB5ZqQ5pyA6a6u576O55qE5Y6f5ZGzJ31cbiAgICAgICAgICAgICAgICBzdWI9e2Dlm5vlraPmsLTmnpxgfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2Doh7rngaPmsLTmnpzkvp3lraPnr4DliIbmiJDmmKXjgIHlpI/jgIHnp4vjgIHlhqzoiIflhajlubTnlKLmnJ/nmoTmsLTmnpwg5q2h6L+O5aSn5a625L6G6KqN6K2Y6Ie654Gj5rC05p6c77yBYH1cbiAgICAgICAgICAgICAgICBpbWc9e2BzZWFzb24tZnJ1aXQuanBnYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8U2Vhc29uTmF2IGNsYXNzTmFtZT1cInB5LTUgcHkteGwtMTAgbWF4LXctWzc2OHB4XSBteC1hdXRvXCIgLz5cbiAgICAgICAgICAgICAgICB7IWZpbHRlcmVkRGF0YSA/IChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaXplPXsxOH0gY29sb3I9eydibGFjayd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxTZWFzb25MaXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMTI4MHB4XSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2ZpbHRlcmVkRGF0YX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUGFnZSlcbiJdLCJuYW1lcyI6WyJJMThOIiwiTGluayIsInVzZUxvY2FsZSIsIlJlYWN0IiwidXNlU2VhcmNoUGFyYW1zIiwiQnJlYWRjcnVtYnMiLCJfcmVmIiwiX3MyIiwiX3MiLCJkYXRhIiwiY2xhc3NOYW1lIiwibGFuZyIsIl91c2VTZWFyY2hQYXJhbXMiLCJfdXNlU2VhcmNoUGFyYW1zMiIsIl9zbGljZWRUb0FycmF5Iiwic2VhcmNoIiwiaXNFbWJlZCIsImdldCIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJhY2Nlc3NLZXkiLCJocmVmIiwidGl0bGUiLCJvbkNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwibWFwIiwiX3JlZjIiLCJpIiwidXJsIiwia2V5IiwiX2MzIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIiwidXNlTWVkaWEiLCJCYW5uZXJUaXRsZSIsInN1YiIsImNvbnRlbnQiLCJpbWciLCJpc0xheW91dE1EIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9QQVRIIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwic3BsaXQiLCJzdHIiLCJUaHVtYkZyYW1lIiwiQ2FyZCIsImlkIiwiY292ZXIiLCJtb250aHMiLCJzdWJ0aXRsZSIsInN1bW1hcnkiLCJzcmMiLCJyZXBsYWNlIiwiYWx0Iiwiam9pbiIsIlNlYXNvbkNhcmQiLCJDT05GSUdfTElTVCIsIm1vbnRoIiwidGFzdGUiLCJhY3QiLCJTZWFzb25MaXN0IiwiaXRlbSIsInVzZVN0YXRlIiwidXNlUGFyYW1zIiwiQ09ORklHIiwiYWN0Q2xhc3NOYW1lIiwiaG92ZXJDbGFzc05hbWUiLCJTZWFzb25OYXYiLCJfdXNlUGFyYW1zIiwic2Vhc29uIiwiYWN0aXZlU2Vhc29uIiwicmVsIiwid2luZG93IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInVzZUVmZmVjdCIsIlNwaW5uZXIiLCJzd2FsIiwiTU9OVEhTX01BUCIsIlNFQVNPTl9NQVAiLCJtYWtlTW9udGhOYW1lcyIsInZhbHVlIiwiT2JqZWN0Iiwia2V5cyIsIk51bWJlciIsImZpbHRlciIsImsiLCJQYWdlIiwiX3VzZVN0YXRlIiwiX3VzZVN0YXRlMiIsInNldERhdGEiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImZldGNoIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwIiwianNvbiIsInN1Y2Nlc3MiLCJmb3JFYWNoIiwiX2l0ZW0kaW1hZ2VzIiwiX2l0ZW0kaW1hZ2VzMiIsImltYWdlcyIsImZpbmQiLCJpc0NvdmVyIiwiZmlsdGVyRGF0YSIsInRvU3RyaW5nIiwiaWNvbiIsImNvbnNvbGUiLCJlcnJvciIsImZpbHRlck1vbnRocyIsInNvbWUiLCJpbmNsdWRlcyIsInNpemUiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=