(this["webpackJsonplive-web-code-editor"]=this["webpackJsonplive-web-code-editor"]||[]).push([[44],{65:function(e,i,t){!function(e){"use strict";e.defineMode("diff",(function(){var e={"+":"positive","-":"negative","@":"meta"};return{token:function(i){var t=i.string.search(/[\t ]+?$/);if(!i.sol()||0===t)return i.skipToEnd(),("error "+(e[i.string.charAt(0)]||"")).replace(/ $/,"");var n=e[i.peek()]||i.skipToEnd();return-1===t?i.skipToEnd():i.pos=t,n}}})),e.defineMIME("text/x-diff","diff")}(t(7))}}]);
//# sourceMappingURL=44.4b46f5b0.chunk.js.map