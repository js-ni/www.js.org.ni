(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/event.ec859341.jpg"},25:function(e){e.exports=[{end_time:"2018-04-14T17:00:00-0600",id:"181525752639460",name:"Coffee JS - Abril 2018",place:{name:"Chocoyo Labs",location:{city:"Managua",country:"Nicaragua",latitude:12.136062922753,longitude:-86.266359686852,street:"De la DGI o TransNica 300 metros al norte, contiguo a Joyer\xeda Garzon."},id:"1551848665142527"},start_time:"2018-04-14T14:00:00-0600"},{end_time:"2018-03-24T16:00:00-0600",id:"1836388649997571",name:"Coffee JS - Marzo 2018",place:{name:"Chocoyo Labs",location:{city:"Managua",country:"Nicaragua",latitude:12.136062922753,longitude:-86.266359686852,street:"De la DGI o TransNica 300 metros al norte, contiguo a Joyer\xeda Garzon."},id:"1551848665142527"},start_time:"2018-03-24T14:00:00-0600"},{end_time:"2018-02-24T17:00:00-0600",id:"151217388910423",name:"Coffee JS - Febrero 2018",place:{name:"Buffet Restaurante Espino Negro",location:{city:"Tipitapa",country:"Nicaragua",latitude:12.201759494,longitude:-86.095476274,street:"505",zip:"505"},id:"784905778244064"},start_time:"2018-02-24T14:00:00-0600"}]},26:function(e,t,a){e.exports=a.p+"static/media/computer.e3baf278.jpg"},29:function(e){e.exports=[{end_time:"2019-06-14T20:30:00-0600",id:"630288710770601",name:"JSTalks - Junio 2019",start_time:"2019-06-14T20:00:00-0600"},{end_time:"2019-05-17T20:30:00-0600",id:"809387399446202",name:"JSTalks - Mayo 2019",start_time:"2019-05-17T20:00:00-0600"}]},36:function(e,t,a){e.exports=a(59)},44:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t),a.d(t,"KNOWN_MEMBERS",function(){return n});var n=[{login:"LaurenceM10",avatar_url:"https://avatars1.githubusercontent.com/u/13529689?v=4",html_url:"https://github.com/LaurenceM10"},{login:"amosrivera",avatar_url:"https://avatars1.githubusercontent.com/u/548232?v=4",html_url:"https://github.com/amosrivera"},{login:"christopher-ramirez",avatar_url:"https://avatars1.githubusercontent.com/u/1440398?v=4",html_url:"https://github.com/christopher-ramirez"},{login:"hosmelq",avatar_url:"https://avatars2.githubusercontent.com/u/1166143?v=4",html_url:"https://github.com/hosmelq"},{login:"jarbitlira",avatar_url:"https://avatars1.githubusercontent.com/u/3398354?v=4",html_url:"https://github.com/jarbitlira"},{login:"jenniercruz",avatar_url:"https://avatars1.githubusercontent.com/u/25697290?v=4",html_url:"https://github.com/jenniercruz"},{login:"juanpicado",avatar_url:"https://avatars0.githubusercontent.com/u/558752?v=4",html_url:"https://github.com/juanpicado"},{login:"leftdevel",avatar_url:"https://avatars3.githubusercontent.com/u/843337?v=4",html_url:"https://github.com/leftdevel"},{login:"oscarmcm",avatar_url:"https://avatars3.githubusercontent.com/u/2553459?v=4",html_url:"https://github.com/oscarmcm"},{login:"paulomcnally",avatar_url:"https://avatars2.githubusercontent.com/u/181533?v=4",html_url:"https://github.com/paulomcnally"}]},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(41),a(7)),l=a(14),u=a(20);c.b.add(l.a,l.b,l.c),c.b.add(u.a);a(44);var m=a(5),s=a(1),d=a(4),p=a(10),h=a(21),f=a.n(h),g=a(33),b=a(34),v=function(e){var t=(new DOMParser).parseFromString(e,"text/html").body.textContent||"";return t=t.replace(/https?:\/\/.*?\/[a-z0-9/#:?&_-]*/g,"")},x=function(e){var t=Object(n.useState)(!0),a=Object(p.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)([]),c=Object(p.a)(i,2),l=c[0],u=c[1];return Object(n.useEffect)(function(){var t="".concat("https://api.rss2json.com/v1/api.json","?rss_url=").concat(encodeURIComponent(e));fetch(t).then(function(e){return e.json()}).then(function(e){e.items=e.items.map(function(e){var t=e.content,a=e.description,n=Object(b.a)(e,["content","description"]);return Object(g.a)({contentPlain:v(t),descriptionPlain:v(a),content:t,description:a},n)}),u(e.items),o(!1)})},[e]),[r,l]};function E(e){var t=f()(e.pubDate).fromNow();return r.a.createElement(s.Card,{as:"article",bg:"white",borderRadius:4,boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)",p:20},r.a.createElement(s.Link,{color:"#222",href:e.guid},r.a.createElement(s.Heading,{as:"h3",children:e.title,fontWeight:"normal",mb:"4px"})),r.a.createElement(s.Text,{as:"time",color:"#aaa",children:t}),r.a.createElement(s.Text,{children:e.descriptionPlain.split(".").slice(0,1),color:"#888",mt:16}))}var j=function(){var e=x("https://medium.com/feed/javascript-nicaragua"),t=Object(p.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.Flex,{alignItems:"flex-end",justifyContent:"space-between"},r.a.createElement(s.Heading,{fontSize:28,fontWeight:"normal"},"Blog"),r.a.createElement(s.Text,{as:"a",fontSize:14,href:"https://medium.com/javascript-nicaragua"},"Ver m\xe1s art\xedculos")),a?r.a.createElement(s.Text,{fontSize:16,mt:15},"Cargando publicaciones..."):n.map(function(e){return r.a.createElement(s.Box,{key:e.guid,mt:16},r.a.createElement(E,e))}))},_=a(24),y=a.n(_),w=a(25),O=a(62),k=a(61),z=a(12),S=a.n(z),T=a(6);var C=function(e){var t,a,n=e.place,o=n.location,i=o.latitude,c=o.longitude;return r.a.createElement(s.Card,{bg:"white",borderRadius:4,css:{overflow:"hidden"}},r.a.createElement(s.Image,{alt:e.name,src:(t=i,a=c,"https://maps.googleapis.com/maps/api/staticmap?center=".concat(t,",").concat(a,"&zoom=16&size=580x300&markers=color:red%7Clabel:%7C12.136062922753,-86.266359686852&key=AIzaSyC5YSkpeBuJyiBp0BnkWBW6Es3CQPymD84"))}),r.a.createElement(s.Box,{color:"#777",p:3,css:{lineHeight:"24px"}},r.a.createElement(s.Heading,{fontSize:3},r.a.createElement(s.Link,{color:"#4183c4",href:"https://www.facebook.com/events/".concat(e.id)},e.name)),r.a.createElement(s.Text,{mt:2,css:{textTransform:"capitalize"}},r.a.createElement(T.a,{fixedWidth:!0,icon:["far","calendar-alt"]}),Object(O.a)(Object(k.a)(e.start_time),"MMMM d, y",{locale:S.a})),r.a.createElement(s.Text,null,r.a.createElement(T.a,{fixedWidth:!0,icon:["far","clock"]}),Object(O.a)(Object(k.a)(e.start_time),"hh:mm a")," -"," ",Object(O.a)(Object(k.a)(e.end_time),"hh:mm a")),r.a.createElement(s.Text,null,r.a.createElement(s.Link,{color:"#777",href:"https://www.google.com/maps/@".concat(i,",").concat(c,",17z")},r.a.createElement(T.a,{fixedWidth:!0,icon:["far","map"]}),n.name)),r.a.createElement(s.Text,null,r.a.createElement(T.a,{fixedWidth:!0,icon:["fas","globe-americas"]}),o.city,", ",o.country)))};function B(){var e=Object(m.a)(["",""]);return B=function(){return e},e}function M(){var e=Object(m.a)(["",""]);return M=function(){return e},e}var W=d.default.div.withConfig({displayName:"Events__Container",componentId:"ed3tlf-0"})(["position:relative;background-attachment:fixed;background-image:url(",");background-repeat:no-repeat;background-size:cover;&:before{content:'';bottom:0;left:0;position:absolute;right:0;top:0;background-color:rgba(44,62,80,0.9);}"],y.a);var N=function(){return r.a.createElement(W,null,r.a.createElement(J,{m:"0 auto",px:[3,4,0],py:5,width:[null],_css:{maxWidth:"948px",position:"relative"}},r.a.createElement(s.Heading,{color:"white",fontSize:28,fontWeight:"normal"},"Eventos"),r.a.createElement(H,{mt:3,_css2:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gridGap:"20px"}},w.map(function(e){return r.a.createElement(C,Object.assign({key:e.id},e))}))))},J=Object(d.default)(s.Box)(M(),function(e){return e._css}),H=Object(d.default)(s.Box)(B(),function(e){return e._css2});var R=function(){return r.a.createElement(s.Flex,{alignItems:"center",bg:"#273531",justifyContent:"space-between",p:4},r.a.createElement(s.Text,{color:"#6d7d79"},"Comunidad de desarrolladores JavaScript de Nicaragua"),r.a.createElement("a",{href:"http://js.org",rel:"noopener noreferrer",target:"_blank",title:"JS.ORG | JavaScript Community"},r.a.createElement("img",{alt:"JS.ORG Logo",src:"https://logo.js.org/bright_horz.png",width:"102"})))};var I=function(){return r.a.createElement(s.Box,{bg:"#f7df1f",py:20,css:{borderBottom:"1px solid #bdbdbd"}},r.a.createElement(s.Heading,{as:"h1",color:"#2d2d2d",children:"Comunidad JavaScript de Nicaragua",fontSize:5,fontWeight:"normal",textAlign:"center"}))},L=a(26),D=a.n(L);function G(){var e=Object(m.a)(["\n  margin: 0 auto;\n  maxwidth: 600px;\n  position: relative;\n  textalign: center;\n  zindex: 44;\n  max-width: 600px;\n  text-align: center;\n"]);return G=function(){return e},e}function F(){var e=Object(m.a)(["\n  position: relative;\n\n  background-image: url(",");\n  background-size: cover;\n  background-repeat: repeat;\n  background-attachment: fixed;\n\n  &:before {\n    content: '';\n\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n\n    background-color: rgba(44, 62, 80, 0.9);\n  }\n"]);return F=function(){return e},e}var P=d.default.div(F(),D.a),q=d.default.div(G());var A=function(){return r.a.createElement(P,null,r.a.createElement(s.Box,{color:"#f1f1f1",px:3,py:5},r.a.createElement(q,null,r.a.createElement(s.Heading,{fontSize:5},"\xbfQui\xe9nes somos?"),r.a.createElement(s.Text,{fontSize:2,lineHeight:1.5,mt:4},"Somos un grupo de desarrolladores que nos reunimos para hablar acerca de librer\xedas, frameworks y todo lo relacionado a JavaScript."),r.a.createElement(s.Text,{fontSize:2,lineHeight:1.5,mt:3},"Nos reunimos para socializar y comer pizza, compartimos conocimientos mediante charlas presenciales o v\xeda hangouts. Creamos capital social para tener nuevas oportunidades de empleo."))))},K=a(13),Q=a(27),U=a(30),V=a(28),Y=a(32),$=a(58),X=function e(t){var a=this;Object(K.a)(this,e),this.publicMembers=function(){var e="https://api.github.com/orgs/".concat(a.organization,"/public_members");return fetch(e).then(function(e){return e.ok?e.json():$.KNOWN_MEMBERS})},this.publicRepos=function(){var e="https://api.github.com/orgs/".concat(a.organization,"/repos");return fetch(e).then(function(e){return e.ok?e.json().sort(function(e,t){return t.stargazers_count-e.stargazers_count}):[]})},this.organization=t};function Z(e){return r.a.createElement("a",{href:e.member.html_url,title:e.member.login},r.a.createElement("img",{alt:e.member.login,src:e.member.avatar_url,style:{borderRadius:"8px"},width:"64px"}))}function ee(e){return r.a.createElement(s.Box,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"}},e.members.map(function(e){return r.a.createElement(s.Box,{mx:2,my:2,key:e.login},r.a.createElement(Z,{member:e}))}))}var te=function(e){function t(e){var a;return Object(K.a)(this,t),(a=Object(U.a)(this,Object(V.a)(t).call(this,e))).render=function(){return r.a.createElement(ee,{members:a.state.members})},a.state={members:[],pending:!0,error:!1},a}return Object(Y.a)(t,e),Object(Q.a)(t,[{key:"componentDidMount",value:function(){var e=this;new X(this.props.orgName).publicMembers().then(function(t){e.setState({members:t,pending:!1})}).catch(function(t){console.error(t),e.setState({error:!0})})}}]),t}(r.a.Component),ae=a(29);var ne=function(e){return r.a.createElement(s.Card,{bg:"white",borderRadius:4,color:"#777",p:3},r.a.createElement(s.Heading,{fontSize:3},r.a.createElement(s.Link,{color:"#4183c4",href:"https://www.facebook.com/events/".concat(e.id)},e.name)),r.a.createElement(s.Text,{mt:2,css:{textTransform:"capitalize"}},r.a.createElement(T.a,{fixedWidth:!0,icon:["far","calendar-alt"]}),Object(O.a)(Object(k.a)(e.start_time),"MMMM d, y",{locale:S.a})),r.a.createElement(s.Text,null,r.a.createElement(T.a,{fixedWidth:!0,icon:["far","clock"]}),Object(O.a)(Object(k.a)(e.start_time),"hh:mm a")," -"," ",Object(O.a)(Object(k.a)(e.end_time),"hh:mm a")))};function re(){var e=Object(m.a)(["",""]);return re=function(){return e},e}function oe(){var e=Object(m.a)(["",""]);return oe=function(){return e},e}var ie=d.default.div.withConfig({displayName:"Talks__Container",componentId:"sc-1d7ahx6-0"})(["position:relative;background-attachment:fixed;background-repeat:no-repeat;background-size:cover;&:before{content:'';bottom:0;left:0;position:absolute;right:0;top:0;background-color:rgba(44,62,80,0.9);}"]);var ce=function(){return r.a.createElement(ie,null,r.a.createElement(le,{m:"0 auto",px:[3,4,0],py:5,width:[null],_css:{maxWidth:"948px",position:"relative"}},r.a.createElement(s.Heading,{color:"white",fontSize:28,fontWeight:"normal"},"Charlas"),r.a.createElement(ue,{mt:3,_css2:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gridGap:"20px"}},ae.map(function(e){return r.a.createElement(ne,Object.assign({key:e.id},e))}))))},le=Object(d.default)(s.Box)(oe(),function(e){return e._css}),ue=Object(d.default)(s.Box)(re(),function(e){return e._css2});function me(){var e=Object(m.a)(["\n  margin: 0 auto;\n  max-width: 948px;\n"]);return me=function(){return e},e}var se=d.default.div(me());var de=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(A,null),r.a.createElement(s.Box,{bg:"#eff1f5"},r.a.createElement(te,{orgName:"js-ni"}),r.a.createElement(s.Box,{m:"0 auto",px:[3,4,0],py:5},r.a.createElement(se,null,r.a.createElement(j,null)))),r.a.createElement(ce,null),r.a.createElement(N,null),r.a.createElement(R,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[36,1,2]]]);
//# sourceMappingURL=main.955ab8ea.chunk.js.map