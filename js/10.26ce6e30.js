(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"+yaQ":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-center"},[e._v("Custom Video Player")]),n("div",{staticClass:"d-flex justify-content-center mb-2"},[n("div",{staticClass:"player embed-responsive embed-responsive-16by9"},[n("video",{staticClass:"player__video viewer",attrs:{src:"https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"}}),n("div",{staticClass:"player__controls"},[n("div",{staticClass:"progress"},[n("div",{staticClass:"progress__filled"})]),n("button",{staticClass:"form-control player__button toggle",attrs:{title:"Toggle Play"}},[e._v("▶️")]),n("input",{staticClass:"player__slider",attrs:{type:"range",name:"volume",min:"0",max:"1",step:"0.05",value:"1"}}),n("input",{staticClass:"player__slider",attrs:{type:"range",name:"playbackRate",min:"0.5",max:"2",step:"0.1",value:"1"}}),n("button",{staticClass:"form-control player__button text-secondary",attrs:{"data-skip":"-10"}},[e._v("« 10s")]),n("button",{staticClass:"form-control player__button text-secondary",attrs:{"data-skip":"25"}},[e._v("25s »")]),n("button",{staticClass:"form-control player__button player__fullscreen"},[e._v("🎦")])])])])])}];n("rGqo"),n("f3/d");function s(){var e=document.querySelector(".player"),t=e.querySelector(".viewer"),n=e.querySelector(".progress"),r=e.querySelector(".progress__filled"),o=e.querySelector(".toggle"),s=e.querySelectorAll("[data-skip]"),i=e.querySelectorAll(".player__slider"),a=e.querySelector(".player__fullscreen");function u(){t[t.paused?"play":"pause"]()}function c(){o.textContent=this.paused?"▶️":"⏸️"}function l(){t.currentTime+=parseFloat(this.dataset.skip)}function d(){t[this.name]=this.value}function f(){r.style.flexBasis="".concat(t.currentTime/t.duration*100,"%")}function p(e){t.currentTime=e.offsetX/n.offsetWidth*t.duration}t.addEventListener("click",u),t.addEventListener("play",c),t.addEventListener("pause",c),t.addEventListener("timeupdate",f),o.addEventListener("click",u),s.forEach(function(e){return e.addEventListener("click",l)}),i.forEach(function(e){return e.addEventListener("change",d)}),i.forEach(function(e){return e.addEventListener("mousemove",d)});var v=!1;n.addEventListener("click",p),n.addEventListener("mousemove",function(e){return v&&p(e)}),n.addEventListener("mousedown",function(){return v=!0}),n.addEventListener("mouseup",function(){return v=!1}),a.addEventListener("click",function(){t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()})}var i=n("xhzN"),a=n("NyBl"),u={name:"CustomVideoPlayer",mixins:[Object(a["a"])(function(){return{raw:i}},s)]},c=u,l=(n("QOld"),n("KHd+")),d=Object(l["a"])(c,r,o,!1,null,"0a4d4cd4",null);t["default"]=d.exports},"1TsA":function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},"4R4u":function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},Afnz:function(e,t,n){"use strict";var r=n("LQAc"),o=n("XKFU"),s=n("KroJ"),i=n("Mukb"),a=n("hPIQ"),u=n("QaDb"),c=n("fyDq"),l=n("OP3Y"),d=n("K0xU")("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",y="values",h=function(){return this};e.exports=function(e,t,n,m,g,L,_){u(n,t,m);var b,k,S,x=function(e){if(!f&&e in O)return O[e];switch(e){case v:return function(){return new n(this,e)};case y:return function(){return new n(this,e)}}return function(){return new n(this,e)}},E=t+" Iterator",w=g==y,q=!1,O=e.prototype,T=O[d]||O[p]||g&&O[g],C=T||x(g),P=g?w?x("entries"):C:void 0,A="Array"==t&&O.entries||T;if(A&&(S=l(A.call(new e)),S!==Object.prototype&&S.next&&(c(S,E,!0),r||"function"==typeof S[d]||i(S,d,h))),w&&T&&T.name!==y&&(q=!0,C=function(){return T.call(this)}),r&&!_||!f&&!q&&O[d]||i(O,d,C),a[t]=C,a[E]=h,g)if(b={values:w?C:x(y),keys:L?C:x(v),entries:P},_)for(k in b)k in O||s(O,k,b[k]);else o(o.P+o.F*(f||q),t,b);return b}},DVgA:function(e,t,n){var r=n("zhAb"),o=n("4R4u");e.exports=Object.keys||function(e){return r(e,o)}},FJW5:function(e,t,n){var r=n("hswa"),o=n("y3w9"),s=n("DVgA");e.exports=n("nh4g")?Object.defineProperties:function(e,t){o(e);var n,i=s(t),a=i.length,u=0;while(a>u)r.f(e,n=i[u++],t[n]);return e}},Kuth:function(e,t,n){var r=n("y3w9"),o=n("FJW5"),s=n("4R4u"),i=n("YTvA")("IE_PROTO"),a=function(){},u="prototype",c=function(){var e,t=n("Iw71")("iframe"),r=s.length,o="<",i=">";t.style.display="none",n("+rLv").appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(o+"script"+i+"document.F=Object"+o+"/script"+i),e.close(),c=e.F;while(r--)delete c[u][s[r]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(a[u]=r(e),n=new a,a[u]=null,n[i]=e):n=c(),void 0===t?n:o(n,t)}},NyBl:function(e,t,n){"use strict";n("VRzm");t["a"]=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:e,mounted:function(){t(),this.$emit("mounted",e.call(this))}}}},OP3Y:function(e,t,n){var r=n("aagx"),o=n("S/j/"),s=n("YTvA")("IE_PROTO"),i=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=o(e),r(e,s)?e[s]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?i:null}},QOld:function(e,t,n){"use strict";var r=n("kakP"),o=n.n(r);o.a},QaDb:function(e,t,n){"use strict";var r=n("Kuth"),o=n("RjD/"),s=n("fyDq"),i={};n("Mukb")(i,n("K0xU")("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=r(i,{next:o(1,n)}),s(e,t+" Iterator")}},"S/j/":function(e,t,n){var r=n("vhPU");e.exports=function(e){return Object(r(e))}},YTvA:function(e,t,n){var r=n("VTer")("keys"),o=n("ylqs");e.exports=function(e){return r[e]||(r[e]=o(e))}},Ymqv:function(e,t,n){var r=n("LZWt");e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==r(e)?e.split(""):Object(e)}},aCFj:function(e,t,n){var r=n("Ymqv"),o=n("vhPU");e.exports=function(e){return r(o(e))}},"d/Gc":function(e,t,n){var r=n("RYi7"),o=Math.max,s=Math.min;e.exports=function(e,t){return e=r(e),e<0?o(e+t,0):s(e,t)}},kakP:function(e,t,n){},nGyu:function(e,t,n){var r=n("K0xU")("unscopables"),o=Array.prototype;void 0==o[r]&&n("Mukb")(o,r,{}),e.exports=function(e){o[r][e]=!0}},rGqo:function(e,t,n){for(var r=n("yt8O"),o=n("DVgA"),s=n("KroJ"),i=n("dyZX"),a=n("Mukb"),u=n("hPIQ"),c=n("K0xU"),l=c("iterator"),d=c("toStringTag"),f=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=o(p),y=0;y<v.length;y++){var h,m=v[y],g=p[m],L=i[m],_=L&&L.prototype;if(_&&(_[l]||a(_,l,f),_[d]||a(_,d,m),u[m]=f,g))for(h in r)_[h]||s(_,h,r[h],!0)}},vhPU:function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},w2a5:function(e,t,n){var r=n("aCFj"),o=n("ne8i"),s=n("d/Gc");e.exports=function(e){return function(t,n,i){var a,u=r(t),c=o(u.length),l=s(i,c);if(e&&n!=n){while(c>l)if(a=u[l++],a!=a)return!0}else for(;c>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}}},xhzN:function(e,t){e.exports="export function init () {\n  const player      = document.querySelector('.player')\n  const video       = player.querySelector('.viewer')\n  const progress    = player.querySelector('.progress')\n  const progressBar = player.querySelector('.progress__filled')\n  const toggle      = player.querySelector('.toggle')\n  const skipButtons = player.querySelectorAll('[data-skip]')\n  const ranges      = player.querySelectorAll('.player__slider')\n  const fullScreen  = player.querySelector('.player__fullscreen')\n\n  function togglePlay () {\n    video[video.paused ? 'play' : 'pause']()\n  }\n\n  function updateButton () {\n    toggle.textContent = this.paused ? '▶️' : '⏸️'\n  }\n\n  function skip () {\n    video.currentTime += parseFloat(this.dataset.skip)\n  }\n\n  function handleRangeUpdate () {\n    video[this.name] = this.value\n  }\n\n  function handleProgress () {\n    progressBar.style.flexBasis = `${(video.currentTime / video.duration) * 100}%`\n  }\n\n  function scrub (e) {\n    video.currentTime = (e.offsetX / progress.offsetWidth) * video.duration\n  }\n\n  video.addEventListener('click', togglePlay)\n  video.addEventListener('play', updateButton)\n  video.addEventListener('pause', updateButton)\n  video.addEventListener('timeupdate', handleProgress)\n\n  toggle.addEventListener('click', togglePlay)\n\n  skipButtons.forEach(btn => btn.addEventListener('click', skip))\n\n  ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))\n  ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))\n\n  let mousedown = false\n  progress.addEventListener('click', scrub)\n  progress.addEventListener('mousemove', (e) => mousedown && scrub(e))\n  progress.addEventListener('mousedown', () => mousedown = true)\n  progress.addEventListener('mouseup', () => mousedown = false)\n\n  fullScreen.addEventListener('click', () => {\n    if (video.requestFullscreen) {\n      video.requestFullscreen()\n    } else if (video.mozRequestFullScreen) {\n      video.mozRequestFullScreen()\n    } else if (video.webkitRequestFullscreen) {\n      video.webkitRequestFullscreen()\n    }\n  })\n}\n"},yt8O:function(e,t,n){"use strict";var r=n("nGyu"),o=n("1TsA"),s=n("hPIQ"),i=n("aCFj");e.exports=n("Afnz")(Array,"Array",function(e,t){this._t=i(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,o(1)):o(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},zhAb:function(e,t,n){var r=n("aagx"),o=n("aCFj"),s=n("w2a5")(!1),i=n("YTvA")("IE_PROTO");e.exports=function(e,t){var n,a=o(e),u=0,c=[];for(n in a)n!=i&&r(a,n)&&c.push(n);while(t.length>u)r(a,n=t[u++])&&(~s(c,n)||c.push(n));return c}}}]);
//# sourceMappingURL=10.26ce6e30.js.map