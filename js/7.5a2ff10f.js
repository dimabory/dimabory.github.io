(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"/ztc":function(n,o,e){"use strict";e.r(o);var t=function(){var n=this,o=n.$createElement;n._self._c;return n._m(0)},c=[function(){var n=this,o=n.$createElement,e=n._self._c||o;return e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center"},[n._v("Dev Tools Domination")]),e("p",{attrs:{onclick:"makeGreen()"}},[n._v("🔧 Nothing here...")])])}];e("f3/d");function s(){window.makeGreen=function(){var n=document.querySelector("p");n.style.color="var(--secondary)",n.style.fontSize="50px"};var n=[{name:"Snickers",age:2},{name:"hugo",age:8}];console.log("debug"),console.log("Hello I am a %s string!","💩"),console.log("Hello I am a ".concat("💩"," string")),console.log("%c I am some great text","font-size: 20px; background: yellow; text-shadow: 1px 1px 0 green"),console.warn("Oh no"),console.error("Shit!"),console.info("Info!");var o=document.querySelector("p");console.assert(o.classList.contains("ouch"),"That is wrong!"),console.assert(!0,"That is wrong!"),console.clear(),console.log(o),console.dir(o),console.clear(),n.forEach(function(n){console.groupCollapsed("".concat(n.name)),console.log(n),console.groupEnd("".concat(n.name))}),console.count("Wes"),console.count("Wes"),console.count("Steve"),console.count("Wes"),console.count("Steve"),console.count("Wes"),console.time("fetching data"),fetch("https://api.github.com/users/wesbos").then(function(n){return n.json()}).then(function(n){console.timeEnd("fetching data"),console.log(n)}),console.table(n)}var l=e("NVhK"),a=e("NyBl"),r={name:"DevToolsDomination",mixins:[Object(a["a"])(function(){return{raw:l}},s)]},i=r,u=(e("i3oJ"),e("KHd+")),g=Object(u["a"])(i,t,c,!1,null,"1133c852",null);o["default"]=g.exports},ABce:function(n,o,e){},NVhK:function(n,o){n.exports="export function init () {\n  window.makeGreen = function makeGreen () {\n    const p          = document.querySelector('p')\n    p.style.color    = 'var(--secondary)'\n    p.style.fontSize = '50px'\n  }\n  const dogs       = [{name: 'Snickers', age: 2}, {name: 'hugo', age: 8}]\n\n  // Regular\n  console.log('debug')\n\n  // Interpolated\n  console.log('Hello I am a %s string!', '💩')\n  console.log(`Hello I am a ${'💩'} string`)\n\n  // Styled\n  console.log('%c I am some great text', 'font-size: 20px; background: yellow; text-shadow: 1px 1px 0 green')\n\n  // warning!\n  console.warn('Oh no')\n\n  // Error :|\n  console.error('Shit!')\n\n  // Info\n  console.info('Info!')\n\n  // Testing\n  const p = document.querySelector('p')\n  console.assert(p.classList.contains('ouch'), 'That is wrong!')\n  console.assert(1 === 1, 'That is wrong!')\n\n  // clearing\n  console.clear()\n\n  // Viewing DOM Elements\n  console.log(p)\n  console.dir(p)\n\n  console.clear()\n  // Grouping together\n  dogs.forEach(dog => {\n    // console.group(`${dog.name}`)\n    console.groupCollapsed(`${dog.name}`)\n    console.log(dog)\n    console.groupEnd(`${dog.name}`)\n  })\n\n  // counting\n  console.count('Wes')\n  console.count('Wes')\n  console.count('Steve')\n  console.count('Wes')\n  console.count('Steve')\n  console.count('Wes')\n\n  // timing\n  console.time('fetching data')\n  fetch('https://api.github.com/users/wesbos')\n    .then(data => data.json())\n    .then(data => {\n      console.timeEnd('fetching data')\n      console.log(data)\n    })\n\n  console.table(dogs)\n}\n\n\n"},NyBl:function(n,o,e){"use strict";e("VRzm");o["a"]=function(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:n,mounted:function(){o(),this.$emit("mounted",n.call(this))}}}},i3oJ:function(n,o,e){"use strict";var t=e("ABce"),c=e.n(t);c.a}}]);
//# sourceMappingURL=7.5a2ff10f.js.map