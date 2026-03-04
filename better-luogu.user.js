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

    GM_addStyle(`
        /* 轻微背景优化（不强制文字颜色） */
        body {
            background-color: #f7f9fb;
        }

        /* 仅优化按钮圆角，不改语义颜色 */
        .btn {
            border-radius: 8px;
            transition: all 0.15s ease;
        }

        .btn:hover {
            transform: translateY(-1px);
        }

        /* 代码块微优化 */
        pre, code {
            border-radius: 6px;
        }

        /* 侧边栏增加阴影（不改原色） */
        #sidebar {
            box-shadow: 2px 0 8px rgba(0,0,0,0.05);
        }
    `);
})();
