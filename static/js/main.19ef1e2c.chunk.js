(this.webpackJsonpmock=this.webpackJsonpmock||[]).push([[0],{78:function(e,t,s){},79:function(e,t,s){},80:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},88:function(e,t,s){},89:function(e,t,s){},90:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s.n(c),i=s(24),a=s.n(i),r=(s(78),s(79),s(37)),j=s(25),l=s(96),d=s(92),o=(s(80),s.p+"static/media/earth-globe-1964579-1661871.6ba9de33.png"),b=s(5),h=function(){return Object(b.jsx)("div",{className:"main",children:Object(b.jsxs)(r.a,{children:[Object(b.jsxs)(j.a,{span:8,offset:4,children:[Object(b.jsxs)("h1",{className:"heading",children:["Looking for a ",Object(b.jsx)("br",{}),"lollipop alternative?"," "]}),Object(b.jsx)("p",{className:"sample__text",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(b.jsxs)("p",{children:[Object(b.jsx)(l.a,{size:"large",type:"primary",role:"button",className:"button__CTA",children:"Primary CTA"}),Object(b.jsx)(l.a,{type:"default",size:"large",className:"button__CTA",children:"Learn more"})]})]}),Object(b.jsx)(j.a,{span:8,offset:2,children:Object(b.jsx)(d.a,{width:339,src:o})})]})})},x=(s(83),s.p+"static/media/Group 6.02510fb0.png"),p=function(){return Object(b.jsx)("section",{className:"table__container",children:Object(b.jsx)("div",{className:"table",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(j.a,{span:24,children:Object(b.jsx)("h1",{children:"This is Heading"})}),Object(b.jsx)(j.a,{span:24,children:Object(b.jsx)("h2",{children:"Line Two"})}),Object(b.jsx)(j.a,{span:12,offset:6,children:Object(b.jsx)("img",{src:x,alt:"table_image",className:"img"})})]})})})},g=s(71),O=s(64),I=s(42),u=s(95),A=s(97),m=s(93),G=(s(84),function(e){var t=e.serve;console.log(t);var s=t.heading,c=t.price,n=t.serving,i=t.last;return Object(b.jsx)("div",{className:"serving__container",children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(j.a,{span:24,children:Object(b.jsx)("h3",{children:s})}),Object(b.jsxs)(j.a,{span:24,className:"serving__per__month ".concat(i?"serving__last":""),children:[Object(b.jsxs)("p",{children:[" ",c]}),Object(b.jsx)("span",{children:"\xa0 Per month"})]}),Object(b.jsx)(j.a,{span:24,children:Object(b.jsxs)("p",{className:"per__serving",children:[" ",n]})})]})})}),M=(s(85),function(){var e=Object(c.useState)([{heading:"lollipop",price:"$100",serving:"For 100 serving",monthly:1,annual:.5,price_number:0},{heading:"Ice candy",price:"$200",serving:"For 100 serving",monthly:2,annual:1,price_number:0}]),t=Object(I.a)(e,2),s=t[0],n=(t[1],Object(c.useState)({label:"Annual"})),i=Object(I.a)(n,2),a=i[0],d=i[1],o=Object(c.useState)(100),h=Object(I.a)(o,2),x=h[0],p=h[1],M=Object(c.useState)(s),w=Object(I.a)(M,2),Y=w[0],R=w[1],v=Object(c.useCallback)((function(e){p(e.target.value)}),[]);Object(c.useEffect)((function(){!function(){var e;e=s.map((function(e){return Object(O.a)(Object(O.a)({},e),{},{price:"$".concat(e[a.label.toLowerCase()]*x),serving:"For ".concat(x," serving"),price_number:e[a.label.toLowerCase()]*x})})),R([].concat(Object(g.a)(e),[{heading:"Your saving with lollipop",price:"$".concat(e[1].price_number-e[0].price_number),serving:"",last:!0}]))}()}),[x,a,s]);var H=Object(c.useCallback)((function(e){d(e?{label:"Annual"}:{label:"Monthly"})}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("section",{children:Object(b.jsxs)(r.a,{children:[Object(b.jsx)(j.a,{span:24,children:Object(b.jsx)("h2",{className:"company__pricing",children:"Compare pricing today !"})}),Object(b.jsxs)(j.a,{span:24,className:"lorem__heading",children:["Lorem Ipsum is simply dummy text of the printing and",Object(b.jsx)(l.a,{type:"link",children:"typesetting."})]})]})}),Object(b.jsx)("section",{className:"radio__tab",children:Object(b.jsx)(r.a,{children:Object(b.jsx)(j.a,{span:24,children:Object(b.jsxs)(u.a.Group,{onChange:v,defaultValue:"100",children:[Object(b.jsx)(u.a.Button,{value:"25",children:"25 Serving"}),Object(b.jsx)(u.a.Button,{value:"50",children:"50 Serving"}),Object(b.jsx)(u.a.Button,{value:"100",children:"100 Serving"}),Object(b.jsx)(u.a.Button,{value:"200",children:"200 Serving"})]})})})}),Object(b.jsx)("section",{className:"discount__section",children:Object(b.jsxs)(r.a,{children:[Object(b.jsxs)(j.a,{span:2,offset:10,children:[Object(b.jsx)("p",{className:"subscription",children:a.label}),"Monthly"===a.label?null:Object(b.jsx)("span",{children:"50% off"})]}),Object(b.jsx)(j.a,{span:1,children:Object(b.jsx)("div",{className:"toggle",children:Object(b.jsx)(A.a,{defaultChecked:!0,onChange:H})})}),Object(b.jsx)(j.a,{span:1,className:"toggle_month",children:a.label})]})}),Object(b.jsx)("section",{className:"card__section",children:Object(b.jsx)(r.a,{children:Object(b.jsx)(j.a,{className:"card__container",span:12,offset:6,children:Y.map((function(e,t){return Object(b.jsx)(m.a,{bordered:"false",className:"card__serving ".concat(e.hasOwnProperty("last")?"card__last_css":""),children:Object(b.jsx)(G,{serve:e})},e.heading+t)}))})})})]})}),w=s.p+"static/media/1-intro-photo-final.d5047f31.jpg";s(88);var Y=function(){return Object(b.jsxs)("div",{className:"customer__container",children:[Object(b.jsx)("h1",{children:"Here's what our customer have to say"}),Object(b.jsxs)(r.a,{className:"customer",children:[Object(b.jsx)(j.a,{span:6,offset:5,className:"profile__container",children:Object(b.jsx)("img",{src:w,alt:"profile"})}),Object(b.jsxs)(j.a,{span:7,className:"profile__text",children:[Object(b.jsx)("blockquote",{className:"profile__block",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(b.jsx)("h2",{children:"Raja Ram"}),Object(b.jsx)("p",{children:"Tip World"})]})]})]})};s(89);var R=function(){return Object(b.jsx)("div",{className:"primary",children:Object(b.jsxs)(r.a,{children:[Object(b.jsxs)(j.a,{span:8,offset:4,children:[Object(b.jsx)("h1",{className:"recommended",children:"Loved by users,"}),Object(b.jsx)("h1",{children:"recommended by experts"}),Object(b.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}),Object(b.jsx)(l.a,{size:"large",type:"primary",role:"button",className:"button__CTA",children:"Primary CTA"})]}),Object(b.jsx)(j.a,{span:8,offset:3,children:Object(b.jsx)(d.a,{width:250,src:"data:image/png;base64,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"})})]})})};var v=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(h,{}),Object(b.jsx)(p,{}),Object(b.jsx)(M,{}),Object(b.jsx)(Y,{}),Object(b.jsx)(R,{})]})},H=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,98)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,a=t.getTTFB;s(e),c(e),n(e),i(e),a(e)}))};a.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),H()}},[[90,1,2]]]);
//# sourceMappingURL=main.19ef1e2c.chunk.js.map