(this["webpackJsonprational-design"]=this["webpackJsonprational-design"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(4),l=n.n(i),r=n(2),o=[1,"Quadrant 1:1"],j=[1.118,"Hemidiagon 1:1.118"],b=[1.154,"Trion 1:1.154"],u=[1.207,"Quadriagon 1:1.207"],d=[1.236,"Biauron 1:1.236"],h=[1.272,"Penton 1:1.272"],O=[1.414,"Diagon 1:1.414"],x=[1.458,"Bipenton 1:1.458"],p=[1.5,"Hemiolion 1:1.5"],m=[1.618,"Auron (Golden Ratio) 1:1.618"],g=[1.732,"Hecton (or Sixton) 1:1.732"],f=[1.2,"Doppelquadrant (Halves) 1:2"],v=[1.067,"Minor Second 1:1.067"],_=[1.125,"Major Second 1:1.125"],N=[1.2,"Minor Third 1:1.2"],S=[1.25,"Major Third 1:1.25"],k=[1.333,"Perfect Fourth 1:1.333"],F=[1.414,"Augmented Fourth 1:1.414"],y=[1.5,"Perfect Fifth 1:1.5"],w=n.p+"static/media/rational-design-logo-card.2a37e9dc.svg",R=n.p+"static/media/github-logo-icon.22861d02.svg",z=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("header",{className:"header",children:[Object(c.jsx)("img",{className:"header__logo",src:w,alt:"logo"}),Object(c.jsx)("nav",{className:"header__links",children:Object(c.jsxs)("a",{className:"header__links-link",href:"https://github.com/timmybytes/rational-design",children:[Object(c.jsx)("span",{className:"header__links-link--span",children:"Fork Me"}),Object(c.jsx)("img",{className:"header__links-link--icon",src:R,alt:"Github logo"})]})})]})})},M=function(){var e=Object(s.useState)("none"),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)("false"),l=Object(r.a)(i,2),o=l[0],j=l[1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("div",{className:"info-pane",children:[Object(c.jsx)("button",{className:"info-pane__button ".concat(o?"":"clicked"),onClick:function(){a("none"===n?"block":"none"),j(!o)},children:Object(c.jsx)("span",{className:"info-pane__button-text","aria-label":"info button",children:"?"})}),Object(c.jsx)("article",{className:"info-pane__panel",style:{display:n},children:Object(c.jsxs)("p",{className:"info-pane__panel-text",children:["Choose a ",Object(c.jsx)("strong",{children:"ratio"}),", ",Object(c.jsx)("strong",{children:"base font-size"})," (pixels), and"," ",Object(c.jsx)("strong",{children:"scale"})," to create a ratio-based type scale! Use the increments of the scale to create projects with pleasing relational sizes."]})})]})})},B=function(e){return Object(c.jsx)("section",{className:"examples",children:e.currentScale.map((function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("span",{className:"examples__labels",children:[e,"px"]}),Object(c.jsx)("p",{style:{fontSize:"".concat(e,"px")},className:"examples__lines",children:"Before we knew it, we were jumping over quick foxes and lazy cows."})]})}))})},C=function(){var e=Object(s.useState)(o),t=Object(r.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(16),l=Object(r.a)(i,2),w=l[0],R=l[1],z=Object(s.useState)([w]),C=Object(r.a)(z,2),A=C[0],H=C[1],D=Object(s.useRef)(n),P=Object(s.useRef)(w),T=Object(s.useRef)(A),q=Array.from({length:99},(function(e,t){return t+1})),G=function(e){for(var t=void 0!==e?+e.target.value:+A.length,n=[+P.current],c=1;c<t;c++)n.push(Math.floor(n[c-1]*D.current*100)/100);H(n),T.current=n};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("form",{className:"settings",onSubmit:function(e){e.preventDefault()},children:[Object(c.jsxs)("div",{className:"settings__ratio",children:[Object(c.jsx)("label",{className:"settings__ratio-label",htmlFor:"ratios-select",children:"Ratio"}),Object(c.jsxs)("select",{className:"settings__ratio-select",id:"ratios-select",onChange:function(e){a(+e.target.value),D.current=+e.target.value,G(),console.log()},children:[Object(c.jsx)("option",{value:o[0],children:o[1]}),Object(c.jsx)("option",{value:j[0],children:j[1]}),Object(c.jsx)("option",{value:b[0],children:b[1]}),Object(c.jsx)("option",{value:u[0],children:u[1]}),Object(c.jsx)("option",{value:d[0],children:d[1]}),Object(c.jsx)("option",{value:h[0],children:h[1]}),Object(c.jsx)("option",{value:O[0],children:O[1]}),Object(c.jsx)("option",{value:x[0],children:x[1]}),Object(c.jsx)("option",{value:p[0],children:p[1]}),Object(c.jsx)("option",{value:m[0],children:m[1]}),Object(c.jsx)("option",{value:g[0],children:g[1]}),Object(c.jsx)("option",{value:f[0],children:f[1]}),Object(c.jsx)("option",{disabled:!0,children:"\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500"}),Object(c.jsx)("option",{value:v[0],children:v[1]}),Object(c.jsx)("option",{value:_[0],children:_[1]}),Object(c.jsx)("option",{value:N[0],children:N[1]}),Object(c.jsx)("option",{value:S[0],children:S[1]}),Object(c.jsx)("option",{value:k[0],children:k[1]}),Object(c.jsx)("option",{value:F[0],children:F[1]}),Object(c.jsx)("option",{value:y[0],children:y[1]})]})]}),Object(c.jsxs)("div",{className:"settings__base",children:[Object(c.jsx)("label",{className:"settings__base-label",htmlFor:"base-size",children:"Base Size (px)"}),Object(c.jsx)("select",{className:"settings__ratio-select",name:"base-size",onChange:function(e){!function(e){P.current=+e.target.value,R(+e.target.value),G()}(e)},children:q.map((function(e){return Object(c.jsx)("option",{val:e,children:e})}))})]}),Object(c.jsxs)("div",{className:"settings__scale",children:[Object(c.jsx)("label",{className:"settings__scale-label",htmlFor:"scale",children:"Scale"}),Object(c.jsx)("select",{className:"settings__scale-input",name:"scale",onChange:function(e){G(e)},children:q.map((function(e){return Object(c.jsx)("option",{val:A.length,children:e})}))})]})]}),Object(c.jsx)(M,{}),Object(c.jsx)(B,{currentScale:A})]})};var A=function(){var e=Object(s.useState)(o),t=Object(r.a)(e,2),n=t[0],a=(t[1],Object(s.useState)(16)),i=Object(r.a)(a,2),l=i[0],j=(i[1],Object(s.useState)([l])),b=Object(r.a)(j,2),u=b[0];return b[1],Object(s.useRef)(n),Object(s.useRef)(l),Object(s.useRef)(u),Array.from({length:99},(function(e,t){return t+1})),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(z,{}),Object(c.jsx)("main",{children:Object(c.jsx)(C,{})})]})};n(10);l.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(A,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.252c6abf.chunk.js.map