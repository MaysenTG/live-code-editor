webpackJsonp([38],{136:function(t,e,n){!function(t){t(n(0))}(function(t){"use strict";function e(t){for(var e={},n=t.split(" "),r=0;r<n.length;++r)e[n[r]]=!0;return e}t.defineMode("ttcn",function(t,e){function n(t,e){var n=t.next();if('"'==n||"'"==n)return e.tokenize=r(n),e.tokenize(t,e);if(/[\[\]{}\(\),;\\:\?\.]/.test(n))return c=n,"punctuation";if("#"==n)return t.skipToEnd(),"atom preprocessor";if("%"==n)return t.eatWhile(/\b/),"atom ttcn3Macros";if(/\d/.test(n))return t.eatWhile(/[\w\.]/),"number";if("/"==n){if(t.eat("*"))return e.tokenize=i,i(t,e);if(t.eat("/"))return t.skipToEnd(),"comment"}if(C.test(n))return"@"==n&&(t.match("try")||t.match("catch")||t.match("lazy"))?"keyword":(t.eatWhile(C),"operator");t.eatWhile(/[\w\$_\xa1-\uffff]/);var o=t.current();return p.propertyIsEnumerable(o)?"keyword":u.propertyIsEnumerable(o)?"builtin":f.propertyIsEnumerable(o)?"def timerOps":d.propertyIsEnumerable(o)?"def configOps":b.propertyIsEnumerable(o)?"def verdictOps":m.propertyIsEnumerable(o)?"def portOps":h.propertyIsEnumerable(o)?"def sutOps":y.propertyIsEnumerable(o)?"def functionOps":v.propertyIsEnumerable(o)?"string verdictConsts":g.propertyIsEnumerable(o)?"string booleanConsts":x.propertyIsEnumerable(o)?"string otherConsts":k.propertyIsEnumerable(o)?"builtin types":O.propertyIsEnumerable(o)?"builtin visibilityModifiers":E.propertyIsEnumerable(o)?"atom templateMatch":"variable"}function r(t){return function(e,n){for(var r,i=!1,o=!1;null!=(r=e.next());){if(r==t&&!i){var s=e.peek();s&&("b"!=(s=s.toLowerCase())&&"h"!=s&&"o"!=s||e.next()),o=!0;break}i=!i&&"\\"==r}return(o||!i&&!w)&&(n.tokenize=null),"string"}}function i(t,e){for(var n,r=!1;n=t.next();){if("/"==n&&r){e.tokenize=null;break}r="*"==n}return"comment"}function o(t,e,n,r,i){this.indented=t,this.column=e,this.type=n,this.align=r,this.prev=i}function s(t,e,n){var r=t.indented;return t.context&&"statement"==t.context.type&&(r=t.context.indented),t.context=new o(r,e,n,null,t.context)}function a(t){var e=t.context.type;return")"!=e&&"]"!=e&&"}"!=e||(t.indented=t.context.indented),t.context=t.context.prev}var c,l=t.indentUnit,p=e.keywords||{},u=e.builtin||{},f=e.timerOps||{},m=e.portOps||{},d=e.configOps||{},b=e.verdictOps||{},h=e.sutOps||{},y=e.functionOps||{},v=e.verdictConsts||{},g=e.booleanConsts||{},x=e.otherConsts||{},k=e.types||{},O=e.visibilityModifiers||{},E=e.templateMatch||{},w=e.multiLineStrings,I=!1!==e.indentStatements,C=/[+\-*&@=<>!\/]/;return{startState:function(t){return{tokenize:null,context:new o((t||0)-l,0,"top",!1),indented:0,startOfLine:!0}},token:function(t,e){var r=e.context;if(t.sol()&&(null==r.align&&(r.align=!1),e.indented=t.indentation(),e.startOfLine=!0),t.eatSpace())return null;c=null;var i=(e.tokenize||n)(t,e);if("comment"==i)return i;if(null==r.align&&(r.align=!0),";"!=c&&":"!=c&&","!=c||"statement"!=r.type)if("{"==c)s(e,t.column(),"}");else if("["==c)s(e,t.column(),"]");else if("("==c)s(e,t.column(),")");else if("}"==c){for(;"statement"==r.type;)r=a(e);for("}"==r.type&&(r=a(e));"statement"==r.type;)r=a(e)}else c==r.type?a(e):I&&(("}"==r.type||"top"==r.type)&&";"!=c||"statement"==r.type&&"newstatement"==c)&&s(e,t.column(),"statement");else a(e);return e.startOfLine=!1,i},electricChars:"{}",blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//",fold:"brace"}}),function(e,n){function r(t){if(t)for(var e in t)t.hasOwnProperty(e)&&i.push(e)}"string"==typeof e&&(e=[e]);var i=[];r(n.keywords),r(n.builtin),r(n.timerOps),r(n.portOps),i.length&&(n.helperType=e[0],t.registerHelper("hintWords",e[0],i));for(var o=0;o<e.length;++o)t.defineMIME(e[o],n)}(["text/x-ttcn","text/x-ttcn3","text/x-ttcnpp"],{name:"ttcn",keywords:e("activate address alive all alt altstep and and4b any break case component const continue control deactivate display do else encode enumerated except exception execute extends extension external for from function goto group if import in infinity inout interleave label language length log match message mixed mod modifies module modulepar mtc noblock not not4b nowait of on optional or or4b out override param pattern port procedure record recursive rem repeat return runs select self sender set signature system template testcase to type union value valueof var variant while with xor xor4b"),builtin:e("bit2hex bit2int bit2oct bit2str char2int char2oct encvalue decomp decvalue float2int float2str hex2bit hex2int hex2oct hex2str int2bit int2char int2float int2hex int2oct int2str int2unichar isbound ischosen ispresent isvalue lengthof log2str oct2bit oct2char oct2hex oct2int oct2str regexp replace rnd sizeof str2bit str2float str2hex str2int str2oct substr unichar2int unichar2char enum2int"),types:e("anytype bitstring boolean char charstring default float hexstring integer objid octetstring universal verdicttype timer"),timerOps:e("read running start stop timeout"),portOps:e("call catch check clear getcall getreply halt raise receive reply send trigger"),configOps:e("create connect disconnect done kill killed map unmap"),verdictOps:e("getverdict setverdict"),sutOps:e("action"),functionOps:e("apply derefers refers"),verdictConsts:e("error fail inconc none pass"),booleanConsts:e("true false"),otherConsts:e("null NULL omit"),visibilityModifiers:e("private public friend"),templateMatch:e("complement ifpresent subset superset permutation"),multiLineStrings:!0})})}});
//# sourceMappingURL=38.b23209cd.chunk.js.map