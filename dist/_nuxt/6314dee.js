(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{507:function(t,e,r){"use strict";r(154);var n=function(t,e){return t>=e?t:e},c={props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0},itemsPerPage:{type:Number,default:10},totalItems:{type:Number,default:0},visiblePages:{type:Number,default:10}},data:function(){return{}},computed:{lastPage:function(){return this.totalPages?this.totalPages:this.totalItems%this.itemsPerPage==0?this.totalItems/this.itemsPerPage:Math.floor(this.totalItems/this.itemsPerPage)+1},paginationRange:function(){for(var t=this.currentPage-this.visiblePages/2<=0?1:this.currentPage+this.visiblePages/2>this.lastPage?n(this.lastPage-this.visiblePages+1,1):Math.ceil(this.currentPage-this.visiblePages/2),e=[],i=0;i<this.visiblePages&&i<this.lastPage;i++)e.push(t+i);return e}},methods:{pageChanged:function(t){this.$emit("page-changed",t)},activePage:function(t){return this.currentPage===t?"pagination-current":""}}},o=r(7),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"pagination"},[e("ul",[t.currentPage>1?e("li",[e("a",{attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.pageChanged(1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]):t._e(),t._v(" "),t._l(t.paginationRange,(function(r,i){return e("li",{key:i},[e("a",{class:t.activePage(r),attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.pageChanged(r)}}},[t._v(t._s(r))])])})),t._v(" "),t.currentPage!=t.totalPages?e("li",[e("a",{attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.pageChanged(t.lastPage)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])]):t._e()],2)])}),[],!1,null,null,null);e.a=component.exports},513:function(t,e,r){"use strict";r(11),r(12),r(14),r(6),r(19),r(13),r(20);var n=r(0),c=r(5),o=(r(10),r(70),r(24),r(36),r(3));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={created:function(){this.checkAuth(),this.timeout=setInterval(this.checkAuth,3e4)},beforeDestroy:function(){clearInterval(this.timeout)},methods:v(v({},Object(o.b)({checkAuthAPI:"user/checkAuth"})),{},{checkAuth:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.next=4,t.checkAuthAPI();case 4:if(403!==e.sent){e.next=7;break}return e.abrupt("return",t.$router.replace(t.localePath("/")));case 7:case"end":return e.stop()}}),e)})))()}}),head:function(){return{title:this.$rest.projectName+" - "+this.$t("meta.user.title"),meta:[{hid:"description",name:"description",content:this.$t("meta.user.description")},{hid:"keywords",name:"keywords",content:this.$t("meta.user.keywords")}]}}},h=r(7),component=Object(h.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"user-page"},[e("div",{staticClass:"profile-top-wr"},[e("div",{staticClass:"container"},[e("div",{staticClass:"profile-nav"},[e("ul",[e("li",[e("nuxt-link",{attrs:{to:t.localePath("/user/profile/"),"active-class":"profile-nav-active"}},[t._v(t._s(t.$t("ui.buttons.profile"))+"\n            ")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/user/requisites/"),"active-class":"profile-nav-active"}},[t._v("\n              "+t._s(t.$t("ui.buttons.requisites"))+"\n            ")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/user/partner-system/"),"active-class":"profile-nav-active"}},[t._v("\n              "+t._s(t.$t("ui.buttons.affiliate"))+"\n            ")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/user/orders/"),"active-class":"profile-nav-active"}},[t._v("\n              "+t._s(t.$t("ui.buttons.requests"))+"\n            ")])],1),t._v(" "),e("li",[e("nuxt-link",{attrs:{to:t.localePath("/user/api/"),"active-class":"profile-nav-active"}},[t._v("\n              "+t._s(t.$t("ui.buttons.api"))+"\n            ")])],1)])])])]),t._v(" "),e("nuxt-child")],1)}),[],!1,null,null,null);e.a=component.exports},533:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NiA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ2IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGQ9Ik0zNDUuNDQxLDI0OC4yOTJMMTUxLjE1NCw0NDIuNTczYy0xMi4zNTksMTIuMzY1LTMyLjM5NywxMi4zNjUtNDQuNzUsMGMtMTIuMzU0LTEyLjM1NC0xMi4zNTQtMzIuMzkxLDAtNDQuNzQ0ICAgTDI3OC4zMTgsMjI1LjkyTDEwNi40MDksNTQuMDE3Yy0xMi4zNTQtMTIuMzU5LTEyLjM1NC0zMi4zOTQsMC00NC43NDhjMTIuMzU0LTEyLjM1OSwzMi4zOTEtMTIuMzU5LDQ0Ljc1LDBsMTk0LjI4NywxOTQuMjg0ICAgYzYuMTc3LDYuMTgsOS4yNjIsMTQuMjcxLDkuMjYyLDIyLjM2NkMzNTQuNzA4LDIzNC4wMTgsMzUxLjYxNywyNDIuMTE1LDM0NS40NDEsMjQ4LjI5MnoiIGZpbGw9IiM5N0M0NUQiLz4NCjwvZz4NCjwvc3ZnPg0K"},742:function(t,e,r){"use strict";r.r(e);r(25);var n=[function(){var t=this._self._c;return t("dd",[t("img",{attrs:{src:r(533),alt:"right"}}),this._v("to")])}],c=(r(11),r(12),r(14),r(6),r(19),r(13),r(20),r(0)),o=r(5),l=(r(10),r(3)),v=r(507),d=r(513);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={components:{pagination:v.a,user:d.a},props:{pagination:{type:Boolean,default:!0}},data:function(){return{activeTab:"all",tabs:[{name:this.$t("page.user.order.all"),key:"all"},{name:this.$t("page.user.order.current"),key:"current"},{name:this.$t("page.user.order.doneTab"),key:"done"},{name:this.$t("page.user.order.deletedTab"),key:"deleted"}],page:1}},computed:f({},Object(l.c)({info:"user/info",history:"request/history",load:"request/load",status:"request/status",getCurrentPage:"request/getCurrentPage",getTotalPages:"request/getTotalPages"})),created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.info){e.next=3;break}return e.next=3,t.checkAuth();case 3:return e.next=5,t.getList({});case 5:case"end":return e.stop()}}),e)})))()},methods:f(f({},Object(l.b)({checkAuth:"user/checkAuth",getList:"request/getList"})),{},{updateFilter:function(t){var e=this;return Object(c.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.activeTab&&(e.page=1,e.activeTab=t.activeTab),t.page&&(e.page=t.page),r.abrupt("return",e.getList({status:e.activeTab,page:e.page}));case 3:case"end":return r.stop()}}),r)})))()}}),head:function(){return{title:this.$t("meta.orders.title"),meta:[{description:this.$t("meta.orders.description")},{keywords:this.$t("meta.orders.keywords")}]}}},_=r(7),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return t.info?e("div",{staticClass:"container"},[e("div",{staticClass:"text-center"},[e("h1",[t._v(t._s(t.$t("page.user.nav.profile")))])]),t._v(" "),e("div",{staticClass:"zayvki-main"},[e("user"),t._v(" "),e("div",{staticClass:"zayvki-border"},[e("div",{staticClass:"container-aff zayvki-item"},[e("div",{staticClass:"zayvki-filter"},[e("div",{staticClass:"zayvki-filter--top"},[e("h2",{staticClass:"title"},[t._v("\n              "+t._s(t.$t("page.user.order.title"))+"\n            ")]),t._v(" "),e("div",{staticClass:"zayvki-filter--top__btn-group"},[e("ul",t._l(t.tabs,(function(r){return e("li",{key:r.key,on:{click:function(e){return t.updateFilter({activeTab:r.key})}}},[e("a",{class:r.key===t.activeTab?"btn-filter btn-filter-blue":"btn-filter"},[t._v("\n                    "+t._s(r.name)+"\n                  ")])])})),0)])])]),t._v(" "),e("div",{staticClass:"zayvki-table"},[e("table",[e("thead",[e("tr",[e("th",[t._v("№")]),t._v(" "),e("th",[t._v(t._s(t.$t("page.user.order.giving")))]),t._v(" "),e("th",[t._v(t._s(t.$t("page.user.order.getting")))]),t._v(" "),e("th",[t._v(t._s(t.$t("page.user.order.status")))]),t._v(" "),e("th",[t._v(t._s(t.$t("page.user.order.date")))]),t._v(" "),e("th",[t._v(t._s(t.$t("page.user.order.action")))])])]),t._v(" "),e("tbody",t._l(t.history,(function(r){return e("tr",{key:r._id},[e("td",[e("span",{staticClass:"status new-zayvka--marker__v",style:{background:t.status[r.status].color}}),t._v("\n                  "+t._s(r.uid)+"\n                ")]),t._v(" "),e("td",[e("div",{staticClass:"table--row"},[e("div",{staticClass:"table--row"},[e("img",{attrs:{src:t.$rest.urlImg(r.route.from.image).medium,alt:""}}),t._v(" "),e("p",[e("span",{staticClass:"qt"},[t._v(t._s(r.inAmount)+" "+t._s(r.route.from.symbol))]),t._v(" "),e("span",{staticClass:"currency"},[t._v(t._s(r.route.from.name))])])]),t._v(" "),t._m(0,!0)])]),t._v(" "),e("td",[e("div",{staticClass:"table--row"},[e("img",{attrs:{src:t.$rest.urlImg(r.route.to.image).medium,alt:""}}),t._v(" "),e("p",[e("span",{staticClass:"qt"},[t._v(t._s(r.outAmount)+" "+t._s(r.route.to.symbol))]),t._v(" "),e("span",{staticClass:"currency"},[t._v(t._s(r.route.to.name))])])])]),t._v(" "),e("td",[e("div",{staticClass:"status--row"},[e("span",{staticClass:"status new-zayvka--marker",style:{background:t.status[r.status].color}}),t._v(" "),e("span",{staticClass:"status new-zayvka"},[t._v(t._s(t.$t("ui.order.status."+r.status)))])])]),t._v(" "),e("td",[t._v(t._s(t.$moment(r.createdAt).format("DD.MM.YYYY - HH:mm")))]),t._v(" "),e("td",{staticClass:"text-center"},[e("nuxt-link",{staticClass:"view",attrs:{to:t.localePath("/order/"+r.uid+"/"+r.secret+"/"),tag:"button"}})],1)])})),0)]),t._v(" "),t.history.length>0?e("pagination",{attrs:{"current-page":t.page,"total-pages":t.getTotalPages},on:{"page-changed":function(e){return t.updateFilter({page:e})}}}):e("div",[t._v("\n            Orders not found\n          ")])],1)])])],1)]):t._e()}),n,!1,null,null,null);e.default=component.exports}}]);