(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"1TsA":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},"1gn5":function(t,e,n){"use strict";var r=n("6UFx"),i=n.n(r);i.a},"4R4u":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"6UFx":function(t,e,n){},Afnz:function(t,e,n){"use strict";var r=n("LQAc"),i=n("XKFU"),a=n("KroJ"),c=n("Mukb"),o=n("hPIQ"),s=n("QaDb"),u=n("fyDq"),l=n("OP3Y"),f=n("K0xU")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",m="keys",h="values",v=function(){return this};t.exports=function(t,e,n,g,y,b,L){s(n,e,g);var x,S,O,A=function(t){if(!p&&t in T)return T[t];switch(t){case m:return function(){return new n(this,t)};case h:return function(){return new n(this,t)}}return function(){return new n(this,t)}},k=e+" Iterator",w=y==h,C=!1,T=t.prototype,_=T[f]||T[d]||y&&T[y],E=_||A(y),j=y?w?A("entries"):E:void 0,I="Array"==e&&T.entries||_;if(I&&(O=l(I.call(new t)),O!==Object.prototype&&O.next&&(u(O,k,!0),r||"function"==typeof O[f]||c(O,f,v))),w&&_&&_.name!==h&&(C=!0,E=function(){return _.call(this)}),r&&!L||!p&&!C&&T[f]||c(T,f,E),o[e]=E,o[k]=v,y)if(x={values:w?E:A(h),keys:b?E:A(m),entries:j},L)for(S in x)S in T||a(T,S,x[S]);else i(i.P+i.F*(p||C),e,x);return x}},DVgA:function(t,e,n){var r=n("zhAb"),i=n("4R4u");t.exports=Object.keys||function(t){return r(t,i)}},FJW5:function(t,e,n){var r=n("hswa"),i=n("y3w9"),a=n("DVgA");t.exports=n("nh4g")?Object.defineProperties:function(t,e){i(t);var n,c=a(e),o=c.length,s=0;while(o>s)r.f(t,n=c[s++],e[n]);return t}},Kuth:function(t,e,n){var r=n("y3w9"),i=n("FJW5"),a=n("4R4u"),c=n("YTvA")("IE_PROTO"),o=function(){},s="prototype",u=function(){var t,e=n("Iw71")("iframe"),r=a.length,i="<",c=">";e.style.display="none",n("+rLv").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(i+"script"+c+"document.F=Object"+i+"/script"+c),t.close(),u=t.F;while(r--)delete u[s][a[r]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(o[s]=r(t),n=new o,o[s]=null,n[c]=t):n=u(),void 0===e?n:i(n,e)}},NyBl:function(t,e,n){"use strict";n("VRzm");e["a"]=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){e(),this.$emit("mounted",t.call(this))}}}},OP3Y:function(t,e,n){var r=n("aagx"),i=n("S/j/"),a=n("YTvA")("IE_PROTO"),c=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),r(t,a)?t[a]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?c:null}},QaDb:function(t,e,n){"use strict";var r=n("Kuth"),i=n("RjD/"),a=n("fyDq"),c={};n("Mukb")(c,n("K0xU")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=r(c,{next:i(1,n)}),a(t,e+" Iterator")}},"S/j/":function(t,e,n){var r=n("vhPU");t.exports=function(t){return Object(r(t))}},S72G:function(t,e){t.exports="export function init () {\n\n  const LOCAL_STORAGE_KEY = 'items'\n\n  const Storage = {\n    LocalStorage: window.localStorage,\n    get [LOCAL_STORAGE_KEY] () {\n      return JSON.parse(this.LocalStorage.getItem(LOCAL_STORAGE_KEY)) || []\n    },\n    set [LOCAL_STORAGE_KEY] (value) {\n      if (typeof value !== 'string') {\n        value = JSON.stringify(value)\n      }\n      this.LocalStorage.setItem(LOCAL_STORAGE_KEY, value)\n    }\n  }\n\n  const addItems  = document.querySelector('.add-items')\n  const actItems  = document.querySelector('.act-items')\n  const itemsList = document.querySelector('.plates')\n  const items     = Storage[LOCAL_STORAGE_KEY]\n\n  function addItem (e) {\n    e.preventDefault()\n\n    const text = (this.querySelector('[name=item]')).value\n\n    items.push({\n      text,\n      done: false\n    })\n\n    renderList(items, itemsList)\n    Storage.items = items\n\n    this.reset()\n  }\n\n  function renderList (plates = [], platesList) {\n    platesList.innerHTML = plates.map((plate, i) => {\n      return `\n        <li>\n          <input type=\"checkbox\" data-index=\"${i}\" id=\"item${i}\" ${plate.done ? 'checked' : ''}/>\n          <label for=\"item${i}\">${plate.text}</label>\n        </li>\n      `\n    }).join('')\n  }\n\n  function toggleDone (index) {\n    const item = items[index]\n    item.done  = !item.done\n\n    renderList(items, itemsList)\n    Storage.items = items\n  }\n\n  function clearItems () {\n    items.splice(0)\n    Storage[LOCAL_STORAGE_KEY] = items\n\n    renderList(items, itemsList)\n  }\n\n  function toggleAll (checked) {\n    items.forEach((item, index) => {\n      items[index].done = !checked\n      toggleDone(index)\n    })\n  }\n\n  addItems.addEventListener('submit', addItem)\n  itemsList.addEventListener('click', e => {\n    if (!e.target.matches('input[type=checkbox]')) {\n      return\n    }\n\n    toggleDone(e.target.dataset.index)\n  })\n\n  actItems.querySelectorAll('button').forEach(btn => btn.addEventListener('click', e => {\n    switch (e.target.dataset.act) {\n      case 'clearItems':\n        clearItems()\n        break\n      case 'checkAll':\n        toggleAll(true)\n        break\n      case 'uncheckAll':\n        toggleAll(false)\n        break\n      default:\n        break\n    }\n  }))\n\n  renderList(items, itemsList)\n\n}\n"},YTvA:function(t,e,n){var r=n("VTer")("keys"),i=n("ylqs");t.exports=function(t){return r[t]||(r[t]=i(t))}},Ymqv:function(t,e,n){var r=n("LZWt");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},aCFj:function(t,e,n){var r=n("Ymqv"),i=n("vhPU");t.exports=function(t){return r(i(t))}},"d/Gc":function(t,e,n){var r=n("RYi7"),i=Math.max,a=Math.min;t.exports=function(t,e){return t=r(t),t<0?i(t+e,0):a(t,e)}},nGyu:function(t,e,n){var r=n("K0xU")("unscopables"),i=Array.prototype;void 0==i[r]&&n("Mukb")(i,r,{}),t.exports=function(t){i[r][t]=!0}},o0rB:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h2",{staticClass:"text-center"},[t._v("LocalStorage")]),n("div",{staticClass:"local-tapas p-2 pb-4 m-2"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 512 512","enable-background":"new 0 0 512 512","xml:space":"preserve"}},[n("g",[n("path",{attrs:{d:"M495.9,425.3H16.1c-5.2,0-10.1,2.9-12.5,7.6c-2.4,4.7-2.1,10.3,0.9,14.6l39,56.4c2.6,3.8,7,6.1,11.6,6.1h401.7   c4.6,0,9-2.3,11.6-6.1l39-56.4c3-4.3,3.3-9.9,0.9-14.6C506,428.2,501.1,425.3,495.9,425.3z M449.4,481.8H62.6L43,453.6H469   L449.4,481.8z"}}),n("path",{attrs:{d:"M158.3,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1c-7.8,0-14.1,6.3-14.1,14.1v64.5   C144.2,115.7,150.5,122,158.3,122z"}}),n("path",{attrs:{d:"M245.1,94.7c7.8,0,14.1-6.3,14.1-14.1V16.1c0-7.8-6.3-14.1-14.1-14.1C237.3,2,231,8.3,231,16.1v64.5   C231,88.4,237.3,94.7,245.1,94.7z"}}),n("path",{attrs:{d:"M331.9,122c7.8,0,14.1-6.3,14.1-14.1V43.4c0-7.8-6.3-14.1-14.1-14.1s-14.1,6.3-14.1,14.1v64.5   C317.8,115.7,324.1,122,331.9,122z"}}),n("path",{attrs:{d:"M9.6,385.2c5.3,2.8,11.8,1.9,16.2-2.2l50.6-47.7c56.7,46.5,126.6,71.9,198.3,71.9c0,0,0,0,0,0   c87.5,0,169.7-36.6,231.4-103.2c5-5.4,5-13.8,0-19.2c-61.8-66.5-144-103.2-231.4-103.2c-72,0-142.2,25.6-199,72.5l-50-47.1   c-4.4-4.1-10.9-5-16.2-2.2c-5.3,2.8-8.3,8.7-7.4,14.6l11.6,75L2.2,370.6C1.3,376.5,4.2,382.4,9.6,385.2z M380.9,230.8   c34.9,14.3,67.2,35.7,95.3,63.6c-10.1,10-20.8,19.2-31.9,27.5c-22.4-3.3-29.6-8.8-30.7-9.7c-4-5.7-11.8-7.7-18.1-4.4   c-6.9,3.6-9.5,12.2-5.9,19.1c1.9,3.5,7.3,10.3,22.4,16c-10.1,5.7-20.5,10.7-31.1,15.1C352.4,320.2,352.4,268.6,380.9,230.8z    M36.3,255.6l29.4,27.7c5.3,5,13.6,5.1,19.1,0.3c53.2-47.6,120.7-73.7,190-73.7c26.9,0,53.2,3.9,78.5,11.3   c-29.3,44.6-29.3,102,0,146.6c-25.3,7.4-51.6,11.3-78.5,11.3c-69,0-136.3-26-189.4-73.2c-2.7-2.4-13.4-6.3-19.1,0.3l-30.1,28.3   l5.7-40C42.2,293,36.3,255.6,36.3,255.6z"}}),n("circle",{attrs:{cx:"398.8",cy:"273.8",r:"14.1"}})])]),t._m(0)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("h2",[t._v("LOCAL TAPAS")]),n("p"),n("ul",{staticClass:"plates"},[n("li",[t._v("Loading Tapas...")])]),n("form",{staticClass:"add-items d-flex justify-content-center mb-4"},[n("input",{staticClass:"form-control",attrs:{type:"text",name:"item",placeholder:"Item Name",required:""}}),n("input",{staticClass:"btn btn-sm",attrs:{type:"submit",value:"+ Add Item"}})]),n("form",{staticClass:"act-items form-inline d-flex justify-content-around p-2"},[n("button",{staticClass:"btn",attrs:{type:"button","data-act":"clearItems"}},[t._v("Clear")]),n("button",{staticClass:"btn",attrs:{type:"button","data-act":"checkAll"}},[t._v("✔️ All")]),n("button",{staticClass:"btn",attrs:{type:"button","data-act":"uncheckAll"}},[t._v("❌ All")])])])}];n("VRzm"),n("rGqo");function a(t,e){for(var n in e){var r=e[n];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,n,r)}if(Object.getOwnPropertySymbols)for(var i=Object.getOwnPropertySymbols(e),a=0;a<i.length;a++){var c=i[a];r=e[c];r.configurable=r.enumerable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c,r)}return t}function c(){var t,e,n="items",r=(t={LocalStorage:window.localStorage},e={},e[n]=e[n]||{},e[n].get=function(){return JSON.parse(this.LocalStorage.getItem(n))||[]},e[n]=e[n]||{},e[n].set=function(t){"string"!==typeof t&&(t=JSON.stringify(t)),this.LocalStorage.setItem(n,t)},a(t,e),t),i=document.querySelector(".add-items"),c=document.querySelector(".act-items"),o=document.querySelector(".plates"),s=r[n];function u(t){t.preventDefault();var e=this.querySelector("[name=item]").value;s.push({text:e,done:!1}),l(s,o),r.items=s,this.reset()}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;e.innerHTML=t.map(function(t,e){return'\n        <li>\n          <input type="checkbox" data-index="'.concat(e,'" id="item').concat(e,'" ').concat(t.done?"checked":"",'/>\n          <label for="item').concat(e,'">').concat(t.text,"</label>\n        </li>\n      ")}).join("")}function f(t){var e=s[t];e.done=!e.done,l(s,o),r.items=s}function p(){s.splice(0),r[n]=s,l(s,o)}function d(t){s.forEach(function(e,n){s[n].done=!t,f(n)})}i.addEventListener("submit",u),o.addEventListener("click",function(t){t.target.matches("input[type=checkbox]")&&f(t.target.dataset.index)}),c.querySelectorAll("button").forEach(function(t){return t.addEventListener("click",function(t){switch(t.target.dataset.act){case"clearItems":p();break;case"checkAll":d(!0);break;case"uncheckAll":d(!1);break;default:break}})}),l(s,o)}var o=n("S72G"),s=n("NyBl"),u={name:"LocalStorage",mixins:[Object(s["a"])(function(){return{raw:o}},c)]},l=u,f=(n("1gn5"),n("KHd+")),p=Object(f["a"])(l,r,i,!1,null,"4bd014ba",null);e["default"]=p.exports},rGqo:function(t,e,n){for(var r=n("yt8O"),i=n("DVgA"),a=n("KroJ"),c=n("dyZX"),o=n("Mukb"),s=n("hPIQ"),u=n("K0xU"),l=u("iterator"),f=u("toStringTag"),p=s.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=i(d),h=0;h<m.length;h++){var v,g=m[h],y=d[g],b=c[g],L=b&&b.prototype;if(L&&(L[l]||o(L,l,p),L[f]||o(L,f,g),s[g]=p,y))for(v in r)L[v]||a(L,v,r[v],!0)}},vhPU:function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},w2a5:function(t,e,n){var r=n("aCFj"),i=n("ne8i"),a=n("d/Gc");t.exports=function(t){return function(e,n,c){var o,s=r(e),u=i(s.length),l=a(c,u);if(t&&n!=n){while(u>l)if(o=s[l++],o!=o)return!0}else for(;u>l;l++)if((t||l in s)&&s[l]===n)return t||l||0;return!t&&-1}}},yt8O:function(t,e,n){"use strict";var r=n("nGyu"),i=n("1TsA"),a=n("hPIQ"),c=n("aCFj");t.exports=n("Afnz")(Array,"Array",function(t,e){this._t=c(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,i(1)):i(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),a.Arguments=a.Array,r("keys"),r("values"),r("entries")},zhAb:function(t,e,n){var r=n("aagx"),i=n("aCFj"),a=n("w2a5")(!1),c=n("YTvA")("IE_PROTO");t.exports=function(t,e){var n,o=i(t),s=0,u=[];for(n in o)n!=c&&r(o,n)&&u.push(n);while(e.length>s)r(o,n=e[s++])&&(~a(u,n)||u.push(n));return u}}}]);
//# sourceMappingURL=5.9156c1c1.js.map