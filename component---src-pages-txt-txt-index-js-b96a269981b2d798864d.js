(window.webpackJsonp=window.webpackJsonp||[]).push([[7,8],{188:function(t,e,n){"use strict";n.r(e);var a=n(0),A=n.n(a);var o=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).props.file&&(n.state={text:n.props.file.node.rawMarkdownBody}),n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.componentDidUpdate=function(t){this.props.file.node.id!==t.file.node.id&&this.setState({text:this.props.file.node.rawMarkdownBody})},o.handleChange=function(t){this.setState({text:t.target.value})},o.render=function(){var t=this;return this.props.file?A.a.createElement("div",{style:{zIndex:10},className:"txtWindow"},A.a.createElement("div",{className:"txtWindowNav",onClick:this.props.closeWindow},this.props.file.node.frontmatter.title),A.a.createElement("textarea",{className:"txtWindowtextarea",value:this.state.text,onChange:function(e){return t.handleChange(e)}})):null},a}(A.a.Component);e.default=o},190:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return s});var a=n(0),A=n.n(a),o=(n(196),n(195)),i=n.n(o),r=n(188);var s=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).state={active:null,txts:[{name:"junkyard",text:"hey people"},{name:"the_office",text:"i went in once \nafter hours and\nshit on the carpet."},{name:"junkyard",text:"nothing to see here"},{name:"THECAPS",text:"Hey there \n partner"},{name:"junkyard",text:"hey people"},{name:"the_office",text:"yep this is a txt"},{name:"junkyard",text:"hey people"},{name:"the_office",text:"yep this is a txt"}]},n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var o=a.prototype;return o.toggleActive=function(t){this.setState({active:t})},o.closeWindow=function(){this.setState({active:null})},o.render=function(){var t=this;return A.a.createElement("div",{className:"iconContainer"},this.props.data.allMarkdownRemark.edges.map(function(e){return A.a.createElement("div",{className:"txtItem",key:e.node.id,tabIndex:"0",onDoubleClick:function(){t.closeWindow(),t.toggleActive(e)}},A.a.createElement("img",{src:i.a,alt:""}),A.a.createElement("span",null,e.node.frontmatter.title+".txt"))}),null!==this.state.active?A.a.createElement(r.default,{file:this.state.active,closeWindow:this.closeWindow.bind(this)}):null)},a}(A.a.Component)},195:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAACAgIAAgID///8AAAAA///AwMBhN33UAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoALTAhTzgxAAAA+klEQVQ4y52UQQ7CIBBFW+MBStJeAIsHkMS1i6YHMNa9xXL/I1hgBgaGbvwLFrx8HsOCpvk7ohOixaVL+yctLzeJi3hEoOTyVAsu4zeBjcSOH6yc3jTrbHoEC20QoLLGaBPIFVb3dUUCyzZBvCKCXSEhQRFBrhDD1qPiBSeBAhq7YoWTQAGgnCIBpggONoWBRvlQEVQUAAqF2IKDKbDBFAiYwiAoFUNwcAU0uAIAUzi3B6XCjbE7uAIaXAGAKwwAphiCQzFFrUHB1ZI4hXe7W0kSp/BjuLeaSGbSgLTpvCNgCiAw4eKVhi4aOs8RuEfQiDzpazhPWY4/nR+uX/1xhzjAvQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo0OC0wNDowMGElB+4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NDgtMDQ6MDAQeL9SAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-txt-txt-index-js-b96a269981b2d798864d.js.map