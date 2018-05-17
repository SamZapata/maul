/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/

(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/

if (!jQuery) { throw new Error("Bootstrap requires jQuery") }

/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd'
    , 'MozTransition'    : 'transitionend'
    , 'OTransition'      : 'oTransitionEnd otransitionend'
    , 'transition'       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false, $el = this
    $(this).one($.support.transition.end, function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#alerts
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.hasClass('alert') ? $this : $this.parent()
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent.trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one($.support.transition.end, removeElement)
        .emulateTransitionEnd(150) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  var old = $.fn.alert

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#buttons
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // BUTTON PUBLIC CLASS DEFINITION
  // ==============================

  var Button = function (element, options) {
    this.$element = $(element)
    this.options  = $.extend({}, Button.DEFAULTS, options)
  }

  Button.DEFAULTS = {
    loadingText: 'loading...'
  }

  Button.prototype.setState = function (state) {
    var d    = 'disabled'
    var $el  = this.$element
    var val  = $el.is('input') ? 'val' : 'html'
    var data = $el.data()

    state = state + 'Text'

    if (!data.resetText) $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d);
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.closest('[data-toggle="buttons"]')

    if ($parent.length) {
      var $input = this.$element.find('input')
        .prop('checked', !this.$element.hasClass('active'))
        .trigger('change')
      if ($input.prop('type') === 'radio') $parent.find('.active').removeClass('active')
    }

    this.$element.toggleClass('active')
  }


  // BUTTON PLUGIN DEFINITION
  // ========================

  var old = $.fn.button

  $.fn.button = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.button')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.button', (data = new Button(this, options)))

      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.Constructor = Button


  // BUTTON NO CONFLICT
  // ==================

  $.fn.button.noConflict = function () {
    $.fn.button = old
    return this
  }


  // BUTTON DATA-API
  // ===============

  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {
    var $btn = $(e.target)
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
    $btn.button('toggle')
    e.preventDefault()
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#carousel
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // CAROUSEL CLASS DEFINITION
  // =========================

  var Carousel = function (element, options) {
    this.$element    = $(element)
    this.$indicators = this.$element.find('.carousel-indicators')
    this.options     = options
    this.paused      =
    this.sliding     =
    this.interval    =
    this.$active     =
    this.$items      = null

    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.DEFAULTS = {
    interval: 5000
  , pause: 'hover'
  , wrap: true
  }

  Carousel.prototype.cycle =  function (e) {
    e || (this.paused = false)

    this.interval && clearInterval(this.interval)

    this.options.interval
      && !this.paused
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))

    return this
  }

  Carousel.prototype.getActiveIndex = function () {
    this.$active = this.$element.find('.item.active')
    this.$items  = this.$active.parent().children()

    return this.$items.index(this.$active)
  }

  Carousel.prototype.to = function (pos) {
    var that        = this
    var activeIndex = this.getActiveIndex()

    if (pos > (this.$items.length - 1) || pos < 0) return

    if (this.sliding)       return this.$element.one('slid', function () { that.to(pos) })
    if (activeIndex == pos) return this.pause().cycle()

    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))
  }

  Carousel.prototype.pause = function (e) {
    e || (this.paused = true)

    if (this.$element.find('.next, .prev').length && $.support.transition.end) {
      this.$element.trigger($.support.transition.end)
      this.cycle(true)
    }

    this.interval = clearInterval(this.interval)

    return this
  }

  Carousel.prototype.next = function () {
    if (this.sliding) return
    return this.slide('next')
  }

  Carousel.prototype.prev = function () {
    if (this.sliding) return
    return this.slide('prev')
  }

  Carousel.prototype.slide = function (type, next) {
    var $active   = this.$element.find('.item.active')
    var $next     = next || $active[type]()
    var isCycling = this.interval
    var direction = type == 'next' ? 'left' : 'right'
    var fallback  = type == 'next' ? 'first' : 'last'
    var that      = this

    if (!$next.length) {
      if (!this.options.wrap) return
      $next = this.$element.find('.item')[fallback]()
    }

    this.sliding = true

    isCycling && this.pause()

    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })

    if ($next.hasClass('active')) return

    if (this.$indicators.length) {
      this.$indicators.find('.active').removeClass('active')
      this.$element.one('slid', function () {
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])
        $nextIndicator && $nextIndicator.addClass('active')
      })
    }

    if ($.support.transition && this.$element.hasClass('slide')) {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $next.addClass(type)
      $next[0].offsetWidth // force reflow
      $active.addClass(direction)
      $next.addClass(direction)
      $active
        .one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
        .emulateTransitionEnd(600)
    } else {
      this.$element.trigger(e)
      if (e.isDefaultPrevented()) return
      $active.removeClass('active')
      $next.addClass('active')
      this.sliding = false
      this.$element.trigger('slid')
    }

    isCycling && this.cycle()

    return this
  }


  // CAROUSEL PLUGIN DEFINITION
  // ==========================

  var old = $.fn.carousel

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.carousel')
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
      var action  = typeof option == 'string' ? option : options.slide

      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (action) data[action]()
      else if (options.interval) data.pause().cycle()
    })
  }

  $.fn.carousel.Constructor = Carousel


  // CAROUSEL NO CONFLICT
  // ====================

  $.fn.carousel.noConflict = function () {
    $.fn.carousel = old
    return this
  }


  // CAROUSEL DATA-API
  // =================

  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {
    var $this   = $(this), href
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())
    var slideIndex = $this.attr('data-slide-to')
    if (slideIndex) options.interval = false

    $target.carousel(options)

    if (slideIndex = $this.attr('data-slide-to')) {
      $target.data('bs.carousel').to(slideIndex)
    }

    e.preventDefault()
  })

  $(window).on('load', function () {
    $('[data-ride="carousel"]').each(function () {
      var $carousel = $(this)
      $carousel.carousel($carousel.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#collapse
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.transitioning = null

    if (this.options.parent) this.$parent = $(this.options.parent)
    if (this.options.toggle) this.toggle()
  }

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var actives = this.$parent && this.$parent.find('> .panel > .in')

    if (actives && actives.length) {
      var hasData = actives.data('bs.collapse')
      if (hasData && hasData.transitioning) return
      actives.collapse('hide')
      hasData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')
      [dimension](0)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('in')
        [dimension]('auto')
      this.transitioning = 0
      this.$element.trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
      [dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element
      [dimension](this.$element[dimension]())
      [0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse')
      .removeClass('in')

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .trigger('hidden.bs.collapse')
        .removeClass('collapsing')
        .addClass('collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one($.support.transition.end, $.proxy(complete, this))
      .emulateTransitionEnd(350)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  var old = $.fn.collapse

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {
    var $this   = $(this), href
    var target  = $this.attr('data-target')
        || e.preventDefault()
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
    var $target = $(target)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()
    var parent  = $this.attr('data-parent')
    var $parent = parent && $(parent)

    if (!data || !data.transitioning) {
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')
    }

    $target.collapse(option)
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#dropdowns
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // DROPDOWN CLASS DEFINITION
  // =========================

  var backdrop = '.dropdown-backdrop'
  var toggle   = '[data-toggle=dropdown]'
  var Dropdown = function (element) {
    var $el = $(element).on('click.bs.dropdown', this.toggle)
  }

  Dropdown.prototype.toggle = function (e) {
    var $this = $(this)

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    clearMenus()

    if (!isActive) {
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
        // if mobile we we use a backdrop because click events don't delegate
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)
      }

      $parent.trigger(e = $.Event('show.bs.dropdown'))

      if (e.isDefaultPrevented()) return

      $parent
        .toggleClass('open')
        .trigger('shown.bs.dropdown')

      $this.focus()
    }

    return false
  }

  Dropdown.prototype.keydown = function (e) {
    if (!/(38|40|27)/.test(e.keyCode)) return

    var $this = $(this)

    e.preventDefault()
    e.stopPropagation()

    if ($this.is('.disabled, :disabled')) return

    var $parent  = getParent($this)
    var isActive = $parent.hasClass('open')

    if (!isActive || (isActive && e.keyCode == 27)) {
      if (e.which == 27) $parent.find(toggle).focus()
      return $this.click()
    }

    var $items = $('[role=menu] li:not(.divider):visible a', $parent)

    if (!$items.length) return

    var index = $items.index($items.filter(':focus'))

    if (e.keyCode == 38 && index > 0)                 index--                        // up
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
    if (!~index)                                      index=0

    $items.eq(index).focus()
  }

  function clearMenus() {
    $(backdrop).remove()
    $(toggle).each(function (e) {
      var $parent = getParent($(this))
      if (!$parent.hasClass('open')) return
      $parent.trigger(e = $.Event('hide.bs.dropdown'))
      if (e.isDefaultPrevented()) return
      $parent.removeClass('open').trigger('hidden.bs.dropdown')
    })
  }

  function getParent($this) {
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    var $parent = selector && $(selector)

    return $parent && $parent.length ? $parent : $this.parent()
  }


  // DROPDOWN PLUGIN DEFINITION
  // ==========================

  var old = $.fn.dropdown

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('dropdown')

      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  // DROPDOWN NO CONFLICT
  // ====================

  $.fn.dropdown.noConflict = function () {
    $.fn.dropdown = old
    return this
  }


  // APPLY TO STANDARD DROPDOWN ELEMENTS
  // ===================================

  $(document)
    .on('click.bs.dropdown.data-api', clearMenus)
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
    .on('click.bs.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)

}(window.jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#modals
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options   = options
    this.$element  = $(element)
    this.$backdrop =
    this.isShown   = null

    if (this.options.remote) this.$element.load(this.options.remote)
  }

  Modal.DEFAULTS = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.escape()

    this.$element.on('click.dismiss.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(document.body) // don't move modals dom position
      }

      that.$element.show()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element
        .addClass('in')
        .attr('aria-hidden', false)

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$element.find('.modal-dialog') // wait for modal to slide in
          .one($.support.transition.end, function () {
            that.$element.focus().trigger(e)
          })
          .emulateTransitionEnd(300) :
        that.$element.focus().trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .attr('aria-hidden', true)
      .off('click.dismiss.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one($.support.transition.end, $.proxy(this.hideModal, this))
        .emulateTransitionEnd(300) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.focus()
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keyup.dismiss.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.removeBackdrop()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that    = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      this.$element.on('click.dismiss.modal', $.proxy(function (e) {
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus.call(this.$element[0])
          : this.hide.call(this)
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop
          .one($.support.transition.end, callback)
          .emulateTransitionEnd(150) :
        callback()

    } else if (callback) {
      callback()
    }
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  var old = $.fn.modal

  $.fn.modal = function (option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7
    var option  = $target.data('modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    e.preventDefault()

    $target
      .modal(option, this)
      .one('hide', function () {
        $this.is(':visible') && $this.focus()
      })
  })

  $(document)
    .on('show.bs.modal',  '.modal', function () { $(document.body).addClass('modal-open') })
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       =
    this.options    =
    this.enabled    =
    this.timeout    =
    this.hoverState =
    this.$element   = null

    this.init('tooltip', element, options)
  }

  Tooltip.DEFAULTS = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover focus'
  , title: ''
  , delay: 0
  , html: false
  , container: false
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled  = true
    this.type     = type
    this.$element = $(element)
    this.options  = this.getOptions(options)

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focus'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'blur'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay
      , hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.'+ this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      if (e.isDefaultPrevented()) return

      var $tip = this.tip()

      this.setContent()

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var $parent = this.$element.parent()

        var orgPlacement = placement
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left

        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)
      this.$element.trigger('shown.bs.' + this.type)
    }
  }

  Tooltip.prototype.applyPlacement = function(offset, placement) {
    var replace
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  = offset.top  + marginTop
    offset.left = offset.left + marginLeft

    $tip
      .offset(offset)
      .addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      replace = true
      offset.top = offset.top + height - actualHeight
    }

    if (/bottom|top/.test(placement)) {
      var delta = 0

      if (offset.left < 0) {
        delta       = offset.left * -2
        offset.left = 0

        $tip.offset(offset)

        actualWidth  = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight
      }

      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')
    } else {
      this.replaceArrow(actualHeight - height, actualHeight, 'top')
    }

    if (replace) $tip.offset(offset)
  }

  Tooltip.prototype.replaceArrow = function(delta, dimension, position) {
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + "%") : '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function () {
    var that = this
    var $tip = this.tip()
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && this.$tip.hasClass('fade') ?
      $tip
        .one($.support.transition.end, complete)
        .emulateTransitionEnd(150) :
      complete()

    this.$element.trigger('hidden.bs.' + this.type)

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function () {
    var el = this.$element[0]
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {
      width: el.offsetWidth
    , height: el.offsetHeight
    }, this.$element.offset())
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   }
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.tip = function () {
    return this.$tip = this.$tip || $(this.options.template)
  }

  Tooltip.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')
  }

  Tooltip.prototype.validate = function () {
    if (!this.$element[0].parentNode) {
      this.hide()
      this.$element = null
      this.options  = null
    }
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
  }

  Tooltip.prototype.destroy = function () {
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  var old = $.fn.tooltip

  $.fn.tooltip = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#popovers
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // POPOVER PUBLIC CLASS DEFINITION
  // ===============================

  var Popover = function (element, options) {
    this.init('popover', element, options)
  }

  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')

  Popover.DEFAULTS = $.extend({} , $.fn.tooltip.Constructor.DEFAULTS, {
    placement: 'right'
  , trigger: 'click'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })


  // NOTE: POPOVER EXTENDS tooltip.js
  // ================================

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)

  Popover.prototype.constructor = Popover

  Popover.prototype.getDefaults = function () {
    return Popover.DEFAULTS
  }

  Popover.prototype.setContent = function () {
    var $tip    = this.tip()
    var title   = this.getTitle()
    var content = this.getContent()

    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
    $tip.find('.popover-content')[this.options.html ? 'html' : 'text'](content)

    $tip.removeClass('fade top bottom left right in')

    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
    // this manually by checking the contents.
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
  }

  Popover.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }

  Popover.prototype.getContent = function () {
    var $e = this.$element
    var o  = this.options

    return $e.attr('data-content')
      || (typeof o.content == 'function' ?
            o.content.call($e[0]) :
            o.content)
  }

  Popover.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find('.arrow')
  }

  Popover.prototype.tip = function () {
    if (!this.$tip) this.$tip = $(this.options.template)
    return this.$tip
  }


  // POPOVER PLUGIN DEFINITION
  // =========================

  var old = $.fn.popover

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.popover')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover


  // POPOVER NO CONFLICT
  // ===================

  $.fn.popover.noConflict = function () {
    $.fn.popover = old
    return this
  }

}(window.jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#scrollspy
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // SCROLLSPY CLASS DEFINITION
  // ==========================

  function ScrollSpy(element, options) {
    var href
    var process  = $.proxy(this.process, this)

    this.$element       = $(element).is('body') ? $(window) : $(element)
    this.$body          = $('body')
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
    this.selector       = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.offsets        = $([])
    this.targets        = $([])
    this.activeTarget   = null

    this.refresh()
    this.process()
  }

  ScrollSpy.DEFAULTS = {
    offset: 10
  }

  ScrollSpy.prototype.refresh = function () {
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'

    this.offsets = $([])
    this.targets = $([])

    var self     = this
    var $targets = this.$body
      .find(this.selector)
      .map(function () {
        var $el   = $(this)
        var href  = $el.data('target') || $el.attr('href')
        var $href = /^#\w/.test(href) && $(href)

        return ($href
          && $href.length
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })
      .sort(function (a, b) { return a[0] - b[0] })
      .each(function () {
        self.offsets.push(this[0])
        self.targets.push(this[1])
      })
  }

  ScrollSpy.prototype.process = function () {
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
    var maxScroll    = scrollHeight - this.$scrollElement.height()
    var offsets      = this.offsets
    var targets      = this.targets
    var activeTarget = this.activeTarget
    var i

    if (scrollTop >= maxScroll) {
      return activeTarget != (i = targets.last()[0]) && this.activate(i)
    }

    for (i = offsets.length; i--;) {
      activeTarget != targets[i]
        && scrollTop >= offsets[i]
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
        && this.activate( targets[i] )
    }
  }

  ScrollSpy.prototype.activate = function (target) {
    this.activeTarget = target

    $(this.selector)
      .parents('.active')
      .removeClass('active')

    var selector = this.selector
      + '[data-target="' + target + '"],'
      + this.selector + '[href="' + target + '"]'

    var active = $(selector)
      .parents('li')
      .addClass('active')

    if (active.parent('.dropdown-menu').length)  {
      active = active
        .closest('li.dropdown')
        .addClass('active')
    }

    active.trigger('activate')
  }


  // SCROLLSPY PLUGIN DEFINITION
  // ===========================

  var old = $.fn.scrollspy

  $.fn.scrollspy = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.scrollspy')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy


  // SCROLLSPY NO CONFLICT
  // =====================

  $.fn.scrollspy.noConflict = function () {
    $.fn.scrollspy = old
    return this
  }


  // SCROLLSPY DATA-API
  // ==================

  $(window).on('load', function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#tabs
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    this.element = $(element)
  }

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var previous = $ul.find('.active:last a')[0]
    var e        = $.Event('show.bs.tab', {
      relatedTarget: previous
    })

    $this.trigger(e)

    if (e.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.parent('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $this.trigger({
        type: 'shown.bs.tab'
      , relatedTarget: previous
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && $active.hasClass('fade')

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
        .removeClass('active')

      element.addClass('active')

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu')) {
        element.closest('li.dropdown').addClass('active')
      }

      callback && callback()
    }

    transition ?
      $active
        .one($.support.transition.end, next)
        .emulateTransitionEnd(150) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  var old = $.fn.tab

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

}(window.jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#affix
 * ========================================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */


+function ($) { "use strict";

  // AFFIX CLASS DEFINITION
  // ======================

  var Affix = function (element, options) {
    this.options = $.extend({}, Affix.DEFAULTS, options)
    this.$window = $(window)
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))

    this.$element = $(element)
    this.affixed  =
    this.unpin    = null

    this.checkPosition()
  }

  Affix.RESET = 'affix affix-top affix-bottom'

  Affix.DEFAULTS = {
    offset: 0
  }

  Affix.prototype.checkPositionWithEventLoop = function () {
    setTimeout($.proxy(this.checkPosition, this), 1)
  }

  Affix.prototype.checkPosition = function () {
    if (!this.$element.is(':visible')) return

    var scrollHeight = $(document).height()
    var scrollTop    = this.$window.scrollTop()
    var position     = this.$element.offset()
    var offset       = this.options.offset
    var offsetTop    = offset.top
    var offsetBottom = offset.bottom

    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
    if (typeof offsetTop == 'function')    offsetTop    = offset.top()
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom()

    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false

    if (this.affixed === affix) return
    if (this.unpin) this.$element.css('top', '')

    this.affixed = affix
    this.unpin   = affix == 'bottom' ? position.top - scrollTop : null

    this.$element.removeClass(Affix.RESET).addClass('affix' + (affix ? '-' + affix : ''))

    if (affix == 'bottom') {
      this.$element.offset({ top: document.body.offsetHeight - offsetBottom - this.$element.height() })
    }
  }


  // AFFIX PLUGIN DEFINITION
  // =======================

  var old = $.fn.affix

  $.fn.affix = function (option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.affix')
      var options = typeof option == 'object' && option

      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.affix.Constructor = Affix


  // AFFIX NO CONFLICT
  // =================

  $.fn.affix.noConflict = function () {
    $.fn.affix = old
    return this
  }


  // AFFIX DATA-API
  // ==============

  $(window).on('load', function () {
    $('[data-spy="affix"]').each(function () {
      var $spy = $(this)
      var data = $spy.data()

      data.offset = data.offset || {}

      if (data.offsetBottom) data.offset.bottom = data.offsetBottom
      if (data.offsetTop)    data.offset.top    = data.offsetTop

      $spy.affix(data)
    })
  })

}(window.jQuery);
jQuery.fn.vectorMap('addMap', 'source_vector_map', {"width":"744.09448819","height":"1052.3622047","pathes":{"path6074":{"name":"name0","path":"m256.03 651.77l-2.88 -4.17l1.99 -3.02c3.09 -4.69 3.78 -6.45 3.79 -9.72c0.01 -2.52 -0.10 -2.97 -1.15 -4.60c-0.64 -1.00 -2.06 -2.57 -3.16 -3.50c-2.70 -2.29 -2.88 -2.59 -2.88 -4.78c0.00 -2.24 1.02 -5.24 4.23 -12.53c6.28 -14.23 8.72 -18.26 14.27 -23.56c1.85 -1.77 3.64 -3.59 3.98 -4.05c0.69 -0.92 0.88 -4.27 0.35 -6.06l-0.31 -1.04l8.28 -3.96c4.56 -2.18 8.33 -3.99 8.40 -4.02c0.06 -0.04 -0.52 -1.86 -1.29 -4.06l-1.40 -3.99l4.08 -2.95l4.08 -2.95l-6.81 -5.30c-3.75 -2.92 -8.14 -6.43 -9.77 -7.81c-1.63 -1.38 -4.86 -3.97 -7.18 -5.75c-2.32 -1.78 -4.81 -3.86 -5.52 -4.62c-1.26 -1.34 -2.55 -3.59 -2.55 -4.44c0.00 -0.36 -0.15 -0.36 -1.20 0.03c-1.48 0.55 -2.13 1.64 -2.49 4.17c-0.27 1.91 -0.37 2.04 -3.95 5.65c-2.02 2.03 -3.87 3.70 -4.10 3.70c-0.99 0.00 -7.81 -2.57 -11.36 -4.28c-2.12 -1.02 -4.30 -1.87 -4.86 -1.88c-2.38 -0.07 -3.99 0.13 -8.29 1.03c-2.51 0.52 -4.85 0.95 -5.22 0.95c-0.79 0.00 -3.65 -1.16 -5.69 -2.29c-0.99 -0.56 -1.59 -1.18 -1.89 -1.98c-0.24 -0.64 -0.62 -1.51 -0.83 -1.94c-0.56 -1.09 -4.27 -3.47 -8.42 -5.38l-3.55 -1.64l0.00 -3.68c0.00 -2.68 0.17 -4.01 0.62 -4.90c0.35 -0.68 0.74 -2.64 0.88 -4.43l0.25 -3.21l2.50 -2.65c1.38 -1.46 2.84 -3.28 3.26 -4.05c1.07 -1.98 1.32 -6.38 0.49 -8.90c-1.19 -3.63 -3.92 -7.78 -6.98 -10.61c-1.33 -1.23 -1.85 -3.54 -1.04 -4.63c0.40 -0.54 0.25 -0.94 -1.07 -2.92c-0.84 -1.26 -3.13 -4.15 -5.09 -6.43c-1.96 -2.28 -3.56 -4.31 -3.56 -4.52c0.00 -0.21 1.59 -1.80 3.54 -3.52c5.94 -5.27 6.32 -6.00 7.02 -13.63c0.25 -2.73 0.59 -5.12 0.75 -5.31c0.22 -0.26 0.97 -0.25 3.34 0.05c3.87 0.49 4.05 0.48 9.75 -0.48l4.76 -0.80l-0.28 -1.53c-0.49 -2.68 -0.23 -5.61 0.83 -9.35c0.57 -2.00 1.99 -9.78 3.16 -17.30c1.17 -7.52 2.48 -14.87 2.91 -16.33c0.43 -1.46 0.79 -3.63 0.79 -4.83l0.01 -2.18l-2.56 -2.29c-1.41 -1.26 -2.85 -2.38 -3.21 -2.49c-0.36 -0.11 -2.83 -0.39 -5.49 -0.63l-4.85 -0.43l-1.43 0.68c-3.13 1.49 -13.50 7.97 -24.05 15.05c-2.22 1.49 -4.22 2.66 -4.45 2.60c-0.23 -0.06 -0.70 -1.66 -1.05 -3.57c-0.68 -3.80 -0.84 -4.11 -3.40 -6.50l-1.75 -1.64l0.47 -1.81c0.26 -1.00 0.41 -1.85 0.35 -1.88c-0.06 -0.04 -2.02 -0.27 -4.35 -0.51c-2.33 -0.24 -4.39 -0.55 -4.57 -0.68c-0.19 -0.13 -0.53 -2.96 -0.76 -6.27c-0.51 -7.28 -0.05 -13.40 1.19 -15.97c0.66 -1.37 0.80 -2.34 0.80 -5.70l0.00 -4.05l10.75 -10.28c5.91 -5.66 10.83 -10.28 10.94 -10.28c0.11 0.00 3.00 0.89 6.44 1.99l6.25 1.99l3.73 -0.59c3.11 -0.49 10.47 -1.15 12.93 -1.15c0.59 -0.00 0.60 -0.13 0.10 -1.47c-0.30 -0.81 -0.55 -2.60 -0.55 -3.99l-0.00 -2.52l2.43 -0.98c1.34 -0.54 3.18 -1.21 4.09 -1.50c1.17 -0.37 1.60 -0.65 1.47 -0.96c-1.82 -4.26 -2.24 -5.94 -2.34 -9.37c-0.09 -3.01 -0.28 -4.01 -1.12 -5.87c-1.15 -2.54 -1.80 -5.35 -1.80 -7.81l-0.00 -1.67l3.21 -1.60c1.76 -0.88 4.69 -2.50 6.51 -3.60c2.77 -1.67 6.41 -3.53 9.50 -4.85c0.61 -0.26 2.96 -5.31 2.92 -6.28c-0.01 -0.23 -2.44 -1.92 -5.41 -3.76c-6.18 -3.83 -7.12 -4.77 -9.37 -9.34c-2.43 -4.95 -3.91 -6.68 -7.39 -8.66c-1.78 -1.01 -1.96 -1.05 -5.94 -1.23c-2.26 -0.10 -4.72 -0.38 -5.48 -0.60c-1.03 -0.31 -3.05 -0.41 -8.02 -0.41l-6.65 0.00l-7.28 -1.59c-7.92 -1.73 -7.24 -1.68 -18.65 -1.40c-2.31 0.06 -2.69 -0.04 -7.91 -1.94l-5.48 -2.00l-3.99 1.01l-3.99 1.01l-2.11 -0.63c-1.16 -0.35 -4.21 -0.88 -6.77 -1.18c-2.57 -0.30 -5.46 -0.65 -6.43 -0.77c-0.97 -0.12 -2.28 -0.11 -2.92 0.03c-0.63 0.14 -3.59 0.27 -6.58 0.30l-5.42 0.05l-2.68 -2.37c-6.55 -5.79 -10.24 -8.73 -13.28 -10.58l-3.27 -1.99l-3.56 1.02c-1.98 0.57 -3.70 0.91 -3.86 0.78c-0.17 -0.14 -0.88 -2.43 -1.58 -5.09c-1.25 -4.72 -1.37 -6.52 -0.58 -8.77c0.17 -0.50 -1.02 -1.71 -5.88 -5.99l-6.09 -5.37l-3.56 0.00l-3.56 0.00l-4.34 -5.23c-4.89 -5.91 -5.20 -6.33 -6.14 -8.39c-0.66 -1.45 -0.78 -1.53 -5.93 -4.00c-7.11 -3.41 -6.71 -3.59 3.53 -1.56c10.65 2.10 10.50 2.05 11.85 4.06c1.65 2.44 2.93 3.51 7.12 5.94c3.23 1.88 4.07 2.55 5.81 4.64c2.40 2.88 3.55 3.85 5.47 4.55c1.89 0.70 3.56 2.14 6.36 5.53c1.28 1.55 2.47 2.82 2.64 2.82c0.17 0.00 2.66 -1.13 5.53 -2.53c4.65 -2.26 5.74 -2.66 9.89 -3.61c7.40 -1.70 6.79 -1.73 9.92 0.54l2.69 1.95l3.82 -1.38c2.10 -0.76 4.07 -1.38 4.36 -1.38c0.43 0.00 2.30 1.83 5.73 5.63c0.12 0.14 1.47 0.06 3.04 -0.18c4.77 -0.72 4.40 -0.90 5.88 2.93c0.71 1.84 1.48 3.46 1.72 3.58c0.53 0.29 4.26 0.88 5.52 0.88c0.52 0.00 1.99 -0.38 3.27 -0.84c1.27 -0.46 2.58 -0.84 2.90 -0.84c0.32 0.00 1.70 0.40 3.07 0.88l2.48 0.88l1.78 -0.88c0.98 -0.48 2.11 -0.88 2.53 -0.88c0.41 0.00 2.66 0.58 4.99 1.28c3.23 0.98 5.17 1.37 8.13 1.66c2.14 0.21 4.61 0.46 5.50 0.56l1.61 0.19l0.67 -2.19c1.04 -3.44 2.11 -4.87 4.67 -6.26c3.24 -1.75 6.79 -5.30 10.05 -10.02c1.19 -1.73 1.25 -1.98 1.37 -5.65c0.15 -4.48 -0.09 -4.33 4.39 -2.98c3.22 0.96 4.49 1.03 8.10 0.42c1.37 -0.23 2.71 -0.33 2.96 -0.23c0.34 0.14 7.36 5.89 8.21 6.72c0.06 0.06 1.33 -0.11 2.83 -0.38c1.50 -0.26 2.88 -0.41 3.07 -0.32c0.19 0.09 0.93 1.23 1.63 2.54l1.28 2.38l4.90 0.01c3.91 0.00 5.22 0.11 6.47 0.52c1.63 0.53 4.05 2.06 13.20 8.33c5.40 3.71 5.43 3.73 4.98 4.57c-0.58 1.11 -0.37 1.40 1.45 2.01c1.72 0.57 3.45 0.38 5.76 -0.64c1.66 -0.73 2.03 -0.72 6.12 0.28c1.90 0.46 3.77 0.84 4.16 0.84c0.74 -0.00 10.04 -3.24 10.04 -3.50c0.00 -0.08 -0.53 -0.89 -1.17 -1.80c-0.64 -0.91 -1.17 -1.79 -1.17 -1.95c0.00 -0.16 1.57 -1.18 3.50 -2.27c2.76 -1.56 3.89 -2.43 5.35 -4.11l1.85 -2.13l0.00 -3.63l0.00 -3.63l3.18 -5.44c1.75 -2.99 3.36 -5.48 3.57 -5.53c0.52 -0.12 10.38 2.10 12.11 2.74c0.75 0.27 2.19 1.02 3.20 1.66c1.15 0.73 2.03 1.09 2.33 0.95c1.64 -0.70 8.08 -4.99 8.08 -5.37c-0.00 -0.25 -0.26 -1.14 -0.56 -1.97l-0.56 -1.51l2.49 -2.09c2.06 -1.73 2.53 -2.31 2.72 -3.38c0.78 -4.36 2.31 -7.02 7.18 -12.47l3.13 -3.51l0.00 -3.99c0.00 -4.70 0.13 -5.04 3.73 -9.67c1.41 -1.81 3.09 -4.27 3.73 -5.46c1.59 -2.93 4.15 -11.26 3.46 -11.25c-2.14 0.01 -15.91 -1.25 -16.22 -1.49c-0.23 -0.18 -1.09 -1.52 -1.91 -2.98c-2.50 -4.45 -6.95 -10.93 -9.02 -13.13c-3.81 -4.04 -9.12 -7.05 -17.05 -9.65c-1.81 -0.60 -3.30 -1.25 -3.30 -1.45c-0.00 -0.20 0.97 -1.74 2.16 -3.41c1.70 -2.39 2.47 -3.17 3.60 -3.68c2.57 -1.15 9.86 -3.57 10.74 -3.57c0.47 0.00 2.42 0.40 4.33 0.88c3.22 0.81 3.94 0.89 9.80 1.01c4.38 0.09 6.33 0.22 6.34 0.45c0.01 0.18 0.32 2.20 0.68 4.50c0.75 4.76 0.08 4.07 5.74 5.81l3.14 0.96l1.25 -13.99c0.69 -7.69 1.35 -14.42 1.46 -14.94l0.21 -0.94l5.52 0.16c10.72 0.31 14.03 1.44 18.84 6.44c1.02 1.06 2.55 2.28 3.40 2.72c1.18 0.60 5.62 1.64 18.29 4.27c9.54 1.98 20.33 4.43 25.09 5.70c9.06 2.41 17.51 4.40 19.25 4.56l1.09 0.10l2.76 -5.86l2.76 -5.86l8.17 -2.60c24.91 -7.91 34.36 -10.47 43.07 -11.65c0.75 -0.10 1.37 -0.53 2.14 -1.47c0.91 -1.11 1.08 -1.64 1.08 -3.30c0.00 -1.72 0.14 -2.10 1.05 -2.97c1.15 -1.08 1.88 -2.30 2.83 -4.73c0.69 -1.77 0.45 -1.67 5.59 -2.22l3.26 -0.35l0.70 -1.16c0.38 -0.64 1.01 -1.87 1.39 -2.74c0.66 -1.49 0.66 -1.68 0.03 -3.60c-0.36 -1.11 -0.66 -2.16 -0.65 -2.33c0.01 -0.38 6.59 -0.95 11.06 -0.95l3.25 0.00l0.23 1.74c0.13 0.96 0.42 4.38 0.65 7.61c0.60 8.51 -0.20 7.32 6.66 9.79c19.05 6.84 26.83 11.33 31.43 18.12c2.64 3.91 3.13 5.49 3.34 10.86c0.30 7.89 0.61 8.90 3.65 11.86c3.87 3.77 4.70 5.82 4.71 11.63c0.01 4.22 0.57 6.34 1.92 7.21c0.41 0.27 1.81 0.85 3.11 1.29c1.83 0.62 6.23 2.55 7.40 3.24c0.09 0.05 0.65 2.91 1.25 6.36c0.60 3.44 1.34 6.69 1.64 7.21c0.30 0.52 2.47 2.32 4.81 4.00c4.42 3.17 7.43 6.10 8.80 8.58c0.68 1.23 0.78 1.91 0.65 4.52c-0.30 5.98 -0.14 9.16 0.49 10.21c0.33 0.55 0.73 1.90 0.88 2.99c0.22 1.60 0.65 2.51 2.19 4.66c1.05 1.47 1.91 2.95 1.91 3.30c0.00 1.44 -7.88 10.21 -11.60 12.91c-1.25 0.91 -2.51 1.96 -2.80 2.35c-1.02 1.36 -0.60 3.77 1.41 8.09l1.88 4.05l0.21 4.88l0.21 4.88l1.92 4.09l1.92 4.09l-0.67 6.93c-0.40 4.16 -0.70 11.11 -0.76 17.40l-0.09 10.47l1.21 1.81c0.67 1.00 2.11 2.69 3.21 3.76c1.10 1.07 2.00 2.05 2.00 2.18c0.00 0.13 3.46 0.14 7.68 0.04c8.38 -0.21 16.45 0.17 19.51 0.90c3.58 0.86 6.40 2.37 12.11 6.49c5.93 4.28 10.22 6.90 13.77 8.43c1.17 0.50 2.23 1.17 2.34 1.49c0.12 0.32 0.22 1.52 0.23 2.67c0.01 1.15 0.27 3.29 0.58 4.74c0.31 1.46 0.68 4.10 0.82 5.86l0.26 3.21l3.38 2.28c2.24 1.51 3.79 2.84 4.62 3.95c1.21 1.62 1.24 1.77 1.24 5.20c0.00 3.98 0.00 3.98 -4.17 9.00c-2.62 3.16 -4.90 6.90 -5.94 9.76c-0.69 1.88 -0.79 3.03 -0.79 9.03l0.00 6.88l-3.02 1.92c-5.01 3.19 -8.70 5.79 -9.88 6.93c-0.96 0.94 -1.11 1.34 -1.12 2.93c0.00 2.11 -0.99 3.61 -3.91 5.99c-1.92 1.56 -1.89 1.24 -0.94 8.78c0.56 4.44 0.62 4.57 3.40 8.28c0.66 0.87 0.84 1.61 0.85 3.38c0.02 2.77 -0.55 3.46 -4.90 5.92c-1.71 0.97 -3.21 2.07 -3.58 2.64c-0.82 1.24 -0.84 4.76 -0.06 7.87c0.31 1.23 0.57 2.44 0.57 2.69c0.01 0.75 -9.77 2.56 -24.75 4.58c-4.95 0.67 -10.20 1.41 -11.65 1.66l-2.65 0.44l-3.23 -2.31l-3.23 -2.31l0.00 -7.99l0.00 -7.99l-2.43 -1.22c-11.67 -5.87 -15.14 -11.39 -12.35 -19.60c0.82 -2.41 0.86 -2.82 0.42 -4.25c-0.87 -2.80 -4.97 -5.29 -10.31 -6.26c-1.69 -0.31 -3.12 -0.53 -3.17 -0.49c-0.05 0.04 -1.00 1.04 -2.10 2.23c-3.87 4.16 -9.68 7.22 -20.44 10.78c-20.21 6.68 -22.82 7.97 -27.56 13.69l-1.82 2.19l-10.79 5.67c-11.56 6.07 -14.19 7.76 -18.33 11.78c-4.89 4.75 -6.61 6.88 -14.87 18.43c-6.80 9.50 -10.30 13.89 -12.52 15.70c-1.94 1.59 -6.07 4.04 -14.27 8.48l-6.73 3.64l-2.78 0.00l-2.78 0.00l-2.11 1.53c-1.16 0.84 -2.33 1.53 -2.59 1.53c-0.26 0.00 -3.16 -0.95 -6.44 -2.11c-6.40 -2.26 -8.32 -2.58 -10.23 -1.68l-0.97 0.46l-0.01 36.34c-0.01 28.32 -0.13 37.92 -0.58 43.46c-0.31 3.91 -0.57 7.59 -0.58 8.16c-0.01 0.81 -0.16 1.04 -0.69 1.03c-0.37 -0.01 -3.66 -0.88 -7.29 -1.93l-6.61 -1.92l-2.82 1.99l-2.82 1.99l-1.66 -0.47c-10.83 -3.05 -12.55 -3.27 -15.99 -2.06c-1.16 0.41 -3.55 1.71 -5.32 2.90l-3.22 2.17l0.67 5.86c0.37 3.22 1.01 7.11 1.42 8.65c0.94 3.51 0.94 5.12 -0.01 8.79c-0.67 2.62 -0.82 5.64 -1.39 28.75c-0.56 22.83 -0.72 26.18 -1.39 28.94c-0.49 2.05 -0.75 4.45 -0.75 6.99l0.00 3.86l-2.31 1.64l-2.31 1.64l-4.01 -0.40c-2.20 -0.22 -6.20 -0.39 -8.87 -0.38c-6.26 0.02 -9.05 0.57 -16.64 3.30c-10.08 3.62 -7.00 3.29 -46.50 5.05c-18.88 0.84 -34.73 1.66 -35.22 1.82c-0.49 0.15 -2.86 0.28 -5.26 0.28l-4.37 0.00l-2.88 -4.17l0.00 0.00z"},"path6072":{"name":"Comuna 22","path":"m267.20 654.56c1.90 -0.45 7.31 -0.76 35.31 -1.96c25.93 -1.12 33.78 -1.55 36.38 -1.97c2.31 -0.38 5.36 -1.26 10.12 -2.92c3.88 -1.35 8.15 -2.63 9.92 -2.96c3.83 -0.72 10.71 -0.84 16.27 -0.28l3.82 0.38l1.72 -1.21l1.72 -1.21l0.00 -3.49c0.00 -2.25 0.28 -4.63 0.79 -6.71c0.71 -2.90 0.86 -5.92 1.54 -29.88c0.70 -24.53 0.82 -26.88 1.56 -29.44l0.80 -2.79l-0.95 -3.91c-0.52 -2.15 -1.24 -6.48 -1.59 -9.63l-0.64 -5.72l-2.07 -2.24c-4.76 -5.13 -13.77 -10.46 -26.46 -15.64c-6.21 -2.53 -17.07 -6.30 -30.15 -10.46c-16.68 -5.31 -19.34 -6.35 -23.51 -9.19c-1.94 -1.32 -4.37 -2.82 -5.40 -3.33c-1.72 -0.84 -2.03 -0.90 -3.89 -0.73c-3.26 0.30 -4.83 0.67 -6.09 1.43c-1.02 0.62 -1.18 0.90 -1.18 2.08c0.00 0.82 0.46 2.28 1.16 3.64c0.64 1.25 1.06 2.40 0.93 2.54c-0.13 0.15 -2.16 0.95 -4.52 1.78l-4.29 1.51l-5.38 0.00l-5.38 0.00l-0.64 0.88c-1.42 1.98 0.07 4.40 5.18 8.41c1.99 1.56 5.60 4.48 8.03 6.47c2.42 2.00 7.59 6.11 11.47 9.14c3.89 3.03 7.07 5.61 7.07 5.73c0.00 0.12 -1.90 1.57 -4.23 3.23l-4.23 3.02l1.30 3.67c0.71 2.02 1.30 3.87 1.31 4.12c0.01 0.27 -3.21 1.98 -8.35 4.43c-7.97 3.81 -8.35 4.02 -8.08 4.72c0.45 1.19 0.31 4.55 -0.23 5.68c-0.28 0.57 -2.16 2.65 -4.19 4.60c-4.75 4.59 -7.48 8.60 -10.98 16.12c-6.11 13.14 -8.19 18.74 -7.64 20.53c0.14 0.46 1.12 1.55 2.18 2.43c6.47 5.38 6.92 11.11 1.50 19.27l-1.91 2.88l2.61 3.75l2.61 3.75l2.24 0.00c1.23 0.00 3.25 -0.24 4.48 -0.54z"},"path6070":{"name":"name2","path":"m320.47 595.19c-0.69 -0.50 0.02 -1.28 3.24 -3.58c1.93 -1.38 3.50 -2.70 3.50 -2.95c0.00 -0.64 -1.26 -1.37 -2.36 -1.38c-0.59 -0.00 -1.33 0.34 -1.99 0.91c-0.99 0.86 -1.09 0.88 -1.71 0.44c-0.63 -0.44 -0.62 -0.52 0.05 -1.26c1.09 -1.20 1.77 -1.46 3.82 -1.47c2.53 -0.01 4.15 1.06 4.15 2.76c0.00 1.05 -0.23 1.30 -2.98 3.23l-2.98 2.10l1.98 0.00c1.09 0.00 2.09 -0.13 2.22 -0.28c0.13 -0.15 0.58 -0.28 1.00 -0.28c0.60 0.00 0.76 0.20 0.76 0.98l0.00 0.98l-4.21 0.00c-2.32 0.00 -4.33 -0.08 -4.47 -0.19z"},"path6068":{"name":"name3","path":"m328.38 594.61c0.00 -0.12 -1.49 -0.17 -3.31 -0.12c-1.82 0.05 -3.31 -0.01 -3.31 -0.13c0.00 -0.12 0.57 -0.66 1.26 -1.21l1.26 -0.99l-1.46 0.96c-2.25 1.49 -2.01 1.69 2.04 1.69c1.93 0.00 3.50 -0.09 3.50 -0.21z"},"path6066":{"name":"name4","path":"m328.25 588.33c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path6064":{"name":"name5","path":"m332.14 595.19c-0.69 -0.50 0.02 -1.28 3.24 -3.58c1.93 -1.38 3.50 -2.70 3.50 -2.95c0.00 -0.66 -1.27 -1.37 -2.44 -1.37c-0.68 0.00 -1.28 0.27 -1.84 0.84c-0.46 0.46 -1.06 0.84 -1.35 0.84c-0.76 0.00 -1.05 -0.79 -0.54 -1.47c0.83 -1.11 1.99 -1.58 3.96 -1.59c2.53 -0.01 4.15 1.06 4.15 2.76c0.00 1.05 -0.23 1.30 -2.98 3.23l-2.98 2.10l1.98 0.00c1.09 0.00 2.09 -0.13 2.22 -0.28c0.13 -0.15 0.58 -0.28 1.00 -0.28c0.60 0.00 0.76 0.20 0.76 0.98l0.00 0.98l-4.21 0.00c-2.32 0.00 -4.33 -0.08 -4.47 -0.19z"},"path6062":{"name":"name6","path":"m340.05 594.61c0.00 -0.12 -1.49 -0.17 -3.31 -0.12c-1.82 0.05 -3.31 -0.01 -3.31 -0.13c0.00 -0.12 0.57 -0.66 1.26 -1.21l1.26 -0.99l-1.46 0.96c-2.25 1.49 -2.01 1.69 2.04 1.69c1.93 0.00 3.50 -0.09 3.50 -0.21z"},"path6060":{"name":"name7","path":"m339.92 588.33c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path6058":{"name":"name8","path":"m334.66 587.07c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path6056":{"name":"name9","path":"m271.08 654.65c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path6054":{"name":"name10","path":"m277.12 654.36c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6052":{"name":"name11","path":"m283.35 654.08c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6050":{"name":"name12","path":"m289.57 653.80c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6048":{"name":"name13","path":"m295.80 653.52c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6046":{"name":"name14","path":"m302.02 653.24c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6044":{"name":"name15","path":"m308.25 652.96c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6042":{"name":"name16","path":"m314.47 652.68c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6040":{"name":"name17","path":"m320.70 652.40c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6038":{"name":"name18","path":"m326.92 652.12c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6036":{"name":"name19","path":"m333.15 651.85c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path6034":{"name":"name20","path":"m381.68 644.08c1.16 -0.84 2.03 -1.54 1.92 -1.54c-0.11 0.00 -1.15 0.69 -2.31 1.54c-1.16 0.84 -2.03 1.53 -1.92 1.53c0.11 0.00 1.15 -0.69 2.31 -1.53z"},"path6032":{"name":"name21","path":"m383.52 636.48c-0.09 -0.42 -0.16 -0.14 -0.17 0.62c-0.00 0.77 0.07 1.11 0.16 0.77c0.09 -0.34 0.09 -0.97 0.00 -1.40l0.00 0.00z"},"path6030":{"name":"name22","path":"m260.16 634.38c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path6028":{"name":"name23","path":"m385.08 625.45c-0.09 -0.50 -0.16 -0.09 -0.16 0.91c0.00 1.00 0.07 1.41 0.16 0.91c0.09 -0.50 0.09 -1.32 0.00 -1.81z"},"path6026":{"name":"name24","path":"m254.85 625.69c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path6024":{"name":"name25","path":"m385.46 610.93c-0.09 -0.50 -0.16 -0.09 -0.16 0.91c0.00 1.00 0.07 1.41 0.16 0.91c0.09 -0.50 0.09 -1.32 0.00 -1.81z"},"path6022":{"name":"name26","path":"m385.85 596.42c-0.09 -0.50 -0.16 -0.09 -0.16 0.91c0.00 1.00 0.07 1.41 0.16 0.91c0.09 -0.50 0.09 -1.32 0.00 -1.81z"},"path6020":{"name":"name27","path":"m386.24 581.91c-0.09 -0.50 -0.16 -0.09 -0.16 0.91c0.00 1.00 0.07 1.41 0.16 0.91c0.09 -0.50 0.09 -1.32 0.00 -1.81z"},"path6018":{"name":"name28","path":"m297.63 552.90c-0.10 -0.04 -2.01 1.30 -4.25 2.99l-4.08 3.07l4.25 -2.99c2.34 -1.64 4.17 -3.03 4.08 -3.07z"},"path6016":{"name":"name29","path":"m296.87 552.03c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path6014":{"name":"name30","path":"m389.07 548.01c0.00 -0.21 -0.35 0.01 -1.96 1.24l-1.73 1.33l1.85 -1.24c1.02 -0.68 1.85 -1.28 1.85 -1.33z"},"path6012":{"name":"Comuna 17","path":"m387.57 548.08c4.24 -2.82 7.43 -4.06 10.42 -4.06c2.00 0.00 5.43 0.68 9.76 1.94l3.70 1.07l2.73 -1.93c1.50 -1.06 2.91 -1.92 3.12 -1.92c0.22 0.00 3.19 0.80 6.60 1.79c3.42 0.98 6.29 1.73 6.39 1.66c0.10 -0.07 0.48 -4.11 0.85 -8.97c0.56 -7.41 0.68 -14.45 0.70 -43.37c0.02 -32.64 -0.01 -34.53 -0.66 -34.67c-0.37 -0.08 -2.78 -0.35 -5.35 -0.59c-7.38 -0.70 -8.96 -0.97 -15.37 -2.60c-5.29 -1.35 -6.41 -1.54 -9.14 -1.56c-2.85 -0.02 -3.32 0.06 -5.64 0.95c-2.57 0.99 -7.45 4.22 -10.98 7.26c-0.98 0.84 -1.91 1.44 -2.07 1.33c-0.16 -0.11 0.25 -2.56 0.92 -5.44c0.67 -2.88 1.33 -6.49 1.48 -8.03c0.14 -1.53 0.59 -3.47 0.98 -4.30c0.65 -1.35 0.72 -2.49 0.72 -11.10l0.00 -9.59l3.52 -10.09l3.52 -10.09l-0.69 -2.74l-0.69 -2.74l-3.13 0.00c-2.77 0.00 -3.88 -0.18 -9.54 -1.55c-3.52 -0.85 -15.95 -3.73 -27.61 -6.41c-11.66 -2.67 -23.30 -5.37 -25.85 -5.99c-3.50 -0.85 -5.26 -1.13 -7.12 -1.13l-2.47 0.00l-1.10 1.74c-3.21 5.09 -10.83 20.84 -12.81 26.52l-1.10 3.13l-5.79 0.32c-3.19 0.18 -7.73 0.34 -10.09 0.35l-4.29 0.02l-1.25 1.82c-1.16 1.69 -1.25 2.02 -1.25 4.71c0.00 1.80 0.21 3.32 0.56 4.03c0.31 0.63 0.75 3.00 0.98 5.27c0.23 2.27 0.83 5.45 1.34 7.06c1.22 3.85 1.26 4.05 5.10 23.93l3.30 17.10l4.24 10.63l4.24 10.63l-1.32 2.82c-0.73 1.55 -1.32 2.84 -1.32 2.86c0.00 0.03 0.71 0.38 1.57 0.79c0.87 0.41 3.19 1.85 5.15 3.19c4.24 2.89 6.94 3.95 23.62 9.25c20.06 6.37 32.13 10.91 41.13 15.46c7.23 3.66 13.28 7.87 16.18 11.26c0.69 0.80 1.31 1.46 1.39 1.47c0.08 0.00 1.18 -0.68 2.44 -1.52z"},"path6010":{"name":"name32","path":"m345.18 480.88c0.10 -0.50 0.41 -0.64 1.58 -0.71l1.46 -0.09l0.00 -3.06l0.00 -3.06l-1.56 0.18c-1.42 0.16 -1.56 0.12 -1.56 -0.43c0.00 -0.64 1.29 -1.16 3.79 -1.55l1.26 -0.19l0.00 4.07l0.00 4.07l1.51 0.00c1.48 0.00 2.30 0.53 1.77 1.14c-0.12 0.14 -2.06 0.25 -4.31 0.25c-4.02 0.00 -4.09 -0.01 -3.96 -0.63z"},"path6008":{"name":"name33","path":"m351.04 480.75l-1.65 -0.11l0.00 -3.89c0.00 -3.53 -0.06 -3.89 -0.68 -3.87c-0.41 0.01 -0.49 0.08 -0.19 0.16c0.35 0.10 0.49 1.15 0.49 3.87l0.00 3.73l-1.46 0.11c-0.80 0.06 0.03 0.11 1.85 0.11c1.82 0.00 2.56 -0.05 1.65 -0.11z"},"path6006":{"name":"name34","path":"m360.03 481.09c-0.12 -0.23 0.41 -1.88 1.18 -3.66c0.77 -1.78 1.41 -3.35 1.41 -3.49c0.00 -0.43 -3.89 -0.29 -4.53 0.17c-0.83 0.59 -1.26 0.52 -1.53 -0.26c-0.56 -1.60 -0.32 -1.70 4.12 -1.70l4.08 0.00l0.13 0.79c0.11 0.68 -1.97 6.10 -3.05 7.94c-0.42 0.72 -1.46 0.84 -1.80 0.21z"},"path6004":{"name":"name35","path":"m364.05 473.08c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path6002":{"name":"name36","path":"m292.59 548.68c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path6000":{"name":"name37","path":"m380.51 545.88c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5998":{"name":"name38","path":"m288.31 545.33c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5996":{"name":"name39","path":"m398.90 544.68c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 -0.00z"},"path5994":{"name":"name40","path":"m431.74 542.28c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5992":{"name":"name41","path":"m284.03 541.98c0.00 -0.05 -0.48 -0.40 -1.07 -0.77l-1.07 -0.68l0.94 0.77c0.88 0.72 1.20 0.90 1.20 0.68z"},"path5990":{"name":"name42","path":"m374.68 541.69c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5988":{"name":"name43","path":"m279.36 538.06c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5986":{"name":"name44","path":"m432.13 536.98c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5984":{"name":"Comuna 18","path":"m255.78 533.62c3.02 -3.08 3.08 -3.16 3.38 -5.30c0.40 -2.82 1.17 -3.76 3.93 -4.74c1.48 -0.52 2.32 -1.02 2.63 -1.57c0.43 -0.75 0.63 -0.81 3.41 -0.97c1.62 -0.10 4.33 -0.18 6.01 -0.18c2.86 0.00 3.30 -0.08 6.59 -1.27c2.34 -0.84 3.46 -1.40 3.33 -1.64c-0.92 -1.72 -1.81 -4.33 -1.81 -5.31c0.00 -2.51 2.98 -4.17 8.15 -4.55l2.87 -0.21l1.26 -2.69l1.26 -2.69l-4.20 -10.56l-4.20 -10.56l-3.53 -18.29c-1.94 -10.06 -4.05 -20.05 -4.68 -22.19c-0.63 -2.14 -1.27 -4.87 -1.42 -6.06c-0.23 -1.81 -0.38 -2.15 -0.90 -2.04c-1.39 0.29 -6.87 0.72 -9.24 0.72c-3.52 0.00 -36.55 2.98 -38.46 3.47c-0.86 0.22 -2.96 0.49 -4.67 0.59c-1.71 0.11 -5.18 0.55 -7.71 0.99c-4.87 0.85 -7.68 0.99 -10.13 0.50c-0.82 -0.16 -1.57 -0.24 -1.66 -0.18c-0.09 0.07 -0.34 1.93 -0.55 4.14c-0.48 4.95 -0.96 7.14 -1.90 8.69c-0.78 1.28 -3.48 4.06 -6.62 6.80l-1.94 1.70l2.75 3.16c3.29 3.78 6.46 7.99 6.95 9.22c0.26 0.64 0.20 1.16 -0.21 1.87c-0.73 1.26 -0.44 2.02 1.60 4.11c2.23 2.29 4.51 5.63 5.82 8.53c0.91 2.01 1.08 2.88 1.11 5.72c0.06 4.58 -0.39 5.65 -4.09 9.66l-3.06 3.33l-0.02 2.85c-0.01 1.75 -0.23 3.29 -0.58 3.97c-0.36 0.73 -0.56 2.25 -0.57 4.34l-0.01 3.23l3.82 1.85c4.76 2.31 7.62 4.42 8.25 6.09c0.25 0.68 0.62 1.51 0.80 1.86c0.36 0.65 4.74 2.86 5.68 2.86c0.29 0.00 2.32 -0.38 4.51 -0.85c4.41 -0.94 7.67 -1.27 9.74 -0.99c0.75 0.10 2.83 0.90 4.61 1.78c3.63 1.78 9.16 3.96 10.05 3.95c0.32 -0.00 1.97 -1.41 3.66 -3.13l-0.00 0.00z"},"path5982":{"name":"name46","path":"m255.54 473.83c-2.09 -0.84 -2.84 -2.87 -1.50 -4.08c0.65 -0.59 0.67 -0.74 0.19 -1.21c-0.87 -0.85 -0.67 -2.23 0.46 -3.20c0.88 -0.75 1.26 -0.86 2.94 -0.86c1.59 0.00 2.10 0.13 2.88 0.74c1.12 0.87 1.34 2.87 0.38 3.44c-0.51 0.30 -0.48 0.43 0.19 1.05c2.56 2.34 -1.84 5.61 -5.54 4.11z"},"path5980":{"name":"name47","path":"m259.41 472.05c0.68 -0.64 0.61 -1.07 -0.28 -1.70c-0.89 -0.64 -1.91 -0.72 -2.79 -0.21c-1.11 0.64 -1.15 1.32 -0.12 2.06c1.06 0.76 2.29 0.70 3.19 -0.14z"},"path5978":{"name":"name48","path":"m260.95 471.13c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5976":{"name":"name49","path":"m260.69 470.24c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5974":{"name":"name50","path":"m259.75 468.60c0.74 -0.62 0.74 -0.62 -0.04 -0.16c-0.43 0.26 -1.48 0.52 -2.33 0.58l-1.56 0.11l1.59 0.05c1.22 0.04 1.77 -0.10 2.33 -0.58l-0.00 0.00z"},"path5972":{"name":"name51","path":"m258.77 468.10c1.39 -0.53 0.60 -2.22 -1.04 -2.22c-0.76 0.00 -2.10 0.77 -2.10 1.21c0.00 0.44 1.22 1.30 1.84 1.30c0.30 0.00 0.89 -0.13 1.30 -0.29z"},"path5970":{"name":"name52","path":"m254.73 466.79c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84z"},"path5968":{"name":"name53","path":"m260.30 466.05c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5966":{"name":"name54","path":"m241.76 473.54c-0.33 -0.61 0.20 -0.91 1.81 -1.02l1.36 -0.09l0.11 -3.01l0.11 -3.01l-1.67 0.08c-1.44 0.07 -1.67 0.00 -1.67 -0.48c0.00 -0.43 0.49 -0.68 2.11 -1.06c1.16 -0.28 2.34 -0.44 2.63 -0.36c0.40 0.11 0.52 1.05 0.52 4.06l0.00 3.92l1.58 0.00c1.42 0.00 1.57 0.07 1.46 0.63c-0.12 0.60 -0.31 0.63 -4.12 0.71c-3.37 0.07 -4.03 0.01 -4.23 -0.37z"},"path5964":{"name":"name55","path":"m247.55 473.21c-0.91 -0.06 -2.40 -0.06 -3.31 0.00c-0.91 0.06 -0.17 0.11 1.65 0.11c1.82 0.00 2.56 -0.05 1.65 -0.11z"},"path5962":{"name":"name56","path":"m245.80 465.43c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5960":{"name":"name57","path":"m276.64 535.85c0.00 -0.05 -0.74 -0.58 -1.65 -1.19l-1.65 -1.10l1.54 1.19c1.43 1.10 1.77 1.31 1.77 1.10z"},"path5958":{"name":"name58","path":"m432.52 531.67c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5956":{"name":"name59","path":"m270.80 531.37c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5954":{"name":"name60","path":"m265.79 523.44c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5952":{"name":"name61","path":"m203.76 514.52c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84z"},"path5950":{"name":"name62","path":"m305.04 514.64c0.00 -0.04 -1.18 -0.89 -2.63 -1.88l-2.63 -1.81l2.52 1.88c2.34 1.75 2.73 2.01 2.73 1.81z"},"path5948":{"name":"name63","path":"m212.33 492.46c-0.09 -0.42 -0.16 -0.08 -0.16 0.77c0.00 0.84 0.07 1.19 0.16 0.77c0.09 -0.42 0.09 -1.11 0.00 -1.53z"},"path5946":{"name":"name64","path":"m384.82 462.07l0.94 -0.74l-1.07 0.49c-0.59 0.27 -1.07 0.60 -1.07 0.74c0.00 0.38 0.18 0.31 1.20 -0.49z"},"path5944":{"name":"Comuna 16","path":"m453.87 458.20c-0.37 -1.40 -3.11 -5.20 -5.10 -7.09c-1.04 -0.98 -4.08 -3.43 -6.77 -5.44c-4.81 -3.60 -17.14 -14.98 -17.14 -15.83c0.00 -0.54 10.92 -8.26 15.95 -11.28c2.25 -1.35 9.42 -6.06 15.95 -10.46c6.53 -4.40 13.79 -9.17 16.15 -10.59c7.75 -4.67 15.01 -9.57 21.26 -14.36l6.15 -4.71l-0.67 -0.83c-0.37 -0.46 -3.51 -2.95 -6.99 -5.55c-5.72 -4.26 -9.05 -7.17 -9.05 -7.89c0.00 -0.15 0.90 -1.25 2.00 -2.45c1.70 -1.86 1.94 -2.28 1.60 -2.81c-0.72 -1.11 -6.24 -6.15 -9.41 -8.57l-3.09 -2.37l-1.25 0.34c-4.30 1.16 -10.52 5.13 -19.79 12.62c-2.99 2.42 -7.07 5.38 -9.05 6.59c-1.99 1.21 -8.78 5.84 -15.10 10.30c-6.32 4.46 -13.58 9.46 -16.15 11.10c-2.56 1.65 -6.79 4.42 -9.39 6.16c-2.80 1.87 -5.70 3.53 -7.10 4.06c-2.71 1.03 -2.70 1.01 -1.80 4.37l0.57 2.15l-3.49 10.01l-3.49 10.01l0.00 9.73c0.00 8.97 -0.06 9.86 -0.77 11.34c-0.45 0.95 -0.93 3.06 -1.17 5.14c-0.22 1.94 -0.57 4.28 -0.79 5.20c-0.22 0.92 -0.48 2.05 -0.58 2.51c-0.18 0.77 0.10 0.63 3.31 -1.59c2.58 -1.79 4.29 -2.71 6.50 -3.49c2.76 -0.98 3.23 -1.06 6.12 -1.03c3.21 0.04 3.41 0.07 12.34 2.29c3.54 0.88 6.08 1.28 11.58 1.83l7.04 0.70l1.37 -0.58c1.10 -0.46 1.84 -0.56 3.68 -0.46c1.89 0.10 3.32 0.48 7.87 2.10l5.56 1.98l1.68 -1.16c1.44 -0.99 1.65 -1.27 1.45 -1.99z"},"path5942":{"name":"name66","path":"m468.90 379.08c-1.65 -0.72 -2.41 -2.05 -2.41 -4.20c0.00 -2.11 0.72 -3.23 2.73 -4.25c1.26 -0.64 1.88 -0.77 3.40 -0.70c1.58 0.07 1.87 0.18 1.98 0.71c0.11 0.57 -0.04 0.63 -1.56 0.63c-1.18 0.00 -1.98 0.19 -2.69 0.63c-1.38 0.86 -2.70 2.67 -1.42 1.96c1.72 -0.96 4.47 -0.40 5.48 1.12c0.77 1.16 0.77 1.15 0.24 2.52c-0.28 0.71 -0.82 1.24 -1.65 1.60c-1.57 0.69 -2.47 0.68 -4.08 -0.02l0.00 0.00z"},"path5940":{"name":"name67","path":"m472.65 376.59c0.22 -1.57 -1.41 -2.21 -3.04 -1.21c-1.26 0.77 -1.00 1.90 0.58 2.53c1.12 0.44 2.30 -0.19 2.46 -1.31z"},"path5938":{"name":"name68","path":"m468.01 375.63c0.34 -0.30 0.31 -0.42 -0.15 -0.55c-0.41 -0.11 -0.59 0.01 -0.59 0.39c0.00 0.65 0.14 0.68 0.74 0.16z"},"path5936":{"name":"name69","path":"m467.54 373.73c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5934":{"name":"name70","path":"m469.41 371.55c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5932":{"name":"name71","path":"m454.71 379.18c-0.15 -0.11 -0.27 -0.43 -0.27 -0.71c0.00 -0.41 0.31 -0.51 1.56 -0.51l1.56 0.00l0.00 -3.20l0.00 -3.20l-1.04 0.28c-1.29 0.35 -2.07 0.16 -2.07 -0.52c0.00 -0.38 0.55 -0.64 2.08 -0.99c1.14 -0.26 2.28 -0.47 2.53 -0.47c0.32 0.00 0.45 1.16 0.45 4.05l0.00 4.05l1.58 0.00c1.42 0.00 1.57 0.07 1.46 0.63c-0.12 0.59 -0.32 0.63 -3.84 0.71c-2.04 0.04 -3.84 -0.01 -3.99 -0.12z"},"path5930":{"name":"name72","path":"m460.17 378.60l-1.46 -0.11l0.00 -3.89c0.00 -3.53 -0.06 -3.89 -0.68 -3.87c-0.41 0.01 -0.49 0.08 -0.19 0.16c0.36 0.10 0.49 1.15 0.49 3.87l0.00 3.73l-1.65 0.11c-0.91 0.06 -0.17 0.11 1.65 0.11c1.82 0.00 2.65 -0.05 1.85 -0.11z"},"path5928":{"name":"name73","path":"m390.63 457.59c0.00 -0.21 -0.35 0.01 -1.96 1.24l-1.73 1.33l1.85 -1.24c1.02 -0.68 1.85 -1.28 1.85 -1.33z"},"path5926":{"name":"name74","path":"m433.48 458.69c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5924":{"name":"name75","path":"m196.54 457.86c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5922":{"name":"Comuna 15","path":"m465.26 455.93c5.72 -3.04 11.82 -6.53 14.01 -8.02c3.21 -2.18 6.62 -6.27 14.19 -17.05c8.70 -12.39 14.10 -18.45 20.49 -23.02c1.19 -0.85 7.00 -4.08 12.91 -7.19c10.45 -5.49 10.79 -5.70 12.18 -7.48c1.42 -1.82 4.29 -4.54 5.82 -5.51c3.11 -1.98 8.09 -3.92 21.15 -8.26c4.13 -1.37 9.03 -3.17 10.88 -3.98c3.98 -1.76 9.53 -5.60 11.06 -7.64l1.05 -1.41l-1.68 -1.53c-2.37 -2.17 -2.57 -2.51 -2.57 -4.49c0.00 -1.74 -0.03 -1.78 -2.15 -3.49c-3.15 -2.53 -5.03 -3.10 -11.92 -3.61c-5.53 -0.41 -9.52 -0.33 -10.95 0.22c-0.41 0.16 -1.81 0.90 -3.11 1.66c-2.71 1.56 -5.75 2.48 -8.22 2.48c-1.92 0.00 -3.74 0.89 -7.59 3.74c-1.21 0.89 -2.47 1.57 -2.92 1.57c-0.44 0.00 -2.23 -0.20 -3.99 -0.46l-3.20 -0.46l-2.15 0.75c-1.60 0.56 -3.16 1.54 -6.14 3.85c-10.86 8.43 -13.32 10.03 -18.19 11.80c-2.13 0.78 -3.40 1.60 -7.98 5.18c-5.91 4.62 -13.43 9.74 -21.40 14.57c-2.78 1.69 -10.40 6.66 -16.92 11.05c-6.53 4.39 -13.53 8.98 -15.56 10.20c-3.94 2.36 -15.17 10.16 -15.17 10.54c0.00 0.66 12.38 11.95 16.35 14.91c6.68 4.98 9.80 8.13 11.46 11.54c0.33 0.69 0.68 1.41 0.78 1.60c0.11 0.23 1.00 0.35 2.55 0.35c2.38 0.00 2.38 -0.00 6.92 -2.42z"},"path5920":{"name":"name77","path":"m482.70 424.30c-1.46 -0.32 -2.58 -1.07 -2.58 -1.72c0.00 -0.64 1.36 -0.70 2.20 -0.10c0.71 0.51 3.39 0.55 3.95 0.07c0.84 -0.73 0.96 -1.87 0.28 -2.62c-0.60 -0.66 -0.83 -0.71 -2.28 -0.54c-3.42 0.41 -3.17 0.57 -3.17 -2.08l0.00 -2.37l3.50 0.00c3.24 0.00 3.50 0.04 3.50 0.56c0.00 0.49 -0.32 0.58 -2.53 0.70c-2.49 0.14 -2.53 0.15 -2.65 0.99c-0.11 0.82 -0.07 0.85 1.26 0.74c0.76 -0.06 1.80 -0.04 2.32 0.05c1.31 0.24 2.56 1.80 2.56 3.21c0.00 2.19 -3.28 3.79 -6.36 3.10z"},"path5918":{"name":"name78","path":"m487.16 422.97c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5916":{"name":"name79","path":"m488.15 420.60c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5914":{"name":"name80","path":"m485.66 418.53c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 -0.00z"},"path5912":{"name":"name81","path":"m481.94 416.69c-0.09 -0.35 -0.17 -0.06 -0.17 0.63c0.00 0.69 0.08 0.97 0.17 0.63c0.09 -0.35 0.09 -0.91 0.00 -1.26z"},"path5910":{"name":"name82","path":"m486.05 415.44c-0.70 -0.06 -1.83 -0.06 -2.53 0.00c-0.70 0.06 -0.13 0.11 1.26 0.11c1.39 0.00 1.96 -0.05 1.26 -0.11z"},"path5908":{"name":"name83","path":"m469.10 424.12c-0.15 -0.11 -0.27 -0.43 -0.27 -0.71c0.00 -0.41 0.31 -0.51 1.56 -0.51l1.56 0.00l0.00 -3.20l0.00 -3.20l-1.04 0.28c-1.32 0.36 -2.07 0.16 -2.07 -0.56c0.00 -0.43 0.46 -0.65 2.02 -0.99c3.23 -0.69 3.04 -0.91 3.04 3.62l0.00 4.05l1.58 0.00c1.42 0.00 1.57 0.06 1.46 0.63c-0.12 0.59 -0.32 0.63 -3.84 0.71c-2.04 0.04 -3.84 -0.01 -3.99 -0.12z"},"path5906":{"name":"name84","path":"m474.57 423.53l-1.46 -0.11l0.00 -3.89c0.00 -3.86 -0.01 -3.89 -0.88 -3.86c-0.66 0.02 -0.71 0.06 -0.19 0.16c0.61 0.11 0.68 0.54 0.68 3.86l0.00 3.73l-1.46 0.11c-0.80 0.06 -0.06 0.11 1.65 0.11c1.71 0.00 2.46 -0.05 1.65 -0.11z"},"path5904":{"name":"name85","path":"m448.21 449.31c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5902":{"name":"name86","path":"m480.70 448.02c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5900":{"name":"name87","path":"m444.32 446.26c0.00 -0.05 -0.66 -0.52 -1.46 -1.05l-1.46 -0.96l1.34 1.05c1.25 0.97 1.58 1.17 1.58 0.96z"},"path5898":{"name":"name88","path":"m387.81 430.52c-0.06 -2.73 -0.12 -0.58 -0.12 4.80c-0.00 5.37 0.05 7.61 0.12 4.97c0.06 -2.64 0.06 -7.03 0.00 -9.77z"},"path5896":{"name":"name89","path":"m441.21 444.03c0.00 -0.05 -0.66 -0.52 -1.46 -1.05l-1.46 -0.96l1.34 1.05c1.25 0.97 1.58 1.17 1.58 0.96z"},"path5894":{"name":"name90","path":"m204.54 442.94c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5892":{"name":"name91","path":"m204.93 439.03c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5890":{"name":"name92","path":"m223.26 436.43c-0.12 -0.09 -0.34 0.07 -0.48 0.34c-0.21 0.40 -0.17 0.43 0.22 0.16c0.27 -0.19 0.39 -0.41 0.27 -0.50z"},"path5888":{"name":"Comuna 19","path":"m228.59 435.86c1.97 -0.52 36.79 -3.74 40.54 -3.74c3.08 -0.00 8.26 -0.49 9.07 -0.84c0.42 -0.18 0.37 -0.58 -0.22 -2.14c-0.45 -1.18 -0.78 -3.13 -0.86 -5.12l-0.13 -3.21l1.56 -2.30l1.56 -2.30l2.64 -0.01c1.45 -0.00 5.79 -0.19 9.64 -0.41c3.85 -0.22 7.20 -0.41 7.44 -0.41c0.24 -0.00 0.53 -0.45 0.66 -0.99c0.75 -3.31 8.45 -19.59 12.53 -26.51c5.04 -8.53 19.11 -39.44 22.19 -48.73c0.94 -2.85 1.20 -3.28 2.46 -4.12c3.06 -2.04 4.17 -2.40 7.95 -2.55l3.50 -0.14l2.01 -3.21c1.11 -1.77 3.08 -4.27 4.37 -5.56c3.71 -3.70 5.60 -6.45 5.94 -8.66c0.21 -1.36 0.73 -2.50 1.89 -4.16l1.60 -2.28l-1.14 0.00c-2.35 0.00 -5.14 -0.63 -6.79 -1.53c-2.62 -1.43 -3.07 -1.54 -6.60 -1.54c-2.51 0.00 -3.93 -0.16 -5.83 -0.66c-5.27 -1.37 -13.03 -5.73 -22.32 -12.52l-4.38 -3.20l0.00 -2.52l0.00 -2.52l-2.51 -1.69c-1.38 -0.93 -3.68 -2.15 -5.10 -2.73c-1.83 -0.73 -3.11 -1.52 -4.36 -2.67l-1.77 -1.63l-3.74 0.00c-3.48 0.00 -3.94 0.07 -6.58 0.98c-1.56 0.54 -2.98 0.98 -3.15 0.98c-0.17 0.00 -1.33 -0.44 -2.57 -0.98c-1.76 -0.76 -2.68 -0.98 -4.15 -0.98c-2.30 0.00 -3.51 -0.43 -5.55 -1.96c-1.85 -1.39 -3.47 -1.94 -5.70 -1.94c-1.48 0.00 -1.83 -0.14 -3.52 -1.46c-3.88 -3.01 -4.13 -4.33 -1.68 -8.89l1.37 -2.54l-0.76 -0.77c-1.50 -1.51 -1.55 -1.52 -5.98 -0.59c-6.31 1.32 -5.49 1.78 -8.57 -4.87c-1.82 -3.94 -2.79 -5.66 -3.11 -5.53c-0.25 0.11 -2.01 0.94 -3.91 1.85c-4.58 2.20 -6.52 2.80 -8.34 2.58c-1.19 -0.14 -1.81 -0.00 -3.69 0.82c-1.24 0.54 -2.51 0.98 -2.83 0.98c-0.31 0.00 -2.14 -0.57 -4.06 -1.26c-1.92 -0.69 -3.59 -1.26 -3.71 -1.26c-0.12 0.00 -0.49 0.46 -0.82 1.02c-0.85 1.46 -0.44 2.60 1.24 3.42c1.92 0.94 4.44 3.01 5.73 4.72c0.60 0.79 1.79 2.85 2.65 4.58c2.43 4.89 2.83 5.29 9.31 9.32c4.30 2.67 5.79 3.76 5.80 4.24c0.01 0.57 -2.52 7.31 -2.80 7.44c-0.06 0.03 -1.29 0.52 -2.74 1.09c-1.45 0.57 -4.60 2.20 -7.00 3.62c-2.40 1.42 -5.57 3.19 -7.05 3.94l-2.68 1.36l0.23 2.67c0.14 1.68 0.59 3.51 1.21 4.91c1.25 2.83 1.80 5.60 1.55 7.78c-0.16 1.37 0.07 2.40 1.15 5.29l1.35 3.60l3.05 2.20c1.67 1.21 3.15 2.17 3.29 2.13c0.13 -0.04 1.94 -1.48 4.01 -3.21c2.08 -1.73 4.07 -3.14 4.42 -3.14c0.36 0.00 2.89 0.46 5.62 1.02l4.97 1.02l0.00 2.90l0.00 2.90l-2.48 2.04c-4.63 3.81 -5.21 4.96 -6.62 13.01c-0.83 4.77 -1.27 6.20 -3.50 11.58c-4.11 9.93 -10.84 24.58 -11.52 25.08c-0.39 0.28 -8.90 -1.35 -11.10 -2.13c-0.86 -0.30 -2.71 -1.04 -4.12 -1.64l-2.56 -1.09l-4.72 1.08c-4.60 1.06 -4.78 1.13 -7.17 2.87c-1.78 1.30 -3.51 2.19 -6.33 3.26c-2.14 0.81 -4.49 1.78 -5.21 2.16c-1.23 0.63 -1.66 0.68 -6.10 0.68l-4.78 0.00l-0.45 1.57c-0.45 1.54 -0.43 1.59 0.75 2.72c2.64 2.53 3.10 3.31 3.58 6.09l0.46 2.68l7.04 -4.65c11.04 -7.30 18.93 -12.02 21.05 -12.59c0.43 -0.12 3.23 0.02 6.22 0.30c3.00 0.28 5.64 0.51 5.87 0.52c0.41 0.01 5.33 4.27 6.27 5.43c0.77 0.95 0.57 4.44 -0.48 8.21c-0.54 1.94 -1.85 9.31 -2.92 16.37c-1.17 7.68 -2.44 14.63 -3.16 17.30c-1.00 3.68 -1.18 4.87 -1.00 6.84c0.12 1.31 0.34 2.60 0.48 2.87c0.33 0.61 2.45 0.64 4.66 0.05l0.00 0.00z"},"path5886":{"name":"name94","path":"m295.70 333.73c-0.85 -0.74 -0.18 -1.31 1.31 -1.11c1.94 0.26 3.70 -0.56 4.59 -2.13c0.24 -0.43 0.16 -0.43 -0.88 -0.06c-1.45 0.52 -3.09 0.27 -4.30 -0.65c-0.74 -0.57 -0.92 -1.01 -0.92 -2.24c0.00 -1.38 0.13 -1.62 1.27 -2.35c3.54 -2.27 7.50 0.40 7.00 4.71c-0.19 1.64 -1.03 2.65 -3.02 3.62c-1.51 0.74 -4.31 0.86 -5.06 0.21z"},"path5884":{"name":"name95","path":"m298.13 333.41c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5882":{"name":"name96","path":"m302.81 328.53c-0.20 -0.15 -0.74 0.07 -1.29 0.52c-0.68 0.55 -0.72 0.63 -0.14 0.28c1.10 -0.66 1.32 -0.62 1.39 0.28l0.06 0.77l0.17 -0.80c0.09 -0.44 0.01 -0.91 -0.18 -1.05l0.00 0.00z"},"path5880":{"name":"name97","path":"m301.16 328.27c0.79 -1.06 -0.79 -2.71 -2.28 -2.37c-1.08 0.25 -1.81 1.61 -1.26 2.35c0.93 1.25 2.62 1.26 3.54 0.02z"},"path5878":{"name":"name98","path":"m296.35 327.40c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5876":{"name":"name99","path":"m297.69 325.57c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5874":{"name":"name100","path":"m283.32 333.24c0.10 -0.50 0.41 -0.65 1.58 -0.71l1.46 -0.09l0.00 -3.03l0.00 -3.03l-1.59 0.15c-1.50 0.14 -1.58 0.11 -1.46 -0.50c0.10 -0.51 0.52 -0.74 1.84 -1.01c0.94 -0.19 2.03 -0.43 2.43 -0.52c0.68 -0.16 0.72 0.06 0.72 3.90l0.00 4.07l1.26 0.00c1.60 0.01 2.42 0.37 2.11 0.94c-0.20 0.37 -0.94 0.45 -4.36 0.45c-4.05 0.00 -4.12 -0.01 -4.00 -0.63l0.00 0.00z"},"path5872":{"name":"name101","path":"m279.63 433.30c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84z"},"path5870":{"name":"name102","path":"m267.40 432.76c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5868":{"name":"name103","path":"m271.08 432.78c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5866":{"name":"name104","path":"m436.54 422.14c0.00 -0.20 -0.58 0.20 -5.45 3.76l-5.25 3.84l5.35 -3.76c2.94 -2.07 5.35 -3.80 5.35 -3.84z"},"path5864":{"name":"name105","path":"m278.07 423.81c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5862":{"name":"name106","path":"m278.07 421.45c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5860":{"name":"name107","path":"m439.31 420.46c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5858":{"name":"name108","path":"m442.03 418.78c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5856":{"name":"name109","path":"m625.23 418.64c0.00 -0.04 -1.27 -0.95 -2.82 -2.02l-2.82 -1.95l2.71 2.02c2.52 1.88 2.93 2.15 2.93 1.95z"},"path5854":{"name":"Comuna 21","path":"m633.40 416.81c3.32 -0.48 9.18 -1.31 13.03 -1.85c3.85 -0.54 8.95 -1.37 11.32 -1.85l4.32 -0.86l-0.52 -1.58c-0.94 -2.87 -1.08 -5.60 -0.38 -7.56c0.90 -2.51 1.82 -3.43 4.91 -4.89c3.13 -1.48 3.90 -2.20 4.17 -3.91c0.17 -1.06 -0.08 -1.66 -1.77 -4.25c-2.18 -3.35 -2.55 -4.74 -3.15 -11.91l-0.32 -3.88l2.39 -2.12c3.03 -2.70 3.63 -3.67 3.01 -4.91c-0.33 -0.65 -0.35 -1.13 -0.06 -1.67c0.98 -1.86 6.21 -5.87 12.06 -9.26l2.34 -1.36l0.00 -6.73c0.00 -9.39 0.40 -10.44 7.77 -20.44c2.68 -3.64 3.51 -5.39 3.51 -7.45c0.00 -2.92 -2.25 -5.62 -6.94 -8.34l-2.66 -1.54l-0.26 -3.54c-0.15 -1.95 -0.51 -4.74 -0.81 -6.21c-0.30 -1.47 -0.66 -3.62 -0.81 -4.78l-0.26 -2.10l-4.32 -2.50c-2.38 -1.38 -7.15 -4.41 -10.60 -6.75c-8.01 -5.42 -8.71 -5.81 -11.81 -6.55c-2.37 -0.57 -3.55 -0.63 -15.00 -0.77l-12.43 -0.15l-2.49 -2.51c-1.37 -1.38 -3.04 -3.33 -3.71 -4.33l-1.22 -1.81l0.12 -10.68l0.12 -10.68l-1.35 0.00c-1.17 0.00 -1.54 0.19 -2.77 1.39c-2.27 2.22 -4.63 3.51 -10.01 5.47c-5.72 2.09 -7.69 3.31 -9.13 5.66c-0.53 0.87 -1.26 1.81 -1.62 2.10c-0.82 0.66 -3.48 1.64 -8.43 3.12l-3.89 1.16l-0.12 3.46c-0.11 3.10 0.37 7.12 0.98 8.27c0.26 0.49 1.86 0.39 8.06 -0.51c2.13 -0.31 4.31 -0.48 4.85 -0.38c0.54 0.10 1.70 0.65 2.59 1.24c2.64 1.75 7.08 3.98 12.10 6.10c3.99 1.68 5.41 2.49 9.09 5.14c5.64 4.07 8.79 6.89 10.22 9.14c1.23 1.94 4.50 5.11 9.23 8.93c1.61 1.30 4.14 3.49 5.62 4.86c1.48 1.37 6.94 6.12 12.15 10.56c7.42 6.33 9.42 8.20 9.28 8.68c-0.10 0.33 -0.37 1.38 -0.59 2.32c-0.92 3.88 -1.99 5.35 -18.57 25.57l-16.25 19.81l-5.45 -0.15c-3.00 -0.08 -8.69 -0.47 -12.64 -0.87c-3.96 -0.39 -7.84 -0.78 -8.63 -0.86l-1.43 -0.14l-0.61 1.94c-2.16 6.81 1.05 11.77 11.00 17.03l3.94 2.08l0.00 8.10l0.00 8.10l2.43 1.77c1.95 1.42 2.62 1.75 3.40 1.65c0.53 -0.06 3.69 -0.51 7.00 -0.98l0.00 0.00z"},"path5852":{"name":"name111","path":"m633.79 397.84c0.00 -0.60 0.74 -1.30 3.32 -3.14c3.60 -2.56 4.05 -3.41 2.17 -4.08c-1.22 -0.43 -2.44 -0.10 -3.09 0.85c-0.61 0.89 -1.76 0.87 -1.94 -0.03c-0.18 -0.91 0.51 -1.63 2.09 -2.16c2.92 -0.99 6.01 0.31 6.01 2.53c0.00 1.06 -0.23 1.32 -2.95 3.28l-2.95 2.13l1.96 0.00c1.08 0.00 2.06 -0.13 2.20 -0.28c0.13 -0.15 0.58 -0.28 1.00 -0.28c0.60 0.00 0.76 0.20 0.76 0.98l0.00 0.98l-4.28 0.00l-4.28 0.00l0.00 -0.77z"},"path5850":{"name":"name112","path":"m636.12 396.53c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5848":{"name":"name113","path":"m646.00 398.22c-0.36 -0.67 0.18 -1.00 1.62 -1.00l1.34 0.00l0.00 -3.20l0.00 -3.19l-1.20 0.30c-1.46 0.37 -2.35 -0.06 -1.69 -0.81c0.45 -0.51 2.58 -1.14 3.94 -1.18c0.85 -0.02 0.87 0.05 0.97 3.96l0.11 3.98l1.68 0.09c1.47 0.08 1.66 0.16 1.56 0.70c-0.11 0.58 -0.34 0.62 -4.12 0.69c-3.25 0.06 -4.04 0.00 -4.22 -0.34z"},"path5846":{"name":"name114","path":"m649.84 390.06c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5844":{"name":"name115","path":"m289.76 416.59c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5842":{"name":"name116","path":"m294.82 416.31c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5840":{"name":"name117","path":"m300.26 416.03c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5838":{"name":"name118","path":"m448.02 415.08c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5836":{"name":"name119","path":"m619.68 402.61c-0.07 -2.27 -0.12 -0.49 -0.12 3.96c-0.00 4.45 0.05 6.31 0.12 4.13c0.07 -2.18 0.07 -5.82 0.00 -8.09z"},"path5834":{"name":"name120","path":"m454.63 410.62c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5832":{"name":"name121","path":"m512.06 410.41c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5830":{"name":"name122","path":"m662.07 407.34c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5828":{"name":"name123","path":"m461.24 406.15c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5826":{"name":"name124","path":"m467.86 401.69c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5824":{"name":"name125","path":"m666.47 398.97c0.00 -0.20 -2.19 1.00 -2.76 1.51c-0.30 0.27 0.20 0.07 1.10 -0.45c0.91 -0.52 1.65 -0.99 1.65 -1.05z"},"path5822":{"name":"name126","path":"m471.21 399.53c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5820":{"name":"name127","path":"m391.13 399.53c-0.90 -0.06 -2.48 -0.06 -3.50 -0.00c-1.02 0.06 -0.28 0.11 1.64 0.11c1.93 0.00 2.76 -0.05 1.86 -0.10l0.00 0.00z"},"path5818":{"name":"name128","path":"m393.66 398.86c-0.10 -0.21 -0.27 -0.08 -0.41 0.29c-0.17 0.46 -0.12 0.57 0.17 0.37c0.23 -0.16 0.33 -0.46 0.24 -0.66z"},"path5816":{"name":"Comuna 10","path":"m392.95 397.43c0.24 -0.81 0.60 -3.35 0.79 -5.65c0.50 -5.96 14.23 -88.78 14.94 -90.15c0.50 -0.96 0.88 -4.88 0.48 -4.88c-0.08 0.00 -1.00 0.12 -2.04 0.26c-1.05 0.14 -4.70 0.40 -8.13 0.57c-7.62 0.38 -9.02 0.77 -14.93 4.22c-8.68 5.06 -11.32 6.21 -15.08 6.58c-1.44 0.14 -1.92 0.34 -2.53 1.04c-1.81 2.09 -3.04 4.33 -3.21 5.84c-0.10 0.87 -0.60 2.24 -1.12 3.05c-1.11 1.73 -4.26 5.41 -6.15 7.19c-0.74 0.69 -2.28 2.78 -3.42 4.65l-2.08 3.39l-3.75 0.10l-3.75 0.10l-2.43 1.34c-1.58 0.87 -2.51 1.60 -2.66 2.09c-0.70 2.29 -3.25 8.80 -5.65 14.43c-2.13 4.99 -13.66 30.15 -14.61 31.89c-0.14 0.25 0.38 0.35 1.88 0.34c1.59 -0.00 4.98 0.68 14.52 2.91c6.85 1.60 20.68 4.80 30.74 7.10c10.06 2.30 18.90 4.38 19.65 4.61c0.86 0.27 2.60 0.43 4.73 0.44l3.37 0.01l0.44 -1.47z"},"path5814":{"name":"name130","path":"m380.51 358.91c-1.52 -0.54 -2.72 -2.54 -2.72 -4.52c0.00 -3.34 1.44 -5.02 4.27 -5.02c2.82 0.00 4.29 1.67 4.29 4.86c0.00 2.54 -0.81 4.02 -2.52 4.60c-1.55 0.53 -2.04 0.54 -3.32 0.09z"},"path5812":{"name":"name131","path":"m383.95 356.34c0.61 -1.30 0.40 -3.95 -0.38 -4.84c-0.29 -0.33 -0.92 -0.60 -1.40 -0.60c-2.01 0.00 -3.10 3.16 -1.87 5.46c0.62 1.17 0.77 1.26 1.90 1.18c1.04 -0.07 1.30 -0.25 1.74 -1.20z"},"path5810":{"name":"name132","path":"m378.85 353.48c-0.09 -0.42 -0.16 -0.08 -0.16 0.77c0.00 0.84 0.07 1.19 0.16 0.77c0.09 -0.42 0.09 -1.11 0.00 -1.53z"},"path5808":{"name":"name133","path":"m385.46 353.48c-0.09 -0.42 -0.16 -0.08 -0.16 0.77c0.00 0.84 0.07 1.19 0.16 0.77c0.09 -0.42 0.09 -1.11 0.00 -1.53z"},"path5806":{"name":"name134","path":"m366.27 358.59c-0.36 -0.67 0.18 -1.00 1.62 -1.00l1.34 0.00l0.00 -3.06l0.00 -3.06l-1.46 0.06c-1.23 0.05 -1.46 -0.03 -1.46 -0.49c0.00 -0.42 0.51 -0.69 2.03 -1.08c3.20 -0.83 3.22 -0.80 3.22 3.72l0.00 3.92l1.58 0.00c1.42 0.00 1.57 0.07 1.46 0.63c-0.12 0.60 -0.31 0.63 -4.12 0.71c-3.25 0.06 -4.04 0.00 -4.22 -0.34l0.00 0.00z"},"path5804":{"name":"name135","path":"m372.05 358.23c-0.91 -0.06 -2.40 -0.06 -3.31 0.00c-0.91 0.06 -0.17 0.11 1.65 0.11c1.82 0.00 2.56 -0.05 1.65 -0.11z"},"path5802":{"name":"name136","path":"m370.29 350.45c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5800":{"name":"Comuna 11","path":"m397.63 397.21c1.18 -0.57 4.77 -2.84 7.99 -5.04c3.22 -2.20 7.07 -4.76 8.56 -5.67c1.49 -0.91 7.79 -5.25 13.99 -9.64c6.21 -4.39 12.93 -8.98 14.94 -10.20c2.01 -1.22 6.23 -4.29 9.38 -6.82c9.37 -7.54 14.89 -11.08 19.59 -12.57c1.41 -0.45 1.76 -0.72 2.17 -1.71c0.62 -1.49 4.28 -4.28 8.00 -6.10c3.71 -1.82 7.02 -4.30 7.77 -5.83c0.33 -0.68 0.56 -1.25 0.50 -1.27c-1.39 -0.51 -5.70 -3.19 -8.94 -5.55l-4.19 -3.05l-4.93 1.01c-2.71 0.56 -5.06 0.95 -5.22 0.88c-0.16 -0.07 -0.49 -0.92 -0.72 -1.88c-0.84 -3.40 -0.92 -3.51 -6.06 -7.18l-4.87 -3.48l0.00 -2.43l0.00 -2.43l-3.30 -1.43c-1.81 -0.79 -3.39 -1.54 -3.51 -1.67c-0.12 -0.13 0.05 -1.51 0.38 -3.05c0.83 -3.99 0.89 -3.81 -1.32 -4.34c-1.58 -0.38 -2.12 -0.70 -3.21 -1.91l-1.31 -1.45l-3.11 -0.33c-4.46 -0.47 -8.56 -0.45 -9.92 0.05c-1.84 0.68 -6.00 1.26 -10.03 1.40c-2.08 0.07 -4.93 0.27 -6.35 0.45l-2.58 0.32l-0.26 2.68c-0.14 1.48 -0.52 3.19 -0.83 3.80c-0.66 1.30 -14.57 85.76 -14.57 88.45c0.00 1.67 -0.53 5.31 -1.00 6.82c-0.23 0.74 -0.29 0.75 2.94 -0.81l0.00 -0.00z"},"path5798":{"name":"name138","path":"m422.66 325.89c-0.31 -0.57 0.51 -0.94 2.11 -0.94l1.26 -0.00l0.00 -3.05l0.00 -3.05l-1.65 0.05c-1.39 0.04 -1.65 -0.03 -1.65 -0.48c0.00 -0.39 0.55 -0.66 2.14 -1.04c1.18 -0.28 2.36 -0.45 2.63 -0.39c0.36 0.09 0.49 1.16 0.49 4.02l0.00 3.90l1.46 0.09c1.17 0.07 1.48 0.21 1.58 0.71c0.12 0.62 0.05 0.63 -4.00 0.63c-3.42 0.00 -4.16 -0.08 -4.36 -0.45l0.00 -0.00z"},"path5796":{"name":"name139","path":"m427.41 325.51c-0.13 -0.15 -0.49 -0.20 -0.80 -0.11c-0.80 0.22 -0.71 0.38 0.23 0.38c0.44 0.00 0.70 -0.12 0.57 -0.27z"},"path5794":{"name":"name140","path":"m434.33 325.89c-0.31 -0.57 0.51 -0.94 2.11 -0.94l1.26 -0.00l0.00 -3.05l0.00 -3.05l-1.65 0.05c-1.37 0.04 -1.65 -0.04 -1.65 -0.46c0.00 -0.37 0.61 -0.66 2.26 -1.05c1.24 -0.30 2.42 -0.47 2.63 -0.38c0.21 0.09 0.37 1.89 0.37 4.04l0.00 3.87l1.46 0.09c1.17 0.07 1.48 0.21 1.58 0.71c0.12 0.62 0.05 0.63 -4.00 0.63c-3.42 0.00 -4.17 -0.08 -4.36 -0.45l0.00 -0.00z"},"path5792":{"name":"name141","path":"m439.08 325.51c-0.13 -0.15 -0.49 -0.20 -0.80 -0.11c-0.80 0.22 -0.71 0.38 0.23 0.38c0.44 0.00 0.70 -0.12 0.57 -0.27z"},"path5790":{"name":"name142","path":"m473.55 398.13c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5788":{"name":"name143","path":"m669.41 397.43l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5786":{"name":"name144","path":"m476.03 396.67c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5784":{"name":"name145","path":"m401.33 396.11c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5782":{"name":"name146","path":"m538.13 395.62c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5780":{"name":"name147","path":"m478.94 394.85c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5778":{"name":"name148","path":"m187.54 394.29c0.73 -0.54 1.23 -0.98 1.13 -0.98c-0.11 0.00 -0.79 0.44 -1.51 0.98c-0.73 0.54 -1.23 0.98 -1.13 0.98c0.11 0.00 0.79 -0.44 1.51 -0.98z"},"path5776":{"name":"name149","path":"m612.78 394.89c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5774":{"name":"name150","path":"m671.41 393.39c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5772":{"name":"name151","path":"m483.05 392.13l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5770":{"name":"name152","path":"m394.79 391.43c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5768":{"name":"name153","path":"m408.53 391.22c1.16 -0.84 2.03 -1.53 1.92 -1.53c-0.11 0.00 -1.15 0.69 -2.31 1.53c-1.16 0.84 -2.03 1.53 -1.92 1.53c0.11 0.00 1.15 -0.69 2.31 -1.53z"},"path5766":{"name":"name154","path":"m609.28 392.37c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5764":{"name":"name155","path":"m192.82 390.73l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5762":{"name":"name156","path":"m670.75 391.14c0.00 -0.12 -0.27 -0.47 -0.59 -0.77c-0.55 -0.50 -0.56 -0.49 -0.13 0.23c0.46 0.77 0.72 0.97 0.72 0.54z"},"path5760":{"name":"name157","path":"m197.27 387.87c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5758":{"name":"name158","path":"m413.78 387.73c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5756":{"name":"name159","path":"m489.84 387.59c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5754":{"name":"name160","path":"m604.49 386.01c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5752":{"name":"name161","path":"m200.97 385.50c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5750":{"name":"name162","path":"m604.10 384.18c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84l-0.00 0.00z"},"path5748":{"name":"name163","path":"m419.81 383.97c0.73 -0.54 1.23 -0.98 1.13 -0.98c-0.11 0.00 -0.79 0.44 -1.51 0.98c-0.73 0.54 -1.23 0.98 -1.13 0.98c0.11 0.00 0.79 -0.44 1.51 -0.98z"},"path5746":{"name":"name164","path":"m320.70 384.46c-0.70 -0.06 -1.83 -0.06 -2.53 0.00c-0.70 0.06 -0.13 0.11 1.26 0.11c1.39 0.00 1.96 -0.05 1.26 -0.11z"},"path5744":{"name":"name165","path":"m667.12 383.77c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5742":{"name":"name166","path":"m203.93 383.62c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5740":{"name":"name167","path":"m496.84 382.29c0.73 -0.54 1.23 -0.98 1.13 -0.98c-0.11 0.00 -0.79 0.44 -1.51 0.98c-0.73 0.54 -1.23 0.98 -1.13 0.98c0.11 0.00 0.79 -0.44 1.51 -0.98z"},"path5738":{"name":"name168","path":"m206.66 381.94c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5736":{"name":"name169","path":"m604.09 380.97c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5734":{"name":"name170","path":"m666.74 380.55c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5732":{"name":"name171","path":"m187.25 381.39c-1.34 -0.05 -3.53 -0.05 -4.86 0.00c-1.34 0.05 -0.24 0.10 2.43 0.10c2.67 0.00 3.77 -0.04 2.43 -0.10z"},"path5730":{"name":"name172","path":"m430.70 376.15c3.95 -2.84 7.10 -5.16 7.00 -5.16c-0.11 0.00 -3.43 2.32 -7.38 5.16c-3.95 2.84 -7.10 5.16 -7.00 5.16c0.11 0.00 3.43 -2.32 7.38 -5.16z"},"path5728":{"name":"Comuna 20","path":"m190.72 380.06c0.63 -0.38 2.76 -1.28 4.72 -2.01c2.63 -0.97 4.21 -1.78 5.95 -3.08c2.36 -1.75 2.41 -1.77 7.92 -3.07c4.53 -1.06 5.67 -1.24 6.27 -0.98c4.51 2.02 7.83 3.15 11.28 3.82c2.28 0.45 4.06 0.67 4.26 0.52c0.45 -0.33 3.61 -7.01 7.43 -15.71c5.21 -11.87 6.13 -14.47 6.99 -19.66c0.43 -2.58 0.96 -5.35 1.19 -6.14c0.65 -2.24 2.45 -4.60 5.41 -7.10l2.71 -2.28l0.00 -1.96c0.00 -1.08 -0.04 -1.96 -0.10 -1.96c-0.05 0.00 -1.94 -0.38 -4.18 -0.84c-2.25 -0.46 -4.19 -0.84 -4.33 -0.84c-0.13 0.00 -2.12 1.57 -4.41 3.49c-2.29 1.92 -4.28 3.49 -4.42 3.49c-0.14 0.00 -1.86 -1.14 -3.82 -2.54l-3.56 -2.54l-3.39 1.19c-2.48 0.87 -3.49 1.38 -3.78 1.91c-0.44 0.83 -0.21 2.61 0.73 5.54c0.35 1.11 0.54 2.09 0.42 2.18c-0.13 0.09 -2.91 0.34 -6.20 0.56c-3.28 0.22 -7.35 0.65 -9.05 0.96c-1.69 0.31 -3.40 0.56 -3.79 0.56c-0.39 0.00 -3.27 -0.82 -6.41 -1.81c-3.13 -1.00 -5.76 -1.81 -5.84 -1.81c-0.08 0.00 -4.77 4.43 -10.43 9.84l-10.29 9.84l-0.17 4.47c-0.12 3.15 -0.36 4.92 -0.83 6.00c-0.49 1.14 -0.72 2.95 -0.87 6.98c-0.18 4.97 0.23 12.35 0.70 12.69c0.54 0.39 7.80 0.92 12.92 0.95c5.62 0.03 5.81 0.01 6.93 -0.66z"},"path5726":{"name":"name174","path":"m213.40 356.85c-1.31 -1.01 -1.85 -2.67 -1.63 -4.94c0.29 -2.95 2.28 -4.46 5.21 -3.94c2.15 0.38 3.25 2.01 3.25 4.80c0.00 3.32 -1.37 4.82 -4.38 4.82c-1.11 0.00 -1.73 -0.19 -2.44 -0.74z"},"path5724":{"name":"name175","path":"m216.43 356.85c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5722":{"name":"name176","path":"m217.50 355.29c1.36 -1.60 0.85 -5.16 -0.82 -5.81c-2.21 -0.85 -3.79 2.19 -2.66 5.10c0.68 1.77 2.31 2.10 3.49 0.71z"},"path5720":{"name":"name177","path":"m219.34 351.95c-0.09 -0.50 -0.16 -0.16 -0.16 0.76c-0.00 0.92 0.07 1.33 0.16 0.91c0.09 -0.42 0.09 -1.17 0.00 -1.67l0.00 0.00z"},"path5718":{"name":"name178","path":"m212.72 352.22c-0.09 -0.35 -0.17 -0.13 -0.18 0.49c-0.00 0.61 0.07 0.90 0.17 0.63c0.10 -0.27 0.10 -0.77 0.01 -1.12l0.00 0.00z"},"path5716":{"name":"name179","path":"m214.44 349.01c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5714":{"name":"name180","path":"m199.60 356.66c0.00 -0.45 1.02 -1.37 3.31 -2.99c3.48 -2.46 3.91 -3.13 2.54 -4.02c-0.98 -0.64 -2.51 -0.39 -3.36 0.55c-0.35 0.38 -0.96 0.69 -1.37 0.69c-1.07 0.00 -0.95 -1.27 0.21 -2.09c3.19 -2.29 8.75 -0.09 7.21 2.84c-0.23 0.43 -1.57 1.57 -2.99 2.53l-2.57 1.74l1.83 0.00c1.00 0.00 2.18 -0.16 2.61 -0.35c0.65 -0.29 0.85 -0.28 1.16 0.07c0.20 0.23 0.37 0.70 0.38 1.05c0.01 0.62 -0.09 0.63 -4.47 0.63c-4.44 0.00 -4.47 -0.01 -4.47 -0.66z"},"path5712":{"name":"name181","path":"m202.52 355.08c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5710":{"name":"name182","path":"m204.56 348.49c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5708":{"name":"name183","path":"m501.62 378.15c-0.16 -0.19 -0.32 -0.14 -0.43 0.11c-0.10 0.22 -0.46 0.66 -0.80 0.96c-0.44 0.39 -0.31 0.35 0.43 -0.11c0.58 -0.37 0.94 -0.80 0.80 -0.96z"},"path5706":{"name":"name184","path":"m633.92 378.32c0.10 -0.12 -0.81 -0.17 -2.02 -0.13c-3.80 0.14 -4.26 0.25 -1.15 0.30c1.65 0.02 3.07 -0.05 3.17 -0.17z"},"path5704":{"name":"name185","path":"m625.33 378.06c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 -0.00z"},"path5702":{"name":"name186","path":"m666.35 376.92c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5700":{"name":"name187","path":"m621.83 377.78c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5698":{"name":"name188","path":"m618.71 377.50c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5696":{"name":"Comuna 14","path":"m644.88 363.40c20.56 -25.13 20.45 -24.98 21.73 -28.78c0.97 -2.87 1.04 -3.35 0.56 -3.77c-0.30 -0.26 -2.21 -1.86 -4.25 -3.54c-8.98 -7.46 -25.63 -21.82 -28.64 -24.70c-0.88 -0.84 -1.97 -2.23 -2.41 -3.07c-1.13 -2.15 -3.83 -4.61 -9.69 -8.81c-4.26 -3.06 -5.63 -3.85 -8.78 -5.10c-4.12 -1.63 -8.61 -3.86 -11.96 -5.94c-2.52 -1.56 -2.67 -1.58 -7.92 -0.80c-2.08 0.31 -4.35 0.56 -5.05 0.56l-1.27 0.00l-0.21 17.09c-0.16 12.83 -0.37 18.31 -0.86 21.98l-0.65 4.88l-6.74 9.91c-3.71 5.45 -7.28 10.86 -7.94 12.03c-1.65 2.93 -3.25 6.14 -3.10 6.23c0.07 0.04 2.31 0.23 4.98 0.42c2.67 0.19 5.45 0.53 6.18 0.74c0.73 0.22 2.79 1.42 4.58 2.68l3.26 2.28l0.00 1.99c0.00 1.94 0.05 2.04 1.94 3.97l1.94 1.98l3.02 0.48c3.73 0.59 5.97 1.39 9.00 3.20c2.09 1.25 2.44 1.61 3.14 3.25c0.44 1.01 0.79 2.13 0.79 2.48c0.00 0.57 0.24 0.66 2.04 0.83c1.12 0.10 5.19 0.49 9.05 0.85c9.01 0.86 9.19 0.87 12.64 0.91l2.92 0.03l11.67 -14.26l0.00 -0.00z"},"path5694":{"name":"name190","path":"m609.82 339.89c-0.36 -0.67 0.18 -1.00 1.62 -1.00l1.34 0.00l0.00 -3.06l0.00 -3.06l-1.44 0.06c-1.11 0.05 -1.48 -0.05 -1.59 -0.43c-0.15 -0.52 1.52 -1.17 3.82 -1.50l1.14 -0.16l0.11 4.01l0.11 4.01l1.68 0.09c1.47 0.08 1.66 0.16 1.56 0.70c-0.11 0.58 -0.34 0.62 -4.12 0.69c-3.25 0.06 -4.04 0.00 -4.22 -0.34l0.00 -0.00z"},"path5692":{"name":"name191","path":"m615.60 339.53c-0.91 -0.06 -2.40 -0.06 -3.31 0.00c-0.91 0.06 -0.17 0.11 1.65 0.11c1.82 0.00 2.56 -0.05 1.65 -0.11z"},"path5690":{"name":"name192","path":"m613.84 331.75c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5688":{"name":"name193","path":"m624.61 339.90c-0.31 -0.58 0.13 -1.00 1.03 -1.00c0.50 0.00 0.76 -0.19 0.76 -0.56c0.00 -0.50 -0.26 -0.56 -2.53 -0.56c-2.51 0.00 -2.53 -0.01 -2.50 -0.77c0.01 -0.42 1.03 -1.96 2.25 -3.42c2.00 -2.38 2.35 -2.66 3.48 -2.74l1.25 -0.09l0.00 2.78c0.00 2.21 0.12 2.81 0.58 2.94c0.32 0.09 0.58 0.40 0.58 0.70c0.00 0.30 -0.26 0.61 -0.58 0.70c-0.77 0.21 -0.75 1.02 0.03 1.02c0.41 0.00 0.57 0.21 0.49 0.63c-0.11 0.56 -0.38 0.64 -2.37 0.71c-1.71 0.06 -2.29 -0.02 -2.47 -0.34l-0.00 0.00z"},"path5686":{"name":"name194","path":"m628.24 339.54c-0.37 -0.07 -0.68 -0.28 -0.69 -0.46c0.00 -0.24 -0.08 -0.24 -0.29 -0.01c-0.16 0.17 -0.64 0.38 -1.06 0.46c-0.43 0.08 0.01 0.14 0.97 0.14c0.96 0.00 1.44 -0.06 1.07 -0.13l0.00 -0.00z"},"path5684":{"name":"name195","path":"m627.70 337.37c0.12 -0.23 0.05 -0.48 -0.15 -0.57c-0.20 -0.09 -0.37 0.09 -0.37 0.41c0.00 0.67 0.22 0.74 0.52 0.16z"},"path5682":{"name":"name196","path":"m622.90 337.10c0.00 -0.07 -0.18 -0.20 -0.39 -0.30c-0.21 -0.09 -0.39 -0.04 -0.39 0.12c0.00 0.16 0.18 0.30 0.39 0.30c0.21 0.00 0.39 -0.06 0.39 -0.12z"},"path5680":{"name":"name197","path":"m626.39 334.78l-0.01 -1.60l-1.15 1.40c-0.63 0.77 -1.16 1.49 -1.16 1.60c0.00 0.12 0.52 0.21 1.16 0.21c1.16 0.00 1.17 -0.01 1.16 -1.60l0.00 0.00z"},"path5678":{"name":"name198","path":"m627.56 331.92c0.00 -0.15 -0.31 -0.28 -0.68 -0.27c-0.58 0.00 -0.60 0.04 -0.10 0.27c0.73 0.34 0.78 0.34 0.78 0.00l0.00 0.00z"},"path5676":{"name":"Comuna 13","path":"m504.52 376.54c3.94 -1.62 7.80 -4.10 13.04 -8.39c6.05 -4.95 7.49 -5.92 10.19 -6.82c2.32 -0.78 3.19 -0.81 7.03 -0.24l2.88 0.43l2.84 -2.07c3.65 -2.65 5.02 -3.25 7.51 -3.26c2.42 -0.00 5.07 -0.88 7.98 -2.63c2.34 -1.41 4.92 -2.11 7.76 -2.11l1.78 0.00l0.91 -2.02c1.49 -3.30 5.05 -9.03 11.25 -18.13l5.84 -8.57l0.43 -3.38c0.85 -6.65 1.27 -18.18 1.09 -29.43c-0.16 -9.98 -0.28 -11.66 -0.89 -13.12c-0.55 -1.30 -0.71 -2.66 -0.72 -6.07l-0.02 -4.40l-1.40 0.00c-0.91 0.00 -2.73 0.49 -5.22 1.40c-2.16 0.79 -4.35 1.40 -5.03 1.40c-1.62 0.00 -5.98 -0.89 -9.52 -1.94c-2.36 -0.70 -3.41 -0.85 -5.88 -0.85c-4.57 0.00 -5.34 0.18 -6.51 1.50c-0.56 0.63 -2.56 3.66 -4.46 6.73c-4.17 6.75 -18.46 27.41 -22.98 33.21c-6.33 8.13 -11.27 13.36 -16.20 17.13c-4.94 3.78 -8.80 6.11 -11.74 7.08c-1.05 0.35 -1.91 0.82 -1.92 1.05c-0.02 0.85 -1.53 2.79 -3.15 4.05c-0.92 0.71 -3.97 2.60 -6.78 4.19c-4.76 2.69 -5.73 3.46 -6.49 5.15c-0.11 0.26 1.13 1.40 3.22 2.96c3.15 2.34 8.93 7.62 10.14 9.24c0.56 0.76 0.40 1.05 -2.36 4.18l-1.28 1.45l0.91 0.92c0.50 0.51 3.43 2.80 6.51 5.10c3.08 2.30 6.30 4.84 7.16 5.65c0.86 0.81 1.64 1.48 1.75 1.48c0.11 0.00 1.15 -0.39 2.32 -0.87z"},"path5674":{"name":"name200","path":"m553.74 326.62c-2.88 -0.94 -1.83 -2.13 1.13 -1.28c1.32 0.38 1.82 0.40 2.73 0.13c2.33 -0.69 1.62 -2.57 -1.11 -2.94c-1.07 -0.14 -1.31 -0.29 -1.21 -0.77c0.09 -0.44 0.47 -0.63 1.44 -0.73c0.73 -0.08 1.51 -0.36 1.75 -0.63c1.02 -1.16 -1.61 -2.08 -3.47 -1.21c-1.23 0.58 -2.13 0.56 -2.12 -0.05c0.01 -1.10 1.50 -1.74 4.00 -1.74c2.36 0.00 3.78 0.93 3.78 2.48c0.00 0.61 -0.24 1.28 -0.53 1.49c-0.45 0.32 -0.42 0.48 0.19 1.03c0.89 0.79 0.95 2.46 0.12 3.31c-0.78 0.80 -2.56 1.46 -3.94 1.45c-0.60 -0.00 -1.83 -0.25 -2.74 -0.54l0.00 0.00z"},"path5672":{"name":"name201","path":"m558.42 321.78c0.14 -0.27 -0.12 -0.33 -1.03 -0.23c-1.20 0.13 -1.20 0.14 -0.25 0.34c0.53 0.11 1.00 0.21 1.03 0.23c0.03 0.02 0.14 -0.14 0.25 -0.34z"},"path5670":{"name":"name202","path":"m559.74 319.57c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5668":{"name":"name203","path":"m557.44 318.05c-0.37 -0.07 -0.99 -0.07 -1.36 0.00c-0.37 0.07 -0.07 0.13 0.68 0.13c0.75 0.00 1.06 -0.06 0.68 -0.13z"},"path5666":{"name":"name204","path":"m540.87 326.27c0.10 -0.52 0.41 -0.65 1.59 -0.72l1.46 -0.09l0.00 -3.06l0.00 -3.06l-1.56 0.18c-1.42 0.16 -1.56 0.12 -1.56 -0.43c0.00 -0.64 1.29 -1.16 3.79 -1.55l1.26 -0.19l0.00 4.05l0.00 4.05l1.65 0.09c1.35 0.07 1.65 0.19 1.65 0.64c0.00 0.52 -0.30 0.56 -4.21 0.64c-4.19 0.08 -4.21 0.08 -4.09 -0.56z"},"path5664":{"name":"name205","path":"m546.74 326.13c-0.91 -0.06 -2.40 -0.06 -3.31 0.00c-0.91 0.06 -0.17 0.11 1.65 0.11c1.82 0.00 2.56 -0.05 1.65 -0.11z"},"path5662":{"name":"name206","path":"m545.08 318.52c0.00 -0.15 -0.31 -0.28 -0.68 -0.27c-0.58 0.00 -0.60 0.04 -0.10 0.27c0.73 0.34 0.78 0.34 0.78 0.00l0.00 0.00z"},"path5660":{"name":"name207","path":"m615.99 377.22c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5658":{"name":"name208","path":"m169.51 376.22c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5656":{"name":"name209","path":"m613.27 376.94c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5654":{"name":"name210","path":"m201.21 376.36c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5652":{"name":"name211","path":"m610.15 376.66c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5650":{"name":"name212","path":"m606.48 376.38c-0.36 -0.07 -0.73 -0.40 -0.82 -0.74c-0.14 -0.50 -0.17 -0.48 -0.22 0.16c-0.04 0.63 0.10 0.76 0.82 0.74c0.62 -0.02 0.68 -0.07 0.22 -0.16z"},"path5648":{"name":"name213","path":"m498.40 375.10c0.00 -0.04 -1.79 -1.33 -3.99 -2.86l-3.99 -2.79l3.88 2.86c3.61 2.66 4.09 2.99 4.09 2.79z"},"path5646":{"name":"name214","path":"m667.05 373.78c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5644":{"name":"name215","path":"m513.96 372.24c1.38 -1.00 2.42 -1.81 2.31 -1.81c-0.11 0.00 -1.32 0.82 -2.70 1.81c-1.38 1.00 -2.42 1.81 -2.31 1.81c0.11 0.00 1.32 -0.82 2.70 -1.81z"},"path5642":{"name":"name216","path":"m584.57 372.11c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5640":{"name":"name217","path":"m669.24 371.90c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5638":{"name":"name218","path":"m602.28 370.06c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5636":{"name":"name219","path":"m441.40 368.76c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5634":{"name":"name220","path":"m518.29 368.83c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5632":{"name":"name221","path":"m671.80 367.71c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84l-0.00 0.00z"},"path5630":{"name":"name222","path":"m488.28 367.53c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5628":{"name":"name223","path":"m444.51 366.80c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5626":{"name":"name224","path":"m520.62 366.87c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5624":{"name":"name225","path":"m671.68 365.83c0.19 -0.61 0.15 -0.72 -0.13 -0.42c-0.22 0.23 -0.40 0.66 -0.40 0.95c-0.01 0.71 0.21 0.49 0.53 -0.53z"},"path5622":{"name":"name226","path":"m447.82 364.71c0.73 -0.54 1.23 -0.98 1.13 -0.98c-0.11 0.00 -0.79 0.44 -1.51 0.98c-0.73 0.54 -1.23 0.98 -1.13 0.98c0.11 0.00 0.79 -0.44 1.51 -0.98z"},"path5620":{"name":"name227","path":"m523.49 364.57c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5618":{"name":"name228","path":"m673.91 363.24c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5616":{"name":"name229","path":"m539.85 361.15l1.54 -1.19l-1.56 1.02c-0.86 0.56 -1.91 1.08 -2.33 1.15c-0.76 0.13 -0.76 0.13 0.02 0.17c0.47 0.02 1.42 -0.45 2.33 -1.15l-0.00 0.00z"},"path5614":{"name":"name230","path":"m451.91 361.50c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5612":{"name":"name231","path":"m531.56 361.31c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5610":{"name":"name232","path":"m454.82 359.13c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5608":{"name":"name233","path":"m679.92 358.92l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5606":{"name":"name234","path":"m543.36 358.64l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5604":{"name":"name235","path":"m683.00 357.03c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5602":{"name":"name236","path":"m458.71 356.06c0.73 -0.54 1.23 -0.98 1.13 -0.98c-0.11 0.00 -0.79 0.44 -1.51 0.98c-0.73 0.54 -1.23 0.98 -1.13 0.98c0.11 0.00 0.79 -0.44 1.51 -0.98z"},"path5600":{"name":"name237","path":"m549.07 356.85c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5598":{"name":"name238","path":"m582.82 355.78c-0.95 -0.69 -1.81 -1.26 -1.91 -1.26c-0.11 0.00 0.58 0.57 1.52 1.26c0.95 0.69 1.81 1.26 1.91 1.26c0.11 0.00 -0.58 -0.57 -1.52 -1.26z"},"path5596":{"name":"name239","path":"m556.03 354.59c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5594":{"name":"name240","path":"m685.82 344.96c-0.07 -1.88 -0.12 -0.34 -0.12 3.42c0.00 3.76 0.05 5.30 0.12 3.42c0.07 -1.88 0.07 -4.96 0.00 -6.84z"},"path5592":{"name":"name241","path":"m464.16 352.15c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5590":{"name":"name242","path":"m482.45 352.75c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5588":{"name":"name243","path":"m573.77 352.68c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5586":{"name":"name244","path":"m569.88 352.40c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5584":{"name":"name245","path":"m466.93 350.41c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5582":{"name":"name246","path":"m476.57 348.16c-0.94 -0.74 -1.79 -1.30 -1.88 -1.25c-0.18 0.09 3.12 2.59 3.42 2.59c0.09 0.00 -0.60 -0.60 -1.54 -1.34z"},"path5580":{"name":"name247","path":"m477.61 343.29l1.14 -0.91l-1.26 0.82c-0.70 0.45 -1.26 0.86 -1.26 0.91c0.00 0.22 0.32 0.03 1.39 -0.82z"},"path5578":{"name":"name248","path":"m480.94 341.20c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5576":{"name":"name249","path":"m485.75 338.61c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5574":{"name":"name250","path":"m667.96 334.29c0.00 -0.31 -0.25 0.07 -0.55 0.84c-0.30 0.77 -0.53 1.52 -0.51 1.67c0.06 0.47 1.06 -1.92 1.05 -2.51z"},"path5572":{"name":"name251","path":"m668.29 332.98c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5570":{"name":"name252","path":"m491.66 332.14c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5568":{"name":"name253","path":"m216.62 331.47c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5566":{"name":"name254","path":"m221.29 331.19c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5564":{"name":"Comuna 12","path":"m495.54 329.63c3.82 -1.82 10.42 -6.52 14.03 -9.99c6.49 -6.24 16.88 -19.88 26.49 -34.75c2.78 -4.30 6.20 -9.56 7.62 -11.69c1.41 -2.13 2.57 -3.92 2.57 -3.98c0.00 -0.06 -0.76 -0.10 -1.69 -0.10c-1.63 0.00 -1.76 0.07 -3.32 1.66c-2.18 2.23 -2.85 2.56 -7.17 3.52l-3.71 0.82l-1.29 1.91c-0.71 1.05 -1.55 2.01 -1.88 2.13c-0.56 0.21 -10.25 2.24 -10.69 2.24c-0.37 0.00 -0.23 -2.24 0.37 -5.84c0.31 -1.91 0.53 -3.50 0.48 -3.53c-0.28 -0.18 -6.77 -1.54 -8.03 -1.68c-1.15 -0.13 -13.17 0.61 -13.54 0.83c-0.04 0.03 0.52 1.74 1.25 3.81c0.84 2.38 1.19 3.86 0.95 4.03c-0.20 0.15 -7.24 2.28 -15.63 4.75l-15.26 4.48l-1.49 1.53c-1.49 1.54 -1.94 1.78 -3.84 2.07c-0.58 0.09 -2.95 1.48 -5.49 3.22l-4.47 3.06l-0.48 2.59c-0.26 1.43 -0.56 2.86 -0.67 3.18c-0.16 0.49 0.38 0.83 3.34 2.08l3.53 1.50l0.00 2.50l0.00 2.50l4.82 3.52l4.82 3.52l0.68 2.22c0.37 1.22 0.73 2.26 0.78 2.31c0.06 0.05 1.94 -0.30 4.19 -0.77c2.25 -0.47 4.40 -0.85 4.79 -0.85c0.38 0.00 2.55 1.36 4.80 3.02c4.44 3.27 8.39 5.63 9.42 5.63c0.36 0.00 2.02 -0.65 3.70 -1.45z"},"path5562":{"name":"Comuna 12","path":"m483.71 306.89c-0.69 -0.20 -0.60 -1.12 0.13 -1.32c0.34 -0.09 1.04 -0.17 1.56 -0.17c0.94 0.00 0.94 -0.01 0.94 -3.01l0.00 -3.01l-1.56 0.11c-1.35 0.09 -1.56 0.03 -1.56 -0.45c0.00 -0.42 0.46 -0.67 1.82 -1.01c3.37 -0.82 3.24 -0.97 3.24 3.46l0.00 3.91l1.14 0.00c2.28 0.00 3.19 0.78 1.61 1.39c-0.75 0.29 -6.40 0.37 -7.32 0.10z"},"path5560":{"name":"name257","path":"m494.78 306.90c-0.87 -0.63 -0.10 -1.59 3.03 -3.76c3.59 -2.49 4.03 -3.24 2.35 -4.03c-1.16 -0.55 -2.34 -0.33 -3.19 0.60c-0.77 0.85 -2.08 0.91 -2.08 0.10c0.00 -1.31 1.94 -2.49 4.09 -2.49c1.31 0.00 3.18 0.70 3.68 1.38c0.22 0.30 0.40 1.02 0.40 1.61c0.00 0.96 -0.30 1.29 -2.80 3.09l-2.80 2.02l1.94 0.00c1.07 0.00 2.15 -0.15 2.41 -0.33c0.69 -0.49 1.33 0.09 1.18 1.07l-0.13 0.80l-3.91 0.08c-2.15 0.04 -4.03 -0.01 -4.18 -0.12z"},"path5558":{"name":"name258","path":"m498.01 304.15c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5556":{"name":"name259","path":"m487.50 329.86c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5554":{"name":"name260","path":"m498.06 329.47c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.65 0.36 -0.85 0.59 -0.53 0.59c0.08 0.00 0.39 -0.22 0.68 -0.49z"},"path5552":{"name":"name261","path":"m667.64 329.86c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5550":{"name":"name262","path":"m500.34 328.15c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5548":{"name":"name263","path":"m252.18 327.80c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5546":{"name":"name264","path":"m665.30 327.90c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5544":{"name":"name265","path":"m663.36 326.24c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5542":{"name":"name266","path":"m255.04 325.50c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5540":{"name":"name267","path":"m696.79 323.26c0.00 -0.23 -0.35 0.21 -0.77 0.98c-0.42 0.77 -0.75 1.46 -0.73 1.53c0.07 0.30 1.50 -2.12 1.50 -2.51z"},"path5538":{"name":"name268","path":"m238.17 324.45c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5536":{"name":"name269","path":"m506.01 324.03l1.14 -0.91l-1.26 0.82c-1.18 0.76 -1.44 0.99 -1.14 0.99c0.07 0.00 0.64 -0.41 1.26 -0.91z"},"path5534":{"name":"name270","path":"m661.02 324.28c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5532":{"name":"name271","path":"m240.26 322.71c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5530":{"name":"name272","path":"m584.65 321.94c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84l-0.00 0.00z"},"path5528":{"name":"name273","path":"m659.08 322.61c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5526":{"name":"name274","path":"m509.29 321.45c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5524":{"name":"name275","path":"m697.08 321.54c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5522":{"name":"name276","path":"m242.59 320.75c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5520":{"name":"name277","path":"m656.74 320.66c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5518":{"name":"name278","path":"m585.04 318.87c-0.10 -0.27 -0.18 -0.05 -0.18 0.49c0.00 0.54 0.08 0.76 0.18 0.49c0.10 -0.27 0.10 -0.71 0.00 -0.98z"},"path5516":{"name":"name279","path":"m697.08 319.03c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5514":{"name":"name280","path":"m244.93 318.80c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5512":{"name":"name281","path":"m465.72 319.25c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5510":{"name":"name282","path":"m654.80 318.98c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5508":{"name":"name283","path":"m463.38 317.61c0.00 -0.04 -1.18 -0.89 -2.63 -1.88l-2.63 -1.81l2.52 1.88c2.34 1.75 2.73 2.01 2.73 1.81z"},"path5506":{"name":"name284","path":"m652.85 317.31c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5504":{"name":"name285","path":"m585.43 315.38c-0.09 -0.35 -0.17 -0.06 -0.17 0.63c0.00 0.69 0.08 0.97 0.17 0.63c0.09 -0.35 0.09 -0.91 0.00 -1.26z"},"path5502":{"name":"name286","path":"m650.91 315.63c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5500":{"name":"name287","path":"m645.88 311.19c-1.91 -1.73 -4.05 -3.52 -4.76 -3.98c-1.01 -0.65 -1.12 -0.68 -0.49 -0.14c0.44 0.38 2.51 2.17 4.60 3.98c2.09 1.80 3.87 3.28 3.96 3.28c0.09 0.00 -1.40 -1.41 -3.30 -3.14z"},"path5498":{"name":"name288","path":"m692.54 313.08c-0.94 -0.69 -1.81 -1.26 -1.91 -1.26c-0.11 0.00 0.58 0.57 1.52 1.26c0.95 0.69 1.81 1.26 1.91 1.26c0.11 0.00 -0.58 -0.57 -1.52 -1.26z"},"path5496":{"name":"name289","path":"m585.83 310.07c-0.08 -0.65 -0.15 -0.05 -0.15 1.33c0.00 1.38 0.07 1.91 0.15 1.18c0.08 -0.73 0.08 -1.86 0.00 -2.51l-0.00 0.00z"},"path5494":{"name":"name290","path":"m456.66 308.95c-0.08 -0.65 -0.15 -0.05 -0.15 1.33c0.00 1.38 0.07 1.91 0.15 1.18c0.08 -0.73 0.08 -1.86 0.00 -2.51l-0.00 0.00z"},"path5492":{"name":"name291","path":"m227.49 311.21c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5490":{"name":"name292","path":"m363.68 307.75c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5488":{"name":"Comuna 9","path":"m371.30 306.51c2.45 -0.66 5.37 -2.08 9.99 -4.85c7.25 -4.36 8.61 -4.84 14.71 -5.20c7.37 -0.44 11.63 -0.80 12.66 -1.08c1.55 -0.42 2.34 -3.43 2.02 -7.69c-0.34 -4.63 2.41 -25.61 3.70 -28.19c0.69 -1.39 0.84 -2.32 0.87 -5.44c0.02 -2.07 -0.19 -4.77 -0.45 -6.00c-0.81 -3.78 -3.59 -11.61 -4.18 -11.77c-1.28 -0.35 -28.50 5.83 -36.31 8.25c-1.98 0.61 -3.64 1.15 -3.70 1.20c-0.06 0.05 1.47 5.96 3.40 13.15c1.93 7.18 3.40 13.13 3.28 13.22c-0.13 0.09 -2.68 -0.13 -5.67 -0.49l-5.44 -0.65l-4.60 0.64c-2.53 0.35 -10.85 1.98 -18.50 3.63l-13.90 2.99l-4.68 2.87l-4.68 2.87l0.00 2.31l0.00 2.31l6.52 4.58c11.78 8.28 19.38 11.61 25.19 11.03c2.18 -0.21 4.20 0.22 5.86 1.26c1.97 1.24 3.76 1.60 8.04 1.61c2.87 0.01 4.28 -0.12 5.88 -0.55z"},"path5486":{"name":"name294","path":"m385.47 283.73c-0.41 -0.08 -0.68 -0.41 -0.68 -0.81c0.00 -0.62 0.15 -0.68 1.90 -0.68c1.69 0.00 2.04 -0.11 3.11 -0.99c1.39 -1.14 1.59 -1.69 0.45 -1.26c-2.05 0.79 -4.67 -0.06 -5.46 -1.78c-1.20 -2.61 1.90 -4.95 5.22 -3.96c1.91 0.57 2.92 2.18 2.93 4.66c0.01 2.09 -0.86 3.34 -2.91 4.19c-1.28 0.53 -3.51 0.83 -4.57 0.62z"},"path5484":{"name":"name295","path":"m392.01 278.11c-0.13 -0.09 -0.44 -0.02 -0.69 0.17c-0.35 0.25 -0.35 0.33 0.01 0.33c0.26 0.00 0.49 0.35 0.53 0.77c0.05 0.66 0.08 0.64 0.22 -0.17c0.09 -0.51 0.06 -1.01 -0.07 -1.10l-0.00 0.00z"},"path5482":{"name":"name296","path":"m388.78 279.54c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5480":{"name":"name297","path":"m389.85 278.33c0.93 -0.67 0.99 -1.34 0.17 -2.17c-0.70 -0.72 -2.19 -0.81 -2.91 -0.19c-0.71 0.61 -0.55 2.14 0.26 2.56c0.95 0.50 1.57 0.45 2.48 -0.20z"},"path5478":{"name":"name298","path":"m639.62 305.87c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5476":{"name":"name299","path":"m636.69 303.31c-0.79 -0.69 -1.53 -1.26 -1.64 -1.26c-0.20 0.00 0.31 0.47 2.01 1.88c1.38 1.14 1.09 0.65 -0.37 -0.63z"},"path5474":{"name":"name300","path":"m686.96 303.38c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5472":{"name":"name301","path":"m586.23 289.01c-0.06 -2.72 -0.12 -0.50 -0.12 4.95c0.00 5.45 0.05 7.68 0.12 4.95c0.06 -2.72 0.06 -7.18 0.00 -9.91z"},"path5470":{"name":"name302","path":"m382.51 301.84c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5468":{"name":"name303","path":"m333.05 298.60c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5466":{"name":"name304","path":"m454.44 295.43l2.91 -2.16l-3.02 2.09c-2.80 1.94 -3.19 2.24 -2.91 2.24c0.06 0.00 1.42 -0.97 3.02 -2.16z"},"path5464":{"name":"name305","path":"m685.79 296.68c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5462":{"name":"name306","path":"m224.78 295.43c-0.09 -0.42 -0.16 -0.14 -0.17 0.62c-0.00 0.77 0.07 1.11 0.16 0.77c0.09 -0.34 0.09 -0.97 0.00 -1.40l0.00 0.00z"},"path5460":{"name":"name307","path":"m400.06 296.85c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5458":{"name":"Comuna 8","path":"m453.67 294.92c3.85 -2.79 6.63 -4.31 7.88 -4.31c0.79 0.00 1.36 -0.37 2.70 -1.74l1.69 -1.74l14.93 -4.39c8.21 -2.42 15.01 -4.45 15.12 -4.53c0.10 -0.07 -0.36 -1.70 -1.03 -3.62c-1.11 -3.17 -1.45 -4.62 -1.09 -4.62c0.07 0.00 3.29 -0.25 7.15 -0.56c5.41 -0.43 7.50 -0.49 9.11 -0.28c2.56 0.35 9.29 1.93 9.28 2.18c0.00 0.10 -0.26 1.76 -0.58 3.67c-0.32 1.92 -0.58 3.76 -0.58 4.10l0.00 0.61l2.63 -0.54c1.44 -0.30 3.24 -0.66 4.00 -0.81c1.19 -0.23 1.55 -0.53 2.76 -2.29l1.39 -2.02l4.24 -0.99l4.24 -0.99l2.10 -2.02l2.10 -2.02l2.56 -0.00c1.41 -0.00 2.76 -0.10 2.99 -0.21c0.24 -0.11 0.89 -0.74 1.46 -1.39c0.75 -0.86 1.29 -1.19 1.97 -1.19c1.86 0.00 2.17 -0.25 2.17 -1.79c0.00 -3.18 1.83 -6.49 4.84 -8.77c1.66 -1.25 2.70 -2.61 6.66 -8.65c4.67 -7.13 4.69 -7.17 3.75 -7.36c-1.99 -0.41 -10.60 -1.31 -15.26 -1.60c-2.67 -0.17 -5.39 -0.41 -6.03 -0.53c-0.71 -0.14 -2.09 -0.08 -3.50 0.13c-3.31 0.51 -7.61 0.46 -11.69 -0.15c-3.20 -0.47 -3.77 -0.49 -6.22 -0.13c-1.49 0.22 -5.52 0.47 -8.96 0.56c-6.14 0.16 -6.34 0.15 -11.09 -0.73c-4.11 -0.76 -6.11 -0.96 -13.39 -1.28c-7.20 -0.32 -23.00 -1.39 -28.84 -1.95l-1.61 -0.16l-2.72 -3.83c-2.14 -3.01 -2.78 -4.20 -3.00 -5.57l-0.28 -1.74l-1.90 0.00c-1.18 0.00 -3.96 0.47 -7.34 1.25c-10.66 2.45 -24.24 5.26 -31.05 6.42l-2.82 0.48l0.00 2.43c0.00 1.95 0.34 3.39 1.72 7.30c2.44 6.92 3.05 10.07 2.88 14.86c-0.11 3.10 -0.33 4.39 -1.01 5.92c-1.24 2.82 -3.77 22.40 -3.47 26.87c0.20 2.93 -0.13 6.01 -0.75 7.18c-0.23 0.43 -0.11 0.48 0.87 0.32c0.62 -0.10 3.64 -0.30 6.71 -0.45c4.51 -0.22 6.22 -0.44 8.99 -1.12c1.88 -0.46 4.19 -0.84 5.14 -0.84c2.60 0.00 10.94 0.79 11.19 1.06c0.12 0.13 0.75 0.82 1.39 1.54c1.03 1.15 2.67 1.92 4.48 2.12c0.11 0.01 1.51 -0.93 3.11 -2.09l-0.00 -0.00z"},"path5456":{"name":"name309","path":"m453.56 263.12c-2.12 -0.85 -2.86 -3.37 -1.27 -4.32c0.50 -0.29 0.49 -0.41 -0.01 -0.93c-0.93 -0.96 -0.73 -2.42 0.47 -3.31c0.86 -0.65 1.37 -0.78 2.94 -0.78c1.55 0.00 2.07 0.14 2.85 0.74c1.12 0.87 1.34 2.87 0.38 3.44c-0.51 0.30 -0.48 0.43 0.19 1.05c2.54 2.32 -1.87 5.59 -5.54 4.11l-0.00 0.00z"},"path5454":{"name":"name310","path":"m456.91 261.57c0.56 -0.32 1.03 -0.76 1.03 -0.98c0.00 -0.58 -1.43 -1.51 -2.33 -1.51c-0.82 0.00 -2.33 0.91 -2.33 1.41c0.00 0.36 1.78 1.66 2.26 1.66c0.19 0.00 0.82 -0.26 1.38 -0.58z"},"path5452":{"name":"name311","path":"m458.98 260.42c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5450":{"name":"name312","path":"m458.71 259.53c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5448":{"name":"name313","path":"m456.48 258.32c-0.48 -0.07 -1.27 -0.07 -1.75 0.00c-0.48 0.07 -0.09 0.12 0.88 0.12c0.96 0.00 1.36 -0.05 0.88 -0.12z"},"path5446":{"name":"name314","path":"m456.87 257.29c0.82 -0.45 0.88 -1.18 0.13 -1.72c-1.13 -0.81 -3.33 -0.24 -3.33 0.88c0.00 0.54 1.08 1.22 1.95 1.22c0.32 0.00 0.89 -0.17 1.26 -0.37z"},"path5444":{"name":"name315","path":"m452.76 256.08c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84l-0.00 0.00z"},"path5442":{"name":"name316","path":"m453.71 254.96c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5440":{"name":"name317","path":"m458.32 255.34c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5438":{"name":"name318","path":"m628.73 294.41c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5436":{"name":"name319","path":"m685.53 293.18c0.00 -0.12 -0.57 -0.44 -1.26 -0.72l-1.26 -0.50l1.09 0.72c1.15 0.76 1.44 0.86 1.44 0.50z"},"path5434":{"name":"name320","path":"m435.08 292.94c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5432":{"name":"name321","path":"m626.01 292.21c0.00 -0.04 -1.53 -1.14 -3.40 -2.44l-3.40 -2.37l3.30 2.44c3.06 2.27 3.51 2.57 3.51 2.37z"},"path5430":{"name":"name322","path":"m679.31 289.95c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5428":{"name":"name323","path":"m235.84 288.73c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5426":{"name":"name324","path":"m318.94 284.69c-0.08 -0.81 -0.14 -0.22 -0.15 1.32c-0.00 1.53 0.06 2.20 0.14 1.47c0.08 -0.72 0.08 -1.98 0.00 -2.79l-0.00 0.00z"},"path5424":{"name":"name325","path":"m676.97 288.56c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5422":{"name":"name326","path":"m540.02 281.15c2.16 -3.28 3.86 -6.01 3.77 -6.07c-0.13 -0.09 -7.31 10.66 -7.95 11.90c-0.77 1.50 0.79 -0.69 4.18 -5.84z"},"path5420":{"name":"name327","path":"m411.51 285.80c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5418":{"name":"name328","path":"m669.00 283.08c-2.56 -1.84 -4.74 -3.35 -4.85 -3.35c-0.11 0.00 1.90 1.51 4.46 3.35c2.56 1.84 4.74 3.35 4.85 3.35c0.11 0.00 -1.90 -1.51 -4.46 -3.35z"},"path5416":{"name":"name329","path":"m411.52 283.58c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5414":{"name":"name330","path":"m320.26 282.87c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5412":{"name":"Comuna 3","path":"m324.30 279.39l3.89 -2.39l14.40 -3.07c12.37 -2.64 16.19 -3.35 22.40 -4.15c0.93 -0.12 8.72 0.59 9.84 0.90c0.34 0.09 -0.58 -3.87 -2.93 -12.64c-1.89 -7.03 -3.43 -12.86 -3.43 -12.95c-0.00 -0.28 6.01 -2.16 11.63 -3.64c6.59 -1.73 19.26 -4.60 25.81 -5.85l4.96 -0.95l0.00 -2.40c0.00 -2.23 -0.11 -2.58 -1.57 -4.80c-1.55 -2.37 -2.85 -5.12 -5.60 -11.82c-1.01 -2.48 -1.39 -3.93 -1.39 -5.35c0.00 -1.07 -0.19 -2.30 -0.41 -2.73c-0.23 -0.43 -0.53 -1.47 -0.68 -2.32l-0.27 -1.54l-7.02 -0.08l-7.02 -0.08l-2.04 1.80c-2.47 2.19 -6.51 4.91 -7.28 4.91c-0.98 0.00 -3.49 1.87 -6.22 4.63c-1.45 1.47 -3.01 2.77 -3.46 2.89c-0.45 0.12 -3.74 0.62 -7.33 1.13l-6.52 0.92l-1.50 1.17c-1.83 1.43 -3.17 3.86 -3.17 5.79c0.00 1.86 -1.22 3.67 -3.15 4.67c-1.81 0.94 -4.11 1.60 -10.25 2.95l-4.65 1.02l-3.91 2.71c-6.04 4.19 -9.22 5.52 -13.83 5.80c-3.40 0.20 -5.53 -0.26 -7.62 -1.64l-1.72 -1.14l-2.82 0.14c-1.82 0.09 -4.56 0.56 -7.74 1.31l-4.92 1.17l-0.47 2.42c-1.00 5.13 -0.53 4.52 -4.37 5.63c-2.09 0.60 -3.33 1.11 -3.22 1.31c0.10 0.19 0.39 1.08 0.65 1.99l0.48 1.65l-1.43 1.40c-3.07 3.00 -5.38 3.97 -9.44 3.97c-1.77 0.00 -2.03 0.08 -2.46 0.76c-0.26 0.41 -0.57 1.33 -0.69 2.03c-0.20 1.20 -0.09 1.39 1.69 3.08c1.86 1.76 1.94 1.81 4.12 2.00c2.70 0.24 3.96 0.69 5.74 2.05c2.09 1.59 3.30 2.03 5.18 1.89c1.33 -0.09 2.06 0.06 3.95 0.85l2.32 0.96l2.35 -0.87c2.18 -0.81 2.68 -0.88 7.02 -0.96c2.57 -0.05 4.84 0.01 5.06 0.13c0.22 0.12 1.12 0.92 2.00 1.78c1.13 1.09 2.45 1.91 4.38 2.73c1.52 0.65 3.77 1.85 5.00 2.68c2.17 1.45 2.26 1.48 3.01 1.01c0.43 -0.27 2.53 -1.56 4.67 -2.87l0.00 0.00z"},"path5410":{"name":"name332","path":"m336.16 262.08c-1.51 -0.30 -2.72 -0.96 -2.72 -1.49c0.00 -0.58 1.15 -0.71 2.34 -0.26c2.28 0.85 4.66 0.24 4.66 -1.18c0.00 -0.72 -0.60 -1.08 -2.33 -1.40c-1.80 -0.33 -1.90 -1.23 -0.16 -1.49c1.61 -0.24 2.11 -0.48 2.11 -1.06c0.00 -1.14 -2.57 -1.59 -3.94 -0.70c-0.85 0.55 -1.89 0.32 -1.89 -0.41c0.00 -0.63 1.26 -1.28 2.98 -1.56c1.49 -0.23 3.78 0.39 4.38 1.19c0.61 0.82 0.51 2.43 -0.18 2.84c-0.53 0.32 -0.52 0.42 0.14 0.94c1.05 0.84 1.27 1.79 0.66 2.84c-0.90 1.54 -3.38 2.25 -6.04 1.73z"},"path5408":{"name":"name333","path":"m341.22 258.13c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5406":{"name":"name334","path":"m339.38 256.94c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5404":{"name":"name335","path":"m317.10 282.43c0.00 -0.05 -0.48 -0.40 -1.07 -0.77l-1.07 -0.68l0.94 0.77c0.88 0.72 1.20 0.90 1.20 0.68z"},"path5402":{"name":"name336","path":"m322.98 281.19c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5400":{"name":"name337","path":"m411.90 280.79c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5398":{"name":"name338","path":"m325.71 279.52c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5396":{"name":"name339","path":"m603.05 279.63c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5394":{"name":"name340","path":"m663.75 279.62c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5392":{"name":"name341","path":"m587.69 278.68c-0.85 -0.06 -1.68 -0.26 -1.84 -0.44c-0.19 -0.21 -0.29 -0.22 -0.30 -0.03c-0.01 0.53 0.47 0.68 2.10 0.63l1.59 -0.05l-1.55 -0.11l0.00 0.00z"},"path5390":{"name":"name342","path":"m591.67 278.44c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5388":{"name":"name343","path":"m308.54 277.95c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5386":{"name":"name344","path":"m597.11 277.60c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5384":{"name":"name345","path":"m245.51 276.56c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5382":{"name":"name346","path":"m639.72 276.45c-1.34 -0.05 -3.53 -0.05 -4.86 0.00c-1.34 0.05 -0.24 0.10 2.43 0.10c2.67 0.00 3.77 -0.04 2.43 -0.10z"},"path5380":{"name":"name347","path":"m652.18 276.47c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5378":{"name":"name348","path":"m585.03 275.47c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5376":{"name":"name349","path":"m412.68 274.93c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5374":{"name":"name350","path":"m584.66 273.10c-0.09 -0.42 -0.16 -0.14 -0.17 0.62c0.00 0.77 0.07 1.11 0.16 0.77c0.09 -0.34 0.09 -0.97 0.01 -1.40l-0.00 0.00z"},"path5372":{"name":"name351","path":"m242.40 274.61c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5370":{"name":"name352","path":"m302.61 274.50c-1.02 -0.06 -2.68 -0.06 -3.70 0.00c-1.02 0.06 -0.18 0.10 1.85 0.10c2.03 0.00 2.86 -0.05 1.85 -0.10z"},"path5368":{"name":"name353","path":"m280.92 274.06c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5366":{"name":"name354","path":"m545.45 272.61c0.00 -0.15 -0.25 0.03 -0.56 0.42c-0.31 0.38 -0.56 0.82 -0.56 0.98c0.00 0.15 0.25 -0.03 0.56 -0.42c0.31 -0.38 0.56 -0.82 0.56 -0.98z"},"path5364":{"name":"name355","path":"m239.29 272.65c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5362":{"name":"name356","path":"m538.91 271.98c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5360":{"name":"name357","path":"m270.80 270.13c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5358":{"name":"name358","path":"m413.46 269.07c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5356":{"name":"name359","path":"m548.21 268.42c0.53 -0.52 0.52 -0.53 -0.11 -0.18c-0.37 0.21 -0.68 0.51 -0.68 0.67c0.00 0.16 0.05 0.24 0.11 0.18c0.06 -0.06 0.37 -0.37 0.68 -0.67z"},"path5354":{"name":"name360","path":"m269.24 268.74c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5352":{"name":"Comuna 7","path":"m576.09 266.33c3.02 -1.11 4.19 -1.40 5.68 -1.40c1.32 0.00 3.25 -0.38 6.40 -1.27c7.08 -1.99 7.92 -2.38 9.31 -4.41c2.18 -3.17 5.20 -5.15 10.11 -6.60c3.87 -1.15 6.60 -2.62 9.37 -5.05c2.17 -1.90 2.23 -1.93 4.06 -1.93c1.02 0.00 1.88 -0.03 1.89 -0.07c0.02 -0.04 0.34 -2.83 0.72 -6.21l0.69 -6.14l-2.08 -4.46l-2.08 -4.46l0.00 -4.30l0.00 -4.30l-1.81 -3.81c-2.01 -4.24 -2.56 -7.22 -1.69 -9.12c0.28 -0.60 1.39 -1.70 2.57 -2.54c1.14 -0.81 3.02 -2.39 4.17 -3.51c2.71 -2.64 7.66 -8.53 7.64 -9.11c-0.01 -0.25 -0.75 -1.46 -1.65 -2.68l-1.64 -2.23l-2.02 -0.08c-1.63 -0.07 -3.07 0.19 -7.46 1.32c-5.17 1.33 -11.96 2.54 -14.29 2.54c-0.59 0.00 -1.35 0.18 -1.69 0.40c-1.21 0.79 -6.89 2.64 -10.14 3.31c-1.82 0.38 -4.88 0.84 -6.80 1.03c-2.85 0.29 -3.86 0.53 -5.49 1.31c-1.49 0.71 -2.69 1.02 -4.68 1.22c-7.24 0.73 -16.12 2.70 -36.52 8.13c-21.61 5.75 -30.85 7.81 -38.41 8.57c-2.83 0.28 -28.35 6.25 -35.44 8.29c-2.39 0.69 -5.02 1.57 -5.85 1.96l-1.51 0.71l0.24 1.64c0.18 1.23 0.83 2.48 2.59 5.01c1.29 1.85 2.57 3.42 2.83 3.48c1.26 0.30 24.25 1.89 30.26 2.09c5.82 0.19 7.58 0.36 11.87 1.15c4.57 0.84 5.50 0.92 10.09 0.88c2.90 -0.03 6.80 -0.27 9.14 -0.57c3.79 -0.48 4.24 -0.49 6.22 -0.09c2.01 0.41 5.55 0.47 14.98 0.25c4.35 -0.10 24.62 1.94 25.62 2.58c0.18 0.12 -1.99 3.77 -4.81 8.12c-4.62 7.12 -5.37 8.09 -7.39 9.64c-2.46 1.89 -3.59 3.63 -4.26 6.57c-0.65 2.88 -0.78 2.73 2.31 2.73c2.14 0.00 3.35 0.18 5.74 0.88c3.51 1.02 7.32 1.86 8.56 1.89c0.47 0.01 2.57 -0.61 4.66 -1.38z"},"path5350":{"name":"name362","path":"m593.20 222.13c-0.11 -0.21 0.48 -1.92 1.32 -3.80c0.84 -1.88 1.53 -3.46 1.53 -3.52c0.00 -0.06 -0.89 -0.11 -1.97 -0.11c-1.26 0.00 -2.19 0.16 -2.57 0.43c-0.92 0.66 -1.48 0.33 -1.48 -0.87l0.00 -1.09l4.09 0.00c3.92 0.00 4.09 0.03 4.21 0.62c0.07 0.34 -0.68 2.44 -1.67 4.67c-1.46 3.31 -1.92 4.06 -2.51 4.06c-0.40 0.00 -0.81 -0.17 -0.93 -0.38z"},"path5348":{"name":"name363","path":"m590.87 214.09c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5346":{"name":"name364","path":"m584.85 266.07c0.09 -0.45 0.03 -0.76 -0.15 -0.68c-0.31 0.14 -0.46 1.50 -0.17 1.50c0.08 0.00 0.23 -0.37 0.32 -0.82z"},"path5344":{"name":"name365","path":"m266.78 265.14c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5342":{"name":"name366","path":"m623.57 262.07c-0.08 -0.65 -0.15 -0.05 -0.15 1.33c0.00 1.38 0.07 1.91 0.15 1.18c0.08 -0.73 0.08 -1.86 0.00 -2.51l-0.00 0.00z"},"path5340":{"name":"name367","path":"m414.24 263.21c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5338":{"name":"name368","path":"m272.07 261.40c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5336":{"name":"Comuna 2","path":"m274.63 260.35c1.26 -0.47 4.18 -2.67 4.76 -3.60c0.30 -0.48 0.25 -1.08 -0.20 -2.34c-0.34 -0.93 -0.61 -1.88 -0.61 -2.11c0.00 -0.25 1.25 -0.76 3.33 -1.33c1.83 -0.51 3.47 -1.12 3.64 -1.37c0.17 -0.24 0.54 -1.70 0.81 -3.23c0.27 -1.53 0.65 -3.00 0.83 -3.26c0.21 -0.29 2.46 -0.98 5.88 -1.79c4.82 -1.15 5.98 -1.32 8.92 -1.34c3.38 -0.02 3.39 -0.02 4.86 0.99c2.05 1.40 2.83 1.64 5.49 1.64c4.45 0.00 7.62 -1.26 13.69 -5.45c4.44 -3.06 4.46 -3.07 12.64 -4.85c4.37 -0.95 7.28 -2.13 8.09 -3.29c0.30 -0.43 0.65 -1.69 0.78 -2.81c0.29 -2.56 1.72 -4.91 3.94 -6.47c1.67 -1.17 1.67 -1.17 8.76 -2.21l7.09 -1.04l2.34 -2.36c2.99 -3.02 4.84 -4.42 6.49 -4.93c1.60 -0.49 4.87 -2.67 7.54 -5.03l1.98 -1.75l7.78 0.00l7.78 0.00l2.76 -1.50l2.76 -1.50l8.34 -12.51l8.34 -12.51l18.63 -18.85c10.25 -10.37 19.40 -19.37 20.34 -20.00c2.25 -1.52 4.39 -2.20 8.46 -2.71c5.21 -0.64 8.43 -1.92 13.57 -5.35l2.08 -1.40l-0.13 -4.24c-0.14 -4.72 0.35 -6.66 2.09 -8.14c0.82 -0.70 0.97 -1.11 0.97 -2.70c0.00 -2.69 2.08 -5.64 6.02 -8.51c4.01 -2.93 13.83 -13.72 18.31 -20.11c0.96 -1.36 1.74 -2.53 1.74 -2.60c0.00 -0.07 -1.09 0.06 -2.43 0.28c-6.40 1.05 -18.11 4.31 -36.55 10.15l-10.77 3.42l-2.84 6.04l-2.84 6.04l-1.43 -0.06c-2.34 -0.10 -8.04 -1.37 -19.29 -4.32c-6.62 -1.73 -16.83 -4.07 -27.20 -6.23c-12.86 -2.68 -16.95 -3.64 -18.19 -4.27c-0.88 -0.45 -2.82 -2.02 -4.32 -3.49c-1.50 -1.47 -3.16 -2.92 -3.70 -3.22c-2.29 -1.26 -6.86 -2.09 -13.32 -2.42c-3.52 -0.18 -3.79 -0.15 -3.80 0.32c-0.00 0.28 -0.61 6.98 -1.36 14.89c-0.75 7.91 -1.36 14.53 -1.36 14.72c-0.00 0.19 -0.19 0.35 -0.42 0.35c-0.48 0.00 -10.55 -3.04 -10.95 -3.31c-0.15 -0.10 -0.57 -2.16 -0.94 -4.57l-0.67 -4.39l-5.48 0.03c-5.29 0.02 -5.61 -0.01 -9.37 -0.94l-3.89 -0.97l-5.25 1.84l-5.24 1.84l-1.84 2.51c-1.01 1.38 -1.85 2.58 -1.85 2.66c-0.00 0.08 1.52 0.69 3.40 1.35c7.56 2.68 12.89 5.90 16.64 10.06c2.00 2.22 6.15 8.31 8.56 12.58c0.82 1.46 1.55 2.70 1.60 2.75c0.06 0.06 3.80 0.38 8.32 0.73c4.52 0.34 8.38 0.75 8.58 0.89c0.24 0.17 0.08 1.48 -0.42 3.60c-1.41 5.92 -3.31 10.04 -6.45 13.94c-4.03 5.00 -4.05 5.05 -4.06 9.91l-0.01 4.33l-2.93 3.21c-4.25 4.66 -6.25 7.72 -7.01 10.74c-0.85 3.40 -1.18 3.95 -3.43 5.66l-1.94 1.48l0.48 1.67c0.27 0.92 0.57 1.84 0.68 2.05c0.22 0.41 -0.73 1.08 -6.46 4.59c-2.03 1.24 -3.97 2.26 -4.30 2.26c-0.33 0.00 -1.29 -0.51 -2.14 -1.14c-2.21 -1.63 -4.18 -2.38 -9.45 -3.58l-4.65 -1.06l-3.00 5.19c-3.22 5.57 -3.44 6.36 -2.79 9.94l0.31 1.67l-2.06 2.48c-1.68 2.03 -2.63 2.81 -5.17 4.29c-1.71 0.99 -3.17 1.90 -3.23 2.03c-0.07 0.12 0.42 0.99 1.07 1.92c0.65 0.93 1.19 1.82 1.19 1.97c0.00 0.34 -11.38 4.48 -12.33 4.48c-0.37 0.00 -2.39 -0.40 -4.49 -0.90c-3.43 -0.81 -3.91 -0.86 -4.69 -0.50c-0.48 0.22 -1.91 0.66 -3.18 0.98c-1.82 0.45 -2.37 0.73 -2.54 1.26c-0.16 0.48 -0.70 0.81 -1.80 1.11c-0.86 0.23 -3.10 1.09 -4.96 1.91c-4.63 2.04 -7.27 2.68 -9.78 2.39c-1.07 -0.12 -3.17 -0.23 -4.67 -0.23c-2.29 -0.00 -3.07 0.13 -4.86 0.82c-2.20 0.85 -6.83 3.97 -7.99 5.38c-0.41 0.50 -3.48 2.08 -8.29 4.28l-7.64 3.49l-0.12 1.10l-0.12 1.10l3.82 1.35l3.82 1.35l2.09 -0.93c1.71 -0.76 2.48 -0.93 4.27 -0.94c2.47 -0.01 3.69 -0.44 9.64 -3.39c1.96 -0.98 3.74 -1.77 3.96 -1.77c0.21 0.00 1.64 2.70 3.17 6.00c1.53 3.30 2.90 6.00 3.05 6.00c0.14 -0.00 2.01 -0.38 4.15 -0.83c2.14 -0.46 4.25 -0.83 4.69 -0.83c0.53 -0.00 1.36 0.54 2.43 1.59c1.84 1.79 1.86 1.86 1.04 3.26l-0.59 1.01l1.97 0.00c1.08 0.00 2.45 -0.18 3.04 -0.40l-0.00 0.00z"},"path5334":{"name":"name370","path":"m380.32 166.97c-0.49 -0.57 0.28 -1.35 3.51 -3.60c1.82 -1.26 3.30 -2.52 3.30 -2.79c0.00 -0.66 -1.21 -1.42 -2.25 -1.42c-0.79 0.00 -2.42 0.97 -2.42 1.45c0.00 0.12 -0.35 0.23 -0.78 0.23c-1.30 0.00 -1.03 -1.47 0.42 -2.35c2.80 -1.69 6.97 -0.45 6.97 2.08c0.00 1.07 -0.23 1.34 -2.79 3.23l-2.79 2.06l1.74 0.00c0.96 0.00 1.94 -0.14 2.18 -0.32c0.74 -0.53 1.66 -0.05 1.66 0.87l0.00 0.85l-4.26 0.00c-2.44 0.00 -4.36 -0.12 -4.50 -0.28z"},"path5332":{"name":"name371","path":"m388.30 166.49c0.00 -0.12 -1.58 -0.21 -3.50 -0.21c-1.93 0.00 -3.50 0.09 -3.50 0.21c0.00 0.12 1.58 0.21 3.50 0.21c1.93 0.00 3.50 -0.09 3.50 -0.21z"},"path5330":{"name":"name372","path":"m388.16 160.21c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5328":{"name":"name373","path":"m385.68 158.42c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5326":{"name":"name374","path":"m278.63 258.87c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5324":{"name":"name375","path":"m227.23 257.59c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5322":{"name":"name376","path":"m601.69 256.28c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5320":{"name":"Comuna 1","path":"m221.02 252.45c0.01 -0.73 0.26 -1.64 0.57 -2.02c0.31 -0.39 0.56 -1.46 0.57 -2.42c0.01 -1.07 0.21 -1.87 0.54 -2.09c0.29 -0.20 3.83 -1.87 7.88 -3.71c6.42 -2.91 7.60 -3.56 9.30 -5.12c3.55 -3.26 8.01 -5.42 12.02 -5.81c1.05 -0.10 3.02 -0.02 4.56 0.19c3.40 0.46 4.96 0.15 10.02 -2.00l3.53 -1.50l0.00 -1.60c0.00 -0.89 -0.17 -1.60 -0.38 -1.60c-0.49 0.00 -0.51 -1.27 -0.03 -1.92c0.30 -0.40 -0.96 -1.38 -7.21 -5.63c-4.17 -2.83 -8.31 -5.46 -9.21 -5.85c-1.55 -0.66 -1.91 -0.69 -6.75 -0.63c-3.67 0.05 -5.23 -0.03 -5.51 -0.28c-0.34 -0.30 -1.00 -1.39 -2.43 -4.02c-0.32 -0.59 -0.39 -0.60 -2.39 -0.21c-1.13 0.22 -2.41 0.39 -2.84 0.39c-0.68 -0.00 -2.79 -1.61 -8.17 -6.26c-0.77 -0.66 -0.81 -0.67 -3.11 -0.28c-3.32 0.56 -4.94 0.50 -7.66 -0.29c-1.32 -0.38 -2.45 -0.70 -2.52 -0.70c-0.07 0.00 -0.13 1.19 -0.13 2.64c0.00 3.24 -0.49 4.39 -3.55 8.25c-3.10 3.92 -5.83 6.49 -8.40 7.88c-2.60 1.41 -3.30 2.36 -4.38 5.94c-0.46 1.53 -0.96 2.87 -1.11 2.96c-0.15 0.10 -2.11 -0.06 -4.36 -0.34c-2.25 -0.28 -4.79 -0.52 -5.64 -0.53c-0.93 -0.01 -3.50 -0.58 -6.37 -1.41c-2.65 -0.77 -4.98 -1.39 -5.18 -1.39c-0.20 0.00 -1.13 0.38 -2.07 0.84c-0.93 0.46 -1.89 0.84 -2.12 0.84c-0.23 0.00 -1.47 -0.38 -2.74 -0.84c-1.27 -0.46 -2.54 -0.84 -2.81 -0.83c-0.27 0.00 -1.53 0.38 -2.79 0.84c-1.26 0.46 -2.77 0.83 -3.36 0.83c-1.62 0.00 -6.75 -0.86 -7.23 -1.22c-0.24 -0.17 -0.92 -1.60 -1.52 -3.16c-0.60 -1.56 -1.20 -2.98 -1.35 -3.15c-0.18 -0.21 -1.09 -0.18 -3.08 0.12c-1.55 0.23 -3.05 0.43 -3.32 0.43c-0.28 0.00 -1.71 -1.31 -3.18 -2.90l-2.67 -2.90l-3.79 1.37c-2.09 0.75 -4.01 1.37 -4.28 1.37c-0.27 0.00 -1.72 -0.88 -3.24 -1.96l-2.76 -1.96l-4.61 1.00c-5.56 1.21 -4.99 1.00 -11.55 4.22c-2.92 1.44 -5.57 2.68 -5.88 2.77c-0.40 0.11 -1.33 -0.77 -3.19 -3.00c-3.24 -3.89 -4.90 -5.39 -6.75 -6.07c-1.98 -0.73 -3.51 -1.99 -5.87 -4.83c-1.74 -2.09 -2.58 -2.76 -5.81 -4.64c-4.21 -2.45 -5.48 -3.50 -6.93 -5.78c-0.74 -1.16 -1.31 -1.65 -2.21 -1.92c-1.72 -0.51 -8.63 -1.85 -8.19 -1.58c0.20 0.12 1.00 0.56 1.79 0.97c1.04 0.55 1.61 1.15 2.09 2.22c0.88 1.94 2.99 4.82 6.90 9.42l3.20 3.77l3.56 0.08l3.56 0.08l6.36 5.60c4.88 4.30 6.35 5.77 6.31 6.34c-0.03 0.41 -0.18 1.57 -0.34 2.58c-0.24 1.48 -0.08 2.66 0.79 6.00c0.60 2.29 1.12 4.19 1.16 4.23c0.04 0.04 1.35 -0.31 2.91 -0.77c1.56 -0.46 3.07 -0.84 3.35 -0.84c0.66 0.00 4.78 2.44 7.78 4.62c1.30 0.94 4.61 3.68 7.34 6.09l4.97 4.37l3.52 0.00c1.94 0.00 4.65 -0.14 6.03 -0.31c2.58 -0.32 3.06 -0.29 12.15 0.78c2.03 0.24 4.55 0.68 5.60 0.97l1.90 0.54l4.14 -0.99l4.14 -0.99l5.82 2.13l5.82 2.13l3.31 -0.24c6.56 -0.47 9.25 -0.25 17.01 1.43l7.08 1.53l6.54 0.02c5.26 0.01 6.95 0.12 8.68 0.53c1.27 0.30 3.37 0.52 5.15 0.54l3.02 0.03l0.01 -1.33l-0.00 0.00z"},"path5318":{"name":"Comuna 1","path":"m215.04 234.61c-0.14 -0.10 -0.26 -0.42 -0.26 -0.70c0.00 -0.41 0.31 -0.51 1.56 -0.51l1.56 0.00l0.00 -3.06l0.00 -3.06l-1.46 0.06c-1.21 0.05 -1.48 -0.04 -1.57 -0.51c-0.09 -0.47 0.26 -0.66 1.98 -1.05c1.15 -0.26 2.30 -0.47 2.55 -0.47c0.32 0.00 0.45 1.16 0.45 4.05l0.00 4.05l1.51 0.00c1.48 0.00 2.30 0.53 1.77 1.14c-0.25 0.29 -7.69 0.35 -8.08 0.07l0.00 -0.00z"},"path5316":{"name":"name379","path":"m220.52 234.03l-1.46 -0.11l0.00 -3.89c0.00 -3.53 -0.06 -3.89 -0.68 -3.87c-0.41 0.01 -0.49 0.08 -0.19 0.16c0.35 0.10 0.49 1.15 0.49 3.87l0.00 3.73l-1.46 0.11c-0.80 0.06 -0.06 0.11 1.65 0.11c1.71 0.00 2.46 -0.05 1.65 -0.11z"},"path5314":{"name":"name380","path":"m624.06 248.96l0.00 -2.86l-2.24 0.14l-2.24 0.14l2.04 0.09l2.04 0.09l0.00 2.64c0.00 1.45 0.09 2.64 0.19 2.64c0.11 0.00 0.19 -1.29 0.20 -2.86l0.00 0.00z"},"path5312":{"name":"name381","path":"m614.39 250.77c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5310":{"name":"name382","path":"m416.18 250.37c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5308":{"name":"name383","path":"m617.50 248.54c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5306":{"name":"name384","path":"m126.18 246.31c-0.90 -0.06 -2.48 -0.06 -3.50 -0.00c-1.02 0.06 -0.28 0.11 1.64 0.11c1.93 0.00 2.76 -0.05 1.86 -0.10l0.00 -0.00z"},"path5304":{"name":"name385","path":"m120.63 246.13c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5302":{"name":"name386","path":"m311.94 243.28c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5300":{"name":"name387","path":"m313.88 243.28c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5298":{"name":"name388","path":"m307.76 242.52c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5296":{"name":"name389","path":"m115.57 241.67c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5294":{"name":"name390","path":"m114.01 240.27c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5292":{"name":"name391","path":"m324.88 239.12c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5290":{"name":"name392","path":"m112.07 238.60c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5288":{"name":"name393","path":"m328.96 236.19c0.84 -0.61 1.43 -1.12 1.33 -1.12c-0.11 0.00 -0.88 0.50 -1.71 1.12c-0.84 0.61 -1.43 1.12 -1.33 1.12c0.11 0.00 0.88 -0.50 1.71 -1.12z"},"path5286":{"name":"name394","path":"m555.48 236.58c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5284":{"name":"name395","path":"m519.30 236.30c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5282":{"name":"name396","path":"m496.16 234.33c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.53 0.00 0.75 -0.06 0.49 -0.14z"},"path5280":{"name":"name397","path":"m105.06 233.57c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5278":{"name":"name398","path":"m259.62 232.38c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5276":{"name":"name399","path":"m254.36 231.81c-0.37 -0.07 -0.99 -0.07 -1.36 0.00c-0.37 0.07 -0.07 0.13 0.68 0.13c0.75 0.00 1.06 -0.06 0.68 -0.13z"},"path5274":{"name":"Comuna 4","path":"m416.01 227.83c4.21 -0.70 18.88 -3.74 27.61 -5.72c5.80 -1.31 7.35 -1.56 9.80 -1.56c1.60 0.00 3.02 -0.13 3.16 -0.29c0.39 -0.45 5.83 -2.33 10.11 -3.49c2.14 -0.58 9.58 -2.39 16.53 -4.03l12.64 -2.98l-0.05 -0.82c-0.08 -1.27 -2.60 -5.84 -6.84 -12.40c-8.79 -13.59 -10.62 -16.82 -11.77 -20.81c-0.34 -1.19 -0.48 -2.26 -0.31 -2.37c0.17 -0.12 3.28 -1.06 6.92 -2.09c3.64 -1.03 6.65 -1.90 6.69 -1.91c0.04 -0.02 -1.40 -3.42 -3.21 -7.56c-1.81 -4.14 -3.28 -7.80 -3.29 -8.13c-0.01 -1.16 9.59 -7.26 17.93 -11.38c5.78 -2.86 9.74 -5.61 14.32 -9.92c2.85 -2.68 9.30 -9.28 10.31 -10.54c0.69 -0.86 -15.05 -5.15 -23.81 -6.49c-2.42 -0.37 -4.52 -0.54 -5.32 -0.43c-0.74 0.10 -2.51 -0.02 -4.06 -0.27c-1.51 -0.25 -2.94 -0.36 -3.18 -0.25c-0.24 0.11 -0.77 0.71 -1.17 1.35c-0.62 0.98 -0.73 1.87 -0.74 6.08l-0.01 4.93l-2.91 1.95c-3.13 2.10 -6.31 3.73 -8.66 4.43c-0.80 0.24 -3.13 0.68 -5.16 0.97c-4.44 0.64 -6.53 1.32 -8.24 2.70c-0.71 0.57 -9.61 9.43 -19.77 19.70l-18.48 18.67l-8.41 12.59l-8.41 12.59l-2.68 1.49c-1.47 0.82 -2.73 1.73 -2.80 2.01c-0.07 0.29 0.24 1.44 0.68 2.57c0.45 1.14 0.80 2.88 0.80 3.91c0.00 1.81 1.06 4.81 4.16 11.78c1.25 2.81 3.44 6.28 3.97 6.28c0.22 0.00 1.85 -0.24 3.63 -0.54l0.00 0.00z"},"path5272":{"name":"name401","path":"m452.26 193.66c-0.31 -0.58 0.13 -1.00 1.03 -1.00c0.50 0.00 0.76 -0.19 0.76 -0.56c0.00 -0.50 -0.26 -0.56 -2.53 -0.56c-2.42 0.00 -2.53 -0.03 -2.53 -0.68c0.00 -0.59 3.19 -4.93 4.38 -5.97c0.23 -0.20 0.87 -0.33 1.42 -0.28c0.99 0.08 1.01 0.12 1.12 2.73c0.08 1.97 0.26 2.71 0.68 2.87c0.74 0.30 0.73 1.21 -0.02 1.42c-0.77 0.21 -0.75 1.02 0.03 1.02c0.41 0.00 0.57 0.21 0.49 0.63c-0.11 0.56 -0.38 0.64 -2.37 0.71c-1.71 0.06 -2.29 -0.02 -2.47 -0.34l-0.00 0.00z"},"path5270":{"name":"name402","path":"m455.71 193.26c-0.33 -0.15 -0.51 -1.43 -0.60 -4.11l-0.12 -3.90l-0.09 3.96c-0.08 3.86 -0.11 3.96 -0.96 4.08c-0.50 0.07 -0.20 0.14 0.68 0.15c0.87 0.02 1.35 -0.06 1.08 -0.18l0.00 0.00z"},"path5268":{"name":"name403","path":"m454.05 188.56c0.00 -0.87 -0.06 -1.53 -0.13 -1.47c-0.07 0.06 -0.68 0.78 -1.36 1.58l-1.23 1.47l1.36 0.00l1.36 0.00l0.00 -1.58z"},"path5266":{"name":"name404","path":"m272.75 226.56c0.00 -0.21 -0.18 -0.46 -0.39 -0.56c-0.22 -0.10 -0.39 0.14 -0.39 0.56c0.00 0.42 0.17 0.66 0.39 0.56c0.21 -0.09 0.39 -0.35 0.39 -0.56z"},"path5264":{"name":"name405","path":"m348.49 226.09c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5262":{"name":"name406","path":"m273.91 226.04c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5260":{"name":"name407","path":"m272.36 225.20c0.00 -0.06 -0.35 -0.17 -0.78 -0.25c-0.43 -0.08 -0.68 -0.03 -0.56 0.11c0.21 0.24 1.34 0.37 1.34 0.15z"},"path5258":{"name":"name408","path":"m91.71 223.86c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5256":{"name":"name409","path":"m157.30 224.01c-0.26 -0.08 -0.79 -0.08 -1.17 -0.01c-0.38 0.07 -0.16 0.13 0.48 0.14c0.64 0.01 0.95 -0.05 0.69 -0.13l0.00 0.00z"},"path5254":{"name":"name410","path":"m456.64 221.33c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5252":{"name":"name411","path":"m92.29 218.82c-0.29 -0.21 -0.34 -0.10 -0.17 0.37c0.14 0.38 0.31 0.50 0.41 0.29c0.09 -0.20 -0.01 -0.50 -0.24 -0.66z"},"path5250":{"name":"name412","path":"m266.52 219.08c0.00 -0.04 -0.92 -0.70 -2.04 -1.47l-2.04 -1.38l1.93 1.47c1.79 1.36 2.15 1.59 2.15 1.38z"},"path5248":{"name":"name413","path":"m197.32 218.40c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5246":{"name":"name414","path":"m89.50 216.27c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5244":{"name":"name415","path":"m86.00 213.20c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5242":{"name":"name416","path":"m257.57 212.93c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5240":{"name":"name417","path":"m91.84 210.70c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5238":{"name":"name418","path":"m82.50 210.13c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5236":{"name":"Comuna 5","path":"m501.70 208.96c6.31 -0.72 18.04 -3.42 36.96 -8.49c19.04 -5.10 29.38 -7.40 35.83 -7.97c2.33 -0.20 3.52 -0.54 5.14 -1.46l0.90 -0.51l-5.05 -12.41c-10.64 -26.13 -16.81 -39.49 -21.49 -46.58c-2.91 -4.40 -3.04 -4.49 -8.80 -6.10c-7.07 -1.98 -13.61 -3.40 -15.59 -3.40c-0.58 0.00 -1.71 0.97 -4.18 3.56c-9.27 9.72 -14.36 13.83 -21.51 17.35c-5.77 2.84 -9.84 5.18 -14.45 8.33l-3.67 2.50l3.39 7.81c1.87 4.30 3.39 8.00 3.39 8.23c0.00 0.28 -2.27 1.07 -6.91 2.39c-7.94 2.27 -7.38 1.70 -5.72 5.82c1.12 2.78 3.28 6.43 8.82 14.91c4.44 6.80 7.97 12.84 8.85 15.15c0.47 1.23 0.59 1.33 1.52 1.20c0.56 -0.08 1.71 -0.22 2.57 -0.32z"},"path5234":{"name":"name420","path":"m528.83 174.51c-1.47 -0.64 -1.94 -1.29 -1.29 -1.76c0.35 -0.25 0.81 -0.18 1.98 0.30c1.91 0.79 2.87 0.79 3.88 0.02c1.96 -1.51 0.25 -3.70 -2.37 -3.05c-2.57 0.64 -2.67 0.56 -2.67 -2.06l0.00 -2.37l3.53 0.00c3.44 0.00 3.53 0.02 3.40 0.63c-0.11 0.56 -0.37 0.64 -2.56 0.71c-2.38 0.08 -2.43 0.10 -2.43 0.87c0.00 0.69 0.12 0.77 0.97 0.65c1.43 -0.20 2.68 0.11 3.84 0.94c0.87 0.62 1.03 0.99 1.03 2.27c0.00 1.36 -0.14 1.63 -1.32 2.47c-1.10 0.79 -1.61 0.95 -3.02 0.95c-1.01 -0.00 -2.21 -0.23 -2.97 -0.56z"},"path5232":{"name":"name421","path":"m532.14 174.34c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5230":{"name":"name422","path":"m529.61 167.46c0.06 -0.73 -0.02 -1.33 -0.18 -1.33c-0.16 0.00 -0.27 0.85 -0.24 1.88c0.05 1.95 0.22 1.74 0.42 -0.56z"},"path5228":{"name":"name423","path":"m379.54 208.56c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5226":{"name":"name424","path":"m87.56 208.47c0.00 -0.05 -0.48 -0.40 -1.07 -0.77l-1.07 -0.68l0.94 0.77c0.88 0.72 1.20 0.90 1.20 0.68z"},"path5224":{"name":"name425","path":"m381.90 206.82l1.14 -0.91l-1.26 0.82c-1.18 0.76 -1.44 0.99 -1.14 0.99c0.07 0.00 0.64 -0.41 1.26 -0.91z"},"path5222":{"name":"name426","path":"m231.90 204.84c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.75 1.01 0.53z"},"path5220":{"name":"name427","path":"m384.84 204.44c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5218":{"name":"name428","path":"m210.78 201.09c-0.08 -0.58 -0.15 -0.10 -0.15 1.05c0.00 1.15 0.07 1.62 0.15 1.05c0.08 -0.58 0.08 -1.52 0.00 -2.09z"},"path5216":{"name":"name429","path":"m402.35 202.77c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5214":{"name":"name430","path":"m229.56 202.87c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5212":{"name":"name431","path":"m227.23 200.92c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5210":{"name":"name432","path":"m407.41 199.98c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5208":{"name":"name433","path":"m75.11 198.42c0.00 -0.05 -0.48 -0.40 -1.07 -0.77l-1.07 -0.68l0.94 0.77c0.88 0.72 1.20 0.90 1.20 0.68z"},"path5206":{"name":"name434","path":"m331.10 197.59c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5204":{"name":"name435","path":"m334.41 196.28c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5202":{"name":"name436","path":"m337.13 194.61c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5200":{"name":"name437","path":"m339.86 192.93c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5198":{"name":"name438","path":"m61.88 193.10c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5196":{"name":"name439","path":"m582.92 190.79c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5194":{"name":"name440","path":"m56.23 190.03c-0.34 -0.37 -0.98 -0.74 -1.43 -0.82c-0.62 -0.12 -0.50 0.04 0.50 0.66c1.62 0.99 1.69 1.01 0.92 0.16z"},"path5192":{"name":"Comuna 6","path":"m587.96 189.57c4.53 -0.66 9.32 -1.98 12.49 -3.43c1.48 -0.68 2.68 -1.02 3.60 -1.02c2.44 0.00 7.15 -0.84 13.36 -2.39c4.03 -1.00 6.69 -1.51 7.92 -1.52l1.85 -0.00l0.00 -1.07c0.00 -0.59 -0.32 -1.75 -0.72 -2.58c-1.10 -2.31 -1.31 -4.66 -0.80 -8.85c0.41 -3.36 0.39 -4.01 -0.17 -5.38c-0.98 -2.43 -4.16 -5.64 -9.06 -9.15c-5.21 -3.74 -5.23 -3.76 -6.38 -10.50c-0.42 -2.46 -0.86 -5.00 -0.99 -5.65c-0.27 -1.43 -1.25 -2.04 -6.28 -3.89c-4.17 -1.53 -4.68 -1.84 -5.70 -3.44c-0.69 -1.08 -0.80 -1.89 -0.86 -5.86c-0.09 -6.19 -0.89 -8.24 -4.45 -11.47c-3.18 -2.88 -3.49 -3.80 -3.88 -11.55c-0.28 -5.50 -0.37 -6.01 -1.47 -8.31c-1.73 -3.62 -4.38 -6.60 -8.46 -9.54c-5.22 -3.76 -10.44 -6.16 -24.16 -11.13l-6.65 -2.41l-0.24 -2.45c-0.13 -1.35 -0.45 -5.11 -0.70 -8.38l-0.46 -5.93l-0.96 0.00c-0.53 0.00 -2.92 0.15 -5.31 0.33l-4.35 0.33l0.60 1.79l0.60 1.79l-1.54 3.25c-1.75 3.68 -0.96 3.24 -7.06 3.95l-2.80 0.33l-1.05 2.35c-0.57 1.30 -1.57 2.82 -2.20 3.40c-1.07 0.96 -1.14 1.16 -0.91 2.60c0.22 1.40 0.12 1.73 -0.99 3.21c-0.68 0.91 -2.42 3.35 -3.88 5.42c-5.14 7.32 -14.62 17.84 -18.85 20.93c-3.78 2.76 -5.61 5.28 -5.62 7.73l-0.01 1.73l2.02 0.43c1.11 0.24 3.37 0.43 5.03 0.43c5.01 0.00 17.70 2.68 26.41 5.58c2.55 0.85 5.31 1.53 7.34 1.81c5.98 0.83 17.92 3.97 19.74 5.19c4.21 2.83 13.07 21.03 26.82 55.09c1.86 4.60 3.46 8.47 3.55 8.58c0.27 0.33 1.46 0.25 5.66 -0.36l0.00 -0.00z"},"path5190":{"name":"name442","path":"m567.36 119.69c-2.04 -1.23 -2.70 -4.56 -1.30 -6.52c1.38 -1.93 4.93 -3.10 7.01 -2.30c1.51 0.58 0.86 1.27 -1.22 1.28c-1.98 0.01 -3.08 0.52 -4.05 1.87c-0.51 0.70 -0.12 1.14 0.44 0.49c0.13 -0.15 0.86 -0.28 1.62 -0.28c2.01 0.00 4.02 1.49 4.02 2.98c0.00 1.07 -0.71 2.13 -1.88 2.81c-1.02 0.59 -3.38 0.42 -4.63 -0.33z"},"path5188":{"name":"name443","path":"m570.47 119.62c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5186":{"name":"name444","path":"m568.43 119.43c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5184":{"name":"name445","path":"m571.38 118.28c0.78 -0.85 0.47 -1.96 -0.67 -2.39c-0.67 -0.26 -1.02 -0.21 -1.84 0.23c-1.34 0.71 -1.48 1.55 -0.39 2.28c1.16 0.77 2.13 0.74 2.90 -0.11z"},"path5182":{"name":"name446","path":"m567.26 116.15c0.00 -0.15 -0.18 -0.20 -0.39 -0.11c-0.22 0.10 -0.41 -0.17 -0.44 -0.61c-0.05 -0.69 -0.07 -0.70 -0.23 -0.14c-0.22 0.82 0.15 1.54 0.66 1.31c0.22 -0.10 0.39 -0.30 0.39 -0.45z"},"path5180":{"name":"name447","path":"m572.03 111.25c-0.27 -0.08 -0.71 -0.08 -0.97 0.00c-0.27 0.08 -0.05 0.14 0.49 0.14c0.54 0.00 0.75 -0.06 0.49 -0.14z"},"path5178":{"name":"name448","path":"m343.21 185.47c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5176":{"name":"name449","path":"m604.50 185.78c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 0.00z"},"path5174":{"name":"name450","path":"m355.51 160.49c-0.07 -1.11 -0.13 -0.20 -0.13 2.02c0.00 2.23 0.06 3.14 0.13 2.02c0.07 -1.11 0.07 -2.93 0.00 -4.05z"},"path5172":{"name":"name451","path":"m620.17 155.72c0.00 -0.05 -0.57 -0.46 -1.26 -0.91l-1.26 -0.82l1.14 0.91c1.07 0.85 1.39 1.04 1.39 0.82z"},"path5170":{"name":"name452","path":"m617.45 153.77c0.00 -0.05 -0.48 -0.40 -1.07 -0.77l-1.07 -0.68l0.94 0.77c0.88 0.72 1.20 0.90 1.20 0.68z"},"path5168":{"name":"name453","path":"m487.31 151.90c1.27 -0.92 2.22 -1.67 2.12 -1.67c-0.11 0.00 -1.23 0.75 -2.50 1.67c-1.27 0.92 -2.22 1.67 -2.12 1.67c0.11 0.00 1.23 -0.75 2.50 -1.67z"},"path5166":{"name":"name454","path":"m492.76 148.28c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5164":{"name":"name455","path":"m495.33 146.67c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5162":{"name":"name456","path":"m508.56 139.69c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5160":{"name":"name457","path":"m512.99 136.55c0.39 -0.31 0.62 -0.56 0.51 -0.56c-0.11 0.00 -0.51 0.25 -0.90 0.56c-0.39 0.31 -0.62 0.56 -0.51 0.56c0.11 0.00 0.51 -0.25 0.90 -0.56z"},"path5158":{"name":"name458","path":"m463.43 135.79c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5156":{"name":"name459","path":"m515.18 134.67c0.48 -0.44 0.47 -0.45 -0.15 -0.11c-0.37 0.21 -0.68 0.43 -0.68 0.49c0.00 0.23 0.32 0.08 0.83 -0.38z"},"path5154":{"name":"name460","path":"m484.39 128.60c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5152":{"name":"name461","path":"m552.09 127.25c0.00 -0.05 -0.39 -0.34 -0.88 -0.63l-0.88 -0.53l0.74 0.63c0.70 0.59 1.01 0.76 1.01 0.53z"},"path5150":{"name":"name462","path":"m487.38 122.12c-0.10 -0.27 -0.19 -0.12 -0.19 0.34c-0.01 0.46 0.07 0.68 0.18 0.49c0.11 -0.19 0.11 -0.57 0.01 -0.84l-0.00 0.00z"},"path5148":{"name":"name463","path":"m529.52 121.38c0.00 -0.06 -0.43 -0.17 -0.96 -0.24c-0.53 -0.07 -0.87 -0.02 -0.76 0.11c0.20 0.23 1.72 0.35 1.72 0.13z"},"path5146":{"name":"name464","path":"m336.94 115.80c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5144":{"name":"name465","path":"m489.84 113.81c0.50 -0.38 0.83 -0.70 0.72 -0.70c-0.11 0.00 -0.61 0.31 -1.11 0.70c-0.50 0.38 -0.83 0.70 -0.72 0.70c0.11 0.00 0.61 -0.31 1.11 -0.70z"},"path5142":{"name":"name466","path":"m333.44 113.29c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5140":{"name":"name467","path":"m365.61 107.76c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5138":{"name":"name468","path":"m496.26 103.06c1.70 -1.23 3.01 -2.23 2.90 -2.23c-0.11 0.00 -1.59 1.00 -3.29 2.23c-1.70 1.23 -3.01 2.23 -2.90 2.23c0.11 0.00 1.59 -1.00 3.29 -2.23z"},"path5136":{"name":"name469","path":"m588.92 104.11c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5134":{"name":"name470","path":"m366.00 103.57c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5132":{"name":"name471","path":"m366.38 99.38c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53z"},"path5130":{"name":"name472","path":"m366.77 95.20c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5128":{"name":"name473","path":"m367.16 91.01c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5126":{"name":"name474","path":"m367.55 86.82c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53z"},"path5124":{"name":"name475","path":"m580.10 84.28c0.00 -0.05 -0.66 -0.52 -1.46 -1.05l-1.46 -0.96l1.34 1.05c1.25 0.97 1.58 1.17 1.58 0.96z"},"path5122":{"name":"name476","path":"m367.94 82.64c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l0.00 0.00z"},"path5120":{"name":"name477","path":"m575.82 81.47c0.00 -0.06 -0.31 -0.28 -0.68 -0.49c-0.62 -0.35 -0.63 -0.34 -0.15 0.11c0.51 0.46 0.83 0.61 0.83 0.38z"},"path5118":{"name":"name478","path":"m374.96 81.13c-0.13 -0.09 -0.46 -0.10 -0.75 -0.02c-0.31 0.09 -0.22 0.16 0.24 0.17c0.41 0.01 0.64 -0.05 0.51 -0.15l0.00 -0.00z"},"path5116":{"name":"name479","path":"m519.67 72.87c-0.12 -0.22 -0.22 -0.16 -0.24 0.17c-0.02 0.29 0.08 0.46 0.20 0.37c0.13 -0.09 0.14 -0.33 0.03 -0.53l-0.00 0.00z"},"path5114":{"name":"name480","path":"m547.68 65.32c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path5112":{"name":"name481","path":"m547.29 60.57c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"},"path4533":{"name":"name482","path":"m546.90 55.83c-0.11 -0.19 -0.20 -0.03 -0.20 0.35c0.00 0.38 0.09 0.54 0.20 0.35c0.11 -0.19 0.11 -0.51 0.00 -0.70z"}}});
/*! tether 1.4.3 */


(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tether = factory();
  }
}(this, function(require, exports, module) {

'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var TetherBase = undefined;
if (typeof TetherBase === 'undefined') {
  TetherBase = { modules: [] };
}

var zeroElement = null;

// Same as native getBoundingClientRect, except it takes into account parent <frame> offsets
// if the element lies within a nested document (<frame> or <iframe>-like).
function getActualBoundingClientRect(node) {
  var boundingRect = node.getBoundingClientRect();

  // The original object returned by getBoundingClientRect is immutable, so we clone it
  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
  var rect = {};
  for (var k in boundingRect) {
    rect[k] = boundingRect[k];
  }

  if (node.ownerDocument !== document) {
    var _frameElement = node.ownerDocument.defaultView.frameElement;
    if (_frameElement) {
      var frameRect = getActualBoundingClientRect(_frameElement);
      rect.top += frameRect.top;
      rect.bottom += frameRect.top;
      rect.left += frameRect.left;
      rect.right += frameRect.left;
    }
  }

  return rect;
}

function getScrollParents(el) {
  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
  var computedStyle = getComputedStyle(el) || {};
  var position = computedStyle.position;
  var parents = [];

  if (position === 'fixed') {
    return [el];
  }

  var parent = el;
  while ((parent = parent.parentNode) && parent && parent.nodeType === 1) {
    var style = undefined;
    try {
      style = getComputedStyle(parent);
    } catch (err) {}

    if (typeof style === 'undefined' || style === null) {
      parents.push(parent);
      return parents;
    }

    var _style = style;
    var overflow = _style.overflow;
    var overflowX = _style.overflowX;
    var overflowY = _style.overflowY;

    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
        parents.push(parent);
      }
    }
  }

  parents.push(el.ownerDocument.body);

  // If the node is within a frame, account for the parent window scroll
  if (el.ownerDocument !== document) {
    parents.push(el.ownerDocument.defaultView);
  }

  return parents;
}

var uniqueId = (function () {
  var id = 0;
  return function () {
    return ++id;
  };
})();

var zeroPosCache = {};
var getOrigin = function getOrigin() {
  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
  // jitter as the user scrolls that messes with our ability to detect if two positions
  // are equivilant or not.  We place an element at the top left of the page that will
  // get the same jitter, so we can cancel the two out.
  var node = zeroElement;
  if (!node || !document.body.contains(node)) {
    node = document.createElement('div');
    node.setAttribute('data-tether-id', uniqueId());
    extend(node.style, {
      top: 0,
      left: 0,
      position: 'absolute'
    });

    document.body.appendChild(node);

    zeroElement = node;
  }

  var id = node.getAttribute('data-tether-id');
  if (typeof zeroPosCache[id] === 'undefined') {
    zeroPosCache[id] = getActualBoundingClientRect(node);

    // Clear the cache when this position call is done
    defer(function () {
      delete zeroPosCache[id];
    });
  }

  return zeroPosCache[id];
};

function removeUtilElements() {
  if (zeroElement) {
    document.body.removeChild(zeroElement);
  }
  zeroElement = null;
};

function getBounds(el) {
  var doc = undefined;
  if (el === document) {
    doc = document;
    el = document.documentElement;
  } else {
    doc = el.ownerDocument;
  }

  var docEl = doc.documentElement;

  var box = getActualBoundingClientRect(el);

  var origin = getOrigin();

  box.top -= origin.top;
  box.left -= origin.left;

  if (typeof box.width === 'undefined') {
    box.width = document.body.scrollWidth - box.left - box.right;
  }
  if (typeof box.height === 'undefined') {
    box.height = document.body.scrollHeight - box.top - box.bottom;
  }

  box.top = box.top - docEl.clientTop;
  box.left = box.left - docEl.clientLeft;
  box.right = doc.body.clientWidth - box.width - box.left;
  box.bottom = doc.body.clientHeight - box.height - box.top;

  return box;
}

function getOffsetParent(el) {
  return el.offsetParent || document.documentElement;
}

var _scrollBarSize = null;
function getScrollBarSize() {
  if (_scrollBarSize) {
    return _scrollBarSize;
  }
  var inner = document.createElement('div');
  inner.style.width = '100%';
  inner.style.height = '200px';

  var outer = document.createElement('div');
  extend(outer.style, {
    position: 'absolute',
    top: 0,
    left: 0,
    pointerEvents: 'none',
    visibility: 'hidden',
    width: '200px',
    height: '150px',
    overflow: 'hidden'
  });

  outer.appendChild(inner);

  document.body.appendChild(outer);

  var widthContained = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  var widthScroll = inner.offsetWidth;

  if (widthContained === widthScroll) {
    widthScroll = outer.clientWidth;
  }

  document.body.removeChild(outer);

  var width = widthContained - widthScroll;

  _scrollBarSize = { width: width, height: width };
  return _scrollBarSize;
}

function extend() {
  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  var args = [];

  Array.prototype.push.apply(args, arguments);

  args.slice(1).forEach(function (obj) {
    if (obj) {
      for (var key in obj) {
        if (({}).hasOwnProperty.call(obj, key)) {
          out[key] = obj[key];
        }
      }
    }
  });

  return out;
}

function removeClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.remove(cls);
      }
    });
  } else {
    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
    var className = getClassName(el).replace(regex, ' ');
    setClassName(el, className);
  }
}

function addClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    name.split(' ').forEach(function (cls) {
      if (cls.trim()) {
        el.classList.add(cls);
      }
    });
  } else {
    removeClass(el, name);
    var cls = getClassName(el) + (' ' + name);
    setClassName(el, cls);
  }
}

function hasClass(el, name) {
  if (typeof el.classList !== 'undefined') {
    return el.classList.contains(name);
  }
  var className = getClassName(el);
  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
}

function getClassName(el) {
  // Can't use just SVGAnimatedString here since nodes within a Frame in IE have
  // completely separately SVGAnimatedString base classes
  if (el.className instanceof el.ownerDocument.defaultView.SVGAnimatedString) {
    return el.className.baseVal;
  }
  return el.className;
}

function setClassName(el, className) {
  el.setAttribute('class', className);
}

function updateClasses(el, add, all) {
  // Of the set of 'all' classes, we need the 'add' classes, and only the
  // 'add' classes to be set.
  all.forEach(function (cls) {
    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
      removeClass(el, cls);
    }
  });

  add.forEach(function (cls) {
    if (!hasClass(el, cls)) {
      addClass(el, cls);
    }
  });
}

var deferred = [];

var defer = function defer(fn) {
  deferred.push(fn);
};

var flush = function flush() {
  var fn = undefined;
  while (fn = deferred.pop()) {
    fn();
  }
};

var Evented = (function () {
  function Evented() {
    _classCallCheck(this, Evented);
  }

  _createClass(Evented, [{
    key: 'on',
    value: function on(event, handler, ctx) {
      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

      if (typeof this.bindings === 'undefined') {
        this.bindings = {};
      }
      if (typeof this.bindings[event] === 'undefined') {
        this.bindings[event] = [];
      }
      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
    }
  }, {
    key: 'once',
    value: function once(event, handler, ctx) {
      this.on(event, handler, ctx, true);
    }
  }, {
    key: 'off',
    value: function off(event, handler) {
      if (typeof this.bindings === 'undefined' || typeof this.bindings[event] === 'undefined') {
        return;
      }

      if (typeof handler === 'undefined') {
        delete this.bindings[event];
      } else {
        var i = 0;
        while (i < this.bindings[event].length) {
          if (this.bindings[event][i].handler === handler) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }, {
    key: 'trigger',
    value: function trigger(event) {
      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
        var i = 0;

        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        while (i < this.bindings[event].length) {
          var _bindings$event$i = this.bindings[event][i];
          var handler = _bindings$event$i.handler;
          var ctx = _bindings$event$i.ctx;
          var once = _bindings$event$i.once;

          var context = ctx;
          if (typeof context === 'undefined') {
            context = this;
          }

          handler.apply(context, args);

          if (once) {
            this.bindings[event].splice(i, 1);
          } else {
            ++i;
          }
        }
      }
    }
  }]);

  return Evented;
})();

TetherBase.Utils = {
  getActualBoundingClientRect: getActualBoundingClientRect,
  getScrollParents: getScrollParents,
  getBounds: getBounds,
  getOffsetParent: getOffsetParent,
  extend: extend,
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  updateClasses: updateClasses,
  defer: defer,
  flush: flush,
  uniqueId: uniqueId,
  Evented: Evented,
  getScrollBarSize: getScrollBarSize,
  removeUtilElements: removeUtilElements
};
/* globals TetherBase, performance */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x6, _x7, _x8) { var _again = true; _function: while (_again) { var object = _x6, property = _x7, receiver = _x8; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x6 = parent; _x7 = property; _x8 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (typeof TetherBase === 'undefined') {
  throw new Error('You must include the utils.js file before tether.js');
}

var _TetherBase$Utils = TetherBase.Utils;
var getScrollParents = _TetherBase$Utils.getScrollParents;
var getBounds = _TetherBase$Utils.getBounds;
var getOffsetParent = _TetherBase$Utils.getOffsetParent;
var extend = _TetherBase$Utils.extend;
var addClass = _TetherBase$Utils.addClass;
var removeClass = _TetherBase$Utils.removeClass;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;
var flush = _TetherBase$Utils.flush;
var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;
var removeUtilElements = _TetherBase$Utils.removeUtilElements;

function within(a, b) {
  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

  return a + diff >= b && b >= a - diff;
}

var transformKey = (function () {
  if (typeof document === 'undefined') {
    return '';
  }
  var el = document.createElement('div');

  var transforms = ['transform', 'WebkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
  for (var i = 0; i < transforms.length; ++i) {
    var key = transforms[i];
    if (el.style[key] !== undefined) {
      return key;
    }
  }
})();

var tethers = [];

var position = function position() {
  tethers.forEach(function (tether) {
    tether.position(false);
  });
  flush();
};

function now() {
  if (typeof performance === 'object' && typeof performance.now === 'function') {
    return performance.now();
  }
  return +new Date();
}

(function () {
  var lastCall = null;
  var lastDuration = null;
  var pendingTimeout = null;

  var tick = function tick() {
    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
      // We voluntarily throttle ourselves if we can't manage 60fps
      lastDuration = Math.min(lastDuration - 16, 250);

      // Just in case this is the last event, remember to position just once more
      pendingTimeout = setTimeout(tick, 250);
      return;
    }

    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
      // Some browsers call events a little too frequently, refuse to run more than is reasonable
      return;
    }

    if (pendingTimeout != null) {
      clearTimeout(pendingTimeout);
      pendingTimeout = null;
    }

    lastCall = now();
    position();
    lastDuration = now() - lastCall;
  };

  if (typeof window !== 'undefined' && typeof window.addEventListener !== 'undefined') {
    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
      window.addEventListener(event, tick);
    });
  }
})();

var MIRROR_LR = {
  center: 'center',
  left: 'right',
  right: 'left'
};

var MIRROR_TB = {
  middle: 'middle',
  top: 'bottom',
  bottom: 'top'
};

var OFFSET_MAP = {
  top: 0,
  left: 0,
  middle: '50%',
  center: '50%',
  bottom: '100%',
  right: '100%'
};

var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (left === 'auto') {
    left = MIRROR_LR[relativeToAttachment.left];
  }

  if (top === 'auto') {
    top = MIRROR_TB[relativeToAttachment.top];
  }

  return { left: left, top: top };
};

var attachmentToOffset = function attachmentToOffset(attachment) {
  var left = attachment.left;
  var top = attachment.top;

  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
    left = OFFSET_MAP[attachment.left];
  }

  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
    top = OFFSET_MAP[attachment.top];
  }

  return { left: left, top: top };
};

function addOffset() {
  var out = { top: 0, left: 0 };

  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
    offsets[_key] = arguments[_key];
  }

  offsets.forEach(function (_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (typeof top === 'string') {
      top = parseFloat(top, 10);
    }
    if (typeof left === 'string') {
      left = parseFloat(left, 10);
    }

    out.top += top;
    out.left += left;
  });

  return out;
}

function offsetToPx(offset, size) {
  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
  }
  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
  }

  return offset;
}

var parseOffset = function parseOffset(value) {
  var _value$split = value.split(' ');

  var _value$split2 = _slicedToArray(_value$split, 2);

  var top = _value$split2[0];
  var left = _value$split2[1];

  return { top: top, left: left };
};
var parseAttachment = parseOffset;

var TetherClass = (function (_Evented) {
  _inherits(TetherClass, _Evented);

  function TetherClass(options) {
    var _this = this;

    _classCallCheck(this, TetherClass);

    _get(Object.getPrototypeOf(TetherClass.prototype), 'constructor', this).call(this);
    this.position = this.position.bind(this);

    tethers.push(this);

    this.history = [];

    this.setOptions(options, false);

    TetherBase.modules.forEach(function (module) {
      if (typeof module.initialize !== 'undefined') {
        module.initialize.call(_this);
      }
    });

    this.position();
  }

  _createClass(TetherClass, [{
    key: 'getClass',
    value: function getClass() {
      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
      var classes = this.options.classes;

      if (typeof classes !== 'undefined' && classes[key]) {
        return this.options.classes[key];
      } else if (this.options.classPrefix) {
        return this.options.classPrefix + '-' + key;
      } else {
        return key;
      }
    }
  }, {
    key: 'setOptions',
    value: function setOptions(options) {
      var _this2 = this;

      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

      var defaults = {
        offset: '0 0',
        targetOffset: '0 0',
        targetAttachment: 'auto auto',
        classPrefix: 'tether'
      };

      this.options = extend(defaults, options);

      var _options = this.options;
      var element = _options.element;
      var target = _options.target;
      var targetModifier = _options.targetModifier;

      this.element = element;
      this.target = target;
      this.targetModifier = targetModifier;

      if (this.target === 'viewport') {
        this.target = document.body;
        this.targetModifier = 'visible';
      } else if (this.target === 'scroll-handle') {
        this.target = document.body;
        this.targetModifier = 'scroll-handle';
      }

      ['element', 'target'].forEach(function (key) {
        if (typeof _this2[key] === 'undefined') {
          throw new Error('Tether Error: Both element and target must be defined');
        }

        if (typeof _this2[key].jquery !== 'undefined') {
          _this2[key] = _this2[key][0];
        } else if (typeof _this2[key] === 'string') {
          _this2[key] = document.querySelector(_this2[key]);
        }
      });

      addClass(this.element, this.getClass('element'));
      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('target'));
      }

      if (!this.options.attachment) {
        throw new Error('Tether Error: You must provide an attachment');
      }

      this.targetAttachment = parseAttachment(this.options.targetAttachment);
      this.attachment = parseAttachment(this.options.attachment);
      this.offset = parseOffset(this.options.offset);
      this.targetOffset = parseOffset(this.options.targetOffset);

      if (typeof this.scrollParents !== 'undefined') {
        this.disable();
      }

      if (this.targetModifier === 'scroll-handle') {
        this.scrollParents = [this.target];
      } else {
        this.scrollParents = getScrollParents(this.target);
      }

      if (!(this.options.enabled === false)) {
        this.enable(pos);
      }
    }
  }, {
    key: 'getTargetBounds',
    value: function getTargetBounds() {
      if (typeof this.targetModifier !== 'undefined') {
        if (this.targetModifier === 'visible') {
          if (this.target === document.body) {
            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
          } else {
            var bounds = getBounds(this.target);

            var out = {
              height: bounds.height,
              width: bounds.width,
              top: bounds.top,
              left: bounds.left
            };

            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
            out.height = Math.min(innerHeight, out.height);
            out.height -= 2;

            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
            out.width = Math.min(innerWidth, out.width);
            out.width -= 2;

            if (out.top < pageYOffset) {
              out.top = pageYOffset;
            }
            if (out.left < pageXOffset) {
              out.left = pageXOffset;
            }

            return out;
          }
        } else if (this.targetModifier === 'scroll-handle') {
          var bounds = undefined;
          var target = this.target;
          if (target === document.body) {
            target = document.documentElement;

            bounds = {
              left: pageXOffset,
              top: pageYOffset,
              height: innerHeight,
              width: innerWidth
            };
          } else {
            bounds = getBounds(target);
          }

          var style = getComputedStyle(target);

          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

          var scrollBottom = 0;
          if (hasBottomScroll) {
            scrollBottom = 15;
          }

          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

          var out = {
            width: 15,
            height: height * 0.975 * (height / target.scrollHeight),
            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
          };

          var fitAdj = 0;
          if (height < 408 && this.target === document.body) {
            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
          }

          if (this.target !== document.body) {
            out.height = Math.max(out.height, 24);
          }

          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

          if (this.target === document.body) {
            out.height = Math.max(out.height, 24);
          }

          return out;
        }
      } else {
        return getBounds(this.target);
      }
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      this._cache = {};
    }
  }, {
    key: 'cache',
    value: function cache(k, getter) {
      // More than one module will often need the same DOM info, so
      // we keep a cache which is cleared on each position call
      if (typeof this._cache === 'undefined') {
        this._cache = {};
      }

      if (typeof this._cache[k] === 'undefined') {
        this._cache[k] = getter.call(this);
      }

      return this._cache[k];
    }
  }, {
    key: 'enable',
    value: function enable() {
      var _this3 = this;

      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      if (!(this.options.addTargetClasses === false)) {
        addClass(this.target, this.getClass('enabled'));
      }
      addClass(this.element, this.getClass('enabled'));
      this.enabled = true;

      this.scrollParents.forEach(function (parent) {
        if (parent !== _this3.target.ownerDocument) {
          parent.addEventListener('scroll', _this3.position);
        }
      });

      if (pos) {
        this.position();
      }
    }
  }, {
    key: 'disable',
    value: function disable() {
      var _this4 = this;

      removeClass(this.target, this.getClass('enabled'));
      removeClass(this.element, this.getClass('enabled'));
      this.enabled = false;

      if (typeof this.scrollParents !== 'undefined') {
        this.scrollParents.forEach(function (parent) {
          parent.removeEventListener('scroll', _this4.position);
        });
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var _this5 = this;

      this.disable();

      tethers.forEach(function (tether, i) {
        if (tether === _this5) {
          tethers.splice(i, 1);
        }
      });

      // Remove any elements we were using for convenience from the DOM
      if (tethers.length === 0) {
        removeUtilElements();
      }
    }
  }, {
    key: 'updateAttachClasses',
    value: function updateAttachClasses(elementAttach, targetAttach) {
      var _this6 = this;

      elementAttach = elementAttach || this.attachment;
      targetAttach = targetAttach || this.targetAttachment;
      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
        // updateAttachClasses can be called more than once in a position call, so
        // we need to clean up after ourselves such that when the last defer gets
        // ran it doesn't add any extra classes from previous calls.
        this._addAttachClasses.splice(0, this._addAttachClasses.length);
      }

      if (typeof this._addAttachClasses === 'undefined') {
        this._addAttachClasses = [];
      }
      var add = this._addAttachClasses;

      if (elementAttach.top) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
      }
      if (elementAttach.left) {
        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
      }
      if (targetAttach.top) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
      }
      if (targetAttach.left) {
        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
      }

      var all = [];
      sides.forEach(function (side) {
        all.push(_this6.getClass('element-attached') + '-' + side);
        all.push(_this6.getClass('target-attached') + '-' + side);
      });

      defer(function () {
        if (!(typeof _this6._addAttachClasses !== 'undefined')) {
          return;
        }

        updateClasses(_this6.element, _this6._addAttachClasses, all);
        if (!(_this6.options.addTargetClasses === false)) {
          updateClasses(_this6.target, _this6._addAttachClasses, all);
        }

        delete _this6._addAttachClasses;
      });
    }
  }, {
    key: 'position',
    value: function position() {
      var _this7 = this;

      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
      // tethers (in which case call Tether.Utils.flush yourself when you're done)

      if (!this.enabled) {
        return;
      }

      this.clearCache();

      // Turn 'auto' attachments into the appropriate corner or edge
      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

      this.updateAttachClasses(this.attachment, targetAttachment);

      var elementPos = this.cache('element-bounds', function () {
        return getBounds(_this7.element);
      });

      var width = elementPos.width;
      var height = elementPos.height;

      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
        var _lastSize = this.lastSize;

        // We cache the height and width to make it possible to position elements that are
        // getting hidden.
        width = _lastSize.width;
        height = _lastSize.height;
      } else {
        this.lastSize = { width: width, height: height };
      }

      var targetPos = this.cache('target-bounds', function () {
        return _this7.getTargetBounds();
      });
      var targetSize = targetPos;

      // Get an actual px offset from the attachment
      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

      // Add the manually provided offset
      offset = addOffset(offset, manualOffset);
      targetOffset = addOffset(targetOffset, manualTargetOffset);

      // It's now our goal to make (element position + offset) == (target position + target offset)
      var left = targetPos.left + targetOffset.left - offset.left;
      var top = targetPos.top + targetOffset.top - offset.top;

      for (var i = 0; i < TetherBase.modules.length; ++i) {
        var _module2 = TetherBase.modules[i];
        var ret = _module2.position.call(this, {
          left: left,
          top: top,
          targetAttachment: targetAttachment,
          targetPos: targetPos,
          elementPos: elementPos,
          offset: offset,
          targetOffset: targetOffset,
          manualOffset: manualOffset,
          manualTargetOffset: manualTargetOffset,
          scrollbarSize: scrollbarSize,
          attachment: this.attachment
        });

        if (ret === false) {
          return false;
        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
          continue;
        } else {
          top = ret.top;
          left = ret.left;
        }
      }

      // We describe the position three different ways to give the optimizer
      // a chance to decide the best possible way to position the element
      // with the fewest repaints.
      var next = {
        // It's position relative to the page (absolute positioning when
        // the element is a child of the body)
        page: {
          top: top,
          left: left
        },

        // It's position relative to the viewport (fixed positioning)
        viewport: {
          top: top - pageYOffset,
          bottom: pageYOffset - top - height + innerHeight,
          left: left - pageXOffset,
          right: pageXOffset - left - width + innerWidth
        }
      };

      var doc = this.target.ownerDocument;
      var win = doc.defaultView;

      var scrollbarSize = undefined;
      if (win.innerHeight > doc.documentElement.clientHeight) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.bottom -= scrollbarSize.height;
      }

      if (win.innerWidth > doc.documentElement.clientWidth) {
        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
        next.viewport.right -= scrollbarSize.width;
      }

      if (['', 'static'].indexOf(doc.body.style.position) === -1 || ['', 'static'].indexOf(doc.body.parentElement.style.position) === -1) {
        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
        next.page.bottom = doc.body.scrollHeight - top - height;
        next.page.right = doc.body.scrollWidth - left - width;
      }

      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
        (function () {
          var offsetParent = _this7.cache('target-offsetparent', function () {
            return getOffsetParent(_this7.target);
          });
          var offsetPosition = _this7.cache('target-offsetparent-bounds', function () {
            return getBounds(offsetParent);
          });
          var offsetParentStyle = getComputedStyle(offsetParent);
          var offsetParentSize = offsetPosition;

          var offsetBorder = {};
          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
          });

          offsetPosition.right = doc.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
          offsetPosition.bottom = doc.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
              // We're within the visible part of the target's scroll parent
              var scrollTop = offsetParent.scrollTop;
              var scrollLeft = offsetParent.scrollLeft;

              // It's position relative to the target's offset parent (absolute positioning when
              // the element is moved to be a child of the target's offset parent).
              next.offset = {
                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
              };
            }
          }
        })();
      }

      // We could also travel up the DOM and try each containing context, rather than only
      // looking at the body, but we're gonna get diminishing returns.

      this.move(next);

      this.history.unshift(next);

      if (this.history.length > 3) {
        this.history.pop();
      }

      if (flushChanges) {
        flush();
      }

      return true;
    }

    // THE ISSUE
  }, {
    key: 'move',
    value: function move(pos) {
      var _this8 = this;

      if (!(typeof this.element.parentNode !== 'undefined')) {
        return;
      }

      var same = {};

      for (var type in pos) {
        same[type] = {};

        for (var key in pos[type]) {
          var found = false;

          for (var i = 0; i < this.history.length; ++i) {
            var point = this.history[i];
            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
              found = true;
              break;
            }
          }

          if (!found) {
            same[type][key] = true;
          }
        }
      }

      var css = { top: '', left: '', right: '', bottom: '' };

      var transcribe = function transcribe(_same, _pos) {
        var hasOptimizations = typeof _this8.options.optimizations !== 'undefined';
        var gpu = hasOptimizations ? _this8.options.optimizations.gpu : null;
        if (gpu !== false) {
          var yPos = undefined,
              xPos = undefined;
          if (_same.top) {
            css.top = 0;
            yPos = _pos.top;
          } else {
            css.bottom = 0;
            yPos = -_pos.bottom;
          }

          if (_same.left) {
            css.left = 0;
            xPos = _pos.left;
          } else {
            css.right = 0;
            xPos = -_pos.right;
          }

          if (window.matchMedia) {
            // HubSpot/tether#207
            var retina = window.matchMedia('only screen and (min-resolution: 1.3dppx)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3)').matches;
            if (!retina) {
              xPos = Math.round(xPos);
              yPos = Math.round(yPos);
            }
          }

          css[transformKey] = 'translateX(' + xPos + 'px) translateY(' + yPos + 'px)';

          if (transformKey !== 'msTransform') {
            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
            // but IE9 doesn't support 3d transforms and will choke.
            css[transformKey] += " translateZ(0)";
          }
        } else {
          if (_same.top) {
            css.top = _pos.top + 'px';
          } else {
            css.bottom = _pos.bottom + 'px';
          }

          if (_same.left) {
            css.left = _pos.left + 'px';
          } else {
            css.right = _pos.right + 'px';
          }
        }
      };

      var moved = false;
      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
        css.position = 'absolute';
        transcribe(same.page, pos.page);
      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
        css.position = 'fixed';
        transcribe(same.viewport, pos.viewport);
      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
        (function () {
          css.position = 'absolute';
          var offsetParent = _this8.cache('target-offsetparent', function () {
            return getOffsetParent(_this8.target);
          });

          if (getOffsetParent(_this8.element) !== offsetParent) {
            defer(function () {
              _this8.element.parentNode.removeChild(_this8.element);
              offsetParent.appendChild(_this8.element);
            });
          }

          transcribe(same.offset, pos.offset);
          moved = true;
        })();
      } else {
        css.position = 'absolute';
        transcribe({ top: true, left: true }, pos.page);
      }

      if (!moved) {
        if (this.options.bodyElement) {
          if (this.element.parentNode !== this.options.bodyElement) {
            this.options.bodyElement.appendChild(this.element);
          }
        } else {
          var offsetParentIsBody = true;
          var currentNode = this.element.parentNode;
          while (currentNode && currentNode.nodeType === 1 && currentNode.tagName !== 'BODY') {
            if (getComputedStyle(currentNode).position !== 'static') {
              offsetParentIsBody = false;
              break;
            }

            currentNode = currentNode.parentNode;
          }

          if (!offsetParentIsBody) {
            this.element.parentNode.removeChild(this.element);
            this.element.ownerDocument.body.appendChild(this.element);
          }
        }
      }

      // Any css change will trigger a repaint, so let's avoid one if nothing changed
      var writeCSS = {};
      var write = false;
      for (var key in css) {
        var val = css[key];
        var elVal = this.element.style[key];

        if (elVal !== val) {
          write = true;
          writeCSS[key] = val;
        }
      }

      if (write) {
        defer(function () {
          extend(_this8.element.style, writeCSS);
          _this8.trigger('repositioned');
        });
      }
    }
  }]);

  return TetherClass;
})(Evented);

TetherClass.modules = [];

TetherBase.position = position;

var Tether = extend(TetherClass, TetherBase);
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var extend = _TetherBase$Utils.extend;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

function getBoundingRect(tether, to) {
  if (to === 'scrollParent') {
    to = tether.scrollParents[0];
  } else if (to === 'window') {
    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
  }

  if (to === document) {
    to = to.documentElement;
  }

  if (typeof to.nodeType !== 'undefined') {
    (function () {
      var node = to;
      var size = getBounds(to);
      var pos = size;
      var style = getComputedStyle(to);

      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

      // Account any parent Frames scroll offset
      if (node.ownerDocument !== document) {
        var win = node.ownerDocument.defaultView;
        to[0] += win.pageXOffset;
        to[1] += win.pageYOffset;
        to[2] += win.pageXOffset;
        to[3] += win.pageYOffset;
      }

      BOUNDS_FORMAT.forEach(function (side, i) {
        side = side[0].toUpperCase() + side.substr(1);
        if (side === 'Top' || side === 'Left') {
          to[i] += parseFloat(style['border' + side + 'Width']);
        } else {
          to[i] -= parseFloat(style['border' + side + 'Width']);
        }
      });
    })();
  }

  return to;
}

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;
    var targetAttachment = _ref.targetAttachment;

    if (!this.options.constraints) {
      return true;
    }

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
      var _lastSize = this.lastSize;

      // Handle the item getting hidden as a result of our positioning without glitching
      // the classes in and out
      width = _lastSize.width;
      height = _lastSize.height;
    }

    var targetSize = this.cache('target-bounds', function () {
      return _this.getTargetBounds();
    });

    var targetHeight = targetSize.height;
    var targetWidth = targetSize.width;

    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

    this.options.constraints.forEach(function (constraint) {
      var outOfBoundsClass = constraint.outOfBoundsClass;
      var pinnedClass = constraint.pinnedClass;

      if (outOfBoundsClass) {
        allClasses.push(outOfBoundsClass);
      }
      if (pinnedClass) {
        allClasses.push(pinnedClass);
      }
    });

    allClasses.forEach(function (cls) {
      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
        allClasses.push(cls + '-' + side);
      });
    });

    var addClasses = [];

    var tAttachment = extend({}, targetAttachment);
    var eAttachment = extend({}, this.attachment);

    this.options.constraints.forEach(function (constraint) {
      var to = constraint.to;
      var attachment = constraint.attachment;
      var pin = constraint.pin;

      if (typeof attachment === 'undefined') {
        attachment = '';
      }

      var changeAttachX = undefined,
          changeAttachY = undefined;
      if (attachment.indexOf(' ') >= 0) {
        var _attachment$split = attachment.split(' ');

        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

        changeAttachY = _attachment$split2[0];
        changeAttachX = _attachment$split2[1];
      } else {
        changeAttachX = changeAttachY = attachment;
      }

      var bounds = getBoundingRect(_this, to);

      if (changeAttachY === 'target' || changeAttachY === 'both') {
        if (top < bounds[1] && tAttachment.top === 'top') {
          top += targetHeight;
          tAttachment.top = 'bottom';
        }

        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
          top -= targetHeight;
          tAttachment.top = 'top';
        }
      }

      if (changeAttachY === 'together') {
        if (tAttachment.top === 'top') {
          if (eAttachment.top === 'bottom' && top < bounds[1]) {
            top += targetHeight;
            tAttachment.top = 'bottom';

            top += height;
            eAttachment.top = 'top';
          } else if (eAttachment.top === 'top' && top + height > bounds[3] && top - (height - targetHeight) >= bounds[1]) {
            top -= height - targetHeight;
            tAttachment.top = 'bottom';

            eAttachment.top = 'bottom';
          }
        }

        if (tAttachment.top === 'bottom') {
          if (eAttachment.top === 'top' && top + height > bounds[3]) {
            top -= targetHeight;
            tAttachment.top = 'top';

            top -= height;
            eAttachment.top = 'bottom';
          } else if (eAttachment.top === 'bottom' && top < bounds[1] && top + (height * 2 - targetHeight) <= bounds[3]) {
            top += height - targetHeight;
            tAttachment.top = 'top';

            eAttachment.top = 'top';
          }
        }

        if (tAttachment.top === 'middle') {
          if (top + height > bounds[3] && eAttachment.top === 'top') {
            top -= height;
            eAttachment.top = 'bottom';
          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
            top += height;
            eAttachment.top = 'top';
          }
        }
      }

      if (changeAttachX === 'target' || changeAttachX === 'both') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          left += targetWidth;
          tAttachment.left = 'right';
        }

        if (left + width > bounds[2] && tAttachment.left === 'right') {
          left -= targetWidth;
          tAttachment.left = 'left';
        }
      }

      if (changeAttachX === 'together') {
        if (left < bounds[0] && tAttachment.left === 'left') {
          if (eAttachment.left === 'right') {
            left += targetWidth;
            tAttachment.left = 'right';

            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'left') {
            left += targetWidth;
            tAttachment.left = 'right';

            left -= width;
            eAttachment.left = 'right';
          }
        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
          if (eAttachment.left === 'left') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'right') {
            left -= targetWidth;
            tAttachment.left = 'left';

            left += width;
            eAttachment.left = 'left';
          }
        } else if (tAttachment.left === 'center') {
          if (left + width > bounds[2] && eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (left < bounds[0] && eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          }
        }
      }

      if (changeAttachY === 'element' || changeAttachY === 'both') {
        if (top < bounds[1] && eAttachment.top === 'bottom') {
          top += height;
          eAttachment.top = 'top';
        }

        if (top + height > bounds[3] && eAttachment.top === 'top') {
          top -= height;
          eAttachment.top = 'bottom';
        }
      }

      if (changeAttachX === 'element' || changeAttachX === 'both') {
        if (left < bounds[0]) {
          if (eAttachment.left === 'right') {
            left += width;
            eAttachment.left = 'left';
          } else if (eAttachment.left === 'center') {
            left += width / 2;
            eAttachment.left = 'left';
          }
        }

        if (left + width > bounds[2]) {
          if (eAttachment.left === 'left') {
            left -= width;
            eAttachment.left = 'right';
          } else if (eAttachment.left === 'center') {
            left -= width / 2;
            eAttachment.left = 'right';
          }
        }
      }

      if (typeof pin === 'string') {
        pin = pin.split(',').map(function (p) {
          return p.trim();
        });
      } else if (pin === true) {
        pin = ['top', 'left', 'right', 'bottom'];
      }

      pin = pin || [];

      var pinned = [];
      var oob = [];

      if (top < bounds[1]) {
        if (pin.indexOf('top') >= 0) {
          top = bounds[1];
          pinned.push('top');
        } else {
          oob.push('top');
        }
      }

      if (top + height > bounds[3]) {
        if (pin.indexOf('bottom') >= 0) {
          top = bounds[3] - height;
          pinned.push('bottom');
        } else {
          oob.push('bottom');
        }
      }

      if (left < bounds[0]) {
        if (pin.indexOf('left') >= 0) {
          left = bounds[0];
          pinned.push('left');
        } else {
          oob.push('left');
        }
      }

      if (left + width > bounds[2]) {
        if (pin.indexOf('right') >= 0) {
          left = bounds[2] - width;
          pinned.push('right');
        } else {
          oob.push('right');
        }
      }

      if (pinned.length) {
        (function () {
          var pinnedClass = undefined;
          if (typeof _this.options.pinnedClass !== 'undefined') {
            pinnedClass = _this.options.pinnedClass;
          } else {
            pinnedClass = _this.getClass('pinned');
          }

          addClasses.push(pinnedClass);
          pinned.forEach(function (side) {
            addClasses.push(pinnedClass + '-' + side);
          });
        })();
      }

      if (oob.length) {
        (function () {
          var oobClass = undefined;
          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
            oobClass = _this.options.outOfBoundsClass;
          } else {
            oobClass = _this.getClass('out-of-bounds');
          }

          addClasses.push(oobClass);
          oob.forEach(function (side) {
            addClasses.push(oobClass + '-' + side);
          });
        })();
      }

      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
        eAttachment.left = tAttachment.left = false;
      }
      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
        eAttachment.top = tAttachment.top = false;
      }

      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
        _this.updateAttachClasses(eAttachment, tAttachment);
        _this.trigger('update', {
          attachment: eAttachment,
          targetAttachment: tAttachment
        });
      }
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return { top: top, left: left };
  }
});
/* globals TetherBase */

'use strict';

var _TetherBase$Utils = TetherBase.Utils;
var getBounds = _TetherBase$Utils.getBounds;
var updateClasses = _TetherBase$Utils.updateClasses;
var defer = _TetherBase$Utils.defer;

TetherBase.modules.push({
  position: function position(_ref) {
    var _this = this;

    var top = _ref.top;
    var left = _ref.left;

    var _cache = this.cache('element-bounds', function () {
      return getBounds(_this.element);
    });

    var height = _cache.height;
    var width = _cache.width;

    var targetPos = this.getTargetBounds();

    var bottom = top + height;
    var right = left + width;

    var abutted = [];
    if (top <= targetPos.bottom && bottom >= targetPos.top) {
      ['left', 'right'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === left || targetPosSide === right) {
          abutted.push(side);
        }
      });
    }

    if (left <= targetPos.right && right >= targetPos.left) {
      ['top', 'bottom'].forEach(function (side) {
        var targetPosSide = targetPos[side];
        if (targetPosSide === top || targetPosSide === bottom) {
          abutted.push(side);
        }
      });
    }

    var allClasses = [];
    var addClasses = [];

    var sides = ['left', 'top', 'right', 'bottom'];
    allClasses.push(this.getClass('abutted'));
    sides.forEach(function (side) {
      allClasses.push(_this.getClass('abutted') + '-' + side);
    });

    if (abutted.length) {
      addClasses.push(this.getClass('abutted'));
    }

    abutted.forEach(function (side) {
      addClasses.push(_this.getClass('abutted') + '-' + side);
    });

    defer(function () {
      if (!(_this.options.addTargetClasses === false)) {
        updateClasses(_this.target, addClasses, allClasses);
      }
      updateClasses(_this.element, addClasses, allClasses);
    });

    return true;
  }
});
/* globals TetherBase */

'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

TetherBase.modules.push({
  position: function position(_ref) {
    var top = _ref.top;
    var left = _ref.left;

    if (!this.options.shift) {
      return;
    }

    var shift = this.options.shift;
    if (typeof this.options.shift === 'function') {
      shift = this.options.shift.call(this, { top: top, left: left });
    }

    var shiftTop = undefined,
        shiftLeft = undefined;
    if (typeof shift === 'string') {
      shift = shift.split(' ');
      shift[1] = shift[1] || shift[0];

      var _shift = shift;

      var _shift2 = _slicedToArray(_shift, 2);

      shiftTop = _shift2[0];
      shiftLeft = _shift2[1];

      shiftTop = parseFloat(shiftTop, 10);
      shiftLeft = parseFloat(shiftLeft, 10);
    } else {
      shiftTop = shift.top;
      shiftLeft = shift.left;
    }

    top += shiftTop;
    left += shiftLeft;

    return { top: top, left: left };
  }
});
return Tether;

}));
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*
Turbolinks 5.1.0
Copyright © 2018 Basecamp, LLC
 */

(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,e){return Turbolinks.controller.visit(t,e)},clearCache:function(){return Turbolinks.controller.clearCache()},setProgressBarDelay:function(t){return Turbolinks.controller.setProgressBarDelay(t)}}}).call(this),function(){var t,e,r,n=[].slice;Turbolinks.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},Turbolinks.closest=function(e,r){return t.call(e,r)},t=function(){var t,r;return t=document.documentElement,null!=(r=t.closest)?r:function(t){var r;for(r=this;r;){if(r.nodeType===Node.ELEMENT_NODE&&e.call(r,t))return r;r=r.parentNode}}}(),Turbolinks.defer=function(t){return setTimeout(t,1)},Turbolinks.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?n.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},Turbolinks.dispatch=function(t,e){var n,o,i,s,a,u;return a=null!=e?e:{},u=a.target,n=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,n===!0),i.data=null!=o?o:{},i.cancelable&&!r&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},r=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),Turbolinks.match=function(t,r){return e.call(t,r)},e=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),Turbolinks.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}.call(this),function(){Turbolinks.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.HttpRequest=function(){function e(e,r,n){this.delegate=e,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=Turbolinks.Location.wrap(r).requestURL,this.referrer=Turbolinks.Location.wrap(n).absoluteURL,this.createXHR()}return e.NETWORK_FAILURE=0,e.TIMEOUT_FAILURE=-1,e.timeout=60,e.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},e.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},e.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},e.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},e.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},e.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},e.prototype.requestCanceled=function(){return this.endRequest()},e.prototype.notifyApplicationBeforeRequestStart=function(){return Turbolinks.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},e.prototype.notifyApplicationAfterRequestEnd=function(){return Turbolinks.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},e.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},e.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},e.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},e.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.BrowserAdapter=function(){function e(e){this.controller=e,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new Turbolinks.ProgressBar}var r,n,o;return o=Turbolinks.HttpRequest,r=o.NETWORK_FAILURE,n=o.TIMEOUT_FAILURE,e.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},e.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},e.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},e.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},e.prototype.visitRequestCompleted=function(t){return t.loadResponse()},e.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case r:case n:return this.reload();default:return t.loadResponse()}},e.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},e.prototype.visitCompleted=function(t){return t.followRedirect()},e.prototype.pageInvalidated=function(){return this.reload()},e.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},e.prototype.showProgressBar=function(){return this.progressBar.show()},e.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},e.prototype.reload=function(){return window.location.reload()},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.History=function(){function e(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return e.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},e.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},e.prototype.push=function(t,e){return t=Turbolinks.Location.wrap(t),this.update("push",t,e)},e.prototype.replace=function(t,e){return t=Turbolinks.Location.wrap(t),this.update("replace",t,e)},e.prototype.onPopState=function(t){var e,r,n,o;return this.shouldHandlePopState()&&(o=null!=(r=t.state)?r.turbolinks:void 0)?(e=Turbolinks.Location.wrap(window.location),n=o.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(e,n)):void 0},e.prototype.onPageLoad=function(t){return Turbolinks.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},e.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},e.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},e.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},e}()}.call(this),function(){Turbolinks.Snapshot=function(){function t(t){var e,r;r=t.head,e=t.body,this.head=null!=r?r:document.createElement("head"),this.body=null!=e?e:document.createElement("body")}return t.wrap=function(t){return t instanceof this?t:this.fromHTML(t)},t.fromHTML=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromElement(e)},t.fromElement=function(t){return new this({head:t.querySelector("head"),body:t.querySelector("body")})},t.prototype.clone=function(){return new t({head:this.head.cloneNode(!0),body:this.body.cloneNode(!0)})},t.prototype.getRootLocation=function(){var t,e;return e=null!=(t=this.getSetting("root"))?t:"/",new Turbolinks.Location(e)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.body.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){var e,r;return r=this.head.querySelectorAll("meta[name='turbolinks-"+t+"']"),e=r[r.length-1],null!=e?e.getAttribute("content"):void 0},t}()}.call(this),function(){var t=[].slice;Turbolinks.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){Turbolinks.HeadDetails=function(){function t(t){var e,r,i,s,a,u,l;for(this.element=t,this.elements={},l=this.element.childNodes,s=0,u=l.length;u>s;s++)i=l[s],i.nodeType===Node.ELEMENT_NODE&&(a=i.outerHTML,r=null!=(e=this.elements)[a]?e[a]:e[a]={type:o(i),tracked:n(i),elements:[]},r.elements.push(i))}var e,r,n,o;return t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},o=function(t){return e(t)?"script":r(t)?"stylesheet":void 0},n=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},e=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},r=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},t}()}.call(this),function(){var t=function(t,r){function n(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t},e={}.hasOwnProperty;Turbolinks.SnapshotRenderer=function(e){function r(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=new Turbolinks.HeadDetails(this.currentSnapshot.head),this.newHeadDetails=new Turbolinks.HeadDetails(this.newSnapshot.head),this.newBody=this.newSnapshot.body}return t(r,e),r.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},r.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},r.prototype.replaceBody=function(){return this.activateBodyScriptElements(),this.importBodyPermanentElements(),this.assignNewBody()},r.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},r.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},r.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},r.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},r.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},r.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},r.prototype.importBodyPermanentElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyPermanentElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],(t=this.findCurrentBodyPermanentElement(o))?i.push(o.parentNode.replaceChild(t,o)):i.push(void 0);return i},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.assignNewBody=function(){return document.body=this.newBody},r.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.findFirstAutofocusableElement())?t.focus():void 0},r.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},r.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},r.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},r.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},r.prototype.getNewBodyPermanentElements=function(){return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")},r.prototype.findCurrentBodyPermanentElement=function(t){return document.body.querySelector("#"+t.id+"[data-turbolinks-permanent]")},r.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},r.prototype.findFirstAutofocusableElement=function(){return document.body.querySelector("[autofocus]")},r}(Turbolinks.Renderer)}.call(this),function(){var t=function(t,r){function n(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t},e={}.hasOwnProperty;Turbolinks.ErrorRenderer=function(e){function r(t){this.html=t}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(Turbolinks.Renderer)}.call(this),function(){Turbolinks.View=function(){function t(t){this.delegate=t,this.element=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return Turbolinks.Snapshot.fromElement(this.element)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.element.setAttribute("data-turbolinks-preview",""):this.element.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,e,r){return Turbolinks.SnapshotRenderer.render(this.delegate,r,this.getSnapshot(),Turbolinks.Snapshot.wrap(t),e)},t.prototype.renderError=function(t,e){return Turbolinks.ErrorRenderer.render(this.delegate,e,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.ScrollManager=function(){function e(e){this.delegate=e,this.onScroll=t(this.onScroll,this),this.onScroll=Turbolinks.throttle(this.onScroll)}return e.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},e.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},e.prototype.scrollToElement=function(t){return t.scrollIntoView()},e.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},e.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},e.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},e}()}.call(this),function(){Turbolinks.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var e;return t.prototype.has=function(t){var r;return r=e(t),r in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var r;return r=e(t),this.snapshots[r]},t.prototype.write=function(t,r){var n;return n=e(t),this.snapshots[n]=r},t.prototype.touch=function(t){var r,n;return n=e(t),r=this.keys.indexOf(n),r>-1&&this.keys.splice(r,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},e=function(t){return Turbolinks.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.Visit=function(){function e(e,r,n){this.controller=e,this.action=n,this.performScroll=t(this.performScroll,this),this.identifier=Turbolinks.uuid(),this.location=Turbolinks.Location.wrap(r),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var r;return e.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},e.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},e.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},e.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},e.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=r(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},e.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new Turbolinks.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},e.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},e.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},e.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},e.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},e.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},e.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},e.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},e.prototype.requestCompletedWithResponse=function(t,e){return this.response=t,null!=e&&(this.redirectedToLocation=Turbolinks.Location.wrap(e)),this.adapter.visitRequestCompleted(this)},e.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},e.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},e.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},e.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},e.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},e.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},e.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},e.prototype.getTimingMetrics=function(){return Turbolinks.copyObject(this.timingMetrics)},r=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},e.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},e.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},e.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},e.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.Controller=function(){function e(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new Turbolinks.History(this),this.view=new Turbolinks.View(this),this.scrollManager=new Turbolinks.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return e.prototype.start=function(){return Turbolinks.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},e.prototype.disable=function(){return this.enabled=!1},e.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},e.prototype.clearCache=function(){return this.cache=new Turbolinks.SnapshotCache(10)},e.prototype.visit=function(t,e){var r,n;return null==e&&(e={}),t=Turbolinks.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(r=null!=(n=e.action)?n:"advance",this.adapter.visitProposedToLocationWithAction(t,r)):window.location=t:void 0},e.prototype.startVisitToLocationWithAction=function(t,e,r){var n;return Turbolinks.supported?(n=this.getRestorationDataForIdentifier(r),this.startVisit(t,e,{restorationData:n})):window.location=t},e.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},e.prototype.startHistory=function(){return this.location=Turbolinks.Location.wrap(window.location),this.restorationIdentifier=Turbolinks.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.stopHistory=function(){return this.history.stop()},e.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=Turbolinks.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},e.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=Turbolinks.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,e){var r;return this.restorationIdentifier=e,this.enabled?(r=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:r,historyChanged:!0}),this.location=Turbolinks.Location.wrap(t)):this.adapter.pageInvalidated()},e.prototype.getCachedSnapshotForLocation=function(t){var e;return e=this.cache.get(t),e?e.clone():void 0},e.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},e.prototype.cacheSnapshot=function(){var t;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),t=this.view.getSnapshot(),this.cache.put(this.lastRenderedLocation,t.clone())):void 0},e.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},e.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},e.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},e.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},e.prototype.render=function(t,e){return this.view.render(t,e)},e.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},e.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},e.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},e.prototype.pageLoaded=function(){
return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},e.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},e.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},e.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},e.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},e.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,e){return Turbolinks.dispatch("turbolinks:click",{target:t,data:{url:e.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationBeforeVisitingLocation=function(t){return Turbolinks.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationAfterVisitingLocation=function(t){return Turbolinks.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},e.prototype.notifyApplicationBeforeCachingSnapshot=function(){return Turbolinks.dispatch("turbolinks:before-cache")},e.prototype.notifyApplicationBeforeRender=function(t){return Turbolinks.dispatch("turbolinks:before-render",{data:{newBody:t}})},e.prototype.notifyApplicationAfterRender=function(){return Turbolinks.dispatch("turbolinks:render")},e.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),Turbolinks.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},e.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},e.prototype.createVisit=function(t,e,r){var n,o,i,s,a;return o=null!=r?r:{},s=o.restorationIdentifier,i=o.restorationData,n=o.historyChanged,a=new Turbolinks.Visit(this,t,e),a.restorationIdentifier=null!=s?s:Turbolinks.uuid(),a.restorationData=Turbolinks.copyObject(i),a.historyChanged=n,a.referrer=this.location,a},e.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},e.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},e.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?Turbolinks.closest(t,"a[href]:not([target]):not([download])"):void 0},e.prototype.getVisitableLocationForLink=function(t){var e;return e=new Turbolinks.Location(t.getAttribute("href")),this.locationIsVisitable(e)?e:void 0},e.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},e.prototype.nodeIsVisitable=function(t){var e;return(e=Turbolinks.closest(t,"[data-turbolinks]"))?"false"!==e.getAttribute("data-turbolinks"):!0},e.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},e.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},e.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},e}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,e,r;Turbolinks.start=function(){return e()?(null==Turbolinks.controller&&(Turbolinks.controller=t()),Turbolinks.controller.start()):void 0},e=function(){return null==window.Turbolinks&&(window.Turbolinks=Turbolinks),r()},t=function(){var t;return t=new Turbolinks.Controller,t.adapter=new Turbolinks.BrowserAdapter(t),t},r=function(){return window.Turbolinks===Turbolinks},r()&&Turbolinks.start()}.call(this);
/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(){function t(t){return t.replace(/<.[^<>]*?>/g," ").replace(/&nbsp;|&#160;/gi," ").replace(/[.(),;:!?%#$'"_+=\/\-]*/g,"")}jQuery.validator.addMethod("maxWords",function(e,i,a){return this.optional(i)||a>=t(e).match(/\b\w+\b/g).length},jQuery.validator.format("Please enter {0} words or less.")),jQuery.validator.addMethod("minWords",function(e,i,a){return this.optional(i)||t(e).match(/\b\w+\b/g).length>=a},jQuery.validator.format("Please enter at least {0} words.")),jQuery.validator.addMethod("rangeWords",function(e,i,a){var r=t(e),n=/\b\w+\b/g;return this.optional(i)||r.match(n).length>=a[0]&&r.match(n).length<=a[1]},jQuery.validator.format("Please enter between {0} and {1} words."))})(),jQuery.validator.addMethod("letterswithbasicpunc",function(t,e){return this.optional(e)||/^[a-z\-.,()'"\s]+$/i.test(t)},"Letters or punctuation only please"),jQuery.validator.addMethod("alphanumeric",function(t,e){return this.optional(e)||/^\w+$/i.test(t)},"Letters, numbers, and underscores only please"),jQuery.validator.addMethod("lettersonly",function(t,e){return this.optional(e)||/^[a-z]+$/i.test(t)},"Letters only please"),jQuery.validator.addMethod("nowhitespace",function(t,e){return this.optional(e)||/^\S+$/i.test(t)},"No white space please"),jQuery.validator.addMethod("ziprange",function(t,e){return this.optional(e)||/^90[2-5]\d\{2\}-\d{4}$/.test(t)},"Your ZIP-code must be in the range 902xx-xxxx to 905-xx-xxxx"),jQuery.validator.addMethod("zipcodeUS",function(t,e){return this.optional(e)||/\d{5}-\d{4}$|^\d{5}$/.test(t)},"The specified US ZIP Code is invalid"),jQuery.validator.addMethod("integer",function(t,e){return this.optional(e)||/^-?\d+$/.test(t)},"A positive or negative non-decimal number please"),jQuery.validator.addMethod("vinUS",function(t){if(17!==t.length)return!1;var e,i,a,r,n,s,u=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","R","S","T","U","V","W","X","Y","Z"],d=[1,2,3,4,5,6,7,8,1,2,3,4,5,7,9,2,3,4,5,6,7,8,9],o=[8,7,6,5,4,3,2,10,0,9,8,7,6,5,4,3,2],l=0;for(e=0;17>e;e++){if(r=o[e],a=t.slice(e,e+1),8===e&&(s=a),isNaN(a)){for(i=0;u.length>i;i++)if(a.toUpperCase()===u[i]){a=d[i],a*=r,isNaN(s)&&8===i&&(s=u[i]);break}}else a*=r;l+=a}return n=l%11,10===n&&(n="X"),n===s?!0:!1},"The specified vehicle identification number (VIN) is invalid."),jQuery.validator.addMethod("dateITA",function(t,e){var i=!1,a=/^\d{1,2}\/\d{1,2}\/\d{4}$/;if(a.test(t)){var r=t.split("/"),n=parseInt(r[0],10),s=parseInt(r[1],10),u=parseInt(r[2],10),d=new Date(u,s-1,n);i=d.getFullYear()===u&&d.getMonth()===s-1&&d.getDate()===n?!0:!1}else i=!1;return this.optional(e)||i},"Please enter a correct date"),jQuery.validator.addMethod("iban",function(t,e){if(this.optional(e))return!0;if(!/^([a-zA-Z0-9]{4} ){2,8}[a-zA-Z0-9]{1,4}|[a-zA-Z0-9]{12,34}$/.test(t))return!1;var i=t.replace(/ /g,"").toUpperCase(),a=i.substring(0,2),r={AL:"\\d{8}[\\dA-Z]{16}",AD:"\\d{8}[\\dA-Z]{12}",AT:"\\d{16}",AZ:"[\\dA-Z]{4}\\d{20}",BE:"\\d{12}",BH:"[A-Z]{4}[\\dA-Z]{14}",BA:"\\d{16}",BR:"\\d{23}[A-Z][\\dA-Z]",BG:"[A-Z]{4}\\d{6}[\\dA-Z]{8}",CR:"\\d{17}",HR:"\\d{17}",CY:"\\d{8}[\\dA-Z]{16}",CZ:"\\d{20}",DK:"\\d{14}",DO:"[A-Z]{4}\\d{20}",EE:"\\d{16}",FO:"\\d{14}",FI:"\\d{14}",FR:"\\d{10}[\\dA-Z]{11}\\d{2}",GE:"[\\dA-Z]{2}\\d{16}",DE:"\\d{18}",GI:"[A-Z]{4}[\\dA-Z]{15}",GR:"\\d{7}[\\dA-Z]{16}",GL:"\\d{14}",GT:"[\\dA-Z]{4}[\\dA-Z]{20}",HU:"\\d{24}",IS:"\\d{22}",IE:"[\\dA-Z]{4}\\d{14}",IL:"\\d{19}",IT:"[A-Z]\\d{10}[\\dA-Z]{12}",KZ:"\\d{3}[\\dA-Z]{13}",KW:"[A-Z]{4}[\\dA-Z]{22}",LV:"[A-Z]{4}[\\dA-Z]{13}",LB:"\\d{4}[\\dA-Z]{20}",LI:"\\d{5}[\\dA-Z]{12}",LT:"\\d{16}",LU:"\\d{3}[\\dA-Z]{13}",MK:"\\d{3}[\\dA-Z]{10}\\d{2}",MT:"[A-Z]{4}\\d{5}[\\dA-Z]{18}",MR:"\\d{23}",MU:"[A-Z]{4}\\d{19}[A-Z]{3}",MC:"\\d{10}[\\dA-Z]{11}\\d{2}",MD:"[\\dA-Z]{2}\\d{18}",ME:"\\d{18}",NL:"[A-Z]{4}\\d{10}",NO:"\\d{11}",PK:"[\\dA-Z]{4}\\d{16}",PS:"[\\dA-Z]{4}\\d{21}",PL:"\\d{24}",PT:"\\d{21}",RO:"[A-Z]{4}[\\dA-Z]{16}",SM:"[A-Z]\\d{10}[\\dA-Z]{12}",SA:"\\d{2}[\\dA-Z]{18}",RS:"\\d{18}",SK:"\\d{20}",SI:"\\d{15}",ES:"\\d{20}",SE:"\\d{20}",CH:"\\d{5}[\\dA-Z]{12}",TN:"\\d{20}",TR:"\\d{5}[\\dA-Z]{17}",AE:"\\d{3}\\d{16}",GB:"[A-Z]{4}\\d{14}",VG:"[\\dA-Z]{4}\\d{16}"},n=r[a];if(n!==void 0){var s=RegExp("^[A-Z]{2}\\d{2}"+n+"$","");if(!s.test(i))return!1}for(var u,d=i.substring(4,i.length)+i.substring(0,4),o="",l=!0,h=0;d.length>h;h++)u=d.charAt(h),"0"!==u&&(l=!1),l||(o+="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(u));for(var F="",c="",m=0;o.length>m;m++){var f=o.charAt(m);c=""+F+f,F=c%97}return 1===F},"Please specify a valid IBAN"),jQuery.validator.addMethod("dateNL",function(t,e){return this.optional(e)||/^(0?[1-9]|[12]\d|3[01])[\.\/\-](0?[1-9]|1[012])[\.\/\-]([12]\d)?(\d\d)$/.test(t)},"Please enter a correct date"),jQuery.validator.addMethod("phoneNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)[1-9]((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid phone number."),jQuery.validator.addMethod("mobileNL",function(t,e){return this.optional(e)||/^((\+|00(\s|\s?\-\s?)?)31(\s|\s?\-\s?)?(\(0\)[\-\s]?)?|0)6((\s|\s?\-\s?)?[0-9]){8}$/.test(t)},"Please specify a valid mobile number"),jQuery.validator.addMethod("postalcodeNL",function(t,e){return this.optional(e)||/^[1-9][0-9]{3}\s?[a-zA-Z]{2}$/.test(t)},"Please specify a valid postal code"),jQuery.validator.addMethod("bankaccountNL",function(t,e){if(this.optional(e))return!0;if(!/^[0-9]{9}|([0-9]{2} ){3}[0-9]{3}$/.test(t))return!1;for(var i=t.replace(/ /g,""),a=0,r=i.length,n=0;r>n;n++){var s=r-n,u=i.substring(n,n+1);a+=s*u}return 0===a%11},"Please specify a valid bank account number"),jQuery.validator.addMethod("giroaccountNL",function(t,e){return this.optional(e)||/^[0-9]{1,7}$/.test(t)},"Please specify a valid giro account number"),jQuery.validator.addMethod("bankorgiroaccountNL",function(t,e){return this.optional(e)||$.validator.methods.bankaccountNL.call(this,t,e)||$.validator.methods.giroaccountNL.call(this,t,e)},"Please specify a valid bank or giro account number"),jQuery.validator.addMethod("time",function(t,e){return this.optional(e)||/^([01]\d|2[0-3])(:[0-5]\d){1,2}$/.test(t)},"Please enter a valid time, between 00:00 and 23:59"),jQuery.validator.addMethod("time12h",function(t,e){return this.optional(e)||/^((0?[1-9]|1[012])(:[0-5]\d){1,2}(\ ?[AP]M))$/i.test(t)},"Please enter a valid time in 12-hour am/pm format"),jQuery.validator.addMethod("phoneUS",function(t,e){return t=t.replace(/\s+/g,""),this.optional(e)||t.length>9&&t.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("phoneUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?)|(?:\(?0))(?:\d{2}\)?\s?\d{4}\s?\d{4}|\d{3}\)?\s?\d{3}\s?\d{3,4}|\d{4}\)?\s?(?:\d{5}|\d{3}\s?\d{3})|\d{5}\)?\s?\d{4,5})$/)},"Please specify a valid phone number"),jQuery.validator.addMethod("mobileUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)7(?:[45789]\d{2}|624)\s?\d{3}\s?\d{3})$/)},"Please specify a valid mobile number"),jQuery.validator.addMethod("phonesUK",function(t,e){return t=t.replace(/\(|\)|\s+|-/g,""),this.optional(e)||t.length>9&&t.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/)},"Please specify a valid uk phone number"),jQuery.validator.addMethod("postcodeUK",function(t,e){return this.optional(e)||/^((([A-PR-UWYZ][0-9])|([A-PR-UWYZ][0-9][0-9])|([A-PR-UWYZ][A-HK-Y][0-9])|([A-PR-UWYZ][A-HK-Y][0-9][0-9])|([A-PR-UWYZ][0-9][A-HJKSTUW])|([A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?([0-9][ABD-HJLNP-UW-Z]{2})|(GIR)\s?(0AA))$/i.test(t)},"Please specify a valid UK postcode"),jQuery.validator.addMethod("strippedminlength",function(t,e,i){return jQuery(t).text().length>=i},jQuery.validator.format("Please enter at least {0} characters")),jQuery.validator.addMethod("email2",function(t,e){return this.optional(e)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(t)},jQuery.validator.messages.email),jQuery.validator.addMethod("url2",function(t,e){return this.optional(e)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)*(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},jQuery.validator.messages.url),jQuery.validator.addMethod("creditcardtypes",function(t,e,i){if(/[^0-9\-]+/.test(t))return!1;t=t.replace(/\D/g,"");var a=0;return i.mastercard&&(a|=1),i.visa&&(a|=2),i.amex&&(a|=4),i.dinersclub&&(a|=8),i.enroute&&(a|=16),i.discover&&(a|=32),i.jcb&&(a|=64),i.unknown&&(a|=128),i.all&&(a=255),1&a&&/^(5[12345])/.test(t)?16===t.length:2&a&&/^(4)/.test(t)?16===t.length:4&a&&/^(3[47])/.test(t)?15===t.length:8&a&&/^(3(0[012345]|[68]))/.test(t)?14===t.length:16&a&&/^(2(014|149))/.test(t)?15===t.length:32&a&&/^(6011)/.test(t)?16===t.length:64&a&&/^(3)/.test(t)?16===t.length:64&a&&/^(2131|1800)/.test(t)?15===t.length:128&a?!0:!1},"Please enter a valid credit card number."),jQuery.validator.addMethod("ipv4",function(t,e){return this.optional(e)||/^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i.test(t)},"Please enter a valid IP v4 address."),jQuery.validator.addMethod("ipv6",function(t,e){return this.optional(e)||/^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i.test(t)},"Please enter a valid IP v6 address."),jQuery.validator.addMethod("pattern",function(t,e,i){return this.optional(e)?!0:("string"==typeof i&&(i=RegExp("^(?:"+i+")$")),i.test(t))},"Invalid format."),jQuery.validator.addMethod("require_from_group",function(t,e,i){var a=this,r=i[1],n=$(r,e.form).filter(function(){return a.elementValue(this)}).length>=i[0];if(!$(e).data("being_validated")){var s=$(r,e.form);s.data("being_validated",!0),s.valid(),s.data("being_validated",!1)}return n},jQuery.format("Please fill at least {0} of these fields.")),jQuery.validator.addMethod("skip_or_fill_minimum",function(t,e,i){var a=this,r=i[0],n=i[1],s=$(n,e.form).filter(function(){return a.elementValue(this)}).length,u=s>=r||0===s;if(!$(e).data("being_validated")){var d=$(n,e.form);d.data("being_validated",!0),d.valid(),d.data("being_validated",!1)}return u},jQuery.format("Please either skip these fields or fill at least {0} of them.")),jQuery.validator.addMethod("accept",function(t,e,i){var a,r,n="string"==typeof i?i.replace(/\s/g,"").replace(/,/g,"|"):"image/*",s=this.optional(e);if(s)return s;if("file"===$(e).attr("type")&&(n=n.replace(/\*/g,".*"),e.files&&e.files.length))for(a=0;e.files.length>a;a++)if(r=e.files[a],!r.type.match(RegExp(".?("+n+")$","i")))return!1;return!0},jQuery.format("Please enter a value with a valid mimetype.")),jQuery.validator.addMethod("extension",function(t,e,i){return i="string"==typeof i?i.replace(/,/g,"|"):"png|jpe?g|gif",this.optional(e)||t.match(RegExp(".("+i+")$","i"))},jQuery.format("Please enter a value with a valid extension."));
/* ============================================================
 * bootstrapSwitch v1.3 by Larentis Mattia @spiritualGuru
 * http://www.larentis.eu/switch/
 * ============================================================
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 * ============================================================ */


!function ($) {
  "use strict";

  $.fn['bootstrapSwitch'] = function (method) {
    var methods = {
      init: function () {
        return this.each(function () {
            var $element = $(this)
              , $div
              , $switchLeft
              , $switchRight
              , $label
              , myClasses = ""
              , classes = $element.attr('class')
              , color
              , moving
              , onLabel = "ON"
              , offLabel = "OFF"
              , icon = false;

            $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
              if (classes.indexOf(el) >= 0)
                myClasses = el;
            });

            $element.addClass('has-switch');

            if ($element.data('on') !== undefined)
              color = "switch-" + $element.data('on');

            if ($element.data('on-label') !== undefined)
              onLabel = $element.data('on-label');

            if ($element.data('off-label') !== undefined)
              offLabel = $element.data('off-label');

            if ($element.data('icon') !== undefined)
              icon = $element.data('icon');

            $switchLeft = $('<span>')
              .addClass("switch-left")
              .addClass(myClasses)
              .addClass(color)
              .html(onLabel);

            color = '';
            if ($element.data('off') !== undefined)
              color = "switch-" + $element.data('off');

            $switchRight = $('<span>')
              .addClass("switch-right")
              .addClass(myClasses)
              .addClass(color)
              .html(offLabel);

            $label = $('<label>')
              .html("&nbsp;")
              .addClass(myClasses)
              .attr('for', $element.find('input').attr('id'));

            if (icon) {
              $label.html('<i class="' + icon + '"></i>');
            }

            $div = $element.find(':checkbox').wrap($('<div>')).parent().data('animated', false);

            if ($element.data('animated') !== false)
              $div.addClass('switch-animate').data('animated', true);

            $div
              .append($switchLeft)
              .append($label)
              .append($switchRight);

            $element.find('>div').addClass(
              $element.find('input').is(':checked') ? 'switch-on' : 'switch-off'
            );

            if ($element.find('input').is(':disabled'))
              $(this).addClass('deactivate');

            var changeStatus = function ($this) {
              $this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click');
            };

            $element.on('keydown', function (e) {
              if (e.keyCode === 32) {
                e.stopImmediatePropagation();
                e.preventDefault();
                changeStatus($(e.target).find('span:first'));
              }
            });

            $switchLeft.on('click', function (e) {
              changeStatus($(this));
            });

            $switchRight.on('click', function (e) {
              changeStatus($(this));
            });

            $element.find('input').on('change', function (e) {
              var $this = $(this)
                , $element = $this.parent()
                , thisState = $this.is(':checked')
                , state = $element.is('.switch-off');

              e.preventDefault();

              $element.css('left', '');

              if (state === thisState) {

                if (thisState)
                  $element.removeClass('switch-off').addClass('switch-on');
                else $element.removeClass('switch-on').addClass('switch-off');

                if ($element.data('animated') !== false)
                  $element.addClass("switch-animate");

                $element.parent().trigger('switch-change', {'el': $this, 'value': thisState})
              }
            });

            $element.find('label').on('mousedown touchstart', function (e) {
              var $this = $(this);
              moving = false;

              e.preventDefault();
              e.stopImmediatePropagation();

              $this.closest('div').removeClass('switch-animate');

              if ($this.closest('.has-switch').is('.deactivate'))
                $this.unbind('click');
              else {
                $this.on('mousemove touchmove', function (e) {
                  var $element = $(this).closest('.switch')
                    , relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left
                    , percent = (relativeX / $element.width()) * 100
                    , left = 25
                    , right = 75;

                  moving = true;

                  if (percent < left)
                    percent = left;
                  else if (percent > right)
                    percent = right;

                  $element.find('>div').css('left', (percent - right) + "%")
                });

                $this.on('click touchend', function (e) {
                  var $this = $(this)
                    , $target = $(e.target)
                    , $myCheckBox = $target.siblings('input');

                  e.stopImmediatePropagation();
                  e.preventDefault();

                  $this.unbind('mouseleave');

                  if (moving)
                    $myCheckBox.prop('checked', !(parseInt($this.parent().css('left')) < -25));
                  else $myCheckBox.prop("checked", !$myCheckBox.is(":checked"));

                  moving = false;
                  $myCheckBox.trigger('change');
                });

                $this.on('mouseleave', function (e) {
                  var $this = $(this)
                    , $myCheckBox = $this.siblings('input');

                  e.preventDefault();
                  e.stopImmediatePropagation();

                  $this.unbind('mouseleave');
                  $this.trigger('mouseup');

                  $myCheckBox.prop('checked', !(parseInt($this.parent().css('left')) < -25)).trigger('change');
                });

                $this.on('mouseup', function (e) {
                  e.stopImmediatePropagation();
                  e.preventDefault();

                  $(this).unbind('mousemove');
                });
              }
            });
          }
        );
      },
      toggleActivation: function () {
        $(this).toggleClass('deactivate');
      },
      isActive: function () {
        return !$(this).hasClass('deactivate');
      },
      setActive: function (active) {
        if (active)
          $(this).removeClass('deactivate');
        else $(this).addClass('deactivate');
      },
      toggleState: function (skipOnChange) {
        var $input = $(this).find('input:checkbox');
        $input.prop('checked', !$input.is(':checked')).trigger('change', skipOnChange);
      },
      setState: function (value, skipOnChange) {
        $(this).find('input:checkbox').prop('checked', value).trigger('change', skipOnChange);
      },
      status: function () {
        return $(this).find('input:checkbox').is(':checked');
      },
      destroy: function () {
        var $div = $(this).find('div')
          , $checkbox;

        $div.find(':not(input:checkbox)').remove();

        $checkbox = $div.children();
        $checkbox.unwrap().unwrap();

        $checkbox.unbind('change');

        return $checkbox;
      }
    };

    if (methods[method])
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    else if (typeof method === 'object' || !method)
      return methods.init.apply(this, arguments);
    else
      $.error('Method ' + method + ' does not exist!');
  };
}(jQuery);

$(function () {
  $('.switch')['bootstrapSwitch']();
});
/**
* bootstrap.js v3.0.0 by @fat and @mdo
* Copyright 2013 Twitter Inc.
* http://www.apache.org/licenses/LICENSE-2.0
*/

if(!jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(window.jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]');if(a.length){var b=this.$element.find("input").prop("checked",!this.$element.hasClass("active")).trigger("change");"radio"===b.prop("type")&&a.find(".active").removeClass("active")}this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(window.jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("dropdown");d||c.data("dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(window.jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(window.jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(window.jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(window.jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.attr("data-target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(window.jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(window.jQuery);
(function() {
  (function() {
    (function() {
      var slice = [].slice;

      this.ActionCable = {
        INTERNAL: {
          "message_types": {
            "welcome": "welcome",
            "ping": "ping",
            "confirmation": "confirm_subscription",
            "rejection": "reject_subscription"
          },
          "default_mount_path": "/cable",
          "protocols": ["actioncable-v1-json", "actioncable-unsupported"]
        },
        createConsumer: function(url) {
          var ref;
          if (url == null) {
            url = (ref = this.getConfig("url")) != null ? ref : this.INTERNAL.default_mount_path;
          }
          return new ActionCable.Consumer(this.createWebSocketURL(url));
        },
        getConfig: function(name) {
          var element;
          element = document.head.querySelector("meta[name='action-cable-" + name + "']");
          return element != null ? element.getAttribute("content") : void 0;
        },
        createWebSocketURL: function(url) {
          var a;
          if (url && !/^wss?:/i.test(url)) {
            a = document.createElement("a");
            a.href = url;
            a.href = a.href;
            a.protocol = a.protocol.replace("http", "ws");
            return a.href;
          } else {
            return url;
          }
        },
        startDebugging: function() {
          return this.debugging = true;
        },
        stopDebugging: function() {
          return this.debugging = null;
        },
        log: function() {
          var messages;
          messages = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          if (this.debugging) {
            messages.push(Date.now());
            return console.log.apply(console, ["[ActionCable]"].concat(slice.call(messages)));
          }
        }
      };

    }).call(this);
  }).call(this);

  var ActionCable = this.ActionCable;

  (function() {
    (function() {
      var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

      ActionCable.ConnectionMonitor = (function() {
        var clamp, now, secondsSince;

        ConnectionMonitor.pollInterval = {
          min: 3,
          max: 30
        };

        ConnectionMonitor.staleThreshold = 6;

        function ConnectionMonitor(connection) {
          this.connection = connection;
          this.visibilityDidChange = bind(this.visibilityDidChange, this);
          this.reconnectAttempts = 0;
        }

        ConnectionMonitor.prototype.start = function() {
          if (!this.isRunning()) {
            this.startedAt = now();
            delete this.stoppedAt;
            this.startPolling();
            document.addEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor started. pollInterval = " + (this.getPollInterval()) + " ms");
          }
        };

        ConnectionMonitor.prototype.stop = function() {
          if (this.isRunning()) {
            this.stoppedAt = now();
            this.stopPolling();
            document.removeEventListener("visibilitychange", this.visibilityDidChange);
            return ActionCable.log("ConnectionMonitor stopped");
          }
        };

        ConnectionMonitor.prototype.isRunning = function() {
          return (this.startedAt != null) && (this.stoppedAt == null);
        };

        ConnectionMonitor.prototype.recordPing = function() {
          return this.pingedAt = now();
        };

        ConnectionMonitor.prototype.recordConnect = function() {
          this.reconnectAttempts = 0;
          this.recordPing();
          delete this.disconnectedAt;
          return ActionCable.log("ConnectionMonitor recorded connect");
        };

        ConnectionMonitor.prototype.recordDisconnect = function() {
          this.disconnectedAt = now();
          return ActionCable.log("ConnectionMonitor recorded disconnect");
        };

        ConnectionMonitor.prototype.startPolling = function() {
          this.stopPolling();
          return this.poll();
        };

        ConnectionMonitor.prototype.stopPolling = function() {
          return clearTimeout(this.pollTimeout);
        };

        ConnectionMonitor.prototype.poll = function() {
          return this.pollTimeout = setTimeout((function(_this) {
            return function() {
              _this.reconnectIfStale();
              return _this.poll();
            };
          })(this), this.getPollInterval());
        };

        ConnectionMonitor.prototype.getPollInterval = function() {
          var interval, max, min, ref;
          ref = this.constructor.pollInterval, min = ref.min, max = ref.max;
          interval = 5 * Math.log(this.reconnectAttempts + 1);
          return Math.round(clamp(interval, min, max) * 1000);
        };

        ConnectionMonitor.prototype.reconnectIfStale = function() {
          if (this.connectionIsStale()) {
            ActionCable.log("ConnectionMonitor detected stale connection. reconnectAttempts = " + this.reconnectAttempts + ", pollInterval = " + (this.getPollInterval()) + " ms, time disconnected = " + (secondsSince(this.disconnectedAt)) + " s, stale threshold = " + this.constructor.staleThreshold + " s");
            this.reconnectAttempts++;
            if (this.disconnectedRecently()) {
              return ActionCable.log("ConnectionMonitor skipping reopening recent disconnect");
            } else {
              ActionCable.log("ConnectionMonitor reopening");
              return this.connection.reopen();
            }
          }
        };

        ConnectionMonitor.prototype.connectionIsStale = function() {
          var ref;
          return secondsSince((ref = this.pingedAt) != null ? ref : this.startedAt) > this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.disconnectedRecently = function() {
          return this.disconnectedAt && secondsSince(this.disconnectedAt) < this.constructor.staleThreshold;
        };

        ConnectionMonitor.prototype.visibilityDidChange = function() {
          if (document.visibilityState === "visible") {
            return setTimeout((function(_this) {
              return function() {
                if (_this.connectionIsStale() || !_this.connection.isOpen()) {
                  ActionCable.log("ConnectionMonitor reopening stale connection on visibilitychange. visbilityState = " + document.visibilityState);
                  return _this.connection.reopen();
                }
              };
            })(this), 200);
          }
        };

        now = function() {
          return new Date().getTime();
        };

        secondsSince = function(time) {
          return (now() - time) / 1000;
        };

        clamp = function(number, min, max) {
          return Math.max(min, Math.min(max, number));
        };

        return ConnectionMonitor;

      })();

    }).call(this);
    (function() {
      var i, message_types, protocols, ref, supportedProtocols, unsupportedProtocol,
        slice = [].slice,
        bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
        indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

      ref = ActionCable.INTERNAL, message_types = ref.message_types, protocols = ref.protocols;

      supportedProtocols = 2 <= protocols.length ? slice.call(protocols, 0, i = protocols.length - 1) : (i = 0, []), unsupportedProtocol = protocols[i++];

      ActionCable.Connection = (function() {
        Connection.reopenDelay = 500;

        function Connection(consumer) {
          this.consumer = consumer;
          this.open = bind(this.open, this);
          this.subscriptions = this.consumer.subscriptions;
          this.monitor = new ActionCable.ConnectionMonitor(this);
          this.disconnected = true;
        }

        Connection.prototype.send = function(data) {
          if (this.isOpen()) {
            this.webSocket.send(JSON.stringify(data));
            return true;
          } else {
            return false;
          }
        };

        Connection.prototype.open = function() {
          if (this.isActive()) {
            ActionCable.log("Attempted to open WebSocket, but existing socket is " + (this.getState()));
            throw new Error("Existing connection must be closed before opening");
          } else {
            ActionCable.log("Opening WebSocket, current state is " + (this.getState()) + ", subprotocols: " + protocols);
            if (this.webSocket != null) {
              this.uninstallEventHandlers();
            }
            this.webSocket = new WebSocket(this.consumer.url, protocols);
            this.installEventHandlers();
            this.monitor.start();
            return true;
          }
        };

        Connection.prototype.close = function(arg) {
          var allowReconnect, ref1;
          allowReconnect = (arg != null ? arg : {
            allowReconnect: true
          }).allowReconnect;
          if (!allowReconnect) {
            this.monitor.stop();
          }
          if (this.isActive()) {
            return (ref1 = this.webSocket) != null ? ref1.close() : void 0;
          }
        };

        Connection.prototype.reopen = function() {
          var error;
          ActionCable.log("Reopening WebSocket, current state is " + (this.getState()));
          if (this.isActive()) {
            try {
              return this.close();
            } catch (error1) {
              error = error1;
              return ActionCable.log("Failed to reopen WebSocket", error);
            } finally {
              ActionCable.log("Reopening WebSocket in " + this.constructor.reopenDelay + "ms");
              setTimeout(this.open, this.constructor.reopenDelay);
            }
          } else {
            return this.open();
          }
        };

        Connection.prototype.getProtocol = function() {
          var ref1;
          return (ref1 = this.webSocket) != null ? ref1.protocol : void 0;
        };

        Connection.prototype.isOpen = function() {
          return this.isState("open");
        };

        Connection.prototype.isActive = function() {
          return this.isState("open", "connecting");
        };

        Connection.prototype.isProtocolSupported = function() {
          var ref1;
          return ref1 = this.getProtocol(), indexOf.call(supportedProtocols, ref1) >= 0;
        };

        Connection.prototype.isState = function() {
          var ref1, states;
          states = 1 <= arguments.length ? slice.call(arguments, 0) : [];
          return ref1 = this.getState(), indexOf.call(states, ref1) >= 0;
        };

        Connection.prototype.getState = function() {
          var ref1, state, value;
          for (state in WebSocket) {
            value = WebSocket[state];
            if (value === ((ref1 = this.webSocket) != null ? ref1.readyState : void 0)) {
              return state.toLowerCase();
            }
          }
          return null;
        };

        Connection.prototype.installEventHandlers = function() {
          var eventName, handler;
          for (eventName in this.events) {
            handler = this.events[eventName].bind(this);
            this.webSocket["on" + eventName] = handler;
          }
        };

        Connection.prototype.uninstallEventHandlers = function() {
          var eventName;
          for (eventName in this.events) {
            this.webSocket["on" + eventName] = function() {};
          }
        };

        Connection.prototype.events = {
          message: function(event) {
            var identifier, message, ref1, type;
            if (!this.isProtocolSupported()) {
              return;
            }
            ref1 = JSON.parse(event.data), identifier = ref1.identifier, message = ref1.message, type = ref1.type;
            switch (type) {
              case message_types.welcome:
                this.monitor.recordConnect();
                return this.subscriptions.reload();
              case message_types.ping:
                return this.monitor.recordPing();
              case message_types.confirmation:
                return this.subscriptions.notify(identifier, "connected");
              case message_types.rejection:
                return this.subscriptions.reject(identifier);
              default:
                return this.subscriptions.notify(identifier, "received", message);
            }
          },
          open: function() {
            ActionCable.log("WebSocket onopen event, using '" + (this.getProtocol()) + "' subprotocol");
            this.disconnected = false;
            if (!this.isProtocolSupported()) {
              ActionCable.log("Protocol is unsupported. Stopping monitor and disconnecting.");
              return this.close({
                allowReconnect: false
              });
            }
          },
          close: function(event) {
            ActionCable.log("WebSocket onclose event");
            if (this.disconnected) {
              return;
            }
            this.disconnected = true;
            this.monitor.recordDisconnect();
            return this.subscriptions.notifyAll("disconnected", {
              willAttemptReconnect: this.monitor.isRunning()
            });
          },
          error: function() {
            return ActionCable.log("WebSocket onerror event");
          }
        };

        return Connection;

      })();

    }).call(this);
    (function() {
      var slice = [].slice;

      ActionCable.Subscriptions = (function() {
        function Subscriptions(consumer) {
          this.consumer = consumer;
          this.subscriptions = [];
        }

        Subscriptions.prototype.create = function(channelName, mixin) {
          var channel, params, subscription;
          channel = channelName;
          params = typeof channel === "object" ? channel : {
            channel: channel
          };
          subscription = new ActionCable.Subscription(this.consumer, params, mixin);
          return this.add(subscription);
        };

        Subscriptions.prototype.add = function(subscription) {
          this.subscriptions.push(subscription);
          this.consumer.ensureActiveConnection();
          this.notify(subscription, "initialized");
          this.sendCommand(subscription, "subscribe");
          return subscription;
        };

        Subscriptions.prototype.remove = function(subscription) {
          this.forget(subscription);
          if (!this.findAll(subscription.identifier).length) {
            this.sendCommand(subscription, "unsubscribe");
          }
          return subscription;
        };

        Subscriptions.prototype.reject = function(identifier) {
          var i, len, ref, results, subscription;
          ref = this.findAll(identifier);
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            this.forget(subscription);
            this.notify(subscription, "rejected");
            results.push(subscription);
          }
          return results;
        };

        Subscriptions.prototype.forget = function(subscription) {
          var s;
          this.subscriptions = (function() {
            var i, len, ref, results;
            ref = this.subscriptions;
            results = [];
            for (i = 0, len = ref.length; i < len; i++) {
              s = ref[i];
              if (s !== subscription) {
                results.push(s);
              }
            }
            return results;
          }).call(this);
          return subscription;
        };

        Subscriptions.prototype.findAll = function(identifier) {
          var i, len, ref, results, s;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            s = ref[i];
            if (s.identifier === identifier) {
              results.push(s);
            }
          }
          return results;
        };

        Subscriptions.prototype.reload = function() {
          var i, len, ref, results, subscription;
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.sendCommand(subscription, "subscribe"));
          }
          return results;
        };

        Subscriptions.prototype.notifyAll = function() {
          var args, callbackName, i, len, ref, results, subscription;
          callbackName = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
          ref = this.subscriptions;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            subscription = ref[i];
            results.push(this.notify.apply(this, [subscription, callbackName].concat(slice.call(args))));
          }
          return results;
        };

        Subscriptions.prototype.notify = function() {
          var args, callbackName, i, len, results, subscription, subscriptions;
          subscription = arguments[0], callbackName = arguments[1], args = 3 <= arguments.length ? slice.call(arguments, 2) : [];
          if (typeof subscription === "string") {
            subscriptions = this.findAll(subscription);
          } else {
            subscriptions = [subscription];
          }
          results = [];
          for (i = 0, len = subscriptions.length; i < len; i++) {
            subscription = subscriptions[i];
            results.push(typeof subscription[callbackName] === "function" ? subscription[callbackName].apply(subscription, args) : void 0);
          }
          return results;
        };

        Subscriptions.prototype.sendCommand = function(subscription, command) {
          var identifier;
          identifier = subscription.identifier;
          return this.consumer.send({
            command: command,
            identifier: identifier
          });
        };

        return Subscriptions;

      })();

    }).call(this);
    (function() {
      ActionCable.Subscription = (function() {
        var extend;

        function Subscription(consumer, params, mixin) {
          this.consumer = consumer;
          if (params == null) {
            params = {};
          }
          this.identifier = JSON.stringify(params);
          extend(this, mixin);
        }

        Subscription.prototype.perform = function(action, data) {
          if (data == null) {
            data = {};
          }
          data.action = action;
          return this.send(data);
        };

        Subscription.prototype.send = function(data) {
          return this.consumer.send({
            command: "message",
            identifier: this.identifier,
            data: JSON.stringify(data)
          });
        };

        Subscription.prototype.unsubscribe = function() {
          return this.consumer.subscriptions.remove(this);
        };

        extend = function(object, properties) {
          var key, value;
          if (properties != null) {
            for (key in properties) {
              value = properties[key];
              object[key] = value;
            }
          }
          return object;
        };

        return Subscription;

      })();

    }).call(this);
    (function() {
      ActionCable.Consumer = (function() {
        function Consumer(url) {
          this.url = url;
          this.subscriptions = new ActionCable.Subscriptions(this);
          this.connection = new ActionCable.Connection(this);
        }

        Consumer.prototype.send = function(data) {
          return this.connection.send(data);
        };

        Consumer.prototype.connect = function() {
          return this.connection.open();
        };

        Consumer.prototype.disconnect = function() {
          return this.connection.close({
            allowReconnect: false
          });
        };

        Consumer.prototype.ensureActiveConnection = function() {
          if (!this.connection.isActive()) {
            return this.connection.open();
          }
        };

        return Consumer;

      })();

    }).call(this);
  }).call(this);

  if (typeof module === "object" && module.exports) {
    module.exports = ActionCable;
  } else if (typeof define === "function" && define.amd) {
    define(ActionCable);
  }
}).call(this);
// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//




(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
(function() {


}).call(this);
jQuery.fn.vectorMap('addMap', 'map', {"width":"744.09448819","height":"1052.3622047","paths":{"path5320-3":{"name":"name0","path":"m-327.84 17.50c0.01 -1.09 0.27 -2.45 0.58 -3.03 0.32 -0.58 0.58 -2.18 0.58 -3.62 0.01 -1.59 0.22 -2.79 0.55 -3.13 0.30 -0.30 3.93 -2.80 8.09 -5.54 6.59 -4.36 7.80 -5.33 9.54 -7.66 3.65 -4.88 8.22 -8.10 12.34 -8.69 1.08 -0.15 3.10 -0.03 4.68 0.28 3.49 0.69 5.09 0.22 10.28 -2.99l3.63 -2.24 0.01 -2.40c0.00 -1.33 -0.17 -2.40 -0.39 -2.40 -0.50 0.00 -0.52 -1.90 -0.03 -2.86 0.31 -0.60 -0.99 -2.07 -7.40 -8.42 -4.28 -4.24 -8.53 -8.17 -9.45 -8.75 -1.59 -0.99 -1.96 -1.04 -6.93 -0.95 -3.77 0.07 -5.36 -0.05 -5.66 -0.42 -0.35 -0.44 -1.03 -2.08 -2.49 -6.01 -0.33 -0.88 -0.40 -0.89 -2.45 -0.32 -1.16 0.32 -2.48 0.59 -2.92 0.59 -0.70 -0.00 -2.86 -2.41 -8.38 -9.36 -0.79 -0.99 -0.83 -1.00 -3.19 -0.41 -3.41 0.84 -5.06 0.75 -7.86 -0.44 -1.35 -0.57 -2.52 -1.04 -2.59 -1.04 -0.07 0.00 -0.13 1.78 -0.13 3.95 0.00 4.84 -0.51 6.56 -3.64 12.33 -3.18 5.87 -5.99 9.70 -8.62 11.78 -2.66 2.10 -3.39 3.53 -4.49 8.88 -0.48 2.30 -0.99 4.29 -1.14 4.43 -0.15 0.14 -2.16 -0.08 -4.47 -0.51 -2.31 -0.42 -4.91 -0.78 -5.79 -0.79 -0.95 -0.01 -3.59 -0.86 -6.53 -2.10 -2.72 -1.14 -5.11 -2.08 -5.32 -2.08 -0.21 0.00 -1.16 0.56 -2.12 1.25 -0.96 0.69 -1.94 1.25 -2.18 1.25 -0.24 0.00 -1.51 -0.56 -2.81 -1.25 -1.30 -0.69 -2.60 -1.25 -2.88 -1.25 -0.28 0.00 -1.57 0.57 -2.86 1.25 -1.29 0.69 -2.84 1.25 -3.44 1.25 -1.67 0.00 -6.92 -1.29 -7.42 -1.82 -0.24 -0.26 -0.95 -2.39 -1.56 -4.73 -0.61 -2.34 -1.23 -4.46 -1.38 -4.71 -0.19 -0.32 -1.12 -0.26 -3.16 0.18 -1.59 0.35 -3.12 0.64 -3.41 0.64 -0.29 0.00 -1.75 -1.95 -3.26 -4.34l-2.74 -4.34 -3.89 2.04c-2.14 1.12 -4.12 2.04 -4.39 2.04 -0.27 0.00 -1.77 -1.32 -3.33 -2.94l-2.83 -2.94 -4.73 1.50c-5.71 1.81 -5.12 1.50 -11.85 6.31 -3.00 2.15 -5.72 4.01 -6.04 4.14 -0.41 0.16 -1.37 -1.14 -3.28 -4.49 -3.33 -5.82 -5.03 -8.06 -6.92 -9.08 -2.03 -1.10 -3.60 -2.97 -6.02 -7.23 -1.78 -3.13 -2.64 -4.13 -5.96 -6.94 -4.32 -3.66 -5.62 -5.24 -7.11 -8.65 -0.76 -1.73 -1.34 -2.47 -2.27 -2.87 -1.76 -0.77 -8.86 -2.76 -8.41 -2.37 0.20 0.18 1.03 0.83 1.83 1.45 1.07 0.82 1.65 1.71 2.15 3.32 0.90 2.90 3.06 7.21 7.08 14.09l3.29 5.63 3.65 0.12 3.65 0.12 6.53 8.38c5.01 6.43 6.52 8.63 6.48 9.48 -0.03 0.61 -0.19 2.35 -0.35 3.86 -0.24 2.22 -0.08 3.98 0.81 8.97 0.61 3.42 1.15 6.27 1.19 6.33 0.04 0.06 1.38 -0.46 2.98 -1.15 1.60 -0.69 3.15 -1.26 3.44 -1.26 0.68 0.00 4.91 3.65 7.99 6.90 1.34 1.41 4.73 5.51 7.53 9.10l5.10 6.53 3.62 0.00c1.99 0.00 4.77 -0.21 6.18 -0.47 2.65 -0.48 3.14 -0.44 12.47 1.16 2.09 0.36 4.67 1.01 5.74 1.45l1.95 0.80 4.25 -1.48 4.25 -1.48 5.97 3.19 5.97 3.19 3.40 -0.36c6.73 -0.71 9.49 -0.37 17.45 2.14l7.27 2.29 6.71 0.03c5.40 0.02 7.14 0.18 8.90 0.79 1.30 0.45 3.46 0.78 5.29 0.81l3.09 0.04 0.01 -1.98z"},"path5336-6":{"name":"name1","path":"m-498.08 330.13c1.29 -0.70 4.28 -3.99 4.89 -5.38 0.31 -0.72 0.26 -1.62 -0.21 -3.50 -0.35 -1.40 -0.63 -2.81 -0.63 -3.15 0.00 -0.38 1.29 -1.13 3.41 -1.99 1.88 -0.76 3.56 -1.68 3.74 -2.04 0.18 -0.36 0.55 -2.54 0.83 -4.84 0.28 -2.30 0.66 -4.49 0.85 -4.88 0.22 -0.44 2.53 -1.46 6.04 -2.68 4.95 -1.71 6.14 -1.98 9.16 -2.00 3.46 -0.03 3.48 -0.03 4.99 1.48 2.10 2.10 2.91 2.45 5.63 2.45 4.57 0.00 7.82 -1.89 14.05 -8.15 4.55 -4.58 4.58 -4.60 12.98 -7.25 4.49 -1.42 7.47 -3.18 8.31 -4.93 0.31 -0.64 0.67 -2.53 0.80 -4.20 0.29 -3.82 1.76 -7.34 4.05 -9.68 1.71 -1.75 1.72 -1.76 8.99 -3.30l7.28 -1.55 2.40 -3.53c3.07 -4.51 4.96 -6.61 6.66 -7.37 1.65 -0.74 5.00 -4.00 7.73 -7.53l2.03 -2.62 7.98 0.00 7.98 0.00 2.83 -2.24 2.83 -2.24 8.55 -18.71 8.55 -18.71 19.12 -28.19c10.52 -15.51 19.91 -28.97 20.87 -29.91 2.31 -2.27 4.50 -3.30 8.68 -4.05 5.34 -0.96 8.66 -2.87 13.92 -8.01l2.14 -2.09 -0.13 -6.33c-0.15 -7.06 0.36 -9.96 2.14 -12.17 0.84 -1.05 0.99 -1.66 0.99 -4.04 0.00 -4.02 2.14 -8.43 6.18 -12.72 4.12 -4.38 14.20 -20.51 18.79 -30.08 0.98 -2.04 1.78 -3.79 1.78 -3.89 0.00 -0.10 -1.12 0.09 -2.50 0.42 -6.57 1.58 -18.59 6.44 -37.51 15.18l-11.06 5.11 -2.92 9.03 -2.92 9.03 -1.47 -0.09c-2.40 -0.14 -8.25 -2.05 -19.79 -6.45 -6.80 -2.59 -17.27 -6.09 -27.91 -9.32 -13.20 -4.00 -17.40 -5.44 -18.66 -6.39 -0.90 -0.67 -2.89 -3.02 -4.43 -5.23 -1.54 -2.20 -3.25 -4.37 -3.80 -4.81 -2.35 -1.89 -7.04 -3.13 -13.67 -3.61 -3.61 -0.27 -3.89 -0.23 -3.90 0.48 -0.00 0.42 -0.63 10.44 -1.39 22.26 -0.76 11.82 -1.39 21.73 -1.39 22.02 -0.00 0.29 -0.19 0.52 -0.43 0.52 -0.50 0.00 -10.82 -4.55 -11.23 -4.95 -0.15 -0.15 -0.59 -3.22 -0.97 -6.83l-0.69 -6.56 -5.62 0.04c-5.43 0.04 -5.76 -0.01 -9.62 -1.41l-3.99 -1.45 -5.38 2.76 -5.38 2.76 -1.89 3.76c-1.04 2.07 -1.90 3.86 -1.90 3.98 -0.01 0.12 1.56 1.03 3.48 2.02 7.75 4.00 13.22 8.82 17.07 15.04 2.05 3.32 6.31 12.43 8.78 18.82 0.85 2.18 1.59 4.03 1.64 4.12 0.06 0.08 3.90 0.57 8.53 1.09 4.64 0.51 8.60 1.11 8.81 1.33 0.24 0.25 0.09 2.22 -0.43 5.38 -1.44 8.85 -3.40 15.01 -6.62 20.84 -4.13 7.47 -4.16 7.56 -4.17 14.82l-0.01 6.47 -3.01 4.80c-4.36 6.96 -6.41 11.54 -7.19 16.07 -0.87 5.09 -1.21 5.91 -3.52 8.47l-1.99 2.21 0.49 2.50c0.27 1.38 0.59 2.76 0.70 3.07 0.22 0.61 -0.75 1.61 -6.63 6.86 -2.09 1.86 -4.07 3.38 -4.41 3.38 -0.34 0.00 -1.33 -0.76 -2.20 -1.70 -2.26 -2.44 -4.29 -3.56 -9.70 -5.35l-4.77 -1.58 -3.08 7.76c-3.31 8.33 -3.53 9.51 -2.86 14.86l0.32 2.50 -2.12 3.71c-1.73 3.03 -2.70 4.21 -5.31 6.41 -1.76 1.48 -3.25 2.85 -3.32 3.03 -0.07 0.19 0.43 1.48 1.10 2.87 0.67 1.39 1.22 2.72 1.22 2.95 0.00 0.51 -11.68 6.69 -12.65 6.69 -0.38 0.00 -2.45 -0.61 -4.61 -1.34 -3.52 -1.21 -4.02 -1.28 -4.81 -0.75 -0.49 0.33 -1.96 0.98 -3.27 1.46 -1.86 0.68 -2.43 1.09 -2.61 1.89 -0.16 0.71 -0.72 1.21 -1.84 1.66 -0.89 0.35 -3.18 1.64 -5.09 2.86 -4.75 3.05 -7.46 4.01 -10.04 3.57 -1.10 -0.19 -3.25 -0.34 -4.79 -0.34 -2.35 -0.01 -3.15 0.19 -4.99 1.23 -2.26 1.27 -7.01 5.94 -8.20 8.04 -0.42 0.75 -3.57 3.11 -8.51 6.40l-7.84 5.22 -0.12 1.65 -0.12 1.65 3.92 2.02 3.92 2.02 2.14 -1.39c1.75 -1.14 2.55 -1.39 4.38 -1.40 2.54 -0.01 3.79 -0.65 9.89 -5.07 2.02 -1.46 3.84 -2.65 4.06 -2.65 0.22 0.00 1.68 4.04 3.26 8.97 1.57 4.94 2.98 8.97 3.13 8.97 0.15 -0.00 2.06 -0.56 4.26 -1.24 2.20 -0.68 4.36 -1.24 4.81 -1.24 0.54 -0.01 1.39 0.80 2.50 2.38 1.88 2.68 1.91 2.78 1.07 4.87l-0.60 1.51 2.02 0.00c1.11 0.00 2.52 -0.27 3.12 -0.59z"},"comuna_8":{"name":"name2","path":"m-147.71 190.57c3.95 -4.17 6.80 -6.45 8.08 -6.45 0.81 0.00 1.40 -0.55 2.77 -2.61l1.74 -2.61 15.32 -6.57c8.43 -3.61 15.41 -6.66 15.51 -6.77 0.10 -0.11 -0.37 -2.55 -1.06 -5.42 -1.13 -4.73 -1.49 -6.91 -1.12 -6.91 0.07 0.00 3.38 -0.37 7.34 -0.83 5.55 -0.64 7.70 -0.74 9.35 -0.41 2.63 0.52 9.53 2.88 9.53 3.26 0.00 0.15 -0.27 2.63 -0.60 5.50 -0.33 2.87 -0.59 5.63 -0.60 6.13l0.00 0.91 2.69 -0.81c1.48 -0.45 3.33 -0.99 4.10 -1.21 1.22 -0.35 1.59 -0.79 2.83 -3.42l1.43 -3.02 4.35 -1.47 4.35 -1.47 2.16 -3.03 2.16 -3.03 2.63 -0.01c1.45 -0.00 2.83 -0.14 3.07 -0.31 0.24 -0.17 0.92 -1.10 1.50 -2.08 0.77 -1.29 1.33 -1.77 2.02 -1.77 1.91 0.00 2.22 -0.37 2.22 -2.67 0.00 -4.75 1.88 -9.71 4.97 -13.12 1.70 -1.87 2.78 -3.91 6.84 -12.94 4.79 -10.66 4.82 -10.72 3.85 -11.00 -2.04 -0.61 -10.88 -1.96 -15.66 -2.40 -2.74 -0.25 -5.53 -0.61 -6.19 -0.79 -0.73 -0.20 -2.14 -0.12 -3.59 0.20 -3.40 0.76 -7.80 0.68 -12.00 -0.22 -3.28 -0.71 -3.87 -0.73 -6.39 -0.19 -1.53 0.33 -5.66 0.70 -9.19 0.84 -6.31 0.24 -6.50 0.23 -11.38 -1.09 -4.22 -1.14 -6.27 -1.43 -13.74 -1.91 -7.39 -0.48 -23.61 -2.08 -29.60 -2.92l-1.65 -0.23 -2.79 -5.72c-2.20 -4.50 -2.85 -6.28 -3.08 -8.33l-0.29 -2.61 -1.95 0.00c-1.21 0.00 -4.06 0.71 -7.54 1.87 -10.94 3.66 -24.88 7.87 -31.86 9.60l-2.89 0.72 0.00 3.64c0.00 2.92 0.35 5.06 1.76 10.91 2.51 10.35 3.13 15.06 2.95 22.22 -0.12 4.63 -0.34 6.56 -1.03 8.85 -1.27 4.21 -3.87 33.51 -3.56 40.19 0.20 4.39 -0.13 8.98 -0.77 10.73 -0.24 0.65 -0.12 0.71 0.89 0.48 0.64 -0.15 3.74 -0.45 6.88 -0.68 4.63 -0.33 6.39 -0.65 9.23 -1.67 1.93 -0.69 4.30 -1.26 5.27 -1.26 2.67 0.00 11.22 1.18 11.49 1.59 0.13 0.20 0.77 1.23 1.43 2.31 1.05 1.72 2.74 2.88 4.60 3.17 0.12 0.02 1.55 -1.39 3.19 -3.12z"},"path6074":{"name":"name3","path":"m261.46 948.71 -2.96 -6.23 2.04 -4.52c3.17 -7.02 3.88 -9.64 3.89 -14.53 0.01 -3.76 -0.11 -4.44 -1.18 -6.89 -0.66 -1.49 -2.11 -3.85 -3.24 -5.24 -2.77 -3.42 -2.96 -3.87 -2.95 -7.15 0.00 -3.36 1.04 -7.84 4.34 -18.73 6.45 -21.28 8.95 -27.30 14.64 -35.24 1.89 -2.64 3.73 -5.36 4.09 -6.05 0.71 -1.37 0.91 -6.39 0.36 -9.06l-0.31 -1.55 8.50 -5.92c4.67 -3.25 8.55 -5.96 8.62 -6.02 0.06 -0.05 -0.53 -2.79 -1.32 -6.07l-1.44 -5.97 4.18 -4.41 4.18 -4.41 -6.99 -7.93c-3.85 -4.36 -8.36 -9.62 -10.03 -11.69 -1.67 -2.07 -4.99 -5.94 -7.37 -8.60 -2.39 -2.66 -4.94 -5.77 -5.67 -6.91 -1.29 -2.00 -2.61 -5.37 -2.61 -6.64 0.00 -0.54 -0.16 -0.54 -1.23 0.04 -1.52 0.82 -2.18 2.45 -2.55 6.24 -0.28 2.85 -0.38 3.06 -4.06 8.45 -2.07 3.04 -3.97 5.53 -4.21 5.53 -1.02 0.00 -8.02 -3.85 -11.66 -6.41 -2.18 -1.53 -4.41 -2.79 -4.99 -2.82 -2.44 -0.10 -4.09 0.20 -8.51 1.54 -2.57 0.78 -4.98 1.42 -5.36 1.42 -0.81 0.00 -3.75 -1.73 -5.84 -3.43 -1.02 -0.83 -1.63 -1.77 -1.94 -2.96 -0.25 -0.96 -0.63 -2.26 -0.86 -2.90 -0.57 -1.64 -4.39 -5.19 -8.64 -8.04l-3.64 -2.45 0.00 -5.50c0.00 -4.01 0.17 -5.99 0.64 -7.33 0.36 -1.02 0.76 -3.95 0.90 -6.63l0.26 -4.80 2.57 -3.96c1.41 -2.18 2.92 -4.90 3.34 -6.05 1.10 -2.96 1.35 -9.54 0.51 -13.30 -1.22 -5.43 -4.02 -11.63 -7.16 -15.86 -1.36 -1.83 -1.90 -5.30 -1.07 -6.92 0.41 -0.80 0.26 -1.41 -1.10 -4.36 -0.87 -1.89 -3.22 -6.21 -5.22 -9.62 -2.01 -3.40 -3.65 -6.45 -3.65 -6.76 0.00 -0.31 1.63 -2.68 3.63 -5.27 6.10 -7.89 6.48 -8.98 7.21 -20.38 0.26 -4.09 0.61 -7.66 0.77 -7.94 0.23 -0.39 1.00 -0.37 3.43 0.07 3.97 0.73 4.16 0.71 10.01 -0.71l4.88 -1.19 -0.29 -2.30c-0.51 -4.01 -0.24 -8.40 0.85 -13.98 0.58 -2.98 2.04 -14.63 3.24 -25.88 1.20 -11.25 2.55 -22.24 2.99 -24.42 0.44 -2.18 0.81 -5.43 0.81 -7.22l0.01 -3.26 -2.63 -3.42c-1.45 -1.88 -2.93 -3.56 -3.29 -3.72 -0.36 -0.16 -2.90 -0.58 -5.64 -0.94l-4.97 -0.64 -1.47 1.02c-3.21 2.22 -13.85 11.92 -24.68 22.51 -2.28 2.22 -4.33 3.98 -4.57 3.89 -0.24 -0.08 -0.72 -2.48 -1.07 -5.34 -0.70 -5.68 -0.87 -6.14 -3.49 -9.72l-1.80 -2.45 0.48 -2.71c0.26 -1.49 0.42 -2.76 0.36 -2.82 -0.07 -0.06 -2.07 -0.40 -4.46 -0.76 -2.39 -0.36 -4.50 -0.82 -4.69 -1.02 -0.19 -0.20 -0.55 -4.42 -0.78 -9.38 -0.52 -10.89 -0.06 -20.04 1.22 -23.88 0.68 -2.04 0.82 -3.50 0.82 -8.52l0.00 -6.05 11.03 -15.38c6.06 -8.46 11.11 -15.38 11.22 -15.38 0.11 0.00 3.08 1.34 6.61 2.97l6.41 2.97 3.83 -0.89c3.19 -0.74 10.75 -1.72 13.27 -1.72 0.60 -0.00 0.61 -0.19 0.10 -2.19 -0.31 -1.21 -0.56 -3.89 -0.56 -5.96l-0.01 -3.77 2.50 -1.47c1.37 -0.81 3.26 -1.82 4.20 -2.24 1.20 -0.55 1.65 -0.97 1.51 -1.44 -1.86 -6.37 -2.29 -8.88 -2.40 -14.02 -0.09 -4.51 -0.29 -5.99 -1.15 -8.78 -1.18 -3.79 -1.84 -8.00 -1.85 -11.68l-0.00 -2.50 3.29 -2.40c1.81 -1.32 4.82 -3.74 6.68 -5.38 2.84 -2.50 6.58 -5.28 9.75 -7.25 0.63 -0.39 3.04 -7.95 3.00 -9.39 -0.01 -0.34 -2.51 -2.87 -5.55 -5.62 -6.34 -5.73 -7.31 -7.13 -9.62 -13.97 -2.49 -7.40 -4.01 -9.99 -7.59 -12.95 -1.83 -1.51 -2.01 -1.57 -6.10 -1.84 -2.32 -0.16 -4.84 -0.56 -5.62 -0.90 -1.05 -0.46 -3.12 -0.61 -8.23 -0.61l-6.82 0.00 -7.47 -2.38c-8.13 -2.59 -7.42 -2.51 -19.14 -2.09 -2.37 0.08 -2.76 -0.05 -8.11 -2.91l-5.63 -3.00 -4.10 1.51 -4.10 1.51 -2.16 -0.94c-1.19 -0.52 -4.32 -1.31 -6.95 -1.76 -2.64 -0.45 -5.61 -0.97 -6.60 -1.15 -1.00 -0.18 -2.34 -0.17 -2.99 0.04 -0.65 0.21 -3.69 0.41 -6.75 0.44l-5.56 0.07 -2.75 -3.55c-6.72 -8.66 -10.50 -13.05 -13.63 -15.83l-3.36 -2.98 -3.66 1.53c-2.04 0.85 -3.79 1.37 -3.96 1.16 -0.17 -0.20 -0.90 -3.63 -1.62 -7.62 -1.28 -7.06 -1.40 -9.75 -0.60 -13.11 0.18 -0.74 -1.04 -2.55 -6.03 -8.96l-6.25 -8.03 -3.65 0.00 -3.65 0.00 -4.45 -7.83c-5.02 -8.83 -5.34 -9.47 -6.30 -12.54 -0.68 -2.17 -0.80 -2.28 -6.09 -5.99 -7.29 -5.10 -6.89 -5.36 3.62 -2.34 10.93 3.15 10.77 3.07 12.17 6.08 1.69 3.65 3.00 5.24 7.31 8.89 3.32 2.81 4.18 3.81 5.96 6.94 2.46 4.31 3.65 5.75 5.62 6.81 1.94 1.04 3.65 3.21 6.53 8.27 1.32 2.31 2.54 4.21 2.71 4.22 0.17 0.01 2.73 -1.70 5.67 -3.79 4.77 -3.38 5.89 -3.98 10.15 -5.40 7.59 -2.54 6.97 -2.59 10.18 0.81l2.76 2.91 3.92 -2.06c2.16 -1.13 4.17 -2.06 4.48 -2.06 0.44 0.00 2.36 2.74 5.88 8.42 0.13 0.21 1.50 0.09 3.12 -0.27 4.90 -1.08 4.52 -1.35 6.03 4.38 0.73 2.76 1.52 5.17 1.76 5.35 0.55 0.43 4.37 1.32 5.66 1.32 0.54 0.00 2.05 -0.56 3.35 -1.25 1.30 -0.69 2.64 -1.25 2.98 -1.25 0.33 0.00 1.75 0.59 3.15 1.31l2.55 1.31 1.83 -1.31c1.00 -0.72 2.17 -1.31 2.59 -1.31 0.42 0.00 2.73 0.86 5.12 1.92 3.32 1.46 5.30 2.05 8.34 2.48 2.20 0.31 4.73 0.69 5.64 0.84l1.65 0.28 0.68 -3.28c1.07 -5.15 2.17 -7.29 4.80 -9.36 3.32 -2.62 6.97 -7.93 10.31 -14.99 1.22 -2.58 1.28 -2.96 1.41 -8.45 0.15 -6.71 -0.09 -6.47 4.51 -4.46 3.31 1.44 4.61 1.54 8.31 0.64 1.41 -0.35 2.78 -0.50 3.04 -0.34 0.34 0.21 7.55 8.81 8.43 10.05 0.06 0.08 1.36 -0.17 2.90 -0.56 1.54 -0.39 2.95 -0.61 3.15 -0.48 0.20 0.13 0.95 1.84 1.68 3.80l1.32 3.56 5.03 0.01c4.01 0.01 5.36 0.16 6.64 0.77 1.67 0.80 4.16 3.08 13.54 12.46 5.55 5.54 5.57 5.58 5.11 6.84 -0.60 1.66 -0.38 2.10 1.48 3.00 1.76 0.85 3.54 0.56 5.91 -0.96 1.70 -1.09 2.08 -1.07 6.28 0.41 1.95 0.69 3.87 1.25 4.27 1.25 0.76 -0.00 10.30 -4.85 10.30 -5.23 0.00 -0.12 -0.54 -1.33 -1.20 -2.70 -0.66 -1.36 -1.20 -2.67 -1.20 -2.91 0.00 -0.24 1.62 -1.76 3.59 -3.39 2.83 -2.34 3.99 -3.64 5.49 -6.15l1.90 -3.19 0.00 -5.43 0.00 -5.43 3.27 -8.13c1.80 -4.47 3.45 -8.19 3.67 -8.27 0.53 -0.19 10.65 3.14 12.43 4.09 0.77 0.41 2.25 1.53 3.29 2.49 1.19 1.09 2.08 1.62 2.40 1.42 1.68 -1.05 8.29 -7.46 8.29 -8.03 -0.00 -0.38 -0.26 -1.70 -0.58 -2.94l-0.57 -2.25 2.56 -3.12c2.12 -2.58 2.60 -3.45 2.80 -5.05 0.80 -6.52 2.37 -10.50 7.36 -18.65l3.21 -5.25 0.00 -5.97c0.00 -7.03 0.13 -7.53 3.83 -14.47 1.45 -2.71 3.17 -6.39 3.83 -8.17 1.63 -4.39 4.26 -16.84 3.56 -16.83 -2.20 0.02 -16.33 -1.87 -16.64 -2.23 -0.24 -0.27 -1.12 -2.27 -1.96 -4.45 -2.57 -6.66 -7.14 -16.34 -9.26 -19.63 -3.91 -6.05 -9.36 -10.55 -17.49 -14.44 -1.86 -0.89 -3.39 -1.87 -3.39 -2.17 -0.00 -0.31 1.00 -2.60 2.22 -5.10 1.75 -3.57 2.54 -4.74 3.69 -5.50 2.64 -1.71 10.12 -5.34 11.02 -5.34 0.48 0.00 2.48 0.59 4.45 1.32 3.31 1.22 4.05 1.33 10.06 1.50 4.49 0.13 6.49 0.34 6.51 0.67 0.01 0.26 0.33 3.29 0.70 6.73 0.77 7.12 0.08 6.09 5.89 8.69l3.22 1.44 1.29 -20.92c0.71 -11.51 1.38 -21.56 1.50 -22.34l0.22 -1.41 5.66 0.24c11.00 0.46 14.40 2.16 19.33 9.64 1.04 1.58 2.62 3.41 3.49 4.06 1.21 0.90 5.76 2.45 18.76 6.38 9.79 2.96 20.86 6.63 25.75 8.52 9.30 3.60 17.97 6.59 19.76 6.82l1.12 0.14 2.83 -8.76 2.83 -8.76 8.38 -3.88c25.56 -11.84 35.26 -15.66 44.20 -17.42 0.77 -0.15 1.41 -0.79 2.20 -2.19 0.93 -1.66 1.11 -2.45 1.11 -4.93 0.00 -2.57 0.14 -3.15 1.08 -4.44 1.18 -1.62 1.93 -3.44 2.91 -7.07 0.71 -2.64 0.46 -2.50 5.74 -3.33l3.34 -0.53 0.71 -1.74c0.39 -0.96 1.03 -2.80 1.42 -4.09 0.67 -2.23 0.67 -2.51 0.03 -5.38 -0.37 -1.66 -0.67 -3.23 -0.67 -3.49 0.01 -0.57 6.76 -1.42 11.35 -1.42l3.33 0.00 0.24 2.61c0.13 1.43 0.43 6.55 0.66 11.37 0.62 12.72 -0.21 10.95 6.83 14.64 19.55 10.24 27.53 16.94 32.25 27.10 2.71 5.84 3.21 8.22 3.43 16.24 0.31 11.81 0.63 13.31 3.75 17.73 3.97 5.64 4.82 8.71 4.83 17.40 0.01 6.31 0.58 9.48 1.97 10.79 0.42 0.40 1.86 1.27 3.19 1.92 1.88 0.93 6.39 3.81 7.59 4.85 0.09 0.08 0.67 4.36 1.28 9.51 0.61 5.15 1.37 10.00 1.68 10.79 0.31 0.78 2.53 3.47 4.93 5.98 4.53 4.73 7.62 9.12 9.03 12.83 0.70 1.84 0.80 2.85 0.66 6.75 -0.30 8.95 -0.15 13.70 0.50 15.27 0.34 0.82 0.75 2.84 0.90 4.47 0.23 2.39 0.67 3.76 2.24 6.97 1.08 2.20 1.96 4.42 1.96 4.94 0.00 2.16 -8.09 15.28 -11.91 19.31 -1.28 1.36 -2.58 2.94 -2.87 3.51 -1.05 2.04 -0.62 5.64 1.44 12.10l1.93 6.05 0.21 7.30 0.21 7.30 1.98 6.12 1.98 6.12 -0.68 10.36c-0.41 6.23 -0.72 16.61 -0.78 26.02l-0.09 15.65 1.24 2.71c0.68 1.49 2.17 4.02 3.29 5.63 1.13 1.60 2.05 3.07 2.05 3.26 0.00 0.19 3.55 0.22 7.89 0.06 8.60 -0.31 16.88 0.25 20.02 1.35 3.67 1.29 6.57 3.55 12.42 9.71 6.08 6.40 10.49 10.32 14.13 12.60 1.20 0.75 2.28 1.75 2.41 2.22 0.12 0.47 0.23 2.27 0.23 3.99 0.01 1.72 0.27 4.91 0.59 7.10 0.32 2.18 0.70 6.13 0.84 8.77l0.26 4.80 3.46 3.40c2.30 2.26 3.89 4.24 4.74 5.90 1.24 2.43 1.27 2.64 1.27 7.77 0.00 5.95 0.00 5.95 -4.28 13.47 -2.69 4.72 -5.03 10.33 -6.09 14.59 -0.71 2.82 -0.81 4.53 -0.81 13.51l0.00 10.29 -3.09 2.88c-5.14 4.77 -8.93 8.65 -10.14 10.37 -0.98 1.40 -1.14 2.01 -1.15 4.38 0.00 3.15 -1.02 5.41 -4.02 8.96 -1.97 2.34 -1.94 1.86 -0.96 13.13 0.58 6.64 0.63 6.83 3.49 12.39 0.67 1.31 0.86 2.41 0.87 5.06 0.02 4.15 -0.57 5.18 -5.02 8.85 -1.76 1.45 -3.29 3.10 -3.68 3.95 -0.84 1.85 -0.87 7.12 -0.06 11.77 0.32 1.84 0.58 3.65 0.58 4.02 0.01 1.12 -10.02 3.83 -25.40 6.85 -5.08 1.00 -10.46 2.11 -11.96 2.48l-2.71 0.66 -3.31 -3.45 -3.31 -3.45 0.00 -11.95 0.00 -11.95 -2.50 -1.83c-11.97 -8.78 -15.54 -17.03 -12.67 -29.31 0.84 -3.61 0.88 -4.22 0.43 -6.35 -0.90 -4.18 -5.10 -7.91 -10.58 -9.37 -1.74 -0.46 -3.20 -0.79 -3.25 -0.74 -0.05 0.06 -1.02 1.56 -2.16 3.34 -3.97 6.22 -9.93 10.80 -20.97 16.12 -20.74 9.99 -23.41 11.92 -28.28 20.48l-1.86 3.28 -11.08 8.47c-11.86 9.08 -14.56 11.60 -18.81 17.62 -5.02 7.11 -6.78 10.28 -15.26 27.56 -6.97 14.20 -10.57 20.77 -12.85 23.48 -1.99 2.37 -6.23 6.04 -14.65 12.67l-6.91 5.45 -2.85 0.00 -2.85 0.00 -2.17 2.30c-1.19 1.26 -2.39 2.30 -2.66 2.30 -0.27 0.00 -3.24 -1.42 -6.61 -3.16 -6.57 -3.39 -8.54 -3.86 -10.50 -2.52l-1.00 0.68 -0.01 54.35c-0.01 42.35 -0.14 56.70 -0.59 65.00 -0.32 5.85 -0.59 11.35 -0.59 12.21 -0.01 1.22 -0.16 1.56 -0.71 1.54 -0.38 -0.01 -3.75 -1.31 -7.49 -2.89l-6.79 -2.87 -2.89 2.98 -2.89 2.98 -1.70 -0.70c-11.11 -4.56 -12.88 -4.89 -16.41 -3.08 -1.19 0.61 -3.64 2.56 -5.46 4.34l-3.30 3.24 0.69 8.76c0.38 4.82 1.03 10.64 1.45 12.93 0.96 5.25 0.96 7.66 -0.01 13.15 -0.69 3.92 -0.84 8.44 -1.43 42.99 -0.58 34.15 -0.74 39.15 -1.42 43.28 -0.50 3.07 -0.77 6.66 -0.77 10.45l0.00 5.77 -2.38 2.46 -2.38 2.46 -4.11 -0.59c-2.26 -0.33 -6.36 -0.58 -9.10 -0.57 -6.43 0.03 -9.29 0.86 -17.07 4.93 -10.34 5.41 -7.18 4.91 -47.71 7.56 -19.37 1.26 -35.64 2.49 -36.14 2.72 -0.50 0.23 -2.93 0.42 -5.40 0.42l-4.48 0.00 -2.96 -6.23z"},"path6072":{"name":"name4","path":"m272.93 952.88c1.95 -0.68 7.50 -1.13 36.23 -2.94 26.60 -1.67 34.67 -2.31 37.33 -2.95 2.37 -0.57 5.50 -1.88 10.38 -4.37 3.98 -2.02 8.36 -3.93 10.18 -4.43 3.93 -1.07 10.99 -1.25 16.70 -0.42l3.92 0.57 1.77 -1.81 1.77 -1.81 0.00 -5.21c0.00 -3.36 0.29 -6.93 0.81 -10.03 0.72 -4.33 0.88 -8.85 1.58 -44.68 0.71 -36.69 0.84 -40.19 1.60 -44.03l0.82 -4.17 -0.98 -5.84c-0.54 -3.21 -1.27 -9.69 -1.63 -14.40l-0.66 -8.56 -2.13 -3.34c-4.88 -7.68 -14.13 -15.64 -27.16 -23.38 -6.37 -3.79 -17.52 -9.43 -30.94 -15.65 -17.12 -7.94 -19.84 -9.49 -24.13 -13.75 -1.99 -1.98 -4.49 -4.22 -5.54 -4.97 -1.76 -1.26 -2.09 -1.35 -3.99 -1.10 -3.34 0.45 -4.95 1.00 -6.25 2.14 -1.05 0.92 -1.22 1.35 -1.22 3.11 0.00 1.22 0.48 3.40 1.19 5.44 0.65 1.87 1.08 3.58 0.95 3.80 -0.13 0.22 -2.22 1.41 -4.64 2.66l-4.41 2.26 -5.52 0.00 -5.52 0.00 -0.65 1.32c-1.46 2.96 0.07 6.58 5.31 12.58 2.04 2.34 5.75 6.70 8.24 9.68 2.49 2.98 7.78 9.14 11.77 13.68 3.99 4.54 7.25 8.39 7.25 8.56 0.00 0.17 -1.95 2.35 -4.34 4.83l-4.34 4.52 1.33 5.49c0.73 3.02 1.34 5.79 1.34 6.16 0.01 0.41 -3.29 2.96 -8.57 6.63 -8.18 5.69 -8.56 6.01 -8.29 7.05 0.46 1.77 0.32 6.81 -0.24 8.49 -0.28 0.86 -2.22 3.96 -4.30 6.89 -4.88 6.87 -7.68 12.86 -11.27 24.11 -6.27 19.65 -8.41 28.02 -7.84 30.70 0.14 0.68 1.15 2.32 2.24 3.63 6.64 8.04 7.10 16.62 1.54 28.82l-1.96 4.30 2.67 5.61 2.67 5.61 2.30 0.00c1.27 0.00 3.33 -0.36 4.60 -0.80z"},"path6070":{"name":"name5","path":"m327.59 864.09c-0.71 -0.74 0.02 -1.92 3.33 -5.36 1.98 -2.06 3.59 -4.04 3.59 -4.41 0.00 -0.96 -1.29 -2.06 -2.43 -2.06 -0.61 -0.00 -1.37 0.50 -2.04 1.36 -1.01 1.28 -1.12 1.32 -1.76 0.65 -0.64 -0.67 -0.64 -0.77 0.05 -1.88 1.12 -1.79 1.82 -2.19 3.92 -2.20 2.60 -0.02 4.26 1.59 4.26 4.13 0.00 1.57 -0.24 1.94 -3.06 4.83l-3.06 3.13 2.03 0.00c1.12 0.00 2.15 -0.19 2.28 -0.42 0.14 -0.23 0.60 -0.42 1.02 -0.42 0.62 0.00 0.77 0.29 0.77 1.46l0.00 1.46 -4.33 0.00c-2.38 0.00 -4.44 -0.13 -4.59 -0.28z"},"path6068":{"name":"name6","path":"m335.71 863.22c0.00 -0.17 -1.53 -0.25 -3.39 -0.18 -1.87 0.07 -3.39 -0.01 -3.39 -0.19 0.00 -0.18 0.58 -0.99 1.30 -1.80l1.30 -1.48 -1.50 1.44c-2.31 2.22 -2.06 2.53 2.10 2.53 1.98 0.00 3.59 -0.14 3.59 -0.31z"},"path6066":{"name":"name7","path":"m335.57 853.83c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path6064":{"name":"name8","path":"m339.57 864.09c-0.71 -0.74 0.02 -1.92 3.33 -5.36 1.98 -2.06 3.59 -4.04 3.59 -4.41 0.00 -0.98 -1.30 -2.06 -2.50 -2.06 -0.70 0.00 -1.32 0.41 -1.89 1.25 -0.47 0.69 -1.09 1.25 -1.38 1.25 -0.78 0.00 -1.08 -1.18 -0.55 -2.20 0.85 -1.66 2.05 -2.36 4.06 -2.37 2.60 -0.02 4.26 1.59 4.26 4.12 0.00 1.57 -0.24 1.94 -3.06 4.83l-3.06 3.13 2.03 0.00c1.12 0.00 2.15 -0.19 2.28 -0.42 0.14 -0.23 0.60 -0.42 1.02 -0.42 0.62 0.00 0.77 0.29 0.77 1.46l0.00 1.46 -4.33 0.00c-2.38 0.00 -4.44 -0.13 -4.59 -0.28z"},"path6062":{"name":"name9","path":"m347.69 863.22c0.00 -0.17 -1.53 -0.25 -3.39 -0.18 -1.87 0.07 -3.39 -0.01 -3.39 -0.19 0.00 -0.18 0.58 -0.99 1.30 -1.80l1.30 -1.48 -1.50 1.44c-2.31 2.22 -2.06 2.53 2.10 2.53 1.98 0.00 3.59 -0.14 3.59 -0.31z"},"path6060":{"name":"name10","path":"m347.55 853.83c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path6058":{"name":"name11","path":"m342.15 851.95c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path6056":{"name":"name12","path":"m276.91 953.02c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path6054":{"name":"name13","path":"m283.11 952.57c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6052":{"name":"name14","path":"m289.50 952.16c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6050":{"name":"name15","path":"m295.88 951.74c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6048":{"name":"name16","path":"m302.27 951.32c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6046":{"name":"name17","path":"m308.66 950.90c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6044":{"name":"name18","path":"m315.05 950.49c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6042":{"name":"name19","path":"m321.44 950.07c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6040":{"name":"name20","path":"m327.82 949.65c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6038":{"name":"name21","path":"m334.21 949.24c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6036":{"name":"name22","path":"m340.60 948.82c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.10 0.50 -0.21z"},"path6034":{"name":"name23","path":"m390.41 937.20c1.19 -1.26 2.08 -2.30 1.97 -2.30 -0.11 0.00 -1.18 1.03 -2.37 2.30 -1.19 1.26 -2.08 2.30 -1.97 2.30 0.11 0.00 1.18 -1.03 2.37 -2.30z"},"path6032":{"name":"name24","path":"m392.29 925.83c-0.09 -0.63 -0.17 -0.21 -0.17 0.93 -0.00 1.15 0.07 1.67 0.17 1.15 0.09 -0.51 0.10 -1.45 0.01 -2.09z"},"path6030":{"name":"name25","path":"m265.71 922.69c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path6028":{"name":"name26","path":"m393.89 909.34c-0.09 -0.75 -0.16 -0.14 -0.16 1.36 0.00 1.49 0.07 2.10 0.16 1.36 0.09 -0.75 0.09 -1.97 0.00 -2.71z"},"path6026":{"name":"name27","path":"m260.25 909.70c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path6024":{"name":"name28","path":"m394.29 887.63c-0.09 -0.75 -0.16 -0.14 -0.16 1.36 0.00 1.49 0.07 2.10 0.16 1.36 0.09 -0.75 0.09 -1.97 0.00 -2.71z"},"path6022":{"name":"name29","path":"m394.69 865.93c-0.09 -0.75 -0.16 -0.14 -0.16 1.36 0.00 1.49 0.07 2.10 0.16 1.36 0.09 -0.75 0.09 -1.97 0.00 -2.71z"},"path6020":{"name":"name30","path":"m395.09 844.23c-0.09 -0.75 -0.16 -0.14 -0.16 1.36 0.00 1.49 0.07 2.10 0.16 1.36 0.09 -0.75 0.09 -1.97 0.00 -2.71z"},"path6018":{"name":"name31","path":"m304.15 800.83c-0.10 -0.07 -2.06 1.95 -4.36 4.47l-4.18 4.59 4.36 -4.47c2.40 -2.46 4.28 -4.53 4.18 -4.59z"},"path6016":{"name":"name32","path":"m303.37 799.54c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path6014":{"name":"name33","path":"m397.99 793.53c0.00 -0.31 -0.36 0.02 -2.01 1.86l-1.78 1.98 1.90 -1.86c1.04 -1.02 1.90 -1.92 1.90 -1.98z"},"path6012":{"name":"name34","path":"m396.45 793.63c4.35 -4.21 7.62 -6.07 10.69 -6.07 2.05 0.00 5.58 1.02 10.01 2.90l3.79 1.61 2.80 -2.88c1.54 -1.58 2.98 -2.88 3.21 -2.88 0.22 0.00 3.27 1.20 6.78 2.67 3.51 1.47 6.46 2.59 6.56 2.49 0.10 -0.10 0.49 -6.14 0.87 -13.42 0.58 -11.09 0.69 -21.61 0.72 -64.86 0.03 -48.82 -0.01 -51.64 -0.67 -51.84 -0.38 -0.12 -2.85 -0.52 -5.49 -0.88 -7.58 -1.05 -9.20 -1.45 -15.77 -3.88 -5.43 -2.01 -6.58 -2.30 -9.38 -2.34 -2.93 -0.04 -3.41 0.08 -5.79 1.42 -2.63 1.48 -7.64 6.31 -11.26 10.85 -1.01 1.26 -1.96 2.16 -2.13 1.99 -0.16 -0.17 0.26 -3.83 0.95 -8.14 0.68 -4.31 1.37 -9.71 1.51 -12.01 0.15 -2.30 0.60 -5.19 1.01 -6.43 0.66 -2.02 0.74 -3.73 0.74 -16.60l0.00 -14.34 3.61 -15.09 3.61 -15.09 -0.71 -4.10 -0.71 -4.10 -3.21 0.00c-2.84 0.00 -3.98 -0.27 -9.79 -2.31 -3.62 -1.27 -16.37 -5.58 -28.33 -9.58 -11.97 -4.00 -23.91 -8.03 -26.53 -8.96 -3.60 -1.27 -5.40 -1.69 -7.31 -1.69l-2.54 0.00 -1.13 2.61c-3.30 7.61 -11.11 31.17 -13.15 39.66l-1.13 4.69 -5.95 0.49c-3.27 0.27 -7.93 0.50 -10.35 0.52l-4.41 0.04 -1.28 2.72c-1.19 2.53 -1.28 3.02 -1.28 7.04 0.00 2.69 0.22 4.96 0.57 6.02 0.32 0.93 0.77 4.48 1.00 7.88 0.24 3.40 0.86 8.15 1.38 10.56 1.25 5.76 1.29 6.06 5.23 35.79l3.39 25.57 4.35 15.90 4.35 15.90 -1.36 4.21c-0.75 2.32 -1.36 4.24 -1.36 4.28 0.00 0.04 0.73 0.57 1.62 1.19 0.89 0.61 3.27 2.76 5.29 4.77 4.35 4.33 7.13 5.91 24.24 13.83 20.58 9.53 32.97 16.31 42.21 23.13 7.42 5.47 13.63 11.77 16.60 16.84 0.70 1.20 1.34 2.18 1.42 2.19 0.08 0.01 1.21 -1.01 2.50 -2.27z"},"path6010":{"name":"name35","path":"m352.95 693.13c0.10 -0.75 0.42 -0.96 1.62 -1.07l1.50 -0.13 0.00 -4.57 0.00 -4.57 -1.60 0.27c-1.45 0.24 -1.60 0.18 -1.60 -0.64 0.00 -0.95 1.32 -1.74 3.89 -2.31l1.30 -0.29 0.00 6.09 0.00 6.09 1.55 0.00c1.52 0.00 2.36 0.79 1.82 1.71 -0.12 0.21 -2.11 0.38 -4.42 0.38 -4.12 0.00 -4.19 -0.02 -4.07 -0.94z"},"path6008":{"name":"name36","path":"m358.96 692.93 -1.70 -0.16 0.00 -5.82c0.00 -5.28 -0.07 -5.82 -0.70 -5.79 -0.42 0.02 -0.50 0.12 -0.20 0.24 0.36 0.15 0.50 1.72 0.50 5.79l0.00 5.57 -1.50 0.16c-0.82 0.09 0.03 0.16 1.90 0.16 1.87 0.00 2.63 -0.07 1.70 -0.16z"},"path6006":{"name":"name37","path":"m368.19 693.44c-0.13 -0.35 0.42 -2.81 1.21 -5.47 0.79 -2.66 1.44 -5.01 1.44 -5.21 0.00 -0.65 -4.00 -0.43 -4.65 0.25 -0.85 0.89 -1.29 0.78 -1.57 -0.38 -0.57 -2.39 -0.33 -2.54 4.23 -2.54l4.19 0.00 0.13 1.17c0.11 1.01 -2.03 9.12 -3.13 11.87 -0.43 1.07 -1.50 1.25 -1.85 0.31z"},"path6004":{"name":"name38","path":"m372.31 681.47c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path6002":{"name":"name39","path":"m298.98 794.53c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path6000":{"name":"name40","path":"m389.21 790.34c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5998":{"name":"name41","path":"m294.59 789.52c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5996":{"name":"name42","path":"m408.08 788.54c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5994":{"name":"name43","path":"m441.77 784.96c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5992":{"name":"name44","path":"m290.19 784.51c0.00 -0.07 -0.49 -0.59 -1.10 -1.15l-1.10 -1.01 0.97 1.15c0.90 1.07 1.23 1.34 1.23 1.01z"},"path5990":{"name":"name45","path":"m383.22 784.07c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5988":{"name":"name46","path":"m285.40 778.64c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5986":{"name":"name47","path":"m442.17 777.03c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5984":{"name":"name48","path":"m261.21 772.00c3.10 -4.60 3.16 -4.73 3.47 -7.93 0.41 -4.22 1.20 -5.62 4.03 -7.08 1.51 -0.78 2.38 -1.53 2.70 -2.34 0.44 -1.12 0.65 -1.20 3.50 -1.46 1.67 -0.15 4.44 -0.27 6.17 -0.27 2.93 0.00 3.38 -0.13 6.76 -1.90 2.40 -1.26 3.55 -2.09 3.42 -2.46 -0.95 -2.58 -1.86 -6.48 -1.86 -7.94 0.00 -3.76 3.06 -6.24 8.37 -6.80l2.94 -0.31 1.29 -4.03 1.29 -4.03 -4.31 -15.80 -4.31 -15.80 -3.63 -27.36c-1.99 -15.05 -4.16 -29.98 -4.80 -33.18 -0.65 -3.20 -1.30 -7.28 -1.46 -9.07 -0.23 -2.71 -0.39 -3.21 -0.92 -3.05 -1.43 0.44 -7.05 1.07 -9.49 1.07 -3.61 0.00 -37.51 4.46 -39.47 5.19 -0.88 0.33 -3.03 0.73 -4.79 0.89 -1.76 0.16 -5.32 0.83 -7.91 1.49 -4.99 1.27 -7.88 1.48 -10.39 0.75 -0.84 -0.24 -1.61 -0.37 -1.71 -0.27 -0.09 0.10 -0.35 2.88 -0.57 6.19 -0.49 7.40 -0.98 10.67 -1.95 12.99 -0.80 1.92 -3.57 6.07 -6.79 10.17l-2.00 2.54 2.82 4.73c3.38 5.66 6.63 11.94 7.14 13.79 0.26 0.96 0.20 1.74 -0.22 2.79 -0.75 1.89 -0.45 3.02 1.64 6.15 2.29 3.42 4.63 8.43 5.97 12.75 0.93 3.01 1.11 4.31 1.14 8.56 0.06 6.86 -0.40 8.45 -4.20 14.45l-3.14 4.97 -0.02 4.27c-0.01 2.62 -0.24 4.91 -0.59 5.94 -0.37 1.09 -0.58 3.36 -0.58 6.50l-0.01 4.83 3.92 2.77c4.89 3.46 7.82 6.61 8.46 9.11 0.26 1.01 0.63 2.26 0.83 2.78 0.37 0.98 4.86 4.27 5.83 4.27 0.30 0.00 2.39 -0.57 4.63 -1.27 4.53 -1.41 7.87 -1.90 9.99 -1.49 0.77 0.15 2.90 1.35 4.73 2.66 3.73 2.67 9.40 5.92 10.31 5.91 0.33 -0.00 2.02 -2.11 3.75 -4.68z"},"path5982":{"name":"name49","path":"m260.95 682.59c-2.15 -1.26 -2.91 -4.29 -1.54 -6.11 0.66 -0.88 0.69 -1.11 0.20 -1.81 -0.89 -1.27 -0.68 -3.34 0.48 -4.78 0.90 -1.12 1.29 -1.28 3.01 -1.28 1.63 0.00 2.15 0.20 2.96 1.10 1.15 1.29 1.37 4.30 0.39 5.15 -0.52 0.45 -0.49 0.65 0.20 1.57 2.63 3.50 -1.89 8.39 -5.69 6.15z"},"path5980":{"name":"name50","path":"m264.93 679.92c0.70 -0.96 0.63 -1.60 -0.29 -2.55 -0.91 -0.95 -1.96 -1.07 -2.86 -0.31 -1.14 0.96 -1.18 1.97 -0.12 3.08 1.09 1.14 2.35 1.05 3.27 -0.21z"},"path5978":{"name":"name51","path":"m266.51 678.55c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5976":{"name":"name52","path":"m266.24 677.22c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5974":{"name":"name53","path":"m265.28 674.77c0.75 -0.93 0.75 -0.93 -0.04 -0.24 -0.44 0.38 -1.52 0.78 -2.40 0.87l-1.60 0.17 1.63 0.07c1.26 0.05 1.81 -0.15 2.40 -0.87z"},"path5972":{"name":"name54","path":"m264.27 674.02c1.43 -0.80 0.62 -3.32 -1.06 -3.32 -0.78 0.00 -2.16 1.15 -2.16 1.81 0.00 0.65 1.25 1.95 1.88 1.95 0.31 0.00 0.91 -0.19 1.34 -0.43z"},"path5970":{"name":"name55","path":"m260.13 672.06c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5968":{"name":"name56","path":"m265.84 670.96c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5966":{"name":"name57","path":"m246.82 682.16c-0.34 -0.92 0.21 -1.36 1.86 -1.52l1.40 -0.13 0.11 -4.50 0.11 -4.50 -1.71 0.11c-1.48 0.10 -1.71 0.00 -1.71 -0.72 0.00 -0.64 0.51 -1.01 2.16 -1.58 1.19 -0.41 2.40 -0.65 2.69 -0.53 0.41 0.16 0.53 1.57 0.53 6.07l0.00 5.86 1.62 0.00c1.46 0.00 1.61 0.10 1.50 0.94 -0.12 0.90 -0.32 0.94 -4.23 1.06 -3.46 0.10 -4.14 0.01 -4.34 -0.55z"},"path5964":{"name":"name58","path":"m252.76 681.66c-0.93 -0.09 -2.46 -0.09 -3.39 0.00 -0.93 0.09 -0.17 0.16 1.70 0.16 1.87 0.00 2.63 -0.07 1.70 -0.16z"},"path5962":{"name":"name59","path":"m250.96 670.03c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5960":{"name":"name60","path":"m282.61 775.34c0.00 -0.07 -0.76 -0.87 -1.70 -1.77l-1.70 -1.65 1.58 1.77c1.47 1.65 1.82 1.97 1.82 1.65z"},"path5958":{"name":"name61","path":"m442.57 769.10c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5956":{"name":"name62","path":"m276.62 768.64c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5954":{"name":"name63","path":"m271.48 756.78c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5952":{"name":"name64","path":"m207.83 743.44c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5950":{"name":"name65","path":"m311.75 743.62c0.00 -0.06 -1.21 -1.33 -2.69 -2.82l-2.69 -2.70 2.58 2.82c2.40 2.62 2.81 3.01 2.81 2.70z"},"path5948":{"name":"name66","path":"m216.62 710.45c-0.09 -0.63 -0.17 -0.11 -0.17 1.15 0.00 1.26 0.07 1.78 0.17 1.15 0.09 -0.63 0.09 -1.66 0.00 -2.30z"},"path5946":{"name":"name67","path":"m393.63 665.00 0.97 -1.10 -1.10 0.73c-0.60 0.40 -1.10 0.90 -1.10 1.10 0.00 0.57 0.18 0.46 1.23 -0.73z"},"path5944":{"name":"name68","path":"m464.49 659.22c-0.38 -2.10 -3.19 -7.77 -5.23 -10.60 -1.06 -1.47 -4.19 -5.13 -6.94 -8.14 -4.93 -5.38 -17.59 -22.41 -17.59 -23.67 0.00 -0.81 11.21 -12.36 16.37 -16.87 2.31 -2.02 9.67 -9.06 16.37 -15.64 6.70 -6.59 14.15 -13.71 16.57 -15.83 7.95 -6.98 15.40 -14.32 21.81 -21.48l6.31 -7.05 -0.69 -1.25c-0.38 -0.69 -3.60 -4.42 -7.17 -8.29 -5.86 -6.38 -9.29 -10.73 -9.29 -11.81 0.00 -0.22 0.92 -1.87 2.05 -3.67 1.74 -2.78 1.99 -3.41 1.64 -4.20 -0.74 -1.66 -6.41 -9.19 -9.65 -12.82l-3.17 -3.55 -1.29 0.51c-4.41 1.74 -10.80 7.67 -20.31 18.87 -3.07 3.61 -7.25 8.05 -9.29 9.85 -2.04 1.81 -9.01 8.74 -15.49 15.40 -6.48 6.67 -13.94 14.14 -16.57 16.61 -2.63 2.47 -6.97 6.61 -9.64 9.21 -2.87 2.79 -5.85 5.28 -7.29 6.08 -2.78 1.55 -2.77 1.51 -1.84 6.54l0.59 3.22 -3.58 14.97 -3.58 14.97 0.00 14.55c0.00 13.42 -0.06 14.74 -0.79 16.96 -0.47 1.41 -0.96 4.58 -1.20 7.68 -0.22 2.90 -0.59 6.41 -0.81 7.78 -0.22 1.38 -0.49 3.07 -0.60 3.76 -0.18 1.15 0.10 0.95 3.40 -2.38 2.65 -2.68 4.41 -4.05 6.67 -5.22 2.84 -1.46 3.32 -1.58 6.29 -1.53 3.29 0.05 3.49 0.11 12.67 3.43 3.64 1.32 6.24 1.92 11.88 2.74l7.22 1.05 1.41 -0.87c1.12 -0.69 1.88 -0.83 3.77 -0.69 1.94 0.15 3.41 0.72 8.07 3.13l5.70 2.95 1.72 -1.73c1.48 -1.49 1.69 -1.90 1.49 -2.98z"},"path5942":{"name":"name69","path":"m479.91 540.88c-1.69 -1.08 -2.47 -3.06 -2.47 -6.28 0.00 -3.16 0.74 -4.84 2.80 -6.36 1.30 -0.96 1.93 -1.15 3.48 -1.04 1.62 0.11 1.92 0.26 2.03 1.07 0.12 0.85 -0.04 0.94 -1.60 0.94 -1.21 0.00 -2.03 0.28 -2.76 0.94 -1.41 1.28 -2.77 4.00 -1.46 2.93 1.76 -1.44 4.59 -0.60 5.62 1.67 0.79 1.73 0.79 1.72 0.24 3.77 -0.28 1.07 -0.84 1.85 -1.69 2.40 -1.62 1.03 -2.54 1.02 -4.19 -0.03z"},"path5940":{"name":"name70","path":"m483.76 537.16c0.22 -2.34 -1.44 -3.31 -3.12 -1.82 -1.29 1.15 -1.02 2.84 0.59 3.78 1.15 0.66 2.36 -0.28 2.52 -1.96z"},"path5938":{"name":"name71","path":"m479.00 535.72c0.35 -0.45 0.32 -0.63 -0.15 -0.82 -0.42 -0.17 -0.61 0.01 -0.61 0.58 0.00 0.97 0.14 1.02 0.76 0.24z"},"path5936":{"name":"name72","path":"m478.51 532.88c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5934":{"name":"name73","path":"m480.44 529.62c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5932":{"name":"name74","path":"m465.34 541.04c-0.15 -0.16 -0.28 -0.64 -0.28 -1.06 0.00 -0.61 0.31 -0.77 1.60 -0.77l1.60 0.00 0.00 -4.79 0.00 -4.79 -1.07 0.42c-1.33 0.53 -2.13 0.24 -2.13 -0.77 0.00 -0.57 0.57 -0.96 2.13 -1.47 1.17 -0.39 2.34 -0.70 2.60 -0.70 0.33 0.00 0.46 1.73 0.46 6.05l0.00 6.05 1.62 0.00c1.46 0.00 1.61 0.10 1.50 0.94 -0.12 0.89 -0.33 0.95 -3.94 1.06 -2.10 0.07 -3.94 -0.01 -4.09 -0.17z"},"path5930":{"name":"name75","path":"m470.95 540.17 -1.50 -0.16 0.00 -5.82c0.00 -5.28 -0.07 -5.82 -0.70 -5.79 -0.42 0.02 -0.50 0.12 -0.20 0.24 0.36 0.15 0.50 1.72 0.50 5.79l0.00 5.58 -1.70 0.16c-0.93 0.09 -0.17 0.16 1.70 0.16 1.87 0.00 2.72 -0.07 1.90 -0.16z"},"path5928":{"name":"name76","path":"m399.59 658.30c0.00 -0.31 -0.36 0.02 -2.01 1.86l-1.78 1.98 1.90 -1.86c1.04 -1.02 1.90 -1.92 1.90 -1.98z"},"path5926":{"name":"name77","path":"m443.56 659.95c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5924":{"name":"name78","path":"m200.41 658.70c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5922":{"name":"name79","path":"m476.17 655.82c5.87 -4.55 12.12 -9.77 14.38 -12.00 3.30 -3.26 6.79 -9.38 14.56 -25.51 8.93 -18.53 14.47 -27.60 21.03 -34.42 1.22 -1.27 7.18 -6.11 13.25 -10.75 10.73 -8.21 11.07 -8.52 12.50 -11.19 1.46 -2.72 4.41 -6.79 5.97 -8.24 3.19 -2.95 8.30 -5.86 21.70 -12.35 4.24 -2.05 9.27 -4.74 11.17 -5.96 4.08 -2.63 9.78 -8.37 11.35 -11.43l1.08 -2.11 -1.72 -2.29c-2.43 -3.24 -2.63 -3.75 -2.64 -6.71 0.00 -2.61 -0.03 -2.67 -2.21 -5.22 -3.23 -3.79 -5.16 -4.64 -12.23 -5.40 -5.67 -0.61 -9.77 -0.49 -11.24 0.33 -0.42 0.24 -1.86 1.35 -3.20 2.48 -2.78 2.34 -5.90 3.71 -8.43 3.71 -1.97 0.00 -3.83 1.34 -7.79 5.59 -1.24 1.33 -2.53 2.34 -2.99 2.34 -0.45 0.00 -2.29 -0.31 -4.09 -0.68l-3.28 -0.68 -2.20 1.13c-1.64 0.84 -3.24 2.31 -6.30 5.76 -11.14 12.60 -13.67 14.99 -18.67 17.65 -2.18 1.16 -3.49 2.40 -8.18 7.75 -6.06 6.90 -13.78 14.57 -21.96 21.79 -2.85 2.52 -10.67 9.96 -17.37 16.53 -6.70 6.57 -13.88 13.43 -15.97 15.25 -4.04 3.52 -15.57 15.20 -15.57 15.77 0.00 0.99 12.70 17.87 16.78 22.29 6.85 7.44 10.06 12.15 11.76 17.27 0.34 1.03 0.70 2.11 0.80 2.40 0.12 0.34 1.03 0.52 2.62 0.52 2.44 0.00 2.44 -0.00 7.10 -3.61z"},"path5920":{"name":"name80","path":"m494.07 608.51c-1.49 -0.48 -2.65 -1.61 -2.65 -2.57 0.00 -0.95 1.40 -1.04 2.25 -0.14 0.73 0.76 3.48 0.83 4.05 0.10 0.86 -1.08 0.99 -2.79 0.28 -3.91 -0.62 -0.98 -0.85 -1.06 -2.34 -0.80 -3.51 0.61 -3.25 0.85 -3.25 -3.11l0.00 -3.55 3.59 0.00c3.33 0.00 3.59 0.06 3.59 0.83 0.00 0.73 -0.33 0.86 -2.60 1.04 -2.55 0.21 -2.60 0.23 -2.71 1.48 -0.12 1.23 -0.07 1.27 1.30 1.10 0.78 -0.10 1.85 -0.06 2.38 0.08 1.35 0.35 2.63 2.69 2.63 4.80 0.00 3.28 -3.37 5.67 -6.53 4.64z"},"path5918":{"name":"name81","path":"m498.65 606.52c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5916":{"name":"name82","path":"m499.66 602.98c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5914":{"name":"name83","path":"m497.11 599.89c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5912":{"name":"name84","path":"m493.29 597.13c-0.10 -0.52 -0.17 -0.09 -0.17 0.94 0.00 1.03 0.08 1.46 0.17 0.94 0.10 -0.52 0.10 -1.36 0.00 -1.88z"},"path5910":{"name":"name85","path":"m497.50 595.27c-0.71 -0.09 -1.88 -0.09 -2.60 0.00 -0.71 0.09 -0.13 0.17 1.30 0.17 1.43 0.00 2.01 -0.08 1.30 -0.17z"},"path5908":{"name":"name86","path":"m480.12 608.24c-0.15 -0.16 -0.28 -0.64 -0.28 -1.06 0.00 -0.61 0.31 -0.77 1.60 -0.77l1.60 0.00 0.00 -4.79 0.00 -4.79 -1.07 0.42c-1.35 0.54 -2.13 0.23 -2.13 -0.83 0.00 -0.64 0.47 -0.98 2.07 -1.47 3.32 -1.03 3.12 -1.37 3.12 5.41l0.00 6.05 1.62 0.00c1.46 0.00 1.61 0.10 1.50 0.94 -0.12 0.89 -0.33 0.95 -3.94 1.06 -2.10 0.07 -3.94 -0.01 -4.09 -0.17z"},"path5906":{"name":"name87","path":"m485.73 607.37 -1.50 -0.16 0.00 -5.82c0.00 -5.77 -0.01 -5.82 -0.90 -5.77 -0.68 0.04 -0.73 0.10 -0.20 0.24 0.62 0.17 0.70 0.81 0.70 5.77l0.00 5.58 -1.50 0.16c-0.82 0.09 -0.06 0.16 1.70 0.16 1.76 0.00 2.52 -0.07 1.70 -0.16z"},"path5904":{"name":"name88","path":"m458.68 645.91c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5902":{"name":"name89","path":"m492.01 643.99c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5900":{"name":"name90","path":"m454.68 641.35c0.00 -0.07 -0.67 -0.77 -1.50 -1.57l-1.50 -1.44 1.38 1.57c1.28 1.46 1.62 1.76 1.62 1.44z"},"path5898":{"name":"name91","path":"m396.69 617.82c-0.07 -4.09 -0.12 -0.86 -0.12 7.17 -0.00 8.03 0.05 11.38 0.12 7.44 0.07 -3.95 0.07 -10.52 0.00 -14.61z"},"path5896":{"name":"name92","path":"m451.49 638.02c0.00 -0.07 -0.67 -0.77 -1.50 -1.57l-1.50 -1.44 1.38 1.57c1.28 1.46 1.62 1.76 1.62 1.44z"},"path5894":{"name":"name93","path":"m208.62 636.39c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5892":{"name":"name94","path":"m209.02 630.55c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5890":{"name":"name95","path":"m227.83 626.65c-0.12 -0.13 -0.35 0.10 -0.50 0.51 -0.22 0.59 -0.17 0.64 0.22 0.23 0.27 -0.28 0.40 -0.62 0.27 -0.75z"},"path5888":{"name":"name96","path":"m233.30 625.80c2.02 -0.78 37.75 -5.59 41.61 -5.60 3.16 -0.01 8.48 -0.73 9.31 -1.26 0.43 -0.28 0.38 -0.87 -0.22 -3.19 -0.46 -1.77 -0.80 -4.68 -0.88 -7.65l-0.14 -4.80 1.60 -3.44 1.60 -3.44 2.71 -0.01c1.49 -0.01 5.94 -0.28 9.90 -0.61 3.95 -0.33 7.39 -0.61 7.63 -0.62 0.25 -0.01 0.55 -0.67 0.67 -1.47 0.77 -4.94 8.67 -29.30 12.86 -39.65 5.17 -12.76 19.61 -58.98 22.77 -72.88 0.97 -4.26 1.23 -4.90 2.53 -6.16 3.14 -3.05 4.28 -3.59 8.16 -3.81l3.59 -0.21 2.07 -4.80c1.14 -2.64 3.16 -6.38 4.49 -8.31 3.81 -5.53 5.75 -9.65 6.09 -12.95 0.21 -2.03 0.75 -3.74 1.94 -6.22l1.65 -3.41 -1.17 0.00c-2.41 0.00 -5.28 -0.94 -6.97 -2.29 -2.69 -2.14 -3.15 -2.30 -6.78 -2.30 -2.57 0.00 -4.03 -0.24 -5.99 -0.98 -5.40 -2.05 -13.37 -8.56 -22.90 -18.73l-4.49 -4.79 0.00 -3.77 0.00 -3.77 -2.58 -2.52c-1.42 -1.39 -3.78 -3.22 -5.24 -4.08 -1.87 -1.10 -3.19 -2.28 -4.47 -3.99l-1.81 -2.44 -3.84 0.00c-3.57 0.00 -4.05 0.10 -6.76 1.46 -1.60 0.80 -3.06 1.46 -3.23 1.46 -0.18 0.00 -1.36 -0.66 -2.64 -1.46 -1.80 -1.14 -2.75 -1.46 -4.26 -1.46 -2.36 0.00 -3.60 -0.64 -5.69 -2.94 -1.90 -2.08 -3.56 -2.91 -5.85 -2.91 -1.52 0.00 -1.87 -0.21 -3.61 -2.18 -3.98 -4.51 -4.24 -6.48 -1.72 -13.29l1.41 -3.80 -0.78 -1.14c-1.54 -2.26 -1.59 -2.27 -6.13 -0.88 -6.47 1.97 -5.64 2.66 -8.80 -7.29 -1.87 -5.89 -2.86 -8.47 -3.19 -8.27 -0.26 0.16 -2.06 1.40 -4.01 2.77 -4.70 3.29 -6.69 4.18 -8.56 3.86 -1.22 -0.21 -1.86 -0.00 -3.79 1.22 -1.27 0.81 -2.58 1.47 -2.90 1.47 -0.32 0.00 -2.20 -0.85 -4.16 -1.88 -1.97 -1.03 -3.68 -1.88 -3.81 -1.88 -0.13 0.00 -0.50 0.69 -0.84 1.53 -0.87 2.19 -0.45 3.89 1.28 5.12 1.97 1.41 4.56 4.50 5.88 7.05 0.62 1.18 1.84 4.27 2.72 6.85 2.50 7.32 2.91 7.91 9.55 13.93 4.41 3.99 5.95 5.63 5.96 6.34 0.01 0.85 -2.59 10.93 -2.87 11.13 -0.06 0.04 -1.33 0.78 -2.81 1.63 -1.49 0.86 -4.72 3.29 -7.19 5.42 -2.47 2.12 -5.72 4.78 -7.23 5.90l-2.75 2.04 0.23 4.00c0.15 2.51 0.61 5.24 1.24 7.34 1.28 4.23 1.84 8.38 1.59 11.63 -0.16 2.04 0.07 3.60 1.18 7.92l1.38 5.38 3.13 3.29c1.72 1.81 3.24 3.24 3.37 3.18 0.14 -0.06 1.99 -2.22 4.12 -4.80 2.13 -2.58 4.17 -4.70 4.54 -4.70 0.37 0.00 2.96 0.68 5.77 1.52l5.10 1.52 0.00 4.34 0.00 4.34 -2.54 3.05c-4.75 5.69 -5.35 7.41 -6.80 19.46 -0.86 7.13 -1.30 9.28 -3.59 17.32 -4.22 14.85 -11.13 36.75 -11.82 37.50 -0.40 0.43 -9.13 -2.02 -11.39 -3.18 -0.88 -0.45 -2.78 -1.56 -4.23 -2.45l-2.63 -1.62 -4.84 1.62c-4.72 1.58 -4.91 1.69 -7.35 4.29 -1.82 1.94 -3.60 3.28 -6.50 4.88 -2.20 1.22 -4.60 2.67 -5.35 3.23 -1.26 0.95 -1.70 1.02 -6.26 1.02l-4.90 0.00 -0.47 2.34c-0.46 2.30 -0.44 2.37 0.77 4.07 2.71 3.78 3.18 4.95 3.67 9.10l0.47 4.01 7.23 -6.96c11.33 -10.92 19.43 -17.97 21.60 -18.82 0.44 -0.17 3.31 0.03 6.39 0.45 3.07 0.42 5.79 0.77 6.02 0.78 0.42 0.02 5.47 6.38 6.44 8.12 0.79 1.42 0.58 6.63 -0.49 12.28 -0.55 2.91 -1.90 13.92 -3.00 24.48 -1.20 11.49 -2.50 21.88 -3.24 25.87 -1.03 5.51 -1.21 7.28 -1.02 10.23 0.12 1.96 0.35 3.89 0.50 4.29 0.34 0.92 2.52 0.95 4.78 0.08z"},"path5886":{"name":"name97","path":"m302.18 473.07c-0.88 -1.10 -0.18 -1.96 1.35 -1.66 1.99 0.39 3.79 -0.83 4.71 -3.19 0.25 -0.64 0.17 -0.64 -0.90 -0.09 -1.49 0.78 -3.17 0.41 -4.41 -0.97 -0.76 -0.85 -0.95 -1.51 -0.95 -3.35 0.00 -2.07 0.13 -2.42 1.30 -3.51 3.63 -3.39 7.70 0.59 7.19 7.04 -0.19 2.46 -1.05 3.96 -3.10 5.41 -1.55 1.11 -4.43 1.28 -5.19 0.32z"},"path5884":{"name":"name98","path":"m304.67 472.58c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5882":{"name":"name99","path":"m309.46 465.29c-0.21 -0.22 -0.76 0.10 -1.33 0.78 -0.70 0.82 -0.74 0.94 -0.14 0.42 1.13 -0.99 1.36 -0.92 1.43 0.42l0.06 1.15 0.17 -1.20c0.09 -0.66 0.01 -1.37 -0.18 -1.57z"},"path5880":{"name":"name100","path":"m307.77 464.90c0.81 -1.58 -0.81 -4.05 -2.34 -3.55 -1.11 0.37 -1.86 2.41 -1.30 3.52 0.96 1.87 2.69 1.89 3.63 0.03z"},"path5878":{"name":"name101","path":"m302.84 463.60c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5876":{"name":"name102","path":"m304.22 460.86c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5874":{"name":"name103","path":"m289.47 472.34c0.10 -0.75 0.42 -0.96 1.62 -1.07l1.50 -0.13 0.00 -4.53 0.00 -4.53 -1.63 0.23c-1.54 0.22 -1.62 0.17 -1.50 -0.75 0.10 -0.76 0.54 -1.10 1.89 -1.51 0.96 -0.29 2.09 -0.64 2.50 -0.78 0.70 -0.23 0.74 0.10 0.74 5.83l0.00 6.08 1.30 0.01c1.64 0.01 2.48 0.55 2.17 1.41 -0.20 0.55 -0.97 0.67 -4.48 0.67 -4.16 0.00 -4.23 -0.02 -4.10 -0.94z"},"path5872":{"name":"name104","path":"m285.68 621.98c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5870":{"name":"name105","path":"m273.13 621.17c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5868":{"name":"name106","path":"m276.91 621.19c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5866":{"name":"name107","path":"m446.70 605.28c0.00 -0.30 -0.59 0.30 -5.59 5.63l-5.38 5.74 5.49 -5.63c3.02 -3.10 5.49 -5.68 5.49 -5.74z"},"path5864":{"name":"name108","path":"m284.08 607.78c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5862":{"name":"name109","path":"m284.08 604.26c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5860":{"name":"name110","path":"m449.55 602.77c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5858":{"name":"name111","path":"m452.34 600.26c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5856":{"name":"name112","path":"m640.33 600.04c0.00 -0.06 -1.30 -1.43 -2.89 -3.03l-2.89 -2.91 2.78 3.03c2.59 2.81 3.00 3.22 3.00 2.91z"},"path5854":{"name":"name113","path":"m648.72 597.31c3.40 -0.71 9.42 -1.96 13.37 -2.77 3.95 -0.81 9.18 -2.05 11.62 -2.76l4.43 -1.29 -0.53 -2.36c-0.97 -4.30 -1.10 -8.37 -0.39 -11.30 0.92 -3.76 1.87 -5.13 5.04 -7.32 3.21 -2.21 4.01 -3.30 4.28 -5.85 0.17 -1.59 -0.09 -2.49 -1.82 -6.36 -2.24 -5.01 -2.62 -7.09 -3.23 -17.82l-0.33 -5.80 2.45 -3.18c3.11 -4.03 3.73 -5.49 3.09 -7.34 -0.34 -0.97 -0.35 -1.69 -0.06 -2.50 1.01 -2.78 6.37 -8.77 12.38 -13.85l2.40 -2.03 0.00 -10.07c0.00 -14.05 0.41 -15.62 7.98 -30.57 2.75 -5.44 3.60 -8.07 3.60 -11.14 0.00 -4.37 -2.31 -8.40 -7.13 -12.48l-2.73 -2.31 -0.27 -5.29c-0.15 -2.91 -0.52 -7.09 -0.83 -9.29 -0.31 -2.20 -0.68 -5.41 -0.83 -7.14l-0.27 -3.15 -4.43 -3.74c-2.44 -2.06 -7.33 -6.60 -10.88 -10.10 -8.22 -8.11 -8.93 -8.69 -12.11 -9.80 -2.43 -0.85 -3.65 -0.94 -15.40 -1.15l-12.76 -0.23 -2.56 -3.76c-1.41 -2.07 -3.12 -4.98 -3.81 -6.47l-1.25 -2.71 0.12 -15.97 0.12 -15.97 -1.38 0.00c-1.20 0.00 -1.58 0.28 -2.84 2.08 -2.33 3.31 -4.75 5.24 -10.27 8.18 -5.87 3.12 -7.89 4.95 -9.37 8.46 -0.55 1.30 -1.29 2.71 -1.66 3.13 -0.84 0.98 -3.57 2.45 -8.65 4.66l-3.99 1.74 -0.12 5.18c-0.11 4.64 0.38 10.66 1.01 12.36 0.27 0.74 1.91 0.59 8.28 -0.76 2.18 -0.46 4.42 -0.72 4.98 -0.57 0.55 0.15 1.75 0.98 2.66 1.85 2.71 2.61 7.26 5.96 12.41 9.13 4.09 2.52 5.55 3.72 9.33 7.69 5.78 6.08 9.02 10.30 10.49 13.68 1.26 2.91 4.62 7.64 9.47 13.36 1.66 1.95 4.25 5.22 5.77 7.26 1.51 2.04 7.12 9.15 12.47 15.79 7.62 9.47 9.67 12.27 9.52 12.98 -0.10 0.50 -0.38 2.06 -0.61 3.48 -0.95 5.81 -2.04 8.00 -19.06 38.24l-16.67 29.62 -5.59 -0.22c-3.07 -0.12 -8.91 -0.71 -12.98 -1.30 -4.06 -0.59 -8.05 -1.17 -8.85 -1.28l-1.47 -0.21 -0.63 2.90c-2.22 10.19 1.07 17.61 11.29 25.46l4.05 3.11 0.00 12.11 0.00 12.11 2.50 2.65c2.00 2.12 2.69 2.61 3.49 2.47 0.55 -0.10 3.78 -0.76 7.19 -1.47z"},"path5852":{"name":"name114","path":"m649.12 568.95c0.00 -0.90 0.76 -1.95 3.41 -4.70 3.69 -3.83 4.15 -5.10 2.22 -6.10 -1.25 -0.65 -2.50 -0.15 -3.17 1.27 -0.63 1.33 -1.80 1.30 -1.99 -0.05 -0.19 -1.36 0.52 -2.43 2.15 -3.24 3.00 -1.49 6.16 0.46 6.16 3.78 0.00 1.58 -0.24 1.97 -3.03 4.91l-3.03 3.19 2.01 0.00c1.10 0.00 2.12 -0.19 2.25 -0.42 0.14 -0.23 0.60 -0.42 1.02 -0.42 0.62 0.00 0.77 0.29 0.77 1.46l0.00 1.46 -4.39 0.00 -4.39 0.00 0.00 -1.16z"},"path5850":{"name":"name115","path":"m651.51 566.98c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5848":{"name":"name116","path":"m661.65 569.52c-0.37 -1.00 0.19 -1.50 1.66 -1.50l1.37 0.00 0.00 -4.78 0.00 -4.78 -1.23 0.45c-1.50 0.55 -2.41 -0.08 -1.73 -1.21 0.46 -0.76 2.65 -1.71 4.05 -1.76 0.87 -0.03 0.89 0.07 1.00 5.92l0.11 5.95 1.72 0.13c1.51 0.11 1.71 0.24 1.60 1.04 -0.12 0.86 -0.35 0.92 -4.22 1.03 -3.33 0.10 -4.14 0.00 -4.33 -0.50z"},"path5846":{"name":"name117","path":"m665.59 557.31c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5844":{"name":"name118","path":"m296.08 596.99c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5842":{"name":"name119","path":"m301.27 596.57c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5840":{"name":"name120","path":"m306.85 596.15c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5838":{"name":"name121","path":"m458.48 594.73c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5836":{"name":"name122","path":"m634.64 576.08c-0.07 -3.40 -0.12 -0.74 -0.12 5.92 -0.00 6.66 0.06 9.44 0.12 6.18 0.07 -3.26 0.07 -8.70 0.00 -12.10z"},"path5834":{"name":"name123","path":"m465.26 588.06c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5832":{"name":"name124","path":"m524.20 587.74c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5830":{"name":"name125","path":"m678.14 583.15c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5828":{"name":"name126","path":"m472.05 581.38c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5826":{"name":"name127","path":"m478.84 574.70c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5824":{"name":"name128","path":"m682.65 570.64c0.00 -0.29 -2.25 1.49 -2.83 2.25 -0.31 0.40 0.20 0.10 1.13 -0.68 0.93 -0.78 1.70 -1.49 1.70 -1.58z"},"path5822":{"name":"name129","path":"m482.28 571.46c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5820":{"name":"name130","path":"m400.10 571.47c-0.93 -0.09 -2.54 -0.09 -3.59 -0.00 -1.05 0.09 -0.29 0.16 1.68 0.16 1.98 0.00 2.84 -0.07 1.91 -0.16z"},"path5818":{"name":"name131","path":"m402.70 570.47c-0.10 -0.31 -0.28 -0.12 -0.42 0.44 -0.17 0.69 -0.12 0.86 0.17 0.55 0.23 -0.24 0.34 -0.69 0.25 -0.99z"},"path5816":{"name":"name132","path":"m401.97 568.33c0.25 -1.21 0.61 -5.01 0.81 -8.45 0.51 -8.91 14.60 -132.77 15.33 -134.82 0.51 -1.43 0.91 -7.30 0.49 -7.30 -0.08 0.00 -1.02 0.17 -2.10 0.39 -1.07 0.21 -4.83 0.59 -8.34 0.85 -7.82 0.57 -9.25 1.16 -15.32 6.31 -8.91 7.57 -11.61 9.29 -15.47 9.84 -1.48 0.21 -1.98 0.51 -2.60 1.56 -1.85 3.12 -3.12 6.48 -3.30 8.73 -0.10 1.30 -0.62 3.36 -1.14 4.56 -1.13 2.59 -4.37 8.10 -6.31 10.75 -0.76 1.03 -2.34 4.16 -3.51 6.95l-2.14 5.07 -3.85 0.14 -3.85 0.14 -2.49 2.01c-1.62 1.30 -2.57 2.40 -2.73 3.13 -0.72 3.42 -3.34 13.16 -5.80 21.58 -2.18 7.46 -14.02 45.10 -14.99 47.69 -0.14 0.38 0.39 0.52 1.93 0.52 1.63 -0.01 5.11 1.01 14.91 4.36 7.03 2.40 21.22 7.18 31.54 10.62 10.32 3.44 19.39 6.55 20.16 6.90 0.88 0.40 2.67 0.64 4.86 0.65l3.46 0.02 0.45 -2.19z"},"path5814":{"name":"name133","path":"m389.21 510.73c-1.56 -0.81 -2.80 -3.80 -2.79 -6.76 0.00 -4.99 1.47 -7.51 4.38 -7.51 2.89 0.00 4.40 2.49 4.40 7.26 0.00 3.80 -0.83 6.01 -2.59 6.88 -1.59 0.79 -2.09 0.81 -3.40 0.13z"},"path5812":{"name":"name134","path":"m392.74 506.87c0.62 -1.95 0.41 -5.90 -0.39 -7.24 -0.30 -0.50 -0.94 -0.90 -1.43 -0.90 -2.07 0.00 -3.18 4.73 -1.92 8.17 0.64 1.75 0.79 1.88 1.95 1.77 1.07 -0.11 1.34 -0.37 1.79 -1.80z"},"path5810":{"name":"name135","path":"m387.50 502.60c-0.09 -0.63 -0.17 -0.11 -0.17 1.15 0.00 1.26 0.07 1.78 0.17 1.15 0.09 -0.63 0.09 -1.66 0.00 -2.30z"},"path5808":{"name":"name136","path":"m394.28 502.60c-0.09 -0.63 -0.17 -0.11 -0.17 1.15 0.00 1.26 0.07 1.78 0.17 1.15 0.09 -0.63 0.09 -1.66 0.00 -2.30z"},"path5806":{"name":"name137","path":"m374.59 510.25c-0.37 -1.00 0.19 -1.50 1.66 -1.50l1.37 0.00 0.00 -4.58 0.00 -4.58 -1.50 0.09c-1.26 0.08 -1.50 -0.04 -1.50 -0.74 0.00 -0.62 0.52 -1.03 2.09 -1.61 3.28 -1.23 3.30 -1.20 3.30 5.56l0.00 5.86 1.62 0.00c1.46 0.00 1.61 0.10 1.50 0.94 -0.12 0.90 -0.32 0.94 -4.23 1.06 -3.33 0.10 -4.14 0.00 -4.33 -0.50z"},"path5804":{"name":"name138","path":"m380.52 509.70c-0.93 -0.09 -2.46 -0.09 -3.39 0.00 -0.93 0.09 -0.17 0.16 1.70 0.16 1.87 0.00 2.63 -0.07 1.70 -0.16z"},"path5802":{"name":"name139","path":"m378.72 498.07c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5800":{"name":"name140","path":"m406.77 568.00c1.21 -0.85 4.90 -4.25 8.20 -7.54 3.30 -3.30 7.25 -7.11 8.78 -8.48 1.53 -1.37 7.99 -7.86 14.36 -14.42 6.37 -6.56 13.27 -13.43 15.33 -15.25 2.06 -1.82 6.39 -6.42 9.63 -10.21 9.62 -11.27 15.28 -16.57 20.10 -18.80 1.45 -0.67 1.81 -1.08 2.23 -2.56 0.64 -2.22 4.39 -6.40 8.21 -9.13 3.81 -2.72 7.21 -6.44 7.97 -8.71 0.34 -1.01 0.57 -1.86 0.51 -1.90 -1.42 -0.77 -5.85 -4.78 -9.17 -8.31l-4.30 -4.57 -5.05 1.51c-2.78 0.83 -5.19 1.42 -5.35 1.32 -0.17 -0.11 -0.50 -1.37 -0.74 -2.80 -0.86 -5.09 -0.95 -5.25 -6.22 -10.74l-5.00 -5.21 0.00 -3.63 0.00 -3.63 -3.38 -2.14c-1.86 -1.17 -3.48 -2.30 -3.60 -2.50 -0.12 -0.20 0.06 -2.26 0.39 -4.57 0.86 -5.96 0.91 -5.70 -1.35 -6.49 -1.62 -0.56 -2.18 -1.05 -3.29 -2.85l-1.34 -2.17 -3.19 -0.49c-4.58 -0.71 -8.79 -0.68 -10.18 0.08 -1.89 1.02 -6.15 1.89 -10.30 2.10 -2.13 0.11 -5.06 0.41 -6.52 0.67l-2.64 0.48 -0.27 4.01c-0.15 2.21 -0.53 4.76 -0.85 5.68 -0.67 1.94 -14.95 128.25 -14.95 132.27 0.00 2.50 -0.55 7.95 -1.02 10.19 -0.23 1.11 -0.29 1.13 3.02 -1.21z"},"path5798":{"name":"name141","path":"m432.46 461.34c-0.31 -0.86 0.52 -1.40 2.17 -1.41l1.30 -0.01 0.00 -4.57 0.00 -4.57 -1.70 0.08c-1.43 0.07 -1.70 -0.05 -1.70 -0.71 0.00 -0.59 0.56 -0.99 2.20 -1.55 1.21 -0.42 2.42 -0.68 2.69 -0.58 0.37 0.14 0.50 1.73 0.50 6.02l0.00 5.83 1.50 0.13c1.20 0.10 1.52 0.31 1.62 1.07 0.13 0.92 0.06 0.94 -4.10 0.94 -3.51 0.00 -4.27 -0.11 -4.48 -0.67z"},"path5796":{"name":"name142","path":"m437.33 460.77c-0.13 -0.22 -0.50 -0.29 -0.82 -0.16 -0.83 0.33 -0.73 0.56 0.24 0.56 0.45 0.00 0.72 -0.18 0.59 -0.40z"},"path5794":{"name":"name143","path":"m444.43 461.34c-0.31 -0.86 0.52 -1.40 2.17 -1.41l1.30 -0.01 0.00 -4.57 0.00 -4.57 -1.70 0.08c-1.40 0.07 -1.70 -0.05 -1.70 -0.68 0.00 -0.55 0.63 -0.98 2.32 -1.58 1.27 -0.45 2.49 -0.71 2.69 -0.57 0.21 0.14 0.38 2.83 0.38 6.04l0.00 5.79 1.50 0.13c1.20 0.10 1.52 0.31 1.62 1.07 0.13 0.92 0.06 0.94 -4.10 0.94 -3.51 0.00 -4.27 -0.11 -4.48 -0.67z"},"path5792":{"name":"name144","path":"m449.30 460.77c-0.13 -0.22 -0.50 -0.29 -0.82 -0.16 -0.83 0.33 -0.73 0.56 0.24 0.56 0.45 0.00 0.72 -0.18 0.59 -0.40z"},"path5790":{"name":"name145","path":"m484.68 569.38c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5788":{"name":"name146","path":"m685.67 568.33 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5786":{"name":"name147","path":"m487.22 567.19c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5784":{"name":"name148","path":"m410.57 566.35c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5782":{"name":"name149","path":"m550.95 565.62c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5780":{"name":"name150","path":"m490.22 564.47c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5778":{"name":"name151","path":"m191.18 563.64c0.74 -0.80 1.26 -1.46 1.15 -1.46 -0.11 0.00 -0.81 0.66 -1.55 1.46 -0.74 0.80 -1.26 1.46 -1.15 1.46 0.11 0.00 0.81 -0.66 1.55 -1.46z"},"path5776":{"name":"name152","path":"m627.56 564.52c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5774":{"name":"name153","path":"m687.72 562.28c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5772":{"name":"name154","path":"m494.43 560.40 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5770":{"name":"name155","path":"m403.86 559.36c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5768":{"name":"name156","path":"m417.95 559.05c1.19 -1.26 2.08 -2.30 1.97 -2.30 -0.11 0.00 -1.18 1.03 -2.37 2.30 -1.19 1.26 -2.08 2.30 -1.97 2.30 0.11 0.00 1.18 -1.03 2.37 -2.30z"},"path5766":{"name":"name157","path":"m623.96 560.77c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5764":{"name":"name158","path":"m196.60 558.32 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5762":{"name":"name159","path":"m687.05 558.92c0.00 -0.19 -0.27 -0.70 -0.61 -1.15 -0.56 -0.75 -0.57 -0.73 -0.14 0.34 0.47 1.15 0.74 1.44 0.74 0.81z"},"path5760":{"name":"name160","path":"m201.16 554.04c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5758":{"name":"name161","path":"m423.34 553.83c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5756":{"name":"name162","path":"m501.40 553.62c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5754":{"name":"name163","path":"m619.05 551.25c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5752":{"name":"name164","path":"m204.96 550.49c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5750":{"name":"name165","path":"m618.65 548.52c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5748":{"name":"name166","path":"m429.53 548.20c0.74 -0.80 1.26 -1.46 1.15 -1.46 -0.11 0.00 -0.81 0.66 -1.55 1.46 -0.74 0.80 -1.26 1.46 -1.15 1.46 0.11 0.00 0.81 -0.66 1.55 -1.46z"},"path5746":{"name":"name167","path":"m327.82 548.94c-0.71 -0.09 -1.88 -0.09 -2.60 0.00 -0.71 0.09 -0.13 0.17 1.30 0.17 1.43 0.00 2.01 -0.08 1.30 -0.17z"},"path5744":{"name":"name168","path":"m683.33 547.91c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5742":{"name":"name169","path":"m208.00 547.67c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5740":{"name":"name170","path":"m508.58 545.69c0.74 -0.80 1.26 -1.46 1.15 -1.46 -0.11 0.00 -0.81 0.66 -1.55 1.46 -0.74 0.80 -1.26 1.46 -1.15 1.46 0.11 0.00 0.81 -0.66 1.55 -1.46z"},"path5738":{"name":"name171","path":"m210.80 545.17c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5736":{"name":"name172","path":"m618.64 543.71c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5734":{"name":"name173","path":"m682.93 543.08c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5732":{"name":"name174","path":"m190.88 544.34c-1.37 -0.08 -3.62 -0.08 -4.99 0.00 -1.37 0.08 -0.25 0.15 2.50 0.15 2.74 0.00 3.87 -0.07 2.50 -0.15z"},"path5730":{"name":"name175","path":"m440.71 536.51c4.06 -4.25 7.29 -7.72 7.18 -7.72 -0.11 0.00 -3.52 3.47 -7.58 7.72 -4.06 4.25 -7.29 7.72 -7.18 7.72 0.11 0.00 3.52 -3.47 7.58 -7.72z"},"path5728":{"name":"name176","path":"m194.44 542.36c0.65 -0.57 2.83 -1.92 4.85 -3.00 2.70 -1.45 4.32 -2.67 6.11 -4.61 2.42 -2.62 2.47 -2.65 8.12 -4.58 4.65 -1.59 5.82 -1.86 6.43 -1.46 4.62 3.02 8.04 4.71 11.57 5.72 2.34 0.67 4.17 1.00 4.37 0.78 0.47 -0.49 3.71 -10.48 7.63 -23.49 5.35 -17.75 6.30 -21.64 7.17 -29.40 0.44 -3.86 0.99 -8.00 1.22 -9.18 0.67 -3.35 2.51 -6.88 5.55 -10.61l2.78 -3.41 0.00 -2.93c0.00 -1.61 -0.05 -2.93 -0.10 -2.93 -0.06 0.00 -1.99 -0.56 -4.29 -1.25 -2.30 -0.69 -4.30 -1.25 -4.44 -1.25 -0.14 0.00 -2.17 2.35 -4.52 5.22 -2.35 2.87 -4.39 5.22 -4.54 5.22 -0.15 0.00 -1.91 -1.71 -3.92 -3.80l-3.65 -3.80 -3.47 1.77c-2.55 1.30 -3.58 2.06 -3.88 2.86 -0.46 1.24 -0.22 3.90 0.74 8.28 0.36 1.66 0.56 3.13 0.43 3.26 -0.13 0.13 -2.99 0.51 -6.36 0.83 -3.37 0.32 -7.55 0.97 -9.28 1.43 -1.74 0.46 -3.49 0.84 -3.89 0.84 -0.40 0.00 -3.36 -1.22 -6.58 -2.71 -3.22 -1.49 -5.91 -2.71 -5.99 -2.71 -0.08 0.00 -4.90 6.62 -10.70 14.71l-10.55 14.71 -0.17 6.68c-0.12 4.71 -0.37 7.36 -0.85 8.97 -0.51 1.70 -0.74 4.41 -0.89 10.43 -0.19 7.44 0.23 18.47 0.72 18.99 0.55 0.58 8.00 1.38 13.26 1.42 5.76 0.05 5.96 0.02 7.11 -0.99z"},"path5726":{"name":"name177","path":"m217.71 507.65c-1.34 -1.51 -1.90 -3.99 -1.67 -7.39 0.30 -4.42 2.34 -6.66 5.35 -5.89 2.20 0.57 3.33 3.00 3.33 7.18 0.00 4.96 -1.40 7.20 -4.50 7.20 -1.14 0.00 -1.78 -0.28 -2.51 -1.10z"},"path5724":{"name":"name178","path":"m220.83 507.64c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5722":{"name":"name179","path":"m221.93 505.31c1.39 -2.39 0.87 -7.72 -0.84 -8.68 -2.26 -1.27 -3.89 3.28 -2.73 7.63 0.70 2.64 2.37 3.13 3.58 1.06z"},"path5720":{"name":"name180","path":"m223.81 500.31c-0.09 -0.75 -0.16 -0.24 -0.17 1.14 -0.00 1.38 0.07 1.99 0.16 1.36 0.09 -0.63 0.09 -1.75 0.00 -2.50z"},"path5718":{"name":"name181","path":"m217.02 500.72c-0.10 -0.52 -0.18 -0.19 -0.18 0.73 -0.00 0.92 0.07 1.34 0.17 0.94 0.10 -0.40 0.10 -1.15 0.01 -1.67z"},"path5716":{"name":"name182","path":"m218.78 495.92c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5714":{"name":"name183","path":"m203.56 507.35c0.00 -0.68 1.04 -2.05 3.39 -4.47 3.57 -3.67 4.01 -4.69 2.61 -6.01 -1.01 -0.95 -2.57 -0.58 -3.45 0.83 -0.36 0.57 -0.99 1.04 -1.40 1.04 -1.10 0.00 -0.97 -1.89 0.21 -3.13 3.27 -3.42 8.98 -0.14 7.40 4.25 -0.23 0.65 -1.61 2.35 -3.07 3.79l-2.64 2.61 1.87 0.00c1.03 0.00 2.24 -0.23 2.68 -0.52 0.66 -0.43 0.87 -0.41 1.19 0.10 0.21 0.34 0.38 1.05 0.39 1.57 0.01 0.92 -0.09 0.94 -4.59 0.94 -4.55 0.00 -4.59 -0.01 -4.59 -0.98z"},"path5712":{"name":"name184","path":"m206.55 505.00c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5710":{"name":"name185","path":"m208.64 495.14c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5708":{"name":"name186","path":"m513.49 539.49c-0.16 -0.28 -0.33 -0.22 -0.44 0.17 -0.10 0.33 -0.47 0.98 -0.82 1.44 -0.45 0.58 -0.31 0.53 0.44 -0.17 0.60 -0.55 0.97 -1.20 0.82 -1.44z"},"path5706":{"name":"name187","path":"m649.26 539.74c0.10 -0.17 -0.83 -0.26 -2.07 -0.20 -3.90 0.20 -4.37 0.38 -1.18 0.45 1.69 0.03 3.15 -0.08 3.26 -0.25z"},"path5704":{"name":"name188","path":"m640.44 539.37c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5702":{"name":"name189","path":"m682.53 537.66c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5700":{"name":"name190","path":"m636.84 538.95c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5698":{"name":"name191","path":"m633.65 538.53c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5696":{"name":"name192","path":"m660.50 517.44c21.10 -37.58 20.98 -37.36 22.30 -43.04 1.00 -4.30 1.07 -5.02 0.57 -5.63 -0.31 -0.39 -2.27 -2.78 -4.36 -5.30 -9.22 -11.16 -26.30 -32.64 -29.39 -36.94 -0.91 -1.26 -2.02 -3.33 -2.48 -4.59 -1.16 -3.22 -3.93 -6.89 -9.94 -13.17 -4.37 -4.57 -5.78 -5.76 -9.01 -7.63 -4.23 -2.44 -8.84 -5.78 -12.28 -8.89 -2.58 -2.34 -2.74 -2.36 -8.13 -1.20 -2.13 0.46 -4.47 0.83 -5.18 0.83l-1.30 0.00 -0.21 25.56c-0.16 19.19 -0.38 27.39 -0.88 32.87l-0.67 7.30 -6.92 14.82c-3.80 8.15 -7.47 16.25 -8.15 18.00 -1.70 4.38 -3.34 9.19 -3.18 9.31 0.07 0.06 2.37 0.34 5.11 0.62 2.74 0.29 5.59 0.79 6.34 1.11 0.75 0.33 2.86 2.13 4.70 4.01l3.34 3.41 0.00 2.98c0.00 2.90 0.05 3.05 2.00 5.94l2.00 2.96 3.10 0.72c3.83 0.89 6.12 2.08 9.24 4.78 2.15 1.87 2.50 2.40 3.23 4.85 0.45 1.52 0.81 3.19 0.81 3.72 0.00 0.85 0.25 0.99 2.10 1.24 1.15 0.15 5.33 0.73 9.28 1.28 9.25 1.29 9.43 1.31 12.98 1.37l2.99 0.05 11.98 -21.33z"},"path5694":{"name":"name193","path":"m624.52 482.28c-0.37 -1.00 0.19 -1.50 1.66 -1.50l1.37 0.00 0.00 -4.58 0.00 -4.58 -1.48 0.09c-1.14 0.07 -1.52 -0.08 -1.63 -0.65 -0.15 -0.77 1.56 -1.76 3.92 -2.25l1.17 -0.24 0.11 6.00 0.11 6.00 1.72 0.13c1.51 0.11 1.71 0.24 1.60 1.04 -0.12 0.86 -0.35 0.92 -4.22 1.03 -3.33 0.10 -4.14 0.00 -4.33 -0.50z"},"path5692":{"name":"name194","path":"m630.45 481.73c-0.93 -0.09 -2.46 -0.09 -3.39 0.00 -0.93 0.09 -0.17 0.16 1.70 0.16 1.87 0.00 2.63 -0.07 1.70 -0.16z"},"path5690":{"name":"name195","path":"m628.65 470.10c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5688":{"name":"name196","path":"m639.69 482.29c-0.32 -0.86 0.14 -1.50 1.06 -1.50 0.51 0.00 0.77 -0.29 0.77 -0.83 0.00 -0.75 -0.27 -0.83 -2.60 -0.83 -2.57 0.00 -2.59 -0.01 -2.57 -1.15 0.01 -0.63 1.05 -2.93 2.31 -5.11 2.05 -3.57 2.41 -3.98 3.57 -4.10l1.28 -0.13 0.00 4.16c0.00 3.31 0.12 4.20 0.60 4.40 0.33 0.13 0.60 0.60 0.60 1.04 0.00 0.44 -0.27 0.91 -0.60 1.04 -0.79 0.32 -0.77 1.52 0.03 1.52 0.42 0.00 0.58 0.31 0.50 0.94 -0.11 0.83 -0.39 0.95 -2.43 1.06 -1.76 0.10 -2.35 -0.02 -2.53 -0.50z"},"path5686":{"name":"name197","path":"m643.43 481.75c-0.38 -0.11 -0.70 -0.41 -0.70 -0.68 0.00 -0.36 -0.08 -0.37 -0.30 -0.02 -0.16 0.26 -0.65 0.57 -1.09 0.68 -0.44 0.11 0.01 0.21 1.00 0.21 0.99 0.00 1.48 -0.09 1.10 -0.19z"},"path5684":{"name":"name198","path":"m642.87 478.51c0.12 -0.34 0.05 -0.72 -0.16 -0.86 -0.21 -0.14 -0.38 0.14 -0.38 0.61 0.00 1.01 0.22 1.11 0.54 0.25z"},"path5682":{"name":"name199","path":"m637.94 478.10c0.00 -0.10 -0.18 -0.30 -0.40 -0.44 -0.22 -0.14 -0.40 -0.06 -0.40 0.18 0.00 0.24 0.18 0.44 0.40 0.44 0.22 0.00 0.40 -0.08 0.40 -0.18z"},"path5680":{"name":"name200","path":"m641.52 474.63 -0.01 -2.40 -1.18 2.09c-0.65 1.15 -1.19 2.23 -1.19 2.40 0.00 0.17 0.53 0.31 1.19 0.31 1.19 0.00 1.20 -0.01 1.19 -2.40z"},"path5678":{"name":"name201","path":"m642.73 470.35c0.00 -0.23 -0.31 -0.41 -0.70 -0.41 -0.60 0.01 -0.61 0.07 -0.10 0.41 0.75 0.51 0.80 0.51 0.80 0.00z"},"path5676":{"name":"name202","path":"m516.46 537.08c4.04 -2.42 8.00 -6.13 13.39 -12.55 6.21 -7.41 7.69 -8.85 10.45 -10.19 2.38 -1.16 3.27 -1.20 7.21 -0.35l2.96 0.64 2.91 -3.09c3.74 -3.97 5.15 -4.86 7.71 -4.87 2.48 -0.01 5.21 -1.32 8.18 -3.93 2.40 -2.11 5.05 -3.16 7.96 -3.16l1.83 0.00 0.94 -3.02c1.53 -4.94 5.18 -13.50 11.55 -27.12l6.00 -12.82 0.44 -5.05c0.87 -9.94 1.31 -27.19 1.12 -44.02 -0.17 -14.93 -0.28 -17.43 -0.91 -19.62 -0.56 -1.94 -0.73 -3.98 -0.74 -9.08l-0.02 -6.57 -1.44 0.00c-0.94 0.00 -2.80 0.73 -5.36 2.09 -2.21 1.18 -4.46 2.09 -5.16 2.09 -1.66 0.00 -6.14 -1.33 -9.76 -2.90 -2.42 -1.05 -3.50 -1.28 -6.04 -1.28 -4.69 0.00 -5.48 0.27 -6.68 2.25 -0.57 0.94 -2.63 5.47 -4.58 10.06 -4.28 10.09 -18.94 40.99 -23.58 49.67 -6.49 12.16 -11.57 19.98 -16.62 25.62 -5.07 5.66 -9.03 9.14 -12.05 10.59 -1.08 0.52 -1.96 1.22 -1.97 1.57 -0.02 1.26 -1.57 4.18 -3.24 6.06 -0.94 1.07 -4.07 3.88 -6.96 6.27 -4.89 4.03 -5.88 5.18 -6.66 7.71 -0.12 0.38 1.16 2.09 3.31 4.43 3.23 3.51 9.16 11.39 10.41 13.82 0.58 1.13 0.41 1.57 -2.42 6.25l-1.31 2.17 0.93 1.38c0.51 0.76 3.52 4.19 6.68 7.62 3.16 3.43 6.47 7.24 7.35 8.45 0.88 1.22 1.69 2.21 1.80 2.21 0.11 0.00 1.19 -0.59 2.39 -1.31z"},"path5674":{"name":"name203","path":"m566.97 462.43c-2.96 -1.40 -1.88 -3.18 1.16 -1.91 1.35 0.57 1.87 0.60 2.80 0.20 2.39 -1.04 1.66 -3.85 -1.14 -4.40 -1.10 -0.22 -1.34 -0.44 -1.24 -1.16 0.09 -0.66 0.48 -0.94 1.48 -1.10 0.75 -0.11 1.55 -0.54 1.79 -0.94 1.05 -1.74 -1.66 -3.11 -3.56 -1.80 -1.26 0.86 -2.19 0.83 -2.18 -0.07 0.01 -1.64 1.54 -2.61 4.10 -2.61 2.42 0.00 3.88 1.39 3.88 3.71 0.00 0.91 -0.25 1.92 -0.55 2.23 -0.46 0.48 -0.43 0.72 0.20 1.54 0.91 1.18 0.98 3.68 0.12 4.96 -0.81 1.20 -2.63 2.18 -4.05 2.17 -0.61 -0.01 -1.88 -0.37 -2.81 -0.81z"},"path5672":{"name":"name204","path":"m571.78 455.20c0.15 -0.40 -0.13 -0.49 -1.06 -0.34 -1.23 0.20 -1.24 0.21 -0.26 0.51 0.55 0.17 1.02 0.32 1.06 0.34 0.03 0.02 0.15 -0.20 0.26 -0.51z"},"path5670":{"name":"name205","path":"m573.13 451.88c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5668":{"name":"name206","path":"m570.76 449.61c-0.38 -0.10 -1.01 -0.10 -1.40 0.00 -0.38 0.10 -0.07 0.19 0.70 0.19 0.77 0.00 1.08 -0.09 0.70 -0.19z"},"path5666":{"name":"name207","path":"m553.77 461.92c0.10 -0.77 0.42 -0.98 1.63 -1.08l1.50 -0.13 0.00 -4.57 0.00 -4.57 -1.60 0.27c-1.45 0.24 -1.60 0.18 -1.60 -0.64 0.00 -0.95 1.32 -1.74 3.89 -2.31l1.30 -0.29 0.00 6.06 0.00 6.06 1.70 0.13c1.39 0.11 1.70 0.28 1.70 0.96 0.00 0.78 -0.30 0.84 -4.32 0.95 -4.30 0.12 -4.32 0.11 -4.19 -0.83z"},"path5664":{"name":"name208","path":"m559.79 461.70c-0.93 -0.09 -2.46 -0.09 -3.39 0.00 -0.93 0.09 -0.17 0.16 1.70 0.16 1.87 0.00 2.63 -0.07 1.70 -0.16z"},"path5662":{"name":"name209","path":"m558.09 450.32c0.00 -0.23 -0.31 -0.41 -0.70 -0.41 -0.60 0.01 -0.61 0.07 -0.10 0.41 0.75 0.51 0.80 0.51 0.80 0.00z"},"path5660":{"name":"name210","path":"m630.85 538.11c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5658":{"name":"name211","path":"m172.68 536.61c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5656":{"name":"name212","path":"m628.06 537.69c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5654":{"name":"name213","path":"m205.21 536.82c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5652":{"name":"name214","path":"m624.86 537.28c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5650":{"name":"name215","path":"m621.09 536.85c-0.37 -0.10 -0.75 -0.60 -0.84 -1.10 -0.14 -0.75 -0.18 -0.71 -0.22 0.23 -0.04 0.94 0.11 1.14 0.84 1.10 0.64 -0.03 0.70 -0.10 0.22 -0.23z"},"path5648":{"name":"name216","path":"m510.18 534.94c0.00 -0.06 -1.84 -1.99 -4.09 -4.28l-4.09 -4.17 3.98 4.28c3.70 3.97 4.20 4.47 4.20 4.17z"},"path5646":{"name":"name217","path":"m683.25 532.96c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5644":{"name":"name218","path":"m526.15 530.67c1.41 -1.49 2.48 -2.71 2.37 -2.71 -0.11 0.00 -1.36 1.22 -2.77 2.71 -1.41 1.49 -2.48 2.71 -2.37 2.71 0.11 0.00 1.36 -1.22 2.77 -2.71z"},"path5642":{"name":"name219","path":"m598.61 530.46c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5640":{"name":"name220","path":"m685.50 530.14c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5638":{"name":"name221","path":"m616.78 527.39c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5636":{"name":"name222","path":"m451.69 525.45c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5634":{"name":"name223","path":"m530.59 525.55c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5632":{"name":"name224","path":"m688.12 523.89c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5630":{"name":"name225","path":"m499.80 523.62c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5628":{"name":"name226","path":"m454.88 522.53c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5626":{"name":"name227","path":"m532.99 522.63c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5624":{"name":"name228","path":"m688.00 521.07c0.20 -0.91 0.16 -1.08 -0.14 -0.63 -0.22 0.34 -0.41 0.99 -0.41 1.43 -0.01 1.07 0.22 0.73 0.55 -0.80z"},"path5622":{"name":"name229","path":"m458.28 519.40c0.74 -0.80 1.26 -1.46 1.15 -1.46 -0.11 0.00 -0.81 0.66 -1.55 1.46 -0.74 0.80 -1.26 1.46 -1.15 1.46 0.11 0.00 0.81 -0.66 1.55 -1.46z"},"path5620":{"name":"name230","path":"m535.93 519.19c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5618":{"name":"name231","path":"m690.29 517.20c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5616":{"name":"name232","path":"m552.72 514.07 1.58 -1.77 -1.60 1.53c-0.88 0.84 -1.96 1.62 -2.40 1.73 -0.78 0.20 -0.78 0.20 0.02 0.25 0.49 0.03 1.46 -0.67 2.40 -1.73z"},"path5614":{"name":"name233","path":"m462.47 514.60c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5612":{"name":"name234","path":"m544.22 514.32c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5610":{"name":"name235","path":"m465.46 511.05c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5608":{"name":"name236","path":"m696.45 510.73 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5606":{"name":"name237","path":"m556.32 510.32 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5604":{"name":"name238","path":"m699.62 507.92c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5602":{"name":"name239","path":"m469.46 506.46c0.74 -0.80 1.26 -1.46 1.15 -1.46 -0.11 0.00 -0.81 0.66 -1.55 1.46 -0.74 0.80 -1.26 1.46 -1.15 1.46 0.11 0.00 0.81 -0.66 1.55 -1.46z"},"path5600":{"name":"name240","path":"m562.18 507.64c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5598":{"name":"name241","path":"m596.82 506.04c-0.97 -1.03 -1.85 -1.88 -1.96 -1.88 -0.11 0.00 0.59 0.85 1.56 1.88 0.97 1.03 1.85 1.88 1.96 1.88 0.11 0.00 -0.59 -0.85 -1.56 -1.88z"},"path5596":{"name":"name242","path":"m569.32 504.27c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5594":{"name":"name243","path":"m702.52 489.87c-0.07 -2.81 -0.13 -0.51 -0.13 5.11 0.00 5.62 0.06 7.93 0.13 5.11 0.07 -2.81 0.07 -7.41 0.00 -10.23z"},"path5592":{"name":"name244","path":"m475.05 500.61c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5590":{"name":"name245","path":"m493.81 501.51c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5588":{"name":"name246","path":"m587.53 501.40c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5586":{"name":"name247","path":"m583.53 500.99c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5584":{"name":"name248","path":"m477.89 498.00c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5582":{"name":"name249","path":"m487.78 494.64c-0.96 -1.10 -1.83 -1.94 -1.93 -1.87 -0.18 0.14 3.20 3.87 3.51 3.87 0.10 0.00 -0.62 -0.90 -1.58 -2.00z"},"path5580":{"name":"name250","path":"m488.84 487.36 1.17 -1.36 -1.30 1.23c-0.71 0.67 -1.30 1.28 -1.30 1.36 0.00 0.32 0.33 0.04 1.42 -1.23z"},"path5578":{"name":"name251","path":"m492.26 484.23c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5576":{"name":"name252","path":"m497.20 480.37c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5574":{"name":"name253","path":"m684.18 473.90c0.00 -0.46 -0.26 0.10 -0.56 1.25 -0.31 1.15 -0.54 2.27 -0.52 2.50 0.06 0.71 1.09 -2.87 1.08 -3.76z"},"path5572":{"name":"name254","path":"m684.52 471.94c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5570":{"name":"name255","path":"m503.27 470.69c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5568":{"name":"name256","path":"m221.02 469.68c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5566":{"name":"name257","path":"m225.81 469.27c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5564":{"name":"name258","path":"m507.25 466.93c3.92 -2.72 10.69 -9.75 14.40 -14.94 6.66 -9.34 17.33 -29.72 27.19 -51.96 2.85 -6.43 6.37 -14.29 7.82 -17.48 1.45 -3.19 2.63 -5.86 2.63 -5.95 0.00 -0.09 -0.78 -0.16 -1.74 -0.16 -1.67 0.00 -1.80 0.10 -3.41 2.48 -2.24 3.34 -2.93 3.83 -7.36 5.26l-3.81 1.23 -1.32 2.86c-0.73 1.57 -1.60 3.00 -1.93 3.18 -0.58 0.31 -10.52 3.35 -10.97 3.35 -0.38 0.00 -0.23 -3.36 0.37 -8.74 0.32 -2.86 0.55 -5.23 0.50 -5.28 -0.28 -0.26 -6.95 -2.30 -8.24 -2.51 -1.18 -0.20 -13.52 0.91 -13.89 1.25 -0.04 0.04 0.53 2.60 1.28 5.69 0.86 3.57 1.22 5.77 0.98 6.02 -0.21 0.22 -7.43 3.41 -16.04 7.10l-15.66 6.70 -1.53 2.30c-1.53 2.30 -1.99 2.66 -3.94 3.09 -0.59 0.13 -3.03 2.22 -5.63 4.81l-4.59 4.58 -0.49 3.88c-0.27 2.13 -0.58 4.27 -0.69 4.76 -0.16 0.74 0.39 1.24 3.43 3.12l3.62 2.24 0.00 3.74 0.00 3.74 4.94 5.26 4.94 5.26 0.70 3.32c0.38 1.83 0.74 3.38 0.80 3.45 0.06 0.07 1.99 -0.45 4.30 -1.15 2.31 -0.70 4.52 -1.28 4.91 -1.28 0.39 0.00 2.61 2.04 4.93 4.52 4.55 4.89 8.61 8.42 9.67 8.42 0.37 0.00 2.07 -0.98 3.79 -2.17z"},"path5562":{"name":"name259","path":"m495.11 432.93c-0.71 -0.30 -0.62 -1.67 0.13 -1.97 0.35 -0.14 1.07 -0.25 1.60 -0.25 0.96 0.00 0.97 -0.02 0.97 -4.50l0.00 -4.50 -1.60 0.16c-1.38 0.14 -1.60 0.05 -1.60 -0.68 0.00 -0.63 0.47 -1.01 1.87 -1.50 3.46 -1.23 3.32 -1.45 3.32 5.18l0.00 5.84 1.17 0.00c2.34 0.00 3.27 1.17 1.66 2.07 -0.77 0.43 -6.57 0.55 -7.51 0.16z"},"path5560":{"name":"name260","path":"m506.47 432.94c-0.90 -0.94 -0.10 -2.38 3.11 -5.63 3.69 -3.73 4.14 -4.85 2.42 -6.03 -1.20 -0.82 -2.40 -0.49 -3.27 0.89 -0.79 1.27 -2.14 1.36 -2.14 0.15 0.00 -1.96 1.99 -3.73 4.19 -3.73 1.35 0.00 3.26 1.04 3.78 2.06 0.23 0.44 0.41 1.52 0.41 2.40 0.00 1.43 -0.31 1.93 -2.87 4.62l-2.87 3.02 1.99 0.00c1.09 0.00 2.21 -0.23 2.47 -0.50 0.70 -0.74 1.37 0.14 1.21 1.60l-0.13 1.20 -4.01 0.12c-2.21 0.06 -4.14 -0.01 -4.29 -0.17z"},"path5558":{"name":"name261","path":"m509.78 428.82c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5556":{"name":"name262","path":"m499.00 467.27c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5554":{"name":"name263","path":"m509.83 466.70c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.67 0.55 -0.88 0.89 -0.55 0.89 0.08 0.00 0.40 -0.33 0.70 -0.73z"},"path5552":{"name":"name264","path":"m683.85 467.27c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5550":{"name":"name265","path":"m512.18 464.72c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5548":{"name":"name266","path":"m257.51 464.20c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5546":{"name":"name267","path":"m681.46 464.35c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5544":{"name":"name268","path":"m679.46 461.86c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5542":{"name":"name269","path":"m260.45 460.75c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5540":{"name":"name270","path":"m713.77 457.41c0.00 -0.34 -0.36 0.31 -0.79 1.46 -0.43 1.15 -0.77 2.18 -0.75 2.30 0.07 0.44 1.54 -3.16 1.54 -3.76z"},"path5538":{"name":"name271","path":"m243.13 459.19c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5536":{"name":"name272","path":"m517.99 458.56 1.17 -1.36 -1.30 1.23c-1.21 1.14 -1.48 1.49 -1.17 1.49 0.07 0.00 0.65 -0.61 1.30 -1.36z"},"path5534":{"name":"name273","path":"m677.06 458.94c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5532":{"name":"name274","path":"m245.28 456.58c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5530":{"name":"name275","path":"m598.69 455.44c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5528":{"name":"name276","path":"m675.07 456.43c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5526":{"name":"name277","path":"m521.36 454.70c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5524":{"name":"name278","path":"m714.07 454.83c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5522":{"name":"name279","path":"m247.67 453.66c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5520":{"name":"name280","path":"m672.67 453.51c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5518":{"name":"name281","path":"m599.09 450.84c-0.10 -0.40 -0.18 -0.07 -0.18 0.73 0.00 0.80 0.08 1.13 0.18 0.73 0.10 -0.40 0.10 -1.06 0.00 -1.46z"},"path5516":{"name":"name282","path":"m714.07 451.07c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5514":{"name":"name283","path":"m250.07 450.74c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5512":{"name":"name284","path":"m476.64 451.41c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5510":{"name":"name285","path":"m670.68 451.01c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5508":{"name":"name286","path":"m474.25 448.95c0.00 -0.06 -1.21 -1.33 -2.69 -2.82l-2.69 -2.70 2.58 2.82c2.40 2.62 2.81 3.01 2.81 2.70z"},"path5506":{"name":"name287","path":"m668.68 448.50c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5504":{"name":"name288","path":"m599.49 445.62c-0.10 -0.52 -0.17 -0.09 -0.17 0.94 0.00 1.03 0.08 1.46 0.17 0.94 0.10 -0.52 0.10 -1.36 0.00 -1.88z"},"path5502":{"name":"name289","path":"m666.68 446.00c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5500":{"name":"name290","path":"m661.53 439.36c-1.96 -2.58 -4.16 -5.26 -4.89 -5.95 -1.04 -0.97 -1.15 -1.02 -0.50 -0.21 0.46 0.57 2.58 3.25 4.72 5.95 2.14 2.70 3.97 4.90 4.06 4.90 0.09 0.00 -1.43 -2.11 -3.39 -4.70z"},"path5498":{"name":"name291","path":"m709.40 442.18c-0.97 -1.03 -1.85 -1.88 -1.96 -1.88 -0.11 0.00 0.59 0.85 1.56 1.88 0.97 1.03 1.85 1.88 1.96 1.88 0.11 0.00 -0.59 -0.85 -1.56 -1.88z"},"path5496":{"name":"name292","path":"m599.90 437.68c-0.08 -0.97 -0.15 -0.07 -0.15 2.00 0.00 2.07 0.07 2.86 0.15 1.76 0.08 -1.10 0.08 -2.79 0.00 -3.76z"},"path5494":{"name":"name293","path":"m467.35 436.01c-0.08 -0.97 -0.15 -0.07 -0.15 2.00 0.00 2.07 0.07 2.86 0.15 1.76 0.08 -1.10 0.08 -2.79 0.00 -3.76z"},"path5492":{"name":"name294","path":"m232.18 439.39c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5490":{"name":"name295","path":"m371.93 434.21c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5488":{"name":"name296","path":"m379.76 432.36c2.51 -0.98 5.51 -3.11 10.25 -7.26 7.44 -6.52 8.84 -7.24 15.09 -7.78 7.57 -0.66 11.94 -1.20 12.99 -1.62 1.59 -0.63 2.40 -5.13 2.08 -11.50 -0.35 -6.93 2.47 -38.30 3.80 -42.16 0.71 -2.07 0.87 -3.47 0.89 -8.14 0.02 -3.10 -0.19 -7.14 -0.46 -8.97 -0.83 -5.65 -3.68 -17.36 -4.29 -17.61 -1.31 -0.53 -29.25 8.72 -37.26 12.34 -2.03 0.91 -3.74 1.72 -3.80 1.80 -0.06 0.07 1.51 8.92 3.49 19.66 1.98 10.74 3.49 19.64 3.36 19.77 -0.13 0.14 -2.75 -0.19 -5.82 -0.73l-5.58 -0.97 -4.72 0.95c-2.60 0.52 -11.14 2.97 -18.99 5.43l-14.27 4.48 -4.80 4.29 -4.80 4.29 0.00 3.46 0.00 3.46 6.69 6.85c12.09 12.39 19.88 17.36 25.85 16.50 2.24 -0.32 4.31 0.33 6.01 1.89 2.02 1.85 3.85 2.39 8.25 2.41 2.95 0.01 4.40 -0.18 6.03 -0.83z"},"path5486":{"name":"name297","path":"m394.30 398.29c-0.42 -0.12 -0.70 -0.61 -0.70 -1.22 0.00 -0.93 0.15 -1.01 1.95 -1.01 1.74 0.00 2.09 -0.16 3.19 -1.48 1.43 -1.70 1.63 -2.53 0.47 -1.88 -2.11 1.18 -4.79 -0.10 -5.60 -2.66 -1.23 -3.90 1.95 -7.40 5.36 -5.92 1.96 0.86 3.00 3.26 3.01 6.97 0.01 3.12 -0.89 5.00 -2.99 6.27 -1.32 0.79 -3.60 1.24 -4.69 0.93z"},"path5484":{"name":"name298","path":"m401.01 389.89c-0.13 -0.13 -0.45 -0.02 -0.71 0.25 -0.36 0.38 -0.36 0.49 0.01 0.49 0.26 0.00 0.51 0.52 0.54 1.15 0.06 0.99 0.09 0.96 0.23 -0.25 0.09 -0.77 0.06 -1.51 -0.07 -1.64z"},"path5482":{"name":"name299","path":"m397.69 392.03c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5480":{"name":"name300","path":"m398.79 390.21c0.96 -1.00 1.01 -2.00 0.18 -3.25 -0.72 -1.07 -2.24 -1.22 -2.98 -0.29 -0.72 0.91 -0.57 3.20 0.26 3.83 0.97 0.74 1.62 0.67 2.54 -0.30z"},"path5478":{"name":"name301","path":"m655.11 431.39c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5476":{"name":"name302","path":"m652.09 427.57c-0.81 -1.03 -1.57 -1.88 -1.69 -1.88 -0.20 0.00 0.32 0.71 2.07 2.82 1.42 1.71 1.12 0.97 -0.38 -0.94z"},"path5474":{"name":"name303","path":"m703.68 427.68c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5472":{"name":"name304","path":"m600.31 406.18c-0.07 -4.07 -0.12 -0.74 -0.12 7.41 0.00 8.15 0.05 11.48 0.12 7.41 0.07 -4.07 0.07 -10.74 0.00 -14.82z"},"path5470":{"name":"name305","path":"m391.25 425.38c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5468":{"name":"name306","path":"m340.50 420.53c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5466":{"name":"name307","path":"m465.07 415.78 2.98 -3.23 -3.09 3.12c-2.87 2.90 -3.28 3.35 -2.98 3.35 0.06 0.00 1.45 -1.46 3.09 -3.23z"},"path5464":{"name":"name308","path":"m702.48 417.66c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5462":{"name":"name309","path":"m229.40 415.79c-0.09 -0.63 -0.17 -0.21 -0.17 0.93 -0.00 1.15 0.07 1.67 0.17 1.15 0.09 -0.51 0.10 -1.45 0.01 -2.09z"},"path5460":{"name":"name310","path":"m409.27 417.90c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5458":{"name":"name311","path":"m464.28 415.03c3.95 -4.17 6.80 -6.45 8.08 -6.45 0.81 0.00 1.40 -0.55 2.77 -2.61l1.74 -2.61 15.32 -6.57c8.43 -3.61 15.41 -6.66 15.51 -6.77 0.10 -0.11 -0.37 -2.55 -1.06 -5.42 -1.13 -4.73 -1.49 -6.91 -1.12 -6.91 0.07 0.00 3.38 -0.37 7.34 -0.83 5.55 -0.64 7.70 -0.74 9.35 -0.41 2.63 0.52 9.53 2.88 9.53 3.26 0.00 0.15 -0.27 2.63 -0.60 5.50 -0.33 2.87 -0.59 5.63 -0.60 6.13l0.00 0.91 2.69 -0.81c1.48 -0.45 3.33 -0.99 4.10 -1.21 1.22 -0.35 1.59 -0.79 2.83 -3.42l1.43 -3.02 4.35 -1.47 4.35 -1.47 2.16 -3.03 2.16 -3.03 2.63 -0.01c1.45 -0.00 2.83 -0.14 3.07 -0.31 0.24 -0.17 0.92 -1.10 1.50 -2.08 0.77 -1.29 1.33 -1.77 2.02 -1.77 1.91 0.00 2.22 -0.37 2.22 -2.67 0.00 -4.75 1.88 -9.71 4.97 -13.12 1.70 -1.87 2.78 -3.91 6.84 -12.94 4.79 -10.66 4.82 -10.72 3.85 -11.00 -2.04 -0.61 -10.88 -1.96 -15.66 -2.40 -2.74 -0.25 -5.53 -0.61 -6.19 -0.79 -0.73 -0.20 -2.14 -0.12 -3.59 0.20 -3.40 0.76 -7.80 0.68 -12.00 -0.22 -3.28 -0.71 -3.87 -0.73 -6.39 -0.19 -1.53 0.33 -5.66 0.70 -9.19 0.84 -6.31 0.24 -6.50 0.23 -11.38 -1.09 -4.22 -1.14 -6.27 -1.43 -13.74 -1.91 -7.39 -0.48 -23.61 -2.08 -29.60 -2.92l-1.65 -0.23 -2.79 -5.72c-2.20 -4.50 -2.85 -6.28 -3.08 -8.33l-0.29 -2.61 -1.95 0.00c-1.21 0.00 -4.06 0.71 -7.54 1.87 -10.94 3.66 -24.88 7.87 -31.86 9.60l-2.89 0.72 0.00 3.64c0.00 2.92 0.35 5.06 1.76 10.91 2.51 10.35 3.13 15.06 2.95 22.22 -0.12 4.63 -0.34 6.56 -1.03 8.85 -1.27 4.21 -3.87 33.51 -3.56 40.19 0.20 4.39 -0.13 8.98 -0.77 10.73 -0.24 0.65 -0.12 0.71 0.89 0.48 0.64 -0.15 3.74 -0.45 6.88 -0.68 4.63 -0.33 6.39 -0.65 9.23 -1.67 1.93 -0.69 4.30 -1.26 5.27 -1.26 2.67 0.00 11.22 1.18 11.49 1.59 0.13 0.20 0.77 1.23 1.43 2.31 1.05 1.72 2.74 2.88 4.60 3.17 0.12 0.02 1.55 -1.39 3.19 -3.12z"},"path5456":{"name":"name312","path":"m464.17 367.46c-2.18 -1.28 -2.94 -5.05 -1.30 -6.47 0.51 -0.44 0.51 -0.61 -0.01 -1.39 -0.96 -1.43 -0.75 -3.61 0.48 -4.95 0.89 -0.97 1.41 -1.17 3.01 -1.17 1.59 0.00 2.12 0.20 2.92 1.10 1.15 1.29 1.37 4.30 0.39 5.15 -0.52 0.45 -0.49 0.65 0.20 1.57 2.61 3.47 -1.92 8.36 -5.69 6.15z"},"path5454":{"name":"name313","path":"m467.61 365.14c0.58 -0.48 1.05 -1.13 1.05 -1.46 0.00 -0.87 -1.47 -2.27 -2.40 -2.27 -0.84 0.00 -2.40 1.37 -2.40 2.11 0.00 0.54 1.82 2.49 2.32 2.49 0.20 0.00 0.84 -0.39 1.42 -0.87z"},"path5452":{"name":"name314","path":"m469.73 363.42c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5450":{"name":"name315","path":"m469.46 362.09c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5448":{"name":"name316","path":"m467.16 360.29c-0.49 -0.10 -1.30 -0.10 -1.80 0.00 -0.49 0.10 -0.09 0.18 0.90 0.18 0.99 0.00 1.39 -0.08 0.90 -0.18z"},"path5446":{"name":"name317","path":"m467.56 358.75c0.85 -0.67 0.90 -1.77 0.13 -2.58 -1.16 -1.22 -3.42 -0.35 -3.42 1.31 0.00 0.81 1.11 1.82 2.00 1.82 0.33 0.00 0.91 -0.25 1.30 -0.55z"},"path5444":{"name":"name318","path":"m463.34 356.94c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5442":{"name":"name319","path":"m464.32 355.26c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5440":{"name":"name320","path":"m469.06 355.83c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5438":{"name":"name321","path":"m643.93 414.27c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5436":{"name":"name322","path":"m702.22 412.43c0.00 -0.18 -0.58 -0.66 -1.30 -1.08l-1.30 -0.75 1.12 1.08c1.18 1.13 1.47 1.28 1.47 0.75z"},"path5434":{"name":"name323","path":"m445.20 412.06c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5432":{"name":"name324","path":"m641.13 410.97c0.00 -0.06 -1.57 -1.71 -3.49 -3.65l-3.49 -3.54 3.38 3.65c3.14 3.39 3.60 3.84 3.60 3.54z"},"path5430":{"name":"name325","path":"m695.83 407.59c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5428":{"name":"name326","path":"m240.74 405.76c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5426":{"name":"name327","path":"m326.02 399.72c-0.08 -1.21 -0.15 -0.33 -0.15 1.97 -0.00 2.30 0.07 3.29 0.15 2.21 0.08 -1.08 0.08 -2.96 0.00 -4.17z"},"path5424":{"name":"name328","path":"m693.43 405.51c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5422":{"name":"name329","path":"m552.89 394.42c2.21 -4.90 3.96 -8.98 3.87 -9.07 -0.13 -0.14 -7.50 15.94 -8.16 17.80 -0.79 2.24 0.81 -1.03 4.29 -8.73z"},"path5420":{"name":"name330","path":"m421.01 401.38c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5418":{"name":"name331","path":"m685.25 397.31c-2.63 -2.75 -4.87 -5.01 -4.98 -5.01 -0.11 0.00 1.95 2.25 4.58 5.01 2.63 2.75 4.87 5.01 4.98 5.01 0.11 0.00 -1.95 -2.25 -4.58 -5.01z"},"path5416":{"name":"name332","path":"m421.02 398.07c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5414":{"name":"name333","path":"m327.38 397.00c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5412":{"name":"name334","path":"m331.52 391.80 3.99 -3.57 14.77 -4.59c12.69 -3.94 16.62 -5.00 22.99 -6.20 0.96 -0.18 8.95 0.88 10.09 1.34 0.35 0.14 -0.59 -5.79 -3.01 -18.91 -1.94 -10.51 -3.52 -19.23 -3.52 -19.37 -0.00 -0.42 6.16 -3.23 11.94 -5.44 6.77 -2.59 19.76 -6.88 26.49 -8.75l5.09 -1.41 0.00 -3.59c0.00 -3.33 -0.12 -3.86 -1.61 -7.19 -1.59 -3.54 -2.92 -7.66 -5.74 -17.68 -1.04 -3.70 -1.43 -5.88 -1.43 -8.01 0.00 -1.61 -0.19 -3.45 -0.43 -4.09 -0.23 -0.64 -0.55 -2.21 -0.70 -3.47l-0.27 -2.30 -7.21 -0.11 -7.21 -0.11 -2.09 2.70c-2.54 3.27 -6.68 7.34 -7.47 7.34 -1.01 0.00 -3.58 2.79 -6.38 6.92 -1.49 2.20 -3.09 4.15 -3.55 4.32 -0.46 0.17 -3.84 0.93 -7.52 1.69l-6.69 1.37 -1.54 1.75c-1.88 2.14 -3.25 5.78 -3.25 8.66 0.00 2.78 -1.25 5.48 -3.24 6.99 -1.85 1.40 -4.22 2.40 -10.52 4.41l-4.77 1.53 -4.01 4.05c-6.19 6.26 -9.46 8.26 -14.19 8.67 -3.49 0.30 -5.67 -0.38 -7.82 -2.46l-1.76 -1.70 -2.89 0.21c-1.87 0.14 -4.68 0.83 -7.95 1.96l-5.05 1.75 -0.48 3.62c-1.02 7.67 -0.54 6.77 -4.49 8.42 -2.15 0.90 -3.41 1.65 -3.30 1.96 0.10 0.28 0.40 1.62 0.67 2.98l0.49 2.47 -1.47 2.09c-3.15 4.48 -5.52 5.94 -9.69 5.94 -1.82 0.00 -2.08 0.12 -2.52 1.13 -0.27 0.62 -0.59 1.99 -0.71 3.04 -0.20 1.79 -0.09 2.08 1.73 4.61 1.91 2.64 1.99 2.70 4.23 2.99 2.77 0.36 4.07 1.03 5.89 3.06 2.14 2.37 3.38 3.03 5.31 2.83 1.37 -0.14 2.12 0.09 4.06 1.27l2.38 1.44 2.41 -1.30c2.24 -1.21 2.75 -1.31 7.20 -1.44 2.64 -0.08 4.97 0.01 5.19 0.19 0.22 0.18 1.15 1.38 2.06 2.66 1.16 1.63 2.51 2.86 4.49 4.09 1.56 0.97 3.87 2.77 5.13 4.00 2.22 2.17 2.32 2.22 3.09 1.51 0.44 -0.40 2.60 -2.34 4.79 -4.30z"},"path5410":{"name":"name335","path":"m343.69 365.92c-1.55 -0.44 -2.79 -1.43 -2.79 -2.23 0.00 -0.86 1.18 -1.05 2.40 -0.39 2.34 1.26 4.79 0.37 4.79 -1.76 0.00 -1.07 -0.62 -1.61 -2.40 -2.09 -1.85 -0.50 -1.95 -1.84 -0.16 -2.22 1.66 -0.35 2.16 -0.73 2.16 -1.59 0.00 -1.70 -2.64 -2.39 -4.05 -1.05 -0.87 0.82 -1.94 0.48 -1.94 -0.62 0.00 -0.94 1.29 -1.92 3.06 -2.33 1.52 -0.35 3.88 0.59 4.49 1.78 0.63 1.23 0.53 3.63 -0.18 4.25 -0.55 0.47 -0.53 0.63 0.14 1.41 1.08 1.25 1.31 2.68 0.68 4.25 -0.92 2.31 -3.47 3.37 -6.20 2.59z"},"path5408":{"name":"name336","path":"m348.88 360.01c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5406":{"name":"name337","path":"m346.99 358.22c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5404":{"name":"name338","path":"m324.13 396.34c0.00 -0.07 -0.49 -0.59 -1.10 -1.15l-1.10 -1.01 0.97 1.15c0.90 1.07 1.23 1.34 1.23 1.01z"},"path5402":{"name":"name339","path":"m330.17 394.49c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5400":{"name":"name340","path":"m421.42 393.89c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5398":{"name":"name341","path":"m332.96 391.99c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5396":{"name":"name342","path":"m617.58 392.16c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5394":{"name":"name343","path":"m679.86 392.14c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5392":{"name":"name344","path":"m601.81 390.74c-0.88 -0.09 -1.73 -0.39 -1.89 -0.66 -0.19 -0.32 -0.30 -0.33 -0.30 -0.04 -0.01 0.79 0.49 1.01 2.16 0.94l1.63 -0.07 -1.59 -0.17z"},"path5390":{"name":"name345","path":"m605.89 390.38c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5388":{"name":"name346","path":"m315.35 389.64c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5386":{"name":"name347","path":"m611.48 389.13c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5384":{"name":"name348","path":"m250.67 387.57c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5382":{"name":"name349","path":"m655.21 387.40c-1.37 -0.08 -3.62 -0.08 -4.99 0.00 -1.37 0.08 -0.25 0.15 2.50 0.15 2.74 0.00 3.87 -0.07 2.50 -0.15z"},"path5380":{"name":"name350","path":"m667.99 387.44c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5378":{"name":"name351","path":"m599.08 385.94c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5376":{"name":"name352","path":"m422.22 385.13c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5374":{"name":"name353","path":"m598.70 382.39c-0.09 -0.63 -0.17 -0.21 -0.17 0.93 0.00 1.15 0.07 1.67 0.17 1.15 0.10 -0.51 0.10 -1.45 0.01 -2.09z"},"path5372":{"name":"name354","path":"m247.47 384.64c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5370":{"name":"name355","path":"m309.26 384.48c-1.04 -0.09 -2.75 -0.09 -3.79 0.00 -1.04 0.09 -0.19 0.16 1.90 0.16 2.09 0.00 2.94 -0.07 1.90 -0.16z"},"path5368":{"name":"name356","path":"m287.00 383.82c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5366":{"name":"name357","path":"m558.46 381.66c0.00 -0.23 -0.26 0.05 -0.57 0.63 -0.31 0.57 -0.57 1.23 -0.57 1.46 0.00 0.23 0.26 -0.05 0.57 -0.63 0.31 -0.57 0.57 -1.23 0.57 -1.46z"},"path5364":{"name":"name358","path":"m244.28 381.72c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5362":{"name":"name359","path":"m551.75 380.72c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5360":{"name":"name360","path":"m276.62 377.95c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5358":{"name":"name361","path":"m423.02 376.36c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5356":{"name":"name362","path":"m561.30 375.40c0.54 -0.77 0.53 -0.79 -0.11 -0.26 -0.38 0.32 -0.70 0.77 -0.70 1.01 0.00 0.24 0.05 0.36 0.11 0.26 0.06 -0.10 0.38 -0.55 0.70 -1.01z"},"path5354":{"name":"name363","path":"m275.02 375.87c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5352":{"name":"name364","path":"m589.91 372.27c3.09 -1.66 4.30 -2.09 5.83 -2.09 1.35 0.00 3.34 -0.57 6.57 -1.90 7.27 -2.97 8.12 -3.56 9.56 -6.60 2.24 -4.74 5.34 -7.69 10.38 -9.87 3.97 -1.71 6.77 -3.91 9.61 -7.55 2.22 -2.84 2.29 -2.89 4.17 -2.89 1.05 0.00 1.92 -0.05 1.94 -0.10 0.02 -0.06 0.35 -4.24 0.74 -9.29l0.71 -9.18 -2.13 -6.67 -2.13 -6.67 0.00 -6.43 0.00 -6.43 -1.85 -5.69c-2.06 -6.33 -2.63 -10.80 -1.73 -13.64 0.29 -0.90 1.42 -2.54 2.63 -3.80 1.17 -1.22 3.10 -3.58 4.28 -5.25 2.78 -3.94 7.86 -12.76 7.84 -13.63 -0.01 -0.37 -0.77 -2.18 -1.70 -4.01l-1.68 -3.34 -2.07 -0.13c-1.67 -0.10 -3.15 0.28 -7.65 1.97 -5.30 1.99 -12.27 3.79 -14.66 3.79 -0.61 0.00 -1.39 0.27 -1.74 0.60 -1.25 1.18 -7.07 3.95 -10.41 4.96 -1.87 0.56 -5.00 1.26 -6.97 1.54 -2.92 0.43 -3.96 0.79 -5.64 1.95 -1.53 1.06 -2.76 1.53 -4.80 1.83 -7.43 1.09 -16.55 4.05 -37.48 12.16 -22.18 8.60 -31.66 11.68 -39.42 12.81 -2.91 0.42 -29.09 9.35 -36.37 12.40 -2.45 1.03 -5.15 2.35 -6.00 2.93l-1.55 1.07 0.25 2.45c0.18 1.84 0.85 3.71 2.66 7.49 1.33 2.77 2.63 5.11 2.90 5.21 1.30 0.45 24.88 2.83 31.06 3.13 5.97 0.29 7.78 0.54 12.18 1.72 4.69 1.26 5.64 1.38 10.35 1.31 2.97 -0.04 6.98 -0.41 9.38 -0.86 3.88 -0.72 4.35 -0.73 6.39 -0.13 2.06 0.61 5.70 0.70 15.37 0.37 4.46 -0.15 25.26 2.90 26.29 3.86 0.18 0.17 -2.04 5.64 -4.94 12.15 -4.75 10.65 -5.51 12.10 -7.58 14.42 -2.53 2.83 -3.69 5.43 -4.37 9.82 -0.67 4.31 -0.80 4.08 2.37 4.08 2.20 0.00 3.44 0.28 5.89 1.32 3.60 1.53 7.51 2.79 8.78 2.83 0.49 0.02 2.64 -0.91 4.78 -2.06z"},"path5350":{"name":"name365","path":"m607.47 306.16c-0.12 -0.32 0.49 -2.87 1.35 -5.68 0.86 -2.81 1.57 -5.18 1.57 -5.27 0.00 -0.09 -0.91 -0.16 -2.02 -0.16 -1.29 0.00 -2.25 0.23 -2.64 0.64 -0.95 0.99 -1.52 0.50 -1.52 -1.31l0.00 -1.63 4.19 0.00c4.02 0.00 4.20 0.04 4.32 0.92 0.07 0.51 -0.70 3.65 -1.71 6.99 -1.50 4.94 -1.97 6.07 -2.58 6.07 -0.41 0.00 -0.84 -0.26 -0.95 -0.57z"},"path5348":{"name":"name366","path":"m605.07 294.14c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5346":{"name":"name367","path":"m598.89 371.87c0.10 -0.68 0.03 -1.14 -0.15 -1.02 -0.32 0.21 -0.48 2.25 -0.17 2.25 0.09 0.00 0.23 -0.55 0.33 -1.23z"},"path5344":{"name":"name368","path":"m272.49 370.49c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5342":{"name":"name369","path":"m638.63 365.89c-0.08 -0.97 -0.15 -0.07 -0.15 2.00 0.00 2.07 0.07 2.86 0.15 1.76 0.08 -1.10 0.08 -2.79 0.00 -3.76z"},"path5340":{"name":"name370","path":"m423.82 367.60c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5338":{"name":"name371","path":"m277.93 364.90c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5336":{"name":"name372","path":"m280.55 363.33c1.29 -0.70 4.28 -3.99 4.89 -5.38 0.31 -0.72 0.26 -1.62 -0.21 -3.50 -0.35 -1.40 -0.63 -2.81 -0.63 -3.15 0.00 -0.38 1.29 -1.13 3.41 -1.99 1.88 -0.76 3.56 -1.68 3.74 -2.04 0.18 -0.36 0.55 -2.54 0.83 -4.84 0.28 -2.30 0.66 -4.49 0.85 -4.88 0.22 -0.44 2.53 -1.46 6.04 -2.68 4.95 -1.71 6.14 -1.98 9.16 -2.00 3.46 -0.03 3.48 -0.03 4.99 1.48 2.10 2.10 2.91 2.45 5.63 2.45 4.57 0.00 7.82 -1.89 14.05 -8.15 4.55 -4.58 4.58 -4.60 12.98 -7.25 4.49 -1.42 7.47 -3.18 8.31 -4.93 0.31 -0.64 0.67 -2.53 0.80 -4.20 0.29 -3.82 1.76 -7.34 4.05 -9.68 1.71 -1.75 1.72 -1.76 8.99 -3.30l7.28 -1.55 2.40 -3.53c3.07 -4.51 4.96 -6.61 6.66 -7.37 1.65 -0.74 5.00 -4.00 7.73 -7.53l2.03 -2.62 7.98 0.00 7.98 0.00 2.83 -2.24 2.83 -2.24 8.55 -18.71 8.55 -18.71 19.12 -28.19c10.52 -15.51 19.91 -28.97 20.87 -29.91 2.31 -2.27 4.50 -3.30 8.68 -4.05 5.34 -0.96 8.66 -2.87 13.92 -8.01l2.14 -2.09 -0.13 -6.33c-0.15 -7.06 0.36 -9.96 2.14 -12.17 0.84 -1.05 0.99 -1.66 0.99 -4.04 0.00 -4.02 2.14 -8.43 6.18 -12.72 4.12 -4.38 14.20 -20.51 18.79 -30.08 0.98 -2.04 1.78 -3.79 1.78 -3.89 0.00 -0.10 -1.12 0.09 -2.50 0.42 -6.57 1.58 -18.59 6.44 -37.51 15.18l-11.06 5.11 -2.92 9.03 -2.92 9.03 -1.47 -0.09c-2.40 -0.14 -8.25 -2.05 -19.79 -6.45 -6.80 -2.59 -17.27 -6.09 -27.91 -9.32 -13.20 -4.00 -17.40 -5.44 -18.66 -6.39 -0.90 -0.67 -2.89 -3.02 -4.43 -5.23 -1.54 -2.20 -3.25 -4.37 -3.80 -4.81 -2.35 -1.89 -7.04 -3.13 -13.67 -3.61 -3.61 -0.27 -3.89 -0.23 -3.90 0.48 -0.00 0.42 -0.63 10.44 -1.39 22.26 -0.76 11.82 -1.39 21.73 -1.39 22.02 -0.00 0.29 -0.19 0.52 -0.43 0.52 -0.50 0.00 -10.82 -4.55 -11.23 -4.95 -0.15 -0.15 -0.59 -3.22 -0.97 -6.83l-0.69 -6.56 -5.62 0.04c-5.43 0.04 -5.76 -0.01 -9.62 -1.41l-3.99 -1.45 -5.38 2.76 -5.38 2.76 -1.89 3.76c-1.04 2.07 -1.90 3.86 -1.90 3.98 -0.01 0.12 1.56 1.03 3.48 2.02 7.75 4.00 13.22 8.82 17.07 15.04 2.05 3.32 6.31 12.43 8.78 18.82 0.85 2.18 1.59 4.03 1.64 4.12 0.06 0.08 3.90 0.57 8.53 1.09 4.64 0.51 8.60 1.11 8.81 1.33 0.24 0.25 0.09 2.22 -0.43 5.38 -1.44 8.85 -3.40 15.01 -6.62 20.84 -4.13 7.47 -4.16 7.56 -4.17 14.82l-0.01 6.47 -3.01 4.80c-4.36 6.96 -6.41 11.54 -7.19 16.07 -0.87 5.09 -1.21 5.91 -3.52 8.47l-1.99 2.21 0.49 2.50c0.27 1.38 0.59 2.76 0.70 3.07 0.22 0.61 -0.75 1.61 -6.63 6.86 -2.09 1.86 -4.07 3.38 -4.41 3.38 -0.34 0.00 -1.33 -0.76 -2.20 -1.70 -2.26 -2.44 -4.29 -3.56 -9.70 -5.35l-4.77 -1.58 -3.08 7.76c-3.31 8.33 -3.53 9.51 -2.86 14.86l0.32 2.50 -2.12 3.71c-1.73 3.03 -2.70 4.21 -5.31 6.41 -1.76 1.48 -3.25 2.85 -3.32 3.03 -0.07 0.19 0.43 1.48 1.10 2.87 0.67 1.39 1.22 2.72 1.22 2.95 0.00 0.51 -11.68 6.69 -12.65 6.69 -0.38 0.00 -2.45 -0.61 -4.61 -1.34 -3.52 -1.21 -4.02 -1.28 -4.81 -0.75 -0.49 0.33 -1.96 0.98 -3.27 1.46 -1.86 0.68 -2.43 1.09 -2.61 1.89 -0.16 0.71 -0.72 1.21 -1.84 1.66 -0.89 0.35 -3.18 1.64 -5.09 2.86 -4.75 3.05 -7.46 4.01 -10.04 3.57 -1.10 -0.19 -3.25 -0.34 -4.79 -0.34 -2.35 -0.01 -3.15 0.19 -4.99 1.23 -2.26 1.27 -7.01 5.94 -8.20 8.04 -0.42 0.75 -3.57 3.11 -8.51 6.40l-7.84 5.22 -0.12 1.65 -0.12 1.65 3.92 2.02 3.92 2.02 2.14 -1.39c1.75 -1.14 2.55 -1.39 4.38 -1.40 2.54 -0.01 3.79 -0.65 9.89 -5.07 2.02 -1.46 3.84 -2.65 4.06 -2.65 0.22 0.00 1.68 4.04 3.26 8.97 1.57 4.94 2.98 8.97 3.13 8.97 0.15 -0.00 2.06 -0.56 4.26 -1.24 2.20 -0.68 4.36 -1.24 4.81 -1.24 0.54 -0.01 1.39 0.80 2.50 2.38 1.88 2.68 1.91 2.78 1.07 4.87l-0.60 1.51 2.02 0.00c1.11 0.00 2.52 -0.27 3.12 -0.59z"},"path5334":{"name":"name373","path":"m389.01 223.67c-0.50 -0.85 0.28 -2.02 3.60 -5.38 1.86 -1.89 3.39 -3.77 3.39 -4.18 0.00 -0.98 -1.24 -2.13 -2.31 -2.13 -0.81 0.00 -2.48 1.45 -2.48 2.17 0.00 0.19 -0.36 0.34 -0.80 0.34 -1.33 0.00 -1.06 -2.20 0.43 -3.51 2.87 -2.53 7.16 -0.67 7.16 3.11 0.00 1.60 -0.24 2.00 -2.86 4.83l-2.86 3.09 1.78 0.00c0.98 0.00 1.99 -0.21 2.24 -0.47 0.76 -0.79 1.70 -0.08 1.70 1.29l0.00 1.27 -4.37 0.00c-2.51 0.00 -4.47 -0.18 -4.62 -0.42z"},"path5332":{"name":"name374","path":"m397.19 222.95c0.00 -0.17 -1.62 -0.31 -3.59 -0.31 -1.98 0.00 -3.59 0.14 -3.59 0.31 0.00 0.17 1.62 0.31 3.59 0.31 1.98 0.00 3.59 -0.14 3.59 -0.31z"},"path5330":{"name":"name375","path":"m397.06 213.56c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5328":{"name":"name376","path":"m394.51 210.88c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5326":{"name":"name377","path":"m284.66 361.10c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5324":{"name":"name378","path":"m231.90 359.20c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5322":{"name":"name379","path":"m616.18 357.24c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5320":{"name":"name380","path":"m225.53 351.50c0.01 -1.09 0.27 -2.45 0.58 -3.03 0.32 -0.58 0.58 -2.18 0.58 -3.62 0.01 -1.59 0.22 -2.79 0.55 -3.13 0.30 -0.30 3.93 -2.80 8.09 -5.54 6.59 -4.36 7.80 -5.33 9.54 -7.66 3.65 -4.88 8.22 -8.10 12.34 -8.69 1.08 -0.15 3.10 -0.03 4.68 0.28 3.49 0.69 5.09 0.22 10.28 -2.99l3.63 -2.24 0.01 -2.40c0.00 -1.33 -0.17 -2.40 -0.39 -2.40 -0.50 0.00 -0.52 -1.90 -0.03 -2.86 0.31 -0.60 -0.99 -2.07 -7.40 -8.42 -4.28 -4.24 -8.53 -8.17 -9.45 -8.75 -1.59 -0.99 -1.96 -1.04 -6.93 -0.95 -3.77 0.07 -5.36 -0.05 -5.66 -0.42 -0.35 -0.44 -1.03 -2.08 -2.49 -6.01 -0.33 -0.88 -0.40 -0.89 -2.45 -0.32 -1.16 0.32 -2.48 0.59 -2.92 0.59 -0.70 -0.00 -2.86 -2.41 -8.38 -9.36 -0.79 -0.99 -0.83 -1.00 -3.19 -0.41 -3.41 0.84 -5.06 0.75 -7.86 -0.44 -1.35 -0.57 -2.52 -1.04 -2.59 -1.04 -0.07 0.00 -0.13 1.78 -0.13 3.95 0.00 4.84 -0.51 6.56 -3.64 12.33 -3.18 5.87 -5.99 9.70 -8.62 11.78 -2.66 2.10 -3.39 3.53 -4.49 8.88 -0.48 2.30 -0.99 4.29 -1.14 4.43 -0.15 0.14 -2.16 -0.08 -4.47 -0.51 -2.31 -0.42 -4.91 -0.78 -5.79 -0.79 -0.95 -0.01 -3.59 -0.86 -6.53 -2.10 -2.72 -1.14 -5.11 -2.08 -5.32 -2.08 -0.21 0.00 -1.16 0.56 -2.12 1.25 -0.96 0.69 -1.94 1.25 -2.18 1.25 -0.24 0.00 -1.51 -0.56 -2.81 -1.25 -1.30 -0.69 -2.60 -1.25 -2.88 -1.25 -0.28 0.00 -1.57 0.57 -2.86 1.25 -1.29 0.69 -2.84 1.25 -3.44 1.25 -1.67 0.00 -6.92 -1.29 -7.42 -1.82 -0.24 -0.26 -0.95 -2.39 -1.56 -4.73 -0.61 -2.34 -1.23 -4.46 -1.38 -4.71 -0.19 -0.32 -1.12 -0.26 -3.16 0.18 -1.59 0.35 -3.12 0.64 -3.41 0.64 -0.29 0.00 -1.75 -1.95 -3.26 -4.34l-2.74 -4.34 -3.89 2.04c-2.14 1.12 -4.12 2.04 -4.39 2.04 -0.27 0.00 -1.77 -1.32 -3.33 -2.94l-2.83 -2.94 -4.73 1.50c-5.71 1.81 -5.12 1.50 -11.85 6.31 -3.00 2.15 -5.72 4.01 -6.04 4.14 -0.41 0.16 -1.37 -1.14 -3.28 -4.49 -3.33 -5.82 -5.03 -8.06 -6.92 -9.08 -2.03 -1.10 -3.60 -2.97 -6.02 -7.23 -1.78 -3.13 -2.64 -4.13 -5.96 -6.94 -4.32 -3.66 -5.62 -5.24 -7.11 -8.65 -0.76 -1.73 -1.34 -2.47 -2.27 -2.87 -1.76 -0.77 -8.86 -2.76 -8.41 -2.37 0.20 0.18 1.03 0.83 1.83 1.45 1.07 0.82 1.65 1.71 2.15 3.32 0.90 2.90 3.06 7.21 7.08 14.09l3.29 5.63 3.65 0.12 3.65 0.12 6.53 8.38c5.01 6.43 6.52 8.63 6.48 9.48 -0.03 0.61 -0.19 2.35 -0.35 3.86 -0.24 2.22 -0.08 3.98 0.81 8.97 0.61 3.42 1.15 6.27 1.19 6.33 0.04 0.06 1.38 -0.46 2.98 -1.15 1.60 -0.69 3.15 -1.26 3.44 -1.26 0.68 0.00 4.91 3.65 7.99 6.90 1.34 1.41 4.73 5.51 7.53 9.10l5.10 6.53 3.62 0.00c1.99 0.00 4.77 -0.21 6.18 -0.47 2.65 -0.48 3.14 -0.44 12.47 1.16 2.09 0.36 4.67 1.01 5.74 1.45l1.95 0.80 4.25 -1.48 4.25 -1.48 5.97 3.19 5.97 3.19 3.40 -0.36c6.73 -0.71 9.49 -0.37 17.45 2.14l7.27 2.29 6.71 0.03c5.40 0.02 7.14 0.18 8.90 0.79 1.30 0.45 3.46 0.78 5.29 0.81l3.09 0.04 0.01 -1.98z"},"path5318":{"name":"name381","path":"m219.39 324.82c-0.15 -0.15 -0.27 -0.62 -0.27 -1.04 0.00 -0.61 0.31 -0.77 1.60 -0.77l1.60 0.00 0.00 -4.58 0.00 -4.58 -1.50 0.09c-1.24 0.08 -1.52 -0.05 -1.61 -0.77 -0.10 -0.71 0.26 -0.98 2.03 -1.57 1.18 -0.39 2.36 -0.71 2.61 -0.71 0.33 0.00 0.46 1.73 0.46 6.05l0.00 6.05 1.55 0.00c1.52 0.00 2.36 0.79 1.82 1.71 -0.26 0.43 -7.89 0.53 -8.30 0.10z"},"path5316":{"name":"name382","path":"m225.02 323.96 -1.50 -0.16 0.00 -5.82c0.00 -5.28 -0.07 -5.82 -0.70 -5.79 -0.42 0.02 -0.50 0.12 -0.20 0.24 0.36 0.15 0.50 1.72 0.50 5.79l0.00 5.57 -1.50 0.16c-0.82 0.09 -0.06 0.16 1.70 0.16 1.76 0.00 2.52 -0.07 1.70 -0.16z"},"path5314":{"name":"name383","path":"m639.14 346.28 0.00 -4.28 -2.30 0.20 -2.30 0.20 2.10 0.13 2.10 0.13 0.00 3.94c0.00 2.17 0.09 3.94 0.20 3.94 0.11 0.00 0.20 -1.93 0.20 -4.28z"},"path5312":{"name":"name384","path":"m629.21 349.00c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5310":{"name":"name385","path":"m425.81 348.40c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5308":{"name":"name386","path":"m632.40 345.66c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5306":{"name":"name387","path":"m128.21 342.33c-0.93 -0.09 -2.54 -0.09 -3.59 -0.00 -1.05 0.09 -0.29 0.16 1.68 0.16 1.98 0.00 2.84 -0.07 1.91 -0.16z"},"path5304":{"name":"name388","path":"m122.51 342.06c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5302":{"name":"name389","path":"m318.83 337.79c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5300":{"name":"name390","path":"m320.83 337.79c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5298":{"name":"name391","path":"m314.55 336.66c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5296":{"name":"name392","path":"m117.32 335.38c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5294":{"name":"name393","path":"m115.72 333.29c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5292":{"name":"name394","path":"m332.12 331.57c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5290":{"name":"name395","path":"m113.73 330.80c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5288":{"name":"name396","path":"m336.31 327.19c0.86 -0.92 1.47 -1.67 1.36 -1.67 -0.11 0.00 -0.90 0.75 -1.76 1.67 -0.86 0.92 -1.47 1.67 -1.36 1.67 0.11 0.00 0.90 -0.75 1.76 -1.67z"},"path5286":{"name":"name397","path":"m568.76 327.77c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5284":{"name":"name398","path":"m531.63 327.35c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5282":{"name":"name399","path":"m507.88 324.41c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5280":{"name":"name400","path":"m106.54 323.28c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5278":{"name":"name401","path":"m265.15 321.49c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5276":{"name":"name402","path":"m259.75 320.64c-0.38 -0.10 -1.01 -0.10 -1.40 0.00 -0.38 0.10 -0.07 0.19 0.70 0.19 0.77 0.00 1.08 -0.09 0.70 -0.19z"},"path5274":{"name":"name403","path":"m425.63 314.69c4.32 -1.05 19.37 -5.59 28.34 -8.55 5.95 -1.96 7.54 -2.33 10.06 -2.33 1.64 0.00 3.10 -0.19 3.24 -0.43 0.40 -0.67 5.99 -3.48 10.37 -5.22 2.20 -0.87 9.83 -3.58 16.97 -6.03l12.98 -4.45 -0.05 -1.22c-0.08 -1.90 -2.67 -8.74 -7.02 -18.54 -9.02 -20.32 -10.90 -25.16 -12.08 -31.13 -0.35 -1.78 -0.50 -3.37 -0.32 -3.55 0.17 -0.17 3.37 -1.58 7.10 -3.13 3.73 -1.55 6.82 -2.84 6.87 -2.86 0.04 -0.03 -1.44 -5.12 -3.29 -11.31 -1.85 -6.19 -3.37 -11.66 -3.37 -12.16 -0.01 -1.74 9.85 -10.85 18.40 -17.03 5.93 -4.28 10.00 -8.39 14.70 -14.84 2.92 -4.01 9.54 -13.87 10.58 -15.77 0.71 -1.29 -15.44 -7.70 -24.44 -9.70 -2.48 -0.55 -4.64 -0.81 -5.46 -0.65 -0.76 0.15 -2.57 -0.03 -4.17 -0.41 -1.55 -0.37 -3.02 -0.54 -3.27 -0.38 -0.25 0.16 -0.79 1.07 -1.20 2.01 -0.64 1.47 -0.75 2.79 -0.76 9.09l-0.01 7.37 -2.99 2.92c-3.22 3.14 -6.48 5.57 -8.88 6.62 -0.83 0.36 -3.21 1.02 -5.29 1.45 -4.56 0.96 -6.70 1.98 -8.46 4.03 -0.73 0.85 -9.86 14.10 -20.29 29.46l-18.96 27.92 -8.63 18.83 -8.63 18.83 -2.75 2.23c-1.51 1.23 -2.81 2.58 -2.87 3.01 -0.07 0.43 0.25 2.16 0.70 3.85 0.46 1.70 0.82 4.31 0.82 5.85 0.00 2.71 1.09 7.19 4.27 17.62 1.29 4.21 3.53 9.39 4.07 9.39 0.23 0.00 1.90 -0.36 3.73 -0.81z"},"path5272":{"name":"name404","path":"m462.83 263.58c-0.32 -0.86 0.14 -1.50 1.06 -1.50 0.51 0.00 0.78 -0.29 0.78 -0.83 0.00 -0.75 -0.27 -0.83 -2.60 -0.83 -2.48 0.00 -2.60 -0.05 -2.60 -1.01 0.00 -0.88 3.27 -7.37 4.49 -8.92 0.24 -0.30 0.89 -0.49 1.46 -0.42 1.02 0.12 1.03 0.17 1.15 4.08 0.09 2.94 0.27 4.05 0.70 4.30 0.76 0.44 0.75 1.81 -0.02 2.12 -0.79 0.32 -0.77 1.52 0.03 1.52 0.42 0.00 0.58 0.31 0.50 0.94 -0.11 0.83 -0.39 0.95 -2.43 1.06 -1.76 0.10 -2.35 -0.02 -2.53 -0.50z"},"path5270":{"name":"name405","path":"m466.37 262.99c-0.34 -0.22 -0.53 -2.14 -0.61 -6.15l-0.12 -5.83 -0.09 5.92c-0.09 5.77 -0.11 5.92 -0.99 6.10 -0.51 0.10 -0.21 0.20 0.70 0.23 0.89 0.03 1.38 -0.09 1.11 -0.27z"},"path5268":{"name":"name406","path":"m464.67 255.96c0.00 -1.30 -0.06 -2.29 -0.13 -2.19 -0.07 0.10 -0.70 1.16 -1.39 2.37l-1.26 2.19 1.39 0.00 1.39 0.00 0.00 -2.37z"},"path5266":{"name":"name407","path":"m278.62 312.79c0.00 -0.32 -0.18 -0.69 -0.40 -0.83 -0.23 -0.15 -0.40 0.21 -0.40 0.83 0.00 0.62 0.17 0.98 0.40 0.83 0.22 -0.14 0.40 -0.52 0.40 -0.83z"},"path5264":{"name":"name408","path":"m356.34 312.09c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5262":{"name":"name409","path":"m279.81 312.01c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5260":{"name":"name410","path":"m278.22 310.75c0.00 -0.09 -0.36 -0.26 -0.80 -0.38 -0.44 -0.12 -0.70 -0.05 -0.58 0.16 0.21 0.36 1.37 0.55 1.37 0.22z"},"path5258":{"name":"name411","path":"m92.84 308.75c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5256":{"name":"name412","path":"m160.15 308.97c-0.27 -0.11 -0.81 -0.12 -1.20 -0.02 -0.39 0.11 -0.17 0.20 0.49 0.21 0.66 0.01 0.98 -0.08 0.71 -0.19z"},"path5254":{"name":"name413","path":"m467.33 304.96c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5252":{"name":"name414","path":"m93.43 301.21c-0.30 -0.31 -0.35 -0.15 -0.17 0.55 0.14 0.56 0.32 0.75 0.42 0.44 0.10 -0.30 -0.02 -0.75 -0.25 -0.99z"},"path5250":{"name":"name415","path":"m272.23 301.61c0.00 -0.07 -0.94 -1.05 -2.10 -2.19l-2.10 -2.07 1.98 2.19c1.84 2.04 2.21 2.38 2.21 2.07z"},"path5248":{"name":"name416","path":"m201.21 300.58c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5246":{"name":"name417","path":"m90.57 297.40c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5244":{"name":"name418","path":"m86.98 292.81c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5242":{"name":"name419","path":"m263.05 292.40c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5240":{"name":"name420","path":"m92.97 289.06c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5238":{"name":"name421","path":"m83.38 288.21c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5236":{"name":"name422","path":"m513.57 286.47c6.48 -1.08 18.51 -5.11 37.93 -12.70 19.54 -7.63 30.15 -11.07 36.77 -11.92 2.39 -0.30 3.62 -0.81 5.27 -2.18l0.92 -0.76 -5.18 -18.55c-10.92 -39.08 -17.25 -59.06 -22.06 -69.66 -2.99 -6.58 -3.11 -6.71 -9.03 -9.12 -7.26 -2.96 -13.97 -5.09 -16.00 -5.09 -0.59 0.00 -1.76 1.44 -4.29 5.32 -9.52 14.54 -14.74 20.68 -22.07 25.95 -5.92 4.25 -10.09 7.75 -14.83 12.45l-3.77 3.73 3.48 11.68c1.92 6.42 3.48 11.96 3.48 12.30 0.00 0.42 -2.33 1.59 -7.09 3.57 -8.15 3.39 -7.58 2.54 -5.87 8.71 1.15 4.16 3.37 9.61 9.05 22.30 4.56 10.16 8.18 19.20 9.08 22.66 0.48 1.84 0.61 1.99 1.56 1.79 0.57 -0.12 1.76 -0.33 2.64 -0.48z"},"path5234":{"name":"name423","path":"m541.41 234.94c-1.51 -0.96 -1.99 -1.93 -1.32 -2.63 0.36 -0.38 0.83 -0.27 2.03 0.45 1.96 1.18 2.95 1.18 3.98 0.02 2.01 -2.26 0.26 -5.54 -2.43 -4.56 -2.64 0.96 -2.74 0.85 -2.74 -3.09l0.00 -3.55 3.62 0.00c3.53 0.00 3.62 0.02 3.49 0.94 -0.11 0.84 -0.38 0.95 -2.62 1.06 -2.44 0.12 -2.50 0.15 -2.50 1.30 0.00 1.03 0.13 1.15 0.99 0.98 1.47 -0.29 2.75 0.16 3.94 1.41 0.89 0.93 1.06 1.48 1.06 3.39 0.00 2.04 -0.14 2.43 -1.36 3.70 -1.13 1.18 -1.65 1.42 -3.09 1.42 -1.03 -0.00 -2.27 -0.34 -3.05 -0.84z"},"path5232":{"name":"name424","path":"m544.81 234.69c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5230":{"name":"name425","path":"m542.20 224.41c0.07 -1.09 -0.02 -1.98 -0.18 -1.98 -0.17 0.00 -0.28 1.27 -0.25 2.82 0.06 2.92 0.22 2.59 0.43 -0.83z"},"path5228":{"name":"name426","path":"m388.21 285.87c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5226":{"name":"name427","path":"m88.57 285.73c0.00 -0.07 -0.49 -0.59 -1.10 -1.15l-1.10 -1.01 0.97 1.15c0.90 1.07 1.23 1.34 1.23 1.01z"},"path5224":{"name":"name428","path":"m390.63 283.26 1.17 -1.36 -1.30 1.23c-1.21 1.14 -1.48 1.49 -1.17 1.49 0.07 0.00 0.65 -0.61 1.30 -1.36z"},"path5222":{"name":"name429","path":"m236.70 280.30c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5220":{"name":"name430","path":"m393.65 279.71c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5218":{"name":"name431","path":"m215.03 274.70c-0.09 -0.86 -0.16 -0.16 -0.16 1.57 0.00 1.72 0.07 2.43 0.16 1.57 0.09 -0.86 0.09 -2.27 0.00 -3.13z"},"path5216":{"name":"name432","path":"m411.62 277.21c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5214":{"name":"name433","path":"m234.30 277.36c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5212":{"name":"name434","path":"m231.90 274.44c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5210":{"name":"name435","path":"m416.81 273.03c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5208":{"name":"name436","path":"m75.80 270.71c0.00 -0.07 -0.49 -0.59 -1.10 -1.15l-1.10 -1.01 0.97 1.15c0.90 1.07 1.23 1.34 1.23 1.01z"},"path5206":{"name":"name437","path":"m338.50 269.46c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5204":{"name":"name438","path":"m341.90 267.50c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5202":{"name":"name439","path":"m344.69 265.00c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5200":{"name":"name440","path":"m347.49 262.49c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5198":{"name":"name441","path":"m62.22 262.75c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5196":{"name":"name442","path":"m596.92 259.30c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5194":{"name":"name443","path":"m56.43 258.16c-0.34 -0.55 -1.00 -1.10 -1.46 -1.23 -0.64 -0.17 -0.51 0.06 0.52 0.98 1.66 1.49 1.74 1.50 0.95 0.25z"},"path5192":{"name":"name444","path":"m602.09 257.47c4.65 -0.99 9.57 -2.96 12.82 -5.13 1.52 -1.02 2.75 -1.53 3.69 -1.53 2.50 0.00 7.33 -1.26 13.71 -3.57 4.14 -1.50 6.87 -2.27 8.13 -2.27l1.90 -0.00 0.00 -1.60c0.00 -0.88 -0.33 -2.62 -0.74 -3.86 -1.13 -3.45 -1.35 -6.97 -0.82 -13.24 0.42 -5.03 0.40 -6.00 -0.17 -8.05 -1.01 -3.63 -4.27 -8.43 -9.29 -13.68 -5.35 -5.59 -5.36 -5.63 -6.55 -15.71 -0.43 -3.67 -0.89 -7.48 -1.01 -8.45 -0.27 -2.13 -1.29 -3.05 -6.45 -5.81 -4.28 -2.29 -4.81 -2.76 -5.84 -5.15 -0.70 -1.62 -0.83 -2.82 -0.89 -8.77 -0.10 -9.26 -0.91 -12.32 -4.56 -17.16 -3.26 -4.31 -3.58 -5.69 -3.98 -17.28 -0.29 -8.23 -0.38 -8.99 -1.51 -12.43 -1.78 -5.41 -4.50 -9.87 -8.68 -14.27 -5.36 -5.62 -10.71 -9.22 -24.80 -16.64l-6.83 -3.60 -0.25 -3.66c-0.14 -2.01 -0.46 -7.65 -0.72 -12.53l-0.48 -8.87 -0.99 0.00c-0.54 0.00 -3.00 0.22 -5.45 0.49l-4.47 0.49 0.61 2.68 0.61 2.68 -1.58 4.86c-1.79 5.50 -0.98 4.84 -7.25 5.91l-2.87 0.49 -1.07 3.52c-0.59 1.94 -1.61 4.22 -2.26 5.08 -1.10 1.44 -1.17 1.74 -0.94 3.89 0.22 2.09 0.12 2.59 -1.02 4.80 -0.70 1.36 -2.49 5.00 -3.98 8.10 -5.27 10.94 -15.00 26.68 -19.34 31.30 -3.88 4.13 -5.76 7.89 -5.77 11.57l-0.01 2.59 2.07 0.64c1.14 0.35 3.46 0.64 5.16 0.64 5.14 0.00 18.16 4.01 27.10 8.35 2.62 1.27 5.45 2.29 7.54 2.71 6.14 1.24 18.39 5.94 20.26 7.77 4.32 4.24 13.41 31.46 27.52 82.39 1.91 6.89 3.55 12.66 3.65 12.83 0.28 0.49 1.50 0.38 5.80 -0.54z"},"path5190":{"name":"name445","path":"m580.95 152.96c-2.09 -1.84 -2.77 -6.82 -1.34 -9.75 1.42 -2.89 5.06 -4.64 7.19 -3.45 1.55 0.87 0.88 1.89 -1.25 1.92 -2.03 0.02 -3.16 0.78 -4.16 2.80 -0.52 1.05 -0.12 1.70 0.45 0.73 0.14 -0.23 0.88 -0.42 1.66 -0.42 2.06 0.00 4.13 2.23 4.13 4.46 0.00 1.60 -0.73 3.19 -1.93 4.20 -1.05 0.89 -3.47 0.63 -4.75 -0.50z"},"path5188":{"name":"name446","path":"m584.14 152.86c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5186":{"name":"name447","path":"m582.04 152.56c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5184":{"name":"name448","path":"m585.07 150.85c0.80 -1.28 0.48 -2.93 -0.69 -3.58 -0.68 -0.38 -1.04 -0.32 -1.89 0.34 -1.37 1.07 -1.52 2.32 -0.40 3.41 1.19 1.16 2.18 1.10 2.98 -0.17z"},"path5182":{"name":"name449","path":"m580.85 147.66c0.00 -0.23 -0.18 -0.30 -0.40 -0.16 -0.23 0.15 -0.42 -0.25 -0.45 -0.91 -0.05 -1.03 -0.08 -1.05 -0.23 -0.20 -0.22 1.22 0.15 2.30 0.68 1.95 0.22 -0.14 0.40 -0.45 0.40 -0.68z"},"path5180":{"name":"name450","path":"m585.74 140.34c-0.27 -0.12 -0.72 -0.12 -1.00 0.00 -0.27 0.12 -0.05 0.21 0.50 0.21 0.55 0.00 0.77 -0.09 0.50 -0.21z"},"path5178":{"name":"name451","path":"m350.93 251.33c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5176":{"name":"name452","path":"m619.07 251.81c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5174":{"name":"name453","path":"m363.55 213.97c-0.08 -1.66 -0.14 -0.30 -0.14 3.03 0.00 3.33 0.06 4.69 0.14 3.03 0.08 -1.66 0.08 -4.39 0.00 -6.05z"},"path5172":{"name":"name454","path":"m635.14 206.85c0.00 -0.07 -0.58 -0.68 -1.30 -1.36l-1.30 -1.23 1.17 1.36c1.09 1.26 1.42 1.55 1.42 1.23z"},"path5170":{"name":"name455","path":"m632.35 203.92c0.00 -0.07 -0.49 -0.59 -1.10 -1.15l-1.10 -1.01 0.97 1.15c0.90 1.07 1.23 1.34 1.23 1.01z"},"path5168":{"name":"name456","path":"m498.80 201.14c1.30 -1.38 2.28 -2.50 2.17 -2.50 -0.11 0.00 -1.27 1.13 -2.57 2.50 -1.30 1.38 -2.28 2.50 -2.17 2.50 0.11 0.00 1.27 -1.13 2.57 -2.50z"},"path5166":{"name":"name457","path":"m504.39 195.71c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5164":{"name":"name458","path":"m507.04 193.31c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5162":{"name":"name459","path":"m520.61 182.88c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5160":{"name":"name460","path":"m525.15 178.18c0.40 -0.46 0.63 -0.83 0.52 -0.83 -0.11 0.00 -0.52 0.38 -0.92 0.83 -0.40 0.46 -0.63 0.83 -0.52 0.83 0.11 0.00 0.52 -0.38 0.92 -0.83z"},"path5158":{"name":"name461","path":"m474.30 177.03c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5156":{"name":"name462","path":"m527.40 175.37c0.50 -0.66 0.48 -0.68 -0.15 -0.16 -0.38 0.32 -0.70 0.64 -0.70 0.73 0.00 0.34 0.33 0.12 0.85 -0.57z"},"path5154":{"name":"name463","path":"m495.81 166.29c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5152":{"name":"name464","path":"m565.28 164.26c0.00 -0.08 -0.40 -0.50 -0.90 -0.94l-0.90 -0.80 0.76 0.94c0.71 0.88 1.04 1.13 1.04 0.80z"},"path5150":{"name":"name465","path":"m498.88 156.59c-0.10 -0.41 -0.19 -0.17 -0.20 0.51 -0.01 0.69 0.07 1.02 0.18 0.74 0.11 -0.28 0.12 -0.85 0.01 -1.25z"},"path5148":{"name":"name466","path":"m542.12 155.48c0.00 -0.09 -0.44 -0.25 -0.99 -0.36 -0.54 -0.11 -0.89 -0.04 -0.77 0.16 0.20 0.35 1.76 0.52 1.76 0.20z"},"path5146":{"name":"name467","path":"m344.49 147.14c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5144":{"name":"name468","path":"m501.40 144.17c0.52 -0.57 0.85 -1.04 0.74 -1.04 -0.11 0.00 -0.62 0.47 -1.14 1.04 -0.52 0.57 -0.85 1.04 -0.74 1.04 0.11 0.00 0.62 -0.47 1.14 -1.04z"},"path5142":{"name":"name469","path":"m340.90 143.38c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5140":{"name":"name470","path":"m373.91 135.11c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5138":{"name":"name471","path":"m507.98 128.10c1.75 -1.84 3.09 -3.34 2.98 -3.34 -0.11 0.00 -1.63 1.50 -3.37 3.34 -1.75 1.84 -3.09 3.34 -2.98 3.34 0.11 0.00 1.63 -1.50 3.37 -3.34z"},"path5136":{"name":"name472","path":"m603.07 129.66c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5134":{"name":"name473","path":"m374.31 128.85c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5132":{"name":"name474","path":"m374.71 122.59c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5130":{"name":"name475","path":"m375.11 116.33c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5128":{"name":"name476","path":"m375.51 110.07c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5126":{"name":"name477","path":"m375.91 103.81c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5124":{"name":"name478","path":"m594.02 100.00c0.00 -0.07 -0.67 -0.77 -1.50 -1.57l-1.50 -1.44 1.38 1.57c1.28 1.46 1.62 1.76 1.62 1.44z"},"path5122":{"name":"name479","path":"m376.31 97.55c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5120":{"name":"name480","path":"m589.63 95.80c0.00 -0.09 -0.31 -0.42 -0.70 -0.73 -0.63 -0.52 -0.65 -0.50 -0.15 0.16 0.52 0.70 0.85 0.92 0.85 0.57z"},"path5118":{"name":"name481","path":"m383.51 95.29c-0.13 -0.14 -0.48 -0.15 -0.77 -0.03 -0.32 0.13 -0.22 0.23 0.24 0.25 0.42 0.02 0.66 -0.08 0.52 -0.22z"},"path5116":{"name":"name482","path":"m532.01 82.94c-0.13 -0.33 -0.22 -0.23 -0.24 0.25 -0.02 0.44 0.08 0.69 0.21 0.55 0.13 -0.14 0.15 -0.50 0.03 -0.80z"},"path5114":{"name":"name483","path":"m560.75 71.64c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5112":{"name":"name484","path":"m560.35 64.55c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path4533":{"name":"name485","path":"m559.95 57.45c-0.11 -0.29 -0.20 -0.05 -0.20 0.52 0.00 0.57 0.09 0.81 0.20 0.52 0.11 -0.29 0.11 -0.76 0.00 -1.04z"},"path5412-7":{"name":"name486","path":"m-425.50 452.90 3.99 -3.57 14.77 -4.59c12.69 -3.94 16.62 -5.00 22.99 -6.20 0.96 -0.18 8.95 0.88 10.09 1.34 0.35 0.14 -0.59 -5.79 -3.01 -18.91 -1.94 -10.51 -3.52 -19.23 -3.52 -19.37 -0.00 -0.42 6.16 -3.23 11.94 -5.44 6.77 -2.59 19.76 -6.88 26.49 -8.75l5.09 -1.41 0.00 -3.59c0.00 -3.33 -0.12 -3.86 -1.61 -7.19 -1.59 -3.54 -2.92 -7.66 -5.74 -17.68 -1.04 -3.70 -1.43 -5.88 -1.43 -8.01 0.00 -1.61 -0.19 -3.45 -0.43 -4.09 -0.23 -0.64 -0.55 -2.21 -0.70 -3.47l-0.27 -2.30 -7.21 -0.11 -7.21 -0.11 -2.09 2.70c-2.54 3.27 -6.68 7.34 -7.47 7.34 -1.01 0.00 -3.58 2.79 -6.38 6.92 -1.49 2.20 -3.09 4.15 -3.55 4.32 -0.46 0.17 -3.84 0.93 -7.52 1.69l-6.69 1.37 -1.54 1.75c-1.88 2.14 -3.25 5.78 -3.25 8.66 0.00 2.78 -1.25 5.48 -3.24 6.99 -1.85 1.40 -4.22 2.40 -10.52 4.41l-4.77 1.53 -4.01 4.05c-6.19 6.26 -9.46 8.26 -14.19 8.67 -3.49 0.30 -5.67 -0.38 -7.82 -2.46l-1.76 -1.70 -2.89 0.21c-1.87 0.14 -4.68 0.83 -7.95 1.96l-5.05 1.75 -0.48 3.62c-1.02 7.67 -0.54 6.77 -4.49 8.42 -2.15 0.90 -3.41 1.65 -3.30 1.96 0.10 0.28 0.40 1.62 0.67 2.98l0.49 2.47 -1.47 2.09c-3.15 4.48 -5.52 5.94 -9.69 5.94 -1.82 0.00 -2.08 0.12 -2.52 1.13 -0.27 0.62 -0.59 1.99 -0.71 3.04 -0.20 1.79 -0.09 2.08 1.73 4.61 1.91 2.64 1.99 2.70 4.23 2.99 2.77 0.36 4.07 1.03 5.89 3.06 2.14 2.37 3.38 3.03 5.31 2.83 1.37 -0.14 2.12 0.09 4.06 1.27l2.38 1.44 2.41 -1.30c2.24 -1.21 2.75 -1.31 7.20 -1.44 2.64 -0.08 4.97 0.01 5.19 0.19 0.22 0.18 1.15 1.38 2.06 2.66 1.16 1.63 2.51 2.86 4.49 4.09 1.56 0.97 3.87 2.77 5.13 4.00 2.22 2.17 2.32 2.22 3.09 1.51 0.44 -0.40 2.60 -2.34 4.79 -4.30z"},"path5274-5":{"name":"name487","path":"m-489.06 672.56c4.32 -1.05 19.37 -5.59 28.34 -8.55 5.95 -1.96 7.54 -2.33 10.06 -2.33 1.64 0.00 3.10 -0.19 3.24 -0.43 0.40 -0.67 5.99 -3.48 10.37 -5.22 2.20 -0.87 9.83 -3.58 16.97 -6.03l12.98 -4.45 -0.05 -1.22c-0.08 -1.90 -2.67 -8.74 -7.02 -18.54 -9.02 -20.32 -10.90 -25.16 -12.08 -31.13 -0.35 -1.78 -0.50 -3.37 -0.32 -3.55 0.17 -0.17 3.37 -1.58 7.10 -3.13 3.73 -1.55 6.82 -2.84 6.87 -2.86 0.04 -0.03 -1.44 -5.12 -3.29 -11.31 -1.85 -6.19 -3.37 -11.66 -3.37 -12.16 -0.01 -1.74 9.85 -10.85 18.40 -17.03 5.93 -4.28 10.00 -8.39 14.70 -14.84 2.92 -4.01 9.54 -13.87 10.58 -15.77 0.71 -1.29 -15.44 -7.70 -24.44 -9.70 -2.48 -0.55 -4.64 -0.81 -5.46 -0.65 -0.76 0.15 -2.57 -0.03 -4.17 -0.41 -1.55 -0.37 -3.02 -0.54 -3.27 -0.38 -0.25 0.16 -0.79 1.07 -1.20 2.01 -0.64 1.47 -0.75 2.79 -0.76 9.09l-0.01 7.37 -2.99 2.92c-3.22 3.14 -6.48 5.57 -8.88 6.62 -0.83 0.36 -3.21 1.02 -5.29 1.45 -4.56 0.96 -6.70 1.98 -8.46 4.03 -0.73 0.85 -9.86 14.10 -20.29 29.46l-18.96 27.92 -8.63 18.83 -8.63 18.83 -2.75 2.23c-1.51 1.23 -2.81 2.58 -2.87 3.01 -0.07 0.43 0.25 2.16 0.70 3.85 0.46 1.70 0.82 4.31 0.82 5.85 0.00 2.71 1.09 7.19 4.27 17.62 1.29 4.21 3.53 9.39 4.07 9.39 0.23 0.00 1.90 -0.36 3.73 -0.81z"},"comuna_7":{"name":"name488","path":"m-79.51 49.96c3.09 -1.66 4.30 -2.09 5.83 -2.09 1.35 0.00 3.34 -0.57 6.57 -1.90 7.27 -2.97 8.12 -3.56 9.56 -6.60 2.24 -4.74 5.34 -7.69 10.38 -9.87 3.97 -1.71 6.77 -3.91 9.61 -7.55 2.22 -2.84 2.29 -2.89 4.17 -2.89 1.05 0.00 1.92 -0.05 1.94 -0.10 0.02 -0.06 0.35 -4.24 0.74 -9.29l0.71 -9.18 -2.13 -6.67 -2.13 -6.67 0.00 -6.43 0.00 -6.43 -1.85 -5.69c-2.06 -6.33 -2.63 -10.80 -1.73 -13.64 0.29 -0.90 1.42 -2.54 2.63 -3.80 1.17 -1.22 3.10 -3.58 4.28 -5.25 2.78 -3.94 7.86 -12.76 7.84 -13.63 -0.01 -0.37 -0.77 -2.18 -1.70 -4.01l-1.68 -3.34 -2.07 -0.13c-1.67 -0.10 -3.15 0.28 -7.65 1.97 -5.30 1.99 -12.27 3.79 -14.66 3.79 -0.61 0.00 -1.39 0.27 -1.74 0.60 -1.25 1.18 -7.07 3.95 -10.41 4.96 -1.87 0.56 -5.00 1.26 -6.97 1.54 -2.92 0.43 -3.96 0.79 -5.64 1.95 -1.53 1.06 -2.76 1.53 -4.80 1.83 -7.43 1.09 -16.55 4.05 -37.48 12.16 -22.18 8.60 -31.66 11.68 -39.42 12.81 -2.91 0.42 -29.09 9.35 -36.37 12.40 -2.45 1.03 -5.15 2.35 -6.00 2.93l-1.55 1.07 0.25 2.45c0.18 1.84 0.85 3.71 2.66 7.49 1.33 2.77 2.63 5.11 2.90 5.21 1.30 0.45 24.88 2.83 31.06 3.13 5.97 0.29 7.78 0.54 12.18 1.72 4.69 1.26 5.64 1.38 10.35 1.31 2.97 -0.04 6.98 -0.41 9.38 -0.86 3.88 -0.72 4.35 -0.73 6.39 -0.13 2.06 0.61 5.70 0.70 15.37 0.37 4.46 -0.15 25.26 2.90 26.29 3.86 0.18 0.17 -2.04 5.64 -4.94 12.15 -4.75 10.65 -5.51 12.10 -7.58 14.42 -2.53 2.83 -3.69 5.43 -4.37 9.82 -0.67 4.31 -0.80 4.08 2.37 4.08 2.20 0.00 3.44 0.28 5.89 1.32 3.60 1.53 7.51 2.79 8.78 2.83 0.49 0.02 2.64 -0.91 4.78 -2.06z"},"comuna_9":{"name":"name489","path":"m-127.68 313.29c2.51 -0.98 5.51 -3.11 10.25 -7.26 7.44 -6.52 8.84 -7.24 15.09 -7.78 7.57 -0.66 11.94 -1.20 12.99 -1.62 1.59 -0.63 2.40 -5.13 2.08 -11.50 -0.35 -6.93 2.47 -38.30 3.80 -42.16 0.71 -2.07 0.87 -3.47 0.89 -8.14 0.02 -3.10 -0.19 -7.14 -0.46 -8.97 -0.83 -5.65 -3.68 -17.36 -4.29 -17.61 -1.31 -0.53 -29.25 8.72 -37.26 12.34 -2.03 0.91 -3.74 1.72 -3.80 1.80 -0.06 0.07 1.51 8.92 3.49 19.66 1.98 10.74 3.49 19.64 3.36 19.77 -0.13 0.14 -2.75 -0.19 -5.82 -0.73l-5.58 -0.97 -4.72 0.95c-2.60 0.52 -11.14 2.97 -18.99 5.43l-14.27 4.48 -4.80 4.29 -4.80 4.29 0.00 3.46 0.00 3.46 6.69 6.85c12.09 12.39 19.88 17.36 25.85 16.50 2.24 -0.32 4.31 0.33 6.01 1.89 2.02 1.85 3.85 2.39 8.25 2.41 2.95 0.01 4.40 -0.18 6.03 -0.83z"},"comuna_10":{"name":"name490","path":"m-120.63 511.39c0.25 -1.21 0.61 -5.01 0.81 -8.45 0.51 -8.91 14.60 -132.77 15.33 -134.82 0.51 -1.43 0.91 -7.30 0.49 -7.30 -0.08 0.00 -1.02 0.17 -2.10 0.39 -1.07 0.21 -4.83 0.59 -8.34 0.85 -7.82 0.57 -9.25 1.16 -15.32 6.31 -8.91 7.57 -11.61 9.29 -15.47 9.84 -1.48 0.21 -1.98 0.51 -2.60 1.56 -1.85 3.12 -3.12 6.48 -3.30 8.73 -0.10 1.30 -0.62 3.36 -1.14 4.56 -1.13 2.59 -4.37 8.10 -6.31 10.75 -0.76 1.03 -2.34 4.16 -3.51 6.95l-2.14 5.07 -3.85 0.14 -3.85 0.14 -2.49 2.01c-1.62 1.30 -2.57 2.40 -2.73 3.13 -0.72 3.42 -3.34 13.16 -5.80 21.58 -2.18 7.46 -14.02 45.10 -14.99 47.69 -0.14 0.38 0.39 0.52 1.93 0.52 1.63 -0.01 5.11 1.01 14.91 4.36 7.03 2.40 21.22 7.18 31.54 10.62 10.32 3.44 19.39 6.55 20.16 6.90 0.88 0.40 2.67 0.64 4.86 0.65l3.46 0.02 0.45 -2.19z"},"comuna_11":{"name":"name491","path":"m-210.54 681.93c1.21 -0.85 4.90 -4.25 8.20 -7.54 3.30 -3.30 7.25 -7.11 8.78 -8.48 1.53 -1.37 7.99 -7.86 14.36 -14.42 6.37 -6.56 13.27 -13.43 15.33 -15.25 2.06 -1.82 6.39 -6.42 9.63 -10.21 9.62 -11.27 15.28 -16.57 20.10 -18.80 1.45 -0.67 1.81 -1.08 2.23 -2.56 0.64 -2.22 4.39 -6.40 8.21 -9.13 3.81 -2.72 7.21 -6.44 7.97 -8.71 0.34 -1.01 0.57 -1.86 0.51 -1.90 -1.42 -0.77 -5.85 -4.78 -9.17 -8.31l-4.30 -4.57 -5.05 1.51c-2.78 0.83 -5.19 1.42 -5.35 1.32 -0.17 -0.11 -0.50 -1.37 -0.74 -2.80 -0.86 -5.09 -0.95 -5.25 -6.22 -10.74l-5.00 -5.21 0.00 -3.63 0.00 -3.63 -3.38 -2.14c-1.86 -1.17 -3.48 -2.30 -3.60 -2.50 -0.12 -0.20 0.06 -2.26 0.39 -4.57 0.86 -5.96 0.91 -5.70 -1.35 -6.49 -1.62 -0.56 -2.18 -1.05 -3.29 -2.85l-1.34 -2.17 -3.19 -0.49c-4.58 -0.71 -8.79 -0.68 -10.18 0.08 -1.89 1.02 -6.15 1.89 -10.30 2.10 -2.13 0.11 -5.06 0.41 -6.52 0.67l-2.64 0.48 -0.27 4.01c-0.15 2.21 -0.53 4.76 -0.85 5.68 -0.67 1.94 -14.95 128.25 -14.95 132.27 0.00 2.50 -0.55 7.95 -1.02 10.19 -0.23 1.11 -0.29 1.13 3.02 -1.21z"},"comuna_12":{"name":"name492","path":"m-169.35 787.01c3.92 -2.72 10.69 -9.75 14.40 -14.94 6.66 -9.34 17.33 -29.72 27.19 -51.96 2.85 -6.43 6.37 -14.29 7.82 -17.48 1.45 -3.19 2.63 -5.86 2.63 -5.95 0.00 -0.09 -0.78 -0.16 -1.74 -0.16 -1.67 0.00 -1.80 0.10 -3.41 2.48 -2.24 3.34 -2.93 3.83 -7.36 5.26l-3.81 1.23 -1.32 2.86c-0.73 1.57 -1.60 3.00 -1.93 3.18 -0.58 0.31 -10.52 3.35 -10.97 3.35 -0.38 0.00 -0.23 -3.36 0.37 -8.74 0.32 -2.86 0.55 -5.23 0.50 -5.28 -0.28 -0.26 -6.95 -2.30 -8.24 -2.51 -1.18 -0.20 -13.52 0.91 -13.89 1.25 -0.04 0.04 0.53 2.60 1.28 5.69 0.86 3.57 1.22 5.77 0.98 6.02 -0.21 0.22 -7.43 3.41 -16.04 7.10l-15.66 6.70 -1.53 2.30c-1.53 2.30 -1.99 2.66 -3.94 3.09 -0.59 0.13 -3.03 2.22 -5.63 4.81l-4.59 4.58 -0.49 3.88c-0.27 2.13 -0.58 4.27 -0.69 4.76 -0.16 0.74 0.39 1.24 3.43 3.12l3.62 2.24 0.00 3.74 0.00 3.74 4.94 5.26 4.94 5.26 0.70 3.32c0.38 1.83 0.74 3.38 0.80 3.45 0.06 0.07 1.99 -0.45 4.30 -1.15 2.31 -0.70 4.52 -1.28 4.91 -1.28 0.39 0.00 2.61 2.04 4.93 4.52 4.55 4.89 8.61 8.42 9.67 8.42 0.37 0.00 2.07 -0.98 3.79 -2.17z"},"comuna_14":{"name":"name493","path":"m-165.85 1171.64c21.10 -37.58 20.98 -37.36 22.30 -43.04 1.00 -4.30 1.07 -5.01 0.57 -5.63 -0.31 -0.39 -2.27 -2.78 -4.36 -5.30 -9.22 -11.16 -26.30 -32.64 -29.39 -36.94 -0.91 -1.26 -2.02 -3.33 -2.48 -4.59 -1.16 -3.22 -3.93 -6.89 -9.94 -13.17 -4.37 -4.57 -5.78 -5.76 -9.01 -7.63 -4.23 -2.44 -8.84 -5.78 -12.28 -8.89 -2.58 -2.34 -2.74 -2.36 -8.13 -1.20 -2.13 0.46 -4.47 0.83 -5.18 0.83l-1.30 0.00 -0.21 25.56c-0.16 19.19 -0.38 27.39 -0.88 32.87l-0.67 7.30 -6.92 14.82c-3.80 8.15 -7.47 16.25 -8.15 18.00 -1.70 4.38 -3.34 9.19 -3.18 9.31 0.07 0.06 2.37 0.34 5.11 0.62 2.74 0.29 5.59 0.79 6.34 1.11 0.75 0.33 2.86 2.13 4.70 4.01l3.34 3.41 0.00 2.98c0.00 2.90 0.05 3.05 2.00 5.94l2.00 2.96 3.10 0.72c3.83 0.89 6.12 2.08 9.24 4.78 2.15 1.87 2.50 2.40 3.23 4.85 0.45 1.52 0.81 3.19 0.81 3.72 0.00 0.85 0.25 0.99 2.10 1.24 1.15 0.15 5.33 0.73 9.28 1.28 9.25 1.29 9.43 1.31 12.98 1.37l2.99 0.05 11.98 -21.33z"},"comuna_5":{"name":"name494","path":"m-502.73 853.67c6.48 -1.08 18.51 -5.11 37.93 -12.70 19.54 -7.63 30.15 -11.07 36.77 -11.92 2.39 -0.30 3.62 -0.81 5.27 -2.18l0.92 -0.76 -5.18 -18.55c-10.92 -39.08 -17.25 -59.06 -22.06 -69.66 -2.99 -6.58 -3.11 -6.71 -9.03 -9.12 -7.26 -2.96 -13.97 -5.09 -16.00 -5.09 -0.59 0.00 -1.76 1.44 -4.29 5.32 -9.52 14.54 -14.74 20.68 -22.07 25.95 -5.92 4.25 -10.09 7.75 -14.83 12.45l-3.77 3.73 3.48 11.68c1.92 6.42 3.48 11.96 3.48 12.30 0.00 0.42 -2.33 1.59 -7.09 3.57 -8.15 3.39 -7.58 2.54 -5.87 8.71 1.15 4.16 3.37 9.61 9.05 22.30 4.56 10.16 8.18 19.20 9.08 22.66 0.48 1.84 0.61 1.99 1.56 1.79 0.57 -0.12 1.76 -0.33 2.64 -0.48z"},"comuna_6":{"name":"name495","path":"m-452.25 1080.06c4.65 -0.99 9.57 -2.96 12.82 -5.13 1.52 -1.02 2.75 -1.53 3.69 -1.53 2.50 0.00 7.33 -1.26 13.71 -3.57 4.14 -1.50 6.87 -2.27 8.13 -2.27l1.90 0.00 0.00 -1.60c0.00 -0.88 -0.33 -2.62 -0.74 -3.86 -1.13 -3.45 -1.35 -6.97 -0.82 -13.24 0.42 -5.03 0.40 -6.00 -0.17 -8.05 -1.01 -3.63 -4.27 -8.43 -9.29 -13.68 -5.35 -5.59 -5.36 -5.63 -6.55 -15.71 -0.43 -3.67 -0.89 -7.48 -1.01 -8.45 -0.27 -2.13 -1.29 -3.05 -6.45 -5.81 -4.28 -2.29 -4.81 -2.76 -5.84 -5.15 -0.70 -1.62 -0.83 -2.82 -0.89 -8.77 -0.10 -9.26 -0.91 -12.32 -4.56 -17.16 -3.26 -4.31 -3.58 -5.69 -3.98 -17.28 -0.29 -8.23 -0.38 -8.99 -1.51 -12.43 -1.78 -5.41 -4.50 -9.87 -8.68 -14.27 -5.36 -5.62 -10.71 -9.22 -24.80 -16.64l-6.83 -3.60 -0.25 -3.66c-0.14 -2.01 -0.46 -7.65 -0.72 -12.53l-0.48 -8.87 -0.99 0.00c-0.54 0.00 -3.00 0.22 -5.45 0.49l-4.47 0.49 0.61 2.68 0.61 2.68 -1.58 4.86c-1.79 5.50 -0.98 4.84 -7.25 5.91l-2.87 0.49 -1.07 3.52c-0.59 1.94 -1.61 4.22 -2.26 5.08 -1.10 1.44 -1.17 1.74 -0.94 3.89 0.22 2.09 0.12 2.59 -1.02 4.80 -0.70 1.36 -2.49 5.00 -3.98 8.10 -5.27 10.94 -15.00 26.68 -19.34 31.30 -3.88 4.13 -5.76 7.89 -5.77 11.57l-0.01 2.59 2.07 0.64c1.14 0.35 3.46 0.64 5.16 0.64 5.14 0.00 18.16 4.01 27.10 8.35 2.62 1.27 5.45 2.29 7.54 2.71 6.14 1.24 18.39 5.94 20.26 7.77 4.32 4.24 13.41 31.46 27.52 82.39 1.91 6.89 3.55 12.66 3.65 12.83 0.28 0.49 1.50 0.38 5.80 -0.54z"},"comuna_13":{"name":"name496","path":"m-208.61 973.56c4.04 -2.42 8.00 -6.13 13.39 -12.55 6.21 -7.41 7.69 -8.85 10.45 -10.19 2.38 -1.16 3.27 -1.20 7.21 -0.35l2.96 0.64 2.91 -3.09c3.74 -3.97 5.15 -4.86 7.71 -4.87 2.48 -0.01 5.21 -1.32 8.18 -3.93 2.40 -2.11 5.05 -3.16 7.96 -3.16l1.83 0.00 0.94 -3.02c1.53 -4.94 5.18 -13.50 11.55 -27.12l6.00 -12.82 0.44 -5.05c0.87 -9.94 1.31 -27.19 1.12 -44.02 -0.17 -14.93 -0.28 -17.43 -0.91 -19.62 -0.56 -1.94 -0.73 -3.98 -0.74 -9.08l-0.02 -6.57 -1.44 0.00c-0.94 0.00 -2.80 0.73 -5.36 2.09 -2.21 1.18 -4.46 2.09 -5.16 2.09 -1.66 0.00 -6.14 -1.33 -9.76 -2.90 -2.42 -1.05 -3.50 -1.28 -6.04 -1.28 -4.69 0.00 -5.48 0.27 -6.68 2.25 -0.57 0.94 -2.63 5.47 -4.58 10.06 -4.28 10.09 -18.94 40.99 -23.58 49.67 -6.49 12.16 -11.57 19.98 -16.62 25.62 -5.07 5.66 -9.03 9.14 -12.05 10.59 -1.08 0.52 -1.96 1.22 -1.97 1.57 -0.02 1.26 -1.57 4.18 -3.24 6.06 -0.94 1.07 -4.07 3.88 -6.96 6.27 -4.89 4.03 -5.88 5.18 -6.66 7.71 -0.12 0.38 1.16 2.09 3.31 4.43 3.23 3.51 9.16 11.39 10.41 13.82 0.58 1.13 0.41 1.57 -2.42 6.25l-1.31 2.17 0.93 1.38c0.51 0.76 3.52 4.19 6.68 7.62 3.16 3.43 6.47 7.24 7.35 8.45 0.88 1.22 1.69 2.21 1.80 2.21 0.11 0.00 1.19 -0.59 2.39 -1.31z"},"comuna_15":{"name":"name497","path":"m873.56 142.28c5.87 -4.55 12.12 -9.77 14.38 -12.00 3.30 -3.26 6.79 -9.38 14.56 -25.51 8.93 -18.53 14.47 -27.60 21.03 -34.42 1.22 -1.27 7.18 -6.11 13.25 -10.75 10.73 -8.21 11.07 -8.52 12.50 -11.19 1.46 -2.72 4.41 -6.79 5.97 -8.24 3.19 -2.95 8.30 -5.86 21.70 -12.35 4.24 -2.05 9.27 -4.74 11.17 -5.96 4.08 -2.63 9.78 -8.37 11.35 -11.43l1.08 -2.11 -1.72 -2.29c-2.43 -3.24 -2.63 -3.75 -2.64 -6.71 0.00 -2.61 -0.03 -2.67 -2.21 -5.22 -3.23 -3.79 -5.16 -4.64 -12.23 -5.40 -5.67 -0.61 -9.77 -0.49 -11.24 0.33 -0.42 0.24 -1.86 1.35 -3.20 2.48 -2.78 2.34 -5.90 3.71 -8.43 3.71 -1.97 0.00 -3.83 1.34 -7.79 5.59 -1.24 1.33 -2.53 2.34 -2.99 2.34 -0.45 0.00 -2.29 -0.31 -4.09 -0.68l-3.28 -0.68 -2.20 1.13c-1.64 0.84 -3.24 2.31 -6.30 5.76 -11.14 12.60 -13.67 14.99 -18.67 17.65 -2.18 1.16 -3.49 2.40 -8.18 7.75 -6.06 6.90 -13.78 14.57 -21.96 21.79 -2.85 2.52 -10.67 9.96 -17.37 16.53 -6.70 6.57 -13.88 13.43 -15.97 15.25 -4.04 3.52 -15.57 15.20 -15.57 15.77 0.00 0.99 12.70 17.87 16.78 22.29 6.85 7.44 10.06 12.15 11.76 17.27 0.34 1.03 0.70 2.11 0.80 2.40 0.12 0.34 1.03 0.52 2.62 0.52 2.44 0.00 2.44 -0.00 7.10 -3.61z"},"comuna_16":{"name":"name498","path":"m906.29 320.15c-0.38 -2.10 -3.19 -7.77 -5.23 -10.60 -1.06 -1.47 -4.19 -5.13 -6.94 -8.14 -4.93 -5.38 -17.59 -22.41 -17.59 -23.67 0.00 -0.81 11.21 -12.36 16.37 -16.87 2.31 -2.02 9.67 -9.06 16.37 -15.64 6.70 -6.59 14.15 -13.71 16.57 -15.83 7.95 -6.98 15.40 -14.32 21.81 -21.48l6.31 -7.05 -0.69 -1.25c-0.38 -0.69 -3.60 -4.42 -7.17 -8.29 -5.86 -6.38 -9.29 -10.73 -9.29 -11.81 0.00 -0.22 0.92 -1.87 2.05 -3.67 1.74 -2.78 1.99 -3.41 1.64 -4.20 -0.74 -1.66 -6.41 -9.19 -9.65 -12.82l-3.17 -3.55 -1.29 0.51c-4.41 1.74 -10.80 7.67 -20.31 18.87 -3.07 3.61 -7.25 8.05 -9.29 9.85 -2.04 1.81 -9.01 8.74 -15.49 15.40 -6.48 6.67 -13.94 14.14 -16.57 16.61 -2.63 2.47 -6.97 6.61 -9.64 9.21 -2.87 2.79 -5.85 5.28 -7.29 6.08 -2.78 1.55 -2.77 1.51 -1.84 6.54l0.59 3.22 -3.58 14.97 -3.58 14.97 0.00 14.55c0.00 13.42 -0.06 14.74 -0.79 16.96 -0.47 1.41 -0.96 4.58 -1.20 7.68 -0.22 2.90 -0.59 6.41 -0.81 7.78 -0.22 1.38 -0.49 3.07 -0.60 3.76 -0.18 1.15 0.10 0.95 3.40 -2.38 2.65 -2.68 4.41 -4.05 6.67 -5.22 2.84 -1.46 3.32 -1.58 6.29 -1.53 3.29 0.05 3.49 0.11 12.67 3.43 3.64 1.32 6.24 1.92 11.88 2.74l7.22 1.05 1.41 -0.87c1.12 -0.69 1.88 -0.83 3.77 -0.69 1.94 0.15 3.41 0.72 8.07 3.13l5.70 2.95 1.72 -1.73c1.48 -1.49 1.69 -1.90 1.49 -2.98z"},"comuna_17":{"name":"name499","path":"m926.14 618.33c4.35 -4.21 7.62 -6.07 10.69 -6.07 2.05 0.00 5.58 1.02 10.01 2.90l3.79 1.61 2.80 -2.88c1.54 -1.58 2.98 -2.88 3.21 -2.88 0.22 0.00 3.27 1.20 6.78 2.67 3.51 1.47 6.46 2.59 6.56 2.49 0.10 -0.10 0.49 -6.14 0.87 -13.42 0.58 -11.09 0.69 -21.61 0.72 -64.86 0.03 -48.82 -0.01 -51.64 -0.67 -51.84 -0.38 -0.12 -2.85 -0.52 -5.49 -0.88 -7.58 -1.05 -9.20 -1.45 -15.77 -3.88 -5.43 -2.01 -6.58 -2.30 -9.38 -2.34 -2.93 -0.04 -3.41 0.08 -5.79 1.42 -2.63 1.48 -7.64 6.31 -11.26 10.85 -1.01 1.26 -1.96 2.16 -2.13 1.99 -0.16 -0.17 0.26 -3.83 0.95 -8.14 0.68 -4.31 1.37 -9.71 1.51 -12.01 0.15 -2.30 0.60 -5.19 1.01 -6.43 0.66 -2.02 0.74 -3.73 0.74 -16.60l0.00 -14.34 3.61 -15.09 3.61 -15.09 -0.71 -4.10 -0.71 -4.10 -3.21 0.00c-2.84 0.00 -3.98 -0.27 -9.79 -2.31 -3.62 -1.27 -16.37 -5.58 -28.33 -9.58 -11.97 -4.00 -23.91 -8.03 -26.53 -8.96 -3.60 -1.27 -5.40 -1.69 -7.31 -1.69l-2.54 0.00 -1.13 2.61c-3.30 7.61 -11.11 31.17 -13.15 39.66l-1.13 4.69 -5.95 0.49c-3.27 0.27 -7.93 0.50 -10.35 0.52l-4.41 0.04 -1.28 2.72c-1.19 2.53 -1.28 3.02 -1.28 7.04 0.00 2.69 0.22 4.96 0.57 6.02 0.32 0.93 0.77 4.48 1.00 7.88 0.24 3.40 0.86 8.15 1.38 10.56 1.25 5.76 1.29 6.06 5.23 35.79l3.39 25.57 4.35 15.90 4.35 15.90 -1.36 4.21c-0.75 2.32 -1.36 4.24 -1.36 4.28 0.00 0.04 0.73 0.57 1.62 1.19 0.89 0.61 3.27 2.76 5.29 4.77 4.35 4.33 7.13 5.91 24.24 13.83 20.58 9.53 32.97 16.31 42.21 23.13 7.42 5.47 13.63 11.77 16.60 16.84 0.70 1.20 1.34 2.18 1.42 2.19 0.08 0.01 1.21 -1.01 2.50 -2.27z"},"comuna_18":{"name":"name500","path":"m875.14 800.14c3.10 -4.60 3.16 -4.73 3.47 -7.93 0.41 -4.22 1.20 -5.62 4.03 -7.08 1.51 -0.78 2.38 -1.53 2.70 -2.34 0.44 -1.12 0.65 -1.20 3.50 -1.46 1.67 -0.15 4.44 -0.27 6.17 -0.27 2.93 0.00 3.38 -0.13 6.76 -1.90 2.40 -1.26 3.55 -2.09 3.42 -2.46 -0.95 -2.58 -1.86 -6.48 -1.86 -7.94 0.00 -3.76 3.06 -6.24 8.37 -6.80l2.94 -0.31 1.29 -4.03 1.29 -4.03 -4.31 -15.80 -4.31 -15.80 -3.63 -27.36c-1.99 -15.05 -4.16 -29.98 -4.80 -33.18 -0.65 -3.20 -1.30 -7.28 -1.46 -9.07 -0.23 -2.71 -0.39 -3.21 -0.92 -3.05 -1.43 0.44 -7.05 1.07 -9.49 1.07 -3.61 0.00 -37.51 4.46 -39.47 5.19 -0.88 0.33 -3.03 0.73 -4.79 0.89 -1.76 0.16 -5.32 0.83 -7.91 1.49 -4.99 1.27 -7.88 1.48 -10.39 0.75 -0.84 -0.24 -1.61 -0.37 -1.71 -0.27 -0.09 0.10 -0.35 2.88 -0.57 6.19 -0.49 7.40 -0.98 10.67 -1.95 12.99 -0.80 1.92 -3.57 6.07 -6.79 10.17l-2.00 2.54 2.82 4.73c3.38 5.66 6.63 11.94 7.14 13.79 0.26 0.96 0.20 1.74 -0.22 2.79 -0.75 1.89 -0.45 3.02 1.64 6.15 2.29 3.42 4.63 8.43 5.97 12.75 0.93 3.01 1.11 4.31 1.14 8.56 0.06 6.86 -0.40 8.45 -4.20 14.45l-3.14 4.97 -0.02 4.27c-0.01 2.62 -0.24 4.91 -0.59 5.94 -0.37 1.09 -0.58 3.36 -0.58 6.50l-0.01 4.83 3.92 2.77c4.89 3.46 7.82 6.61 8.46 9.11 0.26 1.01 0.63 2.26 0.83 2.78 0.37 0.98 4.86 4.27 5.83 4.27 0.30 0.00 2.39 -0.57 4.63 -1.27 4.53 -1.41 7.87 -1.90 9.99 -1.49 0.77 0.15 2.90 1.35 4.73 2.66 3.73 2.67 9.40 5.92 10.31 5.91 0.33 -0.00 2.02 -2.11 3.75 -4.68z"},"comuna_19":{"name":"name501","path":"m795.57 1091.96c2.02 -0.78 37.75 -5.59 41.61 -5.60 3.16 -0.01 8.48 -0.73 9.31 -1.26 0.43 -0.28 0.38 -0.87 -0.22 -3.19 -0.46 -1.77 -0.80 -4.68 -0.88 -7.65l-0.14 -4.80 1.60 -3.44 1.60 -3.44 2.71 -0.01c1.49 -0.01 5.94 -0.28 9.90 -0.61 3.95 -0.33 7.39 -0.61 7.63 -0.62 0.25 -0.01 0.55 -0.67 0.67 -1.47 0.77 -4.94 8.67 -29.30 12.86 -39.65 5.17 -12.76 19.61 -58.98 22.77 -72.88 0.97 -4.26 1.23 -4.90 2.52 -6.16 3.14 -3.05 4.28 -3.59 8.16 -3.81l3.59 -0.21 2.07 -4.80c1.14 -2.64 3.16 -6.38 4.49 -8.31 3.81 -5.53 5.75 -9.65 6.09 -12.95 0.21 -2.03 0.75 -3.74 1.94 -6.22l1.65 -3.41 -1.17 0.00c-2.41 0.00 -5.28 -0.94 -6.97 -2.29 -2.69 -2.14 -3.15 -2.30 -6.78 -2.30 -2.57 0.00 -4.03 -0.24 -5.99 -0.98 -5.40 -2.05 -13.37 -8.56 -22.90 -18.73l-4.49 -4.79 0.00 -3.77 0.00 -3.77 -2.58 -2.52c-1.42 -1.39 -3.78 -3.22 -5.24 -4.08 -1.87 -1.10 -3.19 -2.28 -4.47 -3.99l-1.81 -2.44 -3.84 0.00c-3.57 0.00 -4.05 0.10 -6.76 1.46 -1.60 0.80 -3.06 1.46 -3.23 1.46 -0.18 0.00 -1.36 -0.66 -2.64 -1.46 -1.80 -1.14 -2.75 -1.46 -4.26 -1.46 -2.36 0.00 -3.60 -0.64 -5.69 -2.94 -1.90 -2.08 -3.56 -2.91 -5.85 -2.91 -1.52 0.00 -1.87 -0.21 -3.61 -2.18 -3.98 -4.51 -4.24 -6.48 -1.72 -13.29l1.41 -3.80 -0.78 -1.14c-1.54 -2.26 -1.59 -2.27 -6.13 -0.88 -6.47 1.97 -5.64 2.66 -8.80 -7.29 -1.87 -5.89 -2.86 -8.47 -3.19 -8.27 -0.26 0.16 -2.06 1.40 -4.01 2.77 -4.70 3.29 -6.69 4.18 -8.56 3.86 -1.22 -0.21 -1.86 -0.00 -3.79 1.22 -1.27 0.81 -2.58 1.47 -2.90 1.47 -0.32 0.00 -2.20 -0.85 -4.16 -1.88 -1.97 -1.03 -3.68 -1.88 -3.81 -1.88 -0.13 0.00 -0.50 0.69 -0.84 1.53 -0.87 2.19 -0.45 3.89 1.28 5.12 1.97 1.41 4.56 4.50 5.88 7.05 0.62 1.18 1.84 4.27 2.72 6.85 2.50 7.32 2.91 7.91 9.55 13.93 4.41 3.99 5.95 5.63 5.96 6.34 0.01 0.85 -2.59 10.93 -2.87 11.13 -0.06 0.04 -1.33 0.78 -2.81 1.63 -1.49 0.86 -4.72 3.29 -7.19 5.42 -2.47 2.12 -5.72 4.78 -7.23 5.90l-2.75 2.04 0.23 4.00c0.15 2.51 0.61 5.24 1.24 7.34 1.28 4.23 1.84 8.38 1.59 11.63 -0.16 2.04 0.07 3.60 1.18 7.92l1.38 5.38 3.13 3.29c1.72 1.81 3.24 3.24 3.37 3.18 0.14 -0.06 1.99 -2.22 4.12 -4.80 2.13 -2.58 4.17 -4.70 4.54 -4.70 0.37 0.00 2.96 0.68 5.77 1.52l5.10 1.52 0.00 4.34 0.00 4.34 -2.54 3.05c-4.75 5.69 -5.35 7.41 -6.80 19.46 -0.86 7.13 -1.30 9.28 -3.59 17.32 -4.22 14.85 -11.13 36.75 -11.82 37.50 -0.40 0.43 -9.13 -2.02 -11.39 -3.18 -0.88 -0.45 -2.78 -1.56 -4.23 -2.45l-2.63 -1.62 -4.84 1.62c-4.72 1.58 -4.91 1.69 -7.35 4.29 -1.82 1.94 -3.60 3.28 -6.50 4.88 -2.20 1.22 -4.60 2.67 -5.35 3.23 -1.26 0.95 -1.70 1.02 -6.26 1.02l-4.90 0.00 -0.47 2.34c-0.46 2.30 -0.44 2.37 0.77 4.07 2.71 3.78 3.18 4.95 3.67 9.10l0.47 4.01 7.23 -6.96c11.33 -10.92 19.43 -17.97 21.60 -18.82 0.44 -0.17 3.31 0.03 6.39 0.45 3.07 0.42 5.79 0.77 6.02 0.78 0.42 0.02 5.47 6.38 6.44 8.12 0.79 1.42 0.58 6.63 -0.49 12.28 -0.55 2.91 -1.90 13.92 -3.00 24.48 -1.20 11.49 -2.50 21.88 -3.24 25.87 -1.03 5.51 -1.21 7.28 -1.02 10.23 0.12 1.96 0.35 3.89 0.50 4.29 0.34 0.92 2.52 0.95 4.78 0.07z"},"comuna_20":{"name":"name502","path":"m1105.83 95.48c0.65 -0.57 2.83 -1.92 4.85 -3.00 2.70 -1.45 4.32 -2.67 6.11 -4.61 2.42 -2.62 2.47 -2.65 8.12 -4.58 4.65 -1.59 5.82 -1.86 6.43 -1.46 4.62 3.02 8.04 4.71 11.57 5.72 2.34 0.67 4.17 1.00 4.37 0.78 0.47 -0.49 3.71 -10.48 7.63 -23.49 5.35 -17.75 6.30 -21.64 7.17 -29.40 0.44 -3.86 0.99 -8.00 1.22 -9.18 0.67 -3.35 2.51 -6.88 5.55 -10.61l2.78 -3.41 0.00 -2.93c0.00 -1.61 -0.04 -2.93 -0.10 -2.93 -0.06 0.00 -1.99 -0.56 -4.29 -1.25 -2.30 -0.69 -4.30 -1.25 -4.44 -1.25 -0.14 0.00 -2.17 2.35 -4.52 5.22 -2.35 2.87 -4.39 5.22 -4.54 5.22 -0.15 0.00 -1.91 -1.71 -3.92 -3.80l-3.65 -3.80 -3.47 1.77c-2.55 1.30 -3.58 2.06 -3.88 2.86 -0.46 1.24 -0.22 3.90 0.74 8.28 0.36 1.66 0.56 3.13 0.43 3.26 -0.13 0.13 -2.99 0.51 -6.36 0.83 -3.37 0.32 -7.55 0.97 -9.28 1.43 -1.74 0.46 -3.49 0.84 -3.89 0.84 -0.40 0.00 -3.36 -1.22 -6.58 -2.71 -3.22 -1.49 -5.91 -2.71 -5.99 -2.71 -0.08 0.00 -4.90 6.62 -10.70 14.71l-10.55 14.71 -0.17 6.68c-0.12 4.71 -0.37 7.36 -0.85 8.97 -0.51 1.70 -0.74 4.41 -0.89 10.43 -0.19 7.44 0.23 18.47 0.72 18.99 0.55 0.58 8.00 1.38 13.26 1.42 5.76 0.05 5.96 0.02 7.11 -0.99z"},"comuna_21":{"name":"name503","path":"m1094.23 385.06c3.40 -0.71 9.42 -1.96 13.37 -2.77 3.95 -0.81 9.18 -2.05 11.62 -2.76l4.43 -1.29 -0.53 -2.36c-0.97 -4.30 -1.10 -8.37 -0.39 -11.30 0.92 -3.76 1.87 -5.13 5.04 -7.32 3.21 -2.21 4.01 -3.30 4.28 -5.85 0.17 -1.59 -0.09 -2.49 -1.82 -6.36 -2.24 -5.01 -2.62 -7.09 -3.23 -17.82l-0.33 -5.80 2.45 -3.18c3.11 -4.03 3.73 -5.49 3.09 -7.34 -0.34 -0.97 -0.35 -1.69 -0.06 -2.50 1.01 -2.78 6.37 -8.77 12.38 -13.85l2.40 -2.03 0.00 -10.07c0.00 -14.05 0.41 -15.62 7.98 -30.57 2.75 -5.44 3.60 -8.07 3.60 -11.14 0.00 -4.37 -2.31 -8.40 -7.13 -12.48l-2.73 -2.31 -0.27 -5.29c-0.15 -2.91 -0.52 -7.09 -0.83 -9.29 -0.31 -2.20 -0.68 -5.41 -0.83 -7.14l-0.27 -3.15 -4.43 -3.74c-2.44 -2.06 -7.33 -6.60 -10.88 -10.10 -8.22 -8.11 -8.93 -8.69 -12.11 -9.80 -2.43 -0.85 -3.65 -0.94 -15.40 -1.15l-12.76 -0.23 -2.56 -3.76c-1.41 -2.07 -3.12 -4.98 -3.81 -6.47l-1.25 -2.71 0.12 -15.97 0.12 -15.97 -1.38 0.00c-1.20 0.00 -1.58 0.28 -2.84 2.08 -2.33 3.31 -4.75 5.24 -10.27 8.18 -5.87 3.12 -7.89 4.95 -9.37 8.46 -0.55 1.30 -1.29 2.71 -1.66 3.13 -0.84 0.98 -3.57 2.45 -8.65 4.66l-3.99 1.74 -0.12 5.18c-0.11 4.64 0.38 10.66 1.01 12.36 0.27 0.74 1.91 0.59 8.28 -0.76 2.18 -0.46 4.42 -0.72 4.98 -0.57 0.55 0.15 1.75 0.98 2.66 1.85 2.71 2.61 7.26 5.96 12.41 9.13 4.09 2.52 5.55 3.72 9.33 7.69 5.78 6.08 9.02 10.30 10.49 13.68 1.26 2.91 4.62 7.64 9.47 13.36 1.66 1.95 4.25 5.22 5.77 7.26 1.51 2.04 7.12 9.15 12.47 15.79 7.62 9.47 9.67 12.27 9.52 12.98 -0.10 0.50 -0.38 2.06 -0.61 3.48 -0.95 5.81 -2.04 8.00 -19.06 38.24l-16.67 29.62 -5.59 -0.22c-3.07 -0.12 -8.91 -0.71 -12.98 -1.30 -4.06 -0.59 -8.05 -1.17 -8.85 -1.28l-1.47 -0.21 -0.63 2.90c-2.22 10.19 1.07 17.61 11.29 25.46l4.05 3.11 0.00 12.11 0.00 12.11 2.50 2.65c2.00 2.12 2.69 2.61 3.49 2.47 0.55 -0.10 3.78 -0.76 7.19 -1.47z"},"comuna_22":{"name":"name504","path":"m1043.62 643.58c1.95 -0.68 7.50 -1.13 36.23 -2.94 26.60 -1.67 34.67 -2.31 37.33 -2.95 2.37 -0.57 5.50 -1.88 10.38 -4.37 3.98 -2.02 8.36 -3.93 10.18 -4.43 3.93 -1.07 10.99 -1.25 16.70 -0.42l3.92 0.57 1.77 -1.81 1.77 -1.81 0.00 -5.21c0.00 -3.36 0.29 -6.93 0.81 -10.03 0.72 -4.33 0.88 -8.85 1.58 -44.68 0.71 -36.69 0.84 -40.19 1.60 -44.03l0.82 -4.17 -0.98 -5.84c-0.54 -3.21 -1.27 -9.69 -1.63 -14.40l-0.66 -8.56 -2.13 -3.34c-4.88 -7.68 -14.13 -15.64 -27.16 -23.38 -6.37 -3.79 -17.52 -9.43 -30.94 -15.65 -17.12 -7.94 -19.84 -9.49 -24.13 -13.75 -1.99 -1.98 -4.49 -4.22 -5.54 -4.97 -1.76 -1.26 -2.09 -1.35 -3.99 -1.10 -3.34 0.45 -4.95 1.00 -6.25 2.14 -1.05 0.92 -1.22 1.35 -1.22 3.11 0.00 1.22 0.48 3.40 1.19 5.44 0.65 1.87 1.08 3.58 0.95 3.80 -0.13 0.22 -2.22 1.41 -4.64 2.66l-4.41 2.26 -5.52 0.00 -5.52 0.00 -0.65 1.32c-1.46 2.96 0.07 6.58 5.31 12.58 2.04 2.34 5.75 6.70 8.24 9.68 2.49 2.98 7.78 9.14 11.77 13.68 3.99 4.54 7.25 8.39 7.25 8.56 0.00 0.17 -1.95 2.35 -4.34 4.83l-4.34 4.52 1.33 5.49c0.73 3.02 1.34 5.79 1.34 6.16 0.01 0.41 -3.29 2.96 -8.57 6.63 -8.18 5.69 -8.56 6.01 -8.29 7.05 0.46 1.77 0.32 6.81 -0.24 8.49 -0.28 0.86 -2.22 3.96 -4.30 6.89 -4.88 6.87 -7.68 12.86 -11.27 24.11 -6.27 19.65 -8.41 28.02 -7.84 30.70 0.14 0.68 1.15 2.32 2.24 3.63 6.64 8.04 7.10 16.62 1.54 28.82l-1.96 4.30 2.67 5.61 2.67 5.61 2.30 0.00c1.27 0.00 3.33 -0.36 4.60 -0.80z"}}});
(function() {


}).call(this);
(function() {


}).call(this);
!function($){var apiParams={set:{colors:1,values:1,backgroundColor:1,scaleColors:1,normalizeFunction:1,focus:1},get:{selectedRegions:1,selectedMarkers:1,mapObject:1,regionName:1}};$.fn.vectorMap=function(options){var map,methodName,map=this.children(".jvectormap-container").data("mapObject");if("addMap"===options)jvm.Map.maps[arguments[1]]=arguments[2];else{if(("set"===options||"get"===options)&&apiParams[options][arguments[1]])return methodName=arguments[1].charAt(0).toUpperCase()+arguments[1].substr(1),map[options+methodName].apply(map,Array.prototype.slice.call(arguments,2));options=options||{},options.container=this,map=new jvm.Map(options)}return this}}(jQuery),function(factory){"function"==typeof define&&define.amd?define(["jquery"],factory):"object"==typeof exports?module.exports=factory:factory(jQuery)}(function($){function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;if(event=$.event.fix(orgEvent),event.type="mousewheel","detail"in orgEvent&&(deltaY=-1*orgEvent.detail),"wheelDelta"in orgEvent&&(deltaY=orgEvent.wheelDelta),"wheelDeltaY"in orgEvent&&(deltaY=orgEvent.wheelDeltaY),"wheelDeltaX"in orgEvent&&(deltaX=-1*orgEvent.wheelDeltaX),"axis"in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS&&(deltaX=-1*deltaY,deltaY=0),delta=0===deltaY?deltaX:deltaY,"deltaY"in orgEvent&&(deltaY=-1*orgEvent.deltaY,delta=deltaY),"deltaX"in orgEvent&&(deltaX=orgEvent.deltaX,0===deltaY&&(delta=-1*deltaX)),0!==deltaY||0!==deltaX){if(1===orgEvent.deltaMode){var lineHeight=$.data(this,"mousewheel-line-height");delta*=lineHeight,deltaY*=lineHeight,deltaX*=lineHeight}else if(2===orgEvent.deltaMode){var pageHeight=$.data(this,"mousewheel-page-height");delta*=pageHeight,deltaY*=pageHeight,deltaX*=pageHeight}return absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX)),(!lowestDelta||lowestDelta>absDelta)&&(lowestDelta=absDelta,shouldAdjustOldDeltas(orgEvent,absDelta)&&(lowestDelta/=40)),shouldAdjustOldDeltas(orgEvent,absDelta)&&(delta/=40,deltaX/=40,deltaY/=40),delta=Math[delta>=1?"floor":"ceil"](delta/lowestDelta),deltaX=Math[deltaX>=1?"floor":"ceil"](deltaX/lowestDelta),deltaY=Math[deltaY>=1?"floor":"ceil"](deltaY/lowestDelta),event.deltaX=deltaX,event.deltaY=deltaY,event.deltaFactor=lowestDelta,event.deltaMode=0,args.unshift(event,delta,deltaX,deltaY),nullLowestDeltaTimeout&&clearTimeout(nullLowestDeltaTimeout),nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200),($.event.dispatch||$.event.handle).apply(this,args)}}function nullLowestDelta(){lowestDelta=null}function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&"mousewheel"===orgEvent.type&&absDelta%120===0}var nullLowestDeltaTimeout,lowestDelta,toFix=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],toBind="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],slice=Array.prototype.slice;if($.event.fixHooks)for(var i=toFix.length;i;)$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;var special=$.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener)for(var i=toBind.length;i;)this.addEventListener(toBind[--i],handler,!1);else this.onmousewheel=handler;$.data(this,"mousewheel-line-height",special.getLineHeight(this)),$.data(this,"mousewheel-page-height",special.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var i=toBind.length;i;)this.removeEventListener(toBind[--i],handler,!1);else this.onmousewheel=null},getLineHeight:function(elem){return parseInt($(elem)["offsetParent"in $.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(elem){return $(elem).height()},settings:{adjustOldDeltas:!0}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel")},unmousewheel:function(fn){return this.unbind("mousewheel",fn)}})});var jvm={inherits:function(child,parent){function temp(){}temp.prototype=parent.prototype,child.prototype=new temp,child.prototype.constructor=child,child.parentClass=parent},mixin:function(target,source){var prop;for(prop in source.prototype)source.prototype.hasOwnProperty(prop)&&(target.prototype[prop]=source.prototype[prop])},min:function(values){var i,min=Number.MAX_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]<min&&(min=values[i]);else for(i in values)values[i]<min&&(min=values[i]);return min},max:function(values){var i,max=Number.MIN_VALUE;if(values instanceof Array)for(i=0;i<values.length;i++)values[i]>max&&(max=values[i]);else for(i in values)values[i]>max&&(max=values[i]);return max},keys:function(object){var key,keys=[];for(key in object)keys.push(key);return keys},values:function(object){var key,i,values=[];for(i=0;i<arguments.length;i++){object=arguments[i];for(key in object)values.push(object[key])}return values},whenImageLoaded:function(url){var deferred=new jvm.$.Deferred,img=jvm.$("<img/>");return img.error(function(){deferred.reject()}).load(function(){deferred.resolve(img)}),img.attr("src",url),deferred},isImageUrl:function(s){return/\.\w{3,4}$/.test(s)}};jvm.$=jQuery,Array.prototype.indexOf||(Array.prototype.indexOf=function(searchElement,fromIndex){var k;if(null==this)throw new TypeError('"this" is null or not defined');var O=Object(this),len=O.length>>>0;if(0===len)return-1;var n=+fromIndex||0;if(1/0===Math.abs(n)&&(n=0),n>=len)return-1;for(k=Math.max(n>=0?n:len-Math.abs(n),0);len>k;){if(k in O&&O[k]===searchElement)return k;k++}return-1}),jvm.AbstractElement=function(name,config){this.node=this.createElement(name),this.name=name,this.properties={},config&&this.set(config)},jvm.AbstractElement.prototype.set=function(property,value){var key;if("object"==typeof property)for(key in property)this.properties[key]=property[key],this.applyAttr(key,property[key]);else this.properties[property]=value,this.applyAttr(property,value)},jvm.AbstractElement.prototype.get=function(property){return this.properties[property]},jvm.AbstractElement.prototype.applyAttr=function(property,value){this.node.setAttribute(property,value)},jvm.AbstractElement.prototype.remove=function(){jvm.$(this.node).remove()},jvm.AbstractCanvasElement=function(container,width,height){this.container=container,this.setSize(width,height),this.rootElement=new jvm[this.classPrefix+"GroupElement"],this.node.appendChild(this.rootElement.node),this.container.appendChild(this.node)},jvm.AbstractCanvasElement.prototype.add=function(element,group){group=group||this.rootElement,group.add(element),element.canvas=this},jvm.AbstractCanvasElement.prototype.addPath=function(config,style,group){var el=new jvm[this.classPrefix+"PathElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addCircle=function(config,style,group){var el=new jvm[this.classPrefix+"CircleElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addImage=function(config,style,group){var el=new jvm[this.classPrefix+"ImageElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addText=function(config,style,group){var el=new jvm[this.classPrefix+"TextElement"](config,style);return this.add(el,group),el},jvm.AbstractCanvasElement.prototype.addGroup=function(parentGroup){var el=new jvm[this.classPrefix+"GroupElement"];return parentGroup?parentGroup.node.appendChild(el.node):this.node.appendChild(el.node),el.canvas=this,el},jvm.AbstractShapeElement=function(name,config,style){this.style=style||{},this.style.current=this.style.current||{},this.isHovered=!1,this.isSelected=!1,this.updateStyle()},jvm.AbstractShapeElement.prototype.setStyle=function(property,value){var styles={};"object"==typeof property?styles=property:styles[property]=value,jvm.$.extend(this.style.current,styles),this.updateStyle()},jvm.AbstractShapeElement.prototype.updateStyle=function(){var attrs={};jvm.AbstractShapeElement.mergeStyles(attrs,this.style.initial),jvm.AbstractShapeElement.mergeStyles(attrs,this.style.current),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.hover),this.isSelected&&(jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selected),this.isHovered&&jvm.AbstractShapeElement.mergeStyles(attrs,this.style.selectedHover)),this.set(attrs)},jvm.AbstractShapeElement.mergeStyles=function(styles,newStyles){var key;newStyles=newStyles||{};for(key in newStyles)null===newStyles[key]?delete styles[key]:styles[key]=newStyles[key]},jvm.SVGElement=function(){jvm.SVGElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.SVGElement,jvm.AbstractElement),jvm.SVGElement.svgns="http://www.w3.org/2000/svg",jvm.SVGElement.prototype.createElement=function(tagName){return document.createElementNS(jvm.SVGElement.svgns,tagName)},jvm.SVGElement.prototype.addClass=function(className){this.node.setAttribute("class",className)},jvm.SVGElement.prototype.getElementCtr=function(ctr){return jvm["SVG"+ctr]},jvm.SVGElement.prototype.getBBox=function(){return this.node.getBBox()},jvm.SVGGroupElement=function(){jvm.SVGGroupElement.parentClass.call(this,"g")},jvm.inherits(jvm.SVGGroupElement,jvm.SVGElement),jvm.SVGGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.SVGCanvasElement=function(){this.classPrefix="SVG",jvm.SVGCanvasElement.parentClass.call(this,"svg"),this.defsElement=new jvm.SVGElement("defs"),this.node.appendChild(this.defsElement.node),jvm.AbstractCanvasElement.apply(this,arguments)},jvm.inherits(jvm.SVGCanvasElement,jvm.SVGElement),jvm.mixin(jvm.SVGCanvasElement,jvm.AbstractCanvasElement),jvm.SVGCanvasElement.prototype.setSize=function(width,height){this.width=width,this.height=height,this.node.setAttribute("width",width),this.node.setAttribute("height",height)},jvm.SVGCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.setAttribute("transform","scale("+scale+") translate("+transX+", "+transY+")")},jvm.SVGShapeElement=function(name,config){jvm.SVGShapeElement.parentClass.call(this,name,config),jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.SVGShapeElement,jvm.SVGElement),jvm.mixin(jvm.SVGShapeElement,jvm.AbstractShapeElement),jvm.SVGShapeElement.prototype.applyAttr=function(attr,value){var patternEl,imageEl,that=this;"fill"===attr&&jvm.isImageUrl(value)?jvm.SVGShapeElement.images[value]?this.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")"):jvm.whenImageLoaded(value).then(function(img){imageEl=new jvm.SVGElement("image"),imageEl.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),imageEl.applyAttr("x","0"),imageEl.applyAttr("y","0"),imageEl.applyAttr("width",img[0].width),imageEl.applyAttr("height",img[0].height),patternEl=new jvm.SVGElement("pattern"),patternEl.applyAttr("id","image"+jvm.SVGShapeElement.imageCounter),patternEl.applyAttr("x",0),patternEl.applyAttr("y",0),patternEl.applyAttr("width",img[0].width/2),patternEl.applyAttr("height",img[0].height/2),patternEl.applyAttr("viewBox","0 0 "+img[0].width+" "+img[0].height),patternEl.applyAttr("patternUnits","userSpaceOnUse"),patternEl.node.appendChild(imageEl.node),that.canvas.defsElement.node.appendChild(patternEl.node),jvm.SVGShapeElement.images[value]=jvm.SVGShapeElement.imageCounter++,that.applyAttr("fill","url(#image"+jvm.SVGShapeElement.images[value]+")")}):jvm.SVGShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGShapeElement.imageCounter=1,jvm.SVGShapeElement.images={},jvm.SVGPathElement=function(config,style){jvm.SVGPathElement.parentClass.call(this,"path",config,style),this.node.setAttribute("fill-rule","evenodd")},jvm.inherits(jvm.SVGPathElement,jvm.SVGShapeElement),jvm.SVGCircleElement=function(config,style){jvm.SVGCircleElement.parentClass.call(this,"circle",config,style)},jvm.inherits(jvm.SVGCircleElement,jvm.SVGShapeElement),jvm.SVGImageElement=function(config,style){jvm.SVGImageElement.parentClass.call(this,"image",config,style)},jvm.inherits(jvm.SVGImageElement,jvm.SVGShapeElement),jvm.SVGImageElement.prototype.applyAttr=function(attr,value){var that=this;"image"==attr?jvm.whenImageLoaded(value).then(function(img){that.node.setAttributeNS("http://www.w3.org/1999/xlink","href",value),that.width=img[0].width,that.height=img[0].height,that.applyAttr("width",that.width),that.applyAttr("height",that.height),that.applyAttr("x",that.cx-that.width/2),that.applyAttr("y",that.cy-that.height/2),jvm.$(that.node).trigger("imageloaded",[img])}):"cx"==attr?(this.cx=value,this.width&&this.applyAttr("x",value-this.width/2)):"cy"==attr?(this.cy=value,this.height&&this.applyAttr("y",value-this.height/2)):jvm.SVGImageElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.SVGTextElement=function(config,style){jvm.SVGTextElement.parentClass.call(this,"text",config,style)},jvm.inherits(jvm.SVGTextElement,jvm.SVGShapeElement),jvm.SVGTextElement.prototype.applyAttr=function(attr,value){"text"===attr?this.node.textContent=value:jvm.SVGTextElement.parentClass.prototype.applyAttr.apply(this,arguments)},jvm.VMLElement=function(){jvm.VMLElement.VMLInitialized||jvm.VMLElement.initializeVML(),jvm.VMLElement.parentClass.apply(this,arguments)},jvm.inherits(jvm.VMLElement,jvm.AbstractElement),jvm.VMLElement.VMLInitialized=!1,jvm.VMLElement.initializeVML=function(){try{document.namespaces.rvml||document.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<rvml:"+tagName+' class="rvml">')}}catch(e){jvm.VMLElement.prototype.createElement=function(tagName){return document.createElement("<"+tagName+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}document.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)"),jvm.VMLElement.VMLInitialized=!0},jvm.VMLElement.prototype.getElementCtr=function(ctr){return jvm["VML"+ctr]},jvm.VMLElement.prototype.addClass=function(className){jvm.$(this.node).addClass(className)},jvm.VMLElement.prototype.applyAttr=function(attr,value){this.node[attr]=value},jvm.VMLElement.prototype.getBBox=function(){var node=jvm.$(this.node);return{x:node.position().left/this.canvas.scale,y:node.position().top/this.canvas.scale,width:node.width()/this.canvas.scale,height:node.height()/this.canvas.scale}},jvm.VMLGroupElement=function(){jvm.VMLGroupElement.parentClass.call(this,"group"),this.node.style.left="0px",this.node.style.top="0px",this.node.coordorigin="0 0"},jvm.inherits(jvm.VMLGroupElement,jvm.VMLElement),jvm.VMLGroupElement.prototype.add=function(element){this.node.appendChild(element.node)},jvm.VMLCanvasElement=function(){this.classPrefix="VML",jvm.VMLCanvasElement.parentClass.call(this,"group"),jvm.AbstractCanvasElement.apply(this,arguments),this.node.style.position="absolute"},jvm.inherits(jvm.VMLCanvasElement,jvm.VMLElement),jvm.mixin(jvm.VMLCanvasElement,jvm.AbstractCanvasElement),jvm.VMLCanvasElement.prototype.setSize=function(width,height){var paths,groups,i,l;if(this.width=width,this.height=height,this.node.style.width=width+"px",this.node.style.height=height+"px",this.node.coordsize=width+" "+height,this.node.coordorigin="0 0",this.rootElement){for(paths=this.rootElement.node.getElementsByTagName("shape"),i=0,l=paths.length;l>i;i++)paths[i].coordsize=width+" "+height,paths[i].style.width=width+"px",paths[i].style.height=height+"px";for(groups=this.node.getElementsByTagName("group"),i=0,l=groups.length;l>i;i++)groups[i].coordsize=width+" "+height,groups[i].style.width=width+"px",groups[i].style.height=height+"px"}},jvm.VMLCanvasElement.prototype.applyTransformParams=function(scale,transX,transY){this.scale=scale,this.transX=transX,this.transY=transY,this.rootElement.node.coordorigin=this.width-transX-this.width/100+","+(this.height-transY-this.height/100),this.rootElement.node.coordsize=this.width/scale+","+this.height/scale},jvm.VMLShapeElement=function(name,config){jvm.VMLShapeElement.parentClass.call(this,name,config),this.fillElement=new jvm.VMLElement("fill"),this.strokeElement=new jvm.VMLElement("stroke"),this.node.appendChild(this.fillElement.node),this.node.appendChild(this.strokeElement.node),this.node.stroked=!1,jvm.AbstractShapeElement.apply(this,arguments)},jvm.inherits(jvm.VMLShapeElement,jvm.VMLElement),jvm.mixin(jvm.VMLShapeElement,jvm.AbstractShapeElement),jvm.VMLShapeElement.prototype.applyAttr=function(attr,value){switch(attr){case"fill":this.node.fillcolor=value;break;case"fill-opacity":this.fillElement.node.opacity=Math.round(100*value)+"%";break;case"stroke":this.node.stroked="none"===value?!1:!0,this.node.strokecolor=value;break;case"stroke-opacity":this.strokeElement.node.opacity=Math.round(100*value)+"%";break;case"stroke-width":this.node.stroked=0===parseInt(value,10)?!1:!0,this.node.strokeweight=value;break;case"d":this.node.path=jvm.VMLPathElement.pathSvgToVml(value);break;default:jvm.VMLShapeElement.parentClass.prototype.applyAttr.apply(this,arguments)}},jvm.VMLPathElement=function(config,style){var scale=new jvm.VMLElement("skew");jvm.VMLPathElement.parentClass.call(this,"shape",config,style),this.node.coordorigin="0 0",scale.node.on=!0,scale.node.matrix="0.01,0,0,0.01,0,0",scale.node.offset="0,0",this.node.appendChild(scale.node)},jvm.inherits(jvm.VMLPathElement,jvm.VMLShapeElement),jvm.VMLPathElement.prototype.applyAttr=function(attr,value){"d"===attr?this.node.path=jvm.VMLPathElement.pathSvgToVml(value):jvm.VMLShapeElement.prototype.applyAttr.call(this,attr,value)},jvm.VMLPathElement.pathSvgToVml=function(path){var ctrlx,ctrly,cx=0,cy=0;return path=path.replace(/(-?\d+)e(-?\d+)/g,"0"),path.replace(/([MmLlHhVvCcSs])\s*((?:-?\d*(?:\.\d+)?\s*,?\s*)+)/g,function(segment,letter,coords){coords=coords.replace(/(\d)-/g,"$1,-").replace(/^\s+/g,"").replace(/\s+$/g,"").replace(/\s+/g,",").split(","),coords[0]||coords.shift();for(var i=0,l=coords.length;l>i;i++)coords[i]=Math.round(100*coords[i]);switch(letter){case"m":return cx+=coords[0],cy+=coords[1],"t"+coords.join(",");case"M":return cx=coords[0],cy=coords[1],"m"+coords.join(",");case"l":return cx+=coords[0],cy+=coords[1],"r"+coords.join(",");case"L":return cx=coords[0],cy=coords[1],"l"+coords.join(",");case"h":return cx+=coords[0],"r"+coords[0]+",0";case"H":return cx=coords[0],"l"+cx+","+cy;case"v":return cy+=coords[0],"r0,"+coords[0];case"V":return cy=coords[0],"l"+cx+","+cy;case"c":return ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"C":return ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",");case"s":return coords.unshift(cy-ctrly),coords.unshift(cx-ctrlx),ctrlx=cx+coords[coords.length-4],ctrly=cy+coords[coords.length-3],cx+=coords[coords.length-2],cy+=coords[coords.length-1],"v"+coords.join(",");case"S":return coords.unshift(cy+cy-ctrly),coords.unshift(cx+cx-ctrlx),ctrlx=coords[coords.length-4],ctrly=coords[coords.length-3],cx=coords[coords.length-2],cy=coords[coords.length-1],"c"+coords.join(",")}return""}).replace(/z/g,"e")},jvm.VMLCircleElement=function(config,style){jvm.VMLCircleElement.parentClass.call(this,"oval",config,style)},jvm.inherits(jvm.VMLCircleElement,jvm.VMLShapeElement),jvm.VMLCircleElement.prototype.applyAttr=function(attr,value){switch(attr){case"r":this.node.style.width=2*value+"px",this.node.style.height=2*value+"px",this.applyAttr("cx",this.get("cx")||0),this.applyAttr("cy",this.get("cy")||0);break;case"cx":if(!value)return;this.node.style.left=value-(this.get("r")||0)+"px";break;case"cy":if(!value)return;this.node.style.top=value-(this.get("r")||0)+"px";break;default:jvm.VMLCircleElement.parentClass.prototype.applyAttr.call(this,attr,value)}},jvm.VectorCanvas=function(container,width,height){return this.mode=window.SVGAngle?"svg":"vml",this.impl="svg"==this.mode?new jvm.SVGCanvasElement(container,width,height):new jvm.VMLCanvasElement(container,width,height),this.impl.mode=this.mode,this.impl},jvm.SimpleScale=function(scale){this.scale=scale},jvm.SimpleScale.prototype.getValue=function(value){return value},jvm.OrdinalScale=function(scale){this.scale=scale},jvm.OrdinalScale.prototype.getValue=function(value){return this.scale[value]},jvm.OrdinalScale.prototype.getTicks=function(){var key,ticks=[];for(key in this.scale)ticks.push({label:key,value:this.scale[key]});return ticks},jvm.NumericScale=function(scale,normalizeFunction,minValue,maxValue){this.scale=[],normalizeFunction=normalizeFunction||"linear",scale&&this.setScale(scale),normalizeFunction&&this.setNormalizeFunction(normalizeFunction),"undefined"!=typeof minValue&&this.setMin(minValue),"undefined"!=typeof maxValue&&this.setMax(maxValue)},jvm.NumericScale.prototype={setMin:function(min){this.clearMinValue=min,this.minValue="function"==typeof this.normalize?this.normalize(min):min},setMax:function(max){this.clearMaxValue=max,this.maxValue="function"==typeof this.normalize?this.normalize(max):max},setScale:function(scale){var i;for(this.scale=[],i=0;i<scale.length;i++)this.scale[i]=[scale[i]]},setNormalizeFunction:function(f){"polynomial"===f?this.normalize=function(value){return Math.pow(value,.2)}:"linear"===f?delete this.normalize:this.normalize=f,this.setMin(this.clearMinValue),this.setMax(this.clearMaxValue)},getValue:function(value){var l,c,lengthes=[],fullLength=0,i=0;for("function"==typeof this.normalize&&(value=this.normalize(value)),i=0;i<this.scale.length-1;i++)l=this.vectorLength(this.vectorSubtract(this.scale[i+1],this.scale[i])),lengthes.push(l),fullLength+=l;for(c=(this.maxValue-this.minValue)/fullLength,i=0;i<lengthes.length;i++)lengthes[i]*=c;for(i=0,value-=this.minValue;value-lengthes[i]>=0;)value-=lengthes[i],i++;return value=this.vectorToNum(i==this.scale.length-1?this.scale[i]:this.vectorAdd(this.scale[i],this.vectorMult(this.vectorSubtract(this.scale[i+1],this.scale[i]),value/lengthes[i])))},vectorToNum:function(vector){var i,num=0;for(i=0;i<vector.length;i++)num+=Math.round(vector[i])*Math.pow(256,vector.length-i-1);return num},vectorSubtract:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]-vector2[i];return vector},vectorAdd:function(vector1,vector2){var i,vector=[];for(i=0;i<vector1.length;i++)vector[i]=vector1[i]+vector2[i];return vector},vectorMult:function(vector,num){var i,result=[];for(i=0;i<vector.length;i++)result[i]=vector[i]*num;return result},vectorLength:function(vector){var i,result=0;for(i=0;i<vector.length;i++)result+=vector[i]*vector[i];return Math.sqrt(result)},getTicks:function(){var tick,v,m=5,extent=[this.clearMinValue,this.clearMaxValue],span=extent[1]-extent[0],step=Math.pow(10,Math.floor(Math.log(span/m)/Math.LN10)),err=m/span*step,ticks=[];for(.15>=err?step*=10:.35>=err?step*=5:.75>=err&&(step*=2),extent[0]=Math.floor(extent[0]/step)*step,extent[1]=Math.ceil(extent[1]/step)*step,tick=extent[0];tick<=extent[1];)v=tick==extent[0]?this.clearMinValue:tick==extent[1]?this.clearMaxValue:tick,ticks.push({label:tick,value:this.getValue(v)}),tick+=step;return ticks}},jvm.ColorScale=function(){jvm.ColorScale.parentClass.apply(this,arguments)},jvm.inherits(jvm.ColorScale,jvm.NumericScale),jvm.ColorScale.prototype.setScale=function(scale){var i;for(i=0;i<scale.length;i++)this.scale[i]=jvm.ColorScale.rgbToArray(scale[i])},jvm.ColorScale.prototype.getValue=function(value){return jvm.ColorScale.numToRgb(jvm.ColorScale.parentClass.prototype.getValue.call(this,value))},jvm.ColorScale.arrayToRgb=function(ar){var d,i,rgb="#";for(i=0;i<ar.length;i++)d=ar[i].toString(16),rgb+=1==d.length?"0"+d:d;return rgb},jvm.ColorScale.numToRgb=function(num){for(num=num.toString(16);num.length<6;)num="0"+num;return"#"+num},jvm.ColorScale.rgbToArray=function(rgb){return rgb=rgb.substr(1),[parseInt(rgb.substr(0,2),16),parseInt(rgb.substr(2,2),16),parseInt(rgb.substr(4,2),16)]},jvm.Legend=function(params){this.params=params||{},this.map=this.params.map,this.series=this.params.series,this.body=jvm.$("<div/>"),this.body.addClass("jvectormap-legend"),this.params.cssClass&&this.body.addClass(this.params.cssClass),params.vertical?this.map.legendCntVertical.append(this.body):this.map.legendCntHorizontal.append(this.body),this.render()},jvm.Legend.prototype.render=function(){var i,tick,sample,label,ticks=this.series.scale.getTicks(),inner=jvm.$("<div/>").addClass("jvectormap-legend-inner");for(this.body.html(""),this.params.title&&this.body.append(jvm.$("<div/>").addClass("jvectormap-legend-title").html(this.params.title)),this.body.append(inner),i=0;i<ticks.length;i++){switch(tick=jvm.$("<div/>").addClass("jvectormap-legend-tick"),sample=jvm.$("<div/>").addClass("jvectormap-legend-tick-sample"),this.series.params.attribute){case"fill":jvm.isImageUrl(ticks[i].value)?sample.css("background","url("+ticks[i].value+")"):sample.css("background",ticks[i].value);break;case"stroke":sample.css("background",ticks[i].value);break;case"image":sample.css("background","url("+ticks[i].value+") no-repeat center center");break;case"r":jvm.$("<div/>").css({"border-radius":ticks[i].value,border:this.map.params.markerStyle.initial["stroke-width"]+"px "+this.map.params.markerStyle.initial.stroke+" solid",width:2*ticks[i].value+"px",height:2*ticks[i].value+"px",background:this.map.params.markerStyle.initial.fill}).appendTo(sample)}tick.append(sample),label=ticks[i].label,this.params.labelRender&&(label=this.params.labelRender(label)),tick.append(jvm.$("<div>"+label+" </div>").addClass("jvectormap-legend-tick-text")),inner.append(tick)}inner.append(jvm.$("<div/>").css("clear","both"))},jvm.DataSeries=function(params,elements,map){var scaleConstructor;params=params||{},params.attribute=params.attribute||"fill",this.elements=elements,this.params=params,this.map=map,params.attributes&&this.setAttributes(params.attributes),jvm.$.isArray(params.scale)?(scaleConstructor="fill"===params.attribute||"stroke"===params.attribute?jvm.ColorScale:jvm.NumericScale,this.scale=new scaleConstructor(params.scale,params.normalizeFunction,params.min,params.max)):this.scale=params.scale?new jvm.OrdinalScale(params.scale):new jvm.SimpleScale(params.scale),this.values=params.values||{},this.setValues(this.values),this.params.legend&&(this.legend=new jvm.Legend($.extend({map:this.map,series:this},this.params.legend)))},jvm.DataSeries.prototype={setAttributes:function(key,attr){var code,attrs=key;if("string"==typeof key)this.elements[key]&&this.elements[key].setStyle(this.params.attribute,attr);else for(code in attrs)this.elements[code]&&this.elements[code].element.setStyle(this.params.attribute,attrs[code])},setValues:function(values){var val,cc,max=-Number.MAX_VALUE,min=Number.MAX_VALUE,attrs={};if(this.scale instanceof jvm.OrdinalScale||this.scale instanceof jvm.SimpleScale)for(cc in values)attrs[cc]=values[cc]?this.scale.getValue(values[cc]):this.elements[cc].element.style.initial[this.params.attribute];else{if("undefined"==typeof this.params.min||"undefined"==typeof this.params.max)for(cc in values)val=parseFloat(values[cc]),val>max&&(max=val),min>val&&(min=val);"undefined"==typeof this.params.min?(this.scale.setMin(min),this.params.min=min):this.scale.setMin(this.params.min),"undefined"==typeof this.params.max?(this.scale.setMax(max),this.params.max=max):this.scale.setMax(this.params.max);for(cc in values)"indexOf"!=cc&&(val=parseFloat(values[cc]),attrs[cc]=isNaN(val)?this.elements[cc].element.style.initial[this.params.attribute]:this.scale.getValue(val))}this.setAttributes(attrs),jvm.$.extend(this.values,values)},clear:function(){var key,attrs={};for(key in this.values)this.elements[key]&&(attrs[key]=this.elements[key].element.shape.style.initial[this.params.attribute]);this.setAttributes(attrs),this.values={}},setScale:function(scale){this.scale.setScale(scale),this.values&&this.setValues(this.values)},setNormalizeFunction:function(f){this.scale.setNormalizeFunction(f),this.values&&this.setValues(this.values)}},jvm.Proj={degRad:180/Math.PI,radDeg:Math.PI/180,radius:6381372,sgn:function(n){return n>0?1:0>n?-1:n},mill:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan((45+.4*lat)*this.radDeg))/.8}},mill_inv:function(x,y,c){return{lat:(2.5*Math.atan(Math.exp(.8*y/this.radius))-5*Math.PI/8)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},merc:function(lat,lng,c){return{x:this.radius*(lng-c)*this.radDeg,y:-this.radius*Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))}},merc_inv:function(x,y,c){return{lat:(2*Math.atan(Math.exp(y/this.radius))-Math.PI/2)*this.degRad,lng:(c*this.radDeg+x/this.radius)*this.degRad}},aea:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,fi=lat*this.radDeg,lambda=lng*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),theta=n*(lambda-lambda0),ro=Math.sqrt(C-2*n*Math.sin(fi))/n,ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n;return{x:ro*Math.sin(theta)*this.radius,y:-(ro0-ro*Math.cos(theta))*this.radius}},aea_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=29.5*this.radDeg,fi2=45.5*this.radDeg,n=(Math.sin(fi1)+Math.sin(fi2))/2,C=Math.cos(fi1)*Math.cos(fi1)+2*n*Math.sin(fi1),ro0=Math.sqrt(C-2*n*Math.sin(fi0))/n,ro=Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:Math.asin((C-ro*ro*n*n)/(2*n))*this.degRad,lng:(lambda0+theta/n)*this.degRad}},lcc:function(lat,lng,c){var fi0=0,lambda0=c*this.radDeg,lambda=lng*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,fi=lat*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro=F*Math.pow(1/Math.tan(Math.PI/4+fi/2),n),ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n);return{x:ro*Math.sin(n*(lambda-lambda0))*this.radius,y:-(ro0-ro*Math.cos(n*(lambda-lambda0)))*this.radius}},lcc_inv:function(xCoord,yCoord,c){var x=xCoord/this.radius,y=yCoord/this.radius,fi0=0,lambda0=c*this.radDeg,fi1=33*this.radDeg,fi2=45*this.radDeg,n=Math.log(Math.cos(fi1)*(1/Math.cos(fi2)))/Math.log(Math.tan(Math.PI/4+fi2/2)*(1/Math.tan(Math.PI/4+fi1/2))),F=Math.cos(fi1)*Math.pow(Math.tan(Math.PI/4+fi1/2),n)/n,ro0=F*Math.pow(1/Math.tan(Math.PI/4+fi0/2),n),ro=this.sgn(n)*Math.sqrt(x*x+(ro0-y)*(ro0-y)),theta=Math.atan(x/(ro0-y));return{lat:(2*Math.atan(Math.pow(F/ro,1/n))-Math.PI/2)*this.degRad,lng:(lambda0+theta/n)*this.degRad}}},jvm.MapObject=function(){},jvm.MapObject.prototype.getLabelText=function(key){var text;return text=this.config.label?"function"==typeof this.config.label.render?this.config.label.render(key):key:null},jvm.MapObject.prototype.getLabelOffsets=function(key){var offsets;return this.config.label&&("function"==typeof this.config.label.offsets?offsets=this.config.label.offsets(key):"object"==typeof this.config.label.offsets&&(offsets=this.config.label.offsets[key])),offsets||[0,0]},jvm.MapObject.prototype.setHovered=function(isHovered){this.isHovered!==isHovered&&(this.isHovered=isHovered,this.shape.isHovered=isHovered,this.shape.updateStyle(),this.label&&(this.label.isHovered=isHovered,this.label.updateStyle()))},jvm.MapObject.prototype.setSelected=function(isSelected){this.isSelected!==isSelected&&(this.isSelected=isSelected,this.shape.isSelected=isSelected,this.shape.updateStyle(),this.label&&(this.label.isSelected=isSelected,this.label.updateStyle()),jvm.$(this.shape).trigger("selected",[isSelected]))},jvm.MapObject.prototype.setStyle=function(){this.shape.setStyle.apply(this.shape,arguments)},jvm.MapObject.prototype.remove=function(){this.shape.remove(),this.label&&this.label.remove()},jvm.Region=function(config){var bbox,text,offsets;this.config=config,this.map=this.config.map,this.shape=config.canvas.addPath({d:config.path,"data-code":config.code},config.style,config.canvas.rootElement),this.shape.addClass("jvectormap-region jvectormap-element"),bbox=this.shape.getBBox(),text=this.getLabelText(config.code),this.config.label&&text&&(offsets=this.getLabelOffsets(config.code),this.labelX=bbox.x+bbox.width/2+offsets[0],this.labelY=bbox.y+bbox.height/2+offsets[1],this.label=config.canvas.addText({text:text,"text-anchor":"middle","alignment-baseline":"central",x:this.labelX,y:this.labelY,"data-code":config.code},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-region jvectormap-element"))
},jvm.inherits(jvm.Region,jvm.MapObject),jvm.Region.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.map.transX*this.map.scale,y:this.labelY*this.map.scale+this.map.transY*this.map.scale})},jvm.Marker=function(config){var text;this.config=config,this.map=this.config.map,this.isImage=!!this.config.style.initial.image,this.createShape(),text=this.getLabelText(config.index),this.config.label&&text&&(this.offsets=this.getLabelOffsets(config.index),this.labelX=config.cx/this.map.scale-this.map.transX,this.labelY=config.cy/this.map.scale-this.map.transY,this.label=config.canvas.addText({text:text,"data-index":config.index,dy:"0.6ex",x:this.labelX,y:this.labelY},config.labelStyle,config.labelsGroup),this.label.addClass("jvectormap-marker jvectormap-element"))},jvm.inherits(jvm.Marker,jvm.MapObject),jvm.Marker.prototype.createShape=function(){var that=this;this.shape&&this.shape.remove(),this.shape=this.config.canvas[this.isImage?"addImage":"addCircle"]({"data-index":this.config.index,cx:this.config.cx,cy:this.config.cy},this.config.style,this.config.group),this.shape.addClass("jvectormap-marker jvectormap-element"),this.isImage&&jvm.$(this.shape.node).on("imageloaded",function(){that.updateLabelPosition()})},jvm.Marker.prototype.updateLabelPosition=function(){this.label&&this.label.set({x:this.labelX*this.map.scale+this.offsets[0]+this.map.transX*this.map.scale+5+(this.isImage?(this.shape.width||0)/2:this.shape.properties.r),y:this.labelY*this.map.scale+this.map.transY*this.map.scale+this.offsets[1]})},jvm.Marker.prototype.setStyle=function(property){var isImage;jvm.Marker.parentClass.prototype.setStyle.apply(this,arguments),"r"===property&&this.updateLabelPosition(),isImage=!!this.shape.get("image"),isImage!=this.isImage&&(this.isImage=isImage,this.config.style=jvm.$.extend(!0,{},this.shape.style),this.createShape())},jvm.Map=function(params){var e,map=this;if(this.params=jvm.$.extend(!0,{},jvm.Map.defaultParams,params),!jvm.Map.maps[this.params.map])throw new Error("Attempt to use map which was not loaded: "+this.params.map);this.mapData=jvm.Map.maps[this.params.map],this.markers={},this.regions={},this.regionsColors={},this.regionsData={},this.container=jvm.$("<div>").addClass("jvectormap-container"),this.params.container&&this.params.container.append(this.container),this.container.data("mapObject",this),this.defaultWidth=this.mapData.width,this.defaultHeight=this.mapData.height,this.setBackgroundColor(this.params.backgroundColor),this.onResize=function(){map.updateSize()},jvm.$(window).resize(this.onResize);for(e in jvm.Map.apiEvents)this.params[e]&&this.container.bind(jvm.Map.apiEvents[e]+".jvectormap",this.params[e]);this.canvas=new jvm.VectorCanvas(this.container[0],this.width,this.height),this.params.bindTouchEvents&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch?this.bindContainerTouchEvents():window.MSGesture&&this.bindContainerPointerEvents()),this.bindContainerEvents(),this.bindElementEvents(),this.createTip(),this.params.zoomButtons&&this.bindZoomButtons(),this.createRegions(),this.createMarkers(this.params.markers||{}),this.updateSize(),this.params.focusOn&&("string"==typeof this.params.focusOn?this.params.focusOn={region:this.params.focusOn}:jvm.$.isArray(this.params.focusOn)&&(this.params.focusOn={regions:this.params.focusOn}),this.setFocus(this.params.focusOn)),this.params.selectedRegions&&this.setSelectedRegions(this.params.selectedRegions),this.params.selectedMarkers&&this.setSelectedMarkers(this.params.selectedMarkers),this.legendCntHorizontal=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-h"),this.legendCntVertical=jvm.$("<div/>").addClass("jvectormap-legend-cnt jvectormap-legend-cnt-v"),this.container.append(this.legendCntHorizontal),this.container.append(this.legendCntVertical),this.params.series&&this.createSeries()},jvm.Map.prototype={transX:0,transY:0,scale:1,baseTransX:0,baseTransY:0,baseScale:1,width:0,height:0,setBackgroundColor:function(backgroundColor){this.container.css("background-color",backgroundColor)},resize:function(){var curBaseScale=this.baseScale;this.width/this.height>this.defaultWidth/this.defaultHeight?(this.baseScale=this.height/this.defaultHeight,this.baseTransX=Math.abs(this.width-this.defaultWidth*this.baseScale)/(2*this.baseScale)):(this.baseScale=this.width/this.defaultWidth,this.baseTransY=Math.abs(this.height-this.defaultHeight*this.baseScale)/(2*this.baseScale)),this.scale*=this.baseScale/curBaseScale,this.transX*=this.baseScale/curBaseScale,this.transY*=this.baseScale/curBaseScale},updateSize:function(){this.width=this.container.width(),this.height=this.container.height(),this.resize(),this.canvas.setSize(this.width,this.height),this.applyTransform()},reset:function(){var key,i;for(key in this.series)for(i=0;i<this.series[key].length;i++)this.series[key][i].clear();this.scale=this.baseScale,this.transX=this.baseTransX,this.transY=this.baseTransY,this.applyTransform()},applyTransform:function(){var maxTransX,maxTransY,minTransX,minTransY;this.defaultWidth*this.scale<=this.width?(maxTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale),minTransX=(this.width-this.defaultWidth*this.scale)/(2*this.scale)):(maxTransX=0,minTransX=(this.width-this.defaultWidth*this.scale)/this.scale),this.defaultHeight*this.scale<=this.height?(maxTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale),minTransY=(this.height-this.defaultHeight*this.scale)/(2*this.scale)):(maxTransY=0,minTransY=(this.height-this.defaultHeight*this.scale)/this.scale),this.transY>maxTransY?this.transY=maxTransY:this.transY<minTransY&&(this.transY=minTransY),this.transX>maxTransX?this.transX=maxTransX:this.transX<minTransX&&(this.transX=minTransX),this.canvas.applyTransformParams(this.scale,this.transX,this.transY),this.markers&&this.repositionMarkers(),this.repositionLabels(),this.container.trigger("viewportChange",[this.scale/this.baseScale,this.transX,this.transY])},bindContainerEvents:function(){var oldPageX,oldPageY,mouseDown=!1,map=this;this.params.panOnDrag&&(this.container.mousemove(function(e){return mouseDown&&(map.transX-=(oldPageX-e.pageX)/map.scale,map.transY-=(oldPageY-e.pageY)/map.scale,map.applyTransform(),oldPageX=e.pageX,oldPageY=e.pageY),!1}).mousedown(function(e){return mouseDown=!0,oldPageX=e.pageX,oldPageY=e.pageY,!1}),this.onContainerMouseUp=function(){mouseDown=!1},jvm.$("body").mouseup(this.onContainerMouseUp)),this.params.zoomOnScroll&&this.container.mousewheel(function(event){var offset=jvm.$(map.container).offset(),centerX=event.pageX-offset.left,centerY=event.pageY-offset.top,zoomStep=Math.pow(1+map.params.zoomOnScrollSpeed/1e3,event.deltaFactor*event.deltaY);map.tip.hide(),map.setScale(map.scale*zoomStep,centerX,centerY),event.preventDefault()})},bindContainerTouchEvents:function(){var touchStartScale,touchStartDistance,touchX,touchY,centerTouchX,centerTouchY,lastTouchesLength,map=this,handleTouchEvent=function(e){var offset,scale,transXOld,transYOld,touches=e.originalEvent.touches;"touchstart"==e.type&&(lastTouchesLength=0),1==touches.length?(1==lastTouchesLength&&(transXOld=map.transX,transYOld=map.transY,map.transX-=(touchX-touches[0].pageX)/map.scale,map.transY-=(touchY-touches[0].pageY)/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),touchX=touches[0].pageX,touchY=touches[0].pageY):2==touches.length&&(2==lastTouchesLength?(scale=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2))/touchStartDistance,map.setScale(touchStartScale*scale,centerTouchX,centerTouchY),map.tip.hide(),e.preventDefault()):(offset=jvm.$(map.container).offset(),centerTouchX=touches[0].pageX>touches[1].pageX?touches[1].pageX+(touches[0].pageX-touches[1].pageX)/2:touches[0].pageX+(touches[1].pageX-touches[0].pageX)/2,centerTouchY=touches[0].pageY>touches[1].pageY?touches[1].pageY+(touches[0].pageY-touches[1].pageY)/2:touches[0].pageY+(touches[1].pageY-touches[0].pageY)/2,centerTouchX-=offset.left,centerTouchY-=offset.top,touchStartScale=map.scale,touchStartDistance=Math.sqrt(Math.pow(touches[0].pageX-touches[1].pageX,2)+Math.pow(touches[0].pageY-touches[1].pageY,2)))),lastTouchesLength=touches.length};jvm.$(this.container).bind("touchstart",handleTouchEvent),jvm.$(this.container).bind("touchmove",handleTouchEvent)},bindContainerPointerEvents:function(){var map=this,gesture=new MSGesture,element=this.container[0],handlePointerDownEvent=function(e){gesture.addPointer(e.pointerId)},handleGestureEvent=function(e){var transXOld,transYOld;(0!=e.translationX||0!=e.translationY)&&(transXOld=map.transX,transYOld=map.transY,map.transX+=e.translationX/map.scale,map.transY+=e.translationY/map.scale,map.applyTransform(),map.tip.hide(),(transXOld!=map.transX||transYOld!=map.transY)&&e.preventDefault()),1!=e.scale&&(map.setScale(map.scale*e.scale,e.offsetX,e.offsetY),map.tip.hide(),e.preventDefault())};gesture.target=element,element.addEventListener("MSGestureChange",handleGestureEvent,!1),element.addEventListener("pointerdown",handlePointerDownEvent,!1)},bindElementEvents:function(){var pageX,pageY,mouseMoved,map=this;this.container.mousemove(function(e){Math.abs(pageX-e.pageX)+Math.abs(pageY-e.pageY)>2&&(mouseMoved=!0)}),this.container.delegate("[class~='jvectormap-element']","mouseover mouseout",function(e){var baseVal=jvm.$(this).attr("class").baseVal||jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),element="region"==type?map.regions[code].element:map.markers[code].element,tipText="region"==type?map.mapData.paths[code].name:map.markers[code].config.name||"",tipShowEvent=jvm.$.Event(type+"TipShow.jvectormap"),overEvent=jvm.$.Event(type+"Over.jvectormap");"mouseover"==e.type?(map.container.trigger(overEvent,[code]),overEvent.isDefaultPrevented()||element.setHovered(!0),map.tip.text(tipText),map.container.trigger(tipShowEvent,[map.tip,code]),tipShowEvent.isDefaultPrevented()||(map.tip.show(),map.tipWidth=map.tip.width(),map.tipHeight=map.tip.height())):(element.setHovered(!1),map.tip.hide(),map.container.trigger(type+"Out.jvectormap",[code]))}),this.container.delegate("[class~='jvectormap-element']","mousedown",function(e){pageX=e.pageX,pageY=e.pageY,mouseMoved=!1}),this.container.delegate("[class~='jvectormap-element']","mouseup",function(){var baseVal=jvm.$(this).attr("class").baseVal?jvm.$(this).attr("class").baseVal:jvm.$(this).attr("class"),type=-1===baseVal.indexOf("jvectormap-region")?"marker":"region",code=jvm.$(this).attr("region"==type?"data-code":"data-index"),clickEvent=jvm.$.Event(type+"Click.jvectormap"),element="region"==type?map.regions[code].element:map.markers[code].element;mouseMoved||(map.container.trigger(clickEvent,[code]),("region"===type&&map.params.regionsSelectable||"marker"===type&&map.params.markersSelectable)&&(clickEvent.isDefaultPrevented()||(map.params[type+"sSelectableOne"]&&map.clearSelected(type+"s"),element.setSelected(!element.isSelected))))})},bindZoomButtons:function(){var map=this;jvm.$("<div/>").addClass("jvectormap-zoomin").text("+").appendTo(this.container),jvm.$("<div/>").addClass("jvectormap-zoomout").html("&#x2212;").appendTo(this.container),this.container.find(".jvectormap-zoomin").click(function(){map.setScale(map.scale*map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)}),this.container.find(".jvectormap-zoomout").click(function(){map.setScale(map.scale/map.params.zoomStep,map.width/2,map.height/2,!1,map.params.zoomAnimate)})},createTip:function(){var map=this;this.tip=jvm.$("<div/>").addClass("jvectormap-tip").appendTo(jvm.$("body")),this.container.mousemove(function(e){var left=e.pageX-15-map.tipWidth,top=e.pageY-15-map.tipHeight;5>left&&(left=e.pageX+15),5>top&&(top=e.pageY+15),map.tip.css({left:left,top:top})})},setScale:function(scale,anchorX,anchorY,isCentered,animate){var interval,scaleStart,scaleDiff,transXStart,transXDiff,transYStart,transYDiff,transX,transY,viewportChangeEvent=jvm.$.Event("zoom.jvectormap"),that=this,i=0,count=Math.abs(Math.round(60*(scale-this.scale)/Math.max(scale,this.scale))),deferred=new jvm.$.Deferred;return scale>this.params.zoomMax*this.baseScale?scale=this.params.zoomMax*this.baseScale:scale<this.params.zoomMin*this.baseScale&&(scale=this.params.zoomMin*this.baseScale),"undefined"!=typeof anchorX&&"undefined"!=typeof anchorY&&(zoomStep=scale/this.scale,isCentered?(transX=anchorX+this.defaultWidth*(this.width/(this.defaultWidth*scale))/2,transY=anchorY+this.defaultHeight*(this.height/(this.defaultHeight*scale))/2):(transX=this.transX-(zoomStep-1)/scale*anchorX,transY=this.transY-(zoomStep-1)/scale*anchorY)),animate&&count>0?(scaleStart=this.scale,scaleDiff=(scale-scaleStart)/count,transXStart=this.transX*this.scale,transYStart=this.transY*this.scale,transXDiff=(transX*scale-transXStart)/count,transYDiff=(transY*scale-transYStart)/count,interval=setInterval(function(){i+=1,that.scale=scaleStart+scaleDiff*i,that.transX=(transXStart+transXDiff*i)/that.scale,that.transY=(transYStart+transYDiff*i)/that.scale,that.applyTransform(),i==count&&(clearInterval(interval),that.container.trigger(viewportChangeEvent,[scale/that.baseScale]),deferred.resolve())},10)):(this.transX=transX,this.transY=transY,this.scale=scale,this.applyTransform(),this.container.trigger(viewportChangeEvent,[scale/this.baseScale]),deferred.resolve()),deferred},setFocus:function(config){var bbox,itemBbox,newBbox,codes,i,point;if(config=config||{},config.region?codes=[config.region]:config.regions&&(codes=config.regions),codes){for(i=0;i<codes.length;i++)this.regions[codes[i]]&&(itemBbox=this.regions[codes[i]].element.shape.getBBox(),itemBbox&&("undefined"==typeof bbox?bbox=itemBbox:(newBbox={x:Math.min(bbox.x,itemBbox.x),y:Math.min(bbox.y,itemBbox.y),width:Math.max(bbox.x+bbox.width,itemBbox.x+itemBbox.width)-Math.min(bbox.x,itemBbox.x),height:Math.max(bbox.y+bbox.height,itemBbox.y+itemBbox.height)-Math.min(bbox.y,itemBbox.y)},bbox=newBbox)));return this.setScale(Math.min(this.width/bbox.width,this.height/bbox.height),-(bbox.x+bbox.width/2),-(bbox.y+bbox.height/2),!0,config.animate)}return config.lat&&config.lng?(point=this.latLngToPoint(config.lat,config.lng),config.x=this.transX-point.x/this.scale,config.y=this.transY-point.y/this.scale):config.x&&config.y&&(config.x*=-this.defaultWidth,config.y*=-this.defaultHeight),this.setScale(config.scale*this.baseScale,config.x,config.y,!0,config.animate)},getSelected:function(type){var key,selected=[];for(key in this[type])this[type][key].element.isSelected&&selected.push(key);return selected},getSelectedRegions:function(){return this.getSelected("regions")},getSelectedMarkers:function(){return this.getSelected("markers")},setSelected:function(type,keys){var i;if("object"!=typeof keys&&(keys=[keys]),jvm.$.isArray(keys))for(i=0;i<keys.length;i++)this[type][keys[i]].element.setSelected(!0);else for(i in keys)this[type][i].element.setSelected(!!keys[i])},setSelectedRegions:function(keys){this.setSelected("regions",keys)},setSelectedMarkers:function(keys){this.setSelected("markers",keys)},clearSelected:function(type){var i,select={},selected=this.getSelected(type);for(i=0;i<selected.length;i++)select[selected[i]]=!1;this.setSelected(type,select)},clearSelectedRegions:function(){this.clearSelected("regions")},clearSelectedMarkers:function(){this.clearSelected("markers")},getMapObject:function(){return this},getRegionName:function(code){return this.mapData.paths[code].name},createRegions:function(){var key,region,map=this;this.regionLabelsGroup=this.regionLabelsGroup||this.canvas.addGroup();for(key in this.mapData.paths)region=new jvm.Region({map:this,path:this.mapData.paths[key].path,code:key,style:jvm.$.extend(!0,{},this.params.regionStyle),labelStyle:jvm.$.extend(!0,{},this.params.regionLabelStyle),canvas:this.canvas,labelsGroup:this.regionLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.regions:null}),jvm.$(region.shape).bind("selected",function(e,isSelected){map.container.trigger("regionSelected.jvectormap",[jvm.$(this.node).attr("data-code"),isSelected,map.getSelectedRegions()])}),this.regions[key]={element:region,config:this.mapData.paths[key]}},createMarkers:function(markers){var i,marker,point,markerConfig,markersArray,map=this;if(this.markersGroup=this.markersGroup||this.canvas.addGroup(),this.markerLabelsGroup=this.markerLabelsGroup||this.canvas.addGroup(),jvm.$.isArray(markers))for(markersArray=markers.slice(),markers={},i=0;i<markersArray.length;i++)markers[i]=markersArray[i];for(i in markers)markerConfig=markers[i]instanceof Array?{latLng:markers[i]}:markers[i],point=this.getMarkerPosition(markerConfig),point!==!1&&(marker=new jvm.Marker({map:this,style:jvm.$.extend(!0,{},this.params.markerStyle,{initial:markerConfig.style||{}}),labelStyle:jvm.$.extend(!0,{},this.params.markerLabelStyle),index:i,cx:point.x,cy:point.y,group:this.markersGroup,canvas:this.canvas,labelsGroup:this.markerLabelsGroup,label:"vml"!=this.canvas.mode?this.params.labels&&this.params.labels.markers:null}),jvm.$(marker.shape).bind("selected",function(e,isSelected){map.container.trigger("markerSelected.jvectormap",[jvm.$(this.node).attr("data-index"),isSelected,map.getSelectedMarkers()])}),this.markers[i]&&this.removeMarkers([i]),this.markers[i]={element:marker,config:markerConfig})},repositionMarkers:function(){var i,point;for(i in this.markers)point=this.getMarkerPosition(this.markers[i].config),point!==!1&&this.markers[i].element.setStyle({cx:point.x,cy:point.y})},repositionLabels:function(){var key;for(key in this.regions)this.regions[key].element.updateLabelPosition();for(key in this.markers)this.markers[key].element.updateLabelPosition()},getMarkerPosition:function(markerConfig){return jvm.Map.maps[this.params.map].projection?this.latLngToPoint.apply(this,markerConfig.latLng||[0,0]):{x:markerConfig.coords[0]*this.scale+this.transX*this.scale,y:markerConfig.coords[1]*this.scale+this.transY*this.scale}},addMarker:function(key,marker,seriesData){var values,i,markers={},data=[],seriesData=seriesData||[];for(markers[key]=marker,i=0;i<seriesData.length;i++)values={},"undefined"!=typeof seriesData[i]&&(values[key]=seriesData[i]),data.push(values);this.addMarkers(markers,data)},addMarkers:function(markers,seriesData){var i;for(seriesData=seriesData||[],this.createMarkers(markers),i=0;i<seriesData.length;i++)this.series.markers[i].setValues(seriesData[i]||{})},removeMarkers:function(markers){var i;for(i=0;i<markers.length;i++)this.markers[markers[i]].element.remove(),delete this.markers[markers[i]]},removeAllMarkers:function(){var i,markers=[];for(i in this.markers)markers.push(i);this.removeMarkers(markers)},latLngToPoint:function(lat,lng){var point,inset,bbox,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian;return-180+centralMeridian>lng&&(lng+=360),point=jvm.Proj[proj.type](lat,lng,centralMeridian),inset=this.getInsetForPoint(point.x,point.y),inset?(bbox=inset.bbox,point.x=(point.x-bbox[0].x)/(bbox[1].x-bbox[0].x)*inset.width*this.scale,point.y=(point.y-bbox[0].y)/(bbox[1].y-bbox[0].y)*inset.height*this.scale,{x:point.x+this.transX*this.scale+inset.left*this.scale,y:point.y+this.transY*this.scale+inset.top*this.scale}):!1},pointToLatLng:function(x,y){var i,inset,bbox,nx,ny,proj=jvm.Map.maps[this.params.map].projection,centralMeridian=proj.centralMeridian,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(inset=insets[i],bbox=inset.bbox,nx=x-(this.transX*this.scale+inset.left*this.scale),ny=y-(this.transY*this.scale+inset.top*this.scale),nx=nx/(inset.width*this.scale)*(bbox[1].x-bbox[0].x)+bbox[0].x,ny=ny/(inset.height*this.scale)*(bbox[1].y-bbox[0].y)+bbox[0].y,nx>bbox[0].x&&nx<bbox[1].x&&ny>bbox[0].y&&ny<bbox[1].y)return jvm.Proj[proj.type+"_inv"](nx,-ny,centralMeridian);return!1},getInsetForPoint:function(x,y){var i,bbox,insets=jvm.Map.maps[this.params.map].insets;for(i=0;i<insets.length;i++)if(bbox=insets[i].bbox,x>bbox[0].x&&x<bbox[1].x&&y>bbox[0].y&&y<bbox[1].y)return insets[i]},createSeries:function(){var i,key;this.series={markers:[],regions:[]};for(key in this.params.series)for(i=0;i<this.params.series[key].length;i++)this.series[key][i]=new jvm.DataSeries(this.params.series[key][i],this[key],this)},remove:function(){this.tip.remove(),this.container.remove(),jvm.$(window).unbind("resize",this.onResize),jvm.$("body").unbind("mouseup",this.onContainerMouseUp)}},jvm.Map.maps={},jvm.Map.defaultParams={map:"world_mill_en",backgroundColor:"#505050",zoomButtons:!0,zoomOnScroll:!0,zoomOnScrollSpeed:3,panOnDrag:!0,zoomMax:8,zoomMin:1,zoomStep:1.6,zoomAnimate:!0,regionsSelectable:!1,markersSelectable:!1,bindTouchEvents:!0,regionStyle:{initial:{fill:"white","fill-opacity":1,stroke:"none","stroke-width":0,"stroke-opacity":1},hover:{"fill-opacity":.8,cursor:"pointer"},selected:{fill:"yellow"},selectedHover:{}},regionLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}},markerStyle:{initial:{fill:"grey",stroke:"#505050","fill-opacity":1,"stroke-width":1,"stroke-opacity":1,r:5},hover:{stroke:"black","stroke-width":2,cursor:"pointer"},selected:{fill:"blue"},selectedHover:{}},markerLabelStyle:{initial:{"font-family":"Verdana","font-size":"12","font-weight":"bold",cursor:"default",fill:"black"},hover:{cursor:"pointer"}}},jvm.Map.apiEvents={onRegionTipShow:"regionTipShow",onRegionOver:"regionOver",onRegionOut:"regionOut",onRegionClick:"regionClick",onRegionSelected:"regionSelected",onMarkerTipShow:"markerTipShow",onMarkerOver:"markerOver",onMarkerOut:"markerOut",onMarkerClick:"markerClick",onMarkerSelected:"markerSelected",onViewportChange:"viewportChange"},jvm.MultiMap=function(params){var that=this;this.maps={},this.params=jvm.$.extend(!0,{},jvm.MultiMap.defaultParams,params),this.params.maxLevel=this.params.maxLevel||Number.MAX_VALUE,this.params.main=this.params.main||{},this.params.main.multiMapLevel=0,this.history=[this.addMap(this.params.main.map,this.params.main)],this.defaultProjection=this.history[0].mapData.projection.type,this.mapsLoaded={},this.params.container.css({position:"relative"}),this.backButton=jvm.$("<div/>").addClass("jvectormap-goback").text("Back").appendTo(this.params.container),this.backButton.hide(),this.backButton.click(function(){that.goBack()}),this.spinner=jvm.$("<div/>").addClass("jvectormap-spinner").appendTo(this.params.container),this.spinner.hide()},jvm.MultiMap.prototype={addMap:function(name,config){var cnt=jvm.$("<div/>").css({width:"100%",height:"100%"});return this.params.container.append(cnt),this.maps[name]=new jvm.Map(jvm.$.extend(config,{container:cnt})),this.params.maxLevel>config.multiMapLevel&&this.maps[name].container.on("regionClick.jvectormap",{scope:this},function(e,code){var multimap=e.data.scope,mapName=multimap.params.mapNameByCode(code,multimap);multimap.drillDownPromise&&"pending"===multimap.drillDownPromise.state()||multimap.drillDown(mapName,code)}),this.maps[name]},downloadMap:function(code){var that=this,deferred=jvm.$.Deferred();return this.mapsLoaded[code]?deferred.resolve():jvm.$.get(this.params.mapUrlByCode(code,this)).then(function(){that.mapsLoaded[code]=!0,deferred.resolve()},function(){deferred.reject()}),deferred},drillDown:function(name,code){var currentMap=this.history[this.history.length-1],that=this,focusPromise=currentMap.setFocus({region:code,animate:!0}),downloadPromise=this.downloadMap(code);focusPromise.then(function(){"pending"===downloadPromise.state()&&that.spinner.show()}),downloadPromise.always(function(){that.spinner.hide()}),this.drillDownPromise=jvm.$.when(downloadPromise,focusPromise),this.drillDownPromise.then(function(){currentMap.params.container.hide(),that.maps[name]?that.maps[name].params.container.show():that.addMap(name,{map:name,multiMapLevel:currentMap.params.multiMapLevel+1}),that.history.push(that.maps[name]),that.backButton.show()})},goBack:function(){var currentMap=this.history.pop(),prevMap=this.history[this.history.length-1],that=this;currentMap.setFocus({scale:1,x:.5,y:.5,animate:!0}).then(function(){currentMap.params.container.hide(),prevMap.params.container.show(),prevMap.updateSize(),1===that.history.length&&that.backButton.hide(),prevMap.setFocus({scale:1,x:.5,y:.5,animate:!0})})}},jvm.MultiMap.defaultParams={mapNameByCode:function(code,multiMap){return code.toLowerCase()+"_"+multiMap.defaultProjection+"_en"},mapUrlByCode:function(code,multiMap){return"jquery-jvectormap-data-"+code.toLowerCase()+"-"+multiMap.defaultProjection+"-en.js"}};
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//







;
