"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_home_index_js"],{

/***/ "./src/views/home/FruitCalendar.js"
/*!*****************************************!*\
  !*** ./src/views/home/FruitCalendar.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();



var fruitCalender = [{
  title: '枇杷',
  icon: 'loquat',
  months: [{
    id: 3
  }, {
    id: 4
  }]
}, {
  title: '嘉寶果',
  icon: 'jaboticaba',
  months: [{
    id: 3
  }, {
    id: 4
  }]
}, {
  title: '梅子',
  icon: 'plum',
  months: [{
    id: 4
  }]
}, {
  title: '桑葚',
  icon: 'mulberry',
  months: [{
    id: 4
  }]
}, {
  title: '李子',
  icon: 'plumlee',
  months: [{
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }]
}, {
  title: '桃子',
  icon: 'peach',
  months: [{
    id: 4,
    type: '甜蜜桃'
  }, {
    id: 5,
    type: '甜蜜桃'
  }, {
    id: 6,
    type: '水蜜桃'
  }, {
    id: 7,
    type: '水蜜桃'
  }, {
    id: 8,
    type: '水蜜桃'
  }]
}, {
  title: '西瓜',
  icon: 'watermelon',
  months: [{
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }]
}, {
  title: '蓮霧',
  icon: 'waxApple',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '荔枝',
  icon: 'litchi',
  months: [{
    id: 6,
    type: '玉荷包'
  }, {
    id: 7,
    type: '黑葉'
  }, {
    id: 8,
    type: '黑葉'
  }, {
    id: 9,
    type: '糯米'
  }]
}, {
  title: '芒果',
  icon: 'mango',
  months: [{
    id: 6,
    type: '土芒果'
  }, {
    id: 7,
    type: '愛文'
  }, {
    id: 8,
    type: '愛文'
  }, {
    id: 9,
    type: '金煌'
  }, {
    id: 10,
    type: '凱特'
  }]
}, {
  title: '葡萄',
  icon: 'grape',
  months: [{
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '梨子',
  icon: 'pear',
  months: [{
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }]
}, {
  title: '洋香瓜',
  icon: 'melon',
  months: [{
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }]
}, {
  title: '紅龍果',
  icon: 'dragon',
  months: [{
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }]
}, {
  title: '無花果',
  icon: 'fig',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '龍眼',
  icon: 'longan',
  months: [{
    id: 7
  }, {
    id: 8
  }]
}, {
  title: '藍莓',
  icon: 'blueberry',
  months: [{
    id: 7
  }, {
    id: 8
  }]
}, {
  title: '百香果',
  icon: 'passiflora',
  months: [{
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }]
}, {
  title: '酪梨',
  icon: 'avocado',
  months: [{
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }]
}, {
  title: '釋迦',
  icon: 'sakya',
  months: [{
    id: 1,
    type: '鳳梨'
  }, {
    id: 2,
    type: '鳳梨'
  }, {
    id: 3,
    type: '鳳梨'
  }, {
    id: 8,
    type: '大目'
  }, {
    id: 9,
    type: '大目'
  }, {
    id: 10,
    type: '大目'
  }, {
    id: 11,
    type: '大目'
  }, {
    id: 12,
    type: '大目'
  }]
}, {
  title: '文旦柚',
  icon: 'pomelo',
  months: [{
    id: 9
  }, {
    id: 10
  }]
}, {
  title: '洛神',
  icon: 'roselle',
  months: [{
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }]
}, {
  title: '奇異果',
  icon: 'kiwi',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '柿子',
  icon: 'persimmon',
  months: [{
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '柑橘',
  icon: 'tangerine',
  months: [{
    id: 1,
    type: '年柑'
  }, {
    id: 2,
    type: '年柑'
  }, {
    id: 11,
    type: '桶柑'
  }, {
    id: 12,
    type: '桶柑'
  }]
}, {
  title: '蜜棗',
  icon: 'jujube',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 12
  }]
}, {
  title: '柳丁',
  icon: 'oranges',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 12
  }]
}, {
  title: '金棗',
  icon: 'date',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 12
  }]
}, {
  title: '草莓',
  icon: 'strawberry',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 12
  }]
}, {
  title: '番茄',
  icon: 'tomato',
  months: [{
    id: 1,
    type: '牛番茄'
  }, {
    id: 2,
    type: '聖女'
  }, {
    id: 3,
    type: '玉女'
  }, {
    id: 4,
    type: '黑柿'
  }, {
    id: 12,
    type: '桃太郎'
  }]
}, {
  title: '芭樂',
  icon: 'ballet',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '木瓜',
  icon: 'papaya',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '鳳梨',
  icon: 'pineapple',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '金桔',
  icon: 'kumquat',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '檸檬',
  icon: 'lemon',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}, {
  title: '黃金果',
  icon: 'caimito',
  months: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 9
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }]
}];
var FruitCalendar = function FruitCalendar(_ref) {
  _s2();
  _s();
  var _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var isLayoutXL = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"])('(min-width: 1024px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[1024px] mx-auto md:px-[24px] px-[16px] lg:px-[0] ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", {
    className: "w-100 border-collapse:collapse"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
    className: "fz-14px fz-xl-18px lg:w-[160px] md:w-[120px] w-[100px] lg:py-[8px] py-4px border border-[#FBCE4C] bg-[#FFF6DE]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, "\u7576\u5B63")), Array.from({
    length: 12
  }).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", {
      key: i,
      className: "fz-14px fz-xl-18px lg:w-[72px] md:w-[42px] w-[22px] border border-[#FBCE4C] bg-[#FFF6DE] text-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, i + 1, isLayoutXL ? '月' : ''));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null, fruitCalender.map(function (fruit, j) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", {
      key: j,
      className: "".concat(j % 2 === 0 ? '' : 'bg-[#F0F0F0]', " hover:bg-[#FFF6DE]")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
      className: "fz-14px fz-lg-16px py-[6px] lg:py-[8px] px-2 border border-[#F0F0F0] flex items-center justify-end"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, fruit.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "lg:block hidden ml-4px w-[28px] h-[28px]",
      "aria-hidden": "true",
      style: {
        backgroundImage: "url(/images/icon-fruit/".concat(fruit.icon, ".png)"),
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    })), Array.from({
      length: 12
    }).map(function (_, monthIndex) {
      var monthData = fruit.months.find(function (month) {
        return month.id === monthIndex + 1;
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", {
        key: monthIndex,
        className: "lg:text-[0.8125rem] lg:leading-[1.5rem] text-[0.6rem] border border-[#F0F0F0] text-center align-middle"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
        className: "".concat(monthData ? 'bg-[#FBCE4C] outline outline-1 outline-[#FBCE4C] lg:min-h-[1.5rem] min-h-[0.85rem]' : '')
      }, isLayoutXL && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_2__["default"], null, monthData ? monthData.type : '')));
    }));
  }))));
};
_s2(FruitCalendar, "9AvTIhNA8yVhjil1mX5c5/Dcm9E=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c3 = FruitCalendar;
_s(FruitCalendar, "9AvTIhNA8yVhjil1mX5c5/Dcm9E=", false, function () {
  return [hooks_useMedia__WEBPACK_IMPORTED_MODULE_1__["default"]];
});
_c = FruitCalendar;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitCalendar));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitCalendar");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitCalendar");

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

/***/ "./src/views/home/FruitTheme.js"
/*!**************************************!*\
  !*** ./src/views/home/FruitTheme.js ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Link */ "./src/components/Link.js");
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();






var theme = [{
  titleColor: '四季',
  title: '水果',
  sub: '品嚐最鮮美的原味',
  content: ['臺灣水果主要為熱帶、副熱帶氣候型水果，地形上因為有山坡地與高山，也能栽種溫帶水果。我們依季節分成春、夏、秋、冬與全年產期，歡迎大家來認識臺灣的水果！'],
  img: '/images/index/index-1.jpg',
  links: [{
    label: '了解更多',
    url: '/season-fruits'
  }],
  deco: '/images/index/deco-1.png',
  decoW: 400,
  color: '#D12727',
  colorLight: '#FF8A8A',
  hover: 'hover:bg-[#FFEEEF]'
}, {
  titleColor: '採果',
  title: '何處去',
  sub: '走吧！來趟水果之旅',
  content: ['臺灣擁有得天獨厚的地理位置及氣候條件，順應二十四節氣盛產的各式水果，旅人們不僅可以品嘗當季鮮採水果，還可以體驗採果的樂趣，讓我們一同拜訪全臺各地果園！'],
  img: '/images/index/index-2.jpg',
  links: [{
    label: '採果趣',
    url: '/pick'
  }],
  deco: '/images/index/deco-2.png',
  decoW: 400,
  color: '#2D7316',
  colorLight: '#82BE66',
  hover: 'hover:bg-[#E4F4DD]'
}, {
  titleColor: '果樹',
  title: '認養',
  sub: '共同分享採收的樂趣',
  content: ['透過果樹認養了解農作物栽培的過程，人與果樹之間不只是買賣關係，藉由實際參與農友在田間作業、管理與採收的辛勤，讓更多人體會一顆水果從無到有的成長故事。'],
  img: '/images/index/index-3.jpg',
  links: [{
    label: '了解更多',
    url: '/tree'
  }],
  deco: '/images/index/deco-3.png',
  decoW: 320,
  color: '#106FA2',
  colorLight: '#6FBDE6',
  hover: 'hover:bg-[#E7F7FF]'
}, {
  titleColor: '水果',
  title: '伴手禮',
  sub: '嚴選臺灣農特產好禮',
  content: ['水果在欉熟成搶鮮採，「嚴選製造、在地生產」孕育出寶島在地好滋味，臺灣農特產注重生產管控及安全品質，各種特色產品多元選擇，年節送禮、自用兩相宜！'],
  img: '/images/index/index-4.jpg',
  links: [{
    label: '了解更多',
    url: '/season-fruits'
  }],
  deco: '/images/index/deco-4.png',
  decoW: 400,
  color: '#BD4F00',
  colorLight: '#FBCE4C',
  hover: 'hover:bg-[#FFF6DE]'
}];
var FruitTheme = function FruitTheme() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
  var isLayoutXL = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 1024px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "max-w-[1280px] mx-auto px-xl-5 px-md-3 px-2"
  }, theme.map(function (theme, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "grid grid-cols-3 py-xl-12 py-md-8 py-4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "lg:col-[_span_1] col-[_span_3] ".concat(i % 2 === 1 ? 'lg:order-[9999]' : '')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_5__["default"], {
      src: isLayoutXL ? "".concat("/fruits-travel").concat(theme.img) : "".concat("/fruits-travel").concat(theme.img.replace('.jpg', '-sm.jpg')),
      ratio: isLayoutXL ? "2by3" : "3by2",
      className: "md:rounded-[32px] rounded-[16px]",
      alt: ""
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "relative  lg:col-[_span_2] col-[_span_3] pt-xl-13 pt-md-8 pt-3 px-md-7 flex flex-col items-center md:items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-md-4 mb-2 text-center text-md-left"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
      className: "mb-12px",
      xmlns: "http://www.w3.org/2000/svg",
      width: "256",
      height: "16",
      viewBox: "0 0 256 16",
      fill: theme.colorLight,
      "aria-hidden": "true"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M17.1139 1.23345C15.2073 1.40012 12.8739 3.76012 11.3339 5.91345C10.8673 6.56678 10.3539 7.37345 9.8806 8.24678C9.41394 7.37345 8.89394 6.56678 8.42727 5.91345C6.8806 3.76012 4.55394 1.40012 2.64727 1.23345C2.01394 1.18012 1.42727 1.37345 1.01394 1.78012C-0.859397 3.61345 1.5406 8.14012 3.24727 10.5201C4.79394 12.6734 7.1206 15.0334 9.02727 15.2001C9.1006 15.2001 9.16727 15.2068 9.2406 15.2068C9.46727 15.2068 9.6806 15.1668 9.8806 15.1001C10.0806 15.1601 10.3006 15.2068 10.5206 15.2068C10.5873 15.2068 10.6606 15.2068 10.7339 15.2001C12.6406 15.0334 14.9673 12.6734 16.5139 10.5201C18.2206 8.13345 20.6206 3.61345 18.7473 1.78012C18.3273 1.36678 17.7406 1.18012 17.1073 1.23345H17.1139ZM5.06727 9.22012C3.1006 6.47345 2.4406 4.10678 2.55394 3.47345C3.16727 3.59345 4.8206 4.71345 6.61394 7.22012C7.64727 8.66678 8.31394 9.99345 8.7006 11.0268C8.53394 11.5935 8.4406 12.1401 8.42727 12.6468C7.6206 12.1468 6.3806 11.0601 5.06727 9.22012ZM14.7006 9.22012C13.3806 11.0601 12.1473 12.1468 11.3406 12.6468C11.3273 12.1401 11.2273 11.6001 11.0673 11.0401C11.4539 9.99345 12.1139 8.66678 13.1539 7.22012C14.9273 4.74678 16.5606 3.62012 17.1939 3.48012C17.3073 4.21345 16.6339 6.53345 14.7073 9.22678L14.7006 9.22012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M63.4739 0.673451C61.5873 0.993451 59.4539 3.53345 58.0873 5.80012C57.6739 6.48678 57.2273 7.34012 56.8273 8.24012C56.2939 7.40678 55.7139 6.64012 55.1939 6.02678C53.4806 4.00012 50.9739 1.83345 49.0606 1.82678H49.0473C48.4139 1.82678 47.8539 2.06678 47.4739 2.50678C45.7606 4.48678 48.5073 8.80012 50.4006 11.0401C52.1139 13.0668 54.6273 15.2335 56.5406 15.2401H56.5539C56.8673 15.2401 57.1606 15.1801 57.4273 15.0668C57.5673 15.0935 57.7006 15.1335 57.8473 15.1335C57.9739 15.1335 58.1073 15.1201 58.2406 15.1001C60.1273 14.7801 62.2606 12.2401 63.6273 9.97345C65.1406 7.46012 67.1673 2.76012 65.1539 1.08012C64.7073 0.706785 64.1139 0.553451 63.4806 0.660118L63.4739 0.673451ZM52.1006 9.60012C49.9206 7.02012 49.0739 4.71345 49.1406 4.06678C49.7606 4.13345 51.4939 5.12012 53.4873 7.48012C54.6339 8.84012 55.4073 10.1068 55.8739 11.1135C55.7539 11.6868 55.7006 12.2401 55.7273 12.7468C54.8806 12.3135 53.5606 11.3268 52.1006 9.60012ZM61.7073 8.82678C60.5406 10.7668 59.3939 11.9468 58.6273 12.5135C58.5739 12.0135 58.4339 11.4801 58.2273 10.9335C58.5273 9.86012 59.0806 8.48012 60.0006 6.95345C61.5739 4.34012 63.1139 3.09345 63.7273 2.90012C63.9006 3.62012 63.4139 5.99345 61.7073 8.82678Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M39.9073 1.46678C38.0339 1.62678 35.7406 3.94678 34.2273 6.06012C33.7739 6.68678 33.2806 7.47345 32.8273 8.31345C32.3739 7.47345 31.8739 6.69345 31.4273 6.06012C29.9139 3.94678 27.6206 1.62678 25.7473 1.46678C25.1206 1.41345 24.5406 1.60678 24.1273 2.01345C22.2873 3.82012 24.6339 8.26679 26.3139 10.6068C27.8273 12.7201 30.1206 15.0401 31.9939 15.2001C32.0606 15.2001 32.1339 15.2068 32.2006 15.2068C32.4206 15.2068 32.6339 15.1668 32.8273 15.1068C33.0273 15.1668 33.2339 15.2068 33.4606 15.2068C33.5273 15.2068 33.6006 15.2068 33.6673 15.2001C35.5406 15.0401 37.8339 12.7201 39.3473 10.6068C41.0273 8.26679 43.3739 3.82012 41.5339 2.01345C41.1206 1.60678 40.5539 1.41345 39.9139 1.46678H39.9073ZM28.1206 9.30012C26.2139 6.64678 25.5606 4.34678 25.6539 3.70678C26.2606 3.84012 27.8673 4.94678 29.6006 7.36678C30.6139 8.77345 31.2606 10.0735 31.6406 11.0935C31.4873 11.6335 31.3939 12.1468 31.3739 12.6335C30.5873 12.1401 29.3873 11.0801 28.1139 9.30678L28.1206 9.30012ZM37.5273 9.30012C36.2539 11.0735 35.0606 12.1335 34.2673 12.6335C34.2473 12.1535 34.1606 11.6335 34.0073 11.1001C34.3806 10.0801 35.0339 8.78012 36.0473 7.36678C37.7606 4.98012 39.3406 3.88012 39.9673 3.71345C40.0606 4.45345 39.3939 6.70678 37.5339 9.30012H37.5273Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M87.7473 1.40678C85.8473 1.46012 83.4206 3.78678 81.7806 5.95345C81.2406 6.66678 80.7273 7.44012 80.2739 8.22678C79.8739 7.31345 79.4273 6.46012 79.0206 5.77345C77.6273 3.40678 75.4673 0.786784 73.5873 0.513451C72.9539 0.426785 72.3606 0.593451 71.9273 1.00012C70.0339 2.76678 72.0939 7.58678 73.6139 10.1601C75.0073 12.5268 77.1739 15.1468 79.0473 15.4201C79.1606 15.4334 79.2673 15.4468 79.3739 15.4468C79.5473 15.4468 79.7073 15.4201 79.8673 15.3801C80.1073 15.4734 80.3606 15.5268 80.6339 15.5268C80.6539 15.5268 80.6739 15.5268 80.7006 15.5268C82.6006 15.4735 85.0273 13.1468 86.6673 10.9801C88.9873 7.92012 90.8206 3.83345 89.3606 2.10012C88.9739 1.64012 88.4273 1.38678 87.7539 1.41345L87.7473 1.40678ZM75.5339 9.02012C73.7406 5.98678 73.2406 3.46012 73.4073 2.76012C74.0206 2.98012 75.5406 4.27345 77.0939 6.91345C78.0473 8.53345 78.6273 9.99345 78.9473 11.1201C78.7539 11.7068 78.6339 12.2735 78.5873 12.7868C77.8273 12.2001 76.6939 10.9801 75.5339 9.02012ZM84.8806 9.62012C83.5206 11.4068 82.2673 12.4735 81.4539 12.9601C81.4739 12.4201 81.4073 11.8335 81.2739 11.2201C81.7073 10.1401 82.4406 8.78012 83.5606 7.30678C85.3873 4.90012 87.0273 3.80678 87.6606 3.66012C87.7539 4.43345 86.9806 6.85345 84.8806 9.62012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M111.007 1.40678C109.107 1.46012 106.681 3.78678 105.041 5.95345C104.381 6.82679 103.761 7.78012 103.241 8.74012C102.681 7.67345 102.041 6.66678 101.474 5.89345C99.8539 3.67345 97.4539 1.27345 95.5539 1.18678C94.9273 1.16678 94.3473 1.38678 93.9473 1.83345C92.2339 3.77345 94.7539 8.37345 96.5073 10.7868C98.1273 13.0068 100.534 15.4068 102.427 15.4935C102.467 15.4935 102.501 15.4935 102.541 15.4935C102.767 15.4935 102.981 15.4535 103.181 15.3868C103.401 15.4668 103.634 15.5135 103.887 15.5135C103.907 15.5135 103.927 15.5135 103.954 15.5135C105.854 15.4601 108.281 13.1335 109.921 10.9668C112.241 7.90679 114.074 3.82012 112.614 2.08678C112.227 1.62678 111.701 1.38678 111.007 1.40012V1.40678ZM98.3206 9.46678C96.2473 6.62012 95.5006 4.16012 95.5939 3.44012C96.2273 3.60012 97.8673 4.74012 99.6673 7.21345C100.907 8.91345 101.661 10.4601 102.054 11.6001C101.921 12.0868 101.847 12.5535 101.827 12.9801C101.021 12.5068 99.7206 11.3935 98.3139 9.46678H98.3206ZM108.141 9.62012C106.721 11.4935 105.414 12.5668 104.607 13.0201C104.601 12.5735 104.521 12.1001 104.387 11.6001C104.794 10.4735 105.567 8.95345 106.821 7.30678C108.647 4.90012 110.287 3.80678 110.921 3.66012C111.014 4.43345 110.241 6.85345 108.141 9.62012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M135.147 1.23345C133.241 1.40012 130.914 3.76012 129.367 5.91345C128.901 6.56678 128.387 7.37345 127.921 8.24678C127.454 7.37345 126.941 6.56678 126.474 5.91345C124.927 3.76012 122.601 1.40012 120.694 1.23345C120.061 1.18012 119.474 1.37345 119.054 1.78012C117.187 3.61345 119.581 8.14012 121.287 10.5201C122.834 12.6735 125.161 15.0335 127.067 15.2001C127.141 15.2001 127.207 15.2068 127.281 15.2068C127.507 15.2068 127.721 15.1668 127.921 15.1001C128.121 15.1601 128.334 15.2068 128.561 15.2068C128.627 15.2068 128.701 15.2068 128.774 15.2001C130.681 15.0335 133.014 12.6735 134.554 10.5201C136.261 8.14012 138.654 3.61345 136.787 1.78012C136.367 1.37345 135.787 1.17345 135.147 1.23345ZM123.101 9.22012C121.134 6.47345 120.474 4.10678 120.587 3.46678C121.201 3.58678 122.854 4.70678 124.647 7.21345C125.681 8.66012 126.347 9.98679 126.734 11.0268C126.567 11.5935 126.474 12.1401 126.461 12.6468C125.654 12.1468 124.414 11.0601 123.094 9.22012H123.101ZM132.734 9.22012C131.414 11.0601 130.181 12.1468 129.374 12.6468C129.361 12.1401 129.261 11.6001 129.101 11.0401C129.487 9.99345 130.147 8.66678 131.187 7.22012C132.961 4.74678 134.594 3.62012 135.227 3.48012C135.341 4.21345 134.667 6.53345 132.741 9.22678L132.734 9.22012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M181.514 0.673451C179.627 0.993451 177.494 3.53345 176.127 5.80012C175.714 6.48678 175.267 7.33345 174.867 8.24012C174.334 7.40678 173.754 6.64012 173.234 6.03345C171.521 4.00678 169.007 1.84012 167.094 1.82678C166.474 1.78012 165.887 2.06678 165.507 2.50678C163.794 4.48678 166.541 8.80012 168.434 11.0401C170.147 13.0668 172.654 15.2335 174.567 15.2468H174.581C174.894 15.2468 175.187 15.1868 175.454 15.0735C175.594 15.1001 175.727 15.1401 175.874 15.1401C176.001 15.1401 176.134 15.1268 176.267 15.1068C178.154 14.7868 180.287 12.2468 181.654 9.98012C183.167 7.46679 185.194 2.76678 183.181 1.08678C182.734 0.713451 182.134 0.560118 181.507 0.666785L181.514 0.673451ZM170.141 9.60012C167.961 7.02012 167.114 4.71345 167.181 4.06678C167.801 4.14012 169.534 5.12012 171.527 7.48012C172.674 8.83345 173.441 10.1068 173.914 11.1135C173.794 11.6868 173.741 12.2401 173.767 12.7468C172.921 12.3135 171.601 11.3268 170.141 9.60012ZM179.741 8.83345C178.574 10.7735 177.427 11.9535 176.661 12.5201C176.607 12.0201 176.467 11.4868 176.261 10.9401C176.561 9.86679 177.114 8.48678 178.034 6.96678C179.607 4.36012 181.147 3.10678 181.761 2.91345C181.934 3.63345 181.447 6.00679 179.741 8.84012V8.83345Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M157.947 1.46678C156.074 1.62678 153.781 3.94678 152.267 6.06012C151.814 6.68678 151.321 7.47345 150.867 8.31345C150.414 7.47345 149.914 6.68678 149.467 6.06012C147.947 3.94678 145.661 1.62678 143.787 1.46678C143.154 1.41345 142.581 1.60678 142.167 2.01345C140.327 3.82012 142.674 8.26679 144.354 10.6068C145.867 12.7201 148.161 15.0401 150.034 15.2001C150.101 15.2001 150.174 15.2068 150.241 15.2068C150.461 15.2068 150.674 15.1668 150.874 15.1068C151.074 15.1668 151.281 15.2068 151.501 15.2068C151.567 15.2068 151.641 15.2068 151.707 15.2001C153.581 15.0401 155.874 12.7201 157.387 10.6068C159.067 8.26679 161.414 3.82012 159.574 2.01345C159.161 1.60678 158.581 1.41345 157.954 1.46678H157.947ZM146.161 9.30012C144.254 6.64678 143.601 4.34678 143.701 3.70678C144.307 3.84012 145.914 4.94678 147.647 7.36012C148.661 8.77345 149.307 10.0735 149.687 11.0868C149.534 11.6268 149.441 12.1401 149.421 12.6268C148.627 12.1335 147.434 11.0735 146.161 9.30012ZM155.567 9.30012C154.294 11.0735 153.101 12.1335 152.307 12.6335C152.287 12.1535 152.201 11.6335 152.047 11.1001C152.421 10.0801 153.074 8.78012 154.087 7.36678C155.801 4.98012 157.381 3.88012 158.007 3.71345C158.101 4.45345 157.434 6.70678 155.574 9.30012H155.567Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M205.781 1.40678C203.881 1.46012 201.454 3.78678 199.814 5.95345C199.274 6.66678 198.761 7.44012 198.307 8.22678C197.907 7.31345 197.467 6.46012 197.054 5.77345C195.661 3.40678 193.494 0.786784 191.621 0.513451C190.987 0.426785 190.394 0.593451 189.961 1.00012C188.067 2.76678 190.127 7.58678 191.647 10.1601C193.041 12.5268 195.201 15.1468 197.081 15.4201C197.194 15.4334 197.301 15.4468 197.407 15.4468C197.581 15.4468 197.741 15.4201 197.901 15.3801C198.141 15.4734 198.394 15.5268 198.667 15.5268C198.687 15.5268 198.707 15.5268 198.734 15.5268C200.634 15.4735 203.061 13.1468 204.701 10.9801C206.494 8.62012 209.074 4.08678 207.394 2.10012C207.007 1.64012 206.461 1.40012 205.787 1.41345L205.781 1.40678ZM193.567 9.02012C191.774 5.98678 191.274 3.46012 191.441 2.76012C192.054 2.98012 193.574 4.28012 195.127 6.91345C196.081 8.53345 196.661 9.99345 196.981 11.1201C196.787 11.7068 196.667 12.2735 196.621 12.7868C195.861 12.2001 194.727 10.9868 193.567 9.02678V9.02012ZM202.914 9.62012C201.554 11.4135 200.301 12.4735 199.487 12.9601C199.507 12.4201 199.441 11.8335 199.307 11.2201C199.741 10.1401 200.474 8.78012 201.594 7.30678C203.421 4.90012 205.061 3.80678 205.694 3.66012C205.787 4.43345 205.014 6.85345 202.914 9.62012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M254.847 2.09345C254.461 1.63345 253.907 1.39345 253.241 1.40678C251.341 1.46012 248.914 3.78678 247.274 5.95345C246.734 6.66678 246.221 7.44012 245.767 8.22678C245.367 7.31345 244.921 6.46012 244.514 5.77345C243.121 3.40678 240.954 0.786784 239.081 0.513451C238.447 0.420118 237.854 0.593451 237.421 1.00012C235.527 2.76678 237.587 7.58678 239.107 10.1601C240.501 12.5268 242.661 15.1468 244.541 15.4201C244.654 15.4335 244.761 15.4468 244.867 15.4468C245.041 15.4468 245.201 15.4201 245.361 15.3801C245.601 15.4735 245.854 15.5268 246.127 15.5268C246.147 15.5268 246.167 15.5268 246.194 15.5268C248.094 15.4735 250.521 13.1468 252.161 10.9801C254.481 7.92012 256.314 3.83345 254.854 2.10012L254.847 2.09345ZM241.027 9.02012C239.234 5.98678 238.734 3.46678 238.901 2.76012C239.514 2.98012 241.034 4.28012 242.587 6.91345C243.541 8.53345 244.121 9.99345 244.441 11.1201C244.247 11.7068 244.127 12.2735 244.081 12.7868C243.321 12.2001 242.187 10.9868 241.027 9.02678V9.02012ZM250.374 9.62012C249.014 11.4135 247.761 12.4735 246.947 12.9601C246.967 12.4201 246.901 11.8335 246.767 11.2201C247.201 10.1401 247.934 8.78012 249.054 7.30678C250.881 4.90012 252.521 3.80678 253.154 3.66012C253.247 4.43345 252.474 6.85345 250.374 9.62012Z"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
      d: "M229.041 1.40678C227.141 1.46012 224.714 3.78678 223.074 5.95345C222.414 6.82678 221.794 7.78012 221.274 8.74012C220.714 7.67345 220.074 6.66678 219.507 5.89345C217.887 3.67345 215.481 1.27345 213.587 1.18678C212.941 1.16012 212.381 1.38678 211.981 1.83345C210.267 3.77345 212.787 8.37345 214.541 10.7868C216.161 13.0068 218.561 15.4068 220.461 15.4935C220.501 15.4935 220.534 15.4935 220.574 15.4935C220.801 15.4935 221.014 15.4535 221.214 15.3868C221.434 15.4668 221.667 15.5135 221.921 15.5135C221.941 15.5135 221.961 15.5135 221.987 15.5135C223.887 15.4601 226.314 13.1335 227.954 10.9668C230.274 7.90679 232.107 3.82012 230.647 2.08678C230.261 1.62678 229.707 1.37345 229.041 1.40012V1.40678ZM216.354 9.46678C214.281 6.62012 213.534 4.16012 213.627 3.44012C214.261 3.60012 215.901 4.74678 217.701 7.21345C218.941 8.91345 219.694 10.4668 220.087 11.6001C219.954 12.0868 219.881 12.5535 219.861 12.9801C219.054 12.5068 217.754 11.3935 216.347 9.46678H216.354ZM226.174 9.62012C224.754 11.4935 223.447 12.5668 222.641 13.0201C222.634 12.5735 222.554 12.1001 222.421 11.6001C222.827 10.4735 223.601 8.95345 224.854 7.30678C226.681 4.90012 228.321 3.80678 228.954 3.66012C229.047 4.43345 228.274 6.85345 226.174 9.62012Z"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-xl-56px fz-md-48px fz-36px font-weight-bold mb-4px"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: theme.color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.titleColor)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-xl-24px fz-md-22px fz-20px text-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.sub))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-lg-7 mb-4 fz-md-18px fz-16px max-w-[720px]"
    }, theme.content.map(function (content, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: j
      }, content);
    })), theme.links.map(function (links, k) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
        key: k,
        className: "inline-block  border-solid border-[2px] bg-[#fff] rounded-pill px-5 py-12px fz-20px trs-all ".concat(theme.hover),
        style: {
          color: theme.color,
          borderColor: theme.color
        },
        href: links.url,
        title: (0,components_I18N__WEBPACK_IMPORTED_MODULE_3__.translate)(links.label, lang)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, links.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
        className: "d-inline align-middle icon icon-arrow-right fz-16px ml-4px",
        "aria-hidden": "true"
      }));
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      src: "".concat("/fruits-travel").concat(theme.deco),
      className: "lg:w-[400px] w-[320px] absolute lg:right-[10%] md:right-[10%] lg:bottom-[-5%] md:bottom-[45%] right-[auto] bottom-[20%] -z-10 opacity-20 lg:opacity-100",
      alt: "",
      "aria-hidden": "true"
    })));
  })));
};
_s2(FruitTheme, "19RS3WgMSWl0an8//ft2jCZqyKE=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c3 = FruitTheme;
_s(FruitTheme, "19RS3WgMSWl0an8//ft2jCZqyKE=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c = FruitTheme;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitTheme));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitTheme");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitTheme");

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

/***/ "./src/views/home/index.js"
/*!*********************************!*\
  !*** ./src/views/home/index.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useMedia */ "./src/hooks/useMedia.js");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var _FruitTheme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FruitTheme */ "./src/views/home/FruitTheme.js");
/* harmony import */ var components_BlockTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/BlockTitle */ "./src/components/BlockTitle.js");
/* harmony import */ var _FruitCalendar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FruitCalendar */ "./src/views/home/FruitCalendar.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();








var Page = function Page() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
  var isLayoutMD = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 768px)');
  var isLayoutXL = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 1024px)');
  var isLayoutXXL = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 1920px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100 ".concat(isLayoutXXL && 'xl:max-h-none', " lg:max-h-[90vh] lg:min-h-[960px] h-[100vh] relative")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: isLayoutXL ? "".concat("/fruits-travel", "/images/index/banner.jpg") : "".concat("/fruits-travel", "/images/index/banner-sm.jpg"),
    alt: "",
    ratio: "16by9",
    className: "h-100",
    lazy: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "bg-gradient-to-t from-[#00000070] absolute left-0 bottom-0 w-100 h-25"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute xl:w-[680px] md:w-[640px] w-[343px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pb-md-8 z-[3]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat("/fruits-travel", "/images/index/banner-title.svg"),
    className: "w-100 h-auto bg-none drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] thumb embed-responsive-item pointer-events-none",
    alt: (0,components_I18N__WEBPACK_IMPORTED_MODULE_3__.translate)('季節採果去', lang)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fz-16px fz-md-20px pl-md-2 mt-md-n3 mt-2 leading-8"
  }, isLayoutMD ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u81FA\u7063\u7D20\u6709\u300C\u6C34\u679C\u738B\u570B\u300D\u7684\u7F8E\u8B7D\uFF0C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-weight-bold absolute top-0 left-0 -z-10 select-none",
    style: {
      WebkitTextStroke: '5px #fff'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u81FA\u7063\u7D20\u6709\u300C\u6C34\u679C\u738B\u570B\u300D\u7684\u7F8E\u8B7D\uFF0C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u6C34\u679C\u7A2E\u985E\u8C50\u5BCC\uFF0C\u4E00\u5E74\u56DB\u5B63\u7686\u53EF\u5690\u5230\u9BAE\u751C\u53EF\u53E3\u7684\u6C34\u679C\uFF0C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-weight-bold absolute top-0 left-0 -z-10 select-none",
    style: {
      WebkitTextStroke: '5px #fff'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u6C34\u679C\u7A2E\u985E\u8C50\u5BCC\uFF0C\u4E00\u5E74\u56DB\u5B63\u7686\u53EF\u5690\u5230\u9BAE\u751C\u53EF\u53E3\u7684\u6C34\u679C\uFF0C"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u8D70\u8D9F\u5BF6\u5CF6\uFF0C\u8B93\u6211\u5011\u4E00\u8D77\u4EAB\u53D7\u81FA\u7063\u6C34\u679C\u5E36\u4F86\u5E78\u798F\u5065\u5EB7\u65B0\u9BAE\u7684\u597D\u6ECB\u5473\uFF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-weight-bold absolute top-0 left-0 -z-10 select-none",
    style: {
      WebkitTextStroke: '5px #fff'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u8D70\u8D9F\u5BF6\u5CF6\uFF0C\u8B93\u6211\u5011\u4E00\u8D77\u4EAB\u53D7\u81FA\u7063\u6C34\u679C\u5E36\u4F86\u5E78\u798F\u5065\u5EB7\u65B0\u9BAE\u7684\u597D\u6ECB\u5473\uFF01")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u81FA\u7063\u7D20\u6709\u300C\u6C34\u679C\u738B\u570B\u300D\u7684\u7F8E\u8B7D\uFF0C \u6C34\u679C\u7A2E\u985E\u8C50\u5BCC\uFF0C\u4E00\u5E74\u56DB\u5B63\u7686\u53EF\u5690\u5230\u9BAE\u751C\u53EF\u53E3\u7684\u6C34\u679C\uFF0C \u8D70\u8D9F\u5BF6\u5CF6\uFF0C\u8B93\u6211\u5011\u4E00\u8D77\u4EAB\u53D7\u81FA\u7063\u6C34\u679C\u5E36\u4F86\u5E78\u798F\u5065\u5EB7\u65B0\u9BAE\u7684\u597D\u6ECB\u5473\uFF01"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "font-weight-bold absolute top-0 left-0 -z-10 select-none",
    style: {
      WebkitTextStroke: '5px #fff'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, "\u81FA\u7063\u7D20\u6709\u300C\u6C34\u679C\u738B\u570B\u300D\u7684\u7F8E\u8B7D\uFF0C \u6C34\u679C\u7A2E\u985E\u8C50\u5BCC\uFF0C\u4E00\u5E74\u56DB\u5B63\u7686\u53EF\u5690\u5230\u9BAE\u751C\u53EF\u53E3\u7684\u6C34\u679C\uFF0C \u8D70\u8D9F\u5BF6\u5CF6\uFF0C\u8B93\u6211\u5011\u4E00\u8D77\u4EAB\u53D7\u81FA\u7063\u6C34\u679C\u5E36\u4F86\u5E78\u798F\u5065\u5EB7\u65B0\u9BAE\u7684\u597D\u6ECB\u5473\uFF01"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-[-4px] left-0 w-100",
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute left-0 w-100 bottom-0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: isLayoutXL ? "".concat("/fruits-travel", "/images/index/banner-bottom.svg") : "".concat("/fruits-travel", "/images/index/banner-bottom-sm.svg"),
    className: "w-[100%] thumb-frame embed-responsive bg-none",
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat("/fruits-travel", "/images/index/banner-left.svg"),
    className: "".concat(isLayoutXXL && 'xl:max-w-none', " lg:w-[25vw] w-[35vw] absolute left-0 lg:bottom-[30%] bottom-[40%] max-w-[480px] thumb-frame embed-responsive bg-none"),
    alt: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "".concat("/fruits-travel", "/images/index/banner-right.svg"),
    className: "".concat(isLayoutXXL && 'xl:max-w-none', " w-[25vw] absolute right-0 bottom-[5%] hidden lg:block max-w-[480px] thumb-frame embed-responsive bg-none"),
    alt: ""
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitTheme__WEBPACK_IMPORTED_MODULE_5__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-8"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BlockTitle__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: "\u6C34\u679C\u7522\u5B63\u6708\u66C6",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitCalendar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "mb-8"
  })));
};
_s2(Page, "ZWqgF/Z+XogCt1JVcNa/YrEFDkU=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c3 = Page;
_s(Page, "ZWqgF/Z+XogCt1JVcNa/YrEFDkU=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"], hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX2hvbWVfaW5kZXhfanMtN2EyNWI3OWQzMTg4ZDEyMTUzNjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNIO0FBRWxDLElBQU1HLGFBQWEsR0FBRyxDQUNsQjtFQUNJQyxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUNqQyxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLEtBQUs7RUFDWkMsSUFBSSxFQUFFLFlBQVk7RUFDbEJDLE1BQU0sRUFBRSxDQUFDO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDO0FBQ2pDLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDO0FBQ3RCLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsVUFBVTtFQUNoQkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUN0QixDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDO0FBQzVDLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBTSxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFNLENBQUMsRUFDdEI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQU0sQ0FBQyxFQUN0QjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBTSxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFNLENBQUM7QUFFOUIsQ0FBQyxFQUNEO0VBQ0lKLEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUNsRSxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFVBQVU7RUFDaEJDLE1BQU0sRUFBRSxDQUNKO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBRWxCLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBTSxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDckI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDO0FBRTdCLENBQUMsRUFDRDtFQUNJSixLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsT0FBTztFQUNiQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBTSxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDckI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ3JCO0lBQUVELEVBQUUsRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUM7QUFFOUIsQ0FBQyxFQUNEO0VBQ0lKLEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxPQUFPO0VBQ2JDLE1BQU0sRUFBRSxDQUNKO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUVsQixDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLE1BQU07RUFDWkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUN2RCxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLEtBQUs7RUFDWkMsSUFBSSxFQUFFLE9BQU87RUFDYkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUN2RCxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLEtBQUs7RUFDWkMsSUFBSSxFQUFFLFFBQVE7RUFDZEMsTUFBTSxFQUFFLENBQ0o7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBRWxCLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsS0FBSztFQUNaQyxJQUFJLEVBQUUsS0FBSztFQUNYQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQyxFQUNWO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUM7QUFFbEIsQ0FBQyxFQUNEO0VBQ0lILEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxRQUFRO0VBQ2RDLE1BQU0sRUFBRSxDQUFDO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDO0FBQ2pDLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUM7QUFDakMsQ0FBQyxFQUNEO0VBQ0lILEtBQUssRUFBRSxLQUFLO0VBQ1pDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUM7QUFDNUMsQ0FBQyxFQUNEO0VBQ0lILEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxTQUFTO0VBQ2ZDLE1BQU0sRUFBRSxDQUFDO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQztBQUM1QyxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLE9BQU87RUFDYkMsTUFBTSxFQUFFLENBQ0o7SUFBRUMsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ3JCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDckI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ3JCO0lBQUVELEVBQUUsRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDdEI7SUFBRUQsRUFBRSxFQUFFLEVBQUU7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUN0QjtJQUFFRCxFQUFFLEVBQUUsRUFBRTtJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDO0FBRTlCLENBQUMsRUFDRDtFQUNJSixLQUFLLEVBQUUsS0FBSztFQUNaQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUNsQyxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBQzlDLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsS0FBSztFQUNaQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUVsQixDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFdBQVc7RUFDakJDLE1BQU0sRUFBRSxDQUFDO0lBQUVDLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUMvQyxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFdBQVc7RUFDakJDLE1BQU0sRUFBRSxDQUNKO0lBQUVDLEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDckI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsRUFBRTtJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUM7QUFFOUIsQ0FBQyxFQUNEO0VBQ0lKLEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxRQUFRO0VBQ2RDLE1BQU0sRUFBRSxDQUFDO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUM3QyxDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFNBQVM7RUFDZkMsTUFBTSxFQUFFLENBQUM7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBQzdDLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsTUFBTTtFQUNaQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUM7QUFDN0MsQ0FBQyxFQUNEO0VBQ0lILEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxZQUFZO0VBQ2xCQyxNQUFNLEVBQUUsQ0FBQztJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQUU7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUFFO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFBRTtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBQ3hELENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsUUFBUTtFQUNkQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBTSxDQUFDLEVBQ3RCO0lBQUVELEVBQUUsRUFBRSxDQUFDO0lBQUVDLElBQUksRUFBRTtFQUFLLENBQUMsRUFDckI7SUFBRUQsRUFBRSxFQUFFLENBQUM7SUFBRUMsSUFBSSxFQUFFO0VBQUssQ0FBQyxFQUNyQjtJQUFFRCxFQUFFLEVBQUUsQ0FBQztJQUFFQyxJQUFJLEVBQUU7RUFBSyxDQUFDLEVBQ3JCO0lBQUVELEVBQUUsRUFBRSxFQUFFO0lBQUVDLElBQUksRUFBRTtFQUFNLENBQUM7QUFFL0IsQ0FBQyxFQUNEO0VBQ0lKLEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxRQUFRO0VBQ2RDLE1BQU0sRUFBRSxDQUNKO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQztBQUVsQixDQUFDLEVBQ0Q7RUFDSUgsS0FBSyxFQUFFLElBQUk7RUFDWEMsSUFBSSxFQUFFLFFBQVE7RUFDZEMsTUFBTSxFQUFFLENBQ0o7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQyxFQUNWO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBRWxCLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsV0FBVztFQUNqQkMsTUFBTSxFQUFFLENBQ0o7SUFBRUMsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQyxFQUNWO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDO0FBRWxCLENBQUMsRUFDRDtFQUNJSCxLQUFLLEVBQUUsSUFBSTtFQUNYQyxJQUFJLEVBQUUsU0FBUztFQUNmQyxNQUFNLEVBQUUsQ0FDSjtJQUFFQyxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEsRUFBRSxFQUFFO0VBQUcsQ0FBQyxFQUNWO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUM7QUFFbEIsQ0FBQyxFQUNEO0VBQ0lILEtBQUssRUFBRSxJQUFJO0VBQ1hDLElBQUksRUFBRSxPQUFPO0VBQ2JDLE1BQU0sRUFBRSxDQUNKO0lBQUVDLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFFLENBQUMsRUFDVDtJQUFFQSxFQUFFLEVBQUU7RUFBRSxDQUFDLEVBQ1Q7SUFBRUEsRUFBRSxFQUFFO0VBQUUsQ0FBQyxFQUNUO0lBQUVBLEVBQUUsRUFBRTtFQUFHLENBQUMsRUFDVjtJQUFFQSxFQUFFLEVBQUU7RUFBRyxDQUFDLEVBQ1Y7SUFBRUEs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LElBQUF4QyxFQUFBLEVBQUFDLEdBQUE7QUFBQUUsc0NBQUEsQ0FBQUgsRUFBQTtBQUFBRyxzQ0FBQSxDQUFBRixHQUFBO0FBQUEsSUFBQUYsR0FBQTtBQUFBSSxzQ0FBQSxDQUFBSixHQUFBLFUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3MvaG9tZS9GcnVpdENhbGVuZGFyLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9ob21lL0ZydWl0VGhlbWUuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL2hvbWUvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuXG5jb25zdCBmcnVpdENhbGVuZGVyID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmnofmnbcnLFxuICAgICAgICBpY29uOiAnbG9xdWF0JyxcbiAgICAgICAgbW9udGhzOiBbeyBpZDogMyB9LCB7IGlkOiA0IH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5ZiJ5a+25p6cJyxcbiAgICAgICAgaWNvbjogJ2phYm90aWNhYmEnLFxuICAgICAgICBtb250aHM6IFt7IGlkOiAzIH0sIHsgaWQ6IDQgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmooXlrZAnLFxuICAgICAgICBpY29uOiAncGx1bScsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDQgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmoZHokZonLFxuICAgICAgICBpY29uOiAnbXVsYmVycnknLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA0IH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5p2O5a2QJyxcbiAgICAgICAgaWNvbjogJ3BsdW1sZWUnLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA0IH0sIHsgaWQ6IDUgfSwgeyBpZDogNiB9XVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+ahg+WtkCcsXG4gICAgICAgIGljb246ICdwZWFjaCcsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogNCwgdHlwZTogJ+eUnOicnOahgycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDUsIHR5cGU6ICfnlJzonJzmoYMnIH0sXG4gICAgICAgICAgICB7IGlkOiA2LCB0eXBlOiAn5rC06Jyc5qGDJyB9LFxuICAgICAgICAgICAgeyBpZDogNywgdHlwZTogJ+awtOicnOahgycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDgsIHR5cGU6ICfmsLTonJzmoYMnIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+ilv+eTnCcsXG4gICAgICAgIGljb246ICd3YXRlcm1lbG9uJyxcbiAgICAgICAgbW9udGhzOiBbeyBpZDogNCB9LCB7IGlkOiA1IH0sIHsgaWQ6IDYgfSwgeyBpZDogNyB9LCB7IGlkOiA4IH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6JOu6ZynJyxcbiAgICAgICAgaWNvbjogJ3dheEFwcGxlJyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7IGlkOiAxIH0sXG4gICAgICAgICAgICB7IGlkOiAyIH0sXG4gICAgICAgICAgICB7IGlkOiAzIH0sXG4gICAgICAgICAgICB7IGlkOiA1IH0sXG4gICAgICAgICAgICB7IGlkOiA2IH0sXG4gICAgICAgICAgICB7IGlkOiA3IH0sXG4gICAgICAgICAgICB7IGlkOiAxMSB9LFxuICAgICAgICAgICAgeyBpZDogMTIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6I2U5p6dJyxcbiAgICAgICAgaWNvbjogJ2xpdGNoaScsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogNiwgdHlwZTogJ+eOieiNt+WMhScgfSxcbiAgICAgICAgICAgIHsgaWQ6IDcsIHR5cGU6ICfpu5HokYknIH0sXG4gICAgICAgICAgICB7IGlkOiA4LCB0eXBlOiAn6buR6JGJJyB9LFxuICAgICAgICAgICAgeyBpZDogOSwgdHlwZTogJ+ezr+exsycgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6IqS5p6cJyxcbiAgICAgICAgaWNvbjogJ21hbmdvJyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7IGlkOiA2LCB0eXBlOiAn5Zyf6IqS5p6cJyB9LFxuICAgICAgICAgICAgeyBpZDogNywgdHlwZTogJ+aEm+aWhycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDgsIHR5cGU6ICfmhJvmlocnIH0sXG4gICAgICAgICAgICB7IGlkOiA5LCB0eXBlOiAn6YeR54WMJyB9LFxuICAgICAgICAgICAgeyBpZDogMTAsIHR5cGU6ICflh7HnibknIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+iRoeiQhCcsXG4gICAgICAgIGljb246ICdncmFwZScsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogNiB9LFxuICAgICAgICAgICAgeyBpZDogNyB9LFxuICAgICAgICAgICAgeyBpZDogOCB9LFxuICAgICAgICAgICAgeyBpZDogMTAgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExIH0sXG4gICAgICAgICAgICB7IGlkOiAxMiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmoqjlrZAnLFxuICAgICAgICBpY29uOiAncGVhcicsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDYgfSwgeyBpZDogNyB9LCB7IGlkOiA4IH0sIHsgaWQ6IDkgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfmtIvpppnnk5wnLFxuICAgICAgICBpY29uOiAnbWVsb24nLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA2IH0sIHsgaWQ6IDcgfSwgeyBpZDogOCB9LCB7IGlkOiA5IH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn57SF6b6N5p6cJyxcbiAgICAgICAgaWNvbjogJ2RyYWdvbicsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogNiB9LFxuICAgICAgICAgICAgeyBpZDogNyB9LFxuICAgICAgICAgICAgeyBpZDogOCB9LFxuICAgICAgICAgICAgeyBpZDogOSB9LFxuICAgICAgICAgICAgeyBpZDogMTAgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+eEoeiKseaenCcsXG4gICAgICAgIGljb246ICdmaWcnLFxuICAgICAgICBtb250aHM6IFtcbiAgICAgICAgICAgIHsgaWQ6IDEgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDYgfSxcbiAgICAgICAgICAgIHsgaWQ6IDcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDggfSxcbiAgICAgICAgICAgIHsgaWQ6IDkgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEwIH0sXG4gICAgICAgICAgICB7IGlkOiAxMSB9LFxuICAgICAgICAgICAgeyBpZDogMTIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6b6N55y8JyxcbiAgICAgICAgaWNvbjogJ2xvbmdhbicsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDcgfSwgeyBpZDogOCB9XVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+iXjeiOkycsXG4gICAgICAgIGljb246ICdibHVlYmVycnknLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA3IH0sIHsgaWQ6IDggfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfnmb7pppnmnpwnLFxuICAgICAgICBpY29uOiAncGFzc2lmbG9yYScsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDcgfSwgeyBpZDogOCB9LCB7IGlkOiA5IH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6YWq5qKoJyxcbiAgICAgICAgaWNvbjogJ2F2b2NhZG8nLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA3IH0sIHsgaWQ6IDggfSwgeyBpZDogOSB9XVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+mHi+i/picsXG4gICAgICAgIGljb246ICdzYWt5YScsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogMSwgdHlwZTogJ+mzs+aiqCcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHR5cGU6ICfps7PmoqgnIH0sXG4gICAgICAgICAgICB7IGlkOiAzLCB0eXBlOiAn6bOz5qKoJyB9LFxuICAgICAgICAgICAgeyBpZDogOCwgdHlwZTogJ+Wkp+ebricgfSxcbiAgICAgICAgICAgIHsgaWQ6IDksIHR5cGU6ICflpKfnm64nIH0sXG4gICAgICAgICAgICB7IGlkOiAxMCwgdHlwZTogJ+Wkp+ebricgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExLCB0eXBlOiAn5aSn55uuJyB9LFxuICAgICAgICAgICAgeyBpZDogMTIsIHR5cGU6ICflpKfnm64nIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aWh+aXpuafmicsXG4gICAgICAgIGljb246ICdwb21lbG8nLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA5IH0sIHsgaWQ6IDEwIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5rSb56WeJyxcbiAgICAgICAgaWNvbjogJ3Jvc2VsbGUnLFxuICAgICAgICBtb250aHM6IFt7IGlkOiA5IH0sIHsgaWQ6IDEwIH0sIHsgaWQ6IDExIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5aWH55Ww5p6cJyxcbiAgICAgICAgaWNvbjogJ2tpd2knLFxuICAgICAgICBtb250aHM6IFtcbiAgICAgICAgICAgIHsgaWQ6IDEgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDMgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQgfSxcbiAgICAgICAgICAgIHsgaWQ6IDkgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEwIH0sXG4gICAgICAgICAgICB7IGlkOiAxMSB9LFxuICAgICAgICAgICAgeyBpZDogMTIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5p+/5a2QJyxcbiAgICAgICAgaWNvbjogJ3BlcnNpbW1vbicsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDEwIH0sIHsgaWQ6IDExIH0sIHsgaWQ6IDEyIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5p+R5qmYJyxcbiAgICAgICAgaWNvbjogJ3RhbmdlcmluZScsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogMSwgdHlwZTogJ+W5tOafkScgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIHR5cGU6ICflubTmn5EnIH0sXG4gICAgICAgICAgICB7IGlkOiAxMSwgdHlwZTogJ+ahtuafkScgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEyLCB0eXBlOiAn5qG25p+RJyB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfonJzmo5cnLFxuICAgICAgICBpY29uOiAnanVqdWJlJyxcbiAgICAgICAgbW9udGhzOiBbeyBpZDogMSB9LCB7IGlkOiAyIH0sIHsgaWQ6IDEyIH1dXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5p+z5LiBJyxcbiAgICAgICAgaWNvbjogJ29yYW5nZXMnLFxuICAgICAgICBtb250aHM6IFt7IGlkOiAxIH0sIHsgaWQ6IDIgfSwgeyBpZDogMTIgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfph5Hmo5cnLFxuICAgICAgICBpY29uOiAnZGF0ZScsXG4gICAgICAgIG1vbnRoczogW3sgaWQ6IDEgfSwgeyBpZDogMiB9LCB7IGlkOiAxMiB9XVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+iNieiOkycsXG4gICAgICAgIGljb246ICdzdHJhd2JlcnJ5JyxcbiAgICAgICAgbW9udGhzOiBbeyBpZDogMSB9LCB7IGlkOiAyIH0sIHsgaWQ6IDMgfSwgeyBpZDogMTIgfV1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfnlarojIQnLFxuICAgICAgICBpY29uOiAndG9tYXRvJyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7IGlkOiAxLCB0eXBlOiAn54mb55Wq6IyEJyB9LFxuICAgICAgICAgICAgeyBpZDogMiwgdHlwZTogJ+iBluWlsycgfSxcbiAgICAgICAgICAgIHsgaWQ6IDMsIHR5cGU6ICfnjonlpbMnIH0sXG4gICAgICAgICAgICB7IGlkOiA0LCB0eXBlOiAn6buR5p+/JyB9LFxuICAgICAgICAgICAgeyBpZDogMTIsIHR5cGU6ICfmoYPlpKrpg44nIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+iKreaogicsXG4gICAgICAgIGljb246ICdiYWxsZXQnLFxuICAgICAgICBtb250aHM6IFtcbiAgICAgICAgICAgIHsgaWQ6IDEgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDMgfSxcbiAgICAgICAgICAgIHsgaWQ6IDQgfSxcbiAgICAgICAgICAgIHsgaWQ6IDUgfSxcbiAgICAgICAgICAgIHsgaWQ6IDYgfSxcbiAgICAgICAgICAgIHsgaWQ6IDcgfSxcbiAgICAgICAgICAgIHsgaWQ6IDggfSxcbiAgICAgICAgICAgIHsgaWQ6IDkgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEwIH0sXG4gICAgICAgICAgICB7IGlkOiAxMSB9LFxuICAgICAgICAgICAgeyBpZDogMTIgfVxuICAgICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn5pyo55OcJyxcbiAgICAgICAgaWNvbjogJ3BhcGF5YScsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogMSB9LFxuICAgICAgICAgICAgeyBpZDogMiB9LFxuICAgICAgICAgICAgeyBpZDogMyB9LFxuICAgICAgICAgICAgeyBpZDogNCB9LFxuICAgICAgICAgICAgeyBpZDogNSB9LFxuICAgICAgICAgICAgeyBpZDogNiB9LFxuICAgICAgICAgICAgeyBpZDogNyB9LFxuICAgICAgICAgICAgeyBpZDogOCB9LFxuICAgICAgICAgICAgeyBpZDogOSB9LFxuICAgICAgICAgICAgeyBpZDogMTAgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExIH0sXG4gICAgICAgICAgICB7IGlkOiAxMiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfps7PmoqgnLFxuICAgICAgICBpY29uOiAncGluZWFwcGxlJyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7IGlkOiAxIH0sXG4gICAgICAgICAgICB7IGlkOiAyIH0sXG4gICAgICAgICAgICB7IGlkOiAzIH0sXG4gICAgICAgICAgICB7IGlkOiA0IH0sXG4gICAgICAgICAgICB7IGlkOiA1IH0sXG4gICAgICAgICAgICB7IGlkOiA2IH0sXG4gICAgICAgICAgICB7IGlkOiA3IH0sXG4gICAgICAgICAgICB7IGlkOiA4IH0sXG4gICAgICAgICAgICB7IGlkOiA5IH0sXG4gICAgICAgICAgICB7IGlkOiAxMCB9LFxuICAgICAgICAgICAgeyBpZDogMTEgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEyIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+mHkeahlCcsXG4gICAgICAgIGljb246ICdrdW1xdWF0JyxcbiAgICAgICAgbW9udGhzOiBbXG4gICAgICAgICAgICB7IGlkOiAxIH0sXG4gICAgICAgICAgICB7IGlkOiAyIH0sXG4gICAgICAgICAgICB7IGlkOiAzIH0sXG4gICAgICAgICAgICB7IGlkOiA0IH0sXG4gICAgICAgICAgICB7IGlkOiA1IH0sXG4gICAgICAgICAgICB7IGlkOiA2IH0sXG4gICAgICAgICAgICB7IGlkOiA3IH0sXG4gICAgICAgICAgICB7IGlkOiA4IH0sXG4gICAgICAgICAgICB7IGlkOiA5IH0sXG4gICAgICAgICAgICB7IGlkOiAxMCB9LFxuICAgICAgICAgICAgeyBpZDogMTEgfSxcbiAgICAgICAgICAgIHsgaWQ6IDEyIH1cbiAgICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+aquOaqrCcsXG4gICAgICAgIGljb246ICdsZW1vbicsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogMSB9LFxuICAgICAgICAgICAgeyBpZDogMiB9LFxuICAgICAgICAgICAgeyBpZDogMyB9LFxuICAgICAgICAgICAgeyBpZDogNCB9LFxuICAgICAgICAgICAgeyBpZDogNSB9LFxuICAgICAgICAgICAgeyBpZDogNiB9LFxuICAgICAgICAgICAgeyBpZDogNyB9LFxuICAgICAgICAgICAgeyBpZDogOCB9LFxuICAgICAgICAgICAgeyBpZDogOSB9LFxuICAgICAgICAgICAgeyBpZDogMTAgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExIH0sXG4gICAgICAgICAgICB7IGlkOiAxMiB9XG4gICAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfpu4Pph5HmnpwnLFxuICAgICAgICBpY29uOiAnY2FpbWl0bycsXG4gICAgICAgIG1vbnRoczogW1xuICAgICAgICAgICAgeyBpZDogMSB9LFxuICAgICAgICAgICAgeyBpZDogMiB9LFxuICAgICAgICAgICAgeyBpZDogMyB9LFxuICAgICAgICAgICAgeyBpZDogNCB9LFxuICAgICAgICAgICAgeyBpZDogNSB9LFxuICAgICAgICAgICAgeyBpZDogNiB9LFxuICAgICAgICAgICAgeyBpZDogNyB9LFxuICAgICAgICAgICAgeyBpZDogOCB9LFxuICAgICAgICAgICAgeyBpZDogOSB9LFxuICAgICAgICAgICAgeyBpZDogMTAgfSxcbiAgICAgICAgICAgIHsgaWQ6IDExIH0sXG4gICAgICAgICAgICB7IGlkOiAxMiB9XG4gICAgICAgIF1cbiAgICB9XG5dXG5cbmNvbnN0IEZydWl0Q2FsZW5kYXIgPSAoeyBjbGFzc05hbWUgPSAnJyB9KSA9PiB7XG4gICAgY29uc3QgaXNMYXlvdXRYTCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YG1heC13LVsxMDI0cHhdIG14LWF1dG8gbWQ6cHgtWzI0cHhdIHB4LVsxNnB4XSBsZzpweC1bMF0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInctMTAwIGJvcmRlci1jb2xsYXBzZTpjb2xsYXBzZVwiPlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImZ6LTE0cHggZnoteGwtMThweCBsZzp3LVsxNjBweF0gbWQ6dy1bMTIwcHhdIHctWzEwMHB4XSBsZzpweS1bOHB4XSBweS00cHggYm9yZGVyIGJvcmRlci1bI0ZCQ0U0Q10gYmctWyNGRkY2REVdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+55W25a2jPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtBcnJheS5mcm9tKHsgbGVuZ3RoOiAxMiB9KS5tYXAoKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmei0xNHB4IGZ6LXhsLTE4cHggbGc6dy1bNzJweF0gbWQ6dy1bNDJweF0gdy1bMjJweF0gYm9yZGVyIGJvcmRlci1bI0ZCQ0U0Q10gYmctWyNGRkY2REVdIHRleHQtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2kgKyAxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzTGF5b3V0WEwgPyAn5pyIJyA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7ZnJ1aXRDYWxlbmRlci5tYXAoKGZydWl0LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2p9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaiAlIDIgPT09IDAgPyAnJyA6ICdiZy1bI0YwRjBGMF0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBob3ZlcjpiZy1bI0ZGRjZERV1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJmei0xNHB4IGZ6LWxnLTE2cHggcHktWzZweF0gbGc6cHktWzhweF0gcHgtMiBib3JkZXIgYm9yZGVyLVsjRjBGMEYwXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57ZnJ1aXQudGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6YmxvY2sgaGlkZGVuIG1sLTRweCB3LVsyOHB4XSBoLVsyOHB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9pY29uLWZydWl0LyR7ZnJ1aXQuaWNvbn0ucG5nKWAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IDEyIH0pLm1hcCgoXywgbW9udGhJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb250aERhdGEgPSBmcnVpdC5tb250aHMuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChtb250aCkgPT4gbW9udGguaWQgPT09IG1vbnRoSW5kZXggKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bW9udGhJbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsZzp0ZXh0LVswLjgxMjVyZW1dIGxnOmxlYWRpbmctWzEuNXJlbV0gdGV4dC1bMC42cmVtXSBib3JkZXIgYm9yZGVyLVsjRjBGMEYwXSB0ZXh0LWNlbnRlciBhbGlnbi1taWRkbGVgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoRGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2JnLVsjRkJDRTRDXSBvdXRsaW5lIG91dGxpbmUtMSBvdXRsaW5lLVsjRkJDRTRDXSBsZzptaW4taC1bMS41cmVtXSBtaW4taC1bMC44NXJlbV0nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0xheW91dFhMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb250aERhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBtb250aERhdGEudHlwZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGcnVpdENhbGVuZGFyKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgdXNlTWVkaWEgZnJvbSAnaG9va3MvdXNlTWVkaWEnXG5pbXBvcnQgSTE4TiwgeyB0cmFuc2xhdGUgfSBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgVGh1bWJGcmFtZSBmcm9tICdjb21wb25lbnRzL1RodW1iRnJhbWUnXG5cbmNvbnN0IHRoZW1lID0gW1xuICAgIHtcbiAgICAgICAgdGl0bGVDb2xvcjogJ+Wbm+WtoycsXG4gICAgICAgIHRpdGxlOiAn5rC05p6cJyxcbiAgICAgICAgc3ViOiAn5ZOB5ZqQ5pyA6a6u576O55qE5Y6f5ZGzJyxcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgJ+iHuueBo+awtOaenOS4u+imgeeCuueGseW4tuOAgeWJr+eGseW4tuawo+WAmeWei+awtOaenO+8jOWcsOW9ouS4iuWboOeCuuacieWxseWdoeWcsOiIh+mrmOWxse+8jOS5n+iDveagveeorua6q+W4tuawtOaenOOAguaIkeWAkeS+neWto+evgOWIhuaIkOaYpeOAgeWkj+OAgeeni+OAgeWGrOiIh+WFqOW5tOeUouacn++8jOatoei/juWkp+WutuS+huiqjeitmOiHuueBo+eahOawtOaenO+8gSdcbiAgICAgICAgXSxcbiAgICAgICAgaW1nOiAnL2ltYWdlcy9pbmRleC9pbmRleC0xLmpwZycsXG4gICAgICAgIGxpbmtzOiBbeyBsYWJlbDogJ+S6huino+abtOWkmicsIHVybDogJy9zZWFzb24tZnJ1aXRzJyB9XSxcbiAgICAgICAgZGVjbzogJy9pbWFnZXMvaW5kZXgvZGVjby0xLnBuZycsXG4gICAgICAgIGRlY29XOiA0MDAsXG4gICAgICAgIGNvbG9yOiAnI0QxMjcyNycsXG4gICAgICAgIGNvbG9yTGlnaHQ6ICcjRkY4QThBJyxcbiAgICAgICAgaG92ZXI6ICdob3ZlcjpiZy1bI0ZGRUVFRl0nXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlQ29sb3I6ICfmjqHmnpwnLFxuICAgICAgICB0aXRsZTogJ+S9leiZleWOuycsXG4gICAgICAgIHN1YjogJ+i1sOWQp++8geS+hui2n+awtOaenOS5i+aXhScsXG4gICAgICAgIGNvbnRlbnQ6IFtcbiAgICAgICAgICAgICfoh7rngaPmk4HmnInlvpflpKnnjajljprnmoTlnLDnkIbkvY3nva7lj4rmsKPlgJnmop3ku7bvvIzpoIbmh4nkuozljYHlm5vnr4DmsKPnm5vnlKLnmoTlkITlvI/msLTmnpzvvIzml4XkurrlgJHkuI3lg4Xlj6/ku6Xlk4HlmJfnlbblraPprq7mjqHmsLTmnpzvvIzpgoTlj6/ku6Xpq5TpqZfmjqHmnpznmoTmqILotqPvvIzorpPmiJHlgJHkuIDlkIzmi5zoqKrlhajoh7rlkITlnLDmnpzlnJLvvIEnXG4gICAgICAgIF0sXG4gICAgICAgIGltZzogJy9pbWFnZXMvaW5kZXgvaW5kZXgtMi5qcGcnLFxuICAgICAgICBsaW5rczogW3sgbGFiZWw6ICfmjqHmnpzotqMnLCB1cmw6ICcvcGljaycgfV0sXG4gICAgICAgIGRlY286ICcvaW1hZ2VzL2luZGV4L2RlY28tMi5wbmcnLFxuICAgICAgICBkZWNvVzogNDAwLFxuICAgICAgICBjb2xvcjogJyMyRDczMTYnLFxuICAgICAgICBjb2xvckxpZ2h0OiAnIzgyQkU2NicsXG4gICAgICAgIGhvdmVyOiAnaG92ZXI6YmctWyNFNEY0RERdJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZUNvbG9yOiAn5p6c5qi5JyxcbiAgICAgICAgdGl0bGU6ICfoqo3ppIonLFxuICAgICAgICBzdWI6ICflhbHlkIzliIbkuqvmjqHmlLbnmoTmqILotqMnLFxuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAn6YCP6YGO5p6c5qi56KqN6aSK5LqG6Kej6L6y5L2c54mp5qC95Z+555qE6YGO56iL77yM5Lq66IiH5p6c5qi55LmL6ZaT5LiN5Y+q5piv6LK36LOj6Zec5L+C77yM6JeJ55Sx5a+m6Zqb5Y+D6IiH6L6y5Y+L5Zyo55Sw6ZaT5L2c5qWt44CB566h55CG6IiH5o6h5pS255qE6L6b5Yuk77yM6K6T5pu05aSa5Lq66auU5pyD5LiA6aGG5rC05p6c5b6e54Sh5Yiw5pyJ55qE5oiQ6ZW35pWF5LqL44CCJ1xuICAgICAgICBdLFxuICAgICAgICBpbWc6ICcvaW1hZ2VzL2luZGV4L2luZGV4LTMuanBnJyxcbiAgICAgICAgbGlua3M6IFt7IGxhYmVsOiAn5LqG6Kej5pu05aSaJywgdXJsOiAnL3RyZWUnIH1dLFxuICAgICAgICBkZWNvOiAnL2ltYWdlcy9pbmRleC9kZWNvLTMucG5nJyxcbiAgICAgICAgZGVjb1c6IDMyMCxcbiAgICAgICAgY29sb3I6ICcjMTA2RkEyJyxcbiAgICAgICAgY29sb3JMaWdodDogJyM2RkJERTYnLFxuICAgICAgICBob3ZlcjogJ2hvdmVyOmJnLVsjRTdGN0ZGXSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGVDb2xvcjogJ+awtOaenCcsXG4gICAgICAgIHRpdGxlOiAn5Ly05omL56auJyxcbiAgICAgICAgc3ViOiAn5Zq06YG46Ie654Gj6L6y54m555Si5aW956auJyxcbiAgICAgICAgY29udGVudDogW1xuICAgICAgICAgICAgJ+awtOaenOWcqOasieeGn+aIkOaQtumuruaOoe+8jOOAjOWatOmBuOijvemAoOOAgeWcqOWcsOeUn+eUouOAjeWtleiCsuWHuuWvtuWztuWcqOWcsOWlvea7i+WRs++8jOiHuueBo+i+sueJueeUouazqOmHjeeUn+eUoueuoeaOp+WPiuWuieWFqOWTgeizqu+8jOWQhOeorueJueiJsueUouWTgeWkmuWFg+mBuOaTh++8jOW5tOevgOmAgeemruOAgeiHqueUqOWFqeebuOWunO+8gSdcbiAgICAgICAgXSxcbiAgICAgICAgaW1nOiAnL2ltYWdlcy9pbmRleC9pbmRleC00LmpwZycsXG4gICAgICAgIGxpbmtzOiBbeyBsYWJlbDogJ+S6huino+abtOWkmicsIHVybDogJy9zZWFzb24tZnJ1aXRzJyB9XSxcbiAgICAgICAgZGVjbzogJy9pbWFnZXMvaW5kZXgvZGVjby00LnBuZycsXG4gICAgICAgIGRlY29XOiA0MDAsXG4gICAgICAgIGNvbG9yOiAnI0JENEYwMCcsXG4gICAgICAgIGNvbG9yTGlnaHQ6ICcjRkJDRTRDJyxcbiAgICAgICAgaG92ZXI6ICdob3ZlcjpiZy1bI0ZGRjZERV0nXG4gICAgfVxuXVxuXG5jb25zdCBGcnVpdFRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSB1c2VMb2NhbGUoKVxuICAgIGNvbnN0IGlzTGF5b3V0WEwgPSB1c2VNZWRpYSgnKG1pbi13aWR0aDogMTAyNHB4KScpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04XCI+XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBweC14bC01IHB4LW1kLTMgcHgtMlwiPlxuICAgICAgICAgICAgICAgIHt0aGVtZS5tYXAoKHRoZW1lLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMyBweS14bC0xMiBweS1tZC04IHB5LTRgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGc6Y29sLVtfc3Bhbl8xXSBjb2wtW19zcGFuXzNdICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAxID8gJ2xnOm9yZGVyLVs5OTk5XScgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xheW91dFhMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9JHt0aGVtZS5pbWd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQkFTRV9QQVRIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9JHt0aGVtZS5pbWcucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1zbS5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbz17aXNMYXlvdXRYTCA/IGAyYnkzYCA6IGAzYnkyYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6cm91bmRlZC1bMzJweF0gcm91bmRlZC1bMTZweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgIGxnOmNvbC1bX3NwYW5fMl0gY29sLVtfc3Bhbl8zXSBwdC14bC0xMyBwdC1tZC04IHB0LTMgcHgtbWQtNyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItbWQtNCBtYi0yIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhlbWUuY29sb3JMaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTcuMTEzOSAxLjIzMzQ1QzE1LjIwNzMgMS40MDAxMiAxMi44NzM5IDMuNzYwMTIgMTEuMzMzOSA1LjkxMzQ1QzEwLjg2NzMgNi41NjY3OCAxMC4zNTM5IDcuMzczNDUgOS44ODA2IDguMjQ2NzhDOS40MTM5NCA3LjM3MzQ1IDguODkzOTQgNi41NjY3OCA4LjQyNzI3IDUuOTEzNDVDNi44ODA2IDMuNzYwMTIgNC41NTM5NCAxLjQwMDEyIDIuNjQ3MjcgMS4yMzM0NUMyLjAxMzk0IDEuMTgwMTIgMS40MjcyNyAxLjM3MzQ1IDEuMDEzOTQgMS43ODAxMkMtMC44NTkzOTcgMy42MTM0NSAxLjU0MDYgOC4xNDAxMiAzLjI0NzI3IDEwLjUyMDFDNC43OTM5NCAxMi42NzM0IDcuMTIwNiAxNS4wMzM0IDkuMDI3MjcgMTUuMjAwMUM5LjEwMDYgMTUuMjAwMSA5LjE2NzI3IDE1LjIwNjggOS4yNDA2IDE1LjIwNjhDOS40NjcyNyAxNS4yMDY4IDkuNjgwNiAxNS4xNjY4IDkuODgwNiAxNS4xMDAxQzEwLjA4MDYgMTUuMTYwMSAxMC4zMDA2IDE1LjIwNjggMTAuNTIwNiAxNS4yMDY4QzEwLjU4NzMgMTUuMjA2OCAxMC42NjA2IDE1LjIwNjggMTAuNzMzOSAxNS4yMDAxQzEyLjY0MDYgMTUuMDMzNCAxNC45NjczIDEyLjY3MzQgMTYuNTEzOSAxMC41MjAxQzE4LjIyMDYgOC4xMzM0NSAyMC42MjA2IDMuNjEzNDUgMTguNzQ3MyAxLjc4MDEyQzE4LjMyNzMgMS4zNjY3OCAxNy43NDA2IDEuMTgwMTIgMTcuMTA3MyAxLjIzMzQ1SDE3LjExMzlaTTUuMDY3MjcgOS4yMjAxMkMzLjEwMDYgNi40NzM0NSAyLjQ0MDYgNC4xMDY3OCAyLjU1Mzk0IDMuNDczNDVDMy4xNjcyNyAzLjU5MzQ1IDQuODIwNiA0LjcxMzQ1IDYuNjEzOTQgNy4yMjAxMkM3LjY0NzI3IDguNjY2NzggOC4zMTM5NCA5Ljk5MzQ1IDguNzAwNiAxMS4wMjY4QzguNTMzOTQgMTEuNTkzNSA4LjQ0MDYgMTIuMTQwMSA4LjQyNzI3IDEyLjY0NjhDNy42MjA2IDEyLjE0NjggNi4zODA2IDExLjA2MDEgNS4wNjcyNyA5LjIyMDEyWk0xNC43MDA2IDkuMjIwMTJDMTMuMzgwNiAxMS4wNjAxIDEyLjE0NzMgMTIuMTQ2OCAxMS4zNDA2IDEyLjY0NjhDMTEuMzI3MyAxMi4xNDAxIDExLjIyNzMgMTEuNjAwMSAxMS4wNjczIDExLjA0MDFDMTEuNDUzOSA5Ljk5MzQ1IDEyLjExMzkgOC42NjY3OCAxMy4xNTM5IDcuMjIwMTJDMTQuOTI3MyA0Ljc0Njc4IDE2LjU2MDYgMy42MjAxMiAxNy4xOTM5IDMuNDgwMTJDMTcuMzA3MyA0LjIxMzQ1IDE2LjYzMzkgNi41MzM0NSAxNC43MDczIDkuMjI2NzhMMTQuNzAwNiA5LjIyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYzLjQ3MzkgMC42NzM0NTFDNjEuNTg3MyAwLjk5MzQ1MSA1OS40NTM5IDMuNTMzNDUgNTguMDg3MyA1LjgwMDEyQzU3LjY3MzkgNi40ODY3OCA1Ny4yMjczIDcuMzQwMTIgNTYuODI3MyA4LjI0MDEyQzU2LjI5MzkgNy40MDY3OCA1NS43MTM5IDYuNjQwMTIgNTUuMTkzOSA2LjAyNjc4QzUzLjQ4MDYgNC4wMDAxMiA1MC45NzM5IDEuODMzNDUgNDkuMDYwNiAxLjgyNjc4SDQ5LjA0NzNDNDguNDEzOSAxLjgyNjc4IDQ3Ljg1MzkgMi4wNjY3OCA0Ny40NzM5IDIuNTA2NzhDNDUuNzYwNiA0LjQ4Njc4IDQ4LjUwNzMgOC44MDAxMiA1MC40MDA2IDExLjA0MDFDNTIuMTEzOSAxMy4wNjY4IDU0LjYyNzMgMTUuMjMzNSA1Ni41NDA2IDE1LjI0MDFINTYuNTUzOUM1Ni44NjczIDE1LjI0MDEgNTcuMTYwNiAxNS4xODAxIDU3LjQyNzMgMTUuMDY2OEM1Ny41NjczIDE1LjA5MzUgNTcuNzAwNiAxNS4xMzM1IDU3Ljg0NzMgMTUuMTMzNUM1Ny45NzM5IDE1LjEzMzUgNTguMTA3MyAxNS4xMjAxIDU4LjI0MDYgMTUuMTAwMUM2MC4xMjczIDE0Ljc4MDEgNjIuMjYwNiAxMi4yNDAxIDYzLjYyNzMgOS45NzM0NUM2NS4xNDA2IDcuNDYwMTIgNjcuMTY3MyAyLjc2MDEyIDY1LjE1MzkgMS4wODAxMkM2NC43MDczIDAuNzA2Nzg1IDY0LjExMzkgMC41NTM0NTEgNjMuNDgwNiAwLjY2MDExOEw2My40NzM5IDAuNjczNDUxWk01Mi4xMDA2IDkuNjAwMTJDNDkuOTIwNiA3LjAyMDEyIDQ5LjA3MzkgNC43MTM0NSA0OS4xNDA2IDQuMDY2NzhDNDkuNzYwNiA0LjEzMzQ1IDUxLjQ5MzkgNS4xMjAxMiA1My40ODczIDcuNDgwMTJDNTQuNjMzOSA4Ljg0MDEyIDU1LjQwNzMgMTAuMTA2OCA1NS44NzM5IDExLjExMzVDNTUuNzUzOSAxMS42ODY4IDU1LjcwMDYgMTIuMjQwMSA1NS43MjczIDEyLjc0NjhDNTQuODgwNiAxMi4zMTM1IDUzLjU2MDYgMTEuMzI2OCA1Mi4xMDA2IDkuNjAwMTJaTTYxLjcwNzMgOC44MjY3OEM2MC41NDA2IDEwLjc2NjggNTkuMzkzOSAxMS45NDY4IDU4LjYyNzMgMTIuNTEzNUM1OC41NzM5IDEyLjAxMzUgNTguNDMzOSAxMS40ODAxIDU4LjIyNzMgMTAuOTMzNUM1OC41MjczIDkuODYwMTIgNTkuMDgwNiA4LjQ4MDEyIDYwLjAwMDYgNi45NTM0NUM2MS41NzM5IDQuMzQwMTIgNjMuMTEzOSAzLjA5MzQ1IDYzLjcyNzMgMi45MDAxMkM2My45MDA2IDMuNjIwMTIgNjMuNDEzOSA1Ljk5MzQ1IDYxLjcwNzMgOC44MjY3OFpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zOS45MDczIDEuNDY2NzhDMzguMDMzOSAxLjYyNjc4IDM1Ljc0MDYgMy45NDY3OCAzNC4yMjczIDYuMDYwMTJDMzMuNzczOSA2LjY4Njc4IDMzLjI4MDYgNy40NzM0NSAzMi44MjczIDguMzEzNDVDMzIuMzczOSA3LjQ3MzQ1IDMxLjg3MzkgNi42OTM0NSAzMS40MjczIDYuMDYwMTJDMjkuOTEzOSAzLjk0Njc4IDI3LjYyMDYgMS42MjY3OCAyNS43NDczIDEuNDY2NzhDMjUuMTIwNiAxLjQxMzQ1IDI0LjU0MDYgMS42MDY3OCAyNC4xMjczIDIuMDEzNDVDMjIuMjg3MyAzLjgyMDEyIDI0LjYzMzkgOC4yNjY3OSAyNi4zMTM5IDEwLjYwNjhDMjcuODI3MyAxMi43MjAxIDMwLjEyMDYgMTUuMDQwMSAzMS45OTM5IDE1LjIwMDFDMzIuMDYwNiAxNS4yMDAxIDMyLjEzMzkgMTUuMjA2OCAzMi4yMDA2IDE1LjIwNjhDMzIuNDIwNiAxNS4yMDY4IDMyLjYzMzkgMTUuMTY2OCAzMi44MjczIDE1LjEwNjhDMzMuMDI3MyAxNS4xNjY4IDMzLjIzMzkgMTUuMjA2OCAzMy40NjA2IDE1LjIwNjhDMzMuNTI3MyAxNS4yMDY4IDMzLjYwMDYgMTUuMjA2OCAzMy42NjczIDE1LjIwMDFDMzUuNTQwNiAxNS4wNDAxIDM3LjgzMzkgMTIuNzIwMSAzOS4zNDczIDEwLjYwNjhDNDEuMDI3MyA4LjI2Njc5IDQzLjM3MzkgMy44MjAxMiA0MS41MzM5IDIuMDEzNDVDNDEuMTIwNiAxLjYwNjc4IDQwLjU1MzkgMS40MTM0NSAzOS45MTM5IDEuNDY2NzhIMzkuOTA3M1pNMjguMTIwNiA5LjMwMDEyQzI2LjIxMzkgNi42NDY3OCAyNS41NjA2IDQuMzQ2NzggMjUuNjUzOSAzLjcwNjc4QzI2LjI2MDYgMy44NDAxMiAyNy44NjczIDQuOTQ2NzggMjkuNjAwNiA3LjM2Njc4QzMwLjYxMzkgOC43NzM0NSAzMS4yNjA2IDEwLjA3MzUgMzEuNjQwNiAxMS4wOTM1QzMxLjQ4NzMgMTEuNjMzNSAzMS4zOTM5IDEyLjE0NjggMzEuMzczOSAxMi42MzM1QzMwLjU4NzMgMTIuMTQwMSAyOS4zODczIDExLjA4MDEgMjguMTEzOSA5LjMwNjc4TDI4LjEyMDYgOS4zMDAxMlpNMzcuNTI3MyA5LjMwMDEyQzM2LjI1MzkgMTEuMDczNSAzNS4wNjA2IDEyLjEzMzUgMzQuMjY3MyAxMi42MzM1QzM0LjI0NzMgMTIuMTUzNSAzNC4xNjA2IDExLjYzMzUgMzQuMDA3MyAxMS4xMDAxQzM0LjM4MDYgMTAuMDgwMSAzNS4wMzM5IDguNzgwMTIgMzYuMDQ3MyA3LjM2Njc4QzM3Ljc2MDYgNC45ODAxMiAzOS4zNDA2IDMuODgwMTIgMzkuOTY3MyAzLjcxMzQ1QzQwLjA2MDYgNC40NTM0NSAzOS4zOTM5IDYuNzA2NzggMzcuNTMzOSA5LjMwMDEySDM3LjUyNzNaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODcuNzQ3MyAxLjQwNjc4Qzg1Ljg0NzMgMS40NjAxMiA4My40MjA2IDMuNzg2NzggODEuNzgwNiA1Ljk1MzQ1QzgxLjI0MDYgNi42NjY3OCA4MC43MjczIDcuNDQwMTIgODAuMjczOSA4LjIyNjc4Qzc5Ljg3MzkgNy4zMTM0NSA3OS40MjczIDYuNDYwMTIgNzkuMDIwNiA1Ljc3MzQ1Qzc3LjYyNzMgMy40MDY3OCA3NS40NjczIDAuNzg2Nzg0IDczLjU4NzMgMC41MTM0NTFDNzIuOTUzOSAwLjQyNjc4NSA3Mi4zNjA2IDAuNTkzNDUxIDcxLjkyNzMgMS4wMDAxMkM3MC4wMzM5IDIuNzY2NzggNzIuMDkzOSA3LjU4Njc4IDczLjYxMzkgMTAuMTYwMUM3NS4wMDczIDEyLjUyNjggNzcuMTczOSAxNS4xNDY4IDc5LjA0NzMgMTUuNDIwMUM3OS4xNjA2IDE1LjQzMzQgNzkuMjY3MyAxNS40NDY4IDc5LjM3MzkgMTUuNDQ2OEM3OS41NDczIDE1LjQ0NjggNzkuNzA3MyAxNS40MjAxIDc5Ljg2NzMgMTUuMzgwMUM4MC4xMDczIDE1LjQ3MzQgODAuMzYwNiAxNS41MjY4IDgwLjYzMzkgMTUuNTI2OEM4MC42NTM5IDE1LjUyNjggODAuNjczOSAxNS41MjY4IDgwLjcwMDYgMTUuNTI2OEM4Mi42MDA2IDE1LjQ3MzUgODUuMDI3MyAxMy4xNDY4IDg2LjY2NzMgMTAuOTgwMUM4OC45ODczIDcuOTIwMTIgOTAuODIwNiAzLjgzMzQ1IDg5LjM2MDYgMi4xMDAxMkM4OC45NzM5IDEuNjQwMTIgODguNDI3MyAxLjM4Njc4IDg3Ljc1MzkgMS40MTM0NUw4Ny43NDczIDEuNDA2NzhaTTc1LjUzMzkgOS4wMjAxMkM3My43NDA2IDUuOTg2NzggNzMuMjQwNiAzLjQ2MDEyIDczLjQwNzMgMi43NjAxMkM3NC4wMjA2IDIuOTgwMTIgNzUuNTQwNiA0LjI3MzQ1IDc3LjA5MzkgNi45MTM0NUM3OC4wNDczIDguNTMzNDUgNzguNjI3MyA5Ljk5MzQ1IDc4Ljk0NzMgMTEuMTIwMUM3OC43NTM5IDExLjcwNjggNzguNjMzOSAxMi4yNzM1IDc4LjU4NzMgMTIuNzg2OEM3Ny44MjczIDEyLjIwMDEgNzYuNjkzOSAxMC45ODAxIDc1LjUzMzkgOS4wMjAxMlpNODQuODgwNiA5LjYyMDEyQzgzLjUyMDYgMTEuNDA2OCA4Mi4yNjczIDEyLjQ3MzUgODEuNDUzOSAxMi45NjAxQzgxLjQ3MzkgMTIuNDIwMSA4MS40MDczIDExLjgzMzUgODEuMjczOSAxMS4yMjAxQzgxLjcwNzMgMTAuMTQwMSA4Mi40NDA2IDguNzgwMTIgODMuNTYwNiA3LjMwNjc4Qzg1LjM4NzMgNC45MDAxMiA4Ny4wMjczIDMuODA2NzggODcuNjYwNiAzLjY2MDEyQzg3Ljc1MzkgNC40MzM0NSA4Ni45ODA2IDYuODUzNDUgODQuODgwNiA5LjYyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExMS4wMDcgMS40MDY3OEMxMDkuMTA3IDEuNDYwMTIgMTA2LjY4MSAzLjc4Njc4IDEwNS4wNDEgNS45NTM0NUMxMDQuMzgxIDYuODI2NzkgMTAzLjc2MSA3Ljc4MDEyIDEwMy4yNDEgOC43NDAxMkMxMDIuNjgxIDcuNjczNDUgMTAyLjA0MSA2LjY2Njc4IDEwMS40NzQgNS44OTM0NUM5OS44NTM5IDMuNjczNDUgOTcuNDUzOSAxLjI3MzQ1IDk1LjU1MzkgMS4xODY3OEM5NC45MjczIDEuMTY2NzggOTQuMzQ3MyAxLjM4Njc4IDkzLjk0NzMgMS44MzM0NUM5Mi4yMzM5IDMuNzczNDUgOTQuNzUzOSA4LjM3MzQ1IDk2LjUwNzMgMTAuNzg2OEM5OC4xMjczIDEzLjAwNjggMTAwLjUzNCAxNS40MDY4IDEwMi40MjcgMTUuNDkzNUMxMDIuNDY3IDE1LjQ5MzUgMTAyLjUwMSAxNS40OTM1IDEwMi41NDEgMTUuNDkzNUMxMDIuNzY3IDE1LjQ5MzUgMTAyLjk4MSAxNS40NTM1IDEwMy4xODEgMTUuMzg2OEMxMDMuNDAxIDE1LjQ2NjggMTAzLjYzNCAxNS41MTM1IDEwMy44ODcgMTUuNTEzNUMxMDMuOTA3IDE1LjUxMzUgMTAzLjkyNyAxNS41MTM1IDEwMy45NTQgMTUuNTEzNUMxMDUuODU0IDE1LjQ2MDEgMTA4LjI4MSAxMy4xMzM1IDEwOS45MjEgMTAuOTY2OEMxMTIuMjQxIDcuOTA2NzkgMTE0LjA3NCAzLjgyMDEyIDExMi42MTQgMi4wODY3OEMxMTIuMjI3IDEuNjI2NzggMTExLjcwMSAxLjM4Njc4IDExMS4wMDcgMS40MDAxMlYxLjQwNjc4Wk05OC4zMjA2IDkuNDY2NzhDOTYuMjQ3MyA2LjYyMDEyIDk1LjUwMDYgNC4xNjAxMiA5NS41OTM5IDMuNDQwMTJDOTYuMjI3MyAzLjYwMDEyIDk3Ljg2NzMgNC43NDAxMiA5OS42NjczIDcuMjEzNDVDMTAwLjkwNyA4LjkxMzQ1IDEwMS42NjEgMTAuNDYwMSAxMDIuMDU0IDExLjYwMDFDMTAxLjkyMSAxMi4wODY4IDEwMS44NDcgMTIuNTUzNSAxMDEuODI3IDEyLjk4MDFDMTAxLjAyMSAxMi41MDY4IDk5LjcyMDYgMTEuMzkzNSA5OC4zMTM5IDkuNDY2NzhIOTguMzIwNlpNMTA4LjE0MSA5LjYyMDEyQzEwNi43MjEgMTEuNDkzNSAxMDUuNDE0IDEyLjU2NjggMTA0LjYwNyAxMy4wMjAxQzEwNC42MDEgMTIuNTczNSAxMDQuNTIxIDEyLjEwMDEgMTA0LjM4NyAxMS42MDAxQzEwNC43OTQgMTAuNDczNSAxMDUuNTY3IDguOTUzNDUgMTA2LjgyMSA3LjMwNjc4QzEwOC42NDcgNC45MDAxMiAxMTAuMjg3IDMuODA2NzggMTEwLjkyMSAzLjY2MDEyQzExMS4wMTQgNC40MzM0NSAxMTAuMjQxIDYuODUzNDUgMTA4LjE0MSA5LjYyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzNS4xNDcgMS4yMzM0NUMxMzMuMjQxIDEuNDAwMTIgMTMwLjkxNCAzLjc2MDEyIDEyOS4zNjcgNS45MTM0NUMxMjguOTAxIDYuNTY2NzggMTI4LjM4NyA3LjM3MzQ1IDEyNy45MjEgOC4yNDY3OEMxMjcuNDU0IDcuMzczNDUgMTI2Ljk0MSA2LjU2Njc4IDEyNi40NzQgNS45MTM0NUMxMjQuOTI3IDMuNzYwMTIgMTIyLjYwMSAxLjQwMDEyIDEyMC42OTQgMS4yMzM0NUMxMjAuMDYxIDEuMTgwMTIgMTE5LjQ3NCAxLjM3MzQ1IDExOS4wNTQgMS43ODAxMkMxMTcuMTg3IDMuNjEzNDUgMTE5LjU4MSA4LjE0MDEyIDEyMS4yODcgMTAuNTIwMUMxMjIuODM0IDEyLjY3MzUgMTI1LjE2MSAxNS4wMzM1IDEyNy4wNjcgMTUuMjAwMUMxMjcuMTQxIDE1LjIwMDEgMTI3LjIwNyAxNS4yMDY4IDEyNy4yODEgMTUuMjA2OEMxMjcuNTA3IDE1LjIwNjggMTI3LjcyMSAxNS4xNjY4IDEyNy45MjEgMTUuMTAwMUMxMjguMTIxIDE1LjE2MDEgMTI4LjMzNCAxNS4yMDY4IDEyOC41NjEgMTUuMjA2OEMxMjguNjI3IDE1LjIwNjggMTI4LjcwMSAxNS4yMDY4IDEyOC43NzQgMTUuMjAwMUMxMzAuNjgxIDE1LjAzMzUgMTMzLjAxNCAxMi42NzM1IDEzNC41NTQgMTAuNTIwMUMxMzYuMjYxIDguMTQwMTIgMTM4LjY1NCAzLjYxMzQ1IDEzNi43ODcgMS43ODAxMkMxMzYuMzY3IDEuMzczNDUgMTM1Ljc4NyAxLjE3MzQ1IDEzNS4xNDcgMS4yMzM0NVpNMTIzLjEwMSA5LjIyMDEyQzEyMS4xMzQgNi40NzM0NSAxMjAuNDc0IDQuMTA2NzggMTIwLjU4NyAzLjQ2Njc4QzEyMS4yMDEgMy41ODY3OCAxMjIuODU0IDQuNzA2NzggMTI0LjY0NyA3LjIxMzQ1QzEyNS42ODEgOC42NjAxMiAxMjYuMzQ3IDkuOTg2NzkgMTI2LjczNCAxMS4wMjY4QzEyNi41NjcgMTEuNTkzNSAxMjYuNDc0IDEyLjE0MDEgMTI2LjQ2MSAxMi42NDY4QzEyNS42NTQgMTIuMTQ2OCAxMjQuNDE0IDExLjA2MDEgMTIzLjA5NCA5LjIyMDEySDEyMy4xMDFaTTEzMi43MzQgOS4yMjAxMkMxMzEuNDE0IDExLjA2MDEgMTMwLjE4MSAxMi4xNDY4IDEyOS4zNzQgMTIuNjQ2OEMxMjkuMzYxIDEyLjE0MDEgMTI5LjI2MSAxMS42MDAxIDEyOS4xMDEgMTEuMDQwMUMxMjkuNDg3IDkuOTkzNDUgMTMwLjE0NyA4LjY2Njc4IDEzMS4xODcgNy4yMjAxMkMxMzIuOTYxIDQuNzQ2NzggMTM0LjU5NCAzLjYyMDEyIDEzNS4yMjcgMy40ODAxMkMxMzUuMzQxIDQuMjEzNDUgMTM0LjY2NyA2LjUzMzQ1IDEzMi43NDEgOS4yMjY3OEwxMzIuNzM0IDkuMjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgxLjUxNCAwLjY3MzQ1MUMxNzkuNjI3IDAuOTkzNDUxIDE3Ny40OTQgMy41MzM0NSAxNzYuMTI3IDUuODAwMTJDMTc1LjcxNCA2LjQ4Njc4IDE3NS4yNjcgNy4zMzM0NSAxNzQuODY3IDguMjQwMTJDMTc0LjMzNCA3LjQwNjc4IDE3My43NTQgNi42NDAxMiAxNzMuMjM0IDYuMDMzNDVDMTcxLjUyMSA0LjAwNjc4IDE2OS4wMDcgMS44NDAxMiAxNjcuMDk0IDEuODI2NzhDMTY2LjQ3NCAxLjc4MDEyIDE2NS44ODcgMi4wNjY3OCAxNjUuNTA3IDIuNTA2NzhDMTYzLjc5NCA0LjQ4Njc4IDE2Ni41NDEgOC44MDAxMiAxNjguNDM0IDExLjA0MDFDMTcwLjE0NyAxMy4wNjY4IDE3Mi42NTQgMTUuMjMzNSAxNzQuNTY3IDE1LjI0NjhIMTc0LjU4MUMxNzQuODk0IDE1LjI0NjggMTc1LjE4NyAxNS4xODY4IDE3NS40NTQgMTUuMDczNUMxNzUuNTk0IDE1LjEwMDEgMTc1LjcyNyAxNS4xNDAxIDE3NS44NzQgMTUuMTQwMUMxNzYuMDAxIDE1LjE0MDEgMTc2LjEzNCAxNS4xMjY4IDE3Ni4yNjcgMTUuMTA2OEMxNzguMTU0IDE0Ljc4NjggMTgwLjI4NyAxMi4yNDY4IDE4MS42NTQgOS45ODAxMkMxODMuMTY3IDcuNDY2NzkgMTg1LjE5NCAyLjc2Njc4IDE4My4xODEgMS4wODY3OEMxODIuNzM0IDAuNzEzNDUxIDE4Mi4xMzQgMC41NjAxMTggMTgxLjUwNyAwLjY2Njc4NUwxODEuNTE0IDAuNjczNDUxWk0xNzAuMTQxIDkuNjAwMTJDMTY3Ljk2MSA3LjAyMDEyIDE2Ny4xMTQgNC43MTM0NSAxNjcuMTgxIDQuMDY2NzhDMTY3LjgwMSA0LjE0MDEyIDE2OS41MzQgNS4xMjAxMiAxNzEuNTI3IDcuNDgwMTJDMTcyLjY3NCA4LjgzMzQ1IDE3My40NDEgMTAuMTA2OCAxNzMuOTE0IDExLjExMzVDMTczLjc5NCAxMS42ODY4IDE3My43NDEgMTIuMjQwMSAxNzMuNzY3IDEyLjc0NjhDMTcyLjkyMSAxMi4zMTM1IDE3MS42MDEgMTEuMzI2OCAxNzAuMTQxIDkuNjAwMTJaTTE3OS43NDEgOC44MzM0NUMxNzguNTc0IDEwLjc3MzUgMTc3LjQyNyAxMS45NTM1IDE3Ni42NjEgMTIuNTIwMUMxNzYuNjA3IDEyLjAyMDEgMTc2LjQ2NyAxMS40ODY4IDE3Ni4yNjEgMTAuOTQwMUMxNzYuNTYxIDkuODY2NzkgMTc3LjExNCA4LjQ4Njc4IDE3OC4wMzQgNi45NjY3OEMxNzkuNjA3IDQuMzYwMTIgMTgxLjE0NyAzLjEwNjc4IDE4MS43NjEgMi45MTM0NUMxODEuOTM0IDMuNjMzNDUgMTgxLjQ0NyA2LjAwNjc5IDE3OS43NDEgOC44NDAxMlY4LjgzMzQ1WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1Ny45NDcgMS40NjY3OEMxNTYuMDc0IDEuNjI2NzggMTUzLjc4MSAzLjk0Njc4IDE1Mi4yNjcgNi4wNjAxMkMxNTEuODE0IDYuNjg2NzggMTUxLjMyMSA3LjQ3MzQ1IDE1MC44NjcgOC4zMTM0NUMxNTAuNDE0IDcuNDczNDUgMTQ5LjkxNCA2LjY4Njc4IDE0OS40NjcgNi4wNjAxMkMxNDcuOTQ3IDMuOTQ2NzggMTQ1LjY2MSAxLjYyNjc4IDE0My43ODcgMS40NjY3OEMxNDMuMTU0IDEuNDEzNDUgMTQyLjU4MSAxLjYwNjc4IDE0Mi4xNjcgMi4wMTM0NUMxNDAuMzI3IDMuODIwMTIgMTQyLjY3NCA4LjI2Njc5IDE0NC4zNTQgMTAuNjA2OEMxNDUuODY3IDEyLjcyMDEgMTQ4LjE2MSAxNS4wNDAxIDE1MC4wMzQgMTUuMjAwMUMxNTAuMTAxIDE1LjIwMDEgMTUwLjE3NCAxNS4yMDY4IDE1MC4yNDEgMTUuMjA2OEMxNTAuNDYxIDE1LjIwNjggMTUwLjY3NCAxNS4xNjY4IDE1MC44NzQgMTUuMTA2OEMxNTEuMDc0IDE1LjE2NjggMTUxLjI4MSAxNS4yMDY4IDE1MS41MDEgMTUuMjA2OEMxNTEuNTY3IDE1LjIwNjggMTUxLjY0MSAxNS4yMDY4IDE1MS43MDcgMTUuMjAwMUMxNTMuNTgxIDE1LjA0MDEgMTU1Ljg3NCAxMi43MjAxIDE1Ny4zODcgMTAuNjA2OEMxNTkuMDY3IDguMjY2NzkgMTYxLjQxNCAzLjgyMDEyIDE1OS41NzQgMi4wMTM0NUMxNTkuMTYxIDEuNjA2NzggMTU4LjU4MSAxLjQxMzQ1IDE1Ny45NTQgMS40NjY3OEgxNTcuOTQ3Wk0xNDYuMTYxIDkuMzAwMTJDMTQ0LjI1NCA2LjY0Njc4IDE0My42MDEgNC4zNDY3OCAxNDMuNzAxIDMuNzA2NzhDMTQ0LjMwNyAzLjg0MDEyIDE0NS45MTQgNC45NDY3OCAxNDcuNjQ3IDcuMzYwMTJDMTQ4LjY2MSA4Ljc3MzQ1IDE0OS4zMDcgMTAuMDczNSAxNDkuNjg3IDExLjA4NjhDMTQ5LjUzNCAxMS42MjY4IDE0OS40NDEgMTIuMTQwMSAxNDkuNDIxIDEyLjYyNjhDMTQ4LjYyNyAxMi4xMzM1IDE0Ny40MzQgMTEuMDczNSAxNDYuMTYxIDkuMzAwMTJaTTE1NS41NjcgOS4zMDAxMkMxNTQuMjk0IDExLjA3MzUgMTUzLjEwMSAxMi4xMzM1IDE1Mi4zMDcgMTIuNjMzNUMxNTIuMjg3IDEyLjE1MzUgMTUyLjIwMSAxMS42MzM1IDE1Mi4wNDcgMTEuMTAwMUMxNTIuNDIxIDEwLjA4MDEgMTUzLjA3NCA4Ljc4MDEyIDE1NC4wODcgNy4zNjY3OEMxNTUuODAxIDQuOTgwMTIgMTU3LjM4MSAzLjg4MDEyIDE1OC4wMDcgMy43MTM0NUMxNTguMTAxIDQuNDUzNDUgMTU3LjQzNCA2LjcwNjc4IDE1NS41NzQgOS4zMDAxMkgxNTUuNTY3WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIwNS43ODEgMS40MDY3OEMyMDMuODgxIDEuNDYwMTIgMjAxLjQ1NCAzLjc4Njc4IDE5OS44MTQgNS45NTM0NUMxOTkuMjc0IDYuNjY2NzggMTk4Ljc2MSA3LjQ0MDEyIDE5OC4zMDcgOC4yMjY3OEMxOTcuOTA3IDcuMzEzNDUgMTk3LjQ2NyA2LjQ2MDEyIDE5Ny4wNTQgNS43NzM0NUMxOTUuNjYxIDMuNDA2NzggMTkzLjQ5NCAwLjc4Njc4NCAxOTEuNjIxIDAuNTEzNDUxQzE5MC45ODcgMC40MjY3ODUgMTkwLjM5NCAwLjU5MzQ1MSAxODkuOTYxIDEuMDAwMTJDMTg4LjA2NyAyLjc2Njc4IDE5MC4xMjcgNy41ODY3OCAxOTEuNjQ3IDEwLjE2MDFDMTkzLjA0MSAxMi41MjY4IDE5NS4yMDEgMTUuMTQ2OCAxOTcuMDgxIDE1LjQyMDFDMTk3LjE5NCAxNS40MzM0IDE5Ny4zMDEgMTUuNDQ2OCAxOTcuNDA3IDE1LjQ0NjhDMTk3LjU4MSAxNS40NDY4IDE5Ny43NDEgMTUuNDIwMSAxOTcuOTAxIDE1LjM4MDFDMTk4LjE0MSAxNS40NzM0IDE5OC4zOTQgMTUuNTI2OCAxOTguNjY3IDE1LjUyNjhDMTk4LjY4NyAxNS41MjY4IDE5OC43MDcgMTUuNTI2OCAxOTguNzM0IDE1LjUyNjhDMjAwLjYzNCAxNS40NzM1IDIwMy4wNjEgMTMuMTQ2OCAyMDQuNzAxIDEwLjk4MDFDMjA2LjQ5NCA4LjYyMDEyIDIwOS4wNzQgNC4wODY3OCAyMDcuMzk0IDIuMTAwMTJDMjA3LjAwNyAxLjY0MDEyIDIwNi40NjEgMS40MDAxMiAyMDUuNzg3IDEuNDEzNDVMMjA1Ljc4MSAxLjQwNjc4Wk0xOTMuNTY3IDkuMDIwMTJDMTkxLjc3NCA1Ljk4Njc4IDE5MS4yNzQgMy40NjAxMiAxOTEuNDQxIDIuNzYwMTJDMTkyLjA1NCAyLjk4MDEyIDE5My41NzQgNC4yODAxMiAxOTUuMTI3IDYuOTEzNDVDMTk2LjA4MSA4LjUzMzQ1IDE5Ni42NjEgOS45OTM0NSAxOTYuOTgxIDExLjEyMDFDMTk2Ljc4NyAxMS43MDY4IDE5Ni42NjcgMTIuMjczNSAxOTYuNjIxIDEyLjc4NjhDMTk1Ljg2MSAxMi4yMDAxIDE5NC43MjcgMTAuOTg2OCAxOTMuNTY3IDkuMDI2NzhWOS4wMjAxMlpNMjAyLjkxNCA5LjYyMDEyQzIwMS41NTQgMTEuNDEzNSAyMDAuMzAxIDEyLjQ3MzUgMTk5LjQ4NyAxMi45NjAxQzE5OS41MDcgMTIuNDIwMSAxOTkuNDQxIDExLjgzMzUgMTk5LjMwNyAxMS4yMjAxQzE5OS43NDEgMTAuMTQwMSAyMDAuNDc0IDguNzgwMTIgMjAxLjU5NCA3LjMwNjc4QzIwMy40MjEgNC45MDAxMiAyMDUuMDYxIDMuODA2NzggMjA1LjY5NCAzLjY2MDEyQzIwNS43ODcgNC40MzM0NSAyMDUuMDE0IDYuODUzNDUgMjAyLjkxNCA5LjYyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI1NC44NDcgMi4wOTM0NUMyNTQuNDYxIDEuNjMzNDUgMjUzLjkwNyAxLjM5MzQ1IDI1My4yNDEgMS40MDY3OEMyNTEuMzQxIDEuNDYwMTIgMjQ4LjkxNCAzLjc4Njc4IDI0Ny4yNzQgNS45NTM0NUMyNDYuNzM0IDYuNjY2NzggMjQ2LjIyMSA3LjQ0MDEyIDI0NS43NjcgOC4yMjY3OEMyNDUuMzY3IDcuMzEzNDUgMjQ0LjkyMSA2LjQ2MDEyIDI0NC41MTQgNS43NzM0NUMyNDMuMTIxIDMuNDA2NzggMjQwLjk1NCAwLjc4Njc4NCAyMzkuMDgxIDAuNTEzNDUxQzIzOC40NDcgMC40MjAxMTggMjM3Ljg1NCAwLjU5MzQ1MSAyMzcuNDIxIDEuMDAwMTJDMjM1LjUyNyAyLjc2Njc4IDIzNy41ODcgNy41ODY3OCAyMzkuMTA3IDEwLjE2MDFDMjQwLjUwMSAxMi41MjY4IDI0Mi42NjEgMTUuMTQ2OCAyNDQuNTQxIDE1LjQyMDFDMjQ0LjY1NCAxNS40MzM1IDI0NC43NjEgMTUuNDQ2OCAyNDQuODY3IDE1LjQ0NjhDMjQ1LjA0MSAxNS40NDY4IDI0NS4yMDEgMTUuNDIwMSAyNDUuMzYxIDE1LjM4MDFDMjQ1LjYwMSAxNS40NzM1IDI0NS44NTQgMTUuNTI2OCAyNDYuMTI3IDE1LjUyNjhDMjQ2LjE0NyAxNS41MjY4IDI0Ni4xNjcgMTUuNTI2OCAyNDYuMTk0IDE1LjUyNjhDMjQ4LjA5NCAxNS40NzM1IDI1MC41MjEgMTMuMTQ2OCAyNTIuMTYxIDEwLjk4MDFDMjU0LjQ4MSA3LjkyMDEyIDI1Ni4zMTQgMy44MzM0NSAyNTQuODU0IDIuMTAwMTJMMjU0Ljg0NyAyLjA5MzQ1Wk0yNDEuMDI3IDkuMDIwMTJDMjM5LjIzNCA1Ljk4Njc4IDIzOC43MzQgMy40NjY3OCAyMzguOTAxIDIuNzYwMTJDMjM5LjUxNCAyLjk4MDEyIDI0MS4wMzQgNC4yODAxMiAyNDIuNTg3IDYuOTEzNDVDMjQzLjU0MSA4LjUzMzQ1IDI0NC4xMjEgOS45OTM0NSAyNDQuNDQxIDExLjEyMDFDMjQ0LjI0NyAxMS43MDY4IDI0NC4xMjcgMTIuMjczNSAyNDQuMDgxIDEyLjc4NjhDMjQzLjMyMSAxMi4yMDAxIDI0Mi4xODcgMTAuOTg2OCAyNDEuMDI3IDkuMDI2NzhWOS4wMjAxMlpNMjUwLjM3NCA5LjYyMDEyQzI0OS4wMTQgMTEuNDEzNSAyNDcuNzYxIDEyLjQ3MzUgMjQ2Ljk0NyAxMi45NjAxQzI0Ni45NjcgMTIuNDIwMSAyNDYuOTAxIDExLjgzMzUgMjQ2Ljc2NyAxMS4yMjAxQzI0Ny4yMDEgMTAuMTQwMSAyNDcuOTM0IDguNzgwMTIgMjQ5LjA1NCA3LjMwNjc4QzI1MC44ODEgNC45MDAxMiAyNTIuNTIxIDMuODA2NzggMjUzLjE1NCAzLjY2MDEyQzI1My4yNDcgNC40MzM0NSAyNTIuNDc0IDYuODUzNDUgMjUwLjM3NCA5LjYyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIyOS4wNDEgMS40MDY3OEMyMjcuMTQxIDEuNDYwMTIgMjI0LjcxNCAzLjc4Njc4IDIyMy4wNzQgNS45NTM0NUMyMjIuNDE0IDYuODI2NzggMjIxLjc5NCA3Ljc4MDEyIDIyMS4yNzQgOC43NDAxMkMyMjAuNzE0IDcuNjczNDUgMjIwLjA3NCA2LjY2Njc4IDIxOS41MDcgNS44OTM0NUMyMTcuODg3IDMuNjczNDUgMjE1LjQ4MSAxLjI3MzQ1IDIxMy41ODcgMS4xODY3OEMyMTIuOTQxIDEuMTYwMTIgMjEyLjM4MSAxLjM4Njc4IDIxMS45ODEgMS44MzM0NUMyMTAuMjY3IDMuNzczNDUgMjEyLjc4NyA4LjM3MzQ1IDIxNC41NDEgMTAuNzg2OEMyMTYuMTYxIDEzLjAwNjggMjE4LjU2MSAxNS40MDY4IDIyMC40NjEgMTUuNDkzNUMyMjAuNTAxIDE1LjQ5MzUgMjIwLjUzNCAxNS40OTM1IDIyMC41NzQgMTUuNDkzNUMyMjAuODAxIDE1LjQ5MzUgMjIxLjAxNCAxNS40NTM1IDIyMS4yMTQgMTUuMzg2OEMyMjEuNDM0IDE1LjQ2NjggMjIxLjY2NyAxNS41MTM1IDIyMS45MjEgMTUuNTEzNUMyMjEuOTQxIDE1LjUxMzUgMjIxLjk2MSAxNS41MTM1IDIyMS45ODcgMTUuNTEzNUMyMjMuODg3IDE1LjQ2MDEgMjI2LjMxNCAxMy4xMzM1IDIyNy45NTQgMTAuOTY2OEMyMzAuMjc0IDcuOTA2NzkgMjMyLjEwNyAzLjgyMDEyIDIzMC42NDcgMi4wODY3OEMyMzAuMjYxIDEuNjI2NzggMjI5LjcwNyAxLjM3MzQ1IDIyOS4wNDEgMS40MDAxMlYxLjQwNjc4Wk0yMTYuMzU0IDkuNDY2NzhDMjE0LjI4MSA2LjYyMDEyIDIxMy41MzQgNC4xNjAxMiAyMTMuNjI3IDMuNDQwMTJDMjE0LjI2MSAzLjYwMDEyIDIxNS45MDEgNC43NDY3OCAyMTcuNzAxIDcuMjEzNDVDMjE4Ljk0MSA4LjkxMzQ1IDIxOS42OTQgMTAuNDY2OCAyMjAuMDg3IDExLjYwMDFDMjE5Ljk1NCAxMi4wODY4IDIxOS44ODEgMTIuNTUzNSAyMTkuODYxIDEyLjk4MDFDMjE5LjA1NCAxMi41MDY4IDIxNy43NTQgMTEuMzkzNSAyMTYuMzQ3IDkuNDY2NzhIMjE2LjM1NFpNMjI2LjE3NCA5LjYyMDEyQzIyNC43NTQgMTEuNDkzNSAyMjMuNDQ3IDEyLjU2NjggMjIyLjY0MSAxMy4wMjAxQzIyMi42MzQgMTIuNTczNSAyMjIuNTU0IDEyLjEwMDEgMjIyLjQyMSAxMS42MDAxQzIyMi44MjcgMTAuNDczNSAyMjMuNjAxIDguOTUzNDUgMjI0Ljg1NCA3LjMwNjc4QzIyNi42ODEgNC45MDAxMiAyMjguMzIxIDMuODA2NzggMjI4Ljk1NCAzLjY2MDEyQzIyOS4wNDcgNC40MzM0NSAyMjguMjc0IDYuODUzNDUgMjI2LjE3NCA5LjYyMDEyWlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LXhsLTU2cHggZnotbWQtNDhweCBmei0zNnB4IGZvbnQtd2VpZ2h0LWJvbGQgbWItNHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogdGhlbWUuY29sb3IgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3RoZW1lLnRpdGxlQ29sb3J9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3RoZW1lLnRpdGxlfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnoteGwtMjRweCBmei1tZC0yMnB4IGZ6LTIwcHggdGV4dC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGhlbWUuc3VifTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi1sZy03IG1iLTQgZnotbWQtMThweCBmei0xNnB4IG1heC13LVs3MjBweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmNvbnRlbnQubWFwKChjb250ZW50LCBqKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4TiBrZXk9e2p9Pntjb250ZW50fTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoZW1lLmxpbmtzLm1hcCgobGlua3MsIGspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMnB4XSBiZy1bI2ZmZl0gcm91bmRlZC1waWxsIHB4LTUgcHktMTJweCBmei0yMHB4IHRycy1hbGwgJHt0aGVtZS5ob3Zlcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGlua3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZShsaW5rcy5sYWJlbCwgbGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPntsaW5rcy5sYWJlbH08L0kxOE4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZC1pbmxpbmUgYWxpZ24tbWlkZGxlIGljb24gaWNvbi1hcnJvdy1yaWdodCBmei0xNnB4IG1sLTRweGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfSR7dGhlbWUuZGVjb31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp3LVs0MDBweF0gdy1bMzIwcHhdIGFic29sdXRlIGxnOnJpZ2h0LVsxMCVdIG1kOnJpZ2h0LVsxMCVdIGxnOmJvdHRvbS1bLTUlXSBtZDpib3R0b20tWzQ1JV0gcmlnaHQtW2F1dG9dIGJvdHRvbS1bMjAlXSAtei0xMCBvcGFjaXR5LTIwIGxnOm9wYWNpdHktMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZydWl0VGhlbWUpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VMb2NhbGUgfSBmcm9tICdob29rcydcbmltcG9ydCB1c2VNZWRpYSBmcm9tICdob29rcy91c2VNZWRpYSdcbmltcG9ydCBJMThOLCB7IHRyYW5zbGF0ZSB9IGZyb20gJ2NvbXBvbmVudHMvSTE4TidcbmltcG9ydCBUaHVtYkZyYW1lIGZyb20gJ2NvbXBvbmVudHMvVGh1bWJGcmFtZSdcbmltcG9ydCBGcnVpdFRoZW1lIGZyb20gJy4vRnJ1aXRUaGVtZSdcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvQmxvY2tUaXRsZSdcbmltcG9ydCBGcnVpdENhbGVuZGFyIGZyb20gJy4vRnJ1aXRDYWxlbmRhcidcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBsYW5nID0gdXNlTG9jYWxlKClcbiAgICBjb25zdCBpc0xheW91dE1EID0gdXNlTWVkaWEoJyhtaW4td2lkdGg6IDc2OHB4KScpXG4gICAgY29uc3QgaXNMYXlvdXRYTCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJylcbiAgICBjb25zdCBpc0xheW91dFhYTCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiAxOTIwcHgpJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdy0xMDAgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNMYXlvdXRYWEwgJiYgJ3hsOm1heC1oLW5vbmUnXG4gICAgICAgICAgICAgICAgfSBsZzptYXgtaC1bOTB2aF0gbGc6bWluLWgtWzk2MHB4XSBoLVsxMDB2aF0gcmVsYXRpdmVgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxUaHVtYkZyYW1lXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0xheW91dFhMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9pbmRleC9iYW5uZXIuanBnYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfS9pbWFnZXMvaW5kZXgvYmFubmVyLXNtLmpwZ2BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICByYXRpbz1cIjE2Ynk5XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC0xMDBcIlxuICAgICAgICAgICAgICAgICAgICBsYXp5PXtmYWxzZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjMDAwMDAwNzBdIGFic29sdXRlIGxlZnQtMCBib3R0b20tMCB3LTEwMCBoLTI1XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB4bDp3LVs2ODBweF0gbWQ6dy1bNjQwcHhdIHctWzM0M3B4XSB0b3AtMS8yIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgLXRyYW5zbGF0ZS15LTEvMiBwYi1tZC04IHotWzNdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfS9pbWFnZXMvaW5kZXgvYmFubmVyLXRpdGxlLnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLWF1dG8gYmctbm9uZSBkcm9wLXNoYWRvdy1bMF80cHhfNnB4X3JnYmEoMCwwLDAsMC4yNSldIHRodW1iIGVtYmVkLXJlc3BvbnNpdmUtaXRlbSBwb2ludGVyLWV2ZW50cy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17dHJhbnNsYXRlKCflraPnr4DmjqHmnpzljrsnLCBsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0xNnB4IGZ6LW1kLTIwcHggcGwtbWQtMiBtdC1tZC1uMyBtdC0yIGxlYWRpbmctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge2lzTGF5b3V0TUQgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj7oh7rngaPntKDmnInjgIzmsLTmnpznjovlnIvjgI3nmoTnvo7orb3vvIw8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC16LTEwIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBXZWJraXRUZXh0U3Ryb2tlOiAnNXB4ICNmZmYnIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6Ie654Gj57Sg5pyJ44CM5rC05p6c546L5ZyL44CN55qE576O6K2977yMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmsLTmnpznqK7poZ7osZDlr4zvvIzkuIDlubTlm5vlraPnmoblj6/lmpDliLDprq7nlJzlj6/lj6PnmoTmsLTmnpzvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgLXotMTAgc2VsZWN0LW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFdlYmtpdFRleHRTdHJva2U6ICc1cHggI2ZmZicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmsLTmnpznqK7poZ7osZDlr4zvvIzkuIDlubTlm5vlraPnmoblj6/lmpDliLDprq7nlJzlj6/lj6PnmoTmsLTmnpzvvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1sOi2n+WvtuWztu+8jOiuk+aIkeWAkeS4gOi1t+S6q+WPl+iHuueBo+awtOaenOW4tuS+huW5uOemj+WBpeW6t+aWsOmurueahOWlvea7i+WRs++8gVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkIGFic29sdXRlIHRvcC0wIGxlZnQtMCAtei0xMCBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgV2Via2l0VGV4dFN0cm9rZTogJzVweCAjZmZmJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1sOi2n+WvtuWztu+8jOiuk+aIkeWAkeS4gOi1t+S6q+WPl+iHuueBo+awtOaenOW4tuS+huW5uOemj+WBpeW6t+aWsOmurueahOWlvea7i+WRs++8gVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDoh7rngaPntKDmnInjgIzmsLTmnpznjovlnIvjgI3nmoTnvo7orb3vvIxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtOaenOeorumhnuixkOWvjO+8jOS4gOW5tOWbm+Wto+eahuWPr+WakOWIsOmurueUnOWPr+WPo+eahOawtOaenO+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6LWw6Laf5a+25bO277yM6K6T5oiR5YCR5LiA6LW35Lqr5Y+X6Ie654Gj5rC05p6c5bi25L6G5bm456aP5YGl5bq35paw6a6u55qE5aW95ruL5ZGz77yBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvbnQtd2VpZ2h0LWJvbGQgYWJzb2x1dGUgdG9wLTAgbGVmdC0wIC16LTEwIHNlbGVjdC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IFdlYmtpdFRleHRTdHJva2U6ICc1cHggI2ZmZicgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiHuueBo+e0oOacieOAjOawtOaenOeOi+Wci+OAjeeahOe+juitve+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOawtOaenOeorumhnuixkOWvjO+8jOS4gOW5tOWbm+Wto+eahuWPr+WakOWIsOmurueUnOWPr+WPo+eahOawtOaenO+8jFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi1sOi2n+WvtuWztu+8jOiuk+aIkeWAkeS4gOi1t+S6q+WPl+iHuueBo+awtOaenOW4tuS+huW5uOemj+WBpeW6t+aWsOmurueahOWlvea7i+WRs++8gVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgYm90dG9tLVstNHB4XSBsZWZ0LTAgdy0xMDBgfVxuICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhYnNvbHV0ZSBsZWZ0LTAgdy0xMDAgYm90dG9tLTBgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xheW91dFhMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGAke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2luZGV4L2Jhbm5lci1ib3R0b20uc3ZnYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9pbmRleC9iYW5uZXItYm90dG9tLXNtLnN2Z2BcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMTAwJV0gdGh1bWItZnJhbWUgZW1iZWQtcmVzcG9uc2l2ZSBiZy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2luZGV4L2Jhbm5lci1sZWZ0LnN2Z2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNMYXlvdXRYWEwgJiYgJ3hsOm1heC13LW5vbmUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBsZzp3LVsyNXZ3XSB3LVszNXZ3XSBhYnNvbHV0ZSBsZWZ0LTAgbGc6Ym90dG9tLVszMCVdIGJvdHRvbS1bNDAlXSBtYXgtdy1bNDgwcHhdIHRodW1iLWZyYW1lIGVtYmVkLXJlc3BvbnNpdmUgYmctbm9uZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9L2ltYWdlcy9pbmRleC9iYW5uZXItcmlnaHQuc3ZnYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xheW91dFhYTCAmJiAneGw6bWF4LXctbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHctWzI1dnddIGFic29sdXRlIHJpZ2h0LTAgYm90dG9tLVs1JV0gaGlkZGVuIGxnOmJsb2NrIG1heC13LVs0ODBweF0gdGh1bWItZnJhbWUgZW1iZWQtcmVzcG9uc2l2ZSBiZy1ub25lYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxGcnVpdFRoZW1lIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJweS04XCI+XG4gICAgICAgICAgICAgICAgPEJsb2NrVGl0bGUgdGl0bGU9XCLmsLTmnpznlKLlraPmnIjmm4ZcIiBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cbiAgICAgICAgICAgICAgICA8RnJ1aXRDYWxlbmRhciBjbGFzc05hbWU9XCJtYi04XCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFBhZ2UpXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZWRpYSIsIkkxOE4iLCJmcnVpdENhbGVuZGVyIiwidGl0bGUiLCJpY29uIiwibW9udGhzIiwiaWQiLCJ0eXBlIiwiRnJ1aXRDYWxlbmRhciIsIl9yZWYiLCJfczIiLCJfcyIsIl9yZWYkY2xhc3NOYW1lIiwiY2xhc3NOYW1lIiwiaXNMYXlvdXRYTCIsImNyZWF0ZUVsZW1lbnQiLCJjb25jYXQiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJfIiwiaSIsImtleSIsImZydWl0IiwiaiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0IiwibW9udGhJbmRleCIsIm1vbnRoRGF0YSIsImZpbmQiLCJtb250aCIsIl9jMyIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCIsInVzZUxvY2FsZSIsInRyYW5zbGF0ZSIsIkxpbmsiLCJUaHVtYkZyYW1lIiwidGhlbWUiLCJ0aXRsZUNvbG9yIiwic3ViIiwiY29udGVudCIsImltZyIsImxpbmtzIiwibGFiZWwiLCJ1cmwiLCJkZWNvIiwiZGVjb1ciLCJjb2xvciIsImNvbG9yTGlnaHQiLCJob3ZlciIsIkZydWl0VGhlbWUiLCJsYW5nIiwic3JjIiwicHJvY2VzcyIsImVudiIsIkJBU0VfUEFUSCIsInJlcGxhY2UiLCJyYXRpbyIsImFsdCIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsImQiLCJrIiwiYm9yZGVyQ29sb3IiLCJocmVmIiwiQmxvY2tUaXRsZSIsIlBhZ2UiLCJpc0xheW91dE1EIiwiaXNMYXlvdXRYWEwiLCJGcmFnbWVudCIsImxhenkiLCJXZWJraXRUZXh0U3Ryb2tlIl0sInNvdXJjZVJvb3QiOiIifQ==