/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/company.css":
/*!*****************************!*\
  !*** ./src/css/company.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/decision.css":
/*!******************************!*\
  !*** ./src/css/decision.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/faq.css":
/*!*************************!*\
  !*** ./src/css/faq.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/feature.css":
/*!*****************************!*\
  !*** ./src/css/feature.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/flow.css":
/*!**************************!*\
  !*** ./src/css/flow.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/kv.css":
/*!************************!*\
  !*** ./src/css/kv.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/price.css":
/*!***************************!*\
  !*** ./src/css/price.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/top.css":
/*!*************************!*\
  !*** ./src/css/top.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/video.css":
/*!***************************!*\
  !*** ./src/css/video.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/voice.css":
/*!***************************!*\
  !*** ./src/css/voice.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _css_top_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/top.css */ "./src/css/top.css");
/* harmony import */ var _css_kv_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/kv.css */ "./src/css/kv.css");
/* harmony import */ var _css_feature_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/feature.css */ "./src/css/feature.css");
/* harmony import */ var _css_decision_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/decision.css */ "./src/css/decision.css");
/* harmony import */ var _css_flow_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/flow.css */ "./src/css/flow.css");
/* harmony import */ var _css_price_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./css/price.css */ "./src/css/price.css");
/* harmony import */ var _css_video_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/video.css */ "./src/css/video.css");
/* harmony import */ var _css_voice_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/voice.css */ "./src/css/voice.css");
/* harmony import */ var _css_faq_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./css/faq.css */ "./src/css/faq.css");
/* harmony import */ var _css_company_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/company.css */ "./src/css/company.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! gsap/CSSRulePlugin */ "./node_modules/gsap/CSSRulePlugin.js");














gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_12__.ScrollTrigger);

gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.registerPlugin(gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin);


$(function() {
    //よくある質問クリックイベント
    $('.faq_item').click(function() {
        $(this).find('.faq_mark').toggleClass('open');
        $(this).find('.faq_answer').slideToggle();
    });

    $('.top_back_btn').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });
});

/*  出現アニメーション */
document.addEventListener("DOMContentLoaded", function() {
    /* kvセクション */
    let kvText01 = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".kv_text01",
            start: "-=100px",
            scrub: false,
        },
    });
    kvText01
    .from(".kv_text01", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    /* featureセクション */
    let speech = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".feature_headline",
            start: "top",
            scrub: false,
        },
    });
    speech
    .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    /* flowセクション */
    let flow_upper_title = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".flow_headline",
            start: "top",
            scrub: false,
        },
    });
    flow_upper_title
    .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".flow_support",
            start: "-=100px",
            scrub: false,
        },
    });

    flowSupport
    .from(".kirakira_01", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})
    .from(".kirakira_02", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "-=0.4");

    /* priceセクション */
    let price_upper_arraow = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".price_upper_arraow",
            start: "-=500px",
            scrub: false,
        },
    });
    price_upper_arraow
    .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    let hukidashi = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".subsc_course::after");

    let  subscCourse = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".subsc_course",
            start: "-=160px",
            scrub: false,
        },
    });
    subscCourse
    .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

    let  course_decoration_text = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
        scrollTrigger: {
            trigger: ".course_decoration_text",
            start: "-=280px",
            scrub: false,
        },
    });
    course_decoration_text
    .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

    gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(".bg_orange", {
        scrollTrigger: {
            trigger: ".bg_orange",
            start: "-=400px",
            toggleClass: {
            targets: ".bg_orange",
            className: "active",
            },
            once: true,
        },
    });

    let underline01 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_01::after");

    gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline01, {
        scrollTrigger: {
            trigger: ".single_course",
            start: "-=200px",
            toggleClass: {
            targets: ".underline_anime_01",
            className: "active",
            },
            once: true,
        },
    });

    let underline02 = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".underline_anime_02::after");

    gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(underline02, {
        scrollTrigger: {
            trigger: ".subsc_course",
            start: "-=200px",
            toggleClass: {
            targets: ".underline_anime_02",
            className: "active",
            },
            once: true,
        },
    });
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkpstage"] = self["webpackChunkpstage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_CSSRulePlugin_js-node_modules_gsap_ScrollTrigger_js-node_modules_gs-7662f8"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZjQ3ZjExMjc2YjUxNzhlZGRkYzcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdCO0FBQ0Y7QUFDRDtBQUNLO0FBQ0M7QUFDSjtBQUNDO0FBQ0E7QUFDQTtBQUNEO0FBQ0k7O0FBRUM7QUFDdUI7QUFDbkQsdUNBQUksZ0JBQWdCLDhEQUFhO0FBQ2tCO0FBQ25ELHVDQUFJLGdCQUFnQiw4REFBYTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsdUNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsMEJBQTBCLDREQUE0RDs7QUFFdEY7QUFDQSxpQkFBaUIsdUNBQUk7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EscUNBQXFDLDREQUE0RDs7QUFFakc7QUFDQSwyQkFBMkIsdUNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsaUNBQWlDLDREQUE0RDs7QUFFN0YsdUJBQXVCLHVDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUw7QUFDQSw0QkFBNEIsNERBQTREO0FBQ3hGLDRCQUE0Qiw0REFBNEQ7O0FBRXhGO0FBQ0EsNkJBQTZCLHVDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLG1DQUFtQyw4Q0FBOEM7O0FBRWpGLG9CQUFvQiw4REFBYTs7QUFFakMsdUJBQXVCLHVDQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBLHFCQUFxQiw0REFBNEQ7O0FBRWpGLGtDQUFrQyx1Q0FBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQSx1Q0FBdUMsNERBQTREOztBQUVuRyxJQUFJLHVDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUwsc0JBQXNCLDhEQUFhOztBQUVuQyxJQUFJLHVDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7O0FBRUwsc0JBQXNCLDhEQUFhOztBQUVuQyxJQUFJLHVDQUFJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTCxDQUFDOzs7Ozs7VUN4SkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL2NvbXBhbnkuY3NzPzNhMTEiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9kZWNpc2lvbi5jc3M/Zjk4NyIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL2ZhcS5jc3M/M2RkMCIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL2ZlYXR1cmUuY3NzP2U5ZTEiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9mbG93LmNzcz84MDMxIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3Mva3YuY3NzP2JjYWEiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9wcmljZS5jc3M/NTFlMSIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL3Jlc2V0LmNzcz81OTM2Iiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvdG9wLmNzcz9lZTg4Iiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvdmlkZW8uY3NzP2Q2NGIiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy92b2ljZS5jc3M/MmE0ZCIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHN0YWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHN0YWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHN0YWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHN0YWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcHN0YWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgXCIuL2Nzcy9yZXNldC5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvdG9wLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9rdi5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvZmVhdHVyZS5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvZGVjaXNpb24uY3NzXCJcbmltcG9ydCBcIi4vY3NzL2Zsb3cuY3NzXCJcbmltcG9ydCBcIi4vY3NzL3ByaWNlLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy92aWRlby5jc3NcIlxuaW1wb3J0IFwiLi9jc3Mvdm9pY2UuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2ZhcS5jc3NcIjtcbmltcG9ydCBcIi4vY3NzL2NvbXBhbnkuY3NzXCI7XG5cbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xuaW1wb3J0IHsgU2Nyb2xsVHJpZ2dlciB9IGZyb20gXCJnc2FwL1Njcm9sbFRyaWdnZXJcIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oU2Nyb2xsVHJpZ2dlcik7XG5pbXBvcnQgeyBDU1NSdWxlUGx1Z2luIH0gZnJvbSBcImdzYXAvQ1NTUnVsZVBsdWdpblwiO1xuZ3NhcC5yZWdpc3RlclBsdWdpbihDU1NSdWxlUGx1Z2luKTtcblxuXG4kKGZ1bmN0aW9uKCkge1xuICAgIC8v44KI44GP44GC44KL6LOq5ZWP44Kv44Oq44OD44Kv44Kk44OZ44Oz44OIXG4gICAgJCgnLmZhcV9pdGVtJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQodGhpcykuZmluZCgnLmZhcV9tYXJrJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcbiAgICAgICAgJCh0aGlzKS5maW5kKCcuZmFxX2Fuc3dlcicpLnNsaWRlVG9nZ2xlKCk7XG4gICAgfSk7XG5cbiAgICAkKCcudG9wX2JhY2tfYnRuJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgIHNjcm9sbFRvcDogMFxuICAgICAgICB9LCAzMDApO1xuICAgIH0pO1xufSk7XG5cbi8qIMKg5Ye654++44Ki44OL44Oh44O844K344On44OzICovXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcbiAgICAvKiBrduOCu+OCr+OCt+ODp+ODsyAqL1xuICAgIGxldCBrdlRleHQwMSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5rdl90ZXh0MDFcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBrdlRleHQwMVxuICAgIC5mcm9tKFwiLmt2X3RleHQwMVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgLyogZmVhdHVyZeOCu+OCr+OCt+ODp+ODsyAqL1xuICAgIGxldCBzcGVlY2ggPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIuZmVhdHVyZV9oZWFkbGluZVwiLFxuICAgICAgICAgICAgc3RhcnQ6IFwidG9wXCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgc3BlZWNoXG4gICAgLmZyb20oXCIuZmVhdHVyZV9oZWFkIC5zcGVlY2hcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSwgXCIrPTAuNFwiKTtcblxuICAgIC8qIGZsb3fjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICBsZXQgZmxvd191cHBlcl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5mbG93X2hlYWRsaW5lXCIsXG4gICAgICAgICAgICBzdGFydDogXCJ0b3BcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBmbG93X3VwcGVyX3RpdGxlXG4gICAgLmZyb20oXCIuZmxvd191cHBlcl90aXRsZVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgbGV0ICBmbG93U3VwcG9ydCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5mbG93X3N1cHBvcnRcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09MTAwcHhcIixcbiAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGZsb3dTdXBwb3J0XG4gICAgLmZyb20oXCIua2lyYWtpcmFfMDFcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSlcbiAgICAuZnJvbShcIi5raXJha2lyYV8wMlwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIi09MC40XCIpO1xuXG4gICAgLyogcHJpY2Xjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICBsZXQgcHJpY2VfdXBwZXJfYXJyYW93ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgIHRyaWdnZXI6IFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLFxuICAgICAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0pO1xuICAgIHByaWNlX3VwcGVyX2FycmFvd1xuICAgIC5mcm9tKFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLCB7IHk6IC0xMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSwgXCIrPTAuNFwiKTtcblxuICAgIGxldCBodWtpZGFzaGkgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIuc3Vic2NfY291cnNlOjphZnRlclwiKTtcblxuICAgIGxldCAgc3Vic2NDb3Vyc2UgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIuc3Vic2NfY291cnNlXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTE2MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgc3Vic2NDb3Vyc2VcbiAgICAudG8oaHVraWRhc2hpLCB7IHNjYWxlOiAxLCBvcGFjaXR5OiAxLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9KTtcblxuICAgIGxldCAgY291cnNlX2RlY29yYXRpb25fdGV4dCA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5jb3Vyc2VfZGVjb3JhdGlvbl90ZXh0XCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTI4MHB4XCIsXG4gICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgY291cnNlX2RlY29yYXRpb25fdGV4dFxuICAgIC5mcm9tKFwiLmNvdXJzZV9kZWNvcmF0aW9uX3RleHRcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSlcblxuICAgIGdzYXAudG8oXCIuYmdfb3JhbmdlXCIsIHtcbiAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgdHJpZ2dlcjogXCIuYmdfb3JhbmdlXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgdGFyZ2V0czogXCIuYmdfb3JhbmdlXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxldCB1bmRlcmxpbmUwMSA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi51bmRlcmxpbmVfYW5pbWVfMDE6OmFmdGVyXCIpO1xuXG4gICAgZ3NhcC50byh1bmRlcmxpbmUwMSwge1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5zaW5nbGVfY291cnNlXCIsXG4gICAgICAgICAgICBzdGFydDogXCItPTIwMHB4XCIsXG4gICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgdGFyZ2V0czogXCIudW5kZXJsaW5lX2FuaW1lXzAxXCIsXG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiYWN0aXZlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGxldCB1bmRlcmxpbmUwMiA9IENTU1J1bGVQbHVnaW4uZ2V0UnVsZShcIi51bmRlcmxpbmVfYW5pbWVfMDI6OmFmdGVyXCIpO1xuXG4gICAgZ3NhcC50byh1bmRlcmxpbmUwMiwge1xuICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICB0cmlnZ2VyOiBcIi5zdWJzY19jb3Vyc2VcIixcbiAgICAgICAgICAgIHN0YXJ0OiBcIi09MjAwcHhcIixcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7XG4gICAgICAgICAgICB0YXJnZXRzOiBcIi51bmRlcmxpbmVfYW5pbWVfMDJcIixcbiAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbmNlOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0pO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcHN0YWdlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BzdGFnZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9DU1NSdWxlUGx1Z2luX2pzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzLTc2NjJmOFwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9