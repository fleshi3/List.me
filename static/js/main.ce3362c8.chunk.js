(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){},31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(3),l=a.n(c),i=(a(36),a(26)),s=a(5),o=a(6),m=a(9),u=a(7),d=a(10),p=a(17),h=(a(20),a(12)),b=a(8),k=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidUpdate",value:function(){this.props.inputElement.current.focus()}},{key:"render",value:function(){return r.a.createElement("div",{className:"todoListMain"},r.a.createElement("div",{className:"header"},r.a.createElement("form",{onSubmit:this.props.addItem,className:"TodoList"},r.a.createElement("input",{placeholder:"add list item...",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInput}),r.a.createElement("button",{type:"submit"},r.a.createElement(h.a,{icon:b.c,size:"sm",className:"faPlus"})))),r.a.createElement("div",{className:"deleteButton"},r.a.createElement("button",{type:"submit",className:"DeleteButton",onClick:this.props.deleteMarked},r.a.createElement(h.a,{icon:b.d,size:"sm",className:"faWindowClose"}))))}}]),t}(n.Component),E=a(18),v=r.a.createElement("svg",{className:"svg svg-icon",viewBox:"0 0 20 20"},r.a.createElement("path",{d:"M7.629,14.566c0.125,0.125,0.291,0.188,0.456,0.188c0.164,0,0.329-0.062,0.456-0.188l8.219-8.221c0.252-0.252,0.252-0.659,0-0.911c-0.252-0.252-0.659-0.252-0.911,0l-7.764,7.763L4.152,9.267c-0.252-0.251-0.66-0.251-0.911,0c-0.252,0.252-0.252,0.66,0,0.911L7.629,14.566z",style:{stroke:"white",fill:"white"}})),f=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).createTasks=function(e,t){return r.a.createElement(E.a,{key:e.key,maintainContainerHeight:"true"},r.a.createElement("div",{className:"liContainer",key:e.key,style:{background:e.completed?"#121212":"",order:e.completed?"99":""}},r.a.createElement("li",{style:{color:e.completed?"#689d6a":"",fontWeight:e.completed?"600":"",order:e.completed?"99":""}},r.a.createElement(h.a,{icon:b.b,size:"xs",className:"faDotCircle",style:{color:e.completed?"#353535":""}}),r.a.createElement("div",{className:"itemText"},e.text),r.a.createElement("div",{className:"pretty p-svg p-curve p-thick p-tada"},r.a.createElement("input",{type:"checkbox",key:e.key,onClick:function(){return a.props.markComplete(e.key)}}),r.a.createElement("div",{className:"state p-warning-o"},v,r.a.createElement("label",null))))))},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.entries.map(this.createTasks);return r.a.createElement("div",null,r.a.createElement("ul",{className:"theList"},r.a.createElement(E.a,{staggerDelayBy:200,className:"flexFix",maintainContainerHeight:"true"},e)))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainHeader"},r.a.createElement("h1",null,r.a.createElement("span",{className:"textMain"},"list"),r.a.createElement("span",{className:"textAlt"},"me")))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"mainFooter"},r.a.createElement("p",null,"Click this button for a quick tour!"),r.a.createElement("button",{type:"submit",onClick:this.props.takeTour},"START"," "," ",r.a.createElement(h.a,{icon:b.a,className:"tourButton"})))}}]),t}(n.Component),g=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navBar"},r.a.createElement("div",{className:"navLinks"},"add | filter | about | github"))}}]),t}(n.Component),j=(a(21),a(29)),x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).handleInput=function(e){var t={text:e.target.value,key:Date.now(),completed:!1};a.setState({currentItem:t})},a.addItem=function(e){e.preventDefault();var t=a.state.currentItem;if(""!==t.text){console.log(t);var n=[].concat(Object(i.a)(a.state.items),[t]);a.setState({items:n,currentItem:{text:"",key:"",completed:""}})}},a.deleteItem=function(e){var t=a.state.items.filter(function(t){return t.key!==e});a.setState({items:t})},a.inputElement=r.a.createRef(),a.markComplete=function(e){a.state.items.map(function(t){return t.key===e&&(t.completed=!t.completed),t});var t=Object(i.a)(a.state.items);a.setState({items:t})},a.deleteMarked=function(e){var t=a.state.items.filter(function(e){return!0!==e.completed});a.setState({items:t})},a.takeTour=function(e){e.preventDefault(),a.setState({run:!0})},a.state={items:[{text:"Introduce new visitors to my app;",key:"stock1",completed:!1},{text:"Learn React JS",key:"stock2",completed:!1},{text:"Added interactive tour",key:"stock3",completed:!1}],currentItem:{text:"",key:"",completed:""},run:!1,steps:[{target:".todoListMain",disableBeacon:!0,content:r.a.createElement("div",null,"This is the"," ",r.a.createElement("span",{className:"textAlt"},r.a.createElement("b",null,"list bar.")),"This is where list items can be added and deleted.")},{target:"form",content:r.a.createElement("div",null,"List items can be submitted by pressing the",r.a.createElement("div",{style:{display:"inline-block",background:"#8ec07c",color:"#689d6a",border:"#689d6a 2px solid",borderRadius:"5px",width:"80px"}},r.a.createElement(h.a,{icon:b.c}))," ","button.")},{target:".pretty",content:"In order to delete entries; the respective checkbox must be clicked."},{target:".DeleteButton",content:r.a.createElement("div",null,"Finally, all marked entries can be simultaneously removed by clicking the",r.a.createElement("div",{style:{display:"inline-block",background:"#8ec07c",color:"#689d6a",border:"#689d6a 2px solid",borderRadius:"5px",width:"60px"}},r.a.createElement(h.a,{icon:b.d}))," ","icon.")},{target:".itemContainer",content:r.a.createElement("div",null,r.a.createElement("p",{class:"textAlt"},r.a.createElement("b",null,"Thanks for checking out this App!")),r.a.createElement("br",null),r.a.createElement("span",{className:"textAlt"},r.a.createElement("b",null,"Note: "))," This current build is only responsive for a maximum of 6 entries.")}],showOverlay:!1},a.markComplete=a.markComplete.bind(Object(p.a)(Object(p.a)(a))),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.run,a=e.steps;return r.a.createElement("div",{className:"App"},r.a.createElement(j.a,{steps:a,continuous:!0,run:t,styles:{options:{zIndex:1e4,arrowColor:"#e3ffeb",backgroundColor:"#e3ffeb",overlayColor:"rgba(79, 26, 0, 0.4)",primaryColor:"#8ec07c",textColor:"#004a14"}}}),r.a.createElement("div",{className:"AppContainer"},r.a.createElement(g,{deleteMarked:this.deleteMarked}),r.a.createElement(y,null),r.a.createElement(k,{addItem:this.addItem,inputElement:this.inputElement,handleInput:this.handleInput,currentItem:this.state.currentItem,deleteMarked:this.deleteMarked}),r.a.createElement(E.a,{className:"itemContainer",key:this.state.items.key,maintainContainerHeight:"true",style:{order:this.state.items.completed?"99":""}},r.a.createElement(f,{entries:this.state.items,deleteItem:this.deleteItem,markComplete:this.markComplete}),r.a.createElement("div",{className:"listFooter"},"copyright 2019"))),r.a.createElement(O,{takeTour:this.takeTour}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.ce3362c8.chunk.js.map