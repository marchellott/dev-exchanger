(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{757:function(t,e,r){"use strict";r.r(e);r(11),r(12),r(14),r(6),r(19),r(13),r(20);var n=r(5),o=(r(70),r(3)),c=r(557),m=r(558),d=r(559),l=r(560),h=r(561),progress=r(562),f=r(522),v=r(563),O=r(564);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={layout:"payment",head:function(){var t=this.$seo({name:"Payment",title:"Payment",description:"Payment",openGraph:{title:"Payment",description:"Payment",image:{url:this.$rest.baseUrl+this.$rest.faviconPath,width:100,height:100,type:"image/png"}}});return{meta:t.meta,title:t.title}},data:function(){return{val:!0,timeout:"",comps:{waitPayment:m.a,deleted:h.a,inProgress:progress.a,errorPayout:f.a,errorPayment:f.a,done:v.a,hold:d.a,returned:l.a,inProgressPayout:O.a,new:c.a}}},computed:_(_({},Object(o.c)({order:"exchange/order",getRequestStateExchange:"exchange/getRequestState",verificationsStatus:"exchange/verificationsStatus",load:"exchange/load"})),{},{time:function(){var t=this.$moment(this.order.expiresAt).diff();return(this.val||!this.val)&&t>=36e5?Math.floor(this.$moment.duration(t).asHours())+":"+this.$moment(t).utc().format("mm:ss"):(this.val||!this.val)&&t>=0?this.$moment(t).utc().format("mm:ss"):"00:00"}}),beforeDestroy:function(){this.$events.$off("ws/emit/updateOrder"),clearTimeout(this.timeout)},created:function(){var t=this;this.getRequestStateExchange("getOrder","isPending")||this.getOrder({type:"payment",orderUID:this.$route.params.order,orderSecret:this.$route.params.secret}),this.checkTimeOut(!1),this.$events.$on("ws/emit/updateOrder",(function(param){setTimeout((function(){param.order!==t.order._id||t.getRequestStateExchange("getOrder","isPending")||t.getOrder({type:"payment",orderUID:t.$route.params.order,orderSecret:t.$route.params.secret})}),100)}))},methods:_(_({},Object(o.b)({getOrder:"exchange/getOrder",changeOrder:"exchange/changeOrder"})),{},{checkTimeOut:function(t){var e=this;if(this.min<=0&&this.sec<=0)return clearTimeout(this.timeout);this.val=t,this.timeout=setTimeout((function(){return e.checkTimeOut(!t)}),500)}})},$=r(7),component=Object($.a)(P,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"payment-wait"},[e("div",{staticClass:"under-header"},[e("div",{staticClass:"form-confirmation"},[e("div",{staticClass:"container"},[t.load&&t.order&&t.order.status?e("div",{staticClass:"form-confirmation__up"},[e("div",{staticClass:"form-confirmation-manual-bloc"},[e("div",{staticClass:"form-confirmation-manual-number"},[e("p",[t._v("\n                  "+t._s(t.$t("page.user.order.order_id"))+"\n                  "),e("span",[e("b",[t._v("#"+t._s(t.$route.params.order))])])]),t._v(" "),e("p",{staticClass:"actual-time"},[t._v("\n                  "+t._s(t.$t("page.user.order.actual_until"))+"\n                  "),e("span",[e("b",[t._v(t._s(t.$moment(t.order.expiresAt).format("DD MMM YYYY, HH:mm")))])])])]),t._v(" "),"new"===t.order.status||"waitPayment"===t.order.status?e("div",{staticClass:"form-confirmation-manual-actual"},[e("div",{staticClass:"form-confirmation-manual-actual-info"},[e("p",[t._v(t._s(t.$t("page.user.order.time_left")))]),t._v(" "),e("p",[e("b",[t._v(t._s(t.time))])])])]):t._e()]),t._v(" "),e(t.comps[t.order.status],{tag:"component",attrs:{order:t.order,"is-payment-type":!0,"verifications-status":t.verificationsStatus},on:{confirm:function(e){return t.changeOrder({orderUID:t.$route.params.order,orderSecret:t.$route.params.secret,status:e})}}})],1):t._e(),t._v(" "),t.load?t._e():e("loader")],1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);