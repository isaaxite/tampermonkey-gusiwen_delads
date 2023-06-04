import { modifyBtnStyle } from "./delads";
import { checkIsTarget, loadCssCode } from "./util";
// import "./style.css"
// import styles from "./style.css"; /* import the styles as a string */
import styles from "./style.css";


export function main() {
  if (!checkIsTarget()) {
    return;
  }

  console.info('Hello GushiwenDelads!');
  loadCssCode(styles)

  window.onload = function() {
    modifyBtnStyle();
  };
};
