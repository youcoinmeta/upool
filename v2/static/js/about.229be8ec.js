(this["webpackJsonp"]=this["webpackJsonp"]||[]).push([["about"],{"18a7":function(t,e,s){"use strict";s("e74f")},"88e9":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container home"},[s("BaseHeader"),s("div",{staticClass:"backflow"},[s("i",{staticClass:" icon-sero"},[t._v("i")]),s("span",{staticClass:"backflow-title"},[t._v(" "+t._s(t.$t("v2backv1"))+": ")]),s("span",[t._v(t._s(t._f("Decimal")(t.systemInfo.ubsInvestTotal,0))+" ")]),t._v(" ($ "),s("base-decimal1",{attrs:{value:t.systemInfo.ubsInvestTotal,accuracy:0,token:"UCON",decimal:18,price:t.seroPrice}}),t._v(") ")],1),s("base-popup",{attrs:{show:t.showNotice,title:"announcement",showBtn:!1,width:338},on:{close:function(e){t.showNotice=!1}}},[s("div",{staticClass:"notice1"},[s("div",{staticClass:"notice-item"},[s("p",{staticClass:"notice-title"},[t._v(" "+t._s(t.$t("noticeText1"))+" ")])]),s("div",{staticClass:"notice-item"},[s("p",{staticClass:"notice-item-text"},[t._v(t._s(t.$t("noticeText2")))])]),s("div",{staticClass:"notice-item"},[s("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText3"))+" ")])]),s("div",{staticClass:"notice-item"},[s("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText4"))+" ")])]),s("div",{staticClass:"notice-item"},[s("p",{staticClass:"notice-item-text"},[t._v(" "+t._s(t.$t("noticeText5"))+" ")])])])]),s("div",{staticClass:"content"},[s("keep-alive",[s("router-view",{staticClass:"content"})],1)],1)],1)},i=[],c=s("1da1"),a=s("5530"),o=(s("96cf"),s("2f62")),r=s("4624"),u={name:"Layout",mixins:[r["a"]],components:{},data:function(){return{showNotice:!1,activeName:"1"}},computed:Object(a["a"])(Object(a["a"])({},Object(o["e"])({user:function(t){return t.common.user},userInfo:function(t){return t.common.userInfo},accountList:function(t){return t.common.accountList},systemInfo:function(t){return t.common.systemInfo}})),{},{addr:function(){return this.user&&this.user.MainPKr}}),mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$sero.getAccountList();case 2:s=e.sent,t.SET_ACCOUNT_LIST(s);case 4:case"end":return e.stop()}}),e)})))()},methods:Object(a["a"])({},Object(o["d"])(["SET_COINS","SET_ACCOUNT_LIST"]))},l=u,m=(s("18a7"),s("2877")),v=Object(m["a"])(l,n,i,!1,null,null,null);e["default"]=v.exports},e74f:function(t,e,s){}}]);