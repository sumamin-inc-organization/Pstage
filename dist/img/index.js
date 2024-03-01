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