(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{188:function(t,e,A){"use strict";A.r(e);var n=A(0),a=A.n(n);var o=function(t){var e,A;function n(e){var A;return(A=t.call(this,e)||this).props.file&&(A.state={text:A.props.file.node.rawMarkdownBody}),A}A=t,(e=n).prototype=Object.create(A.prototype),e.prototype.constructor=e,e.__proto__=A;var o=n.prototype;return o.componentDidUpdate=function(t){this.props.file.node.id!==t.file.node.id&&this.setState({text:this.props.file.node.rawMarkdownBody})},o.handleChange=function(t){this.setState({text:t.target.value})},o.render=function(){var t=this;return this.props.file?a.a.createElement("div",{style:{zIndex:10},className:"txtWindow"},a.a.createElement("div",{className:"txtWindowNav",onClick:this.props.closeWindow},this.props.file.node.frontmatter.title),a.a.createElement("textarea",{className:"txtWindowtextarea",value:this.state.text,onChange:function(e){return t.handleChange(e)}})):null},n}(a.a.Component);e.default=o},190:function(t,e,A){"use strict";A.r(e),A.d(e,"default",function(){return s});var n=A(0),a=A.n(n),o=(A(196),A(195)),i=A.n(o),r=A(188);var s=function(t){var e,A;function n(e){var A;return(A=t.call(this,e)||this).state={active:null},A}A=t,(e=n).prototype=Object.create(A.prototype),e.prototype.constructor=e,e.__proto__=A;var o=n.prototype;return o.toggleActive=function(t){this.setState({active:t})},o.closeWindow=function(){this.setState({active:null})},o.render=function(){var t=this;return this.props.data?a.a.createElement("div",{className:"iconContainer"},this.props.data.allMarkdownRemark.edges.map(function(e){return a.a.createElement("div",{className:"txtItem",key:e.node.id,tabIndex:"0",onDoubleClick:function(){t.closeWindow(),t.toggleActive(e)}},a.a.createElement("img",{src:i.a,alt:""}),a.a.createElement("span",null,e.node.frontmatter.title+".txt"))}),null!==this.state.active?a.a.createElement(r.default,{file:this.state.active,closeWindow:this.closeWindow.bind(this)}):null):null},n}(a.a.Component)},195:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAACAgIAAgID///8AAAAA///AwMBhN33UAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoALTAhTzgxAAAA+klEQVQ4y52UQQ7CIBBFW+MBStJeAIsHkMS1i6YHMNa9xXL/I1hgBgaGbvwLFrx8HsOCpvk7ohOixaVL+yctLzeJi3hEoOTyVAsu4zeBjcSOH6yc3jTrbHoEC20QoLLGaBPIFVb3dUUCyzZBvCKCXSEhQRFBrhDD1qPiBSeBAhq7YoWTQAGgnCIBpggONoWBRvlQEVQUAAqF2IKDKbDBFAiYwiAoFUNwcAU0uAIAUzi3B6XCjbE7uAIaXAGAKwwAphiCQzFFrUHB1ZI4hXe7W0kSp/BjuLeaSGbSgLTpvCNgCiAw4eKVhi4aOs8RuEfQiDzpazhPWY4/nR+uX/1xhzjAvQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo0OC0wNDowMGElB+4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NDgtMDQ6MDAQeL9SAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-txt-txt-index-js-f530c8ae55eb12cecec3.js.map