import "./css/reset.css"
import "./css/top.css"
import "./css/kv.css"
import "./css/feature.css"
import "./css/decision.css"
import "./css/flow.css"
import "./css/price.css"
import "./css/video.css"
import "./css/voice.css"
import "./css/faq.css";
import "./css/company.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
gsap.registerPlugin(CSSRulePlugin);


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
    let kvText01 = gsap.timeline({
        scrollTrigger: {
            trigger: ".kv_text01",
            start: "-=100px",
            scrub: false,
        },
    });
    kvText01
    .from(".kv_text01", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    /* flowセクション */
    let flow_upper_title = gsap.timeline({
        scrollTrigger: {
            trigger: ".flow_upper_title",
            start: "-=300px",
            scrub: false,
        },
    });
    flow_upper_title
    .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    let  flowSupport = gsap.timeline({
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
    let price_upper_arraow = gsap.timeline({
        scrollTrigger: {
            trigger: ".price_upper_arraow",
            start: "-=500px",
            scrub: false,
        },
    });
    price_upper_arraow
    .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    let hukidashi = CSSRulePlugin.getRule(".subsc_course::after");

    let  subscCourse = gsap.timeline({
        scrollTrigger: {
            trigger: ".subsc_course",
            start: "-=160px",
            scrub: false,
        },
    });

    subscCourse
    .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"})

    gsap.to(".bg_orange", {
        scrollTrigger: {
            trigger: ".bg_orange", // アニメーションが始まるトリガーとなる要素
            start: "top center", // アニメーションが始まる位置
            toggleClass: {
            targets: ".bg_orange", // クラスを切り替える対象の要素
            className: "active", // クラス名 "active" を付け外し
            },
            once: true,
        },
    });
});


// $(document).ready(function() {
//     if (navigator.userAgent.indexOf("iPhone") > 0) {
//         let dottedSp01 = $('.dotted_sp_01');
//         let dottedSp02 = $('.dotted_sp_02');
//         $(dottedSp01).css({'margin-left': '-2px', 'width': '100px', 'height' : '3.92px'});
//         $(dottedSp02).css({'margin-left': '-4px', 'width' : '139.29px', 'height' : '3.67px'});
//     }
// });
