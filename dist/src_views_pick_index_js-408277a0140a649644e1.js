"use strict";
(self["webpackChunkcsii_f2e_work_flow"] = self["webpackChunkcsii_f2e_work_flow"] || []).push([["src_views_pick_index_js"],{

/***/ "./src/components/ConditionSearchBlk.js"
/*!**********************************************!*\
  !*** ./src/components/ConditionSearchBlk.js ***!
  \**********************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_composition_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-composition-input */ "./node_modules/react-composition-input/lib/index.js");
/* harmony import */ var constants_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! constants/utils */ "./src/constants/utils.js");
/* harmony import */ var _styles_condition_search_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../styles/condition-search.scss */ "./styles/condition-search.scss");
/* harmony import */ var components_I18N__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/I18N */ "./src/components/I18N.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

var _s2 = __webpack_require__.$Refresh$.signature();
var _s = __webpack_require__.$Refresh$.signature();
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






var DAY_MAP = [{
  value: 1,
  name: '一日遊'
}, {
  value: 2,
  name: '二日遊'
}, {
  value: 0,
  name: '多日遊'
}];
var AREA_CONFIG = [{
  id: 1,
  title: '花蓮',
  zipcodeMin: 970,
  zipcodeMax: 983
}, {
  id: 2,
  title: '台東',
  zipcodeMin: 950,
  zipcodeMax: 966
}];
var ConditionSearchBlk = function ConditionSearchBlk(_ref) {
  _s2();
  _s();
  var data = _ref.data,
    query = _ref.query,
    zipcodeData = _ref.zipcodeData,
    categoryData = _ref.categoryData,
    transportData = _ref.transportData,
    countyData = _ref.countyData,
    tourismBrandData = _ref.tourismBrandData,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? {} : _ref$options,
    className = _ref.className;
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(),
    _useParams$lang = _useParams.lang,
    lang = _useParams$lang === void 0 ? 'zh-tw' : _useParams$lang;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query === null || query === void 0 ? void 0 : query.keyword),
    _useState2 = _slicedToArray(_useState, 2),
    keyword = _useState2[0],
    setKeyword = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.category ? query.category.split(',').map(function (cate) {
      return cate * 1;
    }) : []),
    _useState4 = _slicedToArray(_useState3, 2),
    category = _useState4[0],
    setCategory = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.transport ? query.transport.split(',').map(function (tran) {
      return tran * 1;
    }) : []),
    _useState6 = _slicedToArray(_useState5, 2),
    transport = _useState6[0],
    setTransport = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.zipcode ? query.zipcode.split(',').map(function (zip) {
      return zip * 1;
    }) : []),
    _useState8 = _slicedToArray(_useState7, 2),
    zipcode = _useState8[0],
    setZipcode = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.county ? query.county.split(',').map(function (c) {
      return c * 1;
    }) : []),
    _useState0 = _slicedToArray(_useState9, 2),
    county = _useState0[0],
    setCounty = _useState0[1];
  var _useState1 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.days ? query.days.split(',').map(function (d) {
      return d * 1;
    }) : []),
    _useState10 = _slicedToArray(_useState1, 2),
    days = _useState10[0],
    setDay = _useState10[1];
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query.brand ? query.brand.split(',').map(function (cate) {
      return cate * 1;
    }) : []),
    _useState12 = _slicedToArray(_useState11, 2),
    brand = _useState12[0],
    setBrand = _useState12[1];
  var preQueryData = (0,constants_utils__WEBPACK_IMPORTED_MODULE_4__.filterWithQuery)(data, {
    keyword: keyword,
    category: category,
    transport: transport,
    zipcode: zipcode,
    county: county,
    days: days,
    brand: brand
  }) || [];
  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState14 = _slicedToArray(_useState13, 2),
    isExpand = _useState14[0],
    toggleExpand = _useState14[1];
  var scrollRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var keywordRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var _useSearchParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams)(),
    _useSearchParams2 = _slicedToArray(_useSearchParams, 2),
    searchParams = _useSearchParams2[0],
    setSearchParams = _useSearchParams2[1];
  var isIos = /iphone|ipad/.test(navigator.userAgent.toLowerCase());
  var onSearch = function onSearch() {
    setSearchParams((0,constants_utils__WEBPACK_IMPORTED_MODULE_4__.makeParams)(query, {
      keyword: keyword,
      category: category,
      zipcode: zipcode,
      days: days,
      county: county,
      transport: transport,
      brand: brand
    }));
    toggleExpand(false);
    keywordRef.current.input.blur();
  };
  var resetToDefault = function resetToDefault() {
    setKeyword((query === null || query === void 0 ? void 0 : query.keyword) || '');
    setCategory(query.category ? query.category.split(',').map(function (cate) {
      return cate * 1;
    }) : []);
    setTransport(query.transport ? query.transport.split(',').map(function (tran) {
      return tran * 1;
    }) : []);
    setZipcode(query.zipcode ? query.zipcode.split(',').map(function (zip) {
      return zip * 1;
    }) : []);
    setDay(query.days ? query.days.split(',').map(function (d) {
      return d * 1;
    }) : []);
    setBrand(query.brand ? query.brand.split(',').map(function (cate) {
      return cate * 1;
    }) : []);
  };
  var preQueryWithCategory = function preQueryWithCategory(id) {
    var idx = category.indexOf(id);
    if (idx > -1) {
      setCategory([].concat(_toConsumableArray(category.slice(0, idx)), _toConsumableArray(category.slice(idx + 1))));
    } else {
      setCategory([].concat(_toConsumableArray(category), [id]));
    }
  };
  var preQueryWithTransport = function preQueryWithTransport(id) {
    var idx = transport.indexOf(id);
    if (idx > -1) {
      setTransport([].concat(_toConsumableArray(transport.slice(0, idx)), _toConsumableArray(transport.slice(idx + 1))));
    } else {
      setTransport([].concat(_toConsumableArray(transport), [id]));
    }
  };
  var preQueryWithZipcode = function preQueryWithZipcode(id) {
    var idx = zipcode.indexOf(id);
    if (idx > -1) {
      setZipcode([].concat(_toConsumableArray(zipcode.slice(0, idx)), _toConsumableArray(zipcode.slice(idx + 1))));
    } else {
      setZipcode([].concat(_toConsumableArray(zipcode), [id]));
    }
  };
  var preQueryWithCounty = function preQueryWithCounty(id) {
    var idx = county.indexOf(id);
    if (idx > -1) {
      setCounty([].concat(_toConsumableArray(county.slice(0, idx)), _toConsumableArray(county.slice(idx + 1))));
    } else {
      setCounty([].concat(_toConsumableArray(county), [id]));
    }
  };
  var preQueryWithDay = function preQueryWithDay(d) {
    var idx = days.indexOf(d);
    if (idx > -1) {
      setDay([].concat(_toConsumableArray(days.slice(0, idx)), _toConsumableArray(days.slice(idx + 1))));
    } else {
      setDay([].concat(_toConsumableArray(days), [d]));
    }
  };
  var preQueryWithBrand = function preQueryWithBrand(id) {
    var idx = brand.indexOf(id);
    if (idx > -1) {
      setBrand([].concat(_toConsumableArray(brand.slice(0, idx)), _toConsumableArray(brand.slice(idx + 1))));
    } else {
      setBrand([].concat(_toConsumableArray(brand), [id]));
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (isExpand && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    if (isExpand && keywordRef.current) {
      keywordRef.current.input.focus();
    }
  }, [isExpand]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    resetToDefault();
  }, [query]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.addEventListener('keyup', function (e) {
      var charCode = e.which ? e.which : e.keyCode;
      if (charCode === 27) {
        toggleExpand(false);
      }
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", {
    className: "condition-search-blk flex-fill flex-shrink-0 ".concat(isExpand ? 'show fixed-top h-100 z-2000 p-2 pt-7 pb-8 scroll-blk border-[transparent]' : 'position-relative rounded-pill overflow-hidden', " bg-white border ").concat(className),
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      onSearch();
    },
    ref: scrollRef
  }, isExpand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-md-none mb-1 font-weight-bold"
  }, "\u95DC\u9375\u5B57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex overflow-hidden trs-all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex flex-fill position-relative focus-within:bg-[#f4f8f9] rounded-pill ".concat(isExpand ? 'mr-md-6' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", {
    className: "sr-only",
    htmlFor: "keyword"
  }, "\u95DC\u9375\u5B57"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_composition_input__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "search",
    className: "".concat(!isExpand && ' border-[transparent]', " ipt ipt-keyword px-3 rounded-pill focus:bg-[transparent]"),
    placeholder: (0,components_I18N__WEBPACK_IMPORTED_MODULE_6__.translate)('請輸入關鍵字', lang),
    value: keyword,
    maxLength: "50",
    onKeyPress: function onKeyPress(e) {
      if (e.key === 'Enter') {
        toggleExpand(false);
      }
    },
    onKeyUp: function onKeyUp(e) {
      var reg = /[`~!@#$%^&*()+=|{}':;',/\/\[\].<>/?~！@#￥%……&*（）——+|{}【】‘；：”“’。，、？]/g;
      var text = keyword.replace(reg, '');
      setKeyword(text);
    },
    onInputChange: function onInputChange(e) {
      setKeyword(e.target.value);
    },
    onFocus: function onFocus() {
      if (!options.noAdvance) {
        toggleExpand(true);
      }
    },
    ref: keywordRef,
    autoComplete: "off",
    id: "keyword"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "ipt-focus-show d-flex align-items-center h-100 pr-20px absolute-top-right pointer-events-none text-info fz-13px trs-all mr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], {
    params: [preQueryData.length]
  }, !!preQueryData.length ? "\u5171\u6709{0}\u500B\u7D50\u679C" : '暫無資料'))), isExpand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "fixed top-0 right-0 d-flex d-md-block justify-content-end p-2 p-md-0 pointer-events-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-ghost w-5 h-5 rounded pointer-events-auto rounded-circle",
    type: "button",
    onClick: function onClick() {
      /* setPreQueryKeyword(keyword)
      setPreQueryCategorySelected(
          categorySelected
      )*/
      resetToDefault();
      toggleExpand(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-close fz-24px fz-md-16px",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "sr-only"
  }, "\u95DC\u9589"))), options.noAdvance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary d-none d-md-flex h-5 px-20px ml-1 rounded-pill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u67E5\u8A62")), !options.noAdvance && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "".concat(isExpand && 'op-0 pointer-events-none d-none', " btn btn-secondary flex-shrink-0 h-5 px-20px ml-1 rounded-pill trs-all position-relative"),
    type: "button",
    onClick: function onClick() {
      toggleExpand(true);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
    className: "icon icon-adv",
    "aria-hidden": "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
    className: "d-none d-md-block pl-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u9032\u968E\u641C\u5C0B")), (!!category.length || !!zipcode.length || !!county.length || !!transport.length || !!days.length || !!brand.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-6px h-6px mt-1 mr-10px bg-danger absolute-top-right rounded-circle"
  }))), isExpand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "condition-blk d-xl-flex flex-column bg-white"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "condition-scroll-blk pt-2 pb-md-1 px-md-1"
  }, options.category && !!(categoryData !== null && categoryData !== void 0 && categoryData.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u985E\u578B")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, categoryData.map(function (cate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: cate.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-5 px-20px fz-15px ".concat(category.includes(cate.id) ? 'btn-secondary' : '', " rounded"),
      onClick: function onClick() {
        preQueryWithCategory(cate.id);
      }
    }, cate.name));
  }))), options.county && !!(countyData !== null && countyData !== void 0 && countyData.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u7E23\u5E02")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, countyData.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: c.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-5 px-20px fz-15px ".concat(county.includes(c.id) ? 'btn-secondary' : '', " rounded"),
      onClick: function onClick() {
        preQueryWithCounty(c.id);
      }
    }, c.name));
  }))), options.brand && !!(tourismBrandData !== null && tourismBrandData !== void 0 && tourismBrandData.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u89C0\u5149\u5708\u5206\u985E")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, tourismBrandData.map(function (cate) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: cate.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-5 px-20px fz-15px ".concat(brand.includes(cate.tourismBrandTag) ? 'btn-secondary' : '', " rounded"),
      onClick: function onClick() {
        preQueryWithBrand(cate.tourismBrandTag);
      }
    }, cate.title));
  }))), options.days && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, "\u65C5\u904A\u5929\u6578"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, DAY_MAP.map(function (d) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: d.value
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-5 px-20px fz-15px ".concat(days.includes(d.value) ? 'btn-secondary' : '', " rounded"),
      onClick: function onClick() {
        preQueryWithDay(d.value);
      }
    }, "".concat(d.name)));
  }))), options.transport && !!(transportData !== null && transportData !== void 0 && transportData.length) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u4EA4\u901A\u5DE5\u5177")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, transportData.map(function (tran) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: tran.id
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-5 px-20px fz-15px ".concat(transport.includes(tran.id) ? 'btn-secondary' : '', " rounded"),
      onClick: function onClick() {
        preQueryWithTransport(tran.id);
      }
    }, tran.name));
  }))), options.zipcode && zipcodeData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "position-relative mb-3 mb-0-last"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mb-12px font-weight-bold"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u884C\u653F\u5340")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "d-flex flex-wrap"
  }, zipcodeData.map(function (region) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      className: "mr-12px mb-12px",
      key: region.zipcode
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      type: "button",
      className: "btn h-6 px-20px fz-15px rounded ".concat(zipcode.includes(region.zipcode * 1) ? 'btn-secondary' : ''),
      onClick: function onClick() {
        preQueryWithZipcode(region.zipcode * 1);
      }
    }, region.name));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "button-blk fixed-bottom w-100 p-2 border-top bg-white z-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-flex justify-content-between pb-safe-area"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    type: "button",
    className: "btn btn-ghost px-2 rounded fz-xl-16px text-info",
    onClick: function onClick() {
      setKeyword('');
      setCategory([]);
      setZipcode([]);
      setCounty([]);
      setDay([]);
      setTransport([]);
      setBrand([]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], null, "\u6E05\u9664")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "btn btn-secondary w-240px px-2 py-1 rounded"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_6__["default"], {
    params: [preQueryData.length]
  }, !!preQueryData.length ? "\u5171\u6709 {0} \u500B\u7D50\u679C" : '暫無資料'))))))), isExpand && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "d-none d-md-block fixed-top z-10 w-100 h-100 bg-white-50",
    onClick: function onClick() {
      resetToDefault();
      toggleExpand(false);
    }
  }));
};
_s2(ConditionSearchBlk, "QFdg1f/JabC6GPed5FTVRcqQr3Y=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams];
});
_c3 = ConditionSearchBlk;
_s(ConditionSearchBlk, "jy1PF9CMkOa+xBjSp6aRbNulopo=", false, function () {
  return [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams, react_router_dom__WEBPACK_IMPORTED_MODULE_1__.useSearchParams];
});
_c = ConditionSearchBlk;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(ConditionSearchBlk));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "ConditionSearchBlk");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "ConditionSearchBlk");

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

/***/ "./src/views/pick/Introduction.js"
/*!****************************************!*\
  !*** ./src/views/pick/Introduction.js ***!
  \****************************************/
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






var pickIntroduce = [{
  titleColor: '季節',
  title: '採果',
  content: ['台灣是一個被冠上「水果王國」的鮮美國度，一起親手體驗採果樂趣，品嚐鮮採水果最新鮮的原味，還能品嚐到當地、當季的低里程田園美食，吃出新鮮食材的美味，最後還能採購到當地特色伴手禮，把旅遊記憶通通帶回家！'],
  img: '/images/pick/harvest-1.jpg',
  deco: '/images/pick/deco-1.png',
  decoW: 400,
  color: '#2D7316',
  colorLight: '#82BE66',
  hover: 'hover:bg-[#E4F4DD]'
}];
var Introduction = function Introduction() {
  _s2();
  _s();
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale)();
  var isLayoutXL = (0,hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"])('(min-width: 1024px)');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "max-w-[1280px] mx-auto px-xl-5 px-md-3 px-2"
  }, pickIntroduce.map(function (theme, i) {
    var _theme$links;
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
      fill: theme.colorLight
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
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.titleColor), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      style: {
        color: theme.color
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "fz-xl-24px fz-md-22px fz-20px text-info"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], null, theme.sub))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "mb-lg-7 mb-4 fz-md-18px fz-16px max-w-[720px]"
    }, theme.content.map(function (content, j) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: j
      }, content);
    })), (_theme$links = theme.links) === null || _theme$links === void 0 ? void 0 : _theme$links.map(function (links, k) {
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
      className: "lg:w-[400px] w-[320px] absolute lg:right-[10%] md:right-[10%] lg:bottom-[-5%] md:bottom-[25%] right-[auto] bottom-[0] -z-10 opacity-20 lg:opacity-100",
      alt: "",
      "aria-hidden": "true"
    })));
  })));
};
_s2(Introduction, "19RS3WgMSWl0an8//ft2jCZqyKE=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
_c3 = Introduction;
_s(Introduction, "19RS3WgMSWl0an8//ft2jCZqyKE=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_1__.useLocale, hooks_useMedia__WEBPACK_IMPORTED_MODULE_2__["default"]];
});
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

/***/ "./src/views/pick/Notice.js"
/*!**********************************!*\
  !*** ./src/views/pick/Notice.js ***!
  \**********************************/
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




var rule = ['農事不易，水果的種類繁多，各種水果的採果原則各不相同，請依照農場及果園的體驗規則，共同維護果園環境，萬分感謝。', '採果時，請選擇新鮮且成熟的水果，才可品嚐到水果最美的滋味喔!', '顆顆珍果均是農夫們的心血，看準後下手避免造成浪費。', '水果因季節變化易影響水果產季，前往農場及果園採果前務必事先聯繫、預約。'];
var Notice = function Notice() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-xl-10 pt-md-5 pb-md-10 pt-4 py-8 bg-gradient-to-t from-[#FFF6DE] px-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BlockTitle__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u63A1\u679C\u6CE8\u610F\u4E8B\u9805",
    className: "mx-auto"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100 max-w-[900px] mx-auto bg-[#fff] md:rounded-[32px] rounded-[16px] p-3 p-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "list"
  }, rule.map(function (rule, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "fz-18px fz-lx-20px mb-3 last:mb-[0] flex md:flex-row flex-col md:justify-start justify-center md:items-start items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("i", {
      className: "md:mr-[8px] d-inline-block w-[28px] h-[28px] align-middle mb-[16px] md:mb-[0] shrink-[0]",
      "aria-hidden": "true",
      style: {
        backgroundImage: "url(/images/global/tip.png)",
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_I18N__WEBPACK_IMPORTED_MODULE_1__["default"], null, rule));
  }))));
};
_c3 = Notice;
_c = Notice;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(Notice));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "Notice");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "Notice");

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

/***/ "./src/views/pick/SearchList.js"
/*!**************************************!*\
  !*** ./src/views/pick/SearchList.js ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FarmCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FarmCard */ "./src/components/FarmCard.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var SearchList = function SearchList(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "px-md-[24px] mb-[56px] md:mb-[120px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "mx-auto px-[16px] md:px-[24px] py-[24px] md:py-[40px] max-w-[1280px] text-left "
  }, !!data && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", {
    className: "grid grid-cols-1 xl:grid-cols-2 gap-[16px] md:gap-[24px]"
  }, data.map(function (item, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", {
      key: i,
      className: "flex"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_FarmCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item
    }));
  }))));
};
_c3 = SearchList;
_c = SearchList;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_c2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(SearchList));
var _c, _c2;
__webpack_require__.$Refresh$.register(_c, "SearchList");
__webpack_require__.$Refresh$.register(_c2, "%default%");
var _c3;
__webpack_require__.$Refresh$.register(_c3, "SearchList");

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

/***/ "./src/views/pick/index.js"
/*!*********************************!*\
  !*** ./src/views/pick/index.js ***!
  \*********************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/bannerTitle */ "./src/components/bannerTitle.js");
/* harmony import */ var _Introduction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Introduction */ "./src/views/pick/Introduction.js");
/* harmony import */ var _Notice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Notice */ "./src/views/pick/Notice.js");
/* harmony import */ var components_BlockTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/BlockTitle */ "./src/components/BlockTitle.js");
/* harmony import */ var components_SearchBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/SearchBar */ "./src/components/SearchBar.js");
/* harmony import */ var _components_ConditionSearchBlk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ConditionSearchBlk */ "./src/components/ConditionSearchBlk.js");
/* harmony import */ var _SearchList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchList */ "./src/views/pick/SearchList.js");
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! api */ "./src/api/index.js");
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks */ "./src/hooks/index.js");
/* harmony import */ var constants_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! constants/utils */ "./src/constants/utils.js");
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
  var lang = (0,hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale)();
  var _useSpotsData = (0,api__WEBPACK_IMPORTED_MODULE_8__.useSpotsData)({
      lang: lang
    }),
    data = _useSpotsData.data,
    county = _useSpotsData.county,
    fruit = _useSpotsData.fruit;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(data || []),
    _useState2 = _slicedToArray(_useState, 2),
    filteredData = _useState2[0],
    setFilteredData = _useState2[1];
  var query = (0,hooks__WEBPACK_IMPORTED_MODULE_9__.useQueryObject)();
  console.log('data', data);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_bannerTitle__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: '走吧！來趟水果之旅',
    sub: "\u63A1\u679C\u4F55\u8655\u53BB",
    content: "\u65C5\u4EBA\u5011\u4E0D\u50C5\u53EF\u4EE5\u5728\u81FA\u7063\u54C1\u5690\u7576\u5B63\u9BAE\u63A1\u6C34\u679C\uFF0C\u9084\u53EF\u4EE5\u89AA\u81EA\u9AD4\u9A57\u63A1\u679C\u7684\u6A02\u8DA3\uFF0C \u8B93\u6211\u5011\u4E00\u540C\u62DC\u8A2A\u5168\u53F0\u5404\u5730\u679C\u5712\uFF01",
    img: "harvest.jpg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Introduction__WEBPACK_IMPORTED_MODULE_2__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Notice__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("section", {
    className: "py-5 py-xl-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(components_BlockTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "\u8ACB\u9078\u64C7\u63A1\u679C\u5340\u57DF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex justify-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_ConditionSearchBlk__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "mb-[32px] md:mb-[64px]  md:mx-auto max-w-[800px]",
    data: data,
    query: query,
    countyData: county,
    categoryData: fruit,
    options: {
      category: true,
      county: true
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchList__WEBPACK_IMPORTED_MODULE_7__["default"], {
    data: data
  })));
};
_s2(Page, "GPqHF3nq+X+4evkkUskCIgBEikA=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale, api__WEBPACK_IMPORTED_MODULE_8__.useSpotsData, hooks__WEBPACK_IMPORTED_MODULE_9__.useQueryObject];
});
_c3 = Page;
_s(Page, "DeHlJi8u1dQd92eKXpW+c7HLRfM=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_9__.useLocale, api__WEBPACK_IMPORTED_MODULE_8__.useSpotsData, hooks__WEBPACK_IMPORTED_MODULE_9__.useQueryObject];
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

/***/ },

/***/ "./styles/condition-search.scss"
/*!**************************************!*\
  !*** ./styles/condition-search.scss ***!
  \**************************************/
(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1788857883642
        var cssReload = __webpack_require__(/*! ../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3ZpZXdzX3BpY2tfaW5kZXhfanMtNDA4Mjc3YTAxNDBhNjQ5NjQ0ZTEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQ0FBMEQ7QUFDRztBQUNqQjtBQUNLO0FBQ0w7QUFDTjtBQUNXO0FBRWpELElBQU1XLE9BQU8sR0FBRyxDQUNaO0VBQUVDLEtBQUssRUFBRSxDQUFDO0VBQUVDLElBQUksRUFBRTtBQUFNLENBQUMsRUFDekI7RUFBRUQsS0FBSyxFQUFFLENBQUM7RUFBRUMsSUFBSSxFQUFFO0FBQU0sQ0FBQyxFQUN6QjtFQUFFRCxLQUFLLEVBQUUsQ0FBQztFQUFFQyxJQUFJLEVBQUU7QUFBTSxDQUFDLENBQzVCO0FBQ0QsSUFBTUMsV0FBVyxHQUFHLENBQ2hCO0VBQUVDLEVBQUUsRUFBRSxDQUFDO0VBQUVDLEtBQUssRUFBRSxJQUFJO0VBQUVDLFVBQVUsRUFBRSxHQUFHO0VBQUVDLFVBQVUsRUFBRTtBQUFJLENBQUMsRUFDeEQ7RUFBRUgsRUFBRSxFQUFFLENBQUM7RUFBRUMsS0FBSyxFQUFFLElBQUk7RUFBRUMsVUFBVSxFQUFFLEdBQUc7RUFBRUMsVUFBVSxFQUFFO0FBQUksQ0FBQyxDQUMzRDtBQUNELElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBa0JBLENBQUFDLElBQUEsRUFVbEI7RUFBQUMsR0FBQTtFQUFBQyxFQUFBO0VBQUEsSUFURkMsSUFBSSxHQUFBSCxJQUFBLENBQUpHLElBQUk7SUFDSkMsS0FBSyxHQUFBSixJQUFBLENBQUxJLEtBQUs7SUFDTEMsV0FBVyxHQUFBTCxJQUFBLENBQVhLLFdBQVc7SUFDWEMsWUFBWSxHQUFBTixJQUFBLENBQVpNLFlBQVk7SUFDWkMsYUFBYSxHQUFBUCxJQUFBLENBQWJPLGFBQWE7SUFDYkMsVUFBVSxHQUFBUixJQUFBLENBQVZRLFVBQVU7SUFDVkMs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Ty9CLDRDQUFTLEVBQ1U2Qiw2Q0FBWSxFQUU5QkMsaURBQWM7QUFBQTtBQUFBaEUsR0FBQSxHQUoxQmlFLElBQUk7QUFzQ1RyTCxFQUFBLENBdENLcUwsSUFBSTtFQUFBLFFBQ08vQiw0Q0FBUyxFQUNVNkIsNkNBQVksRUFFOUJDLGlEQUFjO0FBQUE7QUFBQS9ELEVBQUEsR0FKMUJnRSxJQUFJO0FBd0NWLGlFQUFBL0QsR0FBQSxnQkFBZTVJLGlEQUFVLENBQUMyTSxJQUFJLENBQUM7QUFBQSxJQUFBaEUsRUFBQSxFQUFBQyxHQUFBO0FBQUFFLHNDQUFBLENBQUFILEVBQUE7QUFBQUcsc0NBQUEsQ0FBQUYsR0FBQTtBQUFBLElBQUFGLEdBQUE7QUFBQUksc0NBQUEsQ0FBQUosR0FBQSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyRC9CO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMseUpBQTBFLGVBQWU7QUFDekg7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvY29tcG9uZW50cy9Db25kaXRpb25TZWFyY2hCbGsuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvRmFybUNhcmQuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL2NvbXBvbmVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy9jb21wb25lbnRzL2Jhbm5lclRpdGxlLmpzIiwid2VicGFjazovL2NzaWktZjJlLXdvcmstZmxvdy8uL3NyYy92aWV3cy9waWNrL0ludHJvZHVjdGlvbi5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3MvcGljay9Ob3RpY2UuanMiLCJ3ZWJwYWNrOi8vY3NpaS1mMmUtd29yay1mbG93Ly4vc3JjL3ZpZXdzL3BpY2svU2VhcmNoTGlzdC5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zcmMvdmlld3MvcGljay9pbmRleC5qcyIsIndlYnBhY2s6Ly9jc2lpLWYyZS13b3JrLWZsb3cvLi9zdHlsZXMvY29uZGl0aW9uLXNlYXJjaC5zY3NzP2ZkYjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUGFyYW1zLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJ1xuaW1wb3J0IENJbnB1dCBmcm9tICdyZWFjdC1jb21wb3NpdGlvbi1pbnB1dCdcbmltcG9ydCB7IGZpbHRlcldpdGhRdWVyeSB9IGZyb20gJ2NvbnN0YW50cy91dGlscydcbmltcG9ydCB7IG1ha2VQYXJhbXMgfSBmcm9tICdjb25zdGFudHMvdXRpbHMnXG5pbXBvcnQgJy9zdHlsZXMvY29uZGl0aW9uLXNlYXJjaC5zY3NzJ1xuaW1wb3J0IEkxOE4sIHsgdHJhbnNsYXRlIH0gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuXG5jb25zdCBEQVlfTUFQID0gW1xuICAgIHsgdmFsdWU6IDEsIG5hbWU6ICfkuIDml6XpgYonIH0sXG4gICAgeyB2YWx1ZTogMiwgbmFtZTogJ+S6jOaXpemBiicgfSxcbiAgICB7IHZhbHVlOiAwLCBuYW1lOiAn5aSa5pel6YGKJyB9XG5dXG5jb25zdCBBUkVBX0NPTkZJRyA9IFtcbiAgICB7IGlkOiAxLCB0aXRsZTogJ+iKseiTricsIHppcGNvZGVNaW46IDk3MCwgemlwY29kZU1heDogOTgzIH0sXG4gICAgeyBpZDogMiwgdGl0bGU6ICflj7DmnbEnLCB6aXBjb2RlTWluOiA5NTAsIHppcGNvZGVNYXg6IDk2NiB9XG5dXG5jb25zdCBDb25kaXRpb25TZWFyY2hCbGsgPSAoe1xuICAgIGRhdGEsXG4gICAgcXVlcnksXG4gICAgemlwY29kZURhdGEsXG4gICAgY2F0ZWdvcnlEYXRhLFxuICAgIHRyYW5zcG9ydERhdGEsXG4gICAgY291bnR5RGF0YSxcbiAgICB0b3VyaXNtQnJhbmREYXRhLFxuICAgIG9wdGlvbnMgPSB7fSxcbiAgICBjbGFzc05hbWVcbn0pID0+IHtcbiAgICBjb25zdCB7IGxhbmcgPSAnemgtdHcnIH0gPSB1c2VQYXJhbXMoKVxuICAgIGNvbnN0IFtrZXl3b3JkLCBzZXRLZXl3b3JkXSA9IHVzZVN0YXRlKHF1ZXJ5Py5rZXl3b3JkKVxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gdXNlU3RhdGUoXG4gICAgICAgIHF1ZXJ5LmNhdGVnb3J5ID8gcXVlcnkuY2F0ZWdvcnkuc3BsaXQoJywnKS5tYXAoKGNhdGUpID0+IGNhdGUgKiAxKSA6IFtdXG4gICAgKVxuICAgIGNvbnN0IFt0cmFuc3BvcnQsIHNldFRyYW5zcG9ydF0gPSB1c2VTdGF0ZShcbiAgICAgICAgcXVlcnkudHJhbnNwb3J0XG4gICAgICAgICAgICA/IHF1ZXJ5LnRyYW5zcG9ydC5zcGxpdCgnLCcpLm1hcCgodHJhbikgPT4gdHJhbiAqIDEpXG4gICAgICAgICAgICA6IFtdXG4gICAgKVxuICAgIGNvbnN0IFt6aXBjb2RlLCBzZXRaaXBjb2RlXSA9IHVzZVN0YXRlKFxuICAgICAgICBxdWVyeS56aXBjb2RlID8gcXVlcnkuemlwY29kZS5zcGxpdCgnLCcpLm1hcCgoemlwKSA9PiB6aXAgKiAxKSA6IFtdXG4gICAgKVxuICAgIGNvbnN0IFtjb3VudHksIHNldENvdW50eV0gPSB1c2VTdGF0ZShcbiAgICAgICAgcXVlcnkuY291bnR5ID8gcXVlcnkuY291bnR5LnNwbGl0KCcsJykubWFwKChjKSA9PiBjICogMSkgOiBbXVxuICAgIClcbiAgICBjb25zdCBbZGF5cywgc2V0RGF5XSA9IHVzZVN0YXRlKFxuICAgICAgICBxdWVyeS5kYXlzID8gcXVlcnkuZGF5cy5zcGxpdCgnLCcpLm1hcCgoZCkgPT4gZCAqIDEpIDogW11cbiAgICApXG4gICAgY29uc3QgW2JyYW5kLCBzZXRCcmFuZF0gPSB1c2VTdGF0ZShcbiAgICAgICAgcXVlcnkuYnJhbmQgPyBxdWVyeS5icmFuZC5zcGxpdCgnLCcpLm1hcCgoY2F0ZSkgPT4gY2F0ZSAqIDEpIDogW11cbiAgICApXG4gICAgY29uc3QgcHJlUXVlcnlEYXRhID1cbiAgICAgICAgZmlsdGVyV2l0aFF1ZXJ5KGRhdGEsIHtcbiAgICAgICAgICAgIGtleXdvcmQsXG4gICAgICAgICAgICBjYXRlZ29yeSxcbiAgICAgICAgICAgIHRyYW5zcG9ydCxcbiAgICAgICAgICAgIHppcGNvZGUsXG4gICAgICAgICAgICBjb3VudHksXG4gICAgICAgICAgICBkYXlzLFxuICAgICAgICAgICAgYnJhbmRcbiAgICAgICAgfSkgfHwgW11cblxuICAgIGNvbnN0IFtpc0V4cGFuZCwgdG9nZ2xlRXhwYW5kXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IHNjcm9sbFJlZiA9IHVzZVJlZihudWxsKVxuICAgIGNvbnN0IGtleXdvcmRSZWYgPSB1c2VSZWYobnVsbClcblxuICAgIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VTZWFyY2hQYXJhbXMoKVxuXG4gICAgY29uc3QgaXNJb3MgPSAvaXBob25lfGlwYWQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG4gICAgY29uc3Qgb25TZWFyY2ggPSAoKSA9PiB7XG4gICAgICAgIHNldFNlYXJjaFBhcmFtcyhcbiAgICAgICAgICAgIG1ha2VQYXJhbXMocXVlcnksIHtcbiAgICAgICAgICAgICAgICBrZXl3b3JkLFxuICAgICAgICAgICAgICAgIGNhdGVnb3J5LFxuICAgICAgICAgICAgICAgIHppcGNvZGUsXG4gICAgICAgICAgICAgICAgZGF5cyxcbiAgICAgICAgICAgICAgICBjb3VudHksXG4gICAgICAgICAgICAgICAgdHJhbnNwb3J0LFxuICAgICAgICAgICAgICAgIGJyYW5kXG4gICAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICAgIHRvZ2dsZUV4cGFuZChmYWxzZSlcbiAgICAgICAga2V5d29yZFJlZi5jdXJyZW50LmlucHV0LmJsdXIoKVxuICAgIH1cbiAgICBjb25zdCByZXNldFRvRGVmYXVsdCA9ICgpID0+IHtcbiAgICAgICAgc2V0S2V5d29yZChxdWVyeT8ua2V5d29yZCB8fCAnJylcblxuICAgICAgICBzZXRDYXRlZ29yeShcbiAgICAgICAgICAgIHF1ZXJ5LmNhdGVnb3J5XG4gICAgICAgICAgICAgICAgPyBxdWVyeS5jYXRlZ29yeS5zcGxpdCgnLCcpLm1hcCgoY2F0ZSkgPT4gY2F0ZSAqIDEpXG4gICAgICAgICAgICAgICAgOiBbXVxuICAgICAgICApXG4gICAgICAgIHNldFRyYW5zcG9ydChcbiAgICAgICAgICAgIHF1ZXJ5LnRyYW5zcG9ydFxuICAgICAgICAgICAgICAgID8gcXVlcnkudHJhbnNwb3J0LnNwbGl0KCcsJykubWFwKCh0cmFuKSA9PiB0cmFuICogMSlcbiAgICAgICAgICAgICAgICA6IFtdXG4gICAgICAgIClcbiAgICAgICAgc2V0WmlwY29kZShcbiAgICAgICAgICAgIHF1ZXJ5LnppcGNvZGUgPyBxdWVyeS56aXBjb2RlLnNwbGl0KCcsJykubWFwKCh6aXApID0+IHppcCAqIDEpIDogW11cbiAgICAgICAgKVxuICAgICAgICBzZXREYXkocXVlcnkuZGF5cyA/IHF1ZXJ5LmRheXMuc3BsaXQoJywnKS5tYXAoKGQpID0+IGQgKiAxKSA6IFtdKVxuICAgICAgICBzZXRCcmFuZChcbiAgICAgICAgICAgIHF1ZXJ5LmJyYW5kID8gcXVlcnkuYnJhbmQuc3BsaXQoJywnKS5tYXAoKGNhdGUpID0+IGNhdGUgKiAxKSA6IFtdXG4gICAgICAgIClcbiAgICB9XG4gICAgY29uc3QgcHJlUXVlcnlXaXRoQ2F0ZWdvcnkgPSAoaWQpID0+IHtcbiAgICAgICAgbGV0IGlkeCA9IGNhdGVnb3J5LmluZGV4T2YoaWQpXG4gICAgICAgIGlmIChpZHggPiAtMSkge1xuICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoWy4uLmNhdGVnb3J5LnNsaWNlKDAsIGlkeCksIC4uLmNhdGVnb3J5LnNsaWNlKGlkeCArIDEpXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldENhdGVnb3J5KFsuLi5jYXRlZ29yeSwgaWRdKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcHJlUXVlcnlXaXRoVHJhbnNwb3J0ID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBpZHggPSB0cmFuc3BvcnQuaW5kZXhPZihpZClcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICBzZXRUcmFuc3BvcnQoW1xuICAgICAgICAgICAgICAgIC4uLnRyYW5zcG9ydC5zbGljZSgwLCBpZHgpLFxuICAgICAgICAgICAgICAgIC4uLnRyYW5zcG9ydC5zbGljZShpZHggKyAxKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNldFRyYW5zcG9ydChbLi4udHJhbnNwb3J0LCBpZF0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJlUXVlcnlXaXRoWmlwY29kZSA9IChpZCkgPT4ge1xuICAgICAgICBsZXQgaWR4ID0gemlwY29kZS5pbmRleE9mKGlkKVxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIHNldFppcGNvZGUoWy4uLnppcGNvZGUuc2xpY2UoMCwgaWR4KSwgLi4uemlwY29kZS5zbGljZShpZHggKyAxKV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRaaXBjb2RlKFsuLi56aXBjb2RlLCBpZF0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcHJlUXVlcnlXaXRoQ291bnR5ID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBjb3VudHkuaW5kZXhPZihpZClcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICBzZXRDb3VudHkoWy4uLmNvdW50eS5zbGljZSgwLCBpZHgpLCAuLi5jb3VudHkuc2xpY2UoaWR4ICsgMSldKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0Q291bnR5KFsuLi5jb3VudHksIGlkXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHByZVF1ZXJ5V2l0aERheSA9IChkKSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBkYXlzLmluZGV4T2YoZClcbiAgICAgICAgaWYgKGlkeCA+IC0xKSB7XG4gICAgICAgICAgICBzZXREYXkoWy4uLmRheXMuc2xpY2UoMCwgaWR4KSwgLi4uZGF5cy5zbGljZShpZHggKyAxKV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXREYXkoWy4uLmRheXMsIGRdKVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHByZVF1ZXJ5V2l0aEJyYW5kID0gKGlkKSA9PiB7XG4gICAgICAgIGxldCBpZHggPSBicmFuZC5pbmRleE9mKGlkKVxuICAgICAgICBpZiAoaWR4ID4gLTEpIHtcbiAgICAgICAgICAgIHNldEJyYW5kKFsuLi5icmFuZC5zbGljZSgwLCBpZHgpLCAuLi5icmFuZC5zbGljZShpZHggKyAxKV0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXRCcmFuZChbLi4uYnJhbmQsIGlkXSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChpc0V4cGFuZCAmJiBzY3JvbGxSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgc2Nyb2xsUmVmLmN1cnJlbnQuc2Nyb2xsVG9wID0gMFxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0V4cGFuZCAmJiBrZXl3b3JkUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGtleXdvcmRSZWYuY3VycmVudC5pbnB1dC5mb2N1cygpXG4gICAgICAgIH1cbiAgICB9LCBbaXNFeHBhbmRdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcmVzZXRUb0RlZmF1bHQoKVxuICAgIH0sIFtxdWVyeV0pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjaGFyQ29kZSA9IGUud2hpY2ggPyBlLndoaWNoIDogZS5rZXlDb2RlXG4gICAgICAgICAgICBpZiAoY2hhckNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAgICAgdG9nZ2xlRXhwYW5kKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sIFtdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29uZGl0aW9uLXNlYXJjaC1ibGsgZmxleC1maWxsIGZsZXgtc2hyaW5rLTAgJHtcbiAgICAgICAgICAgICAgICAgICAgaXNFeHBhbmRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gJ3Nob3cgZml4ZWQtdG9wIGgtMTAwIHotMjAwMCBwLTIgcHQtNyBwYi04IHNjcm9sbC1ibGsgYm9yZGVyLVt0cmFuc3BhcmVudF0nXG4gICAgICAgICAgICAgICAgICAgICAgICA6ICdwb3NpdGlvbi1yZWxhdGl2ZSByb3VuZGVkLXBpbGwgb3ZlcmZsb3ctaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH0gYmctd2hpdGUgYm9yZGVyICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICBvblNlYXJjaCgpXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICByZWY9e3Njcm9sbFJlZn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7aXNFeHBhbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtbWQtbm9uZSBtYi0xIGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIOmXnOmNteWtl1xuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG92ZXJmbG93LWhpZGRlbiB0cnMtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LWZpbGwgcG9zaXRpb24tcmVsYXRpdmUgZm9jdXMtd2l0aGluOmJnLVsjZjRmOGY5XSByb3VuZGVkLXBpbGwgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZCA/ICdtci1tZC02JyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwia2V5d29yZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmXnOmNteWtl1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhaXNFeHBhbmQgJiYgJyBib3JkZXItW3RyYW5zcGFyZW50XSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGlwdCBpcHQta2V5d29yZCBweC0zIHJvdW5kZWQtcGlsbCBmb2N1czpiZy1bdHJhbnNwYXJlbnRdYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dHJhbnNsYXRlKCfoq4vovLjlhaXpl5zpjbXlrZcnLCBsYW5nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5d29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVFeHBhbmQoZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5VXA9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZyA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvW2B+IUAjJCVeJiooKSs9fHt9Jzo7JywvXFwvXFxbXFxdLjw+Lz9+77yBQCPvv6Ul4oCm4oCmJirvvIjvvInigJTigJQrfHt944CQ44CR4oCY77yb77ya4oCd4oCc4oCZ44CC77yM44CB77yfXS9nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHQgPSBrZXl3b3JkLnJlcGxhY2UocmVnLCAnJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXl3b3JkKHRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbklucHV0Q2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRLZXl3b3JkKGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Gb2N1cz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW9wdGlvbnMubm9BZHZhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVFeHBhbmQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXtrZXl3b3JkUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJrZXl3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaXB0LWZvY3VzLXNob3cgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMCBwci0yMHB4IGFic29sdXRlLXRvcC1yaWdodCBwb2ludGVyLWV2ZW50cy1ub25lIHRleHQtaW5mbyBmei0xM3B4IHRycy1hbGwgbXItM2B9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4gcGFyYW1zPXtbcHJlUXVlcnlEYXRhLmxlbmd0aF19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ISFwcmVRdWVyeURhdGEubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGDlhbHmnIl7MH3lgIvntZDmnpxgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICfmmqvnhKHos4fmlpknfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge2lzRXhwYW5kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgdG9wLTAgcmlnaHQtMCBkLWZsZXggZC1tZC1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtZW5kIHAtMiBwLW1kLTAgcG9pbnRlci1ldmVudHMtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCB3LTUgaC01IHJvdW5kZWQgcG9pbnRlci1ldmVudHMtYXV0byByb3VuZGVkLWNpcmNsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKiBzZXRQcmVRdWVyeUtleXdvcmQoa2V5d29yZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFByZVF1ZXJ5Q2F0ZWdvcnlTZWxlY3RlZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeVNlbGVjdGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKi9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VG9EZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUV4cGFuZChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tY2xvc2UgZnotMjRweCBmei1tZC0xNnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj7pl5zplok8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge29wdGlvbnMubm9BZHZhbmNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgZC1ub25lIGQtbWQtZmxleCBoLTUgcHgtMjBweCBtbC0xIHJvdW5kZWQtcGlsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPuafpeipojwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICB7IW9wdGlvbnMubm9BZHZhbmNlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0V4cGFuZCAmJiAnb3AtMCBwb2ludGVyLWV2ZW50cy1ub25lIGQtbm9uZSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGJ0biBidG4tc2Vjb25kYXJ5IGZsZXgtc2hyaW5rLTAgaC01IHB4LTIwcHggbWwtMSByb3VuZGVkLXBpbGwgdHJzLWFsbCBwb3NpdGlvbi1yZWxhdGl2ZWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVFeHBhbmQodHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hZHZcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1ub25lIGQtbWQtYmxvY2sgcGwtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj7pgLLpmo7mkJzlsIs8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsoISFjYXRlZ29yeS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF6aXBjb2RlLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhIWNvdW50eS5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISF0cmFuc3BvcnQubGVuZ3RoIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhZGF5cy5sZW5ndGggfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgISFicmFuZC5sZW5ndGgpICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTZweCBoLTZweCBtdC0xIG1yLTEwcHggYmctZGFuZ2VyIGFic29sdXRlLXRvcC1yaWdodCByb3VuZGVkLWNpcmNsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7aXNFeHBhbmQgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1ibGsgZml4ZWQtdG9wIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIHAtMiBwLW1kLTJweCBtdC1tZC02IHBvaW50ZXItZXZlbnRzLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWdob3N0IHctNSBoLTUgcm91bmRlZCBwb2ludGVyLWV2ZW50cy1hdXRvIG14LW1kLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRUb0RlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRXhwYW5kKGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImljb24gaWNvbi1jbG9zZSBmei0yNHB4IGZ6LW1kLTE2cHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPumXnOmWiTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb25kaXRpb24tYmxrIGQteGwtZmxleCBmbGV4LWNvbHVtbiBiZy13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29uZGl0aW9uLXNjcm9sbC1ibGsgcHQtMiBwYi1tZC0xIHB4LW1kLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuY2F0ZWdvcnkgJiYgISFjYXRlZ29yeURhdGE/Lmxlbmd0aCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1iLTMgbWItMC1sYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMnB4IGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+6aGe5Z6LPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yeURhdGEubWFwKChjYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xMnB4IG1iLTEycHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gaC01IHB4LTIwcHggZnotMTVweCAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHJvdW5kZWRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVRdWVyeVdpdGhDYXRlZ29yeShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy5jb3VudHkgJiYgISFjb3VudHlEYXRhPy5sZW5ndGggJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtYi0zIG1iLTAtbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJweCBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPue4o+W4gjwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnR5RGF0YS5tYXAoKGMpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEycHggbWItMTJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjLmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBoLTUgcHgtMjBweCBmei0xNXB4ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb3VudHkuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHJvdW5kZWRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVRdWVyeVdpdGhDb3VudHkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2MubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuYnJhbmQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdG91cmlzbUJyYW5kRGF0YT8ubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1iLTMgbWItMC1sYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJweCBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj7op4DlhYnlnIjliIbpoZ48L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RvdXJpc21CcmFuZERhdGEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjYXRlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMTJweCBtYi0xMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBoLTUgcHgtMjBweCBmei0xNXB4ICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyYW5kLmluY2x1ZGVzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZS50b3VyaXNtQnJhbmRUYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHJvdW5kZWRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlUXVlcnlXaXRoQnJhbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlLnRvdXJpc21CcmFuZFRhZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2F0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcHRpb25zLmRheXMgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtYi0zIG1iLTAtbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJweCBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaXhemBiuWkqeaVuFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtEQVlfTUFQLm1hcCgoZCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMTJweCBtYi0xMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2QudmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGgtNSBweC0yMHB4IGZ6LTE1cHggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheXMuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IHJvdW5kZWRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVRdWVyeVdpdGhEYXkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2QubmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3B0aW9ucy50cmFuc3BvcnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICEhdHJhbnNwb3J0RGF0YT8ubGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1iLTMgbWItMC1sYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMTJweCBmb250LXdlaWdodC1ib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj7kuqTpgJrlt6Xlhbc8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW5zcG9ydERhdGEubWFwKCh0cmFuKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEycHggbWItMTJweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17dHJhbi5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGgtNSBweC0yMHB4IGZ6LTE1cHggJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc3BvcnQuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW4uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2J0bi1zZWNvbmRhcnknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gcm91bmRlZGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlUXVlcnlXaXRoVHJhbnNwb3J0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyYW4ubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wdGlvbnMuemlwY29kZSAmJiB6aXBjb2RlRGF0YSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1iLTMgbWItMC1sYXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0xMnB4IGZvbnQtd2VpZ2h0LWJvbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+6KGM5pS/5Y2APC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt6aXBjb2RlRGF0YS5tYXAoKHJlZ2lvbikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMTJweCBtYi0xMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3JlZ2lvbi56aXBjb2RlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBoLTYgcHgtMjBweCBmei0xNXB4IHJvdW5kZWQgJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHppcGNvZGUuaW5jbHVkZXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnaW9uLnppcGNvZGUgKlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYnRuLXNlY29uZGFyeSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVRdWVyeVdpdGhaaXBjb2RlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2lvbi56aXBjb2RlICpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlZ2lvbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLWJsayBmaXhlZC1ib3R0b20gdy0xMDAgcC0yIGJvcmRlci10b3AgYmctd2hpdGUgei0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gcGItc2FmZS1hcmVhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1naG9zdCBweC0yIHJvdW5kZWQgZnoteGwtMTZweCB0ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0S2V5d29yZCgnJylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnkoW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFppcGNvZGUoW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldENvdW50eShbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF5KFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUcmFuc3BvcnQoW10pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEJyYW5kKFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+5riF6ZmkPC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IHctMjQwcHggcHgtMiBweS0xIHJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4TiBwYXJhbXM9e1twcmVRdWVyeURhdGEubGVuZ3RoXX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshIXByZVF1ZXJ5RGF0YS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gYOWFseaciSB7MH0g5YCL57WQ5p6cYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAn5pqr54Sh6LOH5paZJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIHtpc0V4cGFuZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLW5vbmUgZC1tZC1ibG9jayBmaXhlZC10b3Agei0xMCB3LTEwMCBoLTEwMCBiZy13aGl0ZS01MFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0VG9EZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZUV4cGFuZChmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ29uZGl0aW9uU2VhcmNoQmxrKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRodW1iRnJhbWUgZnJvbSAnLi9UaHVtYkZyYW1lJ1xuaW1wb3J0IEF1dG9Td2l0Y2hMaW5rIGZyb20gJy4uL2NvbXBvbmVudHMvQXV0b1N3aXRjaExpbmsnXG5cbmNvbnN0IEZhcm1DYXJkID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgY29uc3QgeyBjb3ZlciwgYWRkcmVzcywgbmFtZSwgdGVsLCB1cmwgfSA9IGRhdGFcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxBdXRvU3dpdGNoTGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleC1ncm93IHJlbGF0aXZlIHJvdW5kZWQtWzE2cHhdIG1kOnJvdW5kZWQtWzMycHhdIGJvcmRlci1zb2xpZCBib3JkZXItWzFweF0gYm9yZGVyLVsjZjBmMGYwXSB0cnMtYWxsIHhsOmhvdmVyOnJpbmctWzFweF0geGw6aG92ZXI6Ym9yZGVyLVsjODJiZTY2XSB4bDpob3ZlcjpyaW5nLVsjODJiZTY2XSBncm91cFwiXG4gICAgICAgICAgICBocmVmPXt1cmx9XG4gICAgICAgICAgICB0aXRsZT17bmFtZX1cbiAgICAgICAgICAgIGlzTGlua091dD17dHJ1ZX1cbiAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBhYnNvbHV0ZSB0b3AtMCByaWdodC0wIHctWzQwcHhdIG1kOnctWzUycHhdIG1kOmgtWzUycHhdIGFzcGVjdC1zcXVhcmUgYmctWyM4MmJlNjZdIHRycy1hbGwgeGw6YmctW3RyYW5zcGFyZW50XSB4bDpncm91cC1ob3ZlcjpiZy1bIzgyYmU2Nl0gcm91bmRlZC10ci1bMTZweF0gcm91bmRlZC1ibC1bMTZweF0gIG1kOnJvdW5kZWQtdHItWzMwcHhdIG1kOnJvdW5kZWQtYmwtWzMwcHhdXCJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbiBpY29uLWxpbmstb3V0IHRleHQtWyNmZmZdIHhsOnRleHQtWyNjNGM0YzRdIHctWzIwcHhdIGgtWzIwcHhdIHRycy1hbGwgZ3JvdXAtaG92ZXI6dGV4dC1bI2ZmZl1cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleFwiPlxuICAgICAgICAgICAgICAgIHshIWNvdmVyID4gbGVuZ3RoICYmIChcbiAgICAgICAgICAgICAgICAgICAgPFRodW1iRnJhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXgtbm9uZSBtZDpteS1bMjRweF0gbWQ6bWwtWzI0cHhdIGFzcGVjdC1bMS40OTc4MTY1OV0gbWQ6YXNwZWN0LXNxdWFyZSB3LWZ1bGwgbWQ6dy1bMTc2cHhdIG1kOmgtWzE3NnB4XSBiZy1ncmFkaWVudC10by1iciBmcm9tLVsjZmZmNWQ5XSB0by1bI2ZiY2U0Y10gaC1zY3JlZW4gdy1mdWxsIHJvdW5kZWQtdC1bMTZweF0gbWQ6cm91bmRlZC1bMzJweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtjb3Zlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3JhdGlvPVwiMTZieTlcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcy1bMTZweF0gcHktWzE2cHhdIHBlLVs0MHB4XSBtZDpwZS1bNTJweF0gcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVsyMnB4XSBtZDp0ZXh0LVsyNHB4XSBmb250LWJvbGQgdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBnYXAtWzhweF0gbXktWzE2cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1suLi5uZXcgQXJyYXkoNSldLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgdy1bODBweF0gaC1bMzBweF0gcm91bmRlZC1waWxsIGJvcmRlci1bI2YwZjBmMF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bMXB4XVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuL2ltYWdlcy9pY29uLWZydWl0L3BsdW1sZWUucG5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwbHVtbGVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1bMjBweF0gaC1bMjBweF0gbXItWzRweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMTZweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmnY7lrZBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWxlZnQgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wIHctWzIwcHhdIGgtWzIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi10ZWwgdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgbWwtWzRweF0gdGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RlbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1sZWZ0IGl0ZW1zLXN0YXJ0IG10LVs0cHhdXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBmbGV4LXNocmluay0wICB3LVsyMHB4XSBoLVsyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tbG9jYXRpb24gdGV4dC1bIzgyYmU2Nl1cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgbWwtWzRweF0gdGV4dC1bMTRweF0gbWQ6dGV4dC1bMThweF0gdGV4dC1bIzNjM2MzY11cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZHJlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9BdXRvU3dpdGNoTGluaz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmFybUNhcmQpXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IFNlYXJjaEJhciA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuIG15LVszMnB4XSBtZDpteS1bNjRweF0gbXgtYXV0byBtYXgtdy1bODAwcHhdIHJvdW5kZWQtcGlsbCBib3JkZXItWzFweF0gYm9yZGVyLXNvbGlkIGJvcmRlci1bI2YwZjBmMF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC1bMTJweF1cIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uIGljb24tc2VhcmNoIHRleHQtWzI0cHhdXCI+PC9pPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZmlsbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBoLTEwMFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi6KuL6Ly45YWl6Zec6Y215a2XXCJcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHB5LVsxMnB4XSBweC1bMjRweF0gcm91bmRlZC1waWxsIGJvcmRlci1bMnB4XSBib3JkZXItc29saWQgYm9yZGVyLVsjODJiZTY2XSB0cnMtYWxsIGhvdmVyOmJnLVsjRTRGNEREXVwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb24gaWNvbi1hZHYtZmlsbCB0ZXh0LVsyNHB4XSB0ZXh0LVsjODJiZTY2XVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBtZDpibG9jayBtbC1bNHB4XSBmb250LWJvbGQgdGV4dC1bIzJkNzMxNl0gdGV4dC1bMThweF1cIj5cbiAgICAgICAgICAgICAgICAgICAg6YCy6ZqO5pCc5bCLXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEJhcilcbiIsImltcG9ydCBCcmVhZGNydW1icyBmcm9tICdjb21wb25lbnRzL0JyZWFkY3J1bWJzJ1xuaW1wb3J0IEkxOE4gZnJvbSAnY29tcG9uZW50cy9JMThOJ1xuaW1wb3J0IHVzZU1lZGlhIGZyb20gJ2hvb2tzL3VzZU1lZGlhJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBCYW5uZXJUaXRsZSA9ICh7IHRpdGxlLCBzdWIsIGNvbnRlbnQsIGltZyB9KSA9PiB7XG4gICAgY29uc3QgaXNMYXlvdXRNRCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiA3NjhweCknKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YHctMTAwIGgtWzM3NXB4XSBsZzpoLVszM3Z3XSBtYXgtaC1bNjQwcHhdYH1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCcke3Byb2Nlc3MuZW52LkJBU0VfUEFUSH0vaW1hZ2VzL2Jhbm5lci8ke2ltZ30nKWAsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgICAgICAgfX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBiZy1ncmFkaWVudC10by10IGZyb20tWyMwMDAwMDA2MF0gdG8tWyMwMDAwMDAwMF0gdy0xMDAgaC0xMDAgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtd2hpdGUgZHJvcC1zaGFkb3ctWzBfMF84cHhfcmdiYSgwLDAsMCwwLjgpXSBwdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZCBtYi00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ6LTIwcHggZnotbWQtMjRweCBtYi00cHhcIj57c3VifTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0zMnB4IGZ6LW1kLTQwcHggZnoteGwtNDhweFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei0xNHB4IGZ6LW1kLTE2cHggZnoteGwtMThweCBweC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpc0xheW91dE1EID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnNwbGl0KCcgJykubWFwKChzdHIsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57c3RyfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57Y29udGVudH08L0kxOE4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICAgICAgZGF0YT17W3sgdGl0bGU6IHN1YiB9XX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC02IGJvdHRvbS0wIHRleHQtd2hpdGVcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJhbm5lclRpdGxlKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgdXNlTWVkaWEgZnJvbSAnaG9va3MvdXNlTWVkaWEnXG5pbXBvcnQgSTE4TiwgeyB0cmFuc2xhdGUgfSBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgTGluayBmcm9tICdjb21wb25lbnRzL0xpbmsnXG5pbXBvcnQgVGh1bWJGcmFtZSBmcm9tICdjb21wb25lbnRzL1RodW1iRnJhbWUnXG5cbmNvbnN0IHBpY2tJbnRyb2R1Y2UgPSBbXG4gICAge1xuICAgICAgICB0aXRsZUNvbG9yOiAn5a2j56+AJyxcbiAgICAgICAgdGl0bGU6ICfmjqHmnpwnLFxuICAgICAgICBjb250ZW50OiBbXG4gICAgICAgICAgICAn5Y+w54Gj5piv5LiA5YCL6KKr5Yag5LiK44CM5rC05p6c546L5ZyL44CN55qE6a6u576O5ZyL5bqm77yM5LiA6LW36Kaq5omL6auU6amX5o6h5p6c5qiC6Laj77yM5ZOB5ZqQ6a6u5o6h5rC05p6c5pyA5paw6a6u55qE5Y6f5ZGz77yM6YKE6IO95ZOB5ZqQ5Yiw55W25Zyw44CB55W25a2j55qE5L2O6YeM56iL55Sw5ZyS576O6aOf77yM5ZCD5Ye65paw6a6u6aOf5p2Q55qE576O5ZGz77yM5pyA5b6M6YKE6IO95o6h6LO85Yiw55W25Zyw54m56Imy5Ly05omL56au77yM5oqK5peF6YGK6KiY5oa26YCa6YCa5bi25Zue5a6277yBJ1xuICAgICAgICBdLFxuICAgICAgICBpbWc6ICcvaW1hZ2VzL3BpY2svaGFydmVzdC0xLmpwZycsXG4gICAgICAgIGRlY286ICcvaW1hZ2VzL3BpY2svZGVjby0xLnBuZycsXG4gICAgICAgIGRlY29XOiA0MDAsXG4gICAgICAgIGNvbG9yOiAnIzJENzMxNicsXG4gICAgICAgIGNvbG9yTGlnaHQ6ICcjODJCRTY2JyxcbiAgICAgICAgaG92ZXI6ICdob3ZlcjpiZy1bI0U0RjRERF0nXG4gICAgfVxuXVxuXG5jb25zdCBJbnRyb2R1Y3Rpb24gPSAoKSA9PiB7XG4gICAgY29uc3QgbGFuZyA9IHVzZUxvY2FsZSgpXG4gICAgY29uc3QgaXNMYXlvdXRYTCA9IHVzZU1lZGlhKCcobWluLXdpZHRoOiAxMDI0cHgpJylcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1heC13LVsxMjgwcHhdIG14LWF1dG8gcHgteGwtNSBweC1tZC0zIHB4LTJcIj5cbiAgICAgICAgICAgICAgICB7cGlja0ludHJvZHVjZS5tYXAoKHRoZW1lLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxsaVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZ3JpZCBncmlkLWNvbHMtMyBweS14bC0xMiBweS1tZC04IHB5LTRgfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGc6Y29sLVtfc3Bhbl8xXSBjb2wtW19zcGFuXzNdICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkgJSAyID09PSAxID8gJ2xnOm9yZGVyLVs5OTk5XScgOiAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaHVtYkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0xheW91dFhMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgJHtwcm9jZXNzLmVudi5CQVNFX1BBVEh9JHt0aGVtZS5pbWd9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuQkFTRV9QQVRIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9JHt0aGVtZS5pbWcucmVwbGFjZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnLmpwZycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy1zbS5qcGcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbz17aXNMYXlvdXRYTCA/IGAyYnkzYCA6IGAzYnkyYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6cm91bmRlZC1bMzJweF0gcm91bmRlZC1bMTZweF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgIGxnOmNvbC1bX3NwYW5fMl0gY29sLVtfc3Bhbl8zXSBwdC14bC0xMyBwdC1tZC04IHB0LTMgcHgtbWQtNyBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDppdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItbWQtNCBtYi0yIHRleHQtY2VudGVyIHRleHQtbWQtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi0xMnB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYgMTZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17dGhlbWUuY29sb3JMaWdodH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNy4xMTM5IDEuMjMzNDVDMTUuMjA3MyAxLjQwMDEyIDEyLjg3MzkgMy43NjAxMiAxMS4zMzM5IDUuOTEzNDVDMTAuODY3MyA2LjU2Njc4IDEwLjM1MzkgNy4zNzM0NSA5Ljg4MDYgOC4yNDY3OEM5LjQxMzk0IDcuMzczNDUgOC44OTM5NCA2LjU2Njc4IDguNDI3MjcgNS45MTM0NUM2Ljg4MDYgMy43NjAxMiA0LjU1Mzk0IDEuNDAwMTIgMi42NDcyNyAxLjIzMzQ1QzIuMDEzOTQgMS4xODAxMiAxLjQyNzI3IDEuMzczNDUgMS4wMTM5NCAxLjc4MDEyQy0wLjg1OTM5NyAzLjYxMzQ1IDEuNTQwNiA4LjE0MDEyIDMuMjQ3MjcgMTAuNTIwMUM0Ljc5Mzk0IDEyLjY3MzQgNy4xMjA2IDE1LjAzMzQgOS4wMjcyNyAxNS4yMDAxQzkuMTAwNiAxNS4yMDAxIDkuMTY3MjcgMTUuMjA2OCA5LjI0MDYgMTUuMjA2OEM5LjQ2NzI3IDE1LjIwNjggOS42ODA2IDE1LjE2NjggOS44ODA2IDE1LjEwMDFDMTAuMDgwNiAxNS4xNjAxIDEwLjMwMDYgMTUuMjA2OCAxMC41MjA2IDE1LjIwNjhDMTAuNTg3MyAxNS4yMDY4IDEwLjY2MDYgMTUuMjA2OCAxMC43MzM5IDE1LjIwMDFDMTIuNjQwNiAxNS4wMzM0IDE0Ljk2NzMgMTIuNjczNCAxNi41MTM5IDEwLjUyMDFDMTguMjIwNiA4LjEzMzQ1IDIwLjYyMDYgMy42MTM0NSAxOC43NDczIDEuNzgwMTJDMTguMzI3MyAxLjM2Njc4IDE3Ljc0MDYgMS4xODAxMiAxNy4xMDczIDEuMjMzNDVIMTcuMTEzOVpNNS4wNjcyNyA5LjIyMDEyQzMuMTAwNiA2LjQ3MzQ1IDIuNDQwNiA0LjEwNjc4IDIuNTUzOTQgMy40NzM0NUMzLjE2NzI3IDMuNTkzNDUgNC44MjA2IDQuNzEzNDUgNi42MTM5NCA3LjIyMDEyQzcuNjQ3MjcgOC42NjY3OCA4LjMxMzk0IDkuOTkzNDUgOC43MDA2IDExLjAyNjhDOC41MzM5NCAxMS41OTM1IDguNDQwNiAxMi4xNDAxIDguNDI3MjcgMTIuNjQ2OEM3LjYyMDYgMTIuMTQ2OCA2LjM4MDYgMTEuMDYwMSA1LjA2NzI3IDkuMjIwMTJaTTE0LjcwMDYgOS4yMjAxMkMxMy4zODA2IDExLjA2MDEgMTIuMTQ3MyAxMi4xNDY4IDExLjM0MDYgMTIuNjQ2OEMxMS4zMjczIDEyLjE0MDEgMTEuMjI3MyAxMS42MDAxIDExLjA2NzMgMTEuMDQwMUMxMS40NTM5IDkuOTkzNDUgMTIuMTEzOSA4LjY2Njc4IDEzLjE1MzkgNy4yMjAxMkMxNC45MjczIDQuNzQ2NzggMTYuNTYwNiAzLjYyMDEyIDE3LjE5MzkgMy40ODAxMkMxNy4zMDczIDQuMjEzNDUgMTYuNjMzOSA2LjUzMzQ1IDE0LjcwNzMgOS4yMjY3OEwxNC43MDA2IDkuMjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjMuNDczOSAwLjY3MzQ1MUM2MS41ODczIDAuOTkzNDUxIDU5LjQ1MzkgMy41MzM0NSA1OC4wODczIDUuODAwMTJDNTcuNjczOSA2LjQ4Njc4IDU3LjIyNzMgNy4zNDAxMiA1Ni44MjczIDguMjQwMTJDNTYuMjkzOSA3LjQwNjc4IDU1LjcxMzkgNi42NDAxMiA1NS4xOTM5IDYuMDI2NzhDNTMuNDgwNiA0LjAwMDEyIDUwLjk3MzkgMS44MzM0NSA0OS4wNjA2IDEuODI2NzhINDkuMDQ3M0M0OC40MTM5IDEuODI2NzggNDcuODUzOSAyLjA2Njc4IDQ3LjQ3MzkgMi41MDY3OEM0NS43NjA2IDQuNDg2NzggNDguNTA3MyA4LjgwMDEyIDUwLjQwMDYgMTEuMDQwMUM1Mi4xMTM5IDEzLjA2NjggNTQuNjI3MyAxNS4yMzM1IDU2LjU0MDYgMTUuMjQwMUg1Ni41NTM5QzU2Ljg2NzMgMTUuMjQwMSA1Ny4xNjA2IDE1LjE4MDEgNTcuNDI3MyAxNS4wNjY4QzU3LjU2NzMgMTUuMDkzNSA1Ny43MDA2IDE1LjEzMzUgNTcuODQ3MyAxNS4xMzM1QzU3Ljk3MzkgMTUuMTMzNSA1OC4xMDczIDE1LjEyMDEgNTguMjQwNiAxNS4xMDAxQzYwLjEyNzMgMTQuNzgwMSA2Mi4yNjA2IDEyLjI0MDEgNjMuNjI3MyA5Ljk3MzQ1QzY1LjE0MDYgNy40NjAxMiA2Ny4xNjczIDIuNzYwMTIgNjUuMTUzOSAxLjA4MDEyQzY0LjcwNzMgMC43MDY3ODUgNjQuMTEzOSAwLjU1MzQ1MSA2My40ODA2IDAuNjYwMTE4TDYzLjQ3MzkgMC42NzM0NTFaTTUyLjEwMDYgOS42MDAxMkM0OS45MjA2IDcuMDIwMTIgNDkuMDczOSA0LjcxMzQ1IDQ5LjE0MDYgNC4wNjY3OEM0OS43NjA2IDQuMTMzNDUgNTEuNDkzOSA1LjEyMDEyIDUzLjQ4NzMgNy40ODAxMkM1NC42MzM5IDguODQwMTIgNTUuNDA3MyAxMC4xMDY4IDU1Ljg3MzkgMTEuMTEzNUM1NS43NTM5IDExLjY4NjggNTUuNzAwNiAxMi4yNDAxIDU1LjcyNzMgMTIuNzQ2OEM1NC44ODA2IDEyLjMxMzUgNTMuNTYwNiAxMS4zMjY4IDUyLjEwMDYgOS42MDAxMlpNNjEuNzA3MyA4LjgyNjc4QzYwLjU0MDYgMTAuNzY2OCA1OS4zOTM5IDExLjk0NjggNTguNjI3MyAxMi41MTM1QzU4LjU3MzkgMTIuMDEzNSA1OC40MzM5IDExLjQ4MDEgNTguMjI3MyAxMC45MzM1QzU4LjUyNzMgOS44NjAxMiA1OS4wODA2IDguNDgwMTIgNjAuMDAwNiA2Ljk1MzQ1QzYxLjU3MzkgNC4zNDAxMiA2My4xMTM5IDMuMDkzNDUgNjMuNzI3MyAyLjkwMDEyQzYzLjkwMDYgMy42MjAxMiA2My40MTM5IDUuOTkzNDUgNjEuNzA3MyA4LjgyNjc4WlwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM5LjkwNzMgMS40NjY3OEMzOC4wMzM5IDEuNjI2NzggMzUuNzQwNiAzLjk0Njc4IDM0LjIyNzMgNi4wNjAxMkMzMy43NzM5IDYuNjg2NzggMzMuMjgwNiA3LjQ3MzQ1IDMyLjgyNzMgOC4zMTM0NUMzMi4zNzM5IDcuNDczNDUgMzEuODczOSA2LjY5MzQ1IDMxLjQyNzMgNi4wNjAxMkMyOS45MTM5IDMuOTQ2NzggMjcuNjIwNiAxLjYyNjc4IDI1Ljc0NzMgMS40NjY3OEMyNS4xMjA2IDEuNDEzNDUgMjQuNTQwNiAxLjYwNjc4IDI0LjEyNzMgMi4wMTM0NUMyMi4yODczIDMuODIwMTIgMjQuNjMzOSA4LjI2Njc5IDI2LjMxMzkgMTAuNjA2OEMyNy44MjczIDEyLjcyMDEgMzAuMTIwNiAxNS4wNDAxIDMxLjk5MzkgMTUuMjAwMUMzMi4wNjA2IDE1LjIwMDEgMzIuMTMzOSAxNS4yMDY4IDMyLjIwMDYgMTUuMjA2OEMzMi40MjA2IDE1LjIwNjggMzIuNjMzOSAxNS4xNjY4IDMyLjgyNzMgMTUuMTA2OEMzMy4wMjczIDE1LjE2NjggMzMuMjMzOSAxNS4yMDY4IDMzLjQ2MDYgMTUuMjA2OEMzMy41MjczIDE1LjIwNjggMzMuNjAwNiAxNS4yMDY4IDMzLjY2NzMgMTUuMjAwMUMzNS41NDA2IDE1LjA0MDEgMzcuODMzOSAxMi43MjAxIDM5LjM0NzMgMTAuNjA2OEM0MS4wMjczIDguMjY2NzkgNDMuMzczOSAzLjgyMDEyIDQxLjUzMzkgMi4wMTM0NUM0MS4xMjA2IDEuNjA2NzggNDAuNTUzOSAxLjQxMzQ1IDM5LjkxMzkgMS40NjY3OEgzOS45MDczWk0yOC4xMjA2IDkuMzAwMTJDMjYuMjEzOSA2LjY0Njc4IDI1LjU2MDYgNC4zNDY3OCAyNS42NTM5IDMuNzA2NzhDMjYuMjYwNiAzLjg0MDEyIDI3Ljg2NzMgNC45NDY3OCAyOS42MDA2IDcuMzY2NzhDMzAuNjEzOSA4Ljc3MzQ1IDMxLjI2MDYgMTAuMDczNSAzMS42NDA2IDExLjA5MzVDMzEuNDg3MyAxMS42MzM1IDMxLjM5MzkgMTIuMTQ2OCAzMS4zNzM5IDEyLjYzMzVDMzAuNTg3MyAxMi4xNDAxIDI5LjM4NzMgMTEuMDgwMSAyOC4xMTM5IDkuMzA2NzhMMjguMTIwNiA5LjMwMDEyWk0zNy41MjczIDkuMzAwMTJDMzYuMjUzOSAxMS4wNzM1IDM1LjA2MDYgMTIuMTMzNSAzNC4yNjczIDEyLjYzMzVDMzQuMjQ3MyAxMi4xNTM1IDM0LjE2MDYgMTEuNjMzNSAzNC4wMDczIDExLjEwMDFDMzQuMzgwNiAxMC4wODAxIDM1LjAzMzkgOC43ODAxMiAzNi4wNDczIDcuMzY2NzhDMzcuNzYwNiA0Ljk4MDEyIDM5LjM0MDYgMy44ODAxMiAzOS45NjczIDMuNzEzNDVDNDAuMDYwNiA0LjQ1MzQ1IDM5LjM5MzkgNi43MDY3OCAzNy41MzM5IDkuMzAwMTJIMzcuNTI3M1pcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04Ny43NDczIDEuNDA2NzhDODUuODQ3MyAxLjQ2MDEyIDgzLjQyMDYgMy43ODY3OCA4MS43ODA2IDUuOTUzNDVDODEuMjQwNiA2LjY2Njc4IDgwLjcyNzMgNy40NDAxMiA4MC4yNzM5IDguMjI2NzhDNzkuODczOSA3LjMxMzQ1IDc5LjQyNzMgNi40NjAxMiA3OS4wMjA2IDUuNzczNDVDNzcuNjI3MyAzLjQwNjc4IDc1LjQ2NzMgMC43ODY3ODQgNzMuNTg3MyAwLjUxMzQ1MUM3Mi45NTM5IDAuNDI2Nzg1IDcyLjM2MDYgMC41OTM0NTEgNzEuOTI3MyAxLjAwMDEyQzcwLjAzMzkgMi43NjY3OCA3Mi4wOTM5IDcuNTg2NzggNzMuNjEzOSAxMC4xNjAxQzc1LjAwNzMgMTIuNTI2OCA3Ny4xNzM5IDE1LjE0NjggNzkuMDQ3MyAxNS40MjAxQzc5LjE2MDYgMTUuNDMzNCA3OS4yNjczIDE1LjQ0NjggNzkuMzczOSAxNS40NDY4Qzc5LjU0NzMgMTUuNDQ2OCA3OS43MDczIDE1LjQyMDEgNzkuODY3MyAxNS4zODAxQzgwLjEwNzMgMTUuNDczNCA4MC4zNjA2IDE1LjUyNjggODAuNjMzOSAxNS41MjY4QzgwLjY1MzkgMTUuNTI2OCA4MC42NzM5IDE1LjUyNjggODAuNzAwNiAxNS41MjY4QzgyLjYwMDYgMTUuNDczNSA4NS4wMjczIDEzLjE0NjggODYuNjY3MyAxMC45ODAxQzg4Ljk4NzMgNy45MjAxMiA5MC44MjA2IDMuODMzNDUgODkuMzYwNiAyLjEwMDEyQzg4Ljk3MzkgMS42NDAxMiA4OC40MjczIDEuMzg2NzggODcuNzUzOSAxLjQxMzQ1TDg3Ljc0NzMgMS40MDY3OFpNNzUuNTMzOSA5LjAyMDEyQzczLjc0MDYgNS45ODY3OCA3My4yNDA2IDMuNDYwMTIgNzMuNDA3MyAyLjc2MDEyQzc0LjAyMDYgMi45ODAxMiA3NS41NDA2IDQuMjczNDUgNzcuMDkzOSA2LjkxMzQ1Qzc4LjA0NzMgOC41MzM0NSA3OC42MjczIDkuOTkzNDUgNzguOTQ3MyAxMS4xMjAxQzc4Ljc1MzkgMTEuNzA2OCA3OC42MzM5IDEyLjI3MzUgNzguNTg3MyAxMi43ODY4Qzc3LjgyNzMgMTIuMjAwMSA3Ni42OTM5IDEwLjk4MDEgNzUuNTMzOSA5LjAyMDEyWk04NC44ODA2IDkuNjIwMTJDODMuNTIwNiAxMS40MDY4IDgyLjI2NzMgMTIuNDczNSA4MS40NTM5IDEyLjk2MDFDODEuNDczOSAxMi40MjAxIDgxLjQwNzMgMTEuODMzNSA4MS4yNzM5IDExLjIyMDFDODEuNzA3MyAxMC4xNDAxIDgyLjQ0MDYgOC43ODAxMiA4My41NjA2IDcuMzA2NzhDODUuMzg3MyA0LjkwMDEyIDg3LjAyNzMgMy44MDY3OCA4Ny42NjA2IDMuNjYwMTJDODcuNzUzOSA0LjQzMzQ1IDg2Ljk4MDYgNi44NTM0NSA4NC44ODA2IDkuNjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTExLjAwNyAxLjQwNjc4QzEwOS4xMDcgMS40NjAxMiAxMDYuNjgxIDMuNzg2NzggMTA1LjA0MSA1Ljk1MzQ1QzEwNC4zODEgNi44MjY3OSAxMDMuNzYxIDcuNzgwMTIgMTAzLjI0MSA4Ljc0MDEyQzEwMi42ODEgNy42NzM0NSAxMDIuMDQxIDYuNjY2NzggMTAxLjQ3NCA1Ljg5MzQ1Qzk5Ljg1MzkgMy42NzM0NSA5Ny40NTM5IDEuMjczNDUgOTUuNTUzOSAxLjE4Njc4Qzk0LjkyNzMgMS4xNjY3OCA5NC4zNDczIDEuMzg2NzggOTMuOTQ3MyAxLjgzMzQ1QzkyLjIzMzkgMy43NzM0NSA5NC43NTM5IDguMzczNDUgOTYuNTA3MyAxMC43ODY4Qzk4LjEyNzMgMTMuMDA2OCAxMDAuNTM0IDE1LjQwNjggMTAyLjQyNyAxNS40OTM1QzEwMi40NjcgMTUuNDkzNSAxMDIuNTAxIDE1LjQ5MzUgMTAyLjU0MSAxNS40OTM1QzEwMi43NjcgMTUuNDkzNSAxMDIuOTgxIDE1LjQ1MzUgMTAzLjE4MSAxNS4zODY4QzEwMy40MDEgMTUuNDY2OCAxMDMuNjM0IDE1LjUxMzUgMTAzLjg4NyAxNS41MTM1QzEwMy45MDcgMTUuNTEzNSAxMDMuOTI3IDE1LjUxMzUgMTAzLjk1NCAxNS41MTM1QzEwNS44NTQgMTUuNDYwMSAxMDguMjgxIDEzLjEzMzUgMTA5LjkyMSAxMC45NjY4QzExMi4yNDEgNy45MDY3OSAxMTQuMDc0IDMuODIwMTIgMTEyLjYxNCAyLjA4Njc4QzExMi4yMjcgMS42MjY3OCAxMTEuNzAxIDEuMzg2NzggMTExLjAwNyAxLjQwMDEyVjEuNDA2NzhaTTk4LjMyMDYgOS40NjY3OEM5Ni4yNDczIDYuNjIwMTIgOTUuNTAwNiA0LjE2MDEyIDk1LjU5MzkgMy40NDAxMkM5Ni4yMjczIDMuNjAwMTIgOTcuODY3MyA0Ljc0MDEyIDk5LjY2NzMgNy4yMTM0NUMxMDAuOTA3IDguOTEzNDUgMTAxLjY2MSAxMC40NjAxIDEwMi4wNTQgMTEuNjAwMUMxMDEuOTIxIDEyLjA4NjggMTAxLjg0NyAxMi41NTM1IDEwMS44MjcgMTIuOTgwMUMxMDEuMDIxIDEyLjUwNjggOTkuNzIwNiAxMS4zOTM1IDk4LjMxMzkgOS40NjY3OEg5OC4zMjA2Wk0xMDguMTQxIDkuNjIwMTJDMTA2LjcyMSAxMS40OTM1IDEwNS40MTQgMTIuNTY2OCAxMDQuNjA3IDEzLjAyMDFDMTA0LjYwMSAxMi41NzM1IDEwNC41MjEgMTIuMTAwMSAxMDQuMzg3IDExLjYwMDFDMTA0Ljc5NCAxMC40NzM1IDEwNS41NjcgOC45NTM0NSAxMDYuODIxIDcuMzA2NzhDMTA4LjY0NyA0LjkwMDEyIDExMC4yODcgMy44MDY3OCAxMTAuOTIxIDMuNjYwMTJDMTExLjAxNCA0LjQzMzQ1IDExMC4yNDEgNi44NTM0NSAxMDguMTQxIDkuNjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTM1LjE0NyAxLjIzMzQ1QzEzMy4yNDEgMS40MDAxMiAxMzAuOTE0IDMuNzYwMTIgMTI5LjM2NyA1LjkxMzQ1QzEyOC45MDEgNi41NjY3OCAxMjguMzg3IDcuMzczNDUgMTI3LjkyMSA4LjI0Njc4QzEyNy40NTQgNy4zNzM0NSAxMjYuOTQxIDYuNTY2NzggMTI2LjQ3NCA1LjkxMzQ1QzEyNC45MjcgMy43NjAxMiAxMjIuNjAxIDEuNDAwMTIgMTIwLjY5NCAxLjIzMzQ1QzEyMC4wNjEgMS4xODAxMiAxMTkuNDc0IDEuMzczNDUgMTE5LjA1NCAxLjc4MDEyQzExNy4xODcgMy42MTM0NSAxMTkuNTgxIDguMTQwMTIgMTIxLjI4NyAxMC41MjAxQzEyMi44MzQgMTIuNjczNSAxMjUuMTYxIDE1LjAzMzUgMTI3LjA2NyAxNS4yMDAxQzEyNy4xNDEgMTUuMjAwMSAxMjcuMjA3IDE1LjIwNjggMTI3LjI4MSAxNS4yMDY4QzEyNy41MDcgMTUuMjA2OCAxMjcuNzIxIDE1LjE2NjggMTI3LjkyMSAxNS4xMDAxQzEyOC4xMjEgMTUuMTYwMSAxMjguMzM0IDE1LjIwNjggMTI4LjU2MSAxNS4yMDY4QzEyOC42MjcgMTUuMjA2OCAxMjguNzAxIDE1LjIwNjggMTI4Ljc3NCAxNS4yMDAxQzEzMC42ODEgMTUuMDMzNSAxMzMuMDE0IDEyLjY3MzUgMTM0LjU1NCAxMC41MjAxQzEzNi4yNjEgOC4xNDAxMiAxMzguNjU0IDMuNjEzNDUgMTM2Ljc4NyAxLjc4MDEyQzEzNi4zNjcgMS4zNzM0NSAxMzUuNzg3IDEuMTczNDUgMTM1LjE0NyAxLjIzMzQ1Wk0xMjMuMTAxIDkuMjIwMTJDMTIxLjEzNCA2LjQ3MzQ1IDEyMC40NzQgNC4xMDY3OCAxMjAuNTg3IDMuNDY2NzhDMTIxLjIwMSAzLjU4Njc4IDEyMi44NTQgNC43MDY3OCAxMjQuNjQ3IDcuMjEzNDVDMTI1LjY4MSA4LjY2MDEyIDEyNi4zNDcgOS45ODY3OSAxMjYuNzM0IDExLjAyNjhDMTI2LjU2NyAxMS41OTM1IDEyNi40NzQgMTIuMTQwMSAxMjYuNDYxIDEyLjY0NjhDMTI1LjY1NCAxMi4xNDY4IDEyNC40MTQgMTEuMDYwMSAxMjMuMDk0IDkuMjIwMTJIMTIzLjEwMVpNMTMyLjczNCA5LjIyMDEyQzEzMS40MTQgMTEuMDYwMSAxMzAuMTgxIDEyLjE0NjggMTI5LjM3NCAxMi42NDY4QzEyOS4zNjEgMTIuMTQwMSAxMjkuMjYxIDExLjYwMDEgMTI5LjEwMSAxMS4wNDAxQzEyOS40ODcgOS45OTM0NSAxMzAuMTQ3IDguNjY2NzggMTMxLjE4NyA3LjIyMDEyQzEzMi45NjEgNC43NDY3OCAxMzQuNTk0IDMuNjIwMTIgMTM1LjIyNyAzLjQ4MDEyQzEzNS4zNDEgNC4yMTM0NSAxMzQuNjY3IDYuNTMzNDUgMTMyLjc0MSA5LjIyNjc4TDEzMi43MzQgOS4yMjAxMlpcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xODEuNTE0IDAuNjczNDUxQzE3OS42MjcgMC45OTM0NTEgMTc3LjQ5NCAzLjUzMzQ1IDE3Ni4xMjcgNS44MDAxMkMxNzUuNzE0IDYuNDg2NzggMTc1LjI2NyA3LjMzMzQ1IDE3NC44NjcgOC4yNDAxMkMxNzQuMzM0IDcuNDA2NzggMTczLjc1NCA2LjY0MDEyIDE3My4yMzQgNi4wMzM0NUMxNzEuNTIxIDQuMDA2NzggMTY5LjAwNyAxLjg0MDEyIDE2Ny4wOTQgMS44MjY3OEMxNjYuNDc0IDEuNzgwMTIgMTY1Ljg4NyAyLjA2Njc4IDE2NS41MDcgMi41MDY3OEMxNjMuNzk0IDQuNDg2NzggMTY2LjU0MSA4LjgwMDEyIDE2OC40MzQgMTEuMDQwMUMxNzAuMTQ3IDEzLjA2NjggMTcyLjY1NCAxNS4yMzM1IDE3NC41NjcgMTUuMjQ2OEgxNzQuNTgxQzE3NC44OTQgMTUuMjQ2OCAxNzUuMTg3IDE1LjE4NjggMTc1LjQ1NCAxNS4wNzM1QzE3NS41OTQgMTUuMTAwMSAxNzUuNzI3IDE1LjE0MDEgMTc1Ljg3NCAxNS4xNDAxQzE3Ni4wMDEgMTUuMTQwMSAxNzYuMTM0IDE1LjEyNjggMTc2LjI2NyAxNS4xMDY4QzE3OC4xNTQgMTQuNzg2OCAxODAuMjg3IDEyLjI0NjggMTgxLjY1NCA5Ljk4MDEyQzE4My4xNjcgNy40NjY3OSAxODUuMTk0IDIuNzY2NzggMTgzLjE4MSAxLjA4Njc4QzE4Mi43MzQgMC43MTM0NTEgMTgyLjEzNCAwLjU2MDExOCAxODEuNTA3IDAuNjY2Nzg1TDE4MS41MTQgMC42NzM0NTFaTTE3MC4xNDEgOS42MDAxMkMxNjcuOTYxIDcuMDIwMTIgMTY3LjExNCA0LjcxMzQ1IDE2Ny4xODEgNC4wNjY3OEMxNjcuODAxIDQuMTQwMTIgMTY5LjUzNCA1LjEyMDEyIDE3MS41MjcgNy40ODAxMkMxNzIuNjc0IDguODMzNDUgMTczLjQ0MSAxMC4xMDY4IDE3My45MTQgMTEuMTEzNUMxNzMuNzk0IDExLjY4NjggMTczLjc0MSAxMi4yNDAxIDE3My43NjcgMTIuNzQ2OEMxNzIuOTIxIDEyLjMxMzUgMTcxLjYwMSAxMS4zMjY4IDE3MC4xNDEgOS42MDAxMlpNMTc5Ljc0MSA4LjgzMzQ1QzE3OC41NzQgMTAuNzczNSAxNzcuNDI3IDExLjk1MzUgMTc2LjY2MSAxMi41MjAxQzE3Ni42MDcgMTIuMDIwMSAxNzYuNDY3IDExLjQ4NjggMTc2LjI2MSAxMC45NDAxQzE3Ni41NjEgOS44NjY3OSAxNzcuMTE0IDguNDg2NzggMTc4LjAzNCA2Ljk2Njc4QzE3OS42MDcgNC4zNjAxMiAxODEuMTQ3IDMuMTA2NzggMTgxLjc2MSAyLjkxMzQ1QzE4MS45MzQgMy42MzM0NSAxODEuNDQ3IDYuMDA2NzkgMTc5Ljc0MSA4Ljg0MDEyVjguODMzNDVaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU3Ljk0NyAxLjQ2Njc4QzE1Ni4wNzQgMS42MjY3OCAxNTMuNzgxIDMuOTQ2NzggMTUyLjI2NyA2LjA2MDEyQzE1MS44MTQgNi42ODY3OCAxNTEuMzIxIDcuNDczNDUgMTUwLjg2NyA4LjMxMzQ1QzE1MC40MTQgNy40NzM0NSAxNDkuOTE0IDYuNjg2NzggMTQ5LjQ2NyA2LjA2MDEyQzE0Ny45NDcgMy45NDY3OCAxNDUuNjYxIDEuNjI2NzggMTQzLjc4NyAxLjQ2Njc4QzE0My4xNTQgMS40MTM0NSAxNDIuNTgxIDEuNjA2NzggMTQyLjE2NyAyLjAxMzQ1QzE0MC4zMjcgMy44MjAxMiAxNDIuNjc0IDguMjY2NzkgMTQ0LjM1NCAxMC42MDY4QzE0NS44NjcgMTIuNzIwMSAxNDguMTYxIDE1LjA0MDEgMTUwLjAzNCAxNS4yMDAxQzE1MC4xMDEgMTUuMjAwMSAxNTAuMTc0IDE1LjIwNjggMTUwLjI0MSAxNS4yMDY4QzE1MC40NjEgMTUuMjA2OCAxNTAuNjc0IDE1LjE2NjggMTUwLjg3NCAxNS4xMDY4QzE1MS4wNzQgMTUuMTY2OCAxNTEuMjgxIDE1LjIwNjggMTUxLjUwMSAxNS4yMDY4QzE1MS41NjcgMTUuMjA2OCAxNTEuNjQxIDE1LjIwNjggMTUxLjcwNyAxNS4yMDAxQzE1My41ODEgMTUuMDQwMSAxNTUuODc0IDEyLjcyMDEgMTU3LjM4NyAxMC42MDY4QzE1OS4wNjcgOC4yNjY3OSAxNjEuNDE0IDMuODIwMTIgMTU5LjU3NCAyLjAxMzQ1QzE1OS4xNjEgMS42MDY3OCAxNTguNTgxIDEuNDEzNDUgMTU3Ljk1NCAxLjQ2Njc4SDE1Ny45NDdaTTE0Ni4xNjEgOS4zMDAxMkMxNDQuMjU0IDYuNjQ2NzggMTQzLjYwMSA0LjM0Njc4IDE0My43MDEgMy43MDY3OEMxNDQuMzA3IDMuODQwMTIgMTQ1LjkxNCA0Ljk0Njc4IDE0Ny42NDcgNy4zNjAxMkMxNDguNjYxIDguNzczNDUgMTQ5LjMwNyAxMC4wNzM1IDE0OS42ODcgMTEuMDg2OEMxNDkuNTM0IDExLjYyNjggMTQ5LjQ0MSAxMi4xNDAxIDE0OS40MjEgMTIuNjI2OEMxNDguNjI3IDEyLjEzMzUgMTQ3LjQzNCAxMS4wNzM1IDE0Ni4xNjEgOS4zMDAxMlpNMTU1LjU2NyA5LjMwMDEyQzE1NC4yOTQgMTEuMDczNSAxNTMuMTAxIDEyLjEzMzUgMTUyLjMwNyAxMi42MzM1QzE1Mi4yODcgMTIuMTUzNSAxNTIuMjAxIDExLjYzMzUgMTUyLjA0NyAxMS4xMDAxQzE1Mi40MjEgMTAuMDgwMSAxNTMuMDc0IDguNzgwMTIgMTU0LjA4NyA3LjM2Njc4QzE1NS44MDEgNC45ODAxMiAxNTcuMzgxIDMuODgwMTIgMTU4LjAwNyAzLjcxMzQ1QzE1OC4xMDEgNC40NTM0NSAxNTcuNDM0IDYuNzA2NzggMTU1LjU3NCA5LjMwMDEySDE1NS41NjdaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjA1Ljc4MSAxLjQwNjc4QzIwMy44ODEgMS40NjAxMiAyMDEuNDU0IDMuNzg2NzggMTk5LjgxNCA1Ljk1MzQ1QzE5OS4yNzQgNi42NjY3OCAxOTguNzYxIDcuNDQwMTIgMTk4LjMwNyA4LjIyNjc4QzE5Ny45MDcgNy4zMTM0NSAxOTcuNDY3IDYuNDYwMTIgMTk3LjA1NCA1Ljc3MzQ1QzE5NS42NjEgMy40MDY3OCAxOTMuNDk0IDAuNzg2Nzg0IDE5MS42MjEgMC41MTM0NTFDMTkwLjk4NyAwLjQyNjc4NSAxOTAuMzk0IDAuNTkzNDUxIDE4OS45NjEgMS4wMDAxMkMxODguMDY3IDIuNzY2NzggMTkwLjEyNyA3LjU4Njc4IDE5MS42NDcgMTAuMTYwMUMxOTMuMDQxIDEyLjUyNjggMTk1LjIwMSAxNS4xNDY4IDE5Ny4wODEgMTUuNDIwMUMxOTcuMTk0IDE1LjQzMzQgMTk3LjMwMSAxNS40NDY4IDE5Ny40MDcgMTUuNDQ2OEMxOTcuNTgxIDE1LjQ0NjggMTk3Ljc0MSAxNS40MjAxIDE5Ny45MDEgMTUuMzgwMUMxOTguMTQxIDE1LjQ3MzQgMTk4LjM5NCAxNS41MjY4IDE5OC42NjcgMTUuNTI2OEMxOTguNjg3IDE1LjUyNjggMTk4LjcwNyAxNS41MjY4IDE5OC43MzQgMTUuNTI2OEMyMDAuNjM0IDE1LjQ3MzUgMjAzLjA2MSAxMy4xNDY4IDIwNC43MDEgMTAuOTgwMUMyMDYuNDk0IDguNjIwMTIgMjA5LjA3NCA0LjA4Njc4IDIwNy4zOTQgMi4xMDAxMkMyMDcuMDA3IDEuNjQwMTIgMjA2LjQ2MSAxLjQwMDEyIDIwNS43ODcgMS40MTM0NUwyMDUuNzgxIDEuNDA2NzhaTTE5My41NjcgOS4wMjAxMkMxOTEuNzc0IDUuOTg2NzggMTkxLjI3NCAzLjQ2MDEyIDE5MS40NDEgMi43NjAxMkMxOTIuMDU0IDIuOTgwMTIgMTkzLjU3NCA0LjI4MDEyIDE5NS4xMjcgNi45MTM0NUMxOTYuMDgxIDguNTMzNDUgMTk2LjY2MSA5Ljk5MzQ1IDE5Ni45ODEgMTEuMTIwMUMxOTYuNzg3IDExLjcwNjggMTk2LjY2NyAxMi4yNzM1IDE5Ni42MjEgMTIuNzg2OEMxOTUuODYxIDEyLjIwMDEgMTk0LjcyNyAxMC45ODY4IDE5My41NjcgOS4wMjY3OFY5LjAyMDEyWk0yMDIuOTE0IDkuNjIwMTJDMjAxLjU1NCAxMS40MTM1IDIwMC4zMDEgMTIuNDczNSAxOTkuNDg3IDEyLjk2MDFDMTk5LjUwNyAxMi40MjAxIDE5OS40NDEgMTEuODMzNSAxOTkuMzA3IDExLjIyMDFDMTk5Ljc0MSAxMC4xNDAxIDIwMC40NzQgOC43ODAxMiAyMDEuNTk0IDcuMzA2NzhDMjAzLjQyMSA0LjkwMDEyIDIwNS4wNjEgMy44MDY3OCAyMDUuNjk0IDMuNjYwMTJDMjA1Ljc4NyA0LjQzMzQ1IDIwNS4wMTQgNi44NTM0NSAyMDIuOTE0IDkuNjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjU0Ljg0NyAyLjA5MzQ1QzI1NC40NjEgMS42MzM0NSAyNTMuOTA3IDEuMzkzNDUgMjUzLjI0MSAxLjQwNjc4QzI1MS4zNDEgMS40NjAxMiAyNDguOTE0IDMuNzg2NzggMjQ3LjI3NCA1Ljk1MzQ1QzI0Ni43MzQgNi42NjY3OCAyNDYuMjIxIDcuNDQwMTIgMjQ1Ljc2NyA4LjIyNjc4QzI0NS4zNjcgNy4zMTM0NSAyNDQuOTIxIDYuNDYwMTIgMjQ0LjUxNCA1Ljc3MzQ1QzI0My4xMjEgMy40MDY3OCAyNDAuOTU0IDAuNzg2Nzg0IDIzOS4wODEgMC41MTM0NTFDMjM4LjQ0NyAwLjQyMDExOCAyMzcuODU0IDAuNTkzNDUxIDIzNy40MjEgMS4wMDAxMkMyMzUuNTI3IDIuNzY2NzggMjM3LjU4NyA3LjU4Njc4IDIzOS4xMDcgMTAuMTYwMUMyNDAuNTAxIDEyLjUyNjggMjQyLjY2MSAxNS4xNDY4IDI0NC41NDEgMTUuNDIwMUMyNDQuNjU0IDE1LjQzMzUgMjQ0Ljc2MSAxNS40NDY4IDI0NC44NjcgMTUuNDQ2OEMyNDUuMDQxIDE1LjQ0NjggMjQ1LjIwMSAxNS40MjAxIDI0NS4zNjEgMTUuMzgwMUMyNDUuNjAxIDE1LjQ3MzUgMjQ1Ljg1NCAxNS41MjY4IDI0Ni4xMjcgMTUuNTI2OEMyNDYuMTQ3IDE1LjUyNjggMjQ2LjE2NyAxNS41MjY4IDI0Ni4xOTQgMTUuNTI2OEMyNDguMDk0IDE1LjQ3MzUgMjUwLjUyMSAxMy4xNDY4IDI1Mi4xNjEgMTAuOTgwMUMyNTQuNDgxIDcuOTIwMTIgMjU2LjMxNCAzLjgzMzQ1IDI1NC44NTQgMi4xMDAxMkwyNTQuODQ3IDIuMDkzNDVaTTI0MS4wMjcgOS4wMjAxMkMyMzkuMjM0IDUuOTg2NzggMjM4LjczNCAzLjQ2Njc4IDIzOC45MDEgMi43NjAxMkMyMzkuNTE0IDIuOTgwMTIgMjQxLjAzNCA0LjI4MDEyIDI0Mi41ODcgNi45MTM0NUMyNDMuNTQxIDguNTMzNDUgMjQ0LjEyMSA5Ljk5MzQ1IDI0NC40NDEgMTEuMTIwMUMyNDQuMjQ3IDExLjcwNjggMjQ0LjEyNyAxMi4yNzM1IDI0NC4wODEgMTIuNzg2OEMyNDMuMzIxIDEyLjIwMDEgMjQyLjE4NyAxMC45ODY4IDI0MS4wMjcgOS4wMjY3OFY5LjAyMDEyWk0yNTAuMzc0IDkuNjIwMTJDMjQ5LjAxNCAxMS40MTM1IDI0Ny43NjEgMTIuNDczNSAyNDYuOTQ3IDEyLjk2MDFDMjQ2Ljk2NyAxMi40MjAxIDI0Ni45MDEgMTEuODMzNSAyNDYuNzY3IDExLjIyMDFDMjQ3LjIwMSAxMC4xNDAxIDI0Ny45MzQgOC43ODAxMiAyNDkuMDU0IDcuMzA2NzhDMjUwLjg4MSA0LjkwMDEyIDI1Mi41MjEgMy44MDY3OCAyNTMuMTU0IDMuNjYwMTJDMjUzLjI0NyA0LjQzMzQ1IDI1Mi40NzQgNi44NTM0NSAyNTAuMzc0IDkuNjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjI5LjA0MSAxLjQwNjc4QzIyNy4xNDEgMS40NjAxMiAyMjQuNzE0IDMuNzg2NzggMjIzLjA3NCA1Ljk1MzQ1QzIyMi40MTQgNi44MjY3OCAyMjEuNzk0IDcuNzgwMTIgMjIxLjI3NCA4Ljc0MDEyQzIyMC43MTQgNy42NzM0NSAyMjAuMDc0IDYuNjY2NzggMjE5LjUwNyA1Ljg5MzQ1QzIxNy44ODcgMy42NzM0NSAyMTUuNDgxIDEuMjczNDUgMjEzLjU4NyAxLjE4Njc4QzIxMi45NDEgMS4xNjAxMiAyMTIuMzgxIDEuMzg2NzggMjExLjk4MSAxLjgzMzQ1QzIxMC4yNjcgMy43NzM0NSAyMTIuNzg3IDguMzczNDUgMjE0LjU0MSAxMC43ODY4QzIxNi4xNjEgMTMuMDA2OCAyMTguNTYxIDE1LjQwNjggMjIwLjQ2MSAxNS40OTM1QzIyMC41MDEgMTUuNDkzNSAyMjAuNTM0IDE1LjQ5MzUgMjIwLjU3NCAxNS40OTM1QzIyMC44MDEgMTUuNDkzNSAyMjEuMDE0IDE1LjQ1MzUgMjIxLjIxNCAxNS4zODY4QzIyMS40MzQgMTUuNDY2OCAyMjEuNjY3IDE1LjUxMzUgMjIxLjkyMSAxNS41MTM1QzIyMS45NDEgMTUuNTEzNSAyMjEuOTYxIDE1LjUxMzUgMjIxLjk4NyAxNS41MTM1QzIyMy44ODcgMTUuNDYwMSAyMjYuMzE0IDEzLjEzMzUgMjI3Ljk1NCAxMC45NjY4QzIzMC4yNzQgNy45MDY3OSAyMzIuMTA3IDMuODIwMTIgMjMwLjY0NyAyLjA4Njc4QzIzMC4yNjEgMS42MjY3OCAyMjkuNzA3IDEuMzczNDUgMjI5LjA0MSAxLjQwMDEyVjEuNDA2NzhaTTIxNi4zNTQgOS40NjY3OEMyMTQuMjgxIDYuNjIwMTIgMjEzLjUzNCA0LjE2MDEyIDIxMy42MjcgMy40NDAxMkMyMTQuMjYxIDMuNjAwMTIgMjE1LjkwMSA0Ljc0Njc4IDIxNy43MDEgNy4yMTM0NUMyMTguOTQxIDguOTEzNDUgMjE5LjY5NCAxMC40NjY4IDIyMC4wODcgMTEuNjAwMUMyMTkuOTU0IDEyLjA4NjggMjE5Ljg4MSAxMi41NTM1IDIxOS44NjEgMTIuOTgwMUMyMTkuMDU0IDEyLjUwNjggMjE3Ljc1NCAxMS4zOTM1IDIxNi4zNDcgOS40NjY3OEgyMTYuMzU0Wk0yMjYuMTc0IDkuNjIwMTJDMjI0Ljc1NCAxMS40OTM1IDIyMy40NDcgMTIuNTY2OCAyMjIuNjQxIDEzLjAyMDFDMjIyLjYzNCAxMi41NzM1IDIyMi41NTQgMTIuMTAwMSAyMjIuNDIxIDExLjYwMDFDMjIyLjgyNyAxMC40NzM1IDIyMy42MDEgOC45NTM0NSAyMjQuODU0IDcuMzA2NzhDMjI2LjY4MSA0LjkwMDEyIDIyOC4zMjEgMy44MDY3OCAyMjguOTU0IDMuNjYwMTJDMjI5LjA0NyA0LjQzMzQ1IDIyOC4yNzQgNi44NTM0NSAyMjYuMTc0IDkuNjIwMTJaXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnoteGwtNTZweCBmei1tZC00OHB4IGZ6LTM2cHggZm9udC13ZWlnaHQtYm9sZCBtYi00cHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aGVtZS50aXRsZUNvbG9yfTwvSTE4Tj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiB0aGVtZS5jb2xvciB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8STE4Tj57dGhlbWUudGl0bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmei14bC0yNHB4IGZ6LW1kLTIycHggZnotMjBweCB0ZXh0LWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPnt0aGVtZS5zdWJ9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLWxnLTcgbWItNCBmei1tZC0xOHB4IGZ6LTE2cHggbWF4LXctWzcyMHB4XVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUuY29udGVudC5tYXAoKGNvbnRlbnQsIGopID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOIGtleT17an0+e2NvbnRlbnR9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhlbWUubGlua3M/Lm1hcCgobGlua3MsIGspID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17a31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGlubGluZS1ibG9jayAgYm9yZGVyLXNvbGlkIGJvcmRlci1bMnB4XSBiZy1bI2ZmZl0gcm91bmRlZC1waWxsIHB4LTUgcHktMTJweCBmei0yMHB4IHRycy1hbGwgJHt0aGVtZS5ob3Zlcn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLmNvbG9yXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17bGlua3MudXJsfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZShsaW5rcy5sYWJlbCwgbGFuZyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJMThOPntsaW5rcy5sYWJlbH08L0kxOE4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZC1pbmxpbmUgYWxpZ24tbWlkZGxlIGljb24gaWNvbi1hcnJvdy1yaWdodCBmei0xNnB4IG1sLTRweGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cHJvY2Vzcy5lbnYuQkFTRV9QQVRIfSR7dGhlbWUuZGVjb31gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp3LVs0MDBweF0gdy1bMzIwcHhdIGFic29sdXRlIGxnOnJpZ2h0LVsxMCVdIG1kOnJpZ2h0LVsxMCVdIGxnOmJvdHRvbS1bLTUlXSBtZDpib3R0b20tWzI1JV0gcmlnaHQtW2F1dG9dIGJvdHRvbS1bMF0gLXotMTAgb3BhY2l0eS0yMCBsZzpvcGFjaXR5LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhJbnRyb2R1Y3Rpb24pXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSTE4TiBmcm9tICdjb21wb25lbnRzL0kxOE4nXG5pbXBvcnQgQmxvY2tUaXRsZSBmcm9tICdjb21wb25lbnRzL0Jsb2NrVGl0bGUnXG5cbmNvbnN0IHJ1bGUgPSBbXG4gICAgJ+i+suS6i+S4jeaYk++8jOawtOaenOeahOeorumhnue5geWkmu+8jOWQhOeoruawtOaenOeahOaOoeaenOWOn+WJh+WQhOS4jeebuOWQjO+8jOiri+S+neeFp+i+suWgtOWPiuaenOWckueahOmrlOmpl+imj+WJh++8jOWFseWQjOe2reitt+aenOWckueSsOWig++8jOiQrOWIhuaEn+isneOAgicsXG4gICAgJ+aOoeaenOaZgu+8jOiri+mBuOaTh+aWsOmuruS4lOaIkOeGn+eahOawtOaenO+8jOaJjeWPr+WTgeWakOWIsOawtOaenOacgOe+jueahOa7i+WRs+WWlCEnLFxuICAgICfpoYbpoYbnj43mnpzlnYfmmK/ovrLlpKvlgJHnmoTlv4PooYDvvIznnIvmupblvozkuIvmiYvpgb/lhY3pgKDmiJDmtarosrvjgIInLFxuICAgICfmsLTmnpzlm6DlraPnr4DororljJbmmJPlvbHpn7/msLTmnpznlKLlraPvvIzliY3lvoDovrLloLTlj4rmnpzlnJLmjqHmnpzliY3li5nlv4XkuovlhYjoga/nuavjgIHpoJDntITjgIInXG5dXG5cbmNvbnN0IE5vdGljZSA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHkteGwtMTAgcHQtbWQtNSBwYi1tZC0xMCBwdC00IHB5LTggYmctZ3JhZGllbnQtdG8tdCBmcm9tLVsjRkZGNkRFXSBweC0yYH1cbiAgICAgICAgPlxuICAgICAgICAgICAgPEJsb2NrVGl0bGUgdGl0bGU9XCLmjqHmnpzms6jmhI/kuovpoIVcIiBjbGFzc05hbWU9XCJteC1hdXRvXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgbWF4LXctWzkwMHB4XSBteC1hdXRvIGJnLVsjZmZmXSBtZDpyb3VuZGVkLVszMnB4XSByb3VuZGVkLVsxNnB4XSBwLTMgcC1tZC02XCI+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge3J1bGUubWFwKChydWxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZnotMThweCBmei1seC0yMHB4IG1iLTMgbGFzdDptYi1bMF0gZmxleCBtZDpmbGV4LXJvdyBmbGV4LWNvbCBtZDpqdXN0aWZ5LXN0YXJ0IGp1c3RpZnktY2VudGVyIG1kOml0ZW1zLXN0YXJ0IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWQ6bXItWzhweF0gZC1pbmxpbmUtYmxvY2sgdy1bMjhweF0gaC1bMjhweF0gYWxpZ24tbWlkZGxlIG1iLVsxNnB4XSBtZDptYi1bMF0gc2hyaW5rLVswXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoL2ltYWdlcy9nbG9iYWwvdGlwLnBuZylgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZFNpemU6ICdjb250YWluJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEkxOE4+e3J1bGV9PC9JMThOPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE5vdGljZSlcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBGYXJtQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zhcm1DYXJkJ1xuXG5jb25zdCBTZWFyY2hMaXN0ID0gKHsgZGF0YSB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC1tZC1bMjRweF0gbWItWzU2cHhdIG1kOm1iLVsxMjBweF1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBweC1bMTZweF0gbWQ6cHgtWzI0cHhdIHB5LVsyNHB4XSBtZDpweS1bNDBweF0gbWF4LXctWzEyODBweF0gdGV4dC1sZWZ0IFwiPlxuICAgICAgICAgICAgICAgIHshIWRhdGEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB4bDpncmlkLWNvbHMtMiBnYXAtWzE2cHhdIG1kOmdhcC1bMjRweF1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhcm1DYXJkIGRhdGE9e2l0ZW19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaExpc3QpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJhbm5lclRpdGxlIGZyb20gJ2NvbXBvbmVudHMvYmFubmVyVGl0bGUnXG5pbXBvcnQgSW50cm9kdWN0aW9uIGZyb20gJy4vSW50cm9kdWN0aW9uJ1xuaW1wb3J0IE5vdGljZSBmcm9tICcuL05vdGljZSdcbmltcG9ydCBCbG9ja1RpdGxlIGZyb20gJ2NvbXBvbmVudHMvQmxvY2tUaXRsZSdcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSAnY29tcG9uZW50cy9TZWFyY2hCYXInXG5pbXBvcnQgQ29uZGl0aW9uU2VhcmNoQmxrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29uZGl0aW9uU2VhcmNoQmxrJ1xuaW1wb3J0IFNlYXJjaExpc3QgZnJvbSAnLi9TZWFyY2hMaXN0J1xuaW1wb3J0IHsgdXNlU3BvdHNEYXRhIH0gZnJvbSAnYXBpJ1xuaW1wb3J0IHsgdXNlTG9jYWxlIH0gZnJvbSAnaG9va3MnXG5pbXBvcnQgeyBmaWx0ZXJXaXRoUXVlcnkgfSBmcm9tICdjb25zdGFudHMvdXRpbHMnXG5pbXBvcnQgeyB1c2VRdWVyeU9iamVjdCB9IGZyb20gJ2hvb2tzJ1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IGxhbmcgPSB1c2VMb2NhbGUoKVxuICAgIGNvbnN0IHsgZGF0YSwgY291bnR5LCBmcnVpdCB9ID0gdXNlU3BvdHNEYXRhKHsgbGFuZyB9KVxuICAgIGNvbnN0IFtmaWx0ZXJlZERhdGEsIHNldEZpbHRlcmVkRGF0YV0gPSB1c2VTdGF0ZShkYXRhIHx8IFtdKVxuICAgIGNvbnN0IHF1ZXJ5ID0gdXNlUXVlcnlPYmplY3QoKVxuICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgICAgICAgICAgPEJhbm5lclRpdGxlXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXsn6LWw5ZCn77yB5L6G6Laf5rC05p6c5LmL5peFJ31cbiAgICAgICAgICAgICAgICAgICAgc3ViPXtg5o6h5p6c5L2V6JmV5Y67YH1cbiAgICAgICAgICAgICAgICAgICAgY29udGVudD17YOaXheS6uuWAkeS4jeWDheWPr+S7peWcqOiHuueBo+WTgeWakOeVtuWto+muruaOoeawtOaenO+8jOmChOWPr+S7peimquiHqumrlOmpl+aOoeaenOeahOaogui2o++8jCDorpPmiJHlgJHkuIDlkIzmi5zoqKrlhajlj7DlkITlnLDmnpzlnJLvvIFgfVxuICAgICAgICAgICAgICAgICAgICBpbWc9e2BoYXJ2ZXN0LmpwZ2B9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEludHJvZHVjdGlvbiAvPlxuICAgICAgICAgICAgPE5vdGljZSAvPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHktNSBweS14bC0xMFwiPlxuICAgICAgICAgICAgICAgIDxCbG9ja1RpdGxlIHRpdGxlPVwi6KuL6YG45pOH5o6h5p6c5Y2A5Z+fXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbmRpdGlvblNlYXJjaEJsa1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItWzMycHhdIG1kOm1iLVs2NHB4XSAgbWQ6bXgtYXV0byBtYXgtdy1bODAwcHhdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHlEYXRhPXtjb3VudHl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeURhdGE9e2ZydWl0fVxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VhcmNoTGlzdCBkYXRhPXtkYXRhfSAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUGFnZSlcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3ODg4NTc4ODM2NDJcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlUGFyYW1zIiwidXNlU2VhcmNoUGFyYW1zIiwiQ0lucHV0IiwiZmlsdGVyV2l0aFF1ZXJ5IiwibWFrZVBhcmFtcyIsIkkxOE4iLCJ0cmFuc2xhdGUiLCJEQVlfTUFQIiwidmFsdWUiLCJuYW1lIiwiQVJFQV9DT05GSUciLCJpZCIsInRpdGxlIiwiemlwY29kZU1pbiIsInppcGNvZGVNYXgiLCJDb25kaXRpb25TZWFyY2hCbGsiLCJfcmVmIiwiX3MyIiwiX3MiLCJkYXRhIiwicXVlcnkiLCJ6aXBjb2RlRGF0YSIsImNhdGVnb3J5RGF0YSIsInRyYW5zcG9ydERhdGEiLCJjb3VudHlEYXRhIiwidG91cmlzbUJyYW5kRGF0YSIsIl9yZWYkb3B0aW9ucyIsIm9wdGlvbnMiLCJjbGFzc05hbWUiLCJfdXNlUGFyYW1zIiwiX3VzZVBhcmFtcyRsYW5nIiwibGFuZyIsIl91c2VTdGF0ZSIsImtleXdvcmQiLCJfdXNlU3RhdGUyIiwiX3NsaWNlZFRvQXJyYXkiLCJzZXRLZXl3b3JkIiwiX3VzZVN0YXRlMyIsImNhdGVnb3J5Iiwic3BsaXQiLCJtYXAiLCJjYXRlIiwiX3VzZVN0YXRlNCIsInNldENhdGVnb3J5IiwiX3VzZVN0YXRlNSIsInRyYW5zcG9ydCIsInRyYW4iLCJfdXNlU3RhdGU2Iiwic2V0VHJhbnNwb3J0IiwiX3VzZVN0YXRlNyIsInppcGNvZGUiLCJ6aXAiLCJfdXNlU3RhdGU4Iiwic2V0WmlwY29kZSIsIl91c2VTdGF0ZTkiLCJjb3VudHkiLCJjIiwiX3VzZVN0YXRlMCIsInNldENvdW50eSIsIl91c2VTdGF0ZTEiLCJkYXlzIiwiZCIsIl91c2VTdGF0ZTEwIiwic2V0RGF5IiwiX3VzZVN0YXRlMTEiLCJicmFuZCIsIl91c2VTdGF0ZTEyIiwic2V0QnJhbmQiLCJwcmVRdWVyeURhdGEiLCJfdXNlU3RhdGUxMyIsIl91c2VTdGF0ZTE0IiwiaXNFeHBhbmQiLCJ0b2dnbGVFeHBhbmQiLCJzY3JvbGxSZWYiLCJrZXl3b3JkUmVmIiwiX3VzZVNlYXJjaFBhcmFtcyIsIl91c2VTZWFyY2hQYXJhbXMyIiwic2VhcmNoUGFyYW1zIiwic2V0U2VhcmNoUGFyYW1zIiwiaXNJb3MiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidG9Mb3dlckNhc2UiLCJvblNlYXJjaCIsImN1cnJlbnQiLCJpbnB1dCIsImJsdXIiLCJyZXNldFRvRGVmYXVsdCIsInByZVF1ZXJ5V2l0aENhdGVnb3J5IiwiaWR4IiwiaW5kZXhPZiIsImNvbmNhdCIsIl90b0NvbnN1bWFibGVBcnJheSIsInNsaWNlIiwicHJlUXVlcnlXaXRoVHJhbnNwb3J0IiwicHJlUXVlcnlXaXRoWmlwY29kZSIsInByZVF1ZXJ5V2l0aENvdW50eSIsInByZVF1ZXJ5V2l0aERheSIsInByZVF1ZXJ5V2l0aEJyYW5kIiwic2Nyb2xsVG9wIiwiZm9jdXMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2hhckNvZGUiLCJ3aGljaCIsImtleUNvZGUiLCJjcmVhdGVFbGVtZW50IiwiRnJhZ21lbnQiLCJvblN1Ym1pdCIsInByZXZlbnREZWZhdWx0IiwicmVmIiwiaHRtbEZvciIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsIm9uS2V5UHJlc3MiLCJrZXkiLCJvbktleVVwIiwicmVnIiwidGV4dCIsInJlcGxhY2UiLCJvbklucHV0Q2hhbmdlIiwidGFyZ2V0Iiwib25Gb2N1cyIsIm5vQWR2YW5jZSIsImF1dG9Db21wbGV0ZSIsInBhcmFtcyIsImxlbmd0aCIsIm9uQ2xpY2siLCJpbmNsdWRlcyIsInRvdXJpc21CcmFuZFRhZyIsInJlZ2lvbiIsIl9jMyIsIl9jIiwiX2MyIiwibWVtbyIsIiRSZWZyZXNoUmVnJCIsIlRodW1iRnJhbWUiLCJBdXRvU3dpdGNoTGluayIsIkZhcm1DYXJkIiwiY292ZXIiLCJhZGRyZXNzIiwidGVsIiwidXJsIiwiaHJlZiIsImlzTGlua091dCIsInNyYyIsImFsdCIsIlNlYXJjaEJhciIsIkJyZWFkY3J1bWJzIiwidXNlTWVkaWEiLCJCYW5uZXJUaXRsZSIsInN1YiIsImNvbnRlbnQiLCJpbWciLCJpc0xheW91dE1EIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9jZXNzIiwiZW52IiwiQkFTRV9QQVRIIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kUmVwZWF0Iiwic3RyIiwiaSIsInVzZUxvY2FsZSIsIkxpbmsiLCJwaWNrSW50cm9kdWNlIiwidGl0bGVDb2xvciIsImRlY28iLCJkZWNvVyIsImNvbG9yIiwiY29sb3JMaWdodCIsImhvdmVyIiwiSW50cm9kdWN0aW9uIiwiaXNMYXlvdXRYTCIsInRoZW1lIiwiX3RoZW1lJGxpbmtzIiwicmF0aW8iLCJ4bWxucyIsIndpZHRoIiwiaGVpZ2h0Iiwidmlld0JveCIsImZpbGwiLCJqIiwibGlua3MiLCJrIiwiYm9yZGVyQ29sb3IiLCJsYWJlbCIsIkJsb2NrVGl0bGUiLCJydWxlIiwiTm90aWNlIiwiU2VhcmNoTGlzdCIsIml0ZW0iLCJ1c2VTcG90c0RhdGEiLCJ1c2VRdWVyeU9iamVjdCIsIlBhZ2UiLCJfdXNlU3BvdHNEYXRhIiwiZnJ1aXQiLCJmaWx0ZXJlZERhdGEiLCJzZXRGaWx0ZXJlZERhdGEiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==