webpackJsonp([81],{90:function(e,a,t){!function(e){e(t(0))}(function(e){"use strict";e.defineMode("mathematica",function(e,a){function t(e,a){var t;return'"'===(t=e.next())?(a.tokenize=n,a.tokenize(e,a)):"("===t&&e.eat("*")?(a.commentLevel++,a.tokenize=m,a.tokenize(e,a)):(e.backUp(1),e.match(o,!0,!1)?"number":e.match(z,!0,!1)?"number":e.match(/(?:In|Out)\[[0-9]*\]/,!0,!1)?"atom":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::usage)/,!0,!1)?"meta":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*(?:`[a-zA-Z0-9\$]+)*::[a-zA-Z\$][a-zA-Z0-9\$]*):?/,!0,!1)?"string-2":e.match(/([a-zA-Z\$][a-zA-Z0-9\$]*\s*:)(?:(?:[a-zA-Z\$][a-zA-Z0-9\$]*)|(?:[^:=>~@\^\&\*\)\[\]'\?,\|])).*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/[a-zA-Z\$][a-zA-Z0-9\$]*_+/,!0,!1)?"variable-2":e.match(/_+[a-zA-Z\$][a-zA-Z0-9\$]*/,!0,!1)?"variable-2":e.match(/\\\[[a-zA-Z\$][a-zA-Z0-9\$]*\]/,!0,!1)?"variable-3":e.match(/(?:\[|\]|{|}|\(|\))/,!0,!1)?"bracket":e.match(/(?:#[a-zA-Z\$][a-zA-Z0-9\$]*|#+[0-9]?)/,!0,!1)?"variable-2":e.match(i,!0,!1)?"keyword":e.match(/(?:\\|\+|\-|\*|\/|,|;|\.|:|@|~|=|>|<|&|\||_|`|'|\^|\?|!|%)/,!0,!1)?"operator":(e.next(),"error"))}function n(e,a){for(var n,m=!1,c=!1;null!=(n=e.next());){if('"'===n&&!c){m=!0;break}c=!c&&"\\"===n}return m&&!c&&(a.tokenize=t),"string"}function m(e,a){for(var n,m;a.commentLevel>0&&null!=(m=e.next());)"("===n&&"*"===m&&a.commentLevel++,"*"===n&&")"===m&&a.commentLevel--,n=m;return a.commentLevel<=0&&(a.tokenize=t),"comment"}var c="(?:\\.\\d+|\\d+\\.\\d*|\\d+)",r="(?:`(?:`?"+c+")?)",o=new RegExp("(?:(?:\\d+)(?:\\^\\^(?:\\.\\w+|\\w+\\.\\w*|\\w+)"+r+"?(?:\\*\\^[+-]?\\d+)?))"),z=new RegExp("(?:"+c+r+"?(?:\\*\\^[+-]?\\d+)?)"),i=new RegExp("(?:`?)(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*)(?:`(?:[a-zA-Z\\$][a-zA-Z0-9\\$]*))*(?:`?)");return{startState:function(){return{tokenize:t,commentLevel:0}},token:function(e,a){return e.eatSpace()?null:a.tokenize(e,a)},blockCommentStart:"(*",blockCommentEnd:"*)"}}),e.defineMIME("text/x-mathematica",{name:"mathematica"})})}});
//# sourceMappingURL=81.a425c3ae.chunk.js.map