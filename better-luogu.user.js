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

    // 1. 页面背景色和字体调整
    GM_addStyle(`
        body {
            background-color: #f0f4f7 !important;
            font-family: "Arial", sans-serif !important;
            color: #333 !important; /* 黑色字体，确保可读性 */
        }

        /* 增加标题的样式 */
        h1, h2, h3 {
            color: #005d89;
        }

        /* 侧边栏样式 */
        #sidebar {
            background-color: #005d89;
            color: #fff;
        }

        /* 提高代码区域的可读性，改为黑色文字 */
        pre, code {
            background-color: #2d2d2d;
            color: #ffffff; /* 代码区改为白色文字 */
            border-radius: 5px;
            padding: 10px;
        }

        /* 按钮的美化 */
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

    // 2. 插件设置菜单
    const settingsMenu = document.createElement('div');
    settingsMenu.style.position = 'fixed';
    settingsMenu.style.top = '10px';
    settingsMenu.style.right = '10px';
    settingsMenu.style.padding = '10px';
    settingsMenu.style.backgroundColor = '#ffffff';
    settingsMenu.style.border = '1px solid #ccc';
    settingsMenu.style.borderRadius = '5px';
    settingsMenu.style.zIndex = '9999';
    settingsMenu.style.display = 'none'; // 初始状态为隐藏

    settingsMenu.innerHTML = `
        <h3>Better Luogu Settings</h3>
        <label for="refreshInterval">页面刷新间隔（秒）：</label>
        <input type="number" id="refreshInterval" value="0" min="0" max="600" step="10"> <!-- 允许设置为0表示不刷新 -->
        <button id="saveSettings" class="btn">保存设置</button>
    `;

    // 关闭按钮（×）
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('close-btn');
    settingsMenu.appendChild(closeButton);

    document.body.appendChild(settingsMenu);

    // 点击保存按钮保存设置
    document.getElementById('saveSettings').addEventListener('click', function() {
        const newInterval = document.getElementById('refreshInterval').value * 1000;
        GM_setValue('refreshInterval', newInterval);
        alert('设置已保存！页面将每 ' + newInterval / 1000 + ' 秒自动刷新。');
    });

    // 点击关闭按钮隐藏设置面板
    closeButton.addEventListener('click', function() {
        settingsMenu.style.display = 'none';
    });

    // 3. 添加按钮来控制设置面板的显示与隐藏
    const toggleButton = document.createElement('button');
    toggleButton.textContent = '设置';
    toggleButton.style.position = 'fixed';
    toggleButton.style.top = '10px';
    toggleButton.style.right = '10px';
    toggleButton.classList.add('btn');
    document.body.appendChild(toggleButton);

    // 切换设置面板的显示/隐藏
    toggleButton.addEventListener('click', function() {
        if (settingsMenu.style.display === 'none') {
            settingsMenu.style.display = 'block';
        } else {
            settingsMenu.style.display = 'none';
        }
    });
})();
