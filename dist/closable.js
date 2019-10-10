/**
 * svelte-closable v0.0.0
 * (c) 2019 Taha Shashtari
 * @license MIT
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).SvelteClosable=t()}(this,(function(){"use strict";return function(e,{exclude:t=[]}={}){function n(){const e=" -webkit- -moz- -o- -ms- ".split(" ");return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)||function(e){return window.matchMedia(e).matches}(["(",e.join("touch-enabled),("),"heartz",")"].join(""))}function o(n){n.target===e||e.contains(n.target)||-1!==t.indexOf(n.target)||e.dispatchEvent(new CustomEvent("outside-click"))}return n()?document.addEventListener("touchstart",o):document.addEventListener("click",o),{destroy(){n()?document.removeEventListener("touchstart",o):document.removeEventListener("click",o)}}}}));
