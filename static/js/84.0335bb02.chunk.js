webpackJsonp([84],{87:function(e,t,n){!function(e){e(n(0))}(function(e){"use strict";e.defineMode("julia",function(t,n){function r(e,t,n){return"undefined"===typeof n&&(n=""),"undefined"===typeof t&&(t="\\b"),new RegExp("^"+n+"(("+e.join(")|(")+"))"+t)}function i(e){return e.nestedArrays>0}function a(e){return e.nestedGenerators>0}function u(e,t){return"undefined"===typeof t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function o(e,t){if(e.match("#=",!1))return t.tokenize=c,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r=e.peek();if("#"===r)return e.skipToEnd(),"comment";if("["===r&&(t.scopes.push("["),t.nestedArrays++),"("===r&&(t.scopes.push("("),t.nestedGenerators++),i(t)&&"]"===r){for(;t.scopes.length&&"["!==u(t);)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(a(t)&&")"===r){for(;t.scopes.length&&"("!==u(t);)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(i(t)){if("end"==t.lastToken&&e.match(":"))return"operator";if(e.match("end"))return"number"}var o;if((o=e.match(x,!1))&&t.scopes.push(o[0]),e.match(y,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=s,t.tokenize(e,t);if(!n&&(e.match(_)||e.match(C)))return"builtin";if(e.match(p))return"operator";if(e.match(/^\.?\d/,!1)){var m=RegExp(/^im\b/),F=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(F=!0),e.match(/^0x[0-9a-f_]+/i)&&(F=!0),e.match(/^0b[01_]+/i)&&(F=!0),e.match(/^0o[0-7_]+/i)&&(F=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(F=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(F=!0),F)return e.match(m),t.leavingExpr=!0,"number"}if(e.match("'"))return t.tokenize=l,t.tokenize(e,t);if(e.match(D))return t.tokenize=f(e.current()),t.tokenize(e,t);if(e.match(E)||e.match(T))return"meta";if(e.match(d))return null;if(e.match(A))return"keyword";if(e.match(z))return"builtin";var k=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(h)?k?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function s(e,t){return e.match(/.*?(?=[,;{}()=\s]|$)/),e.match("{")?t.nestedParameters++:e.match("}")&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=o),"builtin"}function c(e,t){return e.match("#=")&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match("=#")&&0==--t.nestedComments&&(t.tokenize=o),"comment"}function l(e,t){var n,r=!1;if(e.match(F))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i)){var i=parseInt(n[1],16);(i<=55295||i>=57344)&&(r=!0,e.next())}else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i=parseInt(n[1],16);i<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=o,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match("'")&&(t.tokenize=o),"error")}function f(e){function t(t,n){if(t.eat("\\"))t.next();else{if(t.match(e))return n.tokenize=o,n.leavingExpr=!0,"string";t.eat(/[`"]/)}return t.eatWhile(/[^\\`"]/),"string"}return'"""'===e.substr(-3)?e='"""':'"'===e.substr(-1)&&(e='"'),t}var m=["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","\\.{2,3}","[\\.\\\\%*+\\-<>!\\/^|&]=?","\\?","\\$","~",":"],p=n.operators||r(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","--?>","<--[->]?","\\/\\/","[\\\\%*+\\-<>!\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),d=n.delimiters||/^[;,()[\]{}]/,h=n.identifiers||/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,F=r(["\\\\[0-7]{1,3}","\\\\x[A-Fa-f0-9]{1,2}","\\\\[abefnrtv0%?'\"\\\\]","([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])"],"'"),k=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],b=["end","else","elseif","catch","finally"],g=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],v=["true","false","nothing","NaN","Inf"];e.registerHelper("hintWords","julia",g.concat(v));var x=r(k),y=r(b),A=r(g),z=r(v),E=/^@[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,_=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,D=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/,T=r(m,"","@"),C=r(m,"",":");return{startState:function(){return{tokenize:o,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,n){var r=0;return("]"===n||")"===n||/^end\b/.test(n)||/^else/.test(n)||/^catch\b/.test(n)||/^elseif\b/.test(n)||/^finally/.test(n))&&(r=-1),(e.scopes.length+r)*t.indentUnit},electricInput:/\b(end|else|catch|finally)\b/,blockCommentStart:"#=",blockCommentEnd:"=#",lineComment:"#",closeBrackets:'()[]{}""',fold:"indent"}}),e.defineMIME("text/x-julia","julia")})}});
//# sourceMappingURL=84.0335bb02.chunk.js.map