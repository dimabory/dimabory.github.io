(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"1TsA":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},"4R4u":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"4owk":function(t,e,n){},Afnz:function(t,e,n){"use strict";var r=n("LQAc"),i=n("XKFU"),o=n("KroJ"),a=n("Mukb"),s=n("hPIQ"),u=n("QaDb"),c=n("fyDq"),l=n("OP3Y"),f=n("K0xU")("iterator"),h=!([].keys&&"next"in[].keys()),p="@@iterator",v="keys",d="values",m=function(){return this};t.exports=function(t,e,n,g,y,_,w){u(n,e,g);var x,L,b,O=function(t){if(!h&&t in S)return S[t];switch(t){case v:return function(){return new n(this,t)};case d:return function(){return new n(this,t)}}return function(){return new n(this,t)}},A=e+" Iterator",q=y==d,k=!1,S=t.prototype,C=S[f]||S[p]||y&&S[y],T=C||O(y),j=y?q?O("entries"):T:void 0,P="Array"==e&&S.entries||C;if(P&&(b=l(P.call(new t)),b!==Object.prototype&&b.next&&(c(b,A,!0),r||"function"==typeof b[f]||a(b,f,m))),q&&C&&C.name!==d&&(k=!0,T=function(){return C.call(this)}),r&&!w||!h&&!k&&S[f]||a(S,f,T),s[e]=T,s[A]=m,y)if(x={values:q?T:O(d),keys:_?T:O(v),entries:j},w)for(L in x)L in S||o(S,L,x[L]);else i(i.P+i.F*(h||k),e,x);return x}},DVgA:function(t,e,n){var r=n("zhAb"),i=n("4R4u");t.exports=Object.keys||function(t){return r(t,i)}},ERYJ:function(t,e,n){"use strict";var r=n("vuna"),i=n.n(r);i.a},FJW5:function(t,e,n){var r=n("hswa"),i=n("y3w9"),o=n("DVgA");t.exports=n("nh4g")?Object.defineProperties:function(t,e){i(t);var n,a=o(e),s=a.length,u=0;while(s>u)r.f(t,n=a[u++],e[n]);return t}},KuGA:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-center"},[t._v("Follow Along Link Highlighter")]),n("div",{staticClass:"row p-2 mb-2"},[n("nav",[n("ul",{staticClass:"menu"},[n("li",[n("a",{attrs:{href:""}},[t._v("Home")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Order Status")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Tweets")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Read Our History")])]),n("li",[n("a",{attrs:{href:""}},[t._v("Contact Us")])])])]),n("div",{staticClass:"wrapper"},[n("p",[t._v("Lorem ipsum dolor sit amet, "),n("a",{attrs:{href:""}},[t._v("consectetur")]),t._v(" adipisicing elit. Est "),n("a",{attrs:{href:""}},[t._v("explicabo")]),t._v(" unde\n        natus necessitatibus esse obcaecati distinctio, aut itaque, qui vitae!")]),n("p",[t._v("Aspernatur sapiente quae sint "),n("a",{attrs:{href:""}},[t._v("soluta")]),t._v(" modi, atque praesentium laborum pariatur earum "),n("a",{attrs:{href:""}},[t._v("quaerat")]),t._v("\n        cupiditate consequuntur facilis ullam dignissimos, aperiam quam veniam.")]),n("p",[t._v("Cum ipsam quod, incidunt sit ex "),n("a",{attrs:{href:""}},[t._v("tempore")]),t._v(" placeat maxime "),n("a",{attrs:{href:""}},[t._v("corrupti")]),t._v(" possimus "),n("a",{attrs:{href:""}},[t._v("veritatis")]),t._v(" ipsum fugit recusandae est doloremque? Hic, "),n("a",{attrs:{href:""}},[t._v("quibusdam")]),t._v(", nulla.")]),n("p",[t._v("Esse quibusdam, ad, ducimus cupiditate "),n("a",{attrs:{href:""}},[t._v("nulla")]),t._v(", quae magni odit "),n("a",{attrs:{href:""}},[t._v("totam")]),t._v(" ut\n        consequatur eveniet sunt quam provident sapiente dicta neque quod.")]),n("p",[t._v("Aliquam "),n("a",{attrs:{href:""}},[t._v("dicta")]),t._v(" sequi culpa fugiat "),n("a",{attrs:{href:""}},[t._v("consequuntur")]),t._v(" pariatur optio ad minima, maxime "),n("a",{attrs:{href:""}},[t._v("odio")]),t._v(", distinctio magni impedit tempore enim repellendus "),n("a",{attrs:{href:""}},[t._v("repudiandae")]),t._v(" quas!")])])])])}];n("VRzm"),n("rGqo");function o(){var t=document.querySelectorAll("a"),e=document.createElement("span");function n(){var t=this.getBoundingClientRect(),n=t.width,r=t.height,i=t.top+window.scrollY,o=t.left+window.scrollX;e.style.width="".concat(n,"px"),e.style.height="".concat(r,"px"),e.style.transform="translate(".concat(o,"px, ").concat(i,"px)")}e.classList.add("highlight"),document.body.appendChild(e),t.forEach(function(t){return t.addEventListener("mouseenter",n)})}var a=n("eYgj"),s=n("NyBl"),u={name:"FollowAlongLinkHighlighter",mixins:[Object(s["a"])(function(){return{raw:a}},o)]},c=u,l=(n("ERYJ"),n("eK7F"),n("KHd+")),f=Object(l["a"])(c,r,i,!1,null,"4eb3b7d8",null);e["default"]=f.exports},Kuth:function(t,e,n){var r=n("y3w9"),i=n("FJW5"),o=n("4R4u"),a=n("YTvA")("IE_PROTO"),s=function(){},u="prototype",c=function(){var t,e=n("Iw71")("iframe"),r=o.length,i="<",a=">";e.style.display="none",n("+rLv").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+a+"document.F=Object"+i+"/script"+a),t.close(),c=t.F;while(r--)delete c[u][o[r]];return c()};t.exports=Object.create||function(t,e){var n;return null!==t?(s[u]=r(t),n=new s,s[u]=null,n[a]=t):n=c(),void 0===e?n:i(n,e)}},NyBl:function(t,e,n){"use strict";n("VRzm");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){e(),this.$emit("mounted",t.call(this))}}}},OP3Y:function(t,e,n){var r=n("aagx"),i=n("S/j/"),o=n("YTvA")("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},QaDb:function(t,e,n){"use strict";var r=n("Kuth"),i=n("RjD/"),o=n("fyDq"),a={};n("Mukb")(a,n("K0xU")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(a,{next:i(1,n)}),o(t,e+" Iterator")}},"S/j/":function(t,e,n){var r=n("vhPU");t.exports=function(t){return Object(r(t))}},YTvA:function(t,e,n){var r=n("VTer")("keys"),i=n("ylqs");t.exports=function(t){return r[t]||(r[t]=i(t))}},Ymqv:function(t,e,n){var r=n("LZWt");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},aCFj:function(t,e,n){var r=n("Ymqv"),i=n("vhPU");t.exports=function(t){return r(i(t))}},"d/Gc":function(t,e,n){var r=n("RYi7"),i=Math.max,o=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):o(t,e)}},eK7F:function(t,e,n){"use strict";var r=n("4owk"),i=n.n(r);i.a},eYgj:function(t,e){t.exports="export function init () {\n  const triggers  = document.querySelectorAll('a')\n  const highlight = document.createElement('span')\n  highlight.classList.add('highlight')\n  document.body.appendChild(highlight)\n\n  function highlightLink () {\n    const linkCoords = this.getBoundingClientRect()\n\n    const {width, height} = linkCoords\n    const top             = linkCoords.top + window.scrollY\n    const left            = linkCoords.left + window.scrollX\n\n    highlight.style.width     = `${width}px`\n    highlight.style.height    = `${height}px`\n    highlight.style.transform = `translate(${left}px, ${top}px)`\n  }\n\n  triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))\n}\n"},nGyu:function(t,e,n){var r=n("K0xU")("unscopables"),i=Array.prototype;void 0==i[r]&&n("Mukb")(i,r,{}),t.exports=function(t){i[r][t]=!0}},rGqo:function(t,e,n){for(var r=n("yt8O"),i=n("DVgA"),o=n("KroJ"),a=n("dyZX"),s=n("Mukb"),u=n("hPIQ"),c=n("K0xU"),l=c("iterator"),f=c("toStringTag"),h=u.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=i(p),d=0;d<v.length;d++){var m,g=v[d],y=p[g],_=a[g],w=_&&_.prototype;if(w&&(w[l]||s(w,l,h),w[f]||s(w,f,g),u[g]=h,y))for(m in r)w[m]||o(w,m,r[m],!0)}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},vuna:function(t,e,n){},w2a5:function(t,e,n){var r=n("aCFj"),i=n("ne8i"),o=n("d/Gc");t.exports=function(t){return function(e,n,a){var s,u=r(e),c=i(u.length),l=o(a,c);if(t&&n!=n){while(c>l)if(s=u[l++],s!=s)return!0}else for(;c>l;l++)if((t||l in u)&&u[l]===n)return t||l||0;return!t&&-1}}},yt8O:function(t,e,n){"use strict";var r=n("nGyu"),i=n("1TsA"),o=n("hPIQ"),a=n("aCFj");t.exports=n("Afnz")(Array,"Array",function(t,e){this._t=a(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),o.Arguments=o.Array,r("keys"),r("values"),r("entries")},zhAb:function(t,e,n){var r=n("aagx"),i=n("aCFj"),o=n("w2a5")(!1),a=n("YTvA")("IE_PROTO");t.exports=function(t,e){var n,s=i(t),u=0,c=[];for(n in s)n!=a&&r(s,n)&&c.push(n);while(e.length>u)r(s,n=e[u++])&&(~o(c,n)||c.push(n));return c}}}]);
//# sourceMappingURL=3.6e1b211b.js.map