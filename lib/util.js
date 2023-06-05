const RIGHT_BOTTOM_ADS_SITES = [

];

const RIGHT_ADS_STES = [

];

export function loadCssCode(code) {
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

export function setStyle(ele, obj) {
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
}

export function checkIsTarget() {
  const isTarget = [
    'shiwenv_',
    'authorv_'
  ].some(str => location.pathname.includes(str));

  return isTarget;
}

export function checkIsGuwenBookPage() {
  return ['/guwen/book_'].some(str => location.pathname.includes(str));
}

export function checkIsPrompt() {
  return true;
}

export function checkIsRightBottomAds() {
  return true;
}

export function checkIsRightAds() {
  const isTarget = [
    '/shiwenv_',
    '/authorv_',
    '/book_'
  ].some(str => location.pathname.includes(str));

  return isTarget;
}
