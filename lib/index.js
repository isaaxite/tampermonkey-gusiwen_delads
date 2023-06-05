import { modifyBtnStyle } from "./delads";
import { checkIsGuwenBookPage, checkIsPrompt, checkIsRightAds, checkIsRightBottomAds, checkIsTarget, loadCssCode } from "./util";
import delRightColAds from "./style/del_right_col.css";
import hidePrompt from "./style/hide_prompt.css";
import rightBottomAds from "./style/right_bottom_ads.css";
import guwenBookContStyle from "./style/guwen_book_cont.css";

export function main() {
  const styles = [];
  let callback = () => {};

  if (checkIsPrompt()) {
    styles.push(hidePrompt);
  }

  if (checkIsRightAds()) {
    styles.push(delRightColAds);
    callback = modifyBtnStyle;
  }

  if (checkIsRightBottomAds()) {
    styles.push(rightBottomAds);
  }

  if (checkIsGuwenBookPage()) {
    styles.push(guwenBookContStyle);
  }

  if (!styles.length) {
    return;
  }

  console.info('Hello GushiwenDelads!');

  loadCssCode(styles.join(''));
  window.onload = function() {
    callback();
  };
};
