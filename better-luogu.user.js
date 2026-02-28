// ==UserScript==
// @name         Better Luogu!
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description:zh  洛谷扩展
// @description  Luogu Expansion
// @author       ChatGPT
// @match        https://www.luogu.com.cn/*
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==


(function() {
    'use strict';

    // 页面美化 CSS
    GM_addStyle(`
        body {
            background-color: #f0f4f7 !important;
            font-family: "Arial", sans-serif !important;
            color: #000 !important; /* 主文本黑色 */
        }

        h1, h2, h3 {
            color: #005d89; /* 标题颜色 */
        }

        #sidebar {
            background-color: #005d89;
            color: #fff;
        }

        .btn {
            background-color: #0077cc;
            border-radius: 5px;
            padding: 10px 20px;
            color: white;
            border: none;
            cursor: pointer;
        }

        .btn:hover {
            background-color: #005d89;
        }
    `);
})();
