(this["webpackJsonpreact-recept"]=this["webpackJsonpreact-recept"]||[]).push([[0],{33:function(e,t,c){},34:function(e,t,c){},54:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),i=c(26),s=c.n(i),r=(c(33),c(8)),j=c(2),d=(c(34),c(9)),o=c(11),l=c.n(o),b=(c(54),c(1));var h=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category"}).then((function(e){n(e.data)}))}),[]),Object(b.jsx)("div",{className:"navbar",children:c.map((function(e){return Object(b.jsxs)(r.b,{className:"navbar__link",to:{pathname:"/category/".concat(e.id,"/"),fromDashboard:!1},children:[e.name," "]})}))})};c(61);var m=function(){return Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("div",{className:"header__logo",children:Object(b.jsx)(r.b,{to:{pathname:"/",fromDashboard:!1},children:Object(b.jsx)("img",{src:"https://thumbs.dreamstime.com/b/food-blog-web-site-color-line-icon-cooking-video-streaming-online-recipes-sign-pictogram-page-mobile-app-promo-ui-ux-gui-174299418.jpg",alt:"logo"})})}),Object(b.jsx)("div",{className:"header_nav",children:Object(b.jsx)(h,{})})]})};c(62);var u=function(e){var t=e.match,c=Object(a.useState)([]),n=Object(d.a)(c,2),i=n[0],s=n[1],j=Object(a.useState)([]),o=Object(d.a)(j,2),h=o[0],m=o[1],u=t.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/category/".concat(u,"/")}).then((function(e){s(e.data),m(e.data.recipes)}))}),[u]),Object(b.jsxs)("div",{className:"category",children:[Object(b.jsx)("h1",{children:i.name}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{className:"recipes",children:h.map((function(e){return Object(b.jsx)("div",{className:"recipes__col",children:Object(b.jsx)(r.b,{to:{pathname:"/recip/".concat(e.id),fromDashboard:!1},children:Object(b.jsxs)("div",{className:"recip",children:[Object(b.jsx)("img",{src:e.image,fluid:!0}),Object(b.jsxs)("div",{className:"recip__content",children:[Object(b.jsx)("div",{className:"recip__tittle",children:e.name}),Object(b.jsxs)("div",{className:"recip__cat",children:[e.category,Object(b.jsx)("div",{className:"recip__date",children:e.created})]})]})]})})},e.id)}))})]})};var O=function(e){var t=e.match,c=Object(a.useState)([]),n=Object(d.a)(c,2),i=n[0],s=n[1],r=Object(a.useState)([]),j=Object(d.a)(r,2),o=j[0],h=j[1],m=t.params.id;return Object(a.useEffect)((function(){l()({method:"GET",url:"http://127.0.0.1:8000/api/recipes/".concat(m,"/")}).then((function(e){s(e.data),h(e.data.image)}))}),[m]),Object(b.jsx)("div",{className:"recipdetail",children:Object(b.jsxs)("div",{className:"abut__inner",children:[Object(b.jsx)("div",{className:"abut__tittle",children:i.name}),Object(b.jsx)("div",{className:"abut__image",children:Object(b.jsx)("img",{src:o,alt:"abut__image"})}),Object(b.jsx)("div",{className:"abut__description",children:i.description})]})})};c(63);var p=function(){return Object(b.jsxs)("div",{className:"greeting",children:[Object(b.jsx)("div",{className:"greeting__big",children:Object(b.jsx)("h1",{children:"\u0421\u0430\u0439\u0442 \u0441 \u0440\u0435\u0446\u0435\u043f\u0442\u0430\u043c\u0438"})}),Object(b.jsx)("div",{className:"greeting__smoll",children:Object(b.jsx)("p",{children:"\u0421\u0430\u0439\u0442 \u0441 \u0440\u0435\u0446\u0435\u043f\u0442\u0430\u043c\u0438  \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c"})})]})};var x=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("div",{className:"conteiner",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(m,{}),Object(b.jsxs)(j.c,{children:[Object(b.jsx)(j.a,{path:"/",exact:!0,component:p}),Object(b.jsx)(j.a,{path:"/recip/:id",exact:!0,component:O}),Object(b.jsx)(j.a,{path:"/category/:id",exact:!0,component:u})]})]})})})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.6e6ee580.chunk.js.map