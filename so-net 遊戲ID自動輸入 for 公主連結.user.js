// ==UserScript==
// @name         so-net 遊戲ID自動輸入 for 公主連結
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  so-net 遊戲ID自動輸入 for 公主連結
// @author       ThanatosDi , S.Dot
// @match        http://www.svp.so-net.tw/
// @grant        none
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

function UID(game_no){
    var ID = '';
    switch(game_no){
        case 'SON010':
            /*東京偶像計畫*/
            ID = 'SON010';
            break;

        case 'SON009':
            /*超異域公主連結☆Re：Dive*/
            ID = '698094765';
            break;

        case 'SON008':
            /*神式一閃 頂上決戰*/
            ID = 'SON008';
            break;

        case 'SON004':
            /*戰鬥女子學園*/
            ID = 'SON004';
            break;

        case 'SON007':
            /*轉吧！小海女！*/
            ID = 'SON007';
            break;
    }
    document.querySelector("input#user_id").value=ID;
    document.querySelector('input#user_id').focus();
    document.querySelector('input#vp_no').focus();
}

(function() {
    'use strict';
    var UID = {};
    var SON010 = 'SON010'; //東京偶像計畫
    var SON009 = '698094765'; //超異域公主連結☆Re：Dive
    var SON008 = 'SON008'; //神式一閃 頂上決戰
    var SON004 = 'SON004'; //戰鬥女子學園
    var SON007 = 'SON007'; //轉吧！小海女！

    document.querySelector("select#game_no").value = "SON010"
    document.querySelector("input#user_id").value = SON010
    document.querySelector("input#user_id").focus();
    document.querySelector("input#vp_no").focus();
    console.log(addfunc)
   var getGame = "\
function getGame(){\
    return document.querySelector(\"select#game_no\").value;\
}"
   addfunc(UID);
   addfunc(getGame);
   addlistener();



})();

function addfunc(func){
    var script = document.createElement('script');
    var f = document.createTextNode(func)
    script.appendChild(f);
    (document.body || document.head || document.documentElement).appendChild(script);
}

function addlistener(){
    var g = (document.getElementById('game_no'))
    g.setAttribute("onchange",'UID(getGame());');
}

function getGame(){
    return document.querySelector("select#game_no").value;
}