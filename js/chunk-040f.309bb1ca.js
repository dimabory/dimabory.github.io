(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-040f"],{"0bb1":function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center"},[t._v("Type Ahead")]),e("form",{staticClass:"search-form"},[e("input",{staticClass:"search",attrs:{type:"text",placeholder:"City or State"}}),e("ul",{staticClass:"suggestions"},[e("li",[t._v("Filter for a city")]),e("li",[t._v("or a state")])])])])}],a=(e("6b54"),e("a481"),e("4917"),e("3b2b"),e("8afe"));function i(){var t="https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json",n=[];function e(t,n){var e=new RegExp(t,"gi");return n.filter(function(t){return t.city.match(e)||t.state.match(e)})}function r(){var t=this,r="\n       <li>Filter for a city</li>\n       <li>or a state</li>\n    ";if(this.value.trim()){var a=new RegExp(this.value,"gi");r=e(this.value,n).map(function(n){var e=n.city.replace(a,'<span class="hl">'.concat(t.value,"</span>")),r=n.state.replace(a,'<span class="hl">'.concat(t.value,"</span>"));return'\n      <li>\n        <span class="name">'.concat(e,", ").concat(r,'</span>\n        <span class="population">').concat(c(n.population),"</span>\n      </li>\n      ")}).join("")}o.innerHTML=r}function c(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}fetch(t).then(function(t){return t.json()}).then(function(t){return n.push.apply(n,Object(a["a"])(t))});var i=document.querySelector(".search"),o=document.querySelector(".suggestions");i.addEventListener("input",r)}var o=e("89ba"),s=e("3720"),u={name:"TypeAhead",mixins:[Object(s["a"])(function(){return{raw:o}},i)]},f=u,l=(e("7a1f"),e("2877")),p=Object(l["a"])(f,r,c,!1,null,"18932fba",null);p.options.__file="index.vue";n["default"]=p.exports},"0bfb":function(t,n,e){"use strict";var r=e("cb7c");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"11e9":function(t,n,e){var r=e("52a7"),c=e("4630"),a=e("6821"),i=e("6a99"),o=e("69a8"),s=e("c69a"),u=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?u:function(t,n){if(t=a(t),n=i(n,!0),s)try{return u(t,n)}catch(t){}if(o(t,n))return c(!r.f.call(t,n),t[n])}},"214f":function(t,n,e){"use strict";var r=e("32e9"),c=e("2aba"),a=e("79e5"),i=e("be13"),o=e("2b4c");t.exports=function(t,n,e){var s=o(t),u=e(i,s,""[t]),f=u[0],l=u[1];a(function(){var n={};return n[s]=function(){return 7},7!=""[t](n)})&&(c(String.prototype,t,f),r(RegExp.prototype,s,2==n?function(t,n){return l.call(t,this,n)}:function(t){return l.call(t,this)}))}},2714:function(t,n,e){},3720:function(t,n,e){"use strict";n["a"]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){n(),this.$emit("mounted",t.call(this))}}}},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"3b2b":function(t,n,e){var r=e("7726"),c=e("5dbc"),a=e("86cc").f,i=e("9093").f,o=e("aae3"),s=e("0bfb"),u=r.RegExp,f=u,l=u.prototype,p=/a/g,h=/a/g,b=new u(p)!==p;if(e("9e1e")&&(!b||e("79e5")(function(){return h[e("2b4c")("match")]=!1,u(p)!=p||u(h)==h||"/a/i"!=u(p,"i")}))){u=function(t,n){var e=this instanceof u,r=o(t),a=void 0===n;return!e&&r&&t.constructor===u&&a?t:c(b?new f(r&&!a?t.source:t,n):f((r=t instanceof u)?t.source:t,r&&a?s.call(t):n),e?this:l,u)};for(var d=function(t){t in u||a(u,t,{configurable:!0,get:function(){return f[t]},set:function(n){f[t]=n}})},g=i(f),v=0;g.length>v;)d(g[v++]);l.constructor=u,u.prototype=l,e("2aba")(r,"RegExp",u)}e("7a56")("RegExp")},4917:function(t,n,e){e("214f")("match",1,function(t,n,e){return[function(e){"use strict";var r=t(this),c=void 0==e?void 0:e[n];return void 0!==c?c.call(e,r):new RegExp(e)[n](String(r))},e]})},"52a7":function(t,n){n.f={}.propertyIsEnumerable},"5dbc":function(t,n,e){var r=e("d3f4"),c=e("8b97").set;t.exports=function(t,n,e){var a,i=n.constructor;return i!==e&&"function"==typeof i&&(a=i.prototype)!==e.prototype&&r(a)&&c&&c(t,a),t}},"6b54":function(t,n,e){"use strict";e("3846");var r=e("cb7c"),c=e("0bfb"),a=e("9e1e"),i="toString",o=/./[i],s=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")(function(){return"/a/b"!=o.call({source:"a",flags:"b"})})?s(function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?c.call(t):void 0)}):o.name!=i&&s(function(){return o.call(this)})},"7a1f":function(t,n,e){"use strict";var r=e("2714"),c=e.n(r);c.a},"89ba":function(t,n){t.exports="export function init () {\n  const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'\n\n  const cities = []\n\n  fetch(endpoint)\n    .then(blob => blob.json())\n    .then(data => cities.push(...data))\n\n  function findMatches (query, cities) {\n    const re = new RegExp(query, 'gi')\n    return cities.filter(place => {\n      return place.city.match(re) || place.state.match(re)\n    })\n  }\n\n  function displayMatches () {\n    let html = `\n       <li>Filter for a city</li>\n       <li>or a state</li>\n    `\n    if (this.value.trim()) {\n      const re = new RegExp(this.value, 'gi')\n      html     = findMatches(this.value, cities)\n        .map(place => {\n          const cityName  = place.city.replace(re, `<span class=\"hl\">${this.value}</span>`)\n          const stateName = place.state.replace(re, `<span class=\"hl\">${this.value}</span>`)\n          return `\n      <li>\n        <span class=\"name\">${cityName}, ${stateName}</span>\n        <span class=\"population\">${numberWithCommas(place.population)}</span>\n      </li>\n      `\n        }).join('')\n    }\n\n    suggestions.innerHTML = html\n  }\n\n  function numberWithCommas (x) {\n    return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')\n  }\n\n  const searchInput = document.querySelector('.search')\n  const suggestions = document.querySelector('.suggestions')\n  searchInput.addEventListener('input', displayMatches)\n\n}\n"},"8afe":function(t,n,e){"use strict";function r(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}function c(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function a(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){return r(t)||c(t)||a()}e.d(n,"a",function(){return i})},"8b97":function(t,n,e){var r=e("d3f4"),c=e("cb7c"),a=function(t,n){if(c(t),!r(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,r){try{r=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),n=!(t instanceof Array)}catch(t){n=!0}return function(t,e){return a(t,e),n?t.__proto__=e:r(t,e),t}}({},!1):void 0),check:a}},9093:function(t,n,e){var r=e("ce10"),c=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,c)}},a481:function(t,n,e){e("214f")("replace",2,function(t,n,e){return[function(r,c){"use strict";var a=t(this),i=void 0==r?void 0:r[n];return void 0!==i?i.call(r,a,c):e.call(String(a),r,c)},e]})},aae3:function(t,n,e){var r=e("d3f4"),c=e("2d95"),a=e("2b4c")("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==c(t))}}}]);
//# sourceMappingURL=chunk-040f.309bb1ca.js.map