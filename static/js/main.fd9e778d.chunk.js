(this["webpackJsonpbreaking-bad-quiz"]=this["webpackJsonpbreaking-bad-quiz"]||[]).push([[0],{158:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(13),i=a.n(c),r=(a(158),a(84)),s=a.n(r),o=a(94),l=a(113),j=a(28),h=a(19),d=a(14),b=a(224),u=a(74),m=a(228),O=a(247),g=a(4);var x=function(e){return Object(g.jsxs)(b.a,{maxWidth:"md",children:[Object(g.jsx)(u.a,{variant:"h5",align:"center",style:{marginTop:20,color:"#026635"},children:"Click character for more info."}),Object(g.jsx)(m.a,{container:!0,justify:"center",children:e.data.henkilot.map((function(e,t){return Object(g.jsx)(m.a,{item:!0,xs:4,children:Object(g.jsx)(O.a,{variant:"square",style:{width:250,height:300,margin:25,backgroundColor:"white"},component:h.b,to:"/henkilotiedot/".concat(e.char_id),children:Object(g.jsx)("img",{src:e.img,style:{height:350,marginTop:40},alt:"Kuva"})})},t)}))})]})},p=a(230),f=a(195),v=a(231),y=a(232),k=a(229),w=Object(k.a)({lista:{marginLeft:20,color:"#026635"},color:{color:"#026635"}});var C=function(e){var t=w(),a=Object(d.g)().id,n=e.data.henkilot.filter((function(e){return e.char_id===Number(a)}))[0];return Object(g.jsxs)(b.a,{maxWidth:"sm",children:[Object(g.jsx)(u.a,{variant:"h2",align:"center",className:t.color,children:n.name}),Object(g.jsxs)(u.a,{variant:"h6",align:"center",className:t.color,children:["(",n.nickname,")"]}),Object(g.jsx)("img",{src:n.img,alt:"kuva",style:{height:500}}),Object(g.jsxs)(p.a,{children:[Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a,{className:t.color,children:["Actor/Actress: ",n.portrayed]})}),Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a,{className:t.color,children:["Born: ",n.birthday]})}),Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a,{className:t.color,children:["Status: ",n.status]})}),Object(g.jsx)(f.a,{children:Object(g.jsx)(v.a,{className:t.color,children:"Occupation:"})}),n.occupation.map((function(e,a){return Object(g.jsx)(f.a,{children:Object(g.jsxs)(v.a,{className:t.lista,children:["-",e]})},a)}))]}),Object(g.jsx)(y.a,{component:h.b,to:"/listaus",variant:"outlined",size:"large",style:{backgroundColor:"#026635",color:"white",marginTop:10,marginBottom:50},children:"Return"})]})},T=a(233),S=a(248),N=a(244),L=a(236);var z=function(e){var t=Object(n.useState)({}),a=Object(j.a)(t,2),c=a[0],i=a[1],r=Object(n.useState)(""),s=Object(j.a)(r,2),o=s[0],l=s[1],h=Object(n.useState)(0),m=Object(j.a)(h,2),O=m[0],x=m[1],p=Object(d.e)(),f=Object(n.useState)(""),v=Object(j.a)(f,2),k=v[0],w=v[1],C=function(){var t=e.data.henkilot[Math.floor(Math.random()*e.data.henkilot.length)];i(t)};return Object(n.useEffect)((function(){C()}),[]),Object(g.jsxs)(b.a,{maxWidth:"sm",children:[Object(g.jsx)(u.a,{variant:"h4",align:"center",style:{margin:20,color:"#026635"},children:"Name character:"}),Object(g.jsx)("img",{src:c.img,alt:"henkilo1",style:{height:400}}),Object(g.jsxs)(T.a,{style:{marginTop:15,marginBottom:15},children:[Object(g.jsx)(S.a,{style:{marginLeft:10},children:"Select character"}),Object(g.jsx)(N.a,{onChange:function(e){l(e.target.value)},value:o,style:{width:550},variant:"outlined",children:e.data.henkilot.map((function(e,t){return Object(g.jsx)(L.a,{value:e.name,style:{backgroundColor:"#026635",color:"white"},children:e.name},t)}))})]}),Object(g.jsxs)(u.a,{variant:"h6",style:{color:"#026635"},children:["Score: ",O]}),Object(g.jsx)(u.a,{variant:"h4",style:{color:"#29773E"},children:k}),Object(g.jsx)(y.a,{onClick:function(){if(o===c.name){var e=O;e++,x(e),w("CORRECT!"),C()}else p.push({pathname:"/tallenna",state:{details:O}}),x(0)},variant:"outlined",size:"large",fullWidth:!0,style:{marginTop:15,backgroundColor:"#026635",color:"white"},children:"Check"})]})},E=a(137),B=a(251),P=a(117),A=a(20),W=a(243),R=Object(k.a)({color:{color:"#026635",margin:15}});var M=function(e){var t=R(),a=Object(d.f)(),c=Object(n.useRef)({}),i=Object(d.e)(),r=Object(n.useState)(new Date),s=Object(j.a)(r,2),o=s[0],l=s[1];return Object(g.jsx)(A.a,{utils:P.a,children:Object(g.jsxs)(b.a,{maxWidth:"sm",children:[Object(g.jsx)(u.a,{variant:"h2",align:"center",className:t.color,children:"GAME OVER"}),Object(g.jsxs)(u.a,{variant:"h6",align:"center",children:["Score: ",a.state.details]}),Object(g.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={nimi:c.current.nimimerkki,pisteet:a.state.details,pvm:o.getTime()};e.setPistetiedot([].concat(Object(E.a)(e.pisteTiedot),[n])),i.push({pathname:"/highscores"})},style:{marginTop:20},children:[Object(g.jsx)(W.a,{name:"aika",format:"d/M/y",readOnly:!0,inputVariant:"outlined",onChange:l,value:o,style:{marginLeft:190}}),Object(g.jsx)(B.a,{name:"nimimerkki",label:"Nickname",onChange:function(e){c.current[e.target.name]=e.target.value},variant:"outlined",style:{marginLeft:190,marginTop:10,width:215}}),Object(g.jsx)(y.a,{type:"submit",fullWidth:!0,variant:"outlined",style:{marginTop:20,backgroundColor:"#026635",color:"white"},children:"Save"})]})]})})},q=a(240),D=a(241),I=a(239),J=a(238),G=a(252),V=a(136),_=a.n(V);var H=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1];return Object(g.jsx)(q.a,{children:Object(g.jsx)(D.a,{position:"static",children:Object(g.jsxs)(I.a,{style:{backgroundColor:"#026635"},children:[Object(g.jsx)(J.a,{color:"inherit",edge:"start",onClick:function(){c(!0)},children:Object(g.jsx)(_.a,{})}),Object(g.jsx)(y.a,{color:"inherit",size:"large",component:h.b,to:"/breaking-bad-quiz",style:{marginLeft:440,fontSize:20},children:"Breaking Bad character-game"}),Object(g.jsxs)(G.a,{open:a,onClose:function(){c(!1)},children:[Object(g.jsx)(u.a,{style:{color:"gray",marginLeft:40,marginTop:40},children:"Jenna Viljakainen 2021"}),Object(g.jsxs)(p.a,{onClick:function(){c(!1)},style:{width:200,color:"#026635",margin:40},children:[Object(g.jsx)(f.a,{button:!0,component:h.b,to:"/peli",children:Object(g.jsx)(v.a,{style:{fontSize:90},children:"Game"})}),Object(g.jsx)(f.a,{button:!0,component:h.b,to:"/listaus",children:Object(g.jsx)(v.a,{children:"Characters"})}),Object(g.jsx)(f.a,{button:!0,component:h.b,to:"/highscores",children:Object(g.jsx)(v.a,{children:"Highscores"})})]})]})]})})})},K=a(242),F=Object(k.a)({color:{color:"#026635"}});var Q=function(e){var t=F();return Object(g.jsxs)(b.a,{maxWidth:"sm",children:[Object(g.jsx)(u.a,{variant:"h3",align:"center",style:{margin:15,color:"#026635"},children:"Highscores"}),Object(g.jsx)(p.a,{children:e.pisteTiedot.sort((function(e,t){return t.pisteet-e.pisteet})).map((function(e,a){return Object(g.jsxs)(f.a,{divider:!0,className:t.color,style:{width:520,textAlign:"center"},children:[Object(g.jsx)(v.a,{primary:Object(K.a)(e.pvm,"d/M/y"),className:t.color,style:{width:200}}),Object(g.jsx)(v.a,{primary:e.nimi,className:t.color,style:{width:200}}),Object(g.jsx)(v.a,{primary:e.pisteet,className:t.color,style:{width:200}})]},a)}))}),Object(g.jsx)(y.a,{component:h.b,to:"/peli",variant:"outlined",style:{backgroundColor:"#026635",color:"white",marginTop:10,marginLeft:210,marginBottom:50},children:"Play Again"})]})},U=Object(k.a)({nappi:{marginTop:50,marginLeft:220,backgroundColor:"#026635",color:"white",width:150},nappi2:{marginTop:50,marginLeft:50,backgroundColor:"#026635",color:"white",width:150}});var X=function(){var e=U();return Object(g.jsxs)(b.a,{children:[Object(g.jsx)(u.a,{variant:"h4",style:{marginTop:20,marginLeft:260,color:"#026635"},children:"Play or practice for"}),Object(g.jsx)(u.a,{variant:"h3",style:{marginTop:30,marginLeft:270,color:"white",backgroundColor:"#026635",width:210,padding:10},children:"Breaking"}),Object(g.jsx)(u.a,{variant:"h3",style:{marginLeft:315,marginTop:10,color:"white",backgroundColor:"#026635",width:245,padding:10},children:"Bad-game"}),Object(g.jsx)(y.a,{component:h.b,to:"/peli",variant:"outlined",size:"large",className:e.nappi,children:"START GAME"}),Object(g.jsx)(y.a,{component:h.b,to:"/listaus",variant:"outlined",size:"large",className:e.nappi2,children:"PRACTICE"})]})};var Y=function(){var e=Object(n.useState)({henkilot:[]}),t=Object(j.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)([]),r=Object(j.a)(i,2),u=r[0],m=r[1],O=function(){var e=Object(l.a)(s.a.mark((function e(){var t,n,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://breakingbadapi.com/api/characters");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,i=n.filter((function(e){return 39!==e.char_id})),c(Object(o.a)(Object(o.a)({},a),{},{henkilot:i}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){O(),p()}),[]);var p=function(){localStorage.getItem("Pisteet")?m(JSON.parse(localStorage.getItem("Pisteet"))):m([])};return Object(n.useEffect)((function(){localStorage.setItem("Pisteet",JSON.stringify(u))}),[u]),Object(g.jsx)(h.a,{children:Object(g.jsxs)(b.a,{maxWidth:"md",children:[Object(g.jsx)(H,{}),Object(g.jsx)(d.a,{path:"/peli",exact:!0,children:Object(g.jsx)(z,{data:a,setData:c})}),Object(g.jsx)(d.a,{path:"/breaking-bad-quiz",children:Object(g.jsx)(X,{})}),Object(g.jsx)(d.a,{path:"/listaus",children:Object(g.jsx)(x,{data:a,setData:c})}),Object(g.jsx)(d.a,{path:"/henkilotiedot/:id",children:Object(g.jsx)(C,{data:a,setData:c})}),Object(g.jsx)(d.a,{path:"/tallenna",children:Object(g.jsx)(M,{pisteTiedot:u,setPistetiedot:m})}),Object(g.jsx)(d.a,{path:"/highscores",children:Object(g.jsx)(Q,{pisteTiedot:u,setPistetiedot:m})})]})})};i.a.render(Object(g.jsx)(Y,{}),document.getElementById("root"))}},[[193,1,2]]]);
//# sourceMappingURL=main.fd9e778d.chunk.js.map