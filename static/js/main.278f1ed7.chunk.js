(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{17:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a.n(n),i=a(10),o=a.n(i),c=(a(17),a(18),a(11)),d=a(3),l=a(5),r=a(6),h=a(1),b=a(8),j=a(7),u=a(4),m=(a(19),a(0)),p=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={isEditing:!1,task:n.props.task},n.handleDelete=n.handleDelete.bind(Object(h.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(h.a)(n)),n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.toggleForm=n.toggleForm.bind(Object(h.a)(n)),n.markDone=n.markDone.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"markDone",value:function(){this.props.markDone(this.props.id)}},{key:"toggleForm",value:function(){this.setState({isEditing:!0})}},{key:"handleDelete",value:function(){this.props.delete(this.props.id)}},{key:"handleUpdate",value:function(t){t.preventDefault(),this.props.edit(this.props.id,this.state.task),this.setState({isEditing:!1})}},{key:"handleChange",value:function(t){this.setState(Object(u.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){return this.state.isEditing?Object(m.jsxs)("form",{onSubmit:this.handleUpdate,className:"saveForm",children:[Object(m.jsx)("input",{className:"form__input",type:"text",name:"task",id:"task",value:this.state.task,onChange:this.handleChange}),Object(m.jsx)("button",{className:"iconButton",children:Object(m.jsx)("span",{className:"fa fa-check"})})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("li",{className:this.props.completed?"complete":"",onClick:this.markDone,children:this.props.task}),Object(m.jsxs)("div",{className:"buttonGroup",children:[Object(m.jsx)("button",{className:"iconButton",onClick:this.toggleForm,children:Object(m.jsx)("span",{className:"fa fa-edit"})}),Object(m.jsx)("button",{className:"iconButton",onClick:this.handleDelete,children:Object(m.jsx)("span",{className:"fa fa-trash"})})]})]})}}]),a}(n.Component),O=a(22),f=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={task:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"handleChange",value:function(t){this.setState(Object(u.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.add(Object(d.a)(Object(d.a)({},this.state),{},{id:Object(O.a)(),completed:!1})),this.setState({task:""})}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("label",{class:"form__label",for:"todo",children:"~ Today I need to ~"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsx)("input",{className:"form__input",type:"text",placeholder:"New Task",name:"task",id:"task",value:this.state.task,onChange:this.handleChange}),Object(m.jsx)("button",{className:"button",children:Object(m.jsx)("span",{children:"Add"})})]})]})}}]),a}(n.Component),k=function(t){Object(b.a)(a,t);var e=Object(j.a)(a);function a(t){var n;return Object(l.a)(this,a),(n=e.call(this,t)).state={todos:[{task:"Bathe the dogs",id:Object(O.a)(),completed:!1},{task:"Shop for groceries",id:Object(O.a)(),completed:!1},{task:"Binge watch Netflix",id:Object(O.a)(),completed:!0}]},n.addTodo=n.addTodo.bind(Object(h.a)(n)),n.deleteTodo=n.deleteTodo.bind(Object(h.a)(n)),n.editTodo=n.editTodo.bind(Object(h.a)(n)),n.markDone=n.markDone.bind(Object(h.a)(n)),n}return Object(r.a)(a,[{key:"markDone",value:function(t){var e=this.state.todos.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{completed:!e.completed}):e}));this.setState({todos:e})}},{key:"addTodo",value:function(t){this.setState({todos:[].concat(Object(c.a)(this.state.todos),[t])})}},{key:"deleteTodo",value:function(t){this.setState({todos:this.state.todos.filter((function(e){return e.id!==t}))})}},{key:"editTodo",value:function(t,e){var a=this.state.todos.map((function(a){return a.id===t?Object(d.a)(Object(d.a)({},a),{},{task:e}):a}));this.setState({todos:a})}},{key:"render",value:function(){var t=this,e=this.state.todos.map((function(e){return Object(m.jsx)(p,{task:e.task,id:e.id,delete:t.deleteTodo,edit:t.editTodo,completed:e.completed,markDone:t.markDone},e.id)}));return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"heading",children:[Object(m.jsx)("img",{class:"heading__img",src:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/756881/laptop.svg"}),Object(m.jsx)("h1",{className:"heading__title",children:"To-Do List"})]}),Object(m.jsx)(f,{add:this.addTodo}),Object(m.jsx)("ul",{className:"toDoList",children:e})]})}}]),a}(n.Component);var g=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(k,{})})},v=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,o=e.getTTFB;a(t),n(t),s(t),i(t),o(t)}))};o.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(g,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.278f1ed7.chunk.js.map