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
    // レスポンシブ対応
    let mm = gsap.matchMedia();
    /* sp */
    mm.add("(max-width: 767px)", () => {
        /* featureセクション */
        let speech = gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=300px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=260px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap.timeline({
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
        let price_upper_arraow = gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=480px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let hukidashi = CSSRulePlugin.getRule(".subsc_course::after");

        let  subscCourse = gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=440px",
                scrub: false,
            },
        });
        subscCourse
        .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=480px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap.to(".bg_orange", {
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

        let underline01 = CSSRulePlugin.getRule(".underline_anime_01::after");

        gsap.to(underline01, {
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

        let underline02 = CSSRulePlugin.getRule(".underline_anime_02::after");

        gsap.to(underline02, {
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
        let speech = gsap.timeline({
            scrollTrigger: {
                trigger: ".feature_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        speech
        .from(".feature_head .speech", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"});

        /* flowセクション */
        let flow_upper_title = gsap.timeline({
            scrollTrigger: {
                trigger: ".flow_headline",
                start: "-=400px",
                scrub: false,
            },
        });
        flow_upper_title
        .from(".flow_upper_title", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let  flowSupport = gsap.timeline({
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
        let price_upper_arraow = gsap.timeline({
            scrollTrigger: {
                trigger: ".price_upper_arraow",
                start: "-=580px",
                scrub: false,
            },
        });
        price_upper_arraow
        .from(".price_upper_arraow", { y: -10, duration: 0.5, ease: "Power4.easeOut"}, "+=0.4");

        let hukidashi = CSSRulePlugin.getRule(".subsc_course::after");

        let  subscCourse = gsap.timeline({
            scrollTrigger: {
                trigger: ".subsc_course",
                start: "-=540px",
                scrub: false,
            },
        });
        subscCourse
        .to(hukidashi, { scale: 1, opacity: 1, duration: 0.5, ease: "Power4.easeOut"});

        let  course_decoration_text = gsap.timeline({
            scrollTrigger: {
                trigger: ".course_decoration_text",
                start: "-=580px",
                scrub: false,
            },
        });
        course_decoration_text
        .from(".course_decoration_text", { scale: 0, opacity: 0, duration: 0.5, ease: "Power4.easeOut"})

        gsap.to(".bg_orange", {
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

        let underline01 = CSSRulePlugin.getRule(".underline_anime_01::after");

        gsap.to(underline01, {
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

        let underline02 = CSSRulePlugin.getRule(".underline_anime_02::after");

        gsap.to(underline02, {
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