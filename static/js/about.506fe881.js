(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["about"],{"18a7":function(t,e,n){"use strict";n("e74f")},"88e9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("base-header"),n("van-notice-bar",{attrs:{"left-icon":"volume-o",mode:"link",background:"transparent",color:"#ffffff",text:t.$t("noticeText")},on:{click:function(e){t.showNotice=!0}}},[n("van-icon",{staticStyle:{"margin-left":"12px"},attrs:{slot:"right-icon",name:"arrow-down",color:"#01E8BA"},slot:"right-icon"}),n("van-icon",{staticStyle:{"margin-right":"8px"},attrs:{slot:"left-icon",name:"volume-o",color:"#01E8BA"},slot:"left-icon"})],1),n("base-popup",{attrs:{show:t.showNotice,title:"announcement",showBtn:!1,width:338},on:{close:function(e){t.showNotice=!1}}},[n("div",{staticClass:"notice1"},[n("div",{staticClass:"notice-item"},[n("p",{staticClass:"notice-title"},[t._v(" "+t._s(t.$t("noticeText1"))+" ")])]),n("div",{staticClass:"notice-item"},[n("p",{staticClass:"notice-item-text"},[t._v(t._s(t.$t("noticeText2")))])]),n("div",{staticClass:"notice-item"},[n("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText3"))+" ")])]),n("div",{staticClass:"notice-item"},[n("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText4"))+" ")])]),n("div",{staticClass:"notice-item"},[n("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText5"))+" ")])])])]),n("div",{staticClass:"content"},[n("keep-alive",[n("router-view",{staticClass:"content"})],1)],1)],1)},o=[],s=n("1da1"),c=n("5530"),a=(n("96cf"),n("2f62")),r={name:"Layout",components:{},data:function(){return{showNotice:!1,activeName:"1"}},computed:Object(c["a"])(Object(c["a"])({},Object(a["e"])({user:function(t){return t.common.user},userInfo:function(t){return t.common.userInfo},accountList:function(t){return t.common.accountList},systemInfo:function(t){return t.common.systemInfo}})),{},{addr:function(){return this.user&&this.user.MainPKr}}),mounted:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$sero.getAccountList();case 2:n=e.sent,t.SET_ACCOUNT_LIST(n);case 4:case"end":return e.stop()}}),e)})))()},methods:Object(c["a"])({},Object(a["d"])(["SET_COINS","SET_ACCOUNT_LIST"]))},u=r,l=(n("18a7"),n("2877")),m=Object(l["a"])(u,i,o,!1,null,null,null);e["default"]=m.exports},e74f:function(t,e,n){}}]);