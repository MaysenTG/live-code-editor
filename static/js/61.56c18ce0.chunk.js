webpackJsonp([61],{112:function(t,e,n){!function(t){t(n(0))}(function(t){"use strict";t.registerHelper("wordChars","r",/[\w.]/),t.defineMode("r",function(e){function n(t){for(var e={},n=0;n<t.length;++n)e[t[n]]=!0;return e}function r(t,e){p=null;var n=t.next();if("#"==n)return t.skipToEnd(),"comment";if("0"==n&&t.eat("x"))return t.eatWhile(/[\da-f]/i),"number";if("."==n&&t.eat(/\d/))return t.match(/\d*(?:e[+\-]?\d+)?/),"number";if(/\d/.test(n))return t.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),"number";if("'"==n||'"'==n)return e.tokenize=a(n),"string";if("`"==n)return t.match(/[^`]+`/),"variable-3";if("."==n&&t.match(/.(?:[.]|\d+)/))return"keyword";if(/[a-zA-Z\.]/.test(n)){t.eatWhile(/[\w\.]/);var r=t.current();return d.propertyIsEnumerable(r)?"atom":x.propertyIsEnumerable(r)?(b.propertyIsEnumerable(r)&&!t.match(/\s*if(\s+|$)/,!1)&&(p="block"),"keyword"):m.propertyIsEnumerable(r)?"builtin":"variable"}return"%"==n?(t.skipTo("%")&&t.next(),"operator variable-2"):"<"==n&&t.eat("-")||"<"==n&&t.match("<-")||"-"==n&&t.match(/>>?/)?"operator arrow":"="==n&&e.ctx.argList?"arg-is":k.test(n)?"$"==n?"operator dollar":(t.eatWhile(k),"operator"):/[\(\){}\[\];]/.test(n)?(p=n,";"==n?"semi":null):null}function a(t){return function(e,n){if(e.eat("\\")){var a=e.next();return"x"==a?e.match(/^[a-f0-9]{2}/i):("u"==a||"U"==a)&&e.eat("{")&&e.skipTo("}")?e.next():"u"==a?e.match(/^[a-f0-9]{4}/i):"U"==a?e.match(/^[a-f0-9]{8}/i):/[0-7]/.test(a)&&e.match(/^[0-7]{1,2}/),"string-2"}for(var i;null!=(i=e.next());){if(i==t){n.tokenize=r;break}if("\\"==i){e.backUp(1);break}}return"string"}}function i(t,e,n){t.ctx={type:e,indent:t.indent,flags:0,column:n.column(),prev:t.ctx}}function o(t,e){var n=t.ctx;t.ctx={type:n.type,indent:n.indent,flags:n.flags|e,column:n.column,prev:n.prev}}function c(t){t.indent=t.ctx.indent,t.ctx=t.ctx.prev}var l=["NULL","NA","Inf","NaN","NA_integer_","NA_real_","NA_complex_","NA_character_","TRUE","FALSE"],u=["list","quote","bquote","eval","return","call","parse","deparse"],f=["if","else","repeat","while","function","for","in","next","break"],s=["if","else","repeat","while","function","for"];t.registerHelper("hintWords","r",l.concat(u,f));var p,d=n(l),m=n(u),x=n(f),b=n(s),k=/[+\-*\/^<>=!&|~$:]/;return{startState:function(){return{tokenize:r,ctx:{type:"top",indent:-e.indentUnit,flags:2},indent:0,afterIdent:!1}},token:function(t,e){if(t.sol()&&(0==(3&e.ctx.flags)&&(e.ctx.flags|=2),4&e.ctx.flags&&c(e),e.indent=t.indentation()),t.eatSpace())return null;var n=e.tokenize(t,e);return"comment"!=n&&0==(2&e.ctx.flags)&&o(e,1),";"!=p&&"{"!=p&&"}"!=p||"block"!=e.ctx.type||c(e),"{"==p?i(e,"}",t):"("==p?(i(e,")",t),e.afterIdent&&(e.ctx.argList=!0)):"["==p?i(e,"]",t):"block"==p?i(e,"block",t):p==e.ctx.type?c(e):"block"==e.ctx.type&&"comment"!=n&&o(e,4),e.afterIdent="variable"==n||"keyword"==n,n},indent:function(t,n){if(t.tokenize!=r)return 0;var a=n&&n.charAt(0),i=t.ctx,o=a==i.type;return 4&i.flags&&(i=i.prev),"block"==i.type?i.indent+("{"==a?0:e.indentUnit):1&i.flags?i.column+(o?0:1):i.indent+(o?0:e.indentUnit)},lineComment:"#"}}),t.defineMIME("text/x-rsrc","r")})}});
//# sourceMappingURL=61.56c18ce0.chunk.js.map