(this["webpackJsonpmy-questboard"]=this["webpackJsonpmy-questboard"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(8),c=s.n(i),o=(s(14),s(9)),r=s(3),l=s(4),d=s(2),h=s(6),u=s(5),j=(s(15),s(16),s(0)),b=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this.props.tasks.length,t=this.props.tasks.reduce((function(e,t){return(t.seconds>0||0===t.seconds&&!t.isPaused)&&!t.isDone?++e:e}),0),s=this.props.tasks.reduce((function(e,t){return t.isDone?++e:e}),0);return Object(j.jsxs)("div",{className:"todoInfo",children:[Object(j.jsx)("span",{className:"label",children:"TODO:"}),Object(j.jsxs)("p",{children:[e," task",1===e?"":"s"]}),Object(j.jsxs)("ul",{children:[Object(j.jsxs)("li",{children:[e-t-s," in backlog"]}),Object(j.jsxs)("li",{children:[t," in progress"]}),Object(j.jsxs)("li",{children:[s," completed"]})]})]})}}]),s}(a.a.Component),p=(s(18),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={taskName:""},n.handleChange=n.handleChange.bind(Object(d.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"handleChange",value:function(e){this.setState({taskName:e.target.value})}},{key:"handleSubmit",value:function(e){""!==this.state.taskName&&(this.props.onAddTask(this.state.taskName),this.setState({taskName:""})),e.preventDefault()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"taskInput",children:Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{className:"bar dark",type:"text",placeholder:"New task name...",value:this.state.taskName,onChange:this.handleChange}),Object(j.jsx)("input",{className:"add dark",type:"submit",value:"+"})]})})}}]),s}(a.a.Component)),O=(s(19),s(20),function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).handleTogglePause=n.handleTogglePause.bind(Object(d.a)(n)),n.handleToggleDone=n.handleToggleDone.bind(Object(d.a)(n)),n.formatTime=n.formatTime.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"formatTime",value:function(e){var t=Math.floor(e/3600),s=Math.floor((e-3600*t)/60),n=e-3600*t-60*s;return t<10&&(t="0"+t),s<10&&(s="0"+s),n<10&&(n="0"+n),t+":"+s+":"+n}},{key:"handleTogglePause",value:function(){var e=this;this.props.isPaused?this.interval=setInterval((function(){return e.props.tick()}),1e3):clearInterval(this.interval),this.props.onTogglePause()}},{key:"handleToggleDone",value:function(){this.props.isPaused||this.handleTogglePause(),this.props.onToggleDone()}},{key:"render",value:function(){var e=this.props.isPaused?"START":"PAUSE",t=0===this.props.seconds&&this.props.isPaused?"Not started":this.formatTime(this.props.seconds);return Object(j.jsxs)("tr",{className:this.props.isDone?"taskRow done":"taskRow",children:[Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:this.props.isDone?"done":"",children:this.props.name})}),Object(j.jsx)("td",{children:Object(j.jsx)("span",{className:this.props.isPaused?"paused":"",children:t})}),Object(j.jsx)("td",{children:Object(j.jsx)("button",{onClick:this.handleTogglePause,disabled:this.props.isDone?"disabled":"",children:e})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"checkbox",checked:this.props.isDone?"checked":"",onChange:this.handleToggleDone})})]})}}]),s}(a.a.Component)),g=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(l.a)(s,[{key:"render",value:function(){var e=this,t=[];return this.props.tasks.forEach((function(s,n){t.push(Object(j.jsx)(O,{name:s.name,seconds:s.seconds,isPaused:s.isPaused,isDone:s.isDone,onTogglePause:function(){return e.props.onTogglePause(n)},onToggleDone:function(){return e.props.onToggleDone(n)},tick:function(){return e.props.tick(n)}},n))})),Object(j.jsx)("div",{className:"taskList",children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Task"}),Object(j.jsx)("th",{children:"Elapsed time"}),Object(j.jsx)("th",{children:"Timer"}),Object(j.jsx)("th",{children:"Done?"})]})}),Object(j.jsx)("tbody",{children:t})]})})}}]),s}(a.a.Component),k=function(e){Object(h.a)(s,e);var t=Object(u.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).state={tasks:[]},n.handleAddTask=n.handleAddTask.bind(Object(d.a)(n)),n.handleTogglePause=n.handleTogglePause.bind(Object(d.a)(n)),n.handleToggleDone=n.handleToggleDone.bind(Object(d.a)(n)),n.tick=n.tick.bind(Object(d.a)(n)),n}return Object(l.a)(s,[{key:"handleAddTask",value:function(e){this.setState((function(t){return{tasks:[].concat(Object(o.a)(t.tasks),[{name:e,seconds:0,isPaused:!0,isDone:!1}])}}))}},{key:"tick",value:function(e){var t=this.state.tasks.slice();t[e].seconds++,this.setState({tasks:t})}},{key:"handleTogglePause",value:function(e){var t=this.state.tasks.slice();t[e].isPaused=!t[e].isPaused,this.setState({tasks:t})}},{key:"handleToggleDone",value:function(e){var t=this.state.tasks.slice();t[e].isDone=!t[e].isDone,this.setState({tasks:t})}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App-header dark",children:Object(j.jsx)("h1",{children:"Daily Questboard"})}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-2",children:Object(j.jsxs)("div",{className:"panel light",children:[Object(j.jsx)(b,{tasks:this.state.tasks}),Object(j.jsx)(p,{onAddTask:this.handleAddTask})]})}),Object(j.jsx)("div",{className:"col-10",children:Object(j.jsx)("div",{className:"panel light",children:Object(j.jsx)(g,{tasks:this.state.tasks,onTogglePause:this.handleTogglePause,onToggleDone:this.handleToggleDone,tick:this.tick})})})]})]})}}]),s}(a.a.Component),m=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,22)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),n(e),a(e),i(e),c(e)}))};c.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root")),m()}],[[21,1,2]]]);
//# sourceMappingURL=main.8ee6c3b1.chunk.js.map