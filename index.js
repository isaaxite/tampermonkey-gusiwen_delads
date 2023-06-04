// ==UserScript==
// @name         GushiwenDelads
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://so.gushiwen.cn/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  window.__GushiwenDelads__ = {
    Element: {}
  };
  const getRightAds = () => document.querySelector(".main3 .right");
  const getLeftContent = () => document.querySelector(".main3 .left");
  const getControls = () => document.querySelector("#routerView > div.readerControls.readerControls");
  const getCatalog = () => document.querySelector("#routerView > div:nth-child(5) > div.readerCatalog");
  const getNotePanel = () => document.querySelector("#routerView > div:nth-child(6) > div.readerNotePanel");
  const setStyle = (ele, obj) => {
    const STYLE = 'style';
    const styleArr = [];
    const arr = Object.entries(obj);

    for (const [key, val] of arr) {
      styleArr.push(`${key}:${val};`);
    }

    // window.__GushiwenDelads__.Element.readerControls = ele;
    let styleStr = ele.getAttribute(STYLE);
    styleStr += styleArr.join('');
    ele.setAttribute(STYLE, styleStr);
  };
  const loadCssCode = (code) => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.rel = 'stylesheet';
    try {
      //for Chrome Firefox Opera Safari
      style.appendChild(document.createTextNode(code));
    } catch (ex) {
      //for IE
      style.styleSheet.cssText = code;
    }
    const head = document.getElementsByTagName('head')[0];
    head.appendChild(style);
  }

  function delAlert() {
    loadCssCode([
      `#threeWeixin2 {
        z-index: -100
      }`,
      `.main3 .right .abcd div {
        width: 0 !important;
        height: 0 !important;
        overflow: hidden;
      }`
    ].join(''));
  }

  function defAds() {
    loadCssCode([
      `#threeWeixin2 {
        z-index: -100
      }`,
      `.main3 .left {
        width: 100%;
        clear: left;
        float: left;
      }`,
      `.main3 .right, .main3 .right div {
        width: 0 !important;
        height: 0 !important;
        overflow: hidden;
      }`,
      `#btmwx {
        width: 0 !important;
        height: 0 !important;
      }`
    ].join(''));

    const moreBtnArr = Array.from(getLeftContent().querySelectorAll('.contyishang a')).filter(it => it.innerText.includes('展开'));
    for (const it of moreBtnArr) {
      setStyle(it, {
        width: '100%'
      });
    }
  }


  function main() {
    console.info('Hello GushiwenDelads!');

    const isTarget = [
      'shiwenv_',
      'authorv_'
    ].some(str => location.pathname.includes(str));

    if (isTarget) {
      return defAds();
    }

    delAlert();
  }

  window.onload = function() {
    main();
    // setTimeout(() => main(), 2 * 1000);
  };
})();
