/*! jQuery v1.8.2 jquery.com | jquery.org/license */
(function(a,b){function G(a){var b=F[a]={};return p.each(a.split(s),function(a,c){b[c]=!0}),b}function J(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(I,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:+d+""===d?+d:H.test(d)?p.parseJSON(d):d}catch(f){}p.data(a,c,d)}else d=b}return d}function K(a){var b;for(b in a){if(b==="data"&&p.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function ba(){return!1}function bb(){return!0}function bh(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function bi(a,b){do a=a[b];while(a&&a.nodeType!==1);return a}function bj(a,b,c){b=b||0;if(p.isFunction(b))return p.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return p.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=p.grep(a,function(a){return a.nodeType===1});if(be.test(b))return p.filter(b,d,!c);b=p.filter(b,d)}return p.grep(a,function(a,d){return p.inArray(a,b)>=0===c})}function bk(a){var b=bl.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function bC(a,b){return a.getElementsByTagName(b)[0]||a.appendChild(a.ownerDocument.createElement(b))}function bD(a,b){if(b.nodeType!==1||!p.hasData(a))return;var c,d,e,f=p._data(a),g=p._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;d<e;d++)p.event.add(b,c,h[c][d])}g.data&&(g.data=p.extend({},g.data))}function bE(a,b){var c;if(b.nodeType!==1)return;b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase(),c==="object"?(b.parentNode&&(b.outerHTML=a.outerHTML),p.support.html5Clone&&a.innerHTML&&!p.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):c==="input"&&bv.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):c==="option"?b.selected=a.defaultSelected:c==="input"||c==="textarea"?b.defaultValue=a.defaultValue:c==="script"&&b.text!==a.text&&(b.text=a.text),b.removeAttribute(p.expando)}function bF(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bG(a){bv.test(a.type)&&(a.defaultChecked=a.checked)}function bY(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=bW.length;while(e--){b=bW[e]+c;if(b in a)return b}return d}function bZ(a,b){return a=b||a,p.css(a,"display")==="none"||!p.contains(a.ownerDocument,a)}function b$(a,b){var c,d,e=[],f=0,g=a.length;for(;f<g;f++){c=a[f];if(!c.style)continue;e[f]=p._data(c,"olddisplay"),b?(!e[f]&&c.style.display==="none"&&(c.style.display=""),c.style.display===""&&bZ(c)&&(e[f]=p._data(c,"olddisplay",cc(c.nodeName)))):(d=bH(c,"display"),!e[f]&&d!=="none"&&p._data(c,"olddisplay",d))}for(f=0;f<g;f++){c=a[f];if(!c.style)continue;if(!b||c.style.display==="none"||c.style.display==="")c.style.display=b?e[f]||"":"none"}return a}function b_(a,b,c){var d=bP.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function ca(a,b,c,d){var e=c===(d?"border":"content")?4:b==="width"?1:0,f=0;for(;e<4;e+=2)c==="margin"&&(f+=p.css(a,c+bV[e],!0)),d?(c==="content"&&(f-=parseFloat(bH(a,"padding"+bV[e]))||0),c!=="margin"&&(f-=parseFloat(bH(a,"border"+bV[e]+"Width"))||0)):(f+=parseFloat(bH(a,"padding"+bV[e]))||0,c!=="padding"&&(f+=parseFloat(bH(a,"border"+bV[e]+"Width"))||0));return f}function cb(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=!0,f=p.support.boxSizing&&p.css(a,"boxSizing")==="border-box";if(d<=0||d==null){d=bH(a,b);if(d<0||d==null)d=a.style[b];if(bQ.test(d))return d;e=f&&(p.support.boxSizingReliable||d===a.style[b]),d=parseFloat(d)||0}return d+ca(a,b,c||(f?"border":"content"),e)+"px"}function cc(a){if(bS[a])return bS[a];var b=p("<"+a+">").appendTo(e.body),c=b.css("display");b.remove();if(c==="none"||c===""){bI=e.body.appendChild(bI||p.extend(e.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!bJ||!bI.createElement)bJ=(bI.contentWindow||bI.contentDocument).document,bJ.write("<!doctype html><html><body>"),bJ.close();b=bJ.body.appendChild(bJ.createElement(a)),c=bH(b,"display"),e.body.removeChild(bI)}return bS[a]=c,c}function ci(a,b,c,d){var e;if(p.isArray(b))p.each(b,function(b,e){c||ce.test(a)?d(a,e):ci(a+"["+(typeof e=="object"?b:"")+"]",e,c,d)});else if(!c&&p.type(b)==="object")for(e in b)ci(a+"["+e+"]",b[e],c,d);else d(a,b)}function cz(a){return function(b,c){typeof b!="string"&&(c=b,b="*");var d,e,f,g=b.toLowerCase().split(s),h=0,i=g.length;if(p.isFunction(c))for(;h<i;h++)d=g[h],f=/^\+/.test(d),f&&(d=d.substr(1)||"*"),e=a[d]=a[d]||[],e[f?"unshift":"push"](c)}}function cA(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h,i=a[f],j=0,k=i?i.length:0,l=a===cv;for(;j<k&&(l||!h);j++)h=i[j](c,d,e),typeof h=="string"&&(!l||g[h]?h=b:(c.dataTypes.unshift(h),h=cA(a,c,d,e,h,g)));return(l||!h)&&!g["*"]&&(h=cA(a,c,d,e,"*",g)),h}function cB(a,c){var d,e,f=p.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((f[d]?a:e||(e={}))[d]=c[d]);e&&p.extend(!0,a,e)}function cC(a,c,d){var e,f,g,h,i=a.contents,j=a.dataTypes,k=a.responseFields;for(f in k)f in d&&(c[k[f]]=d[f]);while(j[0]==="*")j.shift(),e===b&&(e=a.mimeType||c.getResponseHeader("content-type"));if(e)for(f in i)if(i[f]&&i[f].test(e)){j.unshift(f);break}if(j[0]in d)g=j[0];else{for(f in d){if(!j[0]||a.converters[f+" "+j[0]]){g=f;break}h||(h=f)}g=g||h}if(g)return g!==j[0]&&j.unshift(g),d[g]}function cD(a,b){var c,d,e,f,g=a.dataTypes.slice(),h=g[0],i={},j=0;a.dataFilter&&(b=a.dataFilter(b,a.dataType));if(g[1])for(c in a.converters)i[c.toLowerCase()]=a.converters[c];for(;e=g[++j];)if(e!=="*"){if(h!=="*"&&h!==e){c=i[h+" "+e]||i["* "+e];if(!c)for(d in i){f=d.split(" ");if(f[1]===e){c=i[h+" "+f[0]]||i["* "+f[0]];if(c){c===!0?c=i[d]:i[d]!==!0&&(e=f[0],g.splice(j--,0,e));break}}}if(c!==!0)if(c&&a["throws"])b=c(b);else try{b=c(b)}catch(k){return{state:"parsererror",error:c?k:"No conversion from "+h+" to "+e}}}h=e}return{state:"success",data:b}}function cL(){try{return new a.XMLHttpRequest}catch(b){}}function cM(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function cU(){return setTimeout(function(){cN=b},0),cN=p.now()}function cV(a,b){p.each(b,function(b,c){var d=(cT[b]||[]).concat(cT["*"]),e=0,f=d.length;for(;e<f;e++)if(d[e].call(a,b,c))return})}function cW(a,b,c){var d,e=0,f=0,g=cS.length,h=p.Deferred().always(function(){delete i.elem}),i=function(){var b=cN||cU(),c=Math.max(0,j.startTime+j.duration-b),d=1-(c/j.duration||0),e=0,f=j.tweens.length;for(;e<f;e++)j.tweens[e].run(d);return h.notifyWith(a,[j,d,c]),d<1&&f?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:p.extend({},b),opts:p.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:cN||cU(),duration:c.duration,tweens:[],createTween:function(b,c,d){var e=p.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(e),e},stop:function(b){var c=0,d=b?j.tweens.length:0;for(;c<d;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;cX(k,j.opts.specialEasing);for(;e<g;e++){d=cS[e].call(j,a,k,j.opts);if(d)return d}return cV(j,k),p.isFunction(j.opts.start)&&j.opts.start.call(a,j),p.fx.timer(p.extend(i,{anim:j,queue:j.opts.queue,elem:a})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function cX(a,b){var c,d,e,f,g;for(c in a){d=p.camelCase(c),e=b[d],f=a[c],p.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=p.cssHooks[d];if(g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}}function cY(a,b,c){var d,e,f,g,h,i,j,k,l=this,m=a.style,n={},o=[],q=a.nodeType&&bZ(a);c.queue||(j=p._queueHooks(a,"fx"),j.unqueued==null&&(j.unqueued=0,k=j.empty.fire,j.empty.fire=function(){j.unqueued||k()}),j.unqueued++,l.always(function(){l.always(function(){j.unqueued--,p.queue(a,"fx").length||j.empty.fire()})})),a.nodeType===1&&("height"in b||"width"in b)&&(c.overflow=[m.overflow,m.overflowX,m.overflowY],p.css(a,"display")==="inline"&&p.css(a,"float")==="none"&&(!p.support.inlineBlockNeedsLayout||cc(a.nodeName)==="inline"?m.display="inline-block":m.zoom=1)),c.overflow&&(m.overflow="hidden",p.support.shrinkWrapBlocks||l.done(function(){m.overflow=c.overflow[0],m.overflowX=c.overflow[1],m.overflowY=c.overflow[2]}));for(d in b){f=b[d];if(cP.exec(f)){delete b[d];if(f===(q?"hide":"show"))continue;o.push(d)}}g=o.length;if(g){h=p._data(a,"fxshow")||p._data(a,"fxshow",{}),q?p(a).show():l.done(function(){p(a).hide()}),l.done(function(){var b;p.removeData(a,"fxshow",!0);for(b in n)p.style(a,b,n[b])});for(d=0;d<g;d++)e=o[d],i=l.createTween(e,q?h[e]:0),n[e]=h[e]||p.style(a,e),e in h||(h[e]=i.start,q&&(i.end=i.start,i.start=e==="width"||e==="height"?1:0))}}function cZ(a,b,c,d,e){return new cZ.prototype.init(a,b,c,d,e)}function c$(a,b){var c,d={height:a},e=0;b=b?1:0;for(;e<4;e+=2-b)c=bV[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function da(a){return p.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}var c,d,e=a.document,f=a.location,g=a.navigator,h=a.jQuery,i=a.$,j=Array.prototype.push,k=Array.prototype.slice,l=Array.prototype.indexOf,m=Object.prototype.toString,n=Object.prototype.hasOwnProperty,o=String.prototype.trim,p=function(a,b){return new p.fn.init(a,b,c)},q=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,r=/\S/,s=/\s+/,t=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,u=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,y=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,z=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,A=/^-ms-/,B=/-([\da-z])/gi,C=function(a,b){return(b+"").toUpperCase()},D=function(){e.addEventListener?(e.removeEventListener("DOMContentLoaded",D,!1),p.ready()):e.readyState==="complete"&&(e.detachEvent("onreadystatechange",D),p.ready())},E={};p.fn=p.prototype={constructor:p,init:function(a,c,d){var f,g,h,i;if(!a)return this;if(a.nodeType)return this.context=this[0]=a,this.length=1,this;if(typeof a=="string"){a.charAt(0)==="<"&&a.charAt(a.length-1)===">"&&a.length>=3?f=[null,a,null]:f=u.exec(a);if(f&&(f[1]||!c)){if(f[1])return c=c instanceof p?c[0]:c,i=c&&c.nodeType?c.ownerDocument||c:e,a=p.parseHTML(f[1],i,!0),v.test(f[1])&&p.isPlainObject(c)&&this.attr.call(a,c,!0),p.merge(this,a);g=e.getElementById(f[2]);if(g&&g.parentNode){if(g.id!==f[2])return d.find(a);this.length=1,this[0]=g}return this.context=e,this.selector=a,this}return!c||c.jquery?(c||d).find(a):this.constructor(c).find(a)}return p.isFunction(a)?d.ready(a):(a.selector!==b&&(this.selector=a.selector,this.context=a.context),p.makeArray(a,this))},selector:"",jquery:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return k.call(this)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=p.merge(this.constructor(),a);return d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")"),d},each:function(a,b){return p.each(this,a,b)},ready:function(a){return p.ready.promise().done(a),this},eq:function(a){return a=+a,a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(k.apply(this,arguments),"slice",k.call(arguments).join(","))},map:function(a){return this.pushStack(p.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:j,sort:[].sort,splice:[].splice},p.fn.init.prototype=p.fn,p.extend=p.fn.extend=function(){var a,c,d,e,f,g,h=arguments[0]||{},i=1,j=arguments.length,k=!1;typeof h=="boolean"&&(k=h,h=arguments[1]||{},i=2),typeof h!="object"&&!p.isFunction(h)&&(h={}),j===i&&(h=this,--i);for(;i<j;i++)if((a=arguments[i])!=null)for(c in a){d=h[c],e=a[c];if(h===e)continue;k&&e&&(p.isPlainObject(e)||(f=p.isArray(e)))?(f?(f=!1,g=d&&p.isArray(d)?d:[]):g=d&&p.isPlainObject(d)?d:{},h[c]=p.extend(k,g,e)):e!==b&&(h[c]=e)}return h},p.extend({noConflict:function(b){return a.$===p&&(a.$=i),b&&a.jQuery===p&&(a.jQuery=h),p},isReady:!1,readyWait:1,holdReady:function(a){a?p.readyWait++:p.ready(!0)},ready:function(a){if(a===!0?--p.readyWait:p.isReady)return;if(!e.body)return setTimeout(p.ready,1);p.isReady=!0;if(a!==!0&&--p.readyWait>0)return;d.resolveWith(e,[p]),p.fn.trigger&&p(e).trigger("ready").off("ready")},isFunction:function(a){return p.type(a)==="function"},isArray:Array.isArray||function(a){return p.type(a)==="array"},isWindow:function(a){return a!=null&&a==a.window},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):E[m.call(a)]||"object"},isPlainObject:function(a){if(!a||p.type(a)!=="object"||a.nodeType||p.isWindow(a))return!1;try{if(a.constructor&&!n.call(a,"constructor")&&!n.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||n.call(a,d)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},error:function(a){throw new Error(a)},parseHTML:function(a,b,c){var d;return!a||typeof a!="string"?null:(typeof b=="boolean"&&(c=b,b=0),b=b||e,(d=v.exec(a))?[b.createElement(d[1])]:(d=p.buildFragment([a],b,c?null:[]),p.merge([],(d.cacheable?p.clone(d.fragment):d.fragment).childNodes)))},parseJSON:function(b){if(!b||typeof b!="string")return null;b=p.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(w.test(b.replace(y,"@").replace(z,"]").replace(x,"")))return(new Function("return "+b))();p.error("Invalid JSON: "+b)},parseXML:function(c){var d,e;if(!c||typeof c!="string")return null;try{a.DOMParser?(e=new DOMParser,d=e.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(f){d=b}return(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&p.error("Invalid XML: "+c),d},noop:function(){},globalEval:function(b){b&&r.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(A,"ms-").replace(B,C)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,c,d){var e,f=0,g=a.length,h=g===b||p.isFunction(a);if(d){if(h){for(e in a)if(c.apply(a[e],d)===!1)break}else for(;f<g;)if(c.apply(a[f++],d)===!1)break}else if(h){for(e in a)if(c.call(a[e],e,a[e])===!1)break}else for(;f<g;)if(c.call(a[f],f,a[f++])===!1)break;return a},trim:o&&!o.call("﻿ ")?function(a){return a==null?"":o.call(a)}:function(a){return a==null?"":(a+"").replace(t,"")},makeArray:function(a,b){var c,d=b||[];return a!=null&&(c=p.type(a),a.length==null||c==="string"||c==="function"||c==="regexp"||p.isWindow(a)?j.call(d,a):p.merge(d,a)),d},inArray:function(a,b,c){var d;if(b){if(l)return l.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=c.length,e=a.length,f=0;if(typeof d=="number")for(;f<d;f++)a[e++]=c[f];else while(c[f]!==b)a[e++]=c[f++];return a.length=e,a},grep:function(a,b,c){var d,e=[],f=0,g=a.length;c=!!c;for(;f<g;f++)d=!!b(a[f],f),c!==d&&e.push(a[f]);return e},map:function(a,c,d){var e,f,g=[],h=0,i=a.length,j=a instanceof p||i!==b&&typeof i=="number"&&(i>0&&a[0]&&a[i-1]||i===0||p.isArray(a));if(j)for(;h<i;h++)e=c(a[h],h,d),e!=null&&(g[g.length]=e);else for(f in a)e=c(a[f],f,d),e!=null&&(g[g.length]=e);return g.concat.apply([],g)},guid:1,proxy:function(a,c){var d,e,f;return typeof c=="string"&&(d=a[c],c=a,a=d),p.isFunction(a)?(e=k.call(arguments,2),f=function(){return a.apply(c,e.concat(k.call(arguments)))},f.guid=a.guid=a.guid||p.guid++,f):b},access:function(a,c,d,e,f,g,h){var i,j=d==null,k=0,l=a.length;if(d&&typeof d=="object"){for(k in d)p.access(a,c,k,d[k],1,g,e);f=1}else if(e!==b){i=h===b&&p.isFunction(e),j&&(i?(i=c,c=function(a,b,c){return i.call(p(a),c)}):(c.call(a,e),c=null));if(c)for(;k<l;k++)c(a[k],d,i?e.call(a[k],k,c(a[k],d)):e,h);f=1}return f?a:j?c.call(a):l?c(a[0],d):g},now:function(){return(new Date).getTime()}}),p.ready.promise=function(b){if(!d){d=p.Deferred();if(e.readyState==="complete")setTimeout(p.ready,1);else if(e.addEventListener)e.addEventListener("DOMContentLoaded",D,!1),a.addEventListener("load",p.ready,!1);else{e.attachEvent("onreadystatechange",D),a.attachEvent("onload",p.ready);var c=!1;try{c=a.frameElement==null&&e.documentElement}catch(f){}c&&c.doScroll&&function g(){if(!p.isReady){try{c.doScroll("left")}catch(a){return setTimeout(g,50)}p.ready()}}()}}return d.promise(b)},p.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){E["[object "+b+"]"]=b.toLowerCase()}),c=p(e);var F={};p.Callbacks=function(a){a=typeof a=="string"?F[a]||G(a):p.extend({},a);var c,d,e,f,g,h,i=[],j=!a.once&&[],k=function(b){c=a.memory&&b,d=!0,h=f||0,f=0,g=i.length,e=!0;for(;i&&h<g;h++)if(i[h].apply(b[0],b[1])===!1&&a.stopOnFalse){c=!1;break}e=!1,i&&(j?j.length&&k(j.shift()):c?i=[]:l.disable())},l={add:function(){if(i){var b=i.length;(function d(b){p.each(b,function(b,c){var e=p.type(c);e==="function"&&(!a.unique||!l.has(c))?i.push(c):c&&c.length&&e!=="string"&&d(c)})})(arguments),e?g=i.length:c&&(f=b,k(c))}return this},remove:function(){return i&&p.each(arguments,function(a,b){var c;while((c=p.inArray(b,i,c))>-1)i.splice(c,1),e&&(c<=g&&g--,c<=h&&h--)}),this},has:function(a){return p.inArray(a,i)>-1},empty:function(){return i=[],this},disable:function(){return i=j=c=b,this},disabled:function(){return!i},lock:function(){return j=b,c||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return b=b||[],b=[a,b.slice?b.slice():b],i&&(!d||j)&&(e?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!d}};return l},p.extend({Deferred:function(a){var b=[["resolve","done",p.Callbacks("once memory"),"resolved"],["reject","fail",p.Callbacks("once memory"),"rejected"],["notify","progress",p.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return p.Deferred(function(c){p.each(b,function(b,d){var f=d[0],g=a[b];e[d[1]](p.isFunction(g)?function(){var a=g.apply(this,arguments);a&&p.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f+"With"](this===e?c:this,[a])}:c[f])}),a=null}).promise()},promise:function(a){return a!=null?p.extend(a,d):d}},e={};return d.pipe=d.then,p.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[a^1][2].disable,b[2][2].lock),e[f[0]]=g.fire,e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=k.call(arguments),d=c.length,e=d!==1||a&&p.isFunction(a.promise)?d:0,f=e===1?a:p.Deferred(),g=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?k.call(arguments):d,c===h?f.notifyWith(b,c):--e||f.resolveWith(b,c)}},h,i,j;if(d>1){h=new Array(d),i=new Array(d),j=new Array(d);for(;b<d;b++)c[b]&&p.isFunction(c[b].promise)?c[b].promise().done(g(b,j,c)).fail(f.reject).progress(g(b,i,h)):--e}return e||f.resolveWith(j,c),f.promise()}}),p.support=function(){var b,c,d,f,g,h,i,j,k,l,m,n=e.createElement("div");n.setAttribute("className","t"),n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",c=n.getElementsByTagName("*"),d=n.getElementsByTagName("a")[0],d.style.cssText="top:1px;float:left;opacity:.5";if(!c||!c.length)return{};f=e.createElement("select"),g=f.appendChild(e.createElement("option")),h=n.getElementsByTagName("input")[0],b={leadingWhitespace:n.firstChild.nodeType===3,tbody:!n.getElementsByTagName("tbody").length,htmlSerialize:!!n.getElementsByTagName("link").length,style:/top/.test(d.getAttribute("style")),hrefNormalized:d.getAttribute("href")==="/a",opacity:/^0.5/.test(d.style.opacity),cssFloat:!!d.style.cssFloat,checkOn:h.value==="on",optSelected:g.selected,getSetAttribute:n.className!=="t",enctype:!!e.createElement("form").enctype,html5Clone:e.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:e.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},h.checked=!0,b.noCloneChecked=h.cloneNode(!0).checked,f.disabled=!0,b.optDisabled=!g.disabled;try{delete n.test}catch(o){b.deleteExpando=!1}!n.addEventListener&&n.attachEvent&&n.fireEvent&&(n.attachEvent("onclick",m=function(){b.noCloneEvent=!1}),n.cloneNode(!0).fireEvent("onclick"),n.detachEvent("onclick",m)),h=e.createElement("input"),h.value="t",h.setAttribute("type","radio"),b.radioValue=h.value==="t",h.setAttribute("checked","checked"),h.setAttribute("name","t"),n.appendChild(h),i=e.createDocumentFragment(),i.appendChild(n.lastChild),b.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=h.checked,i.removeChild(h),i.appendChild(n);if(n.attachEvent)for(k in{submit:!0,change:!0,focusin:!0})j="on"+k,l=j in n,l||(n.setAttribute(j,"return;"),l=typeof n[j]=="function"),b[k+"Bubbles"]=l;return p(function(){var c,d,f,g,h="padding:0;margin:0;border:0;display:block;overflow:hidden;",i=e.getElementsByTagName("body")[0];if(!i)return;c=e.createElement("div"),c.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",i.insertBefore(c,i.firstChild),d=e.createElement("div"),c.appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",f=d.getElementsByTagName("td"),f[0].style.cssText="padding:0;margin:0;border:0;display:none",l=f[0].offsetHeight===0,f[0].style.display="",f[1].style.display="none",b.reliableHiddenOffsets=l&&f[0].offsetHeight===0,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",b.boxSizing=d.offsetWidth===4,b.doesNotIncludeMarginInBodyOffset=i.offsetTop!==1,a.getComputedStyle&&(b.pixelPosition=(a.getComputedStyle(d,null)||{}).top!=="1%",b.boxSizingReliable=(a.getComputedStyle(d,null)||{width:"4px"}).width==="4px",g=e.createElement("div"),g.style.cssText=d.style.cssText=h,g.style.marginRight=g.style.width="0",d.style.width="1px",d.appendChild(g),b.reliableMarginRight=!parseFloat((a.getComputedStyle(g,null)||{}).marginRight)),typeof d.style.zoom!="undefined"&&(d.innerHTML="",d.style.cssText=h+"width:1px;padding:1px;display:inline;zoom:1",b.inlineBlockNeedsLayout=d.offsetWidth===3,d.style.display="block",d.style.overflow="visible",d.innerHTML="<div></div>",d.firstChild.style.width="5px",b.shrinkWrapBlocks=d.offsetWidth!==3,c.style.zoom=1),i.removeChild(c),c=d=f=g=null}),i.removeChild(n),c=d=f=g=h=i=n=null,b}();var H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,I=/([A-Z])/g;p.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(p.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){return a=a.nodeType?p.cache[a[p.expando]]:a[p.expando],!!a&&!K(a)},data:function(a,c,d,e){if(!p.acceptData(a))return;var f,g,h=p.expando,i=typeof c=="string",j=a.nodeType,k=j?p.cache:a,l=j?a[h]:a[h]&&h;if((!l||!k[l]||!e&&!k[l].data)&&i&&d===b)return;l||(j?a[h]=l=p.deletedIds.pop()||p.guid++:l=h),k[l]||(k[l]={},j||(k[l].toJSON=p.noop));if(typeof c=="object"||typeof c=="function")e?k[l]=p.extend(k[l],c):k[l].data=p.extend(k[l].data,c);return f=k[l],e||(f.data||(f.data={}),f=f.data),d!==b&&(f[p.camelCase(c)]=d),i?(g=f[c],g==null&&(g=f[p.camelCase(c)])):g=f,g},removeData:function(a,b,c){if(!p.acceptData(a))return;var d,e,f,g=a.nodeType,h=g?p.cache:a,i=g?a[p.expando]:p.expando;if(!h[i])return;if(b){d=c?h[i]:h[i].data;if(d){p.isArray(b)||(b in d?b=[b]:(b=p.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,f=b.length;e<f;e++)delete d[b[e]];if(!(c?K:p.isEmptyObject)(d))return}}if(!c){delete h[i].data;if(!K(h[i]))return}g?p.cleanData([a],!0):p.support.deleteExpando||h!=h.window?delete h[i]:h[i]=null},_data:function(a,b,c){return p.data(a,b,c,!0)},acceptData:function(a){var b=a.nodeName&&p.noData[a.nodeName.toLowerCase()];return!b||b!==!0&&a.getAttribute("classid")===b}}),p.fn.extend({data:function(a,c){var d,e,f,g,h,i=this[0],j=0,k=null;if(a===b){if(this.length){k=p.data(i);if(i.nodeType===1&&!p._data(i,"parsedAttrs")){f=i.attributes;for(h=f.length;j<h;j++)g=f[j].name,g.indexOf("data-")||(g=p.camelCase(g.substring(5)),J(i,g,k[g]));p._data(i,"parsedAttrs",!0)}}return k}return typeof a=="object"?this.each(function(){p.data(this,a)}):(d=a.split(".",2),d[1]=d[1]?"."+d[1]:"",e=d[1]+"!",p.access(this,function(c){if(c===b)return k=this.triggerHandler("getData"+e,[d[0]]),k===b&&i&&(k=p.data(i,a),k=J(i,a,k)),k===b&&d[1]?this.data(d[0]):k;d[1]=c,this.each(function(){var b=p(this);b.triggerHandler("setData"+e,d),p.data(this,a,c),b.triggerHandler("changeData"+e,d)})},null,c,arguments.length>1,null,!1))},removeData:function(a){return this.each(function(){p.removeData(this,a)})}}),p.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=p._data(a,b),c&&(!d||p.isArray(c)?d=p._data(a,b,p.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=p.queue(a,b),d=c.length,e=c.shift(),f=p._queueHooks(a,b),g=function(){p.dequeue(a,b)};e==="inprogress"&&(e=c.shift(),d--),e&&(b==="fx"&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return p._data(a,c)||p._data(a,c,{empty:p.Callbacks("once memory").add(function(){p.removeData(a,b+"queue",!0),p.removeData(a,c,!0)})})}}),p.fn.extend({queue:function(a,c){var d=2;return typeof a!="string"&&(c=a,a="fx",d--),arguments.length<d?p.queue(this[0],a):c===b?this:this.each(function(){var b=p.queue(this,a,c);p._queueHooks(this,a),a==="fx"&&b[0]!=="inprogress"&&p.dequeue(this,a)})},dequeue:function(a){return this.each(function(){p.dequeue(this,a)})},delay:function(a,b){return a=p.fx?p.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){var d,e=1,f=p.Deferred(),g=this,h=this.length,i=function(){--e||f.resolveWith(g,[g])};typeof a!="string"&&(c=a,a=b),a=a||"fx";while(h--)d=p._data(g[h],a+"queueHooks"),d&&d.empty&&(e++,d.empty.add(i));return i(),f.promise(c)}});var L,M,N,O=/[\t\r\n]/g,P=/\r/g,Q=/^(?:button|input)$/i,R=/^(?:button|input|object|select|textarea)$/i,S=/^a(?:rea|)$/i,T=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,U=p.support.getSetAttribute;p.fn.extend({attr:function(a,b){return p.access(this,p.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){p.removeAttr(this,a)})},prop:function(a,b){return p.access(this,p.prop,a,b,arguments.length>1)},removeProp:function(a){return a=p.propFix[a]||a,this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,f,g,h;if(p.isFunction(a))return this.each(function(b){p(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(s);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{f=" "+e.className+" ";for(g=0,h=b.length;g<h;g++)f.indexOf(" "+b[g]+" ")<0&&(f+=b[g]+" ");e.className=p.trim(f)}}}return this},removeClass:function(a){var c,d,e,f,g,h,i;if(p.isFunction(a))return this.each(function(b){p(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(s);for(h=0,i=this.length;h<i;h++){e=this[h];if(e.nodeType===1&&e.className){d=(" "+e.className+" ").replace(O," ");for(f=0,g=c.length;f<g;f++)while(d.indexOf(" "+c[f]+" ")>=0)d=d.replace(" "+c[f]+" "," ");e.className=a?p.trim(d):""}}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";return p.isFunction(a)?this.each(function(c){p(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if(c==="string"){var e,f=0,g=p(this),h=b,i=a.split(s);while(e=i[f++])h=d?h:!g.hasClass(e),g[h?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&p._data(this,"__className__",this.className),this.className=this.className||a===!1?"":p._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(O," ").indexOf(b)>=0)return!0;return!1},val:function(a){var c,d,e,f=this[0];if(!arguments.length){if(f)return c=p.valHooks[f.type]||p.valHooks[f.nodeName.toLowerCase()],c&&"get"in c&&(d=c.get(f,"value"))!==b?d:(d=f.value,typeof d=="string"?d.replace(P,""):d==null?"":d);return}return e=p.isFunction(a),this.each(function(d){var f,g=p(this);if(this.nodeType!==1)return;e?f=a.call(this,d,g.val()):f=a,f==null?f="":typeof f=="number"?f+="":p.isArray(f)&&(f=p.map(f,function(a){return a==null?"":a+""})),c=p.valHooks[this.type]||p.valHooks[this.nodeName.toLowerCase()];if(!c||!("set"in c)||c.set(this,f,"value")===b)this.value=f})}}),p.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,f=a.selectedIndex,g=[],h=a.options,i=a.type==="select-one";if(f<0)return null;c=i?f:0,d=i?f+1:h.length;for(;c<d;c++){e=h[c];if(e.selected&&(p.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!p.nodeName(e.parentNode,"optgroup"))){b=p(e).val();if(i)return b;g.push(b)}}return i&&!g.length&&h.length?p(h[f]).val():g},set:function(a,b){var c=p.makeArray(b);return p(a).find("option").each(function(){this.selected=p.inArray(p(this).val(),c)>=0}),c.length||(a.selectedIndex=-1),c}}},attrFn:{},attr:function(a,c,d,e){var f,g,h,i=a.nodeType;if(!a||i===3||i===8||i===2)return;if(e&&p.isFunction(p.fn[c]))return p(a)[c](d);if(typeof a.getAttribute=="undefined")return p.prop(a,c,d);h=i!==1||!p.isXMLDoc(a),h&&(c=c.toLowerCase(),g=p.attrHooks[c]||(T.test(c)?M:L));if(d!==b){if(d===null){p.removeAttr(a,c);return}return g&&"set"in g&&h&&(f=g.set(a,d,c))!==b?f:(a.setAttribute(c,d+""),d)}return g&&"get"in g&&h&&(f=g.get(a,c))!==null?f:(f=a.getAttribute(c),f===null?b:f)},removeAttr:function(a,b){var c,d,e,f,g=0;if(b&&a.nodeType===1){d=b.split(s);for(;g<d.length;g++)e=d[g],e&&(c=p.propFix[e]||e,f=T.test(e),f||p.attr(a,e,""),a.removeAttribute(U?e:c),f&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(Q.test(a.nodeName)&&a.parentNode)p.error("type property can't be changed");else if(!p.support.radioValue&&b==="radio"&&p.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}},value:{get:function(a,b){return L&&p.nodeName(a,"button")?L.get(a,b):b in a?a.value:null},set:function(a,b,c){if(L&&p.nodeName(a,"button"))return L.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,f,g,h=a.nodeType;if(!a||h===3||h===8||h===2)return;return g=h!==1||!p.isXMLDoc(a),g&&(c=p.propFix[c]||c,f=p.propHooks[c]),d!==b?f&&"set"in f&&(e=f.set(a,d,c))!==b?e:a[c]=d:f&&"get"in f&&(e=f.get(a,c))!==null?e:a[c]},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):R.test(a.nodeName)||S.test(a.nodeName)&&a.href?0:b}}}}),M={get:function(a,c){var d,e=p.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;return b===!1?p.removeAttr(a,c):(d=p.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase())),c}},U||(N={name:!0,id:!0,coords:!0},L=p.valHooks.button={get:function(a,c){var d;return d=a.getAttributeNode(c),d&&(N[c]?d.value!=="":d.specified)?d.value:b},set:function(a,b,c){var d=a.getAttributeNode(c);return d||(d=e.createAttribute(c),a.setAttributeNode(d)),d.value=b+""}},p.each(["width","height"],function(a,b){p.attrHooks[b]=p.extend(p.attrHooks[b],{set:function(a,c){if(c==="")return a.setAttribute(b,"auto"),c}})}),p.attrHooks.contenteditable={get:L.get,set:function(a,b,c){b===""&&(b="false"),L.set(a,b,c)}}),p.support.hrefNormalized||p.each(["href","src","width","height"],function(a,c){p.attrHooks[c]=p.extend(p.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),p.support.style||(p.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=b+""}}),p.support.optSelected||(p.propHooks.selected=p.extend(p.propHooks.selected,{get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}})),p.support.enctype||(p.propFix.enctype="encoding"),p.support.checkOn||p.each(["radio","checkbox"],function(){p.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),p.each(["radio","checkbox"],function(){p.valHooks[this]=p.extend(p.valHooks[this],{set:function(a,b){if(p.isArray(b))return a.checked=p.inArray(p(a).val(),b)>=0}})});var V=/^(?:textarea|input|select)$/i,W=/^([^\.]*|)(?:\.(.+)|)$/,X=/(?:^|\s)hover(\.\S+|)\b/,Y=/^key/,Z=/^(?:mouse|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=function(a){return p.event.special.hover?a:a.replace(X,"mouseenter$1 mouseleave$1")};p.event={add:function(a,c,d,e,f){var g,h,i,j,k,l,m,n,o,q,r;if(a.nodeType===3||a.nodeType===8||!c||!d||!(g=p._data(a)))return;d.handler&&(o=d,d=o.handler,f=o.selector),d.guid||(d.guid=p.guid++),i=g.events,i||(g.events=i={}),h=g.handle,h||(g.handle=h=function(a){return typeof p!="undefined"&&(!a||p.event.triggered!==a.type)?p.event.dispatch.apply(h.elem,arguments):b},h.elem=a),c=p.trim(_(c)).split(" ");for(j=0;j<c.length;j++){k=W.exec(c[j])||[],l=k[1],m=(k[2]||"").split(".").sort(),r=p.event.special[l]||{},l=(f?r.delegateType:r.bindType)||l,r=p.event.special[l]||{},n=p.extend({type:l,origType:k[1],data:e,handler:d,guid:d.guid,selector:f,needsContext:f&&p.expr.match.needsContext.test(f),namespace:m.join(".")},o),q=i[l];if(!q){q=i[l]=[],q.delegateCount=0;if(!r.setup||r.setup.call(a,e,m,h)===!1)a.addEventListener?a.addEventListener(l,h,!1):a.attachEvent&&a.attachEvent("on"+l,h)}r.add&&(r.add.call(a,n),n.handler.guid||(n.handler.guid=d.guid)),f?q.splice(q.delegateCount++,0,n):q.push(n),p.event.global[l]=!0}a=null},global:{},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,q,r=p.hasData(a)&&p._data(a);if(!r||!(m=r.events))return;b=p.trim(_(b||"")).split(" ");for(f=0;f<b.length;f++){g=W.exec(b[f])||[],h=i=g[1],j=g[2];if(!h){for(h in m)p.event.remove(a,h+b[f],c,d,!0);continue}n=p.event.special[h]||{},h=(d?n.delegateType:n.bindType)||h,o=m[h]||[],k=o.length,j=j?new RegExp("(^|\\.)"+j.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(l=0;l<o.length;l++)q=o[l],(e||i===q.origType)&&(!c||c.guid===q.guid)&&(!j||j.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(o.splice(l--,1),q.selector&&o.delegateCount--,n.remove&&n.remove.call(a,q));o.length===0&&k!==o.length&&((!n.teardown||n.teardown.call(a,j,r.handle)===!1)&&p.removeEvent(a,h,r.handle),delete m[h])}p.isEmptyObject(m)&&(delete r.handle,p.removeData(a,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,f,g){if(!f||f.nodeType!==3&&f.nodeType!==8){var h,i,j,k,l,m,n,o,q,r,s=c.type||c,t=[];if($.test(s+p.event.triggered))return;s.indexOf("!")>=0&&(s=s.slice(0,-1),i=!0),s.indexOf(".")>=0&&(t=s.split("."),s=t.shift(),t.sort());if((!f||p.event.customEvent[s])&&!p.event.global[s])return;c=typeof c=="object"?c[p.expando]?c:new p.Event(s,c):new p.Event(s),c.type=s,c.isTrigger=!0,c.exclusive=i,c.namespace=t.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+t.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,m=s.indexOf(":")<0?"on"+s:"";if(!f){h=p.cache;for(j in h)h[j].events&&h[j].events[s]&&p.event.trigger(c,d,h[j].handle.elem,!0);return}c.result=b,c.target||(c.target=f),d=d!=null?p.makeArray(d):[],d.unshift(c),n=p.event.special[s]||{};if(n.trigger&&n.trigger.apply(f,d)===!1)return;q=[[f,n.bindType||s]];if(!g&&!n.noBubble&&!p.isWindow(f)){r=n.delegateType||s,k=$.test(r+s)?f:f.parentNode;for(l=f;k;k=k.parentNode)q.push([k,r]),l=k;l===(f.ownerDocument||e)&&q.push([l.defaultView||l.parentWindow||a,r])}for(j=0;j<q.length&&!c.isPropagationStopped();j++)k=q[j][0],c.type=q[j][1],o=(p._data(k,"events")||{})[c.type]&&p._data(k,"handle"),o&&o.apply(k,d),o=m&&k[m],o&&p.acceptData(k)&&o.apply&&o.apply(k,d)===!1&&c.preventDefault();return c.type=s,!g&&!c.isDefaultPrevented()&&(!n._default||n._default.apply(f.ownerDocument,d)===!1)&&(s!=="click"||!p.nodeName(f,"a"))&&p.acceptData(f)&&m&&f[s]&&(s!=="focus"&&s!=="blur"||c.target.offsetWidth!==0)&&!p.isWindow(f)&&(l=f[m],l&&(f[m]=null),p.event.triggered=s,f[s](),p.event.triggered=b,l&&(f[m]=l)),c.result}return},dispatch:function(c){c=p.event.fix(c||a.event);var d,e,f,g,h,i,j,l,m,n,o=(p._data(this,"events")||{})[c.type]||[],q=o.delegateCount,r=k.call(arguments),s=!c.exclusive&&!c.namespace,t=p.event.special[c.type]||{},u=[];r[0]=c,c.delegateTarget=this;if(t.preDispatch&&t.preDispatch.call(this,c)===!1)return;if(q&&(!c.button||c.type!=="click"))for(f=c.target;f!=this;f=f.parentNode||this)if(f.disabled!==!0||c.type!=="click"){h={},j=[];for(d=0;d<q;d++)l=o[d],m=l.selector,h[m]===b&&(h[m]=l.needsContext?p(m,this).index(f)>=0:p.find(m,this,null,[f]).length),h[m]&&j.push(l);j.length&&u.push({elem:f,matches:j})}o.length>q&&u.push({elem:this,matches:o.slice(q)});for(d=0;d<u.length&&!c.isPropagationStopped();d++){i=u[d],c.currentTarget=i.elem;for(e=0;e<i.matches.length&&!c.isImmediatePropagationStopped();e++){l=i.matches[e];if(s||!c.namespace&&!l.namespace||c.namespace_re&&c.namespace_re.test(l.namespace))c.data=l.data,c.handleObj=l,g=((p.event.special[l.origType]||{}).handle||l.handler).apply(i.elem,r),g!==b&&(c.result=g,g===!1&&(c.preventDefault(),c.stopPropagation()))}}return t.postDispatch&&t.postDispatch.call(this,c),c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,c){var d,f,g,h=c.button,i=c.fromElement;return a.pageX==null&&c.clientX!=null&&(d=a.target.ownerDocument||e,f=d.documentElement,g=d.body,a.pageX=c.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=c.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?c.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0),a}},fix:function(a){if(a[p.expando])return a;var b,c,d=a,f=p.event.fixHooks[a.type]||{},g=f.props?this.props.concat(f.props):this.props;a=p.Event(d);for(b=g.length;b;)c=g[--b],a[c]=d[c];return a.target||(a.target=d.srcElement||e),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,f.filter?f.filter(a,d):a},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){p.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=p.extend(new p.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?p.event.trigger(e,null,b):p.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},p.event.handle=p.event.dispatch,p.removeEvent=e.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]=="undefined"&&(a[d]=null),a.detachEvent(d,c))},p.Event=function(a,b){if(this instanceof p.Event)a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?bb:ba):this.type=a,b&&p.extend(this,b),this.timeStamp=a&&a.timeStamp||p.now(),this[p.expando]=!0;else return new p.Event(a,b)},p.Event.prototype={preventDefault:function(){this.isDefaultPrevented=bb;var a=this.originalEvent;if(!a)return;a.preventDefault?a.preventDefault():a.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=bb;var a=this.originalEvent;if(!a)return;a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=bb,this.stopPropagation()},isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba},p.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){p.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj,g=f.selector;if(!e||e!==d&&!p.contains(d,e))a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b;return c}}}),p.support.submitBubbles||(p.event.special.submit={setup:function(){if(p.nodeName(this,"form"))return!1;p.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=p.nodeName(c,"input")||p.nodeName(c,"button")?c.form:b;d&&!p._data(d,"_submit_attached")&&(p.event.add(d,"submit._submit",function(a){a._submit_bubble=!0}),p._data(d,"_submit_attached",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&p.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){if(p.nodeName(this,"form"))return!1;p.event.remove(this,"._submit")}}),p.support.changeBubbles||(p.event.special.change={setup:function(){if(V.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")p.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),p.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),p.event.simulate("change",this,a,!0)});return!1}p.event.add(this,"beforeactivate._change",function(a){var b=a.target;V.test(b.nodeName)&&!p._data(b,"_change_attached")&&(p.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&p.event.simulate("change",this.parentNode,a,!0)}),p._data(b,"_change_attached",!0))})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){return p.event.remove(this,"._change"),!V.test(this.nodeName)}}),p.support.focusinBubbles||p.each({focus:"focusin",blur:"focusout"},function(a,b){var c=0,d=function(a){p.event.simulate(b,a.target,p.event.fix(a),!0)};p.event.special[b]={setup:function(){c++===0&&e.addEventListener(a,d,!0)},teardown:function(){--c===0&&e.removeEventListener(a,d,!0)}}}),p.fn.extend({on:function(a,c,d,e,f){var g,h;if(typeof a=="object"){typeof c!="string"&&(d=d||c,c=b);for(h in a)this.on(h,c,d,a[h],f);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=ba;else if(!e)return this;return f===1&&(g=e,e=function(a){return p().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=p.guid++)),this.each(function(){p.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,c,d){var e,f;if(a&&a.preventDefault&&a.handleObj)return e=a.handleObj,p(a.delegateTarget).off(e.namespace?e.origType+"."+e.namespace:e.origType,e.selector,e.handler),this;if(typeof a=="object"){for(f in a)this.off(f,c,a[f]);return this}if(c===!1||typeof c=="function")d=c,c=b;return d===!1&&(d=ba),this.each(function(){p.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){return p(this.context).on(a,this.selector,b,c),this},die:function(a,b){return p(this.context).off(a,this.selector||"**",b),this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length===1?this.off(a,"**"):this.off(b,a||"**",c)},trigger:function(a,b){return this.each(function(){p.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return p.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||p.guid++,d=0,e=function(c){var e=(p._data(this,"lastToggle"+a.guid)||0)%d;return p._data(this,"lastToggle"+a.guid,e+1),c.preventDefault(),b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){p.fn[b]=function(a,c){return c==null&&(c=a,a=null),arguments.length>0?this.on(b,null,a,c):this.trigger(b)},Y.test(b)&&(p.event.fixHooks[b]=p.event.keyHooks),Z.test(b)&&(p.event.fixHooks[b]=p.event.mouseHooks)}),function(a,b){function bc(a,b,c,d){c=c||[],b=b||r;var e,f,i,j,k=b.nodeType;if(!a||typeof a!="string")return c;if(k!==1&&k!==9)return[];i=g(b);if(!i&&!d)if(e=P.exec(a))if(j=e[1]){if(k===9){f=b.getElementById(j);if(!f||!f.parentNode)return c;if(f.id===j)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(j))&&h(b,f)&&f.id===j)return c.push(f),c}else{if(e[2])return w.apply(c,x.call(b.getElementsByTagName(a),0)),c;if((j=e[3])&&_&&b.getElementsByClassName)return w.apply(c,x.call(b.getElementsByClassName(j),0)),c}return bp(a.replace(L,"$1"),b,c,d,i)}function bd(a){return function(b){var c=b.nodeName.toLowerCase();return c==="input"&&b.type===a}}function be(a){return function(b){var c=b.nodeName.toLowerCase();return(c==="input"||c==="button")&&b.type===a}}function bf(a){return z(function(b){return b=+b,z(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function bg(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}function bh(a,b){var c,d,f,g,h,i,j,k=C[o][a];if(k)return b?0:k.slice(0);h=a,i=[],j=e.preFilter;while(h){if(!c||(d=M.exec(h)))d&&(h=h.slice(d[0].length)),i.push(f=[]);c=!1;if(d=N.exec(h))f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=d[0].replace(L," ");for(g in e.filter)(d=W[g].exec(h))&&(!j[g]||(d=j[g](d,r,!0)))&&(f.push(c=new q(d.shift())),h=h.slice(c.length),c.type=g,c.matches=d);if(!c)break}return b?h.length:h?bc.error(a):C(a,i).slice(0)}function bi(a,b,d){var e=b.dir,f=d&&b.dir==="parentNode",g=u++;return b.first?function(b,c,d){while(b=b[e])if(f||b.nodeType===1)return a(b,c,d)}:function(b,d,h){if(!h){var i,j=t+" "+g+" ",k=j+c;while(b=b[e])if(f||b.nodeType===1){if((i=b[o])===k)return b.sizset;if(typeof i=="string"&&i.indexOf(j)===0){if(b.sizset)return b}else{b[o]=k;if(a(b,d,h))return b.sizset=!0,b;b.sizset=!1}}}else while(b=b[e])if(f||b.nodeType===1)if(a(b,d,h))return b}}function bj(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function bk(a,b,c,d,e){var f,g=[],h=0,i=a.length,j=b!=null;for(;h<i;h++)if(f=a[h])if(!c||c(f,d,e))g.push(f),j&&b.push(h);return g}function bl(a,b,c,d,e,f){return d&&!d[o]&&(d=bl(d)),e&&!e[o]&&(e=bl(e,f)),z(function(f,g,h,i){if(f&&e)return;var j,k,l,m=[],n=[],o=g.length,p=f||bo(b||"*",h.nodeType?[h]:h,[],f),q=a&&(f||!b)?bk(p,m,a,h,i):p,r=c?e||(f?a:o||d)?[]:g:q;c&&c(q,r,h,i);if(d){l=bk(r,n),d(l,[],h,i),j=l.length;while(j--)if(k=l[j])r[n[j]]=!(q[n[j]]=k)}if(f){j=a&&r.length;while(j--)if(k=r[j])f[m[j]]=!(g[m[j]]=k)}else r=bk(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):w.apply(g,r)})}function bm(a){var b,c,d,f=a.length,g=e.relative[a[0].type],h=g||e.relative[" "],i=g?1:0,j=bi(function(a){return a===b},h,!0),k=bi(function(a){return y.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==l)||((b=c).nodeType?j(a,c,d):k(a,c,d))}];for(;i<f;i++)if(c=e.relative[a[i].type])m=[bi(bj(m),c)];else{c=e.filter[a[i].type].apply(null,a[i].matches);if(c[o]){d=++i;for(;d<f;d++)if(e.relative[a[d].type])break;return bl(i>1&&bj(m),i>1&&a.slice(0,i-1).join("").replace(L,"$1"),c,i<d&&bm(a.slice(i,d)),d<f&&bm(a=a.slice(d)),d<f&&a.join(""))}m.push(c)}return bj(m)}function bn(a,b){var d=b.length>0,f=a.length>0,g=function(h,i,j,k,m){var n,o,p,q=[],s=0,u="0",x=h&&[],y=m!=null,z=l,A=h||f&&e.find.TAG("*",m&&i.parentNode||i),B=t+=z==null?1:Math.E;y&&(l=i!==r&&i,c=g.el);for(;(n=A[u])!=null;u++){if(f&&n){for(o=0;p=a[o];o++)if(p(n,i,j)){k.push(n);break}y&&(t=B,c=++g.el)}d&&((n=!p&&n)&&s--,h&&x.push(n))}s+=u;if(d&&u!==s){for(o=0;p=b[o];o++)p(x,q,i,j);if(h){if(s>0)while(u--)!x[u]&&!q[u]&&(q[u]=v.call(k));q=bk(q)}w.apply(k,q),y&&!h&&q.length>0&&s+b.length>1&&bc.uniqueSort(k)}return y&&(t=B,l=z),x};return g.el=0,d?z(g):g}function bo(a,b,c,d){var e=0,f=b.length;for(;e<f;e++)bc(a,b[e],c,d);return c}function bp(a,b,c,d,f){var g,h,j,k,l,m=bh(a),n=m.length;if(!d&&m.length===1){h=m[0]=m[0].slice(0);if(h.length>2&&(j=h[0]).type==="ID"&&b.nodeType===9&&!f&&e.relative[h[1].type]){b=e.find.ID(j.matches[0].replace(V,""),b,f)[0];if(!b)return c;a=a.slice(h.shift().length)}for(g=W.POS.test(a)?-1:h.length-1;g>=0;g--){j=h[g];if(e.relative[k=j.type])break;if(l=e.find[k])if(d=l(j.matches[0].replace(V,""),R.test(h[0].type)&&b.parentNode||b,f)){h.splice(g,1),a=d.length&&h.join("");if(!a)return w.apply(c,x.call(d,0)),c;break}}}return i(a,m)(d,b,f,c,R.test(a)),c}function bq(){}var c,d,e,f,g,h,i,j,k,l,m=!0,n="undefined",o=("sizcache"+Math.random()).replace(".",""),q=String,r=a.document,s=r.documentElement,t=0,u=0,v=[].pop,w=[].push,x=[].slice,y=[].indexOf||function(a){var b=0,c=this.length;for(;b<c;b++)if(this[b]===a)return b;return-1},z=function(a,b){return a[o]=b==null||b,a},A=function(){var a={},b=[];return z(function(c,d){return b.push(c)>e.cacheLength&&delete a[b.shift()],a[c]=d},a)},B=A(),C=A(),D=A(),E="[\\x20\\t\\r\\n\\f]",F="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",G=F.replace("w","w#"),H="([*^$|!~]?=)",I="\\["+E+"*("+F+")"+E+"*(?:"+H+E+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+G+")|)|)"+E+"*\\]",J=":("+F+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+I+")|[^:]|\\\\.)*|.*))\\)|)",K=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)",L=new RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),M=new RegExp("^"+E+"*,"+E+"*"),N=new RegExp("^"+E+"*([\\x20\\t\\r\\n\\f>+~])"+E+"*"),O=new RegExp(J),P=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,Q=/^:not/,R=/[\x20\t\r\n\f]*[+~]/,S=/:not\($/,T=/h\d/i,U=/input|select|textarea|button/i,V=/\\(?!\\)/g,W={ID:new RegExp("^#("+F+")"),CLASS:new RegExp("^\\.("+F+")"),NAME:new RegExp("^\\[name=['\"]?("+F+")['\"]?\\]"),TAG:new RegExp("^("+F.replace("w","w*")+")"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+J),POS:new RegExp(K,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i"),needsContext:new RegExp("^"+E+"*[>+~]|"+K,"i")},X=function(a){var b=r.createElement("div");try{return a(b)}catch(c){return!1}finally{b=null}},Y=X(function(a){return a.appendChild(r.createComment("")),!a.getElementsByTagName("*").length}),Z=X(function(a){return a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!==n&&a.firstChild.getAttribute("href")==="#"}),$=X(function(a){a.innerHTML="<select></select>";var b=typeof a.lastChild.getAttribute("multiple");return b!=="boolean"&&b!=="string"}),_=X(function(a){return a.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!a.getElementsByClassName||!a.getElementsByClassName("e").length?!1:(a.lastChild.className="e",a.getElementsByClassName("e").length===2)}),ba=X(function(a){a.id=o+0,a.innerHTML="<a name='"+o+"'></a><div name='"+o+"'></div>",s.insertBefore(a,s.firstChild);var b=r.getElementsByName&&r.getElementsByName(o).length===2+r.getElementsByName(o+0).length;return d=!r.getElementById(o),s.removeChild(a),b});try{x.call(s.childNodes,0)[0].nodeType}catch(bb){x=function(a){var b,c=[];for(;b=this[a];a++)c.push(b);return c}}bc.matches=function(a,b){return bc(a,null,null,b)},bc.matchesSelector=function(a,b){return bc(b,null,null,[a]).length>0},f=bc.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(e===1||e===9||e===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=f(a)}else if(e===3||e===4)return a.nodeValue}else for(;b=a[d];d++)c+=f(b);return c},g=bc.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?b.nodeName!=="HTML":!1},h=bc.contains=s.contains?function(a,b){var c=a.nodeType===9?a.documentElement:a,d=b&&b.parentNode;return a===d||!!(d&&d.nodeType===1&&c.contains&&c.contains(d))}:s.compareDocumentPosition?function(a,b){return b&&!!(a.compareDocumentPosition(b)&16)}:function(a,b){while(b=b.parentNode)if(b===a)return!0;return!1},bc.attr=function(a,b){var c,d=g(a);return d||(b=b.toLowerCase()),(c=e.attrHandle[b])?c(a):d||$?a.getAttribute(b):(c=a.getAttributeNode(b),c?typeof a[b]=="boolean"?a[b]?b:null:c.specified?c.value:null:null)},e=bc.selectors={cacheLength:50,createPseudo:z,match:W,attrHandle:Z?{}:{href:function(a){return a.getAttribute("href",2)},type:function(a){return a.getAttribute("type")}},find:{ID:d?function(a,b,c){if(typeof b.getElementById!==n&&!c){var d=b.getElementById(a);return d&&d.parentNode?[d]:[]}}:function(a,c,d){if(typeof c.getElementById!==n&&!d){var e=c.getElementById(a);return e?e.id===a||typeof e.getAttributeNode!==n&&e.getAttributeNode("id").value===a?[e]:b:[]}},TAG:Y?function(a,b){if(typeof b.getElementsByTagName!==n)return b.getElementsByTagName(a)}:function(a,b){var c=b.getElementsByTagName(a);if(a==="*"){var d,e=[],f=0;for(;d=c[f];f++)d.nodeType===1&&e.push(d);return e}return c},NAME:ba&&function(a,b){if(typeof b.getElementsByName!==n)return b.getElementsByName(name)},CLASS:_&&function(a,b,c){if(typeof b.getElementsByClassName!==n&&!c)return b.getElementsByClassName(a)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(V,""),a[3]=(a[4]||a[5]||"").replace(V,""),a[2]==="~="&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),a[1]==="nth"?(a[2]||bc.error(a[0]),a[3]=+(a[3]?a[4]+(a[5]||1):2*(a[2]==="even"||a[2]==="odd")),a[4]=+(a[6]+a[7]||a[2]==="odd")):a[2]&&bc.error(a[0]),a},PSEUDO:function(a){var b,c;if(W.CHILD.test(a[0]))return null;if(a[3])a[2]=a[3];else if(b=a[4])O.test(b)&&(c=bh(b,!0))&&(c=b.indexOf(")",b.length-c)-b.length)&&(b=b.slice(0,c),a[0]=a[0].slice(0,c)),a[2]=b;return a.slice(0,3)}},filter:{ID:d?function(a){return a=a.replace(V,""),function(b){return b.getAttribute("id")===a}}:function(a){return a=a.replace(V,""),function(b){var c=typeof b.getAttributeNode!==n&&b.getAttributeNode("id");return c&&c.value===a}},TAG:function(a){return a==="*"?function(){return!0}:(a=a.replace(V,"").toLowerCase(),function(b){return b.nodeName&&b.nodeName.toLowerCase()===a})},CLASS:function(a){var b=B[o][a];return b||(b=B(a,new RegExp("(^|"+E+")"+a+"("+E+"|$)"))),function(a){return b.test(a.className||typeof a.getAttribute!==n&&a.getAttribute("class")||"")}},ATTR:function(a,b,c){return function(d,e){var f=bc.attr(d,a);return f==null?b==="!=":b?(f+="",b==="="?f===c:b==="!="?f!==c:b==="^="?c&&f.indexOf(c)===0:b==="*="?c&&f.indexOf(c)>-1:b==="$="?c&&f.substr(f.length-c.length)===c:b==="~="?(" "+f+" ").indexOf(c)>-1:b==="|="?f===c||f.substr(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d){return a==="nth"?function(a){var b,e,f=a.parentNode;if(c===1&&d===0)return!0;if(f){e=0;for(b=f.firstChild;b;b=b.nextSibling)if(b.nodeType===1){e++;if(a===b)break}}return e-=d,e===c||e%c===0&&e/c>=0}:function(b){var c=b;switch(a){case"only":case"first":while(c=c.previousSibling)if(c.nodeType===1)return!1;if(a==="first")return!0;c=b;case"last":while(c=c.nextSibling)if(c.nodeType===1)return!1;return!0}}},PSEUDO:function(a,b){var c,d=e.pseudos[a]||e.setFilters[a.toLowerCase()]||bc.error("unsupported pseudo: "+a);return d[o]?d(b):d.length>1?(c=[a,a,"",b],e.setFilters.hasOwnProperty(a.toLowerCase())?z(function(a,c){var e,f=d(a,b),g=f.length;while(g--)e=y.call(a,f[g]),a[e]=!(c[e]=f[g])}):function(a){return d(a,0,c)}):d}},pseudos:{not:z(function(a){var b=[],c=[],d=i(a.replace(L,"$1"));return d[o]?z(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)if(f=g[h])a[h]=!(b[h]=f)}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:z(function(a){return function(b){return bc(a,b).length>0}}),contains:z(function(a){return function(b){return(b.textContent||b.innerText||f(b)).indexOf(a)>-1}}),enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&!!a.checked||b==="option"&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},parent:function(a){return!e.pseudos.empty(a)},empty:function(a){var b;a=a.firstChild;while(a){if(a.nodeName>"@"||(b=a.nodeType)===3||b===4)return!1;a=a.nextSibling}return!0},header:function(a){return T.test(a.nodeName)},text:function(a){var b,c;return a.nodeName.toLowerCase()==="input"&&(b=a.type)==="text"&&((c=a.getAttribute("type"))==null||c.toLowerCase()===b)},radio:bd("radio"),checkbox:bd("checkbox"),file:bd("file"),password:bd("password"),image:bd("image"),submit:be("submit"),reset:be("reset"),button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&a.type==="button"||b==="button"},input:function(a){return U.test(a.nodeName)},focus:function(a){var b=a.ownerDocument;return a===b.activeElement&&(!b.hasFocus||b.hasFocus())&&(!!a.type||!!a.href)},active:function(a){return a===a.ownerDocument.activeElement},first:bf(function(a,b,c){return[0]}),last:bf(function(a,b,c){return[b-1]}),eq:bf(function(a,b,c){return[c<0?c+b:c]}),even:bf(function(a,b,c){for(var d=0;d<b;d+=2)a.push(d);return a}),odd:bf(function(a,b,c){for(var d=1;d<b;d+=2)a.push(d);return a}),lt:bf(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:bf(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},j=s.compareDocumentPosition?function(a,b){return a===b?(k=!0,0):(!a.compareDocumentPosition||!b.compareDocumentPosition?a.compareDocumentPosition:a.compareDocumentPosition(b)&4)?-1:1}:function(a,b){if(a===b)return k=!0,0;if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,h=b.parentNode,i=g;if(g===h)return bg(a,b);if(!g)return-1;if(!h)return 1;while(i)e.unshift(i),i=i.parentNode;i=h;while(i)f.unshift(i),i=i.parentNode;c=e.length,d=f.length;for(var j=0;j<c&&j<d;j++)if(e[j]!==f[j])return bg(e[j],f[j]);return j===c?bg(a,f[j],-1):bg(e[j],b,1)},[0,0].sort(j),m=!k,bc.uniqueSort=function(a){var b,c=1;k=m,a.sort(j);if(k)for(;b=a[c];c++)b===a[c-1]&&a.splice(c--,1);return a},bc.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},i=bc.compile=function(a,b){var c,d=[],e=[],f=D[o][a];if(!f){b||(b=bh(a)),c=b.length;while(c--)f=bm(b[c]),f[o]?d.push(f):e.push(f);f=D(a,bn(e,d))}return f},r.querySelectorAll&&function(){var a,b=bp,c=/'|\\/g,d=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,e=[":focus"],f=[":active",":focus"],h=s.matchesSelector||s.mozMatchesSelector||s.webkitMatchesSelector||s.oMatchesSelector||s.msMatchesSelector;X(function(a){a.innerHTML="<select><option selected=''></option></select>",a.querySelectorAll("[selected]").length||e.push("\\["+E+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),a.querySelectorAll(":checked").length||e.push(":checked")}),X(function(a){a.innerHTML="<p test=''></p>",a.querySelectorAll("[test^='']").length&&e.push("[*^$]="+E+"*(?:\"\"|'')"),a.innerHTML="<input type='hidden'/>",a.querySelectorAll(":enabled").length||e.push(":enabled",":disabled")}),e=new RegExp(e.join("|")),bp=function(a,d,f,g,h){if(!g&&!h&&(!e||!e.test(a))){var i,j,k=!0,l=o,m=d,n=d.nodeType===9&&a;if(d.nodeType===1&&d.nodeName.toLowerCase()!=="object"){i=bh(a),(k=d.getAttribute("id"))?l=k.replace(c,"\\$&"):d.setAttribute("id",l),l="[id='"+l+"'] ",j=i.length;while(j--)i[j]=l+i[j].join("");m=R.test(a)&&d.parentNode||d,n=i.join(",")}if(n)try{return w.apply(f,x.call(m.querySelectorAll(n),0)),f}catch(p){}finally{k||d.removeAttribute("id")}}return b(a,d,f,g,h)},h&&(X(function(b){a=h.call(b,"div");try{h.call(b,"[test!='']:sizzle"),f.push("!=",J)}catch(c){}}),f=new RegExp(f.join("|")),bc.matchesSelector=function(b,c){c=c.replace(d,"='$1']");if(!g(b)&&!f.test(c)&&(!e||!e.test(c)))try{var i=h.call(b,c);if(i||a||b.document&&b.document.nodeType!==11)return i}catch(j){}return bc(c,null,null,[b]).length>0})}(),e.pseudos.nth=e.pseudos.eq,e.filters=bq.prototype=e.pseudos,e.setFilters=new bq,bc.attr=p.attr,p.find=bc,p.expr=bc.selectors,p.expr[":"]=p.expr.pseudos,p.unique=bc.uniqueSort,p.text=bc.getText,p.isXMLDoc=bc.isXML,p.contains=bc.contains}(a);var bc=/Until$/,bd=/^(?:parents|prev(?:Until|All))/,be=/^.[^:#\[\.,]*$/,bf=p.expr.match.needsContext,bg={children:!0,contents:!0,next:!0,prev:!0};p.fn.extend({find:function(a){var b,c,d,e,f,g,h=this;if(typeof a!="string")return p(a).filter(function(){for(b=0,c=h.length;b<c;b++)if(p.contains(h[b],this))return!0});g=this.pushStack("","find",a);for(b=0,c=this.length;b<c;b++){d=g.length,p.find(a,this[b],g);if(b>0)for(e=d;e<g.length;e++)for(f=0;f<d;f++)if(g[f]===g[e]){g.splice(e--,1);break}}return g},has:function(a){var b,c=p(a,this),d=c.length;return this.filter(function(){for(b=0;b<d;b++)if(p.contains(this,c[b]))return!0})},not:function(a){return this.pushStack(bj(this,a,!1),"not",a)},filter:function(a){return this.pushStack(bj(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?bf.test(a)?p(a,this.context).index(this[0])>=0:p.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c,d=0,e=this.length,f=[],g=bf.test(a)||typeof a!="string"?p(a,b||this.context):0;for(;d<e;d++){c=this[d];while(c&&c.ownerDocument&&c!==b&&c.nodeType!==11){if(g?g.index(c)>-1:p.find.matchesSelector(c,a)){f.push(c);break}c=c.parentNode}}return f=f.length>1?p.unique(f):f,this.pushStack(f,"closest",a)},index:function(a){return a?typeof a=="string"?p.inArray(this[0],p(a)):p.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(a,b){var c=typeof a=="string"?p(a,b):p.makeArray(a&&a.nodeType?[a]:a),d=p.merge(this.get(),c);return this.pushStack(bh(c[0])||bh(d[0])?d:p.unique(d))},addBack:function(a){return this.add(a==null?this.prevObject:this.prevObject.filter(a))}}),p.fn.andSelf=p.fn.addBack,p.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return p.dir(a,"parentNode")},parentsUntil:function(a,b,c){return p.dir(a,"parentNode",c)},next:function(a){return bi(a,"nextSibling")},prev:function(a){return bi(a,"previousSibling")},nextAll:function(a){return p.dir(a,"nextSibling")},prevAll:function(a){return p.dir(a,"previousSibling")},nextUntil:function(a,b,c){return p.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return p.dir(a,"previousSibling",c)},siblings:function(a){return p.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return p.sibling(a.firstChild)},contents:function(a){return p.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:p.merge([],a.childNodes)}},function(a,b){p.fn[a]=function(c,d){var e=p.map(this,b,c);return bc.test(a)||(d=c),d&&typeof d=="string"&&(e=p.filter(d,e)),e=this.length>1&&!bg[a]?p.unique(e):e,this.length>1&&bd.test(a)&&(e=e.reverse()),this.pushStack(e,a,k.call(arguments).join(","))}}),p.extend({filter:function(a,b,c){return c&&(a=":not("+a+")"),b.length===1?p.find.matchesSelector(b[0],a)?[b[0]]:[]:p.find.matches(a,b)},dir:function(a,c,d){var e=[],f=a[c];while(f&&f.nodeType!==9&&(d===b||f.nodeType!==1||!p(f).is(d)))f.nodeType===1&&e.push(f),f=f[c];return e},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var bl="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",bm=/ jQuery\d+="(?:null|\d+)"/g,bn=/^\s+/,bo=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bp=/<([\w:]+)/,bq=/<tbody/i,br=/<|&#?\w+;/,bs=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,bu=new RegExp("<(?:"+bl+")[\\s/>]","i"),bv=/^(?:checkbox|radio)$/,bw=/checked\s*(?:[^=]|=\s*.checked.)/i,bx=/\/(java|ecma)script/i,by=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,bz={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bA=bk(e),bB=bA.appendChild(e.createElement("div"));bz.optgroup=bz.option,bz.tbody=bz.tfoot=bz.colgroup=bz.caption=bz.thead,bz.th=bz.td,p.support.htmlSerialize||(bz._default=[1,"X<div>","</div>"]),p.fn.extend({text:function(a){return p.access(this,function(a){return a===b?p.text(this):this.empty().append((this[0]&&this[0].ownerDocument||e).createTextNode(a))},null,a,arguments.length)},wrapAll:function(a){if(p.isFunction(a))return this.each(function(b){p(this).wrapAll(a.call(this,b))});if(this[0]){var b=p(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return p.isFunction(a)?this.each(function(b){p(this).wrapInner(a.call(this,b))}):this.each(function(){var b=p(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=p.isFunction(a);return this.each(function(c){p(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){p.nodeName(this,"body")||p(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(a,this.firstChild)})},before:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(a,this),"before",this.selector)}},after:function(){if(!bh(this[0]))return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=p.clean(arguments);return this.pushStack(p.merge(this,a),"after",this.selector)}},remove:function(a,b){var c,d=0;for(;(c=this[d])!=null;d++)if(!a||p.filter(a,[c]).length)!b&&c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),p.cleanData([c])),c.parentNode&&c.parentNode.removeChild(c);return this},empty:function(){var a,b=0;for(;(a=this[b])!=null;b++){a.nodeType===1&&p.cleanData(a.getElementsByTagName("*"));while(a.firstChild)a.removeChild(a.firstChild)}return this},clone:function(a,b){return a=a==null?!1:a,b=b==null?a:b,this.map(function(){return p.clone(this,a,b)})},html:function(a){return p.access(this,function(a){var c=this[0]||{},d=0,e=this.length;if(a===b)return c.nodeType===1?c.innerHTML.replace(bm,""):b;if(typeof a=="string"&&!bs.test(a)&&(p.support.htmlSerialize||!bu.test(a))&&(p.support.leadingWhitespace||!bn.test(a))&&!bz[(bp.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(bo,"<$1></$2>");try{for(;d<e;d++)c=this[d]||{},c.nodeType===1&&(p.cleanData(c.getElementsByTagName("*")),c.innerHTML=a);c=0}catch(f){}}c&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(a){return bh(this[0])?this.length?this.pushStack(p(p.isFunction(a)?a():a),"replaceWith",a):this:p.isFunction(a)?this.each(function(b){var c=p(this),d=c.html();c.replaceWith(a.call(this,b,d))}):(typeof a!="string"&&(a=p(a).detach()),this.each(function(){var b=this.nextSibling,c=this.parentNode;p(this).remove(),b?p(b).before(a):p(c).append(a)}))},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){a=[].concat.apply([],a);var e,f,g,h,i=0,j=a[0],k=[],l=this.length;if(!p.support.checkClone&&l>1&&typeof j=="string"&&bw.test(j))return this.each(function(){p(this).domManip(a,c,d)});if(p.isFunction(j))return this.each(function(e){var f=p(this);a[0]=j.call(this,e,c?f.html():b),f.domManip(a,c,d)});if(this[0]){e=p.buildFragment(a,this,k),g=e.fragment,f=g.firstChild,g.childNodes.length===1&&(g=f);if(f){c=c&&p.nodeName(f,"tr");for(h=e.cacheable||l-1;i<l;i++)d.call(c&&p.nodeName(this[i],"table")?bC(this[i],"tbody"):this[i],i===h?g:p.clone(g,!0,!0))}g=f=null,k.length&&p.each(k,function(a,b){b.src?p.ajax?p.ajax({url:b.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):p.error("no ajax"):p.globalEval((b.text||b.textContent||b.innerHTML||"").replace(by,"")),b.parentNode&&b.parentNode.removeChild(b)})}return this}}),p.buildFragment=function(a,c,d){var f,g,h,i=a[0];return c=c||e,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,a.length===1&&typeof i=="string"&&i.length<512&&c===e&&i.charAt(0)==="<"&&!bt.test(i)&&(p.support.checkClone||!bw.test(i))&&(p.support.html5Clone||!bu.test(i))&&(g=!0,f=p.fragments[i],h=f!==b),f||(f=c.createDocumentFragment(),p.clean(a,c,f,d),g&&(p.fragments[i]=h&&f)),{fragment:f,cacheable:g}},p.fragments={},p.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){p.fn[a]=function(c){var d,e=0,f=[],g=p(c),h=g.length,i=this.length===1&&this[0].parentNode;if((i==null||i&&i.nodeType===11&&i.childNodes.length===1)&&h===1)return g[b](this[0]),this;for(;e<h;e++)d=(e>0?this.clone(!0):this).get(),p(g[e])[b](d),f=f.concat(d);return this.pushStack(f,a,g.selector)}}),p.extend({clone:function(a,b,c){var d,e,f,g;p.support.html5Clone||p.isXMLDoc(a)||!bu.test("<"+a.nodeName+">")?g=a.cloneNode(!0):(bB.innerHTML=a.outerHTML,bB.removeChild(g=bB.firstChild));if((!p.support.noCloneEvent||!p.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!p.isXMLDoc(a)){bE(a,g),d=bF(a),e=bF(g);for(f=0;d[f];++f)e[f]&&bE(d[f],e[f])}if(b){bD(a,g);if(c){d=bF(a),e=bF(g);for(f=0;d[f];++f)bD(d[f],e[f])}}return d=e=null,g},clean:function(a,b,c,d){var f,g,h,i,j,k,l,m,n,o,q,r,s=b===e&&bA,t=[];if(!b||typeof b.createDocumentFragment=="undefined")b=e;for(f=0;(h=a[f])!=null;f++){typeof h=="number"&&(h+="");if(!h)continue;if(typeof h=="string")if(!br.test(h))h=b.createTextNode(h);else{s=s||bk(b),l=b.createElement("div"),s.appendChild(l),h=h.replace(bo,"<$1></$2>"),i=(bp.exec(h)||["",""])[1].toLowerCase(),j=bz[i]||bz._default,k=j[0],l.innerHTML=j[1]+h+j[2];while(k--)l=l.lastChild;if(!p.support.tbody){m=bq.test(h),n=i==="table"&&!m?l.firstChild&&l.firstChild.childNodes:j[1]==="<table>"&&!m?l.childNodes:[];for(g=n.length-1;g>=0;--g)p.nodeName(n[g],"tbody")&&!n[g].childNodes.length&&n[g].parentNode.removeChild(n[g])}!p.support.leadingWhitespace&&bn.test(h)&&l.insertBefore(b.createTextNode(bn.exec(h)[0]),l.firstChild),h=l.childNodes,l.parentNode.removeChild(l)}h.nodeType?t.push(h):p.merge(t,h)}l&&(h=l=s=null);if(!p.support.appendChecked)for(f=0;(h=t[f])!=null;f++)p.nodeName(h,"input")?bG(h):typeof h.getElementsByTagName!="undefined"&&p.grep(h.getElementsByTagName("input"),bG);if(c){q=function(a){if(!a.type||bx.test(a.type))return d?d.push(a.parentNode?a.parentNode.removeChild(a):a):c.appendChild(a)};for(f=0;(h=t[f])!=null;f++)if(!p.nodeName(h,"script")||!q(h))c.appendChild(h),typeof h.getElementsByTagName!="undefined"&&(r=p.grep(p.merge([],h.getElementsByTagName("script")),q),t.splice.apply(t,[f+1,0].concat(r)),f+=r.length)}return t},cleanData:function(a,b){var c,d,e,f,g=0,h=p.expando,i=p.cache,j=p.support.deleteExpando,k=p.event.special;for(;(e=a[g])!=null;g++)if(b||p.acceptData(e)){d=e[h],c=d&&i[d];if(c){if(c.events)for(f in c.events)k[f]?p.event.remove(e,f):p.removeEvent(e,f,c.handle);i[d]&&(delete i[d],j?delete e[h]:e.removeAttribute?e.removeAttribute(h):e[h]=null,p.deletedIds.push(d))}}}}),function(){var a,b;p.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a=p.uaMatch(g.userAgent),b={},a.browser&&(b[a.browser]=!0,b.version=a.version),b.chrome?b.webkit=!0:b.webkit&&(b.safari=!0),p.browser=b,p.sub=function(){function a(b,c){return new a.fn.init(b,c)}p.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function c(c,d){return d&&d instanceof p&&!(d instanceof a)&&(d=a(d)),p.fn.init.call(this,c,d,b)},a.fn.init.prototype=a.fn;var b=a(e);return a}}();var bH,bI,bJ,bK=/alpha\([^)]*\)/i,bL=/opacity=([^)]*)/,bM=/^(top|right|bottom|left)$/,bN=/^(none|table(?!-c[ea]).+)/,bO=/^margin/,bP=new RegExp("^("+q+")(.*)$","i"),bQ=new RegExp("^("+q+")(?!px)[a-z%]+$","i"),bR=new RegExp("^([-+])=("+q+")","i"),bS={},bT={position:"absolute",visibility:"hidden",display:"block"},bU={letterSpacing:0,fontWeight:400},bV=["Top","Right","Bottom","Left"],bW=["Webkit","O","Moz","ms"],bX=p.fn.toggle;p.fn.extend({css:function(a,c){return p.access(this,function(a,c,d){return d!==b?p.style(a,c,d):p.css(a,c)},a,c,arguments.length>1)},show:function(){return b$(this,!0)},hide:function(){return b$(this)},toggle:function(a,b){var c=typeof a=="boolean";return p.isFunction(a)&&p.isFunction(b)?bX.apply(this,arguments):this.each(function(){(c?a:bZ(this))?p(this).show():p(this).hide()})}}),p.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bH(a,"opacity");return c===""?"1":c}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":p.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!a||a.nodeType===3||a.nodeType===8||!a.style)return;var f,g,h,i=p.camelCase(c),j=a.style;c=p.cssProps[i]||(p.cssProps[i]=bY(j,i)),h=p.cssHooks[c]||p.cssHooks[i];if(d===b)return h&&"get"in h&&(f=h.get(a,!1,e))!==b?f:j[c];g=typeof d,g==="string"&&(f=bR.exec(d))&&(d=(f[1]+1)*f[2]+parseFloat(p.css(a,c)),g="number");if(d==null||g==="number"&&isNaN(d))return;g==="number"&&!p.cssNumber[i]&&(d+="px");if(!h||!("set"in h)||(d=h.set(a,d,e))!==b)try{j[c]=d}catch(k){}},css:function(a,c,d,e){var f,g,h,i=p.camelCase(c);return c=p.cssProps[i]||(p.cssProps[i]=bY(a.style,i)),h=p.cssHooks[c]||p.cssHooks[i],h&&"get"in h&&(f=h.get(a,!0,e)),f===b&&(f=bH(a,c)),f==="normal"&&c in bU&&(f=bU[c]),d||e!==b?(g=parseFloat(f),d||p.isNumeric(g)?g||0:f):f},swap:function(a,b,c){var d,e,f={};for(e in b)f[e]=a.style[e],a.style[e]=b[e];d=c.call(a);for(e in b)a.style[e]=f[e];return d}}),a.getComputedStyle?bH=function(b,c){var d,e,f,g,h=a.getComputedStyle(b,null),i=b.style;return h&&(d=h[c],d===""&&!p.contains(b.ownerDocument,b)&&(d=p.style(b,c)),bQ.test(d)&&bO.test(c)&&(e=i.width,f=i.minWidth,g=i.maxWidth,i.minWidth=i.maxWidth=i.width=d,d=h.width,i.width=e,i.minWidth=f,i.maxWidth=g)),d}:e.documentElement.currentStyle&&(bH=function(a,b){var c,d,e=a.currentStyle&&a.currentStyle[b],f=a.style;return e==null&&f&&f[b]&&(e=f[b]),bQ.test(e)&&!bM.test(b)&&(c=f.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),f.left=b==="fontSize"?"1em":e,e=f.pixelLeft+"px",f.left=c,d&&(a.runtimeStyle.left=d)),e===""?"auto":e}),p.each(["height","width"],function(a,b){p.cssHooks[b]={get:function(a,c,d){if(c)return a.offsetWidth===0&&bN.test(bH(a,"display"))?p.swap(a,bT,function(){return cb(a,b,d)}):cb(a,b,d)},set:function(a,c,d){return b_(a,c,d?ca(a,b,d,p.support.boxSizing&&p.css(a,"boxSizing")==="border-box"):0)}}}),p.support.opacity||(p.cssHooks.opacity={get:function(a,b){return bL.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=p.isNumeric(b)?"alpha(opacity="+b*100+")":"",f=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&p.trim(f.replace(bK,""))===""&&c.removeAttribute){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bK.test(f)?f.replace(bK,e):f+" "+e}}),p(function(){p.support.reliableMarginRight||(p.cssHooks.marginRight={get:function(a,b){return p.swap(a,{display:"inline-block"},function(){if(b)return bH(a,"marginRight")})}}),!p.support.pixelPosition&&p.fn.position&&p.each(["top","left"],function(a,b){p.cssHooks[b]={get:function(a,c){if(c){var d=bH(a,b);return bQ.test(d)?p(a).position()[b]+"px":d}}}})}),p.expr&&p.expr.filters&&(p.expr.filters.hidden=function(a){return a.offsetWidth===0&&a.offsetHeight===0||!p.support.reliableHiddenOffsets&&(a.style&&a.style.display||bH(a,"display"))==="none"},p.expr.filters.visible=function(a){return!p.expr.filters.hidden(a)}),p.each({margin:"",padding:"",border:"Width"},function(a,b){p.cssHooks[a+b]={expand:function(c){var d,e=typeof c=="string"?c.split(" "):[c],f={};for(d=0;d<4;d++)f[a+bV[d]+b]=e[d]||e[d-2]||e[0];return f}},bO.test(a)||(p.cssHooks[a+b].set=b_)});var cd=/%20/g,ce=/\[\]$/,cf=/\r?\n/g,cg=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,ch=/^(?:select|textarea)/i;p.fn.extend({serialize:function(){return p.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?p.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ch.test(this.nodeName)||cg.test(this.type))}).map(function(a,b){var c=p(this).val();return c==null?null:p.isArray(c)?p.map(c,function(a,c){return{name:b.name,value:a.replace(cf,"\r\n")}}):{name:b.name,value:c.replace(cf,"\r\n")}}).get()}}),p.param=function(a,c){var d,e=[],f=function(a,b){b=p.isFunction(b)?b():b==null?"":b,e[e.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=p.ajaxSettings&&p.ajaxSettings.traditional);if(p.isArray(a)||a.jquery&&!p.isPlainObject(a))p.each(a,function(){f(this.name,this.value)});else for(d in a)ci(d,a[d],c,f);return e.join("&").replace(cd,"+")};var cj,ck,cl=/#.*$/,cm=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,cn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,co=/^(?:GET|HEAD)$/,cp=/^\/\//,cq=/\?/,cr=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,cs=/([?&])_=[^&]*/,ct=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,cu=p.fn.load,cv={},cw={},cx=["*/"]+["*"];try{ck=f.href}catch(cy){ck=e.createElement("a"),ck.href="",ck=ck.href}cj=ct.exec(ck.toLowerCase())||[],p.fn.load=function(a,c,d){if(typeof a!="string"&&cu)return cu.apply(this,arguments);if(!this.length)return this;var e,f,g,h=this,i=a.indexOf(" ");return i>=0&&(e=a.slice(i,a.length),a=a.slice(0,i)),p.isFunction(c)?(d=c,c=b):c&&typeof c=="object"&&(f="POST"),p.ajax({url:a,type:f,dataType:"html",data:c,complete:function(a,b){d&&h.each(d,g||[a.responseText,b,a])}}).done(function(a){g=arguments,h.html(e?p("<div>").append(a.replace(cr,"")).find(e):a)}),this},p.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){p.fn[b]=function(a){return this.on(b,a)}}),p.each(["get","post"],function(a,c){p[c]=function(a,d,e,f){return p.isFunction(d)&&(f=f||e,e=d,d=b),p.ajax({type:c,url:a,data:d,success:e,dataType:f})}}),p.extend({getScript:function(a,c){return p.get(a,b,c,"script")},getJSON:function(a,b,c){return p.get(a,b,c,"json")},ajaxSetup:function(a,b){return b?cB(a,p.ajaxSettings):(b=a,a=p.ajaxSettings),cB(a,b),a},ajaxSettings:{url:ck,isLocal:cn.test(cj[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":cx},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":p.parseJSON,"text xml":p.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:cz(cv),ajaxTransport:cz(cw),ajax:function(a,c){function y(a,c,f,i){var k,s,t,u,w,y=c;if(v===2)return;v=2,h&&clearTimeout(h),g=b,e=i||"",x.readyState=a>0?4:0,f&&(u=cC(l,x,f));if(a>=200&&a<300||a===304)l.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(p.lastModified[d]=w),w=x.getResponseHeader("Etag"),w&&(p.etag[d]=w)),a===304?(y="notmodified",k=!0):(k=cD(l,u),y=k.state,s=k.data,t=k.error,k=!t);else{t=y;if(!y||a)y="error",a<0&&(a=0)}x.status=a,x.statusText=(c||y)+"",k?o.resolveWith(m,[s,y,x]):o.rejectWith(m,[x,y,t]),x.statusCode(r),r=b,j&&n.trigger("ajax"+(k?"Success":"Error"),[x,l,k?s:t]),q.fireWith(m,[x,y]),j&&(n.trigger("ajaxComplete",[x,l]),--p.active||p.event.trigger("ajaxStop"))}typeof a=="object"&&(c=a,a=b),c=c||{};var d,e,f,g,h,i,j,k,l=p.ajaxSetup({},c),m=l.context||l,n=m!==l&&(m.nodeType||m instanceof p)?p(m):p.event,o=p.Deferred(),q=p.Callbacks("once memory"),r=l.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,setRequestHeader:function(a,b){if(!v){var c=a.toLowerCase();a=u[c]=u[c]||a,t[a]=b}return this},getAllResponseHeaders:function(){return v===2?e:null},getResponseHeader:function(a){var c;if(v===2){if(!f){f={};while(c=cm.exec(e))f[c[1].toLowerCase()]=c[2]}c=f[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){return v||(l.mimeType=a),this},abort:function(a){return a=a||w,g&&g.abort(a),y(0,a),this}};o.promise(x),x.success=x.done,x.error=x.fail,x.complete=q.add,x.statusCode=function(a){if(a){var b;if(v<2)for(b in a)r[b]=[r[b],a[b]];else b=a[x.status],x.always(b)}return this},l.url=((a||l.url)+"").replace(cl,"").replace(cp,cj[1]+"//"),l.dataTypes=p.trim(l.dataType||"*").toLowerCase().split(s),l.crossDomain==null&&(i=ct.exec(l.url.toLowerCase())||!1,l.crossDomain=i&&i.join(":")+(i[3]?"":i[1]==="http:"?80:443)!==cj.join(":")+(cj[3]?"":cj[1]==="http:"?80:443)),l.data&&l.processData&&typeof l.data!="string"&&(l.data=p.param(l.data,l.traditional)),cA(cv,l,c,x);if(v===2)return x;j=l.global,l.type=l.type.toUpperCase(),l.hasContent=!co.test(l.type),j&&p.active++===0&&p.event.trigger("ajaxStart");if(!l.hasContent){l.data&&(l.url+=(cq.test(l.url)?"&":"?")+l.data,delete l.data),d=l.url;if(l.cache===!1){var z=p.now(),A=l.url.replace(cs,"$1_="+z);l.url=A+(A===l.url?(cq.test(l.url)?"&":"?")+"_="+z:"")}}(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",l.contentType),l.ifModified&&(d=d||l.url,p.lastModified[d]&&x.setRequestHeader("If-Modified-Since",p.lastModified[d]),p.etag[d]&&x.setRequestHeader("If-None-Match",p.etag[d])),x.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+(l.dataTypes[0]!=="*"?", "+cx+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)x.setRequestHeader(k,l.headers[k]);if(!l.beforeSend||l.beforeSend.call(m,x,l)!==!1&&v!==2){w="abort";for(k in{success:1,error:1,complete:1})x[k](l[k]);g=cA(cw,l,c,x);if(!g)y(-1,"No Transport");else{x.readyState=1,j&&n.trigger("ajaxSend",[x,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){x.abort("timeout")},l.timeout));try{v=1,g.send(t,y)}catch(B){if(v<2)y(-1,B);else throw B}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var cE=[],cF=/\?/,cG=/(=)\?(?=&|$)|\?\?/,cH=p.now();p.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=cE.pop()||p.expando+"_"+cH++;return this[a]=!0,a}}),p.ajaxPrefilter("json jsonp",function(c,d,e){var f,g,h,i=c.data,j=c.url,k=c.jsonp!==!1,l=k&&cG.test(j),m=k&&!l&&typeof i=="string"&&!(c.contentType||"").indexOf("application/x-www-form-urlencoded")&&cG.test(i);if(c.dataTypes[0]==="jsonp"||l||m)return f=c.jsonpCallback=p.isFunction(c.jsonpCallback)?c.jsonpCallback():c.jsonpCallback,g=a[f],l?c.url=j.replace(cG,"$1"+f):m?c.data=i.replace(cG,"$1"+f):k&&(c.url+=(cF.test(j)?"&":"?")+c.jsonp+"="+f),c.converters["script json"]=function(){return h||p.error(f+" was not called"),h[0]},c.dataTypes[0]="json",a[f]=function(){h=arguments},e.always(function(){a[f]=g,c[f]&&(c.jsonpCallback=d.jsonpCallback,cE.push(f)),h&&p.isFunction(g)&&g(h[0]),h=g=b}),"script"}),p.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){return p.globalEval(a),a}}}),p.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),p.ajaxTransport("script",function(a){if(a.crossDomain){var c,d=e.head||e.getElementsByTagName("head")[0]||e.documentElement;return{send:function(f,g){c=e.createElement("script"),c.async="async",a.scriptCharset&&(c.charset=a.scriptCharset),c.src=a.url,c.onload=c.onreadystatechange=function(a,e){if(e||!c.readyState||/loaded|complete/.test(c.readyState))c.onload=c.onreadystatechange=null,d&&c.parentNode&&d.removeChild(c),c=b,e||g(200,"success")},d.insertBefore(c,d.firstChild)},abort:function(){c&&c.onload(0,1)}}}});var cI,cJ=a.ActiveXObject?function(){for(var a in cI)cI[a](0,1)}:!1,cK=0;p.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&cL()||cM()}:cL,function(a){p.extend(p.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(p.ajaxSettings.xhr()),p.support.ajax&&p.ajaxTransport(function(c){if(!c.crossDomain||p.support.cors){var d;return{send:function(e,f){var g,h,i=c.xhr();c.username?i.open(c.type,c.url,c.async,c.username,c.password):i.open(c.type,c.url,c.async);if(c.xhrFields)for(h in c.xhrFields)i[h]=c.xhrFields[h];c.mimeType&&i.overrideMimeType&&i.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(h in e)i.setRequestHeader(h,e[h])}catch(j){}i.send(c.hasContent&&c.data||null),d=function(a,e){var h,j,k,l,m;try{if(d&&(e||i.readyState===4)){d=b,g&&(i.onreadystatechange=p.noop,cJ&&delete cI[g]);if(e)i.readyState!==4&&i.abort();else{h=i.status,k=i.getAllResponseHeaders(),l={},m=i.responseXML,m&&m.documentElement&&(l.xml=m);try{l.text=i.responseText}catch(a){}try{j=i.statusText}catch(n){j=""}!h&&c.isLocal&&!c.crossDomain?h=l.text?200:404:h===1223&&(h=204)}}}catch(o){e||f(-1,o)}l&&f(h,j,l,k)},c.async?i.readyState===4?setTimeout(d,0):(g=++cK,cJ&&(cI||(cI={},p(a).unload(cJ)),cI[g]=d),i.onreadystatechange=d):d()},abort:function(){d&&d(0,1)}}}});var cN,cO,cP=/^(?:toggle|show|hide)$/,cQ=new RegExp("^(?:([-+])=|)("+q+")([a-z%]*)$","i"),cR=/queueHooks$/,cS=[cY],cT={"*":[function(a,b){var c,d,e=this.createTween(a,b),f=cQ.exec(b),g=e.cur(),h=+g||0,i=1,j=20;if(f){c=+f[2],d=f[3]||(p.cssNumber[a]?"":"px");if(d!=="px"&&h){h=p.css(e.elem,a,!0)||c||1;do i=i||".5",h=h/i,p.style(e.elem,a,h+d);while(i!==(i=e.cur()/g)&&i!==1&&--j)}e.unit=d,e.start=h,e.end=f[1]?h+(f[1]+1)*c:c}return e}]};p.Animation=p.extend(cW,{tweener:function(a,b){p.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");var c,d=0,e=a.length;for(;d<e;d++)c=a[d],cT[c]=cT[c]||[],cT[c].unshift(b)},prefilter:function(a,b){b?cS.unshift(a):cS.push(a)}}),p.Tween=cZ,cZ.prototype={constructor:cZ,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(p.cssNumber[c]?"":"px")},cur:function(){var a=cZ.propHooks[this.prop];return a&&a.get?a.get(this):cZ.propHooks._default.get(this)},run:function(a){var b,c=cZ.propHooks[this.prop];return this.options.duration?this.pos=b=p.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):cZ.propHooks._default.set(this),this}},cZ.prototype.init.prototype=cZ.prototype,cZ.propHooks={_default:{get:function(a){var b;return a.elem[a.prop]==null||!!a.elem.style&&a.elem.style[a.prop]!=null?(b=p.css(a.elem,a.prop,!1,""),!b||b==="auto"?0:b):a.elem[a.prop]},set:function(a){p.fx.step[a.prop]?p.fx.step[a.prop](a):a.elem.style&&(a.elem.style[p.cssProps[a.prop]]!=null||p.cssHooks[a.prop])?p.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},cZ.propHooks.scrollTop=cZ.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},p.each(["toggle","show","hide"],function(a,b){var c=p.fn[b];p.fn[b]=function(d,e,f){return d==null||typeof d=="boolean"||!a&&p.isFunction(d)&&p.isFunction(e)?c.apply(this,arguments):this.animate(c$(b,!0),d,e,f)}}),p.fn.extend({fadeTo:function(a,b,c,d){return this.filter(bZ).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=p.isEmptyObject(a),f=p.speed(b,c,d),g=function(){var b=cW(this,p.extend({},a),f);e&&b.stop(!0)};return e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,c,d){var e=function(a){var b=a.stop;delete a.stop,b(d)};return typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,c=a!=null&&a+"queueHooks",f=p.timers,g=p._data(this);if(c)g[c]&&g[c].stop&&e(g[c]);else for(c in g)g[c]&&g[c].stop&&cR.test(c)&&e(g[c]);for(c=f.length;c--;)f[c].elem===this&&(a==null||f[c].queue===a)&&(f[c].anim.stop(d),b=!1,f.splice(c,1));(b||!d)&&p.dequeue(this,a)})}}),p.each({slideDown:c$("show"),slideUp:c$("hide"),slideToggle:c$("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){p.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),p.speed=function(a,b,c){var d=a&&typeof a=="object"?p.extend({},a):{complete:c||!c&&b||p.isFunction(a)&&a,duration:a,easing:c&&b||b&&!p.isFunction(b)&&b};d.duration=p.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in p.fx.speeds?p.fx.speeds[d.duration]:p.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";return d.old=d.complete,d.complete=function(){p.isFunction(d.old)&&d.old.call(this),d.queue&&p.dequeue(this,d.queue)},d},p.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},p.timers=[],p.fx=cZ.prototype.init,p.fx.tick=function(){var a,b=p.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||p.fx.stop()},p.fx.timer=function(a){a()&&p.timers.push(a)&&!cO&&(cO=setInterval(p.fx.tick,p.fx.interval))},p.fx.interval=13,p.fx.stop=function(){clearInterval(cO),cO=null},p.fx.speeds={slow:600,fast:200,_default:400},p.fx.step={},p.expr&&p.expr.filters&&(p.expr.filters.animated=function(a){return p.grep(p.timers,function(b){return a===b.elem}).length});var c_=/^(?:body|html)$/i;p.fn.offset=function(a){if(arguments.length)return a===b?this:this.each(function(b){p.offset.setOffset(this,a,b)});var c,d,e,f,g,h,i,j={top:0,left:0},k=this[0],l=k&&k.ownerDocument;if(!l)return;return(d=l.body)===k?p.offset.bodyOffset(k):(c=l.documentElement,p.contains(c,k)?(typeof k.getBoundingClientRect!="undefined"&&(j=k.getBoundingClientRect()),e=da(l),f=c.clientTop||d.clientTop||0,g=c.clientLeft||d.clientLeft||0,h=e.pageYOffset||c.scrollTop,i=e.pageXOffset||c.scrollLeft,{top:j.top+h-f,left:j.left+i-g}):j)},p.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;return p.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(p.css(a,"marginTop"))||0,c+=parseFloat(p.css(a,"marginLeft"))||0),{top:b,left:c}},setOffset:function(a,b,c){var d=p.css(a,"position");d==="static"&&(a.style.position="relative");var e=p(a),f=e.offset(),g=p.css(a,"top"),h=p.css(a,"left"),i=(d==="absolute"||d==="fixed")&&p.inArray("auto",[g,h])>-1,j={},k={},l,m;i?(k=e.position(),l=k.top,m=k.left):(l=parseFloat(g)||0,m=parseFloat(h)||0),p.isFunction(b)&&(b=b.call(a,c,f)),b.top!=null&&(j.top=b.top-f.top+l),b.left!=null&&(j.left=b.left-f.left+m),"using"in b?b.using.call(a,j):e.css(j)}},p.fn.extend({position:function(){if(!this[0])return;var a=this[0],b=this.offsetParent(),c=this.offset(),d=c_.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(p.css(a,"marginTop"))||0,c.left-=parseFloat(p.css(a,"marginLeft"))||0,d.top+=parseFloat(p.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(p.css(b[0],"borderLeftWidth"))||0,{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||e.body;while(a&&!c_.test(a.nodeName)&&p.css(a,"position")==="static")a=a.offsetParent;return a||e.body})}}),p.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,c){var d=/Y/.test(c);p.fn[a]=function(e){return p.access(this,function(a,e,f){var g=da(a);if(f===b)return g?c in g?g[c]:g.document.documentElement[e]:a[e];g?g.scrollTo(d?p(g).scrollLeft():f,d?f:p(g).scrollTop()):a[e]=f},a,e,arguments.length,null)}}),p.each({Height:"height",Width:"width"},function(a,c){p.each({padding:"inner"+a,content:c,"":"outer"+a},function(d,e){p.fn[e]=function(e,f){var g=arguments.length&&(d||typeof e!="boolean"),h=d||(e===!0||f===!0?"margin":"border");return p.access(this,function(c,d,e){var f;return p.isWindow(c)?c.document.documentElement["client"+a]:c.nodeType===9?(f=c.documentElement,Math.max(c.body["scroll"+a],f["scroll"+a],c.body["offset"+a],f["offset"+a],f["client"+a])):e===b?p.css(c,d,e,h):p.style(c,d,e,h)},c,g?e:b,g,null)}})}),a.jQuery=a.$=p,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return p})})(window);
var g;
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
ea.prototype.Ha = "";
ea.prototype.append = function(a, b, c) {
  this.Ha += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.Ha += arguments[d];
    }
  }
  return this;
};
ea.prototype.toString = function() {
  return this.Ha;
};
var fa, ga = null;
function ha() {
  return new ia(null, 5, [ja, !0, ka, !0, la, !1, na, !1, oa, null], null);
}
function p(a) {
  return null != a && !1 !== a;
}
function pa(a) {
  return p(a) ? !1 : !0;
}
function r(a, b) {
  return a[m(null == b ? null : b)] ? !0 : a._ ? !0 : s ? !1 : null;
}
function ra(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = ra(b), c = p(p(c) ? c.Wb : c) ? c.Ub : m(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function sa(a) {
  var b = a.Ub;
  return p(b) ? b : "" + u(a);
}
function ta(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var ua = {}, va = {};
function wa(a) {
  if (a ? a.F : a) {
    return a.F(a);
  }
  var b;
  b = wa[m(null == a ? null : a)];
  if (!b && (b = wa._, !b)) {
    throw t("ICounted.-count", a);
  }
  return b.call(null, a);
}
function xa(a) {
  if (a ? a.G : a) {
    return a.G(a);
  }
  var b;
  b = xa[m(null == a ? null : a)];
  if (!b && (b = xa._, !b)) {
    throw t("IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var za = {};
function Aa(a, b) {
  if (a ? a.A : a) {
    return a.A(a, b);
  }
  var c;
  c = Aa[m(null == a ? null : a)];
  if (!c && (c = Aa._, !c)) {
    throw t("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ba = {}, w = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var h;
    h = w[m(null == a ? null : a)];
    if (!h && (h = w._, !h)) {
      throw t("IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.p : a) {
      return a.p(a, b);
    }
    var c;
    c = w[m(null == a ? null : a)];
    if (!c && (c = w._, !c)) {
      throw t("IIndexed.-nth", a);
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
  c.b = a;
  return c;
}(), Ca = {};
function Da(a) {
  if (a ? a.O : a) {
    return a.O(a);
  }
  var b;
  b = Da[m(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw t("ISeq.-first", a);
  }
  return b.call(null, a);
}
function Fa(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = Fa[m(null == a ? null : a)];
  if (!b && (b = Fa._, !b)) {
    throw t("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var Ga = {}, Ha = {}, Ia = function() {
  function a(a, b, c) {
    if (a ? a.u : a) {
      return a.u(a, b, c);
    }
    var h;
    h = Ia[m(null == a ? null : a)];
    if (!h && (h = Ia._, !h)) {
      throw t("ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.t : a) {
      return a.t(a, b);
    }
    var c;
    c = Ia[m(null == a ? null : a)];
    if (!c && (c = Ia._, !c)) {
      throw t("ILookup.-lookup", a);
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
  c.b = a;
  return c;
}();
function Ja(a, b) {
  if (a ? a.Ma : a) {
    return a.Ma(a, b);
  }
  var c;
  c = Ja[m(null == a ? null : a)];
  if (!c && (c = Ja._, !c)) {
    throw t("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Ka(a, b, c) {
  if (a ? a.ma : a) {
    return a.ma(a, b, c);
  }
  var d;
  d = Ka[m(null == a ? null : a)];
  if (!d && (d = Ka._, !d)) {
    throw t("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var La = {};
function Ma(a, b) {
  if (a ? a.Ja : a) {
    return a.Ja(a, b);
  }
  var c;
  c = Ma[m(null == a ? null : a)];
  if (!c && (c = Ma._, !c)) {
    throw t("IMap.-dissoc", a);
  }
  return c.call(null, a, b);
}
var Oa = {};
function Pa(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = Pa[m(null == a ? null : a)];
  if (!b && (b = Pa._, !b)) {
    throw t("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Qa(a) {
  if (a ? a.hb : a) {
    return a.hb(a);
  }
  var b;
  b = Qa[m(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw t("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Ta(a, b) {
  if (a ? a.Rb : a) {
    return a.Rb(0, b);
  }
  var c;
  c = Ta[m(null == a ? null : a)];
  if (!c && (c = Ta._, !c)) {
    throw t("ISet.-disjoin", a);
  }
  return c.call(null, a, b);
}
function Ua(a) {
  if (a ? a.ta : a) {
    return a.ta(a);
  }
  var b;
  b = Ua[m(null == a ? null : a)];
  if (!b && (b = Ua._, !b)) {
    throw t("IStack.-peek", a);
  }
  return b.call(null, a);
}
function Va(a) {
  if (a ? a.ua : a) {
    return a.ua(a);
  }
  var b;
  b = Va[m(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw t("IStack.-pop", a);
  }
  return b.call(null, a);
}
var Wa = {};
function Xa(a, b, c) {
  if (a ? a.Fa : a) {
    return a.Fa(a, b, c);
  }
  var d;
  d = Xa[m(null == a ? null : a)];
  if (!d && (d = Xa._, !d)) {
    throw t("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function x(a) {
  if (a ? a.Mb : a) {
    return a.state;
  }
  var b;
  b = x[m(null == a ? null : a)];
  if (!b && (b = x._, !b)) {
    throw t("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ya = {};
function Za(a) {
  if (a ? a.w : a) {
    return a.w(a);
  }
  var b;
  b = Za[m(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw t("IMeta.-meta", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a, b) {
  if (a ? a.C : a) {
    return a.C(a, b);
  }
  var c;
  c = ab[m(null == a ? null : a)];
  if (!c && (c = ab._, !c)) {
    throw t("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var bb = {}, cb = function() {
  function a(a, b, c) {
    if (a ? a.N : a) {
      return a.N(a, b, c);
    }
    var h;
    h = cb[m(null == a ? null : a)];
    if (!h && (h = cb._, !h)) {
      throw t("IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.M : a) {
      return a.M(a, b);
    }
    var c;
    c = cb[m(null == a ? null : a)];
    if (!c && (c = cb._, !c)) {
      throw t("IReduce.-reduce", a);
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
  c.b = a;
  return c;
}();
function db(a, b) {
  if (a ? a.r : a) {
    return a.r(a, b);
  }
  var c;
  c = db[m(null == a ? null : a)];
  if (!c && (c = db._, !c)) {
    throw t("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function eb(a) {
  if (a ? a.s : a) {
    return a.s(a);
  }
  var b;
  b = eb[m(null == a ? null : a)];
  if (!b && (b = eb._, !b)) {
    throw t("IHash.-hash", a);
  }
  return b.call(null, a);
}
var fb = {};
function gb(a) {
  if (a ? a.B : a) {
    return a.B(a);
  }
  var b;
  b = gb[m(null == a ? null : a)];
  if (!b && (b = gb._, !b)) {
    throw t("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var hb = {}, ib = {};
function jb(a) {
  if (a ? a.Sa : a) {
    return a.Sa(a);
  }
  var b;
  b = jb[m(null == a ? null : a)];
  if (!b && (b = jb._, !b)) {
    throw t("IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function kb(a, b) {
  if (a ? a.Bb : a) {
    return a.Bb(a, b);
  }
  var c;
  c = kb[m(null == a ? null : a)];
  if (!c && (c = kb._, !c)) {
    throw t("ISorted.-sorted-seq", a);
  }
  return c.call(null, a, b);
}
function lb(a, b, c) {
  if (a ? a.Cb : a) {
    return a.Cb(a, b, c);
  }
  var d;
  d = lb[m(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw t("ISorted.-sorted-seq-from", a);
  }
  return d.call(null, a, b, c);
}
function mb(a, b) {
  if (a ? a.Ab : a) {
    return a.Ab(a, b);
  }
  var c;
  c = mb[m(null == a ? null : a)];
  if (!c && (c = mb._, !c)) {
    throw t("ISorted.-entry-key", a);
  }
  return c.call(null, a, b);
}
function nb(a) {
  if (a ? a.zb : a) {
    return a.zb(a);
  }
  var b;
  b = nb[m(null == a ? null : a)];
  if (!b && (b = nb._, !b)) {
    throw t("ISorted.-comparator", a);
  }
  return b.call(null, a);
}
function ob(a, b) {
  if (a ? a.Tb : a) {
    return a.Tb(0, b);
  }
  var c;
  c = ob[m(null == a ? null : a)];
  if (!c && (c = ob._, !c)) {
    throw t("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var pb = {};
function qb(a, b, c) {
  if (a ? a.q : a) {
    return a.q(a, b, c);
  }
  var d;
  d = qb[m(null == a ? null : a)];
  if (!d && (d = qb._, !d)) {
    throw t("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function rb(a, b, c) {
  if (a ? a.Eb : a) {
    return a.Eb(a, b, c);
  }
  var d;
  d = rb[m(null == a ? null : a)];
  if (!d && (d = rb._, !d)) {
    throw t("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function sb(a, b, c) {
  if (a ? a.Db : a) {
    return a.Db(a, b, c);
  }
  var d;
  d = sb[m(null == a ? null : a)];
  if (!d && (d = sb._, !d)) {
    throw t("IWatchable.-add-watch", a);
  }
  return d.call(null, a, b, c);
}
function tb(a) {
  if (a ? a.Na : a) {
    return a.Na(a);
  }
  var b;
  b = tb[m(null == a ? null : a)];
  if (!b && (b = tb._, !b)) {
    throw t("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function ub(a, b) {
  if (a ? a.Va : a) {
    return a.Va(a, b);
  }
  var c;
  c = ub[m(null == a ? null : a)];
  if (!c && (c = ub._, !c)) {
    throw t("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function vb(a) {
  if (a ? a.Wa : a) {
    return a.Wa(a);
  }
  var b;
  b = vb[m(null == a ? null : a)];
  if (!b && (b = vb._, !b)) {
    throw t("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function wb(a, b, c) {
  if (a ? a.Ua : a) {
    return a.Ua(a, b, c);
  }
  var d;
  d = wb[m(null == a ? null : a)];
  if (!d && (d = wb._, !d)) {
    throw t("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function xb(a, b, c) {
  if (a ? a.Sb : a) {
    return a.Sb(0, b, c);
  }
  var d;
  d = xb[m(null == a ? null : a)];
  if (!d && (d = xb._, !d)) {
    throw t("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function yb(a) {
  if (a ? a.Lb : a) {
    return a.Lb();
  }
  var b;
  b = yb[m(null == a ? null : a)];
  if (!b && (b = yb._, !b)) {
    throw t("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function y(a) {
  if (a ? a.nb : a) {
    return a.nb(a);
  }
  var b;
  b = y[m(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw t("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function z(a) {
  if (a ? a.ob : a) {
    return a.ob(a);
  }
  var b;
  b = z[m(null == a ? null : a)];
  if (!b && (b = z._, !b)) {
    throw t("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function zb(a) {
  if (a ? a.mb : a) {
    return a.mb(a);
  }
  var b;
  b = zb[m(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw t("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Ab(a) {
  this.mc = a;
  this.o = 0;
  this.i = 1073741824;
}
Ab.prototype.Tb = function(a, b) {
  return this.mc.append(b);
};
function Bb(a) {
  var b = new ea;
  a.q(null, new Ab(b), ha());
  return "" + u(b);
}
function Cb(a, b) {
  if (p(A.a ? A.a(a, b) : A.call(null, a, b))) {
    return 0;
  }
  var c = pa(a.U);
  if (p(c ? b.U : c)) {
    return-1;
  }
  if (p(a.U)) {
    if (pa(b.U)) {
      return 1;
    }
    c = Db.a ? Db.a(a.U, b.U) : Db.call(null, a.U, b.U);
    return 0 === c ? Db.a ? Db.a(a.name, b.name) : Db.call(null, a.name, b.name) : c;
  }
  return Eb ? Db.a ? Db.a(a.name, b.name) : Db.call(null, a.name, b.name) : null;
}
function Fb(a, b, c, d, e) {
  this.U = a;
  this.name = b;
  this.Da = c;
  this.Ea = d;
  this.da = e;
  this.i = 2154168321;
  this.o = 4096;
}
g = Fb.prototype;
g.q = function(a, b) {
  return ob(b, this.Da);
};
g.s = function() {
  var a = this.Ea;
  return null != a ? a : this.Ea = a = Gb.a ? Gb.a(B.c ? B.c(this.U) : B.call(null, this.U), B.c ? B.c(this.name) : B.call(null, this.name)) : Gb.call(null, B.c ? B.c(this.U) : B.call(null, this.U), B.c ? B.c(this.name) : B.call(null, this.name));
};
g.C = function(a, b) {
  return new Fb(this.U, this.name, this.Da, this.Ea, b);
};
g.w = function() {
  return this.da;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.b(c, this, null);
      case 3:
        return Ia.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return Ia.b(a, this, null);
};
g.a = function(a, b) {
  return Ia.b(a, this, b);
};
g.r = function(a, b) {
  return b instanceof Fb ? this.Da === b.Da : !1;
};
g.toString = function() {
  return this.Da;
};
var Hb = function() {
  function a(a, b) {
    var c = null != a ? [u(a), u("/"), u(b)].join("") : b;
    return new Fb(a, b, c, null, null);
  }
  function b(a) {
    return a instanceof Fb ? a : c.a(null, a);
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
function D(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 8388608 || a.vc)) {
    return a.B(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Ib(a, 0);
  }
  if (r(fb, a)) {
    return gb(a);
  }
  if (s) {
    throw Error([u(a), u("is not ISeqable")].join(""));
  }
  return null;
}
function E(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.i & 64 || a.Ta)) {
    return a.O(null);
  }
  a = D(a);
  return null == a ? null : Da(a);
}
function G(a) {
  return null != a ? a && (a.i & 64 || a.Ta) ? a.R(null) : (a = D(a)) ? Fa(a) : H : H;
}
function I(a) {
  return null == a ? null : a && (a.i & 128 || a.Qb) ? a.Z(null) : D(G(a));
}
var A = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || db(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (I(e)) {
            a = d, d = E(e), e = I(e);
          } else {
            return b.a(d, E(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
va["null"] = !0;
wa["null"] = function() {
  return 0;
};
Date.prototype.r = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
db.number = function(a, b) {
  return a === b;
};
Ya["function"] = !0;
Za["function"] = function() {
  return null;
};
ua["function"] = !0;
eb._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
function Jb(a) {
  return a + 1;
}
var Kb = function() {
  function a(a, b, c, d) {
    for (var l = wa(a);;) {
      if (d < l) {
        c = b.a ? b.a(c, w.a(a, d)) : b.call(null, c, w.a(a, d)), d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = wa(a), l = 0;;) {
      if (l < d) {
        c = b.a ? b.a(c, w.a(a, l)) : b.call(null, c, w.a(a, l)), l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = wa(a);
    if (0 === c) {
      return b.n ? b.n() : b.call(null);
    }
    for (var d = w.a(a, 0), l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, w.a(a, l)) : b.call(null, d, w.a(a, l)), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Lb = function() {
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
      return b.n ? b.n() : b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.a ? b.a(d, a[l]) : b.call(null, d, a[l]), l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function Mb(a) {
  return a ? a.i & 2 || a.Zb ? !0 : a.i ? !1 : r(va, a) : r(va, a);
}
function Nb(a) {
  return a ? a.i & 16 || a.Nb ? !0 : a.i ? !1 : r(Ba, a) : r(Ba, a);
}
function Ib(a, b) {
  this.e = a;
  this.m = b;
  this.o = 0;
  this.i = 166199550;
}
g = Ib.prototype;
g.s = function() {
  return Ob.c ? Ob.c(this) : Ob.call(null, this);
};
g.Z = function() {
  return this.m + 1 < this.e.length ? new Ib(this.e, this.m + 1) : null;
};
g.A = function(a, b) {
  return K.a ? K.a(b, this) : K.call(null, b, this);
};
g.Sa = function() {
  var a = wa(this);
  return 0 < a ? new Pb(this, a - 1, null) : null;
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Lb.l(this.e, b, this.e[this.m], this.m + 1);
};
g.N = function(a, b, c) {
  return Lb.l(this.e, b, c, this.m);
};
g.B = function() {
  return this;
};
g.F = function() {
  return this.e.length - this.m;
};
g.O = function() {
  return this.e[this.m];
};
g.R = function() {
  return this.m + 1 < this.e.length ? new Ib(this.e, this.m + 1) : H;
};
g.r = function(a, b) {
  return Qb.a ? Qb.a(this, b) : Qb.call(null, this, b);
};
g.p = function(a, b) {
  var c = b + this.m;
  return c < this.e.length ? this.e[c] : null;
};
g.X = function(a, b, c) {
  a = b + this.m;
  return a < this.e.length ? this.e[a] : c;
};
g.G = function() {
  return H;
};
var Rb = function() {
  function a(a, b) {
    return b < a.length ? new Ib(a, b) : null;
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
}(), J = function() {
  function a(a, b) {
    return Rb.a(a, b);
  }
  function b(a) {
    return Rb.a(a, 0);
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
function Pb(a, b, c) {
  this.lb = a;
  this.m = b;
  this.g = c;
  this.o = 0;
  this.i = 32374862;
}
g = Pb.prototype;
g.s = function() {
  return Ob.c ? Ob.c(this) : Ob.call(null, this);
};
g.A = function(a, b) {
  return K.a ? K.a(b, this) : K.call(null, b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a ? Sb.a(b, this) : Sb.call(null, b, this);
};
g.N = function(a, b, c) {
  return Sb.b ? Sb.b(b, c, this) : Sb.call(null, b, c, this);
};
g.B = function() {
  return this;
};
g.F = function() {
  return this.m + 1;
};
g.O = function() {
  return w.a(this.lb, this.m);
};
g.R = function() {
  return 0 < this.m ? new Pb(this.lb, this.m - 1, null) : null;
};
g.r = function(a, b) {
  return Qb.a ? Qb.a(this, b) : Qb.call(null, this, b);
};
g.C = function(a, b) {
  return new Pb(this.lb, this.m, b);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb.a ? Tb.a(H, this.g) : Tb.call(null, H, this.g);
};
function Ub(a) {
  return E(I(a));
}
function Vb(a) {
  return E(E(a));
}
function Wb(a) {
  for (;;) {
    var b = I(a);
    if (null != b) {
      a = b;
    } else {
      return E(a);
    }
  }
}
db._ = function(a, b) {
  return a === b;
};
var Xb = function() {
  function a(a, b) {
    return null != a ? Aa(a, b) : Aa(H, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (p(e)) {
          a = b.a(a, d), d = E(e), e = I(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.d = c.d;
  return b;
}();
function L(a) {
  if (null != a) {
    if (a && (a.i & 2 || a.Zb)) {
      a = a.F(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (r(va, a)) {
            a = wa(a);
          } else {
            if (s) {
              a: {
                a = D(a);
                for (var b = 0;;) {
                  if (Mb(a)) {
                    a = b + wa(a);
                    break a;
                  }
                  a = I(a);
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
var Yb = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return D(a) ? E(a) : c;
      }
      if (Nb(a)) {
        return w.b(a, b, c);
      }
      if (D(a)) {
        a = I(a), b -= 1;
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
        if (D(a)) {
          return E(a);
        }
        throw Error("Index out of bounds");
      }
      if (Nb(a)) {
        return w.a(a, b);
      }
      if (D(a)) {
        var c = I(a), h = b - 1;
        a = c;
        b = h;
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
  c.b = a;
  return c;
}(), M = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.i & 16 || a.Nb)) {
        return a.X(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (r(Ba, a)) {
        return w.a(a, b);
      }
      if (s) {
        if (a ? a.i & 64 || a.Ta || (a.i ? 0 : r(Ca, a)) : r(Ca, a)) {
          return Yb.b(a, b, c);
        }
        throw Error([u("nth not supported on this type "), u(sa(ra(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.i & 16 || a.Nb)) {
      return a.p(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (r(Ba, a)) {
      return w.a(a, b);
    }
    if (s) {
      if (a ? a.i & 64 || a.Ta || (a.i ? 0 : r(Ca, a)) : r(Ca, a)) {
        return Yb.a(a, b);
      }
      throw Error([u("nth not supported on this type "), u(sa(ra(a)))].join(""));
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
  c.b = a;
  return c;
}(), N = function() {
  function a(a, b, c) {
    return null != a ? a && (a.i & 256 || a.bc) ? a.u(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : r(Ha, a) ? Ia.b(a, b, c) : s ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.i & 256 || a.bc) ? a.t(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : r(Ha, a) ? Ia.a(a, b) : null;
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
  c.b = a;
  return c;
}(), O = function() {
  function a(a, b, c) {
    return null != a ? Ka(a, b, c) : Zb.a ? Zb.a([b], [c]) : Zb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var n = null;
      3 < arguments.length && (n = J(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, n);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.b(a, d, e), p(l)) {
          d = E(l), e = Ub(l), l = I(I(l));
        } else {
          return a;
        }
      }
    }
    a.k = 3;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var l = E(a);
      a = G(a);
      return c(b, d, l, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.d(b, e, f, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 3;
  b.h = c.h;
  b.b = a;
  b.d = c.d;
  return b;
}(), $b = function() {
  function a(a, b) {
    return null == a ? null : Ma(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = E(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function ac(a) {
  var b = "function" == m(a);
  return b ? b : a ? p(p(null) ? null : a.Yb) ? !0 : a.Vb ? !1 : r(ua, a) : r(ua, a);
}
var Tb = function bc(b, c) {
  return ac(b) && !(b ? b.i & 262144 || b.zc || (b.i ? 0 : r($a, b)) : r($a, b)) ? bc(function() {
    "undefined" === typeof fa && (fa = function(b, c, f, h) {
      this.g = b;
      this.$a = c;
      this.oc = f;
      this.kc = h;
      this.o = 0;
      this.i = 393217;
    }, fa.Wb = !0, fa.Ub = "cljs.core/t8695", fa.gc = function(b) {
      return ob(b, "cljs.core/t8695");
    }, fa.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return P.a ? P.a(b.$a, d) : P.call(null, b.$a, d);
      }
      b.k = 1;
      b.h = function(b) {
        var d = E(b);
        b = G(b);
        return c(d, b);
      };
      b.d = c;
      return b;
    }(), fa.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(ta(c)));
    }, fa.prototype.a = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return P.a ? P.a(self__.$a, b) : P.call(null, self__.$a, b);
      }
      b.k = 0;
      b.h = function(b) {
        b = D(b);
        return c(b);
      };
      b.d = c;
      return b;
    }(), fa.prototype.Yb = !0, fa.prototype.w = function() {
      return this.kc;
    }, fa.prototype.C = function(b, c) {
      return new fa(this.g, this.$a, this.oc, c);
    });
    return new fa(c, b, bc, null);
  }(), c) : null == b ? null : ab(b, c);
};
function cc(a) {
  var b = null != a;
  return(b ? a ? a.i & 131072 || a.dc || (a.i ? 0 : r(Ya, a)) : r(Ya, a) : b) ? Za(a) : null;
}
function dc(a) {
  return null == a ? null : Ua(a);
}
var ec = function() {
  function a(a, b) {
    return null == a ? null : Ta(a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (null == a) {
          return null;
        }
        a = b.a(a, d);
        if (p(e)) {
          d = E(e), e = I(e);
        } else {
          return a;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function(a) {
    return a;
  };
  b.a = a;
  b.d = c.d;
  return b;
}(), fc = {}, gc = 0;
function B(a) {
  if (a && (a.i & 4194304 || a.sc)) {
    a = a.s(null);
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
            255 < gc && (fc = {}, gc = 0);
            var b = fc[a];
            "number" !== typeof b && (b = ca(a), fc[a] = b, gc += 1);
            a = b;
          } else {
            a = null == a ? 0 : s ? eb(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function hc(a) {
  return null == a ? !1 : a ? a.i & 1024 || a.tc ? !0 : a.i ? !1 : r(La, a) : r(La, a);
}
function ic(a) {
  return a ? a.i & 16384 || a.yc ? !0 : a.i ? !1 : r(Wa, a) : r(Wa, a);
}
function Q(a) {
  return a ? a.o & 512 || a.pc ? !0 : !1 : !1;
}
function jc(a) {
  var b = [];
  da(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function kc(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var lc = {};
function mc(a) {
  return null == a ? !1 : a ? a.i & 64 || a.Ta ? !0 : a.i ? !1 : r(Ca, a) : r(Ca, a);
}
function nc(a) {
  return p(a) ? !0 : !1;
}
function oc(a, b) {
  return N.b(a, b, lc) === lc ? !1 : !0;
}
function Db(a, b) {
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
    return a && (a.o & 2048 || a.fb) ? a.gb(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (s) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var pc = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Db(M.a(a, h), M.a(b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = L(a), h = L(b);
    return f < h ? -1 : f > h ? 1 : s ? c.l(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), Sb = function() {
  function a(a, b, c) {
    for (c = D(c);;) {
      if (c) {
        b = a.a ? a.a(b, E(c)) : a.call(null, b, E(c)), c = I(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = D(b);
    return c ? qc.b ? qc.b(a, E(c), I(c)) : qc.call(null, a, E(c), I(c)) : a.n ? a.n() : a.call(null);
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
  c.b = a;
  return c;
}(), qc = function() {
  function a(a, b, c) {
    return c && (c.i & 524288 || c.fc) ? c.N(null, a, b) : c instanceof Array ? Lb.b(c, a, b) : "string" === typeof c ? Lb.b(c, a, b) : r(bb, c) ? cb.b(c, a, b) : s ? Sb.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.i & 524288 || b.fc) ? b.M(null, a) : b instanceof Array ? Lb.a(b, a) : "string" === typeof b ? Lb.a(b, a) : r(bb, b) ? cb.a(b, a) : s ? Sb.a(a, b) : null;
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
  c.b = a;
  return c;
}(), rc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a < c) {
          if (I(d)) {
            a = c, c = E(d), d = I(d);
          } else {
            return c < E(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, h, a);
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
        return b.d(a, d, J(arguments, 2));
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
  a.d = b.d;
  return a;
}(), sc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a <= c) {
          if (I(d)) {
            a = c, c = E(d), d = I(d);
          } else {
            return c <= E(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, h, a);
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
        return b.d(a, d, J(arguments, 2));
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
  a.d = b.d;
  return a;
}(), tc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a > c) {
          if (I(d)) {
            a = c, c = E(d), d = I(d);
          } else {
            return c > E(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, h, a);
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
        return b.d(a, d, J(arguments, 2));
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
  a.d = b.d;
  return a;
}(), uc = function() {
  var a = null, b = function() {
    function a(c, f, h) {
      var k = null;
      2 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, f, k);
    }
    function b(a, c, d) {
      for (;;) {
        if (a >= c) {
          if (I(d)) {
            a = c, c = E(d), d = I(d);
          } else {
            return c >= E(d);
          }
        } else {
          return!1;
        }
      }
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, h, a);
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
        return b.d(a, d, J(arguments, 2));
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
  a.d = b.d;
  return a;
}();
function vc(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
var wc = function() {
  function a(a) {
    return a * c.n();
  }
  function b() {
    return Math.random.n ? Math.random.n() : Math.random.call(null);
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
  c.n = b;
  c.c = a;
  return c;
}();
function xc(a) {
  return vc(wc.c(a));
}
function yc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function zc(a) {
  var b = 1;
  for (a = D(a);;) {
    if (a && 0 < b) {
      b -= 1, a = I(a);
    } else {
      return a;
    }
  }
}
var u = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new ea(b.c(a)), l = d;;) {
        if (p(l)) {
          e = e.append(b.c(E(l))), l = I(l);
        } else {
          return e.toString();
        }
      }
    }
    a.k = 1;
    a.h = function(a) {
      var b = E(a);
      a = G(a);
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
        return c.d(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.n = function() {
    return "";
  };
  b.c = a;
  b.d = c.d;
  return b;
}(), Ac = function() {
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
function Qb(a, b) {
  return nc((b ? b.i & 16777216 || b.wc || (b.i ? 0 : r(hb, b)) : r(hb, b)) ? function() {
    for (var c = D(a), d = D(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (A.a(E(c), E(d))) {
        c = I(c), d = I(d);
      } else {
        return s ? !1 : null;
      }
    }
  }() : null);
}
function Gb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function Ob(a) {
  if (D(a)) {
    var b = B(E(a));
    for (a = I(a);;) {
      if (null == a) {
        return b;
      }
      b = Gb(b, B(E(a)));
      a = I(a);
    }
  } else {
    return 0;
  }
}
function Bc(a) {
  var b = 0;
  for (a = D(a);;) {
    if (a) {
      var c = E(a), b = (b + (B(Cc.c ? Cc.c(c) : Cc.call(null, c)) ^ B(Dc.c ? Dc.c(c) : Dc.call(null, c)))) % 4503599627370496;
      a = I(a);
    } else {
      return b;
    }
  }
}
function Ec(a, b, c, d, e) {
  this.g = a;
  this.first = b;
  this.xa = c;
  this.count = d;
  this.j = e;
  this.o = 0;
  this.i = 65937646;
}
g = Ec.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  return 1 === this.count ? null : this.xa;
};
g.A = function(a, b) {
  return new Ec(this.g, b, this, this.count + 1, null);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.F = function() {
  return this.count;
};
g.ta = function() {
  return this.first;
};
g.ua = function() {
  return Fa(this);
};
g.O = function() {
  return this.first;
};
g.R = function() {
  return 1 === this.count ? H : this.xa;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Ec(b, this.first, this.xa, this.count, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return H;
};
function Fc(a) {
  this.g = a;
  this.o = 0;
  this.i = 65937614;
}
g = Fc.prototype;
g.s = function() {
  return 0;
};
g.Z = function() {
  return null;
};
g.A = function(a, b) {
  return new Ec(this.g, b, null, 1, null);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return null;
};
g.F = function() {
  return 0;
};
g.ta = function() {
  return null;
};
g.ua = function() {
  throw Error("Can't pop empty list");
};
g.O = function() {
  return null;
};
g.R = function() {
  return H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Fc(b);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return this;
};
var H = new Fc(null);
function Gc(a) {
  return jb(a);
}
function Hc(a) {
  return(a ? a.i & 134217728 || a.uc || (a.i ? 0 : r(ib, a)) : r(ib, a)) ? jb(a) : qc.b(Xb, H, a);
}
var Ic = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof Ib && 0 === a.m) {
      b = a.e;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.O(null)), a = a.Z(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = H;;) {
      if (0 < a) {
        var f = a - 1, e = e.A(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function Jc(a, b, c, d) {
  this.g = a;
  this.first = b;
  this.xa = c;
  this.j = d;
  this.o = 0;
  this.i = 65929452;
}
g = Jc.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  return null == this.xa ? null : D(this.xa);
};
g.A = function(a, b) {
  return new Jc(null, b, this, this.j);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return this.first;
};
g.R = function() {
  return null == this.xa ? H : this.xa;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Jc(b, this.first, this.xa, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
function K(a, b) {
  var c = null == b;
  return(c ? c : b && (b.i & 64 || b.Ta)) ? new Jc(null, a, b, null) : new Jc(null, a, D(b), null);
}
function R(a, b, c, d) {
  this.U = a;
  this.name = b;
  this.Aa = c;
  this.Ea = d;
  this.i = 2153775105;
  this.o = 4096;
}
g = R.prototype;
g.q = function(a, b) {
  return ob(b, [u(":"), u(this.Aa)].join(""));
};
g.s = function() {
  null == this.Ea && (this.Ea = Gb(B(this.U), B(this.name)) + 2654435769);
  return this.Ea;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return N.a(c, this);
      case 3:
        return N.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return N.a(a, this);
};
g.a = function(a, b) {
  return N.b(a, this, b);
};
g.r = function(a, b) {
  return b instanceof R ? this.Aa === b.Aa : !1;
};
g.toString = function() {
  return[u(":"), u(this.Aa)].join("");
};
function Kc(a) {
  return a instanceof R;
}
function Lc(a, b) {
  return a === b ? !0 : a instanceof R && b instanceof R ? a.Aa === b.Aa : !1;
}
var Nc = function() {
  function a(a, b) {
    return new R(a, b, [u(p(a) ? [u(a), u("/")].join("") : null), u(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof R) {
      return a;
    }
    if (a instanceof Fb) {
      var b;
      if (a && (a.o & 4096 || a.ec)) {
        b = a.U;
      } else {
        throw Error([u("Doesn't support namespace: "), u(a)].join(""));
      }
      return new R(b, Mc.c ? Mc.c(a) : Mc.call(null, a), a.Da, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new R(b[0], b[1], a, null) : new R(null, b[0], a, null)) : null;
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
function T(a, b, c, d) {
  this.g = a;
  this.fn = b;
  this.J = c;
  this.j = d;
  this.o = 0;
  this.i = 32374988;
}
g = T.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  gb(this);
  return null == this.J ? null : I(this.J);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
function Oc(a) {
  null != a.fn && (a.J = a.fn.n ? a.fn.n() : a.fn.call(null), a.fn = null);
  return a.J;
}
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  Oc(this);
  if (null == this.J) {
    return null;
  }
  for (var a = this.J;;) {
    if (a instanceof T) {
      a = Oc(a);
    } else {
      return this.J = a, D(this.J);
    }
  }
};
g.O = function() {
  gb(this);
  return null == this.J ? null : E(this.J);
};
g.R = function() {
  gb(this);
  return null != this.J ? G(this.J) : H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new T(b, this.fn, this.J, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
function Pc(a, b) {
  this.kb = a;
  this.end = b;
  this.o = 0;
  this.i = 2;
}
Pc.prototype.F = function() {
  return this.end;
};
Pc.prototype.add = function(a) {
  this.kb[this.end] = a;
  return this.end += 1;
};
Pc.prototype.K = function() {
  var a = new Qc(this.kb, 0, this.end);
  this.kb = null;
  return a;
};
function Rc(a) {
  return new Pc(Array(a), 0);
}
function Qc(a, b, c) {
  this.e = a;
  this.off = b;
  this.end = c;
  this.o = 0;
  this.i = 524306;
}
g = Qc.prototype;
g.M = function(a, b) {
  return Lb.l(this.e, b, this.e[this.off], this.off + 1);
};
g.N = function(a, b, c) {
  return Lb.l(this.e, b, c, this.off);
};
g.Lb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new Qc(this.e, this.off + 1, this.end);
};
g.p = function(a, b) {
  return this.e[this.off + b];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.e[this.off + b] : c;
};
g.F = function() {
  return this.end - this.off;
};
var Sc = function() {
  function a(a, b, c) {
    return new Qc(a, b, c);
  }
  function b(a, b) {
    return new Qc(a, b, a.length);
  }
  function c(a) {
    return new Qc(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function Tc(a, b, c, d) {
  this.K = a;
  this.na = b;
  this.g = c;
  this.j = d;
  this.i = 31850732;
  this.o = 1536;
}
g = Tc.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  if (1 < wa(this.K)) {
    return new Tc(yb(this.K), this.na, this.g, null);
  }
  var a = gb(this.na);
  return null == a ? null : a;
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return w.a(this.K, 0);
};
g.R = function() {
  return 1 < wa(this.K) ? new Tc(yb(this.K), this.na, this.g, null) : null == this.na ? H : this.na;
};
g.mb = function() {
  return null == this.na ? null : this.na;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Tc(this.K, this.na, b, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
g.nb = function() {
  return this.K;
};
g.ob = function() {
  return null == this.na ? H : this.na;
};
function Uc(a, b) {
  return 0 === wa(a) ? b : new Tc(a, b, null, null);
}
function Vc(a) {
  for (var b = [];;) {
    if (D(a)) {
      b.push(E(a)), a = I(a);
    } else {
      return b;
    }
  }
}
function Wc(a, b) {
  if (Mb(a)) {
    return L(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && D(c)) {
      c = I(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var Yc = function Xc(b) {
  return null == b ? null : null == I(b) ? D(E(b)) : s ? K(E(b), Xc(I(b))) : null;
}, Zc = function() {
  function a(a, b) {
    return new T(null, function() {
      var c = D(a);
      return c ? Q(c) ? Uc(y(c), d.a(z(c), b)) : K(E(c), d.a(G(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new T(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new T(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function v(a, b) {
        return new T(null, function() {
          var c = D(a);
          return c ? Q(c) ? Uc(y(c), v(z(c), b)) : K(E(c), v(G(c), b)) : p(b) ? v(E(b), I(b)) : null;
        }, null, null);
      }(d.a(a, c), e);
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
      return b(c, d, a);
    };
    a.d = b;
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
        return e.d(d, h, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 2;
  d.h = e.h;
  d.n = c;
  d.c = b;
  d.a = a;
  d.d = e.d;
  return d;
}(), $c = function() {
  function a(a, b, c, d) {
    return K(a, K(b, K(c, d)));
  }
  function b(a, b, c) {
    return K(a, K(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, n, q) {
      var v = null;
      4 < arguments.length && (v = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, n, v);
    }
    function b(a, c, d, e, f) {
      return K(a, K(c, K(d, K(e, Yc(f)))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var q = E(a);
      a = G(a);
      return b(c, d, e, q, a);
    };
    a.d = b;
    return a;
  }(), c = function(c, f, h, k, l) {
    switch(arguments.length) {
      case 1:
        return D(c);
      case 2:
        return K(c, f);
      case 3:
        return b.call(this, c, f, h);
      case 4:
        return a.call(this, c, f, h, k);
      default:
        return d.d(c, f, h, k, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 4;
  c.h = d.h;
  c.c = function(a) {
    return D(a);
  };
  c.a = function(a, b) {
    return K(a, b);
  };
  c.b = b;
  c.l = a;
  c.d = d.d;
  return c;
}();
function ad(a, b, c) {
  var d = D(c);
  if (0 === b) {
    return a.n ? a.n() : a.call(null);
  }
  c = Da(d);
  var e = Fa(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = Da(e), f = Fa(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = Da(f), h = Fa(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = Da(h), k = Fa(h);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  h = Da(k);
  k = Fa(k);
  if (5 === b) {
    return a.H ? a.H(c, d, e, f, h) : a.H ? a.H(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  a = Da(k);
  var l = Fa(k);
  if (6 === b) {
    return a.sa ? a.sa(c, d, e, f, h, a) : a.sa ? a.sa(c, d, e, f, h, a) : a.call(null, c, d, e, f, h, a);
  }
  var k = Da(l), n = Fa(l);
  if (7 === b) {
    return a.Ia ? a.Ia(c, d, e, f, h, a, k) : a.Ia ? a.Ia(c, d, e, f, h, a, k) : a.call(null, c, d, e, f, h, a, k);
  }
  var l = Da(n), q = Fa(n);
  if (8 === b) {
    return a.yb ? a.yb(c, d, e, f, h, a, k, l) : a.yb ? a.yb(c, d, e, f, h, a, k, l) : a.call(null, c, d, e, f, h, a, k, l);
  }
  var n = Da(q), v = Fa(q);
  if (9 === b) {
    return a.Qa ? a.Qa(c, d, e, f, h, a, k, l, n) : a.Qa ? a.Qa(c, d, e, f, h, a, k, l, n) : a.call(null, c, d, e, f, h, a, k, l, n);
  }
  var q = Da(v), C = Fa(v);
  if (10 === b) {
    return a.pb ? a.pb(c, d, e, f, h, a, k, l, n, q) : a.pb ? a.pb(c, d, e, f, h, a, k, l, n, q) : a.call(null, c, d, e, f, h, a, k, l, n, q);
  }
  var v = Da(C), F = Fa(C);
  if (11 === b) {
    return a.qb ? a.qb(c, d, e, f, h, a, k, l, n, q, v) : a.qb ? a.qb(c, d, e, f, h, a, k, l, n, q, v) : a.call(null, c, d, e, f, h, a, k, l, n, q, v);
  }
  var C = Da(F), S = Fa(F);
  if (12 === b) {
    return a.Oa ? a.Oa(c, d, e, f, h, a, k, l, n, q, v, C) : a.Oa ? a.Oa(c, d, e, f, h, a, k, l, n, q, v, C) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C);
  }
  var F = Da(S), W = Fa(S);
  if (13 === b) {
    return a.rb ? a.rb(c, d, e, f, h, a, k, l, n, q, v, C, F) : a.rb ? a.rb(c, d, e, f, h, a, k, l, n, q, v, C, F) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F);
  }
  var S = Da(W), qa = Fa(W);
  if (14 === b) {
    return a.sb ? a.sb(c, d, e, f, h, a, k, l, n, q, v, C, F, S) : a.sb ? a.sb(c, d, e, f, h, a, k, l, n, q, v, C, F, S) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S);
  }
  var W = Da(qa), ma = Fa(qa);
  if (15 === b) {
    return a.tb ? a.tb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W) : a.tb ? a.tb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W);
  }
  var qa = Da(ma), ya = Fa(ma);
  if (16 === b) {
    return a.Pa ? a.Pa(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa) : a.Pa ? a.Pa(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa);
  }
  var ma = Da(ya), Ea = Fa(ya);
  if (17 === b) {
    return a.ub ? a.ub(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma) : a.ub ? a.ub(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma);
  }
  var ya = Da(Ea), Na = Fa(Ea);
  if (18 === b) {
    return a.vb ? a.vb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya) : a.vb ? a.vb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya);
  }
  Ea = Da(Na);
  Na = Fa(Na);
  if (19 === b) {
    return a.wb ? a.wb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea) : a.wb ? a.wb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea);
  }
  var Sa = Da(Na);
  Fa(Na);
  if (20 === b) {
    return a.xb ? a.xb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea, Sa) : a.xb ? a.xb(c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea, Sa) : a.call(null, c, d, e, f, h, a, k, l, n, q, v, C, F, S, W, qa, ma, ya, Ea, Sa);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var P = function() {
  function a(a, b, c, d, e) {
    b = $c.l(b, c, d, e);
    c = a.k;
    return a.h ? (d = Wc(b, c + 1), d <= c ? ad(a, d, b) : a.h(b)) : a.apply(a, Vc(b));
  }
  function b(a, b, c, d) {
    b = $c.b(b, c, d);
    c = a.k;
    return a.h ? (d = Wc(b, c + 1), d <= c ? ad(a, d, b) : a.h(b)) : a.apply(a, Vc(b));
  }
  function c(a, b, c) {
    b = $c.a(b, c);
    c = a.k;
    if (a.h) {
      var d = Wc(b, c + 1);
      return d <= c ? ad(a, d, b) : a.h(b);
    }
    return a.apply(a, Vc(b));
  }
  function d(a, b) {
    var c = a.k;
    if (a.h) {
      var d = Wc(b, c + 1);
      return d <= c ? ad(a, d, b) : a.h(b);
    }
    return a.apply(a, Vc(b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, F) {
      var S = null;
      5 < arguments.length && (S = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, S);
    }
    function b(a, c, d, e, f, h) {
      c = K(c, K(d, K(e, K(f, Yc(h)))));
      d = a.k;
      return a.h ? (e = Wc(c, d + 1), e <= d ? ad(a, e, c) : a.h(c)) : a.apply(a, Vc(c));
    }
    a.k = 5;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, d, e, f, h, a);
    };
    a.d = b;
    return a;
  }(), e = function(e, k, l, n, q, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.d(e, k, l, n, q, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.h = f.h;
  e.a = d;
  e.b = c;
  e.l = b;
  e.H = a;
  e.d = f.d;
  return e;
}(), bd = function() {
  function a(a, b) {
    return!A.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return pa(P.l(A, a, c, d));
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
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
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.c = function() {
    return!1;
  };
  b.a = a;
  b.d = c.d;
  return b;
}();
function cd(a) {
  return D(a) ? a : null;
}
function dd(a, b) {
  for (;;) {
    if (null == D(b)) {
      return!0;
    }
    if (p(a.c ? a.c(E(b)) : a.call(null, E(b)))) {
      var c = a, d = I(b);
      a = c;
      b = d;
    } else {
      return s ? !1 : null;
    }
  }
}
function ed(a) {
  return a;
}
var fd = function() {
  function a(a, b, c) {
    return function() {
      var d = null, l = function() {
        function d(a, b, c, e) {
          var f = null;
          3 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 3), 0));
          return k.call(this, a, b, c, f);
        }
        function k(d, l, n, q) {
          return a.c ? a.c(b.c ? b.c(P.H(c, d, l, n, q)) : b.call(null, P.H(c, d, l, n, q))) : a.call(null, b.c ? b.c(P.H(c, d, l, n, q)) : b.call(null, P.H(c, d, l, n, q)));
        }
        d.k = 3;
        d.h = function(a) {
          var b = E(a);
          a = I(a);
          var c = E(a);
          a = I(a);
          var d = E(a);
          a = G(a);
          return k(b, c, d, a);
        };
        d.d = k;
        return d;
      }(), d = function(d, k, v, C) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.c ? b.c(c.n ? c.n() : c.call(null)) : b.call(null, c.n ? c.n() : c.call(null))) : a.call(null, b.c ? b.c(c.n ? c.n() : c.call(null)) : b.call(null, c.n ? c.n() : c.call(null)));
          case 1:
            return a.c ? a.c(b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d))) : a.call(null, b.c ? b.c(c.c ? c.c(d) : c.call(null, d)) : b.call(null, c.c ? c.c(d) : c.call(null, d)));
          case 2:
            return a.c ? a.c(b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k))) : a.call(null, b.c ? b.c(c.a ? c.a(d, k) : c.call(null, d, k)) : b.call(null, c.a ? c.a(d, k) : c.call(null, d, k)));
          case 3:
            return a.c ? a.c(b.c ? b.c(c.b ? c.b(d, k, v) : c.call(null, d, k, v)) : b.call(null, c.b ? c.b(d, k, v) : c.call(null, d, k, v))) : a.call(null, b.c ? b.c(c.b ? c.b(d, k, v) : c.call(null, d, k, v)) : b.call(null, c.b ? c.b(d, k, v) : c.call(null, d, k, v)));
          default:
            return l.d(d, k, v, J(arguments, 3));
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
        function c(a, b, e, f) {
          var h = null;
          3 < arguments.length && (h = J(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, h);
        }
        function d(c, h, k, l) {
          return a.c ? a.c(P.H(b, c, h, k, l)) : a.call(null, P.H(b, c, h, k, l));
        }
        c.k = 3;
        c.h = function(a) {
          var b = E(a);
          a = I(a);
          var c = E(a);
          a = I(a);
          var e = E(a);
          a = G(a);
          return d(b, c, e, a);
        };
        c.d = d;
        return c;
      }(), c = function(c, h, q, v) {
        switch(arguments.length) {
          case 0:
            return a.c ? a.c(b.n ? b.n() : b.call(null)) : a.call(null, b.n ? b.n() : b.call(null));
          case 1:
            return a.c ? a.c(b.c ? b.c(c) : b.call(null, c)) : a.call(null, b.c ? b.c(c) : b.call(null, c));
          case 2:
            return a.c ? a.c(b.a ? b.a(c, h) : b.call(null, c, h)) : a.call(null, b.a ? b.a(c, h) : b.call(null, c, h));
          case 3:
            return a.c ? a.c(b.b ? b.b(c, h, q) : b.call(null, c, h, q)) : a.call(null, b.b ? b.b(c, h, q) : b.call(null, c, h, q));
          default:
            return d.d(c, h, q, J(arguments, 3));
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
      var q = null;
      3 < arguments.length && (q = J(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, q);
    }
    function b(a, c, d, e) {
      var f = Hc($c.l(a, c, d, e));
      return function() {
        function a(c) {
          var d = null;
          0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
          return b.call(this, d);
        }
        function b(a) {
          a = P.a(E(f), a);
          for (var c = I(f);;) {
            if (c) {
              a = E(c).call(null, a), c = I(c);
            } else {
              return a;
            }
          }
        }
        a.k = 0;
        a.h = function(a) {
          a = D(a);
          return b(a);
        };
        a.d = b;
        return a;
      }();
    }
    a.k = 3;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = G(a);
      return b(c, d, e, a);
    };
    a.d = b;
    return a;
  }(), c = function(c, f, h, k) {
    switch(arguments.length) {
      case 0:
        return ed;
      case 1:
        return c;
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, h);
      default:
        return d.d(c, f, h, J(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.k = 3;
  c.h = d.h;
  c.n = function() {
    return ed;
  };
  c.c = function(a) {
    return a;
  };
  c.a = b;
  c.b = a;
  c.d = d.d;
  return c;
}(), hd = function gd(b, c) {
  return new T(null, function() {
    var d = D(c);
    if (d) {
      if (Q(d)) {
        for (var e = y(d), f = L(e), h = Rc(f), k = 0;;) {
          if (k < f) {
            var l = b.c ? b.c(w.a(e, k)) : b.call(null, w.a(e, k));
            null != l && h.add(l);
            k += 1;
          } else {
            break;
          }
        }
        return Uc(h.K(), gd(b, z(d)));
      }
      e = b.c ? b.c(E(d)) : b.call(null, E(d));
      return null == e ? gd(b, G(d)) : K(e, gd(b, G(d)));
    }
    return null;
  }, null, null);
}, id = function() {
  function a(a, b, c, e) {
    return new T(null, function() {
      var n = D(b), q = D(c), v = D(e);
      return n && q && v ? K(a.b ? a.b(E(n), E(q), E(v)) : a.call(null, E(n), E(q), E(v)), d.l(a, G(n), G(q), G(v))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new T(null, function() {
      var e = D(b), n = D(c);
      return e && n ? K(a.a ? a.a(E(e), E(n)) : a.call(null, E(e), E(n)), d.b(a, G(e), G(n))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new T(null, function() {
      var c = D(b);
      if (c) {
        if (Q(c)) {
          for (var e = y(c), n = L(e), q = Rc(n), v = 0;;) {
            if (v < n) {
              var C = a.c ? a.c(w.a(e, v)) : a.call(null, w.a(e, v));
              q.add(C);
              v += 1;
            } else {
              break;
            }
          }
          return Uc(q.K(), d.a(a, z(c)));
        }
        return K(a.c ? a.c(E(c)) : a.call(null, E(c)), d.a(a, G(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var C = null;
      4 < arguments.length && (C = J(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, C);
    }
    function b(a, c, e, f, h) {
      return d.a(function(b) {
        return P.a(a, b);
      }, function F(a) {
        return new T(null, function() {
          var b = d.a(D, a);
          return dd(ed, b) ? K(d.a(E, b), F(d.a(G, b))) : null;
        }, null, null);
      }(Xb.d(h, f, J([e, c], 0))));
    }
    a.k = 4;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = G(a);
      return b(c, d, e, f, a);
    };
    a.d = b;
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
        return e.d(d, h, k, l, J(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.k = 4;
  d.h = e.h;
  d.a = c;
  d.b = b;
  d.l = a;
  d.d = e.d;
  return d;
}(), kd = function jd(b, c) {
  return new T(null, function() {
    if (0 < b) {
      var d = D(c);
      return d ? K(E(d), jd(b - 1, G(d))) : null;
    }
    return null;
  }, null, null);
};
function ld(a, b) {
  return new T(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = D(d), 0 < c && d) {
          c -= 1, d = G(d);
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
function md(a, b) {
  for (var c = D(b), d = D(ld(a, b));;) {
    if (d) {
      c = I(c), d = I(d);
    } else {
      return c;
    }
  }
}
function nd(a, b) {
  return new T(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        var d = D(d), e;
        e = (e = d) ? c.c ? c.c(E(d)) : c.call(null, E(d)) : e;
        if (p(e)) {
          d = G(d);
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
var od = function() {
  function a(a, b) {
    return kd(a, c.c(b));
  }
  function b(a) {
    return new T(null, function() {
      return K(a, c.c(a));
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
}(), pd = function() {
  function a(a, c) {
    return new T(null, function() {
      var f = D(a), h = D(c);
      return f && h ? K(E(f), K(E(h), b.a(G(f), G(h)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      return new T(null, function() {
        var c = id.a(D, Xb.d(e, d, J([a], 0)));
        return dd(ed, c) ? Zc.a(id.a(E, c), P.a(b, id.a(G, c))) : null;
      }, null, null);
    }
    a.k = 2;
    a.h = function(a) {
      var b = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
      return c(b, d, a);
    };
    a.d = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.d = c.d;
  return b;
}();
function qd(a) {
  return function c(a, e) {
    return new T(null, function() {
      var f = D(a);
      return f ? K(E(f), c(G(f), e)) : D(e) ? c(E(e), G(e)) : null;
    }, null, null);
  }(null, a);
}
var rd = function() {
  function a(a, b) {
    return qd(id.a(a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = J(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return qd(P.l(id, a, c, d));
    }
    a.k = 2;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = G(a);
      return b(c, d, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.d(b, e, J(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 2;
  b.h = c.h;
  b.a = a;
  b.d = c.d;
  return b;
}(), td = function sd(b, c) {
  return new T(null, function() {
    var d = D(c);
    if (d) {
      if (Q(d)) {
        for (var e = y(d), f = L(e), h = Rc(f), k = 0;;) {
          if (k < f) {
            if (p(b.c ? b.c(w.a(e, k)) : b.call(null, w.a(e, k)))) {
              var l = w.a(e, k);
              h.add(l);
            }
            k += 1;
          } else {
            break;
          }
        }
        return Uc(h.K(), sd(b, z(d)));
      }
      e = E(d);
      d = G(d);
      return p(b.c ? b.c(e) : b.call(null, e)) ? K(e, sd(b, d)) : sd(b, d);
    }
    return null;
  }, null, null);
};
function ud(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.rc) ? (c = qc.b(ub, tb(a), b), c = vb(c)) : c = qc.b(Aa, a, b) : c = qc.b(Xb, H, b);
  return c;
}
var vd = function() {
  function a(a, b, c, k) {
    return new T(null, function() {
      var l = D(k);
      if (l) {
        var n = kd(a, l);
        return a === L(n) ? K(n, d.l(a, b, c, ld(b, l))) : Aa(H, kd(a, Zc.a(n, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new T(null, function() {
      var k = D(c);
      if (k) {
        var l = kd(a, k);
        return a === L(l) ? K(l, d.b(a, b, ld(b, k))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function wd(a, b) {
  this.v = a;
  this.e = b;
}
function xd(a) {
  return new wd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function yd(a) {
  return new wd(a.v, ta(a.e));
}
function zd(a) {
  a = a.f;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Ad(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = xd(a);
    d.e[0] = c;
    c = d;
    b -= 5;
  }
}
var Cd = function Bd(b, c, d, e) {
  var f = yd(d), h = b.f - 1 >>> c & 31;
  5 === c ? f.e[h] = e : (d = d.e[h], b = null != d ? Bd(b, c - 5, d, e) : Ad(null, c - 5, e), f.e[h] = b);
  return f;
};
function Dd(a, b) {
  throw Error([u("No item "), u(a), u(" in vector of length "), u(b)].join(""));
}
function Ed(a, b) {
  if (0 <= b && b < a.f) {
    if (b >= zd(a)) {
      return a.S;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.e[b >>> d & 31], d = e
      } else {
        return c.e;
      }
    }
  } else {
    return Dd(b, a.f);
  }
}
var Gd = function Fd(b, c, d, e, f) {
  var h = yd(d);
  if (0 === c) {
    h.e[e & 31] = f;
  } else {
    var k = e >>> c & 31;
    b = Fd(b, c - 5, d.e[k], e, f);
    h.e[k] = b;
  }
  return h;
}, Id = function Hd(b, c, d) {
  var e = b.f - 2 >>> c & 31;
  if (5 < c) {
    b = Hd(b, c - 5, d.e[e]);
    if (null == b && 0 === e) {
      return null;
    }
    d = yd(d);
    d.e[e] = b;
    return d;
  }
  return 0 === e ? null : s ? (d = yd(d), d.e[e] = null, d) : null;
};
function U(a, b, c, d, e, f) {
  this.g = a;
  this.f = b;
  this.shift = c;
  this.root = d;
  this.S = e;
  this.j = f;
  this.o = 4;
  this.i = 167668511;
}
g = U.prototype;
g.Na = function() {
  return new Jd(this.f, this.shift, Kd.c ? Kd.c(this.root) : Kd.call(null, this.root), Ld.c ? Ld.c(this.S) : Ld.call(null, this.S));
};
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.t = function(a, b) {
  return w.b(this, b, null);
};
g.u = function(a, b, c) {
  return w.b(this, b, c);
};
g.ma = function(a, b, c) {
  if (0 <= b && b < this.f) {
    return zd(this) <= b ? (a = ta(this.S), a[b & 31] = c, new U(this.g, this.f, this.shift, this.root, a, null)) : new U(this.g, this.f, this.shift, Gd(this, this.shift, this.root, b, c), this.S, null);
  }
  if (b === this.f) {
    return Aa(this, c);
  }
  if (s) {
    throw Error([u("Index "), u(b), u(" out of bounds  [0,"), u(this.f), u("]")].join(""));
  }
  return null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.p(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.p(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.A = function(a, b) {
  if (32 > this.f - zd(this)) {
    for (var c = this.S.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.S[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new U(this.g, this.f + 1, this.shift, this.root, d, null);
  }
  c = (d = this.f >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = xd(null), d.e[0] = this.root, e = Ad(null, this.shift, new wd(null, this.S)), d.e[1] = e) : d = Cd(this, this.shift, this.root, new wd(null, this.S));
  return new U(this.g, this.f + 1, c, d, [b], null);
};
g.Sa = function() {
  return 0 < this.f ? new Pb(this, this.f - 1, null) : null;
};
g.Ra = function() {
  return w.a(this, 0);
};
g.hb = function() {
  return w.a(this, 1);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Kb.a(this, b);
};
g.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
g.B = function() {
  return 0 === this.f ? null : 32 > this.f ? J.c(this.S) : s ? Md.b ? Md.b(this, 0, 0) : Md.call(null, this, 0, 0) : null;
};
g.F = function() {
  return this.f;
};
g.ta = function() {
  return 0 < this.f ? w.a(this, this.f - 1) : null;
};
g.ua = function() {
  if (0 === this.f) {
    throw Error("Can't pop empty vector");
  }
  if (1 === this.f) {
    return ab(Nd, this.g);
  }
  if (1 < this.f - zd(this)) {
    return new U(this.g, this.f - 1, this.shift, this.root, this.S.slice(0, -1), null);
  }
  if (s) {
    var a = Ed(this, this.f - 2), b = Id(this, this.shift, this.root), b = null == b ? V : b, c = this.f - 1;
    return 5 < this.shift && null == b.e[1] ? new U(this.g, c, this.shift - 5, b.e[0], a, null) : new U(this.g, c, this.shift, b, a, null);
  }
  return null;
};
g.Fa = function(a, b, c) {
  return Ka(this, b, c);
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new U(b, this.f, this.shift, this.root, this.S, this.j);
};
g.w = function() {
  return this.g;
};
g.p = function(a, b) {
  return Ed(this, b)[b & 31];
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? w.a(this, b) : c;
};
g.G = function() {
  return Tb(Nd, this.g);
};
var V = new wd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Nd = new U(null, 0, 5, V, [], 0);
function Od(a) {
  return vb(qc.b(ub, tb(Nd), a));
}
function Pd(a, b, c, d, e, f) {
  this.P = a;
  this.ca = b;
  this.m = c;
  this.off = d;
  this.g = e;
  this.j = f;
  this.i = 32243948;
  this.o = 1536;
}
g = Pd.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  if (this.off + 1 < this.ca.length) {
    var a = Md.l ? Md.l(this.P, this.ca, this.m, this.off + 1) : Md.call(null, this.P, this.ca, this.m, this.off + 1);
    return null == a ? null : a;
  }
  return zb(this);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Kb.a(Qd.b ? Qd.b(this.P, this.m + this.off, L(this.P)) : Qd.call(null, this.P, this.m + this.off, L(this.P)), b);
};
g.N = function(a, b, c) {
  return Kb.b(Qd.b ? Qd.b(this.P, this.m + this.off, L(this.P)) : Qd.call(null, this.P, this.m + this.off, L(this.P)), b, c);
};
g.B = function() {
  return this;
};
g.O = function() {
  return this.ca[this.off];
};
g.R = function() {
  if (this.off + 1 < this.ca.length) {
    var a = Md.l ? Md.l(this.P, this.ca, this.m, this.off + 1) : Md.call(null, this.P, this.ca, this.m, this.off + 1);
    return null == a ? H : a;
  }
  return z(this);
};
g.mb = function() {
  var a = this.ca.length, a = this.m + a < wa(this.P) ? Md.b ? Md.b(this.P, this.m + a, 0) : Md.call(null, this.P, this.m + a, 0) : null;
  return null == a ? null : a;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return Md.H ? Md.H(this.P, this.ca, this.m, this.off, b) : Md.call(null, this.P, this.ca, this.m, this.off, b);
};
g.G = function() {
  return Tb(Nd, this.g);
};
g.nb = function() {
  return Sc.a(this.ca, this.off);
};
g.ob = function() {
  var a = this.ca.length, a = this.m + a < wa(this.P) ? Md.b ? Md.b(this.P, this.m + a, 0) : Md.call(null, this.P, this.m + a, 0) : null;
  return null == a ? H : a;
};
var Md = function() {
  function a(a, b, c, d, l) {
    return new Pd(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new Pd(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Pd(a, Ed(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.H = a;
  return d;
}();
function Rd(a, b, c, d, e) {
  this.g = a;
  this.aa = b;
  this.start = c;
  this.end = d;
  this.j = e;
  this.o = 0;
  this.i = 32400159;
}
g = Rd.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.t = function(a, b) {
  return w.b(this, b, null);
};
g.u = function(a, b, c) {
  return w.b(this, b, c);
};
g.ma = function(a, b, c) {
  var d = this, e = d.start + b;
  return Sd.H ? Sd.H(d.g, O.b(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Sd.call(null, d.g, O.b(d.aa, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.p(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.p(null, a);
};
g.a = function(a, b) {
  return this.X(null, a, b);
};
g.A = function(a, b) {
  return Sd.H ? Sd.H(this.g, Xa(this.aa, this.end, b), this.start, this.end + 1, null) : Sd.call(null, this.g, Xa(this.aa, this.end, b), this.start, this.end + 1, null);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Kb.a(this, b);
};
g.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
g.B = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : K(w.a(a.aa, d), new T(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
g.F = function() {
  return this.end - this.start;
};
g.ta = function() {
  return w.a(this.aa, this.end - 1);
};
g.ua = function() {
  if (this.start === this.end) {
    throw Error("Can't pop empty vector");
  }
  return Sd.H ? Sd.H(this.g, this.aa, this.start, this.end - 1, null) : Sd.call(null, this.g, this.aa, this.start, this.end - 1, null);
};
g.Fa = function(a, b, c) {
  return Ka(this, b, c);
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return Sd.H ? Sd.H(b, this.aa, this.start, this.end, this.j) : Sd.call(null, b, this.aa, this.start, this.end, this.j);
};
g.w = function() {
  return this.g;
};
g.p = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Dd(b, this.end - this.start) : w.a(this.aa, this.start + b);
};
g.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : w.b(this.aa, this.start + b, c);
};
g.G = function() {
  return Tb(Nd, this.g);
};
function Sd(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Rd) {
      c = b.start + c, d = b.start + d, b = b.aa;
    } else {
      var f = L(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Rd(a, b, c, d, e);
    }
  }
}
var Qd = function() {
  function a(a, b, c) {
    return Sd(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, L(a));
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
  c.b = a;
  return c;
}();
function Kd(a) {
  return new wd({}, ta(a.e));
}
function Ld(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  kc(a, 0, b, 0, a.length);
  return b;
}
var Ud = function Td(b, c, d, e) {
  d = b.root.v === d.v ? d : new wd(b.root.v, ta(d.e));
  var f = b.f - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var h = d.e[f];
    b = null != h ? Td(b, c - 5, h, e) : Ad(b.root.v, c - 5, e);
  }
  d.e[f] = b;
  return d;
};
function Jd(a, b, c, d) {
  this.f = a;
  this.shift = b;
  this.root = c;
  this.S = d;
  this.i = 275;
  this.o = 88;
}
g = Jd.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.t = function(a, b) {
  return w.b(this, b, null);
};
g.u = function(a, b, c) {
  return w.b(this, b, c);
};
g.p = function(a, b) {
  if (this.root.v) {
    return Ed(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.X = function(a, b, c) {
  return 0 <= b && b < this.f ? w.a(this, b) : c;
};
g.F = function() {
  if (this.root.v) {
    return this.f;
  }
  throw Error("count after persistent!");
};
g.Sb = function(a, b, c) {
  var d = this;
  if (d.root.v) {
    if (0 <= b && b < d.f) {
      return zd(this) <= b ? d.S[b & 31] = c : (a = function f(a, k) {
        var l = d.root.v === k.v ? k : new wd(d.root.v, ta(k.e));
        if (0 === a) {
          l.e[b & 31] = c;
        } else {
          var n = b >>> a & 31, q = f(a - 5, l.e[n]);
          l.e[n] = q;
        }
        return l;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.f) {
      return ub(this, c);
    }
    if (s) {
      throw Error([u("Index "), u(b), u(" out of bounds for TransientVector of length"), u(d.f)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.Ua = function(a, b, c) {
  return xb(this, b, c);
};
g.Va = function(a, b) {
  if (this.root.v) {
    if (32 > this.f - zd(this)) {
      this.S[this.f & 31] = b;
    } else {
      var c = new wd(this.root.v, this.S), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.S = d;
      if (this.f >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Ad(this.root.v, this.shift, c);
        this.root = new wd(this.root.v, d);
        this.shift = e;
      } else {
        this.root = Ud(this, this.shift, this.root, c);
      }
    }
    this.f += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.Wa = function() {
  if (this.root.v) {
    this.root.v = null;
    var a = this.f - zd(this), b = Array(a);
    kc(this.S, 0, b, 0, a);
    return new U(null, this.f, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function Vd(a, b, c, d) {
  this.g = a;
  this.Y = b;
  this.pa = c;
  this.j = d;
  this.o = 0;
  this.i = 31850572;
}
g = Vd.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return E(this.Y);
};
g.R = function() {
  var a = I(this.Y);
  return a ? new Vd(this.g, a, this.pa, null) : null == this.pa ? xa(this) : new Vd(this.g, this.pa, null, null);
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Vd(b, this.Y, this.pa, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
function Wd(a, b, c, d, e) {
  this.g = a;
  this.count = b;
  this.Y = c;
  this.pa = d;
  this.j = e;
  this.o = 0;
  this.i = 31858766;
}
g = Wd.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.A = function(a, b) {
  var c;
  p(this.Y) ? (c = this.pa, c = new Wd(this.g, this.count + 1, this.Y, Xb.a(p(c) ? c : Nd, b), null)) : c = new Wd(this.g, this.count + 1, Xb.a(this.Y, b), Nd, null);
  return c;
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  var a = D(this.pa), b = this.Y;
  return p(p(b) ? b : a) ? new Vd(null, this.Y, D(a), null) : null;
};
g.F = function() {
  return this.count;
};
g.ta = function() {
  return E(this.Y);
};
g.ua = function() {
  if (p(this.Y)) {
    var a = I(this.Y);
    return a ? new Wd(this.g, this.count - 1, a, this.pa, null) : new Wd(this.g, this.count - 1, D(this.pa), Nd, null);
  }
  return this;
};
g.O = function() {
  return E(this.Y);
};
g.R = function() {
  return G(D(this));
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Wd(b, this.count, this.Y, this.pa, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Xd;
};
var Xd = new Wd(null, 0, null, Nd, 0);
function Yd() {
  this.o = 0;
  this.i = 2097152;
}
Yd.prototype.r = function() {
  return!1;
};
var Zd = new Yd;
function $d(a, b) {
  return nc(hc(b) ? L(a) === L(b) ? dd(ed, id.a(function(a) {
    return A.a(N.b(b, E(a), Zd), Ub(a));
  }, a)) : null : null);
}
function ae(a, b) {
  var c = a.e;
  if (b instanceof R) {
    a: {
      for (var d = c.length, e = b.Aa, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var h = c[f];
        if (h instanceof R && e === h.Aa) {
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
      if (b instanceof Fb) {
        a: {
          d = c.length;
          e = b.Da;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            h = c[f];
            if (h instanceof Fb && e === h.Da) {
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
                if (A.a(b, c[e])) {
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
function be(a, b, c) {
  this.e = a;
  this.m = b;
  this.da = c;
  this.o = 0;
  this.i = 32374990;
}
g = be.prototype;
g.s = function() {
  return Ob(this);
};
g.Z = function() {
  return this.m < this.e.length - 2 ? new be(this.e, this.m + 2, this.da) : null;
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.F = function() {
  return(this.e.length - this.m) / 2;
};
g.O = function() {
  return new U(null, 2, 5, V, [this.e[this.m], this.e[this.m + 1]], null);
};
g.R = function() {
  return this.m < this.e.length - 2 ? new be(this.e, this.m + 2, this.da) : H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new be(this.e, this.m, b);
};
g.w = function() {
  return this.da;
};
g.G = function() {
  return Tb(H, this.da);
};
function ia(a, b, c, d) {
  this.g = a;
  this.f = b;
  this.e = c;
  this.j = d;
  this.o = 4;
  this.i = 16123663;
}
g = ia.prototype;
g.Na = function() {
  return new ce({}, this.e.length, ta(this.e));
};
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Bc(this);
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  a = ae(this, b);
  return-1 === a ? c : this.e[a + 1];
};
g.ma = function(a, b, c) {
  a = ae(this, b);
  if (-1 === a) {
    if (this.f < de) {
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
      return new ia(this.g, this.f + 1, e, null);
    }
    return ab(Ka(ud(ee, this), b, c), this.g);
  }
  return c === this.e[a + 1] ? this : s ? (b = ta(this.e), b[a + 1] = c, new ia(this.g, this.f, b, null)) : null;
};
g.Ma = function(a, b) {
  return-1 !== ae(this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return ic(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : qc.b(Aa, this, b);
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  return 0 <= this.e.length - 2 ? new be(this.e, 0, null) : null;
};
g.F = function() {
  return this.f;
};
g.r = function(a, b) {
  return $d(this, b);
};
g.C = function(a, b) {
  return new ia(b, this.f, this.e, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return ab(fe, this.g);
};
g.Ja = function(a, b) {
  if (0 <= ae(this, b)) {
    var c = this.e.length, d = c - 2;
    if (0 === d) {
      return xa(this);
    }
    for (var d = Array(d), e = 0, f = 0;;) {
      if (e >= c) {
        return new ia(this.g, this.f - 1, d, null);
      }
      if (A.a(b, this.e[e])) {
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
var fe = new ia(null, 0, [], null), de = 8;
function ge(a) {
  for (var b = a.length, c = 0, d = tb(fe);;) {
    if (c < b) {
      var e = c + 2, d = wb(d, a[c], a[c + 1]), c = e
    } else {
      return vb(d);
    }
  }
}
function ce(a, b, c) {
  this.Ka = a;
  this.wa = b;
  this.e = c;
  this.o = 56;
  this.i = 258;
}
g = ce.prototype;
g.Ua = function(a, b, c) {
  if (p(this.Ka)) {
    a = ae(this, b);
    if (-1 === a) {
      if (this.wa + 2 <= 2 * de) {
        return this.wa += 2, this.e.push(b), this.e.push(c), this;
      }
      a = he.a ? he.a(this.wa, this.e) : he.call(null, this.wa, this.e);
      return wb(a, b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.Va = function(a, b) {
  if (p(this.Ka)) {
    if (b ? b.i & 2048 || b.cc || (b.i ? 0 : r(Oa, b)) : r(Oa, b)) {
      return wb(this, Cc.c ? Cc.c(b) : Cc.call(null, b), Dc.c ? Dc.c(b) : Dc.call(null, b));
    }
    for (var c = D(b), d = this;;) {
      var e = E(c);
      if (p(e)) {
        c = I(c), d = wb(d, Cc.c ? Cc.c(e) : Cc.call(null, e), Dc.c ? Dc.c(e) : Dc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.Wa = function() {
  if (p(this.Ka)) {
    return this.Ka = !1, new ia(null, vc((this.wa - this.wa % 2) / 2), this.e, null);
  }
  throw Error("persistent! called twice");
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  if (p(this.Ka)) {
    return a = ae(this, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.F = function() {
  if (p(this.Ka)) {
    return vc((this.wa - this.wa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function he(a, b) {
  for (var c = tb(ee), d = 0;;) {
    if (d < a) {
      c = wb(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function ie() {
  this.val = !1;
}
function je(a, b) {
  return a === b ? !0 : Lc(a, b) ? !0 : s ? A.a(a, b) : null;
}
var ke = function() {
  function a(a, b, c, h, k) {
    a = ta(a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = ta(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.H = a;
  return c;
}();
function le(a, b) {
  var c = Array(a.length - 2);
  kc(a, 0, c, 0, 2 * b);
  kc(a, 2 * (b + 1), c, 2 * b, c.length - 2 * b);
  return c;
}
var me = function() {
  function a(a, b, c, h, k, l) {
    a = a.La(b);
    a.e[c] = h;
    a.e[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.La(b);
    a.e[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.sa = a;
  return c;
}();
function ne(a, b, c) {
  this.v = a;
  this.D = b;
  this.e = c;
}
g = ne.prototype;
g.fa = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = yc(this.D & h - 1);
  if (0 === (this.D & h)) {
    var l = yc(this.D);
    if (2 * l < this.e.length) {
      a = this.La(a);
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
      a.D |= h;
      return a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = oe.fa(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.D >>> d & 1) && (k[d] = null != this.e[e] ? oe.fa(a, b + 5, B(this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new pe(a, l + 1, k);
    }
    return s ? (b = Array(2 * (l + 4)), kc(this.e, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, kc(this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.val = !0, a = this.La(a), a.e = b, a.D |= h, a) : null;
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  return null == l ? (l = h.fa(a, b + 5, c, d, e, f), l === h ? this : me.l(this, a, 2 * k + 1, l)) : je(d, l) ? e === h ? this : me.l(this, a, 2 * k + 1, e) : s ? (f.val = !0, me.sa(this, a, 2 * k, null, 2 * k + 1, qe.Ia ? qe.Ia(a, b + 5, l, h, c, d, e) : qe.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.Xa = function() {
  return re.c ? re.c(this.e) : re.call(null, this.e);
};
g.La = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = yc(this.D), c = Array(0 > b ? 4 : 2 * (b + 1));
  kc(this.e, 0, c, 0, 2 * b);
  return new ne(a, this.D, c);
};
g.Ya = function(a, b, c) {
  var d = 1 << (b >>> a & 31);
  if (0 === (this.D & d)) {
    return this;
  }
  var e = yc(this.D & d - 1), f = this.e[2 * e], h = this.e[2 * e + 1];
  return null == f ? (a = h.Ya(a + 5, b, c), a === h ? this : null != a ? new ne(null, this.D, ke.b(this.e, 2 * e + 1, a)) : this.D === d ? null : s ? new ne(null, this.D ^ d, le(this.e, e)) : null) : je(c, f) ? new ne(null, this.D ^ d, le(this.e, e)) : s ? this : null;
};
g.ea = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = yc(this.D & f - 1);
  if (0 === (this.D & f)) {
    var k = yc(this.D);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = oe.ea(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.D >>> c & 1) && (h[c] = null != this.e[d] ? oe.ea(a + 5, B(this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new pe(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    kc(this.e, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    kc(this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.val = !0;
    return new ne(null, this.D | f, a);
  }
  k = this.e[2 * h];
  f = this.e[2 * h + 1];
  return null == k ? (k = f.ea(a + 5, b, c, d, e), k === f ? this : new ne(null, this.D, ke.b(this.e, 2 * h + 1, k))) : je(c, k) ? d === f ? this : new ne(null, this.D, ke.b(this.e, 2 * h + 1, d)) : s ? (e.val = !0, new ne(null, this.D, ke.H(this.e, 2 * h, null, 2 * h + 1, qe.sa ? qe.sa(a + 5, k, f, b, c, d) : qe.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.Ba = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.D & e)) {
    return d;
  }
  var f = yc(this.D & e - 1), e = this.e[2 * f], f = this.e[2 * f + 1];
  return null == e ? f.Ba(a + 5, b, c, d) : je(c, e) ? f : s ? d : null;
};
var oe = new ne(null, 0, []);
function pe(a, b, c) {
  this.v = a;
  this.f = b;
  this.e = c;
}
g = pe.prototype;
g.fa = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.e[h];
  if (null == k) {
    return a = me.l(this, a, h, oe.fa(a, b + 5, c, d, e, f)), a.f += 1, a;
  }
  b = k.fa(a, b + 5, c, d, e, f);
  return b === k ? this : me.l(this, a, h, b);
};
g.Xa = function() {
  return se.c ? se.c(this.e) : se.call(null, this.e);
};
g.La = function(a) {
  return a === this.v ? this : new pe(a, this.f, ta(this.e));
};
g.Ya = function(a, b, c) {
  var d = b >>> a & 31, e = this.e[d];
  if (null != e) {
    a = e.Ya(a + 5, b, c);
    if (a === e) {
      d = this;
    } else {
      if (null == a) {
        if (8 >= this.f) {
          a: {
            e = this.e;
            a = 2 * (this.f - 1);
            b = Array(a);
            c = 0;
            for (var f = 1, h = 0;;) {
              if (c < a) {
                c !== d && null != e[c] && (b[f] = e[c], f += 2, h |= 1 << c), c += 1;
              } else {
                d = new ne(null, h, b);
                break a;
              }
            }
            d = void 0;
          }
        } else {
          d = new pe(null, this.f - 1, ke.b(this.e, d, a));
        }
      } else {
        d = s ? new pe(null, this.f, ke.b(this.e, d, a)) : null;
      }
    }
    return d;
  }
  return this;
};
g.ea = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.e[f];
  if (null == h) {
    return new pe(null, this.f + 1, ke.b(this.e, f, oe.ea(a + 5, b, c, d, e)));
  }
  a = h.ea(a + 5, b, c, d, e);
  return a === h ? this : new pe(null, this.f, ke.b(this.e, f, a));
};
g.Ba = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Ba(a + 5, b, c, d) : d;
};
function te(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (je(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function ue(a, b, c, d) {
  this.v = a;
  this.va = b;
  this.f = c;
  this.e = d;
}
g = ue.prototype;
g.fa = function(a, b, c, d, e, f) {
  if (c === this.va) {
    b = te(this.e, this.f, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.f) {
        return a = me.sa(this, a, 2 * this.f, d, 2 * this.f + 1, e), f.val = !0, a.f += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      kc(this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.val = !0;
      f = this.f + 1;
      a === this.v ? (this.e = b, this.f = f, a = this) : a = new ue(this.v, this.va, f, b);
      return a;
    }
    return this.e[b + 1] === e ? this : me.l(this, a, b + 1, e);
  }
  return(new ne(a, 1 << (this.va >>> b & 31), [null, this, null, null])).fa(a, b, c, d, e, f);
};
g.Xa = function() {
  return re.c ? re.c(this.e) : re.call(null, this.e);
};
g.La = function(a) {
  if (a === this.v) {
    return this;
  }
  var b = Array(2 * (this.f + 1));
  kc(this.e, 0, b, 0, 2 * this.f);
  return new ue(a, this.va, this.f, b);
};
g.Ya = function(a, b, c) {
  a = te(this.e, this.f, c);
  return-1 === a ? this : 1 === this.f ? null : s ? new ue(null, this.va, this.f - 1, le(this.e, vc((a - a % 2) / 2))) : null;
};
g.ea = function(a, b, c, d, e) {
  return b === this.va ? (a = te(this.e, this.f, c), -1 === a ? (a = 2 * this.f, b = Array(a + 2), kc(this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.val = !0, new ue(null, this.va, this.f + 1, b)) : A.a(this.e[a], d) ? this : new ue(null, this.va, this.f, ke.b(this.e, a + 1, d))) : (new ne(null, 1 << (this.va >>> a & 31), [null, this])).ea(a, b, c, d, e);
};
g.Ba = function(a, b, c, d) {
  a = te(this.e, this.f, c);
  return 0 > a ? d : je(c, this.e[a]) ? this.e[a + 1] : s ? d : null;
};
var qe = function() {
  function a(a, b, c, h, k, l, n) {
    var q = B(c);
    if (q === k) {
      return new ue(null, q, 2, [c, h, l, n]);
    }
    var v = new ie;
    return oe.fa(a, b, q, c, h, v).fa(a, b, k, l, n, v);
  }
  function b(a, b, c, h, k, l) {
    var n = B(b);
    if (n === h) {
      return new ue(null, n, 2, [b, c, k, l]);
    }
    var q = new ie;
    return oe.ea(a, n, b, c, q).ea(a, h, k, l, q);
  }
  var c = null, c = function(c, e, f, h, k, l, n) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, n);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.sa = b;
  c.Ia = a;
  return c;
}();
function ve(a, b, c, d, e) {
  this.g = a;
  this.ka = b;
  this.m = c;
  this.J = d;
  this.j = e;
  this.o = 0;
  this.i = 32374860;
}
g = ve.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return null == this.J ? new U(null, 2, 5, V, [this.ka[this.m], this.ka[this.m + 1]], null) : E(this.J);
};
g.R = function() {
  return null == this.J ? re.b ? re.b(this.ka, this.m + 2, null) : re.call(null, this.ka, this.m + 2, null) : re.b ? re.b(this.ka, this.m, I(this.J)) : re.call(null, this.ka, this.m, I(this.J));
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new ve(b, this.ka, this.m, this.J, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
var re = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new ve(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (p(h) && (h = h.Xa(), p(h))) {
            return new ve(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new ve(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
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
  c.c = b;
  c.b = a;
  return c;
}();
function we(a, b, c, d, e) {
  this.g = a;
  this.ka = b;
  this.m = c;
  this.J = d;
  this.j = e;
  this.o = 0;
  this.i = 32374860;
}
g = we.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return E(this.J);
};
g.R = function() {
  return se.l ? se.l(null, this.ka, this.m, I(this.J)) : se.call(null, null, this.ka, this.m, I(this.J));
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new we(b, this.ka, this.m, this.J, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
var se = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (p(k) && (k = k.Xa(), p(k))) {
            return new we(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new we(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function xe(a, b, c, d, e, f) {
  this.g = a;
  this.f = b;
  this.root = c;
  this.T = d;
  this.$ = e;
  this.j = f;
  this.o = 4;
  this.i = 16123663;
}
g = xe.prototype;
g.Na = function() {
  return new ye({}, this.root, this.f, this.T, this.$);
};
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Bc(this);
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  return null == b ? this.T ? this.$ : c : null == this.root ? c : s ? this.root.Ba(0, B(b), b, c) : null;
};
g.ma = function(a, b, c) {
  if (null == b) {
    return this.T && c === this.$ ? this : new xe(this.g, this.T ? this.f : this.f + 1, this.root, !0, c, null);
  }
  a = new ie;
  b = (null == this.root ? oe : this.root).ea(0, B(b), b, c, a);
  return b === this.root ? this : new xe(this.g, a.val ? this.f + 1 : this.f, b, this.T, this.$, null);
};
g.Ma = function(a, b) {
  return null == b ? this.T : null == this.root ? !1 : s ? this.root.Ba(0, B(b), b, lc) !== lc : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return ic(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : qc.b(Aa, this, b);
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  if (0 < this.f) {
    var a = null != this.root ? this.root.Xa() : null;
    return this.T ? K(new U(null, 2, 5, V, [null, this.$], null), a) : a;
  }
  return null;
};
g.F = function() {
  return this.f;
};
g.r = function(a, b) {
  return $d(this, b);
};
g.C = function(a, b) {
  return new xe(b, this.f, this.root, this.T, this.$, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return ab(ee, this.g);
};
g.Ja = function(a, b) {
  if (null == b) {
    return this.T ? new xe(this.g, this.f - 1, this.root, !1, null, null) : this;
  }
  if (null == this.root) {
    return this;
  }
  if (s) {
    var c = this.root.Ya(0, B(b), b);
    return c === this.root ? this : new xe(this.g, this.f - 1, c, this.T, this.$, null);
  }
  return null;
};
var ee = new xe(null, 0, null, !1, null, 0);
function Zb(a, b) {
  for (var c = a.length, d = 0, e = tb(ee);;) {
    if (d < c) {
      var f = d + 1, e = e.Ua(null, a[d], b[d]), d = f
    } else {
      return vb(e);
    }
  }
}
function ye(a, b, c, d, e) {
  this.v = a;
  this.root = b;
  this.count = c;
  this.T = d;
  this.$ = e;
  this.o = 56;
  this.i = 258;
}
g = ye.prototype;
g.Ua = function(a, b, c) {
  return ze(this, b, c);
};
g.Va = function(a, b) {
  var c;
  a: {
    if (this.v) {
      if (b ? b.i & 2048 || b.cc || (b.i ? 0 : r(Oa, b)) : r(Oa, b)) {
        c = ze(this, Cc.c ? Cc.c(b) : Cc.call(null, b), Dc.c ? Dc.c(b) : Dc.call(null, b));
        break a;
      }
      c = D(b);
      for (var d = this;;) {
        var e = E(c);
        if (p(e)) {
          c = I(c), d = ze(d, Cc.c ? Cc.c(e) : Cc.call(null, e), Dc.c ? Dc.c(e) : Dc.call(null, e));
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
g.Wa = function() {
  var a;
  if (this.v) {
    this.v = null, a = new xe(null, this.count, this.root, this.T, this.$, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.t = function(a, b) {
  return null == b ? this.T ? this.$ : null : null == this.root ? null : this.root.Ba(0, B(b), b);
};
g.u = function(a, b, c) {
  return null == b ? this.T ? this.$ : c : null == this.root ? c : this.root.Ba(0, B(b), b, c);
};
g.F = function() {
  if (this.v) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function ze(a, b, c) {
  if (a.v) {
    if (null == b) {
      a.$ !== c && (a.$ = c), a.T || (a.count += 1, a.T = !0);
    } else {
      var d = new ie;
      b = (null == a.root ? oe : a.root).fa(a.v, 0, B(b), b, c, d);
      b !== a.root && (a.root = b);
      d.val && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
function Ae(a, b, c) {
  for (var d = b;;) {
    if (null != a) {
      b = c ? a.left : a.right, d = Xb.a(d, a), a = b;
    } else {
      return d;
    }
  }
}
function Be(a, b, c, d, e) {
  this.g = a;
  this.stack = b;
  this.cb = c;
  this.f = d;
  this.j = e;
  this.o = 0;
  this.i = 32374862;
}
g = Be.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.F = function() {
  return 0 > this.f ? L(I(this)) + 1 : this.f;
};
g.O = function() {
  return dc(this.stack);
};
g.R = function() {
  var a = E(this.stack), a = Ae(this.cb ? a.right : a.left, I(this.stack), this.cb);
  return null != a ? new Be(null, a, this.cb, this.f - 1, null) : H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Be(b, this.stack, this.cb, this.f, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(H, this.g);
};
function Ce(a, b, c, d) {
  return c instanceof X ? c.left instanceof X ? new X(c.key, c.val, c.left.ra(), new Y(a, b, c.right, d, null), null) : c.right instanceof X ? new X(c.right.key, c.right.val, new Y(c.key, c.val, c.left, c.right.left, null), new Y(a, b, c.right.right, d, null), null) : s ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function De(a, b, c, d) {
  return d instanceof X ? d.right instanceof X ? new X(d.key, d.val, new Y(a, b, c, d.left, null), d.right.ra(), null) : d.left instanceof X ? new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), new Y(d.key, d.val, d.left.right, d.right, null), null) : s ? new Y(a, b, c, d, null) : null : new Y(a, b, c, d, null);
}
function Ee(a, b, c, d) {
  if (c instanceof X) {
    return new X(a, b, c.ra(), d, null);
  }
  if (d instanceof Y) {
    return De(a, b, c, d.ab());
  }
  if (d instanceof X && d.left instanceof Y) {
    return new X(d.left.key, d.left.val, new Y(a, b, c, d.left.left, null), De(d.key, d.val, d.left.right, d.right.ab()), null);
  }
  if (s) {
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
  this.o = 0;
  this.i = 32402207;
}
g = Y.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.t = function(a, b) {
  return w.b(this, b, null);
};
g.u = function(a, b, c) {
  return w.b(this, b, c);
};
g.ma = function(a, b, c) {
  return O.b(new U(null, 2, 5, V, [this.key, this.val], null), b, c);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.val, b], null);
};
g.Ra = function() {
  return this.key;
};
g.hb = function() {
  return this.val;
};
g.Ib = function(a) {
  return a.Kb(this);
};
g.ab = function() {
  return new X(this.key, this.val, this.left, this.right, null);
};
g.replace = function(a, b, c, d) {
  return new Y(a, b, c, d, null);
};
g.Hb = function(a) {
  return a.Jb(this);
};
g.Jb = function(a) {
  return new Y(a.key, a.val, this, a.right, null);
};
g.Kb = function(a) {
  return new Y(a.key, a.val, a.left, this, null);
};
g.ra = function() {
  return this;
};
g.M = function(a, b) {
  return Kb.a(this, b);
};
g.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
g.B = function() {
  return Aa(Aa(H, this.val), this.key);
};
g.F = function() {
  return 2;
};
g.ta = function() {
  return this.val;
};
g.ua = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
g.Fa = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.val], null)).Fa(null, b, c);
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return Tb(new U(null, 2, 5, V, [this.key, this.val], null), b);
};
g.w = function() {
  return null;
};
g.p = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
g.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
g.G = function() {
  return Nd;
};
function X(a, b, c, d, e) {
  this.key = a;
  this.val = b;
  this.left = c;
  this.right = d;
  this.j = e;
  this.o = 0;
  this.i = 32402207;
}
g = X.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.t = function(a, b) {
  return w.b(this, b, null);
};
g.u = function(a, b, c) {
  return w.b(this, b, c);
};
g.ma = function(a, b, c) {
  return O.b(new U(null, 2, 5, V, [this.key, this.val], null), b, c);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return new U(null, 3, 5, V, [this.key, this.val, b], null);
};
g.Ra = function() {
  return this.key;
};
g.hb = function() {
  return this.val;
};
g.Ib = function(a) {
  return new X(this.key, this.val, this.left, a, null);
};
g.ab = function() {
  throw Error("red-black tree invariant violation");
};
g.replace = function(a, b, c, d) {
  return new X(a, b, c, d, null);
};
g.Hb = function(a) {
  return new X(this.key, this.val, a, this.right, null);
};
g.Jb = function(a) {
  return this.left instanceof X ? new X(this.key, this.val, this.left.ra(), new Y(a.key, a.val, this.right, a.right, null), null) : this.right instanceof X ? new X(this.right.key, this.right.val, new Y(this.key, this.val, this.left, this.right.left, null), new Y(a.key, a.val, this.right.right, a.right, null), null) : s ? new Y(a.key, a.val, this, a.right, null) : null;
};
g.Kb = function(a) {
  return this.right instanceof X ? new X(this.key, this.val, new Y(a.key, a.val, a.left, this.left, null), this.right.ra(), null) : this.left instanceof X ? new X(this.left.key, this.left.val, new Y(a.key, a.val, a.left, this.left.left, null), new Y(this.key, this.val, this.left.right, this.right, null), null) : s ? new Y(a.key, a.val, a.left, this, null) : null;
};
g.ra = function() {
  return new Y(this.key, this.val, this.left, this.right, null);
};
g.M = function(a, b) {
  return Kb.a(this, b);
};
g.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
g.B = function() {
  return Aa(Aa(H, this.val), this.key);
};
g.F = function() {
  return 2;
};
g.ta = function() {
  return this.val;
};
g.ua = function() {
  return new U(null, 1, 5, V, [this.key], null);
};
g.Fa = function(a, b, c) {
  return(new U(null, 2, 5, V, [this.key, this.val], null)).Fa(null, b, c);
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return Tb(new U(null, 2, 5, V, [this.key, this.val], null), b);
};
g.w = function() {
  return null;
};
g.p = function(a, b) {
  return 0 === b ? this.key : 1 === b ? this.val : null;
};
g.X = function(a, b, c) {
  return 0 === b ? this.key : 1 === b ? this.val : s ? c : null;
};
g.G = function() {
  return Nd;
};
var Ge = function Fe(b, c, d, e, f) {
  if (null == c) {
    return new X(d, e, null, null, null);
  }
  var h = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
  return 0 === h ? (f[0] = c, null) : 0 > h ? (b = Fe(b, c.left, d, e, f), null != b ? c.Hb(b) : null) : s ? (b = Fe(b, c.right, d, e, f), null != b ? c.Ib(b) : null) : null;
}, Ie = function He(b, c) {
  if (null == b) {
    return c;
  }
  if (null == c) {
    return b;
  }
  if (b instanceof X) {
    if (c instanceof X) {
      var d = He(b.right, c.left);
      return d instanceof X ? new X(d.key, d.val, new X(b.key, b.val, b.left, d.left, null), new X(c.key, c.val, d.right, c.right, null), null) : new X(b.key, b.val, b.left, new X(c.key, c.val, d, c.right, null), null);
    }
    return new X(b.key, b.val, b.left, He(b.right, c), null);
  }
  return c instanceof X ? new X(c.key, c.val, He(b, c.left), c.right, null) : s ? (d = He(b.right, c.left), d instanceof X ? new X(d.key, d.val, new Y(b.key, b.val, b.left, d.left, null), new Y(c.key, c.val, d.right, c.right, null), null) : Ee(b.key, b.val, b.left, new Y(c.key, c.val, d, c.right, null))) : null;
}, Ke = function Je(b, c, d, e) {
  if (null != c) {
    var f = b.a ? b.a(d, c.key) : b.call(null, d, c.key);
    if (0 === f) {
      return e[0] = c, Ie(c.left, c.right);
    }
    if (0 > f) {
      return b = Je(b, c.left, d, e), null != b || null != e[0] ? c.left instanceof Y ? Ee(c.key, c.val, b, c.right) : new X(c.key, c.val, b, c.right, null) : null;
    }
    if (s) {
      b = Je(b, c.right, d, e);
      if (null != b || null != e[0]) {
        if (c.right instanceof Y) {
          if (e = c.key, d = c.val, c = c.left, b instanceof X) {
            c = new X(e, d, c, b.ra(), null);
          } else {
            if (c instanceof Y) {
              c = Ce(e, d, c.ab(), b);
            } else {
              if (c instanceof X && c.right instanceof Y) {
                c = new X(c.right.key, c.right.val, Ce(c.key, c.val, c.left.ab(), c.right.left), new Y(e, d, c.right.right, b, null), null);
              } else {
                if (s) {
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
}, Me = function Le(b, c, d, e) {
  var f = c.key, h = b.a ? b.a(d, f) : b.call(null, d, f);
  return 0 === h ? c.replace(f, e, c.left, c.right) : 0 > h ? c.replace(f, c.val, Le(b, c.left, d, e), c.right) : s ? c.replace(f, c.val, c.left, Le(b, c.right, d, e)) : null;
};
function Ne(a, b, c, d, e) {
  this.W = a;
  this.za = b;
  this.f = c;
  this.g = d;
  this.j = e;
  this.o = 0;
  this.i = 418776847;
}
g = Ne.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Bc(this);
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  a = Oe(this, b);
  return null != a ? a.val : c;
};
g.ma = function(a, b, c) {
  a = [null];
  var d = Ge(this.W, this.za, b, c, a);
  return null == d ? (a = M.a(a, 0), A.a(c, a.val) ? this : new Ne(this.W, Me(this.W, this.za, b, c), this.f, this.g, null)) : new Ne(this.W, d.ra(), this.f + 1, this.g, null);
};
g.Ma = function(a, b) {
  return null != Oe(this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return ic(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : qc.b(Aa, this, b);
};
g.Sa = function() {
  return 0 < this.f ? new Be(null, Ae(this.za, null, !1), !1, this.f, null) : null;
};
g.toString = function() {
  return Bb(this);
};
function Oe(a, b) {
  for (var c = a.za;;) {
    if (null != c) {
      var d = a.W.a ? a.W.a(b, c.key) : a.W.call(null, b, c.key);
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
g.Bb = function(a, b) {
  return 0 < this.f ? new Be(null, Ae(this.za, null, b), b, this.f, null) : null;
};
g.Cb = function(a, b, c) {
  if (0 < this.f) {
    a = null;
    for (var d = this.za;;) {
      if (null != d) {
        var e = this.W.a ? this.W.a(b, d.key) : this.W.call(null, b, d.key);
        if (0 === e) {
          return new Be(null, Xb.a(a, d), c, -1, null);
        }
        if (p(c)) {
          0 > e ? (a = Xb.a(a, d), d = d.left) : d = d.right;
        } else {
          if (s) {
            0 < e ? (a = Xb.a(a, d), d = d.right) : d = d.left;
          } else {
            return null;
          }
        }
      } else {
        return null == a ? null : new Be(null, a, c, -1, null);
      }
    }
  } else {
    return null;
  }
};
g.Ab = function(a, b) {
  return Cc.c ? Cc.c(b) : Cc.call(null, b);
};
g.zb = function() {
  return this.W;
};
g.B = function() {
  return 0 < this.f ? new Be(null, Ae(this.za, null, !0), !0, this.f, null) : null;
};
g.F = function() {
  return this.f;
};
g.r = function(a, b) {
  return $d(this, b);
};
g.C = function(a, b) {
  return new Ne(this.W, this.za, this.f, b, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(Pe, this.g);
};
g.Ja = function(a, b) {
  var c = [null], d = Ke(this.W, this.za, b, c);
  return null == d ? null == M.a(c, 0) ? this : new Ne(this.W, null, 0, this.g, null) : new Ne(this.W, d.ra(), this.f - 1, this.g, null);
};
var Pe = new Ne(Db, null, 0, null, 0), Qe = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = D(a), e = tb(ee);;) {
      if (b) {
        a = I(I(b));
        var f = E(b), b = Ub(b), e = wb(e, f, b), b = a;
      } else {
        return vb(e);
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), Re = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = Pe;;) {
      if (a) {
        var e = I(I(a)), b = O.b(b, E(a), Ub(a));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function Se(a, b) {
  this.Ca = a;
  this.da = b;
  this.o = 0;
  this.i = 32374988;
}
g = Se.prototype;
g.s = function() {
  return Ob(this);
};
g.Z = function() {
  var a = this.Ca, a = (a ? a.i & 128 || a.Qb || (a.i ? 0 : r(Ga, a)) : r(Ga, a)) ? this.Ca.Z(null) : I(this.Ca);
  return null == a ? null : new Se(a, this.da);
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Sb.a(b, this);
};
g.N = function(a, b, c) {
  return Sb.b(b, c, this);
};
g.B = function() {
  return this;
};
g.O = function() {
  return this.Ca.O(null).Ra(null);
};
g.R = function() {
  var a = this.Ca, a = (a ? a.i & 128 || a.Qb || (a.i ? 0 : r(Ga, a)) : r(Ga, a)) ? this.Ca.Z(null) : I(this.Ca);
  return null != a ? new Se(a, this.da) : H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new Se(this.Ca, b);
};
g.w = function() {
  return this.da;
};
g.G = function() {
  return Tb(H, this.da);
};
function Cc(a) {
  return Pa(a);
}
function Dc(a) {
  return Qa(a);
}
function Te(a, b, c) {
  this.g = a;
  this.Ga = b;
  this.j = c;
  this.o = 4;
  this.i = 15077647;
}
g = Te.prototype;
g.Na = function() {
  return new Ue(tb(this.Ga));
};
g.s = function() {
  var a = this.j;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = D(this);;) {
      if (b) {
        var c = E(b), a = (a + B(c)) % 4503599627370496, b = I(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.j = a;
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  return Ja(this.Ga, b) ? b : c;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.A = function(a, b) {
  return new Te(this.g, O.b(this.Ga, b, null), null);
};
g.toString = function() {
  return Bb(this);
};
g.B = function() {
  var a = D(this.Ga);
  return a ? new Se(a, null) : null;
};
g.Rb = function(a, b) {
  return new Te(this.g, Ma(this.Ga, b), null);
};
g.F = function() {
  return wa(this.Ga);
};
g.r = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.i & 4096 || b.xc ? !0 : b.i ? !1 : r(Ra, b) : r(Ra, b)) && L(c) === L(b) && dd(function(a) {
    return oc(c, a);
  }, b);
};
g.C = function(a, b) {
  return new Te(b, this.Ga, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(Ve, this.g);
};
var Ve = new Te(null, fe, 0);
function We(a) {
  var b = a.length;
  if (b <= de) {
    for (var c = 0, d = tb(fe);;) {
      if (c < b) {
        var e = c + 1, d = wb(d, a[c], null), c = e
      } else {
        return new Te(null, vb(d), null);
      }
    }
  } else {
    for (c = 0, d = tb(Ve);;) {
      if (c < b) {
        e = c + 1, d = ub(d, a[c]), c = e;
      } else {
        return vb(d);
      }
    }
  }
}
function Ue(a) {
  this.ya = a;
  this.i = 259;
  this.o = 136;
}
g = Ue.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return Ia.b(this.ya, c, lc) === lc ? null : c;
      case 3:
        return Ia.b(this.ya, c, lc) === lc ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return Ia.b(this.ya, a, lc) === lc ? null : a;
};
g.a = function(a, b) {
  return Ia.b(this.ya, a, lc) === lc ? b : a;
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  return Ia.b(this.ya, b, lc) === lc ? c : b;
};
g.F = function() {
  return L(this.ya);
};
g.Va = function(a, b) {
  this.ya = wb(this.ya, b, null);
  return this;
};
g.Wa = function() {
  return new Te(null, vb(this.ya), null);
};
function Mc(a) {
  if (a && (a.o & 4096 || a.ec)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([u("Doesn't support name: "), u(a)].join(""));
}
var Ye = function Xe(b, c) {
  return new T(null, function() {
    var d = D(c);
    return d ? p(b.c ? b.c(E(d)) : b.call(null, E(d))) ? K(E(d), Xe(b, G(d))) : null : null;
  }, null, null);
};
function Ze(a, b, c) {
  return function(d) {
    var e = nb(a);
    return b.a ? b.a(e.a ? e.a(mb(a, d), c) : e.call(null, mb(a, d), c), 0) : b.call(null, e.a ? e.a(mb(a, d), c) : e.call(null, mb(a, d), c), 0);
  };
}
var $e = function() {
  function a(a, b, c, h, k) {
    var l = lb(a, c, !0);
    if (p(l)) {
      var n = M.b(l, 0, null);
      return Ye(Ze(a, h, k), p(Ze(a, b, c).call(null, n)) ? l : I(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Ze(a, b, c);
    return p(We([tc, uc]).call(null, b)) ? (a = lb(a, c, !0), p(a) ? (b = M.b(a, 0, null), p(h.c ? h.c(b) : h.call(null, b)) ? a : I(a)) : null) : Ye(h, kb(a, !0));
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.H = a;
  return c;
}(), af = function() {
  function a(a, b, c, h, k) {
    var l = lb(a, k, !1);
    if (p(l)) {
      var n = M.b(l, 0, null);
      return Ye(Ze(a, b, c), p(Ze(a, h, k).call(null, n)) ? l : I(l));
    }
    return null;
  }
  function b(a, b, c) {
    var h = Ze(a, b, c);
    return p(We([rc, sc]).call(null, b)) ? (a = lb(a, c, !1), p(a) ? (b = M.b(a, 0, null), p(h.c ? h.c(b) : h.call(null, b)) ? a : I(a)) : null) : Ye(h, kb(a, !1));
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.H = a;
  return c;
}();
function bf(a, b, c, d, e) {
  this.g = a;
  this.start = b;
  this.end = c;
  this.step = d;
  this.j = e;
  this.o = 0;
  this.i = 32375006;
}
g = bf.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Ob(this);
};
g.Z = function() {
  return 0 < this.step ? this.start + this.step < this.end ? new bf(this.g, this.start + this.step, this.end, this.step, null) : null : this.start + this.step > this.end ? new bf(this.g, this.start + this.step, this.end, this.step, null) : null;
};
g.A = function(a, b) {
  return K(b, this);
};
g.toString = function() {
  return Bb(this);
};
g.M = function(a, b) {
  return Kb.a(this, b);
};
g.N = function(a, b, c) {
  return Kb.b(this, b, c);
};
g.B = function() {
  return 0 < this.step ? this.start < this.end ? this : null : this.start > this.end ? this : null;
};
g.F = function() {
  return pa(gb(this)) ? 0 : Math.ceil((this.end - this.start) / this.step);
};
g.O = function() {
  return null == gb(this) ? null : this.start;
};
g.R = function() {
  return null != gb(this) ? new bf(this.g, this.start + this.step, this.end, this.step, null) : H;
};
g.r = function(a, b) {
  return Qb(this, b);
};
g.C = function(a, b) {
  return new bf(b, this.start, this.end, this.step, this.j);
};
g.w = function() {
  return this.g;
};
g.p = function(a, b) {
  if (b < wa(this)) {
    return this.start + b * this.step;
  }
  if (this.start > this.end && 0 === this.step) {
    return this.start;
  }
  throw Error("Index out of bounds");
};
g.X = function(a, b, c) {
  return b < wa(this) ? this.start + b * this.step : this.start > this.end && 0 === this.step ? this.start : c;
};
g.G = function() {
  return Tb(H, this.g);
};
var cf = function() {
  function a(a, b, c) {
    return new bf(null, a, b, c, null);
  }
  function b(a, b) {
    return e.b(a, b, 1);
  }
  function c(a) {
    return e.b(0, a, 1);
  }
  function d() {
    return e.b(0, Number.MAX_VALUE, 1);
  }
  var e = null, e = function(e, h, k) {
    switch(arguments.length) {
      case 0:
        return d.call(this);
      case 1:
        return c.call(this, e);
      case 2:
        return b.call(this, e, h);
      case 3:
        return a.call(this, e, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.n = d;
  e.c = c;
  e.a = b;
  e.b = a;
  return e;
}();
function df(a) {
  var b = ef.exec(a);
  return A.a(E(b), a) ? 1 === L(b) ? E(b) : Od(b) : null;
}
function ff(a, b) {
  var c = a.exec(b);
  return null == c ? null : 1 === L(c) ? E(c) : Od(c);
}
function gf(a) {
  a = ff(/^(?:\(\?([idmsux]*)\))?(.*)/, a);
  M.b(a, 0, null);
  M.b(a, 1, null);
  M.b(a, 2, null);
}
function hf(a, b, c, d, e, f, h) {
  var k = ga;
  try {
    ga = null == ga ? null : ga - 1;
    if (null != ga && 0 > ga) {
      return ob(a, "#");
    }
    ob(a, c);
    D(h) && (b.b ? b.b(E(h), a, f) : b.call(null, E(h), a, f));
    for (var l = I(h), n = oa.c(f);l && (null == n || 0 !== n);) {
      ob(a, d);
      b.b ? b.b(E(l), a, f) : b.call(null, E(l), a, f);
      var q = I(l);
      c = n - 1;
      l = q;
      n = c;
    }
    p(oa.c(f)) && (ob(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return ob(a, e);
  } finally {
    ga = k;
  }
}
var jf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = D(b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = f.p(null, k);
        ob(a, l);
        k += 1;
      } else {
        if (e = D(e)) {
          f = e, Q(f) ? (e = y(f), h = z(f), f = e, l = L(e), e = h, h = l) : (l = E(f), ob(a, l), e = I(f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.k = 1;
  a.h = function(a) {
    var d = E(a);
    a = G(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}(), kf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function lf(a) {
  return[u('"'), u(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return kf[a];
  })), u('"')].join("");
}
var of = function mf(b, c, d) {
  if (null == b) {
    return ob(c, "nil");
  }
  if (void 0 === b) {
    return ob(c, "#\x3cundefined\x3e");
  }
  if (s) {
    p(function() {
      var c = N.a(d, la);
      return p(c) ? (c = b ? b.i & 131072 || b.dc ? !0 : b.i ? !1 : r(Ya, b) : r(Ya, b)) ? cc(b) : c : c;
    }()) && (ob(c, "^"), mf(cc(b), c, d), ob(c, " "));
    if (null == b) {
      return ob(c, "nil");
    }
    if (b.Wb) {
      return b.gc(c);
    }
    if (b && (b.i & 2147483648 || b.I)) {
      return b.q(null, c, d);
    }
    if (ra(b) === Boolean || "number" === typeof b) {
      return ob(c, "" + u(b));
    }
    if (null != b && b.constructor === Object) {
      return ob(c, "#js "), nf.l ? nf.l(id.a(function(c) {
        return new U(null, 2, 5, V, [Nc.c(c), b[c]], null);
      }, jc(b)), mf, c, d) : nf.call(null, id.a(function(c) {
        return new U(null, 2, 5, V, [Nc.c(c), b[c]], null);
      }, jc(b)), mf, c, d);
    }
    if (b instanceof Array) {
      return hf(c, mf, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return p(ka.c(d)) ? ob(c, lf(b)) : ob(c, b);
    }
    if (ac(b)) {
      return jf.d(c, J(["#\x3c", "" + u(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + u(b);;) {
          if (L(d) < c) {
            d = [u("0"), u(d)].join("");
          } else {
            return d;
          }
        }
      };
      return jf.d(c, J(['#inst "', "" + u(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? jf.d(c, J(['#"', b.source, '"'], 0)) : (b ? b.i & 2147483648 || b.I || (b.i ? 0 : r(pb, b)) : r(pb, b)) ? qb(b, c, d) : s ? jf.d(c, J(["#\x3c", "" + u(b), "\x3e"], 0)) : null;
  }
  return null;
}, pf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || pa(D(a))) {
      b = "";
    } else {
      b = u;
      var e = ha(), f = new ea;
      a: {
        var h = new Ab(f);
        of(E(a), h, e);
        a = D(I(a));
        for (var k = null, l = 0, n = 0;;) {
          if (n < l) {
            var q = k.p(null, n);
            ob(h, " ");
            of(q, h, e);
            n += 1;
          } else {
            if (a = D(a)) {
              k = a, Q(k) ? (a = y(k), l = z(k), k = a, q = L(a), a = l, l = q) : (q = E(k), ob(h, " "), of(q, h, e), a = I(k), k = null, l = 0), n = 0;
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
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function nf(a, b, c, d) {
  return hf(c, function(a, c, d) {
    b.b ? b.b(Pa(a), c, d) : b.call(null, Pa(a), c, d);
    ob(c, " ");
    return b.b ? b.b(Qa(a), c, d) : b.call(null, Qa(a), c, d);
  }, "{", ", ", "}", d, D(a));
}
Se.prototype.I = !0;
Se.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Ib.prototype.I = !0;
Ib.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Rd.prototype.I = !0;
Rd.prototype.q = function(a, b, c) {
  return hf(b, of, "[", " ", "]", c, this);
};
Tc.prototype.I = !0;
Tc.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Ne.prototype.I = !0;
Ne.prototype.q = function(a, b, c) {
  return nf(this, of, b, c);
};
ia.prototype.I = !0;
ia.prototype.q = function(a, b, c) {
  return nf(this, of, b, c);
};
Wd.prototype.I = !0;
Wd.prototype.q = function(a, b, c) {
  return hf(b, of, "#queue [", " ", "]", c, D(this));
};
T.prototype.I = !0;
T.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Pb.prototype.I = !0;
Pb.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
ve.prototype.I = !0;
ve.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
X.prototype.I = !0;
X.prototype.q = function(a, b, c) {
  return hf(b, of, "[", " ", "]", c, this);
};
Pd.prototype.I = !0;
Pd.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
xe.prototype.I = !0;
xe.prototype.q = function(a, b, c) {
  return nf(this, of, b, c);
};
Te.prototype.I = !0;
Te.prototype.q = function(a, b, c) {
  return hf(b, of, "#{", " ", "}", c, this);
};
U.prototype.I = !0;
U.prototype.q = function(a, b, c) {
  return hf(b, of, "[", " ", "]", c, this);
};
Ec.prototype.I = !0;
Ec.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
be.prototype.I = !0;
be.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Fc.prototype.I = !0;
Fc.prototype.q = function(a, b) {
  return ob(b, "()");
};
Y.prototype.I = !0;
Y.prototype.q = function(a, b, c) {
  return hf(b, of, "[", " ", "]", c, this);
};
Jc.prototype.I = !0;
Jc.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
bf.prototype.I = !0;
bf.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
we.prototype.I = !0;
we.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
Be.prototype.I = !0;
Be.prototype.q = function(a, b, c) {
  return hf(b, of, "(", " ", ")", c, this);
};
U.prototype.fb = !0;
U.prototype.gb = function(a, b) {
  return pc.a(this, b);
};
Rd.prototype.fb = !0;
Rd.prototype.gb = function(a, b) {
  return pc.a(this, b);
};
R.prototype.fb = !0;
R.prototype.gb = function(a, b) {
  return Cb(this, b);
};
Fb.prototype.fb = !0;
Fb.prototype.gb = function(a, b) {
  return Cb(this, b);
};
function qf(a, b, c, d) {
  this.state = a;
  this.g = b;
  this.nc = c;
  this.qa = d;
  this.i = 2153938944;
  this.o = 2;
}
g = qf.prototype;
g.s = function() {
  return this[aa] || (this[aa] = ++ba);
};
g.Eb = function(a, b, c) {
  a = D(this.qa);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.p(null, f), k = M.b(h, 0, null), h = M.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = D(a)) {
        Q(a) ? (d = y(a), a = z(a), k = d, e = L(d), d = k) : (d = E(a), k = M.b(d, 0, null), h = M.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = I(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.Db = function(a, b, c) {
  return this.qa = O.b(this.qa, b, c);
};
g.q = function(a, b, c) {
  ob(b, "#\x3cAtom: ");
  of(this.state, b, c);
  return ob(b, "\x3e");
};
g.w = function() {
  return this.g;
};
g.Mb = function() {
  return this.state;
};
g.r = function(a, b) {
  return this === b;
};
var sf = function() {
  function a(a) {
    return new qf(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = J(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = mc(c) ? P.a(Qe, c) : c, e = N.a(d, rf), d = N.a(d, la);
      return new qf(a, d, e, null);
    }
    a.k = 1;
    a.h = function(a) {
      var c = E(a);
      a = G(a);
      return b(c, a);
    };
    a.d = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.d(b, J(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.k = 1;
  b.h = c.h;
  b.c = a;
  b.d = c.d;
  return b;
}();
function tf(a, b) {
  var c = a.nc;
  if (null != c && !p(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([u("Assert failed: "), u("Validator rejected reference state"), u("\n"), u(pf.d(J([Ic(new Fb(null, "validate", "validate", 1233162959, null), new Fb(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.qa && rb(a, c, b);
  return b;
}
var uf = function() {
  function a(a, b, c, d, e) {
    return tf(a, b.l ? b.l(a.state, c, d, e) : b.call(null, a.state, c, d, e));
  }
  function b(a, b, c, d) {
    return tf(a, b.b ? b.b(a.state, c, d) : b.call(null, a.state, c, d));
  }
  function c(a, b, c) {
    return tf(a, b.a ? b.a(a.state, c) : b.call(null, a.state, c));
  }
  function d(a, b) {
    return tf(a, b.c ? b.c(a.state) : b.call(null, a.state));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, F) {
      var S = null;
      5 < arguments.length && (S = J(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, S);
    }
    function b(a, c, d, e, f, h) {
      return tf(a, P.d(c, a.state, d, e, f, J([h], 0)));
    }
    a.k = 5;
    a.h = function(a) {
      var c = E(a);
      a = I(a);
      var d = E(a);
      a = I(a);
      var e = E(a);
      a = I(a);
      var f = E(a);
      a = I(a);
      var h = E(a);
      a = G(a);
      return b(c, d, e, f, h, a);
    };
    a.d = b;
    return a;
  }(), e = function(e, k, l, n, q, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, n);
      case 5:
        return a.call(this, e, k, l, n, q);
      default:
        return f.d(e, k, l, n, q, J(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.k = 5;
  e.h = f.h;
  e.a = d;
  e.b = c;
  e.l = b;
  e.H = a;
  e.d = f.d;
  return e;
}();
function vf() {
  var a = wf();
  return x(a);
}
function xf(a, b, c) {
  sb(a, b, c);
}
var yf = null, zf = function() {
  function a(a) {
    null == yf && (yf = sf.c(0));
    return Hb.c([u(a), u(uf.a(yf, Jb))].join(""));
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
  c.n = b;
  c.c = a;
  return c;
}(), Af = {};
function Bf(a) {
  if (a ? a.ac : a) {
    return a.ac(a);
  }
  var b;
  b = Bf[m(null == a ? null : a)];
  if (!b && (b = Bf._, !b)) {
    throw t("IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Cf(a) {
  return(a ? p(p(null) ? null : a.$b) || (a.Vb ? 0 : r(Af, a)) : r(Af, a)) ? Bf(a) : "string" === typeof a || "number" === typeof a || a instanceof R || a instanceof Fb ? Df.c ? Df.c(a) : Df.call(null, a) : pf.d(J([a], 0));
}
var Df = function Ef(b) {
  if (null == b) {
    return null;
  }
  if (b ? p(p(null) ? null : b.$b) || (b.Vb ? 0 : r(Af, b)) : r(Af, b)) {
    return Bf(b);
  }
  if (b instanceof R) {
    return Mc(b);
  }
  if (b instanceof Fb) {
    return "" + u(b);
  }
  if (hc(b)) {
    var c = {};
    b = D(b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.p(null, f), k = M.b(h, 0, null), h = M.b(h, 1, null);
        c[Cf(k)] = Ef(h);
        f += 1;
      } else {
        if (b = D(b)) {
          Q(b) ? (e = y(b), b = z(b), d = e, e = L(e)) : (e = E(b), d = M.b(e, 0, null), e = M.b(e, 1, null), c[Cf(d)] = Ef(e), b = I(b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (null == b ? 0 : b ? b.i & 8 || b.qc || (b.i ? 0 : r(za, b)) : r(za, b)) {
    c = [];
    b = D(id.a(Ef, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = d.p(null, f), c.push(k), f += 1;
      } else {
        if (b = D(b)) {
          d = b, Q(d) ? (b = y(d), f = z(d), d = b, e = L(b), b = f) : (b = E(d), c.push(b), b = I(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return s ? b : null;
}, wc = function() {
  function a(a) {
    return(Math.random.n ? Math.random.n() : Math.random.call(null)) * a;
  }
  function b() {
    return c.c(1);
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
  c.n = b;
  c.c = a;
  return c;
}(), xc = function(a) {
  return Math.floor.c ? Math.floor.c((Math.random.n ? Math.random.n() : Math.random.call(null)) * a) : Math.floor.call(null, (Math.random.n ? Math.random.n() : Math.random.call(null)) * a);
}, Ff = null;
function wf() {
  null == Ff && (Ff = sf.c(new ia(null, 3, [Gf, fe, Hf, fe, If, fe], null)));
  return Ff;
}
var Jf = function() {
  function a(a, b, f) {
    var h = A.a(b, f);
    if (!h && !(h = oc(If.c(a).call(null, b), f)) && (h = ic(f)) && (h = ic(b))) {
      if (h = L(f) === L(b)) {
        for (var h = !0, k = 0;;) {
          if (h && k !== L(f)) {
            h = c.b(a, b.c ? b.c(k) : b.call(null, k), f.c ? f.c(k) : f.call(null, k)), k += 1;
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
    return c.b(vf(), a, b);
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
  c.b = a;
  return c;
}(), Kf = function() {
  function a(a, b) {
    return cd(N.a(Gf.c(a), b));
  }
  function b(a) {
    return c.a(vf(), a);
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
function Lf(a, b, c, d) {
  uf.a(a, function() {
    return x(b);
  });
  uf.a(c, function() {
    return x(d);
  });
}
var Nf = function Mf(b, c, d) {
  var e = x(d).call(null, b), e = p(p(e) ? e.c ? e.c(c) : e.call(null, c) : e) ? !0 : null;
  if (p(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf.c(c);;) {
      if (0 < L(e)) {
        Mf(b, E(e), d), e = G(e);
      } else {
        return null;
      }
    }
  }();
  if (p(e)) {
    return e;
  }
  e = function() {
    for (var e = Kf.c(b);;) {
      if (0 < L(e)) {
        Mf(E(e), c, d), e = G(e);
      } else {
        return null;
      }
    }
  }();
  return p(e) ? e : !1;
};
function Of(a, b, c) {
  c = Nf(a, b, c);
  return p(c) ? c : Jf.a(a, b);
}
var Qf = function Pf(b, c, d, e, f, h, k) {
  var l = qc.b(function(e, h) {
    var k = M.b(h, 0, null);
    M.b(h, 1, null);
    if (Jf.b(x(d), c, k)) {
      var l;
      l = (l = null == e) ? l : Of(k, E(e), f);
      l = p(l) ? h : e;
      if (!p(Of(E(l), k, f))) {
        throw Error([u("Multiple methods in multimethod '"), u(b), u("' match dispatch value: "), u(c), u(" -\x3e "), u(k), u(" and "), u(E(l)), u(", and neither is preferred")].join(""));
      }
      return l;
    }
    return e;
  }, null, x(e));
  if (p(l)) {
    if (A.a(x(k), x(d))) {
      return uf.l(h, O, c, Ub(l)), Ub(l);
    }
    Lf(h, e, k, d);
    return Pf(b, c, d, e, f, h, k);
  }
  return null;
};
function Rf(a, b) {
  if (a ? a.Pb : a) {
    return a.Pb(0, b);
  }
  var c;
  c = Rf[m(null == a ? null : a)];
  if (!c && (c = Rf._, !c)) {
    throw t("IMultiFn.-get-method", a);
  }
  return c.call(null, a, b);
}
function Sf(a, b) {
  if (a ? a.Ob : a) {
    return a.Ob(0, b);
  }
  var c;
  c = Sf[m(null == a ? null : a)];
  if (!c && (c = Sf._, !c)) {
    throw t("IMultiFn.-dispatch", a);
  }
  return c.call(null, a, b);
}
function Tf(a, b, c, d, e, f, h, k) {
  this.name = a;
  this.ic = b;
  this.hc = c;
  this.ib = d;
  this.Za = e;
  this.lc = f;
  this.jb = h;
  this.eb = k;
  this.i = 4194304;
  this.o = 256;
}
g = Tf.prototype;
g.s = function() {
  return this[aa] || (this[aa] = ++ba);
};
function Uf(a, b) {
  var c = Vf;
  uf.l(c.Za, O, a, b);
  Lf(c.jb, c.Za, c.eb, c.ib);
}
g.Pb = function(a, b) {
  A.a(x(this.eb), x(this.ib)) || Lf(this.jb, this.Za, this.eb, this.ib);
  var c = x(this.jb).call(null, b);
  if (p(c)) {
    return c;
  }
  c = Qf(this.name, b, this.ib, this.Za, this.lc, this.jb, this.eb);
  return p(c) ? c : x(this.Za).call(null, this.hc);
};
g.Ob = function(a, b) {
  var c = this.name, d = P.a(this.ic, b), e = Rf(this, d);
  if (!p(e)) {
    throw Error([u("No method in multimethod '"), u(c), u("' for dispatch value: "), u(d)].join(""));
  }
  return P.a(e, b);
};
g.call = function() {
  function a(a, b) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return Sf(this, e);
  }
  function b(a, b) {
    return Sf(this, b);
  }
  a.k = 1;
  a.h = function(a) {
    E(a);
    a = G(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
g.apply = function(a, b) {
  return Sf(this, b);
};
function Wf(a) {
  this.Gb = a;
  this.o = 0;
  this.i = 2153775104;
}
Wf.prototype.s = function() {
  return ca(pf.d(J([this], 0)));
};
Wf.prototype.q = function(a, b) {
  return ob(b, [u('#uuid "'), u(this.Gb), u('"')].join(""));
};
Wf.prototype.r = function(a, b) {
  return b instanceof Wf && this.Gb === b.Gb;
};
var na = new R(null, "dup", "dup"), Xf = new R(null, "r", "r"), Yf = new R(null, "href", "href"), Zf = new R(null, "fill-opacity", "fill-opacity"), Hf = new R(null, "descendants", "descendants"), Eb = new R(null, "default", "default"), $f = new R(null, "border", "border"), ag = new R(null, "text", "text"), bg = new R(null, "data", "data"), cg = new R(null, "margin", "margin"), dg = new R(null, "width", "width"), eg = new R(null, "focus-select", "focus-select"), fg = new R(null, "padding", "padding"), 
gg = new R(null, "scroll-to", "scroll-to"), hg = new R(null, "margin-left", "margin-left"), ig = new R("tailrecursion.javelin", "none", "tailrecursion.javelin/none"), jg = new R(null, "on-change", "on-change"), kg = new R(null, "y", "y"), lg = new R(null, "chart", "chart"), mg = new R(null, "class", "class"), ng = new R(null, "x", "x"), og = new R(null, "fade-toggle", "fade-toggle"), pg = new R(null, "points", "points"), Gf = new R(null, "parents", "parents"), ja = new R(null, "flush-on-newline", 
"flush-on-newline"), qg = new R(null, "hierarchy", "hierarchy"), rg = new R(null, "style", "style"), sg = new R(null, "min-x", "min-x"), tg = new R(null, "min-y", "min-y"), ug = new R(null, "max", "max"), vg = new R(null, "text-align", "text-align"), wg = new R(null, "focus", "focus"), xg = new R(null, "do-toggle", "do-toggle"), If = new R(null, "ancestors", "ancestors"), yg = new R(null, "fill", "fill"), zg = new R(null, "toggle", "toggle"), Ag = new R(null, "css", "css"), oa = new R(null, "print-length", 
"print-length"), Bg = new R(null, "type", "type"), Cg = new R(null, "max-y", "max-y"), s = new R(null, "else", "else"), ka = new R(null, "readably", "readably"), rf = new R(null, "validator", "validator"), la = new R(null, "meta", "meta"), Dg = new R(null, "stroke", "stroke"), Eg = new R(null, "min", "min"), Fg = new R(null, "step", "step"), Gg = new R(null, "cy", "cy"), Hg = new R("tailrecursion.javelin", "cell", "tailrecursion.javelin/cell"), Ig = new R("tailrecursion.priority-map", "not-found", 
"tailrecursion.priority-map/not-found"), Jg = new R(null, "cx", "cx"), Kg = new R(null, "scrollTop", "scrollTop"), Lg = new R(null, "font-family", "font-family"), Mg = new R(null, "max-x", "max-x"), Ng = new R(null, "id", "id"), Og = new R(null, "value", "value"), Pg = new R(null, "stroke-width", "stroke-width"), Qg = new R(null, "select", "select"), Rg = new R(null, "attr", "attr"), Sg = new R(null, "height", "height"), Tg = new R(null, "slide-toggle", "slide-toggle"), Ug = new R(null, "on-click", 
"on-click"), Vg = new R("tailrecursion.hoplon", "default", "tailrecursion.hoplon/default");
var Wg = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    throw Error(P.a(u, b));
  }
  a.k = 1;
  a.h = function(a) {
    E(a);
    a = G(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
gf("([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+)|0[0-9]+)(N)?");
gf("([-+]?[0-9]+)/([0-9]+)");
gf("([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?");
gf("[:]?([^0-9/].*/)?([^0-9/][^/]*)");
gf("[0-9A-Fa-f]{2}");
gf("[0-9A-Fa-f]{4}");
function Xg(a) {
  if (A.a(3, L(a))) {
    return a;
  }
  if (3 < L(a)) {
    return Ac.b(a, 0, 3);
  }
  if (s) {
    for (a = new ea(a);;) {
      if (3 > a.Ha.length) {
        a = a.append("0");
      } else {
        return a.toString();
      }
    }
  } else {
    return null;
  }
}
var Yg = function() {
  var a = new U(null, 13, 5, V, [null, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null), b = new U(null, 13, 5, V, [null, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], null);
  return function(c, d) {
    return N.a(p(d) ? b : a, c);
  };
}(), ef = /(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;
function Zg(a) {
  a = parseInt(a);
  return pa(isNaN(a)) ? a : null;
}
function $g(a, b, c, d) {
  a <= b && b <= c || Wg.d(null, J([[u(d), u(" Failed:  "), u(a), u("\x3c\x3d"), u(b), u("\x3c\x3d"), u(c)].join("")], 0));
  return b;
}
function ah(a) {
  var b = df(a);
  M.b(b, 0, null);
  var c = M.b(b, 1, null), d = M.b(b, 2, null), e = M.b(b, 3, null), f = M.b(b, 4, null), h = M.b(b, 5, null), k = M.b(b, 6, null), l = M.b(b, 7, null), n = M.b(b, 8, null), q = M.b(b, 9, null), v = M.b(b, 10, null);
  if (pa(b)) {
    return Wg.d(null, J([[u("Unrecognized date/time syntax: "), u(a)].join("")], 0));
  }
  a = Zg(c);
  var b = function() {
    var a = Zg(d);
    return p(a) ? a : 1;
  }(), c = function() {
    var a = Zg(e);
    return p(a) ? a : 1;
  }(), C = function() {
    var a = Zg(f);
    return p(a) ? a : 0;
  }(), F = function() {
    var a = Zg(h);
    return p(a) ? a : 0;
  }(), S = function() {
    var a = Zg(k);
    return p(a) ? a : 0;
  }(), W = function() {
    var a = Zg(Xg(l));
    return p(a) ? a : 0;
  }(), n = (A.a(n, "-") ? -1 : 1) * (60 * function() {
    var a = Zg(q);
    return p(a) ? a : 0;
  }() + function() {
    var a = Zg(v);
    return p(a) ? a : 0;
  }());
  return new U(null, 8, 5, V, [a, $g(1, b, 12, "timestamp month field must be in range 1..12"), $g(1, c, Yg.a ? Yg.a(b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)) : Yg.call(null, b, 0 === (a % 4 + 4) % 4 && (0 !== (a % 100 + 100) % 100 || 0 === (a % 400 + 400) % 400)), "timestamp day field must be in range 1..last day in month"), $g(0, C, 23, "timestamp hour field must be in range 0..23"), $g(0, F, 59, "timestamp minute field must be in range 0..59"), $g(0, 
  S, A.a(F, 59) ? 60 : 59, "timestamp second field must be in range 0..60"), $g(0, W, 999, "timestamp millisecond field must be in range 0..999"), n], null);
}
var bh = sf.c(new ia(null, 4, ["inst", function(a) {
  var b;
  if ("string" === typeof a) {
    if (b = ah(a), p(b)) {
      a = M.b(b, 0, null);
      var c = M.b(b, 1, null), d = M.b(b, 2, null), e = M.b(b, 3, null), f = M.b(b, 4, null), h = M.b(b, 5, null), k = M.b(b, 6, null);
      b = M.b(b, 7, null);
      b = new Date(Date.UTC(a, c - 1, d, e, f, h, k) - 6E4 * b);
    } else {
      b = Wg.d(null, J([[u("Unrecognized date/time syntax: "), u(a)].join("")], 0));
    }
  } else {
    b = Wg.d(null, J(["Instance literal expects a string for its timestamp."], 0));
  }
  return b;
}, "uuid", function(a) {
  return "string" === typeof a ? new Wf(a) : Wg.d(null, J(["UUID literal expects a string as its representation."], 0));
}, "queue", function(a) {
  return ic(a) ? ud(Xd, a) : Wg.d(null, J(["Queue literal expects a vector for its elements."], 0));
}, "js", function(a) {
  if (ic(a)) {
    var b = [];
    a = D(a);
    for (var c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.p(null, e);
        b.push(f);
        e += 1;
      } else {
        if (a = D(a)) {
          c = a, Q(c) ? (a = y(c), e = z(c), c = a, d = L(a), a = e) : (a = E(c), b.push(a), a = I(c), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  if (hc(a)) {
    b = {};
    a = D(a);
    c = null;
    for (e = d = 0;;) {
      if (e < d) {
        var h = c.p(null, e), f = M.b(h, 0, null), h = M.b(h, 1, null);
        b[Mc(f)] = h;
        e += 1;
      } else {
        if (a = D(a)) {
          Q(a) ? (d = y(a), a = z(a), c = d, d = L(d)) : (d = E(a), c = M.b(d, 0, null), d = M.b(d, 1, null), b[Mc(c)] = d, a = I(a), c = null, d = 0), e = 0;
        } else {
          break;
        }
      }
    }
    return b;
  }
  return s ? Wg.d(null, J([[u("JS literal expects a vector or map containing "), u("only string or unqualified keyword keys")].join("")], 0)) : null;
}], null));
sf.c(null);
function ch(a, b, c, d) {
  this.L = a;
  this.Q = b;
  this.g = c;
  this.j = d;
  this.o = 0;
  this.i = 2565220111;
}
g = ch.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Bc(this);
};
g.t = function(a, b) {
  return N.a(this.Q, b);
};
g.u = function(a, b, c) {
  return N.b(this.Q, b, c);
};
g.ma = function(a, b, c) {
  a = N.b(this.Q, b, null);
  if (p(a)) {
    if (A.a(a, c)) {
      return this;
    }
    var d = N.a(this.L, a);
    return A.a(L(d), 1) ? new ch(O.b($b.a(this.L, a), c, Xb.a(N.b(this.L, c, Ve), b)), O.b(this.Q, b, c), this.g, null) : new ch(O.d(this.L, a, ec.a(N.a(this.L, a), b), J([c, Xb.a(N.b(this.L, c, Ve), b)], 0)), O.b(this.Q, b, c), this.g, null);
  }
  return new ch(O.b(this.L, c, Xb.a(N.b(this.L, c, Ve), b)), O.b(this.Q, b, c), this.g, null);
};
g.Ma = function(a, b) {
  return oc(this.Q, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.t(null, c);
      case 3:
        return this.u(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.c = function(a) {
  return this.t(null, a);
};
g.a = function(a, b) {
  return this.u(null, a, b);
};
g.q = function(a, b, c) {
  return hf(b, function(a) {
    return hf(b, of, "", " ", "", c, a);
  }, "#tailrecursion.priority-map {", ", ", "}", c, this);
};
g.A = function(a, b) {
  return ic(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : qc.b(Aa, this, b);
};
g.Sa = function() {
  var a = this;
  return D(function() {
    return function c(a) {
      return new T(null, function() {
        for (var e = a;;) {
          var f = D(e);
          if (f) {
            var h = f, k = E(h), l = M.b(k, 0, null), n = M.b(k, 1, null);
            if (f = D(function(a, c, d, e, f, h) {
              return function ma(k) {
                return new T(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = D(k);
                      if (a) {
                        if (Q(a)) {
                          var c = y(a), e = L(c), f = Rc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = w.a(c, h);
                                f.add(new U(null, 2, 5, V, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Uc(f.K(), ma(z(a))) : Uc(f.K(), null);
                        }
                        f = E(a);
                        return K(new U(null, 2, 5, V, [f, d], null), ma(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, f, h), null, null);
              };
            }(e, k, l, n, h, f)(n))) {
              return Zc.a(f, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(jb(a.L));
  }());
};
g.Bb = function(a, b) {
  return(p(b) ? D : Gc).call(null, this);
};
g.Cb = function(a, b, c) {
  var d = p(c) ? $e.b(this.L, uc, b) : af.b(this.L, sc, b);
  return D(function() {
    return function f(a) {
      return new T(null, function() {
        for (var b = a;;) {
          var c = D(b);
          if (c) {
            var d = c, q = E(d), v = M.b(q, 0, null), C = M.b(q, 1, null);
            if (c = D(function(a, b, c, d, f, h) {
              return function Na(k) {
                return new T(null, function(a, b, c) {
                  return function() {
                    for (;;) {
                      var a = D(k);
                      if (a) {
                        if (Q(a)) {
                          var b = y(a), d = L(b), f = Rc(d);
                          a: {
                            for (var h = 0;;) {
                              if (h < d) {
                                var l = w.a(b, h);
                                f.add(new U(null, 2, 5, V, [l, c], null));
                                h += 1;
                              } else {
                                b = !0;
                                break a;
                              }
                            }
                            b = void 0;
                          }
                          return b ? Uc(f.K(), Na(z(a))) : Uc(f.K(), null);
                        }
                        f = E(a);
                        return K(new U(null, 2, 5, V, [f, c], null), Na(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, b, c, d, f, h), null, null);
              };
            }(b, q, v, C, d, c)(C))) {
              return Zc.a(c, f(G(b)));
            }
            b = G(b);
          } else {
            return null;
          }
        }
      }, null, null);
    }(d);
  }());
};
g.Ab = function(a, b) {
  return Qa(b);
};
g.zb = function() {
  return Db;
};
g.B = function() {
  var a = this;
  return D(function() {
    return function c(a) {
      return new T(null, function() {
        for (var e = a;;) {
          var f = D(e);
          if (f) {
            var h = f, k = E(h), l = M.b(k, 0, null), n = M.b(k, 1, null);
            if (f = D(function(a, c, d, e, f, h) {
              return function ma(k) {
                return new T(null, function(a, c, d) {
                  return function() {
                    for (;;) {
                      var a = D(k);
                      if (a) {
                        if (Q(a)) {
                          var c = y(a), e = L(c), f = Rc(e);
                          a: {
                            for (var h = 0;;) {
                              if (h < e) {
                                var l = w.a(c, h);
                                f.add(new U(null, 2, 5, V, [l, d], null));
                                h += 1;
                              } else {
                                c = !0;
                                break a;
                              }
                            }
                            c = void 0;
                          }
                          return c ? Uc(f.K(), ma(z(a))) : Uc(f.K(), null);
                        }
                        f = E(a);
                        return K(new U(null, 2, 5, V, [f, d], null), ma(G(a)));
                      }
                      return null;
                    }
                  };
                }(a, c, d, e, f, h), null, null);
              };
            }(e, k, l, n, h, f)(n))) {
              return Zc.a(f, c(G(e)));
            }
            e = G(e);
          } else {
            return null;
          }
        }
      }, null, null);
    }(a.L);
  }());
};
g.F = function() {
  return L(this.Q);
};
g.ta = function() {
  if (0 === L(this.Q)) {
    return null;
  }
  var a = E(this.L);
  return new U(null, 2, 5, V, [E(Qa(a)), Pa(a)], null);
};
g.ua = function() {
  if (0 === L(this.Q)) {
    throw Error("Can't pop empty priority map");
  }
  var a = E(this.L), b = Qa(a), c = E(b), a = Pa(a);
  return A.a(L(b), 1) ? new ch($b.a(this.L, a), $b.a(this.Q, c), this.g, null) : new ch(O.b(this.L, a, ec.a(b, c)), $b.a(this.Q, c), this.g, null);
};
g.r = function(a, b) {
  return db(this.Q, b);
};
g.C = function(a, b) {
  return new ch(this.L, this.Q, b, this.j);
};
g.w = function() {
  return this.g;
};
g.G = function() {
  return Tb(dh, this.g);
};
g.Ja = function(a, b) {
  var c = this.Q.a ? this.Q.a(b, Ig) : this.Q.call(null, b, Ig);
  if (A.a(c, Ig)) {
    return this;
  }
  var d = this.L.c ? this.L.c(c) : this.L.call(null, c);
  return A.a(L(d), 1) ? new ch($b.a(this.L, c), $b.a(this.Q, b), this.g, null) : new ch(O.b(this.L, c, ec.a(d, b)), $b.a(this.Q, b), this.g, null);
};
var dh = new ch(Re(), fe, fe, null), eh = "" + u("tailrecursion.priority-map");
N.a(x(bh), eh);
uf.l(bh, O, eh, function(a) {
  return hc(a) ? ud(dh, a) : Wg.d(null, J(["Priority map literal expects a map for its elements."], 0));
});
var fh = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = D(a);
    for (var b = dh;;) {
      if (a) {
        var e = I(I(a)), b = O.b(b, E(a), Ub(a));
        a = e;
      } else {
        return b;
      }
    }
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function gh(a, b) {
  return function d(b) {
    var f = dc(b);
    return p(f) ? new T(null, function() {
      return K(f, d(ud(null == b ? null : Va(b), p(ed.c ? ed.c(f) : ed.call(null, f)) ? a.c ? a.c(f) : a.call(null, f) : null)));
    }, null, null) : null;
  }(Xb.a(Xd, b));
}
var hh = sf.c(0);
function ih() {
  return uf.a(hh, Jb);
}
function jh(a) {
  return p(kh.c ? kh.c(a) : kh.call(null, a)) ? x(a) : a;
}
function lh(a) {
  for (var b = fh.d(J([a, a.oa], 0));;) {
    if (D(b)) {
      a = Cc(dc(b));
      var c = a.Xb.call(null), d = bd.a(c, a.prev), e = function() {
        return function(a, b) {
          return O.b(a, b, b.oa);
        };
      }(b, a, c, d), b = null == b ? null : Va(b), f = a.la;
      d && (a.prev = c);
      b = d ? qc.b(e, b, f) : b;
    } else {
      return null;
    }
  }
}
function mh(a) {
  var b = a.bb;
  a.bb = Nd;
  a.qa = fe;
  for (var b = D(td(kh, b)), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.p(null, e);
      f.la = ec.a(f.la, a);
      e += 1;
    } else {
      if (b = D(b)) {
        c = b, Q(c) ? (b = y(c), d = z(c), c = b, f = L(b), b = d, d = f) : (f = E(c), f.la = ec.a(f.la, a), b = I(c), c = null, d = 0), e = 0;
      } else {
        break;
      }
    }
  }
}
var nh = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = M.b(b, 0, null), f = M.b(b, 1, null);
    mh(a);
    a.bb = p(e) ? Xb.a(Od(f), e) : Od(f);
    for (var f = D(td(kh, a.bb)), h = null, k = 0, l = 0;;) {
      if (l < k) {
        var n = h.p(null, l);
        n.la = Xb.a(n.la, a);
        if (n.oa > a.oa) {
          for (var n = D(gh(function() {
            return function(a) {
              return a.la;
            };
          }(f, h, k, l, n), n)), q = null, v = 0, C = 0;;) {
            if (C < v) {
              q.p(null, C).oa = ih(), C += 1;
            } else {
              if (n = D(n)) {
                q = n, Q(q) ? (n = y(q), C = z(q), q = n, v = L(n), n = C) : (E(q).oa = ih(), n = I(q), q = null, v = 0), C = 0;
              } else {
                break;
              }
            }
          }
        }
        l += 1;
      } else {
        if (q = D(f)) {
          n = q;
          if (Q(n)) {
            f = y(n), l = z(n), h = f, k = L(f), f = l;
          } else {
            v = E(n);
            v.la = Xb.a(v.la, a);
            if (v.oa > a.oa) {
              for (f = D(gh(function() {
                return function(a) {
                  return a.la;
                };
              }(f, h, k, l, v, n, q), v)), h = null, l = k = 0;;) {
                if (l < k) {
                  h.p(null, l).oa = ih(), l += 1;
                } else {
                  if (f = D(f)) {
                    h = f, Q(h) ? (f = y(h), l = z(h), h = f, k = L(f), f = l) : (E(h).oa = ih(), f = I(h), h = null, k = 0), l = 0;
                  } else {
                    break;
                  }
                }
              }
            }
            f = I(n);
            h = null;
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
        for (var d = a.state, e = b(a.bb), f = D($b.a(a.qa, Hg)), h = null, k = 0, l = 0;;) {
          if (l < k) {
            var n = h.p(null, l), q = M.b(n, 0, null), n = M.b(n, 1, null);
            n.l ? n.l(q, a, d, e) : n.call(null, q, a, d, e);
            l += 1;
          } else {
            if (f = D(f)) {
              Q(f) ? (k = y(f), f = z(f), h = k, k = L(k)) : (k = E(f), h = M.b(k, 0, null), k = M.b(k, 1, null), k.l ? k.l(h, a, d, e) : k.call(null, h, a, d, e), f = I(f), h = null, k = 0), l = 0;
            } else {
              break;
            }
          }
        }
        return a.state = e;
      };
    }(function(a) {
      return P.a(jh(dc(a)), id.a(jh, null == a ? null : Va(a)));
    });
    sb(a, Hg, p(e) ? function() {
      throw Error("formula cell can't be updated via swap! or reset!");
    } : function(a, b) {
      return lh(b);
    });
    a.jc = p(e) ? !1 : !0;
    a.Xb = p(e) ? f : function() {
      return x(a);
    };
    lh(a);
    return a;
  }
  a.k = 1;
  a.h = function(a) {
    var d = E(a);
    a = G(a);
    return b(d, a);
  };
  a.d = b;
  return a;
}();
function oh(a, b, c, d, e, f, h, k, l) {
  this.g = a;
  this.state = b;
  this.oa = c;
  this.prev = d;
  this.bb = e;
  this.la = f;
  this.Xb = h;
  this.qa = k;
  this.jc = l;
  this.o = 2;
  this.i = 2147647488;
}
g = oh.prototype;
g.Eb = function(a, b, c) {
  a = D(this.qa);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.p(null, f), k = M.b(h, 0, null), h = M.b(h, 1, null);
      h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c);
      f += 1;
    } else {
      if (a = D(a)) {
        Q(a) ? (d = y(a), a = z(a), k = d, e = L(d), d = k) : (d = E(a), k = M.b(d, 0, null), h = M.b(d, 1, null), h.l ? h.l(k, this, b, c) : h.call(null, k, this, b, c), a = I(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
g.Db = function(a, b, c) {
  return this.qa = O.b(this.qa, b, c);
};
g.Mb = function() {
  return this.state;
};
g.w = function() {
  return this.g;
};
g.q = function(a, b) {
  return jf.d(b, J(["#\x3cCell: ", pf.d(J([this.state], 0)), "\x3e"], 0));
};
function Z(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return nh.d(ph.c ? ph.c(ig) : ph.call(null, ig), J([a, b], 0));
    }
    b.k = 0;
    b.h = function(a) {
      a = D(a);
      return c(a);
    };
    b.d = c;
    return b;
  }();
}
function ph(a) {
  return nh(new oh(fe, a, ih(), a, Nd, Ve, null, fe, null));
}
function kh(a) {
  return A.a(ra(a), oh) ? a : null;
}
function qh(a, b) {
  var c = Z(D).call(null, b), d = function() {
    return function(a, b) {
      try {
        return M.a(a, b);
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
  return id.a(function(b) {
    return Z(fd.a(a, d)).call(null, c, b);
  }, cf.a(0, L(x(c))));
}
;var rh = function() {
  function a(a, b) {
    return P.a(u, ld(1, pd.a(od.c(a), b)));
  }
  function b(a) {
    return P.a(u, a);
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
function sh(a, b) {
  if (0 >= b || b >= 2 + L(a)) {
    return Xb.a(Od(K("", id.a(u, D(a)))), "");
  }
  if (p(A.a ? A.a(1, b) : A.call(null, 1, b))) {
    return new U(null, 1, 5, V, [a], null);
  }
  if (p(A.a ? A.a(2, b) : A.call(null, 2, b))) {
    return new U(null, 2, 5, V, ["", a], null);
  }
  var c = b - 2;
  return Xb.a(Od(K("", Qd.b(Od(id.a(u, D(a))), 0, c))), Ac.a(a, c));
}
var th = function() {
  function a(a, b, c) {
    if (A.a("" + u(b), "/(?:)/")) {
      b = sh(a, c);
    } else {
      if (1 > c) {
        b = Od(("" + u(a)).split(b));
      } else {
        a: {
          for (var h = c, k = Nd;;) {
            if (A.a(h, 1)) {
              b = Xb.a(k, a);
              break a;
            }
            var l = ff(b, a);
            if (p(l)) {
              var n = l, l = a.indexOf(n), n = a.substring(l + L(n)), h = h - 1, k = Xb.a(k, a.substring(0, l));
              a = n;
            } else {
              b = Xb.a(k, a);
              break a;
            }
          }
          b = void 0;
        }
      }
    }
    if (A.a(0, c)) {
      a: {
        for (c = b;;) {
          if (A.a("", dc(c))) {
            c = null == c ? null : Va(c);
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
  c.b = a;
  return c;
}();
var uh = pa(window.Node), vh = pa(uh) ? function(a) {
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
}, wh = pa(uh) ? ic : function(a) {
  try {
    return ic(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, xh = pa(uh) ? mc : function(a) {
  try {
    return mc(a);
  } catch (b) {
    if (b instanceof Error) {
      return null;
    }
    if (s) {
      throw b;
    }
    return null;
  }
}, yh = function() {
  function a(a, b, c) {
    try {
      return M.b(a, b, c);
    } catch (h) {
      if (h instanceof Error) {
        return c;
      }
      if (s) {
        throw h;
      }
      return null;
    }
  }
  function b(a, b) {
    return c.b(a, b, null);
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
  c.b = a;
  return c;
}(), zh = function() {
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
}(), Bh = function Ah(b) {
  return rd.a(function(b) {
    var d;
    d = xh.c ? xh.c(b) : xh.call(null, b);
    d = p(d) ? d : wh.c ? wh.c(b) : wh.call(null, b);
    return p(d) ? Ah(b) : new U(null, 1, 5, V, [b], null);
  }, b);
};
function Ch(a, b) {
  return zh.c(function d() {
    return p(document.documentElement.contains(a)) ? b.n ? b.n() : b.call(null) : zh.a(d, 20);
  });
}
function Dh(a) {
  var b = M.b(a, 0, null), c = zc(a), d = fd.a(Kc, E), e = function(a) {
    return function(b) {
      return id.a(Od, Ye(a, vd.a(2, b)));
    };
  }(d), d = function(a) {
    return function(b) {
      return rd.a(ed, nd(a, vd.l(2, 2, Nd, b)));
    };
  }(d, e);
  return hc(b) ? new U(null, 2, 5, V, [b, c], null) : b instanceof R ? new U(null, 2, 5, V, [ud(fe, e(a)), d(a)], null) : s ? new U(null, 2, 5, V, [fe, a], null) : null;
}
function Eh(a, b) {
  function c(a) {
    return a.substr(0, 3);
  }
  for (var d = function() {
    return function(a) {
      return Nc.c(a.substr(3));
    };
  }(c), e = function(a) {
    return function(b) {
      var c = a(b);
      return Nc.c(A.a("do-", c) ? b.substr(3) : b);
    };
  }(c, d), f = sf.c(fe), h = sf.c(fe), k = D(b), l = null, n = 0, q = 0;;) {
    if (q < n) {
      var v = l.p(null, q), C = M.b(v, 0, null), v = M.b(v, 1, null), F = Mc(C), C = jQuery(a);
      if (p(kh(v))) {
        uf.l(f, O, e(F), v);
      } else {
        if (A.a(F, "class")) {
          for (var v = D(th.a(v, / /)), F = null, S = 0, W = 0;;) {
            if (W < S) {
              var qa = F.p(null, W);
              C.addClass(qa);
              W += 1;
            } else {
              if (v = D(v)) {
                F = v, Q(F) ? (v = y(F), W = z(F), F = v, S = L(v), v = W) : (v = E(F), C.addClass(v), v = I(F), F = null, S = 0), W = 0;
              } else {
                break;
              }
            }
          }
        } else {
          A.a(F, "css") ? C.css(Df(v)) : A.a("do-", c(F)) ? uf.l(f, O, d(F), v) : A.a("on-", c(F)) ? uf.l(h, O, d(F), v) : s && (A.a(!1, v) ? C.removeAttr(F) : A.a(!0, v) ? C.attr(F, F) : s && C.attr(F, "" + u(v)));
        }
      }
      q += 1;
    } else {
      if (k = D(k)) {
        if (Q(k)) {
          n = y(k), k = z(k), l = n, n = L(n);
        } else {
          n = E(k);
          l = M.b(n, 0, null);
          n = M.b(n, 1, null);
          q = Mc(l);
          l = jQuery(a);
          if (p(kh(n))) {
            uf.l(f, O, e(q), n);
          } else {
            if (A.a(q, "class")) {
              for (n = D(th.a(n, / /)), q = null, v = C = 0;;) {
                if (v < C) {
                  F = q.p(null, v), l.addClass(F), v += 1;
                } else {
                  if (n = D(n)) {
                    q = n, Q(q) ? (n = y(q), v = z(q), q = n, C = L(n), n = v) : (n = E(q), l.addClass(n), n = I(q), q = null, C = 0), v = 0;
                  } else {
                    break;
                  }
                }
              }
            } else {
              A.a(q, "css") ? l.css(Df(n)) : A.a("do-", c(q)) ? uf.l(f, O, d(q), n) : A.a("on-", c(q)) ? uf.l(h, O, d(q), n) : s && (A.a(!1, n) ? l.removeAttr(q) : A.a(!0, n) ? l.attr(q, q) : s && l.attr(q, "" + u(n)));
            }
          }
          k = I(k);
          l = null;
          n = 0;
        }
        q = 0;
      } else {
        break;
      }
    }
  }
  D(x(h)) && zh.c(function() {
    for (var b = D(x(h)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var f = c.p(null, e), k = M.b(f, 0, null), f = M.b(f, 1, null);
        Fh.b ? Fh.b(a, k, f) : Fh.call(null, a, k, f);
        e += 1;
      } else {
        if (b = D(b)) {
          Q(b) ? (c = y(b), b = z(b), k = c, d = L(c), c = k) : (c = E(b), k = M.b(c, 0, null), f = M.b(c, 1, null), Fh.b ? Fh.b(a, k, f) : Fh.call(null, a, k, f), b = I(b), c = null, d = 0), e = 0;
        } else {
          return null;
        }
      }
    }
  });
  D(x(f)) && zh.c(function() {
    for (var b = D(x(f)), c = null, d = 0, e = 0;;) {
      if (e < d) {
        var h = c.p(null, e), k = M.b(h, 0, null), l = M.b(h, 1, null);
        Vf.b ? Vf.b(a, k, x(l)) : Vf.call(null, a, k, x(l));
        xf(l, zf.n(), function(b, c, d, e, f, h) {
          return function(b, c, d, e) {
            return Vf.b ? Vf.b(a, h, e) : Vf.call(null, a, h, e);
          };
        }(b, c, d, e, h, k, l));
        e += 1;
      } else {
        var n = D(b);
        if (n) {
          h = n;
          if (Q(h)) {
            b = y(h), e = z(h), c = b, d = L(b), b = e;
          } else {
            var q = E(h), k = M.b(q, 0, null), l = M.b(q, 1, null);
            Vf.b ? Vf.b(a, k, x(l)) : Vf.call(null, a, k, x(l));
            xf(l, zf.n(), function(b, c, d, e, f, h) {
              return function(b, c, d, e) {
                return Vf.b ? Vf.b(a, h, e) : Vf.call(null, a, h, e);
              };
            }(b, c, d, e, q, k, l, h, n));
            b = I(h);
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
var Gh = pa(uh) ? function(a, b) {
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
function Hh(a, b) {
  for (var c = D(hd(function(a) {
    return "string" === typeof a ? Ih.c ? Ih.c(a) : Ih.call(null, a) : p(vh.c ? vh.c(a) : vh.call(null, a)) ? a : null;
  }, Bh(b))), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.p(null, f);
      Gh.a ? Gh.a(a, h) : Gh.call(null, a, h);
      f += 1;
    } else {
      if (c = D(c)) {
        d = c, Q(d) ? (c = y(d), f = z(d), d = c, e = L(c), c = f) : (c = E(d), Gh.a ? Gh.a(a, c) : Gh.call(null, a, c), c = I(d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
}
g = Element.prototype;
g.call = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = J(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, 0, e);
  }
  function b(a, b) {
    var e = Dh(b), f = M.b(e, 0, null), e = M.b(e, 1, null);
    p(this.Fb) ? this.Fb(f, e) : (Eh(this, f), Hh(this, e));
    return this;
  }
  a.k = 1;
  a.h = function(a) {
    E(a);
    a = G(a);
    return b(0, a);
  };
  a.d = b;
  return a;
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(ta(b)));
};
g.a = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Dh(a);
    a = M.b(b, 0, null);
    b = M.b(b, 1, null);
    p(this.Fb) ? this.Fb(a, b) : (Eh(this, a), Hh(this, b));
    return this;
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
g.I = !0;
g.q = function(a, b) {
  return jf.d(b, J(["#\x3cElement: ", this.tagName, "\x3e"], 0));
};
function Jh(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return P.a(document.createElement(a), b);
    }
    b.k = 0;
    b.h = function(a) {
      a = D(a);
      return c(a);
    };
    b.d = c;
    return b;
  }();
}
var Kh = Jh("a"), Lh = Jh("br"), Mh = Jh("div"), Nh = Jh("h2"), Oh = Jh("hr"), Ph = Jh("input"), Qh = Jh("p"), Rh = Jh("span");
function Ih(a) {
  return document.createTextNode(a);
}
var Sh = sf.c(!1), Th = sf.c(Nd);
function Uh(a) {
  p(x(Sh)) ? a.n ? a.n() : a.call(null) : uf.b(Th, Xb, a);
}
function Vh(a) {
  return zh.c(function() {
    var b = jQuery("body");
    b.empty();
    for (var c = D(a), d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = d.p(null, f);
        b.append(h);
        f += 1;
      } else {
        if (c = D(c)) {
          d = c, Q(d) ? (c = y(d), f = z(d), d = c, e = L(c), c = f) : (c = E(d), b.append(c), c = I(d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    b.on("submit", function(a) {
      return a.preventDefault();
    });
    tf(Sh, !0);
    b = D(x(Th));
    c = null;
    for (f = e = 0;;) {
      if (f < e) {
        d = c.p(null, f), d.n ? d.n() : d.call(null), f += 1;
      } else {
        if (b = D(b)) {
          c = b, Q(c) ? (b = y(c), e = z(c), c = b, d = L(b), b = e, e = d) : (d = E(c), d.n ? d.n() : d.call(null), b = I(c), c = null, e = 0), f = 0;
        } else {
          return null;
        }
      }
    }
  });
}
function Wh() {
  return Vf.a ? Vf.a(document.getElementById(Mc("w")), Og) : Vf.call(null, document.getElementById(Mc("w")), Og);
}
var Xh = function() {
  function a(a, b) {
    return a.val("" + u(b)).trigger("change");
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
}(), Yh = function() {
  function a(a, b) {
    return a.prop("checked", nc(b)).trigger("change");
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
}(), Vf = function() {
  var a = sf.c(fe), b = sf.c(fe), c = sf.c(fe), d = sf.c(fe), e = N.b(new ia(null, 1, [Eb, Vg], null), qg, wf());
  return new Tf("do!", function() {
    function a(b, c, d) {
      2 < arguments.length && J(Array.prototype.slice.call(arguments, 2), 0);
      return c;
    }
    a.k = 2;
    a.h = function(a) {
      E(a);
      a = I(a);
      var b = E(a);
      G(a);
      return b;
    };
    a.d = function(a, b) {
      return b;
    };
    return a;
  }(), Vg, e, a, b, c, d);
}();
Uf(Vg, function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    e = M.b(e, 0, null);
    return Vf.b ? Vf.b(a, Rg, new ge([b, e])) : Vf.call(null, a, Rg, new ge([b, e]));
  }
  a.k = 2;
  a.h = function(a) {
    var d = E(a);
    a = I(a);
    var e = E(a);
    a = G(a);
    return b(d, e, a);
  };
  a.d = b;
  return a;
}());
Uf(Og, function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = J(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, 0, f);
  }
  function b(a, b, e) {
    a = jQuery(a);
    return P.b(A.a("checkbox", a.attr("type")) ? Yh : Xh, a, e);
  }
  a.k = 2;
  a.h = function(a) {
    var d = E(a);
    a = I(a);
    E(a);
    a = G(a);
    return b(d, 0, a);
  };
  a.d = b;
  return a;
}());
Uf(Rg, function(a, b, c) {
  return a.c ? a.c(c) : a.call(null, c);
});
Uf(mg, function(a, b, c) {
  a = jQuery(a);
  c = D(c);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.p(null, f);
      b = M.b(h, 0, null);
      h = M.b(h, 1, null);
      a.toggleClass(Mc(b), nc(h));
      f += 1;
    } else {
      if (c = D(c)) {
        Q(c) ? (d = y(c), c = z(c), b = d, e = L(d), d = b) : (d = E(c), b = M.b(d, 0, null), h = M.b(d, 1, null), a.toggleClass(Mc(b), nc(h)), c = I(c), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
});
Uf(Ag, function(a, b, c) {
  a = jQuery(a);
  c = D(c);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = d.p(null, f);
      b = M.b(h, 0, null);
      h = M.b(h, 1, null);
      a.css(Mc(b), "" + u(h));
      f += 1;
    } else {
      if (c = D(c)) {
        Q(c) ? (d = y(c), c = z(c), b = d, e = L(d), d = b) : (d = E(c), b = M.b(d, 0, null), h = M.b(d, 1, null), a.css(Mc(b), "" + u(h)), c = I(c), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
});
Uf(zg, function(a, b, c) {
  return jQuery(a).toggle(nc(c));
});
Uf(Tg, function(a, b, c) {
  return p(c) ? jQuery(a).hide().slideDown("fast") : jQuery(a).slideUp("fast");
});
Uf(og, function(a, b, c) {
  return p(c) ? jQuery(a).hide().fadeIn("fast") : jQuery(a).fadeOut("fast");
});
Uf(wg, function(a, b, c) {
  return p(c) ? zh.c(function() {
    return jQuery(a).focus();
  }) : zh.c(function() {
    return jQuery(a).focusout();
  });
});
Uf(Qg, function(a) {
  return jQuery(a).select();
});
Uf(eg, function(a, b, c) {
  return p(c) ? (Vf.b ? Vf.b(a, wg, c) : Vf.call(null, a, wg, c), Vf.b ? Vf.b(a, Qg, c) : Vf.call(null, a, Qg, c)) : null;
});
Uf(ag, function(a, b, c) {
  return jQuery(a).text("" + u(c));
});
Uf(gg, function(a, b, c) {
  return p(c) ? (b = jQuery("body"), a = jQuery(a), b.animate(Df(new ia(null, 1, [Kg, a.offset().top], null)))) : null;
});
function Fh(a, b, c) {
  return Ch(a, function() {
    return jQuery(a).on(Mc(b), c);
  });
}
function Zh(a, b) {
  var c = ph(0), d = Z(function() {
    return function(a, b) {
      return b.c ? b.c(a) : b.call(null, a);
    };
  }(c)).call(null, a, D), e = Z(function() {
    return function(a, b) {
      return a.c ? a.c(b) : a.call(null, b);
    };
  }(c, d)).call(null, L, d), f = function(a, b, c) {
    return function(d) {
      return Z(function() {
        return function(a, b) {
          return b < a;
        };
      }(a, b, c)).call(null, c, d);
    };
  }(c, d, e), h = function(a, b, c, d) {
    return function(e) {
      return Z(function() {
        return function(a, b, c) {
          return a.a ? a.a(c, b) : a.call(null, c, b);
        };
      }(a, b, c, d)).call(null, yh, e, b);
    };
  }(c, d, e, f), k = Rh.n ? Rh.n() : Rh.call(null);
  Ch(k, function() {
    var a = k.parentNode;
    a.removeChild(k);
    return Z(function(a, b, c, d, e, f, h, k, l, ya) {
      if (p(h < e)) {
        h = D(k.a ? k.a(h, e) : k.call(null, h, e));
        k = null;
        for (var Ea = 0, Na = 0;;) {
          if (p(Na < Ea)) {
            var Sa = k.p(null, Na), Sa = (c.c ? c.c(d.c ? d.c(Sa) : d.call(null, Sa)) : c.call(null, d.c ? d.c(Sa) : d.call(null, Sa))).call(null, xg, f.c ? f.c(Sa) : f.call(null, Sa));
            pa(ya) ? b.appendChild(Sa) : b.insertBefore(Sa, b.firstChild);
            Na += 1;
          } else {
            if (h = D(h)) {
              Q(h) ? (Ea = y(h), h = z(h), k = Ea, Ea = L(Ea)) : (k = E(h), k = (c.c ? c.c(d.c ? d.c(k) : d.call(null, k)) : c.call(null, d.c ? d.c(k) : d.call(null, k))).call(null, xg, f.c ? f.c(k) : f.call(null, k)), pa(ya) ? b.appendChild(k) : b.insertBefore(k, b.firstChild), h = I(h), k = null, Ea = 0), Na = 0;
            } else {
              break;
            }
          }
        }
        return l.a ? l.a(a, e) : l.call(null, a, e);
      }
      return null;
    }).call(null, ph(c), a, b, h, e, f, c, cf, tf, null);
  });
  return k;
}
;function $h(a) {
  return function() {
    function b(a) {
      var b = null;
      0 < arguments.length && (b = J(Array.prototype.slice.call(arguments, 0), 0));
      return c.call(this, b);
    }
    function c(b) {
      return P.a(document.createElementNS("http://www.w3.org/2000/svg", a), b);
    }
    b.k = 0;
    b.h = function(a) {
      a = D(a);
      return c(a);
    };
    b.d = c;
    return b;
  }();
}
var ai = $h("svg"), bi = $h("g"), ci = $h("rect"), di = $h("circle"), ei = $h("polyline"), fi = $h("polygon"), gi = $h("svg:title");
function hi(a, b, c, d, e, f, h, k) {
  this.width = a;
  this.height = b;
  this.ia = c;
  this.ga = d;
  this.ja = e;
  this.ha = f;
  this.ba = h;
  this.V = k;
  this.o = 0;
  this.i = 2229667594;
  6 < arguments.length ? (this.ba = h, this.V = k) : this.V = this.ba = null;
}
g = hi.prototype;
g.s = function() {
  var a = this.j;
  return null != a ? a : this.j = a = Bc(this);
};
g.t = function(a, b) {
  return Ia.b(this, b, null);
};
g.u = function(a, b, c) {
  return Lc(b, dg) ? this.width : Lc(b, Sg) ? this.height : Lc(b, sg) ? this.ia : Lc(b, Mg) ? this.ga : Lc(b, tg) ? this.ja : Lc(b, Cg) ? this.ha : s ? N.b(this.V, b, c) : null;
};
g.ma = function(a, b, c) {
  return p(Lc.a ? Lc.a(dg, b) : Lc.call(null, dg, b)) ? new hi(c, this.height, this.ia, this.ga, this.ja, this.ha, this.ba, this.V, null) : p(Lc.a ? Lc.a(Sg, b) : Lc.call(null, Sg, b)) ? new hi(this.width, c, this.ia, this.ga, this.ja, this.ha, this.ba, this.V, null) : p(Lc.a ? Lc.a(sg, b) : Lc.call(null, sg, b)) ? new hi(this.width, this.height, c, this.ga, this.ja, this.ha, this.ba, this.V, null) : p(Lc.a ? Lc.a(Mg, b) : Lc.call(null, Mg, b)) ? new hi(this.width, this.height, this.ia, c, this.ja, 
  this.ha, this.ba, this.V, null) : p(Lc.a ? Lc.a(tg, b) : Lc.call(null, tg, b)) ? new hi(this.width, this.height, this.ia, this.ga, c, this.ha, this.ba, this.V, null) : p(Lc.a ? Lc.a(Cg, b) : Lc.call(null, Cg, b)) ? new hi(this.width, this.height, this.ia, this.ga, this.ja, c, this.ba, this.V, null) : new hi(this.width, this.height, this.ia, this.ga, this.ja, this.ha, this.ba, O.b(this.V, b, c), null);
};
g.q = function(a, b, c) {
  return hf(b, function(a) {
    return hf(b, of, "", " ", "", c, a);
  }, "#chart.Chart{", ", ", "}", c, Zc.a(new U(null, 6, 5, V, [new U(null, 2, 5, V, [dg, this.width], null), new U(null, 2, 5, V, [Sg, this.height], null), new U(null, 2, 5, V, [sg, this.ia], null), new U(null, 2, 5, V, [Mg, this.ga], null), new U(null, 2, 5, V, [tg, this.ja], null), new U(null, 2, 5, V, [Cg, this.ha], null)], null), this.V));
};
g.A = function(a, b) {
  return ic(b) ? Ka(this, w.a(b, 0), w.a(b, 1)) : qc.b(Aa, this, b);
};
g.B = function() {
  return D(Zc.a(new U(null, 6, 5, V, [new U(null, 2, 5, V, [dg, this.width], null), new U(null, 2, 5, V, [Sg, this.height], null), new U(null, 2, 5, V, [sg, this.ia], null), new U(null, 2, 5, V, [Mg, this.ga], null), new U(null, 2, 5, V, [tg, this.ja], null), new U(null, 2, 5, V, [Cg, this.ha], null)], null), this.V));
};
g.F = function() {
  return 6 + L(this.V);
};
g.r = function(a, b) {
  return p(p(b) ? this.constructor === b.constructor && $d(this, b) : b) ? !0 : !1;
};
g.C = function(a, b) {
  return new hi(this.width, this.height, this.ia, this.ga, this.ja, this.ha, b, this.V, this.j);
};
g.w = function() {
  return this.ba;
};
g.Ja = function(a, b) {
  return oc(new Te(null, new ia(null, 6, [dg, null, sg, null, tg, null, Cg, null, Mg, null, Sg, null], null), null), b) ? $b.a(Tb(ud(fe, this), this.ba), b) : new hi(this.width, this.height, this.ia, this.ga, this.ja, this.ha, this.ba, cd($b.a(this.V, b)), null);
};
var ii = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = mc(a) ? P.a(Qe, a) : a;
    a = N.a(b, Cg);
    var e = N.a(b, tg), f = N.a(b, Mg), h = N.a(b, sg), k = N.a(b, Sg), b = N.a(b, dg);
    return new hi(b, k, h, f, e, a);
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
function ji(a, b, c) {
  var d = mc(a) ? P.a(Qe, a) : a;
  a = N.a(d, Cg);
  var e = N.a(d, tg), f = N.a(d, Mg), h = N.a(d, sg), k = N.a(d, Sg), d = N.a(d, dg);
  return new U(null, 2, 5, V, [(b - h) / (f - h) * d, k * (1 - (c - e) / (a - e))], null);
}
var ki = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Dh(a);
    a = M.b(b, 0, null);
    a = mc(a) ? P.a(Qe, a) : a;
    var e = N.a(a, lg), b = M.b(b, 1, null), f = qh(ed, Z(function(a) {
      var b = mc(a) ? P.a(Qe, a) : a;
      a = N.a(b, Sg);
      b = N.a(b, dg);
      return new U(null, 2, 5, V, [b, a], null);
    }).call(null, e)), e = M.b(f, 0, null), f = M.b(f, 1, null);
    return ai.a ? ai.a(O.d($b.a(a, lg), dg, e, J([Sg, f], 0)), b) : ai.call(null, O.d($b.a(a, lg), dg, e, J([Sg, f], 0)), b);
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), li = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Dh(a);
    var b = M.b(a, 0, null), b = mc(b) ? P.a(Qe, b) : b, e = N.a(b, kg), f = N.a(b, ng), h = N.a(b, lg);
    M.b(a, 1, null);
    a = Z(function(a, b, c, d) {
      return a.b ? a.b(c, d, b) : a.call(null, c, d, b);
    }).call(null, ji, e, h, f);
    return(di.l ? di.l(Jg, Z(function(a, b) {
      return b.c ? b.c(a) : b.call(null, a);
    }).call(null, a, E), Gg, Z(function(a, b) {
      return a.c ? a.c(b) : a.call(null, b);
    }).call(null, Ub, a)) : di.call(null, Jg, Z(function(a, b) {
      return b.c ? b.c(a) : b.call(null, a);
    }).call(null, a, E), Gg, Z(function(a, b) {
      return a.c ? a.c(b) : a.call(null, b);
    }).call(null, Ub, a))).call(null, $b.d(b, lg, J([ng, kg], 0)), gi.c ? gi.c(function() {
      var a = document.createTextNode("");
      Z(function(a, b, c) {
        return a.nodeValue = [u("["), u(c), u(", "), u(b), u("]")].join("");
      }).call(null, a, e, f);
      return a;
    }()) : gi.call(null, function() {
      var a = document.createTextNode("");
      Z(function(a, b, c) {
        return a.nodeValue = [u("["), u(c), u(", "), u(b), u("]")].join("");
      }).call(null, a, e, f);
      return a;
    }()));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), mi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Dh(a);
    var b = M.b(a, 0, null), b = mc(b) ? P.a(Qe, b) : b, e = N.a(b, Sg), f = N.a(b, dg), h = N.a(b, kg), k = N.a(b, ng), l = N.a(b, lg);
    M.b(a, 1, null);
    a = Z(function(a, b, c, d) {
      return a.b ? a.b(c, d, b) : a.call(null, c, d, b);
    }).call(null, ji, h, l, k);
    return(ci.l ? ci.l(ng, Z(function(a, b, c) {
      return(c.c ? c.c(a) : c.call(null, a)) - b / 2;
    }).call(null, a, f, E), kg, Z(function(a, b, c) {
      return(a.c ? a.c(b) : a.call(null, b)) - c / 2;
    }).call(null, Ub, a, e)) : ci.call(null, ng, Z(function(a, b, c) {
      return(c.c ? c.c(a) : c.call(null, a)) - b / 2;
    }).call(null, a, f, E), kg, Z(function(a, b, c) {
      return(a.c ? a.c(b) : a.call(null, b)) - c / 2;
    }).call(null, Ub, a, e))).call(null, $b.d(b, lg, J([ng, kg], 0)), gi.c ? gi.c(function() {
      var a = document.createTextNode("");
      Z(function(a, b, c) {
        return a.nodeValue = [u("["), u(c), u(", "), u(b), u("]")].join("");
      }).call(null, a, h, k);
      return a;
    }()) : gi.call(null, function() {
      var a = document.createTextNode("");
      Z(function(a, b, c) {
        return a.nodeValue = [u("["), u(c), u(", "), u(b), u("]")].join("");
      }).call(null, a, h, k);
      return a;
    }()));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), ni = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Dh(a);
    var b = M.b(a, 0, null), e = mc(b) ? P.a(Qe, b) : b, f = N.a(e, Sg), h = N.a(e, dg), b = N.a(e, bg), k = N.a(e, lg);
    M.b(a, 1, null);
    return bi.c ? bi.c(Zh(b, function(a) {
      var b = qh(ed, Z(function(a) {
        var b = M.b(a, 0, null);
        a = M.b(a, 1, null);
        return new U(null, 2, 5, V, [b, a], null);
      }).call(null, a));
      a = M.b(b, 0, null);
      b = M.b(b, 1, null);
      return mi.d(J([lg, k, ng, a, kg, b, dg, h, Sg, f], 0)).call(null, $b.d(e, lg, J([bg, dg, Sg], 0)));
    })) : bi.call(null, Zh(b, function(a) {
      var b = qh(ed, Z(function(a) {
        var b = M.b(a, 0, null);
        a = M.b(a, 1, null);
        return new U(null, 2, 5, V, [b, a], null);
      }).call(null, a));
      a = M.b(b, 0, null);
      b = M.b(b, 1, null);
      return mi.d(J([lg, k, ng, a, kg, b, dg, h, Sg, f], 0)).call(null, $b.d(e, lg, J([bg, dg, Sg], 0)));
    }));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), oi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = Dh(a);
    var b = M.b(a, 0, null), e = mc(b) ? P.a(Qe, b) : b, b = N.a(e, bg), f = N.a(e, lg);
    M.b(a, 1, null);
    return bi.c ? bi.c(Zh(b, function(a) {
      var b = qh(ed, Z(function(a) {
        var b = M.b(a, 0, null);
        a = M.b(a, 1, null);
        return new U(null, 2, 5, V, [b, a], null);
      }).call(null, a));
      a = M.b(b, 0, null);
      b = M.b(b, 1, null);
      return li.d(J([lg, f, ng, a, kg, b], 0)).call(null, $b.d(e, lg, J([bg], 0)));
    })) : bi.call(null, Zh(b, function(a) {
      var b = qh(ed, Z(function(a) {
        var b = M.b(a, 0, null);
        a = M.b(a, 1, null);
        return new U(null, 2, 5, V, [b, a], null);
      }).call(null, a));
      a = M.b(b, 0, null);
      b = M.b(b, 1, null);
      return li.d(J([lg, f, ng, a, kg, b], 0)).call(null, $b.d(e, lg, J([bg], 0)));
    }));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), pi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Dh(a);
    a = M.b(b, 0, null);
    a = mc(a) ? P.a(Qe, a) : a;
    var e = N.a(a, bg), f = N.a(a, lg);
    M.b(b, 1, null);
    var b = Z(function(a) {
      return[u("0,"), u(Sg.c(a))].join("");
    }).call(null, f), h = Z(function() {
      return function(a) {
        return[u(dg.c(a)), u(","), u(Sg.c(a))].join("");
      };
    }(b)).call(null, f), e = Z(function(a, b) {
      return function(c, d, e) {
        return function(a, b) {
          return function W(d) {
            return new T(null, function() {
              return function() {
                for (;;) {
                  var a = D(d);
                  if (a) {
                    if (Q(a)) {
                      var b = y(a), f = L(b), h = Rc(f);
                      return p(function() {
                        for (var a = 0;;) {
                          if (p(a < f)) {
                            var d = w.a(b, a), k = M.b(d, 0, null), l = M.b(d, 1, null), d = h, l = c.b ? c.b(e, k, l) : c.call(null, e, k, l), k = M.b(l, 0, null), l = M.b(l, 1, null), k = [u(k), u(","), u(l)].join("");
                            d.add(k);
                            a += 1;
                          } else {
                            return!0;
                          }
                        }
                      }()) ? Uc(h.K(), W(z(a))) : Uc(h.K(), null);
                    }
                    var k = E(a), l = M.b(k, 0, null), q = M.b(k, 1, null);
                    return K(function() {
                      var a = c.b ? c.b(e, l, q) : c.call(null, e, l, q), b = M.b(a, 0, null), a = M.b(a, 1, null);
                      return[u(b), u(","), u(a)].join("");
                    }(), W(G(a)));
                  }
                  return null;
                }
              };
            }(a, b), null, null);
          };
        }(a, b)(d);
      };
    }(b, h)).call(null, ji, e, f), e = Z(function() {
      return function(a, b, c, d) {
        return[u(b), u(" "), u(d.a ? d.a(" ", a) : d.call(null, " ", a)), u(" "), u(c)].join("");
      };
    }(b, h, e)).call(null, e, b, h, rh);
    return(fi.a ? fi.a(pg, e) : fi.call(null, pg, e)).call(null, $b.d(a, lg, J([bg], 0)));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}(), qi = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = J(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b = Dh(a);
    a = M.b(b, 0, null);
    a = mc(a) ? P.a(Qe, a) : a;
    var e = N.a(a, bg), f = N.a(a, lg);
    M.b(b, 1, null);
    b = Z(function(a, b, c) {
      return function q(b) {
        return new T(null, function() {
          for (;;) {
            var d = D(b);
            if (d) {
              if (Q(d)) {
                var e = y(d), f = L(e), k = Rc(f);
                return p(function() {
                  for (var b = 0;;) {
                    if (p(b < f)) {
                      var d = w.a(e, b), q = M.b(d, 0, null), v = M.b(d, 1, null), d = k, v = a.b ? a.b(c, q, v) : a.call(null, c, q, v), q = M.b(v, 0, null), v = M.b(v, 1, null), q = [u(q), u(","), u(v)].join("");
                      d.add(q);
                      b += 1;
                    } else {
                      return!0;
                    }
                  }
                }()) ? Uc(k.K(), q(z(d))) : Uc(k.K(), null);
              }
              var qa = E(d), ma = M.b(qa, 0, null), ya = M.b(qa, 1, null);
              return K(function() {
                var b = a.b ? a.b(c, ma, ya) : a.call(null, c, ma, ya), d = M.b(b, 0, null), b = M.b(b, 1, null);
                return[u(d), u(","), u(b)].join("");
              }(), q(G(d)));
            }
            return null;
          }
        }, null, null);
      }(b);
    }).call(null, ji, e, f);
    b = Z(function() {
      return function(a, b) {
        return b.a ? b.a(" ", a) : b.call(null, " ", a);
      };
    }(b)).call(null, b, rh);
    return(ei.a ? ei.a(pg, b) : ei.call(null, pg, b)).call(null, $b.d(a, lg, J([bg], 0)));
  }
  a.k = 0;
  a.h = function(a) {
    a = D(a);
    return b(a);
  };
  a.d = b;
  return a;
}();
var ri, si, ti, ui, vi, wi, xi, yi, zi;
function Ai() {
  ri = function() {
    return Od(function() {
      return function b(c) {
        return new T(null, function() {
          for (;;) {
            var d = D(c);
            if (d) {
              if (Q(d)) {
                var e = y(d), f = L(e), h = Rc(f);
                a: {
                  for (var k = 0;;) {
                    if (k < f) {
                      var l = w.a(e, k), l = new U(null, 2, 5, V, [l, xc(11)], null);
                      h.add(l);
                      k += 1;
                    } else {
                      e = !0;
                      break a;
                    }
                  }
                  e = void 0;
                }
                return e ? Uc(h.K(), b(z(d))) : Uc(h.K(), null);
              }
              h = E(d);
              return K(new U(null, 2, 5, V, [h, xc(11)], null), b(G(d)));
            }
            return null;
          }
        }, null, null);
      }(cf.a(0, 11));
    }());
  };
  si = function(a) {
    return Xb.a(a, new U(null, 2, 5, V, [E(Wb(a)) + 1, xc(11)], null));
  };
  ti = ph(ri());
  ui = ph(ri());
  vi = ph(400);
  wi = ph(!1);
  xi = Z(function(a, b) {
    return b.a ? b.a(10, a) : b.call(null, 10, a);
  }).call(null, ti, md);
  yi = Z(function(a, b) {
    return b.a ? b.a(10, a) : b.call(null, 10, a);
  }).call(null, ui, md);
  zi = Z(function(a, b, c, d, e, f, h) {
    var k = function() {
      var c = e.c ? e.c(b) : e.call(null, b), d = e.c ? e.c(a) : e.call(null, a);
      return c > d ? c : d;
    }(), l = function() {
      var d = f.c ? f.c(c.c ? c.c(b) : c.call(null, b)) : f.call(null, c.c ? c.c(b) : c.call(null, b)), e = f.c ? f.c(c.c ? c.c(a) : c.call(null, a)) : f.call(null, c.c ? c.c(a) : c.call(null, a));
      return d < e ? d : e;
    }();
    return d.Oa ? d.Oa(dg, h, Sg, 200, sg, k, Mg, l, tg, 0, Cg, 10) : d.call(null, dg, h, Sg, 200, sg, k, Mg, l, tg, 0, Cg, 10);
  }).call(null, yi, xi, Wb, ii, Vb, E, vi);
  Uh(function() {
    return setInterval(function() {
      if (p(x(wi))) {
        return null;
      }
      uf.a(ti, si);
      return uf.a(ui, si);
    }, 1E3);
  });
  return Vh(new U(null, 1, 5, V, [function() {
    var a = Nh.c ? Nh.c("Hoplon \u2022 Chart Demo") : Nh.call(null, "Hoplon \u2022 Chart Demo"), b = Oh.n ? Oh.n() : Oh.call(null), c = Qh.b ? Qh.b("Click the plot area to pause/play. ", "Hover over a point to see its coordinates. ", "Slide the slider to adjust plot width.") : Qh.call(null, "Click the plot area to pause/play. ", "Hover over a point to see its coordinates. ", "Slide the slider to adjust plot width."), d = pi.d(J([lg, zi, bg, xi, Ag, new ia(null, 3, [yg, "#006666", Dg, "none", Zf, 
    0.5], null)], 0)), e = pi.d(J([lg, zi, bg, yi, Ag, new ia(null, 3, [yg, "#660066", Dg, "none", Zf, 0.5], null)], 0)), f = qi.d(J([lg, zi, bg, xi, Ag, new ia(null, 3, [yg, "none", Dg, "#006666", Pg, 2], null)], 0)), h = qi.d(J([lg, zi, bg, yi, Ag, new ia(null, 3, [yg, "none", Dg, "#660066", Pg, 2], null)], 0)), k = oi.d(J([lg, zi, bg, xi, Xf, 3, Ag, new ia(null, 2, [Dg, "#006666", yg, "#006666"], null)], 0)), l = ni.d(J([lg, zi, bg, yi, dg, 6, Sg, 6, Ag, new ia(null, 2, [Dg, "#660066", yg, "#660066"], 
    null)], 0)), n = ki.d(J([lg, zi, Ag, Z(function() {
      return function(a) {
        return new ia(null, 2, [$f, "1px solid black", hg, [u("-"), u(dg.c(a) / 2 - 200), u("px")].join("")], null);
      };
    }(a, b, c, d, e, f, h, k, l)).call(null, zi), Ug, function() {
      return function() {
        return uf.a(wi, pa);
      };
    }(a, b, c, d, e, f, h, k, l), d, e, f, h, k, l], 0)), q = Lh.n ? Lh.n() : Lh.call(null), d = Ph.Pa ? Ph.Pa(Ng, "w", rg, "width:400px", Bg, "range", Eg, 400, ug, 800, Fg, 1, Og, 400, jg, function() {
      return function() {
        return tf(vi, Wh());
      };
    }(a, b, c, d, e, f, h, k, l, n, q)) : Ph.call(null, Ng, "w", rg, "width:400px", Bg, "range", Eg, 400, ug, 800, Fg, 1, Og, 400, jg, function() {
      return function() {
        return tf(vi, Wh());
      };
    }(a, b, c, d, e, f, h, k, l, n, q)), e = Kh.b ? Kh.b(Yf, "https://github.com/tailrecursion/hoplon-demos/blob/master/plotSVG/src/index.cljs.hl", "Source Code") : Kh.call(null, Yf, "https://github.com/tailrecursion/hoplon-demos/blob/master/plotSVG/src/index.cljs.hl", "Source Code"), e = Qh.c ? Qh.c(e) : Qh.call(null, e);
    return Mh.Qa ? Mh.Qa(Ag, new ia(null, 5, [dg, "400px", cg, "0 auto", vg, "center", fg, "20px", Lg, "sans-serif"], null), a, b, c, n, q, d, e) : Mh.call(null, Ag, new ia(null, 5, [dg, "400px", cg, "0 auto", vg, "center", fg, "20px", Lg, "sans-serif"], null), a, b, c, n, q, d, e);
  }()], null));
}
var Bi = ["tailrecursion", "hoplon", "app_pages", "G__4896", "hoploninit"], Ci = this;
Bi[0] in Ci || !Ci.execScript || Ci.execScript("var " + Bi[0]);
for (var Di;Bi.length && (Di = Bi.shift());) {
  Bi.length || void 0 === Ai ? Ci = Ci[Di] ? Ci[Di] : Ci[Di] = {} : Ci[Di] = Ai;
}
;