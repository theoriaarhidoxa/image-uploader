(this.webpackJsonpfcc2=this.webpackJsonpfcc2||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},50:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a,c=n(0),r=n(28),s=n.n(r),i=(n(44),n(45),n(21)),o=n(4),l=n(12),j=n(2),u=n.n(j),p=n(6),b=n(8),d="static/media/cloud-icon_on.28fb157d.svg",f=n(37),O=n(17),x=Object(f.a)({apiKey:"AIzaSyABsZayhyap7VemkqfhinX4gdRgXUEV-tw",authDomain:"imageuploader2-b3cb3.firebaseapp.com",projectId:"imageuploader2-b3cb3",storageBucket:"imageuploader2-b3cb3.appspot.com",messagingSenderId:"244612194682",appId:"1:244612194682:web:8572ebd8244e6e7930b6c3"}),m=Object(O.c)(x),h=n(3),y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)([]),n=Object(b.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(b.a)(s,2),j=o[0],f=o[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("input",{type:"file",multiple:!0,ref:e,onChange:function(e){r([]);var t=(e.target||[]).files,n=(t?Array.from(t):[]).map((function(e,t){var n=Object.assign(e,{});return n.id=(new Date).getTime()+t,n.uploadProgress=0,n}));r(n),n.forEach((function(e,t){var n=new FileReader;n.onload=function(){var e=Object(p.a)(u.a.mark((function e(n){var a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.target){e.next=8;break}return e.next=3,n.target.result;case 3:return a=e.sent,e.next=6,n.timeStamp;case 6:c=e.sent,r((function(e){return e.map((function(e,n){if(t===n){var r=Object.assign(e);return r.src=a,r.timeStamp=c,r.order=t+1,r}return e}))}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.readAsDataURL(e)}))},accept:"image/*"}),0===a.length&&Object(h.jsxs)("h2",{children:[Object(h.jsx)("img",{src:d,alt:""}),"\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0442\u044c \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f..."]}),Object(h.jsxs)("div",{className:"wrapper__buttons",children:[Object(h.jsx)("input",{type:"button",disabled:j,className:"btn",value:a.length?"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c":"\u041d\u0430\u0447\u0430\u0442\u044c",onClick:function(){var t;return null===(t=e.current)||void 0===t?void 0:t.click()}}),a.length>0&&Object(h.jsx)("input",{type:"button",disabled:j,onClick:function(){f(!0),a.forEach((function(e){var t=Object(O.e)(m,"/upload/".concat(e.name)),n=Object(O.f)(t,e),c=a.length;n.on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100,n=a.find((function(t){return t.size===e.totalBytes}));n&&(n.uploadProgress=parseInt(t.toString()),r([].concat(Object(l.a)(a),[n]).slice(0,c)))}))}))},className:"btn red",value:"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c"}),j&&Object(h.jsx)("input",{type:"button",className:"btn",value:"\u041d\u0430\u0447\u0430\u0442\u044c \u0437\u0430\u043d\u043e\u0432\u043e",onClick:function(){r([]),f(!1)}})]}),Object(h.jsx)("div",{className:"wrapper__previews",children:a.sort((function(e,t){return e.order-t.order})).map((function(e){return Object(h.jsxs)("div",{className:"wrapper__previews-item",children:[Object(h.jsx)("img",{src:e.src,alt:""}),!j&&Object(h.jsx)("i",{onClick:function(){return t=e.id,void r(a.filter((function(e){return e.id!==t})));var t}}),Object(h.jsxs)("p",{className:j?"panel hiddenPanel":"panel",children:[Object(h.jsx)("span",{children:e.name}),Object(h.jsx)("span",{children:"".concat((e.size/1e3).toFixed(1)," Kb")})]}),j&&Object(h.jsxs)("p",{className:"panel bluePanel",children:[Object(h.jsxs)("span",{style:100===e.uploadProgress?{color:"#fff"}:void 0,children:[e.uploadProgress,"%"]}),Object(h.jsx)("em",{style:{width:e.uploadProgress+"%"}})]})]},e.id)}))}),j&&Object(h.jsx)("span",{className:"fixedBottomRight",children:Object(h.jsx)(i.b,{to:"/list",children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u0444\u0430\u0439\u043b\u043e\u0432"})})]})},v=(n(50),function(){return Object(h.jsx)("div",{className:"loaderWrap",children:Object(h.jsx)("div",{className:"loadingio-spinner-blocks-mty7grqp7kl",children:Object(h.jsxs)("div",{className:"ldio-qw2vmiyfhg",children:[Object(h.jsx)("div",{style:{left:"38px",top:"38px",animationDelay:"0s"}}),Object(h.jsx)("div",{style:{left:"80px",top:"38px",animationDelay:"0.125s"}}),Object(h.jsx)("div",{style:{left:"122px",top:"38px",animationDelay:"0.25s"}}),Object(h.jsx)("div",{style:{left:"38px",top:"80px",animationDelay:"0.875s"}}),Object(h.jsx)("div",{style:{left:"122px",top:"80px",animationDelay:"0.375s"}}),Object(h.jsx)("div",{style:{left:"38px",top:"122px",animationDelay:"0.75s"}}),Object(h.jsx)("div",{style:{left:"80px",top:"122px",animationDelay:"0.625s"}}),Object(h.jsx)("div",{style:{left:"122px",top:"122px",animationDelay:"0.5s"}})]})})})}),g=n(22);!function(e){e.SET_EMPTY_LIST="SET_EMPTY_LIST",e.SET_LOADING="SET_LOADING",e.FETCH_IMAGES="FETCH_IMAGES",e.REMOVE_SINGLE_IMAGE="REMOVE_SINGLE_IMAGE"}(a||(a={}));var E=g.c,_=function(){var e=Object(g.b)(),t=E((function(e){return e.image})),n=t.loading,r=t.images,s=t.emptyList;Object(c.useEffect)((function(){return e(function(){var e=Object(p.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=Object(O.e)(m,"/upload"),t({type:a.SET_EMPTY_LIST,payload:!1}),c=[],Object(O.d)(n).then(function(){var e=Object(p.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.items.forEach(function(){var e=Object(p.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.push(Object(O.b)(t)));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=3,Promise.all(c);case 3:r=e.sent,t({type:a.FETCH_IMAGES,payload:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch().finally((function(){return t({type:a.SET_LOADING,payload:!1})}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),function(){e({type:a.SET_EMPTY_LIST,payload:!1}),e({type:a.SET_LOADING,payload:!1})}}),[]);var o=function(t,n){n.target.disabled=!0,r.length<2&&setTimeout((function(){e({type:a.SET_EMPTY_LIST,payload:!0})}),1e3),e(function(e){return function(){var t=Object(p.a)(u.a.mark((function t(n){var c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c=Object(O.e)(m,e),Object(O.a)(c).then((function(){return n({type:a.REMOVE_SINGLE_IMAGE,payload:e})}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))};return n?Object(h.jsx)(v,{}):Object(h.jsxs)(h.Fragment,{children:[s&&Object(h.jsx)("h2",{style:{padding:"70px 0 30px 0"},children:"\u0412\u0441\u0435 \u0440\u0430\u043d\u0435\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0443\u0434\u0430\u043b\u0435\u043d\u044b. \u0418\u043d\u044b\u043c \u0441\u043f\u043e\u0441\u043e\u0431\u043e\u043c \u0443\u0432\u0438\u0434\u0435\u0442\u044c \u044d\u0442\u0443 \u043d\u0430\u0434\u043f\u0438\u0441\u044c \u043d\u0435 \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f."}),Object(h.jsx)("div",{className:"wrapper__filesList",children:Object(h.jsx)("table",{children:Object(h.jsx)("tbody",{children:r.map((function(e){return Object(h.jsxs)("tr",{className:"wrapper__filesList-item",children:[Object(h.jsx)("td",{children:Object(h.jsx)("img",{src:e,alt:""})}),Object(h.jsx)("td",{children:Object(h.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:e})}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{className:"btn",onClick:function(t){return o(e,t)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})})]},e)}))})})}),Object(h.jsx)("span",{className:"fixedBottomRight",children:Object(h.jsx)(i.b,{to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0437\u0430\u0433\u0440\u0443\u0437\u0447\u0438\u043a\u0443"})})]})},S=function(){return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsxs)("p",{children:["\u0412\u043e\u0442 ",Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=5vx2PVClSVU",target:"_blank",rel:"noreferrer",children:"\u0438\u0441\u0442\u043e\u0447\u043d\u0438\u043a \u0432\u0434\u043e\u0445\u043d\u043e\u0432\u0435\u043d\u0438\u044f"})," \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e\xa0\u043f\u0440\u043e\u0435\u043a\u0442\u0430.",Object(h.jsx)("br",{})," \u041a\u0442\u043e-\u0442\u043e \u043f\u0440\u043e\u0441\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u043d \u0435\u0433\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u0442\u044c \u043d\u0430 \u0442\u043e\u043c \u0438\u043b\u0438 \u0438\u043d\u043e\u043c \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a\u0435, \u043e\u0442\u043c\u0435\u0447\u0430\u0435\u0442 \u0430\u0432\u0442\u043e\u0440 \u043a\u0430\u043d\u0430\u043b\u0430 \u0432 \u043a\u043e\u043d\u0446\u0435 \u0440\u043e\u043b\u0438\u043a\u0430.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]}),Object(h.jsx)(i.a,{children:Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{path:"/",element:Object(h.jsx)(y,{})}),Object(h.jsx)(o.a,{path:"/list",element:Object(h.jsx)(_,{})})]})})]})},w=n(27),T=n(39),I=n(15),N={loading:!0,emptyList:!1,images:[]},L=Object(w.b)({image:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case a.SET_EMPTY_LIST:return Object(I.a)(Object(I.a)({},e),{},{emptyList:t.payload,images:[]});case a.SET_LOADING:return Object(I.a)(Object(I.a)({},e),{},{loading:t.payload});case a.FETCH_IMAGES:return Object(I.a)(Object(I.a)({},e),{},{images:t.payload});case a.REMOVE_SINGLE_IMAGE:return Object(I.a)(Object(I.a)({},e),{},{images:e.images.filter((function(e){return e!==t.payload}))});default:return e}}}),k=Object(w.c)(L,Object(w.a)(T.a));s.a.render(Object(h.jsx)(g.a,{store:k,children:Object(h.jsx)(S,{})}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.4aa14ab5.chunk.js.map