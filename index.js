// ==UserScript==
// @name         GushiwenDelads
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  适用于古诗文网，tampermonkey的去广告脚本
// @author       You
// @match        https://so.gushiwen.cn/*
// @grant        none
// @license      https://github.com/isaaxite/tampermonkey-gusiwen_delads/blob/main/LICENSE
// ==/UserScript==

import { main } from "./lib/index.js";

(function() {
  'use strict';
  main();
})();
