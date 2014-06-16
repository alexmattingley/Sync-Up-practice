/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 0.6.11
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(t){"use strict";var e,n=this;if(this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=10,this.layer=t,!t||!t.nodeType)throw new TypeError("Layer must be a document node");this.onClick=function(){return FastClick.prototype.onClick.apply(n,arguments)},this.onMouse=function(){return FastClick.prototype.onMouse.apply(n,arguments)},this.onTouchStart=function(){return FastClick.prototype.onTouchStart.apply(n,arguments)},this.onTouchMove=function(){return FastClick.prototype.onTouchMove.apply(n,arguments)},this.onTouchEnd=function(){return FastClick.prototype.onTouchEnd.apply(n,arguments)},this.onTouchCancel=function(){return FastClick.prototype.onTouchCancel.apply(n,arguments)},FastClick.notNeeded(t)||(this.deviceIsAndroid&&(t.addEventListener("mouseover",this.onMouse,!0),t.addEventListener("mousedown",this.onMouse,!0),t.addEventListener("mouseup",this.onMouse,!0)),t.addEventListener("click",this.onClick,!0),t.addEventListener("touchstart",this.onTouchStart,!1),t.addEventListener("touchmove",this.onTouchMove,!1),t.addEventListener("touchend",this.onTouchEnd,!1),t.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(t.removeEventListener=function(e,n,i){var o=Node.prototype.removeEventListener;"click"===e?o.call(t,e,n.hijacked||n,i):o.call(t,e,n,i)},t.addEventListener=function(e,n,i){var o=Node.prototype.addEventListener;"click"===e?o.call(t,e,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),i):o.call(t,e,n,i)}),"function"==typeof t.onclick&&(e=t.onclick,t.addEventListener("click",function(t){e(t)},!1),t.onclick=null))}window.Modernizr=function(t,e,n){function i(t){m.cssText=t}function o(t,e){return i(prefixes.join(t+";")+(e||""))}function r(t,e){return typeof t===e}function a(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var i in t){var o=t[i];if(!a(o,"-")&&m[o]!==n)return"pfx"==e?o:!0}return!1}function c(t,e,i){for(var o in t){var a=e[t[o]];if(a!==n)return i===!1?t[o]:r(a,"function")?a.bind(i||e):a}return!1}function l(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+C.join(i+" ")+i).split(" ");return r(e,"string")||r(e,"undefined")?s(o,e):(o=(t+" "+E.join(i+" ")+i).split(" "),c(o,e,n))}var u="2.7.1",h={},f=!0,d=e.documentElement,p="modernizr",v=e.createElement(p),m=v.style,g,y={}.toString,k="Webkit Moz O ms",C=k.split(" "),E=k.toLowerCase().split(" "),w={},b={},S={},T=[],A=T.slice,x,_={}.hasOwnProperty,I;I=r(_,"undefined")||r(_.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return _.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=A.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,a=e.apply(r,n.concat(A.call(arguments)));return Object(a)===a?a:r}return e.apply(t,n.concat(A.call(arguments)))};return i}),w.csstransitions=function(){return l("transition")};for(var M in w)I(w,M)&&(x=M.toLowerCase(),h[x]=w[M](),T.push((h[x]?"":"no-")+x));return h.addTest=function(t,e){if("object"==typeof t)for(var i in t)I(t,i)&&h.addTest(i,t[i]);else{if(t=t.toLowerCase(),h[t]!==n)return h;e="function"==typeof e?e():e,"undefined"!=typeof f&&f&&(d.className+=" "+(e?"":"no-")+t),h[t]=e}return h},i(""),v=g=null,function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=m[t[p]];return e||(e={},v++,t[p]=v,m[v]=e),e}function r(t,n,i){if(n||(n=e),g)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():f.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!r.canHaveChildren||h.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function a(t,n){if(t||(t=e),g)return t.createDocumentFragment();n=n||o(t);for(var r=n.frag.cloneNode(),a=0,s=i(),c=s.length;c>a;a++)r.createElement(s[a]);return r}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return y.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function c(t){t||(t=e);var i=o(t);return y.shivCSS&&!d&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),g||s(t,i),t}var l="3.7.0",u=t.html5||{},h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,d,p="_html5shiv",v=0,m={},g;!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",d="hidden"in t,g=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(n){d=!0,g=!0}}();var y={elements:u.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:u.shivCSS!==!1,supportsUnknownElements:g,shivMethods:u.shivMethods!==!1,type:"default",shivDocument:c,createElement:r,createDocumentFragment:a};t.html5=y,c(e)}(this,e),h._version=u,h._domPrefixes=E,h._cssomPrefixes=C,h.testProp=function(t){return s([t])},h.testAllProps=l,h.prefixed=function(t,e,n){return e?l(t,e,n):l(t,"pfx")},d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+T.join(" "):""),h}(this,this.document),function(t,e,n){function i(t){return"[object Function]"==p.call(t)}function o(t){return"string"==typeof t}function r(){}function a(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=v.shift();m=1,t?t.t?f(function(){("c"==t.t?x.injectCss:x.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):m=0}function c(t,n,i,o,r,c,l){function u(e){if(!p&&a(h.readyState)&&(C.r=p=1,!m&&s(),h.onload=h.onreadystatechange=null,e)){"img"!=t&&f(function(){k.removeChild(h)},50);for(var i in S[n])S[n].hasOwnProperty(i)&&S[n][i].onload()}}var l=l||x.errorTimeout,h=e.createElement(t),p=0,g=0,C={t:i,s:n,e:r,a:c,x:l};1===S[n]&&(g=1,S[n]=[]),"object"==t?h.data=n:(h.src=n,h.type=t),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,C),"img"!=t&&(g||2===S[n]?(k.insertBefore(h,y?null:d),f(u,l)):S[n].push(h))}function l(t,e,n,i,r){return m=0,e=e||"j",o(t)?c("c"==e?E:C,t,e,this.i++,n,i,r):(v.splice(this.i++,0,t),1==v.length&&s()),this}function u(){var t=x;return t.loader={load:l,i:0},t}var h=e.documentElement,f=t.setTimeout,d=e.getElementsByTagName("script")[0],p={}.toString,v=[],m=0,g="MozAppearance"in h.style,y=g&&!!e.createRange().compareNode,k=y?h:d.parentNode,h=t.opera&&"[object Opera]"==p.call(t.opera),h=!!e.attachEvent&&!h,C=g?"object":h?"script":"img",E=h?"script":C,w=Array.isArray||function(t){return"[object Array]"==p.call(t)},b=[],S={},T={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}},A,x;x=function(t){function e(t){var t=t.split("!"),e=b.length,n=t.pop(),i=t.length,n={url:n,origUrl:n,prefixes:t},o,r,a;for(r=0;i>r;r++)a=t[r].split("="),(o=T[a.shift()])&&(n=o(n,a));for(r=0;e>r;r++)n=b[r](n);return n}function a(t,o,r,a,s){var c=e(t),l=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(o&&(o=i(o)?o:o[t]||o[a]||o[t.split("/").pop().split("?")[0]]),c.instead?c.instead(t,o,r,a,s):(S[c.url]?c.noexec=!0:S[c.url]=1,r.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(i(o)||i(l))&&r.load(function(){u(),o&&o(c.origUrl,s,a),l&&l(c.origUrl,s,a),S[c.url]=2})))}function s(t,e){function n(t,n){if(t){if(o(t))n||(l=function(){var t=[].slice.call(arguments);u.apply(this,t),h()}),a(t,l,e,0,s);else if(Object(t)===t)for(d in f=function(){var e=0,n;for(n in t)t.hasOwnProperty(n)&&e++;return e}(),t)t.hasOwnProperty(d)&&(!n&&!--f&&(i(l)?l=function(){var t=[].slice.call(arguments);u.apply(this,t),h()}:l[d]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),h()}}(u[d])),a(t[d],l,e,d,s))}else!n&&h()}var s=!!t.test,c=t.load||t.both,l=t.callback||r,u=l,h=t.complete||r,f,d;n(s?t.yep:t.nope,!!c),c&&n(c)}var c,l,h=this.yepnope.loader;if(o(t))a(t,0,h,0);else if(w(t))for(c=0;c<t.length;c++)l=t[c],o(l)?a(l,0,h,0):w(l)?x(l):Object(l)===l&&s(l,h);else Object(t)===t&&s(t,h)},x.addPrefix=function(t,e){T[t]=e},x.addFilter=function(t){b.push(t)},x.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",A=function(){e.removeEventListener("DOMContentLoaded",A,0),e.readyState="complete"},0)),t.yepnope=u(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,n,i,o,c,l){var u=e.createElement("script"),h,p,o=o||x.errorTimeout;u.src=t;for(p in i)u.setAttribute(p,i[p]);n=l?s:n||r,u.onreadystatechange=u.onload=function(){!h&&a(u.readyState)&&(h=1,n(),u.onload=u.onreadystatechange=null)},f(function(){h||(h=1,n(1))},o),c?u.onload():d.parentNode.insertBefore(u,d)},t.yepnope.injectCss=function(t,n,i,o,a,c){var o=e.createElement("link"),l,n=c?s:n||r;o.href=t,o.rel="stylesheet",o.type="text/css";for(l in i)o.setAttribute(l,i[l]);a||(d.parentNode.insertBefore(o,d),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},FastClick.prototype.deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,FastClick.prototype.deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),FastClick.prototype.deviceIsIOS4=FastClick.prototype.deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),FastClick.prototype.deviceIsIOSWithBadTarget=FastClick.prototype.deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),FastClick.prototype.needsClick=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(this.deviceIsIOS&&"file"===t.type||t.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(t.className)},FastClick.prototype.needsFocus=function(t){"use strict";switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!this.deviceIsAndroid;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},FastClick.prototype.sendClick=function(t,e){"use strict";var n,i;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),i=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},FastClick.prototype.determineEventType=function(t){"use strict";return this.deviceIsAndroid&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(t){"use strict";var e;this.deviceIsIOS&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},FastClick.prototype.updateScrollParent=function(t){"use strict";var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(t){"use strict";return t.nodeType===Node.TEXT_NODE?t.parentNode:t},FastClick.prototype.onTouchStart=function(t){"use strict";var e,n,i;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],this.deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!this.deviceIsIOS4){if(n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<200&&t.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(t){"use strict";var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},FastClick.prototype.onTouchMove=function(t){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(t){"use strict";return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(t){"use strict";var e,n,i,o,r,a=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<200)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,this.deviceIsIOSWithBadTarget&&(r=t.changedTouches[0],a=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||a,a.fastClickScrollParent=this.targetElement.fastClickScrollParent),i=a.tagName.toLowerCase(),"label"===i){if(e=this.findControl(a)){if(this.focus(a),this.deviceIsAndroid)return!1;a=e}}else if(this.needsFocus(a))return t.timeStamp-n>100||this.deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(a),this.deviceIsIOS4&&"select"===i||(this.targetElement=null,t.preventDefault()),!1);return this.deviceIsIOS&&!this.deviceIsIOS4&&(o=a.fastClickScrollParent,o&&o.fastClickLastScrollTop!==o.scrollTop)?!0:(this.needsClick(a)||(t.preventDefault(),this.sendClick(a,t)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(t){"use strict";return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(t){"use strict";var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},FastClick.prototype.destroy=function(){"use strict";var t=this.layer;this.deviceIsAndroid&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(t){"use strict";var e,n;if("undefined"==typeof window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!FastClick.prototype.deviceIsAndroid)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(n>31&&window.innerWidth<=window.screen.width)return!0}}return"none"===t.style.msTouchAction?!0:!1},FastClick.attach=function(t){"use strict";return new FastClick(t)},"undefined"!=typeof define&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,!function(){function t(){}function e(t){return r.retinaImageSuffix+t}function n(t,n){if(this.path=t||"","undefined"!=typeof n&&null!==n)this.at_2x_path=n,this.perform_check=!1;else{if(void 0!==document.createElement){var i=document.createElement("a");i.href=this.path,i.pathname=i.pathname.replace(a,e),this.at_2x_path=i.href}else{var o=this.path.split("?");o[0]=o[0].replace(a,e),this.at_2x_path=o.join("?")}this.perform_check=!0}}function i(t){this.el=t,this.path=new n(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var e=this;this.path.check_2x_variant(function(t){t&&e.swap()})}var o="undefined"==typeof exports?window:exports,r={retinaImageSuffix:"@2x",check_mime_type:!0,force_original_dimensions:!0};o.Retina=t,t.configure=function(t){null===t&&(t={});for(var e in t)t.hasOwnProperty(e)&&(r[e]=t[e])},t.init=function(t){null===t&&(t=o);var e=t.onload||function(){};t.onload=function(){var t,n,o=document.getElementsByTagName("img"),r=[];for(t=0;t<o.length;t+=1)n=o[t],n.getAttributeNode("data-no-retina")||r.push(new i(n));e()}},t.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5), (min--moz-device-pixel-ratio: 1.5), (-o-min-device-pixel-ratio: 3/2), (min-resolution: 1.5dppx)";return o.devicePixelRatio>1?!0:o.matchMedia&&o.matchMedia(t).matches?!0:!1};var a=/\.\w+$/;o.RetinaImagePath=n,n.confirmed_paths=[],n.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},n.prototype.check_2x_variant=function(t){var e,i=this;return this.is_external()?t(!1):this.perform_check||"undefined"==typeof this.at_2x_path||null===this.at_2x_path?this.at_2x_path in n.confirmed_paths?t(!0):(e=new XMLHttpRequest,e.open("HEAD",this.at_2x_path),e.onreadystatechange=function(){if(4!==e.readyState)return t(!1);if(e.status>=200&&e.status<=399){if(r.check_mime_type){var o=e.getResponseHeader("Content-Type");if(null===o||!o.match(/^image/i))return t(!1)}return n.confirmed_paths.push(i.at_2x_path),t(!0)}return t(!1)},void e.send()):t(!0)},o.RetinaImage=i,i.prototype.swap=function(t){function e(){n.el.complete?(r.force_original_dimensions&&(n.el.setAttribute("width",n.el.offsetWidth),n.el.setAttribute("height",n.el.offsetHeight)),n.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var n=this;e()},t.isRetina()&&t.init(o)}(),function(t,e,n,i){function o(e,n){this.element=e,this.$elem=t(this.element),this.options=t.extend({},a,n),this._defaults=a,this._name=r,this.link=e.selector?e.selector:"[data-scroll-to]",this.$link=t(this.link),this.init(),this.scrollSpy(),this.autoBuild()}var r="simpleAnchors",a={duration:800,easing:"swing",activeClass:"active",offset:0,autoBuild:!1,sections:"h2",sectionEl:"section",wrapper:'article[role="article"]'};o.prototype={init:function(){var e=this.options.activeClass,n=this.options.offset;t("body").attr("data-scroll-target","top"),t("body").on("click",this.link,{myOptions:this.options},function(e){e.preventDefault();var i=t(this),o=i.data("scroll-to"),r=t("[data-scroll-target="+o+"]"),a=i.data("scroll-offset")?i.data("scroll-offset"):n,s=e.data.myOptions,c=s.duration,l=s.easing;r&&r.offset()&&(/(iPhone|iPod)\sOS\s6/.test(navigator.userAgent)?t("html, body").animate({scrollTop:r.offset().top},c,l):t("html, body").animate({scrollTop:r.offset().top-a},c,l))})},scrollSpy:function(n,i){var o=this.options.activeClass,r=this.$link,a=this.options.offset;t("[data-scroll-target]").each(function(){var n=t(this);t(e).scroll(function(){var i=n.offset().top-a-1,s=n.attr("data-scroll-target"),c=t(e).scrollTop();c>=i&&(r.removeClass(o),"top"!=s&&t("[data-scroll-to="+s+"]").addClass(o))})})},autoBuild:function(e,n){if(this.options.autoBuild){var i=this.options.sections,o=this.options.sectionEl,r=this.options.wrapper,a=t("<ul />").prependTo(r);t(r).find(i).each(function(){var e=t("<li />").appendTo(a),n=t('<a href="javascript:;" />').attr("data-scroll-to",t(this).text()).text(t(this).text()).appendTo(e);t(this).nextUntil(i).addBack().wrapAll("<"+o+' data-scroll-target="'+t(this).text()+'" />')})}}},t.fn[r]=function(e){t.data(this,"plugin_"+r)||t.data(this,"plugin_"+r,new o(this,e))},t[r]=function(n){var i=t(e);return i.simpleAnchors.apply(i,Array.prototype.slice.call(arguments,0))}}(jQuery,window,document),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,n,i,o){return jQuery.easing[jQuery.easing.def](t,e,n,i,o)},easeInQuad:function(t,e,n,i,o){return i*(e/=o)*e+n},easeOutQuad:function(t,e,n,i,o){return-i*(e/=o)*(e-2)+n},easeInOutQuad:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e+n:-i/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,i,o){return i*(e/=o)*e*e+n},easeOutCubic:function(t,e,n,i,o){return i*((e=e/o-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e+n:i/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,i,o){return i*(e/=o)*e*e*e+n},easeOutQuart:function(t,e,n,i,o){return-i*((e=e/o-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e+n:-i/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,i,o){return i*(e/=o)*e*e*e*e+n},easeOutQuint:function(t,e,n,i,o){return i*((e=e/o-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,i,o){return(e/=o/2)<1?i/2*e*e*e*e*e+n:i/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,i,o){return-i*Math.cos(e/o*(Math.PI/2))+i+n},easeOutSine:function(t,e,n,i,o){return i*Math.sin(e/o*(Math.PI/2))+n},easeInOutSine:function(t,e,n,i,o){return-i/2*(Math.cos(Math.PI*e/o)-1)+n},easeInExpo:function(t,e,n,i,o){return 0==e?n:i*Math.pow(2,10*(e/o-1))+n},easeOutExpo:function(t,e,n,i,o){return e==o?n+i:i*(-Math.pow(2,-10*e/o)+1)+n},easeInOutExpo:function(t,e,n,i,o){return 0==e?n:e==o?n+i:(e/=o/2)<1?i/2*Math.pow(2,10*(e-1))+n:i/2*(-Math.pow(2,-10*--e)+2)+n},easeInCirc:function(t,e,n,i,o){return-i*(Math.sqrt(1-(e/=o)*e)-1)+n},easeOutCirc:function(t,e,n,i,o){return i*Math.sqrt(1-(e=e/o-1)*e)+n},easeInOutCirc:function(t,e,n,i,o){return(e/=o/2)<1?-i/2*(Math.sqrt(1-e*e)-1)+n:i/2*(Math.sqrt(1-(e-=2)*e)+1)+n},easeInElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a))+n},easeOutElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(1==(e/=o))return n+i;if(a||(a=.3*o),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*e)*Math.sin(2*(e*o-r)*Math.PI/a)+i+n},easeInOutElastic:function(t,e,n,i,o){var r=1.70158,a=0,s=i;if(0==e)return n;if(2==(e/=o/2))return n+i;if(a||(a=.3*o*1.5),s<Math.abs(i)){s=i;var r=a/4}else var r=a/(2*Math.PI)*Math.asin(i/s);return 1>e?-.5*s*Math.pow(2,10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a)+n:s*Math.pow(2,-10*(e-=1))*Math.sin(2*(e*o-r)*Math.PI/a)*.5+i+n},easeInBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),i*(e/=o)*e*((r+1)*e-r)+n},easeOutBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),i*((e=e/o-1)*e*((r+1)*e+r)+1)+n},easeInOutBack:function(t,e,n,i,o,r){return void 0==r&&(r=1.70158),(e/=o/2)<1?i/2*e*e*(((r*=1.525)+1)*e-r)+n:i/2*((e-=2)*e*(((r*=1.525)+1)*e+r)+2)+n},easeInBounce:function(t,e,n,i,o){return i-jQuery.easing.easeOutBounce(t,o-e,0,i,o)+n},easeOutBounce:function(t,e,n,i,o){return(e/=o)<1/2.75?7.5625*i*e*e+n:2/2.75>e?i*(7.5625*(e-=1.5/2.75)*e+.75)+n:2.5/2.75>e?i*(7.5625*(e-=2.25/2.75)*e+.9375)+n:i*(7.5625*(e-=2.625/2.75)*e+.984375)+n},easeInOutBounce:function(t,e,n,i,o){return o/2>e?.5*jQuery.easing.easeInBounce(t,2*e,0,i,o)+n:.5*jQuery.easing.easeOutBounce(t,2*e-o,0,i,o)+.5*i+n}}),!function(t,e,n,i){var o=t(e);t.fn.lazyload=function(r){function a(){var e=0;c.each(function(){var n=t(this);if(!l.skip_invisible||n.is(":visible"))if(t.abovethetop(this,l)||t.leftofbegin(this,l));else if(t.belowthefold(this,l)||t.rightoffold(this,l)){if(++e>l.failure_limit)return!1}else n.trigger("appear"),e=0})}var s,c=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(i!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),i!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),t.extend(l,r)),s=l.container===i||l.container===e?o:t(l.container),0===l.event.indexOf("scroll")&&s.bind(l.event,function(){return a()}),this.each(function(){var e=this,n=t(e);e.loaded=!1,(n.attr("src")===i||n.attr("src")===!1)&&n.is("img")&&n.attr("src",l.placeholder),n.one("appear",function(){if(!this.loaded){if(l.appear){var i=c.length;l.appear.call(e,i,l)}t("<img />").bind("load",function(){var i=n.attr("data-"+l.data_attribute);n.hide(),n.is("img")?n.attr("src",i):n.css("background-image","url('"+i+"')"),n[l.effect](l.effect_speed),e.loaded=!0;var o=t.grep(c,function(t){return!t.loaded});if(c=t(o),l.load){var r=c.length;l.load.call(e,r,l)}}).attr("src",n.attr("data-"+l.data_attribute))}}),0!==l.event.indexOf("scroll")&&n.bind(l.event,function(){e.loaded||n.trigger("appear")})}),o.bind("resize",function(){a()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&o.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&c.each(function(){t(this).trigger("appear")})}),t(n).ready(function(){a()}),this},t.belowthefold=function(n,r){var a;return a=r.container===i||r.container===e?(e.innerHeight?e.innerHeight:o.height())+o.scrollTop():t(r.container).offset().top+t(r.container).height(),a<=t(n).offset().top-r.threshold},t.rightoffold=function(n,r){var a;return a=r.container===i||r.container===e?o.width()+o.scrollLeft():t(r.container).offset().left+t(r.container).width(),a<=t(n).offset().left-r.threshold},t.abovethetop=function(n,r){var a;return a=r.container===i||r.container===e?o.scrollTop():t(r.container).offset().top,a>=t(n).offset().top+r.threshold+t(n).height()},t.leftofbegin=function(n,r){var a;return a=r.container===i||r.container===e?o.scrollLeft():t(r.container).offset().left,a>=t(n).offset().left+r.threshold+t(n).width()},t.inviewport=function(e,n){return!(t.rightoffold(e,n)||t.leftofbegin(e,n)||t.belowthefold(e,n)||t.abovethetop(e,n))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document),!function(t,e,n){"use strict";var i=function(i,o){var r=!!e.getComputedStyle;r||(e.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var n=/(\-([a-z]){1})/g;return"float"===e&&(e="styleFloat"),n.test(e)&&(e=e.replace(n,function(){return arguments[2].toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this});var a,s,c,l,u,h,f=function(t,e,n,i){if("addEventListener"in t)try{t.addEventListener(e,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;t.addEventListener(e,function(t){n.handleEvent.call(n,t)},i)}else"attachEvent"in t&&("object"==typeof n&&n.handleEvent?t.attachEvent("on"+e,function(){n.handleEvent.call(n)}):t.attachEvent("on"+e,n))},d=function(t,e,n,i){if("removeEventListener"in t)try{t.removeEventListener(e,n,i)}catch(o){if("object"!=typeof n||!n.handleEvent)throw o;t.removeEventListener(e,function(t){n.handleEvent.call(n,t)},i)}else"detachEvent"in t&&("object"==typeof n&&n.handleEvent?t.detachEvent("on"+e,function(){n.handleEvent.call(n)}):t.detachEvent("on"+e,n))},p=function(t){if(t.children.length<1)throw new Error("The Nav container has no containing elements");for(var e=[],n=0;n<t.children.length;n++)1===t.children[n].nodeType&&e.push(t.children[n]);return e},v=function(t,e){for(var n in e)t.setAttribute(n,e[n])},m=function(t,e){0!==t.className.indexOf(e)&&(t.className+=" "+e,t.className=t.className.replace(/(^\s*)|(\s*$)/g,""))},g=function(t,e){var n=new RegExp("(\\s|^)"+e+"(\\s|$)");t.className=t.className.replace(n," ").replace(/(^\s*)|(\s*$)/g,"")},y=function(t,e,n){for(var i=0;i<t.length;i++)e.call(n,i,t[i])},k=t.createElement("style"),C=t.documentElement,E=function(e,n){var i;this.options={animate:!0,transition:284,label:"Menu",insert:"before",customToggle:"",closeOnNavClick:!1,openPos:"relative",navClass:"nav-collapse",navActiveClass:"js-nav-active",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(i in n)this.options[i]=n[i];if(m(C,this.options.jsClass),this.wrapperEl=e.replace("#",""),t.getElementById(this.wrapperEl))this.wrapper=t.getElementById(this.wrapperEl);else{if(!t.querySelector(this.wrapperEl))throw new Error("The nav element you are trying to select doesn't exist");this.wrapper=t.querySelector(this.wrapperEl)}this.wrapper.inner=p(this.wrapper),s=this.options,a=this.wrapper,this._init(this)};return E.prototype={destroy:function(){this._removeStyles(),g(a,"closed"),g(a,"opened"),g(a,s.navClass),g(a,s.navClass+"-"+this.index),g(C,s.navActiveClass),a.removeAttribute("style"),a.removeAttribute("aria-hidden"),d(e,"resize",this,!1),d(t.body,"touchmove",this,!1),d(c,"touchstart",this,!1),d(c,"touchend",this,!1),d(c,"mouseup",this,!1),d(c,"keyup",this,!1),d(c,"click",this,!1),s.customToggle?c.removeAttribute("aria-hidden"):c.parentNode.removeChild(c)},toggle:function(){l===!0&&(h?this.close():this.open())},open:function(){h||(g(a,"closed"),m(a,"opened"),m(C,s.navActiveClass),m(c,"active"),a.style.position=s.openPos,v(a,{"aria-hidden":"false"}),h=!0,s.open())},close:function(){h&&(m(a,"closed"),g(a,"opened"),g(C,s.navActiveClass),g(c,"active"),v(a,{"aria-hidden":"true"}),s.animate?(l=!1,setTimeout(function(){a.style.position="absolute",l=!0},s.transition+10)):a.style.position="absolute",h=!1,s.close())},resize:function(){"none"!==e.getComputedStyle(c,null).getPropertyValue("display")?(u=!0,v(c,{"aria-hidden":"false"}),a.className.match(/(^|\s)closed(\s|$)/)&&(v(a,{"aria-hidden":"true"}),a.style.position="absolute"),this._createStyles(),this._calcHeight()):(u=!1,v(c,{"aria-hidden":"true"}),v(a,{"aria-hidden":"false"}),a.style.position=s.openPos,this._removeStyles())},handleEvent:function(t){var n=t||e.event;switch(n.type){case"touchstart":this._onTouchStart(n);break;case"touchmove":this._onTouchMove(n);break;case"touchend":case"mouseup":this._onTouchEnd(n);break;case"click":this._preventDefault(n);break;case"keyup":this._onKeyUp(n);break;case"resize":this.resize(n)}},_init:function(){this.index=n++,m(a,s.navClass),m(a,s.navClass+"-"+this.index),m(a,"closed"),l=!0,h=!1,this._closeOnNavClick(),this._createToggle(),this._transitions(),this.resize();var i=this;setTimeout(function(){i.resize()},20),f(e,"resize",this,!1),f(t.body,"touchmove",this,!1),f(c,"touchstart",this,!1),f(c,"touchend",this,!1),f(c,"mouseup",this,!1),f(c,"keyup",this,!1),f(c,"click",this,!1),s.init()},_createStyles:function(){k.parentNode||(k.type="text/css",t.getElementsByTagName("head")[0].appendChild(k))},_removeStyles:function(){k.parentNode&&k.parentNode.removeChild(k)},_createToggle:function(){if(s.customToggle){var e=s.customToggle.replace("#","");if(t.getElementById(e))c=t.getElementById(e);else{if(!t.querySelector(e))throw new Error("The custom nav toggle you are trying to select doesn't exist");c=t.querySelector(e)}}else{var n=t.createElement("a");
n.innerHTML=s.label,v(n,{href:"#","class":"nav-toggle"}),"after"===s.insert?a.parentNode.insertBefore(n,a.nextSibling):a.parentNode.insertBefore(n,a),c=n}},_closeOnNavClick:function(){if(s.closeOnNavClick&&"querySelectorAll"in t){var e=a.querySelectorAll("a"),n=this;y(e,function(t){f(e[t],"click",function(){u&&n.toggle()},!1)})}},_preventDefault:function(t){t.preventDefault?(t.preventDefault(),t.stopPropagation()):t.returnValue=!1},_onTouchStart:function(e){e.stopPropagation(),"after"===s.insert&&m(t.body,"disable-pointer-events"),this.startX=e.touches[0].clientX,this.startY=e.touches[0].clientY,this.touchHasMoved=!1,d(c,"mouseup",this,!1)},_onTouchMove:function(t){(Math.abs(t.touches[0].clientX-this.startX)>10||Math.abs(t.touches[0].clientY-this.startY)>10)&&(this.touchHasMoved=!0)},_onTouchEnd:function(n){if(this._preventDefault(n),!this.touchHasMoved){if("touchend"===n.type)return this.toggle(),void("after"===s.insert&&setTimeout(function(){g(t.body,"disable-pointer-events")},s.transition+300));var i=n||e.event;3!==i.which&&2!==i.button&&this.toggle()}},_onKeyUp:function(t){var n=t||e.event;13===n.keyCode&&this.toggle()},_transitions:function(){if(s.animate){var t=a.style,e="max-height "+s.transition+"ms";t.WebkitTransition=e,t.MozTransition=e,t.OTransition=e,t.transition=e}},_calcHeight:function(){for(var t=0,e=0;e<a.inner.length;e++)t+=a.inner[e].offsetHeight;var n="."+s.jsClass+" ."+s.navClass+"-"+this.index+".opened{max-height:"+t+"px !important}";k.styleSheet?k.styleSheet.cssText=n:k.innerHTML=n,n=""}},new E(i,o)};e.responsiveNav=i}(document,window,0),function(t){"use strict";window.syncUp={};var e=window.syncUp,n=t(window);e.init=function(){e.setElements(),e.basics(),e.vertAlign()},e.setElements=function(){e.elems={}},e.basics=function(){t("img.lazy").lazyload({threshold:200,effect:"fadeIn"}),t(function(){window.FastClick.attach(document.body)}),t.simpleAnchors({offset:79,easing:"easeInOutCubic"});var e=responsiveNav(".nav-collapse")},e.vertAlign=function(){var e=function(){t(".valign").each(function(){var e=t(this).parent().height();t(this).parent().height(e)})};e()},t(document).ready(function(){e.init()})}(window.jQuery);
//# sourceMappingURL=./app-ck.map