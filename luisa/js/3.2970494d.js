(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"713b":function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-layout",{attrs:{view:"lHh Lpr lFf"}},[i("q-drawer",{attrs:{"show-if-above":"",mini:e.miniState,"mini-to-overlay":"",width:200,breakpoint:500,bordered:""},on:{mouseover:function(t){e.miniState=!1},mouseout:function(t){e.miniState=!0}},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[i("q-scroll-area",{staticClass:"full-height"},[i("div",e._l(e.essentialPages,(function(t,o){return i("q-list",{key:t+o,attrs:{padding:""}},[i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",href:t.href,tag:"a",target:"_blank"},on:{click:function(t){e.currentPage=o}}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon,color:"white"}})],1),i("q-item-section",{staticClass:"title"},[e._v("\n              "+e._s(t.title)+"\n            ")])],1),"6"==o?i("q-separator",{staticClass:"my-sep"}):e._e()],1)})),1)])],1),i("q-page-container",[i("router-view",{attrs:{model:e.currentPage}}),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[32,32]}},[i("q-fab",{staticClass:"my-fab my-fab-contact",attrs:{"no-caps":"",icon:"o_email",size:"16px","active-icon":"o_email",href:e.donateLink,tag:"a",target:"_blank",label:e.contactLabel},on:{mouseenter:function(t){return e.mouseEnter(0)},mouseleave:function(t){return e.mouseLeave(0)}}})],1),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[32,100]}},[i("q-fab",{staticClass:"my-fab my-fab-donate",attrs:{"no-caps":"",icon:"favorite",size:"16px","active-icon":"favorite",href:e.contactLink,tag:"a",target:"_blank",label:e.donateLabel},on:{mouseenter:function(t){return e.mouseEnter(1)},mouseleave:function(t){return e.mouseLeave(1)}}})],1),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[32,168]}},[i("q-fab",{staticClass:"my-fab my-fab-tt",attrs:{"no-caps":"",icon:e.twitterIcon,size:"16px",direction:"up","active-icon":"keyboard_arrow_up","vertical-actions-align":"right",label:e.twitterLabel},on:{click:function(t){e.fabVimeo=!1},mouseenter:function(t){return e.mouseEnter(2)},mouseleave:function(t){return e.mouseLeave(2)}},model:{value:e.fabTT,callback:function(t){e.fabTT=t},expression:"fabTT"}},[i("q-fab-action",{attrs:{square:"",color:"white"}},[i("timeline",{staticClass:"tt-timeline",attrs:{id:"twitterdev",sourceType:"profile"}})],1)],1)],1),i("q-page-sticky",{attrs:{position:"bottom-right",offset:[32,e.fabTT?622:236]}},[i("q-fab",{ref:"fabVimeo",staticClass:"my-fab my-fab-vimeo",attrs:{"no-caps":"",icon:e.vimeoIcon,size:"16px",direction:"up","active-icon":"keyboard_arrow_up","vertical-actions-align":"right",label:e.vimeoLabel},on:{click:function(t){e.fabTT=!1},mouseenter:function(t){return e.mouseEnter(3)},mouseleave:function(t){return e.mouseLeave(3)}},model:{value:e.fabVimeo,callback:function(t){e.fabVimeo=t},expression:"fabVimeo"}},[i("q-fab-action",{attrs:{"no-ripple":"",square:"",color:"black"},on:{click:function(t){return e.preventFabHide()}}},[i("div",{staticClass:" column items-center"},[i("vue-vimeo-player",{staticClass:"vimeo-video",attrs:{"video-id":e.vimeoVideoIds[e.currentVideo],"player-width":"570","player-height":"320"}}),i("div",{staticClass:"row items-center"},[i("q-icon",{staticClass:"my-arrow-icon",attrs:{name:"keyboard_arrow_left",size:"36px"},on:{click:e.previousVideo}}),e._l(e.vimeoVideoIds,(function(t,o){return i("div",{key:o,staticClass:"row"},[i("q-btn",{staticClass:"video-btn",class:[e.currentVideo==o?"bg-white":""],attrs:{round:"",outline:"",color:"white"},on:{click:function(t){e.currentVideo=o}}})],1)})),i("q-icon",{attrs:{name:"keyboard_arrow_right",size:"36px"},on:{click:e.nextVideo}})],2)],1)])],1)],1)],1)],1)},a=[],n=i("7397"),r=i("802e");const s=[{title:"Home",icon:"img:page_icons/home.png"},{title:"About",icon:"img:page_icons/about.png"},{title:"Partners",icon:"img:page_icons/supporters.png"},{title:"Prototypes",icon:"img:page_icons/resources.png"},{title:"Downloads",icon:"img:page_icons/software.png"},{title:"Team",icon:"img:page_icons/team.png"},{title:"Expeditions",icon:"o_map"},{title:"Github",icon:"img:social_icons/github.png",href:"https://www.google.com.br/"},{title:"LinkedIn",icon:"img:social_icons/linkedin.png",href:"https://www.google.com.br/"}];var c={name:"MainLayout",components:{Timeline:n["Timeline"],vueVimeoPlayer:r["a"]},data(){return{essentialPages:s,drawer:!1,miniState:!0,height:window.innerHeight+"px",fabTT:!1,fabVimeo:!1,donateLink:"https://www.google.com.br/",contactLink:"https://www.google.com.br/",contactLabel:"",donateLabel:"",twitterIcon:"img:social_icons/twitter.png",vimeoIcon:"img:social_icons/vimeo.png",twitterLabel:"",vimeoLabel:"",vimeoVideoIds:["372906872","372906872","372906872","372906872","372906872"],currentVideo:0}},computed:{currentPage:{get(){return this.$store.state.luisa.currentPage},set(e){this.$store.commit("luisa/changePage",e)}}},methods:{mouseEnter(e){0===e?this.contactLabel="Contact Us":1===e?this.donateLabel="Donate":2===e?(this.twitterIcon="keyboard_arrow_down",this.twitterLabel="Twitter"):(this.vimeoIcon="keyboard_arrow_down",this.vimeoLabel="Vimeo")},mouseLeave(e){0===e?this.contactLabel="":1===e?this.donateLabel="":2===e?(this.twitterIcon="img:social_icons/twitter.png",this.twitterLabel=""):(this.vimeoIcon="img:social_icons/vimeo.png",this.vimeoLabel="")},preventFabHide(){this.$refs.fabVimeo.show()},previousVideo(){0===this.currentVideo?this.currentVideo=this.vimeoVideoIds.length-1:this.currentVideo--},nextVideo(){this.currentVideo===this.vimeoVideoIds.length-1?this.currentVideo=0:this.currentVideo++}}},l=c,m=(i("89d3"),i("2877")),u=i("4d5a"),b=i("9404"),d=i("4983"),p=i("1c1c"),f=i("66e5"),g=i("4074"),h=i("0016"),v=i("eb85"),w=i("09e3"),k=i("de5e"),_=i("c294"),y=i("72db"),L=i("9c40"),V=i("714f"),q=i("eebe"),I=i.n(q),T=Object(m["a"])(l,o,a,!1,null,null,null);t["default"]=T.exports;I()(T,"components",{QLayout:u["a"],QDrawer:b["a"],QScrollArea:d["a"],QList:p["a"],QItem:f["a"],QItemSection:g["a"],QIcon:h["a"],QSeparator:v["a"],QPageContainer:w["a"],QPageSticky:k["a"],QFab:_["a"],QFabAction:y["a"],QBtn:L["a"]}),I()(T,"directives",{Ripple:V["a"]})},"89d3":function(e,t,i){"use strict";i("e87e")},e87e:function(e,t,i){}}]);