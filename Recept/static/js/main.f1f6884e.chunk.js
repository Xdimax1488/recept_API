(this["webpackJsonpreact-recept"]=this["webpackJsonpreact-recept"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},54:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var a=c(0),i=c.n(a),n=c(26),s=c.n(n),r=(c(33),c(11)),j=c(2),d=(c(34),c(8)),o=c(10),l=c.n(o),b=(c(54),c(1));var m=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],i=t[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){i(e.data)}))}),[]),Object(b.jsx)("div",{className:"navbar",children:c.map((function(e){return Object(b.jsxs)(r.b,{className:"navbar__link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:[e.name," "]})}))})};c(61);var h=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"header__logo",src:"https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg",alt:"logo"})}),Object(b.jsx)("div",{className:"header_nav",children:Object(b.jsx)(m,{})})]}),Object(b.jsx)("div",{className:"greeting",children:"Greeting"})]})};c(62);var u=function(e){var t=e.match,c=Object(a.useState)([]),i=Object(d.a)(c,2),n=i[0],s=i[1],j=Object(a.useState)([]),o=Object(d.a)(j,2),m=o[0],h=o[1],u=t.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(e){s(e.data),h(e.data.recipes)}))}),[u]),Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h1",{children:n.name}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"recipes",children:m.map((function(e){return Object(b.jsx)("div",{className:"recipes__col",children:Object(b.jsx)(r.b,{to:{pathname:"/recip/".concat(e.id),fromDashboard:!1},children:Object(b.jsxs)("div",{className:"recip",children:[Object(b.jsx)("img",{src:e.image,fluid:!0}),Object(b.jsxs)("div",{className:"recip__content",children:[Object(b.jsx)("div",{className:"recip__tittle",children:e.name}),Object(b.jsxs)("div",{className:"recip__cat",children:[e.category,Object(b.jsx)("div",{className:"recip__date",children:e.created})]})]})]})})},e.id)}))})]})};var O=function(e){var t=e.match,c=Object(a.useState)([]),i=Object(d.a)(c,2),n=i[0],s=i[1],r=Object(a.useState)([]),j=Object(d.a)(r,2),o=j[0],m=j[1],h=t.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/recipes/".concat(h,"/")}).then((function(e){s(e.data),m(e.data.image)}))}),[h]),Object(b.jsx)("div",{className:"recipdetail",children:Object(b.jsxs)("div",{className:"abut__inner",children:[Object(b.jsx)("div",{className:"abut__tittle",children:n.name}),Object(b.jsx)("div",{className:"abut__image",children:Object(b.jsx)("img",{src:o,alt:"abut__image"})}),Object(b.jsx)("div",{className:"abut__description",children:n.description})]})})};var p=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"conteiner",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/recip/:id",exact:!0,component:O}),Object(b.jsx)(j.a,{path:"/category/:id",exact:!0,component:u})]})]})})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,n=t.getLCP,s=t.getTTFB;c(e),a(e),i(e),n(e),s(e)}))};s.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),x()}},[[63,1,2]]]);
//# sourceMappingURL=main.f1f6884e.chunk.js.map