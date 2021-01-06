webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/projectdetail.module.sass */ \"./styles/projectdetail.module.sass\");\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar Project = function Project(props) {\n  _s();\n\n  console.log(\"props\", props);\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var pid = router.query.pid;\n  console.log(\"pid\", pid);\n\n  if (!pid) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 16\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.detail_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: pid.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }, _this), pid.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: pid.image,\n      alt: pid.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: pid.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 11\n    }, _this), pid.video ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.video_container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n        className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.player,\n        url: pid.video,\n        width: \"100%\",\n        height: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, _this), pid.presslink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: pid.presslink,\n      children: \"\\\"Presse\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Project, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvLmpzP2RhMDciXSwibmFtZXMiOlsiUHJvamVjdCIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInJvdXRlciIsInVzZVJvdXRlciIsInBpZCIsInF1ZXJ5Iiwic3R5bGVzIiwiZGV0YWlsX2NvbnRhaW5lciIsInRpdGxlIiwiaW1hZ2UiLCJjb250ZW50IiwidmlkZW8iLCJ2aWRlb19jb250YWluZXIiLCJwbGF5ZXIiLCJwcmVzc2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN2QkMsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQkYsS0FBckI7QUFDQSxNQUFNRyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRnVCLE1BR2ZDLEdBSGUsR0FHUEYsTUFBTSxDQUFDRyxLQUhBLENBR2ZELEdBSGU7QUFJM0JKLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBbUJHLEdBQW5COztBQUNJLE1BQUksQ0FBQ0EsR0FBTCxFQUFVO0FBQ04sd0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBUDtBQUNEOztBQUNELHNCQUNFO0FBQUssYUFBUyxFQUFFRSx3RUFBTSxDQUFDQyxnQkFBdkI7QUFBQSw0QkFDRTtBQUFBLGdCQUFLSCxHQUFHLENBQUNJO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdKLEdBQUcsQ0FBQ0ssS0FBSixnQkFDQztBQUFLLFNBQUcsRUFBRUwsR0FBRyxDQUFDSyxLQUFkO0FBQXFCLFNBQUcsRUFBRUwsR0FBRyxDQUFDSTtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBT0U7QUFBQSxnQkFBSUosR0FBRyxDQUFDTTtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixFQVFHTixHQUFHLENBQUNPLEtBQUosZ0JBQ0M7QUFBSyxlQUFTLEVBQUVMLHdFQUFNLENBQUNNLGVBQXZCO0FBQUEsNkJBQ0E7QUFBTyxpQkFBUyxFQUFFTix3RUFBTSxDQUFDTyxNQUF6QjtBQUNMLFdBQUcsRUFBRVQsR0FBRyxDQUFDTyxLQURKO0FBQ1csYUFBSyxFQUFDLE1BRGpCO0FBRU4sY0FBTSxFQUFDO0FBRkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFNQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZEosRUFnQkdQLEdBQUcsQ0FBQ1UsU0FBSixnQkFDQztBQUFHLFVBQUksRUFBRVYsR0FBRyxDQUFDVSxTQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCTCxDQWhDRDs7R0FBTWhCLE87VUFFYUsscUQ7OztLQUZiTCxPO0FBaUNTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Byb2plY3RkZXRhaWwubW9kdWxlLnNhc3MnXG5cbmNvbnN0IFByb2plY3QgPSAocHJvcHMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcInByb3BzXCIsIHByb3BzKVxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBwaWQgfSA9IHJvdXRlci5xdWVyeVxuY29uc29sZS5sb2coXCJwaWRcIiwgcGlkKVxuICAgIGlmICghcGlkKSB7XG4gICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmc8L2Rpdj47XG4gICAgICB9XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRldGFpbF9jb250YWluZXJ9PlxuICAgICAgICAgIDxoMj57cGlkLnRpdGxlfTwvaDI+XG4gICAgICAgICAge3BpZC5pbWFnZSA/IChcbiAgICAgICAgICAgIDxpbWcgc3JjPXtwaWQuaW1hZ2V9IGFsdD17cGlkLnRpdGxlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHA+e3BpZC5jb250ZW50fTwvcD5cbiAgICAgICAgICB7cGlkLnZpZGVvID8gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWRlb19jb250YWluZXJ9PlxuICAgICAgICAgICAgPHZpZGVvIGNsYXNzTmFtZT17c3R5bGVzLnBsYXllcn1cbiAgICAgICB1cmw9e3BpZC52aWRlb30gd2lkdGg9JzEwMCUnXG4gICAgICBoZWlnaHQ9JzEwMCUnIC8+PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGlkLnByZXNzbGluayA/IChcbiAgICAgICAgICAgIDxhIGhyZWY9e3BpZC5wcmVzc2xpbmt9PlwiUHJlc3NlXCI8L2E+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ })

})