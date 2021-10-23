(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,function(e,t){function r(e){localStorage.setItem("theme",e),document.documentElement.className=e}e.exports={setTheme:r,keepTheme:function(){"theme-dark"===localStorage.getItem("theme")?r("theme-dark"):"theme-light"===localStorage.getItem("theme")?r("theme-light"):r("theme-dark")}}},,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var _home_boston_Projects_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_Screen_Screen__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(9),_components_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(8),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)({expression:"",display:""}),_useState2=Object(_home_boston_Projects_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),currentState=_useState2[0],setCurrentState=_useState2[1],errorTimeout=function(e){"max length"===e?setCurrentState({display:"Max Length"}):"error"===e&&setCurrentState({display:"Error",expression:""}),setTimeout((function(){setCurrentState({display:"",expression:""})}),1e3)},handleClick=function handleClick(e){var pressed=e.target.innerHTML,ops=["+","-","*","/","%","0",".","%","\xb1"];if(!ops.includes(pressed)||""!==currentState.expression)if("."===currentState.expression[1]&&"."===pressed)pressed.replace(/[.]/,"");else{if(currentState.expression.length>23)return errorTimeout("max length");if("AC"===pressed)setCurrentState({expression:"",display:""});else if(pressed>="0"&&pressed<="9"||"."===pressed)setCurrentState({expression:currentState.expression+=pressed,display:currentState.display+=pressed});else if("%"===pressed)setCurrentState({expression:currentState.expression/100,display:currentState.display/100});else if(-1!==ops.indexOf(pressed))setCurrentState({expression:currentState.expression+=" "+pressed+" ",display:""}),"5 *  -  + "===currentState.expression&&setCurrentState({expression:"5 ".concat(pressed)});else if("="===pressed&&currentState.expression){var evalResult=eval(currentState.expression);if(setCurrentState({display:evalResult,expression:evalResult}),"undefined"===evalResult[0])return errorTimeout("error")}}};return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("main",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Toggle_Toggle__WEBPACK_IMPORTED_MODULE_4__.a,{}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Screen_Screen__WEBPACK_IMPORTED_MODULE_2__.a,{display:currentState.display}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Keypad_Keypad__WEBPACK_IMPORTED_MODULE_3__.a,{handleClick:handleClick})]})}__webpack_exports__.a=Calculator},function(e,t,r){"use strict";r(1);var c=r(0);t.a=function(e){return Object(c.jsx)("div",{id:"display",children:e.display||0})}},function(e,t,r){"use strict";var c=r(3),_=r(1),s=r(2),l=r(0);t.a=function(){var e=Object(_.useState)("dark"),t=Object(c.a)(e,2),r=t[0],n=t[1],a=localStorage.getItem("theme"),i=function(){"theme-dark"===localStorage.getItem("theme")?(Object(s.setTheme)("theme-light"),n("light")):(Object(s.setTheme)("theme-dark"),n("dark"))};return Object(_.useEffect)((function(){"theme-dark"===localStorage.getItem("theme")?n("dark"):"theme-light"===localStorage.getItem("theme")&&n("light")}),[a]),Object(l.jsx)("div",{className:"toggle",children:"light"===r?Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onClick:i,checked:!0}),Object(l.jsx)("span",{className:"slider round"})]}):Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",onClick:i}),Object(l.jsx)("span",{className:"slider round"})]})})}},function(e,t,r){"use strict";r(1);var c=r(0),_=function(e){return Object(c.jsx)("div",{className:"keypad_row",children:e.children})},s=function(e){return Object(c.jsx)("button",{className:"btn",id:e.id,onClick:e.handleClick,children:e.children})};t.a=function(e){return Object(c.jsxs)("section",{className:"keypad",children:[Object(c.jsxs)(_,{children:[Object(c.jsx)(s,{handleClick:e.handleClick,id:"clear",children:"AC"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"plus-minus",children:"\xb1"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"percent",children:"%"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"divide",children:"/"})]}),Object(c.jsxs)(_,{children:[Object(c.jsx)(s,{handleClick:e.handleClick,id:"seven",children:"7"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"eight",children:"8"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"nine",children:"9"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"multiply",children:"*"})]}),Object(c.jsxs)(_,{children:[Object(c.jsx)(s,{handleClick:e.handleClick,id:"four",children:"4"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"five",children:"5"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"six",children:"6"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"subtract",children:"-"})]}),Object(c.jsxs)(_,{children:[Object(c.jsx)(s,{handleClick:e.handleClick,id:"one",children:"1"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"two",children:"2"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"three",children:"3"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"add",children:"+"})]}),Object(c.jsxs)(_,{children:[Object(c.jsx)(s,{handleClick:e.handleClick,id:"zero",children:"0"}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"decimal",children:"."}),Object(c.jsx)(s,{handleClick:e.handleClick,id:"equals",children:"="})]})]})}},,,,,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var c=r(1),_=r.n(c),s=r(5),l=r.n(s),n=(r(14),r(6)),a=r(2),i=r(0);var d=function(){return Object(c.useEffect)((function(){Object(a.keepTheme)()})),Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(n.a,{}),Object(i.jsx)("footer",{className:"credit",children:"Created by Boston Rohan"})]})};l.a.render(Object(i.jsx)(_.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.d83fd5bb.chunk.js.map