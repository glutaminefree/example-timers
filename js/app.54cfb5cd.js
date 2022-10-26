(function(){"use strict";var e={2438:function(e,t,n){var i=n(6369),s=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("div",{staticClass:"container mx-auto"},[t("form",{staticClass:"pt-5",on:{submit:function(e){e.preventDefault()}}},[t("div",{staticClass:"text-lg font-semibold"},[e._v("Add new timer")]),t("div",{staticClass:"flex space-x-4 mt-2"},[t("ui-input-number",{attrs:{label:"Minutes",max:60},model:{value:e.newTimerMinutes,callback:function(t){e.newTimerMinutes=t},expression:"newTimerMinutes"}}),t("ui-input-number",{attrs:{label:"Seconds",step:10,max:59},model:{value:e.newTimerSeconds,callback:function(t){e.newTimerSeconds=t},expression:"newTimerSeconds"}}),t("ui-button",{staticClass:"self-end",on:{click:e.addTimer}},[e._v("Add")])],1)]),t("div",{staticClass:"mt-4 pt-4 space-y-4 border-t-4 border-gray-200"},e._l(e.timers,(function(e,n){return t("user-timer",{key:n,attrs:{label:`Timer #${n+1}`,minutes:e.minutes,seconds:e.seconds}})})),1)])])},r=[],u=(n(7658),function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-lg"},[t("div",{staticClass:"font-bold"},[t("span",[e._v(e._s(e.label))]),e.finishedAt.length?t("span",{staticClass:"text-gray-400"},[t("span",[e._v(" | Finished at ‐")]),t("span",[e._v(e._s(e.finishedAt))])]):e._e()]),t("div",[e._v(e._s(e.min<10?`0${e.min}`:e.min)+":"+e._s(e.sec<10?`0${e.sec}`:e.sec))])])}),a=[],l={name:"UserTimer",props:{label:{type:String,required:!0},minutes:{type:Number,required:!0},seconds:{type:Number,required:!0}},data(){return{min:this.minutes,sec:this.seconds,finishedAt:"",interval:null}},created(){this.initTimer()},methods:{initTimer(){this.interval=setInterval(this.timerTick,1e3)},timerTick(){if(this.sec>0)this.sec-=1;else if(this.min>0)this.min-=1,this.sec=59;else{const e=new Date;this.finishedAt=e.toLocaleTimeString("ru"),clearInterval(this.interval),this.interval=null}}}},o=l,c=n(1001),m=(0,c.Z)(o,u,a,!1,null,"4b578d5e",null),d=m.exports,p=function(){var e=this,t=e._self._c;return t("label",{attrs:{for:e.label}},[t("span",[e._v(e._s(e.label))]),t("div",{staticClass:"relative"},[t("input",{ref:"input",staticClass:"input",attrs:{id:e.label,type:"text"},domProps:{value:e.value},on:{keypress:e.onKeyPress,input:e.updateValue}}),t("div",{staticClass:"absolute top-1 right-1 bottom-1"},[t("div",{staticClass:"input__arrow rounded-t",on:{click:function(t){return t.preventDefault(),e.increment.apply(null,arguments)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.increment.apply(null,arguments)}}},[e._v(" + ")]),t("div",{staticClass:"input__arrow rounded-b",on:{click:function(t){return t.preventDefault(),e.decrement.apply(null,arguments)},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.decrement.apply(null,arguments)}}},[e._v(" - ")])])])])},f=[],h={name:"UiInputNumber",props:{label:{type:String,required:!0},value:{type:Number,required:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:Number,default:1}},methods:{increment(){const e=this.value+this.step;e<=this.max&&this.$emit("input",e)},decrement(){const e=this.value-this.step;e>=this.max&&this.$emit("input",e)},onKeyPress(e){return!1!==/\d/.test(e.key)||(e.preventDefault(),!1)},updateValue(e){let t=parseInt(e.target.value,10);Number.isNaN(t)||t<this.min?t=this.min:t>this.max&&(t=this.max),this.$emit("input",t),this.$refs.input.value=t}}},v=h,b=(0,c.Z)(v,p,f,!1,null,"9d3974ee",null),y=b.exports,_=function(){var e=this,t=e._self._c;return t("button",{staticClass:"button",on:{click:e.onClick}},[e._t("default")],2)},k=[],w={name:"UiButton",methods:{onClick(){this.$emit("click")}}},x=w,T=(0,c.Z)(x,_,k,!1,null,"6b0d5a86",null),C=T.exports,g={name:"App",components:{UserTimer:d,UiInputNumber:y,UiButton:C},data(){return{timers:[],newTimerMinutes:0,newTimerSeconds:0}},methods:{addTimer(){(this.newTimerMinutes||this.newTimerSeconds)&&(this.timers.length<50?this.timers.push({minutes:this.newTimerMinutes,seconds:this.newTimerSeconds}):alert("You have too many timers at this moment. Delete some first."))}}},O=g,N=(0,c.Z)(O,s,r,!1,null,null,null),S=N.exports;i.ZP.config.productionTip=!1,new i.ZP({render:e=>e(S)}).$mount("#app")}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,i,s,r){if(!i){var u=1/0;for(c=0;c<e.length;c++){i=e[c][0],s=e[c][1],r=e[c][2];for(var a=!0,l=0;l<i.length;l++)(!1&r||u>=r)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(a=!1,r<u&&(u=r));if(a){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[i,s,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var s,r,u=i[0],a=i[1],l=i[2],o=0;if(u.some((function(t){return 0!==e[t]}))){for(s in a)n.o(a,s)&&(n.m[s]=a[s]);if(l)var c=l(n)}for(t&&t(i);o<u.length;o++)r=u[o],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},i=self["webpackChunktimers_list"]=self["webpackChunktimers_list"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(2438)}));i=n.O(i)})();
//# sourceMappingURL=app.54cfb5cd.js.map