// ==UserScript==
// @name         CSDN-help
// @namespace    *://*.csdn.net/*
// @version      0.1
// @description  CSDN文章允许复制/CSDN文章去除关注博主阅读全文
// @author       liufei
// @match        *://*.csdn.net/*
// @require      tampermonkey://vendor/jquery.js
// @grant        GM_addStyle 
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`pre,code{user-select:auto !important}.signin{display: none !important;}`)
    $("#article_content").removeAttr("style");
    $(".hide-article-box").remove();
})();