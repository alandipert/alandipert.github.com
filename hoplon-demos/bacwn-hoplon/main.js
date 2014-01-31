/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
var h;
function aa(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var ba = "closure_uid_" + (1E9 * Math.random() >>> 0), ca = 0;
function da(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;function ea(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function fa(a, b) {
  null != a && this.append.apply(this, arguments);
}
fa.prototype.Ra = "";
fa.prototype.append = function(a, b, c) {
  this.Ra += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ra += arguments[d];
    }
  }
  return this;
};
fa.prototype.toString = function() {
  return this.Ra;
};
var ga, ha = null;
function ia() {
  return new n(null, 5, [ka, !0, la, !0, ma, !1, na, !1, oa, null], null);
}
function p(a) {
  return null != a && !1 !== a;
}
function qa(a) {
  return null == a;
}
function r(a) {
  return p(a) ? !1 : !0;
}
function ra(a, b) {
  return a[aa(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function sa(a) {
  return null == a ? null : a.constructor;
}
function ta(a, b) {
  var c = sa(b), c = p(p(c) ? c.cc : c) ? c.ac : aa(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function ua(a) {
  var b = a.ac;
  return p(b) ? b : "" + t(a);
}
function va(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var wa = {}, xa = {};
function ya(a) {
  if (a ? a.J : a) {
    return a.J(a);
  }
  var b;
  b = ya[aa(null == a ? null : a)];
  if (!b && (b = ya._, !b)) {
    throw ta("ICounted.-count", a);
  }
  return b.call(null, a);
}
function za(a) {
  if (a ? a.L : a) {
    return a.L(a);
  }
  var b;
  b = za[aa(null == a ? null : a)];
  if (!b && (b = za._, !b)) {
    throw ta("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Aa = {};
function u(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = u[aa(null == a ? null : a)];
  if (!c && (c = u._, !c)) {
    throw ta("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ba = {}, v = function() {
  function a(a, b, c) {
    if (a ? a.fa : a) {
      return a.fa(a, b, c);
    }
    var g;
    g = v[aa(null == a ? null : a)];
    if (!g && (g = v._, !g)) {
      throw ta("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.w : a) {
      return a.w(a, b);
    }
    var c;
    c = v[aa(null == a ? null : a)];
    if (!c && (c = v._, !c)) {
      throw ta("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ca = {};
function Da(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Da[aa(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw ta("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ea(a) {
  if (a ? a.U : a) {
    return a.U(a);
  }
  var b;
  b = Ea[aa(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw ta("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Fa = {}, Ha = {}, Ia = function() {
  function a(a, b, c) {
    if (a ? a.B : a) {
      return a.B(a, b, c);
    }
    var g;
    g = Ia[aa(null == a ? null : a)];
    if (!g && (g = Ia._, !g)) {
      throw ta("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.A : a) {
      return a.A(a, b);
    }
    var c;
    c = Ia[aa(null == a ? null : a)];
    if (!c && (c = Ia._, !c)) {
      throw ta("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ja(a, b) {
  if (a ? a.Wa : a) {
    return a.Wa(a, b);
  }
  var c;
  c = Ja[aa(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw ta("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ka(a, b, c) {
  if (a ? a.da : a) {
    return a.da(a, b, c);
  }
  var d;
  d = Ka[aa(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw ta("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var La = {};
function Ma(a, b) {
  if (a ? a.ka : a) {
    return a.ka(a, b);
  }
  var c;
  c = Ma[aa(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw ta("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Na = {};
function Oa(a) {
  if (a ? a.Xa : a) {
    return a.Xa(a);
  }
  var b;
  b = Oa[aa(null == a ? null : a)];
  if (!b && (b = Oa._, !b)) {
    throw ta("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Pa(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = Pa[aa(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw ta("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Qa = {};
function Ra(a, b) {
  if (a ? a.Yb : a) {
    return a.Yb(0, b);
  }
  var c;
  c = Ra[aa(null == a ? null : a)];
  if (!c && (c = Ra._, !c)) {
    throw ta("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Sa(a) {
  if (a ? a.ta : a) {
    return a.ta(a);
  }
  var b;
  b = Sa[aa(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw ta("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Ta(a) {
  if (a ? a.ua : a) {
    return a.ua(a);
  }
  var b;
  b = Ta[aa(null == a ? null : a)];
  if (!b && (b = Ta._, !b)) {
    throw ta("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Ua = {};
function Va(a, b, c) {
  if (a ? a.Na : a) {
    return a.Na(a, b, c);
  }
  var d;
  d = Va[aa(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw ta("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
  }
  var b;
  b = Wa[aa(null == a ? null : a)];
  if (!b && (b = Wa._, !b)) {
    throw ta("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Xa = {};
function $a(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = $a[aa(null == a ? null : a)];
  if (!b && (b = $a._, !b)) {
    throw ta("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var ab = {};
function bb(a, b) {
  if (a ? a.H : a) {
    return a.H(a, b);
  }
  var c;
  c = bb[aa(null == a ? null : a)];
  if (!c && (c = bb._, !c)) {
    throw ta("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var cb = {}, db = function() {
  function a(a, b, c) {
    if (a ? a.S : a) {
      return a.S(a, b, c);
    }
    var g;
    g = db[aa(null == a ? null : a)];
    if (!g && (g = db._, !g)) {
      throw ta("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.R : a) {
      return a.R(a, b);
    }
    var c;
    c = db[aa(null == a ? null : a)];
    if (!c && (c = db._, !c)) {
      throw ta("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function eb(a, b) {
  if (a ? a.u : a) {
    return a.u(a, b);
  }
  var c;
  c = eb[aa(null == a ? null : a)];
  if (!c && (c = eb._, !c)) {
    throw ta("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function fb(a) {
  if (a ? a.v : a) {
    return a.v(a);
  }
  var b;
  b = fb[aa(null == a ? null : a)];
  if (!b && (b = fb._, !b)) {
    throw ta("IHash.-hash", a);
  }
  return b.call(null, a);
}
var gb = {};
function hb(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = hb[aa(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw ta("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var ib = {}, jb = {};
function kb(a) {
  if (a ? a.Za : a) {
    return a.Za(a);
  }
  var b;
  b = kb[aa(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw ta("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function lb(a, b) {
  if (a ? a.Jb : a) {
    return a.Jb(a, b);
  }
  var c;
  c = lb[aa(null == a ? null : a)];
  if (!c && (c = lb._, !c)) {
    throw ta("ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b);
}
function mb(a, b, c) {
  if (a ? a.Kb : a) {
    return a.Kb(a, b, c);
  }
  var d;
  d = mb[aa(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw ta("ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c);
}
function nb(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(a, b);
  }
  var c;
  c = nb[aa(null == a ? null : a)];
  if (!c && (c = nb._, !c)) {
    throw ta("ISorted.-entry-key", a);
  }
  return c.call(null, a, b);
}
function ob(a) {
  if (a ? a.Hb : a) {
    return a.Hb(a);
  }
  var b;
  b = ob[aa(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw ta("ISorted.-comparator", a);
  }
  return b.call(null, a);
}
function qb(a, b) {
  if (a ? a.$b : a) {
    return a.$b(0, b);
  }
  var c;
  c = qb[aa(null == a ? null : a)];
  if (!c && (c = qb._, !c)) {
    throw ta("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var rb = {};
function tb(a, b, c) {
  if (a ? a.s : a) {
    return a.s(a, b, c);
  }
  var d;
  d = tb[aa(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw ta("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function ub(a, b, c) {
  if (a ? a.Mb : a) {
    return a.Mb(a, b, c);
  }
  var d;
  d = ub[aa(null == a ? null : a)];
  if (!d && (d = ub._, !d)) {
    throw ta("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function vb(a, b, c) {
  if (a ? a.Lb : a) {
    return a.Lb(a, b, c);
  }
  var d;
  d = vb[aa(null == a ? null : a)];
  if (!d && (d = vb._, !d)) {
    throw ta("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function wb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = wb[aa(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw ta("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function yb(a, b) {
  if (a ? a.La : a) {
    return a.La(a, b);
  }
  var c;
  c = yb[aa(null == a ? null : a)];
  if (!c && (c = yb._, !c)) {
    throw ta("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function zb(a) {
  if (a ? a.Ma : a) {
    return a.Ma(a);
  }
  var b;
  b = zb[aa(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw ta("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Ab(a, b, c) {
  if (a ? a.ab : a) {
    return a.ab(a, b, c);
  }
  var d;
  d = Ab[aa(null == a ? null : a)];
  if (!d && (d = Ab._, !d)) {
    throw ta("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Bb(a, b, c) {
  if (a ? a.Zb : a) {
    return a.Zb(0, b, c);
  }
  var d;
  d = Bb[aa(null == a ? null : a)];
  if (!d && (d = Bb._, !d)) {
    throw ta("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Cb(a) {
  if (a ? a.Ub : a) {
    return a.Ub();
  }
  var b;
  b = Cb[aa(null == a ? null : a)];
  if (!b && (b = Cb._, !b)) {
    throw ta("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Db(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = Db[aa(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw ta("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Eb(a) {
  if (a ? a.ub : a) {
    return a.ub(a);
  }
  var b;
  b = Eb[aa(null == a ? null : a)];
  if (!b && (b = Eb._, !b)) {
    throw ta("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Fb(a) {
  if (a ? a.sb : a) {
    return a.sb(a);
  }
  var b;
  b = Fb[aa(null == a ? null : a)];
  if (!b && (b = Fb._, !b)) {
    throw ta("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Gb(a) {
  this.tc = a;
  this.q = 0;
  this.i = 1073741824;
}
Gb.prototype.$b = function(a, b) {
  return this.tc.append(b);
};
function Ib(a) {
  var b = new fa;
  a.s(null, new Gb(b), ia());
  return "" + t(b);
}
function Jb(a, b) {
  if (p(w.a ? w.a(a, b) : w.call(null, a, b))) {
    return 0;
  }
  var c = r(a.ca);
  if (p(c ? b.ca : c)) {
    return-1;
  }
  if (p(a.ca)) {
    if (r(b.ca)) {
      return 1;
    }
    c = Kb.a ? Kb.a(a.ca, b.ca) : Kb.call(null, a.ca, b.ca);
    return 0 === c ? Kb.a ? Kb.a(a.name, b.name) : Kb.call(null, a.name, b.name) : c;
  }
  return Lb ? Kb.a ? Kb.a(a.name, b.name) : Kb.call(null, a.name, b.name) : null;
}
function x(a, b, c, d, e) {
  this.ca = a;
  this.name = b;
  this.Ia = c;
  this.Ka = d;
  this.aa = e;
  this.i = 2154168321;
  this.q = 4096;
}
h = x.prototype;
h.s = function(a, b) {
  return qb(b, this.Ia);
};
h.v = function() {
  var a = this.Ka;
  return null != a ? a : this.Ka = a = Mb.a ? Mb.a(Nb.b ? Nb.b(this.ca) : Nb.call(null, this.ca), Nb.b ? Nb.b(this.name) : Nb.call(null, this.name)) : Mb.call(null, Nb.b ? Nb.b(this.ca) : Nb.call(null, this.ca), Nb.b ? Nb.b(this.name) : Nb.call(null, this.name));
};
h.H = function(a, b) {
  return new x(this.ca, this.name, this.Ia, this.Ka, b);
};
h.D = function() {
  return this.aa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.c(c, this, null);
      case 3:
        return Ia.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return Ia.c(a, this, null);
};
h.a = function(a, b) {
  return Ia.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof x ? this.Ia === b.Ia : !1;
};
h.toString = function() {
  return this.Ia;
};
var Ob = function() {
  function a(a, b) {
    var c = null != a ? [t(a), t("/"), t(b)].join("") : b;
    return new x(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof x ? a : c.a(null, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function y(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.Cc)) {
    return a.G(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Pb(a, 0);
  }
  if (ra(gb, a)) {
    return hb(a);
  }
  if (s) {
    throw Error([t(a), t("is not ISeqable")].join(""));
  }
  return null;
}
function z(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.$a)) {
    return a.O(null);
  }
  a = y(a);
  return null == a ? null : Da(a);
}
function A(a) {
  return null != a ? a && (a.i & 64 || a.$a) ? a.U(null) : (a = y(a)) ? Ea(a) : C : C;
}
function D(a) {
  return null == a ? null : a && (a.i & 128 || a.nb) ? a.Y(null) : y(A(a));
}
var w = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || eb(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (D(e)) {
            a = d, d = z(e), e = D(e);
          } else {
            return b.a(d, z(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function() {
    return!0;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
xa["null"] = !0;
ya["null"] = function() {
  return 0;
};
Date.prototype.u = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
eb.number = function(a, b) {
  return a === b;
};
Xa["function"] = !0;
$a["function"] = function() {
  return null;
};
wa["function"] = !0;
fb._ = function(a) {
  return a[ba] || (a[ba] = ++ca);
};
function Qb(a) {
  return a + 1;
}
var Rb = function() {
  function a(a, b, c, d) {
    for (var l = ya(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, v.a(a, d)) : b.call(null, c, v.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = ya(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, v.a(a, l)) : b.call(null, c, v.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = ya(a);
    if (0 === c) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = v.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, v.a(a, l)) : b.call(null, d, v.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d;
}(), Sb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.a ? b.a(c, a[d]) : b.call(null, c, a[d]), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, a[l]) : b.call(null, c, a[l]), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.r ? b.r() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d;
}();
function Tb(a) {
  return a ? a.i & 2 || a.fc ? !0 : a.i ? !1 : ra(xa, a) : ra(xa, a);
}
function Ub(a) {
  return a ? a.i & 16 || a.Vb ? !0 : a.i ? !1 : ra(Ba, a) : ra(Ba, a);
}
function Pb(a, b) {
  this.e = a;
  this.o = b;
  this.q = 0;
  this.i = 166199550;
}
h = Pb.prototype;
h.v = function() {
  return Vb.b ? Vb.b(this) : Vb.call(null, this);
};
h.Y = function() {
  return this.o + 1 < this.e.length ? new Pb(this.e, this.o + 1) : null;
};
h.F = function(a, b) {
  return F.a ? F.a(b, this) : F.call(null, b, this);
};
h.Za = function() {
  var a = ya(this);
  return 0 < a ? new Wb(this, a - 1, null) : null;
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Sb.l(this.e, b, this.e[this.o], this.o + 1);
};
h.S = function(a, b, c) {
  return Sb.l(this.e, b, c, this.o);
};
h.G = function() {
  return this;
};
h.J = function() {
  return this.e.length - this.o;
};
h.O = function() {
  return this.e[this.o];
};
h.U = function() {
  return this.o + 1 < this.e.length ? new Pb(this.e, this.o + 1) : C;
};
h.u = function(a, b) {
  return Xb.a ? Xb.a(this, b) : Xb.call(null, this, b);
};
h.w = function(a, b) {
  var c = b + this.o;
  return c < this.e.length ? this.e[c] : null;
};
h.fa = function(a, b, c) {
  a = b + this.o;
  return a < this.e.length ? this.e[a] : c;
};
h.L = function() {
  return C;
};
var Yb = function() {
  function a(a, b) {
    return b < a.length ? new Pb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), E = function() {
  function a(a, b) {
    return Yb.a(a, b);
  }
  function b(a) {
    return Yb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Wb(a, b, c) {
  this.rb = a;
  this.o = b;
  this.h = c;
  this.q = 0;
  this.i = 32374862;
}
h = Wb.prototype;
h.v = function() {
  return Vb.b ? Vb.b(this) : Vb.call(null, this);
};
h.F = function(a, b) {
  return F.a ? F.a(b, this) : F.call(null, b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a ? Zb.a(b, this) : Zb.call(null, b, this);
};
h.S = function(a, b, c) {
  return Zb.c ? Zb.c(b, c, this) : Zb.call(null, b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return this.o + 1;
};
h.O = function() {
  return v.a(this.rb, this.o);
};
h.U = function() {
  return 0 < this.o ? new Wb(this.rb, this.o - 1, null) : null;
};
h.u = function(a, b) {
  return Xb.a ? Xb.a(this, b) : Xb.call(null, this, b);
};
h.H = function(a, b) {
  return new Wb(this.rb, this.o, b);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b.a ? $b.a(C, this.h) : $b.call(null, C, this.h);
};
function ac(a) {
  return z(z(a));
}
eb._ = function(a, b) {
  return a === b;
};
var G = function() {
  function a(a, b) {
    return null != a ? u(a, b) : u(C, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (p(e)) {
          a = b.a(a, d), d = z(e), e = D(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.a = a;
  b.d = c.d;
  return b;
}();
function H(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.fc)) {
      a = a.J(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (ra(xa, a)) {
            a = ya(a);
          } else {
            if (s) {
              a: {
                a = y(a);
                for (var b = 0;;) {
                  if (Tb(a)) {
                    a = b + ya(a);
                    break a;
                  }
                  a = D(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var bc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return y(a) ? z(a) : c;
      }
      if (Ub(a)) {
        return v.c(a, b, c);
      }
      if (y(a)) {
        a = D(a), b -= 1;
      } else {
        return s ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (y(a)) {
          return z(a);
        }
        throw Error("Index out of bounds");
      }
      if (Ub(a)) {
        return v.a(a, b);
      }
      if (y(a)) {
        var c = D(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (s) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), I = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.i & 16 || a.Vb)) {
        return a.fa(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (ra(Ba, a)) {
        return v.a(a, b);
      }
      if (s) {
        if (a ? a.i & 64 || a.$a || (a.i ? 0 : ra(Ca, a)) : ra(Ca, a)) {
          return bc.c(a, b, c);
        }
        throw Error([t("nth not supported on this type "), t(ua(sa(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.i & 16 || a.Vb)) {
      return a.w(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (ra(Ba, a)) {
      return v.a(a, b);
    }
    if (s) {
      if (a ? a.i & 64 || a.$a || (a.i ? 0 : ra(Ca, a)) : ra(Ca, a)) {
        return bc.a(a, b);
      }
      throw Error([t("nth not supported on this type "), t(ua(sa(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), K = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.ic) ? a.B(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : ra(Ha, a) ? Ia.c(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.ic) ? a.A(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : ra(Ha, a) ? Ia.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), dc = function() {
  function a(a, b, c) {
    return null != a ? Ka(a, b, c) : cc.a ? cc.a([b], [c]) : cc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = E(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.c(a, d, e), p(l)) {
          d = z(l), e = z(D(l)), l = D(D(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var l = z(a);
      a = A(a);
      return c(b, d, l, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.d(b, e, f, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.f = c.f;
  b.c = a;
  b.d = c.d;
  return b;
}(), ec = function() {
  function a(a, b) {
    return null == a ? null : Ma(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = z(e), e = D(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function fc(a) {
  var b = "function" == aa(a);
  return b ? b : a ? p(p(null) ? null : a.ec) ? !0 : a.bc ? !1 : ra(wa, a) : ra(wa, a);
}
var $b = function gc(b, c) {
  return fc(b) && !(b ? b.i & 262144 || b.Gc || (b.i ? 0 : ra(ab, b)) : ra(ab, b)) ? gc(function() {
    "undefined" === typeof ga && (ga = function(b, c, f, g) {
      this.h = b;
      this.fb = c;
      this.vc = f;
      this.rc = g;
      this.q = 0;
      this.i = 393217;
    }, ga.cc = !0, ga.ac = "cljs.core/t9086", ga.nc = function(b) {
      return qb(b, "cljs.core/t9086");
    }, ga.prototype.call = function() {
      function b(d, g) {
        d = this;
        var k = null;
        1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return L.a ? L.a(b.fb, d) : L.call(null, b.fb, d);
      }
      b.k = 1;
      b.f = function(b) {
        var d = z(b);
        b = A(b);
        return c(d, b);
      };
      b.d = c;
      return b;
    }(), ga.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(va(c)));
    }, ga.prototype.a = function() {
      function b(d) {
        var g = null;
        0 < arguments.length && (g = E(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, g);
      }
      function c(b) {
        return L.a ? L.a(self__.fb, b) : L.call(null, self__.fb, b);
      }
      b.k = 0;
      b.f = function(b) {
        b = y(b);
        return c(b);
      };
      b.d = c;
      return b;
    }(), ga.prototype.ec = !0, ga.prototype.D = function() {
      return this.rc;
    }, ga.prototype.H = function(b, c) {
      return new ga(this.h, this.fb, this.vc, c);
    });
    return new ga(c, b, gc, null);
  }(), c) : null == b ? null : bb(b, c);
};
function hc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.kc || (a.i ? 0 : ra(Xa, a)) : ra(Xa, a) : b) ? $a(a) : null;
}
function ic(a) {
  return null == a ? null : Sa(a);
}
var jc = function() {
  function a(a, b) {
    return null == a ? null : Ra(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = z(e), e = D(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}(), kc = {}, lc = 0;
function Nb(a) {
  if (a && (a.i & 4194304 || a.zc)) {
    a = a.v(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < lc && (kc = {}, lc = 0);
            var b = kc[a];
            "number" !== typeof b && (b = da(a), kc[a] = b, lc += 1);
            a = b;
          } else {
            a = null == a ? 0 : s ? fb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function mc(a) {
  return null == a || r(y(a));
}
function nc(a) {
  return a ? a.i & 16777216 || a.Dc ? !0 : a.i ? !1 : ra(ib, a) : ra(ib, a);
}
function oc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.Ac ? !0 : a.i ? !1 : ra(La, a) : ra(La, a);
}
function pc(a) {
  return a ? a.i & 16384 || a.Fc ? !0 : a.i ? !1 : ra(Ua, a) : ra(Ua, a);
}
function qc(a) {
  return a ? a.q & 512 || a.wc ? !0 : !1 : !1;
}
function rc(a) {
  var b = [];
  ea(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function sc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var tc = {};
function uc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.$a ? !0 : a.i ? !1 : ra(Ca, a) : ra(Ca, a);
}
function vc(a) {
  return p(a) ? !0 : !1;
}
function wc(a, b) {
  return K.c(a, b, tc) === tc ? !1 : !0;
}
function Kb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (sa(a) === sa(b)) {
    return a && (a.q & 2048 || a.kb) ? a.lb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var xc = function() {
  function a(a, b, c, g) {
    for (;;) {
      var k = Kb(I.a(a, g), I.a(b, g));
      if (0 === k && g + 1 < c) {
        g += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = H(a), g = H(b);
    return f < g ? -1 : f > g ? 1 : s ? c.l(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), Zb = function() {
  function a(a, b, c) {
    for (c = y(c);;) {
      if (c) {
        b = a.a ? a.a(b, z(c)) : a.call(null, b, z(c)), c = D(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = y(b);
    return c ? yc.c ? yc.c(a, z(c), D(c)) : yc.call(null, a, z(c), D(c)) : a.r ? a.r() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), yc = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.mc) ? c.S(null, a, b) : c instanceof Array ? Sb.c(c, a, b) : "string" === typeof c ? Sb.c(c, a, b) : ra(cb, c) ? db.c(c, a, b) : s ? Zb.c(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.mc) ? b.R(null, a) : b instanceof Array ? Sb.a(b, a) : "string" === typeof b ? Sb.a(b, a) : ra(cb, b) ? db.a(b, a) : s ? Zb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), zc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a < c) {
          if (D(d)) {
            a = c, c = z(d), d = D(d);
          } else {
            return c < z(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, g, a);
    };
    a.d = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.d(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = b.f;
  a.b = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a < b;
  };
  a.d = b.d;
  return a;
}(), Ac = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a <= c) {
          if (D(d)) {
            a = c, c = z(d), d = D(d);
          } else {
            return c <= z(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, g, a);
    };
    a.d = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.d(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = b.f;
  a.b = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a <= b;
  };
  a.d = b.d;
  return a;
}(), Bc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (D(d)) {
            a = c, c = z(d), d = D(d);
          } else {
            return c > z(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, g, a);
    };
    a.d = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.d(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = b.f;
  a.b = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a > b;
  };
  a.d = b.d;
  return a;
}(), Cc = function() {
  var a = null, b = function() {
    function a(c, f, g) {
      var k = null;
      2 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a >= c) {
          if (D(d)) {
            a = c, c = z(d), d = D(d);
          } else {
            return c >= z(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, g, a);
    };
    a.d = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.d(a, d, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.f = b.f;
  a.b = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a >= b;
  };
  a.d = b.d;
  return a;
}(), Dc = function() {
  function a(a, b) {
    return a > b ? a : b;
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return yc.c(b, a > d ? a : d, e);
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function Ec(a) {
  return 0 <= a ? Math.floor.b ? Math.floor.b(a) : Math.floor.call(null, a) : Math.ceil.b ? Math.ceil.b(a) : Math.ceil.call(null, a);
}
function Fc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Gc(a) {
  var b = 1;
  for (a = y(a);;) {
    if (a && 0 < b) {
      b -= 1, a = D(a);
    } else {
      return a;
    }
  }
}
var t = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new fa(b.b(a)), l = d;;) {
        if (p(l)) {
          e = e.append(b.b(z(l))), l = D(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.f = function(a) {
      var b = z(a);
      a = A(a);
      return c(b, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, E(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.f = c.f;
  b.r = function() {
    return "";
  };
  b.b = a;
  b.d = c.d;
  return b;
}(), Hc = function() {
  var a = null, a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return a.substring(c);
      case 3:
        return a.substring(c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.a = function(a, c) {
    return a.substring(c);
  };
  a.c = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Xb(a, b) {
  return vc(nc(b) ? function() {
    for (var c = y(a), d = y(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (w.a(z(c), z(d))) {
        c = D(c), d = D(d);
      } else {
        return s ? !1 : null;
      }
    }
  }() : null);
}
function Mb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Vb(a) {
  if (y(a)) {
    var b = Nb(z(a));
    for (a = D(a);;) {
      if (null == a) {
        return b;
      }
      b = Mb(b, Nb(z(a)));
      a = D(a);
    }
  } else {
    return 0;
  }
}
function Ic(a) {
  var b = 0;
  for (a = y(a);;) {
    if (a) {
      var c = z(a), b = (b + (Nb(Jc.b ? Jc.b(c) : Jc.call(null, c)) ^ Nb(Kc.b ? Kc.b(c) : Kc.call(null, c)))) % 4503599627370496;
      a = D(a);
    } else {
      return b;
    }
  }
}
function Lc(a, b, c, d, e) {
  this.h = a;
  this.first = b;
  this.xa = c;
  this.count = d;
  this.j = e;
  this.q = 0;
  this.i = 65937646;
}
h = Lc.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  return 1 === this.count ? null : this.xa;
};
h.F = function(a, b) {
  return new Lc(this.h, b, this, this.count + 1, null);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return this.count;
};
h.ta = function() {
  return this.first;
};
h.ua = function() {
  return Ea(this);
};
h.O = function() {
  return this.first;
};
h.U = function() {
  return 1 === this.count ? C : this.xa;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Lc(b, this.first, this.xa, this.count, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return C;
};
function Mc(a) {
  this.h = a;
  this.q = 0;
  this.i = 65937614;
}
h = Mc.prototype;
h.v = function() {
  return 0;
};
h.Y = function() {
  return null;
};
h.F = function(a, b) {
  return new Lc(this.h, b, null, 1, null);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return null;
};
h.J = function() {
  return 0;
};
h.ta = function() {
  return null;
};
h.ua = function() {
  throw Error("Can't pop empty list");
};
h.O = function() {
  return null;
};
h.U = function() {
  return C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Mc(b);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return this;
};
var C = new Mc(null);
function Nc(a) {
  return kb(a);
}
function Oc(a) {
  return(a ? a.i & 134217728 || a.Bc || (a.i ? 0 : ra(jb, a)) : ra(jb, a)) ? kb(a) : yc.c(G, C, a);
}
var Pc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Pb && 0 === a.o) {
      b = a.e;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.O(null)), a = a.Y(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = C;;) {
      if (0 < a) {
        var f = a - 1, e = e.F(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function Qc(a, b, c, d) {
  this.h = a;
  this.first = b;
  this.xa = c;
  this.j = d;
  this.q = 0;
  this.i = 65929452;
}
h = Qc.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  return null == this.xa ? null : y(this.xa);
};
h.F = function(a, b) {
  return new Qc(null, b, this, this.j);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return this.first;
};
h.U = function() {
  return null == this.xa ? C : this.xa;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Qc(b, this.first, this.xa, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
function F(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.$a)) ? new Qc(null, a, b, null) : new Qc(null, a, y(b), null);
}
function M(a, b, c, d) {
  this.ca = a;
  this.name = b;
  this.Ca = c;
  this.Ka = d;
  this.i = 2153775105;
  this.q = 4096;
}
h = M.prototype;
h.s = function(a, b) {
  return qb(b, [t(":"), t(this.Ca)].join(""));
};
h.v = function() {
  null == this.Ka && (this.Ka = Mb(Nb(this.ca), Nb(this.name)) + 2654435769);
  return this.Ka;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return K.a(c, this);
      case 3:
        return K.c(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return K.a(a, this);
};
h.a = function(a, b) {
  return K.c(a, this, b);
};
h.u = function(a, b) {
  return b instanceof M ? this.Ca === b.Ca : !1;
};
h.toString = function() {
  return[t(":"), t(this.Ca)].join("");
};
function Rc(a) {
  return a instanceof M;
}
function N(a, b) {
  return a === b ? !0 : a instanceof M && b instanceof M ? a.Ca === b.Ca : !1;
}
function Sc(a) {
  if (a && (a.q & 4096 || a.lc)) {
    return a.ca;
  }
  throw Error([t("Doesn't support namespace: "), t(a)].join(""));
}
var Uc = function() {
  function a(a, b) {
    return new M(a, b, [t(p(a) ? [t(a), t("/")].join("") : null), t(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof M) {
      return a;
    }
    if (a instanceof x) {
      return new M(Sc(a), Tc.b ? Tc.b(a) : Tc.call(null, a), a.Ia, null);
    }
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new M(b[0], b[1], a, null) : new M(null, b[0], a, null);
    }
    return null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Vc(a, b, c, d) {
  this.h = a;
  this.fn = b;
  this.N = c;
  this.j = d;
  this.q = 0;
  this.i = 32374988;
}
h = Vc.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  hb(this);
  return null == this.N ? null : D(this.N);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
function Wc(a) {
  null != a.fn && (a.N = a.fn.r ? a.fn.r() : a.fn.call(null), a.fn = null);
  return a.N;
}
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  Wc(this);
  if (null == this.N) {
    return null;
  }
  for (var a = this.N;;) {
    if (a instanceof Vc) {
      a = Wc(a);
    } else {
      return this.N = a, y(this.N);
    }
  }
};
h.O = function() {
  hb(this);
  return null == this.N ? null : z(this.N);
};
h.U = function() {
  hb(this);
  return null != this.N ? A(this.N) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Vc(b, this.fn, this.N, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
function Xc(a, b) {
  this.qb = a;
  this.end = b;
  this.q = 0;
  this.i = 2;
}
Xc.prototype.J = function() {
  return this.end;
};
Xc.prototype.add = function(a) {
  this.qb[this.end] = a;
  return this.end += 1;
};
Xc.prototype.P = function() {
  var a = new Yc(this.qb, 0, this.end);
  this.qb = null;
  return a;
};
function Zc(a) {
  return new Xc(Array(a), 0);
}
function Yc(a, b, c) {
  this.e = a;
  this.off = b;
  this.end = c;
  this.q = 0;
  this.i = 524306;
}
h = Yc.prototype;
h.R = function(a, b) {
  return Sb.l(this.e, b, this.e[this.off], this.off + 1);
};
h.S = function(a, b, c) {
  return Sb.l(this.e, b, c, this.off);
};
h.Ub = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Yc(this.e, this.off + 1, this.end);
};
h.w = function(a, b) {
  return this.e[this.off + b];
};
h.fa = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.e[this.off + b] : c;
};
h.J = function() {
  return this.end - this.off;
};
var $c = function() {
  function a(a, b, c) {
    return new Yc(a, b, c);
  }
  function b(a, b) {
    return new Yc(a, b, a.length);
  }
  function c(a) {
    return new Yc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.a = b;
  d.c = a;
  return d;
}();
function ad(a, b, c, d) {
  this.P = a;
  this.oa = b;
  this.h = c;
  this.j = d;
  this.i = 31850732;
  this.q = 1536;
}
h = ad.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  if (1 < ya(this.P)) {
    return new ad(Cb(this.P), this.oa, this.h, null);
  }
  var a = hb(this.oa);
  return null == a ? null : a;
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return v.a(this.P, 0);
};
h.U = function() {
  return 1 < ya(this.P) ? new ad(Cb(this.P), this.oa, this.h, null) : null == this.oa ? C : this.oa;
};
h.sb = function() {
  return null == this.oa ? null : this.oa;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new ad(this.P, this.oa, b, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
h.tb = function() {
  return this.P;
};
h.ub = function() {
  return null == this.oa ? C : this.oa;
};
function bd(a, b) {
  return 0 === ya(a) ? b : new ad(a, b, null, null);
}
function cd(a) {
  for (var b = [];;) {
    if (y(a)) {
      b.push(z(a)), a = D(a);
    } else {
      return b;
    }
  }
}
function dd(a, b) {
  if (Tb(a)) {
    return H(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && y(c)) {
      c = D(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var fd = function ed(b) {
  return null == b ? null : null == D(b) ? y(z(b)) : s ? F(z(b), ed(D(b))) : null;
}, gd = function() {
  function a(a, b) {
    return new Vc(null, function() {
      var c = y(a);
      return c ? qc(c) ? bd(Db(c), d.a(Eb(c), b)) : F(z(c), d.a(A(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new Vc(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new Vc(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function B(a, b) {
        return new Vc(null, function() {
          var c = y(a);
          return c ? qc(c) ? bd(Db(c), B(Eb(c), b)) : F(z(c), B(A(c), b)) : p(b) ? B(z(b), D(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return b(c, d, a);
    };
    a.d = b;
    return a;
  }(), d = function(d, g, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.d(d, g, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.f = e.f;
  d.r = c;
  d.b = b;
  d.a = a;
  d.d = e.d;
  return d;
}(), hd = function() {
  function a(a, b, c, d) {
    return F(a, F(b, F(c, d)));
  }
  function b(a, b, c) {
    return F(a, F(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, q) {
      var B = null;
      4 < arguments.length && (B = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, B);
    }
    function b(a, c, d, e, f) {
      return F(a, F(c, F(d, F(e, fd(f)))));
    }
    a.k = 4;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = D(a);
      var q = z(a);
      a = A(a);
      return b(c, d, e, q, a);
    };
    a.d = b;
    return a;
  }(), c = function(c, f, g, k, l) {
    switch(arguments.length) {
      case 1:
        return y(c);
      case 2:
        return F(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, k);
      default:
        return d.d(c, f, g, k, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.f = d.f;
  c.b = function(a) {
    return y(a);
  };
  c.a = function(a, b) {
    return F(a, b);
  };
  c.c = b;
  c.l = a;
  c.d = d.d;
  return c;
}();
function id(a, b, c) {
  var d = y(c);
  if (0 === b) {
    return a.r ? a.r() : a.call(null);
  }
  c = Da(d);
  var e = Ea(d);
  if (1 === b) {
    return a.b ? a.b(c) : a.b ? a.b(c) : a.call(null, c);
  }
  var d = Da(e), f = Ea(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Da(f), g = Ea(f);
  if (3 === b) {
    return a.c ? a.c(c, d, e) : a.c ? a.c(c, d, e) : a.call(null, c, d, e);
  }
  var f = Da(g), k = Ea(g);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = Da(k);
  k = Ea(k);
  if (5 === b) {
    return a.n ? a.n(c, d, e, f, g) : a.n ? a.n(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = Da(k);
  var l = Ea(k);
  if (6 === b) {
    return a.t ? a.t(c, d, e, f, g, a) : a.t ? a.t(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var k = Da(l), m = Ea(l);
  if (7 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, a, k) : a.Ta ? a.Ta(c, d, e, f, g, a, k) : a.call(null, c, d, e, f, g, a, k);
  }
  var l = Da(m), q = Ea(m);
  if (8 === b) {
    return a.C ? a.C(c, d, e, f, g, a, k, l) : a.C ? a.C(c, d, e, f, g, a, k, l) : a.call(null, c, d, e, f, g, a, k, l);
  }
  var m = Da(q), B = Ea(q);
  if (9 === b) {
    return a.Gb ? a.Gb(c, d, e, f, g, a, k, l, m) : a.Gb ? a.Gb(c, d, e, f, g, a, k, l, m) : a.call(null, c, d, e, f, g, a, k, l, m);
  }
  var q = Da(B), J = Ea(B);
  if (10 === b) {
    return a.vb ? a.vb(c, d, e, f, g, a, k, l, m, q) : a.vb ? a.vb(c, d, e, f, g, a, k, l, m, q) : a.call(null, c, d, e, f, g, a, k, l, m, q);
  }
  var B = Da(J), pa = Ea(J);
  if (11 === b) {
    return a.wb ? a.wb(c, d, e, f, g, a, k, l, m, q, B) : a.wb ? a.wb(c, d, e, f, g, a, k, l, m, q, B) : a.call(null, c, d, e, f, g, a, k, l, m, q, B);
  }
  var J = Da(pa), ja = Ea(pa);
  if (12 === b) {
    return a.xb ? a.xb(c, d, e, f, g, a, k, l, m, q, B, J) : a.xb ? a.xb(c, d, e, f, g, a, k, l, m, q, B, J) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J);
  }
  var pa = Da(ja), Ga = Ea(ja);
  if (13 === b) {
    return a.yb ? a.yb(c, d, e, f, g, a, k, l, m, q, B, J, pa) : a.yb ? a.yb(c, d, e, f, g, a, k, l, m, q, B, J, pa) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa);
  }
  var ja = Da(Ga), Za = Ea(Ga);
  if (14 === b) {
    return a.zb ? a.zb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja) : a.zb ? a.zb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja);
  }
  var Ga = Da(Za), Ya = Ea(Za);
  if (15 === b) {
    return a.Ab ? a.Ab(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga) : a.Ab ? a.Ab(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga);
  }
  var Za = Da(Ya), sb = Ea(Ya);
  if (16 === b) {
    return a.Bb ? a.Bb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za) : a.Bb ? a.Bb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za);
  }
  var Ya = Da(sb), pb = Ea(sb);
  if (17 === b) {
    return a.Cb ? a.Cb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya) : a.Cb ? a.Cb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya);
  }
  var sb = Da(pb), xb = Ea(pb);
  if (18 === b) {
    return a.Db ? a.Db(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb) : a.Db ? a.Db(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb);
  }
  pb = Da(xb);
  xb = Ea(xb);
  if (19 === b) {
    return a.Eb ? a.Eb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb) : a.Eb ? a.Eb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb);
  }
  var Hb = Da(xb);
  Ea(xb);
  if (20 === b) {
    return a.Fb ? a.Fb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb, Hb) : a.Fb ? a.Fb(c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb, Hb) : a.call(null, c, d, e, f, g, a, k, l, m, q, B, J, pa, ja, Ga, Za, Ya, sb, pb, Hb);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var L = function() {
  function a(a, b, c, d, e) {
    b = hd.l(b, c, d, e);
    c = a.k;
    return a.f ? (d = dd(b, c + 1), d <= c ? id(a, d, b) : a.f(b)) : a.apply(a, cd(b));
  }
  function b(a, b, c, d) {
    b = hd.c(b, c, d);
    c = a.k;
    return a.f ? (d = dd(b, c + 1), d <= c ? id(a, d, b) : a.f(b)) : a.apply(a, cd(b));
  }
  function c(a, b, c) {
    b = hd.a(b, c);
    c = a.k;
    if (a.f) {
      var d = dd(b, c + 1);
      return d <= c ? id(a, d, b) : a.f(b);
    }
    return a.apply(a, cd(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.f) {
      var d = dd(b, c + 1);
      return d <= c ? id(a, d, b) : a.f(b);
    }
    return a.apply(a, cd(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, pa) {
      var ja = null;
      5 < arguments.length && (ja = E(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, ja);
    }
    function b(a, c, d, e, f, g) {
      c = F(c, F(d, F(e, F(f, fd(g)))));
      d = a.k;
      return a.f ? (e = dd(c, d + 1), e <= d ? id(a, e, c) : a.f(c)) : a.apply(a, cd(c));
    }
    a.k = 5;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = D(a);
      var f = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, d, e, f, g, a);
    };
    a.d = b;
    return a;
  }(), e = function(e, k, l, m, q, B) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, q);
      default:
        return f.d(e, k, l, m, q, E(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.f = f.f;
  e.a = d;
  e.c = c;
  e.l = b;
  e.n = a;
  e.d = f.d;
  return e;
}(), jd = function() {
  function a(a, b) {
    return!w.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return r(L.l(w, a, c, d));
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return b(c, d, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function() {
    return!1;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function kd(a) {
  return y(a) ? a : null;
}
function ld(a, b) {
  for (;;) {
    if (null == y(b)) {
      return!0;
    }
    if (p(a.b ? a.b(z(b)) : a.call(null, z(b)))) {
      var c = a, d = D(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function md(a, b) {
  for (;;) {
    if (y(b)) {
      var c = a.b ? a.b(z(b)) : a.call(null, z(b));
      if (p(c)) {
        return c;
      }
      var c = a, d = D(b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function nd(a) {
  return a;
}
function od(a) {
  return function() {
    var b = null, c = function() {
      function b(a, d, k) {
        var l = null;
        2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
        return c.call(this, a, d, l);
      }
      function c(b, d, e) {
        return r(L.l(a, b, d, e));
      }
      b.k = 2;
      b.f = function(a) {
        var b = z(a);
        a = D(a);
        var d = z(a);
        a = A(a);
        return c(b, d, a);
      };
      b.d = c;
      return b;
    }(), b = function(b, e, f) {
      switch(arguments.length) {
        case 0:
          return r(a.r ? a.r() : a.call(null));
        case 1:
          return r(a.b ? a.b(b) : a.call(null, b));
        case 2:
          return r(a.a ? a.a(b, e) : a.call(null, b, e));
        default:
          return c.d(b, e, E(arguments, 2));
      }
      throw Error("Invalid arity: " + arguments.length);
    };
    b.k = 2;
    b.f = c.f;
    return b;
  }();
}
var pd = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, m, q) {
          return a.b ? a.b(b.b ? b.b(L.n(c, d, l, m, q)) : b.call(null, L.n(c, d, l, m, q))) : a.call(null, b.b ? b.b(L.n(c, d, l, m, q)) : b.call(null, L.n(c, d, l, m, q)));
        }
        d.k = 3;
        d.f = function(a) {
          var b = z(a);
          a = D(a);
          var c = z(a);
          a = D(a);
          var d = z(a);
          a = A(a);
          return k(b, c, d, a);
        };
        d.d = k;
        return d;
      }(), d = function(d, k, B, J) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.b ? b.b(c.r ? c.r() : c.call(null)) : b.call(null, c.r ? c.r() : c.call(null))) : a.call(null, b.b ? b.b(c.r ? c.r() : c.call(null)) : b.call(null, c.r ? c.r() : c.call(null)));
          case 1:
            return a.b ? a.b(b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d))) : a.call(null, b.b ? b.b(c.b ? c.b(d) : c.call(null, d)) : b.call(null, c.b ? c.b(d) : c.call(null, d)));
          case 2:
            return a.b ? a.b(b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.b ? b.b(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.b ? a.b(b.b ? b.b(c.c ? c.c(d, k, B) : c.call(null, d, k, B)) : b.call(null, c.c ? c.c(d, k, B) : c.call(null, d, k, B))) : a.call(null, b.b ? b.b(c.c ? c.c(d, k, B) : c.call(null, d, k, B)) : b.call(null, c.c ? c.c(d, k, B) : c.call(null, d, k, B)));
          default:
            return l.d(d, k, B, E(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.k = 3;
      d.f = l.f;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = E(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, g, k, l) {
          return a.b ? a.b(L.n(b, c, g, k, l)) : a.call(null, L.n(b, c, g, k, l));
        }
        c.k = 3;
        c.f = function(a) {
          var b = z(a);
          a = D(a);
          var c = z(a);
          a = D(a);
          var e = z(a);
          a = A(a);
          return d(b, c, e, a);
        };
        c.d = d;
        return c;
      }(), c = function(c, g, q, B) {
        switch(arguments.length) {
          case 0:
            return a.b ? a.b(b.r ? b.r() : b.call(null)) : a.call(null, b.r ? b.r() : b.call(null));
          case 1:
            return a.b ? a.b(b.b ? b.b(c) : b.call(null, c)) : a.call(null, b.b ? b.b(c) : b.call(null, c));
          case 2:
            return a.b ? a.b(b.a ? b.a(c, g) : b.call(null, c, g)) : a.call(null, b.a ? b.a(c, g) : b.call(null, c, g));
          case 3:
            return a.b ? a.b(b.c ? b.c(c, g, q) : b.call(null, c, g, q)) : a.call(null, b.c ? b.c(c, g, q) : b.call(null, c, g, q));
          default:
            return d.d(c, g, q, E(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.k = 3;
      c.f = d.f;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var q = null;
      3 < arguments.length && (q = E(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, q);
    }
    function b(a, c, d, e) {
      var f = Oc(hd.l(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = L.a(z(f), a);
          for (var c = D(f);;) {
            if (c) {
              a = z(c).call(null, a), c = D(c);
            } else {
              return a;
            }
          }
        }
        a.k = 0;
        a.f = function(a) {
          a = y(a);
          return b(a);
        };
        a.d = b;
        return a;
      }();
    }
    a.k = 3;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = A(a);
      return b(c, d, e, a);
    };
    a.d = b;
    return a;
  }(), c = function(c, f, g, k) {
    switch(arguments.length) {
      case 0:
        return nd;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.d(c, f, g, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.f = d.f;
  c.r = function() {
    return nd;
  };
  c.b = function(a) {
    return a;
  };
  c.a = b;
  c.c = a;
  c.d = d.d;
  return c;
}(), qd = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return q.call(this, b);
      }
      function q(e) {
        return L.n(a, b, c, d, e);
      }
      e.k = 0;
      e.f = function(a) {
        a = y(a);
        return q(a);
      };
      e.d = q;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return L.l(a, b, c, d);
      }
      d.k = 0;
      d.f = function(a) {
        a = y(a);
        return e(a);
      };
      d.d = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return L.c(a, b, c);
      }
      c.k = 0;
      c.f = function(a) {
        a = y(a);
        return d(a);
      };
      c.d = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, B) {
      var J = null;
      4 < arguments.length && (J = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, J);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = E(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return L.n(a, c, d, e, gd.a(f, b));
        }
        b.k = 0;
        b.f = function(a) {
          a = y(a);
          return g(a);
        };
        b.d = g;
        return b;
      }();
    }
    a.k = 4;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = D(a);
      var f = z(a);
      a = A(a);
      return b(c, d, e, f, a);
    };
    a.d = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.d(d, g, k, l, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.f = e.f;
  d.b = function(a) {
    return a;
  };
  d.a = c;
  d.c = b;
  d.l = a;
  d.d = e.d;
  return d;
}();
function rd(a, b) {
  return function d(b, f) {
    return new Vc(null, function() {
      var g = y(f);
      if (g) {
        if (qc(g)) {
          for (var k = Db(g), l = H(k), m = Zc(l), q = 0;;) {
            if (q < l) {
              var B = a.a ? a.a(b + q, v.a(k, q)) : a.call(null, b + q, v.a(k, q));
              m.add(B);
              q += 1;
            } else {
              break;
            }
          }
          return bd(m.P(), d(b + l, Eb(g)));
        }
        return F(a.a ? a.a(b, z(g)) : a.call(null, b, z(g)), d(b + 1, A(g)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var td = function sd(b, c) {
  return new Vc(null, function() {
    var d = y(c);
    if (d) {
      if (qc(d)) {
        for (var e = Db(d), f = H(e), g = Zc(f), k = 0;;) {
          if (k < f) {
            var l = b.b ? b.b(v.a(e, k)) : b.call(null, v.a(e, k));
            null != l && g.add(l);
            k += 1;
          } else {
            break;
          }
        }
        return bd(g.P(), sd(b, Eb(d)));
      }
      e = b.b ? b.b(z(d)) : b.call(null, z(d));
      return null == e ? sd(b, A(d)) : F(e, sd(b, A(d)));
    }
    return null;
  }, null, null);
}, ud = function() {
  function a(a, b, c, e) {
    return new Vc(null, function() {
      var m = y(b), q = y(c), B = y(e);
      return m && q && B ? F(a.c ? a.c(z(m), z(q), z(B)) : a.call(null, z(m), z(q), z(B)), d.l(a, A(m), A(q), A(B))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Vc(null, function() {
      var e = y(b), m = y(c);
      return e && m ? F(a.a ? a.a(z(e), z(m)) : a.call(null, z(e), z(m)), d.c(a, A(e), A(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new Vc(null, function() {
      var c = y(b);
      if (c) {
        if (qc(c)) {
          for (var e = Db(c), m = H(e), q = Zc(m), B = 0;;) {
            if (B < m) {
              var J = a.b ? a.b(v.a(e, B)) : a.call(null, v.a(e, B));
              q.add(J);
              B += 1;
            } else {
              break;
            }
          }
          return bd(q.P(), d.a(a, Eb(c)));
        }
        return F(a.b ? a.b(z(c)) : a.call(null, z(c)), d.a(a, A(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, B) {
      var J = null;
      4 < arguments.length && (J = E(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, J);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return L.a(a, b);
      }, function pa(a) {
        return new Vc(null, function() {
          var b = d.a(y, a);
          return ld(nd, b) ? F(d.a(z, b), pa(d.a(A, b))) : null;
        }, null, null);
      }(G.d(g, f, E([e, c], 0))));
    }
    a.k = 4;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = D(a);
      var f = z(a);
      a = A(a);
      return b(c, d, e, f, a);
    };
    a.d = b;
    return a;
  }(), d = function(d, g, k, l, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, k);
      case 4:
        return a.call(this, d, g, k, l);
      default:
        return e.d(d, g, k, l, E(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.f = e.f;
  d.a = c;
  d.c = b;
  d.l = a;
  d.d = e.d;
  return d;
}(), wd = function vd(b, c) {
  return new Vc(null, function() {
    if (0 < b) {
      var d = y(c);
      return d ? F(z(d), vd(b - 1, A(d))) : null;
    }
    return null;
  }, null, null);
};
function xd(a, b) {
  return new Vc(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = y(d), 0 < c && d) {
          c -= 1, d = A(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
function yd(a, b) {
  return new Vc(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        var d = y(d), e;
        e = (e = d) ? c.b ? c.b(z(d)) : c.call(null, z(d)) : e;
        if (p(e)) {
          d = A(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
var zd = function() {
  function a(a, b) {
    return wd(a, c.b(b));
  }
  function b(a) {
    return new Vc(null, function() {
      return F(a, c.b(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Ad(a) {
  return function c(a, e) {
    return new Vc(null, function() {
      var f = y(a);
      return f ? F(z(f), c(A(f), e)) : y(e) ? c(z(e), A(e)) : null;
    }, null, null);
  }(null, a);
}
var Bd = function() {
  function a(a, b) {
    return Ad(ud.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Ad(L.l(ud, a, c, d));
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return b(c, d, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.a = a;
  b.d = c.d;
  return b;
}(), Dd = function Cd(b, c) {
  return new Vc(null, function() {
    var d = y(c);
    if (d) {
      if (qc(d)) {
        for (var e = Db(d), f = H(e), g = Zc(f), k = 0;;) {
          if (k < f) {
            if (p(b.b ? b.b(v.a(e, k)) : b.call(null, v.a(e, k)))) {
              var l = v.a(e, k);
              g.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return bd(g.P(), Cd(b, Eb(d)));
      }
      e = z(d);
      d = A(d);
      return p(b.b ? b.b(e) : b.call(null, e)) ? F(e, Cd(b, d)) : Cd(b, d);
    }
    return null;
  }, null, null);
};
function Ed(a, b) {
  return Dd(od(a), b);
}
function Fd(a) {
  return function c(a) {
    return new Vc(null, function() {
      return F(a, p(nc.b ? nc.b(a) : nc.call(null, a)) ? Bd.a(c, y.b ? y.b(a) : y.call(null, a)) : null);
    }, null, null);
  }(a);
}
function Gd(a) {
  return Dd(function(a) {
    return!nc(a);
  }, A(Fd(a)));
}
function Hd(a, b) {
  var c;
  null != a ? a && (a.q & 4 || a.yc) ? (c = yc.c(yb, wb(a), b), c = zb(c)) : c = yc.c(u, a, b) : c = yc.c(G, C, b);
  return c;
}
var Id = function() {
  function a(a, b, c, k) {
    return new Vc(null, function() {
      var l = y(k);
      if (l) {
        var m = wd(a, l);
        return a === H(m) ? F(m, d.l(a, b, c, xd(b, l))) : u(C, wd(a, gd.a(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new Vc(null, function() {
      var k = y(c);
      if (k) {
        var l = wd(a, k);
        return a === H(l) ? F(l, d.c(a, b, xd(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.c(a, a, b);
  }
  var d = null, d = function(d, f, g, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.c = b;
  d.l = a;
  return d;
}();
function Jd(a, b) {
  this.I = a;
  this.e = b;
}
function Kd(a) {
  return new Jd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ld(a) {
  return new Jd(a.I, va(a.e));
}
function Md(a) {
  a = a.g;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Nd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Kd(a);
    d.e[0] = c;
    c = d;
    b -= 5;
  }
}
var Pd = function Od(b, c, d, e) {
  var f = Ld(d), g = b.g - 1 >>> c & 31;
  5 === c ? f.e[g] = e : (d = d.e[g], b = null != d ? Od(b, c - 5, d, e) : Nd(null, c - 5, e), f.e[g] = b);
  return f;
};
function Qd(a, b) {
  throw Error([t("No item "), t(a), t(" in vector of length "), t(b)].join(""));
}
function Rd(a, b) {
  if (0 <= b && b < a.g) {
    if (b >= Md(a)) {
      return a.X;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.e[b >>> d & 31], d = e
      } else {
        return c.e;
      }
    }
  } else {
    return Qd(b, a.g);
  }
}
var Td = function Sd(b, c, d, e, f) {
  var g = Ld(d);
  if (0 === c) {
    g.e[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Sd(b, c - 5, d.e[k], e, f);
    g.e[k] = b;
  }
  return g;
}, Vd = function Ud(b, c, d) {
  var e = b.g - 2 >>> c & 31;
  if (5 < c) {
    b = Ud(b, c - 5, d.e[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = Ld(d);
    d.e[e] = b;
    return d;
  }
  return 0 === e ? null : s ? (d = Ld(d), d.e[e] = null, d) : null;
};
function O(a, b, c, d, e, f) {
  this.h = a;
  this.g = b;
  this.shift = c;
  this.root = d;
  this.X = e;
  this.j = f;
  this.q = 4;
  this.i = 167668511;
}
h = O.prototype;
h.Sa = function() {
  return new Wd(this.g, this.shift, Xd.b ? Xd.b(this.root) : Xd.call(null, this.root), Yd.b ? Yd.b(this.X) : Yd.call(null, this.X));
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.A = function(a, b) {
  return v.c(this, b, null);
};
h.B = function(a, b, c) {
  return v.c(this, b, c);
};
h.da = function(a, b, c) {
  if (0 <= b && b < this.g) {
    return Md(this) <= b ? (a = va(this.X), a[b & 31] = c, new O(this.h, this.g, this.shift, this.root, a, null)) : new O(this.h, this.g, this.shift, Td(this, this.shift, this.root, b, c), this.X, null);
  }
  if (b === this.g) {
    return u(this, c);
  }
  if (s) {
    throw Error([t("Index "), t(b), t(" out of bounds  [0,"), t(this.g), t("]")].join(""));
  }
  return null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.fa(null, a, b);
};
h.F = function(a, b) {
  if (32 > this.g - Md(this)) {
    for (var c = this.X.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.X[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new O(this.h, this.g + 1, this.shift, this.root, d, null);
  }
  c = (d = this.g >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Kd(null), d.e[0] = this.root, e = Nd(null, this.shift, new Jd(null, this.X)), d.e[1] = e) : d = Pd(this, this.shift, this.root, new Jd(null, this.X));
  return new O(this.h, this.g + 1, c, d, [b], null);
};
h.Za = function() {
  return 0 < this.g ? new Wb(this, this.g - 1, null) : null;
};
h.Xa = function() {
  return v.a(this, 0);
};
h.Ya = function() {
  return v.a(this, 1);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Rb.a(this, b);
};
h.S = function(a, b, c) {
  return Rb.c(this, b, c);
};
h.G = function() {
  return 0 === this.g ? null : 32 > this.g ? E.b(this.X) : s ? Zd.c ? Zd.c(this, 0, 0) : Zd.call(null, this, 0, 0) : null;
};
h.J = function() {
  return this.g;
};
h.ta = function() {
  return 0 < this.g ? v.a(this, this.g - 1) : null;
};
h.ua = function() {
  if (0 === this.g) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.g) {
    return bb($d, this.h);
  }
  if (1 < this.g - Md(this)) {
    return new O(this.h, this.g - 1, this.shift, this.root, this.X.slice(0, -1), null);
  }
  if (s) {
    var a = Rd(this, this.g - 2), b = Vd(this, this.shift, this.root), b = null == b ? P : b, c = this.g - 1;
    return 5 < this.shift && null == b.e[1] ? new O(this.h, c, this.shift - 5, b.e[0], a, null) : new O(this.h, c, this.shift, b, a, null);
  }
  return null;
};
h.Na = function(a, b, c) {
  return Ka(this, b, c);
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new O(b, this.g, this.shift, this.root, this.X, this.j);
};
h.D = function() {
  return this.h;
};
h.w = function(a, b) {
  return Rd(this, b)[b & 31];
};
h.fa = function(a, b, c) {
  return 0 <= b && b < this.g ? v.a(this, b) : c;
};
h.L = function() {
  return $b($d, this.h);
};
var P = new Jd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), $d = new O(null, 0, 5, P, [], 0);
function ae(a, b) {
  var c = a.length, d = b ? a : va(a);
  if (32 > c) {
    return new O(null, c, 5, P, d, null);
  }
  for (var e = d.slice(0, 32), f = 32, g = (new O(null, 32, 5, P, e, null)).Sa(null);;) {
    if (f < c) {
      e = f + 1, g = yb(g, d[f]), f = e;
    } else {
      return zb(g);
    }
  }
}
function be(a) {
  return zb(yc.c(yb, wb($d), a));
}
var ce = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Pb && 0 === a.o ? ae.a ? ae.a(a.e, !0) : ae.call(null, a.e, !0) : be(a);
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function de(a, b, c, d, e, f) {
  this.T = a;
  this.ja = b;
  this.o = c;
  this.off = d;
  this.h = e;
  this.j = f;
  this.i = 32243948;
  this.q = 1536;
}
h = de.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  if (this.off + 1 < this.ja.length) {
    var a = Zd.l ? Zd.l(this.T, this.ja, this.o, this.off + 1) : Zd.call(null, this.T, this.ja, this.o, this.off + 1);
    return null == a ? null : a;
  }
  return Fb(this);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Rb.a(ee.c ? ee.c(this.T, this.o + this.off, H(this.T)) : ee.call(null, this.T, this.o + this.off, H(this.T)), b);
};
h.S = function(a, b, c) {
  return Rb.c(ee.c ? ee.c(this.T, this.o + this.off, H(this.T)) : ee.call(null, this.T, this.o + this.off, H(this.T)), b, c);
};
h.G = function() {
  return this;
};
h.O = function() {
  return this.ja[this.off];
};
h.U = function() {
  if (this.off + 1 < this.ja.length) {
    var a = Zd.l ? Zd.l(this.T, this.ja, this.o, this.off + 1) : Zd.call(null, this.T, this.ja, this.o, this.off + 1);
    return null == a ? C : a;
  }
  return Eb(this);
};
h.sb = function() {
  var a = this.ja.length, a = this.o + a < ya(this.T) ? Zd.c ? Zd.c(this.T, this.o + a, 0) : Zd.call(null, this.T, this.o + a, 0) : null;
  return null == a ? null : a;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return Zd.n ? Zd.n(this.T, this.ja, this.o, this.off, b) : Zd.call(null, this.T, this.ja, this.o, this.off, b);
};
h.L = function() {
  return $b($d, this.h);
};
h.tb = function() {
  return $c.a(this.ja, this.off);
};
h.ub = function() {
  var a = this.ja.length, a = this.o + a < ya(this.T) ? Zd.c ? Zd.c(this.T, this.o + a, 0) : Zd.call(null, this.T, this.o + a, 0) : null;
  return null == a ? C : a;
};
var Zd = function() {
  function a(a, b, c, d, l) {
    return new de(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new de(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new de(a, Rd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, k);
      case 5:
        return a.call(this, d, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.l = b;
  d.n = a;
  return d;
}();
function fe(a, b, c, d, e) {
  this.h = a;
  this.ia = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.q = 0;
  this.i = 32400159;
}
h = fe.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.A = function(a, b) {
  return v.c(this, b, null);
};
h.B = function(a, b, c) {
  return v.c(this, b, c);
};
h.da = function(a, b, c) {
  var d = this, e = d.start + b;
  return ge.n ? ge.n(d.h, dc.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : ge.call(null, d.h, dc.c(d.ia, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.w(null, c);
      case 3:
        return this.fa(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.w(null, a);
};
h.a = function(a, b) {
  return this.fa(null, a, b);
};
h.F = function(a, b) {
  return ge.n ? ge.n(this.h, Va(this.ia, this.end, b), this.start, this.end + 1, null) : ge.call(null, this.h, Va(this.ia, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Rb.a(this, b);
};
h.S = function(a, b, c) {
  return Rb.c(this, b, c);
};
h.G = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : F(v.a(a.ia, d), new Vc(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.J = function() {
  return this.end - this.start;
};
h.ta = function() {
  return v.a(this.ia, this.end - 1);
};
h.ua = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return ge.n ? ge.n(this.h, this.ia, this.start, this.end - 1, null) : ge.call(null, this.h, this.ia, this.start, this.end - 1, null);
};
h.Na = function(a, b, c) {
  return Ka(this, b, c);
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return ge.n ? ge.n(b, this.ia, this.start, this.end, this.j) : ge.call(null, b, this.ia, this.start, this.end, this.j);
};
h.D = function() {
  return this.h;
};
h.w = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Qd(b, this.end - this.start) : v.a(this.ia, this.start + b);
};
h.fa = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : v.c(this.ia, this.start + b, c);
};
h.L = function() {
  return $b($d, this.h);
};
function ge(a, b, c, d, e) {
  for (;;) {
    if (b instanceof fe) {
      c = b.start + c, d = b.start + d, b = b.ia;
    } else {
      var f = H(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new fe(a, b, c, d, e);
    }
  }
}
var ee = function() {
  function a(a, b, c) {
    return ge(null, a, b, c, null);
  }
  function b(a, b) {
    return c.c(a, b, H(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Xd(a) {
  return new Jd({}, va(a.e));
}
function Yd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  sc(a, 0, b, 0, a.length);
  return b;
}
var ie = function he(b, c, d, e) {
  d = b.root.I === d.I ? d : new Jd(b.root.I, va(d.e));
  var f = b.g - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.e[f];
    b = null != g ? he(b, c - 5, g, e) : Nd(b.root.I, c - 5, e);
  }
  d.e[f] = b;
  return d;
};
function Wd(a, b, c, d) {
  this.g = a;
  this.shift = b;
  this.root = c;
  this.X = d;
  this.i = 275;
  this.q = 88;
}
h = Wd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.A = function(a, b) {
  return v.c(this, b, null);
};
h.B = function(a, b, c) {
  return v.c(this, b, c);
};
h.w = function(a, b) {
  if (this.root.I) {
    return Rd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.fa = function(a, b, c) {
  return 0 <= b && b < this.g ? v.a(this, b) : c;
};
h.J = function() {
  if (this.root.I) {
    return this.g;
  }
  throw Error("count after persistent!");
};
h.Zb = function(a, b, c) {
  var d = this;
  if (d.root.I) {
    if (0 <= b && b < d.g) {
      return Md(this) <= b ? d.X[b & 31] = c : (a = function f(a, k) {
        var l = d.root.I === k.I ? k : new Jd(d.root.I, va(k.e));
        if (0 === a) {
          l.e[b & 31] = c;
        } else {
          var m = b >>> a & 31, q = f(a - 5, l.e[m]);
          l.e[m] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.g) {
      return yb(this, c);
    }
    if (s) {
      throw Error([t("Index "), t(b), t(" out of bounds for TransientVector of length"), t(d.g)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.ab = function(a, b, c) {
  return Bb(this, b, c);
};
h.La = function(a, b) {
  if (this.root.I) {
    if (32 > this.g - Md(this)) {
      this.X[this.g & 31] = b;
    } else {
      var c = new Jd(this.root.I, this.X), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.X = d;
      if (this.g >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Nd(this.root.I, this.shift, c);
        this.root = new Jd(this.root.I, d);
        this.shift = e;
      } else {
        this.root = ie(this, this.shift, this.root, c);
      }
    }
    this.g += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ma = function() {
  if (this.root.I) {
    this.root.I = null;
    var a = this.g - Md(this), b = Array(a);
    sc(this.X, 0, b, 0, a);
    return new O(null, this.g, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function je(a, b, c, d) {
  this.h = a;
  this.ga = b;
  this.qa = c;
  this.j = d;
  this.q = 0;
  this.i = 31850572;
}
h = je.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return z(this.ga);
};
h.U = function() {
  var a = D(this.ga);
  return a ? new je(this.h, a, this.qa, null) : null == this.qa ? za(this) : new je(this.h, this.qa, null, null);
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new je(b, this.ga, this.qa, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
function ke(a, b, c, d, e) {
  this.h = a;
  this.count = b;
  this.ga = c;
  this.qa = d;
  this.j = e;
  this.q = 0;
  this.i = 31858766;
}
h = ke.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.F = function(a, b) {
  var c;
  p(this.ga) ? (c = this.qa, c = new ke(this.h, this.count + 1, this.ga, G.a(p(c) ? c : $d, b), null)) : c = new ke(this.h, this.count + 1, G.a(this.ga, b), $d, null);
  return c;
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  var a = y(this.qa), b = this.ga;
  return p(p(b) ? b : a) ? new je(null, this.ga, y(a), null) : null;
};
h.J = function() {
  return this.count;
};
h.ta = function() {
  return z(this.ga);
};
h.ua = function() {
  if (p(this.ga)) {
    var a = D(this.ga);
    return a ? new ke(this.h, this.count - 1, a, this.qa, null) : new ke(this.h, this.count - 1, y(this.qa), $d, null);
  }
  return this;
};
h.O = function() {
  return z(this.ga);
};
h.U = function() {
  return A(y(this));
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new ke(b, this.count, this.ga, this.qa, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return le;
};
var le = new ke(null, 0, null, $d, 0);
function me() {
  this.q = 0;
  this.i = 2097152;
}
me.prototype.u = function() {
  return!1;
};
var ne = new me;
function oe(a, b) {
  return vc(oc(b) ? H(a) === H(b) ? ld(nd, ud.a(function(a) {
    return w.a(K.c(b, z(a), ne), z(D(a)));
  }, a)) : null : null);
}
function pe(a, b) {
  var c = a.e;
  if (b instanceof M) {
    a: {
      for (var d = c.length, e = b.Ca, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof M && e === g.Ca) {
          c = f;
          break a;
        }
        if (s) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (s) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof x) {
        a: {
          d = c.length;
          e = b.Ia;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof x && e === g.Ia) {
              c = f;
              break a;
            }
            if (s) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (s) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (s) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (w.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (s) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function qe(a, b, c) {
  this.e = a;
  this.o = b;
  this.aa = c;
  this.q = 0;
  this.i = 32374990;
}
h = qe.prototype;
h.v = function() {
  return Vb(this);
};
h.Y = function() {
  return this.o < this.e.length - 2 ? new qe(this.e, this.o + 2, this.aa) : null;
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return(this.e.length - this.o) / 2;
};
h.O = function() {
  return new O(null, 2, 5, P, [this.e[this.o], this.e[this.o + 1]], null);
};
h.U = function() {
  return this.o < this.e.length - 2 ? new qe(this.e, this.o + 2, this.aa) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new qe(this.e, this.o, b);
};
h.D = function() {
  return this.aa;
};
h.L = function() {
  return $b(C, this.aa);
};
function n(a, b, c, d) {
  this.h = a;
  this.g = b;
  this.e = c;
  this.j = d;
  this.q = 4;
  this.i = 16123663;
}
h = n.prototype;
h.Sa = function() {
  return new re({}, this.e.length, va(this.e));
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  a = pe(this, b);
  return-1 === a ? c : this.e[a + 1];
};
h.da = function(a, b, c) {
  a = pe(this, b);
  if (-1 === a) {
    if (this.g < se) {
      a = this.e;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new n(this.h, this.g + 1, e, null);
    }
    return bb(Ka(Hd(te, this), b, c), this.h);
  }
  return c === this.e[a + 1] ? this : s ? (b = va(this.e), b[a + 1] = c, new n(this.h, this.g, b, null)) : null;
};
h.Wa = function(a, b) {
  return-1 !== pe(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  return 0 <= this.e.length - 2 ? new qe(this.e, 0, null) : null;
};
h.J = function() {
  return this.g;
};
h.u = function(a, b) {
  return oe(this, b);
};
h.H = function(a, b) {
  return new n(b, this.g, this.e, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return bb(Q, this.h);
};
h.ka = function(a, b) {
  if (0 <= pe(this, b)) {
    var c = this.e.length, d = c - 2;
    if (0 === d) {
      return za(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new n(this.h, this.g - 1, d, null);
      }
      if (w.a(b, this.e[e])) {
        e += 2;
      } else {
        if (s) {
          d[f] = this.e[e], d[f + 1] = this.e[e + 1], f += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var Q = new n(null, 0, [], null), se = 8;
function ue(a) {
  for (var b = a.length, c = 0, d = wb(Q);;) {
    if (c < b) {
      var e = c + 2, d = Ab(d, a[c], a[c + 1]), c = e
    } else {
      return zb(d);
    }
  }
}
function re(a, b, c) {
  this.Ua = a;
  this.wa = b;
  this.e = c;
  this.q = 56;
  this.i = 258;
}
h = re.prototype;
h.ab = function(a, b, c) {
  if (p(this.Ua)) {
    a = pe(this, b);
    if (-1 === a) {
      if (this.wa + 2 <= 2 * se) {
        return this.wa += 2, this.e.push(b), this.e.push(c), this;
      }
      a = ve.a ? ve.a(this.wa, this.e) : ve.call(null, this.wa, this.e);
      return Ab(a, b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.La = function(a, b) {
  if (p(this.Ua)) {
    if (b ? b.i & 2048 || b.jc || (b.i ? 0 : ra(Na, b)) : ra(Na, b)) {
      return Ab(this, Jc.b ? Jc.b(b) : Jc.call(null, b), Kc.b ? Kc.b(b) : Kc.call(null, b));
    }
    for (var c = y(b), d = this;;) {
      var e = z(c);
      if (p(e)) {
        c = D(c), d = Ab(d, Jc.b ? Jc.b(e) : Jc.call(null, e), Kc.b ? Kc.b(e) : Kc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ma = function() {
  if (p(this.Ua)) {
    return this.Ua = !1, new n(null, Ec((this.wa - this.wa % 2) / 2), this.e, null);
  }
  throw Error("persistent! called twice");
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  if (p(this.Ua)) {
    return a = pe(this, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.J = function() {
  if (p(this.Ua)) {
    return Ec((this.wa - this.wa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ve(a, b) {
  for (var c = wb(te), d = 0;;) {
    if (d < a) {
      c = Ab(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function we() {
  this.val = !1;
}
function xe(a, b) {
  return a === b ? !0 : N(a, b) ? !0 : s ? w.a(a, b) : null;
}
var ye = function() {
  function a(a, b, c, g, k) {
    a = va(a);
    a[b] = c;
    a[g] = k;
    return a;
  }
  function b(a, b, c) {
    a = va(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}();
function ze(a, b) {
  var c = Array(a.length - 2);
  sc(a, 0, c, 0, 2 * b);
  sc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var Ae = function() {
  function a(a, b, c, g, k, l) {
    a = a.Va(b);
    a.e[c] = g;
    a.e[k] = l;
    return a;
  }
  function b(a, b, c, g) {
    a = a.Va(b);
    a.e[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.t = a;
  return c;
}();
function Be(a, b, c) {
  this.I = a;
  this.M = b;
  this.e = c;
}
h = Be.prototype;
h.ma = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), k = Fc(this.M & g - 1);
  if (0 === (this.M & g)) {
    var l = Fc(this.M);
    if (2 * l < this.e.length) {
      a = this.Va(a);
      b = a.e;
      f.val = !0;
      a: {
        for (c = 2 * (l - k), f = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[f];
          l -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.M |= g;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Ce.ma(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.M >>> d & 1) && (k[d] = null != this.e[e] ? Ce.ma(a, b + 5, Nb(this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new De(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), sc(this.e, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, sc(this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.val = !0, a = this.Va(a), a.e = b, a.M |= g, a) : null;
  }
  l = this.e[2 * k];
  g = this.e[2 * k + 1];
  return null == l ? (l = g.ma(a, b + 5, c, d, e, f), l === g ? this : Ae.l(this, a, 2 * k + 1, l)) : xe(d, l) ? e === g ? this : Ae.l(this, a, 2 * k + 1, e) : s ? (f.val = !0, Ae.t(this, a, 2 * k, null, 2 * k + 1, Ee.Ta ? Ee.Ta(a, b + 5, l, g, c, d, e) : Ee.call(null, a, b + 5, l, g, c, d, e))) : null;
};
h.bb = function() {
  return Fe.b ? Fe.b(this.e) : Fe.call(null, this.e);
};
h.Va = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = Fc(this.M), c = Array(0 > b ? 4 : 2 * (b + 1));
  sc(this.e, 0, c, 0, 2 * b);
  return new Be(a, this.M, c);
};
h.cb = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.M & d)) {
    return this;
  }
  var e = Fc(this.M & d - 1), f = this.e[2 * e], g = this.e[2 * e + 1];
  return null == f ? (a = g.cb(a + 5, b, c), a === g ? this : null != a ? new Be(null, this.M, ye.c(this.e, 2 * e + 1, a)) : this.M === d ? null : s ? new Be(null, this.M ^ d, ze(this.e, e)) : null) : xe(c, f) ? new Be(null, this.M ^ d, ze(this.e, e)) : s ? this : null;
};
h.la = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Fc(this.M & f - 1);
  if (0 === (this.M & f)) {
    var k = Fc(this.M);
    if (16 <= k) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = Ce.la(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.M >>> c & 1) && (g[c] = null != this.e[d] ? Ce.la(a + 5, Nb(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new De(null, k + 1, g);
    }
    a = Array(2 * (k + 1));
    sc(this.e, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    sc(this.e, 2 * g, a, 2 * (g + 1), 2 * (k - g));
    e.val = !0;
    return new Be(null, this.M | f, a);
  }
  k = this.e[2 * g];
  f = this.e[2 * g + 1];
  return null == k ? (k = f.la(a + 5, b, c, d, e), k === f ? this : new Be(null, this.M, ye.c(this.e, 2 * g + 1, k))) : xe(c, k) ? d === f ? this : new Be(null, this.M, ye.c(this.e, 2 * g + 1, d)) : s ? (e.val = !0, new Be(null, this.M, ye.n(this.e, 2 * g, null, 2 * g + 1, Ee.t ? Ee.t(a + 5, k, f, b, c, d) : Ee.call(null, a + 5, k, f, b, c, d)))) : null;
};
h.Ea = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.M & e)) {
    return d;
  }
  var f = Fc(this.M & e - 1), e = this.e[2 * f], f = this.e[2 * f + 1];
  return null == e ? f.Ea(a + 5, b, c, d) : xe(c, e) ? f : s ? d : null;
};
var Ce = new Be(null, 0, []);
function De(a, b, c) {
  this.I = a;
  this.g = b;
  this.e = c;
}
h = De.prototype;
h.ma = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, k = this.e[g];
  if (null == k) {
    return a = Ae.l(this, a, g, Ce.ma(a, b + 5, c, d, e, f)), a.g += 1, a;
  }
  b = k.ma(a, b + 5, c, d, e, f);
  return b === k ? this : Ae.l(this, a, g, b);
};
h.bb = function() {
  return Ge.b ? Ge.b(this.e) : Ge.call(null, this.e);
};
h.Va = function(a) {
  return a === this.I ? this : new De(a, this.g, va(this.e));
};
h.cb = function(a, b, c) {
  var d = b >>> a & 31, e = this.e[d];
  if (null != e) {
    a = e.cb(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.g) {
          a: {
            e = this.e;
            a = 2 * (this.g - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, g = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, g |= 1 << c), c += 1;
              } else {
                d = new Be(null, g, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new De(null, this.g - 1, ye.c(this.e, d, a));
        }
      } else {
        d = s ? new De(null, this.g, ye.c(this.e, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
h.la = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.e[f];
  if (null == g) {
    return new De(null, this.g + 1, ye.c(this.e, f, Ce.la(a + 5, b, c, d, e)));
  }
  a = g.la(a + 5, b, c, d, e);
  return a === g ? this : new De(null, this.g, ye.c(this.e, f, a));
};
h.Ea = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Ea(a + 5, b, c, d) : d;
};
function He(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (xe(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ie(a, b, c, d) {
  this.I = a;
  this.va = b;
  this.g = c;
  this.e = d;
}
h = Ie.prototype;
h.ma = function(a, b, c, d, e, f) {
  if (c === this.va) {
    b = He(this.e, this.g, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.g) {
        return a = Ae.t(this, a, 2 * this.g, d, 2 * this.g + 1, e), f.val = !0, a.g += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      sc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.val = !0;
      f = this.g + 1;
      a === this.I ? (this.e = b, this.g = f, a = this) : a = new Ie(this.I, this.va, f, b);
      return a;
    }
    return this.e[b + 1] === e ? this : Ae.l(this, a, b + 1, e);
  }
  return(new Be(a, 1 << (this.va >>> b & 31), [null, this, null, null])).ma(a, b, c, d, e, f);
};
h.bb = function() {
  return Fe.b ? Fe.b(this.e) : Fe.call(null, this.e);
};
h.Va = function(a) {
  if (a === this.I) {
    return this;
  }
  var b = Array(2 * (this.g + 1));
  sc(this.e, 0, b, 0, 2 * this.g);
  return new Ie(a, this.va, this.g, b);
};
h.cb = function(a, b, c) {
  a = He(this.e, this.g, c);
  return-1 === a ? this : 1 === this.g ? null : s ? new Ie(null, this.va, this.g - 1, ze(this.e, Ec((a - a % 2) / 2))) : null;
};
h.la = function(a, b, c, d, e) {
  return b === this.va ? (a = He(this.e, this.g, c), -1 === a ? (a = 2 * this.g, b = Array(a + 2), sc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new Ie(null, this.va, this.g + 1, b)) : w.a(this.e[a], d) ? this : new Ie(null, this.va, this.g, ye.c(this.e, a + 1, d))) : (new Be(null, 1 << (this.va >>> a & 31), [null, this])).la(a, b, c, d, e);
};
h.Ea = function(a, b, c, d) {
  a = He(this.e, this.g, c);
  return 0 > a ? d : xe(c, this.e[a]) ? this.e[a + 1] : s ? d : null;
};
var Ee = function() {
  function a(a, b, c, g, k, l, m) {
    var q = Nb(c);
    if (q === k) {
      return new Ie(null, q, 2, [c, g, l, m]);
    }
    var B = new we;
    return Ce.ma(a, b, q, c, g, B).ma(a, b, k, l, m, B);
  }
  function b(a, b, c, g, k, l) {
    var m = Nb(b);
    if (m === g) {
      return new Ie(null, m, 2, [b, c, k, l]);
    }
    var q = new we;
    return Ce.la(a, m, b, c, q).la(a, g, k, l, q);
  }
  var c = null, c = function(c, e, f, g, k, l, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, k, l);
      case 7:
        return a.call(this, c, e, f, g, k, l, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.t = b;
  c.Ta = a;
  return c;
}();
function Je(a, b, c, d, e) {
  this.h = a;
  this.W = b;
  this.o = c;
  this.N = d;
  this.j = e;
  this.q = 0;
  this.i = 32374860;
}
h = Je.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return null == this.N ? new O(null, 2, 5, P, [this.W[this.o], this.W[this.o + 1]], null) : z(this.N);
};
h.U = function() {
  return null == this.N ? Fe.c ? Fe.c(this.W, this.o + 2, null) : Fe.call(null, this.W, this.o + 2, null) : Fe.c ? Fe.c(this.W, this.o, D(this.N)) : Fe.call(null, this.W, this.o, D(this.N));
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Je(b, this.W, this.o, this.N, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
var Fe = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new Je(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (p(g) && (g = g.bb(), p(g))) {
            return new Je(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new Je(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.c(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.c = a;
  return c;
}();
function Ke(a, b, c, d, e) {
  this.h = a;
  this.W = b;
  this.o = c;
  this.N = d;
  this.j = e;
  this.q = 0;
  this.i = 32374860;
}
h = Ke.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return z(this.N);
};
h.U = function() {
  return Ge.l ? Ge.l(null, this.W, this.o, D(this.N)) : Ge.call(null, null, this.W, this.o, D(this.N));
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Ke(b, this.W, this.o, this.N, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
var Ge = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var k = b[c];
          if (p(k) && (k = k.bb(), p(k))) {
            return new Ke(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Ke(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.l = a;
  return c;
}();
function Le(a, b, c, d, e, f) {
  this.h = a;
  this.g = b;
  this.root = c;
  this.ba = d;
  this.ha = e;
  this.j = f;
  this.q = 4;
  this.i = 16123663;
}
h = Le.prototype;
h.Sa = function() {
  return new Me({}, this.root, this.g, this.ba, this.ha);
};
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return null == b ? this.ba ? this.ha : c : null == this.root ? c : s ? this.root.Ea(0, Nb(b), b, c) : null;
};
h.da = function(a, b, c) {
  if (null == b) {
    return this.ba && c === this.ha ? this : new Le(this.h, this.ba ? this.g : this.g + 1, this.root, !0, c, null);
  }
  a = new we;
  b = (null == this.root ? Ce : this.root).la(0, Nb(b), b, c, a);
  return b === this.root ? this : new Le(this.h, a.val ? this.g + 1 : this.g, b, this.ba, this.ha, null);
};
h.Wa = function(a, b) {
  return null == b ? this.ba : null == this.root ? !1 : s ? this.root.Ea(0, Nb(b), b, tc) !== tc : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  if (0 < this.g) {
    var a = null != this.root ? this.root.bb() : null;
    return this.ba ? F(new O(null, 2, 5, P, [null, this.ha], null), a) : a;
  }
  return null;
};
h.J = function() {
  return this.g;
};
h.u = function(a, b) {
  return oe(this, b);
};
h.H = function(a, b) {
  return new Le(b, this.g, this.root, this.ba, this.ha, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return bb(te, this.h);
};
h.ka = function(a, b) {
  if (null == b) {
    return this.ba ? new Le(this.h, this.g - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.cb(0, Nb(b), b);
    return c === this.root ? this : new Le(this.h, this.g - 1, c, this.ba, this.ha, null);
  }
  return null;
};
var te = new Le(null, 0, null, !1, null, 0);
function cc(a, b) {
  for (var c = a.length, d = 0, e = wb(te);;) {
    if (d < c) {
      var f = d + 1, e = e.ab(null, a[d], b[d]), d = f
    } else {
      return zb(e);
    }
  }
}
function Me(a, b, c, d, e) {
  this.I = a;
  this.root = b;
  this.count = c;
  this.ba = d;
  this.ha = e;
  this.q = 56;
  this.i = 258;
}
h = Me.prototype;
h.ab = function(a, b, c) {
  return Ne(this, b, c);
};
h.La = function(a, b) {
  var c;
  a: {
    if (this.I) {
      if (b ? b.i & 2048 || b.jc || (b.i ? 0 : ra(Na, b)) : ra(Na, b)) {
        c = Ne(this, Jc.b ? Jc.b(b) : Jc.call(null, b), Kc.b ? Kc.b(b) : Kc.call(null, b));
        break a;
      }
      c = y(b);
      for (var d = this;;) {
        var e = z(c);
        if (p(e)) {
          c = D(c), d = Ne(d, Jc.b ? Jc.b(e) : Jc.call(null, e), Kc.b ? Kc.b(e) : Kc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Ma = function() {
  var a;
  if (this.I) {
    this.I = null, a = new Le(null, this.count, this.root, this.ba, this.ha, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.A = function(a, b) {
  return null == b ? this.ba ? this.ha : null : null == this.root ? null : this.root.Ea(0, Nb(b), b);
};
h.B = function(a, b, c) {
  return null == b ? this.ba ? this.ha : c : null == this.root ? c : this.root.Ea(0, Nb(b), b, c);
};
h.J = function() {
  if (this.I) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Ne(a, b, c) {
  if (a.I) {
    if (null == b) {
      a.ha !== c && (a.ha = c), a.ba || (a.count += 1, a.ba = !0);
    } else {
      var d = new we;
      b = (null == a.root ? Ce : a.root).ma(a.I, 0, Nb(b), b, c, d);
      b !== a.root && (a.root = b);
      d.val && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Oe(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = G.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Pe(a, b, c, d, e) {
  this.h = a;
  this.stack = b;
  this.ib = c;
  this.g = d;
  this.j = e;
  this.q = 0;
  this.i = 32374862;
}
h = Pe.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.J = function() {
  return 0 > this.g ? H(D(this)) + 1 : this.g;
};
h.O = function() {
  return ic(this.stack);
};
h.U = function() {
  var a = z(this.stack), a = Oe(this.ib ? a.right : a.left, D(this.stack), this.ib);
  return null != a ? new Pe(null, a, this.ib, this.g - 1, null) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Pe(b, this.stack, this.ib, this.g, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(C, this.h);
};
function Qe(a, b, c, d) {
  return c instanceof Re ? c.left instanceof Re ? new Re(c.key, c.val, c.left.sa(), new Se(a, b, c.right, d, null), null) : c.right instanceof Re ? new Re(c.right.key, c.right.val, new Se(c.key, c.val, c.left, c.right.left, null), new Se(a, b, c.right.right, d, null), null) : s ? new Se(a, b, c, d, null) : null : new Se(a, b, c, d, null);
}
function Te(a, b, c, d) {
  return d instanceof Re ? d.right instanceof Re ? new Re(d.key, d.val, new Se(a, b, c, d.left, null), d.right.sa(), null) : d.left instanceof Re ? new Re(d.left.key, d.left.val, new Se(a, b, c, d.left.left, null), new Se(d.key, d.val, d.left.right, d.right, null), null) : s ? new Se(a, b, c, d, null) : null : new Se(a, b, c, d, null);
}
function Ue(a, b, c, d) {
  if (c instanceof Re) {
    return new Re(a, b, c.sa(), d, null);
  }
  if (d instanceof Se) {
    return Te(a, b, c, d.gb());
  }
  if (d instanceof Re && d.left instanceof Se) {
    return new Re(d.left.key, d.left.val, new Se(a, b, c, d.left.left, null), Te(d.key, d.val, d.left.right, d.right.gb()), null);
  }
  if (s) {
    throw Error("red-black tree invariant violation");
  }
  return null;
}
function Se(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.q = 0;
  this.i = 32402207;
}
h = Se.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.A = function(a, b) {
  return v.c(this, b, null);
};
h.B = function(a, b, c) {
  return v.c(this, b, c);
};
h.da = function(a, b, c) {
  return dc.c(new O(null, 2, 5, P, [this.key, this.val], null), b, c);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return new O(null, 3, 5, P, [this.key, this.val, b], null);
};
h.Xa = function() {
  return this.key;
};
h.Ya = function() {
  return this.val;
};
h.Rb = function(a) {
  return a.Tb(this);
};
h.gb = function() {
  return new Re(this.key, this.val, this.left, this.right, null);
};
h.replace = function(a, b, c, d) {
  return new Se(a, b, c, d, null);
};
h.Qb = function(a) {
  return a.Sb(this);
};
h.Sb = function(a) {
  return new Se(a.key, a.val, this, a.right, null);
};
h.Tb = function(a) {
  return new Se(a.key, a.val, a.left, this, null);
};
h.sa = function() {
  return this;
};
h.R = function(a, b) {
  return Rb.a(this, b);
};
h.S = function(a, b, c) {
  return Rb.c(this, b, c);
};
h.G = function() {
  return u(u(C, this.val), this.key);
};
h.J = function() {
  return 2;
};
h.ta = function() {
  return this.val;
};
h.ua = function() {
  return new O(null, 1, 5, P, [this.key], null);
};
h.Na = function(a, b, c) {
  return(new O(null, 2, 5, P, [this.key, this.val], null)).Na(null, b, c);
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return $b(new O(null, 2, 5, P, [this.key, this.val], null), b);
};
h.D = function() {
  return null;
};
h.w = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
h.fa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
h.L = function() {
  return $d;
};
function Re(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.q = 0;
  this.i = 32402207;
}
h = Re.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.A = function(a, b) {
  return v.c(this, b, null);
};
h.B = function(a, b, c) {
  return v.c(this, b, c);
};
h.da = function(a, b, c) {
  return dc.c(new O(null, 2, 5, P, [this.key, this.val], null), b, c);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return new O(null, 3, 5, P, [this.key, this.val, b], null);
};
h.Xa = function() {
  return this.key;
};
h.Ya = function() {
  return this.val;
};
h.Rb = function(a) {
  return new Re(this.key, this.val, this.left, a, null);
};
h.gb = function() {
  throw Error("red-black tree invariant violation");
};
h.replace = function(a, b, c, d) {
  return new Re(a, b, c, d, null);
};
h.Qb = function(a) {
  return new Re(this.key, this.val, a, this.right, null);
};
h.Sb = function(a) {
  return this.left instanceof Re ? new Re(this.key, this.val, this.left.sa(), new Se(a.key, a.val, this.right, a.right, null), null) : this.right instanceof Re ? new Re(this.right.key, this.right.val, new Se(this.key, this.val, this.left, this.right.left, null), new Se(a.key, a.val, this.right.right, a.right, null), null) : s ? new Se(a.key, a.val, this, a.right, null) : null;
};
h.Tb = function(a) {
  return this.right instanceof Re ? new Re(this.key, this.val, new Se(a.key, a.val, a.left, this.left, null), this.right.sa(), null) : this.left instanceof Re ? new Re(this.left.key, this.left.val, new Se(a.key, a.val, a.left, this.left.left, null), new Se(this.key, this.val, this.left.right, this.right, null), null) : s ? new Se(a.key, a.val, a.left, this, null) : null;
};
h.sa = function() {
  return new Se(this.key, this.val, this.left, this.right, null);
};
h.R = function(a, b) {
  return Rb.a(this, b);
};
h.S = function(a, b, c) {
  return Rb.c(this, b, c);
};
h.G = function() {
  return u(u(C, this.val), this.key);
};
h.J = function() {
  return 2;
};
h.ta = function() {
  return this.val;
};
h.ua = function() {
  return new O(null, 1, 5, P, [this.key], null);
};
h.Na = function(a, b, c) {
  return(new O(null, 2, 5, P, [this.key, this.val], null)).Na(null, b, c);
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return $b(new O(null, 2, 5, P, [this.key, this.val], null), b);
};
h.D = function() {
  return null;
};
h.w = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
h.fa = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
h.L = function() {
  return $d;
};
var We = function Ve(b, c, d, e, f) {
  if (null == c) {
    return new Re(d, e, null, null, null);
  }
  var g = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === g ? (f[0] = c, null) : 0 > g ? (b = Ve(b, c.left, d, e, f), null != b ? c.Qb(b) : null) : s ? (b = Ve(b, c.right, d, e, f), null != b ? c.Rb(b) : null) : null;
}, Ye = function Xe(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof Re) {
    if (c instanceof Re) {
      var d = Xe(b.right, c.left);
      return d instanceof Re ? new Re(d.key, d.val, new Re(b.key, b.val, b.left, d.left, null), new Re(c.key, c.val, d.right, c.right, null), null) : new Re(b.key, b.val, b.left, new Re(c.key, c.val, d, c.right, null), null);
    }
    return new Re(b.key, b.val, b.left, Xe(b.right, c), null);
  }
  return c instanceof Re ? new Re(c.key, c.val, Xe(b, c.left), c.right, null) : s ? (d = Xe(b.right, c.left), d instanceof Re ? new Re(d.key, d.val, new Se(b.key, b.val, b.left, d.left, null), new Se(c.key, c.val, d.right, c.right, null), null) : Ue(b.key, b.val, b.left, new Se(c.key, c.val, d, c.right, null))) : null;
}, $e = function Ze(b, c, d, e) {
  if (null != c) {
    var f = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if (0 === f) {
      return e[0] = c, Ye(c.left, c.right);
    }
    if (0 > f) {
      return b = Ze(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Se ? Ue(c.key, c.val, b, c.right) : new Re(c.key, c.val, b, c.right, null) : null;
    }
    if (s) {
      b = Ze(b, c.right, d, e);
      if (null != b || null != e[0]) {
        if (c.right instanceof Se) {
          if (e = c.key, d = c.val, c = c.left, b instanceof Re) {
            c = new Re(e, d, c, b.sa(), null);
          } else {
            if (c instanceof Se) {
              c = Qe(e, d, c.gb(), b);
            } else {
              if (c instanceof Re && c.right instanceof Se) {
                c = new Re(c.right.key, c.right.val, Qe(c.key, c.val, c.left.gb(), c.right.left), new Se(e, d, c.right.right, b, null), null);
              } else {
                if (s) {
                  throw Error("red-black tree invariant violation");
                }
                c = null;
              }
            }
          }
        } else {
          c = new Re(c.key, c.val, c.left, b, null);
        }
      } else {
        c = null;
      }
      return c;
    }
  }
  return null;
}, bf = function af(b, c, d, e) {
  var f = c.key, g = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === g ? c.replace(f, e, c.left, c.right) : 0 > g ? c.replace(f, c.val, af(b, c.left, d, e), c.right) : s ? c.replace(f, c.val, c.left, af(b, c.right, d, e)) : null;
};
function cf(a, b, c, d, e) {
  this.ea = a;
  this.za = b;
  this.g = c;
  this.h = d;
  this.j = e;
  this.q = 0;
  this.i = 418776847;
}
h = cf.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  a = df(this, b);
  return null != a ? a.val : c;
};
h.da = function(a, b, c) {
  a = [null];
  var d = We(this.ea, this.za, b, c, a);
  return null == d ? (a = I.a(a, 0), w.a(c, a.val) ? this : new cf(this.ea, bf(this.ea, this.za, b, c), this.g, this.h, null)) : new cf(this.ea, d.sa(), this.g + 1, this.h, null);
};
h.Wa = function(a, b) {
  return null != df(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.Za = function() {
  return 0 < this.g ? new Pe(null, Oe(this.za, null, !1), !1, this.g, null) : null;
};
h.toString = function() {
  return Ib(this);
};
function df(a, b) {
  for (var c = a.za;;) {
    if (null != c) {
      var d = a.ea.a ? a.ea.a(b, c.key) : a.ea.call(null, b, c.key);
      if (0 === d) {
        return c;
      }
      if (0 > d) {
        c = c.left;
      } else {
        if (s) {
          c = c.right;
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }
}
h.Jb = function(a, b) {
  return 0 < this.g ? new Pe(null, Oe(this.za, null, b), b, this.g, null) : null;
};
h.Kb = function(a, b, c) {
  if (0 < this.g) {
    a = null;
    for (var d = this.za;;) {
      if (null != d) {
        var e = this.ea.a ? this.ea.a(b, d.key) : this.ea.call(null, b, d.key);
        if (0 === e) {
          return new Pe(null, G.a(a, d), c, -1, null);
        }
        if (p(c)) {
          0 > e ? (a = G.a(a, d), d = d.left) : d = d.right;
        } else {
          if (s) {
            0 < e ? (a = G.a(a, d), d = d.right) : d = d.left;
          } else {
            return null;
          }
        }
      } else {
        return null == a ? null : new Pe(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
h.Ib = function(a, b) {
  return Jc.b ? Jc.b(b) : Jc.call(null, b);
};
h.Hb = function() {
  return this.ea;
};
h.G = function() {
  return 0 < this.g ? new Pe(null, Oe(this.za, null, !0), !0, this.g, null) : null;
};
h.J = function() {
  return this.g;
};
h.u = function(a, b) {
  return oe(this, b);
};
h.H = function(a, b) {
  return new cf(this.ea, this.za, this.g, b, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(ef, this.h);
};
h.ka = function(a, b) {
  var c = [null], d = $e(this.ea, this.za, b, c);
  return null == d ? null == I.a(c, 0) ? this : new cf(this.ea, null, 0, this.h, null) : new cf(this.ea, d.sa(), this.g - 1, this.h, null);
};
var ef = new cf(Kb, null, 0, null, 0), ff = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = y(a), e = wb(te);;) {
      if (b) {
        a = D(D(b));
        var f = z(b), b = z(D(b)), e = Ab(e, f, b), b = a;
      } else {
        return zb(e);
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), gf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = y(a);
    for (var b = ef;;) {
      if (a) {
        var e = D(D(a)), b = dc.c(b, z(a), z(D(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function hf(a, b) {
  this.Z = a;
  this.aa = b;
  this.q = 0;
  this.i = 32374988;
}
h = hf.prototype;
h.v = function() {
  return Vb(this);
};
h.Y = function() {
  var a = this.Z, a = (a ? a.i & 128 || a.nb || (a.i ? 0 : ra(Fa, a)) : ra(Fa, a)) ? this.Z.Y(null) : D(this.Z);
  return null == a ? null : new hf(a, this.aa);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return this.Z.O(null).Xa(null);
};
h.U = function() {
  var a = this.Z, a = (a ? a.i & 128 || a.nb || (a.i ? 0 : ra(Fa, a)) : ra(Fa, a)) ? this.Z.Y(null) : D(this.Z);
  return null != a ? new hf(a, this.aa) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new hf(this.Z, b);
};
h.D = function() {
  return this.aa;
};
h.L = function() {
  return $b(C, this.aa);
};
function jf(a) {
  return(a = y(a)) ? new hf(a, null) : null;
}
function Jc(a) {
  return Oa(a);
}
function kf(a, b) {
  this.Z = a;
  this.aa = b;
  this.q = 0;
  this.i = 32374988;
}
h = kf.prototype;
h.v = function() {
  return Vb(this);
};
h.Y = function() {
  var a = this.Z, a = (a ? a.i & 128 || a.nb || (a.i ? 0 : ra(Fa, a)) : ra(Fa, a)) ? this.Z.Y(null) : D(this.Z);
  return null == a ? null : new kf(a, this.aa);
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Zb.a(b, this);
};
h.S = function(a, b, c) {
  return Zb.c(b, c, this);
};
h.G = function() {
  return this;
};
h.O = function() {
  return this.Z.O(null).Ya(null);
};
h.U = function() {
  var a = this.Z, a = (a ? a.i & 128 || a.nb || (a.i ? 0 : ra(Fa, a)) : ra(Fa, a)) ? this.Z.Y(null) : D(this.Z);
  return null != a ? new kf(a, this.aa) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new kf(this.Z, b);
};
h.D = function() {
  return this.aa;
};
h.L = function() {
  return $b(C, this.aa);
};
function lf(a) {
  return(a = y(a)) ? new kf(a, null) : null;
}
function Kc(a) {
  return Pa(a);
}
var mf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return p(md(nd, a)) ? yc.a(function(a, b) {
      return G.a(p(a) ? a : Q, b);
    }, a) : null;
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function nf(a, b) {
  for (var c = Q, d = y(b);;) {
    if (d) {
      var e = z(d), f = K.c(a, e, of), c = jd.a(f, of) ? dc.c(c, e, f) : c, d = D(d)
    } else {
      return c;
    }
  }
}
function pf(a, b, c) {
  this.h = a;
  this.Oa = b;
  this.j = c;
  this.q = 4;
  this.i = 15077647;
}
h = pf.prototype;
h.Sa = function() {
  return new qf(wb(this.Oa));
};
h.v = function() {
  var a = this.j;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = y(this);;) {
      if (b) {
        var c = z(b), a = (a + Nb(c)) % 4503599627370496, b = D(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.j = a;
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return Ja(this.Oa, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.F = function(a, b) {
  return new pf(this.h, dc.c(this.Oa, b, null), null);
};
h.toString = function() {
  return Ib(this);
};
h.G = function() {
  return jf(this.Oa);
};
h.Yb = function(a, b) {
  return new pf(this.h, Ma(this.Oa, b), null);
};
h.J = function() {
  return ya(this.Oa);
};
h.u = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.i & 4096 || b.Ec ? !0 : b.i ? !1 : ra(Qa, b) : ra(Qa, b)) && H(c) === H(b) && ld(function(a) {
    return wc(c, a);
  }, b);
};
h.H = function(a, b) {
  return new pf(b, this.Oa, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(rf, this.h);
};
var rf = new pf(null, Q, 0);
function sf(a) {
  var b = a.length;
  if (b <= se) {
    for (var c = 0, d = wb(Q);;) {
      if (c < b) {
        var e = c + 1, d = Ab(d, a[c], null), c = e
      } else {
        return new pf(null, zb(d), null);
      }
    }
  } else {
    for (c = 0, d = wb(rf);;) {
      if (c < b) {
        e = c + 1, d = yb(d, a[c]), c = e;
      } else {
        return zb(d);
      }
    }
  }
}
function qf(a) {
  this.ya = a;
  this.i = 259;
  this.q = 136;
}
h = qf.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.c(this.ya, c, tc) === tc ? null : c;
      case 3:
        return Ia.c(this.ya, c, tc) === tc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return Ia.c(this.ya, a, tc) === tc ? null : a;
};
h.a = function(a, b) {
  return Ia.c(this.ya, a, tc) === tc ? b : a;
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return Ia.c(this.ya, b, tc) === tc ? c : b;
};
h.J = function() {
  return H(this.ya);
};
h.La = function(a, b) {
  this.ya = Ab(this.ya, b, null);
  return this;
};
h.Ma = function() {
  return new pf(null, zb(this.ya), null);
};
function tf(a) {
  a = y(a);
  if (null == a) {
    return rf;
  }
  if (a instanceof Pb && 0 === a.o) {
    a = a.e;
    a: {
      for (var b = 0, c = wb(rf);;) {
        if (b < a.length) {
          var d = b + 1, c = c.La(null, a[b]), b = d
        } else {
          a = c;
          break a;
        }
      }
      a = void 0;
    }
    return a.Ma(null);
  }
  if (s) {
    for (d = wb(rf);;) {
      if (null != a) {
        b = a.Y(null), d = d.La(null, a.O(null)), a = b;
      } else {
        return d.Ma(null);
      }
    }
  } else {
    return null;
  }
}
function Tc(a) {
  if (a && (a.q & 4096 || a.lc)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([t("Doesn't support name: "), t(a)].join(""));
}
function uf(a) {
  var b = zd.b(0), c = wb(Q);
  a = y(a);
  for (b = y(b);;) {
    if (a && b) {
      var d = z(a), e = z(b), c = Ab(c, d, e);
      a = D(a);
      b = D(b);
    } else {
      return zb(c);
    }
  }
}
var vf = function() {
  function a(a, b, c) {
    return(a.b ? a.b(b) : a.call(null, b)) > (a.b ? a.b(c) : a.call(null, c)) ? b : c;
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var m = null;
      3 < arguments.length && (m = E(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, m);
    }
    function c(a, d, e, l) {
      return yc.c(function(c, d) {
        return b.c(a, c, d);
      }, b.c(a, d, e), l);
    }
    a.k = 3;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var l = z(a);
      a = A(a);
      return c(b, d, l, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 2:
        return e;
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.d(b, e, f, E(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.f = c.f;
  b.a = function(a, b) {
    return b;
  };
  b.c = a;
  b.d = c.d;
  return b;
}(), xf = function wf(b, c) {
  return new Vc(null, function() {
    var d = y(c);
    return d ? p(b.b ? b.b(z(d)) : b.call(null, z(d))) ? F(z(d), wf(b, A(d))) : null : null;
  }, null, null);
};
function yf(a, b, c) {
  return function(d) {
    var e = ob(a);
    return b.a ? b.a(e.a ? e.a(nb(a, d), c) : e.call(null, nb(a, d), c), 0) : b.call(null, e.a ? e.a(nb(a, d), c) : e.call(null, nb(a, d), c), 0);
  };
}
var zf = function() {
  function a(a, b, c, g, k) {
    var l = mb(a, c, !0);
    if (p(l)) {
      var m = I.c(l, 0, null);
      return xf(yf(a, g, k), p(yf(a, b, c).call(null, m)) ? l : D(l));
    }
    return null;
  }
  function b(a, b, c) {
    var g = yf(a, b, c);
    return p(sf([Bc, Cc]).call(null, b)) ? (a = mb(a, c, !0), p(a) ? (b = I.c(a, 0, null), p(g.b ? g.b(b) : g.call(null, b)) ? a : D(a)) : null) : xf(g, lb(a, !0));
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}(), Af = function() {
  function a(a, b, c, g, k) {
    var l = mb(a, k, !1);
    if (p(l)) {
      var m = I.c(l, 0, null);
      return xf(yf(a, b, c), p(yf(a, g, k).call(null, m)) ? l : D(l));
    }
    return null;
  }
  function b(a, b, c) {
    var g = yf(a, b, c);
    return p(sf([zc, Ac]).call(null, b)) ? (a = mb(a, c, !1), p(a) ? (b = I.c(a, 0, null), p(g.b ? g.b(b) : g.call(null, b)) ? a : D(a)) : null) : xf(g, lb(a, !1));
  }
  var c = null, c = function(c, e, f, g, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.n = a;
  return c;
}();
function Bf(a, b, c, d, e) {
  this.h = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.q = 0;
  this.i = 32375006;
}
h = Bf.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Vb(this);
};
h.Y = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new Bf(this.h, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new Bf(this.h, this.start + this.step, this.end, this.step, null) : null;
};
h.F = function(a, b) {
  return F(b, this);
};
h.toString = function() {
  return Ib(this);
};
h.R = function(a, b) {
  return Rb.a(this, b);
};
h.S = function(a, b, c) {
  return Rb.c(this, b, c);
};
h.G = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
h.J = function() {
  return r(hb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
h.O = function() {
  return null == hb(this) ? null : this.start;
};
h.U = function() {
  return null != hb(this) ? new Bf(this.h, this.start + this.step, this.end, this.step, null) : C;
};
h.u = function(a, b) {
  return Xb(this, b);
};
h.H = function(a, b) {
  return new Bf(b, this.start, this.end, this.step, this.j);
};
h.D = function() {
  return this.h;
};
h.w = function(a, b) {
  if (b < ya(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
h.fa = function(a, b, c) {
  return b < ya(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
h.L = function() {
  return $b(C, this.h);
};
var Cf = function() {
  function a(a, b, c) {
    return new Bf(null, a, b, c, null);
  }
  function b(a, b) {
    return e.c(a, b, 1);
  }
  function c(a) {
    return e.c(0, a, 1);
  }
  function d() {
    return e.c(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, g, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, g);
      case 3:
        return a.call(this, e, g, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.r = d;
  e.b = c;
  e.a = b;
  e.c = a;
  return e;
}();
function Df(a) {
  var b = Ef.exec(a);
  return w.a(z(b), a) ? 1 === H(b) ? z(b) : be(b) : null;
}
function Ff(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === H(c) ? z(c) : be(c);
}
function Gf(a) {
  a = Ff(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  I.c(a, 0, null);
  I.c(a, 1, null);
  I.c(a, 2, null);
}
function Hf(a, b, c, d, e, f, g) {
  var k = ha;
  try {
    ha = null == ha ? null : ha - 1;
    if (null != ha && 0 > ha) {
      return qb(a, "#");
    }
    qb(a, c);
    y(g) && (b.c ? b.c(z(g), a, f) : b.call(null, z(g), a, f));
    for (var l = D(g), m = oa.b(f);l && (null == m || 0 !== m);) {
      qb(a, d);
      b.c ? b.c(z(l), a, f) : b.call(null, z(l), a, f);
      var q = D(l);
      c = m - 1;
      l = q;
      m = c;
    }
    p(oa.b(f)) && (qb(a, d), b.c ? b.c("...", a, f) : b.call(null, "...", a, f));
    return qb(a, e);
  } finally {
    ha = k;
  }
}
var If = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = y(b), f = null, g = 0, k = 0;;) {
      if (k < g) {
        var l = f.w(null, k);
        qb(a, l);
        k += 1;
      } else {
        if (e = y(e)) {
          f = e, qc(f) ? (e = Db(f), g = Eb(f), f = e, l = H(e), e = g, g = l) : (l = z(f), qb(a, l), e = D(f), f = null, g = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.f = function(a) {
    var d = z(a);
    a = A(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}(), Jf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Kf(a) {
  return[t('"'), t(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Jf[a];
  })), t('"')].join("");
}
var Nf = function Lf(b, c, d) {
  if (null == b) {
    return qb(c, "nil");
  }
  if (void 0 === b) {
    return qb(c, "#\x3cundefined\x3e");
  }
  if (s) {
    p(function() {
      var c = K.a(d, ma);
      return p(c) ? (c = b ? b.i & 131072 || b.kc ? !0 : b.i ? !1 : ra(Xa, b) : ra(Xa, b)) ? hc(b) : c : c;
    }()) && (qb(c, "^"), Lf(hc(b), c, d), qb(c, " "));
    if (null == b) {
      return qb(c, "nil");
    }
    if (b.cc) {
      return b.nc(c);
    }
    if (b && (b.i & 2147483648 || b.K)) {
      return b.s(null, c, d);
    }
    if (sa(b) === Boolean || "number" === typeof b) {
      return qb(c, "" + t(b));
    }
    if (null != b && b.constructor === Object) {
      return qb(c, "#js "), Mf.l ? Mf.l(ud.a(function(c) {
        return new O(null, 2, 5, P, [Uc.b(c), b[c]], null);
      }, rc(b)), Lf, c, d) : Mf.call(null, ud.a(function(c) {
        return new O(null, 2, 5, P, [Uc.b(c), b[c]], null);
      }, rc(b)), Lf, c, d);
    }
    if (b instanceof Array) {
      return Hf(c, Lf, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return p(la.b(d)) ? qb(c, Kf(b)) : qb(c, b);
    }
    if (fc(b)) {
      return If.d(c, E(["#\x3c", "" + t(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + t(b);;) {
          if (H(d) < c) {
            d = [t("0"), t(d)].join("");
          } else {
            return d;
          }
        }
      };
      return If.d(c, E(['#inst "', "" + t(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? If.d(c, E(['#"', b.source, '"'], 0)) : (b ? b.i & 2147483648 || b.K || (b.i ? 0 : ra(rb, b)) : ra(rb, b)) ? tb(b, c, d) : s ? If.d(c, E(["#\x3c", "" + t(b), "\x3e"], 0)) : null;
  }
  return null;
}, Of = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (mc(a)) {
      b = "";
    } else {
      b = t;
      var e = ia(), f = new fa;
      a: {
        var g = new Gb(f);
        Nf(z(a), g, e);
        a = y(D(a));
        for (var k = null, l = 0, m = 0;;) {
          if (m < l) {
            var q = k.w(null, m);
            qb(g, " ");
            Nf(q, g, e);
            m += 1;
          } else {
            if (a = y(a)) {
              k = a, qc(k) ? (a = Db(k), l = Eb(k), k = a, q = H(a), a = l, l = q) : (q = z(k), qb(g, " "), Nf(q, g, e), a = D(k), k = null, l = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function Mf(a, b, c, d) {
  return Hf(c, function(a, c, d) {
    b.c ? b.c(Oa(a), c, d) : b.call(null, Oa(a), c, d);
    qb(c, " ");
    return b.c ? b.c(Pa(a), c, d) : b.call(null, Pa(a), c, d);
  }, "{", ", ", "}", d, y(a));
}
hf.prototype.K = !0;
hf.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Pb.prototype.K = !0;
Pb.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
fe.prototype.K = !0;
fe.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "[", " ", "]", c, this);
};
ad.prototype.K = !0;
ad.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
cf.prototype.K = !0;
cf.prototype.s = function(a, b, c) {
  return Mf(this, Nf, b, c);
};
n.prototype.K = !0;
n.prototype.s = function(a, b, c) {
  return Mf(this, Nf, b, c);
};
ke.prototype.K = !0;
ke.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "#queue [", " ", "]", c, y(this));
};
Vc.prototype.K = !0;
Vc.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Wb.prototype.K = !0;
Wb.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Je.prototype.K = !0;
Je.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Re.prototype.K = !0;
Re.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "[", " ", "]", c, this);
};
de.prototype.K = !0;
de.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Le.prototype.K = !0;
Le.prototype.s = function(a, b, c) {
  return Mf(this, Nf, b, c);
};
pf.prototype.K = !0;
pf.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "#{", " ", "}", c, this);
};
O.prototype.K = !0;
O.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "[", " ", "]", c, this);
};
Lc.prototype.K = !0;
Lc.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
qe.prototype.K = !0;
qe.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Mc.prototype.K = !0;
Mc.prototype.s = function(a, b) {
  return qb(b, "()");
};
Se.prototype.K = !0;
Se.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "[", " ", "]", c, this);
};
Qc.prototype.K = !0;
Qc.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Bf.prototype.K = !0;
Bf.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Ke.prototype.K = !0;
Ke.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
kf.prototype.K = !0;
kf.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
Pe.prototype.K = !0;
Pe.prototype.s = function(a, b, c) {
  return Hf(b, Nf, "(", " ", ")", c, this);
};
O.prototype.kb = !0;
O.prototype.lb = function(a, b) {
  return xc.a(this, b);
};
fe.prototype.kb = !0;
fe.prototype.lb = function(a, b) {
  return xc.a(this, b);
};
M.prototype.kb = !0;
M.prototype.lb = function(a, b) {
  return Jb(this, b);
};
x.prototype.kb = !0;
x.prototype.lb = function(a, b) {
  return Jb(this, b);
};
function Pf(a, b, c, d) {
  this.state = a;
  this.h = b;
  this.uc = c;
  this.ra = d;
  this.i = 2153938944;
  this.q = 2;
}
h = Pf.prototype;
h.v = function() {
  return this[ba] || (this[ba] = ++ca);
};
h.Mb = function(a, b, c) {
  a = y(this.ra);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
      g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = y(a)) {
        qc(a) ? (d = Db(a), a = Eb(a), k = d, e = H(d), d = k) : (d = z(a), k = I.c(d, 0, null), g = I.c(d, 1, null), g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c), a = D(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.Lb = function(a, b, c) {
  return this.ra = dc.c(this.ra, b, c);
};
h.s = function(a, b, c) {
  qb(b, "#\x3cAtom: ");
  Nf(this.state, b, c);
  return qb(b, "\x3e");
};
h.D = function() {
  return this.h;
};
h.mb = function() {
  return this.state;
};
h.u = function(a, b) {
  return this === b;
};
var R = function() {
  function a(a) {
    return new Pf(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = E(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = uc(c) ? L.a(ff, c) : c, e = K.a(d, Qf), d = K.a(d, ma);
      return new Pf(a, d, e, null);
    }
    a.k = 1;
    a.f = function(a) {
      var c = z(a);
      a = A(a);
      return b(c, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, E(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.f = c.f;
  b.b = a;
  b.d = c.d;
  return b;
}();
function Rf(a, b) {
  var c = a.uc;
  if (null != c && !p(c.b ? c.b(b) : c.call(null, b))) {
    throw Error([t("Assert failed: "), t("Validator rejected reference state"), t("\n"), t(Of.d(E([Pc(new x(null, "validate", "validate", 1233162959, null), new x(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.ra && ub(a, c, b);
  return b;
}
var Sf = function() {
  function a(a, b, c, d, e) {
    return Rf(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return Rf(a, b.c ? b.c(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return Rf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return Rf(a, b.b ? b.b(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, g, pa) {
      var ja = null;
      5 < arguments.length && (ja = E(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, g, ja);
    }
    function b(a, c, d, e, f, g) {
      return Rf(a, L.d(c, a.state, d, e, f, E([g], 0)));
    }
    a.k = 5;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = D(a);
      var e = z(a);
      a = D(a);
      var f = z(a);
      a = D(a);
      var g = z(a);
      a = A(a);
      return b(c, d, e, f, g, a);
    };
    a.d = b;
    return a;
  }(), e = function(e, k, l, m, q, B) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, m);
      case 5:
        return a.call(this, e, k, l, m, q);
      default:
        return f.d(e, k, l, m, q, E(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.f = f.f;
  e.a = d;
  e.c = c;
  e.l = b;
  e.n = a;
  e.d = f.d;
  return e;
}();
function Tf() {
  var a = Uf();
  return Wa(a);
}
function Vf(a, b, c) {
  vb(a, b, c);
}
var Wf = null, Xf = function() {
  function a(a) {
    null == Wf && (Wf = R.b(0));
    return Ob.b([t(a), t(Sf.a(Wf, Qb))].join(""));
  }
  function b() {
    return c.b("G__");
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.r = b;
  c.b = a;
  return c;
}();
function Yf(a, b) {
  this.state = a;
  this.Nb = b;
  this.q = 1;
  this.i = 32768;
}
Yf.prototype.mb = function() {
  var a = this;
  return Zf.b(Sf.a(a.state, function(b) {
    b = uc(b) ? L.a(ff, b) : b;
    var c = K.a(b, $f);
    return p(c) ? b : new n(null, 2, [$f, !0, Zf, a.Nb.r ? a.Nb.r() : a.Nb.call(null)], null);
  }));
};
var ag = {};
function bg(a) {
  if (a ? a.hc : a) {
    return a.hc(a);
  }
  var b;
  b = bg[aa(null == a ? null : a)];
  if (!b && (b = bg._, !b)) {
    throw ta("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function cg(a) {
  return(a ? p(p(null) ? null : a.gc) || (a.bc ? 0 : ra(ag, a)) : ra(ag, a)) ? bg(a) : "string" === typeof a || "number" === typeof a || a instanceof M || a instanceof x ? dg.b ? dg.b(a) : dg.call(null, a) : Of.d(E([a], 0));
}
var dg = function eg(b) {
  if (null == b) {
    return null;
  }
  if (b ? p(p(null) ? null : b.gc) || (b.bc ? 0 : ra(ag, b)) : ra(ag, b)) {
    return bg(b);
  }
  if (b instanceof M) {
    return Tc(b);
  }
  if (b instanceof x) {
    return "" + t(b);
  }
  if (oc(b)) {
    var c = {};
    b = y(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
        c[cg(k)] = eg(g);
        f += 1;
      } else {
        if (b = y(b)) {
          qc(b) ? (e = Db(b), b = Eb(b), d = e, e = H(e)) : (e = z(b), d = I.c(e, 0, null), e = I.c(e, 1, null), c[cg(d)] = eg(e), b = D(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.i & 8 || b.xc || (b.i ? 0 : ra(Aa, b)) : ra(Aa, b)) {
    c = [];
    b = y(ud.a(eg, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.w(null, f), c.push(k), f += 1;
      } else {
        if (b = y(b)) {
          d = b, qc(d) ? (b = Db(d), f = Eb(d), d = b, e = H(b), b = f) : (b = z(d), c.push(b), b = D(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return s ? b : null;
}, fg = null;
function Uf() {
  null == fg && (fg = R.b(new n(null, 3, [gg, Q, hg, Q, ig, Q], null)));
  return fg;
}
var jg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return L.l(Sf, Uf(), a, b);
  }
  a.k = 1;
  a.f = function(a) {
    var d = z(a);
    a = A(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}(), kg = function() {
  function a(a, b, f) {
    var g = w.a(b, f);
    if (!g && !(g = wc(ig.b(a).call(null, b), f)) && (g = pc(f)) && (g = pc(b))) {
      if (g = H(f) === H(b)) {
        for (var g = !0, k = 0;;) {
          if (g && k !== H(f)) {
            g = c.c(a, b.b ? b.b(k) : b.call(null, k), f.b ? f.b(k) : f.call(null, k)), k += 1;
          } else {
            return g;
          }
        }
      } else {
        return g;
      }
    } else {
      return g;
    }
  }
  function b(a, b) {
    return c.c(Tf(), a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), lg = function() {
  function a(a, b) {
    return kd(K.a(gg.b(a), b));
  }
  function b(a) {
    return c.a(Tf(), a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), mg = function() {
  function a(a, b, c) {
    if (!jd.a(b, c)) {
      throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "not\x3d", "not\x3d", -1637144189, null), new x(null, "tag", "tag", -1640416941, null), new x(null, "parent", "parent", 1659011683, null))], 0)))].join(""));
    }
    var g = gg.b(a), k = hg.b(a), l = ig.b(a), m = function(a, b, c) {
      return function(d, e, f, g, k) {
        return yc.c(function() {
          return function(a, b) {
            return dc.c(a, b, yc.c(G, K.c(k, b, rf), F(g, k.b ? k.b(g) : k.call(null, g))));
          };
        }(a, b, c), d, F(e, f.b ? f.b(e) : f.call(null, e)));
      };
    }(g, k, l);
    if (wc(g.b ? g.b(b) : g.call(null, b), c)) {
      b = null;
    } else {
      if (wc(l.b ? l.b(b) : l.call(null, b), c)) {
        throw Error([t(b), t("already has"), t(c), t("as ancestor")].join(""));
      }
      if (wc(l.b ? l.b(c) : l.call(null, c), b)) {
        throw Error([t("Cyclic derivation:"), t(c), t("has"), t(b), t("as ancestor")].join(""));
      }
      b = new n(null, 3, [gg, dc.c(gg.b(a), b, G.a(K.c(g, b, rf), c)), ig, m(ig.b(a), b, k, c, l), hg, m(hg.b(a), c, l, b, k)], null);
    }
    return p(b) ? b : a;
  }
  function b(a, b) {
    if (!p(Sc(b))) {
      throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "namespace", "namespace", -388313324, null), new x(null, "parent", "parent", 1659011683, null))], 0)))].join(""));
    }
    jg.d(c, E([a, b], 0));
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function ng(a, b, c, d) {
  Sf.a(a, function() {
    return Wa(b);
  });
  Sf.a(c, function() {
    return Wa(d);
  });
}
var pg = function og(b, c, d) {
  var e = Wa(d).call(null, b), e = p(p(e) ? e.b ? e.b(c) : e.call(null, c) : e) ? !0 : null;
  if (p(e)) {
    return e;
  }
  e = function() {
    for (var e = lg.b(c);;) {
      if (0 < H(e)) {
        og(b, z(e), d), e = A(e);
      } else {
        return null;
      }
    }
  }();
  if (p(e)) {
    return e;
  }
  e = function() {
    for (var e = lg.b(b);;) {
      if (0 < H(e)) {
        og(z(e), c, d), e = A(e);
      } else {
        return null;
      }
    }
  }();
  return p(e) ? e : !1;
};
function qg(a, b, c) {
  c = pg(a, b, c);
  return p(c) ? c : kg.a(a, b);
}
var sg = function rg(b, c, d, e, f, g, k) {
  var l = yc.c(function(e, g) {
    var k = I.c(g, 0, null);
    I.c(g, 1, null);
    if (kg.c(Wa(d), c, k)) {
      var l;
      l = (l = null == e) ? l : qg(k, z(e), f);
      l = p(l) ? g : e;
      if (!p(qg(z(l), k, f))) {
        throw Error([t("Multiple methods in multimethod '"), t(b), t("' match dispatch value: "), t(c), t(" -\x3e "), t(k), t(" and "), t(z(l)), t(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, Wa(e));
  if (p(l)) {
    if (w.a(Wa(k), Wa(d))) {
      return Sf.l(g, dc, c, z(D(l))), z(D(l));
    }
    ng(g, e, k, d);
    return rg(b, c, d, e, f, g, k);
  }
  return null;
};
function tg(a, b) {
  if (a ? a.Xb : a) {
    return a.Xb(0, b);
  }
  var c;
  c = tg[aa(null == a ? null : a)];
  if (!c && (c = tg._, !c)) {
    throw ta("IMultiFn.-get-method", a);
  }
  return c.call(null, a, b);
}
function ug(a, b) {
  if (a ? a.Wb : a) {
    return a.Wb(0, b);
  }
  var c;
  c = ug[aa(null == a ? null : a)];
  if (!c && (c = ug._, !c)) {
    throw ta("IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b);
}
function vg(a, b, c, d, e, f, g, k) {
  this.name = a;
  this.pc = b;
  this.oc = c;
  this.ob = d;
  this.eb = e;
  this.sc = f;
  this.pb = g;
  this.jb = k;
  this.i = 4194304;
  this.q = 256;
}
h = vg.prototype;
h.v = function() {
  return this[ba] || (this[ba] = ++ca);
};
function wg(a, b, c) {
  Sf.l(a.eb, dc, b, c);
  ng(a.pb, a.eb, a.jb, a.ob);
}
h.Xb = function(a, b) {
  w.a(Wa(this.jb), Wa(this.ob)) || ng(this.pb, this.eb, this.jb, this.ob);
  var c = Wa(this.pb).call(null, b);
  if (p(c)) {
    return c;
  }
  c = sg(this.name, b, this.ob, this.eb, this.sc, this.pb, this.jb);
  return p(c) ? c : Wa(this.eb).call(null, this.oc);
};
h.Wb = function(a, b) {
  var c = this.name, d = L.a(this.pc, b), e = tg(this, d);
  if (!p(e)) {
    throw Error([t("No method in multimethod '"), t(c), t("' for dispatch value: "), t(d)].join(""));
  }
  return L.a(e, b);
};
h.call = function() {
  function a(a, b) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return ug(this, e);
  }
  function b(a, b) {
    return ug(this, b);
  }
  a.k = 1;
  a.f = function(a) {
    z(a);
    a = A(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
h.apply = function(a, b) {
  return ug(this, b);
};
function xg(a) {
  this.Pb = a;
  this.q = 0;
  this.i = 2153775104;
}
xg.prototype.v = function() {
  return da(Of.d(E([this], 0)));
};
xg.prototype.s = function(a, b) {
  return qb(b, [t('#uuid "'), t(this.Pb), t('"')].join(""));
};
xg.prototype.u = function(a, b) {
  return b instanceof xg && this.Pb === b.Pb;
};
var yg = new M(null, "do-slide-toggle", "do-slide-toggle"), na = new M(null, "dup", "dup"), zg = new M(null, "literal-type", "literal-type"), Ag = new M(null, "symbol", "symbol"), Bg = new M(null, "fun", "fun"), Cg = new M(null, "href", "href"), hg = new M(null, "descendants", "descendants"), Dg = new M(null, "neighbors", "neighbors"), Eg = new M("fogus.datalog.bacwn.impl.rules", "datalog-rules-set", "fogus.datalog.bacwn.impl.rules/datalog-rules-set"), Lb = new M(null, "default", "default"), Fg = 
new M(null, "magic", "magic"), Gg = new M(null, "text", "text"), Hg = new M(null, "data", "data"), Ig = new M(null, "character", "character"), Jg = new M(null, "to", "to"), Kg = new M(null, "on-submit", "on-submit"), Lg = new M(null, "on-input", "on-input"), Mg = new M(null, "focus-select", "focus-select"), Ng = new M(null, "scroll-to", "scroll-to"), Og = new M(null, "magic-seed", "magic-seed"), Pg = new M(null, "toggle-method", "toggle-method"), Qg = new M("tailrecursion.javelin", "none", "tailrecursion.javelin/none"), 
Rg = new M(null, "locations", "locations"), Sg = new M(null, "on-change", "on-change"), Tg = new M(null, "class", "class"), Ug = new M("character", "db.id", "character/db.id"), Vg = new M("character", "name", "character/name"), Wg = new M(null, "fade-toggle", "fade-toggle"), Xg = new M(null, "db.id", "db.id"), S = new M(null, "name", "name"), Yg = new M(null, "enabled-toggle", "enabled-toggle"), Zg = new M("fogus.datalog.bacwn.impl.rules", "datalog-rule", "fogus.datalog.bacwn.impl.rules/datalog-rule"), 
$g = new M(null, "predicate", "predicate"), ah = new M(null, "head", "head"), bh = new M("location", "character", "location/character"), ch = new M("fogus.datalog.bacwn.impl.literals", "literal", "fogus.datalog.bacwn.impl.literals/literal"), gg = new M(null, "parents", "parents"), ka = new M(null, "flush-on-newline", "flush-on-newline"), dh = new M(null, "do-enabled-toggle", "do-enabled-toggle"), eh = new M(null, "end-column", "end-column"), fh = new M(null, "location", "location"), gh = new M(null, 
"hierarchy", "hierarchy"), hh = new M(null, "nodes", "nodes"), ih = new M(null, "style", "style"), jh = new M("fogus.datalog.bacwn.impl.literals", "conditional", "fogus.datalog.bacwn.impl.literals/conditional"), kh = new M("fogus.datalog.bacwn.impl.rules", "datalog-query", "fogus.datalog.bacwn.impl.rules/datalog-query"), lh = new M(null, "human?", "human?"), mh = new M(null, "focus", "focus"), nh = new M(null, "work-plan", "work-plan"), oh = new M("fogus.datalog.bacwn.impl.literals", "negated", "fogus.datalog.bacwn.impl.literals/negated"), 
ph = new M(null, "column", "column"), qh = new M(null, "do-toggle", "do-toggle"), rh = new M(null, "indexes", "indexes"), sh = new M(null, "stationed-at", "stationed-at"), th = new M(null, "characters", "characters"), ig = new M(null, "ancestors", "ancestors"), uh = new M(null, "toggle", "toggle"), vh = new M(null, "css", "css"), wh = new M("location", "name", "location/name"), $f = new M(null, "done", "done"), xh = new M("location", "db.id", "location/db.id"), oa = new M(null, "print-length", "print-length"), 
yh = new M("character", "human?", "character/human?"), T = new M(null, "type", "type"), zh = new M(null, "stratification", "stratification"), Ah = new M(null, "terms", "terms"), s = new M(null, "else", "else"), of = new M("cljs.core", "not-found", "cljs.core/not-found"), la = new M(null, "readably", "readably"), Qf = new M(null, "validator", "validator"), ma = new M(null, "meta", "meta"), Bh = new M(null, "schema", "schema"), Ch = new M(null, "pred", "pred"), Dh = new M(null, "rules", "rules"), Eh = 
new M("tailrecursion.javelin", "cell", "tailrecursion.javelin/cell"), Fh = new M("tailrecursion.priority-map", "not-found", "tailrecursion.priority-map/not-found"), Gh = new M("fogus.datalog.bacwn", "soft-stratified", "fogus.datalog.bacwn/soft-stratified"), U = new M(null, "for", "for"), Hh = new M(null, "line", "line"), Ih = new M("fogus.datalog.bacwn.impl.database", "datalog-database", "fogus.datalog.bacwn.impl.database/datalog-database"), Jh = new M(null, "term-bindings", "term-bindings"), Kh = 
new M(null, "scrollTop", "scrollTop"), Lh = new M(null, "body", "body"), Mh = new M(null, "query", "query"), Nh = new M("fogus.datalog.bacwn.impl.database", "datalog-relation", "fogus.datalog.bacwn.impl.database/datalog-relation"), Oh = new M(null, "work-plan-type", "work-plan-type"), Ph = new M(null, "id", "id"), Zf = new M(null, "value", "value"), Qh = new M(null, "end-line", "end-line"), Rh = new M(null, "select", "select"), Sh = new M(null, "attr", "attr"), Th = new M(null, "slide-toggle", "slide-toggle"), 
Uh = new M(null, "bound", "bound"), Vh = new M(null, "do-attr", "do-attr");
var Wh = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(L.a(t, b));
  }
  a.k = 1;
  a.f = function(a) {
    z(a);
    a = A(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
Gf("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
Gf("([-+]?[0-9]+)/([0-9]+)");
Gf("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
Gf("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
Gf("[0-9A-Fa-f]{2}");
Gf("[0-9A-Fa-f]{4}");
function Xh(a) {
  if (w.a(3, H(a))) {
    return a;
  }
  if (3 < H(a)) {
    return Hc.c(a, 0, 3);
  }
  if (s) {
    for (a = new fa(a);;) {
      if (3 > a.Ra.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Yh = function() {
  var a = new O(null, 13, 5, P, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new O(null, 13, 5, P, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return K.a(p(d) ? b : a, c);
  };
}(), Ef = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Zh(a) {
  a = parseInt(a);
  return r(isNaN(a)) ? a : null;
}
function $h(a, b, c, d) {
  a <= b && b <= c || Wh.d(null, E([[t(d), t(" Failed:  "), t(a), t("\x3c\x3d"), t(b), t("\x3c\x3d"), t(c)].join("")], 0));
  return b;
}
function ai(a) {
  var b = Df(a);
  I.c(b, 0, null);
  var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null), l = I.c(b, 7, null), m = I.c(b, 8, null), q = I.c(b, 9, null), B = I.c(b, 10, null);
  if (r(b)) {
    return Wh.d(null, E([[t("Unrecognized date/time syntax: "), t(a)].join("")], 0));
  }
  a = Zh(c);
  var b = function() {
    var a = Zh(d);
    return p(a) ? a : 1;
  }(), c = function() {
    var a = Zh(e);
    return p(a) ? a : 1;
  }(), J = function() {
    var a = Zh(f);
    return p(a) ? a : 0;
  }(), pa = function() {
    var a = Zh(g);
    return p(a) ? a : 0;
  }(), ja = function() {
    var a = Zh(k);
    return p(a) ? a : 0;
  }(), Ga = function() {
    var a = Zh(Xh(l));
    return p(a) ? a : 0;
  }(), m = (w.a(m, "-") ? -1 : 1) * (60 * function() {
    var a = Zh(q);
    return p(a) ? a : 0;
  }() + function() {
    var a = Zh(B);
    return p(a) ? a : 0;
  }());
  return new O(null, 8, 5, P, [a, $h(1, b, 12, "timestamp month field must be in range 1..12"), $h(1, c, Yh.a ? Yh.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : Yh.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), $h(0, J, 23, "timestamp hour field must be in range 0..23"), $h(0, pa, 59, "timestamp minute field must be in range 0..59"), 
  $h(0, ja, w.a(pa, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), $h(0, Ga, 999, "timestamp millisecond field must be in range 0..999"), m], null);
}
var bi = R.b(new n(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = ai(a), p(b)) {
      a = I.c(b, 0, null);
      var c = I.c(b, 1, null), d = I.c(b, 2, null), e = I.c(b, 3, null), f = I.c(b, 4, null), g = I.c(b, 5, null), k = I.c(b, 6, null);
      b = I.c(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, g, k) - 6E4 * b);
    } else {
      b = Wh.d(null, E([[t("Unrecognized date/time syntax: "), t(a)].join("")], 0));
    }
  } else {
    b = Wh.d(null, E(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new xg(a) : Wh.d(null, E(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return pc(a) ? Hd(le, a) : Wh.d(null, E(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (pc(a)) {
    var b = [];
    a = y(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.w(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = y(a)) {
          c = a, qc(c) ? (a = Db(c), e = Eb(c), c = a, d = H(a), a = e) : (a = z(c), b.push(a), a = D(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (oc(a)) {
    b = {};
    a = y(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var g = c.w(null, e), f = I.c(g, 0, null), g = I.c(g, 1, null);
        b[Tc(f)] = g;
        e += 1;
      } else {
        if (a = y(a)) {
          qc(a) ? (d = Db(a), a = Eb(a), c = d, d = H(d)) : (d = z(a), c = I.c(d, 0, null), d = I.c(d, 1, null), b[Tc(c)] = d, a = D(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return s ? Wh.d(null, E([[t("JS literal expects a vector or map containing "), t("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null));
R.b(null);
function ci(a, b) {
  var c = "" + t(a);
  K.a(Wa(bi), c);
  Sf.l(bi, dc, c, b);
}
;function di(a, b, c, d) {
  this.Q = a;
  this.V = b;
  this.h = c;
  this.j = d;
  this.q = 0;
  this.i = 2565220111;
}
h = di.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return K.a(this.V, b);
};
h.B = function(a, b, c) {
  return K.c(this.V, b, c);
};
h.da = function(a, b, c) {
  a = K.c(this.V, b, null);
  if (p(a)) {
    if (w.a(a, c)) {
      return this;
    }
    var d = K.a(this.Q, a);
    return w.a(H(d), 1) ? new di(dc.c(ec.a(this.Q, a), c, G.a(K.c(this.Q, c, rf), b)), dc.c(this.V, b, c), this.h, null) : new di(dc.d(this.Q, a, jc.a(K.a(this.Q, a), b), E([c, G.a(K.c(this.Q, c, rf), b)], 0)), dc.c(this.V, b, c), this.h, null);
  }
  return new di(dc.c(this.Q, c, G.a(K.c(this.Q, c, rf), b)), dc.c(this.V, b, c), this.h, null);
};
h.Wa = function(a, b) {
  return wc(this.V, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.A(null, c);
      case 3:
        return this.B(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.b = function(a) {
  return this.A(null, a);
};
h.a = function(a, b) {
  return this.B(null, a, b);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#tailrecursion.priority-map {", ", ", "}", c, this);
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.Za = function() {
  var a = this;
  return y(function() {
    return function c(a) {
      return new Vc(null, function() {
        for (var e = a;;) {
          var f = y(e);
          if (f) {
            var g = f, k = z(g), l = I.c(k, 0, null), m = I.c(k, 1, null);
            if (f = y(function(a, c, d, e, f, g) {
              return function Ya(k) {
                return new Vc(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = y(k);
                      if (a) {
                        if (qc(a)) {
                          var c = Db(a), e = H(c), f = Zc(e);
                          a: {
                            for (var g = 0;;) {
                              if (g < e) {
                                var l = v.a(c, g);
                                f.add(new O(null, 2, 5, P, [l, d], null));
                                g += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? bd(f.P(), Ya(Eb(a))) : bd(f.P(), null);
                        }
                        f = z(a);
                        return F(new O(null, 2, 5, P, [f, d], null), Ya(A(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, f, g), null, null);
              };
            }(e, k, l, m, g, f)(m))) {
              return gd.a(f, c(A(e)));
            }
            e = A(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(kb(a.Q));
  }());
};
h.Jb = function(a, b) {
  return(p(b) ? y : Nc).call(null, this);
};
h.Kb = function(a, b, c) {
  var d = p(c) ? zf.c(this.Q, Cc, b) : Af.c(this.Q, Ac, b);
  return y(function() {
    return function f(a) {
      return new Vc(null, function() {
        for (var b = a;;) {
          var c = y(b);
          if (c) {
            var d = c, q = z(d), B = I.c(q, 0, null), J = I.c(q, 1, null);
            if (c = y(function(a, b, c, d, f, g) {
              return function xb(k) {
                return new Vc(null, function(a, b, c) {
                  return function() {
                    for (;;) {
                      var a = y(k);
                      if (a) {
                        if (qc(a)) {
                          var b = Db(a), d = H(b), f = Zc(d);
                          a: {
                            for (var g = 0;;) {
                              if (g < d) {
                                var l = v.a(b, g);
                                f.add(new O(null, 2, 5, P, [l, c], null));
                                g += 1;
                              } else {
                                b = !0;
                                break a;
                              }
                            }
                            b = void 0;
                          }
                          return b ? bd(f.P(), xb(Eb(a))) : bd(f.P(), null);
                        }
                        f = z(a);
                        return F(new O(null, 2, 5, P, [f, c], null), xb(A(a)));
                      }
                      return null;
                    }
                  };
                }(a, b, c, d, f, g), null, null);
              };
            }(b, q, B, J, d, c)(J))) {
              return gd.a(c, f(A(b)));
            }
            b = A(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(d);
  }());
};
h.Ib = function(a, b) {
  return Pa(b);
};
h.Hb = function() {
  return Kb;
};
h.G = function() {
  var a = this;
  return y(function() {
    return function c(a) {
      return new Vc(null, function() {
        for (var e = a;;) {
          var f = y(e);
          if (f) {
            var g = f, k = z(g), l = I.c(k, 0, null), m = I.c(k, 1, null);
            if (f = y(function(a, c, d, e, f, g) {
              return function Ya(k) {
                return new Vc(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = y(k);
                      if (a) {
                        if (qc(a)) {
                          var c = Db(a), e = H(c), f = Zc(e);
                          a: {
                            for (var g = 0;;) {
                              if (g < e) {
                                var l = v.a(c, g);
                                f.add(new O(null, 2, 5, P, [l, d], null));
                                g += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? bd(f.P(), Ya(Eb(a))) : bd(f.P(), null);
                        }
                        f = z(a);
                        return F(new O(null, 2, 5, P, [f, d], null), Ya(A(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, f, g), null, null);
              };
            }(e, k, l, m, g, f)(m))) {
              return gd.a(f, c(A(e)));
            }
            e = A(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(a.Q);
  }());
};
h.J = function() {
  return H(this.V);
};
h.ta = function() {
  if (0 === H(this.V)) {
    return null;
  }
  var a = z(this.Q);
  return new O(null, 2, 5, P, [z(Pa(a)), Oa(a)], null);
};
h.ua = function() {
  if (0 === H(this.V)) {
    throw Error("Can't pop empty priority map");
  }
  var a = z(this.Q), b = Pa(a), c = z(b), a = Oa(a);
  return w.a(H(b), 1) ? new di(ec.a(this.Q, a), ec.a(this.V, c), this.h, null) : new di(dc.c(this.Q, a, jc.a(b, c)), ec.a(this.V, c), this.h, null);
};
h.u = function(a, b) {
  return eb(this.V, b);
};
h.H = function(a, b) {
  return new di(this.Q, this.V, b, this.j);
};
h.D = function() {
  return this.h;
};
h.L = function() {
  return $b(ei, this.h);
};
h.ka = function(a, b) {
  var c = this.V.a ? this.V.a(b, Fh) : this.V.call(null, b, Fh);
  if (w.a(c, Fh)) {
    return this;
  }
  var d = this.Q.b ? this.Q.b(c) : this.Q.call(null, c);
  return w.a(H(d), 1) ? new di(ec.a(this.Q, c), ec.a(this.V, b), this.h, null) : new di(dc.c(this.Q, c, jc.a(d, b)), ec.a(this.V, b), this.h, null);
};
var ei = new di(gf(), Q, Q, null);
ci("tailrecursion.priority-map", function(a) {
  return oc(a) ? Hd(ei, a) : Wh.d(null, E(["Priority map literal expects a map for its elements."], 0));
});
var fi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = y(a);
    for (var b = ei;;) {
      if (a) {
        var e = D(D(a)), b = dc.c(b, z(a), z(D(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function gi(a, b) {
  return function d(b) {
    var f = ic(b);
    return p(f) ? new Vc(null, function() {
      return F(f, d(Hd(null == b ? null : Ta(b), p(nd.b ? nd.b(f) : nd.call(null, f)) ? a.b ? a.b(f) : a.call(null, f) : null)));
    }, null, null) : null;
  }(G.a(le, b));
}
var hi = R.b(0);
function ii() {
  return Sf.a(hi, Qb);
}
function ji(a) {
  return p(ki.b ? ki.b(a) : ki.call(null, a)) ? Wa(a) : a;
}
function li(a) {
  for (var b = fi.d(E([a, a.pa], 0));;) {
    if (y(b)) {
      a = Jc(ic(b));
      var c = a.dc.call(null), d = jd.a(c, a.prev), e = function() {
        return function(a, b) {
          return dc.c(a, b, b.pa);
        };
      }(b, a, c, d), b = null == b ? null : Ta(b), f = a.na;
      d && (a.prev = c);
      b = d ? yc.c(e, b, f) : b;
    } else {
      return null;
    }
  }
}
function mi(a) {
  var b = a.hb;
  a.hb = $d;
  a.ra = Q;
  for (var b = y(Dd(ki, b)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.w(null, e);
      f.na = jc.a(f.na, a);
      e += 1;
    } else {
      if (b = y(b)) {
        c = b, qc(c) ? (b = Db(c), d = Eb(c), c = b, f = H(b), b = d, d = f) : (f = z(c), f.na = jc.a(f.na, a), b = D(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
var ni = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = I.c(b, 0, null), f = I.c(b, 1, null);
    mi(a);
    a.hb = p(e) ? G.a(be(f), e) : be(f);
    for (var f = y(Dd(ki, a.hb)), g = null, k = 0, l = 0;;) {
      if (l < k) {
        var m = g.w(null, l);
        m.na = G.a(m.na, a);
        if (m.pa > a.pa) {
          for (var m = y(gi(function() {
            return function(a) {
              return a.na;
            };
          }(f, g, k, l, m), m)), q = null, B = 0, J = 0;;) {
            if (J < B) {
              q.w(null, J).pa = ii(), J += 1;
            } else {
              if (m = y(m)) {
                q = m, qc(q) ? (m = Db(q), J = Eb(q), q = m, B = H(m), m = J) : (z(q).pa = ii(), m = D(q), q = null, B = 0), J = 0;
              } else {
                break;
              }
            }
          }
        }
        l += 1;
      } else {
        if (q = y(f)) {
          m = q;
          if (qc(m)) {
            f = Db(m), l = Eb(m), g = f, k = H(f), f = l;
          } else {
            B = z(m);
            B.na = G.a(B.na, a);
            if (B.pa > a.pa) {
              for (f = y(gi(function() {
                return function(a) {
                  return a.na;
                };
              }(f, g, k, l, B, m, q), B)), g = null, l = k = 0;;) {
                if (l < k) {
                  g.w(null, l).pa = ii(), l += 1;
                } else {
                  if (f = y(f)) {
                    g = f, qc(g) ? (f = Db(g), l = Eb(g), g = f, k = H(f), f = l) : (z(g).pa = ii(), f = D(g), g = null, k = 0), l = 0;
                  } else {
                    break;
                  }
                }
              }
            }
            f = D(m);
            g = null;
            k = 0;
          }
          l = 0;
        } else {
          break;
        }
      }
    }
    f = function(b) {
      return function() {
        for (var d = a.state, e = b(a.hb), f = y(ec.a(a.ra, Eh)), g = null, k = 0, l = 0;;) {
          if (l < k) {
            var m = g.w(null, l), q = I.c(m, 0, null), m = I.c(m, 1, null);
            m.l ? m.l(q, a, d, e) : m.call(null, q, a, d, e);
            l += 1;
          } else {
            if (f = y(f)) {
              qc(f) ? (k = Db(f), f = Eb(f), g = k, k = H(k)) : (k = z(f), g = I.c(k, 0, null), k = I.c(k, 1, null), k.l ? k.l(g, a, d, e) : k.call(null, g, a, d, e), f = D(f), g = null, k = 0), l = 0;
            } else {
              break;
            }
          }
        }
        return a.state = e;
      };
    }(function(a) {
      return L.a(ji(ic(a)), ud.a(ji, null == a ? null : Ta(a)));
    });
    vb(a, Eh, p(e) ? function() {
      throw Error("formula cell can't be updated via swap! or reset!");
    } : function(a, b) {
      return li(b);
    });
    a.qc = p(e) ? !1 : !0;
    a.dc = p(e) ? f : function() {
      return Wa(a);
    };
    li(a);
    return a;
  }
  a.k = 1;
  a.f = function(a) {
    var d = z(a);
    a = A(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}();
function oi(a, b, c, d, e, f, g, k, l) {
  this.h = a;
  this.state = b;
  this.pa = c;
  this.prev = d;
  this.hb = e;
  this.na = f;
  this.dc = g;
  this.ra = k;
  this.qc = l;
  this.q = 2;
  this.i = 2147647488;
}
h = oi.prototype;
h.Mb = function(a, b, c) {
  a = y(this.ra);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f), k = I.c(g, 0, null), g = I.c(g, 1, null);
      g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = y(a)) {
        qc(a) ? (d = Db(a), a = Eb(a), k = d, e = H(d), d = k) : (d = z(a), k = I.c(d, 0, null), g = I.c(d, 1, null), g.l ? g.l(k, this, b, c) : g.call(null, k, this, b, c), a = D(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.Lb = function(a, b, c) {
  return this.ra = dc.c(this.ra, b, c);
};
h.mb = function() {
  return this.state;
};
h.D = function() {
  return this.h;
};
h.s = function(a, b) {
  return If.d(b, E(["#\x3cCell: ", Of.d(E([this.state], 0)), "\x3e"], 0));
};
function pi(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return ni.d(qi.b ? qi.b(Qg) : qi.call(null, Qg), E([a, b], 0));
    }
    b.k = 0;
    b.f = function(a) {
      a = y(a);
      return c(a);
    };
    b.d = c;
    return b;
  }();
}
function qi(a) {
  return ni(new oi(Q, a, ii(), a, $d, rf, null, Q, null));
}
function ki(a) {
  return w.a(sa(a), oi) ? a : null;
}
function ri(a, b) {
  var c = pi(y).call(null, b), d = function() {
    return function(a, b) {
      try {
        return I.a(a, b);
      } catch (c) {
        if (c instanceof Error) {
          return null;
        }
        if (s) {
          throw c;
        }
        return null;
      }
    };
  }(c);
  return ud.a(function(b) {
    return pi(pd.a(a, d)).call(null, c, b);
  }, Cf.a(0, H(Wa(c))));
}
;function si(a) {
  return a instanceof x ? (a = Tc(a), w.a("?", z(a)) && jd.a("?", z(D(a)))) : null;
}
function ti(a) {
  return a instanceof x ? (a = Tc(a), w.a("?", z(a)) && w.a("?", z(D(a)))) : null;
}
function ui(a, b) {
  var c = ud.a(function(b) {
    var c = I.c(b, 0, null);
    b = I.c(b, 1, null);
    return new O(null, 2, 5, P, [c, a.b ? a.b(b) : a.call(null, b)], null);
  }, b);
  return y(c) ? L.c(G, null == b ? null : za(b), c) : b;
}
;function vi(a, b) {
  var c = L.c(vf, a, b);
  return F(c, Ed(function(a) {
    return c === a;
  }, b));
}
var wi = function() {
  function a(a, b) {
    return H(a) < H(b) ? yc.c(G, b, a) : yc.c(G, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      a = vi(H, G.d(d, c, E([a], 0)));
      return yc.c(Hd, z(a), A(a));
    }
    a.k = 2;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return b(c, d, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 0:
        return rf;
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.r = function() {
    return rf;
  };
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}(), xi = function() {
  function a(a, b) {
    for (;;) {
      if (H(b) < H(a)) {
        var c = a;
        a = b;
        b = c;
      } else {
        return yc.c(function(a, b) {
          return function(a, c) {
            return wc(b, c) ? a : jc.a(a, c);
          };
        }(a, b), a, a);
      }
    }
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      a = vi(function(a) {
        return-H(a);
      }, G.d(e, d, E([a], 0)));
      return yc.c(b, z(a), A(a));
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}(), yi = function() {
  function a(a, b) {
    return H(a) < H(b) ? yc.c(function(a, c) {
      return wc(b, c) ? jc.a(a, c) : a;
    }, a, a) : yc.c(jc, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return yc.c(b, a, G.a(e, d));
    }
    a.k = 2;
    a.f = function(a) {
      var b = z(a);
      a = D(a);
      var d = z(a);
      a = A(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, E(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.f = c.f;
  b.b = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function zi(a, b) {
  return H(a) <= H(b) && ld(function(a) {
    return wc(b, a);
  }, a);
}
;function Ai(a, b, c, d, e) {
  this.Ha = a;
  this.data = b;
  this.Da = c;
  this.p = d;
  this.m = e;
  this.q = 0;
  this.i = 2229667594;
  3 < arguments.length ? (this.p = d, this.m = e) : this.m = this.p = null;
}
h = Ai.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, Bh) ? this.Ha : N(b, Hg) ? this.data : N(b, rh) ? this.Da : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a(Bh, b) : N.call(null, Bh, b)) ? new Ai(c, this.data, this.Da, this.p, this.m, null) : p(N.a ? N.a(Hg, b) : N.call(null, Hg, b)) ? new Ai(this.Ha, c, this.Da, this.p, this.m, null) : p(N.a ? N.a(rh, b) : N.call(null, rh, b)) ? new Ai(this.Ha, this.data, c, this.p, this.m, null) : new Ai(this.Ha, this.data, this.Da, this.p, dc.c(this.m, b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.impl.database.Relation{", ", ", "}", c, gd.a(new O(null, 3, 5, P, [new O(null, 2, 5, P, [Bh, this.Ha], null), new O(null, 2, 5, P, [Hg, this.data], null), new O(null, 2, 5, P, [rh, this.Da], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 3, 5, P, [new O(null, 2, 5, P, [Bh, this.Ha], null), new O(null, 2, 5, P, [Hg, this.data], null), new O(null, 2, 5, P, [rh, this.Da], null)], null), this.m));
};
h.J = function() {
  return 3 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new Ai(this.Ha, this.data, this.Da, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 3, [Hg, null, rh, null, Bh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new Ai(this.Ha, this.data, this.Da, this.p, kd(ec.a(this.m, b)), null);
};
var Bi = $b(Q, new n(null, 1, [T, Ih], null));
function Ci(a, b, c) {
  return $b(new Ai(a, b, c), new n(null, 1, [T, Nh], null));
}
function Di(a, b, c) {
  return dc.c(a, b, Ci(tf(c), rf, Q));
}
function Ei(a, b, c) {
  if (!mc(Hg.b(a.b ? a.b(b) : a.call(null, b)))) {
    throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "empty?", "empty?", 1355128395, null), Pc(Hg, Pc(new x(null, "db", "db", -1640528329, null), new x(null, "name", "name", -1637157820, null))))], 0)))].join(""));
  }
  var d = a.b ? a.b(b) : a.call(null, b);
  c = dc.c(rh.b(d), c, Q);
  return dc.c(a, b, Ci(Bh.b(d), Hg.b(d), c));
}
function Fi(a, b, c, d) {
  var e = a.b ? a.b(b) : a.call(null, b);
  if (p(e)) {
    if (!w.a(Bh.b(e), tf(c))) {
      throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "\x3d", "\x3d", -1640531466, null), Pc(Bh, new x(null, "rel", "rel", -1640418734, null)), Pc(new x(null, "set", "set", -1640417765, null), new x(null, "keys", "keys", -1637242963, null)))], 0)))].join(""));
    }
    return a;
  }
  a = Di(a, b, c);
  return yc.c(function(a, c) {
    return Ei(a, b, c);
  }, a, d);
}
function Gi(a, b, c) {
  return dc.c(a, b, c);
}
function Hi(a) {
  return ui(function(a) {
    return H(Hg.b(a));
  }, a);
}
function Ii(a, b) {
  return Hd(Q, function() {
    return function d(e) {
      return new Vc(null, function() {
        for (;;) {
          var f = y(e);
          if (f) {
            if (qc(f)) {
              var g = Db(f), k = H(g), l = Zc(k);
              return function() {
                for (var d = 0;;) {
                  if (d < k) {
                    var e = v.a(g, d), f = l, m = a.b ? a.b(e) : a.call(null, e), ja = b.b ? b.b(e) : b.call(null, e), Ga = K.c(m, ja, rf), Za = G.a ? G.a(Ga, b) : G.call(null, Ga, b), e = new O(null, 2, 5, P, [e, mc(Za) ? ec.a(m, ja) : dc.c(m, ja, G.a ? G.a(Ga, b) : G.call(null, Ga, b))], null);
                    f.add(e);
                    d += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(l.P(), d(Eb(f))) : bd(l.P(), null);
            }
            var m = z(f);
            return F(function() {
              var d = a.b ? a.b(m) : a.call(null, m), e = b.b ? b.b(m) : b.call(null, m), f = K.c(d, e, rf), g = G.a ? G.a(f, b) : G.call(null, f, b);
              return new O(null, 2, 5, P, [m, mc(g) ? ec.a(d, e) : dc.c(d, e, G.a ? G.a(f, b) : G.call(null, f, b))], null);
            }(), d(A(f)));
          }
          return null;
        }
      }, null, null);
    }(jf(a));
  }());
}
var Ji = function() {
  function a(a, b, f) {
    if (!w.a(tf(jf(f)), Bh.b(a.b ? a.b(b) : a.call(null, b)))) {
      throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "\x3d", "\x3d", -1640531466, null), Pc(new x(null, "-\x3e", "-\x3e", -1640530070, null), new x(null, "tuple", "tuple", -1529806463, null), new x(null, "keys", "keys", -1637242963, null), new x(null, "set", "set", -1640417765, null)), Pc(new x(null, "-\x3e", "-\x3e", -1640530070, null), new x(null, "rel-name", "rel-name", 2051790072, null), new x(null, "db", "db", -1640528329, null), Bh))], 0)))].join(""));
    }
    return dc.c(a, b, c.a(a.b ? a.b(b) : a.call(null, b), f));
  }
  function b(a, b) {
    var c = Hg.b(a), g = G.a(c, b);
    if (c === g) {
      return a;
    }
    c = rh.b(a);
    c = Ii(c, b);
    return dc.d(a, Hg, g, E([rh, c], 0));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), Ki = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    return yc.c(function(a, b) {
      return Ji.c(a, z(b), L.a(ff, D(b)));
    }, a, b);
  }
  a.k = 1;
  a.f = function(a) {
    var d = z(a);
    a = A(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}();
function Li(a, b) {
  return mc(a) ? null : Dd(nd, function() {
    return function d(e) {
      return new Vc(null, function() {
        for (;;) {
          var f = y(e);
          if (f) {
            if (qc(f)) {
              var g = Db(f), k = H(g), l = Zc(k);
              return function() {
                for (var d = 0;;) {
                  if (d < k) {
                    var e = v.a(g, d), f = l, m = a.b ? a.b(e) : a.call(null, e), e = p(m) ? K.c(m, b.b ? b.b(e) : b.call(null, e), rf) : null;
                    f.add(e);
                    d += 1;
                  } else {
                    return!0;
                  }
                }
              }() ? bd(l.P(), d(Eb(f))) : bd(l.P(), null);
            }
            var m = z(f);
            return F(function() {
              var d = a.b ? a.b(m) : a.call(null, m);
              return p(d) ? K.c(d, b.b ? b.b(m) : b.call(null, m), rf) : null;
            }(), d(A(f)));
          }
          return null;
        }
      }, null, null);
    }(jf(b));
  }());
}
function Mi(a, b) {
  return ld(function(c) {
    return wc(a, c) && w.a(a.b ? a.b(c) : a.call(null, c), b.b ? b.b(c) : b.call(null, c));
  }, jf(b));
}
function Ni(a, b, c, d) {
  b = b.b ? b.b(c) : b.call(null, c);
  c = Li(rh.b(b), d);
  b = mc(c) ? Hg.b(b) : yc.a(xi, c);
  return a.a ? a.a(function(a) {
    return Mi(a, d);
  }, b) : a.call(null, function(a) {
    return Mi(a, d);
  }, b);
}
function Oi(a, b, c) {
  return Ni(Dd, a, b, c);
}
;function Pi(a, b, c, d) {
  this.W = a;
  this.Pa = b;
  this.p = c;
  this.m = d;
  this.q = 0;
  this.i = 2229667594;
  2 < arguments.length ? (this.p = c, this.m = d) : this.m = this.p = null;
}
h = Pi.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, hh) ? this.W : N(b, Dg) ? this.Pa : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a(hh, b) : N.call(null, hh, b)) ? new Pi(c, this.Pa, this.p, this.m, null) : p(N.a ? N.a(Dg, b) : N.call(null, Dg, b)) ? new Pi(this.W, c, this.p, this.m, null) : new Pi(this.W, this.Pa, this.p, dc.c(this.m, b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.impl.graph.DirectedGraph{", ", ", "}", c, gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [hh, this.W], null), new O(null, 2, 5, P, [Dg, this.Pa], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [hh, this.W], null), new O(null, 2, 5, P, [Dg, this.Pa], null)], null), this.m));
};
h.J = function() {
  return 2 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new Pi(this.W, this.Pa, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 2, [Dg, null, hh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new Pi(this.W, this.Pa, this.p, kd(ec.a(this.m, b)), null);
};
function Qi(a, b) {
  return new Pi(a, b);
}
function Ri(a) {
  return Qi(hh.b(a), Hd(Q, ud.a(function(b) {
    return new O(null, 2, 5, P, [b, G.a(tf(Dg.b(a).call(null, b)), b)], null);
  }, hh.b(a))));
}
var Si = function() {
  function a(a, b, f) {
    return new Vc(null, function() {
      var g = y(yd(f, b)), k = z(g), l = A(g);
      return g ? F(k, c.c(a, gd.a(Dg.b(a).call(null, k), l), G.a(f, k))) : null;
    }, null, null);
  }
  function b(a, b) {
    return c.c(a, new O(null, 1, 5, P, [b], null), rf);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Ti(a) {
  var b = Hd(Q, ud.a(function(b) {
    return new O(null, 2, 5, P, [b, new Yf(R.b(new n(null, 2, [$f, !1, Zf, null], null)), function() {
      return Si.c(a, Dg.b(a).call(null, b), rf);
    })], null);
  }, hh.b(a)));
  return Qi(hh.b(a), function(a) {
    a = b.b ? b.b(a) : b.call(null, a);
    return a instanceof Yf ? Wa(a) : a;
  });
}
function Ui(a, b, c, d) {
  return function(a, c) {
    for (;;) {
      if (p(function() {
        var a = c;
        return p(a) ? w.a(0, c) : a;
      }())) {
        throw Error("Fixed point overflow");
      }
      var g = b.b ? b.b(a) : b.call(null, a);
      if (p(d.a ? d.a(a, g) : d.call(null, a, g))) {
        return g;
      }
      var k = function() {
        var a = c;
        return p(a) ? c - 1 : a;
      }();
      a = g;
      c = k;
    }
  }(a, c);
}
function Vi(a) {
  var b = L.c(Dc, 0, lf(a)) + 1;
  return yc.c(function() {
    return function(a, b) {
      var e = I.c(b, 0, null), f = I.c(b, 1, null);
      return dc.c(a, f, G.a(a.b ? a.b(f) : a.call(null, f), e));
    };
  }(b), be(wd(b, zd.b(rf))), a);
}
function Wi(a) {
  var b = Ui(uf(hh.b(a)), function(b) {
    return Hd(Q, ud.a(function(a) {
      return function(b) {
        var c = I.c(b, 0, null);
        I.c(b, 1, null);
        return new O(null, 2, 5, P, [c, a(c)], null);
      };
    }(function(d) {
      return L.c(Dc, -1, ud.a(b, Dg.b(a).call(null, d))) + 1;
    }), b));
  }, H(hh.b(a)) + 1, w);
  return Vi(b);
}
;function Xi(a, b, c, d, e) {
  this.Ga = a;
  this.Ja = b;
  this.Fa = c;
  this.p = d;
  this.m = e;
  this.q = 0;
  this.i = 2229667594;
  3 < arguments.length ? (this.p = d, this.m = e) : this.m = this.p = null;
}
h = Xi.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, $g) ? this.Ga : N(b, Jh) ? this.Ja : N(b, zg) ? this.Fa : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a($g, b) : N.call(null, $g, b)) ? new Xi(c, this.Ja, this.Fa, this.p, this.m, null) : p(N.a ? N.a(Jh, b) : N.call(null, Jh, b)) ? new Xi(this.Ga, c, this.Fa, this.p, this.m, null) : p(N.a ? N.a(zg, b) : N.call(null, zg, b)) ? new Xi(this.Ga, this.Ja, c, this.p, this.m, null) : new Xi(this.Ga, this.Ja, this.Fa, this.p, dc.c(this.m, b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.impl.literals.AtomicLiteral{", ", ", "}", c, gd.a(new O(null, 3, 5, P, [new O(null, 2, 5, P, [$g, this.Ga], null), new O(null, 2, 5, P, [Jh, this.Ja], null), new O(null, 2, 5, P, [zg, this.Fa], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 3, 5, P, [new O(null, 2, 5, P, [$g, this.Ga], null), new O(null, 2, 5, P, [Jh, this.Ja], null), new O(null, 2, 5, P, [zg, this.Fa], null)], null), this.m));
};
h.J = function() {
  return 3 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new Xi(this.Ga, this.Ja, this.Fa, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 3, [zg, null, $g, null, Jh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new Xi(this.Ga, this.Ja, this.Fa, this.p, kd(ec.a(this.m, b)), null);
};
function Yi(a, b, c) {
  return new Xi(a, b, c);
}
mg.a(oh, ch);
var V, Zi = R.b(Q), $i = R.b(Q), aj = R.b(Q), bj = R.b(Q), cj = K.c(Q, gh, Uf());
V = new vg("literal-predicate", zg, Lb, cj, Zi, $i, aj, bj);
var dj, ej = R.b(Q), fj = R.b(Q), gj = R.b(Q), hj = R.b(Q), ij = K.c(Q, gh, Uf());
dj = new vg("literal-columns", zg, Lb, ij, ej, fj, gj, hj);
var jj, kj = R.b(Q), lj = R.b(Q), mj = R.b(Q), nj = R.b(Q), oj = K.c(Q, gh, Uf());
jj = new vg("literal-vars", zg, Lb, oj, kj, lj, mj, nj);
var pj, qj = R.b(Q), rj = R.b(Q), sj = R.b(Q), tj = R.b(Q), uj = K.c(Q, gh, Uf());
pj = new vg("positive-vars", zg, Lb, uj, qj, rj, sj, tj);
var vj, wj = R.b(Q), xj = R.b(Q), yj = R.b(Q), zj = R.b(Q), Aj = K.c(Q, gh, Uf());
vj = new vg("negative-vars", zg, Lb, Aj, wj, xj, yj, zj);
wg(V, ch, function(a) {
  return $g.b(a);
});
wg(V, jh, function() {
  return null;
});
wg(dj, ch, function(a) {
  return tf(jf(Jh.b(a)));
});
wg(dj, jh, function() {
  return null;
});
wg(jj, ch, function(a) {
  return tf(Dd(si, lf(Jh.b(a))));
});
wg(jj, jh, function(a) {
  return tf(Dd(si, Ah.b(a)));
});
wg(pj, ch, function(a) {
  return jj.b ? jj.b(a) : jj.call(null, a);
});
wg(pj, oh, function() {
  return null;
});
wg(pj, jh, function() {
  return null;
});
wg(vj, ch, function() {
  return null;
});
wg(vj, oh, function(a) {
  return jj.b ? jj.b(a) : jj.call(null, a);
});
wg(vj, jh, function(a) {
  return jj.b ? jj.b(a) : jj.call(null, a);
});
function Bj(a) {
  return w.a(zg.b(a), ch);
}
var Cj = new x(null, "not!", "not!", -1637144217, null), Dj = new x(null, "if", "if", -1640528170, null), Ej, Fj = R.b(Q), Gj = R.b(Q), Hj = R.b(Q), Ij = R.b(Q), Jj = K.c(Q, gh, Uf());
Ej = new vg("build-literal", z, Lb, Jj, Fj, Gj, Hj, Ij);
function Kj(a, b) {
  var c = z(a), d = ud.a(function() {
    return function(a) {
      return p(si(a)) ? $b(y(gd.a(u(C, $b(new x(null, "quote", "quote", -1532577739, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 137), E([u(C, ph), u(C, 41), u(C, Qh), u(C, 137), u(C, eh), u(C, 46)], 0)))))), u(C, a))), L.a(ff, y(gd.d(u(C, Hh), u(C, 137), E([u(C, ph), u(C, 40), u(C, Qh), u(C, 137), u(C, eh), u(C, 50)], 0))))) : a;
    };
  }(c), D(a)), d = y(d) ? L.c(dc, Q, d) : null;
  return $b(y(gd.d(u(C, $b(new x("fogus.datalog.bacwn.impl.literals", "-\x3eAtomicLiteral", "fogus.datalog.bacwn.impl.literals/-\x3eAtomicLiteral", 820189347, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 139), E([u(C, ph), u(C, 7), u(C, Qh), u(C, 139), u(C, eh), u(C, 22)], 0)))))), u(C, c), E([u(C, d), u(C, b)], 0))), L.a(ff, y(gd.d(u(C, Hh), u(C, 139), E([u(C, ph), u(C, 6), u(C, Qh), u(C, 139), u(C, eh), u(C, 35)], 0)))));
}
wg(Ej, Lb, function(a) {
  return Kj(a, ch);
});
wg(Ej, Cj, function(a) {
  return Kj(A(a), oh);
});
wg(Ej, Dj, function(a) {
  var b = z(D(a));
  a = D(D(a));
  var c = $b(y(gd.d(u(C, $b(new x("clojure.core", "fn", "clojure.core/fn", -670339662, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 15), u(C, Qh), u(C, 153), u(C, eh), u(C, 17)], 0)))))), u(C, $b(L.a(ce, y(gd.b(u(C, $b(new x(null, "binds__10048__auto__", "binds__10048__auto__", 128799783, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 19), u(C, Qh), u(C, 153), u(C, eh), u(C, 25)], 0))))))))), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 18), u(C, Qh), u(C, 153), 
  u(C, eh), u(C, 26)], 0)))))), E([u(C, $b(y(gd.d(u(C, $b(new x("clojure.core", "apply", "clojure.core/apply", -557849368, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 28), u(C, Qh), u(C, 153), u(C, eh), u(C, 33)], 0)))))), u(C, b), E([u(C, $b(new x(null, "binds__10048__auto__", "binds__10048__auto__", 128799783, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 42), u(C, Qh), u(C, 153), u(C, eh), u(C, 48)], 0))))))], 0))), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), 
  u(C, 27), u(C, Qh), u(C, 153), u(C, eh), u(C, 49)], 0))))))], 0))), L.a(ff, y(gd.d(u(C, Hh), u(C, 153), E([u(C, ph), u(C, 14), u(C, Qh), u(C, 153), u(C, eh), u(C, 50)], 0)))));
  return $b(y(gd.d(u(C, $b(new x("fogus.datalog.bacwn.impl.literals", "-\x3eConditionalLiteral", "fogus.datalog.bacwn.impl.literals/-\x3eConditionalLiteral", -154372200, null), L.a(ff, y(gd.d(u(C, Hh), u(C, 154), E([u(C, ph), u(C, 7), u(C, Qh), u(C, 154), u(C, eh), u(C, 27)], 0)))))), u(C, c), E([u(C, y(gd.a(u(C, new x(null, "quote", "quote", -1532577739, null)), u(C, b)))), u(C, y(gd.a(u(C, new x(null, "quote", "quote", -1532577739, null)), u(C, a)))), u(C, jh)], 0))), L.a(ff, y(gd.d(u(C, Hh), u(C, 
  154), E([u(C, ph), u(C, 6), u(C, Qh), u(C, 158), u(C, eh), u(C, 21)], 0)))));
});
var Lj, Mj = R.b(Q), Nj = R.b(Q), Oj = R.b(Q), Pj = R.b(Q), Qj = K.c(Q, gh, Uf());
Lj = new vg("display-literal", zg, Lb, Qj, Mj, Nj, Oj, Pj);
function Rj(a) {
  return G.a(Gd(hd.b(Jh.b(a))), V.b ? V.b(a) : V.call(null, a));
}
wg(Lj, ch, function(a) {
  return Rj(a);
});
wg(Lj, oh, function(a) {
  return G.a(Rj(a), Cj);
});
wg(Lj, jh, function(a) {
  return hd.c(Dj, Ag.b(a), Ah.b(a));
});
var Sj, Tj = R.b(Q), Uj = R.b(Q), Vj = R.b(Q), Wj = R.b(Q), Xj = K.c(Q, gh, Uf());
Sj = new vg("get-vs-from-cs", zg, Lb, Xj, Tj, Uj, Vj, Wj);
wg(Sj, ch, function(a, b) {
  return tf(Dd(si, lf(nf(Jh.b(a), b))));
});
wg(Sj, jh, function() {
  return null;
});
var Yj, Zj = R.b(Q), ak = R.b(Q), bk = R.b(Q), ck = R.b(Q), dk = K.c(Q, gh, Uf());
Yj = new vg("get-cs-from-vs", zg, Lb, dk, Zj, ak, bk, ck);
wg(Yj, ch, function(a, b) {
  return yc.c(G, rf, Ed(qa, ud.a(function(a) {
    var d = I.c(a, 0, null);
    a = I.c(a, 1, null);
    return p(b.b ? b.b(a) : b.call(null, a)) ? d : null;
  }, Jh.b(a))));
});
wg(Yj, jh, function() {
  return null;
});
var ek, fk = R.b(Q), gk = R.b(Q), hk = R.b(Q), ik = R.b(Q), jk = K.c(Q, gh, Uf());
ek = new vg("get-self-bound-cs", zg, Lb, jk, fk, gk, hk, ik);
wg(ek, ch, function(a) {
  return yc.c(G, rf, Ed(qa, ud.a(function(a) {
    var c = I.c(a, 0, null);
    a = I.c(a, 1, null);
    return r(si(a)) ? c : null;
  }, Jh.b(a))));
});
wg(ek, jh, function() {
  return null;
});
var kk = function() {
  var a = R.b(Q), b = R.b(Q), c = R.b(Q), d = R.b(Q), e = K.c(Q, gh, Uf());
  return new vg("literal-appropriate?", function(a, b) {
    return zg.b(b);
  }, Lb, e, a, b, c, d);
}();
wg(kk, ch, function(a, b) {
  return!mc(xi.a(jj.b ? jj.b(b) : jj.call(null, b), a));
});
wg(kk, oh, function(a, b) {
  return zi(jj.b ? jj.b(b) : jj.call(null, b), a);
});
wg(kk, jh, function(a, b) {
  return zi(jj.b ? jj.b(b) : jj.call(null, b), a);
});
var lk = function() {
  var a = R.b(Q), b = R.b(Q), c = R.b(Q), d = R.b(Q), e = K.c(Q, gh, Uf());
  return new vg("adorned-literal", function(a) {
    return zg.b(a);
  }, Lb, e, a, b, c, d);
}();
wg(lk, ch, function(a, b) {
  var c = V.b ? V.b(a) : V.call(null, a), d = xi.a(dj.b ? dj.b(a) : dj.call(null, a), b);
  return mc(b) ? a : dc.c(a, $g, new n(null, 2, [Ch, c, Uh, d], null));
});
wg(lk, jh, function(a) {
  return a;
});
function mk(a) {
  try {
    return Uh.b(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}
function nk(a) {
  return oc(a) ? Ch.b(a) : a;
}
function ok(a) {
  if (!kg.a(zg.b(a), ch)) {
    throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "-\x3e", "-\x3e", -1640530070, null), new x(null, "l", "l", -1640531419, null), zg, Pc(new x(null, "isa?", "isa?", -1637289887, null), ch))], 0)))].join(""));
  }
  var b = V.b ? V.b(a) : V.call(null, a), c = oc(b) ? b : new n(null, 1, [Ch, b], null), b = mk(b), b = nf(Jh.b(a), b);
  return dc.d(a, $g, dc.c(c, Fg, !0), E([Jh, b, zg, ch], 0));
}
function pk(a) {
  if (!kg.a(zg.b(a), ch)) {
    throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "-\x3e", "-\x3e", -1640530070, null), new x(null, "s", "s", -1640531412, null), zg, Pc(new x(null, "isa?", "isa?", -1637289887, null), ch))], 0)))].join(""));
  }
  var b = ui(function() {
    return Xf.b(new x(null, "?_gen_", "?_gen_", 254008520, null));
  }, Jh.b(a));
  return dc.c(a, Jh, b);
}
function qk(a, b) {
  var c = Jh.b(a);
  return Hd(Q, Ed(qa, ud.a(function() {
    return function(a) {
      var c = I.c(a, 0, null), f = I.c(a, 1, null);
      return p(si(f)) ? (a = b.b ? b.b(f) : b.call(null, f), p(a) ? new O(null, 2, 5, P, [c, a], null) : null) : a;
    };
  }(c), c)));
}
function rk(a, b) {
  return yc.c(function(a, d) {
    var e = I.c(d, 0, null), f = I.c(d, 1, null), g;
    g = si(f);
    g = p(g) ? wc(b, e) : g;
    return p(g) ? dc.c(a, f, b.b ? b.b(e) : b.call(null, e)) : a;
  }, Q, Jh.b(a));
}
function sk(a, b, c, d) {
  function e(a) {
    var c = qk(b, a);
    return d.a ? d.a(a, c) : d.call(null, a, c);
  }
  return wc(a, V.b ? V.b(b) : V.call(null, b)) ? L.a(gd, ud.a(e, c)) : null;
}
var tk = function() {
  var a = R.b(Q), b = R.b(Q), c = R.b(Q), d = R.b(Q), e = K.c(Q, gh, Uf());
  return new vg("join-literal", function(a, b) {
    return zg.b(b);
  }, Lb, e, a, b, c, d);
}();
wg(tk, ch, function(a, b, c) {
  return sk(a, b, c, function(c, e) {
    return ud.a(function(a) {
      return mf.d(E([c, a], 0));
    }, ud.a(qd.a(rk, b), Oi(a, V.b ? V.b(b) : V.call(null, b), e)));
  });
});
wg(tk, oh, function(a, b, c) {
  return sk(a, b, c, function(c, e) {
    var f;
    f = V.b ? V.b(b) : V.call(null, b);
    f = w.a(tf(jf(e)), Bh.b(a.b ? a.b(f) : a.call(null, f))) ? wc(Hg.b(a.b ? a.b(f) : a.call(null, f)), e) : Ni(md, a, f, e);
    return p(f) ? null : new O(null, 1, 5, P, [c], null);
  });
});
wg(tk, jh, function(a, b, c) {
  return Ed(qa, ud.a(function(a) {
    var c = ud.a(function(b) {
      return p(si(b)) ? a.b ? a.b(b) : a.call(null, b) : b;
    }, Ah.b(b));
    return p(Bg.b(b).call(null, c)) ? a : null;
  }, c));
});
var uk = function() {
  function a(a, b, c, g) {
    if (!w.a(zg.b(b), ch)) {
      throw Error([t("Assert failed: "), t(Of.d(E([Pc(new x(null, "\x3d", "\x3d", -1640531466, null), Pc(zg, new x(null, "lit", "lit", -1640424368, null)), ch)], 0)))].join(""));
    }
    var k = V.b ? V.b(b) : V.call(null, b), l = jf(Jh.b(b)), m = be(mk(V.b ? V.b(b) : V.call(null, b))), q = Fi(a, k, l, m), B = q.b ? q.b(k) : q.call(null, k);
    return Gi(a, k, yc.c(function(a, c, d, f, k) {
      return function(l, m) {
        var q = yc.c(function() {
          return function(a, b) {
            var c = I.c(b, 0, null), d = I.c(b, 1, null);
            return p(g.b ? g.b(d) : g.call(null, d)) ? dc.c(a, c, m.b ? m.b(d) : m.call(null, d)) : dc.c(a, c, d);
          };
        }(a, c, d, f, k), Q, Jh.b(b));
        return Ji.a(l, q);
      };
    }(k, l, m, q, B), B, c));
  }
  function b(a, b, f) {
    return c.l(a, b, f, si);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
ci("fogus.datalog.bacwn.impl.literals.AtomicLiteral", function(a) {
  return new Xi($g.b(a), Jh.b(a), zg.b(a), null, ec.d(a, $g, E([Jh, zg], 0)));
});
Xi.prototype.K = !0;
Xi.prototype.s = function(a, b) {
  return If.d(b, E([Of.d(E([hd.a(new x(null, "?-", "?-", -1640529529, null), Lj.b ? Lj.b(this) : Lj.call(null, this))], 0))], 0));
};
function vk(a, b, c, d) {
  this.head = a;
  this.body = b;
  this.p = c;
  this.m = d;
  this.q = 0;
  this.i = 2229667594;
  2 < arguments.length ? (this.p = c, this.m = d) : this.m = this.p = null;
}
h = vk.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, ah) ? this.head : N(b, Lh) ? this.body : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a(ah, b) : N.call(null, ah, b)) ? new vk(c, this.body, this.p, this.m, null) : p(N.a ? N.a(Lh, b) : N.call(null, Lh, b)) ? new vk(this.head, c, this.p, this.m, null) : new vk(this.head, this.body, this.p, dc.c(this.m, b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.impl.rules.DatalogRule{", ", ", "}", c, gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [ah, this.head], null), new O(null, 2, 5, P, [Lh, this.body], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [ah, this.head], null), new O(null, 2, 5, P, [Lh, this.body], null)], null), this.m));
};
h.J = function() {
  return 2 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new vk(this.head, this.body, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 2, [ah, null, Lh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new vk(this.head, this.body, this.p, kd(ec.a(this.m, b)), null);
};
function wk(a) {
  var b = jj.b ? jj.b(ah.b(a)) : jj.call(null, ah.b(a)), c = L.a(wi, ud.a(pj, Lh.b(a))), d = L.a(wi, ud.a(vj, Lh.b(a))), b = yi.a(b, c), c = yi.a(d, c);
  if (!mc(b)) {
    throw Error([t("Head vars"), t(b), t("not bound in body of rule"), t(a)].join(""));
  }
  if (!mc(c)) {
    throw Error([t("Body vars"), t(c), t("not bound in negative positions of rule"), t(a)].join(""));
  }
  return a;
}
function xk(a, b) {
  return $b(new vk(a, b), new n(null, 1, [T, Zg], null));
}
ci("fogus.datalog.bacwn.impl.rules.DatalogRule", function(a) {
  return new vk(ah.b(a), Lh.b(a), null, ec.d(a, ah, E([Lh], 0)));
});
vk.prototype.K = !0;
vk.prototype.s = function(a, b) {
  return If.d(b, E([Of.d(E([hd.c(new x(null, "\x3c-", "\x3c-", -1640529622, null), Lj.b ? Lj.b(ah.b(this)) : Lj.call(null, ah.b(this)), ud.a(Lj, Lh.b(this)))], 0))], 0));
};
function yk(a, b, c) {
  function d(a, b) {
    var c = z(yd(function(b) {
      return r(kk.a ? kk.a(a, b) : kk.call(null, a, b));
    }, b));
    return p(c) ? c : z(yd(od(Bj), b));
  }
  var e = function() {
    return function(a, c) {
      if (p(b.b ? b.b(V.b ? V.b(a) : V.call(null, a)) : b.call(null, V.b ? V.b(a) : V.call(null, a)))) {
        var d = wi.a(Yj.a ? Yj.a(a, c) : Yj.call(null, a, c), ek.b ? ek.b(a) : ek.call(null, a));
        return lk.a ? lk.a(a, d) : lk.call(null, a, d);
      }
      return a;
    };
  }(d), f = lk.a ? lk.a(ah.b(c), a) : lk.call(null, ah.b(c), a);
  a = Sj.a ? Sj.a(ah.b(c), a) : Sj.call(null, ah.b(c), a);
  for (var g = Lh.b(c), k = $d;;) {
    var l = d(a, g);
    if (p(l)) {
      var m = l;
      c = wi.a(a, jj.b ? jj.b(m) : jj.call(null, m));
      g = Ed(function(a, b, c, d) {
        return function(a) {
          return w.a(a, d);
        };
      }(a, g, k, m, l), g);
      k = G.a(k, e(m, a));
      a = c;
    } else {
      return xk(f, gd.a(k, g));
    }
  }
}
function zk(a) {
  return $b(a, new n(null, 1, [T, Eg], null));
}
var Ak = zk(rf), Bk = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return yc.c(G, Ak, a);
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function Ck(a) {
  return yc.c(function(a, c) {
    var d = V.b ? V.b(ah.b(c)) : V.call(null, ah.b(c)), e = K.c(a, d, rf);
    return dc.c(a, d, G.a(e, c));
  }, Q, a);
}
function Dk(a) {
  return tf(ud.a(V, ud.a(ah, a)));
}
var Ek = new O(null, 1, 5, P, [Q], null), Fk = function() {
  function a(a, b, c) {
    var g = ah.b(c);
    c = Lh.b(c);
    c = yc.c(function() {
      return function(b, c) {
        return tk.c ? tk.c(a, c, b) : tk.call(null, a, c, b);
      };
    }(g, c), Ek, c);
    return uk.c(b, g, c);
  }
  function b(a, b) {
    return c.c(a, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
function Gk(a, b) {
  return yc.c(function(b, d) {
    return Fk.c(a, b, d);
  }, a, b);
}
;function Hk(a, b) {
  for (var c = Dk(a), d = Ck(a), e = Ak, f = sf([V.b ? V.b(b) : V.call(null, b)]);;) {
    if (mc(f)) {
      return e;
    }
    var g = z(f), k = jc.a(f, g), l = nk(g), m = mk(g), q = d.b ? d.b(l) : d.call(null, l), B = ud.a(qd.c(yk, m, c), q), J = yc.c(G, e, B), pa = Dk(J), ja = function(a, b, d, e, f, g, k, l, m, q) {
      return function(a) {
        var b = q.b ? q.b(a) : q.call(null, a);
        return p(b) ? b : r(c.b ? c.b(nk(a)) : c.call(null, nk(a)));
      };
    }(e, f, g, k, l, m, q, B, J, pa), f = yc.c(function(a, b, c, d, e, f, g, k, l, m, q, B) {
      return function(a, b) {
        return yc.c(B, a, ud.a(V, Lh.b(b)));
      };
    }(e, f, g, k, l, m, q, B, J, pa, ja, function(a, b, c, d, e, f, g, k, l, m, q) {
      return function(a, b) {
        return p(q(b)) ? a : G.a(a, b);
      };
    }(e, f, g, k, l, m, q, B, J, pa, ja)), k, B), e = J;
  }
}
function Ik(a) {
  a = pk(ok(a));
  var b;
  b = nk(V.b ? V.b(a) : V.call(null, a));
  var c = mk(V.b ? V.b(a) : V.call(null, a));
  b = $b(dc.c(a, $g, new O(null, 3, 5, P, [b, Og, c], null)), Q);
  return xk(a, new O(null, 1, 5, P, [b], null));
}
function Jk(a, b) {
  return Hd(Q, Ed(qa, ud.a(function(a) {
    var d = I.c(a, 0, null), e = I.c(a, 1, null);
    return p(si(e)) ? null : p(ti(e)) ? new O(null, 2, 5, P, [d, b.b ? b.b(e) : b.call(null, e)], null) : a;
  }, Jh.b(a))));
}
function Kk(a) {
  var b = z(Lh.b(Ik(a))), c = jf(Jh.b(b));
  a = nf(Jh.b(a), c);
  return dc.c(b, Jh, a);
}
var Lk = function() {
  function a(a, b) {
    return yc.c(function(a) {
      return function(c, d) {
        var l = ah.b(d), m = Lh.b(d), q = ok(l), B = xk(l, gd.a(new O(null, 1, 5, P, [q], null), m)), l = yc.c(function(a, c, d, f, g) {
          return function(a, c) {
            var f = I.c(a, 0, null), k = I.c(a, 1, null), l;
            l = b.b ? b.b(V.b ? V.b(c) : V.call(null, c)) : b.call(null, V.b ? V.b(c) : V.call(null, c));
            l = p(l) ? g(c, d, k) : l;
            return p(l) ? (l = xk(ok(c), gd.a(new O(null, 1, 5, P, [d], null), k)), new O(null, 2, 5, P, [G.a(f, l), G.a(k, c)], null)) : new O(null, 2, 5, P, [f, G.a(k, c)], null);
          };
        }(l, m, q, B, a), new O(null, 2, 5, P, [c, $d], null), m), m = I.c(l, 0, null);
        I.c(l, 1, null);
        return G.a(m, B);
      };
    }(function(a, b, c) {
      return!mc(c) || !w.a(ok(a), b);
    }), Ak, a);
  }
  function b(a) {
    return c.a(a, Dk(a));
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}();
function Mk(a) {
  var b = Dk(a);
  a = Ck(a);
  a = yc.c(function(a, b) {
    return function(e, f) {
      var g = b.b ? b.b(f) : b.call(null, f), g = yc.c(function(a, b, c) {
        return function(d, e) {
          return yc.c(function() {
            return function(a, b) {
              var c = V.b ? V.b(b) : V.call(null, b);
              return p(c) ? G.a(a, c) : a;
            };
          }(a, b, c), d, e);
        };
      }(g, a, b), rf, ud.a(Lh, g));
      return dc.c(e, f, g);
    };
  }(b, a), Q, b);
  return Qi(b, a);
}
function Nk(a) {
  var b = Ck(a), c = Ri(Ti(Mk(a)));
  return function(a) {
    return L.a(wi, ud.a(tf, ud.a(b, Dg.b(c).call(null, a))));
  };
}
function Ok(a, b, c, d) {
  ah.b(c);
  var e = Lh.b(c);
  c = I.a(e, d);
  d = ee.c(be(e), 0, d);
  return G.a(Lk.a(b.b ? b.b(V.b ? V.b(c) : V.call(null, c)) : b.call(null, V.b ? V.b(c) : V.call(null, c)), Dk(a)), xk(ok(c), d));
}
function Pk(a, b, c, d) {
  return xi.a(b, yc.c(function(b, f) {
    var g = I.c(f, 0, null), k = I.c(f, 1, null);
    return w.a(zg.b(k), oh) ? wi.a(b, Ok(a, c, d, g)) : b;
  }, Ak, rd(ce, Lh.b(d))));
}
function Qk(a, b) {
  var c = function(c) {
    return function(e, f) {
      return dc.c(e, f, Pk(a, b, c, f));
    };
  }(Nk(a)), c = yc.c(c, Q, b);
  return Qi(b, c);
}
function Rk(a, b, c, d) {
  this.$ = a;
  this.Qa = b;
  this.p = c;
  this.m = d;
  this.q = 0;
  this.i = 2229667594;
  2 < arguments.length ? (this.p = c, this.m = d) : this.m = this.p = null;
}
h = Rk.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, Mh) ? this.$ : N(b, zh) ? this.Qa : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a(Mh, b) : N.call(null, Mh, b)) ? new Rk(c, this.Qa, this.p, this.m, null) : p(N.a ? N.a(zh, b) : N.call(null, zh, b)) ? new Rk(this.$, c, this.p, this.m, null) : new Rk(this.$, this.Qa, this.p, dc.c(this.m, b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.impl.softstrat.SoftStratWorkPlan{", ", ", "}", c, gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [Mh, this.$], null), new O(null, 2, 5, P, [zh, this.Qa], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 2, 5, P, [new O(null, 2, 5, P, [Mh, this.$], null), new O(null, 2, 5, P, [zh, this.Qa], null)], null), this.m));
};
h.J = function() {
  return 2 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new Rk(this.$, this.Qa, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 2, [zh, null, Mh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new Rk(this.$, this.Qa, this.p, kd(ec.a(this.m, b)), null);
};
var Sk = function() {
  function a(a, b, c) {
    var g = Mh.b(a);
    a = zh.b(a);
    var k = Kk(g);
    b = uk.l(b, k, new O(null, 1, 5, P, [c], null), ti);
    var l = function(a, b) {
      return function(a) {
        a: {
          for (var c = Hi(a), d = b;;) {
            var e = z(d);
            if (p(e)) {
              if (e = Gk(a, e), w.a(c, Hi(e))) {
                d = D(d);
              } else {
                a = e;
                break a;
              }
            } else {
              break a;
            }
          }
          a = void 0;
        }
        return a;
      };
    }(g, a, k, b);
    a = Ui(b, l, null, function() {
      return function(a, b) {
        return w.a(Hi(a), Hi(b));
      };
    }(g, a, k, b, l));
    c = Jk(g, c);
    return Oi(a, V.b ? V.b(g) : V.call(null, g), c);
  }
  function b(a, b) {
    return c.c(a, b, Q);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var Tk = R.b(0);
function Uk(a) {
  var b = Uc.b(Sc(ac(y(a)))), c = Uc.a(Tc(b), "db.id"), d = K.a(a, c), d = p(d) ? d : Sf.a(Tk, Qb);
  a = y(ec.a(a, c));
  return be(L.c(gd, new O(null, 3, 5, P, [b, Xg, d], null), yc.c(function(a, b) {
    var c = I.c(b, 0, null), d = I.c(b, 1, null);
    return F(new O(null, 2, 5, P, [Uc.b(Tc(c)), d], null), a);
  }, $d, a)));
}
;function Vk(a, b, c, d, e, f) {
  this.Aa = a;
  this.rules = b;
  this.$ = c;
  this.Ba = d;
  this.p = e;
  this.m = f;
  this.q = 0;
  this.i = 2229667594;
  4 < arguments.length ? (this.p = e, this.m = f) : this.m = this.p = null;
}
h = Vk.prototype;
h.v = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ic(this);
};
h.A = function(a, b) {
  return Ia.c(this, b, null);
};
h.B = function(a, b, c) {
  return N(b, nh) ? this.Aa : N(b, Dh) ? this.rules : N(b, Mh) ? this.$ : N(b, Oh) ? this.Ba : s ? K.c(this.m, b, c) : null;
};
h.da = function(a, b, c) {
  return p(N.a ? N.a(nh, b) : N.call(null, nh, b)) ? new Vk(c, this.rules, this.$, this.Ba, this.p, this.m, null) : p(N.a ? N.a(Dh, b) : N.call(null, Dh, b)) ? new Vk(this.Aa, c, this.$, this.Ba, this.p, this.m, null) : p(N.a ? N.a(Mh, b) : N.call(null, Mh, b)) ? new Vk(this.Aa, this.rules, c, this.Ba, this.p, this.m, null) : p(N.a ? N.a(Oh, b) : N.call(null, Oh, b)) ? new Vk(this.Aa, this.rules, this.$, c, this.p, this.m, null) : new Vk(this.Aa, this.rules, this.$, this.Ba, this.p, dc.c(this.m, 
  b, c), null);
};
h.s = function(a, b, c) {
  return Hf(b, function(a) {
    return Hf(b, Nf, "", " ", "", c, a);
  }, "#fogus.datalog.bacwn.WorkPlan{", ", ", "}", c, gd.a(new O(null, 4, 5, P, [new O(null, 2, 5, P, [nh, this.Aa], null), new O(null, 2, 5, P, [Dh, this.rules], null), new O(null, 2, 5, P, [Mh, this.$], null), new O(null, 2, 5, P, [Oh, this.Ba], null)], null), this.m));
};
h.F = function(a, b) {
  return pc(b) ? Ka(this, v.a(b, 0), v.a(b, 1)) : yc.c(u, this, b);
};
h.G = function() {
  return y(gd.a(new O(null, 4, 5, P, [new O(null, 2, 5, P, [nh, this.Aa], null), new O(null, 2, 5, P, [Dh, this.rules], null), new O(null, 2, 5, P, [Mh, this.$], null), new O(null, 2, 5, P, [Oh, this.Ba], null)], null), this.m));
};
h.J = function() {
  return 4 + H(this.m);
};
h.u = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && oe(this, b) : b) ? !0 : !1;
};
h.H = function(a, b) {
  return new Vk(this.Aa, this.rules, this.$, this.Ba, b, this.m, this.j);
};
h.D = function() {
  return this.p;
};
h.ka = function(a, b) {
  return wc(new pf(null, new n(null, 4, [nh, null, Dh, null, Mh, null, Oh, null], null), null), b) ? ec.a($b(Hd(Q, this), this.p), b) : new Vk(this.Aa, this.rules, this.$, this.Ba, this.p, kd(ec.a(this.m, b)), null);
};
function Wk(a, b) {
  if (0 >= b || b >= 2 + H(a)) {
    return G.a(be(F("", ud.a(t, y(a)))), "");
  }
  if (p(w.a ? w.a(1, b) : w.call(null, 1, b))) {
    return new O(null, 1, 5, P, [a], null);
  }
  if (p(w.a ? w.a(2, b) : w.call(null, 2, b))) {
    return new O(null, 2, 5, P, ["", a], null);
  }
  var c = b - 2;
  return G.a(be(F("", ee.c(be(ud.a(t, y(a))), 0, c))), Hc.a(a, c));
}
var Xk = function() {
  function a(a, b, c) {
    if (w.a("" + t(b), "/(?:)/")) {
      b = Wk(a, c);
    } else {
      if (1 > c) {
        b = be(("" + t(a)).split(b));
      } else {
        a: {
          for (var g = c, k = $d;;) {
            if (w.a(g, 1)) {
              b = G.a(k, a);
              break a;
            }
            var l = Ff(b, a);
            if (p(l)) {
              var m = l, l = a.indexOf(m), m = a.substring(l + H(m)), g = g - 1, k = G.a(k, a.substring(0, l));
              a = m;
            } else {
              b = G.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (w.a(0, c)) {
      a: {
        for (c = b;;) {
          if (w.a("", ic(c))) {
            c = null == c ? null : Ta(c);
          } else {
            break a;
          }
        }
        c = void 0;
      }
    } else {
      c = b;
    }
    return c;
  }
  function b(a, b) {
    return c.c(a, b, 0);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}();
var Yk = r(window.Node), Zk = r(Yk) ? function(a) {
  return a instanceof Node;
} : function(a) {
  try {
    return a.nodeType;
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, $k = r(Yk) ? pc : function(a) {
  try {
    return pc(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, al = r(Yk) ? uc : function(a) {
  try {
    return uc(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, bl = function() {
  function a(a, b, c) {
    try {
      return I.c(a, b, c);
    } catch (g) {
      if (g instanceof Error) {
        return c;
      }
      if (s) {
        throw g;
      }
      return null;
    }
  }
  function b(a, b) {
    return c.c(a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.c = a;
  return c;
}(), cl = function() {
  function a(a, b) {
    return window.setTimeout(a, b);
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), el = function dl(b) {
  return Bd.a(function(b) {
    var d;
    d = al.b ? al.b(b) : al.call(null, b);
    d = p(d) ? d : $k.b ? $k.b(b) : $k.call(null, b);
    return p(d) ? dl(b) : new O(null, 1, 5, P, [b], null);
  }, b);
};
function fl(a, b) {
  return cl.b(function d() {
    return p(document.documentElement.contains(a)) ? b.r ? b.r() : b.call(null) : cl.a(d, 20);
  });
}
function gl(a) {
  var b = I.c(a, 0, null), c = Gc(a), d = pd.a(Rc, z), e = function(a) {
    return function(b) {
      return ud.a(be, xf(a, Id.a(2, b)));
    };
  }(d), d = function(a) {
    return function(b) {
      return Bd.a(nd, yd(a, Id.l(2, 2, $d, b)));
    };
  }(d, e);
  return oc(b) ? new O(null, 2, 5, P, [b, c], null) : b instanceof M ? new O(null, 2, 5, P, [Hd(Q, e(a)), d(a)], null) : s ? new O(null, 2, 5, P, [Q, a], null) : null;
}
function hl(a, b) {
  function c(a) {
    return a.substr(0, 3);
  }
  for (var d = function() {
    return function(a) {
      return Uc.b(a.substr(3));
    };
  }(c), e = R.b(Q), f = R.b(Q), g = y(b), k = null, l = 0, m = 0;;) {
    if (m < l) {
      var q = k.w(null, m), B = I.c(q, 0, null), q = I.c(q, 1, null), J = Tc(B), B = jQuery(a);
      if (w.a(J, "class")) {
        for (var q = y(Xk.a(q, / /)), J = null, pa = 0, ja = 0;;) {
          if (ja < pa) {
            var Ga = J.w(null, ja);
            B.addClass(Ga);
            ja += 1;
          } else {
            if (q = y(q)) {
              J = q, qc(J) ? (q = Db(J), ja = Eb(J), J = q, pa = H(q), q = ja) : (q = z(J), B.addClass(q), q = D(J), J = null, pa = 0), ja = 0;
            } else {
              break;
            }
          }
        }
      } else {
        w.a(J, "css") ? B.css(dg(q)) : w.a("do-", c(J)) ? Sf.l(e, dc, d(J), q) : w.a("on-", c(J)) ? Sf.l(f, dc, d(J), q) : s && (w.a(!1, q) ? B.removeAttr(J) : w.a(!0, q) ? B.attr(J, J) : s && B.attr(J, "" + t(q)));
      }
      m += 1;
    } else {
      if (g = y(g)) {
        if (qc(g)) {
          l = Db(g), g = Eb(g), k = l, l = H(l);
        } else {
          l = z(g);
          k = I.c(l, 0, null);
          l = I.c(l, 1, null);
          m = Tc(k);
          k = jQuery(a);
          if (w.a(m, "class")) {
            for (l = y(Xk.a(l, / /)), m = null, q = B = 0;;) {
              if (q < B) {
                J = m.w(null, q), k.addClass(J), q += 1;
              } else {
                if (l = y(l)) {
                  m = l, qc(m) ? (l = Db(m), q = Eb(m), m = l, B = H(l), l = q) : (l = z(m), k.addClass(l), l = D(m), m = null, B = 0), q = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            w.a(m, "css") ? k.css(dg(l)) : w.a("do-", c(m)) ? Sf.l(e, dc, d(m), l) : w.a("on-", c(m)) ? Sf.l(f, dc, d(m), l) : s && (w.a(!1, l) ? k.removeAttr(m) : w.a(!0, l) ? k.attr(m, m) : s && k.attr(m, "" + t(l)));
          }
          g = D(g);
          k = null;
          l = 0;
        }
        m = 0;
      } else {
        break;
      }
    }
  }
  y(Wa(f)) && cl.b(function() {
    for (var b = y(Wa(f)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var g = c.w(null, e), k = I.c(g, 0, null), g = I.c(g, 1, null);
        il.c ? il.c(a, k, g) : il.call(null, a, k, g);
        e += 1;
      } else {
        if (b = y(b)) {
          qc(b) ? (c = Db(b), b = Eb(b), k = c, d = H(c), c = k) : (c = z(b), k = I.c(c, 0, null), g = I.c(c, 1, null), il.c ? il.c(a, k, g) : il.call(null, a, k, g), b = D(b), c = null, d = 0), e = 0;
        } else {
          return null;
        }
      }
    }
  });
  y(Wa(e)) && cl.b(function() {
    for (var b = y(Wa(e)), c = null, d = 0, f = 0;;) {
      if (f < d) {
        var g = c.w(null, f), k = I.c(g, 0, null), l = I.c(g, 1, null);
        jl.c ? jl.c(a, k, Wa(l)) : jl.call(null, a, k, Wa(l));
        Vf(l, Xf.r(), function(b, c, d, e, f, g) {
          return function(b, c, d, e) {
            return jl.c ? jl.c(a, g, e) : jl.call(null, a, g, e);
          };
        }(b, c, d, f, g, k, l));
        f += 1;
      } else {
        var m = y(b);
        if (m) {
          g = m;
          if (qc(g)) {
            b = Db(g), f = Eb(g), c = b, d = H(b), b = f;
          } else {
            var q = z(g), k = I.c(q, 0, null), l = I.c(q, 1, null);
            jl.c ? jl.c(a, k, Wa(l)) : jl.call(null, a, k, Wa(l));
            Vf(l, Xf.r(), function(b, c, d, e, f, g) {
              return function(b, c, d, e) {
                return jl.c ? jl.c(a, g, e) : jl.call(null, a, g, e);
              };
            }(b, c, d, f, q, k, l, g, m));
            b = D(g);
            c = null;
            d = 0;
          }
          f = 0;
        } else {
          return null;
        }
      }
    }
  });
}
var kl = r(Yk) ? function(a, b) {
  return a.appendChild(b);
} : function(a, b) {
  try {
    return a.appendChild(b);
  } catch (c) {
    if (c instanceof Error) {
      return null;
    }
    if (s) {
      throw c;
    }
    return null;
  }
};
function ll(a, b) {
  for (var c = y(td(function(a) {
    return "string" === typeof a ? ml.b ? ml.b(a) : ml.call(null, a) : p(Zk.b ? Zk.b(a) : Zk.call(null, a)) ? a : null;
  }, el(b))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      kl.a ? kl.a(a, g) : kl.call(null, a, g);
      f += 1;
    } else {
      if (c = y(c)) {
        d = c, qc(d) ? (c = Db(d), f = Eb(d), d = c, e = H(c), c = f) : (c = z(d), kl.a ? kl.a(a, c) : kl.call(null, a, c), c = D(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
h = Element.prototype;
h.call = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = E(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    var e = gl(b), f = I.c(e, 0, null), e = I.c(e, 1, null);
    p(this.Ob) ? this.Ob(f, e) : (hl(this, f), ll(this, e));
    return this;
  }
  a.k = 1;
  a.f = function(a) {
    z(a);
    a = A(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(va(b)));
};
h.a = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = E(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = gl(a);
    a = I.c(b, 0, null);
    b = I.c(b, 1, null);
    p(this.Ob) ? this.Ob(a, b) : (hl(this, a), ll(this, b));
    return this;
  }
  a.k = 0;
  a.f = function(a) {
    a = y(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
h.K = !0;
h.s = function(a, b) {
  return If.d(b, E(["#\x3cElement: ", this.tagName, "\x3e"], 0));
};
function nl(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = E(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return L.a(document.createElement(a), b);
    }
    b.k = 0;
    b.f = function(a) {
      a = y(a);
      return c(a);
    };
    b.d = c;
    return b;
  }();
}
var ol = nl("a"), pl = nl("button"), ql = nl("div"), rl = nl("fieldset"), sl = nl("form"), tl = nl("h1"), ul = nl("h2"), vl = nl("h3"), W = nl("input"), X = nl("label"), wl = nl("legend"), Y = nl("li"), xl = nl("ol"), yl = nl("option"), zl = nl("p"), Al = nl("q"), Bl = nl("select"), Z = nl("span"), Cl = nl("ul");
function ml(a) {
  return document.createTextNode(a);
}
var Dl = R.b($d);
qd.c(Sf, Dl, G);
function El(a) {
  return cl.b(function() {
    var b = jQuery("body");
    b.empty();
    for (var c = y(a), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var g = d.w(null, f);
        b.append(g);
        f += 1;
      } else {
        if (c = y(c)) {
          d = c, qc(d) ? (c = Db(d), f = Eb(d), d = c, e = H(c), c = f) : (c = z(d), b.append(c), c = D(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    b.on("submit", function(a) {
      return a.preventDefault();
    });
    b = y(Wa(Dl));
    c = null;
    for (f = e = 0;;) {
      if (f < e) {
        d = c.w(null, f), d.r ? d.r() : d.call(null), f += 1;
      } else {
        if (b = y(b)) {
          c = b, qc(c) ? (b = Db(c), e = Eb(c), c = b, d = H(b), b = e, e = d) : (d = z(c), d.r ? d.r() : d.call(null), b = D(c), c = null, e = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  });
}
function Fl(a) {
  return jl.a ? jl.a(document.getElementById(Tc(a)), Zf) : jl.call(null, document.getElementById(Tc(a)), Zf);
}
var Gl = function() {
  function a(a, b) {
    return a.val("" + t(b)).trigger("change");
  }
  function b(a) {
    return a.val();
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), Hl = function() {
  function a(a, b) {
    return a.prop("checked", vc(b)).trigger("change");
  }
  function b(a) {
    return a.is(":checked");
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.a = a;
  return c;
}(), jl = function() {
  var a = R.b(Q), b = R.b(Q), c = R.b(Q), d = R.b(Q), e = K.c(Q, gh, Uf());
  return new vg("do!", function() {
    function a(b, c, d) {
      2 < arguments.length && E(Array.prototype.slice.call(arguments, 2), 0);
      return c;
    }
    a.k = 2;
    a.f = function(a) {
      z(a);
      a = D(a);
      var b = z(a);
      A(a);
      return b;
    };
    a.d = function(a, b) {
      return b;
    };
    return a;
  }(), Lb, e, a, b, c, d);
}();
wg(jl, Zf, function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, 0, f);
  }
  function b(a, b, e) {
    a = jQuery(a);
    return L.c(w.a("checkbox", a.attr("type")) ? Hl : Gl, a, e);
  }
  a.k = 2;
  a.f = function(a) {
    var d = z(a);
    a = D(a);
    z(a);
    a = A(a);
    return b(d, 0, a);
  };
  a.d = b;
  return a;
}());
wg(jl, Sh, function(a, b, c) {
  return a.b ? a.b(c) : a.call(null, c);
});
wg(jl, Tg, function(a, b, c) {
  a = jQuery(a);
  c = y(c);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      b = I.c(g, 0, null);
      g = I.c(g, 1, null);
      a.toggleClass(Tc(b), vc(g));
      f += 1;
    } else {
      if (c = y(c)) {
        qc(c) ? (d = Db(c), c = Eb(c), b = d, e = H(d), d = b) : (d = z(c), b = I.c(d, 0, null), g = I.c(d, 1, null), a.toggleClass(Tc(b), vc(g)), c = D(c), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
});
wg(jl, vh, function(a, b, c) {
  a = jQuery(a);
  c = y(c);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.w(null, f);
      b = I.c(g, 0, null);
      g = I.c(g, 1, null);
      a.css(Tc(b), "" + t(g));
      f += 1;
    } else {
      if (c = y(c)) {
        qc(c) ? (d = Db(c), c = Eb(c), b = d, e = H(d), d = b) : (d = z(c), b = I.c(d, 0, null), g = I.c(d, 1, null), a.css(Tc(b), "" + t(g)), c = D(c), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
});
wg(jl, uh, function(a, b, c) {
  return jQuery(a).toggle(vc(c));
});
wg(jl, Th, function(a, b, c) {
  return p(c) ? jQuery(a).hide().slideDown("fast") : jQuery(a).slideUp("fast");
});
wg(jl, Wg, function(a, b, c) {
  return p(c) ? jQuery(a).hide().fadeIn("fast") : jQuery(a).fadeOut("fast");
});
wg(jl, mh, function(a, b, c) {
  return p(c) ? cl.b(function() {
    return jQuery(a).focus();
  }) : cl.b(function() {
    return jQuery(a).focusout();
  });
});
wg(jl, Rh, function(a) {
  return jQuery(a).select();
});
wg(jl, Mg, function(a, b, c) {
  return p(c) ? (jl.c ? jl.c(a, mh, c) : jl.call(null, a, mh, c), jl.c ? jl.c(a, Rh, c) : jl.call(null, a, Rh, c)) : null;
});
wg(jl, Gg, function(a, b, c) {
  return jQuery(a).text("" + t(c));
});
wg(jl, Ng, function(a, b, c) {
  return p(c) ? (b = jQuery("body"), a = jQuery(a), b.animate(dg(new n(null, 1, [Kh, a.offset().top], null)))) : null;
});
function il(a, b, c) {
  return fl(a, function() {
    return jQuery(a).on(Tc(b), c);
  });
}
function Il(a, b) {
  var c = qi(0), d = pi(function() {
    return function(a, b) {
      return b.b ? b.b(a) : b.call(null, a);
    };
  }(c)).call(null, a, y), e = pi(function() {
    return function(a, b) {
      return a.b ? a.b(b) : a.call(null, b);
    };
  }(c, d)).call(null, H, d), f = function(a, b, c) {
    return function(d) {
      return pi(function() {
        return function(a, b) {
          return a < b;
        };
      }(a, b, c)).call(null, d, c);
    };
  }(c, d, e), g = function(a, b, c, d) {
    return function(e) {
      return pi(function() {
        return function(a, b, c) {
          return b.a ? b.a(c, a) : b.call(null, c, a);
        };
      }(a, b, c, d)).call(null, e, bl, b);
    };
  }(c, d, e, f), k = Z.r ? Z.r() : Z.call(null);
  fl(k, function() {
    var a = k.parentNode;
    a.removeChild(k);
    return pi(function(a, b, c, d, e, f, g, k, l, sb) {
      if (p(g < e)) {
        g = y(k.a ? k.a(g, e) : k.call(null, g, e));
        k = null;
        for (var pb = 0, xb = 0;;) {
          if (p(xb < pb)) {
            var Hb = k.w(null, xb), Hb = (c.b ? c.b(d.b ? d.b(Hb) : d.call(null, Hb)) : c.call(null, d.b ? d.b(Hb) : d.call(null, Hb))).call(null, qh, f.b ? f.b(Hb) : f.call(null, Hb));
            r(sb) ? b.appendChild(Hb) : b.insertBefore(Hb, b.firstChild);
            xb += 1;
          } else {
            if (g = y(g)) {
              qc(g) ? (pb = Db(g), g = Eb(g), k = pb, pb = H(pb)) : (k = z(g), k = (c.b ? c.b(d.b ? d.b(k) : d.call(null, k)) : c.call(null, d.b ? d.b(k) : d.call(null, k))).call(null, qh, f.b ? f.b(k) : f.call(null, k)), r(sb) ? b.appendChild(k) : b.insertBefore(k, b.firstChild), g = D(g), k = null, pb = 0), xb = 0;
            } else {
              break;
            }
          }
        }
        return l.a ? l.a(a, e) : l.call(null, a, e);
      }
      return null;
    }).call(null, qi(c), a, b, g, e, f, c, Cf, Rf, null);
  });
  return k;
}
;var Jl, Kl, Ll, Ml, Nl, Ol, Pl, Ql, Rl, Sl, Tl;
function Ul() {
  Jl = Ei(Di(Ei(Di(Bi, Ig, new O(null, 3, 5, P, [Xg, S, lh], null)), Ig, S), fh, new O(null, 3, 5, P, [Xg, Ig, S], null)), fh, S);
  Kl = qi(Ki.d(Jl, E([new O(null, 7, 5, P, [Ig, Xg, 0, lh, !0, S, "Joel"], null), new O(null, 7, 5, P, [Ig, Xg, 1, lh, !1, S, "Crow"], null), new O(null, 7, 5, P, [Ig, Xg, 2, lh, !0, S, "TV's Frank"], null), new O(null, 7, 5, P, [fh, Xg, 0, S, "SoL", Ig, 0], null), new O(null, 7, 5, P, [fh, Xg, 0, S, "SoL", Ig, 1], null), new O(null, 7, 5, P, [fh, Xg, 1, S, "Gizmonics", Ig, 2], null)], 0)));
  Ll = function() {
    function a(c, f) {
      var g = null;
      1 < arguments.length && (g = E(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, g);
    }
    function b(a, c) {
      return L.c(Ki, a, ud.a(Uk, c));
    }
    a.k = 1;
    a.f = function(a) {
      var c = z(a);
      a = A(a);
      return b(c, a);
    };
    a.d = b;
    return a;
  }();
  var a = R.b(10);
  Ml = function() {
    return Sf.a(a, Qb);
  };
  Nl = qi(Bk.d(E([wk(xk(Yi(th, new n(null, 2, [Ug, new x(null, "?id", "?id", -1640467629, null), Vg, new x(null, "?char-name", "?char-name", 380501756, null)], null), ch), new O(null, 1, 5, P, [Yi(Ig, new n(null, 2, [Xg, new x(null, "?id", "?id", -1640467629, null), S, new x(null, "?char-name", "?char-name", 380501756, null)], null), ch)], null))), wk(xk(Yi(Rg, new n(null, 2, [xh, new x(null, "?id", "?id", -1640467629, null), wh, new x(null, "?loc-name", "?loc-name", -1988178960, null)], null), ch), 
  new O(null, 1, 5, P, [Yi(fh, new n(null, 2, [Xg, new x(null, "?id", "?id", -1640467629, null), S, new x(null, "?loc-name", "?loc-name", -1988178960, null)], null), ch)], null))), wk(xk(Yi(sh, new n(null, 3, [yh, new x(null, "?human", "?human", 262744583, null), Vg, new x(null, "?char-name", "?char-name", 380501756, null), xh, new x(null, "?loc-id", "?loc-id", 1635080576, null)], null), ch), new O(null, 2, 5, P, [Yi(fh, new n(null, 2, [Ig, new x(null, "?char", "?char", -1579297330, null), Xg, new x(null, 
  "?loc-id", "?loc-id", 1635080576, null)], null), ch), Yi(Ig, new n(null, 3, [lh, new x(null, "?human", "?human", 262744583, null), S, new x(null, "?char-name", "?char-name", 380501756, null), Xg, new x(null, "?char", "?char", -1579297330, null)], null), ch)], null)))], 0)));
  Al = function() {
    function a(c, f, g, k) {
      var l = null;
      3 < arguments.length && (l = E(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, f, g, l);
    }
    function b(a, c, d, k) {
      k = I.c(k, 0, null);
      var l = lk.a ? lk.a(d, ek.b ? ek.b(d) : ek.call(null, d)) : lk.call(null, d, ek.b ? ek.b(d) : ek.call(null, d)), m;
      m = Hk(c, l);
      var q = G.a(Lk.b(m), Ik(l));
      m = Qk(m, q);
      m = ud.a(zk, Wi(m));
      c = new Vk(new Rk(l, m), c, d, Gh);
      d = xi.a(Dh.b(c), tf(jf(a)));
      if (!mc(d)) {
        throw Error([t("The rules and database define the same relation(s):"), t(d)].join(""));
      }
      return Sk.c(nh.b(c), a, k);
    }
    a.k = 3;
    a.f = function(a) {
      var c = z(a);
      a = D(a);
      var g = z(a);
      a = D(a);
      var k = z(a);
      a = A(a);
      return b(c, g, k, a);
    };
    a.d = b;
    return a;
  }();
  Ol = pi(function(a, b, e, f, g) {
    return e.c ? e.c(f, b, $b(g.c ? g.c(Rg, new n(null, 1, [wh, a], null), ch) : g.call(null, Rg, new n(null, 1, [wh, a], null), ch), new n(null, 1, [T, kh], null))) : e.call(null, f, b, $b(g.c ? g.c(Rg, new n(null, 1, [wh, a], null), ch) : g.call(null, Rg, new n(null, 1, [wh, a], null), ch), new n(null, 1, [T, kh], null)));
  }).call(null, new x(null, "?loc-name", "?loc-name", -1988178960, null), Nl, Al, Kl, Yi);
  pi(function(a, b) {
    return a.a ? a.a(wh, b) : a.call(null, wh, b);
  }).call(null, ud, Ol);
  Pl = qi(z(Wa(Ol)));
  Ql = pi(function(a, b, e, f, g, k, l, m) {
    return g.l ? g.l(k, f, $b(m.c ? m.c(sh, new n(null, 2, [Vg, e, xh, b], null), ch) : m.call(null, sh, new n(null, 2, [Vg, e, xh, b], null), ch), new n(null, 1, [T, kh], null)), new ue([a, xh.b(l)])) : g.call(null, k, f, $b(m.c ? m.c(sh, new n(null, 2, [Vg, e, xh, b], null), ch) : m.call(null, sh, new n(null, 2, [Vg, e, xh, b], null), ch), new n(null, 1, [T, kh], null)), new ue([a, xh.b(l)]));
  }).call(null, new x(null, "??id", "??id", -1638590796, null), new x(null, "??id", "??id", -1638590796, null), new x(null, "?char-name", "?char-name", 380501756, null), Nl, Al, Kl, Pl, Yi);
  var b = qi(null);
  Rl = function(a) {
    Rf(b, a);
    return cl.a(function() {
      return Rf(b, null);
    }, 1E3);
  };
  Sl = function() {
    function a(b) {
      var c = null;
      0 < arguments.length && (c = E(Array.prototype.slice.call(arguments, 0), 0));
      return d.call(this, c);
    }
    function d(a) {
      a = gl(a);
      var c = I.c(a, 0, null), c = uc(c) ? L.a(ff, c) : c, c = K.c(c, Pg, yg);
      a = I.c(a, 1, null);
      a = I.c(a, 0, null);
      return a.c ? a.c(c, b, function() {
        var a = document.createTextNode("");
        pi(function(a, b) {
          return a.nodeValue = "" + t(b);
        }).call(null, a, b);
        return a;
      }()) : a.call(null, c, b, function() {
        var a = document.createTextNode("");
        pi(function(a, b) {
          return a.nodeValue = "" + t(b);
        }).call(null, a, b);
        return a;
      }());
    }
    a.k = 0;
    a.f = function(a) {
      a = y(a);
      return d(a);
    };
    a.d = d;
    return a;
  }();
  Tl = function() {
    function a(c) {
      var f = null;
      0 < arguments.length && (f = E(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, f);
    }
    function b(a) {
      a = gl(a);
      a = I.c(a, 0, null);
      a = uc(a) ? L.a(ff, a) : a;
      var c = K.a(a, Jg);
      return Bl.c ? Bl.c(Sg, function(a) {
        return Rf(c, z(Al.l ? Al.l(Wa(Kl), Wa(Nl), $b(Yi(Rg, new n(null, 1, [xh, new x(null, "??id", "??id", -1638590796, null)], null), ch), new n(null, 1, [T, kh], null)), new n(null, 1, [new x(null, "??id", "??id", -1638590796, null), parseInt(jQuery(a.target).val())], null)) : Al.call(null, Wa(Kl), Wa(Nl), $b(Yi(Rg, new n(null, 1, [xh, new x(null, "??id", "??id", -1638590796, null)], null), ch), new n(null, 1, [T, kh], null)), new n(null, 1, [new x(null, "??id", "??id", -1638590796, null), parseInt(jQuery(a.target).val())], 
        null))));
      }, Il(Ol, function(a) {
        a = ri(nd, pi(function(a) {
          var b = uc(a) ? L.a(ff, a) : a;
          a = K.a(b, xh);
          b = K.a(b, wh);
          return new O(null, 2, 5, P, [a, b], null);
        }).call(null, a));
        var b = I.c(a, 0, null), c = I.c(a, 1, null);
        return yl.c ? yl.c(Vh, pi(function(a) {
          return new n(null, 1, [Zf, a], null);
        }).call(null, b), function() {
          var a = document.createTextNode("");
          pi(function(a, b) {
            return a.nodeValue = "" + t(b);
          }).call(null, a, c);
          return a;
        }()) : yl.call(null, Vh, pi(function(a) {
          return new n(null, 1, [Zf, a], null);
        }).call(null, b), function() {
          var a = document.createTextNode("");
          pi(function(a, b) {
            return a.nodeValue = "" + t(b);
          }).call(null, a, c);
          return a;
        }());
      })) : Bl.call(null, Sg, function(a) {
        return Rf(c, z(Al.l ? Al.l(Wa(Kl), Wa(Nl), $b(Yi(Rg, new n(null, 1, [xh, new x(null, "??id", "??id", -1638590796, null)], null), ch), new n(null, 1, [T, kh], null)), new n(null, 1, [new x(null, "??id", "??id", -1638590796, null), parseInt(jQuery(a.target).val())], null)) : Al.call(null, Wa(Kl), Wa(Nl), $b(Yi(Rg, new n(null, 1, [xh, new x(null, "??id", "??id", -1638590796, null)], null), ch), new n(null, 1, [T, kh], null)), new n(null, 1, [new x(null, "??id", "??id", -1638590796, null), parseInt(jQuery(a.target).val())], 
        null))));
      }, Il(Ol, function(a) {
        a = ri(nd, pi(function(a) {
          var b = uc(a) ? L.a(ff, a) : a;
          a = K.a(b, xh);
          b = K.a(b, wh);
          return new O(null, 2, 5, P, [a, b], null);
        }).call(null, a));
        var b = I.c(a, 0, null), c = I.c(a, 1, null);
        return yl.c ? yl.c(Vh, pi(function(a) {
          return new n(null, 1, [Zf, a], null);
        }).call(null, b), function() {
          var a = document.createTextNode("");
          pi(function(a, b) {
            return a.nodeValue = "" + t(b);
          }).call(null, a, c);
          return a;
        }()) : yl.call(null, Vh, pi(function(a) {
          return new n(null, 1, [Zf, a], null);
        }).call(null, b), function() {
          var a = document.createTextNode("");
          pi(function(a, b) {
            return a.nodeValue = "" + t(b);
          }).call(null, a, c);
          return a;
        }());
      }));
    }
    a.k = 0;
    a.f = function(a) {
      a = y(a);
      return b(a);
    };
    a.d = b;
    return a;
  }();
  wg(jl, Yg, function(a, b, e) {
    return jQuery(a).prop("disabled", !vc(e));
  });
  return El(new O(null, 9, 5, P, [function() {
    var a = ul.a ? ul.a(ih, "float:right; color:green;") : ul.call(null, ih, "float:right; color:green;");
    return Sl.d(E([a], 0));
  }(), tl.b ? tl.b("Bacwn + Hoplon \x3d \u2661") : tl.call(null, "Bacwn + Hoplon \x3d \u2661"), function() {
    var a = ol.c ? ol.c(Cg, "http://hoplon.io/", "Hoplon") : ol.call(null, Cg, "http://hoplon.io/", "Hoplon"), b = ol.c ? ol.c(Cg, "https://github.com/tailrecursion/bacwn", "bacwn") : ol.call(null, Cg, "https://github.com/tailrecursion/bacwn", "bacwn"), a = zl.n ? zl.n("This proof-of-concept demonstrates the use of ", a, " and ", b, " together to create a\n   ClojureScript web application.  A small bacwn database of application state is queried\n   using Datalog, reactively, to render the page content.") : 
    zl.call(null, "This proof-of-concept demonstrates the use of ", a, " and ", b, " together to create a\n   ClojureScript web application.  A small bacwn database of application state is queried\n   using Datalog, reactively, to render the page content."), b = ol.c ? ol.c(Cg, "https://gist.github.com/alandipert/8732704", "https://gist.github.com/alandipert/8732704") : ol.call(null, Cg, "https://gist.github.com/alandipert/8732704", "https://gist.github.com/alandipert/8732704"), b = zl.a ? zl.a("Source: ", 
    b) : zl.call(null, "Source: ", b), e = ol.c ? ol.c(Cg, "https://github.com/tailrecursion/hoplon-demos", "Hoplon Demos Repository.") : ol.call(null, Cg, "https://github.com/tailrecursion/hoplon-demos", "Hoplon Demos Repository."), e = zl.l ? zl.l(ih, "font-style:italic;", "Note: Once this prototype is cleaned up a bit, you'll be able to find it in the ", e) : zl.call(null, ih, "font-style:italic;", "Note: Once this prototype is cleaned up a bit, you'll be able to find it in the ", e);
    return ql.n ? ql.n(ih, "background-color: #eee;\n           padding: 10px;\n           border-radius: 15px;", a, b, e) : ql.call(null, ih, "background-color: #eee;\n           padding: 10px;\n           border-radius: 15px;", a, b, e);
  }(), vl.b ? vl.b("Location") : vl.call(null, "Location"), Tl.d(E([Jg, Pl], 0)), function() {
    return vl.b ? vl.b(function() {
      var a = document.createTextNode("");
      pi(function() {
        return function(a, b) {
          return a.nodeValue = [t("Characters at "), t(wh.b(b))].join("");
        };
      }(a)).call(null, a, Pl);
      return a;
    }()) : vl.call(null, function() {
      var a = document.createTextNode("");
      pi(function() {
        return function(a, b) {
          return a.nodeValue = [t("Characters at "), t(wh.b(b))].join("");
        };
      }(a)).call(null, a, Pl);
      return a;
    }());
  }(), function() {
    return Cl.b ? Cl.b(Il(Ql, function(a) {
      var b = ri(nd, pi(function(a) {
        var b = uc(a) ? L.a(ff, a) : a;
        a = K.a(b, yh);
        b = K.a(b, Vg);
        return new O(null, 2, 5, P, [a, b], null);
      }).call(null, a)), e = I.c(b, 0, null), f = I.c(b, 1, null);
      return Y.a ? Y.a(Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()), Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }())) : Y.call(null, Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()), Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()));
    })) : Cl.call(null, Il(Ql, function(a) {
      var b = ri(nd, pi(function(a) {
        var b = uc(a) ? L.a(ff, a) : a;
        a = K.a(b, yh);
        b = K.a(b, Vg);
        return new O(null, 2, 5, P, [a, b], null);
      }).call(null, a)), e = I.c(b, 0, null), f = I.c(b, 1, null);
      return Y.a ? Y.a(Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()), Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }())) : Y.call(null, Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = "" + t(b);
          };
        }(a, b, e, f)).call(null, a, f);
        return a;
      }()), Z.b ? Z.b(function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()) : Z.call(null, function() {
        var a = document.createTextNode("");
        pi(function() {
          return function(a, b) {
            return a.nodeValue = [t("\u00a0("), t(r(b) ? "not " : null), t("human)")].join("");
          };
        }(a, b, e, f)).call(null, a, e);
        return a;
      }()));
    }));
  }(), vl.b ? vl.b("Add Character") : vl.call(null, "Add Character"), function() {
    return function() {
      var a = qi(Wa(Pl)), b = qi(""), e = qi(!1), f = pi(function() {
        return function(a, b, c, d, e, f, g, k) {
          return g.b ? g.b(d.l ? d.l(e, c, $b(k.c ? k.c(th, new n(null, 1, [Vg, b], null), ch) : k.call(null, th, new n(null, 1, [Vg, b], null), ch), new n(null, 1, [T, kh], null)), new ue([a, f])) : d.call(null, e, c, $b(k.c ? k.c(th, new n(null, 1, [Vg, b], null), ch) : k.call(null, th, new n(null, 1, [Vg, b], null), ch), new n(null, 1, [T, kh], null)), new ue([a, f]))) : g.call(null, d.l ? d.l(e, c, $b(k.c ? k.c(th, new n(null, 1, [Vg, b], null), ch) : k.call(null, th, new n(null, 1, [Vg, b], 
          null), ch), new n(null, 1, [T, kh], null)), new ue([a, f])) : d.call(null, e, c, $b(k.c ? k.c(th, new n(null, 1, [Vg, b], null), ch) : k.call(null, th, new n(null, 1, [Vg, b], null), ch), new n(null, 1, [T, kh], null)), new ue([a, f])));
        };
      }(a, b, e)).call(null, new x(null, "??name", "??name", 224660516, null), new x(null, "??name", "??name", 224660516, null), Nl, Al, Kl, b, y, Yi), g = pi(function() {
        return function(a, b, c, d) {
          return(b.b ? b.b(a) : b.call(null, a)) && (d.b ? d.b(c) : d.call(null, c));
        };
      }(a, b, e, f)).call(null, b, y, f, r), k = "" + t(Xf.r());
      return sl.c ? sl.c(Kg, function(a, b, c, d, e, f) {
        return function() {
          if (p(Wa(e))) {
            var d = Ml();
            Sf.l(Kl, Ll, new n(null, 3, [Ug, d, Vg, Wa(b), yh, Wa(c)], null), mf.d(E([Wa(a), new n(null, 1, [bh, d], null)], 0)));
            Rf(b, "");
            document.getElementById(Tc(f)).value = "";
            return Rl("Character added.");
          }
          return null;
        };
      }(a, b, e, f, g, k), rl.c ? rl.c(wl.b ? wl.b("Character details") : wl.call(null, "Character details"), xl.c ? xl.c(Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))) : xl.call(null, Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? 
      W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))), pl.n ? pl.n(T, "submit", dh, g, "Add") : pl.call(null, T, "submit", dh, g, "Add")) : rl.call(null, wl.b ? wl.b("Character details") : wl.call(null, "Character details"), xl.c ? xl.c(Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : 
      Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))) : xl.call(null, Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? 
      W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))), pl.n ? pl.n(T, "submit", dh, g, "Add") : pl.call(null, T, "submit", dh, g, "Add"))) : sl.call(null, Kg, function(a, b, c, d, e, f) {
        return function() {
          if (p(Wa(e))) {
            var d = Ml();
            Sf.l(Kl, Ll, new n(null, 3, [Ug, d, Vg, Wa(b), yh, Wa(c)], null), mf.d(E([Wa(a), new n(null, 1, [bh, d], null)], 0)));
            Rf(b, "");
            document.getElementById(Tc(f)).value = "";
            return Rl("Character added.");
          }
          return null;
        };
      }(a, b, e, f, g, k), rl.c ? rl.c(wl.b ? wl.b("Character details") : wl.call(null, "Character details"), xl.c ? xl.c(Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))) : xl.call(null, Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? 
      W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))), pl.n ? pl.n(T, "submit", dh, g, "Add") : pl.call(null, T, "submit", dh, g, "Add")) : rl.call(null, wl.b ? wl.b("Character details") : wl.call(null, "Character details"), xl.c ? xl.c(Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : 
      Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))) : xl.call(null, Y.a ? Y.a(X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")) : Y.call(null, X.c ? X.c(U, "location", "Location") : X.call(null, U, "location", "Location"), Tl.d(E([Jg, a], 0)).call(null, S, "location")), Y.a ? Y.a(W.t ? 
      W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human") : Y.call(null, W.t ? W.t(T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)) : W.call(null, T, "checkbox", S, "human", Sg, function(a, b, c) {
        return function() {
          return Sf.a(c, r);
        };
      }(a, b, e, f, g, k)), "Human"), Y.c ? Y.c(X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken.")) : Y.call(null, X.c ? X.c(U, "name", "Name") : X.call(null, U, "name", "Name"), W.C ? W.C(Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text") : W.call(null, Ph, k, S, "name", Lg, function(a, b, c, d, e, f) {
        return function() {
          return Rf(b, Fl(f));
        };
      }(a, b, e, f, g, k), T, "text"), Z.n ? Z.n(ih, "color:red;", qh, f, "Sorry, this name is already taken.") : Z.call(null, ih, "color:red;", qh, f, "Sorry, this name is already taken."))), pl.n ? pl.n(T, "submit", dh, g, "Add") : pl.call(null, T, "submit", dh, g, "Add")));
    }();
  }()], null));
}
var Vl = ["tailrecursion", "hoplon", "app_pages", "G__4679", "hoploninit"], Wl = this;
Vl[0] in Wl || !Wl.execScript || Wl.execScript("var " + Vl[0]);
for (var Xl;Vl.length && (Xl = Vl.shift());) {
  Vl.length || void 0 === Ul ? Wl = Wl[Xl] ? Wl[Xl] : Wl[Xl] = {} : Wl[Xl] = Ul;
}
;