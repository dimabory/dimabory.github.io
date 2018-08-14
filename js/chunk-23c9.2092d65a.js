(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23c9"],{"00ca":function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("h2",{staticClass:"text-center"},[t._v("Fun With HTML5 Canvas")]),e("hr"),e("p",{staticClass:"text-monospace text-center"},[t._v("Make sure you've opened this page in desktop.")]),e("div",{staticClass:"row d-flex justify-content-center"},[e("div",{staticClass:"col col-12-xs draw-container mb-4"},[e("canvas",{attrs:{id:"draw"}})])])])}];function i(){var t=document.querySelector("#draw"),n=t.getContext("2d");t.width=t.parentElement.offsetWidth,t.height=t.parentElement.offsetHeight,n.strokeStyle="#BADA55",n.lineJoin="round",n.lineCap="round",n.globalCompositeOperation="hue";var e=!1,o=0,s=0,i=0,a=!0;function r(t){var r=t.offsetX,c=t.offsetY;e&&(n.strokeStyle="hsl(".concat(i,", 100%, 50%)"),document.documentElement.style.setProperty("--08-fun-with-html5-canvas-border-color",n.strokeStyle),n.beginPath(),n.moveTo(o,s),n.lineTo(r,c),n.stroke(),o=r,s=c,++i,i>=360&&(i=0),(n.lineWidth>=50||n.lineWidth<=1)&&(a=!a),a?++n.lineWidth:--n.lineWidth)}t.addEventListener("mousemove",r),t.addEventListener("mousedown",function(t){e=!0;var n=[t.offsetX,t.offsetY];o=n[0],s=n[1]}),t.addEventListener("mouseup",function(){return e=!1}),t.addEventListener("mouseout",function(){return e=!1})}var a=e("fcbd"),r=e("3720"),c={name:"FunWithHTML5Canvas",mixins:[Object(r["a"])(function(){return{raw:a}},i)]},l=c,u=(e("9177"),e("2877")),d=Object(u["a"])(l,o,s,!1,null,"452d7404",null);d.options.__file="index.vue";n["default"]=d.exports},3720:function(t,n,e){"use strict";n["a"]=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0};return{data:t,mounted:function(){n(),this.$emit("mounted",t.call(this))}}}},9177:function(t,n,e){"use strict";var o=e("da1c"),s=e.n(o);s.a},da1c:function(t,n,e){},fcbd:function(t,n){t.exports="export function init () {\n  const canvas = document.querySelector('#draw')\n  const ctx    = canvas.getContext('2d')\n\n  canvas.width  = canvas.parentElement.offsetWidth\n  canvas.height = canvas.parentElement.offsetHeight\n\n  ctx.strokeStyle              = '#BADA55'\n  ctx.lineJoin                 = 'round'\n  ctx.lineCap                  = 'round'\n  ctx.globalCompositeOperation = 'hue'\n\n  let isDrawing = false\n  let lastX     = 0\n  let lastY     = 0\n  let hue       = 0\n  let direction = true\n\n  function draw ({offsetX, offsetY}) {\n    if (!isDrawing) {\n      return\n    }\n\n    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`\n\n    document.documentElement.style.setProperty(`--08-fun-with-html5-canvas-border-color`, ctx.strokeStyle)\n\n    ctx.beginPath()\n    ctx.moveTo(lastX, lastY)\n    ctx.lineTo(offsetX, offsetY)\n    ctx.stroke()\n\n    ;[lastX, lastY] = [offsetX, offsetY]\n    ++hue\n\n    if (hue >= 360) {\n      hue = 0\n    }\n\n    if (ctx.lineWidth >= 50 || ctx.lineWidth <= 1) {\n      direction = !direction\n    }\n    if (direction) {\n      ++ctx.lineWidth\n    } else {\n      --ctx.lineWidth\n    }\n  }\n\n  canvas.addEventListener('mousemove', draw)\n  canvas.addEventListener('mousedown', e => {\n    isDrawing       = true\n    ;[lastX, lastY] = [e.offsetX, e.offsetY]\n  })\n  canvas.addEventListener('mouseup', () => isDrawing = false)\n  canvas.addEventListener('mouseout', () => isDrawing = false)\n\n}\n"}}]);
//# sourceMappingURL=chunk-23c9.2092d65a.js.map