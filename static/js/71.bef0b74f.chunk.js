webpackJsonp([71],{101:function(e,t,n){!function(e){e(n(0))}(function(e){"use strict";e.defineMode("oz",function(e){function t(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}function n(e,t){if(e.eatSpace())return null;if(e.match(/[{}]/))return"bracket";if(e.match("[]"))return"keyword";if(e.match(s)||e.match(f))return"operator";if(e.match(m))return"atom";var n=e.match(k);if(n)return t.doInCurrentLine?t.doInCurrentLine=!1:t.currentIndent++,"proc"==n[0]||"fun"==n[0]?t.tokenize=i:"class"==n[0]?t.tokenize=r:"meth"==n[0]&&(t.tokenize=a),"keyword";if(e.match(p)||e.match(h))return"keyword";if(e.match(z))return t.currentIndent--,"keyword";var d=e.next();if('"'==d||"'"==d)return t.tokenize=c(d),t.tokenize(e,t);if(/[~\d]/.test(d)){if("~"==d){if(!/^[0-9]/.test(e.peek()))return null;if("0"==e.next()&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/))return"number"}return"0"==d&&e.match(/^[xX][0-9a-fA-F]+/)||e.match(/^[0-9]*(\.[0-9]+)?([eE][~+]?[0-9]+)?/)?"number":null}return"%"==d?(e.skipToEnd(),"comment"):"/"==d&&e.eat("*")?(t.tokenize=o,o(e,t)):u.test(d)?"operator":(e.eatWhile(/\w/),"variable")}function r(e,t){return e.eatSpace()?null:(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=n,"variable-3")}function a(e,t){return e.eatSpace()?null:(e.match(/([a-zA-Z][A-Za-z0-9_]*)|(`.+`)/),t.tokenize=n,"def")}function i(e,t){return e.eatSpace()?null:!t.hasPassedFirstStage&&e.eat("{")?(t.hasPassedFirstStage=!0,"bracket"):t.hasPassedFirstStage?(e.match(/([A-Z][A-Za-z0-9_]*)|(`.+`)|\$/),t.hasPassedFirstStage=!1,t.tokenize=n,"def"):(t.tokenize=n,null)}function o(e,t){for(var r,a=!1;r=e.next();){if("/"==r&&a){t.tokenize=n;break}a="*"==r}return"comment"}function c(e){return function(t,r){for(var a,i=!1,o=!1;null!=(a=t.next());){if(a==e&&!i){o=!0;break}i=!i&&"\\"==a}return!o&&i||(r.tokenize=n),"string"}}var u=/[\^@!\|<>#~\.\*\-\+\\/,=]/,f=/(<-)|(:=)|(=<)|(>=)|(<=)|(<:)|(>:)|(=:)|(\\=)|(\\=:)|(!!)|(==)|(::)/,s=/(:::)|(\.\.\.)|(=<:)|(>=:)/,d=["in","then","else","of","elseof","elsecase","elseif","catch","finally","with","require","prepare","import","export","define","do"],l=["end"],m=t(["true","false","nil","unit"]),h=t(["andthen","at","attr","declare","feat","from","lex","mod","div","mode","orelse","parser","prod","prop","scanner","self","syn","token"]),k=t(["local","proc","fun","case","class","if","cond","or","dis","choice","not","thread","try","raise","lock","for","suchthat","meth","functor"]),p=t(d),z=t(l);return{startState:function(){return{tokenize:n,currentIndent:0,doInCurrentLine:!1,hasPassedFirstStage:!1}},token:function(e,t){return e.sol()&&(t.doInCurrentLine=0),t.tokenize(e,t)},indent:function(t,n){var r=n.replace(/^\s+|\s+$/g,"");return r.match(z)||r.match(p)||r.match(/(\[])/)?e.indentUnit*(t.currentIndent-1):t.currentIndent<0?0:t.currentIndent*e.indentUnit},fold:"indent",electricInput:function(){var e=d.concat(l);return new RegExp("[\\[\\]]|("+e.join("|")+")$")}(),lineComment:"%",blockCommentStart:"/*",blockCommentEnd:"*/"}}),e.defineMIME("text/x-oz","oz")})}});
//# sourceMappingURL=71.bef0b74f.chunk.js.map