import { getCssOfDelCommonAds, modifyBtnStyle } from "./delads";
import { getCssOfDelalter } from "./delalter";
import { checkIsTarget, loadCssCode } from "./util";

export function main() {
  if (!checkIsTarget()) {
    return;
  }

  console.info('Hello GushiwenDelads!');

  loadCssCode([
    getCssOfDelCommonAds(),
    getCssOfDelalter()
  ].join(''));

  window.onload = function() {
    modifyBtnStyle();
  };
};
