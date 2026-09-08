"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_season-fruit_index_js"],{

/***/ "./src/components/FarmCard.js"
/*!************************************!*\
  !*** ./src/components/FarmCard.js ***!
  \************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ThumbFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var _components_AutoSwitchLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AutoSwitchLink */ "./src/components/AutoSwitchLink.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var FarmCard = function FarmCard(_ref) {
  var data = _ref.data;
  var cover = data.cover,
    address = data.address,
    name = data.name,
    tel = data.tel,
    url = data.url;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_AutoSwitchLink__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "flex-grow relative rounded-[16px] md:rounded-[32px] border-solid border-[1px] border-[#f0f0f0] trs-all xl:hover:ring-[1px] xl:hover:border-[#82be66] xl:hover:ring-[#82be66] group",
    href: url,
    title: name,
    isLinkOut: true,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center absolute top-0 right-0 w-[40px] md:w-[52px] md:h-[52px] aspect-square bg-[#82be66] trs-all xl:bg-[transparent] xl:group-hover:bg-[#82be66] rounded-tr-[16px] rounded-bl-[16px]  md:rounded-tr-[30px] md:rounded-bl-[30px]",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-link-out text-[#fff] xl:text-[#c4c4c4] w-[20px] h-[20px] trs-all group-hover:text-[#fff]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:flex"
  }, !!cover > length && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ThumbFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "flex-none md:my-[24px] md:ml-[24px] aspect-[1.49781659] md:aspect-square w-full md:w-[176px] md:h-[176px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-t-[16px] md:rounded-[32px]",
    src: cover,
    alt: ""
    //ratio="16by9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ps-[16px] py-[16px] pe-[40px] md:pe-[52px] relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[22px] md:text-[24px] font-bold text-[#3c3c3c]"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-left items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center flex-shrink-0 w-[20px] h-[20px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-tel text-[#82be66]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, tel)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-left items-start mt-[4px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center flex-shrink-0  w-[20px] h-[20px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-location text-[#82be66]"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex-fill ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, address))))));
};
_c3 = FarmCard;
_c = FarmCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FarmCard));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FarmCard");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FarmCard");

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

/***/ "./src/components/TravelCard.js"
/*!**************************************!*\
  !*** ./src/components/TravelCard.js ***!
  \**************************************/
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




var TravelCard = function TravelCard() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "flex relative h-[86px] md:h-[225px] xl:h-[240px] rounded-[16px]  md:rounded-[32px] border-solid border-[2px] border-[#f0f0f0] transition-all duration-500 hover:border-[#82be66] hover:ring-[2px] hover:ring-[#82be66] group"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "relative aspect-[1.3255814] flex-shrink-0 w-[114px] md:w-[300px] xl:w-[320px] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-full rounded-l-[14px] md:rounded-l-[30px]",
    src: "https://unsplash.it/480/360?random",
    alt: ""
    //ratio="16by9"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ms-[16px] me-[30px] my-[8px] md:ms-[32px] md:me-[52px] md:my-[16px] w-inherit h-inherit text-ellipsis overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "text-[16px] md:text-[24px] xl:text-[28px] text-[#3c3c3c]"
  }, "\u904A\u7A0B\u9805\u76EE"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex md:my-[16px] xl:my-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-location text-[#82be66] w-[20px] h-[20px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, "\u82D7\u6817\u7E23")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center ml-[16px] md:ml-[24px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-time text-[#82be66] w-[20px] h-[20px]"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ml-[4px] text-[14px] md:text-[18px] text-[#3c3c3c]"
  }, "\u5E7E\u65E5"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-[14px] md:text-[18px] text-[#3c3c3c] text-justify text-ellipsis line-clamp-1 md:line-clamp-3"
  }, "\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587\u5167\u6587")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center items-center absolute top-0 right-0 w-[30px] md:w-[52px] md:h-[52px] aspect-square bg-[#82be66] xl:bg-[transparent] transition-all duration-500 xl:group-hover:bg-[#82be66] rounded-tr-[12px] rounded-bl-[16px] md:rounded-tr-[30px] md:rounded-bl-[30px]",
    href: "#"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-link-out text-[#fff] xl:text-[#c4c4c4] w-[14px] h-[14px] transition-all duration-500 group-hover:text-[#fff]"
  })));
};
_c3 = TravelCard;
_c = TravelCard;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(TravelCard));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "TravelCard");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "TravelCard");

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

/***/ "./src/views/season-fruit/DetailRouter.js"
/*!************************************************!*\
  !*** ./src/views/season-fruit/DetailRouter.js ***!
  \************************************************/
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


var DetailRouter = function DetailRouter(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "space-y-[8px]"
  }, data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold"
    }, item.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-justify fz-18px text-[#3c3c3c]",
      dangerouslySetInnerHTML: {
        __html: item.summary.replaceAll('\r\n', '<br />')
      }
    }));
  }));
};
_c3 = DetailRouter;
_c = DetailRouter;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(DetailRouter));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "DetailRouter");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "DetailRouter");

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

/***/ "./src/views/season-fruit/FruitsInfo.js"
/*!**********************************************!*\
  !*** ./src/views/season-fruit/FruitsInfo.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ThumbFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* harmony import */ var _DetailRouter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DetailRouter */ "./src/views/season-fruit/DetailRouter.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var CONFIG_INFO = [{
  title: '農百科',
  sub: '盛產期6-11月',
  content: '西瓜味道甘甜多汁，清爽解渴，是盛夏佳果，更不含脂肪和膽固醇，且幾乎含有人體所需的各種招牌營養素，是一種最富有營養、最純淨、食用最安全的食品。中醫界稱西瓜有清熱解暑、解煩渴、利小便、解酒毒等功效，用來治療熱症、暑熱煩渴、小便不利、咽喉疼痛、口腔發炎及酒醉。',
  img: '../images/global/social-share.jpg'
}, {
  title: '農特選',
  sub: '如何挑選美味西瓜？',
  content: '看外觀：選擇表面光滑完整、顏色青綠明亮、花紋清晰鮮明，果梗呈捲曲狀，瓜蒂部分些微凹陷者。拍果皮：聲音清脆響亮者為佳。'
}, {
  title: '農體驗',
  sub: '盛產期6-11月',
  content: '臺灣地處熱帶及亞熱帶，氣候與環境適合西瓜生長，產地遍及全臺，主要產區為花蓮、雲林、臺南、宜蘭、屏東等。近年來許多縣市舉辦西瓜節，如花蓮鳳林、苗栗後龍、苗栗白沙屯、彰化、雲林二崙，民眾可以品嘗到當地西瓜的美味、欣賞西瓜果雕、觀賞西瓜評鑑比賽、參加好玩的遊戲與DIY，並到鄰近景點半日、一日遊。',
  img: ''
}, {
  title: '農知識',
  content: '臺灣地處熱帶及亞熱帶，氣候與環境適合西瓜生長，產地遍及全臺，主要產區為花蓮、雲林、臺南、宜蘭、屏東等。近年來許多縣市舉辦西瓜節，如花蓮鳳林、苗栗後龍、苗栗白沙屯、彰化、雲林二崙，民眾可以品嘗到當地西瓜的美味、欣賞西瓜果雕、觀賞西瓜評鑑比賽、參加好玩的遊戲與DIY，並到鄰近景點半日、一日遊。',
  img: ''
}];
var FruitsInfo = function FruitsInfo(_ref) {
  var _images$find, _images$;
  var className = _ref.className,
    data = _ref.data;
  var summary = data.summary,
    months = data.months,
    experiences = data.experiences,
    exquisite = data.exquisite,
    images = data.images;
  var cover = (images === null || images === void 0 || (_images$find = images.find(function (item) {
    return item.isCover;
  })) === null || _images$find === void 0 ? void 0 : _images$find.url) || (images === null || images === void 0 || (_images$ = images[0]) === null || _images$ === void 0 ? void 0 : _images$.url);
  var formattedMonths = months === null || months === void 0 ? void 0 : months.toString().split('').join('、'); //將月份轉換成字串並加入逗號

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[1200px] mx-auto ".concat(className)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] px-[24px] md:px-[40px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: '農百科',
    fill: '#fbce4c',
    className: 'mb-[24px] md:mb-[32px]'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "md:[32px] pb-[16px] md:pb-[16px] text-left fz-20px text-[#2d7316] font-bold"
  }, "\u76DB\u7522\u671F", formattedMonths, "\u6708"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "text-justify fz-18px text-[#3c3c3c]"
  }, summary))), !!(exquisite !== null && exquisite !== void 0 && exquisite.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] px-[24px] md:px-[40px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: '農特選',
    fill: '#fbce4c',
    className: 'mb-[24px] md:mb-[32px]'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DetailRouter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: exquisite
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ThumbFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: cover.replace('640x480', '1920x1080'),
    alt: "\u8FB2\u7279\u9078",
    className: "thumb-frame embed-responsive embed-responsive-undefined mt-[32px] mx-auto relative  aspect-[1.5] rounded-2xl max-w-[880px] "
  }))), !!(experiences !== null && experiences !== void 0 && experiences.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] px-[24px] md:px-[40px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: '農體驗',
    fill: '#fbce4c',
    className: 'mb-[24px] md:mb-[32px]'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DetailRouter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: experiences
  }))), !!(experiences !== null && experiences !== void 0 && experiences.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "py-[24px] md:py-[40px] px-[24px] md:px-[40px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto max-w-[880px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: '農知識',
    fill: '#fbce4c',
    className: 'mb-[24px] md:mb-[32px]'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_DetailRouter__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: experiences
  }))));
};
_c3 = FruitsInfo;
_c = FruitsInfo;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitsInfo));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitsInfo");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitsInfo");

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

/***/ "./src/views/season-fruit/FruitsSite.js"
/*!**********************************************!*\
  !*** ./src/views/season-fruit/FruitsSite.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* harmony import */ var _components_FarmCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FarmCard */ "./src/components/FarmCard.js");
/* harmony import */ var _api_useSpotsData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api/useSpotsData */ "./src/api/useSpotsData.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var _components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Spinner */ "./src/components/Spinner.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();






var FruitsSite = function FruitsSite() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_4__.useLocale)();
  var _ref = (0,_api_useSpotsData__WEBPACK_IMPORTED_MODULE_3__["default"])({
      lang: lang
    }) || {},
    data = _ref.data;
  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex justify-content-center p-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: 18,
      color: 'black'
    }));
  }
  var limitData = data.slice(0, 6);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto pt-[24px] pb-[80px] md:pt-[40px] md:pb-[160px] xl:pt-[80px] max-w-[768px] xl:max-w-[1200px] text-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[16px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '採果何處去',
    fill: '#fbce4c'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-1 xl:grid-cols-2 mt-[24px] md:mt-[64px] gap-[16px] md:gap-[24px]"
  }, limitData.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FarmCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: item
    }));
  }))));
};
_s2(FruitsSite, "QO/zoXROpd0GKPpjtSm/Z1vATek=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_4__.useLocale, _api_useSpotsData__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c3 = FruitsSite;
_s(FruitsSite, "QO/zoXROpd0GKPpjtSm/Z1vATek=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_4__.useLocale, _api_useSpotsData__WEBPACK_IMPORTED_MODULE_3__["default"]];
});
_c = FruitsSite;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitsSite));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitsSite");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitsSite");

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

/***/ "./src/views/season-fruit/FruitsTravel.js"
/*!************************************************!*\
  !*** ./src/views/season-fruit/FruitsTravel.js ***!
  \************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* harmony import */ var _components_TravelCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/TravelCard */ "./src/components/TravelCard.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
;


var FruitsTravel = function FruitsTravel() {
  /* 為react添加className的設定 */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-[24px] max-w-[960px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-[24px] pb-[40px] md:pb-[80px] xl:pb-[104px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '可以這樣玩',
    fill: '#fbce4c'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "pt-[8px] md:pt-[32px]"
  }, _toConsumableArray(new Array(2)).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mt-[16px] md:mt-[24px]",
      key: i
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TravelCard__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }))));
};
_c3 = FruitsTravel;
_c = FruitsTravel;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitsTravel));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitsTravel");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitsTravel");

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

/***/ "./src/views/season-fruit/FruitsVideos.js"
/*!************************************************!*\
  !*** ./src/views/season-fruit/FruitsVideos.js ***!
  \************************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TitleLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/TitleLine */ "./src/components/TitleLine.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var FruitsVideos = function FruitsVideos() {
  /* 為react添加className的設定 */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-[16px] md:px-[24px] bg-gradient-to-br from-[#fff] to-[#fff3cc] h-screen w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto pt-[24px] md:pt-[40px] pb-[40px] md:pb-[80px] max-w-[900px] text-center "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_TitleLine__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '採果影片',
    fill: '#fbce4c'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mt-[40px] aspect-[1.77865613] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] rounded-[16px] md:rounded-[32px] overflow-hidden"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("iframe", {
    src: "https://www.youtube.com/embed/lz8R3EJ4fZc",
    title: "YouTube video player",
    allowFullScreen: true,
    className: "w-100 h-100 "
  })))));
};
_c3 = FruitsVideos;
_c = FruitsVideos;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(FruitsVideos));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "FruitsVideos");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "FruitsVideos");

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

/***/ "./src/views/season-fruit/index.js"
/*!*****************************************!*\
  !*** ./src/views/season-fruit/index.js ***!
  \*****************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Breadcrumbs */ "./src/components/Breadcrumbs.js");
/* harmony import */ var _FruitsInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FruitsInfo */ "./src/views/season-fruit/FruitsInfo.js");
/* harmony import */ var _FruitsTravel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FruitsTravel */ "./src/views/season-fruit/FruitsTravel.js");
/* harmony import */ var _FruitsVideos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FruitsVideos */ "./src/views/season-fruit/FruitsVideos.js");
/* harmony import */ var _FruitsSite__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FruitsSite */ "./src/views/season-fruit/FruitsSite.js");
/* harmony import */ var components_ThumbFrame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/ThumbFrame */ "./src/components/ThumbFrame.js");
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Spinner */ "./src/components/Spinner.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! api */ "./src/api/index.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();











var Page = function Page() {
  _s2();
  _s();
  var _images$find, _images$;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)(),
    id = _useParams.id;
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale)();
  var _ref = (0,api__WEBPACK_IMPORTED_MODULE_8__.useFruitDataReduxVer)({
      lang: lang,
      id: id
    }) || {},
    data = _ref.data;
  console.log(data);
  if (!data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "d-flex justify-content-center p-10"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
      size: 18,
      color: 'black'
    }));
  }
  var title = data.title,
    images = data.images,
    summary = data.summary,
    months = data.months,
    description = data.description;
  var cover = (images === null || images === void 0 || (_images$find = images.find(function (item) {
    return item.isCover;
  })) === null || _images$find === void 0 ? void 0 : _images$find.url) || (images === null || images === void 0 || (_images$ = images[0]) === null || _images$ === void 0 ? void 0 : _images$.url);
  var firstParagraph = description === null || description === void 0 ? void 0 : description.split(/<br\s*\/?>|\n{2,}/)[0]; ///\n{2,}/ 用於分隔雙換行,<br\s*\/?> 用於分隔 HTML 的 <br />

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "m-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pt-[56px] xl:pt-[104px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "pb-0 md:pb-[80px] bg-gradient-to-br from-[#fff] to-[#fff5d9] h-screen w-full "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: " mx-auto px-[16px] md:px-[24px] max-w-[768px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_Breadcrumbs__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: [{
      title: '四季水果',
      url: '/season-fruits'
    }, {
      title: title,
      url: "/season-fruit/".concat(id)
    }]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-md-[16px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-0 py-[24px] md:py-[40px] max-w-[768px] "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", {
    className: "pt-[16px] pb-[8px] text-[40px] md:text-[56px] font-bold text-center"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    className: "fz-18px font-bold text-md-center text-justify text-[#3c3c3c]",
    dangerouslySetInnerHTML: {
      __html: firstParagraph
    }
  })), !!cover && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "max-w-[1280px] mx-auto "
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_ThumbFrame__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "md:mx-[32px] relative aspect-[1.99468085] bg-gradient-to-br from-[#fff5d9] to-[#fbce4c] h-screen w-auto rounded-[0px] md:rounded-[32px]",
    src: cover.replace('480x360', '1920x1080' //1920 broken
    ),
    alt: ""
    //ratio="16by9"
  })))), !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitsInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "max-w-[1200px] mx-auto",
    data: data
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitsTravel__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitsVideos__WEBPACK_IMPORTED_MODULE_4__["default"], null), !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_FruitsSite__WEBPACK_IMPORTED_MODULE_5__["default"], {
    data: data
  })));
};
_s2(Page, "WoomfYWGeFHbrRLyYjyu2fQYUsU=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams, hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale, api__WEBPACK_IMPORTED_MODULE_8__.useFruitDataReduxVer];
});
_c3 = Page;
_s(Page, "JkuEJjDZSotm94d4fPzuyDOMr8c=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams, hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale, api__WEBPACK_IMPORTED_MODULE_8__.useFruitDataReduxVer];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3NlYXNvbi1mcnVpdF9pbmRleF9qcy00YjE5NzcxMmQyZWVhNDA2YzAwOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDWTtBQUNvQjtBQUV6RCxJQUFNRyxRQUFRLEdBQUcsU0FBWEEsUUFBUUEsQ0FBQUMsSUFBQSxFQUFpQjtFQUFBLElBQVhDLElBQUksR0FBQUQsSUFBQSxDQUFKQyxJQUFJO0VBQ3BCLElBQVFDLEtBQUssR0FBOEJELElBQUksQ0FBdkNDLEtBQUs7SUFBRUMsT0FBTyxHQUFxQkYsSUFBSSxDQUFoQ0UsT0FBTztJQUFFQyxJQUFJLEdBQWVILElBQUksQ0FBdkJHLElBQUk7SUFBRUMsR0FBRyxHQUFVSixJQUFJLENBQWpCSSxHQUFHO0lBQUVDLEdBQUcsR0FBS0wsSUFBSSxDQUFaSyxHQUFHO0VBRXRDLG9CQUNJViwwREFBQSxDQUFDRSxrRUFBYztJQUNYVSxTQUFTLEVBQUMsb0xBQW9MO0lBQzlMQyxJQUFJLEVBQUVILEdBQUk7SUFDVkksS0FBSyxFQUFFTixJQUFLO0lBQ1pPLFNBQVMsRUFBRSxJQUFLO0lBQ2hCQyxNQUFNLEVBQUM7RUFBUSxnQkFFZmhCLDBEQUFBO0lBQ0lZLFNBQVMsRUFBQyw0UEFBNFA7SUFDdFFDLElBQUksRUFBQztFQUFHLGdCQUVSYiwwREFBQTtJQUFHWSxTQUFTLEVBQUM7RUFBb0csQ0FBSSxDQUNwSCxDQUFDLGVBQ05aLDBEQUFBO0lBQUtZLFNBQVMsRUFBQztFQUFTLEdBQ25CLENBQUMsQ0FBQ04sS0FBSyxHQUFHVyxNQUFNLGlCQUNiakIsMERBQUEsQ0FBQ0MsbURBQVU7SUFDUFcsU0FBUyxFQUFDLDRNQUE0TTtJQUN0Tk0sR0FBRyxFQUFFWixLQUFNO0lBQ1hhLEdBQUcsRUFBQztJQUNKO0VBQUEsQ0FDSCxDQUNKLGVBQ0RuQiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBcUQsZ0JBQ2hFWiwwREFBQTtJQUFLWSxTQUFTLEVBQUM7RUFBcUQsR0FDL0RKLElB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Y3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvRmFybUNhcmQuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvVHJhdmVsQ2FyZC5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3Mvc2Vhc29uLWZydWl0L0RldGFpbFJvdXRlci5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3Mvc2Vhc29uLWZydWl0L0ZydWl0c0luZm8uanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3NlYXNvbi1mcnVpdC9GcnVpdHNTaXRlLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zZWFzb24tZnJ1aXQvRnJ1aXRzVHJhdmVsLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zZWFzb24tZnJ1aXQvRnJ1aXRzVmlkZW9zLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9zZWFzb24tZnJ1aXQvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRodW1iRnJhbWUgZnJvbSAnLi9UaHVtYkZyYW1lJ1xuaW1wb3J0IEF1dG9Td2l0Y2hMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b1N3aXRjaExpbmsnXG5cbmNvbnN0IEZhcm1DYXJkID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgeyBjb3ZlciwgYWRkcmVzcywgbmFtZSwgdGVsLCB1cmwgfSA9IGRhdGFcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRvU3dpdGNoTGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHJlbGF0aXZlIHJvdW5kZWQtWzE2cHhdIG1kOnJvdW5kZWQtWzMycHhdIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gYm9yZGVyLVsjZjBmMGYwXSB0cnMtYWxsIHhsOmhvdmVyOnJpbmctWzFweF0geGw6aG92ZXI6Ym9yZGVyLVsjODJiZTY2XSB4bDpob3ZlcjpyaW5nLVsjODJiZTY2XSBncm91cFwiXG4gICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgICAgIGlzTGlua091dD17dHJ1ZX1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzQwcHhdIG1kOnctWzUycHhdIG1kOmgtWzUycHhdIGFzcGVjdC1zcXVhcmUgYmctWyM4MmJlNjZdIHRycy1hbGwgeGw6YmctW3RyYW5zcGFyZW50XSB4bDpncm91cC1ob3ZlcjpiZy1bIzgyYmU2Nl0gcm91bmRlZC10ci1bMTZweF0gcm91bmRlZC1ibC1bMTZweF0gIG1kOnJvdW5kZWQtdHItWzMwcHhdIG1kOnJvdW5kZWQtYmwtWzMwcHhdXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmstb3V0IHRleHQtWyNmZmZdIHhsOnRleHQtWyNjNGM0YzRdIHctWzIwcHhdIGgtWzIwcHhdIHRycy1hbGwgZ3JvdXAtaG92ZXI6dGV4dC1bI2ZmZl1cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleFwiPlxuICAgICAgICAgICAgICAgIHshIWNvdmVyID4gbGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRodW1iRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBtZDpteS1bMjRweF0gbWQ6bWwtWzI0cHhdIGFzcGVjdC1bMS40OTc4MTY1OV0gbWQ6YXNwZWN0LXNxdWFyZSB3LWZ1bGwgbWQ6dy1bMTc2cHhdIG1kOmgtWzE3NnB4XSBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjZmZmNWQ5XSB0by1bI2ZiY2U0Y10gaC1zY3JlZW4gdy1mdWxsIHJvdW5kZWQtdC1bMTZweF0gbWQ6cm91bmRlZC1bMzJweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JhdGlvPVwiMTZieTlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1bMTZweF0gcHktWzE2cHhdIHBlLVs0MHB4XSBtZDpwZS1bNTJweF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSBtZDp0ZXh0LVsyNHB4XSBmb250LWJvbGQgdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtWzhweF0gbXktWzE2cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoNSldLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgdy1bODBweF0gaC1bMzBweF0gcm91bmRlZC1waWxsIGJvcmRlci1bI2YwZjBmMF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9pY29uLWZydWl0L3BsdW1sZWUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwbHVtbGVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjBweF0gaC1bMjBweF0gbXItWzRweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnY7lrZBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWxlZnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHctWzIwcHhdIGgtWzIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10ZWwgdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgbWwtWzRweF0gdGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1sZWZ0IGl0ZW1zLXN0YXJ0IG10LVs0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wICB3LVsyMHB4XSBoLVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9jYXRpb24gdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgbWwtWzRweF0gdGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BdXRvU3dpdGNoTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmFybUNhcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgVGh1bWJGcmFtZSBmcm9tICdjb21wb25lbnRzL1RodW1iRnJhbWUnXG5cbmNvbnN0IFRyYXZlbENhcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiZmxleCByZWxhdGl2ZSBoLVs4NnB4XSBtZDpoLVsyMjVweF0geGw6aC1bMjQwcHhdIHJvdW5kZWQtWzE2cHhdICBtZDpyb3VuZGVkLVszMnB4XSBib3JkZXItc29saWQgYm9yZGVyLVsycHhdIGJvcmRlci1bI2YwZjBmMF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIGhvdmVyOmJvcmRlci1bIzgyYmU2Nl0gaG92ZXI6cmluZy1bMnB4XSBob3ZlcjpyaW5nLVsjODJiZTY2XSBncm91cFwiPlxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgYXNwZWN0LVsxLjMzNzIwOTNdIGJnLWdyYWRpZW50LXRvLWJyIGZyb20tWyNmZmY1ZDldIHRvLVsjZmJjZTRjXSBoLXNjcmVlbiB3LWZ1bGwgcm91bmRlZC1sLVsxNHB4XSBtZDpyb3VuZGVkLWwtWzMwcHhdXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgPFRodW1iRnJhbWVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyZWxhdGl2ZSBhc3BlY3QtWzEuMzI1NTgxNF0gZmxleC1zaHJpbmstMCB3LVsxMTRweF0gbWQ6dy1bMzAwcHhdIHhsOnctWzMyMHB4XSBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjZmZmNWQ5XSB0by1bI2ZiY2U0Y10gaC1zY3JlZW4gdy1mdWxsIHJvdW5kZWQtbC1bMTRweF0gbWQ6cm91bmRlZC1sLVszMHB4XVwiXG4gICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly91bnNwbGFzaC5pdC80ODAvMzYwP3JhbmRvbWB9XG4gICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAvL3JhdGlvPVwiMTZieTlcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXMtWzE2cHhdIG1lLVszMHB4XSBteS1bOHB4XSBtZDptcy1bMzJweF0gbWQ6bWUtWzUycHhdIG1kOm15LVsxNnB4XSB3LWluaGVyaXQgaC1pbmhlcml0IHRleHQtZWxsaXBzaXMgb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBtZDp0ZXh0LVsyNHB4XSB4bDp0ZXh0LVsyOHB4XSB0ZXh0LVsjM2MzYzNjXVwiPlxuICAgICAgICAgICAgICAgICAgICDpgYrnqIvpoIXnm65cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWQ6bXktWzE2cHhdIHhsOm15LVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9jYXRpb24gdGV4dC1bIzgyYmU2Nl0gdy1bMjBweF0gaC1bMjBweF1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLVs0cHhdIHRleHQtWzE0cHhdIG1kOnRleHQtWzE4cHhdIHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg6IuX5qCX57ijXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgbWwtWzE2cHhdIG1kOm1sLVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLXRpbWUgdGV4dC1bIzgyYmU2Nl0gdy1bMjBweF0gaC1bMjBweF1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLVs0cHhdIHRleHQtWzE0cHhdIG1kOnRleHQtWzE4cHhdIHRleHQtWyMzYzNjM2NdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5bm+5pelXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY10gdGV4dC1qdXN0aWZ5IHRleHQtZWxsaXBzaXMgbGluZS1jbGFtcC0xIG1kOmxpbmUtY2xhbXAtM1wiPlxuICAgICAgICAgICAgICAgICAgICDlhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmlofmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmloflhafmlodcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzMwcHhdIG1kOnctWzUycHhdIG1kOmgtWzUycHhdIGFzcGVjdC1zcXVhcmUgYmctWyM4MmJlNjZdIHhsOmJnLVt0cmFuc3BhcmVudF0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tNTAwIHhsOmdyb3VwLWhvdmVyOmJnLVsjODJiZTY2XSByb3VuZGVkLXRyLVsxMnB4XSByb3VuZGVkLWJsLVsxNnB4XSBtZDpyb3VuZGVkLXRyLVszMHB4XSBtZDpyb3VuZGVkLWJsLVszMHB4XVwiXG4gICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1saW5rLW91dCB0ZXh0LVsjZmZmXSB4bDp0ZXh0LVsjYzRjNGM0XSB3LVsxNHB4XSBoLVsxNHB4XSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi01MDAgZ3JvdXAtaG92ZXI6dGV4dC1bI2ZmZl1cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUcmF2ZWxDYXJkKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBEZXRhaWxSb3V0ZXIgPSAoeyBkYXRhIH0pID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktWzhweF1cIj5cbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpbMzJweF0gcGItWzE2cHhdIG1kOnBiLVsxNnB4XSB0ZXh0LWxlZnQgZnotMjBweCB0ZXh0LVsjMmQ3MzE2XSBmb250LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IGZ6LTE4cHggdGV4dC1bIzNjM2MzY11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGl0ZW0uc3VtbWFyeS5yZXBsYWNlQWxsKCdcXHJcXG4nLCAnPGJyIC8+JylcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKERldGFpbFJvdXRlcilcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaHVtYkZyYW1lIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGh1bWJGcmFtZSdcbmltcG9ydCBUaXRsZUxpbmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZUxpbmUnXG5pbXBvcnQgRGV0YWlsUm91dGVyIGZyb20gJy4vRGV0YWlsUm91dGVyJ1xuXG5jb25zdCBDT05GSUdfSU5GTyA9IFtcbiAgICB7XG4gICAgICAgIHRpdGxlOiAn6L6y55m+56eRJyxcbiAgICAgICAgc3ViOiAn55ub55Si5pyfNi0xMeaciCcsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAn6KW/55Oc5ZGz6YGT55SY55Sc5aSa5rGB77yM5riF54i96Kej5ri077yM5piv55ub5aSP5L2z5p6c77yM5pu05LiN5ZCr6ISC6IKq5ZKM6Ia95Zu66YaH77yM5LiU5bm+5LmO5ZCr5pyJ5Lq66auU5omA6ZyA55qE5ZCE56iu5oub54mM54ef6aSK57Sg77yM5piv5LiA56iu5pyA5a+M5pyJ54ef6aSK44CB5pyA57SU5reo44CB6aOf55So5pyA5a6J5YWo55qE6aOf5ZOB44CC5Lit6Yar55WM56ix6KW/55Oc5pyJ5riF54ax6Kej5pqR44CB6Kej54Wp5ri044CB5Yip5bCP5L6/44CB6Kej6YWS5q+S562J5Yqf5pWI77yM55So5L6G5rK755mC54ax55eH44CB5pqR54ax54Wp5ri044CB5bCP5L6/5LiN5Yip44CB5ZK95ZaJ55a855eb44CB5Y+j6IWU55m854KO5Y+K6YWS6YaJ44CCJyxcbiAgICAgICAgaW1nOiAnLi4vaW1hZ2VzL2dsb2JhbC9zb2NpYWwtc2hhcmUuanBnJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+i+sueJuemBuCcsXG4gICAgICAgIHN1YjogJ+WmguS9leaMkemBuOe+juWRs+ilv+eTnO+8nycsXG4gICAgICAgIGNvbnRlbnQ6XG4gICAgICAgICAgICAn55yL5aSW6KeA77ya6YG45pOH6KGo6Z2i5YWJ5ruR5a6M5pW044CB6aGP6Imy6Z2S57ag5piO5Lqu44CB6Iqx57SL5riF5pmw6a6u5piO77yM5p6c5qKX5ZGI5o2y5puy54uA77yM55Oc6JKC6YOo5YiG5Lqb5b6u5Ye56Zm36ICF44CC5ouN5p6c55qu77ya6IGy6Z+z5riF6ISG6Z+/5Lqu6ICF54K65L2z44CCJ1xuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ+i+sumrlOmplycsXG4gICAgICAgIHN1YjogJ+ebm+eUouacnzYtMTHmnIgnLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ+iHuueBo+WcsOiZleeGseW4tuWPiuS6nueGseW4tu+8jOawo+WAmeiIh+eSsOWig+mBqeWQiOilv+eTnOeUn+mVt++8jOeUouWcsOmBjeWPiuWFqOiHuu+8jOS4u+imgeeUouWNgOeCuuiKseiTruOAgembsuael+OAgeiHuuWNl+OAgeWunOiYreOAgeWxj+adseetieOAgui/keW5tOS+huioseWkmue4o+W4guiIiei+puilv+eTnOevgO+8jOWmguiKseiTrumzs+ael+OAgeiLl+agl+W+jOm+jeOAgeiLl+agl+eZveaymeWxr+OAgeW9sOWMluOAgembsuael+S6jOW0me+8jOawkeecvuWPr+S7peWTgeWYl+WIsOeVtuWcsOilv+eTnOeahOe+juWRs+OAgeaso+iznuilv+eTnOaenOmbleOAgeingOiznuilv+eTnOiplemRkeavlOizveOAgeWPg+WKoOWlveeOqeeahOmBiuaIsuiIh0RJWe+8jOS4puWIsOmEsOi/keaZr+m7nuWNiuaXpeOAgeS4gOaXpemBiuOAgicsXG4gICAgICAgIGltZzogJydcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICfovrLnn6XorZgnLFxuICAgICAgICBjb250ZW50OlxuICAgICAgICAgICAgJ+iHuueBo+WcsOiZleeGseW4tuWPiuS6nueGseW4tu+8jOawo+WAmeiIh+eSsOWig+mBqeWQiOilv+eTnOeUn+mVt++8jOeUouWcsOmBjeWPiuWFqOiHuu+8jOS4u+imgeeUouWNgOeCuuiKseiTruOAgembsuael+OAgeiHuuWNl+OAgeWunOiYreOAgeWxj+adseetieOAgui/keW5tOS+huioseWkmue4o+W4guiIiei+puilv+eTnOevgO+8jOWmguiKseiTrumzs+ael+OAgeiLl+agl+W+jOm+jeOAgeiLl+agl+eZveaymeWxr+OAgeW9sOWMluOAgembsuael+S6jOW0me+8jOawkeecvuWPr+S7peWTgeWYl+WIsOeVtuWcsOilv+eTnOeahOe+juWRs+OAgeaso+iznuilv+eTnOaenOmbleOAgeingOiznuilv+eTnOiplemRkeavlOizveOAgeWPg+WKoOWlveeOqeeahOmBiuaIsuiIh0RJWe+8jOS4puWIsOmEsOi/keaZr+m7nuWNiuaXpeOAgeS4gOaXpemBiuOAgicsXG4gICAgICAgIGltZzogJydcbiAgICB9XG5dXG5cbmNvbnN0IEZydWl0c0luZm8gPSAoeyBjbGFzc05hbWUsIGRhdGEgfSkgPT4ge1xuICAgIGNvbnN0IHsgc3VtbWFyeSwgbW9udGhzLCBleHBlcmllbmNlcywgZXhxdWlzaXRlLCBpbWFnZXMgfSA9IGRhdGFcbiAgICBjb25zdCBjb3ZlciA9IGltYWdlcz8uZmluZCgoaXRlbSkgPT4gaXRlbS5pc0NvdmVyKT8udXJsIHx8IGltYWdlcz8uWzBdPy51cmxcbiAgICBjb25zdCBmb3JtYXR0ZWRNb250aHMgPSBtb250aHM/LnRvU3RyaW5nKCkuc3BsaXQoJycpLmpvaW4oJ+OAgScpIC8v5bCH5pyI5Lu96L2J5o+b5oiQ5a2X5Liy5Lim5Yqg5YWl6YCX6JmfXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1heC13LVsxMjAwcHhdIG14LWF1dG8gJHtjbGFzc05hbWV9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LVsyNHB4XSBtZDpweS1bNDBweF0gcHgtWzI0cHhdIG1kOnB4LVs0MHB4XVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bODgwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUxpbmVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsn6L6y55m+56eRJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9eycjZmJjZTRjJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J21iLVsyNHB4XSBtZDptYi1bMzJweF0nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6WzMycHhdIHBiLVsxNnB4XSBtZDpwYi1bMTZweF0gdGV4dC1sZWZ0IGZ6LTIwcHggdGV4dC1bIzJkNzMxNl0gZm9udC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICDnm5vnlKLmnJ97Zm9ybWF0dGVkTW9udGhzfeaciFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1qdXN0aWZ5IGZ6LTE4cHggdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzdW1tYXJ5fVxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshIWV4cXVpc2l0ZT8ubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LVsyNHB4XSBtZDpweS1bNDBweF0gcHgtWzI0cHhdIG1kOnB4LVs0MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctWzg4MHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRpdGxlTGluZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXsn6L6y54m56YG4J31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPXsnI2ZiY2U0Yyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsnbWItWzI0cHhdIG1kOm1iLVszMnB4XSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERldGFpbFJvdXRlciBkYXRhPXtleHF1aXNpdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJGcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17Y292ZXIucmVwbGFjZSgnNjQweDQ4MCcsICcxOTIweDEwODAnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCLovrLnibnpgbhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRodW1iLWZyYW1lIGVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS11bmRlZmluZWQgbXQtWzMycHhdIG14LWF1dG8gcmVsYXRpdmUgIGFzcGVjdC1bMS41XSByb3VuZGVkLTJ4bCBtYXgtdy1bODgwcHhdIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshIWV4cGVyaWVuY2VzPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktWzI0cHhdIG1kOnB5LVs0MHB4XSBweC1bMjRweF0gbWQ6cHgtWzQwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bODgwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyfovrLpq5TpqZcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9eycjZmJjZTRjJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYi1bMjRweF0gbWQ6bWItWzMycHhdJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsUm91dGVyIGRhdGE9e2V4cGVyaWVuY2VzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHshIWV4cGVyaWVuY2VzPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktWzI0cHhdIG1kOnB5LVs0MHB4XSBweC1bMjRweF0gbWQ6cHgtWzQwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1bODgwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGl0bGVMaW5lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyfovrLnn6XorZgnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9eycjZmJjZTRjJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eydtYi1bMjRweF0gbWQ6bWItWzMycHhdJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGV0YWlsUm91dGVyIGRhdGE9e2V4cGVyaWVuY2VzfSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGcnVpdHNJbmZvKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlTGluZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RpdGxlTGluZSdcbmltcG9ydCBGYXJtQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zhcm1DYXJkJ1xuaW1wb3J0IHVzZVNwb3RzRGF0YSBmcm9tICcuLi8uLi9hcGkvdXNlU3BvdHNEYXRhJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInXG5cbmNvbnN0IEZydWl0c1NpdGUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VTcG90c0RhdGEoeyBsYW5nIH0pIHx8IHt9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxTcGlubmVyIHNpemU9ezE4fSBjb2xvcj17J2JsYWNrJ30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgY29uc3QgbGltaXREYXRhID0gZGF0YS5zbGljZSgwLCA2KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIHB0LVsyNHB4XSBwYi1bODBweF0gbWQ6cHQtWzQwcHhdIG1kOnBiLVsxNjBweF0geGw6cHQtWzgwcHhdIG1heC13LVs3NjhweF0geGw6bWF4LXctWzEyMDBweF0gdGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LVsxNnB4XVwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZUxpbmUgdGl0bGU9eyfmjqHmnpzkvZXomZXljrsnfSBmaWxsPXsnI2ZiY2U0Yyd9IC8+XG5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB4bDpncmlkLWNvbHMtMiBtdC1bMjRweF0gbWQ6bXQtWzY0cHhdIGdhcC1bMTZweF0gbWQ6Z2FwLVsyNHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICB7bGltaXREYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0gY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYXJtQ2FyZCBkYXRhPXtpdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnJ1aXRzU2l0ZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZUxpbmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZUxpbmUnXG5pbXBvcnQgVHJhdmVsQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RyYXZlbENhcmQnXG5cbmNvbnN0IEZydWl0c1RyYXZlbCA9ICgpID0+IHtcbiAgICAvKiDngrpyZWFjdOa3u+WKoGNsYXNzTmFtZeeahOioreWumiAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBweC1bMTZweF0gbWQ6cHgtWzI0cHhdIG1heC13LVs5NjBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtWzI0cHhdIHBiLVs0MHB4XSBtZDpwYi1bODBweF0geGw6cGItWzEwNHB4XVwiPlxuICAgICAgICAgICAgICAgIDxUaXRsZUxpbmUgdGl0bGU9eyflj6/ku6XpgJnmqKPnjqknfSBmaWxsPXsnI2ZiY2U0Yyd9IC8+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInB0LVs4cHhdIG1kOnB0LVszMnB4XVwiPlxuICAgICAgICAgICAgICAgICAgICB7Wy4uLm5ldyBBcnJheSgyKV0ubWFwKChfLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXQtWzE2cHhdIG1kOm10LVsyNHB4XVwiIGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyYXZlbENhcmQgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZydWl0c1RyYXZlbClcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZUxpbmUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UaXRsZUxpbmUnXG5cbmNvbnN0IEZydWl0c1ZpZGVvcyA9ICgpID0+IHtcbiAgICAvKiDngrpyZWFjdOa3u+WKoGNsYXNzTmFtZeeahOioreWumiAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LVsxNnB4XSBtZDpweC1bMjRweF0gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI2ZmZl0gdG8tWyNmZmYzY2NdIGgtc2NyZWVuIHctZnVsbCBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHQtWzI0cHhdIG1kOnB0LVs0MHB4XSBwYi1bNDBweF0gbWQ6cGItWzgwcHhdIG1heC13LVs5MDBweF0gdGV4dC1jZW50ZXIgXCI+XG4gICAgICAgICAgICAgICAgICAgIDxUaXRsZUxpbmUgdGl0bGU9eyfmjqHmnpzlvbHniYcnfSBmaWxsPXsnI2ZiY2U0Yyd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtWzQwcHhdIGFzcGVjdC1bMS43Nzg2NTYxM10gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI2ZmZjVkOV0gdG8tWyNmYmNlNGNdIHJvdW5kZWQtWzE2cHhdIG1kOnJvdW5kZWQtWzMycHhdIG92ZXJmbG93LWhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2x6OFIzRUo0ZlpjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaWZyYW1lPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRnJ1aXRzVmlkZW9zKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJyZWFkY3J1bWJzIGZyb20gJ2NvbXBvbmVudHMvQnJlYWRjcnVtYnMnXG5pbXBvcnQgRnJ1aXRzSW5mbyBmcm9tICcuL0ZydWl0c0luZm8nXG5pbXBvcnQgRnJ1aXRzVHJhdmVsIGZyb20gJy4vRnJ1aXRzVHJhdmVsJ1xuaW1wb3J0IEZydWl0c1ZpZGVvcyBmcm9tICcuL0ZydWl0c1ZpZGVvcydcbmltcG9ydCBGcnVpdHNTaXRlIGZyb20gJy4vRnJ1aXRzU2l0ZSdcbmltcG9ydCBUaHVtYkZyYW1lIGZyb20gJ2NvbXBvbmVudHMvVGh1bWJGcmFtZSdcbmltcG9ydCBTcGlubmVyIGZyb20gJ2NvbXBvbmVudHMvU3Bpbm5lcidcbmltcG9ydCB7IHVzZUZydWl0RGF0YVJlZHV4VmVyIH0gZnJvbSAnYXBpJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgaWQgfSA9IHVzZVBhcmFtcygpXG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgeyBkYXRhIH0gPSB1c2VGcnVpdERhdGFSZWR1eFZlcih7IGxhbmcsIGlkIH0pIHx8IHt9XG4gICAgY29uc29sZS5sb2coZGF0YSlcblxuICAgIGlmICghZGF0YSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPFNwaW5uZXIgc2l6ZT17MTh9IGNvbG9yPXsnYmxhY2snfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICBjb25zdCB7IHRpdGxlLCBpbWFnZXMsIHN1bW1hcnksIG1vbnRocywgZGVzY3JpcHRpb24gfSA9IGRhdGFcbiAgICBjb25zdCBjb3ZlciA9IGltYWdlcz8uZmluZCgoaXRlbSkgPT4gaXRlbS5pc0NvdmVyKT8udXJsIHx8IGltYWdlcz8uWzBdPy51cmxcbiAgICBjb25zdCBmaXJzdFBhcmFncmFwaCA9IGRlc2NyaXB0aW9uPy5zcGxpdCgvPGJyXFxzKlxcLz8+fFxcbnsyLH0vKVswXSAvLy9cXG57Mix9LyDnlKjmlrzliIbpmpTpm5nmj5vooYwsPGJyXFxzKlxcLz8+IOeUqOaWvOWIhumalCBIVE1MIOeahCA8YnIgLz5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm0tYXV0b1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHQtWzU2cHhdIHhsOnB0LVsxMDRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0wIG1kOnBiLVs4MHB4XSBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjZmZmXSB0by1bI2ZmZjVkOV0gaC1zY3JlZW4gdy1mdWxsIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgbXgtYXV0byBweC1bMTZweF0gbWQ6cHgtWzI0cHhdIG1heC13LVs3NjhweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17W1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Zub5a2j5rC05p6cJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvc2Vhc29uLWZydWl0cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogYC9zZWFzb24tZnJ1aXQvJHtpZH1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1tZC1bMTZweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gcHgtWzE2cHhdIG1kOnB4LTAgcHktWzI0cHhdIG1kOnB5LVs0MHB4XSBtYXgtdy1bNzY4cHhdIFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicHQtWzE2cHhdIHBiLVs4cHhdIHRleHQtWzQwcHhdIG1kOnRleHQtWzU2cHhdIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnotMThweCBmb250LWJvbGQgdGV4dC1tZC1jZW50ZXIgdGV4dC1qdXN0aWZ5IHRleHQtWyMzYzNjM2NdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX19odG1sOiBmaXJzdFBhcmFncmFwaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFjb3ZlciAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctWzEyODBweF0gbXgtYXV0byBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6bXgtWzMycHhdIHJlbGF0aXZlIGFzcGVjdC1bMS45OTQ2ODA4NV0gYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1bI2ZmZjVkOV0gdG8tWyNmYmNlNGNdIGgtc2NyZWVuIHctYXV0byByb3VuZGVkLVswcHhdIG1kOnJvdW5kZWQtWzMycHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2NvdmVyLnJlcGxhY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc0ODB4MzYwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzE5MjB4MTA4MCcgLy8xOTIwIGJyb2tlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3JhdGlvPVwiMTZieTlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxGcnVpdHNJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1bMTIwMHB4XSBteC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICB7ISFkYXRhICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxGcnVpdHNJbmZvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzEyMDBweF0gbXgtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPEZydWl0c1RyYXZlbCAvPlxuICAgICAgICAgICAgICAgIDxGcnVpdHNWaWRlb3MgLz5cblxuICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgPEZydWl0c1NpdGUgZGF0YT17ZGF0YX0gLz59XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhQYWdlKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVGh1bWJGcmFtZSIsIkF1dG9Td2l0Y2hMaW5rIiwiRmFybUNhcmQiLCJfcmVmIiwiZGF0YSIsImNvdmVyIiwiYWRkcmVzcyIsIm5hbWUiLCJ0ZWwiLCJ1cmwiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaHJlZiIsInRpdGxlIiwiaXNMaW5rT3V0IiwidGFyZ2V0IiwibGVuZ3RoIiwic3JjIiwiYWx0IiwiX2MzIiwiX2MiLCJfYzIiLCJtZW1vIiwiJFJlZnJlc2hSZWckIiwiTGluayIsIlRyYXZlbENhcmQiLCJEZXRhaWxSb3V0ZXIiLCJtYXAiLCJpdGVtIiwiaSIsImtleSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic3VtbWFyeSIsInJlcGxhY2VBbGwiLCJUaXRsZUxpbmUiLCJDT05GSUdfSU5GTyIsInN1YiIsImNvbnRlbnQiLCJpbWciLCJGcnVpdHNJbmZvIiwiX2ltYWdlcyRmaW5kIiwiX2ltYWdlcyQiLCJtb250aHMiLCJleHBlcmllbmNlcyIsImV4cXVpc2l0ZSIsImltYWdlcyIsImZpbmQiLCJpc0NvdmVyIiwiZm9ybWF0dGVkTW9udGhzIiwidG9TdHJpbmciLCJzcGxpdCIsImpvaW4iLCJjb25jYXQiLCJmaWxsIiwicmVwbGFjZSIsInVzZVNwb3RzRGF0YSIsInVzZUxvY2FsZSIsIlNwaW5uZXIiLCJGcnVpdHNTaXRlIiwiX3MyIiwiX3MiLCJsYW5nIiwic2l6ZSIsImNvbG9yIiwibGltaXREYXRhIiwic2xpY2UiLCJGcnVpdHNUcmF2ZWwiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJBcnJheSIsIl8iLCJGcnVpdHNWaWRlb3MiLCJGcmFnbWVudCIsImFsbG93RnVsbFNjcmVlbiIsIkJyZWFkY3J1bWJzIiwidXNlRnJ1aXREYXRhUmVkdXhWZXIiLCJ1c2VQYXJhbXMiLCJQYWdlIiwiX3VzZVBhcmFtcyIsImlkIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwiZmlyc3RQYXJhZ3JhcGgiXSwic291cmNlUm9vdCI6IiJ9