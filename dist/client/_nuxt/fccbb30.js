(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{513:function(e,t,r){"use strict";r(11),r(12),r(14),r(6),r(19),r(13),r(20);var n=r(0),o=r(5),l=(r(10),r(70),r(24),r(36),r(3));function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var m={created:function(){this.checkAuth(),this.timeout=setInterval(this.checkAuth,3e4)},beforeDestroy:function(){clearInterval(this.timeout)},methods:f(f({},Object(l.b)({checkAuthAPI:"user/checkAuth"})),{},{checkAuth:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=2;break;case 2:return t.next=4,e.checkAuthAPI();case 4:if(403!==t.sent){t.next=7;break}return t.abrupt("return",e.$router.replace(e.localePath("/")));case 7:case"end":return t.stop()}}),t)})))()}}),head:function(){return{title:this.$rest.projectName+" - "+this.$t("meta.user.title"),meta:[{hid:"description",name:"description",content:this.$t("meta.user.description")},{hid:"keywords",name:"keywords",content:this.$t("meta.user.keywords")}]}}},v=r(7),component=Object(v.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"user-page"},[t("div",{staticClass:"profile-top-wr"},[t("div",{staticClass:"container"},[t("div",{staticClass:"profile-nav"},[t("ul",[t("li",[t("nuxt-link",{attrs:{to:e.localePath("/user/profile/"),"active-class":"profile-nav-active"}},[e._v(e._s(e.$t("ui.buttons.profile"))+"\n            ")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:e.localePath("/user/requisites/"),"active-class":"profile-nav-active"}},[e._v("\n              "+e._s(e.$t("ui.buttons.requisites"))+"\n            ")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:e.localePath("/user/partner-system/"),"active-class":"profile-nav-active"}},[e._v("\n              "+e._s(e.$t("ui.buttons.affiliate"))+"\n            ")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:e.localePath("/user/orders/"),"active-class":"profile-nav-active"}},[e._v("\n              "+e._s(e.$t("ui.buttons.requests"))+"\n            ")])],1),e._v(" "),t("li",[t("nuxt-link",{attrs:{to:e.localePath("/user/api/"),"active-class":"profile-nav-active"}},[e._v("\n              "+e._s(e.$t("ui.buttons.api"))+"\n            ")])],1)])])])]),e._v(" "),t("nuxt-child")],1)}),[],!1,null,null,null);t.a=component.exports},591:function(e,t,r){e.exports=r.p+"img/avatar.6125170.svg"},592:function(e,t,r){e.exports=r.p+"img/secure.543c18b.svg"},743:function(e,t,r){"use strict";r.r(t);r(50),r(30);var n=[function(){var e=this._self._c;return e("div",{staticClass:"text-center"},[e("img",{attrs:{src:r(592),alt:""}})])}],o=(r(11),r(12),r(14),r(6),r(19),r(13),r(20),r(0)),l=r(5),c=(r(24),r(36),r(10),r(3)),f=r(138),m=r(513);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{auth2fa:f.a,user:m.a},data:function(){return{profile:{},main:!0,notify:!0,initOtpDelete:!1,email:!0,password:!0}},computed:d({},Object(c.c)({info:"user/info",load:"user/load"})),watch:{info:function(){this.profile=Object.assign({},this.info,this.profile)}},mounted:function(){this.profile=Object.assign({},this.info)},methods:d(d(d({},Object(c.b)({editEmailAPI:"user/editEmail",blockAccount:"user/blockAccount",deleteAccount:"user/deleteAccount",editMainAPI:"user/editMain",editPassword:"user/editPassword",otpDeleteAPI:"user/otpDelete",destroySession:"user/destroyAuth"})),Object(c.d)("user",{setCreate:"create"})),{},{editEmail:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll("emailProfile");case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return e.email=!1,t.next=7,e.editEmailAPI(data);case 7:return e.email=!0,t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))()},editMain:function(data){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$validator.validateAll("mainProfile");case 2:if(t.sent){t.next=4;break}return t.abrupt("return");case 4:return e.notify=!1,t.next=7,e.editMainAPI(data);case 7:return e.notify=!0,t.abrupt("return",!0);case 9:case"end":return t.stop()}}),t)})))()},otpDelete:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.initOtpDelete=!1,e&&t.otpDeleteAPI({code:e}).catch((function(e){t.$swal("",e.message,"error")}));case 2:case"end":return r.stop()}}),r)})))()},setPassword:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.password=!1,t.next=3,e.editPassword(e.profile);case 3:r=t.sent,e.password=!0,r&&(e.$router.push(e.localePath("/")),e.$store.commit("user/login",!0),e.$store.commit("user/info",null));case 6:case"end":return t.stop()}}),t)})))()},blockMyAccount:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$swal({title:e.$t("modals.profile.blockAccountTitle"),html:e.$t("modals.profile.blockAccountSubTitle"),icon:"question",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,cancelButtonText:e.$t("modals.profile.btnCancel"),confirmButtonText:e.$t("modals.profile.btnOk")}).then((function(e){return Boolean(e.value)}));case 2:if(t.sent){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,e.$swal({title:e.$t("modals.profile.sureTitle"),html:e.$t("modals.profile.sureBlockAccountSubTitle"),icon:"question",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,cancelButtonText:e.$t("modals.profile.btnCancel"),confirmButtonText:e.$t("modals.profile.btnSure")}).then((function(e){return Boolean(e.value)}));case 7:if(t.sent){t.next=10;break}return t.abrupt("return",null);case 10:return t.next=12,e.blockAccount();case 12:return t.abrupt("return",e.$router.replace(e.localePath("/")));case 13:case"end":return t.stop()}}),t)})))()},deleteMyAccount:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$swal({title:e.$t("modals.profile.deleteAccountTitle"),html:e.$t("modals.profile.deleteAccountSubTitle"),icon:"question",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,cancelButtonText:e.$t("modals.profile.btnCancel"),confirmButtonText:e.$t("modals.profile.btnOk")}).then((function(e){return Boolean(e.value)}));case 2:if(t.sent){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,e.$swal({title:e.$t("modals.profile.sureTitle"),html:e.$t("modals.profile.sureDeleteAccountSubTitle"),icon:"question",showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,cancelButtonText:e.$t("modals.profile.btnCancel"),confirmButtonText:e.$t("modals.profile.btnSure")}).then((function(e){return Boolean(e.value)}));case 7:if(t.sent){t.next=10;break}return t.abrupt("return",null);case 10:return t.next=12,e.deleteAccount();case 12:return t.abrupt("return",e.$router.replace(e.localePath("/")));case 13:case"end":return t.stop()}}),t)})))()}})},h=r(7),component=Object(h.a)(_,(function(){var e=this,t=e._self._c;return e.info?t("div",{staticClass:"container"},[e.initOtpDelete?t("auth2fa",{on:{close:function(t){e.initOtpDelete=!1},confirm:e.otpDelete}}):e._e(),e._v(" "),t("div",{staticClass:"text-center"},[t("h1",[e._v(e._s(e.$t("page.user.nav.profile")))])]),e._v(" "),t("div",{staticClass:"profile__main"},[t("user"),e._v(" "),t("ul",[t("li",[t("div",{staticClass:"profile__main--item profile__main--item__file"},[t("p",{staticClass:"profile__main--title text-center"},[e._v("\n            "+e._s(e.$t("page.user.profile.contact"))+"\n          ")]),e._v(" "),t("div",{staticClass:"profile__file"},[t("img",{attrs:{src:r(591),alt:""}}),e._v(" "),e._e()]),e._v(" "),e.profile.verificationPerson?e._e():t("nuxt-link",{staticClass:"btn btn-submit",staticStyle:{margin:"20px auto"},attrs:{to:e.localePath("/user/verification")}},[t("span",[e._v("Start verification process")])]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.first_name")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("div",[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha|min:2|max:35",expression:"'required|alpha|min:2|max:35'"},{name:"model",rawName:"v-model",value:e.profile.first_name,expression:"profile.first_name"}],style:e.errors.has("mainProfile.name")?{border:"1px solid red",borderRadius:"8px"}:{},attrs:{"data-vv-scope":"mainProfile",placeholder:e.$t("page.user.profile.first_name"),type:"text",name:"name"},domProps:{value:e.profile.first_name},on:{input:function(t){t.target.composing||e.$set(e.profile,"first_name",t.target.value)}}})])])])]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.last_name")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("div",[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|alpha|min:2|max:35",expression:"'required|alpha|min:2|max:35'"},{name:"model",rawName:"v-model",value:e.profile.last_name,expression:"profile.last_name"}],style:e.errors.has("mainProfile.name")?{border:"1px solid red",borderRadius:"8px"}:{},attrs:{"data-vv-scope":"mainProfile",placeholder:e.$t("page.user.profile.last_name"),type:"text",name:"surname"},domProps:{value:e.profile.last_name},on:{input:function(t){t.target.composing||e.$set(e.profile,"last_name",t.target.value)}}})])])])]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.phone")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("p",[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|numeric|min:6|max:18",expression:"'required|numeric|min:6|max:18'"},{name:"model",rawName:"v-model",value:e.profile.phone,expression:"profile.phone"}],style:e.errors.has("mainProfile.name")?{border:"1px solid red",borderRadius:"8px"}:{},attrs:{"data-vv-scope":"mainProfile",placeholder:e.$t("page.user.profile.phone_number"),type:"text",name:"tel",autocomplete:"off"},domProps:{value:e.profile.phone},on:{input:function(t){t.target.composing||e.$set(e.profile,"phone",t.target.value)}}})])])])]),e._v(" "),t("button",{staticClass:"btn btn-submit",on:{click:function(t){t.preventDefault(),e.main=!1,e.editMain({first_name:e.profile.first_name,last_name:e.profile.last_name,phone:e.profile.phone}).then((function(){return e.main=!0}))}}},[e.main?t("span",[e._v(e._s(e.$t("ui.buttons.save")))]):t("loader",{attrs:{responsive:!0,width:"35",height:"35"}})],1)],1)]),e._v(" "),t("li",[t("div",{staticClass:"profile__main--item"},[t("p",{staticClass:"profile__main--title text-center"},[e._v("\n            "+e._s(e.$t("page.user.profile.password"))+"\n          ")]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.old")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.oldPassword,expression:"profile.oldPassword"}],attrs:{placeholder:e.$t("page.user.profile.current_password"),type:"password",name:"password"},domProps:{value:e.profile.oldPassword},on:{input:function(t){t.target.composing||e.$set(e.profile,"oldPassword",t.target.value)}}})])])])]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.new")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("p",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.newPassword,expression:"profile.newPassword"}],attrs:{placeholder:e.$t("page.user.profile.new"),type:"password"},domProps:{value:e.profile.newPassword},on:{input:function(t){t.target.composing||e.$set(e.profile,"newPassword",t.target.value)}}})])])])]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.repeat_password"))+":")]),e._v(" "),t("div",{staticClass:"form__input"},[t("p",[t("input",{attrs:{placeholder:e.$t("page.user.profile.repeat_password"),type:"password",name:"password2"}})])])])]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-submit",on:{click:function(t){return t.preventDefault(),e.setPassword.apply(null,arguments)}}},[e.password?t("span",[e._v(e._s(e.$t("ui.buttons.save")))]):t("loader",{attrs:{responsive:!0,width:"35",height:"35"}})],1)])]),e._v(" "),t("div",{staticClass:"profile__main--item b-top--none"},[t("p",{staticClass:"profile__main--title text-center"},[e._v("\n            "+e._s(e.$t("page.user.profile.email"))+"\n          ")]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",[t("span",[e._v(e._s(e.$t("page.user.profile.email")))]),e._v(" "),t("div",{staticClass:"form__input"},[t("p",[t("input",{directives:[{name:"validate",rawName:"v-validate",value:"required|email",expression:"'required|email'"},{name:"model",rawName:"v-model",value:e.profile.email,expression:"profile.email"}],style:e.errors.has("emailProfile.email")?{border:"1px solid red",borderRadius:"1.25rem"}:{},attrs:{"data-vv-scope":"emailProfile",type:"text",placeholder:"example@mail.com",name:"email"},domProps:{value:e.profile.email},on:{input:function(t){t.target.composing||e.$set(e.profile,"email",t.target.value)}}})])])])]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-submit",on:{click:function(t){return t.preventDefault(),e.editEmail(e.profile)}}},[e.email?t("span",[e._v(e._s(e.$t("ui.buttons.save")))]):t("loader",{attrs:{responsive:!0,width:"35",height:"35"}})],1)])])]),e._v(" "),t("li",[t("div",{staticClass:"profile__main--item"},[t("p",{staticClass:"profile__main--title text-center"},[e._v("\n            "+e._s(e.$t("page.user.profile.account_protection"))+"\n          ")]),e._v(" "),e._m(0),e._v(" "),t("div",[e.info.secure2fa&&!e.info.secure2fa.active?t("button",{staticClass:"btn btn-submit",on:{click:function(t){return t.preventDefault(),e.setCreate(!0)}}},[e._v("\n              "+e._s(e.$t("ui.buttons.2factor"))+"\n            ")]):t("button",{staticClass:"btn btn-submit",on:{click:function(t){t.preventDefault(),e.initOtpDelete=!0}}},[e._v("\n              "+e._s(e.$t("ui.buttons.reset2factor"))+"\n            ")])])]),e._v(" "),t("div",{staticClass:"profile__main--item profile__main--item-last b-top--none"},[t("p",{staticClass:"profile__main--title text-center"},[e._v("\n            "+e._s(e.$t("page.user.profile.notifications"))+"\n          ")]),e._v(" "),t("div",{staticClass:"form__item"},[t("label",{staticClass:"d-flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.notifyChangePass,expression:"profile.notifyChangePass"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.profile.notifyChangePass)?e._i(e.profile.notifyChangePass,null)>-1:e.profile.notifyChangePass},on:{change:function(t){var r=e.profile.notifyChangePass,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.profile,"notifyChangePass",r.concat([null])):l>-1&&e.$set(e.profile,"notifyChangePass",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.profile,"notifyChangePass",o)}}}),e._v(" "),t("span",[e._v(e._s(e.$t("page.user.profile.edit_password")))])]),e._v(" "),e._e(),e._v(" "),t("label",{staticClass:"d-flex"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.notifyLogin,expression:"profile.notifyLogin"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.profile.notifyLogin)?e._i(e.profile.notifyLogin,null)>-1:e.profile.notifyLogin},on:{change:function(t){var r=e.profile.notifyLogin,n=t.target,o=!!n.checked;if(Array.isArray(r)){var l=e._i(r,null);n.checked?l<0&&e.$set(e.profile,"notifyLogin",r.concat([null])):l>-1&&e.$set(e.profile,"notifyLogin",r.slice(0,l).concat(r.slice(l+1)))}else e.$set(e.profile,"notifyLogin",o)}}}),e._v(" "),t("span",[e._v(e._s(e.$t("page.user.profile.get_logged")))])])]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-submit",on:{click:function(t){return t.preventDefault(),e.editMain({notifyLogin:e.profile.notifyLogin,notifyChangePass:e.profile.notifyChangePass})}}},[e.notify?t("span",[e._v(e._s(e.$t("ui.buttons.save")))]):t("loader",{attrs:{responsive:!0,width:"35",height:"35"}})],1)])])])]),e._v(" "),t("div",{staticClass:"footer-profile"},[t("p",[e._v(" Deleting or blocking your account:")]),e._v(" "),t("div",[t("button",{staticClass:"btn btn-transparent",on:{click:e.deleteMyAccount}},[e._v(" "+e._s(e.$t("ui.buttons.delete_my_account"))+"\n        ")]),e._v(" "),t("button",{staticClass:"btn btn-transparent",on:{click:e.blockMyAccount}},[e._v(" "+e._s(e.$t("ui.buttons.block_my_account")))])])])],1)],1):e._e()}),n,!1,null,null,null);t.default=component.exports}}]);