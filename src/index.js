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

    let hukidashi = CSSRulePlugin.getRule(".subsc_course::after");
    console.log(hukidashi);

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


$(document).ready(function() {
    // var agent = navigator.userAgent;
    // console.log(agent);
    // if (navigator.userAgent.indexOf("iPhone") > 0) {
    //     let dottedSp01 = $('.dotted_sp_01');
    //     let dottedSp02 = $('.dotted_sp_02');
    //     $(dottedSp01).css({'margin-left': '0px', 'width': '100px'});
    //     $(dottedSp02).css({'margin-left': '-4px', 'width' : '140px'});
    // }
});
