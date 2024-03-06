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
    // レスポンシブ対応
    let mm = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.matchMedia();
    /* sp */
    mm.add("(max-width: 767px)", () => {
        /* featureセクション */
        let speech = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=300px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=260px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_support",
                start: "-=400px",
                scrub: false,
            },
        });

        flowSupport
        .from(".kirakira_01", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"})
        .from(".kirakira_02", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"}, "-=0.2");

        /* priceセクション */
        let price_upper_arraow = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=480px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let hukidashi = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".subsc_course::after");

        let  subscCourse = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=440px",
                scrub: false,
            },
        });
        subscCourse
        .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=480px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(".bg_orange", {
            scrollTrigger: {
                trigger: ".bg_orange",
                start: "-=560px",
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
                start: "-=400px",
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
                start: "-=400px",
                toggleClass: {
                targets: ".underline_anime_02",
                className: "active",
                },
                once: true,
            },
        });
    });

    /* pc */
    mm.add("(min-width: 768px)", () => {
        /* featureセクション */
        let speech = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_support",
                start: "-=460px",
                scrub: false,
            },
        });

        flowSupport
        .from(".kirakira_01", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"})
        .from(".kirakira_02", { scale: 0, opacity: 0, duration: 0.2, ease: "bounce.out"}, "-=0.2");

        /* priceセクション */
        let price_upper_arraow = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=580px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let hukidashi = gsap_CSSRulePlugin__WEBPACK_IMPORTED_MODULE_13__.CSSRulePlugin.getRule(".subsc_course::after");

        let  subscCourse = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=540px",
                scrub: false,
            },
        });
        subscCourse
        .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=580px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap__WEBPACK_IMPORTED_MODULE_11__.gsap.to(".bg_orange", {
            scrollTrigger: {
                trigger: ".bg_orange",
                start: "-=660px",
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
                start: "-=500px",
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
                start: "-=500px",
                toggleClass: {
                targets: ".underline_anime_02",
                className: "active",
                },
                once: true,
            },
        });
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
/******/ 			"index": 0,
/******/ 			"src_css_reset_css-src_css_top_css": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_gsap_CSSRulePlugin_js-node_modules_gsap_ScrollTrigger_js-node_modules_gs-7662f8","src_css_reset_css-src_css_top_css"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMjU5NTlmNjdiODJlYzBjNDYxZDEuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXdCO0FBQ0Y7QUFDRDtBQUNLO0FBQ0M7QUFDSjtBQUNDO0FBQ0E7QUFDQTtBQUNEO0FBQ0k7O0FBRUM7QUFDdUI7QUFDbkQsdUNBQUksZ0JBQWdCLDhEQUFhO0FBQ2tCO0FBQ25ELHVDQUFJLGdCQUFnQiw4REFBYTs7O0FBR2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLHVDQUFJO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix1Q0FBSTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSx5Q0FBeUMsNERBQTREOztBQUVyRztBQUNBLCtCQUErQix1Q0FBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxxQ0FBcUMsNERBQTREOztBQUVqRywyQkFBMkIsdUNBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUzs7QUFFVDtBQUNBLGdDQUFnQyx3REFBd0Q7QUFDeEYsZ0NBQWdDLHdEQUF3RDs7QUFFeEY7QUFDQSxpQ0FBaUMsdUNBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsdUNBQXVDLDhDQUE4Qzs7QUFFckYsd0JB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QUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9jb21wYW55LmNzcz8zYTExIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvZGVjaXNpb24uY3NzP2Y5ODciLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9mYXEuY3NzPzNkZDAiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9mZWF0dXJlLmNzcz9lOWUxIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvZmxvdy5jc3M/ODAzMSIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL2t2LmNzcz9iY2FhIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3MvcHJpY2UuY3NzPzUxZTEiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2Nzcy9yZXNldC5jc3M/NTkzNiIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL3RvcC5jc3M/ZWU4OCIsIndlYnBhY2s6Ly9wc3RhZ2UvLi9zcmMvY3NzL3ZpZGVvLmNzcz9kNjRiIiwid2VicGFjazovL3BzdGFnZS8uL3NyYy9jc3Mvdm9pY2UuY3NzPzJhNGQiLCJ3ZWJwYWNrOi8vcHN0YWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9wc3RhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3BzdGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0IFwiLi9jc3MvcmVzZXQuY3NzXCJcbmltcG9ydCBcIi4vY3NzL3RvcC5jc3NcIlxuaW1wb3J0IFwiLi9jc3Mva3YuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2ZlYXR1cmUuY3NzXCJcbmltcG9ydCBcIi4vY3NzL2RlY2lzaW9uLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9mbG93LmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9wcmljZS5jc3NcIlxuaW1wb3J0IFwiLi9jc3MvdmlkZW8uY3NzXCJcbmltcG9ydCBcIi4vY3NzL3ZvaWNlLmNzc1wiXG5pbXBvcnQgXCIuL2Nzcy9mYXEuY3NzXCI7XG5pbXBvcnQgXCIuL2Nzcy9jb21wYW55LmNzc1wiO1xuXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcbmltcG9ydCB7IFNjcm9sbFRyaWdnZXIgfSBmcm9tIFwiZ3NhcC9TY3JvbGxUcmlnZ2VyXCI7XG5nc2FwLnJlZ2lzdGVyUGx1Z2luKFNjcm9sbFRyaWdnZXIpO1xuaW1wb3J0IHsgQ1NTUnVsZVBsdWdpbiB9IGZyb20gXCJnc2FwL0NTU1J1bGVQbHVnaW5cIjtcbmdzYXAucmVnaXN0ZXJQbHVnaW4oQ1NTUnVsZVBsdWdpbik7XG5cblxuJChmdW5jdGlvbigpIHtcbiAgICAvL+OCiOOBj+OBguOCi+izquWVj+OCr+ODquODg+OCr+OCpOODmeODs+ODiFxuICAgICQoJy5mYXFfaXRlbScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKHRoaXMpLmZpbmQoJy5mYXFfbWFyaycpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XG4gICAgICAgICQodGhpcykuZmluZCgnLmZhcV9hbnN3ZXInKS5zbGlkZVRvZ2dsZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnLnRvcF9iYWNrX2J0bicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICBzY3JvbGxUb3A6IDBcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9KTtcbn0pO1xuXG4vKiDCoOWHuuePvuOCouODi+ODoeODvOOCt+ODp+ODsyAqL1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XG4gICAgLy8g44Os44K544Od44Oz44K344OW5a++5b+cXG4gICAgbGV0IG1tID0gZ3NhcC5tYXRjaE1lZGlhKCk7XG4gICAgLyogc3AgKi9cbiAgICBtbS5hZGQoXCIobWF4LXdpZHRoOiA3NjdweClcIiwgKCkgPT4ge1xuICAgICAgICAvKiBmZWF0dXJl44K744Kv44K344On44OzICovXG4gICAgICAgIGxldCBzcGVlY2ggPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX2hlYWRsaW5lXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT0zMDBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzcGVlY2hcbiAgICAgICAgLmZyb20oXCIuZmVhdHVyZV9oZWFkIC5zcGVlY2hcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSk7XG5cbiAgICAgICAgLyogZmxvd+OCu+OCr+OCt+ODp+ODsyAqL1xuICAgICAgICBsZXQgZmxvd191cHBlcl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmZsb3dfaGVhZGxpbmVcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTI2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGZsb3dfdXBwZXJfdGl0bGVcbiAgICAgICAgLmZyb20oXCIuZmxvd191cHBlcl90aXRsZVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgICAgIGxldCAgZmxvd1N1cHBvcnQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mbG93X3N1cHBvcnRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmxvd1N1cHBvcnRcbiAgICAgICAgLmZyb20oXCIua2lyYWtpcmFfMDFcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgZWFzZTogXCJib3VuY2Uub3V0XCJ9KVxuICAgICAgICAuZnJvbShcIi5raXJha2lyYV8wMlwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImJvdW5jZS5vdXRcIn0sIFwiLT0wLjJcIik7XG5cbiAgICAgICAgLyogcHJpY2Xjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICAgICAgbGV0IHByaWNlX3VwcGVyX2FycmFvdyA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDgwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcHJpY2VfdXBwZXJfYXJyYW93XG4gICAgICAgIC5mcm9tKFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLCB7IHk6IC0xMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSwgXCIrPTAuNFwiKTtcblxuICAgICAgICBsZXQgaHVraWRhc2hpID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLnN1YnNjX2NvdXJzZTo6YWZ0ZXJcIik7XG5cbiAgICAgICAgbGV0ICBzdWJzY0NvdXJzZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnN1YnNjX2NvdXJzZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDQwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NDb3Vyc2VcbiAgICAgICAgLnRvKGh1a2lkYXNoaSwgeyBzY2FsZTogMSwgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSk7XG5cbiAgICAgICAgbGV0ICBjb3Vyc2VfZGVjb3JhdGlvbl90ZXh0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuY291cnNlX2RlY29yYXRpb25fdGV4dFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDgwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY291cnNlX2RlY29yYXRpb25fdGV4dFxuICAgICAgICAuZnJvbShcIi5jb3Vyc2VfZGVjb3JhdGlvbl90ZXh0XCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0pXG5cbiAgICAgICAgZ3NhcC50byhcIi5iZ19vcmFuZ2VcIiwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmJnX29yYW5nZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTYwcHhcIixcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiLmJnX29yYW5nZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdW5kZXJsaW5lMDEgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIudW5kZXJsaW5lX2FuaW1lXzAxOjphZnRlclwiKTtcblxuICAgICAgICBnc2FwLnRvKHVuZGVybGluZTAxLCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc2luZ2xlX2NvdXJzZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NDAwcHhcIixcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiLnVuZGVybGluZV9hbmltZV8wMVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdW5kZXJsaW5lMDIgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIudW5kZXJsaW5lX2FuaW1lXzAyOjphZnRlclwiKTtcblxuICAgICAgICBnc2FwLnRvKHVuZGVybGluZTAyLCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc3Vic2NfY291cnNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT00MDBweFwiLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogXCIudW5kZXJsaW5lX2FuaW1lXzAyXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLyogcGMgKi9cbiAgICBtbS5hZGQoXCIobWluLXdpZHRoOiA3NjhweClcIiwgKCkgPT4ge1xuICAgICAgICAvKiBmZWF0dXJl44K744Kv44K344On44OzICovXG4gICAgICAgIGxldCBzcGVlY2ggPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mZWF0dXJlX2hlYWRsaW5lXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT00MDBweFwiLFxuICAgICAgICAgICAgICAgIHNjcnViOiBmYWxzZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBzcGVlY2hcbiAgICAgICAgLmZyb20oXCIuZmVhdHVyZV9oZWFkIC5zcGVlY2hcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSk7XG5cbiAgICAgICAgLyogZmxvd+OCu+OCr+OCt+ODp+ODsyAqL1xuICAgICAgICBsZXQgZmxvd191cHBlcl90aXRsZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmZsb3dfaGVhZGxpbmVcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQwMHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGZsb3dfdXBwZXJfdGl0bGVcbiAgICAgICAgLmZyb20oXCIuZmxvd191cHBlcl90aXRsZVwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC41LCBlYXNlOiBcIlBvd2VyNC5lYXNlT3V0XCJ9LCBcIis9MC40XCIpO1xuXG4gICAgICAgIGxldCAgZmxvd1N1cHBvcnQgPSBnc2FwLnRpbWVsaW5lKHtcbiAgICAgICAgICAgIHNjcm9sbFRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyOiBcIi5mbG93X3N1cHBvcnRcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCItPTQ2MHB4XCIsXG4gICAgICAgICAgICAgICAgc2NydWI6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmxvd1N1cHBvcnRcbiAgICAgICAgLmZyb20oXCIua2lyYWtpcmFfMDFcIiwgeyBzY2FsZTogMCwgb3BhY2l0eTogMCwgZHVyYXRpb246IDAuMiwgZWFzZTogXCJib3VuY2Uub3V0XCJ9KVxuICAgICAgICAuZnJvbShcIi5raXJha2lyYV8wMlwiLCB7IHNjYWxlOiAwLCBvcGFjaXR5OiAwLCBkdXJhdGlvbjogMC4yLCBlYXNlOiBcImJvdW5jZS5vdXRcIn0sIFwiLT0wLjJcIik7XG5cbiAgICAgICAgLyogcHJpY2Xjgrvjgq/jgrfjg6fjg7MgKi9cbiAgICAgICAgbGV0IHByaWNlX3VwcGVyX2FycmFvdyA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTgwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgcHJpY2VfdXBwZXJfYXJyYW93XG4gICAgICAgIC5mcm9tKFwiLnByaWNlX3VwcGVyX2FycmFvd1wiLCB7IHk6IC0xMCwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSwgXCIrPTAuNFwiKTtcblxuICAgICAgICBsZXQgaHVraWRhc2hpID0gQ1NTUnVsZVBsdWdpbi5nZXRSdWxlKFwiLnN1YnNjX2NvdXJzZTo6YWZ0ZXJcIik7XG5cbiAgICAgICAgbGV0ICBzdWJzY0NvdXJzZSA9IGdzYXAudGltZWxpbmUoe1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLnN1YnNjX2NvdXJzZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTQwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgc3Vic2NDb3Vyc2VcbiAgICAgICAgLnRvKGh1a2lkYXNoaSwgeyBzY2FsZTogMSwgb3BhY2l0eTogMSwgZHVyYXRpb246IDAuNSwgZWFzZTogXCJQb3dlcjQuZWFzZU91dFwifSk7XG5cbiAgICAgICAgbGV0ICBjb3Vyc2VfZGVjb3JhdGlvbl90ZXh0ID0gZ3NhcC50aW1lbGluZSh7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuY291cnNlX2RlY29yYXRpb25fdGV4dFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTgwcHhcIixcbiAgICAgICAgICAgICAgICBzY3J1YjogZmFsc2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY291cnNlX2RlY29yYXRpb25fdGV4dFxuICAgICAgICAuZnJvbShcIi5jb3Vyc2VfZGVjb3JhdGlvbl90ZXh0XCIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAsIGR1cmF0aW9uOiAwLjUsIGVhc2U6IFwiUG93ZXI0LmVhc2VPdXRcIn0pXG5cbiAgICAgICAgZ3NhcC50byhcIi5iZ19vcmFuZ2VcIiwge1xuICAgICAgICAgICAgc2Nyb2xsVHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHRyaWdnZXI6IFwiLmJnX29yYW5nZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NjYwcHhcIixcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiLmJnX29yYW5nZVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdW5kZXJsaW5lMDEgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIudW5kZXJsaW5lX2FuaW1lXzAxOjphZnRlclwiKTtcblxuICAgICAgICBnc2FwLnRvKHVuZGVybGluZTAxLCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc2luZ2xlX2NvdXJzZVwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIi09NTAwcHhcIixcbiAgICAgICAgICAgICAgICB0b2dnbGVDbGFzczoge1xuICAgICAgICAgICAgICAgIHRhcmdldHM6IFwiLnVuZGVybGluZV9hbmltZV8wMVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uY2U6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgdW5kZXJsaW5lMDIgPSBDU1NSdWxlUGx1Z2luLmdldFJ1bGUoXCIudW5kZXJsaW5lX2FuaW1lXzAyOjphZnRlclwiKTtcblxuICAgICAgICBnc2FwLnRvKHVuZGVybGluZTAyLCB7XG4gICAgICAgICAgICBzY3JvbGxUcmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcjogXCIuc3Vic2NfY291cnNlXCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiLT01MDBweFwiLFxuICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0czogXCIudW5kZXJsaW5lX2FuaW1lXzAyXCIsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImFjdGl2ZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb25jZTogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzcmNfY3NzX3Jlc2V0X2Nzcy1zcmNfY3NzX3RvcF9jc3NcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcHN0YWdlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3BzdGFnZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfZ3NhcF9DU1NSdWxlUGx1Z2luX2pzLW5vZGVfbW9kdWxlc19nc2FwX1Njcm9sbFRyaWdnZXJfanMtbm9kZV9tb2R1bGVzX2dzLTc2NjJmOFwiLFwic3JjX2Nzc19yZXNldF9jc3Mtc3JjX2Nzc190b3BfY3NzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=