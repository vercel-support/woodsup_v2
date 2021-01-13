webpackHotUpdate_N_E("pages/projects",{

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/projects.module.sass */ \"./styles/projects.module.sass\");\n/* harmony import */ var _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _data_projects_de_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/projects_de.json */ \"./data/projects_de.json\");\nvar _data_projects_de_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects_de.json */ \"./data/projects_de.json\", 1);\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../i18n */ \"./i18n.js\");\n/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _data_projects_en_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/projects_en.json */ \"./data/projects_en.json\");\nvar _data_projects_en_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects_en.json */ \"./data/projects_en.json\", 1);\n/* harmony import */ var _data_projects_es_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../data/projects_es.json */ \"./data/projects_es.json\");\nvar _data_projects_es_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/projects_es.json */ \"./data/projects_es.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/Users/Konstantin/Desktop/code/woodsup_v2/pages/projects.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Projects = function Projects(_ref) {\n  _s();\n\n  var t = _ref.t,\n      props = _ref.props;\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  var projectsList = _data_projects_de_json__WEBPACK_IMPORTED_MODULE_7__.projects;\n\n  if (_i18n__WEBPACK_IMPORTED_MODULE_8__[\"i18n\"].language === 'de') {\n    projectsList = _data_projects_de_json__WEBPACK_IMPORTED_MODULE_7__.projects;\n  }\n\n  if (_i18n__WEBPACK_IMPORTED_MODULE_8__[\"i18n\"].language === 'en') {\n    projectsList = _data_projects_en_json__WEBPACK_IMPORTED_MODULE_9__.projects;\n  }\n\n  if (_i18n__WEBPACK_IMPORTED_MODULE_8__[\"i18n\"].language === 'es') {\n    projectsList = _data_projects_es_json__WEBPACK_IMPORTED_MODULE_10__.projects;\n  }\n\n  var sortedList = projectsList.sort(function (a, b) {\n    return b.id - a.id;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.home,\n    children: sortedList.map(function (project) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n        children: project.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.box,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"img\", {\n            className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.projectImg,\n            src: project.image,\n            alt: \"Projectpicture\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n            className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.mask,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n              scroll: true,\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.link,\n              props: project,\n              children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.project_title,\n                onClick: function onClick() {\n                  router.push({\n                    pathname: '/projects/[pid]',\n                    query: {\n                      pid: project.id\n                    },\n                    scroll: true\n                  });\n                },\n                children: project.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 41,\n                columnNumber: 85\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 24\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 21\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 19\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n          className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.project_heading,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {\n            href: \"/projects/\".concat(project.id),\n            props: project.image,\n            replace: true,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"a\", {\n              className: _styles_projects_module_sass__WEBPACK_IMPORTED_MODULE_6___default.a.link_without_image,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"p\", {\n                children: [\"\\u2022 \", project.title]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 58,\n                columnNumber: 63\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 58,\n              columnNumber: 22\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 19\n        }, _this)\n      }, project.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Projects, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Projects;\nProjects.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          return _context.abrupt(\"return\", {\n            namespacesRequired: ['common']\n          });\n\n        case 1:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\nProjects.propTypes = {\n  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__[\"withTranslation\"])('common')(Projects));\n\nvar _c;\n\n$RefreshReg$(_c, \"Projects\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvamVjdHMuanM/NDQ3MSJdLCJuYW1lcyI6WyJQcm9qZWN0cyIsInQiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2plY3RzTGlzdCIsInByb2plY3RzX2RlIiwicHJvamVjdHMiLCJpMThuIiwibGFuZ3VhZ2UiLCJwcm9qZWN0c19lbiIsInByb2plY3RzX2VzIiwic29ydGVkTGlzdCIsInNvcnQiLCJhIiwiYiIsImlkIiwic3R5bGVzIiwiaG9tZSIsIm1hcCIsInByb2plY3QiLCJpbWFnZSIsImJveCIsInByb2plY3RJbWciLCJtYXNrIiwibGluayIsInByb2plY3RfdGl0bGUiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsInBpZCIsInNjcm9sbCIsInRpdGxlIiwicHJvamVjdF9oZWFkaW5nIiwibGlua193aXRob3V0X2ltYWdlIiwiZ2V0SW5pdGlhbFByb3BzIiwibmFtZXNwYWNlc1JlcXVpcmVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJ3aXRoVHJhbnNsYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBS0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBZTtBQUFBOztBQUFBLE1BQWJDLENBQWEsUUFBYkEsQ0FBYTtBQUFBLE1BQVhDLEtBQVcsUUFBWEEsS0FBVztBQUM5QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHQyxtREFBVyxDQUFDQyxRQUEvQjs7QUFFQSxNQUFJQywwQ0FBSSxDQUFDQyxRQUFMLEtBQWtCLElBQXRCLEVBQTRCO0FBQzFCSixnQkFBWSxHQUFHQyxtREFBVyxDQUFDQyxRQUEzQjtBQUNEOztBQUNELE1BQUlDLDBDQUFJLENBQUNDLFFBQUwsS0FBa0IsSUFB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UUFBRCxDQUFmLENBQTBCekMsUUFBMUIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Byb2plY3RzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9wcm9qZWN0cy5tb2R1bGUuc2FzcydcbmltcG9ydCBwcm9qZWN0c19kZSBmcm9tICcuLi9kYXRhL3Byb2plY3RzX2RlLmpzb24nXG5pbXBvcnQgeyBpMThuLCB3aXRoVHJhbnNsYXRpb24gfSBmcm9tICcuLi9pMThuJ1xuXG5pbXBvcnQgcHJvamVjdHNfZW4gZnJvbSAnLi4vZGF0YS9wcm9qZWN0c19lbi5qc29uJ1xuaW1wb3J0IHByb2plY3RzX2VzIGZyb20gJy4uL2RhdGEvcHJvamVjdHNfZXMuanNvbidcblxuXG5cblxuY29uc3QgUHJvamVjdHMgPSAoe3QscHJvcHN9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGxldCBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0c19kZS5wcm9qZWN0c1xuICBcbiAgaWYgKGkxOG4ubGFuZ3VhZ2UgPT09ICdkZScpIHtcbiAgICBwcm9qZWN0c0xpc3QgPSBwcm9qZWN0c19kZS5wcm9qZWN0cztcbiAgfVxuICBpZiAoaTE4bi5sYW5ndWFnZSA9PT0gJ2VuJykge1xuICAgIHByb2plY3RzTGlzdCA9IHByb2plY3RzX2VuLnByb2plY3RzO1xuICB9XG4gIGlmIChpMThuLmxhbmd1YWdlID09PSAnZXMnKSB7XG4gICAgcHJvamVjdHNMaXN0ID0gcHJvamVjdHNfZXMucHJvamVjdHM7XG4gIH1cbiAgY29uc3Qgc29ydGVkTGlzdCA9IHByb2plY3RzTGlzdC5zb3J0KChhLCBiKSA9PiBiLmlkIC0gYS5pZClcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cbiAgICB7c29ydGVkTGlzdC5tYXAoKHByb2plY3QpID0+IChcbiAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfT5cbiAgICAgICAgICAgICAgICB7cHJvamVjdC5pbWFnZSA/IChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYm94fT5cbiAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RJbWd9XG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9qZWN0LmltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlByb2plY3RwaWN0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYXNrfT5cbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgc2Nyb2xsPXt0cnVlfSBjbGFzc05hbWU9e3N0eWxlcy5saW5rfSBwcm9wcz17cHJvamVjdH0+IDxwIGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfdGl0bGV9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goe1xuICAgICAgICAgIHBhdGhuYW1lOiAnL3Byb2plY3RzL1twaWRdJyxcbiAgICAgICAgICBxdWVyeTogeyBwaWQ6IHByb2plY3QuaWQgfSxcbiAgICAgICAgICBzY3JvbGw6IHRydWVcbiAgICAgICAgICB9KVxuICAgICAgfX0+XG4gICAgICB7cHJvamVjdC50aXRsZX08L3A+PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2plY3RfaGVhZGluZ30+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9qZWN0cy8ke3Byb2plY3QuaWR9YH1cbiAgICAgICAgICAgICAgICAgICAgICBwcm9wcz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICByZXBsYWNlXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtfd2l0aG91dF9pbWFnZX0+PHA+4oCiIHtwcm9qZWN0LnRpdGxlfTwvcD48L2E+IFxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApKX1cbiAgPC9kaXY+XG4pXG59XG5cblByb2plY3RzLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+ICh7XG4gIG5hbWVzcGFjZXNSZXF1aXJlZDogWydjb21tb24nXSxcbn0pXG5cblByb2plY3RzLnByb3BUeXBlcyA9IHtcbiAgdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn1cbmV4cG9ydCBkZWZhdWx0IHdpdGhUcmFuc2xhdGlvbignY29tbW9uJykoUHJvamVjdHMpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/projects.js\n");

/***/ })

})