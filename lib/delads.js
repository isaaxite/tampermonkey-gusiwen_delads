import { setStyle } from "./util";

const BTN_TEXT = '展开';
const getLeftContent = () => document.querySelector(".main3 .left");

export function modifyBtnStyle() {
  const moreBtnArr = Array.from(getLeftContent().querySelectorAll('.contyishang a')).filter(it => it.innerText.includes(BTN_TEXT));
  for (const it of moreBtnArr) {
    setStyle(it, {
      width: '100%'
    });
  }
}

export function getCssOfDelCommonAds() {
  return [
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
  ].join('');
}
