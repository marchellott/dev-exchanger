(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{509:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxMiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik0wLjc1ODMzNyA2LjA4MzMzQzEuMDgzMzQgNi40MDgzMyAxLjYwODM0IDYuNDA4MzMgMS45MzMzNCA2LjA4MzMzTDUuMTY2NjcgMi44NTgzM1YxNS41QzUuMTY2NjcgMTUuOTU4MyA1LjU0MTY3IDE2LjMzMzMgNiAxNi4zMzMzQzYuNDU4MzQgMTYuMzMzMyA2LjgzMzM0IDE1Ljk1ODMgNi44MzMzNCAxNS41VjIuODU4MzNMMTAuMDY2NyA2LjA5MTY3QzEwLjM5MTcgNi40MTY2NyAxMC45MTY3IDYuNDE2NjcgMTEuMjQxNyA2LjA5MTY3QzExLjU2NjcgNS43NjY2NyAxMS41NjY3IDUuMjQxNjcgMTEuMjQxNyA0LjkxNjY3TDYuNTgzMzQgMC4yNDk5OTlDNi4yNTgzNCAtMC4wNzUwMDE1IDUuNzMzMzQgLTAuMDc1MDAxNSA1LjQwODM0IDAuMjQ5OTk5TDAuNzU4MzM3IDQuOTA4MzNDMC40MzMzMzcgNS4yMzMzMyAwLjQzMzMzNyA1Ljc2NjY3IDAuNzU4MzM3IDYuMDgzMzNaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXIpIi8+DQo8ZGVmcz4NCjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhciIgeDE9IjkuOTMxMjIiIHkxPSIzLjM0MTYiIHgyPSIxLjkzNCIgeTI9IjQuMzM0ODIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4NCjxzdG9wIHN0b3AtY29sb3I9IiM0MTcxRjQiLz4NCjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzgzQTFGNyIvPg0KPC9saW5lYXJHcmFkaWVudD4NCjwvZGVmcz4NCjwvc3ZnPg0K"},547:function(t,e,r){var content=r(597);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(45).default)("3ec94d7f",content,!0,{sourceMap:!1})},596:function(t,e,r){"use strict";r(547)},597:function(t,e,r){var o=r(44)((function(i){return i[1]}));o.push([t.i,".form-v2--input p[data-v-72c0c362]{margin:10px 0 0}button.btn.btn-submit.btn-submitForm[data-v-72c0c362]{padding:15px 30px}.form-v2--input input[data-v-72c0c362]{background:#fff;border:1px solid #dedede;border-radius:14px;color:#282e38;height:50px;padding:14px 30px}",""]),o.locals={},t.exports=o},751:function(t,e,r){"use strict";r.r(e);r(25),r(510),r(24),r(71),r(19),r(20);var o=r(5),n=r(0),c=(r(10),r(12),r(46),r(312),r(14),r(6),r(40),r(13),r(11),r(112),r(154),r(50),r(311),r(36),r(3)),l=r(516);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={head:function(){if(!this.currentRoute||!this.currentRoute.seo)return{};var t=this.$seo({title:this.currentRoute.seo.title,description:this.currentRoute.seo.description,openGraph:{title:this.currentRoute.seo.title,description:this.currentRoute.seo.description,content:this.currentRoute.seo.instructions,image:{url:this.$rest.fsPath+this.currentRoute.from.image.files[3].url,width:100,height:100}}});return{meta:t.meta,title:t.title}},data:function(){return{limitAmount:!1,errorRoutes:"",from:"",to:"",val1:"",val2:"",amount:"",fromValues:{},toValues:{},routeValues:{},email:"",symbolFrom:"",symbolTo:"",valid:1,agree:!0}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.app,t.seo,n=t.error,e.next=3,o.$rest.api("public/exchanger/route/get/one/by-friendlyURL",{friendlyURL:r.friendly_url,lang:o.i18n.locale}).catch((function(){return n({statusCode:404,message:"Page not found"}),null}));case 3:if(!((c=e.sent)&&c.success&&c.data&&c.data.route)){e.next=7;break}return c.data.route.seo,e.abrupt("return",{currentRoute:c.data.route,loadRouteGetOne:!0});case 7:return e.abrupt("return",{currentRoute:{to:{},from:{},rate:{}}});case 8:case"end":return e.stop()}}),e)})))()},computed:d(d(d({},Object(c.c)("exchange",["info","load"])),Object(c.c)("user",{profile:"info"})),{},{fromList:function(){var t=this,e={};return this.info?this.info.map((function(e){return d(d({},e),{},{can:t.info.some((function(r){return e.from.xml===r.from.xml&&t.to.name===r.to.xml}))})})).filter((function(t){return!e[t.from.xml]&&(e[t.from.xml]=!0,!0)})).filter((function(e){return!t.symbolFrom||t.symbolFrom===e.from.symbol})).sort((function(a,b){return a.from.positionIn>b.from.positionIn?1:-1})):[]},toList:function(){var t=this,e={};return this.info.filter((function(t){return!e[t.to.xml]&&(e[t.to.xml]=!0,!0)})).map((function(e){return d(d({},e),{},{can:t.info.some((function(r){return e.to.xml===r.to.xml&&t.from.xml===r.from.xml}))})})).filter((function(e){return!t.symbolTo||t.symbolTo===e.to.symbol})).sort((function(a,b){return a.to.positionOut>b.to.positionOut?1:-1}))},fromSymbolList:function(){var t={};return this.info.forEach((function(e){return t[e.from.symbol]=!0})),Object.keys(t)},toSymbolList:function(){var t={};return this.info.forEach((function(e){return t[e.to.symbol]=!0})),Object.keys(t)},matchedRoute:function(){var t=this;return this.info.find((function(e){return t.from.xml===e.from.xml&&t.to.xml===e.to.xml}))||{from:{},rate:{},to:{}}},instructions:function(){return this.currentRoute?this.currentRoute.instructions.filter((function(t){return"createOrder"===t.step})):[]}}),methods:d(d({},Object(c.b)({routes:"exchange/routes",createOrder:"exchange/createOrder"})),{},{setVal2:function(){this.val2=Number(this.currentRoute.rate.amount),this.correctFrom()},setMaxValueTo:function(){this.val2=Number(this.currentRoute.rate.amount),this.calculate("from")},correctFrom:function(){var t=Object(l.BigNumber)(this.currentRoute.rate.out).dividedBy(this.currentRoute.rate.in)||1,e=Object(l.BigNumber)(this.val2||0).plus(this.currentRoute.rate.outFeeAmount).dividedBy(t).decimalPlaces(this.currentRoute.from.decimal||2);if(e.lte(0))return this.val1=0;new l.BigNumber(this.val2).isGreaterThan(this.currentRoute.rate.amount)?this.limitAmount=!0:this.limitAmount=!1,this.val1=e},create:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c,l,m,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.currentRoute.routeId,!(t.currentRoute.from.fields.some((function(e){return e.required&&!t.fromValues[e._id]}))&&t.currentRoute.to.fields.some((function(e){return e.required&&!t.toValues[e._id]}))&&t.currentRoute.fields.some((function(e){return e.required&&!t.routeValues[e._id]})))){e.next=3;break}return e.abrupt("return",t.$store.dispatch("notify/add",{message:t.$t("page.main.messages.checkFields"),type:"warning"}));case 3:if(t.agree){e.next=5;break}return e.abrupt("return",t.$store.dispatch("notify/add",{message:t.$t("page.main.messages.mustBeAgree"),type:"warning"}));case 5:return o=Object.keys(t.fromValues).map((function(e){return{key:e,value:t.fromValues[e]}})),n=Object.keys(t.toValues).map((function(e){return{key:e,value:t.toValues[e]}})),c=Object.keys(t.routeValues).map((function(e){return{key:e,value:t.routeValues[e]}})),l={routeId:r,fromValues:o,toValues:n,routeValues:c,agreement:!0,email:t.email,lang:t.$root.$i18n.locale,amount:t.val1,vuexActionV2:!0},e.next=11,t.createOrder(l).catch((function(e){t.$swal("",e.message,"error")}));case 11:(m=e.sent)&&(t.profile||((d=JSON.parse(localStorage.getItem("orders")))?d.push(m):d=[m],localStorage.setItem("orders",JSON.stringify(d))),t.$router.push(t.localePath("/order/".concat(m.uid,"/").concat(m.secret,"/"))));case 13:case"end":return e.stop()}}),e)})))()},correctTo:function(){if(!(this.currentRoute&&this.currentRoute.rate&&this.currentRoute.rate.out&&this.currentRoute.rate.in))return this.val2=0,null;var t=Object(l.BigNumber)(this.currentRoute.rate.out).dividedBy(this.currentRoute.rate.in)||1,e=Object(l.BigNumber)(this.val1||0).multipliedBy(t).minus(this.currentRoute.rate.outFeeAmount).decimalPlaces(this.currentRoute.to.decimal||2);if(e.lte(0))return this.val2=0;e.isGreaterThan(this.currentRoute.rate.amount)?this.limitAmount=!0:this.limitAmount=!1,this.val2=e},changeCurrency:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.correctTo();case 1:case"end":return e.stop()}}),e)})))()},fixedNumber:function(t,e,r){var o=Number(Math.pow(10,e)),n=0;return n="floor"===t||"ceil"===t?Math.floor(r*o)/o:Number(Number(r).toFixed(e)),e<=2&&e>0?n=n.toFixed(2):0===e&&(n=n.toFixed(0)),n},parseSeoText:function(text){return text&&(text=text.replace(/\[\[inNameCurrency\]\]/g,this.currentRoute.from.name).replace(/\[\[outNameCurrency\]\]/g,this.currentRoute.to.name).replace(/\[\[inSymbol\]\]/g,this.currentRoute.from.symbol).replace(/\[\[outSymbol\]\]/g,this.currentRoute.to.symbol)),text=this.randomTextParser(text)},randomTextParser:function(text){if(text){var t=Date.now(),e=text.match(/\[\((.*?)\)\]/g);if(e&&e.length)for(var i=0;i<e.length;i++){var r=e[i].replace(/[\(\[\]\)]/g,"").split("|"),o=Math.floor(t*(i+1)%r.length);text=text.replace(e[i],r[o])}}return text}})},v=(r(596),r(7)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"exchangeform-step-2-page"},[e("div",{staticClass:"under-header"},[e("div",{staticClass:"form-confirmation"},[t.currentRoute&&t.currentRoute.routeId?e("div",{staticClass:"container--form"},[t.currentRoute.seo&&t.currentRoute.seo.title?e("h1",{staticClass:"text-center"},[t._v(t._s(t.currentRoute.seo.title))]):e("h1",{staticClass:"text-center"},[t._v("\n          "+t._s(t.$t("page.main.details.instructionTitle",{from:t.currentRoute.from.name+" "+t.currentRoute.from.symbol,to:t.currentRoute.to.name+" "+t.currentRoute.to.symbol}))+"\n        ")]),t._v(" "),t.currentRoute.seo&&t.currentRoute.seo.subtitle?e("h2",{staticClass:"text-center"},[t._v(t._s(t.currentRoute.seo.subtitle))]):e("h2",{staticClass:"text-center"},[t._v(t._s(t.$t("page.main.descr")))]),t._v(" "),e("form",{staticClass:"form"},[t._l(t.instructions,(function(r){return e("p",{key:r._id,staticClass:"form-attention",domProps:{innerHTML:t._s(r.content)}})})),t._v(" "),e("div",{staticClass:"exchangeform-step-2"},[e("div",{staticClass:"form-v2"},[e("div",{staticClass:"receive"},[e("div",{staticClass:"form--title"},[e("h4",[t._v(t._s(t.$t("page.main.from.title")))]),t._v(" "),e("img",{attrs:{src:r(509),alt:""}})]),t._v(" "),e("div",{staticClass:"form-v2--group"},[e("div",{staticClass:"form-v2--input"},[e("span",{staticClass:"label"}),t._v(" "),e("div",{staticClass:"exchangeform__date"},[e("span",{staticClass:"exchangeform__date-icon"},[e("img",{attrs:{src:t.$rest.urlImg(t.currentRoute.from.image).small,alt:"Icon currency take"}})]),t._v(" "),e("p",{staticClass:"exchangeform__date-name"},[t._v(t._s(t.currentRoute.from.name+" "+t.currentRoute.from.symbol))])])]),t._v(" "),e("div",{staticClass:"form-v2--input"},[e("span",{staticClass:"label"},[t._v(t._s(t.$t("page.main.details.amount"))+" *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.val1,expression:"val1"}],style:{color:"incorrect_data"===t.val1?"red":""},attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.val1},on:{input:[function(e){e.target.composing||(t.val1=e.target.value)},t.correctTo]}}),t._v(" "),e("div",["0"!==t.currentRoute.from.min?e("p",[t._v("\n                        "+t._s(t.$t("page.main.from.min")+" ")+"\n                        "),e("span",[t._v(t._s(t.fixedNumber("ceil",t.currentRoute.from.decimal,t.currentRoute.from.min)))])]):t._e(),t._v(" "),"0"!==t.currentRoute.from.min&&"0"!==t.currentRoute.from.max?e("p",[t._v(" - ")]):t._e(),t._v(" "),"0"!==t.currentRoute.from.max?e("p",[t._v("\n                        "+t._s(t.$t("page.main.from.max")+" ")+"\n                        "),e("span",[t._v(t._s(t.fixedNumber("floor",t.currentRoute.from.decimal,t.currentRoute.from.max)))])]):t._e()])])]),t._v(" "),t._l(t.currentRoute.from.fields,(function(r){return e("div",{key:r.id,staticClass:"form-v2--input b-top m-top-18 p-top-16"},[e("span",{staticClass:"label"},[t._v(t._s(r.name)+" "+t._s(r.required?"*":""))]),t._v(" "),e("div",{staticClass:"form-v2--number"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.fromValues[r._id],expression:"fromValues[field._id]"}],style:{border:!t.fromValues[r._id]||t.fromValues[r._id].match(r.regexp)?"":"1px solid red"},attrs:{placeholder:r.placeholder},domProps:{value:t.fromValues[r._id]},on:{input:function(e){e.target.composing||t.$set(t.fromValues,r._id,e.target.value)}}}),t._v(" "),e("span",{staticClass:"currency--symbol"},[e("img",{attrs:{src:t.$rest.urlImg(t.currentRoute.from.image).small,alt:"Icon currency take"}})])]),t._v(" "),t.fromValues[r._id]&&!t.fromValues[r._id].match(r.regexp)?e("p",{style:{color:"red"}},[t._v(t._s(r.regexp_error))]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"give"},[e("div",{staticClass:"form--title"},[e("h4",[t._v(t._s(t.$t("page.main.to.title")))]),t._v(" "),e("img",{attrs:{src:r(509),alt:""}})]),t._v(" "),e("div",{staticClass:"form-v2--group"},[e("div",{staticClass:"form-v2--input"},[e("span",{staticClass:"label"}),t._v(" "),e("div",{staticClass:"exchangeform__date"},[e("span",{staticClass:"exchangeform__date-icon"},[e("img",{attrs:{src:t.$rest.urlImg(t.currentRoute.to.image).small,alt:"Icon currency give"}})]),t._v(" "),e("p",{staticClass:"exchangeform__date-name"},[t._v(t._s(t.currentRoute.to.name+" "+t.currentRoute.to.symbol))])]),t._v(" "),e("p",[t._v("\n                      "+t._s(t.$t("page.main.to.rate"))+"\n                      "),e("span",[t._v(t._s(t.currentRoute.rate.in)+":")]),t._v(" "),e("span",[t._v(t._s(t.currentRoute.rate.out))])])]),t._v(" "),e("div",{staticClass:"form-v2--input"},[e("span",{staticClass:"label"},[t._v(t._s(t.$t("page.main.details.amount"))+" *")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.val2,expression:"val2"}],style:{color:t.limitAmount?"red":""},attrs:{type:"text",placeholder:"0.00"},domProps:{value:t.val2},on:{input:[function(e){e.target.composing||(t.val2=e.target.value)},t.correctFrom]}}),t._v(" "),t.currentRoute&&t.currentRoute.rate&&t.currentRoute.rate.amount?e("p",{style:{color:t.limitAmount?"red":""}},[t._v("\n                      "+t._s(t.$t("page.main.to.reserve")+" ")+"\n                      "),e("span",[t._v(t._s(t.fixedNumber("floor",t.currentRoute.to.decimal,t.currentRoute.rate.amount)))])]):t._e()])]),t._v(" "),t._l(t.currentRoute.to.fields,(function(r){return e("div",{key:r.id,staticClass:"form-v2--input b-top m-top-18 p-top-16"},[e("span",{staticClass:"label"},[t._v(t._s(r.name)+" "+t._s(r.required?"*":""))]),t._v(" "),e("div",{staticClass:"form-v2--number"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.toValues[r._id],expression:"toValues[field._id]"}],style:{border:!t.toValues[r._id]||t.toValues[r._id].match(r.regexp)?"":"1px solid red"},attrs:{placeholder:r.placeholder},domProps:{value:t.toValues[r._id]},on:{input:function(e){e.target.composing||t.$set(t.toValues,r._id,e.target.value)}}}),t._v(" "),e("span",{staticClass:"currency--symbol"},[e("img",{attrs:{src:t.$rest.urlImg(t.currentRoute.to.image).small,alt:"Icon currency take"}})])]),t._v(" "),t.toValues[r._id]&&!t.toValues[r._id].match(r.regexp)?e("p",{style:{color:"red"}},[t._v(t._s(r.regexp_error))]):t._e()])}))],2),t._v(" "),e("div",{staticClass:"dataInput"},[t.currentRoute.fields&&t.currentRoute.fields.lenght>0?e("div",{staticClass:"form--title"},[e("h4",[t._v(t._s(t.$t("page.main.details.personalData")))]),t._v(" "),e("img",{attrs:{src:r(509),alt:""}})]):t._e(),t._v(" "),t._l(t.currentRoute.fields,(function(r){return e("div",{key:r.id,staticClass:"form-v2--input"},[e("span",{staticClass:"label"},[t._v(t._s(r.name)+" "+t._s(r.required?"*":""))]),t._v(" "),e("div",{staticClass:"form-v2--number"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.routeValues[r._id],expression:"routeValues[field._id]"}],style:{border:!t.routeValues[r._id]||t.routeValues[r._id].match(r.regexp)?"":"1px solid red"},attrs:{placeholder:r.placeholder},domProps:{value:t.routeValues[r._id]},on:{input:function(e){e.target.composing||t.$set(t.routeValues,r._id,e.target.value)}}})]),t._v(" "),t.routeValues[r._id]&&!t.routeValues[r._id].match(r.regexp)?e("p",{style:{color:"red"}},[t._v(t._s(r.regexp_error))]):t._e()])})),t._v(" "),t.load?e("button",{staticClass:"btn btn-submit btn-submitForm",on:{click:function(e){e.preventDefault(),t.currentRoute.routeId&&t.create()}}},[t._v(t._s(t.$t("page.main.details.submit"))+"\n                ")]):e("loader",{attrs:{responsive:!0,width:"100",height:"100"}})],2)]),t._v(" "),t.currentRoute.seo.instruction?e("div",{staticClass:"exchangeform-step-2--info b-top p-top-16",domProps:{innerHTML:t._s(t.parseSeoText(t.currentRoute.seo.instruction))}}):e("div",{staticClass:"exchangeform-step-2--info b-top p-top-16"},[e("h3",{staticClass:"info-title"},[t._v("\n                "+t._s(t.$t("page.main.details.instructionTitle",{from:t.currentRoute.from.name+" "+t.currentRoute.from.symbol,to:t.currentRoute.to.name+" "+t.currentRoute.to.symbol}))+"\n              ")]),t._v(" "),e("p",[t._v(t._s(t.$t("page.main.details.stepDescription")))]),t._v(" "),e("ol",[e("li",[e("span",[t._v("\n                    "+t._s(t.$t("page.main.details.step_p1"))+"\n                    "),e("nuxt-link",{attrs:{to:t.localePath("/rules/")}},[t._v("«"+t._s(t.$t("ui.header.rules"))+"»")]),t._v(".\n                  ")],1)]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("page.main.details.step_p2"))+" «"+t._s(t.$t("page.main.details.submit"))+"».")])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("page.main.details.step_p3")))])]),t._v(" "),e("li",[e("span",[t._v(t._s(t.$t("page.main.details.step_p4")))])])])])])],2)]):e("div",[e("h1",{staticClass:"text-center"},[t._v("Route is not found.")])])])])])}),[],!1,null,"72c0c362",null);e.default=component.exports}}]);