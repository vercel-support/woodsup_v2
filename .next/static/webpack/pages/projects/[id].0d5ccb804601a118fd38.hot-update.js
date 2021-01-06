webpackHotUpdate_N_E("pages/projects/[id]",{

/***/ "./pages/projects/[id].js":
/*!********************************!*\
  !*** ./pages/projects/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/projectdetail.module.sass */ \"./styles/projectdetail.module.sass\");\n/* harmony import */ var _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/projects.json */ \"./data/projects.json\");\nvar _data_projects_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/projects.json */ \"./data/projects.json\", 1);\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar projectsList = _data_projects_json__WEBPACK_IMPORTED_MODULE_3__.projects;\n\nvar Project = function Project() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  var pid = router.query.pid;\n  console.log(\"pid\", pid); // const { params } = projectsList.match;\n\n  var project = projectsList.find(function (el) {\n    return el.id === pid;\n  });\n\n  if (!project) {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: \"Loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 16\n    }, _this);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.detail_container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }, _this), project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: project.image,\n      alt: project.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: project.content\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }, _this), project.video ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.video_container,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"video\", {\n        className: _styles_projectdetail_module_sass__WEBPACK_IMPORTED_MODULE_2___default.a.player,\n        url: project.video,\n        width: \"100%\",\n        height: \"100%\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 13\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this), project.presslink ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      href: project.presslink,\n      children: \"\\\"Presse\\\"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 13\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 21,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Project, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\nvar _c;\n\n$RefreshReg$(_c, \"Project\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMvLmpzP2RhMDciXSwibmFtZXMiOlsicHJvamVjdHNMaXN0IiwicHJvamVjdHMiLCJQcm9qZWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwicGlkIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicHJvamVjdCIsImZpbmQiLCJlbCIsImlkIiwic3R5bGVzIiwiZGV0YWlsX2NvbnRhaW5lciIsInRpdGxlIiwiaW1hZ2UiLCJjb250ZW50IiwidmlkZW8iLCJ2aWRlb19jb250YWluZXIiLCJwbGF5ZXIiLCJwcmVzc2xpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsZ0RBQVEsQ0FBQ0EsUUFBOUI7O0FBRUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUFBOztBQUNsQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBRGtCLE1BRVZDLEdBRlUsR0FFRkYsTUFBTSxDQUFDRyxLQUZMLENBRVZELEdBRlU7QUFHbEJFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQVosRUFBa0JILEdBQWxCLEVBSGtCLENBS2xCOztBQUNBLE1BQU1JLE9BQU8sR0FBR1QsWUFBWSxDQUFDVSxJQUFiLENBQWtCLFVBQUFDLEVBQUUsRUFBSTtBQUN4QyxXQUFPQSxFQUFFLENBQUNDLEVBQUgsS0FBVVAsR0FBakI7QUFDRCxHQUZpQixDQUFoQjs7QUFJQSxNQUFJLENBQUNJLE9BQUwsRUFBYztBQUNWLHdCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVA7QUFDRDs7QUFDRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUksd0VBQU0sQ0FBQ0MsZ0JBQXZCO0FBQUEsNEJBQ0U7QUFBQSxnQkFBS0wsT0FBTyxDQUFDTTtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHTixPQUFPLENBQUNPLEtBQVIsZ0JBQ0M7QUFBSyxTQUFHLEVBQUVQLE9BQU8sQ0FBQ08sS0FBbEI7QUFBeUIsU0FBRyxFQUFFUCxPQUFPLENBQUNNO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERCxnQkFHQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEosZUFPRTtBQUFBLGdCQUFJTixPQUFPLENBQUNRO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBGLEVBUUdSLE9BQU8sQ0FBQ1MsS0FBUixnQkFDQztBQUFLLGVBQVMsRUFBRUwsd0VBQU0sQ0FBQ00sZUFBdkI7QUFBQSw2QkFDQTtBQUFPLGlCQUFTLEVBQUVOLHdFQUFNLENBQUNPLE1BQXpCO0FBQ0wsV0FBRyxFQUFFWCxPQUFPLENBQUNTLEtBRFI7QUFDZSxhQUFLLEVBQUMsTUFEckI7QUFFTixjQUFNLEVBQUM7QUFGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQU1DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkSixFQWdCR1QsT0FBTyxDQUFDWSxTQUFSLGdCQUNDO0FBQUcsVUFBSSxFQUFFWixPQUFPLENBQUNZLFNBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREQsZ0JBR0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQW5CSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXdCTCxDQXJDRDs7R0FBTW5CLE87VUFDYUUscUQ7OztLQURiRixPO0FBc0NTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3Byb2plY3RkZXRhaWwubW9kdWxlLnNhc3MnXG5pbXBvcnQgcHJvamVjdHMgZnJvbSAnLi4vLi4vZGF0YS9wcm9qZWN0cy5qc29uJ1xuXG5jb25zdCBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0cy5wcm9qZWN0cztcblxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IHsgcGlkIH0gPSByb3V0ZXIucXVlcnlcbiAgICBjb25zb2xlLmxvZyhcInBpZFwiLHBpZClcblxuICAgIC8vIGNvbnN0IHsgcGFyYW1zIH0gPSBwcm9qZWN0c0xpc3QubWF0Y2g7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzTGlzdC5maW5kKGVsID0+IHtcbiAgICByZXR1cm4gZWwuaWQgPT09IHBpZDtcbiAgfSk7XG5cbiAgICBpZiAoIXByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGV0YWlsX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPGgyPntwcm9qZWN0LnRpdGxlfTwvaDI+XG4gICAgICAgICAge3Byb2plY3QuaW1hZ2UgPyAoXG4gICAgICAgICAgICA8aW1nIHNyYz17cHJvamVjdC5pbWFnZX0gYWx0PXtwcm9qZWN0LnRpdGxlfSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHA+e3Byb2plY3QuY29udGVudH08L3A+XG4gICAgICAgICAge3Byb2plY3QudmlkZW8gPyAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZGVvX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPXtzdHlsZXMucGxheWVyfVxuICAgICAgIHVybD17cHJvamVjdC52aWRlb30gd2lkdGg9JzEwMCUnXG4gICAgICBoZWlnaHQ9JzEwMCUnIC8+PC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cHJvamVjdC5wcmVzc2xpbmsgPyAoXG4gICAgICAgICAgICA8YSBocmVmPXtwcm9qZWN0LnByZXNzbGlua30+XCJQcmVzc2VcIjwvYT5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbn1cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects/[id].js\n");

/***/ })

})