/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
var f;
function m(a) {
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
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a) {
  for (var b = 0, c = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  return b;
}
;function da(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function ea(a, b) {
  null != a && this.append.apply(this, arguments);
}
ea.prototype.Ba = "";
ea.prototype.append = function(a, b, c) {
  this.Ba += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ba += arguments[d];
    }
  }
  return this;
};
ea.prototype.toString = function() {
  return this.Ba;
};
var fa, ga = null;
function ha() {
  return new ia(null, 5, [ja, !0, ka, !0, la, !1, ma, !1, oa, null], null);
}
function q(a) {
  return null != a && !1 !== a;
}
function qa(a) {
  return q(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : t ? !1 : null;
}
function ra(a) {
  return null == a ? null : a.constructor;
}
function u(a, b) {
  var c = ra(b), c = q(q(c) ? c.Qb : c) ? c.Ob : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.Ob;
  return q(b) ? b : "" + v(a);
}
function w(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ta = {}, ua = {};
function va(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = va[m(null == a ? null : a)];
  if (!b && (b = va._, !b)) {
    throw u("ICounted.-count", a);
  }
  return b.call(null, a);
}
function wa(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = wa[m(null == a ? null : a)];
  if (!b && (b = wa._, !b)) {
    throw u("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var xa = {};
function ya(a, b) {
  if (a ? a.B : a) {
    return a.B(a, b);
  }
  var c;
  c = ya[m(null == a ? null : a)];
  if (!c && (c = ya._, !c)) {
    throw u("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var za = {}, x = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var h;
    h = x[m(null == a ? null : a)];
    if (!h && (h = x._, !h)) {
      throw u("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.o : a) {
      return a.o(a, b);
    }
    var c;
    c = x[m(null == a ? null : a)];
    if (!c && (c = x._, !c)) {
      throw u("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Aa = {};
function Ba(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Ba[m(null == a ? null : a)];
  if (!b && (b = Ba._, !b)) {
    throw u("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Ca(a) {
  if (a ? a.S : a) {
    return a.S(a);
  }
  var b;
  b = Ca[m(null == a ? null : a)];
  if (!b && (b = Ca._, !b)) {
    throw u("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Da = {}, Ea = {}, Fa = function() {
  function a(a, b, c) {
    if (a ? a.v : a) {
      return a.v(a, b, c);
    }
    var h;
    h = Fa[m(null == a ? null : a)];
    if (!h && (h = Fa._, !h)) {
      throw u("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.u : a) {
      return a.u(a, b);
    }
    var c;
    c = Fa[m(null == a ? null : a)];
    if (!c && (c = Fa._, !c)) {
      throw u("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Ga(a, b) {
  if (a ? a.Ga : a) {
    return a.Ga(a, b);
  }
  var c;
  c = Ga[m(null == a ? null : a)];
  if (!c && (c = Ga._, !c)) {
    throw u("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ha(a, b, c) {
  if (a ? a.la : a) {
    return a.la(a, b, c);
  }
  var d;
  d = Ha[m(null == a ? null : a)];
  if (!d && (d = Ha._, !d)) {
    throw u("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ia = {};
function Ja(a, b) {
  if (a ? a.Ha : a) {
    return a.Ha(a, b);
  }
  var c;
  c = Ja[m(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw u("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var La = {};
function Ma(a) {
  if (a ? a.Ia : a) {
    return a.Ia(a);
  }
  var b;
  b = Ma[m(null == a ? null : a)];
  if (!b && (b = Ma._, !b)) {
    throw u("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Na(a) {
  if (a ? a.Ya : a) {
    return a.Ya(a);
  }
  var b;
  b = Na[m(null == a ? null : a)];
  if (!b && (b = Na._, !b)) {
    throw u("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Oa = {};
function Pa(a, b) {
  if (a ? a.Lb : a) {
    return a.Lb(0, b);
  }
  var c;
  c = Pa[m(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw u("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Qa(a) {
  if (a ? a.na : a) {
    return a.na(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw u("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Ra(a) {
  if (a ? a.oa : a) {
    return a.oa(a);
  }
  var b;
  b = Ra[m(null == a ? null : a)];
  if (!b && (b = Ra._, !b)) {
    throw u("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Sa = {};
function Ta(a, b, c) {
  if (a ? a.za : a) {
    return a.za(a, b, c);
  }
  var d;
  d = Ta[m(null == a ? null : a)];
  if (!d && (d = Ta._, !d)) {
    throw u("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function y(a) {
  if (a ? a.Gb : a) {
    return a.state;
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw u("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ua = {};
function Va(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Va[m(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw u("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var Wa = {};
function Xa(a, b) {
  if (a ? a.F : a) {
    return a.F(a, b);
  }
  var c;
  c = Xa[m(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw u("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ya = {}, Za = function() {
  function a(a, b, c) {
    if (a ? a.N : a) {
      return a.N(a, b, c);
    }
    var h;
    h = Za[m(null == a ? null : a)];
    if (!h && (h = Za._, !h)) {
      throw u("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = Za[m(null == a ? null : a)];
    if (!c && (c = Za._, !c)) {
      throw u("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function $a(a, b) {
  if (a ? a.s : a) {
    return a.s(a, b);
  }
  var c;
  c = $a[m(null == a ? null : a)];
  if (!c && (c = $a._, !c)) {
    throw u("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function ab(a) {
  if (a ? a.t : a) {
    return a.t(a);
  }
  var b;
  b = ab[m(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw u("IHash.-hash", a);
  }
  return b.call(null, a);
}
var bb = {};
function cb(a) {
  if (a ? a.D : a) {
    return a.D(a);
  }
  var b;
  b = cb[m(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw u("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var db = {}, fb = {};
function gb(a) {
  if (a ? a.Ja : a) {
    return a.Ja(a);
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw u("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function hb(a, b) {
  if (a ? a.vb : a) {
    return a.vb(a, b);
  }
  var c;
  c = hb[m(null == a ? null : a)];
  if (!c && (c = hb._, !c)) {
    throw u("ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b);
}
function ib(a, b, c) {
  if (a ? a.wb : a) {
    return a.wb(a, b, c);
  }
  var d;
  d = ib[m(null == a ? null : a)];
  if (!d && (d = ib._, !d)) {
    throw u("ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c);
}
function jb(a, b) {
  if (a ? a.ub : a) {
    return a.ub(a, b);
  }
  var c;
  c = jb[m(null == a ? null : a)];
  if (!c && (c = jb._, !c)) {
    throw u("ISorted.-entry-key", a);
  }
  return c.call(null, a, b);
}
function kb(a) {
  if (a ? a.tb : a) {
    return a.tb(a);
  }
  var b;
  b = kb[m(null == a ? null : a)];
  if (!b && (b = kb._, !b)) {
    throw u("ISorted.-comparator", a);
  }
  return b.call(null, a);
}
function z(a, b) {
  if (a ? a.Nb : a) {
    return a.Nb(0, b);
  }
  var c;
  c = z[m(null == a ? null : a)];
  if (!c && (c = z._, !c)) {
    throw u("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var lb = {};
function mb(a, b, c) {
  if (a ? a.q : a) {
    return a.q(a, b, c);
  }
  var d;
  d = mb[m(null == a ? null : a)];
  if (!d && (d = mb._, !d)) {
    throw u("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function nb(a, b, c) {
  if (a ? a.yb : a) {
    return a.yb(a, b, c);
  }
  var d;
  d = nb[m(null == a ? null : a)];
  if (!d && (d = nb._, !d)) {
    throw u("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function ob(a, b, c) {
  if (a ? a.xb : a) {
    return a.xb(a, b, c);
  }
  var d;
  d = ob[m(null == a ? null : a)];
  if (!d && (d = ob._, !d)) {
    throw u("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function qb(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = qb[m(null == a ? null : a)];
  if (!b && (b = qb._, !b)) {
    throw u("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function rb(a, b) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b);
  }
  var c;
  c = rb[m(null == a ? null : a)];
  if (!c && (c = rb._, !c)) {
    throw u("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function sb(a) {
  if (a ? a.Na : a) {
    return a.Na(a);
  }
  var b;
  b = sb[m(null == a ? null : a)];
  if (!b && (b = sb._, !b)) {
    throw u("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function tb(a, b, c) {
  if (a ? a.La : a) {
    return a.La(a, b, c);
  }
  var d;
  d = tb[m(null == a ? null : a)];
  if (!d && (d = tb._, !d)) {
    throw u("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function ub(a, b, c) {
  if (a ? a.Mb : a) {
    return a.Mb(0, b, c);
  }
  var d;
  d = ub[m(null == a ? null : a)];
  if (!d && (d = ub._, !d)) {
    throw u("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function vb(a) {
  if (a ? a.Fb : a) {
    return a.Fb();
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw u("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.eb : a) {
    return a.eb(a);
  }
  var b;
  b = C[m(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw u("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function D(a) {
  if (a ? a.fb : a) {
    return a.fb(a);
  }
  var b;
  b = D[m(null == a ? null : a)];
  if (!b && (b = D._, !b)) {
    throw u("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function wb(a) {
  if (a ? a.cb : a) {
    return a.cb(a);
  }
  var b;
  b = wb[m(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw u("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function xb(a) {
  this.gc = a;
  this.n = 0;
  this.i = 1073741824;
}
xb.prototype.Nb = function(a, b) {
  return this.gc.append(b);
};
function yb(a) {
  var b = new ea;
  a.q(null, new xb(b), ha());
  return "" + v(b);
}
function zb(a, b) {
  if (q(E.a ? E.a(a, b) : E.call(null, a, b))) {
    return 0;
  }
  var c = qa(a.U);
  if (q(c ? b.U : c)) {
    return-1;
  }
  if (q(a.U)) {
    if (qa(b.U)) {
      return 1;
    }
    c = Ab.a ? Ab.a(a.U, b.U) : Ab.call(null, a.U, b.U);
    return 0 === c ? Ab.a ? Ab.a(a.name, b.name) : Ab.call(null, a.name, b.name) : c;
  }
  return Bb ? Ab.a ? Ab.a(a.name, b.name) : Ab.call(null, a.name, b.name) : null;
}
function Cb(a, b, c, d, e) {
  this.U = a;
  this.name = b;
  this.xa = c;
  this.ya = d;
  this.ba = e;
  this.i = 2154168321;
  this.n = 4096;
}
f = Cb.prototype;
f.q = function(a, b) {
  return z(b, this.xa);
};
f.t = function() {
  var a = this.ya;
  return null != a ? a : this.ya = a = Db.a ? Db.a(F.c ? F.c(this.U) : F.call(null, this.U), F.c ? F.c(this.name) : F.call(null, this.name)) : Db.call(null, F.c ? F.c(this.U) : F.call(null, this.U), F.c ? F.c(this.name) : F.call(null, this.name));
};
f.F = function(a, b) {
  return new Cb(this.U, this.name, this.xa, this.ya, b);
};
f.w = function() {
  return this.ba;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Fa.b(c, this, null);
      case 3:
        return Fa.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return Fa.b(a, this, null);
};
f.a = function(a, b) {
  return Fa.b(a, this, b);
};
f.s = function(a, b) {
  return b instanceof Cb ? this.xa === b.xa : !1;
};
f.toString = function() {
  return this.xa;
};
var Eb = function() {
  function a(a, b) {
    var c = null != a ? [v(a), v("/"), v(b)].join("") : b;
    return new Cb(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Cb ? a : c.a(null, a);
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
  c.c = b;
  c.a = a;
  return c;
}();
function G(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.pc)) {
    return a.D(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Fb(a, 0);
  }
  if (r(bb, a)) {
    return cb(a);
  }
  if (t) {
    throw Error([v(a), v("is not ISeqable")].join(""));
  }
  return null;
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Ka)) {
    return a.O(null);
  }
  a = G(a);
  return null == a ? null : Ba(a);
}
function I(a) {
  return null != a ? a && (a.i & 64 || a.Ka) ? a.S(null) : (a = G(a)) ? Ca(a) : J : J;
}
function K(a) {
  return null == a ? null : a && (a.i & 128 || a.Kb) ? a.$(null) : G(I(a));
}
var E = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || $a(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (K(e)) {
            a = d, d = H(e), e = K(e);
          } else {
            return b.a(d, H(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
ua["null"] = !0;
va["null"] = function() {
  return 0;
};
Date.prototype.s = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
$a.number = function(a, b) {
  return a === b;
};
Ua["function"] = !0;
Va["function"] = function() {
  return null;
};
ta["function"] = !0;
ab._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
function Gb(a) {
  return a + 1;
}
var Hb = function() {
  function a(a, b, c, d) {
    for (var l = va(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, x.a(a, d)) : b.call(null, c, x.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = va(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, x.a(a, l)) : b.call(null, c, x.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = va(a);
    if (0 === c) {
      return b.p ? b.p() : b.call(null);
    }
    for (var d = x.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, x.a(a, l)) : b.call(null, d, x.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Ib = function() {
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
      return b.p ? b.p() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function Jb(a) {
  return a ? a.i & 2 || a.Tb ? !0 : a.i ? !1 : r(ua, a) : r(ua, a);
}
function Kb(a) {
  return a ? a.i & 16 || a.Hb ? !0 : a.i ? !1 : r(za, a) : r(za, a);
}
function Fb(a, b) {
  this.d = a;
  this.m = b;
  this.n = 0;
  this.i = 166199550;
}
f = Fb.prototype;
f.t = function() {
  return Lb.c ? Lb.c(this) : Lb.call(null, this);
};
f.$ = function() {
  return this.m + 1 < this.d.length ? new Fb(this.d, this.m + 1) : null;
};
f.B = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
f.Ja = function() {
  var a = va(this);
  return 0 < a ? new Mb(this, a - 1, null) : null;
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Ib.l(this.d, b, this.d[this.m], this.m + 1);
};
f.N = function(a, b, c) {
  return Ib.l(this.d, b, c, this.m);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.d.length - this.m;
};
f.O = function() {
  return this.d[this.m];
};
f.S = function() {
  return this.m + 1 < this.d.length ? new Fb(this.d, this.m + 1) : J;
};
f.s = function(a, b) {
  return Nb.a ? Nb.a(this, b) : Nb.call(null, this, b);
};
f.o = function(a, b) {
  var c = b + this.m;
  return c < this.d.length ? this.d[c] : null;
};
f.X = function(a, b, c) {
  a = b + this.m;
  return a < this.d.length ? this.d[a] : c;
};
f.G = function() {
  return J;
};
var Ob = function() {
  function a(a, b) {
    return b < a.length ? new Fb(a, b) : null;
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
  c.c = b;
  c.a = a;
  return c;
}(), M = function() {
  function a(a, b) {
    return Ob.a(a, b);
  }
  function b(a) {
    return Ob.a(a, 0);
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
  c.c = b;
  c.a = a;
  return c;
}();
function Mb(a, b, c) {
  this.bb = a;
  this.m = b;
  this.g = c;
  this.n = 0;
  this.i = 32374862;
}
f = Mb.prototype;
f.t = function() {
  return Lb.c ? Lb.c(this) : Lb.call(null, this);
};
f.B = function(a, b) {
  return N.a ? N.a(b, this) : N.call(null, b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a ? Pb.a(b, this) : Pb.call(null, b, this);
};
f.N = function(a, b, c) {
  return Pb.b ? Pb.b(b, c, this) : Pb.call(null, b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.m + 1;
};
f.O = function() {
  return x.a(this.bb, this.m);
};
f.S = function() {
  return 0 < this.m ? new Mb(this.bb, this.m - 1, null) : null;
};
f.s = function(a, b) {
  return Nb.a ? Nb.a(this, b) : Nb.call(null, this, b);
};
f.F = function(a, b) {
  return new Mb(this.bb, this.m, b);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb.a ? Qb.a(J, this.g) : Qb.call(null, J, this.g);
};
$a._ = function(a, b) {
  return a === b;
};
var Rb = function() {
  function a(a, b) {
    return null != a ? ya(a, b) : ya(J, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (q(e)) {
          a = b.a(a, d), d = H(e), e = K(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}();
function O(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.Tb)) {
      a = a.I(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(ua, a)) {
            a = va(a);
          } else {
            if (t) {
              a: {
                a = G(a);
                for (var b = 0;;) {
                  if (Jb(a)) {
                    a = b + va(a);
                    break a;
                  }
                  a = K(a);
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
var Sb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return G(a) ? H(a) : c;
      }
      if (Kb(a)) {
        return x.b(a, b, c);
      }
      if (G(a)) {
        a = K(a), b -= 1;
      } else {
        return t ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (G(a)) {
          return H(a);
        }
        throw Error("Index out of bounds");
      }
      if (Kb(a)) {
        return x.a(a, b);
      }
      if (G(a)) {
        var c = K(a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (t) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.i & 16 || a.Hb)) {
        return a.X(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(za, a)) {
        return x.a(a, b);
      }
      if (t) {
        if (a ? a.i & 64 || a.Ka || (a.i ? 0 : r(Aa, a)) : r(Aa, a)) {
          return Sb.b(a, b, c);
        }
        throw Error([v("nth not supported on this type "), v(sa(ra(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.i & 16 || a.Hb)) {
      return a.o(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(za, a)) {
      return x.a(a, b);
    }
    if (t) {
      if (a ? a.i & 64 || a.Ka || (a.i ? 0 : r(Aa, a)) : r(Aa, a)) {
        return Sb.a(a, b);
      }
      throw Error([v("nth not supported on this type "), v(sa(ra(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Tb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.Wb) ? a.v(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Ea, a) ? Fa.b(a, b, c) : t ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.Wb) ? a.u(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Ea, a) ? Fa.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Q = function() {
  function a(a, b, c) {
    return null != a ? Ha(a, b, c) : Ub.a ? Ub.a([b], [c]) : Ub.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = M(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), q(l)) {
          d = H(l), e = H(K(l)), l = K(K(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.h = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, g);
      default:
        return c.e(b, e, g, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.h = c.h;
  b.b = a;
  b.e = c.e;
  return b;
}(), Vb = function() {
  function a(a, b) {
    return null == a ? null : Ja(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = H(e), e = K(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Wb(a) {
  var b = "function" == m(a);
  return b ? b : a ? q(q(null) ? null : a.Sb) ? !0 : a.Pb ? !1 : r(ta, a) : r(ta, a);
}
var Qb = function Xb(b, c) {
  return Wb(b) && !(b ? b.i & 262144 || b.tc || (b.i ? 0 : r(Wa, b)) : r(Wa, b)) ? Xb(function() {
    "undefined" === typeof fa && (fa = function(b, c, g, h) {
      this.g = b;
      this.Ra = c;
      this.ic = g;
      this.ec = h;
      this.n = 0;
      this.i = 393217;
    }, fa.Qb = !0, fa.Ob = "cljs.core/t8154", fa.ac = function(b) {
      return z(b, "cljs.core/t8154");
    }, fa.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return Yb.a ? Yb.a(b.Ra, d) : Yb.call(null, b.Ra, d);
      }
      b.k = 1;
      b.h = function(b) {
        var d = H(b);
        b = I(b);
        return c(d, b);
      };
      b.e = c;
      return b;
    }(), fa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(w(c)));
    }, fa.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return Yb.a ? Yb.a(self__.Ra, b) : Yb.call(null, self__.Ra, b);
      }
      b.k = 0;
      b.h = function(b) {
        b = G(b);
        return c(b);
      };
      b.e = c;
      return b;
    }(), fa.prototype.Sb = !0, fa.prototype.w = function() {
      return this.ec;
    }, fa.prototype.F = function(b, c) {
      return new fa(this.g, this.Ra, this.ic, c);
    });
    return new fa(c, b, Xb, null);
  }(), c) : null == b ? null : Xa(b, c);
};
function Zb(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.Yb || (a.i ? 0 : r(Ua, a)) : r(Ua, a) : b) ? Va(a) : null;
}
function $b(a) {
  return null == a ? null : Qa(a);
}
var ac = function() {
  function a(a, b) {
    return null == a ? null : Pa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (q(e)) {
          d = H(e), e = K(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return b;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.e = c.e;
  return b;
}(), bc = {}, cc = 0;
function F(a) {
  if (a && (a.i & 4194304 || a.mc)) {
    a = a.t(null);
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
            255 < cc && (bc = {}, cc = 0);
            var b = bc[a];
            "number" !== typeof b && (b = ca(a), bc[a] = b, cc += 1);
            a = b;
          } else {
            a = null == a ? 0 : t ? ab(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function dc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.nc ? !0 : a.i ? !1 : r(Ia, a) : r(Ia, a);
}
function ec(a) {
  return a ? a.i & 16384 || a.sc ? !0 : a.i ? !1 : r(Sa, a) : r(Sa, a);
}
function R(a) {
  return a ? a.n & 512 || a.jc ? !0 : !1 : !1;
}
function fc(a) {
  var b = [];
  da(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function gc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var hc = {};
function ic(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Ka ? !0 : a.i ? !1 : r(Aa, a) : r(Aa, a);
}
function jc(a) {
  return q(a) ? !0 : !1;
}
function kc(a, b) {
  return Tb.b(a, b, hc) === hc ? !1 : !0;
}
function Ab(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ra(a) === ra(b)) {
    return a && (a.n & 2048 || a.Wa) ? a.Xa(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (t) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var lc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Ab(P.a(a, h), P.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var g = O(a), h = O(b);
    return g < h ? -1 : g > h ? 1 : t ? c.l(a, b, g, 0) : null;
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), Pb = function() {
  function a(a, b, c) {
    for (c = G(c);;) {
      if (c) {
        b = a.a ? a.a(b, H(c)) : a.call(null, b, H(c)), c = K(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = G(b);
    return c ? mc.b ? mc.b(a, H(c), K(c)) : mc.call(null, a, H(c), K(c)) : a.p ? a.p() : a.call(null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), mc = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.$b) ? c.N(null, a, b) : c instanceof Array ? Ib.b(c, a, b) : "string" === typeof c ? Ib.b(c, a, b) : r(Ya, c) ? Za.b(c, a, b) : t ? Pb.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.$b) ? b.M(null, a) : b instanceof Array ? Ib.a(b, a) : "string" === typeof b ? Ib.a(b, a) : r(Ya, b) ? Za.a(b, a) : t ? Pb.a(a, b) : null;
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), nc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a < c) {
          if (K(d)) {
            a = c, c = H(d), d = K(d);
          } else {
            return c < H(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a < d;
      default:
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.h = b.h;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a < b;
  };
  a.e = b.e;
  return a;
}(), oc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a <= c) {
          if (K(d)) {
            a = c, c = H(d), d = K(d);
          } else {
            return c <= H(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a <= d;
      default:
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.h = b.h;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a <= b;
  };
  a.e = b.e;
  return a;
}(), pc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (K(d)) {
            a = c, c = H(d), d = K(d);
          } else {
            return c > H(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a > d;
      default:
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.h = b.h;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a > b;
  };
  a.e = b.e;
  return a;
}(), qc = function() {
  var a = null, b = function() {
    function a(c, g, h) {
      var k = null;
      2 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, g, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a >= c) {
          if (K(d)) {
            a = c, c = H(d), d = K(d);
          } else {
            return c >= H(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, h, a);
    };
    a.e = b;
    return a;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a >= d;
      default:
        return b.e(a, d, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.k = 2;
  a.h = b.h;
  a.c = function() {
    return!0;
  };
  a.a = function(a, b) {
    return a >= b;
  };
  a.e = b.e;
  return a;
}();
function rc(a) {
  return a - 1;
}
function sc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
function tc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function uc(a) {
  var b = 1;
  for (a = G(a);;) {
    if (a && 0 < b) {
      b -= 1, a = K(a);
    } else {
      return a;
    }
  }
}
var v = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ea(b.c(a)), l = d;;) {
        if (q(l)) {
          e = e.append(b.c(H(l))), l = K(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.h = function(a) {
      var b = H(a);
      a = I(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.p = function() {
    return "";
  };
  b.c = a;
  b.e = c.e;
  return b;
}(), vc = function() {
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
  a.b = function(a, c, d) {
    return a.substring(c, d);
  };
  return a;
}();
function Nb(a, b) {
  return jc((b ? b.i & 16777216 || b.qc || (b.i ? 0 : r(db, b)) : r(db, b)) ? function() {
    for (var c = G(a), d = G(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (E.a(H(c), H(d))) {
        c = K(c), d = K(d);
      } else {
        return t ? !1 : null;
      }
    }
  }() : null);
}
function Db(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Lb(a) {
  if (G(a)) {
    var b = F(H(a));
    for (a = K(a);;) {
      if (null == a) {
        return b;
      }
      b = Db(b, F(H(a)));
      a = K(a);
    }
  } else {
    return 0;
  }
}
function wc(a) {
  var b = 0;
  for (a = G(a);;) {
    if (a) {
      var c = H(a), b = (b + (F(xc.c ? xc.c(c) : xc.call(null, c)) ^ F(yc.c ? yc.c(c) : yc.call(null, c)))) % 4503599627370496;
      a = K(a);
    } else {
      return b;
    }
  }
}
function zc(a, b, c, d, e) {
  this.g = a;
  this.first = b;
  this.ra = c;
  this.count = d;
  this.j = e;
  this.n = 0;
  this.i = 65937646;
}
f = zc.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.$ = function() {
  return 1 === this.count ? null : this.ra;
};
f.B = function(a, b) {
  return new zc(this.g, b, this, this.count + 1, null);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return this.count;
};
f.na = function() {
  return this.first;
};
f.oa = function() {
  return Ca(this);
};
f.O = function() {
  return this.first;
};
f.S = function() {
  return 1 === this.count ? J : this.ra;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new zc(b, this.first, this.ra, this.count, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return J;
};
function Ac(a) {
  this.g = a;
  this.n = 0;
  this.i = 65937614;
}
f = Ac.prototype;
f.t = function() {
  return 0;
};
f.$ = function() {
  return null;
};
f.B = function(a, b) {
  return new zc(this.g, b, null, 1, null);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return null;
};
f.I = function() {
  return 0;
};
f.na = function() {
  return null;
};
f.oa = function() {
  throw Error("Can't pop empty list");
};
f.O = function() {
  return null;
};
f.S = function() {
  return J;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Ac(b);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return this;
};
var J = new Ac(null);
function Bc(a) {
  return gb(a);
}
function Cc(a) {
  return(a ? a.i & 134217728 || a.oc || (a.i ? 0 : r(fb, a)) : r(fb, a)) ? gb(a) : mc.b(Rb, J, a);
}
var Dc = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Fb && 0 === a.m) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.O(null)), a = a.$(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = J;;) {
      if (0 < a) {
        var g = a - 1, e = e.B(null, b[a - 1]);
        a = g;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ec(a, b, c, d) {
  this.g = a;
  this.first = b;
  this.ra = c;
  this.j = d;
  this.n = 0;
  this.i = 65929452;
}
f = Ec.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.$ = function() {
  return null == this.ra ? null : G(this.ra);
};
f.B = function(a, b) {
  return new Ec(null, b, this, this.j);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.first;
};
f.S = function() {
  return null == this.ra ? J : this.ra;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Ec(b, this.first, this.ra, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
function N(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.Ka)) ? new Ec(null, a, b, null) : new Ec(null, a, G(b), null);
}
function S(a, b, c, d) {
  this.U = a;
  this.name = b;
  this.ua = c;
  this.ya = d;
  this.i = 2153775105;
  this.n = 4096;
}
f = S.prototype;
f.q = function(a, b) {
  return z(b, [v(":"), v(this.ua)].join(""));
};
f.t = function() {
  null == this.ya && (this.ya = Db(F(this.U), F(this.name)) + 2654435769);
  return this.ya;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Tb.a(c, this);
      case 3:
        return Tb.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return Tb.a(a, this);
};
f.a = function(a, b) {
  return Tb.b(a, this, b);
};
f.s = function(a, b) {
  return b instanceof S ? this.ua === b.ua : !1;
};
f.toString = function() {
  return[v(":"), v(this.ua)].join("");
};
function Fc(a) {
  return a instanceof S;
}
var Hc = function() {
  function a(a, b) {
    return new S(a, b, [v(q(a) ? [v(a), v("/")].join("") : null), v(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof S) {
      return a;
    }
    if (a instanceof Cb) {
      var b;
      if (a && (a.n & 4096 || a.Zb)) {
        b = a.U;
      } else {
        throw Error([v("Doesn't support namespace: "), v(a)].join(""));
      }
      return new S(b, Gc.c ? Gc.c(a) : Gc.call(null, a), a.xa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new S(b[0], b[1], a, null) : new S(null, b[0], a, null)) : null;
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
  c.c = b;
  c.a = a;
  return c;
}();
function U(a, b, c, d) {
  this.g = a;
  this.fn = b;
  this.H = c;
  this.j = d;
  this.n = 0;
  this.i = 32374988;
}
f = U.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.$ = function() {
  cb(this);
  return null == this.H ? null : K(this.H);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
function Ic(a) {
  null != a.fn && (a.H = a.fn.p ? a.fn.p() : a.fn.call(null), a.fn = null);
  return a.H;
}
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  Ic(this);
  if (null == this.H) {
    return null;
  }
  for (var a = this.H;;) {
    if (a instanceof U) {
      a = Ic(a);
    } else {
      return this.H = a, G(this.H);
    }
  }
};
f.O = function() {
  cb(this);
  return null == this.H ? null : H(this.H);
};
f.S = function() {
  cb(this);
  return null != this.H ? I(this.H) : J;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new U(b, this.fn, this.H, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
function Jc(a, b) {
  this.ab = a;
  this.end = b;
  this.n = 0;
  this.i = 2;
}
Jc.prototype.I = function() {
  return this.end;
};
Jc.prototype.add = function(a) {
  this.ab[this.end] = a;
  return this.end += 1;
};
Jc.prototype.Q = function() {
  var a = new Kc(this.ab, 0, this.end);
  this.ab = null;
  return a;
};
function Lc(a) {
  return new Jc(Array(a), 0);
}
function Kc(a, b, c) {
  this.d = a;
  this.off = b;
  this.end = c;
  this.n = 0;
  this.i = 524306;
}
f = Kc.prototype;
f.M = function(a, b) {
  return Ib.l(this.d, b, this.d[this.off], this.off + 1);
};
f.N = function(a, b, c) {
  return Ib.l(this.d, b, c, this.off);
};
f.Fb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Kc(this.d, this.off + 1, this.end);
};
f.o = function(a, b) {
  return this.d[this.off + b];
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.d[this.off + b] : c;
};
f.I = function() {
  return this.end - this.off;
};
var Mc = function() {
  function a(a, b, c) {
    return new Kc(a, b, c);
  }
  function b(a, b) {
    return new Kc(a, b, a.length);
  }
  function c(a) {
    return new Kc(a, 0, a.length);
  }
  var d = null, d = function(d, g, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Nc(a, b, c, d) {
  this.Q = a;
  this.ga = b;
  this.g = c;
  this.j = d;
  this.i = 31850732;
  this.n = 1536;
}
f = Nc.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.$ = function() {
  if (1 < va(this.Q)) {
    return new Nc(vb(this.Q), this.ga, this.g, null);
  }
  var a = cb(this.ga);
  return null == a ? null : a;
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return x.a(this.Q, 0);
};
f.S = function() {
  return 1 < va(this.Q) ? new Nc(vb(this.Q), this.ga, this.g, null) : null == this.ga ? J : this.ga;
};
f.cb = function() {
  return null == this.ga ? null : this.ga;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Nc(this.Q, this.ga, b, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
f.eb = function() {
  return this.Q;
};
f.fb = function() {
  return null == this.ga ? J : this.ga;
};
function Oc(a, b) {
  return 0 === va(a) ? b : new Nc(a, b, null, null);
}
function Pc(a) {
  for (var b = [];;) {
    if (G(a)) {
      b.push(H(a)), a = K(a);
    } else {
      return b;
    }
  }
}
function Qc(a, b) {
  if (Jb(a)) {
    return O(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && G(c)) {
      c = K(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Sc = function Rc(b) {
  return null == b ? null : null == K(b) ? G(H(b)) : t ? N(H(b), Rc(K(b))) : null;
}, Tc = function() {
  function a(a, b) {
    return new U(null, function() {
      var c = G(a);
      return c ? R(c) ? Oc(C(c), d.a(D(c), b)) : N(H(c), d.a(I(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new U(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new U(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var g = null;
      2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, g);
    }
    function b(a, c, e) {
      return function s(a, b) {
        return new U(null, function() {
          var c = G(a);
          return c ? R(c) ? Oc(C(c), s(D(c), b)) : N(H(c), s(I(c), b)) : q(b) ? s(H(b), K(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.e(d, h, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.h = e.h;
  d.p = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), Uc = function() {
  function a(a, b, c, d) {
    return N(a, N(b, N(c, d)));
  }
  function b(a, b, c) {
    return N(a, N(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, p) {
      var s = null;
      4 < arguments.length && (s = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, s);
    }
    function b(a, c, d, e, g) {
      return N(a, N(c, N(d, N(e, Sc(g)))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var p = H(a);
      a = I(a);
      return b(c, d, e, p, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k, l) {
    switch(arguments.length) {
      case 1:
        return G(c);
      case 2:
        return N(c, g);
      case 3:
        return b.call(this, c, g, h);
      case 4:
        return a.call(this, c, g, h, k);
      default:
        return d.e(c, g, h, k, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.h = d.h;
  c.c = function(a) {
    return G(a);
  };
  c.a = function(a, b) {
    return N(a, b);
  };
  c.b = b;
  c.l = a;
  c.e = d.e;
  return c;
}();
function Vc(a, b, c) {
  var d = G(c);
  if (0 === b) {
    return a.p ? a.p() : a.call(null);
  }
  c = Ba(d);
  var e = Ca(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = Ba(e), g = Ca(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Ba(g), h = Ca(g);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var g = Ba(h), k = Ca(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, g) : a.l ? a.l(c, d, e, g) : a.call(null, c, d, e, g);
  }
  h = Ba(k);
  k = Ca(k);
  if (5 === b) {
    return a.C ? a.C(c, d, e, g, h) : a.C ? a.C(c, d, e, g, h) : a.call(null, c, d, e, g, h);
  }
  a = Ba(k);
  var l = Ca(k);
  if (6 === b) {
    return a.ma ? a.ma(c, d, e, g, h, a) : a.ma ? a.ma(c, d, e, g, h, a) : a.call(null, c, d, e, g, h, a);
  }
  var k = Ba(l), n = Ca(l);
  if (7 === b) {
    return a.Da ? a.Da(c, d, e, g, h, a, k) : a.Da ? a.Da(c, d, e, g, h, a, k) : a.call(null, c, d, e, g, h, a, k);
  }
  var l = Ba(n), p = Ca(n);
  if (8 === b) {
    return a.rb ? a.rb(c, d, e, g, h, a, k, l) : a.rb ? a.rb(c, d, e, g, h, a, k, l) : a.call(null, c, d, e, g, h, a, k, l);
  }
  var n = Ba(p), s = Ca(p);
  if (9 === b) {
    return a.sb ? a.sb(c, d, e, g, h, a, k, l, n) : a.sb ? a.sb(c, d, e, g, h, a, k, l, n) : a.call(null, c, d, e, g, h, a, k, l, n);
  }
  var p = Ba(s), A = Ca(s);
  if (10 === b) {
    return a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p) : a.gb ? a.gb(c, d, e, g, h, a, k, l, n, p) : a.call(null, c, d, e, g, h, a, k, l, n, p);
  }
  var s = Ba(A), B = Ca(A);
  if (11 === b) {
    return a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, s) : a.hb ? a.hb(c, d, e, g, h, a, k, l, n, p, s) : a.call(null, c, d, e, g, h, a, k, l, n, p, s);
  }
  var A = Ba(B), L = Ca(B);
  if (12 === b) {
    return a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, s, A) : a.ib ? a.ib(c, d, e, g, h, a, k, l, n, p, s, A) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A);
  }
  var B = Ba(L), T = Ca(L);
  if (13 === b) {
    return a.jb ? a.jb(c, d, e, g, h, a, k, l, n, p, s, A, B) : a.jb ? a.jb(c, d, e, g, h, a, k, l, n, p, s, A, B) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B);
  }
  var L = Ba(T), pa = Ca(T);
  if (14 === b) {
    return a.kb ? a.kb(c, d, e, g, h, a, k, l, n, p, s, A, B, L) : a.kb ? a.kb(c, d, e, g, h, a, k, l, n, p, s, A, B, L) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L);
  }
  var T = Ba(pa), na = Ca(pa);
  if (15 === b) {
    return a.lb ? a.lb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T) : a.lb ? a.lb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T);
  }
  var pa = Ba(na), Ka = Ca(na);
  if (16 === b) {
    return a.mb ? a.mb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa) : a.mb ? a.mb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa);
  }
  var na = Ba(Ka), eb = Ca(Ka);
  if (17 === b) {
    return a.nb ? a.nb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na) : a.nb ? a.nb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na);
  }
  var Ka = Ba(eb), pb = Ca(eb);
  if (18 === b) {
    return a.ob ? a.ob(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka) : a.ob ? a.ob(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka);
  }
  eb = Ba(pb);
  pb = Ca(pb);
  if (19 === b) {
    return a.pb ? a.pb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb) : a.pb ? a.pb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb);
  }
  var Od = Ba(pb);
  Ca(pb);
  if (20 === b) {
    return a.qb ? a.qb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb, Od) : a.qb ? a.qb(c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb, Od) : a.call(null, c, d, e, g, h, a, k, l, n, p, s, A, B, L, T, pa, na, Ka, eb, Od);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var Yb = function() {
  function a(a, b, c, d, e) {
    b = Uc.l(b, c, d, e);
    c = a.k;
    return a.h ? (d = Qc(b, c + 1), d <= c ? Vc(a, d, b) : a.h(b)) : a.apply(a, Pc(b));
  }
  function b(a, b, c, d) {
    b = Uc.b(b, c, d);
    c = a.k;
    return a.h ? (d = Qc(b, c + 1), d <= c ? Vc(a, d, b) : a.h(b)) : a.apply(a, Pc(b));
  }
  function c(a, b, c) {
    b = Uc.a(b, c);
    c = a.k;
    if (a.h) {
      var d = Qc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.h(b);
    }
    return a.apply(a, Pc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.h) {
      var d = Qc(b, c + 1);
      return d <= c ? Vc(a, d, b) : a.h(b);
    }
    return a.apply(a, Pc(b));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, B) {
      var L = null;
      5 < arguments.length && (L = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, L);
    }
    function b(a, c, d, e, g, h) {
      c = N(c, N(d, N(e, N(g, Sc(h)))));
      d = a.k;
      return a.h ? (e = Qc(c, d + 1), e <= d ? Vc(a, e, c) : a.h(c)) : a.apply(a, Pc(c));
    }
    a.k = 5;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var g = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.h = g.h;
  e.a = d;
  e.b = c;
  e.l = b;
  e.C = a;
  e.e = g.e;
  return e;
}(), Wc = function() {
  function a(a, b) {
    return!E.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return qa(Yb.l(E, a, c, d));
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function Xc(a, b) {
  for (;;) {
    if (null == G(b)) {
      return!0;
    }
    if (q(a.c ? a.c(H(b)) : a.call(null, H(b)))) {
      var c = a, d = K(b);
      a = c;
      b = d;
    } else {
      return t ? !1 : null;
    }
  }
}
function Yc(a) {
  return a;
}
var Zc = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var g = null;
          3 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, g);
        }
        function k(d, l, n, p) {
          return a.c ? a.c(b.c ? b.c(Yb.C(c, d, l, n, p)) : b.call(null, Yb.C(c, d, l, n, p))) : a.call(null, b.c ? b.c(Yb.C(c, d, l, n, p)) : b.call(null, Yb.C(c, d, l, n, p)));
        }
        d.k = 3;
        d.h = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var d = H(a);
          a = I(a);
          return k(b, c, d, a);
        };
        d.e = k;
        return d;
      }(), d = function(d, k, s, A) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.c ? b.c(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null))) : a.call(null, b.c ? b.c(c.p ? c.p() : c.call(null)) : b.call(null, c.p ? c.p() : c.call(null)));
          case 1:
            return a.c ? a.c(b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d))) : a.call(null, b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d)));
          case 2:
            return a.c ? a.c(b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.c ? a.c(b.c ? b.c(c.b ? c.b(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.b ? c.b(d, k, s) : c.call(null, d, k, s))) : a.call(null, b.c ? b.c(c.b ? c.b(d, k, s) : c.call(null, d, k, s)) : b.call(null, c.b ? c.b(d, k, s) : c.call(null, d, k, s)));
          default:
            return l.e(d, k, s, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.k = 3;
      d.h = l.h;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, g) {
          var h = null;
          3 < arguments.length && (h = M(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h);
        }
        function d(c, h, k, l) {
          return a.c ? a.c(Yb.C(b, c, h, k, l)) : a.call(null, Yb.C(b, c, h, k, l));
        }
        c.k = 3;
        c.h = function(a) {
          var b = H(a);
          a = K(a);
          var c = H(a);
          a = K(a);
          var e = H(a);
          a = I(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, h, p, s) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.p ? b.p() : b.call(null)) : a.call(null, b.p ? b.p() : b.call(null));
          case 1:
            return a.c ? a.c(b.c ? b.c(c) : b.call(null, c)) : a.call(null, b.c ? b.c(c) : b.call(null, c));
          case 2:
            return a.c ? a.c(b.a ? b.a(c, h) : b.call(null, c, h)) : a.call(null, b.a ? b.a(c, h) : b.call(null, c, h));
          case 3:
            return a.c ? a.c(b.b ? b.b(c, h, p) : b.call(null, c, h, p)) : a.call(null, b.b ? b.b(c, h, p) : b.call(null, c, h, p));
          default:
            return d.e(c, h, p, M(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.k = 3;
      c.h = d.h;
      return c;
    }();
  }
  var c = null, d = function() {
    function a(c, d, e, n) {
      var p = null;
      3 < arguments.length && (p = M(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, p);
    }
    function b(a, c, d, e) {
      var g = Cc(Uc.l(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = Yb.a(H(g), a);
          for (var c = K(g);;) {
            if (c) {
              a = H(c).call(null, a), c = K(c);
            } else {
              return a;
            }
          }
        }
        a.k = 0;
        a.h = function(a) {
          a = G(a);
          return b(a);
        };
        a.e = b;
        return a;
      }();
    }
    a.k = 3;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = I(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, g, h, k) {
    switch(arguments.length) {
      case 0:
        return Yc;
      case 1:
        return c;
      case 2:
        return b.call(this, c, g);
      case 3:
        return a.call(this, c, g, h);
      default:
        return d.e(c, g, h, M(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.h = d.h;
  c.p = function() {
    return Yc;
  };
  c.c = function(a) {
    return a;
  };
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c;
}();
function $c(a, b) {
  return function d(b, g) {
    return new U(null, function() {
      var h = G(g);
      if (h) {
        if (R(h)) {
          for (var k = C(h), l = O(k), n = Lc(l), p = 0;;) {
            if (p < l) {
              var s = a.a ? a.a(b + p, x.a(k, p)) : a.call(null, b + p, x.a(k, p));
              n.add(s);
              p += 1;
            } else {
              break;
            }
          }
          return Oc(n.Q(), d(b + l, D(h)));
        }
        return N(a.a ? a.a(b, H(h)) : a.call(null, b, H(h)), d(b + 1, I(h)));
      }
      return null;
    }, null, null);
  }(0, b);
}
var bd = function ad(b, c) {
  return new U(null, function() {
    var d = G(c);
    if (d) {
      if (R(d)) {
        for (var e = C(d), g = O(e), h = Lc(g), k = 0;;) {
          if (k < g) {
            var l = b.c ? b.c(x.a(e, k)) : b.call(null, x.a(e, k));
            null != l && h.add(l);
            k += 1;
          } else {
            break;
          }
        }
        return Oc(h.Q(), ad(b, D(d)));
      }
      e = b.c ? b.c(H(d)) : b.call(null, H(d));
      return null == e ? ad(b, I(d)) : N(e, ad(b, I(d)));
    }
    return null;
  }, null, null);
}, cd = function() {
  function a(a, b, c, e) {
    return new U(null, function() {
      var n = G(b), p = G(c), s = G(e);
      return n && p && s ? N(a.b ? a.b(H(n), H(p), H(s)) : a.call(null, H(n), H(p), H(s)), d.l(a, I(n), I(p), I(s))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var e = G(b), n = G(c);
      return e && n ? N(a.a ? a.a(H(e), H(n)) : a.call(null, H(e), H(n)), d.b(a, I(e), I(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new U(null, function() {
      var c = G(b);
      if (c) {
        if (R(c)) {
          for (var e = C(c), n = O(e), p = Lc(n), s = 0;;) {
            if (s < n) {
              var A = a.c ? a.c(x.a(e, s)) : a.call(null, x.a(e, s));
              p.add(A);
              s += 1;
            } else {
              break;
            }
          }
          return Oc(p.Q(), d.a(a, D(c)));
        }
        return N(a.c ? a.c(H(c)) : a.call(null, H(c)), d.a(a, I(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, g, s) {
      var A = null;
      4 < arguments.length && (A = M(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, g, A);
    }
    function b(a, c, e, g, h) {
      return d.a(function(b) {
        return Yb.a(a, b);
      }, function B(a) {
        return new U(null, function() {
          var b = d.a(G, a);
          return Xc(Yc, b) ? N(d.a(H, b), B(d.a(I, b))) : null;
        }, null, null);
      }(Rb.e(h, g, M([e, c], 0))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var g = H(a);
      a = I(a);
      return b(c, d, e, g, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, h, k, l, n) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.e(d, h, k, l, M(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), ed = function dd(b, c) {
  return new U(null, function() {
    if (0 < b) {
      var d = G(c);
      return d ? N(H(d), dd(b - 1, I(d))) : null;
    }
    return null;
  }, null, null);
};
function fd(a, b) {
  return new U(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = G(d), 0 < c && d) {
          c -= 1, d = I(d);
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
function gd(a, b) {
  return new U(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        var d = G(d), e;
        e = (e = d) ? c.c ? c.c(H(d)) : c.call(null, H(d)) : e;
        if (q(e)) {
          d = I(d);
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
var hd = function() {
  function a(a, b) {
    return ed(a, c.c(b));
  }
  function b(a) {
    return new U(null, function() {
      return N(a, c.c(a));
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
  c.c = b;
  c.a = a;
  return c;
}();
function id(a) {
  return function c(a, e) {
    return new U(null, function() {
      var g = G(a);
      return g ? N(H(g), c(I(g), e)) : G(e) ? c(H(e), I(e)) : null;
    }, null, null);
  }(null, a);
}
var jd = function() {
  function a(a, b) {
    return id(cd.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = M(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return id(Yb.l(cd, a, c, d));
    }
    a.k = 2;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, g) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, M(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.e = c.e;
  return b;
}(), ld = function kd(b, c) {
  return new U(null, function() {
    var d = G(c);
    if (d) {
      if (R(d)) {
        for (var e = C(d), g = O(e), h = Lc(g), k = 0;;) {
          if (k < g) {
            if (q(b.c ? b.c(x.a(e, k)) : b.call(null, x.a(e, k)))) {
              var l = x.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Oc(h.Q(), kd(b, D(d)));
      }
      e = H(d);
      d = I(d);
      return q(b.c ? b.c(e) : b.call(null, e)) ? N(e, kd(b, d)) : kd(b, d);
    }
    return null;
  }, null, null);
};
function md(a, b) {
  var c;
  null != a ? a && (a.n & 4 || a.lc) ? (c = mc.b(rb, qb(a), b), c = sb(c)) : c = mc.b(ya, a, b) : c = mc.b(Rb, J, b);
  return c;
}
var nd = function() {
  function a(a, b, c, k) {
    return new U(null, function() {
      var l = G(k);
      if (l) {
        var n = ed(a, l);
        return a === O(n) ? N(n, d.l(a, b, c, fd(b, l))) : ya(J, ed(a, Tc.a(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new U(null, function() {
      var k = G(c);
      if (k) {
        var l = ed(a, k);
        return a === O(l) ? N(l, d.b(a, b, fd(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, g, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, h);
      case 4:
        return a.call(this, d, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function od(a, b) {
  this.r = a;
  this.d = b;
}
function pd(a) {
  return new od(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function qd(a) {
  return new od(a.r, w(a.d));
}
function rd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function sd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = pd(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var ud = function td(b, c, d, e) {
  var g = qd(d), h = b.f - 1 >>> c & 31;
  5 === c ? g.d[h] = e : (d = d.d[h], b = null != d ? td(b, c - 5, d, e) : sd(null, c - 5, e), g.d[h] = b);
  return g;
};
function vd(a, b) {
  throw Error([v("No item "), v(a), v(" in vector of length "), v(b)].join(""));
}
function wd(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= rd(a)) {
      return a.R;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return vd(b, a.f);
  }
}
var yd = function xd(b, c, d, e, g) {
  var h = qd(d);
  if (0 === c) {
    h.d[e & 31] = g;
  } else {
    var k = e >>> c & 31;
    b = xd(b, c - 5, d.d[k], e, g);
    h.d[k] = b;
  }
  return h;
}, Ad = function zd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = zd(b, c - 5, d.d[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = qd(d);
    d.d[e] = b;
    return d;
  }
  return 0 === e ? null : t ? (d = qd(d), d.d[e] = null, d) : null;
};
function V(a, b, c, d, e, g) {
  this.g = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.R = e;
  this.j = g;
  this.n = 4;
  this.i = 167668511;
}
f = V.prototype;
f.Ca = function() {
  return new Bd(this.f, this.shift, Cd.c ? Cd.c(this.root) : Cd.call(null, this.root), Dd.c ? Dd.c(this.R) : Dd.call(null, this.R));
};
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.u = function(a, b) {
  return x.b(this, b, null);
};
f.v = function(a, b, c) {
  return x.b(this, b, c);
};
f.la = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return rd(this) <= b ? (a = w(this.R), a[b & 31] = c, new V(this.g, this.f, this.shift, this.root, a, null)) : new V(this.g, this.f, this.shift, yd(this, this.shift, this.root, b, c), this.R, null);
  }
  if (b === this.f) {
    return ya(this, c);
  }
  if (t) {
    throw Error([v("Index "), v(b), v(" out of bounds  [0,"), v(this.f), v("]")].join(""));
  }
  return null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.o(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.o(null, a);
};
f.a = function(a, b) {
  return this.X(null, a, b);
};
f.B = function(a, b) {
  if (32 > this.f - rd(this)) {
    for (var c = this.R.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.R[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new V(this.g, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = pd(null), d.d[0] = this.root, e = sd(null, this.shift, new od(null, this.R)), d.d[1] = e) : d = ud(this, this.shift, this.root, new od(null, this.R));
  return new V(this.g, this.f + 1, c, d, [b], null);
};
f.Ja = function() {
  return 0 < this.f ? new Mb(this, this.f - 1, null) : null;
};
f.Ia = function() {
  return x.a(this, 0);
};
f.Ya = function() {
  return x.a(this, 1);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Hb.a(this, b);
};
f.N = function(a, b, c) {
  return Hb.b(this, b, c);
};
f.D = function() {
  return 0 === this.f ? null : 32 > this.f ? M.c(this.R) : t ? Ed.b ? Ed.b(this, 0, 0) : Ed.call(null, this, 0, 0) : null;
};
f.I = function() {
  return this.f;
};
f.na = function() {
  return 0 < this.f ? x.a(this, this.f - 1) : null;
};
f.oa = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return Xa(Fd, this.g);
  }
  if (1 < this.f - rd(this)) {
    return new V(this.g, this.f - 1, this.shift, this.root, this.R.slice(0, -1), null);
  }
  if (t) {
    var a = wd(this, this.f - 2), b = Ad(this, this.shift, this.root), b = null == b ? W : b, c = this.f - 1;
    return 5 < this.shift && null == b.d[1] ? new V(this.g, c, this.shift - 5, b.d[0], a, null) : new V(this.g, c, this.shift, b, a, null);
  }
  return null;
};
f.za = function(a, b, c) {
  return Ha(this, b, c);
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new V(b, this.f, this.shift, this.root, this.R, this.j);
};
f.w = function() {
  return this.g;
};
f.o = function(a, b) {
  return wd(this, b)[b & 31];
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.f ? x.a(this, b) : c;
};
f.G = function() {
  return Qb(Fd, this.g);
};
var W = new od(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Fd = new V(null, 0, 5, W, [], 0);
function Gd(a, b) {
  var c = a.length, d = b ? a : w(a);
  if (32 > c) {
    return new V(null, c, 5, W, d, null);
  }
  for (var e = d.slice(0, 32), g = 32, h = (new V(null, 32, 5, W, e, null)).Ca(null);;) {
    if (g < c) {
      e = g + 1, h = rb(h, d[g]), g = e;
    } else {
      return sb(h);
    }
  }
}
function Hd(a) {
  return sb(mc.b(rb, qb(Fd), a));
}
var Id = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return a instanceof Fb && 0 === a.m ? Gd.a ? Gd.a(a.d, !0) : Gd.call(null, a.d, !0) : Hd(a);
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Jd(a, b, c, d, e, g) {
  this.L = a;
  this.aa = b;
  this.m = c;
  this.off = d;
  this.g = e;
  this.j = g;
  this.i = 32243948;
  this.n = 1536;
}
f = Jd.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.$ = function() {
  if (this.off + 1 < this.aa.length) {
    var a = Ed.l ? Ed.l(this.L, this.aa, this.m, this.off + 1) : Ed.call(null, this.L, this.aa, this.m, this.off + 1);
    return null == a ? null : a;
  }
  return wb(this);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Hb.a(Kd.b ? Kd.b(this.L, this.m + this.off, O(this.L)) : Kd.call(null, this.L, this.m + this.off, O(this.L)), b);
};
f.N = function(a, b, c) {
  return Hb.b(Kd.b ? Kd.b(this.L, this.m + this.off, O(this.L)) : Kd.call(null, this.L, this.m + this.off, O(this.L)), b, c);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.aa[this.off];
};
f.S = function() {
  if (this.off + 1 < this.aa.length) {
    var a = Ed.l ? Ed.l(this.L, this.aa, this.m, this.off + 1) : Ed.call(null, this.L, this.aa, this.m, this.off + 1);
    return null == a ? J : a;
  }
  return D(this);
};
f.cb = function() {
  var a = this.aa.length, a = this.m + a < va(this.L) ? Ed.b ? Ed.b(this.L, this.m + a, 0) : Ed.call(null, this.L, this.m + a, 0) : null;
  return null == a ? null : a;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return Ed.C ? Ed.C(this.L, this.aa, this.m, this.off, b) : Ed.call(null, this.L, this.aa, this.m, this.off, b);
};
f.G = function() {
  return Qb(Fd, this.g);
};
f.eb = function() {
  return Mc.a(this.aa, this.off);
};
f.fb = function() {
  var a = this.aa.length, a = this.m + a < va(this.L) ? Ed.b ? Ed.b(this.L, this.m + a, 0) : Ed.call(null, this.L, this.m + a, 0) : null;
  return null == a ? J : a;
};
var Ed = function() {
  function a(a, b, c, d, l) {
    return new Jd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Jd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Jd(a, wd(a, b), b, c, null, null);
  }
  var d = null, d = function(d, g, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, g, h);
      case 4:
        return b.call(this, d, g, h, k);
      case 5:
        return a.call(this, d, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.C = a;
  return d;
}();
function Ld(a, b, c, d, e) {
  this.g = a;
  this.Z = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.n = 0;
  this.i = 32400159;
}
f = Ld.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.u = function(a, b) {
  return x.b(this, b, null);
};
f.v = function(a, b, c) {
  return x.b(this, b, c);
};
f.la = function(a, b, c) {
  var d = this, e = d.start + b;
  return Md.C ? Md.C(d.g, Q.b(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Md.call(null, d.g, Q.b(d.Z, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.o(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.o(null, a);
};
f.a = function(a, b) {
  return this.X(null, a, b);
};
f.B = function(a, b) {
  return Md.C ? Md.C(this.g, Ta(this.Z, this.end, b), this.start, this.end + 1, null) : Md.call(null, this.g, Ta(this.Z, this.end, b), this.start, this.end + 1, null);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Hb.a(this, b);
};
f.N = function(a, b, c) {
  return Hb.b(this, b, c);
};
f.D = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : N(x.a(a.Z, d), new U(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
f.I = function() {
  return this.end - this.start;
};
f.na = function() {
  return x.a(this.Z, this.end - 1);
};
f.oa = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Md.C ? Md.C(this.g, this.Z, this.start, this.end - 1, null) : Md.call(null, this.g, this.Z, this.start, this.end - 1, null);
};
f.za = function(a, b, c) {
  return Ha(this, b, c);
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return Md.C ? Md.C(b, this.Z, this.start, this.end, this.j) : Md.call(null, b, this.Z, this.start, this.end, this.j);
};
f.w = function() {
  return this.g;
};
f.o = function(a, b) {
  return 0 > b || this.end <= this.start + b ? vd(b, this.end - this.start) : x.a(this.Z, this.start + b);
};
f.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : x.b(this.Z, this.start + b, c);
};
f.G = function() {
  return Qb(Fd, this.g);
};
function Md(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Ld) {
      c = b.start + c, d = b.start + d, b = b.Z;
    } else {
      var g = O(b);
      if (0 > c || 0 > d || c > g || d > g) {
        throw Error("Index out of bounds");
      }
      return new Ld(a, b, c, d, e);
    }
  }
}
var Kd = function() {
  function a(a, b, c) {
    return Md(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, O(a));
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Cd(a) {
  return new od({}, w(a.d));
}
function Dd(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  gc(a, 0, b, 0, a.length);
  return b;
}
var Pd = function Nd(b, c, d, e) {
  d = b.root.r === d.r ? d : new od(b.root.r, w(d.d));
  var g = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.d[g];
    b = null != h ? Nd(b, c - 5, h, e) : sd(b.root.r, c - 5, e);
  }
  d.d[g] = b;
  return d;
};
function Bd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.R = d;
  this.i = 275;
  this.n = 88;
}
f = Bd.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.u = function(a, b) {
  return x.b(this, b, null);
};
f.v = function(a, b, c) {
  return x.b(this, b, c);
};
f.o = function(a, b) {
  if (this.root.r) {
    return wd(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
f.X = function(a, b, c) {
  return 0 <= b && b < this.f ? x.a(this, b) : c;
};
f.I = function() {
  if (this.root.r) {
    return this.f;
  }
  throw Error("count after persistent!");
};
f.Mb = function(a, b, c) {
  var d = this;
  if (d.root.r) {
    if (0 <= b && b < d.f) {
      return rd(this) <= b ? d.R[b & 31] = c : (a = function g(a, k) {
        var l = d.root.r === k.r ? k : new od(d.root.r, w(k.d));
        if (0 === a) {
          l.d[b & 31] = c;
        } else {
          var n = b >>> a & 31, p = g(a - 5, l.d[n]);
          l.d[n] = p;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return rb(this, c);
    }
    if (t) {
      throw Error([v("Index "), v(b), v(" out of bounds for TransientVector of length"), v(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
f.La = function(a, b, c) {
  return ub(this, b, c);
};
f.Ma = function(a, b) {
  if (this.root.r) {
    if (32 > this.f - rd(this)) {
      this.R[this.f & 31] = b;
    } else {
      var c = new od(this.root.r, this.R), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.R = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = sd(this.root.r, this.shift, c);
        this.root = new od(this.root.r, d);
        this.shift = e;
      } else {
        this.root = Pd(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
f.Na = function() {
  if (this.root.r) {
    this.root.r = null;
    var a = this.f - rd(this), b = Array(a);
    gc(this.R, 0, b, 0, a);
    return new V(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Qd(a, b, c, d) {
  this.g = a;
  this.W = b;
  this.ia = c;
  this.j = d;
  this.n = 0;
  this.i = 31850572;
}
f = Qd.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return H(this.W);
};
f.S = function() {
  var a = K(this.W);
  return a ? new Qd(this.g, a, this.ia, null) : null == this.ia ? wa(this) : new Qd(this.g, this.ia, null, null);
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Qd(b, this.W, this.ia, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
function Rd(a, b, c, d, e) {
  this.g = a;
  this.count = b;
  this.W = c;
  this.ia = d;
  this.j = e;
  this.n = 0;
  this.i = 31858766;
}
f = Rd.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.B = function(a, b) {
  var c;
  q(this.W) ? (c = this.ia, c = new Rd(this.g, this.count + 1, this.W, Rb.a(q(c) ? c : Fd, b), null)) : c = new Rd(this.g, this.count + 1, Rb.a(this.W, b), Fd, null);
  return c;
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  var a = G(this.ia), b = this.W;
  return q(q(b) ? b : a) ? new Qd(null, this.W, G(a), null) : null;
};
f.I = function() {
  return this.count;
};
f.na = function() {
  return H(this.W);
};
f.oa = function() {
  if (q(this.W)) {
    var a = K(this.W);
    return a ? new Rd(this.g, this.count - 1, a, this.ia, null) : new Rd(this.g, this.count - 1, G(this.ia), Fd, null);
  }
  return this;
};
f.O = function() {
  return H(this.W);
};
f.S = function() {
  return I(G(this));
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Rd(b, this.count, this.W, this.ia, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Sd;
};
var Sd = new Rd(null, 0, null, Fd, 0);
function Td() {
  this.n = 0;
  this.i = 2097152;
}
Td.prototype.s = function() {
  return!1;
};
var Ud = new Td;
function Vd(a, b) {
  return jc(dc(b) ? O(a) === O(b) ? Xc(Yc, cd.a(function(a) {
    return E.a(Tb.b(b, H(a), Ud), H(K(a)));
  }, a)) : null : null);
}
function Wd(a, b) {
  var c = a.d;
  if (b instanceof S) {
    a: {
      for (var d = c.length, e = b.ua, g = 0;;) {
        if (d <= g) {
          c = -1;
          break a;
        }
        var h = c[g];
        if (h instanceof S && e === h.ua) {
          c = g;
          break a;
        }
        if (t) {
          g += 2;
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
          if (t) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof Cb) {
        a: {
          d = c.length;
          e = b.xa;
          for (g = 0;;) {
            if (d <= g) {
              c = -1;
              break a;
            }
            h = c[g];
            if (h instanceof Cb && e === h.xa) {
              c = g;
              break a;
            }
            if (t) {
              g += 2;
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
              if (t) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (t) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (E.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (t) {
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
function Xd(a, b, c) {
  this.d = a;
  this.m = b;
  this.ba = c;
  this.n = 0;
  this.i = 32374990;
}
f = Xd.prototype;
f.t = function() {
  return Lb(this);
};
f.$ = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.ba) : null;
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return(this.d.length - this.m) / 2;
};
f.O = function() {
  return new V(null, 2, 5, W, [this.d[this.m], this.d[this.m + 1]], null);
};
f.S = function() {
  return this.m < this.d.length - 2 ? new Xd(this.d, this.m + 2, this.ba) : J;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Xd(this.d, this.m, b);
};
f.w = function() {
  return this.ba;
};
f.G = function() {
  return Qb(J, this.ba);
};
function ia(a, b, c, d) {
  this.g = a;
  this.f = b;
  this.d = c;
  this.j = d;
  this.n = 4;
  this.i = 16123663;
}
f = ia.prototype;
f.Ca = function() {
  return new Yd({}, this.d.length, w(this.d));
};
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = wc(this);
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  a = Wd(this, b);
  return-1 === a ? c : this.d[a + 1];
};
f.la = function(a, b, c) {
  a = Wd(this, b);
  if (-1 === a) {
    if (this.f < Zd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), g = 0;;) {
        if (g < d) {
          e[g] = a[g], g += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new ia(this.g, this.f + 1, e, null);
    }
    return Xa(Ha(md($d, this), b, c), this.g);
  }
  return c === this.d[a + 1] ? this : t ? (b = w(this.d), b[a + 1] = c, new ia(this.g, this.f, b, null)) : null;
};
f.Ga = function(a, b) {
  return-1 !== Wd(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return ec(b) ? Ha(this, x.a(b, 0), x.a(b, 1)) : mc.b(ya, this, b);
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  return 0 <= this.d.length - 2 ? new Xd(this.d, 0, null) : null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new ia(b, this.f, this.d, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Xa(ae, this.g);
};
f.Ha = function(a, b) {
  if (0 <= Wd(this, b)) {
    var c = this.d.length, d = c - 2;
    if (0 === d) {
      return wa(this);
    }
    for (var d = Array(d), e = 0, g = 0;;) {
      if (e >= c) {
        return new ia(this.g, this.f - 1, d, null);
      }
      if (E.a(b, this.d[e])) {
        e += 2;
      } else {
        if (t) {
          d[g] = this.d[e], d[g + 1] = this.d[e + 1], g += 2, e += 2;
        } else {
          return null;
        }
      }
    }
  } else {
    return this;
  }
};
var ae = new ia(null, 0, [], null), Zd = 8;
function be(a) {
  for (var b = a.length, c = 0, d = qb(ae);;) {
    if (c < b) {
      var e = c + 2, d = tb(d, a[c], a[c + 1]), c = e
    } else {
      return sb(d);
    }
  }
}
function Yd(a, b, c) {
  this.Ea = a;
  this.qa = b;
  this.d = c;
  this.n = 56;
  this.i = 258;
}
f = Yd.prototype;
f.La = function(a, b, c) {
  if (q(this.Ea)) {
    a = Wd(this, b);
    if (-1 === a) {
      if (this.qa + 2 <= 2 * Zd) {
        return this.qa += 2, this.d.push(b), this.d.push(c), this;
      }
      a = ce.a ? ce.a(this.qa, this.d) : ce.call(null, this.qa, this.d);
      return tb(a, b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
f.Ma = function(a, b) {
  if (q(this.Ea)) {
    if (b ? b.i & 2048 || b.Xb || (b.i ? 0 : r(La, b)) : r(La, b)) {
      return tb(this, xc.c ? xc.c(b) : xc.call(null, b), yc.c ? yc.c(b) : yc.call(null, b));
    }
    for (var c = G(b), d = this;;) {
      var e = H(c);
      if (q(e)) {
        c = K(c), d = tb(d, xc.c ? xc.c(e) : xc.call(null, e), yc.c ? yc.c(e) : yc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
f.Na = function() {
  if (q(this.Ea)) {
    return this.Ea = !1, new ia(null, sc((this.qa - this.qa % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  if (q(this.Ea)) {
    return a = Wd(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
f.I = function() {
  if (q(this.Ea)) {
    return sc((this.qa - this.qa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ce(a, b) {
  for (var c = qb($d), d = 0;;) {
    if (d < a) {
      c = tb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function de() {
  this.val = !1;
}
function ee(a, b) {
  return a === b ? !0 : a === b || a instanceof S && b instanceof S && a.ua === b.ua ? !0 : t ? E.a(a, b) : null;
}
var fe = function() {
  function a(a, b, c, h, k) {
    a = w(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = w(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.C = a;
  return c;
}();
function ge(a, b) {
  var c = Array(a.length - 2);
  gc(a, 0, c, 0, 2 * b);
  gc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var he = function() {
  function a(a, b, c, h, k, l) {
    a = a.Fa(b);
    a.d[c] = h;
    a.d[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Fa(b);
    a.d[c] = h;
    return a;
  }
  var c = null, c = function(c, e, g, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, g, h);
      case 6:
        return a.call(this, c, e, g, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.ma = a;
  return c;
}();
function ie(a, b, c) {
  this.r = a;
  this.A = b;
  this.d = c;
}
f = ie.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = 1 << (c >>> b & 31), k = tc(this.A & h - 1);
  if (0 === (this.A & h)) {
    var l = tc(this.A);
    if (2 * l < this.d.length) {
      a = this.Fa(a);
      b = a.d;
      g.val = !0;
      a: {
        for (c = 2 * (l - k), g = 2 * k + (c - 1), l = 2 * (k + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[l] = b[g];
          l -= 1;
          c -= 1;
          g -= 1;
        }
      }
      b[2 * k] = d;
      b[2 * k + 1] = e;
      a.A |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = je.da(a, b + 5, c, d, e, g);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.A >>> d & 1) && (k[d] = null != this.d[e] ? je.da(a, b + 5, F(this.d[e]), this.d[e], this.d[e + 1], g) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new ke(a, l + 1, k);
    }
    return t ? (b = Array(2 * (l + 4)), gc(this.d, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, gc(this.d, 2 * k, b, 2 * (k + 1), 2 * (l - k)), g.val = !0, a = this.Fa(a), a.d = b, a.A |= h, a) : null;
  }
  l = this.d[2 * k];
  h = this.d[2 * k + 1];
  return null == l ? (l = h.da(a, b + 5, c, d, e, g), l === h ? this : he.l(this, a, 2 * k + 1, l)) : ee(d, l) ? e === h ? this : he.l(this, a, 2 * k + 1, e) : t ? (g.val = !0, he.ma(this, a, 2 * k, null, 2 * k + 1, le.Da ? le.Da(a, b + 5, l, h, c, d, e) : le.call(null, a, b + 5, l, h, c, d, e))) : null;
};
f.Oa = function() {
  return me.c ? me.c(this.d) : me.call(null, this.d);
};
f.Fa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = tc(this.A), c = Array(0 > b ? 4 : 2 * (b + 1));
  gc(this.d, 0, c, 0, 2 * b);
  return new ie(a, this.A, c);
};
f.Pa = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.A & d)) {
    return this;
  }
  var e = tc(this.A & d - 1), g = this.d[2 * e], h = this.d[2 * e + 1];
  return null == g ? (a = h.Pa(a + 5, b, c), a === h ? this : null != a ? new ie(null, this.A, fe.b(this.d, 2 * e + 1, a)) : this.A === d ? null : t ? new ie(null, this.A ^ d, ge(this.d, e)) : null) : ee(c, g) ? new ie(null, this.A ^ d, ge(this.d, e)) : t ? this : null;
};
f.ca = function(a, b, c, d, e) {
  var g = 1 << (b >>> a & 31), h = tc(this.A & g - 1);
  if (0 === (this.A & g)) {
    var k = tc(this.A);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = je.ca(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.A >>> c & 1) && (h[c] = null != this.d[d] ? je.ca(a + 5, F(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new ke(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    gc(this.d, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    gc(this.d, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.val = !0;
    return new ie(null, this.A | g, a);
  }
  k = this.d[2 * h];
  g = this.d[2 * h + 1];
  return null == k ? (k = g.ca(a + 5, b, c, d, e), k === g ? this : new ie(null, this.A, fe.b(this.d, 2 * h + 1, k))) : ee(c, k) ? d === g ? this : new ie(null, this.A, fe.b(this.d, 2 * h + 1, d)) : t ? (e.val = !0, new ie(null, this.A, fe.C(this.d, 2 * h, null, 2 * h + 1, le.ma ? le.ma(a + 5, k, g, b, c, d) : le.call(null, a + 5, k, g, b, c, d)))) : null;
};
f.va = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.A & e)) {
    return d;
  }
  var g = tc(this.A & e - 1), e = this.d[2 * g], g = this.d[2 * g + 1];
  return null == e ? g.va(a + 5, b, c, d) : ee(c, e) ? g : t ? d : null;
};
var je = new ie(null, 0, []);
function ke(a, b, c) {
  this.r = a;
  this.f = b;
  this.d = c;
}
f = ke.prototype;
f.da = function(a, b, c, d, e, g) {
  var h = c >>> b & 31, k = this.d[h];
  if (null == k) {
    return a = he.l(this, a, h, je.da(a, b + 5, c, d, e, g)), a.f += 1, a;
  }
  b = k.da(a, b + 5, c, d, e, g);
  return b === k ? this : he.l(this, a, h, b);
};
f.Oa = function() {
  return ne.c ? ne.c(this.d) : ne.call(null, this.d);
};
f.Fa = function(a) {
  return a === this.r ? this : new ke(a, this.f, w(this.d));
};
f.Pa = function(a, b, c) {
  var d = b >>> a & 31, e = this.d[d];
  if (null != e) {
    a = e.Pa(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.d;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var g = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[g] = e[c], g += 2, h |= 1 << c), c += 1;
              } else {
                d = new ie(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new ke(null, this.f - 1, fe.b(this.d, d, a));
        }
      } else {
        d = t ? new ke(null, this.f, fe.b(this.d, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
f.ca = function(a, b, c, d, e) {
  var g = b >>> a & 31, h = this.d[g];
  if (null == h) {
    return new ke(null, this.f + 1, fe.b(this.d, g, je.ca(a + 5, b, c, d, e)));
  }
  a = h.ca(a + 5, b, c, d, e);
  return a === h ? this : new ke(null, this.f, fe.b(this.d, g, a));
};
f.va = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.va(a + 5, b, c, d) : d;
};
function oe(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (ee(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function pe(a, b, c, d) {
  this.r = a;
  this.pa = b;
  this.f = c;
  this.d = d;
}
f = pe.prototype;
f.da = function(a, b, c, d, e, g) {
  if (c === this.pa) {
    b = oe(this.d, this.f, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.f) {
        return a = he.ma(this, a, 2 * this.f, d, 2 * this.f + 1, e), g.val = !0, a.f += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      gc(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      g.val = !0;
      g = this.f + 1;
      a === this.r ? (this.d = b, this.f = g, a = this) : a = new pe(this.r, this.pa, g, b);
      return a;
    }
    return this.d[b + 1] === e ? this : he.l(this, a, b + 1, e);
  }
  return(new ie(a, 1 << (this.pa >>> b & 31), [null, this, null, null])).da(a, b, c, d, e, g);
};
f.Oa = function() {
  return me.c ? me.c(this.d) : me.call(null, this.d);
};
f.Fa = function(a) {
  if (a === this.r) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  gc(this.d, 0, b, 0, 2 * this.f);
  return new pe(a, this.pa, this.f, b);
};
f.Pa = function(a, b, c) {
  a = oe(this.d, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : t ? new pe(null, this.pa, this.f - 1, ge(this.d, sc((a - a % 2) / 2))) : null;
};
f.ca = function(a, b, c, d, e) {
  return b === this.pa ? (a = oe(this.d, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), gc(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new pe(null, this.pa, this.f + 1, b)) : E.a(this.d[a], d) ? this : new pe(null, this.pa, this.f, fe.b(this.d, a + 1, d))) : (new ie(null, 1 << (this.pa >>> a & 31), [null, this])).ca(a, b, c, d, e);
};
f.va = function(a, b, c, d) {
  a = oe(this.d, this.f, c);
  return 0 > a ? d : ee(c, this.d[a]) ? this.d[a + 1] : t ? d : null;
};
var le = function() {
  function a(a, b, c, h, k, l, n) {
    var p = F(c);
    if (p === k) {
      return new pe(null, p, 2, [c, h, l, n]);
    }
    var s = new de;
    return je.da(a, b, p, c, h, s).da(a, b, k, l, n, s);
  }
  function b(a, b, c, h, k, l) {
    var n = F(b);
    if (n === h) {
      return new pe(null, n, 2, [b, c, k, l]);
    }
    var p = new de;
    return je.ca(a, n, b, c, p).ca(a, h, k, l, p);
  }
  var c = null, c = function(c, e, g, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, g, h, k, l);
      case 7:
        return a.call(this, c, e, g, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ma = b;
  c.Da = a;
  return c;
}();
function qe(a, b, c, d, e) {
  this.g = a;
  this.ea = b;
  this.m = c;
  this.H = d;
  this.j = e;
  this.n = 0;
  this.i = 32374860;
}
f = qe.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return null == this.H ? new V(null, 2, 5, W, [this.ea[this.m], this.ea[this.m + 1]], null) : H(this.H);
};
f.S = function() {
  return null == this.H ? me.b ? me.b(this.ea, this.m + 2, null) : me.call(null, this.ea, this.m + 2, null) : me.b ? me.b(this.ea, this.m, K(this.H)) : me.call(null, this.ea, this.m, K(this.H));
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new qe(b, this.ea, this.m, this.H, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
var me = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new qe(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (q(h) && (h = h.Oa(), q(h))) {
            return new qe(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new qe(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
}();
function re(a, b, c, d, e) {
  this.g = a;
  this.ea = b;
  this.m = c;
  this.H = d;
  this.j = e;
  this.n = 0;
  this.i = 32374860;
}
f = re.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return H(this.H);
};
f.S = function() {
  return ne.l ? ne.l(null, this.ea, this.m, K(this.H)) : ne.call(null, null, this.ea, this.m, K(this.H));
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new re(b, this.ea, this.m, this.H, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
var ne = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (q(k) && (k = k.Oa(), q(k))) {
            return new re(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new re(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, g, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, g, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function se(a, b, c, d, e, g) {
  this.g = a;
  this.f = b;
  this.root = c;
  this.T = d;
  this.Y = e;
  this.j = g;
  this.n = 4;
  this.i = 16123663;
}
f = se.prototype;
f.Ca = function() {
  return new te({}, this.root, this.f, this.T, this.Y);
};
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = wc(this);
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  return null == b ? this.T ? this.Y : c : null == this.root ? c : t ? this.root.va(0, F(b), b, c) : null;
};
f.la = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.Y ? this : new se(this.g, this.T ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new de;
  b = (null == this.root ? je : this.root).ca(0, F(b), b, c, a);
  return b === this.root ? this : new se(this.g, a.val ? this.f + 1 : this.f, b, this.T, this.Y, null);
};
f.Ga = function(a, b) {
  return null == b ? this.T : null == this.root ? !1 : t ? this.root.va(0, F(b), b, hc) !== hc : null;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return ec(b) ? Ha(this, x.a(b, 0), x.a(b, 1)) : mc.b(ya, this, b);
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Oa() : null;
    return this.T ? N(new V(null, 2, 5, W, [null, this.Y], null), a) : a;
  }
  return null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new se(b, this.f, this.root, this.T, this.Y, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Xa($d, this.g);
};
f.Ha = function(a, b) {
  if (null == b) {
    return this.T ? new se(this.g, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (t) {
    var c = this.root.Pa(0, F(b), b);
    return c === this.root ? this : new se(this.g, this.f - 1, c, this.T, this.Y, null);
  }
  return null;
};
var $d = new se(null, 0, null, !1, null, 0);
function Ub(a, b) {
  for (var c = a.length, d = 0, e = qb($d);;) {
    if (d < c) {
      var g = d + 1, e = e.La(null, a[d], b[d]), d = g
    } else {
      return sb(e);
    }
  }
}
function te(a, b, c, d, e) {
  this.r = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.Y = e;
  this.n = 56;
  this.i = 258;
}
f = te.prototype;
f.La = function(a, b, c) {
  return ue(this, b, c);
};
f.Ma = function(a, b) {
  var c;
  a: {
    if (this.r) {
      if (b ? b.i & 2048 || b.Xb || (b.i ? 0 : r(La, b)) : r(La, b)) {
        c = ue(this, xc.c ? xc.c(b) : xc.call(null, b), yc.c ? yc.c(b) : yc.call(null, b));
        break a;
      }
      c = G(b);
      for (var d = this;;) {
        var e = H(c);
        if (q(e)) {
          c = K(c), d = ue(d, xc.c ? xc.c(e) : xc.call(null, e), yc.c ? yc.c(e) : yc.call(null, e));
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
f.Na = function() {
  var a;
  if (this.r) {
    this.r = null, a = new se(null, this.count, this.root, this.T, this.Y, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
f.u = function(a, b) {
  return null == b ? this.T ? this.Y : null : null == this.root ? null : this.root.va(0, F(b), b);
};
f.v = function(a, b, c) {
  return null == b ? this.T ? this.Y : c : null == this.root ? c : this.root.va(0, F(b), b, c);
};
f.I = function() {
  if (this.r) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ue(a, b, c) {
  if (a.r) {
    if (null == b) {
      a.Y !== c && (a.Y = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new de;
      b = (null == a.root ? je : a.root).da(a.r, 0, F(b), b, c, d);
      b !== a.root && (a.root = b);
      d.val && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function ve(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Rb.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function we(a, b, c, d, e) {
  this.g = a;
  this.stack = b;
  this.Ua = c;
  this.f = d;
  this.j = e;
  this.n = 0;
  this.i = 32374862;
}
f = we.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.I = function() {
  return 0 > this.f ? O(K(this)) + 1 : this.f;
};
f.O = function() {
  return $b(this.stack);
};
f.S = function() {
  var a = H(this.stack), a = ve(this.Ua ? a.right : a.left, K(this.stack), this.Ua);
  return null != a ? new we(null, a, this.Ua, this.f - 1, null) : J;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new we(b, this.stack, this.Ua, this.f, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(J, this.g);
};
function xe(a, b, c, d) {
  return c instanceof X ? c.left instanceof X ? new X(c.key, c.val, c.left.ka(), new Y(a, b, c.right, d, null), null) : c.right instanceof X ? new X(c.right.key, c.right.val, new Y(c.key, c.val, c.left, c.right.left, null), new Y(a, b, c.right.right, d, null), null) : t ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function ye(a, b, c, d) {
  return d instanceof X ? d.right instanceof X ? new X(d.key, d.val, new Y(a, b, c, d.left, null), d.right.ka(), null) : d.left instanceof X ? new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), new Y(d.key, d.val, d.left.right, d.right, null), null) : t ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function ze(a, b, c, d) {
  if (c instanceof X) {
    return new X(a, b, c.ka(), d, null);
  }
  if (d instanceof Y) {
    return ye(a, b, c, d.Sa());
  }
  if (d instanceof X && d.left instanceof Y) {
    return new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), ye(d.key, d.val, d.left.right, d.right.Sa()), null);
  }
  if (t) {
    throw Error("red-black tree invariant violation");
  }
  return null;
}
function Y(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.n = 0;
  this.i = 32402207;
}
f = Y.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.u = function(a, b) {
  return x.b(this, b, null);
};
f.v = function(a, b, c) {
  return x.b(this, b, c);
};
f.la = function(a, b, c) {
  return Q.b(new V(null, 2, 5, W, [this.key, this.val], null), b, c);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.val, b], null);
};
f.Ia = function() {
  return this.key;
};
f.Ya = function() {
  return this.val;
};
f.Cb = function(a) {
  return a.Eb(this);
};
f.Sa = function() {
  return new X(this.key, this.val, this.left, this.right, null);
};
f.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, null);
};
f.Bb = function(a) {
  return a.Db(this);
};
f.Db = function(a) {
  return new Y(a.key, a.val, this, a.right, null);
};
f.Eb = function(a) {
  return new Y(a.key, a.val, a.left, this, null);
};
f.ka = function() {
  return this;
};
f.M = function(a, b) {
  return Hb.a(this, b);
};
f.N = function(a, b, c) {
  return Hb.b(this, b, c);
};
f.D = function() {
  return ya(ya(J, this.val), this.key);
};
f.I = function() {
  return 2;
};
f.na = function() {
  return this.val;
};
f.oa = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
f.za = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.val], null)).za(null, b, c);
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return Qb(new V(null, 2, 5, W, [this.key, this.val], null), b);
};
f.w = function() {
  return null;
};
f.o = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
f.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : t ? c : null;
};
f.G = function() {
  return Fd;
};
function X(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.n = 0;
  this.i = 32402207;
}
f = X.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Lb(this);
};
f.u = function(a, b) {
  return x.b(this, b, null);
};
f.v = function(a, b, c) {
  return x.b(this, b, c);
};
f.la = function(a, b, c) {
  return Q.b(new V(null, 2, 5, W, [this.key, this.val], null), b, c);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return new V(null, 3, 5, W, [this.key, this.val, b], null);
};
f.Ia = function() {
  return this.key;
};
f.Ya = function() {
  return this.val;
};
f.Cb = function(a) {
  return new X(this.key, this.val, this.left, a, null);
};
f.Sa = function() {
  throw Error("red-black tree invariant violation");
};
f.replace = function(a, b, c, d) {
  return new X(a, b, c, d, null);
};
f.Bb = function(a) {
  return new X(this.key, this.val, a, this.right, null);
};
f.Db = function(a) {
  return this.left instanceof X ? new X(this.key, this.val, this.left.ka(), new Y(a.key, a.val, this.right, a.right, null), null) : this.right instanceof X ? new X(this.right.key, this.right.val, new Y(this.key, this.val, this.left, this.right.left, null), new Y(a.key, a.val, this.right.right, a.right, null), null) : t ? new Y(a.key, a.val, this, a.right, null) : null;
};
f.Eb = function(a) {
  return this.right instanceof X ? new X(this.key, this.val, new Y(a.key, a.val, a.left, this.left, null), this.right.ka(), null) : this.left instanceof X ? new X(this.left.key, this.left.val, new Y(a.key, a.val, a.left, this.left.left, null), new Y(this.key, this.val, this.left.right, this.right, null), null) : t ? new Y(a.key, a.val, a.left, this, null) : null;
};
f.ka = function() {
  return new Y(this.key, this.val, this.left, this.right, null);
};
f.M = function(a, b) {
  return Hb.a(this, b);
};
f.N = function(a, b, c) {
  return Hb.b(this, b, c);
};
f.D = function() {
  return ya(ya(J, this.val), this.key);
};
f.I = function() {
  return 2;
};
f.na = function() {
  return this.val;
};
f.oa = function() {
  return new V(null, 1, 5, W, [this.key], null);
};
f.za = function(a, b, c) {
  return(new V(null, 2, 5, W, [this.key, this.val], null)).za(null, b, c);
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return Qb(new V(null, 2, 5, W, [this.key, this.val], null), b);
};
f.w = function() {
  return null;
};
f.o = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
f.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : t ? c : null;
};
f.G = function() {
  return Fd;
};
var Be = function Ae(b, c, d, e, g) {
  if (null == c) {
    return new X(d, e, null, null, null);
  }
  var h = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === h ? (g[0] = c, null) : 0 > h ? (b = Ae(b, c.left, d, e, g), null != b ? c.Bb(b) : null) : t ? (b = Ae(b, c.right, d, e, g), null != b ? c.Cb(b) : null) : null;
}, De = function Ce(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof X) {
    if (c instanceof X) {
      var d = Ce(b.right, c.left);
      return d instanceof X ? new X(d.key, d.val, new X(b.key, b.val, b.left, d.left, null), new X(c.key, c.val, d.right, c.right, null), null) : new X(b.key, b.val, b.left, new X(c.key, c.val, d, c.right, null), null);
    }
    return new X(b.key, b.val, b.left, Ce(b.right, c), null);
  }
  return c instanceof X ? new X(c.key, c.val, Ce(b, c.left), c.right, null) : t ? (d = Ce(b.right, c.left), d instanceof X ? new X(d.key, d.val, new Y(b.key, b.val, b.left, d.left, null), new Y(c.key, c.val, d.right, c.right, null), null) : ze(b.key, b.val, b.left, new Y(c.key, c.val, d, c.right, null))) : null;
}, Fe = function Ee(b, c, d, e) {
  if (null != c) {
    var g = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if (0 === g) {
      return e[0] = c, De(c.left, c.right);
    }
    if (0 > g) {
      return b = Ee(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Y ? ze(c.key, c.val, b, c.right) : new X(c.key, c.val, b, c.right, null) : null;
    }
    if (t) {
      b = Ee(b, c.right, d, e);
      if (null != b || null != e[0]) {
        if (c.right instanceof Y) {
          if (e = c.key, d = c.val, c = c.left, b instanceof X) {
            c = new X(e, d, c, b.ka(), null);
          } else {
            if (c instanceof Y) {
              c = xe(e, d, c.Sa(), b);
            } else {
              if (c instanceof X && c.right instanceof Y) {
                c = new X(c.right.key, c.right.val, xe(c.key, c.val, c.left.Sa(), c.right.left), new Y(e, d, c.right.right, b, null), null);
              } else {
                if (t) {
                  throw Error("red-black tree invariant violation");
                }
                c = null;
              }
            }
          }
        } else {
          c = new X(c.key, c.val, c.left, b, null);
        }
      } else {
        c = null;
      }
      return c;
    }
  }
  return null;
}, He = function Ge(b, c, d, e) {
  var g = c.key, h = b.a ? b.a(d, g) : b.call(null, d, g);
  return 0 === h ? c.replace(g, e, c.left, c.right) : 0 > h ? c.replace(g, c.val, Ge(b, c.left, d, e), c.right) : t ? c.replace(g, c.val, c.left, Ge(b, c.right, d, e)) : null;
};
function Ie(a, b, c, d, e) {
  this.V = a;
  this.ta = b;
  this.f = c;
  this.g = d;
  this.j = e;
  this.n = 0;
  this.i = 418776847;
}
f = Ie.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = wc(this);
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  a = Je(this, b);
  return null != a ? a.val : c;
};
f.la = function(a, b, c) {
  a = [null];
  var d = Be(this.V, this.ta, b, c, a);
  return null == d ? (a = P.a(a, 0), E.a(c, a.val) ? this : new Ie(this.V, He(this.V, this.ta, b, c), this.f, this.g, null)) : new Ie(this.V, d.ka(), this.f + 1, this.g, null);
};
f.Ga = function(a, b) {
  return null != Je(this, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return ec(b) ? Ha(this, x.a(b, 0), x.a(b, 1)) : mc.b(ya, this, b);
};
f.Ja = function() {
  return 0 < this.f ? new we(null, ve(this.ta, null, !1), !1, this.f, null) : null;
};
f.toString = function() {
  return yb(this);
};
function Je(a, b) {
  for (var c = a.ta;;) {
    if (null != c) {
      var d = a.V.a ? a.V.a(b, c.key) : a.V.call(null, b, c.key);
      if (0 === d) {
        return c;
      }
      if (0 > d) {
        c = c.left;
      } else {
        if (t) {
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
f.vb = function(a, b) {
  return 0 < this.f ? new we(null, ve(this.ta, null, b), b, this.f, null) : null;
};
f.wb = function(a, b, c) {
  if (0 < this.f) {
    a = null;
    for (var d = this.ta;;) {
      if (null != d) {
        var e = this.V.a ? this.V.a(b, d.key) : this.V.call(null, b, d.key);
        if (0 === e) {
          return new we(null, Rb.a(a, d), c, -1, null);
        }
        if (q(c)) {
          0 > e ? (a = Rb.a(a, d), d = d.left) : d = d.right;
        } else {
          if (t) {
            0 < e ? (a = Rb.a(a, d), d = d.right) : d = d.left;
          } else {
            return null;
          }
        }
      } else {
        return null == a ? null : new we(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
f.ub = function(a, b) {
  return xc.c ? xc.c(b) : xc.call(null, b);
};
f.tb = function() {
  return this.V;
};
f.D = function() {
  return 0 < this.f ? new we(null, ve(this.ta, null, !0), !0, this.f, null) : null;
};
f.I = function() {
  return this.f;
};
f.s = function(a, b) {
  return Vd(this, b);
};
f.F = function(a, b) {
  return new Ie(this.V, this.ta, this.f, b, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(Ke, this.g);
};
f.Ha = function(a, b) {
  var c = [null], d = Fe(this.V, this.ta, b, c);
  return null == d ? null == P.a(c, 0) ? this : new Ie(this.V, null, 0, this.g, null) : new Ie(this.V, d.ka(), this.f - 1, this.g, null);
};
var Ke = new Ie(Ab, null, 0, null, 0), Le = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = G(a), e = qb($d);;) {
      if (b) {
        a = K(K(b));
        var g = H(b), b = H(K(b)), e = tb(e, g, b), b = a;
      } else {
        return sb(e);
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}(), Me = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = Ke;;) {
      if (a) {
        var e = K(K(a)), b = Q.b(b, H(a), H(K(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ne(a, b) {
  this.wa = a;
  this.ba = b;
  this.n = 0;
  this.i = 32374988;
}
f = Ne.prototype;
f.t = function() {
  return Lb(this);
};
f.$ = function() {
  var a = this.wa, a = (a ? a.i & 128 || a.Kb || (a.i ? 0 : r(Da, a)) : r(Da, a)) ? this.wa.$(null) : K(this.wa);
  return null == a ? null : new Ne(a, this.ba);
};
f.B = function(a, b) {
  return N(b, this);
};
f.toString = function() {
  return yb(this);
};
f.M = function(a, b) {
  return Pb.a(b, this);
};
f.N = function(a, b, c) {
  return Pb.b(b, c, this);
};
f.D = function() {
  return this;
};
f.O = function() {
  return this.wa.O(null).Ia(null);
};
f.S = function() {
  var a = this.wa, a = (a ? a.i & 128 || a.Kb || (a.i ? 0 : r(Da, a)) : r(Da, a)) ? this.wa.$(null) : K(this.wa);
  return null != a ? new Ne(a, this.ba) : J;
};
f.s = function(a, b) {
  return Nb(this, b);
};
f.F = function(a, b) {
  return new Ne(this.wa, b);
};
f.w = function() {
  return this.ba;
};
f.G = function() {
  return Qb(J, this.ba);
};
function xc(a) {
  return Ma(a);
}
function yc(a) {
  return Na(a);
}
function Oe(a, b, c) {
  this.g = a;
  this.Aa = b;
  this.j = c;
  this.n = 4;
  this.i = 15077647;
}
f = Oe.prototype;
f.Ca = function() {
  return new Pe(qb(this.Aa));
};
f.t = function() {
  var a = this.j;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = G(this);;) {
      if (b) {
        var c = H(b), a = (a + F(c)) % 4503599627370496, b = K(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.j = a;
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  return Ga(this.Aa, b) ? b : c;
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.B = function(a, b) {
  return new Oe(this.g, Q.b(this.Aa, b, null), null);
};
f.toString = function() {
  return yb(this);
};
f.D = function() {
  var a = G(this.Aa);
  return a ? new Ne(a, null) : null;
};
f.Lb = function(a, b) {
  return new Oe(this.g, Ja(this.Aa, b), null);
};
f.I = function() {
  return va(this.Aa);
};
f.s = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.i & 4096 || b.rc ? !0 : b.i ? !1 : r(Oa, b) : r(Oa, b)) && O(c) === O(b) && Xc(function(a) {
    return kc(c, a);
  }, b);
};
f.F = function(a, b) {
  return new Oe(b, this.Aa, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(Qe, this.g);
};
var Qe = new Oe(null, ae, 0);
function Re(a) {
  var b = a.length;
  if (b <= Zd) {
    for (var c = 0, d = qb(ae);;) {
      if (c < b) {
        var e = c + 1, d = tb(d, a[c], null), c = e
      } else {
        return new Oe(null, sb(d), null);
      }
    }
  } else {
    for (c = 0, d = qb(Qe);;) {
      if (c < b) {
        e = c + 1, d = rb(d, a[c]), c = e;
      } else {
        return sb(d);
      }
    }
  }
}
function Pe(a) {
  this.sa = a;
  this.i = 259;
  this.n = 136;
}
f = Pe.prototype;
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Fa.b(this.sa, c, hc) === hc ? null : c;
      case 3:
        return Fa.b(this.sa, c, hc) === hc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return Fa.b(this.sa, a, hc) === hc ? null : a;
};
f.a = function(a, b) {
  return Fa.b(this.sa, a, hc) === hc ? b : a;
};
f.u = function(a, b) {
  return Fa.b(this, b, null);
};
f.v = function(a, b, c) {
  return Fa.b(this.sa, b, hc) === hc ? c : b;
};
f.I = function() {
  return O(this.sa);
};
f.Ma = function(a, b) {
  this.sa = tb(this.sa, b, null);
  return this;
};
f.Na = function() {
  return new Oe(null, sb(this.sa), null);
};
function Gc(a) {
  if (a && (a.n & 4096 || a.Zb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([v("Doesn't support name: "), v(a)].join(""));
}
var Te = function Se(b, c) {
  return new U(null, function() {
    var d = G(c);
    return d ? q(b.c ? b.c(H(d)) : b.call(null, H(d))) ? N(H(d), Se(b, I(d))) : null : null;
  }, null, null);
};
function Ue(a, b, c) {
  return function(d) {
    var e = kb(a);
    return b.a ? b.a(e.a ? e.a(jb(a, d), c) : e.call(null, jb(a, d), c), 0) : b.call(null, e.a ? e.a(jb(a, d), c) : e.call(null, jb(a, d), c), 0);
  };
}
var Ve = function() {
  function a(a, b, c, h, k) {
    var l = ib(a, c, !0);
    if (q(l)) {
      var n = P.b(l, 0, null);
      return Te(Ue(a, h, k), q(Ue(a, b, c).call(null, n)) ? l : K(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Ue(a, b, c);
    return q(Re([pc, qc]).call(null, b)) ? (a = ib(a, c, !0), q(a) ? (b = P.b(a, 0, null), q(h.c ? h.c(b) : h.call(null, b)) ? a : K(a)) : null) : Te(h, hb(a, !0));
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.C = a;
  return c;
}(), We = function() {
  function a(a, b, c, h, k) {
    var l = ib(a, k, !1);
    if (q(l)) {
      var n = P.b(l, 0, null);
      return Te(Ue(a, b, c), q(Ue(a, h, k).call(null, n)) ? l : K(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Ue(a, b, c);
    return q(Re([nc, oc]).call(null, b)) ? (a = ib(a, c, !1), q(a) ? (b = P.b(a, 0, null), q(h.c ? h.c(b) : h.call(null, b)) ? a : K(a)) : null) : Te(h, hb(a, !1));
  }
  var c = null, c = function(c, e, g, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, g);
      case 5:
        return a.call(this, c, e, g, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.C = a;
  return c;
}();
function Xe(a) {
  var b = Ye.exec(a);
  return E.a(H(b), a) ? 1 === O(b) ? H(b) : Hd(b) : null;
}
function Ze(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === O(c) ? H(c) : Hd(c);
}
function $e(a) {
  a = Ze(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  P.b(a, 0, null);
  P.b(a, 1, null);
  P.b(a, 2, null);
}
function af(a, b, c, d, e, g, h) {
  var k = ga;
  try {
    ga = null == ga ? null : ga - 1;
    if (null != ga && 0 > ga) {
      return z(a, "#");
    }
    z(a, c);
    G(h) && (b.b ? b.b(H(h), a, g) : b.call(null, H(h), a, g));
    for (var l = K(h), n = oa.c(g);l && (null == n || 0 !== n);) {
      z(a, d);
      b.b ? b.b(H(l), a, g) : b.call(null, H(l), a, g);
      var p = K(l);
      c = n - 1;
      l = p;
      n = c;
    }
    q(oa.c(g)) && (z(a, d), b.b ? b.b("...", a, g) : b.call(null, "...", a, g));
    return z(a, e);
  } finally {
    ga = k;
  }
}
var bf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = G(b), g = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = g.o(null, k);
        z(a, l);
        k += 1;
      } else {
        if (e = G(e)) {
          g = e, R(g) ? (e = C(g), h = D(g), g = e, l = O(e), e = h, h = l) : (l = H(g), z(a, l), e = K(g), g = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.h = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), cf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function df(a) {
  return[v('"'), v(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return cf[a];
  })), v('"')].join("");
}
var gf = function ef(b, c, d) {
  if (null == b) {
    return z(c, "nil");
  }
  if (void 0 === b) {
    return z(c, "#\x3cundefined\x3e");
  }
  if (t) {
    q(function() {
      var c = Tb.a(d, la);
      return q(c) ? (c = b ? b.i & 131072 || b.Yb ? !0 : b.i ? !1 : r(Ua, b) : r(Ua, b)) ? Zb(b) : c : c;
    }()) && (z(c, "^"), ef(Zb(b), c, d), z(c, " "));
    if (null == b) {
      return z(c, "nil");
    }
    if (b.Qb) {
      return b.ac(c);
    }
    if (b && (b.i & 2147483648 || b.J)) {
      return b.q(null, c, d);
    }
    if (ra(b) === Boolean || "number" === typeof b) {
      return z(c, "" + v(b));
    }
    if (null != b && b.constructor === Object) {
      return z(c, "#js "), ff.l ? ff.l(cd.a(function(c) {
        return new V(null, 2, 5, W, [Hc.c(c), b[c]], null);
      }, fc(b)), ef, c, d) : ff.call(null, cd.a(function(c) {
        return new V(null, 2, 5, W, [Hc.c(c), b[c]], null);
      }, fc(b)), ef, c, d);
    }
    if (b instanceof Array) {
      return af(c, ef, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return q(ka.c(d)) ? z(c, df(b)) : z(c, b);
    }
    if (Wb(b)) {
      return bf.e(c, M(["#\x3c", "" + v(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + v(b);;) {
          if (O(d) < c) {
            d = [v("0"), v(d)].join("");
          } else {
            return d;
          }
        }
      };
      return bf.e(c, M(['#inst "', "" + v(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? bf.e(c, M(['#"', b.source, '"'], 0)) : (b ? b.i & 2147483648 || b.J || (b.i ? 0 : r(lb, b)) : r(lb, b)) ? mb(b, c, d) : t ? bf.e(c, M(["#\x3c", "" + v(b), "\x3e"], 0)) : null;
  }
  return null;
}, hf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || qa(G(a))) {
      b = "";
    } else {
      b = v;
      var e = ha(), g = new ea;
      a: {
        var h = new xb(g);
        gf(H(a), h, e);
        a = G(K(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var p = k.o(null, n);
            z(h, " ");
            gf(p, h, e);
            n += 1;
          } else {
            if (a = G(a)) {
              k = a, R(k) ? (a = C(k), l = D(k), k = a, p = O(a), a = l, l = p) : (p = H(k), z(h, " "), gf(p, h, e), a = K(k), k = null, l = 0), n = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(g);
    }
    return b;
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function ff(a, b, c, d) {
  return af(c, function(a, c, d) {
    b.b ? b.b(Ma(a), c, d) : b.call(null, Ma(a), c, d);
    z(c, " ");
    return b.b ? b.b(Na(a), c, d) : b.call(null, Na(a), c, d);
  }, "{", ", ", "}", d, G(a));
}
Ne.prototype.J = !0;
Ne.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Fb.prototype.J = !0;
Fb.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Ld.prototype.J = !0;
Ld.prototype.q = function(a, b, c) {
  return af(b, gf, "[", " ", "]", c, this);
};
Nc.prototype.J = !0;
Nc.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Ie.prototype.J = !0;
Ie.prototype.q = function(a, b, c) {
  return ff(this, gf, b, c);
};
ia.prototype.J = !0;
ia.prototype.q = function(a, b, c) {
  return ff(this, gf, b, c);
};
Rd.prototype.J = !0;
Rd.prototype.q = function(a, b, c) {
  return af(b, gf, "#queue [", " ", "]", c, G(this));
};
U.prototype.J = !0;
U.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Mb.prototype.J = !0;
Mb.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
qe.prototype.J = !0;
qe.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
X.prototype.J = !0;
X.prototype.q = function(a, b, c) {
  return af(b, gf, "[", " ", "]", c, this);
};
Jd.prototype.J = !0;
Jd.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
se.prototype.J = !0;
se.prototype.q = function(a, b, c) {
  return ff(this, gf, b, c);
};
Oe.prototype.J = !0;
Oe.prototype.q = function(a, b, c) {
  return af(b, gf, "#{", " ", "}", c, this);
};
V.prototype.J = !0;
V.prototype.q = function(a, b, c) {
  return af(b, gf, "[", " ", "]", c, this);
};
zc.prototype.J = !0;
zc.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Xd.prototype.J = !0;
Xd.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
Ac.prototype.J = !0;
Ac.prototype.q = function(a, b) {
  return z(b, "()");
};
Y.prototype.J = !0;
Y.prototype.q = function(a, b, c) {
  return af(b, gf, "[", " ", "]", c, this);
};
Ec.prototype.J = !0;
Ec.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
re.prototype.J = !0;
re.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
we.prototype.J = !0;
we.prototype.q = function(a, b, c) {
  return af(b, gf, "(", " ", ")", c, this);
};
V.prototype.Wa = !0;
V.prototype.Xa = function(a, b) {
  return lc.a(this, b);
};
Ld.prototype.Wa = !0;
Ld.prototype.Xa = function(a, b) {
  return lc.a(this, b);
};
S.prototype.Wa = !0;
S.prototype.Xa = function(a, b) {
  return zb(this, b);
};
Cb.prototype.Wa = !0;
Cb.prototype.Xa = function(a, b) {
  return zb(this, b);
};
function jf(a, b, c, d) {
  this.state = a;
  this.g = b;
  this.hc = c;
  this.ja = d;
  this.i = 2153938944;
  this.n = 2;
}
f = jf.prototype;
f.t = function() {
  return this[aa] || (this[aa] = ++ba);
};
f.yb = function(a, b, c) {
  a = G(this.ja);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        R(a) ? (d = C(a), a = D(a), k = d, e = O(d), d = k) : (d = H(a), k = P.b(d, 0, null), h = P.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = K(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.xb = function(a, b, c) {
  return this.ja = Q.b(this.ja, b, c);
};
f.q = function(a, b, c) {
  z(b, "#\x3cAtom: ");
  gf(this.state, b, c);
  return z(b, "\x3e");
};
f.w = function() {
  return this.g;
};
f.Gb = function() {
  return this.state;
};
f.s = function(a, b) {
  return this === b;
};
var lf = function() {
  function a(a) {
    return new jf(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = M(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = ic(c) ? Yb.a(Le, c) : c, e = Tb.a(d, kf), d = Tb.a(d, la);
      return new jf(a, d, e, null);
    }
    a.k = 1;
    a.h = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, M(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.c = a;
  b.e = c.e;
  return b;
}();
function mf(a, b) {
  var c = a.hc;
  if (null != c && !q(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([v("Assert failed: "), v("Validator rejected reference state"), v("\n"), v(hf.e(M([Dc(new Cb(null, "validate", "validate", 1233162959, null), new Cb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.ja && nb(a, c, b);
  return b;
}
var Z = function() {
  function a(a, b, c, d, e) {
    return mf(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return mf(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return mf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return mf(a, b.c ? b.c(a.state) : b.call(null, a.state));
  }
  var e = null, g = function() {
    function a(c, d, e, g, h, B) {
      var L = null;
      5 < arguments.length && (L = M(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, g, h, L);
    }
    function b(a, c, d, e, g, h) {
      return mf(a, Yb.e(c, a.state, d, e, g, M([h], 0)));
    }
    a.k = 5;
    a.h = function(a) {
      var c = H(a);
      a = K(a);
      var d = H(a);
      a = K(a);
      var e = H(a);
      a = K(a);
      var g = H(a);
      a = K(a);
      var h = H(a);
      a = I(a);
      return b(c, d, e, g, h, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, k, l, n, p, s) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, p);
      default:
        return g.e(e, k, l, n, p, M(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.h = g.h;
  e.a = d;
  e.b = c;
  e.l = b;
  e.C = a;
  e.e = g.e;
  return e;
}();
function nf() {
  var a = of();
  return y(a);
}
function pf(a, b, c) {
  ob(a, b, c);
}
var qf = null, rf = function() {
  function a(a) {
    null == qf && (qf = lf.c(0));
    return Eb.c([v(a), v(Z.a(qf, Gb))].join(""));
  }
  function b() {
    return c.c("G__");
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
  c.p = b;
  c.c = a;
  return c;
}(), sf = {};
function tf(a) {
  if (a ? a.Vb : a) {
    return a.Vb(a);
  }
  var b;
  b = tf[m(null == a ? null : a)];
  if (!b && (b = tf._, !b)) {
    throw u("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function uf(a) {
  return(a ? q(q(null) ? null : a.Ub) || (a.Pb ? 0 : r(sf, a)) : r(sf, a)) ? tf(a) : "string" === typeof a || "number" === typeof a || a instanceof S || a instanceof Cb ? vf.c ? vf.c(a) : vf.call(null, a) : hf.e(M([a], 0));
}
var vf = function wf(b) {
  if (null == b) {
    return null;
  }
  if (b ? q(q(null) ? null : b.Ub) || (b.Pb ? 0 : r(sf, b)) : r(sf, b)) {
    return tf(b);
  }
  if (b instanceof S) {
    return Gc(b);
  }
  if (b instanceof Cb) {
    return "" + v(b);
  }
  if (dc(b)) {
    var c = {};
    b = G(b);
    for (var d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
        c[uf(k)] = wf(h);
        g += 1;
      } else {
        if (b = G(b)) {
          R(b) ? (e = C(b), b = D(b), d = e, e = O(e)) : (e = H(b), d = P.b(e, 0, null), e = P.b(e, 1, null), c[uf(d)] = wf(e), b = K(b), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.i & 8 || b.kc || (b.i ? 0 : r(xa, b)) : r(xa, b)) {
    c = [];
    b = G(cd.a(wf, b));
    d = null;
    for (g = e = 0;;) {
      if (g < e) {
        k = d.o(null, g), c.push(k), g += 1;
      } else {
        if (b = G(b)) {
          d = b, R(d) ? (b = C(d), g = D(d), d = b, e = O(b), b = g) : (b = H(d), c.push(b), b = K(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return t ? b : null;
}, xf = null;
function of() {
  null == xf && (xf = lf.c(new ia(null, 3, [yf, ae, zf, ae, Af, ae], null)));
  return xf;
}
var Bf = function() {
  function a(a, b, g) {
    var h = E.a(b, g);
    if (!h && !(h = kc(Af.c(a).call(null, b), g)) && (h = ec(g)) && (h = ec(b))) {
      if (h = O(g) === O(b)) {
        for (var h = !0, k = 0;;) {
          if (h && k !== O(g)) {
            h = c.b(a, b.c ? b.c(k) : b.call(null, k), g.c ? g.c(k) : g.call(null, k)), k += 1;
          } else {
            return h;
          }
        }
      } else {
        return h;
      }
    } else {
      return h;
    }
  }
  function b(a, b) {
    return c.b(nf(), a, b);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Cf = function() {
  function a(a, b) {
    var c = Tb.a(yf.c(a), b);
    return G(c) ? c : null;
  }
  function b(a) {
    return c.a(nf(), a);
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
  c.c = b;
  c.a = a;
  return c;
}();
function Df(a, b, c, d) {
  Z.a(a, function() {
    return y(b);
  });
  Z.a(c, function() {
    return y(d);
  });
}
var Ff = function Ef(b, c, d) {
  var e = y(d).call(null, b), e = q(q(e) ? e.c ? e.c(c) : e.call(null, c) : e) ? !0 : null;
  if (q(e)) {
    return e;
  }
  e = function() {
    for (var e = Cf.c(c);;) {
      if (0 < O(e)) {
        Ef(b, H(e), d), e = I(e);
      } else {
        return null;
      }
    }
  }();
  if (q(e)) {
    return e;
  }
  e = function() {
    for (var e = Cf.c(b);;) {
      if (0 < O(e)) {
        Ef(H(e), c, d), e = I(e);
      } else {
        return null;
      }
    }
  }();
  return q(e) ? e : !1;
};
function Gf(a, b, c) {
  c = Ff(a, b, c);
  return q(c) ? c : Bf.a(a, b);
}
var If = function Hf(b, c, d, e, g, h, k) {
  var l = mc.b(function(e, h) {
    var k = P.b(h, 0, null);
    P.b(h, 1, null);
    if (Bf.b(y(d), c, k)) {
      var l;
      l = (l = null == e) ? l : Gf(k, H(e), g);
      l = q(l) ? h : e;
      if (!q(Gf(H(l), k, g))) {
        throw Error([v("Multiple methods in multimethod '"), v(b), v("' match dispatch value: "), v(c), v(" -\x3e "), v(k), v(" and "), v(H(l)), v(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, y(e));
  if (q(l)) {
    if (E.a(y(k), y(d))) {
      return Z.l(h, Q, c, H(K(l))), H(K(l));
    }
    Df(h, e, k, d);
    return Hf(b, c, d, e, g, h, k);
  }
  return null;
};
function Jf(a, b) {
  if (a ? a.Jb : a) {
    return a.Jb(0, b);
  }
  var c;
  c = Jf[m(null == a ? null : a)];
  if (!c && (c = Jf._, !c)) {
    throw u("IMultiFn.-get-method", a);
  }
  return c.call(null, a, b);
}
function Kf(a, b) {
  if (a ? a.Ib : a) {
    return a.Ib(0, b);
  }
  var c;
  c = Kf[m(null == a ? null : a)];
  if (!c && (c = Kf._, !c)) {
    throw u("IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b);
}
function Lf(a, b, c, d, e, g, h, k) {
  this.name = a;
  this.cc = b;
  this.bc = c;
  this.Za = d;
  this.Qa = e;
  this.fc = g;
  this.$a = h;
  this.Va = k;
  this.i = 4194304;
  this.n = 256;
}
f = Lf.prototype;
f.t = function() {
  return this[aa] || (this[aa] = ++ba);
};
function Mf(a, b) {
  var c = Nf;
  Z.l(c.Qa, Q, a, b);
  Df(c.$a, c.Qa, c.Va, c.Za);
}
f.Jb = function(a, b) {
  E.a(y(this.Va), y(this.Za)) || Df(this.$a, this.Qa, this.Va, this.Za);
  var c = y(this.$a).call(null, b);
  if (q(c)) {
    return c;
  }
  c = If(this.name, b, this.Za, this.Qa, this.fc, this.$a, this.Va);
  return q(c) ? c : y(this.Qa).call(null, this.bc);
};
f.Ib = function(a, b) {
  var c = this.name, d = Yb.a(this.cc, b), e = Jf(this, d);
  if (!q(e)) {
    throw Error([v("No method in multimethod '"), v(c), v("' for dispatch value: "), v(d)].join(""));
  }
  return Yb.a(e, b);
};
f.call = function() {
  function a(a, b) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return Kf(this, e);
  }
  function b(a, b) {
    return Kf(this, b);
  }
  a.k = 1;
  a.h = function(a) {
    H(a);
    a = I(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
f.apply = function(a, b) {
  return Kf(this, b);
};
function Of(a) {
  this.Ab = a;
  this.n = 0;
  this.i = 2153775104;
}
Of.prototype.t = function() {
  return ca(hf.e(M([this], 0)));
};
Of.prototype.q = function(a, b) {
  return z(b, [v('#uuid "'), v(this.Ab), v('"')].join(""));
};
Of.prototype.s = function(a, b) {
  return b instanceof Of && this.Ab === b.Ab;
};
var ma = new S(null, "dup", "dup"), Pf = new S(null, "href", "href"), zf = new S(null, "descendants", "descendants"), Bb = new S(null, "default", "default"), Qf = new S(null, "text", "text"), Rf = new S(null, "focus-select", "focus-select"), Sf = new S(null, "scroll-to", "scroll-to"), Tf = new S("tailrecursion.javelin", "none", "tailrecursion.javelin/none"), Uf = new S(null, "class", "class"), Vf = new S(null, "fade-toggle", "fade-toggle"), yf = new S(null, "parents", "parents"), ja = new S(null, 
"flush-on-newline", "flush-on-newline"), Wf = new S(null, "hierarchy", "hierarchy"), Xf = new S(null, "focus", "focus"), Yf = new S(null, "size", "size"), Zf = new S(null, "do-toggle", "do-toggle"), Af = new S(null, "ancestors", "ancestors"), $f = new S(null, "toggle", "toggle"), ag = new S(null, "css", "css"), oa = new S(null, "print-length", "print-length"), t = new S(null, "else", "else"), ka = new S(null, "readably", "readably"), kf = new S(null, "validator", "validator"), la = new S(null, "meta", 
"meta"), bg = new S("tailrecursion.javelin", "cell", "tailrecursion.javelin/cell"), cg = new S("tailrecursion.priority-map", "not-found", "tailrecursion.priority-map/not-found"), dg = new S(null, "scrollTop", "scrollTop"), eg = new S(null, "value", "value"), fg = new S(null, "select", "select"), gg = new S(null, "attr", "attr"), hg = new S(null, "slide-toggle", "slide-toggle"), ig = new S(null, "clicked", "clicked"), jg = new S(null, "on-click", "on-click"), kg = new S("tailrecursion.hoplon", "default", 
"tailrecursion.hoplon/default");
var lg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(Yb.a(v, b));
  }
  a.k = 1;
  a.h = function(a) {
    H(a);
    a = I(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
$e("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
$e("([-+]?[0-9]+)/([0-9]+)");
$e("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
$e("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
$e("[0-9A-Fa-f]{2}");
$e("[0-9A-Fa-f]{4}");
function mg(a) {
  if (E.a(3, O(a))) {
    return a;
  }
  if (3 < O(a)) {
    return vc.b(a, 0, 3);
  }
  if (t) {
    for (a = new ea(a);;) {
      if (3 > a.Ba.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var ng = function() {
  var a = new V(null, 13, 5, W, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new V(null, 13, 5, W, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return Tb.a(q(d) ? b : a, c);
  };
}(), Ye = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function og(a) {
  a = parseInt(a);
  return qa(isNaN(a)) ? a : null;
}
function pg(a, b, c, d) {
  a <= b && b <= c || lg.e(null, M([[v(d), v(" Failed:  "), v(a), v("\x3c\x3d"), v(b), v("\x3c\x3d"), v(c)].join("")], 0));
  return b;
}
function qg(a) {
  var b = Xe(a);
  P.b(b, 0, null);
  var c = P.b(b, 1, null), d = P.b(b, 2, null), e = P.b(b, 3, null), g = P.b(b, 4, null), h = P.b(b, 5, null), k = P.b(b, 6, null), l = P.b(b, 7, null), n = P.b(b, 8, null), p = P.b(b, 9, null), s = P.b(b, 10, null);
  if (qa(b)) {
    return lg.e(null, M([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
  }
  a = og(c);
  var b = function() {
    var a = og(d);
    return q(a) ? a : 1;
  }(), c = function() {
    var a = og(e);
    return q(a) ? a : 1;
  }(), A = function() {
    var a = og(g);
    return q(a) ? a : 0;
  }(), B = function() {
    var a = og(h);
    return q(a) ? a : 0;
  }(), L = function() {
    var a = og(k);
    return q(a) ? a : 0;
  }(), T = function() {
    var a = og(mg(l));
    return q(a) ? a : 0;
  }(), n = (E.a(n, "-") ? -1 : 1) * (60 * function() {
    var a = og(p);
    return q(a) ? a : 0;
  }() + function() {
    var a = og(s);
    return q(a) ? a : 0;
  }());
  return new V(null, 8, 5, W, [a, pg(1, b, 12, "timestamp month field must be in range 1..12"), pg(1, c, ng.a ? ng.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : ng.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), pg(0, A, 23, "timestamp hour field must be in range 0..23"), pg(0, B, 59, "timestamp minute field must be in range 0..59"), pg(0, 
  L, E.a(B, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), pg(0, T, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var rg = lf.c(new ia(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = qg(a), q(b)) {
      a = P.b(b, 0, null);
      var c = P.b(b, 1, null), d = P.b(b, 2, null), e = P.b(b, 3, null), g = P.b(b, 4, null), h = P.b(b, 5, null), k = P.b(b, 6, null);
      b = P.b(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, g, h, k) - 6E4 * b);
    } else {
      b = lg.e(null, M([[v("Unrecognized date/time syntax: "), v(a)].join("")], 0));
    }
  } else {
    b = lg.e(null, M(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Of(a) : lg.e(null, M(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return ec(a) ? md(Sd, a) : lg.e(null, M(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (ec(a)) {
    var b = [];
    a = G(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var g = c.o(null, e);
        b.push(g);
        e += 1;
      } else {
        if (a = G(a)) {
          c = a, R(c) ? (a = C(c), e = D(c), c = a, d = O(a), a = e) : (a = H(c), b.push(a), a = K(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (dc(a)) {
    b = {};
    a = G(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.o(null, e), g = P.b(h, 0, null), h = P.b(h, 1, null);
        b[Gc(g)] = h;
        e += 1;
      } else {
        if (a = G(a)) {
          R(a) ? (d = C(a), a = D(a), c = d, d = O(d)) : (d = H(a), c = P.b(d, 0, null), d = P.b(d, 1, null), b[Gc(c)] = d, a = K(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return t ? lg.e(null, M([[v("JS literal expects a vector or map containing "), v("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null));
lf.c(null);
function sg(a, b, c, d) {
  this.K = a;
  this.P = b;
  this.g = c;
  this.j = d;
  this.n = 0;
  this.i = 2565220111;
}
f = sg.prototype;
f.t = function() {
  var a = this.j;
  return null != a ? a : this.j = a = wc(this);
};
f.u = function(a, b) {
  return Tb.a(this.P, b);
};
f.v = function(a, b, c) {
  return Tb.b(this.P, b, c);
};
f.la = function(a, b, c) {
  a = Tb.b(this.P, b, null);
  if (q(a)) {
    if (E.a(a, c)) {
      return this;
    }
    var d = Tb.a(this.K, a);
    return E.a(O(d), 1) ? new sg(Q.b(Vb.a(this.K, a), c, Rb.a(Tb.b(this.K, c, Qe), b)), Q.b(this.P, b, c), this.g, null) : new sg(Q.e(this.K, a, ac.a(Tb.a(this.K, a), b), M([c, Rb.a(Tb.b(this.K, c, Qe), b)], 0)), Q.b(this.P, b, c), this.g, null);
  }
  return new sg(Q.b(this.K, c, Rb.a(Tb.b(this.K, c, Qe), b)), Q.b(this.P, b, c), this.g, null);
};
f.Ga = function(a, b) {
  return kc(this.P, b);
};
f.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.u(null, c);
      case 3:
        return this.v(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.c = function(a) {
  return this.u(null, a);
};
f.a = function(a, b) {
  return this.v(null, a, b);
};
f.q = function(a, b, c) {
  return af(b, function(a) {
    return af(b, gf, "", " ", "", c, a);
  }, "#tailrecursion.priority-map {", ", ", "}", c, this);
};
f.B = function(a, b) {
  return ec(b) ? Ha(this, x.a(b, 0), x.a(b, 1)) : mc.b(ya, this, b);
};
f.Ja = function() {
  var a = this;
  return G(function() {
    return function c(a) {
      return new U(null, function() {
        for (var e = a;;) {
          var g = G(e);
          if (g) {
            var h = g, k = H(h), l = P.b(k, 0, null), n = P.b(k, 1, null);
            if (g = G(function(a, c, d, e, g, h) {
              return function na(k) {
                return new U(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = G(k);
                      if (a) {
                        if (R(a)) {
                          var c = C(a), e = O(c), g = Lc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = x.a(c, h);
                                g.add(new V(null, 2, 5, W, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Oc(g.Q(), na(D(a))) : Oc(g.Q(), null);
                        }
                        g = H(a);
                        return N(new V(null, 2, 5, W, [g, d], null), na(I(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, g, h), null, null);
              };
            }(e, k, l, n, h, g)(n))) {
              return Tc.a(g, c(I(e)));
            }
            e = I(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(gb(a.K));
  }());
};
f.vb = function(a, b) {
  return(q(b) ? G : Bc).call(null, this);
};
f.wb = function(a, b, c) {
  var d = q(c) ? Ve.b(this.K, qc, b) : We.b(this.K, oc, b);
  return G(function() {
    return function g(a) {
      return new U(null, function() {
        for (var b = a;;) {
          var c = G(b);
          if (c) {
            var d = c, p = H(d), s = P.b(p, 0, null), A = P.b(p, 1, null);
            if (c = G(function(a, b, c, d, g, h) {
              return function pb(k) {
                return new U(null, function(a, b, c) {
                  return function() {
                    for (;;) {
                      var a = G(k);
                      if (a) {
                        if (R(a)) {
                          var b = C(a), d = O(b), g = Lc(d);
                          a: {
                            for (var h = 0;;) {
                              if (h < d) {
                                var l = x.a(b, h);
                                g.add(new V(null, 2, 5, W, [l, c], null));
                                h += 1;
                              } else {
                                b = !0;
                                break a;
                              }
                            }
                            b = void 0;
                          }
                          return b ? Oc(g.Q(), pb(D(a))) : Oc(g.Q(), null);
                        }
                        g = H(a);
                        return N(new V(null, 2, 5, W, [g, c], null), pb(I(a)));
                      }
                      return null;
                    }
                  };
                }(a, b, c, d, g, h), null, null);
              };
            }(b, p, s, A, d, c)(A))) {
              return Tc.a(c, g(I(b)));
            }
            b = I(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(d);
  }());
};
f.ub = function(a, b) {
  return Na(b);
};
f.tb = function() {
  return Ab;
};
f.D = function() {
  var a = this;
  return G(function() {
    return function c(a) {
      return new U(null, function() {
        for (var e = a;;) {
          var g = G(e);
          if (g) {
            var h = g, k = H(h), l = P.b(k, 0, null), n = P.b(k, 1, null);
            if (g = G(function(a, c, d, e, g, h) {
              return function na(k) {
                return new U(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = G(k);
                      if (a) {
                        if (R(a)) {
                          var c = C(a), e = O(c), g = Lc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = x.a(c, h);
                                g.add(new V(null, 2, 5, W, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Oc(g.Q(), na(D(a))) : Oc(g.Q(), null);
                        }
                        g = H(a);
                        return N(new V(null, 2, 5, W, [g, d], null), na(I(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, g, h), null, null);
              };
            }(e, k, l, n, h, g)(n))) {
              return Tc.a(g, c(I(e)));
            }
            e = I(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(a.K);
  }());
};
f.I = function() {
  return O(this.P);
};
f.na = function() {
  if (0 === O(this.P)) {
    return null;
  }
  var a = H(this.K);
  return new V(null, 2, 5, W, [H(Na(a)), Ma(a)], null);
};
f.oa = function() {
  if (0 === O(this.P)) {
    throw Error("Can't pop empty priority map");
  }
  var a = H(this.K), b = Na(a), c = H(b), a = Ma(a);
  return E.a(O(b), 1) ? new sg(Vb.a(this.K, a), Vb.a(this.P, c), this.g, null) : new sg(Q.b(this.K, a, ac.a(b, c)), Vb.a(this.P, c), this.g, null);
};
f.s = function(a, b) {
  return $a(this.P, b);
};
f.F = function(a, b) {
  return new sg(this.K, this.P, b, this.j);
};
f.w = function() {
  return this.g;
};
f.G = function() {
  return Qb(tg, this.g);
};
f.Ha = function(a, b) {
  var c = this.P.a ? this.P.a(b, cg) : this.P.call(null, b, cg);
  if (E.a(c, cg)) {
    return this;
  }
  var d = this.K.c ? this.K.c(c) : this.K.call(null, c);
  return E.a(O(d), 1) ? new sg(Vb.a(this.K, c), Vb.a(this.P, b), this.g, null) : new sg(Q.b(this.K, c, ac.a(d, b)), Vb.a(this.P, b), this.g, null);
};
var tg = new sg(Me(), ae, ae, null), ug = "" + v("tailrecursion.priority-map");
Tb.a(y(rg), ug);
Z.l(rg, Q, ug, function(a) {
  return dc(a) ? md(tg, a) : lg.e(null, M(["Priority map literal expects a map for its elements."], 0));
});
var vg = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = G(a);
    for (var b = tg;;) {
      if (a) {
        var e = K(K(a)), b = Q.b(b, H(a), H(K(a)));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function wg(a, b) {
  return function d(b) {
    var g = $b(b);
    return q(g) ? new U(null, function() {
      return N(g, d(md(null == b ? null : Ra(b), q(Yc.c ? Yc.c(g) : Yc.call(null, g)) ? a.c ? a.c(g) : a.call(null, g) : null)));
    }, null, null) : null;
  }(Rb.a(Sd, b));
}
var xg = lf.c(0);
function yg() {
  return Z.a(xg, Gb);
}
function zg(a) {
  return q(Ag.c ? Ag.c(a) : Ag.call(null, a)) ? y(a) : a;
}
function Bg(a) {
  for (var b = vg.e(M([a, a.ha], 0));;) {
    if (G(b)) {
      a = xc($b(b));
      var c = a.Rb.call(null), d = Wc.a(c, a.prev), e = function() {
        return function(a, b) {
          return Q.b(a, b, b.ha);
        };
      }(b, a, c, d), b = null == b ? null : Ra(b), g = a.fa;
      d && (a.prev = c);
      b = d ? mc.b(e, b, g) : b;
    } else {
      return null;
    }
  }
}
function Cg(a) {
  var b = a.Ta;
  a.Ta = Fd;
  a.ja = ae;
  for (var b = G(ld(Ag, b)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var g = c.o(null, e);
      g.fa = ac.a(g.fa, a);
      e += 1;
    } else {
      if (b = G(b)) {
        c = b, R(c) ? (b = C(c), d = D(c), c = b, g = O(b), b = d, d = g) : (g = H(c), g.fa = ac.a(g.fa, a), b = K(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
var Dg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = P.b(b, 0, null), g = P.b(b, 1, null);
    Cg(a);
    a.Ta = q(e) ? Rb.a(Hd(g), e) : Hd(g);
    for (var g = G(ld(Ag, a.Ta)), h = null, k = 0, l = 0;;) {
      if (l < k) {
        var n = h.o(null, l);
        n.fa = Rb.a(n.fa, a);
        if (n.ha > a.ha) {
          for (var n = G(wg(function() {
            return function(a) {
              return a.fa;
            };
          }(g, h, k, l, n), n)), p = null, s = 0, A = 0;;) {
            if (A < s) {
              p.o(null, A).ha = yg(), A += 1;
            } else {
              if (n = G(n)) {
                p = n, R(p) ? (n = C(p), A = D(p), p = n, s = O(n), n = A) : (H(p).ha = yg(), n = K(p), p = null, s = 0), A = 0;
              } else {
                break;
              }
            }
          }
        }
        l += 1;
      } else {
        if (p = G(g)) {
          n = p;
          if (R(n)) {
            g = C(n), l = D(n), h = g, k = O(g), g = l;
          } else {
            s = H(n);
            s.fa = Rb.a(s.fa, a);
            if (s.ha > a.ha) {
              for (g = G(wg(function() {
                return function(a) {
                  return a.fa;
                };
              }(g, h, k, l, s, n, p), s)), h = null, l = k = 0;;) {
                if (l < k) {
                  h.o(null, l).ha = yg(), l += 1;
                } else {
                  if (g = G(g)) {
                    h = g, R(h) ? (g = C(h), l = D(h), h = g, k = O(g), g = l) : (H(h).ha = yg(), g = K(h), h = null, k = 0), l = 0;
                  } else {
                    break;
                  }
                }
              }
            }
            g = K(n);
            h = null;
            k = 0;
          }
          l = 0;
        } else {
          break;
        }
      }
    }
    g = function(b) {
      return function() {
        for (var d = a.state, e = b(a.Ta), g = G(Vb.a(a.ja, bg)), h = null, k = 0, l = 0;;) {
          if (l < k) {
            var n = h.o(null, l), p = P.b(n, 0, null), n = P.b(n, 1, null);
            n.l ? n.l(p, a, d, e) : n.call(null, p, a, d, e);
            l += 1;
          } else {
            if (g = G(g)) {
              R(g) ? (k = C(g), g = D(g), h = k, k = O(k)) : (k = H(g), h = P.b(k, 0, null), k = P.b(k, 1, null), k.l ? k.l(h, a, d, e) : k.call(null, h, a, d, e), g = K(g), h = null, k = 0), l = 0;
            } else {
              break;
            }
          }
        }
        return a.state = e;
      };
    }(function(a) {
      return Yb.a(zg($b(a)), cd.a(zg, null == a ? null : Ra(a)));
    });
    ob(a, bg, q(e) ? function() {
      throw Error("formula cell can't be updated via swap! or reset!");
    } : function(a, b) {
      return Bg(b);
    });
    a.dc = q(e) ? !1 : !0;
    a.Rb = q(e) ? g : function() {
      return y(a);
    };
    Bg(a);
    return a;
  }
  a.k = 1;
  a.h = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
function Eg(a, b, c, d, e, g, h, k, l) {
  this.g = a;
  this.state = b;
  this.ha = c;
  this.prev = d;
  this.Ta = e;
  this.fa = g;
  this.Rb = h;
  this.ja = k;
  this.dc = l;
  this.n = 2;
  this.i = 2147647488;
}
f = Eg.prototype;
f.yb = function(a, b, c) {
  a = G(this.ja);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g), k = P.b(h, 0, null), h = P.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      g += 1;
    } else {
      if (a = G(a)) {
        R(a) ? (d = C(a), a = D(a), k = d, e = O(d), d = k) : (d = H(a), k = P.b(d, 0, null), h = P.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = K(a), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
};
f.xb = function(a, b, c) {
  return this.ja = Q.b(this.ja, b, c);
};
f.Gb = function() {
  return this.state;
};
f.w = function() {
  return this.g;
};
f.q = function(a, b) {
  return bf.e(b, M(["#\x3cCell: ", hf.e(M([this.state], 0)), "\x3e"], 0));
};
function Fg(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return Dg.e(Gg.c ? Gg.c(Tf) : Gg.call(null, Tf), M([a, b], 0));
    }
    b.k = 0;
    b.h = function(a) {
      a = G(a);
      return c(a);
    };
    b.e = c;
    return b;
  }();
}
function Gg(a) {
  return Dg(new Eg(ae, a, yg(), a, Fd, Qe, null, ae, null));
}
function Ag(a) {
  return E.a(ra(a), Eg) ? a : null;
}
;function Hg(a, b) {
  if (0 >= b || b >= 2 + O(a)) {
    return Rb.a(Hd(N("", cd.a(v, G(a)))), "");
  }
  if (q(E.a ? E.a(1, b) : E.call(null, 1, b))) {
    return new V(null, 1, 5, W, [a], null);
  }
  if (q(E.a ? E.a(2, b) : E.call(null, 2, b))) {
    return new V(null, 2, 5, W, ["", a], null);
  }
  var c = b - 2;
  return Rb.a(Hd(N("", Kd.b(Hd(cd.a(v, G(a))), 0, c))), vc.a(a, c));
}
var Ig = function() {
  function a(a, b, c) {
    if (E.a("" + v(b), "/(?:)/")) {
      b = Hg(a, c);
    } else {
      if (1 > c) {
        b = Hd(("" + v(a)).split(b));
      } else {
        a: {
          for (var h = c, k = Fd;;) {
            if (E.a(h, 1)) {
              b = Rb.a(k, a);
              break a;
            }
            var l = Ze(b, a);
            if (q(l)) {
              var n = l, l = a.indexOf(n), n = a.substring(l + O(n)), h = h - 1, k = Rb.a(k, a.substring(0, l));
              a = n;
            } else {
              b = Rb.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (E.a(0, c)) {
      a: {
        for (c = b;;) {
          if (E.a("", $b(c))) {
            c = null == c ? null : Ra(c);
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
    return c.b(a, b, 0);
  }
  var c = null, c = function(c, e, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
var Jg = qa(window.Node), Kg = qa(Jg) ? function(a) {
  return a instanceof Node;
} : function(a) {
  try {
    return a.nodeType;
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}, Lg = qa(Jg) ? ec : function(a) {
  try {
    return ec(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}, Mg = qa(Jg) ? ic : function(a) {
  try {
    return ic(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (t) {
      throw b;
    }
    return null;
  }
}, Ng = function() {
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
  c.c = b;
  c.a = a;
  return c;
}(), Pg = function Og(b) {
  return jd.a(function(b) {
    var d;
    d = Mg.c ? Mg.c(b) : Mg.call(null, b);
    d = q(d) ? d : Lg.c ? Lg.c(b) : Lg.call(null, b);
    return q(d) ? Og(b) : new V(null, 1, 5, W, [b], null);
  }, b);
};
function Qg(a, b) {
  return Ng.c(function d() {
    return q(document.documentElement.contains(a)) ? b.p ? b.p() : b.call(null) : Ng.a(d, 20);
  });
}
function Rg(a) {
  var b = P.b(a, 0, null), c = uc(a), d = Zc.a(Fc, H), e = function(a) {
    return function(b) {
      return cd.a(Hd, Te(a, nd.a(2, b)));
    };
  }(d), d = function(a) {
    return function(b) {
      return jd.a(Yc, gd(a, nd.l(2, 2, Fd, b)));
    };
  }(d, e);
  return dc(b) ? new V(null, 2, 5, W, [b, c], null) : b instanceof S ? new V(null, 2, 5, W, [md(ae, e(a)), d(a)], null) : t ? new V(null, 2, 5, W, [ae, a], null) : null;
}
function Sg(a, b) {
  function c(a) {
    return a.substr(0, 3);
  }
  for (var d = function() {
    return function(a) {
      return Hc.c(a.substr(3));
    };
  }(c), e = function(a) {
    return function(b) {
      var c = a(b);
      return Hc.c(E.a("do-", c) ? b.substr(3) : b);
    };
  }(c, d), g = lf.c(ae), h = lf.c(ae), k = G(b), l = null, n = 0, p = 0;;) {
    if (p < n) {
      var s = l.o(null, p), A = P.b(s, 0, null), s = P.b(s, 1, null), B = Gc(A), A = jQuery(a);
      if (q(Ag(s))) {
        Z.l(g, Q, e(B), s);
      } else {
        if (E.a(B, "class")) {
          for (var s = G(Ig.a(s, / /)), B = null, L = 0, T = 0;;) {
            if (T < L) {
              var pa = B.o(null, T);
              A.addClass(pa);
              T += 1;
            } else {
              if (s = G(s)) {
                B = s, R(B) ? (s = C(B), T = D(B), B = s, L = O(s), s = T) : (s = H(B), A.addClass(s), s = K(B), B = null, L = 0), T = 0;
              } else {
                break;
              }
            }
          }
        } else {
          E.a(B, "css") ? A.css(vf(s)) : E.a("do-", c(B)) ? Z.l(g, Q, d(B), s) : E.a("on-", c(B)) ? Z.l(h, Q, d(B), s) : t && (E.a(!1, s) ? A.removeAttr(B) : E.a(!0, s) ? A.attr(B, B) : t && A.attr(B, "" + v(s)));
        }
      }
      p += 1;
    } else {
      if (k = G(k)) {
        if (R(k)) {
          n = C(k), k = D(k), l = n, n = O(n);
        } else {
          n = H(k);
          l = P.b(n, 0, null);
          n = P.b(n, 1, null);
          p = Gc(l);
          l = jQuery(a);
          if (q(Ag(n))) {
            Z.l(g, Q, e(p), n);
          } else {
            if (E.a(p, "class")) {
              for (n = G(Ig.a(n, / /)), p = null, s = A = 0;;) {
                if (s < A) {
                  B = p.o(null, s), l.addClass(B), s += 1;
                } else {
                  if (n = G(n)) {
                    p = n, R(p) ? (n = C(p), s = D(p), p = n, A = O(n), n = s) : (n = H(p), l.addClass(n), n = K(p), p = null, A = 0), s = 0;
                  } else {
                    break;
                  }
                }
              }
            } else {
              E.a(p, "css") ? l.css(vf(n)) : E.a("do-", c(p)) ? Z.l(g, Q, d(p), n) : E.a("on-", c(p)) ? Z.l(h, Q, d(p), n) : t && (E.a(!1, n) ? l.removeAttr(p) : E.a(!0, n) ? l.attr(p, p) : t && l.attr(p, "" + v(n)));
            }
          }
          k = K(k);
          l = null;
          n = 0;
        }
        p = 0;
      } else {
        break;
      }
    }
  }
  G(y(h)) && Ng.c(function() {
    for (var b = G(y(h)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var g = c.o(null, e), k = P.b(g, 0, null), g = P.b(g, 1, null);
        Tg.b ? Tg.b(a, k, g) : Tg.call(null, a, k, g);
        e += 1;
      } else {
        if (b = G(b)) {
          R(b) ? (c = C(b), b = D(b), k = c, d = O(c), c = k) : (c = H(b), k = P.b(c, 0, null), g = P.b(c, 1, null), Tg.b ? Tg.b(a, k, g) : Tg.call(null, a, k, g), b = K(b), c = null, d = 0), e = 0;
        } else {
          return null;
        }
      }
    }
  });
  G(y(g)) && Ng.c(function() {
    for (var b = G(y(g)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var h = c.o(null, e), k = P.b(h, 0, null), l = P.b(h, 1, null);
        Nf.b ? Nf.b(a, k, y(l)) : Nf.call(null, a, k, y(l));
        pf(l, rf.p(), function(b, c, d, e, g, h) {
          return function(b, c, d, e) {
            return Nf.b ? Nf.b(a, h, e) : Nf.call(null, a, h, e);
          };
        }(b, c, d, e, h, k, l));
        e += 1;
      } else {
        var n = G(b);
        if (n) {
          h = n;
          if (R(h)) {
            b = C(h), e = D(h), c = b, d = O(b), b = e;
          } else {
            var p = H(h), k = P.b(p, 0, null), l = P.b(p, 1, null);
            Nf.b ? Nf.b(a, k, y(l)) : Nf.call(null, a, k, y(l));
            pf(l, rf.p(), function(b, c, d, e, g, h) {
              return function(b, c, d, e) {
                return Nf.b ? Nf.b(a, h, e) : Nf.call(null, a, h, e);
              };
            }(b, c, d, e, p, k, l, h, n));
            b = K(h);
            c = null;
            d = 0;
          }
          e = 0;
        } else {
          return null;
        }
      }
    }
  });
}
var Ug = qa(Jg) ? function(a, b) {
  return a.appendChild(b);
} : function(a, b) {
  try {
    return a.appendChild(b);
  } catch (c) {
    if (c instanceof Error) {
      return null;
    }
    if (t) {
      throw c;
    }
    return null;
  }
};
function Vg(a, b) {
  for (var c = G(bd(function(a) {
    return "string" === typeof a ? Wg.c ? Wg.c(a) : Wg.call(null, a) : q(Kg.c ? Kg.c(a) : Kg.call(null, a)) ? a : null;
  }, Pg(b))), d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      Ug.a ? Ug.a(a, h) : Ug.call(null, a, h);
      g += 1;
    } else {
      if (c = G(c)) {
        d = c, R(d) ? (c = C(d), g = D(d), d = c, e = O(c), c = g) : (c = H(d), Ug.a ? Ug.a(a, c) : Ug.call(null, a, c), c = K(d), d = null, e = 0), g = 0;
      } else {
        break;
      }
    }
  }
}
f = Element.prototype;
f.call = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = M(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    var e = Rg(b), g = P.b(e, 0, null), e = P.b(e, 1, null);
    q(this.zb) ? this.zb(g, e) : (Sg(this, g), Vg(this, e));
    return this;
  }
  a.k = 1;
  a.h = function(a) {
    H(a);
    a = I(a);
    return b(0, a);
  };
  a.e = b;
  return a;
}();
f.apply = function(a, b) {
  return this.call.apply(this, [this].concat(w(b)));
};
f.a = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Rg(a);
    a = P.b(b, 0, null);
    b = P.b(b, 1, null);
    q(this.zb) ? this.zb(a, b) : (Sg(this, a), Vg(this, b));
    return this;
  }
  a.k = 0;
  a.h = function(a) {
    a = G(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
f.J = !0;
f.q = function(a, b) {
  return bf.e(b, M(["#\x3cElement: ", this.tagName, "\x3e"], 0));
};
function Xg(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = M(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return Yb.a(document.createElement(a), b);
    }
    b.k = 0;
    b.h = function(a) {
      a = G(a);
      return c(a);
    };
    b.e = c;
    return b;
  }();
}
var Yg = Xg("a"), Zg = Xg("button"), $g = Xg("div"), ah = Xg("h1"), bh = Xg("label"), ch = Xg("p");
function Wg(a) {
  return document.createTextNode(a);
}
var dh = lf.c(!1), eh = lf.c(Fd);
function fh(a) {
  return Ng.c(function() {
    var b = jQuery("body");
    b.empty();
    for (var c = G(a), d = null, e = 0, g = 0;;) {
      if (g < e) {
        var h = d.o(null, g);
        b.append(h);
        g += 1;
      } else {
        if (c = G(c)) {
          d = c, R(d) ? (c = C(d), g = D(d), d = c, e = O(c), c = g) : (c = H(d), b.append(c), c = K(d), d = null, e = 0), g = 0;
        } else {
          break;
        }
      }
    }
    b.on("submit", function(a) {
      return a.preventDefault();
    });
    mf(dh, !0);
    b = G(y(eh));
    c = null;
    for (g = e = 0;;) {
      if (g < e) {
        d = c.o(null, g), d.p ? d.p() : d.call(null), g += 1;
      } else {
        if (b = G(b)) {
          c = b, R(c) ? (b = C(c), e = D(c), c = b, d = O(b), b = e, e = d) : (d = H(c), d.p ? d.p() : d.call(null), b = K(c), c = null, e = 0), g = 0;
        } else {
          return null;
        }
      }
    }
  });
}
var gh = function() {
  function a(a, b) {
    return a.val("" + v(b)).trigger("change");
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
  c.c = b;
  c.a = a;
  return c;
}(), hh = function() {
  function a(a, b) {
    return a.prop("checked", jc(b)).trigger("change");
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
  c.c = b;
  c.a = a;
  return c;
}(), Nf = function() {
  var a = lf.c(ae), b = lf.c(ae), c = lf.c(ae), d = lf.c(ae), e = Tb.b(new ia(null, 1, [Bb, kg], null), Wf, of());
  return new Lf("do!", function() {
    function a(b, c, d) {
      2 < arguments.length && M(Array.prototype.slice.call(arguments, 2), 0);
      return c;
    }
    a.k = 2;
    a.h = function(a) {
      H(a);
      a = K(a);
      var b = H(a);
      I(a);
      return b;
    };
    a.e = function(a, b) {
      return b;
    };
    return a;
  }(), kg, e, a, b, c, d);
}();
Mf(kg, function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, g);
  }
  function b(a, b, e) {
    e = P.b(e, 0, null);
    return Nf.b ? Nf.b(a, gg, new be([b, e])) : Nf.call(null, a, gg, new be([b, e]));
  }
  a.k = 2;
  a.h = function(a) {
    var d = H(a);
    a = K(a);
    var e = H(a);
    a = I(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}());
Mf(eg, function() {
  function a(a, d, e) {
    var g = null;
    2 < arguments.length && (g = M(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, 0, g);
  }
  function b(a, b, e) {
    a = jQuery(a);
    return Yb.b(E.a("checkbox", a.attr("type")) ? hh : gh, a, e);
  }
  a.k = 2;
  a.h = function(a) {
    var d = H(a);
    a = K(a);
    H(a);
    a = I(a);
    return b(d, 0, a);
  };
  a.e = b;
  return a;
}());
Mf(gg, function(a, b, c) {
  return a.c ? a.c(c) : a.call(null, c);
});
Mf(Uf, function(a, b, c) {
  a = jQuery(a);
  c = G(c);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      b = P.b(h, 0, null);
      h = P.b(h, 1, null);
      a.toggleClass(Gc(b), jc(h));
      g += 1;
    } else {
      if (c = G(c)) {
        R(c) ? (d = C(c), c = D(c), b = d, e = O(d), d = b) : (d = H(c), b = P.b(d, 0, null), h = P.b(d, 1, null), a.toggleClass(Gc(b), jc(h)), c = K(c), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
});
Mf(ag, function(a, b, c) {
  a = jQuery(a);
  c = G(c);
  for (var d = null, e = 0, g = 0;;) {
    if (g < e) {
      var h = d.o(null, g);
      b = P.b(h, 0, null);
      h = P.b(h, 1, null);
      a.css(Gc(b), "" + v(h));
      g += 1;
    } else {
      if (c = G(c)) {
        R(c) ? (d = C(c), c = D(c), b = d, e = O(d), d = b) : (d = H(c), b = P.b(d, 0, null), h = P.b(d, 1, null), a.css(Gc(b), "" + v(h)), c = K(c), d = null, e = 0), g = 0;
      } else {
        return null;
      }
    }
  }
});
Mf($f, function(a, b, c) {
  return jQuery(a).toggle(jc(c));
});
Mf(hg, function(a, b, c) {
  return q(c) ? jQuery(a).hide().slideDown("fast") : jQuery(a).slideUp("fast");
});
Mf(Vf, function(a, b, c) {
  return q(c) ? jQuery(a).hide().fadeIn("fast") : jQuery(a).fadeOut("fast");
});
Mf(Xf, function(a, b, c) {
  return q(c) ? Ng.c(function() {
    return jQuery(a).focus();
  }) : Ng.c(function() {
    return jQuery(a).focusout();
  });
});
Mf(fg, function(a) {
  return jQuery(a).select();
});
Mf(Rf, function(a, b, c) {
  return q(c) ? (Nf.b ? Nf.b(a, Xf, c) : Nf.call(null, a, Xf, c), Nf.b ? Nf.b(a, fg, c) : Nf.call(null, a, fg, c)) : null;
});
Mf(Qf, function(a, b, c) {
  return jQuery(a).text("" + v(c));
});
Mf(Sf, function(a, b, c) {
  return q(c) ? (b = jQuery("body"), a = jQuery(a), b.animate(vf(new ia(null, 1, [dg, a.offset().top], null)))) : null;
});
function Tg(a, b, c) {
  return Qg(a, function() {
    return jQuery(a).on(Gc(b), c);
  });
}
;var ih, jh;
function kh() {
  ih = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = Rg(a);
      a = P.b(a, 0, null);
      a = ic(a) ? Yb.a(Le, a) : a;
      var b = Tb.b(a, ig, Yc), e = Gg(0);
      return $g.b ? $g.b(bh.c ? bh.c(function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()) : bh.call(null, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()), Zg.b ? Zg.b(jg, function() {
        return b.c ? b.c(Z.a(e, Gb)) : b.call(null, Z.a(e, Gb));
      }, "+") : Zg.call(null, jg, function() {
        return b.c ? b.c(Z.a(e, Gb)) : b.call(null, Z.a(e, Gb));
      }, "+"), Zg.b ? Zg.b(jg, function() {
        return b.c ? b.c(Z.a(e, rc)) : b.call(null, Z.a(e, rc));
      }, "-") : Zg.call(null, jg, function() {
        return b.c ? b.c(Z.a(e, rc)) : b.call(null, Z.a(e, rc));
      }, "-")) : $g.call(null, bh.c ? bh.c(function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()) : bh.call(null, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = "" + v(a);
        }).call(null, e, a);
        return a;
      }()), Zg.b ? Zg.b(jg, function() {
        return b.c ? b.c(Z.a(e, Gb)) : b.call(null, Z.a(e, Gb));
      }, "+") : Zg.call(null, jg, function() {
        return b.c ? b.c(Z.a(e, Gb)) : b.call(null, Z.a(e, Gb));
      }, "+"), Zg.b ? Zg.b(jg, function() {
        return b.c ? b.c(Z.a(e, rc)) : b.call(null, Z.a(e, rc));
      }, "-") : Zg.call(null, jg, function() {
        return b.c ? b.c(Z.a(e, rc)) : b.call(null, Z.a(e, rc));
      }, "-"));
    }
    a.k = 0;
    a.h = function(a) {
      a = G(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  jh = function() {
    function a(a) {
      var d = null;
      0 < arguments.length && (d = M(Array.prototype.slice.call(arguments, 0), 0));
      return b.call(this, d);
    }
    function b(a) {
      a = Rg(a);
      a = P.b(a, 0, null);
      a = ic(a) ? Yb.a(Le, a) : a;
      a = Tb.b(a, Yf, 10);
      var b = Gg(null);
      return $g.b ? $g.b(ah.c ? ah.c("A Counting Widget!") : ah.call(null, "A Counting Widget!"), ch.b ? ch.b(Zf, b, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = [v("Last clicked item was "), v(a)].join("");
        }).call(null, b, a);
        return a;
      }()) : ch.call(null, Zf, b, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = [v("Last clicked item was "), v(a)].join("");
        }).call(null, b, a);
        return a;
      }()), cd.a(function(a) {
        var c = P.b(a, 0, null);
        a = P.b(a, 1, null);
        return a.a ? a.a(ig, function() {
          return mf(b, c);
        }) : a.call(null, ig, function() {
          return mf(b, c);
        });
      }, $c(Id, hd.a(a, ih)))) : $g.call(null, ah.c ? ah.c("A Counting Widget!") : ah.call(null, "A Counting Widget!"), ch.b ? ch.b(Zf, b, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = [v("Last clicked item was "), v(a)].join("");
        }).call(null, b, a);
        return a;
      }()) : ch.call(null, Zf, b, function() {
        var a = document.createTextNode("");
        Fg(function(a, b) {
          return b.nodeValue = [v("Last clicked item was "), v(a)].join("");
        }).call(null, b, a);
        return a;
      }()), cd.a(function(a) {
        var c = P.b(a, 0, null);
        a = P.b(a, 1, null);
        return a.a ? a.a(ig, function() {
          return mf(b, c);
        }) : a.call(null, ig, function() {
          return mf(b, c);
        });
      }, $c(Id, hd.a(a, ih))));
    }
    a.k = 0;
    a.h = function(a) {
      a = G(a);
      return b(a);
    };
    a.e = b;
    return a;
  }();
  return fh(new V(null, 3, 5, W, [jh.e(M([Yf, 10], 0)), function() {
    var a = Yg.b ? Yg.b(Pf, "https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl", "Source code") : Yg.call(null, Pf, "https://github.com/tailrecursion/hoplon-demos/blob/master/counters/src/index.cljs.hl", "Source code");
    return ch.c ? ch.c(a) : ch.call(null, a);
  }(), function() {
    var a = Yg.b ? Yg.b(Pf, "https://github.com/swannodette/om/tree/master/examples/counters", "the Om demo of the same name.") : Yg.call(null, Pf, "https://github.com/swannodette/om/tree/master/examples/counters", "the Om demo of the same name.");
    return ch.a ? ch.a("Inspired by ", a) : ch.call(null, "Inspired by ", a);
  }()], null));
}
var lh = ["tailrecursion", "hoplon", "app_pages", "G__4721", "hoploninit"], mh = this;
lh[0] in mh || !mh.execScript || mh.execScript("var " + lh[0]);
for (var nh;lh.length && (nh = lh.shift());) {
  lh.length || void 0 === kh ? mh = mh[nh] ? mh[nh] : mh[nh] = {} : mh[nh] = kh;
}
;