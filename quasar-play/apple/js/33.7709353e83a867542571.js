webpackJsonp([33,97],{200:function(t,e,i){var n,s;n=i(273);var a=i(392);s=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(s=n=n.default),"function"==typeof s&&(s=s.options),s.render=a.render,s.staticRenderFns=a.staticRenderFns,t.exports=n},273:function(t,e,i){"use strict";function n(t){return(t<10?"0":"")+t}Object.defineProperty(e,"__esModule",{value:!0});var s=i(2);e.default={data:function(){return{eventList:[]}},methods:{writeVisibilityState:function(t){var e=new Date;this.eventList.unshift({timestamp:n(e.getHours())+":"+n(e.getMinutes())+":"+n(e.getSeconds())+"."+e.getMilliseconds(),label:" App became "+t})}},mounted:function(){var t=this;this.$nextTick(function(){s.Events.$on("app:visibility",t.writeVisibilityState)})},beforeDestroy:function(){s.Events.$off("app:visibility",this.writeVisibilityState)}}},392:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("div",{staticClass:"layout-padding"},[t._m(0),t._v(" "),t.eventList.length>0?e("table",{staticClass:"q-table striped"},[e("tbody",t._l(t.eventList,function(i){return e("tr",{key:i.timestamp},[e("td",[t._v(t._s(i.timestamp))]),t._v(" "),e("td",[t._v(t._s(i.label))])])}))]):t._e()])])},staticRenderFns:[function(){var t=this,e=(t.$createElement,t._c);return e("p",{staticClass:"caption"},[t._v("\n      Switch to another\n      "),e("span",{staticClass:"cordova-hide"},[t._v("\n        tab in your browser\n      ")]),t._v(" "),e("span",{staticClass:"cordova-only"},[t._v("\n        App\n      ")]),t._v("\n      then come back here to see Visibility in action.\n    ")])}]}}});