(this["webpackJsonpreact-recept"]=this["webpackJsonpreact-recept"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},54:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(26),s=c.n(i),r=(c(33),c(11)),j=c(2),d=(c(34),c(8)),o=c(10),b=c.n(o),l=(c(54),c(1));var m=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){n(e.data)}))}),[]),Object(l.jsx)("div",{className:"navbar",children:c.map((function(e){return Object(l.jsxs)(r.b,{className:"navbar__link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:[e.name," "]})}))})};c(61);var h=function(){return Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("div",{className:"header__logo",children:Object(l.jsx)("img",{src:"https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg",alt:"logo"})}),Object(l.jsx)("div",{className:"header_nav",children:Object(l.jsx)(m,{})})]})};c(62);var u=function(e){var t=e.match,c=Object(a.useState)([]),n=Object(d.a)(c,2),i=n[0],s=n[1],j=Object(a.useState)([]),o=Object(d.a)(j,2),m=o[0],h=o[1],u=t.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(e){s(e.data),h(e.data.recipes)}))}),[u]),Object(l.jsxs)("div",{className:"category",children:[Object(l.jsx)("h1",{children:i.name}),Object(l.jsx)("hr",{}),Object(l.jsx)("div",{className:"recipes",children:m.map((function(e){return Object(l.jsx)("div",{className:"recipes__col",children:Object(l.jsx)(r.b,{to:{pathname:"/recip/".concat(e.id),fromDashboard:!1},children:Object(l.jsxs)("div",{className:"recip",children:[Object(l.jsx)("img",{src:e.image,fluid:!0}),Object(l.jsxs)("div",{className:"recip__content",children:[Object(l.jsx)("div",{className:"recip__tittle",children:e.name}),Object(l.jsxs)("div",{className:"recip__cat",children:[e.category,Object(l.jsx)("div",{className:"recip__date",children:e.created})]})]})]})})},e.id)}))})]})};var p=function(e){var t=e.match,c=Object(a.useState)([]),n=Object(d.a)(c,2),i=n[0],s=n[1],r=Object(a.useState)([]),j=Object(d.a)(r,2),o=j[0],m=j[1],h=t.params.id;return Object(a.useEffect)((function(){b()({method:"GET",url:"http://127.0.0.1:8000/api/recipes/".concat(h,"/")}).then((function(e){s(e.data),m(e.data.image)}))}),[h]),Object(l.jsx)("div",{className:"recipdetail",children:Object(l.jsxs)("div",{className:"abut__inner",children:[Object(l.jsx)("div",{className:"abut__tittle",children:i.name}),Object(l.jsx)("div",{className:"abut__image",children:Object(l.jsx)("img",{src:o,alt:"abut__image"})}),Object(l.jsx)("div",{className:"abut__description",children:i.description})]})})};var O=function(){return Object(l.jsx)("div",{children:"Greeting"})};var x=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{className:"conteiner",children:Object(l.jsxs)(r.a,{children:[Object(l.jsx)(h,{}),Object(l.jsxs)(j.c,{children:[Object(l.jsx)(j.a,{path:"/",exact:!0,component:O}),Object(l.jsx)(j.a,{path:"/recip/:id",exact:!0,component:p}),Object(l.jsx)(j.a,{path:"/category/:id",exact:!0,component:u})]})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root")),v()}},[[63,1,2]]]);
//# sourceMappingURL=main.e79ed0bf.chunk.js.map