// ==UserScript==
// @name         so-net 遊戲ID自動輸入 for 公主連結
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  so-net 遊戲ID自動輸入 for 公主連結
// @author       ThanatosDi , S.Dot
// @match        http://www.svp.so-net.tw/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
   document.querySelector("select#game_no").value = "SON009"
   document.querySelector("input#user_id").value="(你的公主連結帳號ID)"
   document.querySelector("input#user_id").focus();
   document.querySelector("input#vp_no").focus();
})();