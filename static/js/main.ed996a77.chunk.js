(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{31:function(e,t,c){},32:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c.n(a),s=c(24),r=c.n(s),i=(c(31),c(32),c(6)),l=c(10),o=c(4),d="ADD_TASK",j="DELETE_TASK",b="UPDATE_TASK",u="COMPLETED_TASK",m="TITLE_TASK",O="DESC_TASK",h=c(1),p={tasks:[],complete:[]},x=function(e,t){switch(t.type){case m:var c=e.tasks.filter((function(e){return e.id!==t.payload.id}));console.log(t.payload);var a=Object(o.a)(Object(o.a)({},t.payload.task[0]),{},{realTitle:t.payload.realTitle});return Object(o.a)(Object(o.a)({},e),{},{tasks:[].concat(Object(l.a)(c),[a])});case O:var n=e.tasks.filter((function(e){return e.id!==t.payload.id}));console.log(t.payload);var s=Object(o.a)(Object(o.a)({},t.payload.task[0]),{},{description:t.payload.description});return Object(o.a)(Object(o.a)({},e),{},{tasks:[].concat(Object(l.a)(n),[s])});case d:var r={id:Math.floor(100*Math.random()),title:t.payload,completed:!1};return Object(o.a)(Object(o.a)({},e),{},{tasks:[].concat(Object(l.a)(e.tasks),[r])});case b:var i=t.payload,h=i.updateText,p=i.todo.id,x={id:p,title:h.trim(),completed:!1},f=e.tasks.filter((function(e){return e.id!==p}));return Object(o.a)(Object(o.a)({},e),{},{tasks:[x].concat(Object(l.a)(f))});case j:var v=e.tasks.filter((function(e){return e.id!==t.payload})),y=e.complete.filter((function(e){return e.id!==t.payload}));return Object(o.a)(Object(o.a)({},e),{},{tasks:Object(l.a)(v),complete:Object(l.a)(y)});case u:var N=t.payload,g=N.id,k=N.title,w=e.tasks.filter((function(e){return e.id!==g})),T={id:g,title:k,completed:!0};return Object(o.a)(Object(o.a)({},e),{},{tasks:Object(l.a)(w),complete:[].concat(Object(l.a)(e.complete),[T])});default:return e}},f=Object(a.createContext)(),v=function(e){var t=e.children,c=Object(a.useReducer)(x,p);return Object(h.jsx)(f.Provider,{value:c,children:t})},y=c(11),N=c(16),g=c(26),k={backgroundColor:"#eee",textAlign:"center",padding:"1em"},w=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(!1),r=Object(i.a)(s,2),l=r[0],o=r[1],m=Object(a.useState)(""),O=Object(i.a)(m,2),p=O[0],x=O[1],v=Object(a.useState)(!1),w=Object(i.a)(v,2),T=w[0],C=w[1],S=Object(a.useState)(""),D=Object(i.a)(S,2),E=D[0],F=D[1],A=Object(a.useContext)(f),L=Object(i.a)(A,2),K=L[0],_=L[1],I=function(e){x(e.target.value)},M=function(e){_({type:j,payload:e})};return Object(h.jsxs)("div",{style:k,children:[l?Object(h.jsx)("p",{className:"error",children:"Le champ est vide"}):null,Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==c.length?(_({type:d,payload:c.trim()}),o(!1),n("")):o(!0)},children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",value:c,onChange:function(e){n(e.target.value)},className:"form-control inputT",placeholder:"Nouveau titre...",id:"text"})}),Object(h.jsx)("button",{className:"btn btn-secondary",type:"submit",children:"Ajouter"})]}),Object(h.jsxs)("div",{className:"container-tasks",children:[Object(h.jsxs)("div",{className:"container-todo",children:[Object(h.jsx)("h3",{children:"TaskList :"}),K.tasks&&!K.tasks.complete?Object(h.jsx)(a.Fragment,{children:K.tasks.map((function(e){return Object(h.jsx)(a.Fragment,{children:T&&e.id===E.id?Object(h.jsx)(a.Fragment,{children:Object(h.jsx)("div",{className:"card border-light mb-3",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("div",{className:"form-group",children:Object(h.jsx)("input",{type:"text",value:p,onChange:I,className:"form-control",placeholder:"Nouveau titre...",id:"text"})}),Object(h.jsx)("button",{className:"btn btn-secondary",onClick:function(){return t=e,void(0!==p.length?(C(!1),F([]),x(""),o(!1),_({type:b,payload:{todo:t,updateText:p}})):o(!0));var t},children:Object(h.jsx)(N.a,{})})]})})}):Object(h.jsx)("div",{className:"card border-light mb-3",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("h4",{className:"card-title",children:[Object(h.jsx)(y.b,{to:"/details/".concat(e.id),className:"btn btn-outline-info",children:e.title}),Object(h.jsx)("p",{className:"text-muted mt-2",children:e.realTitle}),Object(h.jsx)("p",{className:"lead mt-2",children:e.description})]}),Object(h.jsxs)("p",{className:"card-text",children:[Object(h.jsx)("button",{className:"btn btn-secondary",onClick:function(){C(!0),F(e)},children:Object(h.jsx)(g.a,{})}),Object(h.jsx)("button",{className:"btn btn-secondary ml-2",onClick:function(){return function(e){_({type:u,payload:e})}(e)},children:Object(h.jsx)(N.a,{})}),Object(h.jsx)("button",{className:"btn btn-danger ml-2",onClick:function(){return M(e.id)},children:Object(h.jsx)(N.b,{})})]})]})})},e.id)}))}):null]}),Object(h.jsxs)("div",{className:"container-todo",children:[Object(h.jsx)("h3",{children:"TaskListCompleted :"}),K.complete?Object(h.jsx)(a.Fragment,{children:K.complete.map((function(e){return Object(h.jsx)("div",{className:"card border-light mb-3",children:Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("p",{className:"complete",children:e.title}),Object(h.jsx)("p",{className:"card-text",children:Object(h.jsx)("button",{className:"btn btn-danger",onClick:function(){return M(e.id)},children:Object(h.jsx)(N.b,{})})})]})})}))}):null]})]})]})},T=c(13),C=c.n(T),S=c(18),D=function(){var e=Object(S.a)(C.a.mark((function e(t,c){var a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat(c,"&units=metric&lang=fr"),e.next=3,fetch(a);case 3:if(200!==(n=e.sent).status){e.next=8;break}return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:throw Error("Une erreur s'est produite");case 9:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),E="GET_WEATHER",F={weather:{},apiKey:"f1feb914336310d05e871b3de9fef93f",city:"Lille"},A=function(e,t){switch(t.type){case E:var c=t.payload;return Object(o.a)(Object(o.a)({},e),{},{weather:c});default:return e}},L=Object(a.createContext)(),K=function(e){var t=e.children,c=Object(a.useReducer)(A,F);return Object(h.jsx)(L.Provider,{value:c,children:t})},_=function(){var e=Object(a.useContext)(L),t=Object(i.a)(e,1)[0];return Object(h.jsx)(a.Fragment,{children:t.weather.weather?Object(h.jsx)("div",{children:t.weather.weather.map((function(e,c){return Object(h.jsxs)("div",{className:"card mb-3 cardWeather",children:[Object(h.jsx)("h3",{className:"card-header",children:"Weather"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"card-title",children:t.weather.name}),Object(h.jsxs)("h6",{className:"card-subtitle text-muted",children:[e.description," - ",t.weather.main.temp,"\xb0C"]})]}),Object(h.jsx)("img",{className:"d-block user-select-none",width:"200",height:"200",src:"http://openweathermap.org/img/wn/".concat(e.icon,"@2x.png"),alt:"an icon"})]},c)}))}):null})},I=function(){var e=Object(a.useContext)(L),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){var e=function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(c.city,c.apiKey);case 2:t=e.sent,n({type:E,payload:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();setInterval((function(){e()}),36e5),e()}),[n]),Object(h.jsx)("div",{children:Object(h.jsx)(_,{})})},M=function(e){var t=e.visible,c=e.setIsVisible,n=Object(a.useState)(""),s=Object(i.a)(n,2),r=s[0],l=s[1];return Object(h.jsx)("div",{className:"modal fade ".concat(t?"show":""," "),id:"locModal",tabIndex:"-1",role:"dialog","aria-labelledby":"locModalLabel","aria-hidden":"true",children:Object(h.jsx)("div",{className:"modal-dialog",role:"document",children:Object(h.jsxs)("div",{className:"modal-content",children:[Object(h.jsxs)("div",{className:"modal-header",children:[Object(h.jsx)("h5",{className:"modal-title",id:"locModalLabel",children:"Choose Location"}),Object(h.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(h.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(h.jsx)("div",{className:"modal-body",children:Object(h.jsxs)("form",{id:"w-form",onSubmit:function(e){console.log("ici"),e.preventDefault()},children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{htmlFor:"city",children:"City"}),Object(h.jsx)("input",{onChange:function(e){l(e.target.value)},value:r,type:"text",id:"city",className:"form-control"})]}),Object(h.jsxs)("div",{className:"modal-footer",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal",onClick:function(){c(!1)},children:"Close"}),Object(h.jsx)("button",{id:"w-change-btn",type:"submit",className:"btn btn-primary",children:"Save changes"})]})]})})]})})})},P=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),c=t[0],n=t[1];return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)("div",{className:"container",children:Object(h.jsx)(K,{children:Object(h.jsx)(I,{})})}),Object(h.jsx)(M,{visible:c,setIsVisible:function(){n(!c)}})]})},R=function(){var e=Object(a.useContext)(f),t=Object(i.a)(e,2),c=t[0],n=t[1],s=c.tasks,r=window.location.pathname.split("/")[3],l=s.filter((function(e){return+e.id===+r}));return Object(h.jsxs)("div",{className:"container col-lg-8 offset-lg-1",children:[Object(h.jsx)(y.b,{to:"/",className:"btn btn_link",children:"Revenir \xe0 la liste"}),Object(h.jsx)("h1",{children:l.title}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n({type:m,payload:{id:+r,realTitle:e.target[0].value,task:l}})},children:[Object(h.jsxs)("div",{className:"form-group",children:[Object(h.jsx)("label",{className:"col-form-label",htmlFor:"inputDefault",children:"Titre"}),Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Titre...",id:"inputDefault"})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Sauvegarder"})]}),Object(h.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(e.target[0].value),n({type:O,payload:{id:+r,description:e.target[0].value,task:l}})},children:[Object(h.jsxs)("div",{className:"form-group mt-5",children:[Object(h.jsx)("label",{htmlFor:"exampleTextarea",children:"Description"}),Object(h.jsx)("textarea",{className:"form-control",id:"exampleTextarea",rows:"3",placeholder:"Petite description..."})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Sauvegarder"})]})]})},W=c(3);var B=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(P,{}),Object(h.jsxs)(W.c,{children:[Object(h.jsxs)(v,{children:[Object(h.jsx)(W.a,{path:"/details/:id",component:R}),Object(h.jsx)(W.a,{exact:!0,path:"/",component:w})]}),"/"," "]})]})},J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,41)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(h.jsx)(y.a,{basename:"/todo",children:Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(B,{})})}),document.getElementById("root")),J()}},[[40,1,2]]]);
//# sourceMappingURL=main.ed996a77.chunk.js.map