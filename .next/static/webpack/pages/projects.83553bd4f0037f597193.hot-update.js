webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/projects.module.sass */ \"./styles/projects.module.sass\");\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _data_projects_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/projects.json */ \"./data/projects.json\");\nvar _data_projects_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects.json */ \"./data/projects.json\", 1);\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar projectsList = _data_projects_json__WEBPACK_IMPORTED_MODULE_4__.projects;\nvar sortedList = projectsList.sort();\nconsole.log(sortedList);\n\nvar Projects = function Projects(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.home,\n    children: sortedList.map(function (project) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.box,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.projectImg,\n            src: project.image,\n            alt: \"Projectpicture\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.mask,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.link,\n              props: project,\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_title,\n                onClick: function onClick() {\n                  router.push({\n                    pathname: '/projects/[pid]',\n                    query: {\n                      pid: project.id\n                    }\n                  });\n                },\n                children: project.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 28,\n                columnNumber: 68\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 24\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.project_heading,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n            href: \"/projects/\".concat(project.id),\n            props: project.image,\n            replace: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_3___default.a.link_without_image,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: [\"\\u2022 \", project.title]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 63\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 22\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 19\n        }, _this)\n      }, project.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJwcm9qZWN0c0xpc3QiLCJwcm9qZWN0cyIsInNvcnRlZExpc3QiLCJzb3J0IiwiY29uc29sZSIsImxvZyIsIlByb2plY3RzIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJob21lIiwibWFwIiwicHJvamVjdCIsImltYWdlIiwiYm94IiwicHJvamVjdEltZyIsIm1hc2siLCJsaW5rIiwicHJvamVjdF90aXRsZSIsInB1c2giLCJwYXRobmFtZSIsInF1ZXJ5IiwicGlkIiwiaWQiLCJ0aXRsZSIsInByb2plY3RfaGVhZGluZyIsImxpbmtfd2l0aG91dF9pbWFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFlBQVksR0FBR0MsZ0RBQVEsQ0FBQ0EsUUFBOUI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFlBQVksQ0FBQ0csSUFBYixFQUFuQjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsVUFBWjs7QUFDQSxJQUFNSSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDMUIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFFQyxtRUFBTSxDQUFDQyxJQUF2QjtBQUFBLGNBQ0NULFVBQVUsQ0FBQ1UsR0FBWCxDQUFlLFVBQUNDLE9BQUQ7QUFBQSwwQkFDZDtBQUFBLGtCQUNXQSxPQUFPLENBQUNDLEtBQVIsZ0JBQ0M7QUFBSyxtQkFBUyxFQUFFSixtRUFBTSxDQUFDSyxHQUF2QjtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBRUwsbUVBQU0sQ0FBQ00sVUFEcEI7QUFFRSxlQUFHLEVBQUVILE9BQU8sQ0FBQ0MsS0FGZjtBQUdFLGVBQUcsRUFBQztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFNRTtBQUFLLHFCQUFTLEVBQUVKLG1FQUFNLENBQUNPLElBQXZCO0FBQUEsbUNBS0c7QUFBRyx1QkFBUyxFQUFFUCxtRUFBTSxDQUFDUSxJQUFyQjtBQUEyQixtQkFBSyxFQUFFTCxPQUFsQztBQUFBLDJDQUE0QztBQUFHLHlCQUFTLEVBQUVILG1FQUFNLENBQUNTLGFBQXJCO0FBQW9DLHVCQUFPLEVBQUUsbUJBQU07QUFDOUdYLHdCQUFNLENBQUNZLElBQVAsQ0FBWTtBQUNWQyw0QkFBUSxFQUFFLGlCQURBO0FBRVZDLHlCQUFLLEVBQUU7QUFBRUMseUJBQUcsRUFBRVYsT0FBTyxDQUFDVztBQUFmO0FBRkcsbUJBQVo7QUFJRCxpQkFMNEQ7QUFBQSwwQkFNNURYLE9BQU8sQ0FBQ1k7QUFOb0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREQsZ0JBdUJDO0FBQUssbUJBQVMsRUFBRWYsbUVBQU0sQ0FBQ2dCLGVBQXZCO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFDRSxnQkFBSSxzQkFBZWIsT0FBTyxDQUFDVyxFQUF2QixDQUROO0FBRUUsaUJBQUssRUFBRVgsT0FBTyxDQUFDQyxLQUZqQjtBQUdFLG1CQUFPLE1BSFQ7QUFBQSxtQ0FLQztBQUFHLHVCQUFTLEVBQUVKLG1FQUFNLENBQUNpQixrQkFBckI7QUFBQSxxQ0FBeUM7QUFBQSxzQ0FBTWQsT0FBTyxDQUFDWSxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QlosU0FBVVosT0FBTyxDQUFDVyxFQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGM7QUFBQSxLQUFmO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUNELENBNUNEOztHQUFNbEIsUTtVQUNXRyxxRDs7O0tBRFhILFE7QUE4Q1NBLHVFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcHJvamVjdHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3Byb2plY3RzLm1vZHVsZS5zYXNzJ1xuaW1wb3J0IHByb2plY3RzIGZyb20gJy4uL2RhdGEvcHJvamVjdHMuanNvbidcblxuY29uc3QgcHJvamVjdHNMaXN0ID0gcHJvamVjdHMucHJvamVjdHM7XG5jb25zdCBzb3J0ZWRMaXN0ID0gcHJvamVjdHNMaXN0LnNvcnQoKVxuY29uc29sZS5sb2coc29ydGVkTGlzdClcbmNvbnN0IFByb2plY3RzID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxuICAgIHtzb3J0ZWRMaXN0Lm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgPGRpdiBrZXk9e3Byb2plY3QuaWR9PlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0LmltYWdlID8gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ib3h9PlxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdEltZ31cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvamVjdHBpY3R1cmVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1hc2t9PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8TGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzPXtwcm9qZWN0fVxuICAgICAgICAgICAgICAgICAgICAgID4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmt9IHByb3BzPXtwcm9qZWN0fT4gPHAgY2xhc3NOYW1lPXtzdHlsZXMucHJvamVjdF90aXRsZX0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCh7XG4gICAgICAgICAgcGF0aG5hbWU6ICcvcHJvamVjdHMvW3BpZF0nLFxuICAgICAgICAgIHF1ZXJ5OiB7IHBpZDogcHJvamVjdC5pZCB9LFxuICAgICAgICB9KVxuICAgICAgfX0+XG4gICAgICB7cHJvamVjdC50aXRsZX08L3A+PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfd2l0aG91dF9pbWFnZX0+PHA+4oCiIHtwcm9qZWN0LnRpdGxlfTwvcD48L2E+IFxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgPC9kaXY+XG4pXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})