(this["webpackJsonpreact-recept"]=this["webpackJsonpreact-recept"]||[]).push([[0],{33:function(e,c,t){},34:function(e,c,t){},54:function(e,c,t){},61:function(e,c,t){},62:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),i=t(26),s=t.n(i),r=(t(33),t(11)),j=t(2),d=(t(34),t(8)),o=t(10),l=t.n(o),b=(t(54),t(1));var m=function(){var e=Object(a.useState)([]),c=Object(d.a)(e,2),t=c[0],n=c[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("div",{className:"navbar",children:t.map((function(e){return Object(b.jsxs)(r.b,{className:"navbar__link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:[e.name," "]})}))})};t(61);var h=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"header__logo",src:"https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg",alt:"logo"})}),Object(b.jsx)("div",{className:"header_nav",children:Object(b.jsx)(m,{})})]})};var u=function(e){var c=e.match,t=Object(a.useState)([]),n=Object(d.a)(t,2),i=n[0],s=n[1],j=Object(a.useState)([]),o=Object(d.a)(j,2),m=o[0],h=o[1],u=c.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(e){s(e.data),h(e.data.recipes)}))}),[u]),Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h1",{children:i.name}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"recipes",children:m.map((function(e){return Object(b.jsx)("div",{className:"recipes__col",children:Object(b.jsx)(r.b,{to:{pathname:"/recip/".concat(e.id),fromDashboard:!1},children:Object(b.jsxs)("div",{className:"recip",children:[Object(b.jsx)("img",{src:e.image,alt:"images"}),Object(b.jsxs)("div",{className:"recip__content",children:[Object(b.jsx)("div",{className:"recip__tittle",children:e.name}),Object(b.jsxs)("div",{className:"recip__cat",children:[e.category,Object(b.jsx)("div",{className:"recip__date",children:e.created})]})]})]})})},e.id)}))})]})};var p=function(e){var c=e.match,t=Object(a.useState)([]),n=Object(d.a)(t,2),i=n[0],s=n[1],r=c.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/recipes/".concat(r,"/")}).then((function(e){s(e.data)}))}),[r]),Object(b.jsx)("div",{className:"recipdetail",children:Object(b.jsxs)("div",{className:"abut__inner",children:[Object(b.jsx)("div",{className:"abut__tittle",children:i.name}),Object(b.jsx)("div",{className:"abut__image",children:i.image}),Object(b.jsx)("div",{className:"abut__description",children:i.description})]})})};var O=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"conteiner",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/recip/:id",exact:!0,component:p}),Object(b.jsx)(j.a,{path:"/category/:id",exact:!0,component:u})]})]})})})},x=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(c){var t=c.getCLS,a=c.getFID,n=c.getFCP,i=c.getLCP,s=c.getTTFB;t(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(O,{})}),document.getElementById("root")),x()}},[[62,1,2]]]);
//# sourceMappingURL=main.d118318d.chunk.js.map