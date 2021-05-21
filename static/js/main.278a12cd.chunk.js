(this["webpackJsonprational-design"]=this["webpackJsonprational-design"]||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){"use strict";a.r(t);var s=a(3),c=a(0),n=a.n(c),l=a(72),r=a.n(l),i=a.p+"static/media/rational-design-logo.3f89b6f4.svg",o=a.p+"static/media/github-logo-icon.22861d02.svg",j=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("header",{className:"header",children:[Object(s.jsx)("img",{className:"header__logo",src:i,alt:"logo"}),Object(s.jsx)("nav",{className:"header__links",children:Object(s.jsxs)("a",{className:"header__links-link",href:"https://github.com/timmybytes/rational-design",children:[Object(s.jsx)("span",{className:"header__links-link--span",children:"Fork Me"}),Object(s.jsx)("img",{className:"header__links-link--icon",src:o,alt:"Github logo"})]})})]})})},b=a(8),h={1:[1,"Quadrant 1:1"],2:[1.118,"Hemidiagon 1:1.118"],3:[1.154,"Trion 1:1.154"],4:[1.207,"Quadriagon 1:1.207"],5:[1.236,"Biauron 1:1.236"],6:[1.272,"Penton 1:1.272"],7:[1.414,"Diagon 1:1.414"],8:[1.458,"Bipenton 1:1.458"],9:[1.5,"Hemiolion 1:1.5"],10:[1.618,"Auron (Golden Ratio) 1:1.618"],11:[1.732,"Hecton (or Sixton) 1:1.732"],12:[1.2,"Doppelquadrant (Halves) 1:2"],13:[1.067,"Minor Second 1:1.067"],14:[1.125,"Major Second 1:1.125"],15:[1.2,"Minor Third 1:1.2"],16:[1.25,"Major Third 1:1.25"],17:[1.333,"Perfect Fourth 1:1.333"],18:[1.414,"Augmented Fourth 1:1.414"],19:[1.5,"Perfect Fifth 1:1.5"]},d=function(){var e=Object(c.useState)("none"),t=Object(b.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)("false"),r=Object(b.a)(l,2),i=r[0],o=r[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)("section",{className:"info-pane",children:[Object(s.jsx)("button",{className:"info-pane__button ".concat(i?"":"clicked"),onClick:function(){n("none"===a?"block":"none"),o(!i)},children:Object(s.jsx)("span",{className:"info-pane__button-text","aria-label":"info button",children:"?"})}),Object(s.jsx)("article",{className:"info-pane__panel",style:{display:a},children:Object(s.jsxs)("p",{className:"info-pane__panel-text",children:["Choose a ",Object(s.jsx)("strong",{children:"ratio"}),", ",Object(s.jsx)("strong",{children:"base font-size"})," (in pixels), and ",Object(s.jsx)("strong",{children:"scale"})," to create a ratio-based type scale! Use the increments of the scale to create projects with pleasing relational sizes."]})})]})})},u=function(e){return Object(s.jsx)("section",{className:"examples",style:{background:e.bgColor,color:e.textColor},children:e.currentScale.map((function(e,t){return Object(s.jsxs)(n.a.Fragment,{children:[Object(s.jsxs)("span",{className:"examples__labels",children:[e,"px"]}),Object(s.jsx)("p",{style:{fontSize:"".concat(e,"px")},className:"examples__lines",children:"Before we knew it, we were jumping over quick foxes and lazy cows."})]},t)}))})},O=a(45),x=function(){var e=Object(c.useState)(h[3][0]),t=Object(b.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(16),r=Object(b.a)(l,2),i=r[0],o=r[1],j=Object(c.useState)([i,i,i]),x=Object(b.a)(j,2),m=x[0],f=x[1],g=Object(c.useRef)(a),p=Object(c.useRef)(i),_=Object(c.useRef)(m),N=Object(c.useState)(""),v=Object(b.a)(N,2),k=v[0],S=v[1],F=Object(c.useState)(""),y=Object(b.a)(F,2),C=y[0],w=y[1],M=["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#8bbbff","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#444444","fafafa"],z=Array.from({length:99},(function(e,t){return t+1})),R=function(e){for(var t=void 0!==e?+e.target.value:+m.length,a=[+p.current],s=1;s<t;s++)a.push(Math.floor(a[s-1]*g.current*100)/100);f(a),_.current=a};return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("section",{className:"settings",children:[Object(s.jsxs)("article",{className:"settings__ratio",children:[Object(s.jsx)("label",{className:"settings__ratio-label",htmlFor:"ratios-select",children:"Ratio"}),Object(s.jsxs)("select",{className:"settings__ratio-select",id:"ratios-select",onChange:function(e){n(+e.target.value),g.current=+e.target.value,R()},children:[Object(s.jsx)("option",{disabled:!0,children:"Orthagon Ratios"}),Object.keys(h).map((function(e,t){return"Doppelquadrant (Halves) 1:2"===h[e][1]?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("option",{disabled:!0,children:"Musical Scale Ratios"}),Object(s.jsx)("option",{value:+h[e][0],children:h[e][1]},t)]}):Object(s.jsx)("option",{value:+h[e][0],children:h[e][1]},t)}))]})]}),Object(s.jsxs)("article",{className:"settings__base",children:[Object(s.jsx)("label",{className:"settings__base-label",htmlFor:"base-size",children:"Base Size (px)"}),Object(s.jsx)("select",{className:"settings__ratio-select",name:"base-size",defaultValue:i,onChange:function(e){!function(e){p.current=+e.target.value,o(+e.target.value),R()}(e)},children:z.map((function(e,t){return Object(s.jsx)("option",{val:e,children:e},t)}))})]}),Object(s.jsxs)("article",{className:"settings__scale",children:[Object(s.jsx)("label",{className:"settings__scale-label",htmlFor:"scale",children:"Scale"}),Object(s.jsx)("select",{className:"settings__scale-input",name:"scale",defaultValue:m.length,onChange:function(e){R(e)},children:z.map((function(e,t){return Object(s.jsx)("option",{val:m.length,children:e},t)}))})]})]}),Object(s.jsxs)("section",{children:[Object(s.jsxs)("article",{className:"color-container",children:[Object(s.jsx)("label",{className:"settings__scale-label",htmlFor:"bg-color",children:"BG Color"}),Object(s.jsx)(O.a,{colors:M,onChange:function(e){S(e.hex)},width:"800"})]}),Object(s.jsxs)("article",{className:"color-container",children:[Object(s.jsx)("label",{className:"settings__scale-label",htmlFor:"text-color",children:"Text Color"}),Object(s.jsx)(O.a,{colors:M,onChange:function(e){w(e.hex)},width:"800"})]})]}),Object(s.jsx)(d,{}),Object(s.jsx)(u,{bgColor:k,textColor:C,currentScale:m})]})},m=function(){var e=(new Date).getFullYear();return Object(s.jsxs)("footer",{className:"footer",children:["Made with"," ",Object(s.jsx)("span",{role:"img","aria-label":"heart",children:"\u2764\ufe0f"})," ","by"," ",Object(s.jsx)("a",{className:"footer__link",href:"https://timmybytes.com",children:Object(s.jsx)("span",{children:"Timothy Merritt"})}),". ",e]})};var f=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(j,{}),Object(s.jsx)("main",{children:Object(s.jsx)(x,{})}),Object(s.jsx)(m,{})]})};a(190);r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(f,{})}),document.getElementById("root"))}},[[191,1,2]]]);
//# sourceMappingURL=main.278a12cd.chunk.js.map