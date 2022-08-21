"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[106],{106:function(e,t,n){n.r(t),n.d(t,{default:function(){return F}});var r=n(9434),a=n(2791),i=n(885),u=n(6439),o="NOT_FOUND";var c=function(e,t){return e===t};function s(e,t){var n="object"===typeof t?t:{equalityCheck:t},r=n.equalityCheck,a=void 0===r?c:r,i=n.maxSize,u=void 0===i?1:i,s=n.resultEqualityCheck,l=function(e){return function(t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}}(a),f=1===u?function(e){var t;return{get:function(n){return t&&e(t.key,n)?t.value:o},put:function(e,n){t={key:e,value:n}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var n=[];function r(e){var r=n.findIndex((function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}return o}return{get:r,put:function(t,a){r(t)===o&&(n.unshift({key:t,value:a}),n.length>e&&n.pop())},getEntries:function(){return n},clear:function(){n=[]}}}(u,l);function m(){var t=f.get(arguments);if(t===o){if(t=e.apply(null,arguments),s){var n=f.getEntries(),r=n.find((function(e){return s(e.value,t)}));r&&(t=r.value)}f.put(arguments,t)}return t}return m.clearCache=function(){return f.clear()},m}function l(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var n=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return t}function f(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=function(){for(var t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];var i,u=0,o={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(o=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=o,f=s.memoizeOptions,m=void 0===f?n:f,p=Array.isArray(m)?m:[m],d=l(r),h=e.apply(void 0,[function(){return u++,c.apply(null,arguments)}].concat(p)),v=e((function(){for(var e=[],t=d.length,n=0;n<t;n++)e.push(d[n].apply(null,arguments));return i=h.apply(null,e)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:h,dependencies:d,lastResult:function(){return i},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return a}var m=f(s),p=function(e){return e.contacts.items},d=function(e){return e.contacts.filter},h=function(e){return e.contacts.isLoading},v=m([p,d],(function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))})),_={container:"ContactForm_container__ZH0mn",title:"ContactForm_title__AFyAJ",form:"ContactForm_form__ttXmo",lable:"ContactForm_lable__qF0NR",input:"ContactForm_input__e2U+9"},y=n(184);function b(){var e=(0,a.useState)(""),t=(0,i.Z)(e,2),n=t[0],o=t[1],c=(0,a.useState)(""),s=(0,i.Z)(c,2),l=s[0],f=s[1],m=(0,r.v9)(p),d=(0,r.I0)(),h=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":o(r);break;case"number":f(r);break;default:return}};return(0,y.jsxs)("form",{className:_.form,onSubmit:function(e){if(e.preventDefault(),m.find((function(e){return e.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," ia already in contacts"));else{var t={name:n,phone:l};d((0,u.el)(t)),o(""),f("")}},children:[(0,y.jsxs)("label",{className:_.lable,children:["Name",(0,y.jsx)("input",{className:_.input,type:"text",name:"name",value:n,onChange:h,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,y.jsxs)("label",{className:_.lable,children:["Number",(0,y.jsx)("input",{className:_.input,type:"tel",name:"number",value:l,onChange:h,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,y.jsx)("button",{className:_.button,type:"submit",children:"Add contact"})]})}var x="ContactsList_container__8KLhR",j="ContactsList_contactsList__6gviw",C="ContactsList_contactsItem__El263",g="ContactsList_button__lexmN";var N=function(){var e=(0,r.I0)(),t=(0,r.v9)(v),n=(0,r.v9)(h);return(0,y.jsxs)("section",{className:x,children:[(0,y.jsx)("ul",{className:j,children:t.map((function(t){var n=t.id,r=t.name,a=t.number;return(0,y.jsxs)("li",{className:C,children:[(0,y.jsxs)("p",{children:[r,": ",(0,y.jsx)("span",{children:a})]}),(0,y.jsx)("button",{className:g,onClick:function(){return e((0,u.tY)(n))},children:"Delete"})]},n)}))}),n&&(0,y.jsx)("h3",{children:"Loading..."})]})},w=n(6045),k={findTitle:"Filter_findTitle__0TptE",input:"Filter_input__R4e-B"};var A=function(){var e=(0,r.v9)(d),t=(0,r.I0)();return(0,y.jsx)("form",{className:k.form,children:(0,y.jsxs)("label",{className:k.lable,children:[(0,y.jsx)("span",{className:k.findTitle,children:"Find contect by name"}),(0,y.jsx)("input",{className:k.input,type:"text",name:"name",value:e,onChange:function(e){return t((0,w.x)(e.target.value))},required:!0})]})})};function F(){var e=(0,r.I0)();return(0,a.useEffect)((function(){e((0,u.K2)())}),[]),(0,y.jsxs)("div",{className:_.container,children:[(0,y.jsx)("h1",{className:_.title,children:"Phonebook"}),(0,y.jsx)(b,{}),(0,y.jsx)("h1",{className:_.title,children:"Contacts"}),(0,y.jsx)(A,{}),(0,y.jsx)(N,{})]})}}}]);
//# sourceMappingURL=106.f8dfbbb4.chunk.js.map