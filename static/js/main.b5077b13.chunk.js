(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(16)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),s=t.n(o),i=(t(12),t(3)),c=t(4),m=t(5),l=t(6),u=(t(13),t(14),function(e){return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"imgBox"},r.a.createElement("img",{src:"https://robohash.org/".concat(e.monster.id,"?set=set2"),alt:"monster"})),r.a.createElement("div",{className:"contentBox"},r.a.createElement("h2",null,e.monster.name))))}),d=function(e){return r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(u,{key:e.id,monster:e})})))},h=(t(15),function(e){Object(l.a)(t,e);var n=Object(m.a)(t);function t(){var e;return Object(i.a)(this,t),(e=n.call(this)).state={monsters:[{id:1,name:"Leanne Graham",username:"Bret"},{id:2,name:"Ervin Howell",username:"Antonette"},{id:3,name:"Clementine Bauch",username:"Samantha"},{id:4,name:"Patricia Lebsack",username:"Karianne"},{id:5,name:"Chelsey Dietrich",username:"Kamren"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow"},{id:9,name:"Glenna Reichert",username:"Delphine"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton"}]},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(d,{monsters:this.state.monsters}))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.b5077b13.chunk.js.map