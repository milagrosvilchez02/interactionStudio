window.evergageBeaconParseTimeStart = (new Date().getTime());
/*
 JavaScript Cookie v2.2.1
 https://github.com/js-cookie/js-cookie

 Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 Released under the MIT license
*/
'use strict';var Evergage=function(r){function v(e){v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"===typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};return v(e)}function R(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function");}function ub(e,a){for(var b=0;b<a.length;b++){var c=a[b];c.enumerable=c.enumerable||!1;c.configurable=!0;"value"in c&&(c.writable=!0);Object.defineProperty(e,
c.key,c)}}function U(e,a,b){a&&ub(e.prototype,a);b&&ub(e,b);return e}function D(e,a,b){a in e?Object.defineProperty(e,a,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[a]=b;return e}function vb(e,a){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);a&&(c=c.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}));b.push.apply(b,c)}return b}function w(e){for(var a=1;a<arguments.length;a++){var b=null!=arguments[a]?arguments[a]:{};
a%2?vb(b,!0).forEach(function(a){D(e,a,b[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):vb(b).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(b,a))})}return e}function xc(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}});a&&ya(e,a)}function aa(e){aa=Object.setPrototypeOf?
Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)};return aa(e)}function ya(e,a){ya=Object.setPrototypeOf||function(a,c){a.__proto__=c;return a};return ya(e,a)}function za(e,a,b){za="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(a,b,e){for(;!Object.prototype.hasOwnProperty.call(a,b)&&(a=aa(a),null!==a););if(a)return b=Object.getOwnPropertyDescriptor(a,b),b.get?b.get.call(e):b.value};return za(e,a,b||e)}function ba(e,a){var b=Array.isArray(e)?e:void 0;if(!b){b=
[];var c=!0,d=!1,f=void 0;try{for(var g=e[Symbol.iterator](),l;!(c=(l=g.next()).done)&&(b.push(l.value),!a||b.length!==a);c=!0);}catch(q){d=!0,f=q}finally{try{if(!c&&null!=g["return"])g["return"]()}finally{if(d)throw f;}}}if(!(e=b))throw new TypeError("Invalid attempt to destructure non-iterable instance");return e}function la(e){if(Array.isArray(e)){var a=0;for(var b=Array(e.length);a<e.length;a++)b[a]=e[a];a=b}else a=void 0;a||(a=Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)?
Array.from(e):void 0);if(!(e=a))throw new TypeError("Invalid attempt to spread non-iterable instance");return e}function Aa(e){var a=document.createElement("a");a.href=e;return a}function Ba(e){var a,b,c,d=[],f=[b=1732584193,c=4023233417,~b,~c,3285377520],g=[],l=unescape(encodeURI(e))+"\u0080",q=l.length;for(g[e=--q/4+2|15]=8*q;~q;)g[q>>2]|=l.charCodeAt(q)<<8*~q--;for(a=q=0;a<e;a+=16){for(b=f;80>q;b=[b[4]+(d[q]=16>q?~~g[a+q]:2*l|0>l)+1518500249+[c&h|~c&k,l=341275144+(c^h^k),882459459+(c&h|c&k|h&k),
l+1535694389][q++/5>>2]+((l=b[0])<<5|l>>>27),l,c<<30|c>>>2,h,k]){l=d[q-3]^d[q-8]^d[q-14]^d[q-16];c=b[1];var h=b[2];var k=b[3]}for(q=5;q;)f[--q]+=b[q]}for(l="";40>q;)l+=(f[q>>3]>>4*(7-q++)&15).toString(16);return l}function ma(e,a,b,c){return e.addEventListener?(e.addEventListener(a,b,c),!0):!1}function N(e,a,b,c){return e.removeEventListener?(e.removeEventListener(a,b,c),!0):!1}function wb(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(a){return null}}function Ca(e){var a=1<arguments.length&&
void 0!==arguments[1]?arguments[1]:z;return a&&9===a.nodeType||a&&1===a.nodeType?yc.test(e)?a.getElementsByClassName(e.slice(1)):zc.test(e)?a.getElementsByTagName(e):a.querySelectorAll(e):[]}function Ac(e,a){return a.toUpperCase()}function ca(e){return e.replace(Bc,Ac)}function x(e,a){for(var b=0,c=e.length;b<c&&!1!==a.call(e[b],b,e[b]);b++);}function xb(e){for(var a=arguments.length,b=Array(1<a?a-1:0),c=1;c<a;c++)b[c-1]=arguments[c];a=arguments;b=a.length;for(c=2>b?0:1;c<b;c++)for(var d in a[c])e[d]=
a[c][d];return e}function Da(e,a){var b=e&&(e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector);return!!b&&b.call(e,a)}function da(e,a,b){for(var c=[],d=0,f=e.length;d<f;d++)for(var g=e[d][a];null!=g;){c.push(g);if(!b)break;g=g[a]}return c}function na(e){return!!e&&e===e.window}function V(e){return"function"===typeof e}function E(e){return"string"===typeof e}function yb(e){return!isNaN(parseFloat(e))&&isFinite(e)}function Ea(e){return E(e)?function(a,
b){return Da(b,e)}:V(e)?e:e instanceof m?function(a,b){return e.is(b)}:function(a,b){return b===e}}function W(e,a){return a&&e.length?e.filter(a):e}function oa(e){return E(e)?e.match(Cc)||[]:[]}function G(e){return 1<e.length?Fa.call(e,function(a,b,c){return zb.call(c,a)===b}):e}function X(e,a,b){if(e&&1===e.nodeType&&a)return e=Y.getComputedStyle(e,null),a?b?e.getPropertyValue(a)||void 0:e[a]:e}function Z(e,a){return parseInt(X(e,a),10)||0}function Ab(e){if(1<arguments.length&&void 0!==arguments[1]?
arguments[1]:Ga.test(e))return e;if(!Ha[e]){var a=ca(e),b="".concat(a.charAt(0).toUpperCase()).concat(a.slice(1));a="".concat(a," ").concat(Dc.join("".concat(b," "))).concat(b).split(" ");x(a,function(a,b){if(b in Ec)return Ha[e]=b,!1})}return Ha[e]}function Bb(e,a){return(2<arguments.length&&void 0!==arguments[2]?arguments[2]:Ga.test(e))||Fc[e]||!yb(a)?a:"".concat(a,"px")}function Gc(e,a){e=e.dataset?e.dataset[a]||e.dataset[ca(a)]:e.getAttribute("data-".concat(a));try{return JSON.parse(e)}catch(b){}return e}
function Cb(e,a){return Z(e,"border".concat(a?"Left":"Top","Width"))+Z(e,"padding".concat(a?"Left":"Top"))+Z(e,"padding".concat(a?"Right":"Bottom"))+Z(e,"border".concat(a?"Right":"Bottom","Width"))}function Db(e,a){return!a||!Eb.call(a,function(a){return 0>e.indexOf(a)})}function Hc(e,a,b,c,d){d.guid=d.guid||k.guid++;var f=e.__cashEvents=e.__cashEvents||{};f[a]=f[a]||[];f[a].push([b,c,d]);e.addEventListener(a,d)}function Ia(e){e=e.split(".");return[e[0],e.slice(1).sort()]}function pa(e,a,b,c,d){var f=
e.__cashEvents=e.__cashEvents||{};if(a)f[a]&&(f[a]=f[a].filter(function(f){var g=ba(f,3);f=g[0];var q=g[1];g=g[2];if(d&&g.guid!==d.guid||!Db(f,b)||c&&c!==q)return!0;e.removeEventListener(a,g)}));else{for(a in f)pa(e,a,b,c,d);delete e.__cashEvents}}function Fb(e){return e.multiple?da(Fa.call(e.options,function(a){return a.selected&&!a.disabled&&!a.parentNode.disabled}),"value"):e.value||""}function Gb(e){if(!qa){var a=z.createElement("table"),b=z.createElement("tr");qa={"*":Hb,tr:z.createElement("tbody"),
td:b,th:b,thead:a,tbody:a,tfoot:a}}if(!E(e))return[];if(Ic.test(e))return[z.createElement(RegExp.$1)];a=Jc.test(e)&&RegExp.$1;a=qa[a]||qa["*"];a.innerHTML=e;return k(a.childNodes).detach().get()}function Ja(e){e=k(e);e.filter("script").add(e.find("script")).each(function(a,b){!b.src&&Kc.test(b.type)&&b.ownerDocument.documentElement.contains(b)&&eval(b.textContent.replace(Lc,""))})}function ra(e,a,b){x(e,function(c,d){x(a,function(a,e){a=c?e.cloneNode(!0):e;b?d.insertBefore(a,b&&d.firstChild):d.appendChild(a);
Ja(a)})})}function Ka(e,a){e="string"===typeof e?Error(e):e;for(var b in a)Object.defineProperty(e,b,{value:a[b],enumerable:!1});return e}function Mc(e){e.itemAction&&e.itemAction.includes("View")&&La()}function Ma(e){-1!==H&&(Na(!1,e),clearTimeout(H),H=-1)}function La(){if(!p.beaconConfig.doNotTrackPingRequestsForActions){Ma(!0);Oa&&Oa();Oa=n.onEventSend.on(Mc);var e=Date.now();if(-1===B||e-B>=p.beaconConfig.minimumActivityTimeToRegister)B=e;H=setTimeout(function(){Na(!0)},p.beaconConfig.timeOnPageTimerLengthMillis);
t.info("Setting up time on page listeners.");N(window,"unload",Pa);ma(window,"unload",Pa);N(window,"blur",Qa);ma(window,"blur",Qa);N(window,"focus",Ra);ma(window,"focus",Ra);N(document,"mousemove keydown scroll click",ea);ma(document,"mousemove keydown scroll click",ea)}}function Na(e,a){var b=Date.now();-1!==B&&(b-=B,p.beaconConfig.timeOnPageTimerLengthMillis<b?sa():(t.trace("Evergage: timeOnPage before: sendActivityPingRequest: ".concat(y)),y+=b,t.trace("Evergage: timeOnPage after: sendActivityPingRequest: ".concat(y)),
-1!==I&&clearTimeout(I),I=setTimeout(sa,p.beaconConfig.timeOnPageTimerLengthMillis-b)));if(0<y){y=Math.min(y,p.beaconConfig.timeOnPageTimerLengthMillis);if(!0!==a||2E3<=y)a=Nc(y),Oc(a),Ib(a);y=0}0>y&&(y=0);e&&(-1!==H&&clearTimeout(H),H=setTimeout(function(){Na(!0)},p.beaconConfig.timeOnPageTimerLengthMillis))}function Nc(e){var a={},b=Jb();b&&b.itemAction&&b.catalog&&(a.catalog={},Object.keys(b.catalog).forEach(function(c){var d=b.catalog[c],e=a.catalog;if(p.beaconConfig.trackContextualRelatedItems){if(d=
Sa(d,["_id","type","dimensions","categories","relatedCatalogObjects"]),Array.isArray(d.categories)){for(var g=[],l=0;l<d.categories.length;l++)g.push(Sa(d.categories[l],["_id","type"]),l);d=w({},d,{categories:g})}}else d=Sa(d,["_id","type"]);e[c]=d}));b&&b.action&&(a.action=b.action);a.timeOnPageMillis=e;Pc(a);return a}function Pc(e){Kb();e.performance={};var a=u;var b=["sdkLoadTime","sdkParseTime"];if(null==a)a={};else{if(null==a)var c={};else{c={};var d=Object.keys(a),f;for(f=0;f<d.length;f++){var g=
d[f];0<=b.indexOf(g)||(c[g]=a[g])}}if(Object.getOwnPropertySymbols)for(f=Object.getOwnPropertySymbols(a),g=0;g<f.length;g++)d=f[g],0<=b.indexOf(d)||Object.prototype.propertyIsEnumerable.call(a,d)&&(c[d]=a[d]);a=c}for(var l in a)u[l]&&(e.performance[l]=u[l])}function Pa(e){Ma()}function Qa(e){try{t.trace("Evergage: window blurred"),sa()}catch(a){fa(a,"windowBlurFunction")}}function Ra(e){try{t.trace("Evergage: window focused"),ea()}catch(a){fa(a,"windowFocusFunction")}}function sa(){try{-1!==I&&(clearTimeout(I),
I=-1);var e=Date.now(),a=0;-1!==B&&(a=e-B);t.trace("Evergage: timeOnPage before: setUserInactive: ".concat(y));y+=a;t.trace("Evergage: timeOnPage after: setUserInactive: ".concat(y));B=-1}catch(b){fa(b,"setUserInactive")}}function ea(){t.trace("activity registered");try{-1!==I&&(clearTimeout(I),I=-1);var e=Date.now();if(-1===B||e-B>=p.beaconConfig.minimumActivityTimeToRegister)-1!==B&&(t.trace("Evergage: timeOnPage before: activityRegistered: ".concat(y)),y+=e-Math.max(B,-1),t.trace("Evergage: timeOnPage after: activityRegistered: ".concat(y))),
B=e}catch(a){fa(a,"activityRegistered")}}function Qc(){Ta&&Ta();Ua&&Ua();Va&&Va();Wa&&Wa();Xa&&Xa();Ta=n.onFireException.on(function(e,a){document.dispatchEvent(new CustomEvent(O.OnException,{detail:{error:e,context:a}}));Lb.send(Rc(e,a))});Ua=n.onEventResponse.on(function(e,a){var b=e.campaignResponses.map(function(a){return a.experienceId});h.campaignResponses=[].concat(la(e.campaignResponses),la(h.campaignResponses.filter(function(a){return!b.includes(a.experienceId)})));document.dispatchEvent(new CustomEvent(O.OnEventResponse,
{detail:{response:e,actionEvent:a}}))});Va=n.onEventSend.on(function(e){document.dispatchEvent(new CustomEvent(O.OnEventSend,{detail:{actionEvent:e}}))});n.onStatSend.on(function(e,a){document.dispatchEvent(new CustomEvent(O.OnStatSend,{detail:{campaignStat:e,campaignResponse:a}}))});Wa=n.onPageMatchStatusUpdated.on(function(e){document.dispatchEvent(new CustomEvent(O.OnPageMatchStatusUpdated,{detail:{matchStatus:e}}))});Xa=n.onInitSitemap.on(function(e){document.dispatchEvent(new CustomEvent(O.OnInitSitemap,
{detail:{sitemapConfig:e}}))})}function S(e){t.info("Shutting down beacon: ".concat(e));ta("shutDown");return!1}var Ya=["error","warn","info","debug","trace"],t=new (function(){function e(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0;R(this,e);this.console=window.console;this.level=b;this.prefix=a;this.buildLogFunctions()}U(e,[{key:"shouldLog",value:function(a){return a<=this.level}},{key:"setLoggingLevel",value:function(a){this.level=
"string"===typeof a?Ya.indexOf(a.toLowerCase())+1:a||0;this.buildLogFunctions()}},{key:"getLoggingLevel",value:function(){return this.level}},{key:"setPrefix",value:function(a){this.prefix=a;this.buildLogFunctions()}},{key:"getPrefix",value:function(){return this.prefix}},{key:"buildLogFunctions",value:function(){var a=this;Ya.forEach(function(b,c){b=Ya[c];a[b]=a.shouldLog(c+1)?a.getLogFn(b):function(){}})}},{key:"getLogFn",value:function(a){return Function.prototype.bind.call(this.console.log,this.console,
"[".concat(a.toUpperCase(),"]").concat(this.prefix?"("+this.prefix+")":"",":"))}}]);return e}()),Sc="cdn.".concat("evergage.com"),Za;(function(e){e.Impression="i";e.Clickthrough="c";e.Dismissal="d";e.Unsubscribe="u";e.Send="s"})(Za||(Za={}));(function(e){e.Product="Product";e.Category="Category"})(r.ItemType||(r.ItemType={}));var $a;(function(e){e._id="_id";e.categories="categories";e.dimensions="dimensions";e.relatedCatalogObjects="relatedCatalogObjects"})($a||($a={}));var P=function(){function e(){R(this,
e);this.listeners=[]}U(e,[{key:"on",value:function(a){var b=this;(this.listeners=this.listeners||[]).push(a);return function(){b.listeners=b.listeners.filter(function(b){return b!==a})}}},{key:"once",value:function(a){var b=this;return this.on(function(){b.unbindAll();try{for(var c=arguments.length,d=Array(c),e=0;e<c;e++)d[e]=arguments[e];a.apply(b,d)}catch(g){t.error("Signal listener callback error: "+g)}})}},{key:"emit",value:function(){for(var a=this,b=arguments.length,c=Array(b),d=0;d<b;d++)c[d]=
arguments[d];0!==this.listeners.length&&this.listeners.forEach(function(b){try{b.apply(a,c)}catch(g){t.error("Signal listener callback error: "+g)}})}},{key:"unbindAll",value:function(){this.listeners=[]}}]);return e}(),Tc=function(e){t.debug("Unbinding all signals for type: ",e);Object.keys(e).forEach(function(a){e[a].unbindAll&&e[a].unbindAll()})},p={endpointConfig:{},beaconConfig:{sendEvents:!0,minimumActivityTimeToRegister:300,timeOnPageTimerLengthMillis:6E4,trackAnonymousVisitors:!0,corsAllowedOrigins:["*"],
identityAttributes:[],rememberMeUserIdsMillis:63072E6,actionRateLimiterConfig:{globalLimit:10,globalTimeRange:5E3,perActionLimit:5,perActionTimeRange:2E3}},visitor:{},beaconState:null},Uc=new P,ta=function(e){p.beaconState=e;Uc.emit(e)},J=function(){return p.visitor||{}},ab=Ba.default?Ba.default:Ba,Vc=[/bot/i,/spider/i,/facebookexternalhit/i,/simplepie/i,/yahooseeker/i,/embedly/i,/quora link preview/i,/outbrain/i,/vkshare/i,/monit/i,/Pingability/i,/Monitoring/i,/WinHttpRequest/i,/Apache-HttpClient/i,
/getprismatic.com/i,/python-requests/i,/Twurly/i,/yandex/i,/browserproxy/i,/crawler/i,/Qwantify/i,/Yahoo! Slurp/i,/pinterest/i,/Tumblr\/14.0.835.186/i,/Tumblr Agent 14.0/i],Wc=function(e){return Vc.some(function(a){return a.test(e)})},Xc=navigator.vendor&&-1<navigator.vendor.indexOf("Apple")&&navigator.userAgent&&-1==navigator.userAgent.indexOf("CriOS")&&-1==navigator.userAgent.indexOf("FxiOS"),ua=function(e,a){return a={exports:{}},e(a,a.exports),a.exports}(function(e,a){e.exports=function(){function a(){for(var a=
0,b={};a<arguments.length;a++){var c=arguments[a],e;for(e in c)b[e]=c[e]}return b}function c(b){function d(){}function e(c,e,f){if("undefined"!==typeof document){f=a({path:"/"},d.defaults,f);"number"===typeof f.expires&&(f.expires=new Date(1*new Date+864E5*f.expires));f.expires=f.expires?f.expires.toUTCString():"";try{var g=JSON.stringify(e);/^[\{\[]/.test(g)&&(e=g)}catch(ge){}e=b.write?b.write(e,c):encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
decodeURIComponent);c=encodeURIComponent(String(c)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);g="";for(var l in f)f[l]&&(g+="; "+l,!0!==f[l]&&(g+="="+f[l].split(";")[0]));return document.cookie=c+"="+e+g}}function l(a,c){if("undefined"!==typeof document){for(var d={},e=document.cookie?document.cookie.split("; "):[],f=0;f<e.length;f++){var g=e[f].split("="),l=g.slice(1).join("=");c||'"'!==l.charAt(0)||(l=l.slice(1,-1));try{var q=g[0].replace(/(%[0-9A-Z]{2})+/g,
decodeURIComponent);l=(b.read||b)(l,q)||l.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent);if(c)try{l=JSON.parse(l)}catch($c){}d[q]=l;if(a===q)break}catch($c){}}return a?d[a]:d}}d.set=e;d.get=function(a){return l(a,!1)};d.getJSON=function(a){return l(a,!0)};d.remove=function(b,c){e(b,"",a(c,{expires:-1}))};d.defaults={};d.withConverter=c;return d}return c(function(){})}()}),Mb,bb=function(e){return"".concat("_evg").concat(e,"_").concat(Mb)},K={setCookieHash:function(e,a,b){Mb=ab("".concat(e,".").concat(a,
".").concat(ab(b+"/").slice(0,4))).slice(0,4)},read:function(e){return ua.getJSON(bb(e))},write:function(e,a,b,c){ua.set(bb(e),a,{expires:b,domain:c})},remove:function(e,a){ua.remove(bb(e),a)}},cb,db={read:function(e){if(e=sessionStorage.getItem(cb+e))return e},write:function(e,a){sessionStorage.setItem(cb+e,a)},setStorageKeyPrefix:function(e,a){cb="_evg|"+e+"|"+a+"|"}},Nb=function(e){K.write("a",{uuid:e.uuid,puid:e.persistedUserId,paid:e.persistedAccountId,affinityId:e.affinityId},730,p.beaconConfig.cookieDomain);
var a=K.read("a");a&&t.debug("Stored visitor cookie. ".concat(JSON.stringify(a)));return e},eb=function(e){return 0===e.indexOf("www")?e.substring(4,e.length):e},Ob=function(e){if(!e)return!1;e=(e||{}).user;e=void 0===e?{}:e;var a=(e||{}).attributes;return Object.keys(void 0===a?{}:a).some(function(a){return p.beaconConfig.identityAttributes.includes(a)})||!!e.id||!!J().persistedUserId},n=function a(){R(this,a)};n.onEventSend=new P;n.onStatSend=new P;n.onEventResponse=new P;n.onFireException=new P;
n.onPageMatchStatusUpdated=new P;n.onInitSitemap=new P;n.onDeprecatedEventResponse=new P;n.unbindAll=function(){Tc(n)};var fa=function(a,b,c){n.onFireException.emit(a,b);t.warn("sendException",{event,errorSection:b})},O={OnEventResponse:"evergage:onEventResponse",OnEventSend:"evergage:onEventSend",OnStatSend:"evergage:onStatSend",OnException:"evergage:onException",OnTemplateDisplayEnd:"evergage:onTemplateDisplayEnd",OnPageMatchStatusUpdated:"evergage:onPageMatchStatusUpdated",OnInit:"evergage:onInit",
OnInitSitemap:"evergage:onInitSitemap"},Sa=function(a,b){var c={_id:null},d=!0,f=!1,g=void 0;try{for(var l=b[Symbol.iterator](),q;!(d=(q=l.next()).done);d=!0){var h=q.value;"undefined"!==typeof a[h]&&Object.assign(c,D({},h,a[h]))}}catch(M){f=!0,g=M}finally{try{d||null==l.return||l.return()}finally{if(f)throw g;}}return c},Pb=!1,Qb=!1,Rb=!1,u={sdkLoadTime:null,sdkParseTime:null,sdkDnsTime:null,pageLoadTime:null,domLoadTime:null,networkTime:null,eventDnsTime:null},ad=function(){var a=Sb();a&&void 0!=
a.domainLookupEnd&&void 0!=a.domainLookupStart&&(u.sdkDnsTime=Math.round(a.domainLookupEnd-a.domainLookupStart))},Tb=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").reverse().find(function(a){return 0<=a.name.indexOf("/api2/event/")}):null},Sb=function(){return window.performance.getEntriesByType?window.performance.getEntriesByType("resource").find(function(a){return/\/evergage(Small)?(\.min)?\.js$/.test(a.name)}):null},Ub=function(){if(window.performance.getEntriesByType){var a=
window.performance.getEntriesByType("navigation");if(a&&0<a.length)return a=a[0],a||(a=window.performance.timing),a}return null},Ib=function(a){for(var b in a.performance)u[b]=null},Kb=function(){if(!Qb){var a=Ub();a&&0<a.domContentLoadedEventEnd&&(void 0!=a.entryType?u.domLoadTime=Math.round(a.domContentLoadedEventEnd)||null:u.domLoadTime=Math.round(a.domContentLoadedEventEnd-window.performance.timing.navigationStart)||null);u.domLoadTime&&(Qb=!0)}if(!Pb){if(a=Ub())void 0!=a.entryType?u.pageLoadTime=
Math.round(a.loadEventEnd)||null:u.pageLoadTime=Math.round(a.loadEventEnd-window.performance.timing.navigationStart)||null;u.pageLoadTime&&(Pb=!0)}};"use strict";var bd=Object.prototype.hasOwnProperty,Vb=!1,T=[],Wb=function(){Vb=!0;return!1},cd=function(a){if(Vb)return t.info("Event Rate Limiter previously triggered. Event sending disabled."),!1;var b=Date.now(),c=0,d=0,f=Math.max(p.beaconConfig.actionRateLimiterConfig.globalTimeRange,p.beaconConfig.actionRateLimiterConfig.perActionTimeRange);T.push({name:a,
time:b});for(var g=T.length-1;0<=g;g--){if(!(b-T[g].time<f)){T.splice(0,g+1);break}if(b-T[g].time<p.beaconConfig.actionRateLimiterConfig.globalTimeRange&&(c++,c>p.beaconConfig.actionRateLimiterConfig.globalLimit)||b-T[g].time<p.beaconConfig.actionRateLimiterConfig.perActionTimeRange&&T[g].name===a&&(d++,d>p.beaconConfig.actionRateLimiterConfig.perActionLimit))return Wb()}return!0},F;(function(a){a.Pending="pending";a.Running="running";a.Selected="selected";a.Matched="matched";a.Rejected="rejected"})(F||
(F={}));var h={result:{backgroundPage:null,currentPage:null,matchedConfig:null,matchStatus:null},config:{pageTypes:[],currentKey:null,settings:{canonicalizeIds:!1,runOnTranslatedPage:!1,setDefaultListPrice:!1,truncateTranslated:!0}},campaignResponses:[]},Jb=function(){return h.result.currentPage||{}},z=document,Y=window,Hb=z.createElement("div"),Q=Array.prototype,Fa=Q.filter,zb=Q.indexOf,dd=Q.map,va=Q.push,fb=Q.reverse,Xb=Q.slice,Eb=Q.some,ed=Q.splice,fd=/^#[\w-]*$/,yc=/^\.[\w-]*$/,gd=/<.+>/,zc=/^\w+$/,
m=function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:z;R(this,a);if(b){if(b instanceof m)return b;var d=b;if(E(b)){if(d=c instanceof m?c[0]:c,d=fd.test(b)?d.getElementById(b.slice(1)):gd.test(b)?Gb(b):Ca(b,d),!d)return}else if(V(b))return this.ready(b);if(d.nodeType||d===Y)d=[d];this.length=d.length;c=0;for(var f=this.length;c<f;c++)this[c]=d[c]}}U(a,[{key:"init",value:function(b,c){return new a(b,c)}}]);return a}(),k=m.prototype.init;k.fn=k.prototype=m.prototype;
m.prototype.length=0;m.prototype.splice=ed;"function"===typeof Symbol&&(m.prototype[Symbol.iterator]=Array.prototype[Symbol.iterator]);m.prototype.get=function(a){return void 0===a?Xb.call(this):this[0>a?a+this.length:a]};m.prototype.eq=function(a){return k(this.get(a))};m.prototype.first=function(){return this.eq(0)};m.prototype.last=function(){return this.eq(-1)};m.prototype.map=function(a){return k(dd.call(this,function(b,c){return a.call(b,c,b)}))};m.prototype.slice=function(){return k(Xb.apply(this,
arguments))};var Bc=/-([a-z])/g;k.camelCase=ca;k.each=x;m.prototype.each=function(a){x(this,a);return this};m.prototype.removeProp=function(a){return this.each(function(b,c){delete c[a]})};m.prototype.extend=function(a){return xb(k.fn,a)};k.extend=xb;k.guid=1;k.matches=Da;var gb=Array.isArray;k.isWindow=na;k.isFunction=V;k.isString=E;k.isNumeric=yb;k.isArray=gb;m.prototype.prop=function(a,b){if(a){if(E(a))return 2>arguments.length?this[0]&&this[0][a]:this.each(function(c,f){f[a]=b});for(var c in a)this.prop(c,
a[c]);return this}};m.prototype.filter=function(a){if(!a)return k();var b=Ea(a);return k(Fa.call(this,function(a,d){return b.call(a,d,a)}))};var Cc=/\S+/g;m.prototype.hasClass=function(a){return a&&Eb.call(this,function(b){return b.classList.contains(a)})};m.prototype.removeAttr=function(a){var b=oa(a);return b.length?this.each(function(a,d){x(b,function(a,b){d.removeAttribute(b)})}):this};m.prototype.attr=function(a,b){if(a){if(E(a)){if(2>arguments.length){if(!this[0])return;var c=this[0].getAttribute(a);
return null===c?void 0:c}return void 0===b?this:null===b?this.removeAttr(a):this.each(function(c,f){f.setAttribute(a,b)})}for(c in a)this.attr(c,a[c]);return this}};m.prototype.toggleClass=function(a,b){var c=oa(a),d=void 0!==b;return c.length?this.each(function(a,g){x(c,function(a,c){d?b?g.classList.add(c):g.classList.remove(c):g.classList.toggle(c)})}):this};m.prototype.addClass=function(a){return this.toggleClass(a,!0)};m.prototype.removeClass=function(a){return arguments.length?this.toggleClass(a,
!1):this.attr("class","")};k.unique=G;m.prototype.add=function(a,b){return k(G(this.get().concat(k(a,b).get())))};var Ga=/^--/,Ha={},Ec=Hb.style,Dc=["webkit","moz","ms","o"];k.prefixedProp=Ab;var Fc={animationIterationCount:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0};m.prototype.css=function(a,b){if(E(a)){var c=Ga.test(a);a=Ab(a,c);if(2>arguments.length)return this[0]&&X(this[0],a,c);if(!a)return this;b=Bb(a,b,c);return this.each(function(d,
g){g&&1===g.nodeType&&(c?g.style.setProperty(a,b):g.style[a]=b)})}for(var d in a)this.css(d,a[d]);return this};var hd=/^data-(.+)/;m.prototype.data=function(a,b){var c=this;if(!a){if(!this[0])return;var d={};x(this[0].attributes,function(a,b){(a=b.name.match(hd))&&(d[a[1]]=c.data(a[1]))});return d}if(E(a))return void 0===b?this[0]&&Gc(this[0],a):this.each(function(c,d){c=b;try{c=JSON.stringify(c)}catch(q){}d.dataset?d.dataset[ca(a)]=c:d.setAttribute("data-".concat(a),c)});for(var f in a)this.data(f,
a[f]);return this};x(["Width","Height"],function(a,b){m.prototype["inner".concat(b)]=function(){if(this[0])return na(this[0])?Y["inner".concat(b)]:this[0]["client".concat(b)]}});x(["width","height"],function(a,b){m.prototype[b]=function(c){if(!this[0])return void 0===c?void 0:this;if(!arguments.length)return na(this[0])?this[0][ca("outer-".concat(b))]:this[0].getBoundingClientRect()[b]-Cb(this[0],!a);var d=parseInt(c,10);return this.each(function(c,g){g&&1===g.nodeType&&(c=X(g,"boxSizing"),g.style[b]=
Bb(b,d+("border-box"===c?Cb(g,!a):0)))})}});x(["Width","Height"],function(a,b){m.prototype["outer".concat(b)]=function(c){if(this[0])return na(this[0])?Y["outer".concat(b)]:this[0]["offset".concat(b)]+(c?Z(this[0],"margin".concat(a?"Top":"Left"))+Z(this[0],"margin".concat(a?"Bottom":"Right")):0)}});var hb={};m.prototype.toggle=function(a){return this.each(function(b,c){if(void 0!==a?a:"none"===X(c,"display")){if(c.style.display="","none"===X(c,"display")){b=c.style;c=c.tagName;if(hb[c])c=hb[c];else{var d=
z.createElement(c);z.body.appendChild(d);var f=X(d,"display");z.body.removeChild(d);c=hb[c]="none"!==f?f:"block"}b.display=c}}else c.style.display="none"})};m.prototype.hide=function(){return this.toggle(!1)};m.prototype.show=function(){return this.toggle(!0)};var ib={focus:"focusin",blur:"focusout"},Yb={mouseenter:"mouseover",mouseleave:"mouseout"},id=/^(?:mouse|pointer|contextmenu|drag|drop|click|dblclick)/i;m.prototype.off=function(a,b,c){var d=this;void 0===a?this.each(function(a,b){return pa(b)}):
(V(b)&&(c=b,b=""),x(oa(a),function(a,g){a=Ia(Yb[g]||ib[g]||g);a=ba(a,2);var f=a[0],q=a[1];d.each(function(a,d){return pa(d,f,q,b,c)})}));return this};m.prototype.on=function(a,b,c,d){var f=this;if(!E(a)){for(var g in a)this.on(g,b,a[g]);return this}V(b)&&(c=b,b="");x(oa(a),function(a,g){a=Ia(Yb[g]||ib[g]||g);a=ba(a,2);var l=a[0],q=a[1];f.each(function(a,f){a=function Zc(a){if(!a.namespace||Db(q,a.namespace.split("."))){var g=f;if(b){for(var h=a.target;!Da(h,b);){if(h===f)return;h=h.parentNode;if(!h)return}g=
h;a.__delegate=!0}a.__delegate&&Object.defineProperty(a,"currentTarget",{configurable:!0,get:function(){return g}});h=c.call(g,a,a.data);d&&pa(f,l,q,b,Zc);!1===h&&(a.preventDefault(),a.stopPropagation())}};a.guid=c.guid=c.guid||k.guid++;Hc(f,l,q,b,a)})});return this};m.prototype.one=function(a,b,c){return this.on(a,b,c,!0)};m.prototype.ready=function(a){var b=function(){return a(k)};"loading"!==z.readyState?setTimeout(b):z.addEventListener("DOMContentLoaded",b);return this};m.prototype.trigger=function(a,
b){if(E(a)){a=Ia(a);var c=ba(a,2);a=c[0];c=c[1];var d=id.test(a)?"MouseEvents":"HTMLEvents";var f=z.createEvent(d);f.initEvent(a,!0,!0);f.namespace=c.join(".")}else f=a;f.data=b;var g=f.type in ib;return this.each(function(a,b){if(g&&V(b[f.type]))b[f.type]();else b.dispatchEvent(f)})};var jd=/%20/g,kd=/file|reset|submit|button|image/i,ld=/radio|checkbox/i;m.prototype.serialize=function(){var a="";this.each(function(b,c){x(c.elements||[c],function(b,c){c.disabled||!c.name||"FIELDSET"===c.tagName||
kd.test(c.type)||ld.test(c.type)&&!c.checked||(b=Fb(c),void 0!==b&&(b=gb(b)?b:[b],x(b,function(b,d){b=a;d="&".concat(encodeURIComponent(c.name),"=").concat(encodeURIComponent(d).replace(jd,"+"));a=b+d})))})});return a.substr(1)};m.prototype.val=function(a){return void 0===a?this[0]&&Fb(this[0]):this.each(function(b,c){if("SELECT"===c.tagName){var d=gb(a)?a:null===a?[]:[a];x(c.options,function(a,b){b.selected=0<=d.indexOf(b.value)})}else c.value=null===a?"":a})};m.prototype.clone=function(){return this.map(function(a,
b){return b.cloneNode(!0)})};m.prototype.detach=function(){return this.each(function(a,b){b.parentNode&&b.parentNode.removeChild(b)})};var Jc=/^\s*<(\w+)[^>]*>/,Ic=/^\s*<(\w+)\s*\/?>(?:<\/\1>)?\s*$/,qa;k.parseHTML=Gb;m.prototype.empty=function(){return this.each(function(a,b){for(;b.firstChild;)b.removeChild(b.firstChild)})};m.prototype.html=function(a){return void 0===a?this[0]&&this[0].innerHTML:this.each(function(b,c){c.innerHTML=a})};m.prototype.remove=function(){return this.detach().off()};m.prototype.text=
function(a){return void 0===a?this[0]?this[0].textContent:"":this.each(function(b,c){c.textContent=a})};m.prototype.unwrap=function(){this.parent().each(function(a,b){a=k(b);a.replaceWith(a.children())});return this};var Zb=z.documentElement;m.prototype.offset=function(){var a=this[0];if(a)return a=a.getBoundingClientRect(),{top:a.top+Y.pageYOffset-Zb.clientTop,left:a.left+Y.pageXOffset-Zb.clientLeft}};m.prototype.offsetParent=function(){return k(this[0]&&this[0].offsetParent)};m.prototype.position=
function(){var a=this[0];if(a)return{left:a.offsetLeft,top:a.offsetTop}};m.prototype.children=function(a){var b=[];this.each(function(a,d){va.apply(b,d.children)});return W(k(G(b)),a)};m.prototype.contents=function(){var a=[];this.each(function(b,c){va.apply(a,"IFRAME"===c.tagName?[c.contentDocument]:c.childNodes)});return k(G(a))};m.prototype.find=function(a){for(var b=[],c=0,d=this.length;c<d;c++){var f=Ca(a,this[c]);f.length&&va.apply(b,f)}return k(G(b))};var Kc=/^$|^module$|\/(?:java|ecma)script/i,
Lc=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;m.prototype.append=function(){var a=this;x(arguments,function(b,c){ra(a,k(c))});return this};m.prototype.appendTo=function(a){ra(k(a),this);return this};m.prototype.insertAfter=function(a){var b=this;k(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d.nextSibling);Ja(b)})});return this};m.prototype.after=function(){var a=this;x(fb.apply(arguments),function(b,c){fb.apply(k(c).slice()).insertAfter(a)});
return this};m.prototype.insertBefore=function(a){var b=this;k(a).each(function(a,d){var c=d.parentNode;c&&b.each(function(b,f){b=a?f.cloneNode(!0):f;c.insertBefore(b,d);Ja(b)})});return this};m.prototype.before=function(){var a=this;x(arguments,function(b,c){k(c).insertBefore(a)});return this};m.prototype.prepend=function(){var a=this;x(arguments,function(b,c){ra(a,k(c),!0)});return this};m.prototype.prependTo=function(a){ra(k(a),fb.apply(this.slice()),!0);return this};m.prototype.replaceWith=function(a){return this.before(a).remove()};
m.prototype.replaceAll=function(a){k(a).replaceWith(this);return this};m.prototype.wrapAll=function(a){if(this[0]){a=k(a);this.first().before(a);for(a=a[0];a.children.length;)a=a.firstElementChild;this.appendTo(a)}return this};m.prototype.wrap=function(a){return this.each(function(b,c){var d=k(a)[0];k(c).wrapAll(b?d.cloneNode(!0):d)})};m.prototype.wrapInner=function(a){return this.each(function(b,c){b=k(c);c=b.contents();c.length?c.wrapAll(a):b.append(a)})};m.prototype.has=function(a){var b=E(a)?
function(b,d){return!!Ca(a,d).length}:function(b,d){return d.contains(a)};return this.filter(b)};m.prototype.is=function(a){if(!a||!this[0])return!1;var b=Ea(a),c=!1;this.each(function(a,f){c=b.call(f,a,f);return!c});return c};m.prototype.next=function(a,b){return W(k(G(da(this,"nextElementSibling",b))),a)};m.prototype.nextAll=function(a){return this.next(a,!0)};m.prototype.not=function(a){if(!a||!this[0])return this;var b=Ea(a);return this.filter(function(a,d){return!b.call(d,a,d)})};m.prototype.parent=
function(a){return W(k(G(da(this,"parentNode"))),a)};m.prototype.index=function(a){var b=a?k(a)[0]:this[0];a=a?this:k(b).parent().children();return zb.call(a,b)};m.prototype.closest=function(a){if(!a||!this[0])return k();var b=this.filter(a);return b.length?b:this.parent().closest(a)};m.prototype.parents=function(a){return W(k(G(da(this,"parentElement",!0))),a)};m.prototype.prev=function(a,b){return W(k(G(da(this,"previousElementSibling",b))),a)};m.prototype.prevAll=function(a){return this.prev(a,
!0)};m.prototype.siblings=function(a){var b=[];this.each(function(a,d){va.apply(b,k(d).parent().children(function(a,b){return b!==d}))});return W(k(G(b)),a)};var A={},$b=function(a){a=a?(a=Aa(a))?a.pathname:"":"";return a},ac=function(a,b){b="undefined"===typeof b?location.search:b;for(var c=/([^=?&]+)=?([^&]*)/g,d={},f;f=c.exec(b);){var g=wb(f[1]);f=wb(f[2]);null===g||null===f||g in d||(d[g]=f)}return d[a]||""},bc=function(a,b){return(a=a.exec(b))&&2===a.length?a[1]:null},cc=function(a){return bc(/[/]?([^/]*)[/]?$/,
$b(a))},jb=function(a){return"string"!==typeof a||""===a.trim()?null:Aa(a).href},kb=function(a){return a&&"string"===typeof a?(a=parseFloat(a.replace(/[^0-9.]+/g,"")),isNaN(a)?null:a):null},dc=function(a){return a&&"string"===typeof a?(a=parseInt(a.trim().replace(/[^0-9.]+/g,""),10),isNaN(a)?null:a):null},lb=function(a,b){b=b||window;a=a.split(".");var c=!0,d=!1,f=void 0;try{for(var g=a[Symbol.iterator](),l;!(c=(l=g.next()).done);c=!0){var h=l.value;var k=/(\w+)\[([0-9]+)\]/.exec(h);if(b[h])b=b[h];
else if(k){if(b[k[1]]&&(b=b[k[1]][parseInt(k[2],10)],!b))return null}else return null}}catch(M){d=!0,f=M}finally{try{c||null==g.return||g.return()}finally{if(d)throw f;}}return b},wa={extractFirstGroup:bc,getLastPathComponent:cc,getLastPathComponentWithoutExtension:function(a){a=cc(jb(a));var b=a.lastIndexOf(".");return 0<=b?a.substring(0,b):a},getParameterByName:ac,getPathname:$b,qualifyUrl:jb,removeQueryString:function(a){if(!a)return"";a=Aa(a);return[a.protocol,"//","http:"===a.protocol&&"80"===
a.port||"https:"===a.protocol&&"443"===a.port?a.hostname:a.host,a?a.pathname:""].join("")},getFloatValue:kb,getIntegerValue:dc,getUtagFirstForField:function(a){var b=window.utag_data;if(b&&b[a]&&0<=b[a].length)return Array.isArray(b[a])?b[a][0]:b[a]},getValueFromNestedObject:lb,buildLineItemFromPageState:function(a){if(h.result.currentPage&&h.result.currentPage.catalog){var b=h.result.currentPage.catalog[r.ItemType.Product];return b?{_id:b._id,price:b.price,quantity:kb(k(a).val())}:null}},resolveWhenTrue:{bind:function(a){var b=
1<arguments.length&&void 0!==arguments[1]?arguments[1]:Math.random().toString(36).slice(2),c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2E3,d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:100;if("function"===typeof a)return new Promise(function(f,g){var l=0,h=setInterval(function(){try{l+=d;var q=a();q&&(delete A[b],clearInterval(h),f(q));l>=c&&(A[b](),delete A[b])}catch(M){delete A[b],clearInterval(h),g(M)}},d);A[b]=function(){clearInterval(h)}})},unbind:function(a){if(!a||"string"!==
typeof a||"function"!==typeof A[a])return null;A[a]();delete A[a]},getBindings:function(){return A},clearBindings:function(){for(var a in A)A.hasOwnProperty(a)&&"function"===typeof A[a]&&(A[a](),delete A[a])}},cookie:ua},mb=function(){function a(b){R(this,a);this.baseURL=b}U(a,[{key:"send",value:function(a){md(a);var b=this.baseURL+"?";var d="";var f=[],g;"string"!==typeof d&&(d="?");for(l in a)if(bd.call(a,l)){(g=a[l])||null!==g&&void 0!==g&&!isNaN(g)||(g="");var l=encodeURIComponent(l);g=encodeURIComponent(g);
null!==l&&null!==g&&f.push(l+"="+g)}a=f.length?d+f.join("&"):"";b+=a;if(navigator&&navigator.sendBeacon)return a=new Blob([],{type:"application/x-www-form-urlencoded"}),navigator.sendBeacon(b,a);a=new XMLHttpRequest;a.open("GET",b,!0);a.send()}}]);return a}(),nd=function(a){function b(a){R(this,b);a=aa(b).call(this,a);if(!a||"object"!==typeof a&&"function"!==typeof a){if(void 0===this)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");a=this}a.numberOfEventsSent=
0;return a}xc(b,a);U(b,[{key:"send",value:function(a){if(3>this.numberOfEventsSent)return this.numberOfEventsSent++,za(aa(b.prototype),"send",this).call(this,a)}}]);return b}(mb),od=function(){function a(b){R(this,a);this.baseURL=b}U(a,[{key:"send",value:function(a){var b=this;return new Promise(function(c,f){if(cd(a.action)){try{var d=JSON.stringify(a)}catch(M){return f(M)}var l=new XMLHttpRequest;l.onload=function(){if(200<=this.status&&300>this.status)try{var a=JSON.parse(l.response);c(a)}catch(Yc){f(Ka(Yc,
{status:this.status,statusText:l.statusText}))}else f(Ka("Response was not OK: ".concat(l.responseText),{status:this.status,statusText:l.statusText}))};l.onerror=function(){f(Ka("Response error: ".concat(l.responseText),{status:this.status,statusText:l.statusText}))};a.debug&&a.debug.explanations&&(l.withCredentials=!0);if("true"==ac("isReadableEvent"))b.sendPost(l,b.baseURL,d);else try{if(!/^[\x20-\x7E]+$/.test(d))throw Error("GET request payload contains non-ASCII characters, try sending POST request");
var h=encodeURIComponent(window.btoa(d)),k=b.baseURL+"?event="+h;if(8192<k.length)throw Error("GET request URL exceeds 8192 characters, try sending POST request");b.sendGet(l,k)}catch(M){b.sendPost(l,b.baseURL,d)}}else f(Error("Event Rate Limiter triggered"))})}},{key:"sendGet",value:function(a,c){a.open("GET",c,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");a.send()}},{key:"sendPost",value:function(a,c,d){a.open("POST",c,!0);a.setRequestHeader("Accept","application/json, text/javascript, */*; q=0.01");
a.setRequestHeader("Content-Type","application/x-www-form-urlencoded");a.send("event="+encodeURIComponent(d))}}]);return a}(),md=function(a){Object.keys(a).forEach(function(b){var c=a[b];if("number"!=typeof c&&"boolean"!==typeof c&&null!=c)if("string"==typeof c){a:switch(b){case "url":case "urlref":c=c.substring(0,3072);break a;case "title":c=c.substring(0,1024);break a;default:c=c.substring(0,1024)}a[b]=c}else"function"==typeof c?delete a[b]:a[b]=JSON.stringify(c)})},ec,fc,gc,Lb,ha,ia,nb=function(a){a[".bv"]=
16;a._ak=p.endpointConfig.account;a._ds=p.endpointConfig.dataset;a[".scv"]=p.endpointConfig.siteConfigVersion;a.channel="Web";a._r=String(Math.random()).slice(2,8)},ob=function(a){var b=J();a.userId?a._reqPersistedEntityIds="":b.persistedUserId&&(a._persistedUserId=b.persistedUserId);h&&h.result&&h.result.currentPage&&h.result.currentPage.user&&h.result.currentPage.user.attributes&&h.result.currentPage.user.attributes.customer_non_consent&&(a.customer_non_consent=h.result.currentPage.user.attributes.customer_non_consent);
p.beaconConfig.trackAnonymousVisitors&&(a[".anonId"]=b.uuid,null!=b.affinityId&&(a[".aaId"]=b.affinityId),a.userId||a._persistedUserId||a._persistedAccountId||(a._anon="true"));return a},ja=function(a){a="".concat(a);if(null==a||974>=a.length)return a;var b=731,c=244;974!=b+c&&(b+=974-(b+c));10<c?c-=5:10<b&&(b-=5);return a.substring(0,b)+" ... "+a.substring(a.length-c)},hc=function(a,b){var c=b.header,d=b.fileName,f=b.line;b=b.column;c&&(a[".ef"]=ja(c));a[".eu"]=ja(d);a[".el"]=ja(f);a[".ec"]=ja(b);
return a},pd=(ha={},D(ha,".eu","sourceURL"),D(ha,".el","line"),D(ha,".ec","column"),ha),qd=(ia={},D(ia,".eu","fileName"),D(ia,".el","lineNumber"),D(ia,".ec","columnNumber"),ia),ic=function(a,b,c){return b?hc(a,{header:!!b.stack&&"string"===typeof b.stack&&b.stack.substring(0,b.stack.indexOf("@")),fileName:b[c[".eu"]],line:b[c[".el"]],column:b[c[".ec"]]}):a},rd=function(a){var b=Object.keys(a)[0];if(!b)return{};a=a[b];b={type:b,_id:a._id,name:a.name,url:a.url,imageUrl:a.imageUrl,description:a.description};
a.price&&(b.priceDescription=a.priceDescription,b.price=a.price,b.listPrice=a.listPrice,b.currency=a.currency,b.inventoryCount=a.inventoryCount,b.alternateId=a.alternateId);Array.isArray(a.categories)&&(b.categories=a.categories.map(function(a){return"string"===typeof a?{_id:a,type:r.ItemType.Category}:a}));if("object"===v(a.dimensions)||"object"===v(a.relatedCatalogObjects)){b.dimensions={};a=a.relatedCatalogObjects||a.dimensions;for(var c in a)if(a.hasOwnProperty(c)){var d=a[c];Array.isArray(d)?
b.dimensions[c]=d:b.dimensions[c]=[d]}}return b},td=function(a){var b=[];Object.keys(a).forEach(function(c){b=b.concat(sd(c,a[c]))});return b},sd=function(a,b){return b.map(function(b){var c=ud(a);return{_id:b,type:c,tagType:"t"===c?a:void 0}})},ud=function(a){switch(a){case "Product":return"p";case "Article":return"a";case "Blog":return"b";case "Category":return"c";case "Promotion":return"P";default:return"t"}},vd=function(a){var b={type:"e",id:a.experienceId,stat:Za[a.stat],ug:a.control?"Control":
void 0};a.catalog&&(b.piks=td(a.catalog));return b},wd=function(a){var b={};b[".cStat"]=JSON.stringify(a.campaignStats.map(vd));nb(b);ob(b);fc.send(b)},Rc=function(a,b){var c={};nb(c);ob(c);c[".em"]=ja(a.message||a);c[".es"]=b;var d=window.navigator.userAgent.toLowerCase();b="unknown";var f="";switch(!0){case -1<d.indexOf("edge"):b="ie";f="edge";break;case -1<d.indexOf("trident"):b="ie";f="trident";break;case -1<d.indexOf("chrome")&&!!window.chrome:f=b="chrome";break;case -1<d.indexOf("firefox"):f=
b="mozilla";break;case -1<d.indexOf("safari"):f=b="safari"}"unknown"!==b?(d=(new RegExp("".concat(f,"/(.*?)s"),"gm")).exec(d),d=parseInt(!!d&&d[1]),d=isNaN(d)?null:d):d=null;c[".vt"]=b;d&&(c[".vn"]=d);switch(b){case "safari":ic(c,a,pd);break;case "mozilla":ic(c,a,qd);break;default:a&&a.stack&&"string"===typeof a.stack&&(a=a.stack.split("\n")[1],a=a.substring(a.indexOf("at ")+3).match(/(.*) \((.*):(\d+):(\d+)\)/),Array.isArray(a)&&hc(c,{header:a[1],fileName:a[2],line:a[3],column:a[4]}))}return c},
y=0,B=-1,H,I,Oa,Oc=function(a){if(!p.beaconConfig.trackAnonymousVisitors&&!Ob(a))return Promise.resolve();if(p.beaconConfig.sendEvents){var b={};b[".top"]=""+a.timeOnPageMillis;a.catalog&&0<Object.keys(a.catalog).length&&(b.item=JSON.stringify(rd(a.catalog)));a.action&&(b.action=a.action);if(a.performance){var c=a.performance.networkTime;c&&(b[".tt"]=c);(c=a.performance.eventDnsTime)&&(b[".ttdns"]=c);(c=a.performance.domLoadTime)&&(b[".dt"]=c);(c=a.performance.pageLoadTime)&&(b[".lt"]=c);(c=a.performance.sdkLoadTime)&&
(b[".bt"]=c);(c=a.performance.sdkParseTime)&&(b[".pt"]=c);(a=a.performance.sdkDnsTime)&&(b[".btdns"]=a)}nb(b);ob(b);gc.send(b);b=void 0}else b=Promise.resolve(a);return b},xd={setupActivityTimers:La,activityRegistered:ea,setUserInactive:sa};(function(a){a.ViewItem="View Item";a.ViewItemOutOfStock="View Item Out Of Stock";a.ViewItemDetail="View Item Detail";a.QuickViewItem="Quick View Item";a.StopQuickViewItem="Stop Quick View Item";a.ViewCategory="View Category";a.ViewTag="View Tag";a.AddToCart="Add To Cart";
a.ViewCart="View Cart";a.Purchase="Purchase";a.Share="Share";a.Review="Review";a.Comment="Comment";a.Favorite="Favorite";a.Search="Search";a.SearchViewResults="Search View Results";a.SearchClick="Search Click";a.ClickThrough="Click Through";a.UpdateLineItem="Update Line Item";a.RemoveFromCart="Remove From Cart";a.ViewBanditItems="View Bandit Items"})(r.ItemAction||(r.ItemAction={}));var Ad=function(a){Kb();Rb||(u.sdkLoadTime=Math.round((Sb()||{}).duration)||null,window.evergageBeaconParseTimeStart&&
window.window.evergageBeaconParseTimeEnd&&(u.sdkParseTime=window.evergageBeaconParseTimeEnd-window.evergageBeaconParseTimeStart),ad(),Rb=!0);yd(a);zd(a);n.onEventSend.emit(a);switch(a.itemAction){case r.ItemAction.QuickViewItem:h.result=w({},h.result,{backgroundPage:h.result.backgroundPage||h.result.currentPage,currentPage:w({},a,{action:a.action||r.ItemAction.QuickViewItem,itemAction:r.ItemAction.QuickViewItem})});break;case r.ItemAction.StopQuickViewItem:h.result=w({},h.result,{backgroundPage:null,
currentPage:h.result.backgroundPage||h.result.currentPage})}return new Promise(function(b,c){ec.send(a).then(function(c){Ib(a);if(a.flags&&a.flags.pageView){u.networkTime=Math.round((Tb()||{}).duration)||null;var d=Tb();d&&(u.eventDnsTime=Math.round(d.domainLookupEnd-d.domainLookupStart)||null);Ma();La()}d=J();var g=c.persistedUserId,h=c.anonAffinityId;if(g){var q=g.entityId;g=g.accountId;q&&(d.persistedUserId=q);g&&(d.persistedAccountId=g)}h&&h!==d.affinityId&&(d.affinityId=h);Nb(d);t.debug("Received event response: ",
c);n.onEventResponse.emit(c,a);n.onDeprecatedEventResponse.emit(c);b(c)}).catch(function(a){n.onFireException.emit(Error("Server: ".concat(JSON.stringify(a.message))),"Server Response");c(a)})})},yd=function(a){var b=a.flags;a.source=a.source||{};var c=a.source||{},d;(d=a.source.pageType)||(d=h.result.currentPage&&h.result.currentPage.source?h.result.currentPage.source.pageType:void 0);a.source=w({},c,{pageType:d,url:a.source.url||window.location.href,urlReferrer:a.source.urlReferrer||document.referrer,
channel:a.source.channel||"Web",contentZones:Bd(a.source,(b||{}).pageView),time:a.source.time,configVersion:p.endpointConfig.siteConfigVersion,beaconVersion:16});b=J();a.user=w({},a.user||{},{anonId:b.uuid});b.persistedUserId&&(a.user.encryptedId=b.persistedUserId);b=J();a.account=a.account||{};b.persistedAccountId&&(a.account.encryptedId=b.persistedAccountId);if(b=wa.getParameterByName("evergageTestMessages"))a.debug?a.debug.testMessages=b:a.debug={testMessages:b};if(u.domLoadTime||u.pageLoadTime||
u.sdkParseTime||u.sdkLoadTime||u.sdkDnsTime)a.performance=w({},u.domLoadTime&&{domLoadTime:u.domLoadTime},{},u.pageLoadTime&&{pageLoadTime:u.pageLoadTime},{},u.sdkParseTime&&{sdkParseTime:u.sdkParseTime},{},u.sdkLoadTime&&{sdkLoadTime:u.sdkLoadTime},{},u.sdkDnsTime&&{sdkDnsTime:u.sdkDnsTime})},Bd=function(a,b){return(a.contentZones||[]).reduce(function(a,d){!b&&"object"===v(d)&&(d||{}).name&&t.warn("Using content zone objects in 'sendEvent' will soon be deprecated in favor of zone names as strings");
d="string"===typeof d&&""!==d?d:(d||{}).name;"string"===typeof d&&""!==d&&a.push(d);return a},[])},zd=function(a){a.catalog&&0<Object.keys(a.catalog).length&&Object.keys(a.catalog).forEach(function(b){if(a.catalog[b]){if(a.catalog[b].dimensions&&a.catalog[b].relatedCatalogObjects)return n.onFireException.emit(Error("Catalog cannot include both dimensions and relatedCatalogObjects"),"Sitemap"),!1;var c=a.catalog[b].relatedCatalogObjects||a.catalog[b].dimensions;c&&"object"===v(c)&&Object.keys(c).forEach(function(a){if(!Array.isArray(c[a]))return n.onFireException.emit(Error("".concat(a,
" is not an array. Related Catalog Objects must have type of string[]")),"Sitemap"),!1})}});return!0},pb=function(a){a:{var b=a,c=h.result.matchedConfig;try{b=c&&c.onActionEvent?c.onActionEvent(b):b;if("object"===v(b)){a=b;break a}n.onFireException.emit(Error("onActionEvent failed for the ".concat(h.result.matchedConfig.name," page config. Must return an object or null.")),"Site-wide Javascript")}catch(d){n.onFireException.emit(Error("onActionEvent failed for the ".concat(h.result.matchedConfig.name,
" page config. ").concat(d.message,".")),"Site-wide Javascript")}a=void 0}a:{b=a;c=h.config;try{b=c.global&&c.global.onActionEvent?c.global.onActionEvent(b):b;if("object"===v(b)){a=b;break a}n.onFireException.emit(Error("onActionEvent failed for the global page config. Must return an object or null."),"Site-wide Javascript")}catch(d){n.onFireException.emit(Error("onActionEvent failed for the global page config. ".concat(d.message,".")),"Site-wide Javascript")}a=void 0}return p.beaconConfig.trackAnonymousVisitors||
Ob(a)?p.beaconConfig.sendEvents?Ad(a):Promise.resolve(a):(t.debug("An anonymous event has been blocked. trackAnonymous has been turned off and event has no named user."),Promise.resolve())},xa,Cd=function(){qb();jc()&&(xa=setInterval(function(){var a=!1,b=(new Date).getTime(),c=h.result.matchedConfig.listeners.map(function(b){if(b.selectorFound)return b;b=kc(b);a=b.selectorFound||a;return b}),d=h.result.matchedConfig.contentZones.map(function(b){if(b.selectorFound)return b;b=rb(b);a=b.selectorFound||
a;return b});a&&Object.assign(h.result.matchedConfig,w({},h.result.matchedConfig,{contentZones:d,listeners:c}));(50<(new Date).getTime()-b||!jc())&&qb()},1E3))},jc=function(){if(h.result.matchedConfig){var a=h.result.matchedConfig,b=a.listeners;a=a.contentZones;return b&&a?b.filter(function(a){return!a.selectorFound}).length||a.filter(function(a){return!a.selectorFound}).length:!1}return!1},qb=function(){"number"===typeof xa&&clearInterval(xa);xa=null},kc=function(a){var b=k(a.selector),c=w({},a,
{selectorFound:0<b.length});b.on(c.bind,function(a){if(c.options)t.warn("ListenerOptions are deprecated. Please use a callback in the Listener instead."),a=w({},c.options,{user:{}}),pb(a);else try{c.callback(a)}catch(f){n.onFireException.emit(Error("Listener callback on ".concat(c.bind," bound to ").concat(c.selector," failed for the ").concat(h.result.matchedConfig.name," page config. ").concat(f.message,".")),"Site-wide Javascript")}});return c},rb=function(a){var b=!(a||{}).selector||0<k((a||{}).selector).length;
return w({},a,{selectorFound:b})},Dd=function(){h.result&&h.result.matchedConfig&&h.result.matchedConfig.listeners&&h.result.matchedConfig.listeners.forEach(function(a){k(a.selector).off(a.bind)})},Ed={_id:!0,currency:!0,inventoryCount:!0,price:!0,tagType:!0,type:!0},lc=function(){var a=0<k('script[src*="//translate.googleusercontent.com"]').length,b=0<k("html.translated-ltr").length||0<k("html.translated-rtl").length;if(a||b)return t.debug("page is translated"),!0;try{var c=0<k(window.parent.document).find('script[src*="//www.microsofttranslator.com"]').length,
d=0<k(window.parent.document).find('frame[src*="//www.worldlingo.com"]').length;if(c||d)return t.debug("page is translated"),!0;t.debug("page is not translated");return!1}catch(f){return t.debug("exception caught, assuming page is untranslated "+f),!1}},Fd=function(a){lc()&&Object.keys(a).forEach(function(b){var c=a[b];Object.keys(c).forEach(function(a){Ed[a]||delete c[a]})});return a},nc=function(a){return new Promise(function(b,c){var d=h.config.pageTypeDefault;d&&ka({pageName:d.name,status:F.Pending});
d&&!a.length?(sb(d),b(d)):(Gd(a),a.map(function(f){Hd(f).then(function(g){g?(d&&mc(d),sb(f),b(f)):(mc(f),Id(a)||(d?(sb(d),b(d)):c("No matching page found")))}).catch(function(a){n.onFireException.emit(Error("isMatch failed while evaluating the ".concat(f.name," page config")),"Site-wide Javascript")})}))})},Jd=function(){var a=h;a.result.matchStatus&&(a.result.matchStatus.forEach(function(a){a.status===F.Running&&a._reject()}),h.result.matchStatus=[]);n.onPageMatchStatusUpdated.emit(h.result.matchStatus)},
Gd=function(a){a.forEach(function(a){ka({pageName:a.name,status:F.Pending})})},sb=function(a){ka({pageName:a.name,endTime:Date.now(),status:h.result.matchStatus.find(function(a){return a.status===F.Selected})?F.Matched:F.Selected})},mc=function(a){ka({pageName:a.name,status:F.Rejected,endTime:Date.now()})},Id=function(a){return h.result.matchStatus.filter(function(a){return a.status===F.Rejected},0).length<a.length},Hd=function(a){return new Promise(function(b,c){ka({pageName:a.name,status:F.Running,
startTime:Date.now(),_reject:c});"function"===typeof a.isMatch?(c=a.isMatch(),"object"===v(c)?c.then(function(a){b(a)}).catch(function(){}):b(c)):n.onFireException.emit(Error("isMatch failed while evaluating the ".concat(a.name," page config. isMatch must be a function.")),"Site-wide Javascript")})},ka=function(a){h.result.matchStatus=[].concat(la(h.result.matchStatus||[]),[a]);n.onPageMatchStatusUpdated.emit(h.result.matchStatus)},Kd=function(a,b){return new Promise(function(b,d){n.onInitSitemap.once(function(){return d("sitemap_reinit")});
L(a,"lineItems",!1,!0).then(function(a){var c={complete:{Product:[]}};0===Object.keys(a).length&&b(c);a=L(a,"lineItems",!0,!1);c.complete.Product=a;b(c)}).catch(function(a){n.onFireException.emit(Error("Cart Config was rejected"),"Site-wide Javascript")})})},L=function(a,b,c,d){try{h.config.currentKey=b;if(a)if("dimensions"!==b&&"relatedCatalogObjects"!==b&&"lineItems"!==b&&"attributes"!==b||!d){var f="function"===typeof a?a():a;"categories"===b&&Array.isArray(f)&&"object"!==v(f[0])&&"c"!==f[0].type&&
"string"!==typeof f[0]._id?f=Ld(f):"lineItems"===b&&"object"===v(f)&&(f=Md(f))}else f=Nd(a,b);return c?tb(b,f,h.config.settings.canonicalizeIds):f}catch(g){n.onFireException.emit(Error("getValue for ".concat(b," failed on ").concat(h.result.matchedConfig.name," while evaluating custom function. ").concat(g.message,".")),"Site-wide Javascript")}},oc=function(a,b,c){if(a&&"object"===v(a)&&"function"===typeof a.then)n.onFireException.emit(Error("getValue for ".concat(b," failed on ").concat(h.result.matchedConfig.name,
" while evaluating custom function. ").concat(b," cannot be a Promise.")),"Site-wide Javascript");else if(a||"number"===typeof a||"boolean"===typeof a)c[b]=a},Od=function(a,b){return new Promise(function(c,d){n.onInitSitemap.once(function(){return d("sitemap_reinit")});for(var f=Object.keys($a),g=[],h=0;h<f.length;h++){var q=f[h];q=L(a[q],q,!1,!0);g.push(q)}Promise.all(g).then(function(d){var g={_id:null};d.forEach(function(a,b){b=f[b];a=L(a,b,!0,!1);oc(a,b,g)});Object.keys(a).forEach(function(b){if(!f.includes(b)){var c=
L(a[b],b,!0,!0);oc(c,b,g)}});d=D({},b,g);c(d)}).catch(function(a){n.onFireException.emit(Error("Catalog Config was rejected"),"Site-wide Javascript")})})},Pd=function(a){return new Promise(function(b,c){n.onInitSitemap.once(function(){return c("sitemap_reinit")});var d=[],f=Object.keys(a);f.forEach(function(b){h.config.currentKey=b;b=L(a[b],b,!1,!0);d.push(b)});Promise.all(d).then(function(a){var c={},d={Product:{}};a.forEach(function(a,b){b=f[b];a=L(a,b,!0,!1);c[b]=a});d.Product=c;b(d)}).catch(function(a){n.onFireException.emit(Error("Order Config was rejected"),
"Site-wide Javascript")})})},Md=function(a){var b;a._id?b=a._id.length:a.sku?b=a.sku.length:n.onFireException.emit(Error("Either _id or sku must be defined for lineItems"),"Sitemap");for(var c=[],d=function(){var a=ba(g[f],2),d=a[0];a=a[1];a.length!=b?n.onFireException.emit(Error("Resolving multiple values for ".concat(d," failed on ").concat(h.result.matchedConfig.name,". ").concat(d," does not have the same number of values as _id")),"Site-wide Javascript"):a.forEach(function(a,b){c[b]||(c[b]={_id:null,
quantity:null});c[b][d]=a})},f=0,g=Object.entries(a);f<g.length;f++)d();return c},Ld=function(a){return a.map(function(a){return{type:"c",_id:a}})},Nd=function(a,b){var c={},d=Object.keys(a),f={};d.forEach(function(b){var d=L(a[b],b,!1,!0);c[b]=d});return"lineItems"===b||"dimensions"===b||"relatedCatalogObjects"===b?Promise.all(Object.values(c)).then(function(a){a.forEach(function(a,b){b=d[b];(a=L(a,b,!1,!1))&&(f[b]=a)});return f}):c},tb=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?
arguments[2]:!0,d=b;return d=Array.isArray(b)?"lineItems"===a?Qd(b,c):b.map(function(b){return pc(a,b,c)}):pc(a,b,c)},Qd=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0;return a.map(function(a){return Rd(a,b)})},Rd=function(a){var b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:!0,c;for(c in a)if("item"===c)for(var d in a[c])a[c][d]=tb(d,a[c][d],b);else a[c]=tb(c,a[c],b);return a},pc=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:!0,
d=b;"price"!==a&&"listPrice"!==a&&"totalValue"!==a&&"rating"!==a||"string"!==typeof d||(d=kb(d));if("url"===a||"imageUrl"===a)d=jb(d);"_id"!==a&&"sku"!==a&&"orderId"!==a||"number"!==typeof d||(d=d.toString());!c||"string"!==typeof d||"_id"!==a&&"sku"!==a&&"orderId"!==a&&"alternateId"!==a&&"parentId"!==a||(d=d.toUpperCase());"string"===typeof d&&(0<=d.indexOf("&")&&(c=document.createElement("textarea"),Object.assign(c,{innerHTML:d}),d=c.value),d=d.trim());"description"===a&&"string"===typeof d&&200<
d.length&&(d=d.substr(0,197)+"...");"quantity"!==a&&"inventoryCount"!==a&&"numRatings"!==a||"string"!==typeof d||(d=dc(d));return d},qc=function(a){a.global=a.global||{};"object"!=v(a.global)&&n.onFireException.emit(Error("The global config has a type of ".concat(v(a.global),", but it must be an object")),"Sitewide Javascript");Object.assign(h.config,w({},a));n.onInitSitemap.emit(h.config)},sc=function(a){rc(a);return!0},tc=function(a){h.result.matchedConfig=w({},a,{contentZones:Sd(a),listeners:Td(a)});
var b=h.result,c=h.result.currentPage||{};var d="function"===typeof a.action?a.action():a.action;var f=a.catalog?a.itemAction||r.ItemAction.ViewItem:null,g=a.name;var l="function"===typeof a.locale?a.locale():a.locale;b.currentPage=w({},c,{action:d,itemAction:f,source:{pageType:g,locale:l,contentZones:Ud(a)},flags:{pageView:!0},user:{},performance:{},debug:{}});return Vd(a)},Vd=function(a){return a.itemAction===r.ItemAction.ViewCart||a&&a.cart&&a.cart.complete?Wd(a).then(function(a){h.result.currentPage.itemAction=
r.ItemAction.ViewCart;h.result.currentPage.cart=a}):a.itemAction===r.ItemAction.Purchase||a&&a.order?Xd(a).then(function(a){h.result.currentPage.itemAction=r.ItemAction.Purchase;h.result.currentPage.order=a}):Yd(a).then(function(a){h.result.currentPage.catalog=a})},Wd=function(a){var b={};if(!a.catalog&&!a.cart&&!a.order)return Promise.resolve(b);if(a.cart)var c=a.cart;else if(a.order||a.catalog){var d={},f=a.order||a.catalog;Object.keys(f).forEach(function(a){var b=f[a];b&&b.lineItems&&(d[a]=b.lineItems)});
c={complete:d}}if(c.complete){a=c.complete;for(var g in a)return Array.isArray(g.match(/[A-Z]/))?"Product"!==g?(n.onFireException.emit(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):Kd(a[g],g):(n.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(g.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))}},Xd=function(a){var b={};if(!a.catalog&&!a.order)return Promise.resolve(b);a=a.order||a.catalog;
for(var c in a)return Array.isArray(c.match(/[A-Z]/))?"Product"!==c?(n.onFireException.emit(Error("Item type must be Product"),"Sitewide Javascript"),Promise.resolve(b)):Pd(a[c]):(n.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(c.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},Yd=function(a){var b={};if(!a.catalog)return Promise.resolve(b);for(var c in a.catalog)return Array.isArray(c.match(/[A-Z]/))?Zd(a.catalog[c],
c):(n.onFireException.emit(Error("Item types must be capitalized. Did you mean ".concat(c.replace(/^\w/,function(a){return a.toUpperCase()}),"?")),"Sitewide Javascript"),Promise.resolve(b))},Zd=function(a,b){return Od(a,b).then(function(a){Object.keys(a).forEach(function(c){a[c]._id||n.onFireException.emit(Error("Invalid ".concat(b,", missing _id for the ").concat(h.result.matchedConfig.name," page config.")),"Site-wide Javascript")});return h.config.settings.truncateTranslated?Fd(a):a})},Sd=function(a){return(a.contentZones||
[]).reduce(function(a,c){c=rb(c);"string"===typeof(c||{}).name&&""!==(c||{}).name&&a.push(c);return a},[])},Ud=function(a){return(a.contentZones||[]).reduce(function(a,c){c=rb(c);"string"===typeof(c||{}).name&&""!==(c||{}).name&&a.push((c||{}).name);return a},[])},Td=function(a){return(a.listeners||[]).map(function(a){return kc(a)})},$d=function b(){for(var c=arguments.length,d=Array(c),f=0;f<c;f++)d[f]=arguments[f];return d.reduce(function(c,d){Object.keys(d).forEach(function(f){var g=c[f],h=d[f];
Array.isArray(g)&&Array.isArray(h)?Object.assign(c,D({},f,g.concat.apply(g,la(h)))):g&&"object"===v(g)&&h&&"object"===v(h)?Object.assign(c,D({},f,b(g,h))):Object.assign(c,D({},f,h))});return c},{})},uc=function(b){var c=h.config.global||{},d=c.onActionEvent;delete c.onActionEvent;b=$d(c,b);c.onActionEvent=d;return b},de=function(b){try{return ae(b.global),be(b.pageTypeDefault),ce(b.pageTypes),!0}catch(c){return n.onFireException.emit(Error(c),"Sitemap"),!1}},be=function(b){b&&Object.keys(b).forEach(function(b){if("contentZones"!==
b&&"listeners"!==b&&"locale"!==b&&"name"!==b&&"onActionEvent"!=b)throw Error("".concat(b," is not a valid default config attribute."));})},ae=function(b){b&&Object.keys(b).forEach(function(c){if("contentZones"!==c&&"listeners"!==c&&"locale"!==c&&"onActionEvent"!=c)throw Error("".concat(c," is not a valid global config attribute."));if("contentZones"===c&&b[c]&&!Array.isArray(b[c]))throw Error("global config: contentZones must be provided as an array of objects");})},ce=function(b){b.forEach(function(b){if(!b.name||
!b.isMatch)throw Error("All page configs must have a name and isMatch attribute defined");if(b&&b.contentZones&&!Array.isArray(b.contentZones))throw Error("".concat(b.name," pageType config: contentZones must be provided as an array of objects"));})},ee=function(){var b=h.result;pb(h.result.currentPage);h.result=b},rc=function(b){qc(b);Dd();Jd();qb();if(h.config.settings.runOnTranslatedPage||!lc())h.result.currentPage=null,de(b)&&nc(b.pageTypes).then(uc).then(tc).then(ee).then(Cd).catch(function(b){"sitemap_reinit"!==
b&&n.onFireException.emit(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})},C=function(b,c){if(b)try{return b(c)}catch(d){return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name," inside of the custom transform function. ").concat(d)),"Site-wide Javascript"),null}return c},fe=k,Ta,Ua,Va,Wa,Xa,vc=function(){return w({},p.endpointConfig,{},p.beaconConfig)},wc=function(b){var c=document.dispatchEvent(new CustomEvent(O.OnInit,
{detail:{beaconConfig:w({},p.beaconConfig,{},p.endpointConfig,{},b)},cancelable:!0}));return new Promise(function(d){if(c){if(Wc(window.navigator.userAgent||"")?S("You are a robot."):"prerender"===document.visibilityState&&Xc?S("Page is pre-rendered and loaded in Safari."):1){var f=p.endpointConfig,g=f.account,h=f.dataset;p.beaconConfig=w({},p.beaconConfig,{trackerUrl:f.trackerUrl},b);f=p.beaconConfig.cookieDomain;f||(f=window.location.hostname);K.setCookieHash(g,h,f);db.setStorageKeyPrefix(g,h);
var k=K.read("a");f=K.read("n");k&&"object"===v(k)&&0<Object.keys(k).length?(p.visitor=w({},p.visitor,{},{uuid:k.uuid,affinityId:k.affinityId,persistedUserId:k.puid,persistedAccountId:k.paid}),t.debug("Loaded visitor record from cookie: ".concat(JSON.stringify(J())))):"string"===typeof k&&0<k.length||null!=f&&"object"===v(f)?(k&&"object"!==v(k)&&(k=k.split("."),0<k.length&&(p.visitor.uuid=k[0],1<k.length&&k[1]&&(p.visitor.affinityId=k[1])),K.remove("a",{domain:p.beaconConfig.cookieDomain}),K.remove("a",
{domain:eb(location.hostname)})),f&&"object"===v(f)&&(f.puid&&"string"===typeof f.puid&&(p.visitor.persistedUserId=f.puid),f.paid&&"string"===typeof f.paid&&(p.visitor.persistedAccountId=f.paid),K.remove("n",{domain:p.beaconConfig.cookieDomain}),K.remove("n",{domain:eb(location.hostname)})),t.debug("Classic cookie detected with anonymousId: ".concat(J().uuid))):(f=p.visitor,k=(window.navigator.userAgent||"")+(window.navigator.platform||"")+(new Date).getTime+JSON.stringify({})+Math.random(),k=ab(k).slice(0,
16),f.uuid=k,t.debug("Created new visitor record. anonymousId: ".concat(J().uuid)));f=J();Nb(f);t.trace("Refreshing session");db.read("sessionTicket")||db.write("sessionTicket","*");f=p.beaconConfig.trackerUrl;ec=new od(f+"/api2/event/"+p.endpointConfig.dataset);fc=new mb(f+"/msreceiver");gc=new mb(f+"/pr");Lb=new nd(f+"/er");Qc();xd.setupActivityTimers();if("shutDown"!==p.beaconState)return t.debug("Initialized Tracking Beacon v".concat(16," for account[").concat(g,"] dataset[").concat(h,"]")),ta("running"),
d(p),!0}}else t.debug("Cancelling activity tracking."),clearTimeout(H),H=-1,N(window,"unload",Pa),N(window,"blur",Qa),N(window,"focus",Ra),N(document,"mousemove keydown scroll click",ea),t.debug("Initialization aborted onBeforeInitHook() returned false.")})};r.CustomEvents=O;r.addEventListener=function(b){t.warn("Evergage.addEventListener is deprecated. Use the Evergage.CustomEvents.OnEventSend event instead.");return null};r.addResponseListener=function(b){t.warn("Evergage.addResponseListener is deprecated. Use the Evergage.CustomEvents.OnEventReponse event instead.");
return n.onDeprecatedEventResponse.on(b)};r.build=function(b){nc(b.pageTypes).then(uc).then(tc).catch(function(b){"sitemap_reinit"!==b&&n.onFireException.emit(Error("Unhandled exception: ".concat(b)),"Site-wide Javascript")})};r.cashDom=fe;r.configure=function(b,c){if("running"==p.beaconState){t.debug("Unbinding signal subscriptions.");try{n.unbindAll()}catch(g){t.debug("Failed to unbind Experience.Signals",g)}}ta("initializing");p.endpointConfig=w({},p.endpointConfig,{},b);var d=p.endpointConfig;
b=d.account;var f=d.dataset;d=d.siteConfigVersion;if(!b||!f)return S("account/dataset undefined. Check your beacon configuration.");if(!d)return S("beacon config version undefined");p.endpointConfig.cdnUrl||(p.endpointConfig.cdnUrl="https://".concat(Sc));if(!p.endpointConfig.cdnUrl)return S("cdnUrl undefined. Check your beacon configuration.");p.endpointConfig.trackerUrl||(d=p.endpointConfig,b="https://".concat({account:b,dataset:f}.account,".").concat("evergage.com"),d.trackerUrl=b);if(!p.endpointConfig.trackerUrl)return S("trackerUrl undefined. Check your beacon configuration.");
p.beaconConfig=w({},p.beaconConfig,{},c);ta("configured")};r.getConfig=vc;r.getContentZoneSelector=function(b){var c=(h.result.matchedConfig||{}).contentZones;return c?(c=c.find(function(c){return c.name===b}))&&c.selector?c.selector:null:null};r.getCurrentPage=Jb;r.getLoggingLevel=function(){return t.getLoggingLevel()};r.getState=function(){return h};r.getVersion=function(){return 16};r.init=wc;r.initSitemap=sc;r.listener=function(b,c,d){return"object"===v(d)?{bind:b,selector:c,options:d}:"function"===
typeof d?{bind:b,selector:c,callback:d}:null};r.log=t;r.onBeforeInit=function(b,c){t.warn("Evergage.onBeforeInit is deprecated. Use the Evergage.CustomEvents.OnInit event instead.");b(p.endpointConfig,{});return!1};r.reinit=function(){wc(vc()).then(function(){sc(h.config)})};r.removeCookies=function(b){document.cookie.split(";").forEach(function(c){c=c.split("=")[0].trim();/_evg(a|n)_/.test(c)&&wa.cookie.remove(c,{domain:b||p.beaconConfig.cookieDomain});b||wa.cookie.remove(c,{domain:eb(location.hostname)})})};
r.resolvers={fromSelector:function(b,c){return function(){if("string"!=typeof b)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;var d=k(b).first().text();return d=C(c,d)}},fromSelectorAttribute:function(b,c,d){return function(){if("string"!=typeof b)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,
". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof c)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=k(b).first().attr(c);return f=C(d,f)}},fromSelectorMultiple:function(b,c){return function(){if("string"!=typeof b)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,
". Selector must be a string.")),"Site-wide Javascript"),null;var d=k(b).get().map(function(b){return k(b).text()});return d=C(c,d)}},fromSelectorAttributeMultiple:function(b,c,d){return function(){if("string"!=typeof b)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". Selector must be a string.")),"Site-wide Javascript"),null;if("string"!=typeof c)return n.onFireException.emit(Error("getValue for ".concat(h.config.currentKey,
" failed on ").concat(h.result.matchedConfig.name,". Attribute must be a string.")),"Site-wide Javascript"),null;var f=k(b).get().map(function(b){return k(b).attr(c)});return f=C(d,f)}},fromItemProp:function(b,c){return function(){var d=k("[itemprop='"+b+"']").first().attr("content");return d=C(c,d)}},fromMeta:function(b,c){return function(){var d=k("meta[name='"+b+"']").first().attr("content")||k("meta[property='"+b+"']").first().attr("content");return d=C(c,d)}},fromWindow:function(b,c){return function(){var d=
lb(b);return d=C(c,d)}},fromJsonLd:function(b,c){return function(){var d=k("script[type='application/ld+json']").first().text();try{var f=JSON.parse(d);if(b){var g=lb(b,f);return C(c,g)}return C(c,f)}catch(l){n.onFireException.emit(Error("Parsing JSON-LD for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". ").concat(l)),"Site-wide Javascript")}}},fromCanonical:function(b){return function(){var c=k("link[rel=canonical]").attr("href");return c=C(b,c)}},fromHref:function(b){return function(){var c=
window.location.href;return c=C(b,c)}},buildCategoryId:function(b,c,d,f){return function(){var g=Array.from(k(b));c&&(g=g.slice(c));d&&(g=g.slice(0,-1));var l=[];g.forEach(function(b){(b=k(b).text().trim())?l.push(b):n.onFireException.emit(Error("buildCategoryId for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});g=l.join("|");return g=C(f,g)}},buildCategoryIdAttribute:function(b,c,d,f,g){return function(){var l=
Array.from(k(b));d&&(l=l.slice(d));f&&(l=l.slice(0,-1));var m=[];l.forEach(function(b){(b=k(b).attr(c).trim())?m.push(b):n.onFireException.emit(Error("buildCategoryId for ".concat(h.config.currentKey," failed on ").concat(h.result.matchedConfig.name,". A category part is null.")),"Site-wide Javascript")});l=m.join("|");return l=C(g,l)}}};r.runSpecificConfig=function(b){Object.assign(h.config,{pageTypes:[b]});rc(h.config)};r.sendEvent=pb;r.sendException=fa;r.sendStat=function(b){b.campaignStats.forEach(function(b){var c=
h.campaignResponses.find(function(c){return c.experienceId===b.experienceId});n.onStatSend.emit(b,c)});return p.beaconConfig.sendEvents?wd(b):Promise.resolve(b)};r.setConfig=qc;r.setLoggingLevel=function(b){t.setLoggingLevel(b)};r.shutDown=S;r.util=wa;return r}({});
window.evergageBeaconParseTimeEnd = (new Date().getTime());

(function configureEvergage() {
    try {
       Evergage.configure({
           account: "axxonconsultingsa",
           dataset: "sended",
           cdnUrl: "https://cdn.evergage.com",
           trackerUrl: "https://axxonconsultingsa.us-5.evergage.com",
           siteConfigVersion: "3"
       },{"allowBotTraffic":false,"corsAllowedOrigins":["*"],"defaultCurrency":"USD","defaultLocale":null,"disableQtipWindowScroll":false,"doNotStoreCookiesRequireProvidedAnonId":false,"doNotTrackPingRequestsForActions":false,"enableCorsRestrictedOrigins":false,"enableMessageRotation":false,"enableRememberMeUserIds":false,"enableTemplateEsc":false,"hideContentSections":false,"hideContentSectionsMillis":2500,"hidePagesForRedirect":false,"hidePagesForRedirectMillis":1000,"identityAttributes":["customerId","emailAddress","profileId","sfmcContactKey"],"lastModified":1645035777095,"preventSensitiveDataCapture":false,"rememberMeUserIdsMillis":63072000000,"sendErrorEvents":true,"showPoweredBy":false,"siteConfigExecBeforePageReady":false,"spaRouteChangeTimeout":500,"trackAnonymousVisitors":true,"trackContextualRelatedItems":false,"trackSubdomainAsCompany":false,"trackUnknownPagesByTitle":false,"treatHashChangeAsPageLoad":false}       );
    } catch (e) {
          console.error(e);
    }
})();


try {
    const CAMPAIGN_STAT_ATTRIBUTE = {
    CAMPAIGN: "data-evg-campaign-id",
    EXPERIENCE: "data-evg-experience-id",
    USER_GROUP: "data-evg-user-group",
    CLICKTHROUGH: "data-evg-clickthrough",
    IGNORE_CLICKTHROUGH: "data-evg-ignore-clickthrough",
    DISMISSAL: "data-evg-dismissal",
    ITEM: "data-evg-item-id",
    ITEM_TYPE: "data-evg-item-type"
};

const CAMPAIGN_STAT_TYPE = {
    IMPRESSION: "Impression",
    CLICKTHROUGH: "Clickthrough",
    DISMISSAL: "Dismissal"
};

const CAMPAIGN_STAT_USER_GROUP = {
    TEST: "Test",
    CONTROL: "Control"
};

document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (event) => {
    if (validateOnTemplateDisplayEndEvent(event)) {
        const payload = event.detail.payload;
        const campaignElement = getCampaignElementFromPayload(payload);
        sendImpression(payload, campaignElement);
        bindCampaignClickthroughsAndDismissals(campaignElement);
    }
});

const sendImpression = (payload, campaignElement) => {
    const userGroup = payload.userGroup;
    const stat = {
        control: userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL,
        experienceId: payload.experience,
        stat: CAMPAIGN_STAT_TYPE.IMPRESSION
    };
    const itemStats = generateItemStats(campaignElement);
    if (Object.keys(itemStats).length > 0) {
        stat.catalog = itemStats;
    }
    if (userGroup === CAMPAIGN_STAT_USER_GROUP.CONTROL || (userGroup === CAMPAIGN_STAT_USER_GROUP.TEST && campaignElement.length > 0)) {
        Evergage.sendStat({campaignStats: [stat]});
    } else {
        Evergage.log.warn("campaignStatsTracking.js", "Experience", payload.experience, "not found in DOM.");
    }
};

const generateItemStats = (campaignElement) => {
    const catalogStats = {};
    const itemNodes = Evergage.cashDom(campaignElement).find("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]");
    if (!itemNodes || itemNodes.length === 0) {
        return catalogStats;
    }
    Array.from(itemNodes).forEach(function(itemNode) {
        const itemId = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
        const itemType = Evergage.cashDom(itemNode).attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);
        if (itemId && itemType) {
            if (!catalogStats[itemType]) {
                catalogStats[itemType] = [];
            }
            if (!catalogStats[itemType].includes(itemId)) {
                catalogStats[itemType].push(itemId);
            }
        }
    });
    return catalogStats;
}

const buildCampaignSelector = (experienceId) => {
    return `[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}='${experienceId}']`
}

const getCampaignElementFromPayload = (payload) => {
    const experienceId = payload.experience;
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignSelector);
};

const getCampaignClickthroughAndDismissalElements = (campaignElement) => {
    const experienceId = Evergage.cashDom(campaignElement).attr(`${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}`);
    const campaignSelector = buildCampaignSelector(experienceId);
    return Evergage.cashDom(campaignElement).parent().find(`
        ${campaignSelector}[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} a,
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        ${campaignSelector} [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]
    `);
};

const sendClickthroughOrDismissal = (e) => {
    if (Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.IGNORE_CLICKTHROUGH}]`).length > 0) {
        return;
    }
    const campaignElement = Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE}]`);
    if (campaignElement.length > 0  && Evergage.cashDom(e.target).closest(`
        a,
        [${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}],
        [${CAMPAIGN_STAT_ATTRIBUTE.DISMISSAL}]`).length > 0) {

        const stat = {
            control: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.USER_GROUP) === CAMPAIGN_STAT_USER_GROUP.CONTROL,
            experienceId: campaignElement.attr(CAMPAIGN_STAT_ATTRIBUTE.EXPERIENCE),
            stat: Evergage.cashDom(e.target).closest(`[${CAMPAIGN_STAT_ATTRIBUTE.CLICKTHROUGH}]`).length > 0 || Evergage.cashDom(e.target).closest("a").length > 0
                ? CAMPAIGN_STAT_TYPE.CLICKTHROUGH
                : CAMPAIGN_STAT_TYPE.DISMISSAL
        };

        if (stat.stat === CAMPAIGN_STAT_TYPE.CLICKTHROUGH) {
            const itemClickthroughStats = generateItemClickthroughStats(e.target);
            if (Object.keys(itemClickthroughStats).length > 0) {
                stat.catalog = itemClickthroughStats;
            }
        }

        Evergage.sendStat({campaignStats: [stat]});
    }
};

const generateItemClickthroughStats = (target) => {
    const itemStats = {};
    const itemId = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM);
    const itemType = Evergage.cashDom(target).closest("[" + CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE + "]").attr(CAMPAIGN_STAT_ATTRIBUTE.ITEM_TYPE);

    if (itemId && itemType) {
        itemStats[itemType] = [itemId];
    }
    return itemStats;
}

const bindCampaignClickthroughsAndDismissals = (campaignElement) => {
    const elements = getCampaignClickthroughAndDismissalElements(campaignElement);
    elements.off("click", sendClickthroughOrDismissal);
    elements.on("click", sendClickthroughOrDismissal);
};

const validateOnTemplateDisplayEndEvent = (event) => {
    if (!event.detail) {
        Evergage.log.warn("campaignStatsTracking.js", "No detail object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload) {
        Evergage.log.warn("campaignStatsTracking.js", "No payload object found for onTemplateDisplayEndEvent", event);
        return false;
    }
    if (!event.detail.payload.campaign) {
        Evergage.log.warn("campaignStatsTracking.js", "No campaign found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.experience) {
        Evergage.log.warn("campaignStatsTracking.js", "No experience found in payload object", event.detail);
        return false;
    }
    if (!event.detail.payload.userGroup) {
        Evergage.log.warn("campaignStatsTracking.js", "No user group found in payload object", event.detail);
        return false;
    }
    return true;
};

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Campaign Stats Tracking:campaignStatsTracking.js");
    }
};


try {
    Evergage.DisplayUtils = Evergage.DisplayUtils || (function () {
    var unbindByIds = {};

    function generateId() {
        var id = Math.random().toString(36).slice(2);
        while (unbindByIds[id]) {
            id = Math.random().toString(36).slice(2);
        }
        return id;
    }

    function getBindId(providedId, defaultId, useRandomId) {
        return useRandomId ? generateId() : (providedId || defaultId);
    }

    function buildBaseMethods(bindId, useRandomId) {
        return {
            pageElementLoaded: function (targetSelector, observerSelector) {
                observerSelector = typeof observerSelector === "string" ? observerSelector : "body";
                if (typeof targetSelector !== "string" || targetSelector === "" || typeof observerSelector !== "string" || observerSelector === "") {
                    throw new Error("[pageElementLoaded] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var targetElements = Evergage.cashDom(targetSelector);
                    if (targetElements.length > 0) {
                        resolve(targetElements[0]);
                    } else {
                        var observerNode = Evergage.cashDom(observerSelector)[0];
                        var observer = new MutationObserver(function (mutationList, observer) {
                            for (var mutationRecord of mutationList) {
                                if (mutationRecord.addedNodes && mutationRecord.addedNodes.length > 0) {
                                    for (var addedNode of mutationRecord.addedNodes) {
                                        var targetElement = Evergage.cashDom(addedNode).is(targetSelector)
                                            ? addedNode
                                            : Evergage.cashDom(addedNode).find(targetSelector).get(0);
                                        if (targetElement) {
                                            if (bindId) {
                                                bindingMethods.unbind(bindId);
                                            } else {
                                                observer.disconnect();
                                            }
                                            resolve(targetElement);
                                            return;
                                        }
                                    }
                                }
                            }
                        });
                        observer.observe(observerNode, {
                            childList: true,
                            subtree: true,
                        });
                    }

                    bindId = getBindId(bindId, "<pageElementLoaded>" + targetSelector, useRandomId);
                    unbindByIds[bindId] = function () {
                        observer && observer.disconnect();
                    };
                });
            },
            pageElementVisible: function (selector, percentage) {
                var threshold = percentage || 0;
                if (typeof selector !== "string" || selector === "" || typeof threshold !== "number" || threshold < 0 || threshold > 1) {
                    throw new Error("[pageElementVisible] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var target = Evergage.cashDom(selector);
                    var options = {
                        threshold: threshold,
                    };
                    var observer = new IntersectionObserver(callbackFn, options);

                    function callbackFn(entries, observer) {
                        for (var i = 0; i < entries.length; i++) {
                            if (entries[i].isIntersecting) {
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    observer.disconnect();
                                }
                                resolve(entries[i]);
                                break;
                            }
                        }
                    }

                    observer.observe(target[0]);
                    bindId = getBindId(bindId, "<pageElementVisible>" + selector, useRandomId);
                    unbindByIds[bindId] = function () {
                        observer.disconnect();
                    };
                });
            },
            pageExit: function (delay) {
                delay = delay || 0;
                if (typeof delay !== "number" || delay < 0) {
                    throw new Error("[pageExit] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var $target = Evergage.cashDom(document);
                    var events = "mousemove";
                    var timer;

                    function onmousemove(e) {
                        clearTimeout(timer);
                        if (e.pageY - window.pageYOffset <= 10) {
                            timer = delay > 0 ? setTimeout(callbackFn.bind(this, e), delay) : callbackFn.call(this, e);
                        }
                    }

                    function callbackFn(e) {
                        if (bindId) {
                            bindingMethods.unbind(bindId);
                        } else {
                            $target.off(events, onmousemove);
                        }
                        clearTimeout(timer);
                        resolve(e);
                    }

                    $target.on(events, onmousemove);

                    bindId = getBindId(bindId, "<pageExit>", useRandomId);
                    unbindByIds[bindId] = function () {
                        $target.off(events, onmousemove);
                    };
                });
            },
            pageInactive: function (ms) {
                if (typeof ms !== "number" || ms <= 0) {
                    throw new Error("[pageInactive] Invalid arguments");
                }

                function _pageInactive(ms, state) {
                    var promise = new Promise(function (resolve) {
                        var $target = Evergage.cashDom(document);
                        var resetEvents = "mousemove click scroll keyup keydown";
                        var idleTimer;

                        function callbackFn(e) {
                            e = e || new Event("pageInactive");
                            if (bindId && !state.isSubscribe) {
                                bindingMethods.unbind(bindId);
                            } else {
                                $target.off(resetEvents, resetTimer);
                            }
                            resolve(e);
                        }

                        function resetTimer(e) {
                            clearTimeout(idleTimer);
                            idleTimer = setTimeout(callbackFn.bind(this, e), ms);
                        }

                        resetTimer();

                        $target.on(resetEvents, resetTimer);
                    });

                    promise.subscribe = function subscribe(callback) {
                        delete promise.subscribe;
                        state.isSubscribe = true;
                        promise.then(function (event) {
                            event.disconnect = function () {
                                if (bindId) {
                                    bindingMethods.unbind(bindId);
                                } else {
                                    state.isDisconnected = true;
                                }
                            };
                            callback(event);
                            !state.isDisconnected && _pageInactive(ms, state).subscribe(callback);
                        });
                        return promise;
                    };

                    return promise;
                }

                var state = {
                    isDisconnected: false,
                    isSubscribe: false,
                };

                bindId = getBindId(bindId, "<pageInactive>", useRandomId);
                unbindByIds[bindId] = function () {
                    state.isDisconnected = true;
                };

                return _pageInactive(ms, state);
            },
            pageScroll: function (percentage) {
                if (typeof percentage !== "number" || percentage < 0 || percentage > 1) {
                    throw new Error("[pageScroll] Invalid arguments");
                }

                return new Promise(function (resolve) {
                    var $target = Evergage.cashDom(document);
                    var events = "scroll";

                    function callbackFn(e) {
                        resolve(e);
                        if (bindId) {
                            bindingMethods.unbind(bindId);
                        } else {
                            $target.off(events, onScroll);
                        }
                    }

                    function onScroll(e) {
                        var scrollPercentage = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
                        if (scrollPercentage >= percentage) {
                            callbackFn.call(this, e);
                        }
                    }

                    $target.on(events, onScroll);

                    bindId = getBindId(bindId, "<pageScroll>", useRandomId);
                    unbindByIds[bindId] = function () {
                        $target.off(events, onScroll);
                    };
                });
            },
        };
    }

    function buildBindingMethods() {
        return {
            bind: function (id) {
                if (id && unbindByIds[id]) {
                    unbindByIds[id]();
                    delete unbindByIds[id];
                }
                return buildBaseMethods(id);
            },
            unbind: function (id) {
                if (!id || typeof id !== "string" || typeof unbindByIds[id] !== "function") return null;
                unbindByIds[id]();
                delete unbindByIds[id];
            },
            getBindings: function () {
                return unbindByIds;
            },
            clearBindings: function () {
                for (var id in unbindByIds) {
                    if (unbindByIds.hasOwnProperty(id)) {
                        unbindByIds[id]();
                        delete unbindByIds[id];
                    }
                }
            }
        };
    }

    var baseMethods = buildBaseMethods(null, true);
    var bindingMethods = buildBindingMethods();
    return Object.assign(baseMethods, bindingMethods);
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Display Utilities:displayUtils.js");
    }
};


try {
    /**
 *  Personalization Flicker Defense
 */
Evergage.FlickerDefender = Evergage.FlickerDefender || (() => {
    const personalizationSectionsSelector = "head > style.evergagePersonalizationSections";

    let personalizedSectionsString = "";
    let sectionsHaveEverBeenHidden = false;
    let hasBeenHidden = false;
    let shouldReshowNow = false;
    let hiddenSections = {};

    const timeoutOptions = {
        pageMatchTimeout: 1000,
        redisplayTimeout: Evergage.getConfig().hideContentSectionsMillis || 2500
    }

    const utils = {
        getGlobalContentZoneSelectors: () => {
            return ((Evergage.getState().config.global || {}).contentZones || [])
                .filter((contentZone) => (contentZone || {}).selector)
                .map((contentZone) => contentZone.selector);
        },
        getPageTypeContentZoneSelectors: () => {
            const { pageTypes } = Evergage.getState().config;
            return pageTypes.length < 1
                ? []
                : pageTypes
                    .map((pageType) => pageType.contentZones || [])
                    .reduce((acc, contentZonesArr) => acc.concat(contentZonesArr), [])
                    .filter((contentZone) => (contentZone || {}).selector)
                    .map((contentZone) => contentZone.selector);
        },
        buildContentZoneSelectors: () => {
            return [
                ...new Set([
                    ...utils.getGlobalContentZoneSelectors(),
                    ...utils.getPageTypeContentZoneSelectors()
                ])
            ];
        },
        addToPersonalizedSectionsString: (selector) => {
            if (typeof selector === "string") {
                try {
                    document.querySelector(selector);
                    if (personalizedSectionsString !== "") {
                        personalizedSectionsString += ", ";
                    }
                    personalizedSectionsString += selector;
                } catch (exception) {
                    Evergage.sendException(exception, "hideSectionsInvalidCSSSelector");
                }
            }
        },
        hasBeenReshown: () => {
            return Evergage.cashDom(personalizationSectionsSelector).length === 0;
        }
    };

    const actions = {
        hideSections: () => {
            if (sectionsHaveEverBeenHidden) return;

            const selectors = utils.buildContentZoneSelectors();
            if (selectors.length === 0) {
                Evergage.log.debug("Evergage: Issue with malformed request in hideSections.");
                return;
            }
            for (const selector of selectors) {
                utils.addToPersonalizedSectionsString(selector);
            }

            if (!personalizedSectionsString) return;

            const head = document.head || document.getElementsByTagName("head")[0];
            const style = document.createElement("style");
            Evergage.cashDom(style)
                .attr({ type: "text/css", class: "evergagePersonalizationSections" })
                .text(`${personalizedSectionsString} { visibility: hidden !important; }`);

            clearTimeout(window.evergageReshowPersonalizedSectionsTimeout);
            window.evergageReshowPersonalizedSectionsTimeout = setTimeout(function () {
                if (utils.hasBeenReshown()) return;
                shouldReshowNow = true;
                actions.reshowPersonalizedSectionsNow();
            }, timeoutOptions.redisplayTimeout);

            head.appendChild(style);
            sectionsHaveEverBeenHidden = true;
        },
        reshowPersonalizedSections: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (typeof window.requestAnimationFrame === "function") {
                    Evergage.log.info("Evergage: Scheduling for next animation frame redisplay of sections of the page marked for personalization.");
                    window.requestAnimationFrame(actions.reshowPersonalizedSectionsNow);
                } else {
                    actions.reshowPersonalizedSectionsNow();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSections");
            }
        },
        reshowReadyPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important }`);
            Evergage.log.info(`Evergage: Redisplaying the following sections of the page marked for personalization: ${personalizedSectionsString}`);
        },
        reshowAllPersonalizedSections: () => {
            Evergage.cashDom(personalizationSectionsSelector).remove();
            Evergage.log.info("Evergage: Redisplaying outstanding sections of the page marked for personalization.");
        },
        reshowPersonalizedSectionsNow: () => {
            if (utils.hasBeenReshown()) return;
            try {
                if (shouldReshowNow || Object.keys(hiddenSections).length === 0) {
                    actions.reshowAllPersonalizedSections();
                } else if (Object.keys(hiddenSections).length > 0) {
                    personalizedSectionsString = "";
                    for (const contentZone in hiddenSections) {
                        utils.addToPersonalizedSectionsString(hiddenSections[contentZone]);
                    }
                    actions.reshowReadyPersonalizedSections();
                }
            } catch (exception) {
                Evergage.sendException(exception, "reshowPersonalizedSectionsNow");
            }
        }
    };

    const beaconListeners = {
        addOnInit: () => {
            document.addEventListener(Evergage.CustomEvents.OnInit, (domEvent) => {
                clearTimeout(window.evergagePageMatchTimeout);
                window.evergagePageMatchTimeout = setTimeout(function () {
                    const { pageType } = (Evergage.getCurrentPage().source || {});
                    if (utils.hasBeenReshown() || (typeof pageType === "string" && pageType !== "")) return;
                    shouldReshowNow = true;
                    actions.reshowPersonalizedSectionsNow();
                }, timeoutOptions.pageMatchTimeout);
            });
        },
        addPageMatchStatusUpdated: () => {
            document.addEventListener(Evergage.CustomEvents.OnPageMatchStatusUpdated, (domEvent) => {
                if (!hasBeenHidden) {
                    actions.hideSections();
                    if (Evergage.cashDom(personalizationSectionsSelector).length > 0) {
                        hasBeenHidden = true;
                    }
                }
            });
        },
        addOnEventResponse: () => {
            document.addEventListener(Evergage.CustomEvents.OnEventResponse, (domEvent) => {
                const { campaignResponses } = ((domEvent.detail || {}).response || {});
                if ((campaignResponses || []).length >= 1) {
                    personalizedSectionsString = "";
                    for (const campaign of campaignResponses) {
                        const { contentZone } = ((campaign || {}).payload || {});
                        const contentZoneSelector = Evergage.getContentZoneSelector(((campaign || {}).payload || {}).contentZone);
                        if (typeof contentZoneSelector === "string") {
                            hiddenSections[contentZone] = contentZoneSelector;
                            utils.addToPersonalizedSectionsString(contentZoneSelector);
                        }
                    }
                    if (!personalizedSectionsString) {
                        actions.reshowPersonalizedSections();
                        return;
                    }

                    Evergage.cashDom(personalizationSectionsSelector).text(`${personalizedSectionsString} { visibility: hidden !important; }`);
                } else {
                    actions.reshowPersonalizedSections();
                }
            });
        },
        addOnTemplateDisplayEnd: () => {
            document.addEventListener(Evergage.CustomEvents.OnTemplateDisplayEnd, (domEvent) => {
                if (utils.hasBeenReshown()) return;
                const { contentZone } = ((domEvent.detail || {}).payload || {});
                if (typeof contentZone === "string" && hiddenSections[contentZone]) {
                    delete hiddenSections[contentZone];
                }
                actions.reshowPersonalizedSections();
            });
        },
    };

    return {
        setPageMatchTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.pageMatchTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setPageMatchTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        setRedisplayTimeout: (millis) => {
            if (typeof millis === "number" && millis >= 0) {
                timeoutOptions.redisplayTimeout = parseInt(millis);
            } else {
                Evergage.log.warn("flickerDefender.js", "setRedisplayTimeout: Passed argument must be a number and must be greater than or equal to 0", millis);
            }
        },
        init: function() {
            for (const key in beaconListeners) {
                beaconListeners[key]();
            }
        }
    };
})();

if (typeof Evergage.FlickerDefender.init === "function" && (window.frameElement || {}).id !== "siteEditorFrame") {
    Evergage.FlickerDefender.init();
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Flicker Defender:flickerDefender.js");
    }
};


try {
    !function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t,n){"use strict";n.r(t),n.d(t,"extend",function(){return l}),n.d(t,"toString",function(){return c}),n.d(t,"isFunction",function(){return s}),n.d(t,"isArray",function(){return u}),n.d(t,"indexOf",function(){return p}),n.d(t,"escapeExpression",function(){return d}),n.d(t,"isEmpty",function(){return f}),n.d(t,"createFrame",function(){return h}),n.d(t,"blockParams",function(){return m}),n.d(t,"appendContextPath",function(){return g});const r={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},o=/[&<>"'`=]/g,a=/[&<>"'`=]/;function i(e){return r[e]}function l(e){for(let t=1;t<arguments.length;t++)for(let n in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],n)&&(e[n]=arguments[t][n]);return e}let c=Object.prototype.toString,s=function(e){return"function"==typeof e};s(/x/)&&(s=function(e){return"function"==typeof e&&"[object Function]"===c.call(e)});const u=Array.isArray||function(e){return!(!e||"object"!=typeof e)&&"[object Array]"===c.call(e)};function p(e,t){for(let n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function d(e){if("string"!=typeof e){if(e&&e.toHTML)return e.toHTML();if(null==e)return"";if(!e)return e+"";e=""+e}return a.test(e)?e.replace(o,i):e}function f(e){return!e&&0!==e||!(!u(e)||0!==e.length)}function h(e){let t=l({},e);return t._parent=e,t}function m(e,t){return e.path=t,e}function g(e,t){return(e?e+".":"")+t}},function(e,t,n){"use strict";const r=["description","fileName","lineNumber","endLineNumber","message","name","number","stack"];function o(e,t){let n,a,i,l,c=t&&t.loc;c&&(n=c.start.line,a=c.end.line,i=c.start.column,l=c.end.column,e+=" - "+n+":"+i);let s=Error.prototype.constructor.call(this,e);for(let e=0;e<r.length;e++)this[r[e]]=s[r[e]];Error.captureStackTrace&&Error.captureStackTrace(this,o);try{c&&(this.lineNumber=n,this.endLineNumber=a,Object.defineProperty?(Object.defineProperty(this,"column",{value:i,enumerable:!0}),Object.defineProperty(this,"endColumn",{value:l,enumerable:!0})):(this.column=i,this.endColumn=l))}catch(e){}}o.prototype=new Error,t.a=o},function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.restrictContentZone=t.executeControl=t.handleCampaignResponses=t.renderTemplate=t.resetTemplate=t.registerTemplate=t.executeBundles=void 0;var i=n(10),l=n(3),c=a(n(4)),s=new Map,u=new Map,p=new Set,d=function(){return document.getElementsByTagName("html").length>0&&null!=document.getElementsByTagName("html")[0].getAttribute(c.VE_LOADING_ATTRIBUTE)||null!=document.getElementById(c.VE_ACTIVE_ELEMENT_ID)||"true"===localStorage.getItem(c.VE_INDICATOR_FLAG)||document.location.href.includes(c.TEST_TEMPLATE_PARAMETER)},f=function(e){return s.get(e)},h=function(e,t){return[e,t.campaign,t.experience].join(":")};t.executeBundles=function(e){e&&e.forEach(function(e){try{Function("TemplateService",e.bundle)({registerTemplate:t.registerTemplate})}catch(e){l.dispatchError(e)}})},t.registerTemplate=function(e){var t=new i.Template(e);s.set(e.name,t)},t.resetTemplate=function(e,t){var n=h(e,t),r=u.get(n);if(r)try{r()}catch(e){l.dispatchError(e)}u.delete(n)},t.renderTemplate=function(e,t){if(s.has(e)){var n=f(e).render(t);u.set(h(e,t),n)}},t.handleCampaignResponses=function(e){d()||e.filter(function(e){return"ng"===e.type}).filter(function(e){return!g(e)}).forEach(function(e){switch(e.userGroup){case"Default":m(e);break;case"Control":t.executeControl(e)}})};var m=function(e){e.templateNames.forEach(function(n){t.renderTemplate(n,e.payload)})};t.executeControl=function(e){e.templateNames.forEach(function(t){var n=f(t),r=e.payload;if(n.control)try{var o=n.control(r);l.handleTemplateDispatch(o,r)}catch(e){l.dispatchError(e)}})};var g=function(e){return e.payload.contentZone&&p.has(e.payload.contentZone)};t.restrictContentZone=function(e){e&&p.add(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.dispatchError=t.handleTemplateDispatch=t.getQueryParam=void 0,t.getQueryParam=function(e){var t=location.search;e=e.replace(/[[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+"=([^&#]*)").exec(t);return null===n?"":decodeURIComponent(n[1].replace(/\+/g," "))};var r=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnTemplateDisplayEnd,{detail:{payload:e}}))};t.handleTemplateDispatch=function(e,t){window.Promise&&"function"==typeof window.Promise.resolve?window.Promise.resolve(e).then(function(){r(t)}):r(t)},t.dispatchError=function(e){document.dispatchEvent(new CustomEvent(window.Evergage.CustomEvents.OnException,{detail:{error:new Error(e),context:"Handlebars Template Gear"}}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VE_ACTIVE_ELEMENT_ID=t.VE_INDICATOR_FLAG=t.VE_LOADING_ATTRIBUTE=t.TEST_TEMPLATE_PARAMETER=t.TEST_TEMPLATE_STORAGE_KEY=void 0,t.TEST_TEMPLATE_STORAGE_KEY="testTemplate",t.TEST_TEMPLATE_PARAMETER="evergageTestTemplate",t.VE_LOADING_ATTRIBUTE="evergagevisualeditorloading",t.VE_INDICATOR_FLAG="evgVE",t.VE_ACTIVE_ELEMENT_ID="evg_ui-visual-editor"},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";(function(e){var r=n(0),o=n(1);t.a=function(t){t.registerHelper("each",function(t,n){if(!n)throw new o.a("Must pass iterator to #each");let a,i,l=n.fn,c=n.inverse,s=0,u="";function p(e,n,o){a&&(a.key=e,a.index=n,a.first=0===n,a.last=!!o,i&&(a.contextPath=i+e)),u+=l(t[e],{data:a,blockParams:Object(r.blockParams)([t[e],e],[i+e,null])})}if(n.data&&n.ids&&(i=Object(r.appendContextPath)(n.data.contextPath,n.ids[0])+"."),Object(r.isFunction)(t)&&(t=t.call(this)),n.data&&(a=Object(r.createFrame)(n.data)),t&&"object"==typeof t)if(Object(r.isArray)(t))for(let e=t.length;s<e;s++)s in t&&p(s,s,s===t.length-1);else if(e.Symbol&&t[e.Symbol.iterator]){const n=[],r=t[e.Symbol.iterator]();for(let e=r.next();!e.done;e=r.next())n.push(e.value);for(let e=(t=n).length;s<e;s++)p(s,s,s===t.length-1)}else{let e;Object.keys(t).forEach(t=>{void 0!==e&&p(e,s-1),e=t,s++}),void 0!==e&&p(e,s-1,!0)}return 0===s&&(u=c(this)),u})}}).call(this,n(5))},function(e,t,n){"use strict";(function(e){t.a=function(t){let n=void 0!==e?e:window,r=n.Handlebars;t.noConflict=function(){return n.Handlebars===t&&(n.Handlebars=r),t}}}).call(this,n(5))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.render=void 0;var r=n(9),o=n(11),a=n(2);function i(){/complete|interactive|loaded/.test(document.readyState)?(r.renderTestTemplate(),o.initPreview()):document.addEventListener("DOMContentLoaded",function(){r.renderTestTemplate(),o.initPreview()})}document.addEventListener(window.Evergage.CustomEvents.OnEventResponse,function(e){a.executeBundles(e.detail.response.compiledCampaignTemplates),a.handleCampaignResponses(e.detail.response.campaignResponses)}),t.render=i,i()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.renderTestTemplate=void 0;var r=n(2),o=n(3),a=n(4);t.renderTestTemplate=function(){if("true"==o.getQueryParam(a.TEST_TEMPLATE_PARAMETER)){var e=i();addEventListener("storage",function(t){t.key==a.TEST_TEMPLATE_STORAGE_KEY&&(e&&r.resetTemplate(e.templateName,e.templateConfig),e=i())})}};var i=function(){var e=localStorage.getItem(a.TEST_TEMPLATE_STORAGE_KEY);if(e)try{var t=JSON.parse(e);return r.executeBundles(t.templates),r.renderTemplate(t.templateName,t.templateConfig),r.restrictContentZone(t.templateConfig.contentZone),t}catch(e){}}},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Template=void 0;var o=r(n(12)),a=n(3),i=function(){function e(e){var t=this;if(this.getContentZoneFromMatchedConfig=function(e){var t=window.Evergage.getState().result.matchedConfig;return e.contentZone&&t&&t.contentZones&&0!==t.contentZones.length&&t.contentZones.find(function(t){return t.name===e.contentZone})||null},this.applyRender=function(e){var n=t.getContentZoneFromMatchedConfig(e);n&&t.executeInsertionForTarget(n,e)},this.replaceContentAtTarget=function(e,t){t.innerHTML=e},this.name=e.name,this.apply=e.apply,this.reset=e.reset,this.control=e.control,e.handlebars)try{this.generateHtml=o.default.template(e.handlebars),o.default.partials[e.name]=o.default.template(e.handlebars)}catch(e){a.dispatchError(e)}else this.generateHtml=function(){}}return e.prototype.render=function(e){try{var t=this.apply(e,this.generateHtml,this.applyRender);return a.handleTemplateDispatch(t,e),this.reset.bind(this,e,this.generateHtml)}catch(e){a.dispatchError(e)}},e.prototype.executeInsertionForTarget=function(e,t){if(this.generateHtml){var n=e.selector;try{var r=document.querySelector(n);if(!r){var o='Could not render template. Content zone "'+e.name+'" defined but the selector "'+n+'" not found on the page.';return void a.dispatchError(o)}var i=this.generateHtml(t);if(!i)return;this.replaceContentAtTarget(i,r)}catch(e){a.dispatchError(e)}}},e}();t.Template=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.initPreview=void 0;var r=n(4),o=n(2);t.initPreview=function(){window.Evergage.Render={render:function(e,t,n){var a=JSON.stringify({templateName:e,templateConfig:t,templates:n});window.localStorage.setItem(r.TEST_TEMPLATE_STORAGE_KEY,a),o.resetTemplate(e,t),o.executeBundles(n),o.renderTemplate(e,t)},reset:o.resetTemplate}}},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"VERSION",function(){return T}),n.d(r,"COMPILER_REVISION",function(){return b}),n.d(r,"LAST_COMPATIBLE_COMPILER_REVISION",function(){return _}),n.d(r,"REVISION_CHANGES",function(){return y}),n.d(r,"HandlebarsEnvironment",function(){return w}),n.d(r,"log",function(){return O}),n.d(r,"createFrame",function(){return a.createFrame}),n.d(r,"logger",function(){return E});var o={};n.r(o),n.d(o,"checkRevision",function(){return j}),n.d(o,"template",function(){return M}),n.d(o,"wrapProgram",function(){return A}),n.d(o,"resolvePartial",function(){return C}),n.d(o,"invokePartial",function(){return S}),n.d(o,"noop",function(){return k});var a=n(0),i=n(1),l=function(e){e.registerHelper("blockHelperMissing",function(t,n){let r=n.inverse,o=n.fn;if(!0===t)return o(this);if(!1===t||null==t)return r(this);if(Object(a.isArray)(t))return t.length>0?(n.ids&&(n.ids=[n.name]),e.helpers.each(t,n)):r(this);if(n.data&&n.ids){let e=Object(a.createFrame)(n.data);e.contextPath=Object(a.appendContextPath)(n.data.contextPath,n.name),n={data:e}}return o(t,n)})},c=n(6),s=function(e){e.registerHelper("helperMissing",function(){if(1!==arguments.length)throw new i.a('Missing helper: "'+arguments[arguments.length-1].name+'"')})},u=function(e){e.registerHelper("if",function(e,t){if(2!=arguments.length)throw new i.a("#if requires exactly one argument");return Object(a.isFunction)(e)&&(e=e.call(this)),!t.hash.includeZero&&!e||Object(a.isEmpty)(e)?t.inverse(this):t.fn(this)}),e.registerHelper("unless",function(t,n){if(2!=arguments.length)throw new i.a("#unless requires exactly one argument");return e.helpers.if.call(this,t,{fn:n.inverse,inverse:n.fn,hash:n.hash})})},p=function(e){e.registerHelper("log",function(){let t=[void 0],n=arguments[arguments.length-1];for(let e=0;e<arguments.length-1;e++)t.push(arguments[e]);let r=1;null!=n.hash.level?r=n.hash.level:n.data&&null!=n.data.level&&(r=n.data.level),t[0]=r,e.log(...t)})};const d=/^(constructor|__defineGetter__|__defineSetter__|__lookupGetter__|__proto__)$/;var f=function(e){e.registerHelper("lookup",function(e,t){return e?!d.test(String(t))||Object.prototype.propertyIsEnumerable.call(e,t)?e[t]:void 0:e})},h=function(e){e.registerHelper("with",function(e,t){if(2!=arguments.length)throw new i.a("#with requires exactly one argument");Object(a.isFunction)(e)&&(e=e.call(this));let n=t.fn;if(Object(a.isEmpty)(e))return t.inverse(this);{let r=t.data;return t.data&&t.ids&&((r=Object(a.createFrame)(t.data)).contextPath=Object(a.appendContextPath)(t.data.contextPath,t.ids[0])),n(e,{data:r,blockParams:Object(a.blockParams)([e],[r&&r.contextPath])})}})};function m(e,t,n){e.helpers[t]&&(e.hooks[t]=e.helpers[t],n||delete e.helpers[t])}var g=function(e){e.registerDecorator("inline",function(e,t,n,r){let o=e;return t.partials||(t.partials={},o=function(r,o){let i=n.partials;n.partials=Object(a.extend)({},i,t.partials);let l=e(r,o);return n.partials=i,l}),t.partials[r.args[0]]=r.fn,o})};let v={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(e){if("string"==typeof e){let t=Object(a.indexOf)(v.methodMap,e.toLowerCase());e=t>=0?t:parseInt(e,10)}return e},log:function(e,...t){if(e=v.lookupLevel(e),"undefined"!=typeof console&&v.lookupLevel(v.level)<=e){let n=v.methodMap[e];console[n]||(n="log"),console[n](...t)}}};var E=v;const T="4.5.3",b=8,_=7,y={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0 <4.3.0",8:">= 4.3.0"};function w(e,t,n){var r;this.helpers=e||{},this.partials=t||{},this.decorators=n||{},l(r=this),Object(c.a)(r),s(r),u(r),p(r),f(r),h(r),function(e){g(e)}(this)}w.prototype={constructor:w,logger:E,log:E.log,registerHelper:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple helpers");Object(a.extend)(this.helpers,e)}else this.helpers[e]=t},unregisterHelper:function(e){delete this.helpers[e]},registerPartial:function(e,t){if("[object Object]"===a.toString.call(e))Object(a.extend)(this.partials,e);else{if(void 0===t)throw new i.a(`Attempting to register a partial called "${e}" as undefined`);this.partials[e]=t}},unregisterPartial:function(e){delete this.partials[e]},registerDecorator:function(e,t){if("[object Object]"===a.toString.call(e)){if(t)throw new i.a("Arg not supported with multiple decorators");Object(a.extend)(this.decorators,e)}else this.decorators[e]=t},unregisterDecorator:function(e){delete this.decorators[e]}};let O=E.log;function P(e){this.string=e}P.prototype.toString=P.prototype.toHTML=function(){return""+this.string};var x=P;function j(e){const t=e&&e[0]||1;if(!(t>=_&&t<=b)){if(t<_){const e=y[b],n=y[t];throw new i.a("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+e+") or downgrade your runtime to an older version ("+n+").")}throw new i.a("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+e[1]+").")}}function M(e,t){if(!t)throw new i.a("No environment passed to template");if(!e||!e.main)throw new i.a("Unknown template object: "+typeof e);e.main.decorator=e.main_d,t.VM.checkRevision(e.compiler);const n=e.compiler&&7===e.compiler[0];let r={strict:function(e,t,n){if(!(e&&t in e))throw new i.a('"'+t+'" not defined in '+e,{loc:n});return e[t]},lookup:function(e,t){const n=e.length;for(let r=0;r<n;r++)if(e[r]&&null!=e[r][t])return e[r][t]},lambda:function(e,t){return"function"==typeof e?e.call(t):e},escapeExpression:a.escapeExpression,invokePartial:function(n,r,o){o.hash&&(r=a.extend({},r,o.hash),o.ids&&(o.ids[0]=!0)),n=t.VM.resolvePartial.call(this,n,r,o);let l=a.extend({},o,{hooks:this.hooks}),c=t.VM.invokePartial.call(this,n,r,l);if(null==c&&t.compile&&(o.partials[o.name]=t.compile(n,e.compilerOptions,t),c=o.partials[o.name](r,l)),null!=c){if(o.indent){let e=c.split("\n");for(let t=0,n=e.length;t<n&&(e[t]||t+1!==n);t++)e[t]=o.indent+e[t];c=e.join("\n")}return c}throw new i.a("The partial "+o.name+" could not be compiled when running in runtime-only mode")},fn:function(t){let n=e[t];return n.decorator=e[t+"_d"],n},programs:[],program:function(e,t,n,r,o){let a=this.programs[e],i=this.fn(e);return t||o||r||n?a=A(this,e,i,t,n,r,o):a||(a=this.programs[e]=A(this,e,i)),a},data:function(e,t){for(;e&&t--;)e=e._parent;return e},nullContext:Object.seal({}),noop:t.VM.noop,compilerInfo:e.compiler};function o(t,n={}){let i=n.data;o._setup(n),!n.partial&&e.useData&&(i=function(e,t){t&&"root"in t||((t=t?Object(a.createFrame)(t):{}).root=e);return t}(t,i));let l,c=e.useBlockParams?[]:void 0;function s(t){return""+e.main(r,t,r.helpers,r.partials,i,c,l)}return e.useDepths&&(l=n.depths?t!=n.depths[0]?[t].concat(n.depths):n.depths:[t]),(s=I(e.main,s,r,n.depths||[],i,c))(t,n)}return o.isTop=!0,o._setup=function(o){if(o.partial)r.helpers=o.helpers,r.partials=o.partials,r.decorators=o.decorators,r.hooks=o.hooks;else{r.helpers=a.extend({},t.helpers,o.helpers),e.usePartial&&(r.partials=a.extend({},t.partials,o.partials)),(e.usePartial||e.useDecorators)&&(r.decorators=a.extend({},t.decorators,o.decorators)),r.hooks={};let i=o.allowCallsToHelperMissing||n;m(r,"helperMissing",i),m(r,"blockHelperMissing",i)}},o._child=function(t,n,o,a){if(e.useBlockParams&&!o)throw new i.a("must pass block params");if(e.useDepths&&!a)throw new i.a("must pass parent depths");return A(r,t,e[t],n,0,o,a)},o}function A(e,t,n,r,o,a,i){function l(t,o={}){let l=i;return!i||t==i[0]||t===e.nullContext&&null===i[0]||(l=[t].concat(i)),n(e,t,e.helpers,e.partials,o.data||r,a&&[o.blockParams].concat(a),l)}return(l=I(n,l,e,i,r,a)).program=t,l.depth=i?i.length:0,l.blockParams=o||0,l}function C(e,t,n){return e?e.call||n.name||(n.name=e,e=n.partials[e]):e="@partial-block"===n.name?n.data["partial-block"]:n.partials[n.name],e}function S(e,t,n){const r=n.data&&n.data["partial-block"];let o;if(n.partial=!0,n.ids&&(n.data.contextPath=n.ids[0]||n.data.contextPath),n.fn&&n.fn!==k){n.data=Object(a.createFrame)(n.data);let e=n.fn;o=n.data["partial-block"]=function(t,n={}){return n.data=Object(a.createFrame)(n.data),n.data["partial-block"]=r,e(t,n)},e.partials&&(n.partials=a.extend({},n.partials,e.partials))}if(void 0===e&&o&&(e=o),void 0===e)throw new i.a("The partial "+n.name+" could not be found");if(e instanceof Function)return e(t,n)}function k(){return""}function I(e,t,n,r,o,i){if(e.decorator){let l={};t=e.decorator(t,l,n,r&&r[0],o,i,r),a.extend(t,l)}return t}var R=n(7);function L(){let e=new w;return a.extend(e,r),e.SafeString=x,e.Exception=i.a,e.Utils=a,e.escapeExpression=a.escapeExpression,e.VM=o,e.template=function(t){return M(t,e)},e}let H=L();H.create=L,Object(R.a)(H),H.default=H;t.default=H}]));
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Handlebars Templates:index.js");
    }
};


try {
    // syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#CUSTOM_EVENT.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var VE_CUSTOM_EVENT_NAME = 'msg_from_interaction_studio_tools_gear';
// syncs with @frontend/packages/ui-chrome-extension/src/constants.ts#EVENT_TYPE.MESSAGE_FROM_INTERACTION_STUDIO_TOOLS_GEAR
var TO_LAUNCHER_MESSAGE_TYPE = 'nxve_messageFromInteractionStudioToolsGear';

var TO_LAUNCHER_PAYLOAD_TYPE = 'beaconSDK_domEvent';

function sendMessageToEvergageLauncher(message) {
    try {
        document.dispatchEvent(
            new CustomEvent(VE_CUSTOM_EVENT_NAME, {
                detail: JSON.stringify(message),
            })
        );
    } catch (e) {
        console.error(e);
    }
}

var eventLinkId = null;

if (Evergage !== null) {
    document.addEventListener(Evergage.CustomEvents.OnInit, function (
        domEvent
    ) {
        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnInit,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventSend, function (
        domEvent
    ) {
        eventLinkId = Math.random().toString().slice(2);

        domEvent.detail.actionEvent._toolsEventLinkId = eventLinkId;
        domEvent.detail.actionEvent.debug = Object.assign(
            domEvent.detail.actionEvent.debug
                ? domEvent.detail.actionEvent.debug
                : {},
            { explanations: true }
        );

        sendMessageToEvergageLauncher({
            type: TO_LAUNCHER_MESSAGE_TYPE,
            payload: {
                type: TO_LAUNCHER_PAYLOAD_TYPE,
                payload: {
                    name: Evergage.CustomEvents.OnEventSend,
                    detail: domEvent.detail,
                },
            },
        });
    });

    document.addEventListener(Evergage.CustomEvents.OnEventResponse, function (
        domEvent
    ) {
        if (domEvent.detail) {
            const currentPage = Evergage.getCurrentPage();
            const sitemapConfig = Evergage.getState().config;
            const matchedPageConfig =
                Evergage.getState().result &&
                Evergage.getState().result.matchedConfig;

            eventLinkId = null;

            sendMessageToEvergageLauncher({
                type: TO_LAUNCHER_MESSAGE_TYPE,
                payload: {
                    type: TO_LAUNCHER_PAYLOAD_TYPE,
                    payload: {
                        name: Evergage.CustomEvents.OnEventResponse,
                        detail: {
                            response: domEvent.detail.response,
                            currentPage: currentPage,
                            sitemapConfig: sitemapConfig,
                            matchedPageConfig: matchedPageConfig,
                        },
                    },
                },
            });
        }
    });
}

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Interaction Studio Tools:interactionStudioTools.js");
    }
};


try {
    Evergage.Surveys = Evergage.Surveys || (function() {

    var SURVEY_ACTION = {
        SUBMIT: "submit",
        PAGE_NEXT: "pageNext",
        PAGE_PREV: "pagePrev"
    };

    var SURVEY_EVENT_PARAM = {
        SURVEY_ACTION: 'surveyAction',
        SURVEY_ID: 'surveyId',
        SURVEY_START_TIME: 'surveyStartTime'
    };

    var initialized = false;

    function isInitialized() {
        return (initialized || typeof window.Survey === 'object');
    }

    /**
     * processSurveyResponses
     * ** recursive **
     * @param responses {object} a collection of survey element response values keyed by element.name (question.name)
     * @param elements {object} a collection of SurveyElements for a given page or panel of a survey
     * @param addResponseFn {function} invoked for each questionType element that has been processed
     */
    function processSurveyResponses(elements, survey, sender) {
        try {

            var shouldHandleElementAsPanel = function(element) {
                return (element.type === 'panel'
                        && Evergage.cashDom.isArray(element.elements)
                        && element.elements.length !== 0
                        && !isString(element.questionId));
            };

            var formatAnswer = function(answer) {
                var result = (answer) ? answer : null;
                if (result != null && Evergage.cashDom.isArray(result) || isPlainObject(result)) {
                    result = JSON.stringify(result);
                }
                return result;
            };

            var formatQuestionId = function(element, rowId) {
                var questionId = "survey:" + survey.id + ":" + element.questionId;
                if (isString(rowId)) {
                    questionId += ":" + rowId;
                }
                return questionId;
            };

            var responses = [];
            for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
                var element = elements[elementIndex];
                if (shouldHandleElementAsPanel(element)) {
                    responses = responses.concat(processSurveyResponses(element.elements, survey, sender));
                } else {
                    if (element.type === "matrix") {
                        for (var rowIndex = 0; rowIndex < element.rows.length; rowIndex++) {
                            var row = element.rows[rowIndex];
                            var rowId = element.rowIds[rowIndex];
                            var allRowsValues = sender.data[element.name] ? sender.data[element.name] : {};
                            if (allRowsValues[row.value]) {
                                var rowValue = allRowsValues[row.value];
                                responses.push({ questionId: formatQuestionId(element, rowId), answer: rowValue });
                            }
                        }
                    } else {
                        var answer = formatAnswer(sender.data[element.name]);
                        if (answer) {
                            responses.push({ questionId: formatQuestionId(element), answer: answer });
                        }
                    }
                }
            }
            return responses;
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to ' +
                                       'process survey responses: ', e);
        }
    }

    function isPlainObject(obj) {
        if (typeof obj !== 'object' || obj === null) return false;
        const proto = Object.getPrototypeOf(obj);
        return proto === null || proto === Object.prototype;
    }

    function isString(property) {
        return typeof property === 'string' || property instanceof String;
    }

    function handleSurveyAction(surveyAction, survey, sender) {

        try {
            if (surveyAction === SURVEY_ACTION.PAGE_NEXT) {
                return;
            } else {
                var surveyActionEvent = new SurveyActionEvent(surveyAction, survey.id, new Date().getTime());
                Evergage.cashDom.each(survey.config.pages, function(index, page) {
                    surveyActionEvent.addResponses(processSurveyResponses(page.elements, survey, sender));
                });
                surveyActionEvent.send();
            }
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to ' +
                                       'submit survey responses surveyId[' + message.surveyConfig.survey.id + ']: ', e);
        }
    }

    function renderSurvey(survey, renderTarget) {
        if (typeof survey !== "object" || !renderTarget) return Evergage.log.error("Evergage: renderSurvey arguments are not valid");
        return injectSurveyResourcesIntoPage().then(() => {
            try {
                if (surveyAlreadyRendered(survey.id, renderTarget)) return;
                window.Survey.JsonObject.metaData.addProperty("questionbase", "questionId");
                window.Survey.JsonObject.metaData.addProperty("questionbase", "rowIds");
                var surveyModel = new window.Survey.Model(survey.config);
                // eslint-disable-next-line new-cap
                Evergage.cashDom(renderTarget).Survey({
                    model: surveyModel,
                    onComplete: function(sender) {
                        handleSurveyAction(SURVEY_ACTION.SUBMIT, survey, sender);
                    },
                    onPartialSend: function(sender) {
                        handleSurveyAction(SURVEY_ACTION.PAGE_NEXT, survey, sender);
                    }
                });
                Evergage.cashDom(renderTarget).attr("data-evg-survey-id", survey.id);
            } catch (e) {
                Evergage.log.error('Evergage: There was an error when attempting to render the survey', e);
            }
        });
    }

    function injectSurveyResourceIntoPage(type, url) {
        try {
            var documentHead = document.head || document.getElementsByTagName('head')[0];
            var isStylesheet = (type === 'style');
            var surveyResourceElement = document.createElement(isStylesheet ? 'link' : 'script');
            surveyResourceElement.setAttribute('type', ((isStylesheet) ? 'text/css' : 'text/javascript'));
            surveyResourceElement.setAttribute('class', 'evergageSurvey-' + type);
            surveyResourceElement.setAttribute(((isStylesheet) ? 'href' : 'src'), url);
            if (isStylesheet) {
                surveyResourceElement.setAttribute('rel', 'stylesheet');
            }
            documentHead.appendChild(surveyResourceElement);
            Evergage.log.trace('Evergage: Injected survey resource of type[' + type + '] url[' + url + ']');
        } catch (e) {
            Evergage.log.error('Evergage: There was an error when attempting to inject surveyJS resources into the page: ', e);
        }

    }

    function injectSurveyResourcesIntoPage() {
        return new Promise(resolve => {
            if (isInitialized()) {
                return resolve();
            }
            var SURVEY_JS_CDN_BASE_URL = '//cdn.evergage.com/evergage-content/3pp';
            var SURVEY_JS_VERSION = 'surveyjs-1.0.95';
            var SURVEY_JS_SCRIPT_NAME = 'survey.cash.min.js';
            var SURVEY_JS_STYLESHEET_NAME = 'survey.min.css';
            Object.entries({
                script: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_SCRIPT_NAME].join('/'),
                style: [SURVEY_JS_CDN_BASE_URL, SURVEY_JS_VERSION, SURVEY_JS_STYLESHEET_NAME].join('/')
            }).forEach(function(entry) {
                const [resourceType, resourceUrl] = entry
                injectSurveyResourceIntoPage(resourceType, resourceUrl);
            });
            var interval = setInterval(function(){
                if (Evergage.cashDom.fn.Survey != null && window.Survey != null) {
                    clearInterval(interval);
                    initialized = true;
                    resolve();
                }
            }, 100);
        })
    }

    function surveyAlreadyRendered(surveyId, renderTarget) {
        return Evergage.cashDom(renderTarget).attr("data-evg-survey-id") === surveyId;
    }

    function SurveyActionEvent(surveyAction, surveyId, timestamp) {
        this.params = { source: {}, attributes: {} };
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION] = surveyAction;
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_ID] = surveyId;
        this.params.source[SURVEY_EVENT_PARAM.SURVEY_START_TIME] = timestamp;
    }

    SurveyActionEvent.prototype.addResponses = function(responses) {
        for (var i = 0; i < responses.length; i++) {
            var response = responses[i];
            this.addResponse(response.questionId, response.answer);
        }
    };

    SurveyActionEvent.prototype.addResponse = function(name, value) {
        Evergage.log.trace('Evergage: Adding response to SurveyActionEvent: ' + JSON.stringify({ name: name, value: value }));
        this.params.attributes[name] = value;
    };

    SurveyActionEvent.prototype.send = function() {
        Evergage.log.trace('Evergage: Tracking survey event: ', this.params);
        Evergage.sendEvent({
            action: "Survey " + this.params.source[SURVEY_EVENT_PARAM.SURVEY_ACTION],
            source: this.params.source,
            user: {
                attributes: this.params.attributes
            }
        });
    };

    return {
        renderSurvey: renderSurvey,
        injectSurveyResourcesIntoPage: injectSurveyResourcesIntoPage
    };

})(window);

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Surveys:SurveyJS.js");
    }
};


try {
    (function () {
    var VE_LOCAL_STORAGE_KEY = 'evgVE';
    var SITEMAP_EDITOR_LOCAL_STORAGE_KEY = 'evgVE-cdp-sitemap-editor';

    var SdkNamespace = window.SalesforceInteractions || window.Evergage;

    function injectEditorLaunchScript(isStandaloneSitemapEditor) {
        try {
            // getConfig() is not exposed on the Salesforce/CDP build of the SDK
            var trackerUrl =
                typeof SdkNamespace.getConfig === 'function' &&
                SdkNamespace.getConfig().trackerUrl;

            var baseUrl = !isStandaloneSitemapEditor && trackerUrl ? trackerUrl : 'https://cdn.evergage.com';
            var scriptPath = isStandaloneSitemapEditor
                ? '/evergage-content/sitemap-editor/4.0.0/launch.sitemap-editor.js'
                : '/visual-editor/launch.js';

            var scriptUrl = [baseUrl, scriptPath].join('');

            var scriptTag = document.createElement('script');
            scriptTag.setAttribute('id', 'salesforceInteractionsLauncherScript');
            scriptTag.src = scriptUrl;

            if (
                document.getElementById('salesforceInteractionsLauncherScript') == null
            ) {
                document.head.appendChild(scriptTag);
            } else {
                SdkNamespace.log.info('Launch script is already here.');
            }
        } catch (err) {
            SdkNamespace.log.error(
                'Failed to inject Salesforce Interactions Launcher script: ' + err
            );
        }
    }

    function getUrlBoolean(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? null : results[1] === 'true';
    }

    var visualEditorParam = getUrlBoolean('evergageEditor');
    var standaloneEditorParam = getUrlBoolean('salesforceInteractionsSitemapEditor');

    var visualEditorEnabledInStorage = function () {
        return window.localStorage[VE_LOCAL_STORAGE_KEY] === 'true';
    };

    var standloneSitemapEditorEnabledInStorage = function () {
        return window.localStorage[SITEMAP_EDITOR_LOCAL_STORAGE_KEY] === 'true';
    };

    // honor and set local storage based off queryParam
    if (visualEditorParam !== null) {
        window.localStorage.setItem(VE_LOCAL_STORAGE_KEY, visualEditorParam);
    }

    if (standaloneEditorParam !== null) {
        window.localStorage.setItem(
            SITEMAP_EDITOR_LOCAL_STORAGE_KEY,
            standaloneEditorParam
        );
    }

    var inSiteEditorFrameContext =
        window.frameElement && window.frameElement.id === 'siteEditorFrame';

    // trigger off of localStorage only
    // chrome extension reads/sets localStorage more easily than modifying the currentTab URL
    if (
        !visualEditorEnabledInStorage() &&
        !standloneSitemapEditorEnabledInStorage() &&
        !inSiteEditorFrameContext
    ) {
        return;
    }

    if (window.top === window.self || inSiteEditorFrameContext) {
        document.addEventListener(
            SdkNamespace.CustomEvents.OnInit,
            (event) => {
                injectEditorLaunchScript(
                    standloneSitemapEditorEnabledInStorage()
                );
                event.preventDefault();
            },
            { once: true }
        );
    }
})();

} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
        Evergage.sendException(e, "beaconExtension: Visual Editor:visualEditor.js");
    }
};


try {
var evgr = Evergage.resolvers;
Evergage.init({   

}).then(() => { 
    // global: {
    //     onActionEvent: (actionEvent) => {
    //         const 
    //     }
    // }
    console.log('hola');
})
} catch (e) {
    if (typeof window.Evergage === "object" && typeof window.Evergage.getVersion === "function" && window.Evergage.getVersion() >= 5) {
          console.error("siteWideJavascriptError" + e);    }
};
