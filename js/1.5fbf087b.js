(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"1TsA":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},"4R4u":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},AMlN:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-center"},[t._v("Webcam Fun")]),n("video",{staticClass:"player col"}),n("div",[n("div",{staticClass:"photobooth"},[n("div",{staticClass:"controls col mb-2 d-flex flex-column justify-content-center align-items-center"},[n("div",{staticClass:"d-flex flex-column flex-sm-row justify-content-around"},[n("button",{staticClass:"form-control btn btn-secondary btn--take-photo mb-2 mr-sm-2"},[t._v("Take Photo")]),n("button",{staticClass:"form-control btn btn-dark btn--red-effect mb-2 mr-sm-2"},[t._v("Red")]),n("button",{staticClass:"form-control btn btn-dark btn--rgb-split-effect mb-2 mr-sm-2"},[t._v("RGP Split")]),n("button",{staticClass:"form-control btn btn-dark btn--grayscale-effect mb-2"},[t._v("Grayscale")])])]),n("canvas",{staticClass:"photo col-12"}),n("div",{staticClass:"clearfix"}),n("div",{staticClass:"strip col-12 d-flex flex-column flex-wrap flex-md-row justify-content-around align-items-center"})]),n("audio",{staticClass:"snap",attrs:{src:"http://wesbos.com/demos/photobooth/snap.mp3",hidden:""}})])])}];n("VRzm"),n("f3/d"),n("rGqo");function i(){var t=document.querySelector(".player"),e=document.querySelector(".photo"),n=e.getContext("2d"),r=document.querySelector(".strip"),a=document.querySelector(".snap"),i=document.querySelector(".btn--take-photo"),o=document.querySelector(".btn--red-effect"),c=document.querySelector(".btn--rgb-split-effect"),s=document.querySelector(".btn--grayscale-effect");function l(){navigator.mediaDevices.getUserMedia({video:!0,audio:!1}).then(function(e){try{t.srcObject=e}catch(n){t.src=window.URL.createObjectURL(e)}finally{t.play()}}).catch(function(t){console.error(t),e.width=0,e.height=0;var n=document.createElement("span");n.innerHTML='<div class="d-flex justify-content-center"><span class="text-danger">'.concat(t.message,". Please allow your media device to start video recording.</span></div>"),e.parentNode.insertBefore(n,e)})}function u(){var r=t.videoWidth,a=t.videoHeight;e.width=r,e.height=a;var i=!1,l=!1,u=!1;setInterval(function(){n.drawImage(t,0,0,r,a);var e=n.getImageData(0,0,r,a);i&&(e=f(e)),l&&(e=p(e)),u&&(e=d(e)),n.putImageData(e,0,0)},16),o.addEventListener("click",function(){return i=!i}),c.addEventListener("click",function(){return l=!l}),s.addEventListener("click",function(){return u=!u})}function d(t){for(var e=0;e<t.data.length;e+=4){var n=.3*t.data[e]+.59*t.data[e+1]+.11*t.data[e+2];t.data[e]=n,t.data[e+1]=n,t.data[e+2]=n}return t}function f(t){for(var e=0;e<t.data.length;e+=4)t.data[e]+=100,t.data[e+1]-=50,t.data[e+2]*=.5;return t}function p(t){for(var e=0;e<t.data.length;e+=4)t.data[e-150]=t.data[e],t.data[e+500]=t.data[e+1],t.data[e-550]=t.data[e+2];return t}function h(){a.currentTime=0,a.play()}function v(){var t=e.toDataURL("image/jpeg"),n=document.createElement("a");n.href=t,n.setAttribute("download","handsome"),n.innerHTML='<img src="'.concat(t,'" alt="Handsome" class="img-thumbnail" width="200" height="200"/> <span>Download</span>'),r.appendChild(n)}i.addEventListener("click",function(){return h()||v()}),t.addEventListener("canplay",u),l()}var o=n("mJhC"),c=n("NyBl"),s={name:"WebcamFun",mixins:[Object(c["a"])(function(){return{raw:o}},i)]},l=s,u=(n("kpvj"),n("KHd+")),d=Object(u["a"])(l,r,a,!1,null,"35a26cfc",null);e["default"]=d.exports},Afnz:function(t,e,n){"use strict";var r=n("LQAc"),a=n("XKFU"),i=n("KroJ"),o=n("Mukb"),c=n("hPIQ"),s=n("QaDb"),l=n("fyDq"),u=n("OP3Y"),d=n("K0xU")("iterator"),f=!([].keys&&"next"in[].keys()),p="@@iterator",h="keys",v="values",m=function(){return this};t.exports=function(t,e,n,g,y,x,b){s(n,e,g);var w,S,E,L=function(t){if(!f&&t in O)return O[t];switch(t){case h:return function(){return new n(this,t)};case v:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",j=y==v,C=!1,O=t.prototype,T=O[d]||O[p]||y&&O[y],R=T||L(y),A=y?j?L("entries"):R:void 0,P="Array"==e&&O.entries||T;if(P&&(E=u(P.call(new t)),E!==Object.prototype&&E.next&&(l(E,k,!0),r||"function"==typeof E[d]||o(E,d,m))),j&&T&&T.name!==v&&(C=!0,R=function(){return T.call(this)}),r&&!b||!f&&!C&&O[d]||o(O,d,R),c[e]=R,c[k]=m,y)if(w={values:j?R:L(v),keys:x?R:L(h),entries:A},b)for(S in w)S in O||i(O,S,w[S]);else a(a.P+a.F*(f||C),e,w);return w}},DVgA:function(t,e,n){var r=n("zhAb"),a=n("4R4u");t.exports=Object.keys||function(t){return r(t,a)}},FJW5:function(t,e,n){var r=n("hswa"),a=n("y3w9"),i=n("DVgA");t.exports=n("nh4g")?Object.defineProperties:function(t,e){a(t);var n,o=i(e),c=o.length,s=0;while(c>s)r.f(t,n=o[s++],e[n]);return t}},Kuth:function(t,e,n){var r=n("y3w9"),a=n("FJW5"),i=n("4R4u"),o=n("YTvA")("IE_PROTO"),c=function(){},s="prototype",l=function(){var t,e=n("Iw71")("iframe"),r=i.length,a="<",o=">";e.style.display="none",n("+rLv").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(a+"script"+o+"document.F=Object"+a+"/script"+o),t.close(),l=t.F;while(r--)delete l[s][i[r]];return l()};t.exports=Object.create||function(t,e){var n;return null!==t?(c[s]=r(t),n=new c,c[s]=null,n[o]=t):n=l(),void 0===e?n:a(n,e)}},NyBl:function(t,e,n){"use strict";n("VRzm");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){e(),this.$emit("mounted",t.call(this))}}}},OP3Y:function(t,e,n){var r=n("aagx"),a=n("S/j/"),i=n("YTvA")("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},QaDb:function(t,e,n){"use strict";var r=n("Kuth"),a=n("RjD/"),i=n("fyDq"),o={};n("Mukb")(o,n("K0xU")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(o,{next:a(1,n)}),i(t,e+" Iterator")}},R5gr:function(t,e,n){},"S/j/":function(t,e,n){var r=n("vhPU");t.exports=function(t){return Object(r(t))}},YTvA:function(t,e,n){var r=n("VTer")("keys"),a=n("ylqs");t.exports=function(t){return r[t]||(r[t]=a(t))}},Ymqv:function(t,e,n){var r=n("LZWt");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},aCFj:function(t,e,n){var r=n("Ymqv"),a=n("vhPU");t.exports=function(t){return r(a(t))}},"d/Gc":function(t,e,n){var r=n("RYi7"),a=Math.max,i=Math.min;t.exports=function(t,e){return t=r(t),t<0?a(t+e,0):i(t,e)}},kpvj:function(t,e,n){"use strict";var r=n("R5gr"),a=n.n(r);a.a},mJhC:function(t,e){t.exports="export function init () {\n  const video  = document.querySelector('.player')\n  const canvas = document.querySelector('.photo')\n  const ctx    = canvas.getContext('2d')\n  const strip  = document.querySelector('.strip')\n  const snap   = document.querySelector('.snap')\n\n  const takePhotoBtn       = document.querySelector('.btn--take-photo')\n  const redEffectBtn       = document.querySelector('.btn--red-effect')\n  const rgbSplitEffectBtn  = document.querySelector('.btn--rgb-split-effect')\n  const grayscaleEffectBtn = document.querySelector('.btn--grayscale-effect')\n\n  function recording () {\n    navigator.mediaDevices\n             .getUserMedia({video: true, audio: false})\n             .then(localMediaStream => {\n               try {\n                 video.srcObject = localMediaStream\n               } catch (error) {\n                 video.src = window.URL.createObjectURL(localMediaStream)\n               } finally {\n                 video.play()\n               }\n             })\n             .catch(err => {\n               console.error(err)\n               canvas.width  = 0\n               canvas.height = 0\n\n               const errNode     = document.createElement('span')\n               errNode.innerHTML = `<div class=\"d-flex justify-content-center\"><span class=\"text-danger\">${err.message}. Please allow your media device to start video recording.</span></div>`\n               canvas.parentNode.insertBefore(errNode, canvas)\n             })\n  }\n\n  function paintToCanvas () {\n    const width  = video.videoWidth\n    const height = video.videoHeight\n\n    canvas.width  = width\n    canvas.height = height\n\n    let withRedEffect       = false\n    let withRgbSplitEffect  = false\n    let withGrayscaleEffect = false\n\n    setInterval(() => {\n      ctx.drawImage(video, 0, 0, width, height)\n      let pixels = ctx.getImageData(0, 0, width, height)\n\n      // pixels = greenEffect(pixels)\n\n      if (withRedEffect) {\n        pixels = redEffect(pixels)\n      }\n      if (withRgbSplitEffect) {\n        pixels = rgbSplitEffect(pixels)\n      }\n      if (withGrayscaleEffect) {\n        pixels = grayscaleEffect(pixels)\n      }\n      // ctx.globalAlpha = 0.1\n      ctx.putImageData(pixels, 0, 0)\n    }, 16)\n\n    redEffectBtn.addEventListener('click', () => withRedEffect = !withRedEffect)\n    rgbSplitEffectBtn.addEventListener('click', () => withRgbSplitEffect = !withRgbSplitEffect)\n    grayscaleEffectBtn.addEventListener('click', () => withGrayscaleEffect = !withGrayscaleEffect)\n  }\n\n  function grayscaleEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      let grayscale      = pixels.data[i] * .3 + pixels.data[i + 1] * .59 + pixels.data[i + 2] * .11\n      pixels.data[i]     = grayscale\n      pixels.data[i + 1] = grayscale\n      pixels.data[i + 2] = grayscale\n    }\n    return pixels\n  }\n\n  function redEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      pixels.data[i] += 100     // r\n      pixels.data[i + 1] -= 50  // g\n      pixels.data[i + 2] *= 0.5 // b\n    }\n\n    return pixels\n  }\n\n  // eslint-disable-next-line\n  function greenEffect (pixels) {\n    const levels = {}\n\n    document.querySelectorAll('.rgb input').forEach(input => {\n      levels[input.name] = input.value\n    })\n\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      let red   = pixels.data[i]\n      let green = pixels.data[i + 1]\n      let blue  = pixels.data[i + 2]\n      // const alpha = pixels.data[i + 3]\n\n      if (\n        red >= levels.rmin &&\n        green >= levels.gmin &&\n        blue >= levels.bmin &&\n        red <= levels.rmax &&\n        green <= levels.gmax &&\n        blue <= levels.bmax\n      ) {\n        pixels.data[i + 3] = 0\n      }\n    }\n\n    return pixels\n  }\n\n  function rgbSplitEffect (pixels) {\n    for (let i = 0; i < pixels.data.length; i += 4) {\n      pixels.data[i - 150] = pixels.data[i]     // r\n      pixels.data[i + 500] = pixels.data[i + 1] // g\n      pixels.data[i - 550] = pixels.data[i + 2] // b\n    }\n\n    return pixels\n  }\n\n  function playSound () {\n    snap.currentTime = 0\n    snap.play()\n  }\n\n  function takePhoto () {\n    const data = canvas.toDataURL('image/jpeg')\n\n    const link = document.createElement('a')\n    link.href  = data\n    link.setAttribute('download', 'handsome')\n    link.innerHTML = `<img src=\"${data}\" alt=\"Handsome\" class=\"img-thumbnail\" width=\"200\" height=\"200\"/> <span>Download</span>`\n\n    strip.appendChild(link)\n  }\n\n  takePhotoBtn.addEventListener('click', () => playSound() || takePhoto())\n  video.addEventListener('canplay', paintToCanvas)\n\n  recording()\n}\n"},nGyu:function(t,e,n){var r=n("K0xU")("unscopables"),a=Array.prototype;void 0==a[r]&&n("Mukb")(a,r,{}),t.exports=function(t){a[r][t]=!0}},rGqo:function(t,e,n){for(var r=n("yt8O"),a=n("DVgA"),i=n("KroJ"),o=n("dyZX"),c=n("Mukb"),s=n("hPIQ"),l=n("K0xU"),u=l("iterator"),d=l("toStringTag"),f=s.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=a(p),v=0;v<h.length;v++){var m,g=h[v],y=p[g],x=o[g],b=x&&x.prototype;if(b&&(b[u]||c(b,u,f),b[d]||c(b,d,g),s[g]=f,y))for(m in r)b[m]||i(b,m,r[m],!0)}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},w2a5:function(t,e,n){var r=n("aCFj"),a=n("ne8i"),i=n("d/Gc");t.exports=function(t){return function(e,n,o){var c,s=r(e),l=a(s.length),u=i(o,l);if(t&&n!=n){while(l>u)if(c=s[u++],c!=c)return!0}else for(;l>u;u++)if((t||u in s)&&s[u]===n)return t||u||0;return!t&&-1}}},yt8O:function(t,e,n){"use strict";var r=n("nGyu"),a=n("1TsA"),i=n("hPIQ"),o=n("aCFj");t.exports=n("Afnz")(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,a(1)):a(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},zhAb:function(t,e,n){var r=n("aagx"),a=n("aCFj"),i=n("w2a5")(!1),o=n("YTvA")("IE_PROTO");t.exports=function(t,e){var n,c=a(t),s=0,l=[];for(n in c)n!=o&&r(c,n)&&l.push(n);while(e.length>s)r(c,n=e[s++])&&(~i(l,n)||l.push(n));return l}}}]);
//# sourceMappingURL=1.5fbf087b.js.map