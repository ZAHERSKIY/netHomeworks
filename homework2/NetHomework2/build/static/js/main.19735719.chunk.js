(this["webpackJsonpreact-the-complete-guide"]=this["webpackJsonpreact-the-complete-guide"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={card:"Card_card__1m44e"}},function(e,t,n){e.exports={input:"AddUser_input__12kiK"}},function(e,t,n){e.exports={button:"Button_button__6-R6B"}},function(e,t,n){e.exports={users:"UsersList_users__2x9_Q"}},,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(7),u=n.n(c),s=(n(16),n(6)),a=n(3),i=n(8),o=n.n(i),l=n(0),d=function(e){return Object(l.jsx)("div",{className:"".concat(o.a.card," ").concat(e.className),children:e.children})},j=n(9),b=n.n(j),m=n(10),h=n.n(m),p=function(e){return Object(l.jsx)("button",{className:h.a.button,type:e.type||"button",onClick:e.onClick,children:e.children})},O=function(e){var t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],u=n[1],s=Object(r.useState)(""),i=Object(a.a)(s,2),o=i[0],j=i[1];return Object(l.jsx)(d,{className:b.a.input,children:Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),0!==c.trim().length&&0!==o.trim().length&&(e.onAddUser(c,o),u(""),j(""))},children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name"}),Object(l.jsx)("input",{id:"name",type:"text",value:c,onChange:function(e){u(e.target.value)},placeholder:"Enter your name..."}),Object(l.jsx)("label",{htmlFor:"surname",children:"Surname"}),Object(l.jsx)("input",{id:"surname",type:"text",value:o,onChange:function(e){j(e.target.value)},placeholder:"Enter your surname..."}),Object(l.jsx)(p,{type:"submit",children:"Add"})]})})},x=n(11),f=n.n(x),_=function(e){return Object(l.jsx)("ul",{children:e.users.map((function(t){return Object(l.jsx)("div",{className:f.a.users,children:Object(l.jsxs)("li",{children:[t.name," ",t.surname,Object(l.jsx)(p,{onClick:function(){return e.onDeleteUser(t.id)},children:"Delete"})]},t.id)})}))})};var v=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(O,{onAddUser:function(e,t){c((function(n){return[].concat(Object(s.a)(n),[{name:e,surname:t,id:Math.random().toString()}])}))}}),Object(l.jsx)(_,{users:n,onDeleteUser:function(e){return c(Object(s.a)(n.filter((function(t){return t.id!==e}))))}})]})};u.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.19735719.chunk.js.map