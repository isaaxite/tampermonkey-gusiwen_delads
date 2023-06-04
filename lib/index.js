import { modifyBtnStyle } from "./delads";
import { checkIsTarget } from "./util";
import "./style.css"

export function main() {
  if (!checkIsTarget()) {
    return;
  }

  console.info('Hello GushiwenDelads!');

  window.onload = function() {
    modifyBtnStyle();
  };
};
