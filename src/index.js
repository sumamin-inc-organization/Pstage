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

    /* featureセクション */
    let speech = gsap.timeline({
        scrollTrigger: {
            trigger: ".feature_headline",
            start: "top",
            scrub: false,
        },
    });
    speech
    .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

    /* flowセクション */
    let flow_upper_title = gsap.timeline({
        scrollTrigger: {
            trigger: ".flow_headline",
            start: "top",
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
    .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

    let  course_decoration_text = gsap.timeline({
        scrollTrigger: {
            trigger: ".course_decoration_text",
            start: "-=280px",
            scrub: false,
        },
    });
    course_decoration_text
    .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

    gsap.to(".bg_orange", {
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

    let underline01 = CSSRulePlugin.getRule(".underline_anime_01::after");

    gsap.to(underline01, {
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

    let underline02 = CSSRulePlugin.getRule(".underline_anime_02::after");

    gsap.to(underline02, {
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