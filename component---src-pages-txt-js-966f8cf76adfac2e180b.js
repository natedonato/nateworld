(window.webpackJsonp=window.webpackJsonp||[]).push([[11,7,12,13],{187:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(66),r=a.n(i);a(198);e.default=function(t){var e=t.style;return o.a.createElement("div",{className:"navBar",style:e},o.a.createElement(r.a,{to:"/",className:"colorBox"},o.a.createElement("div",null),"Nate Donato"),o.a.createElement("div",null,o.a.createElement(r.a,{to:"/",activeClassName:"activeLink"},"Index"),o.a.createElement(r.a,{to:"/gifs",activeClassName:"activeLink"},"Gif"),o.a.createElement(r.a,{to:"/txt",activeClassName:"activeLink"},"Txt")))}},188:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(204),r=a.n(i);var A=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).props.file&&(a.state={text:a.props.file.node.rawMarkdownBody}),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var i=n.prototype;return i.componentDidUpdate=function(t){this.props.file.node.id!==t.file.node.id&&this.setState({text:this.props.file.node.rawMarkdownBody})},i.handleChange=function(t){this.setState({text:t.target.value})},i.render=function(){var t=this;return this.props.file?o.a.createElement(r.a,{handle:".handle",defaultPosition:{x:0,y:0},position:null,scale:1,onStart:this.handleStart,onDrag:this.handleDrag,onStop:this.handleStop},o.a.createElement("div",{style:{zIndex:10},className:"txtWindow"},o.a.createElement("div",{className:"txtWindowNav handle"},o.a.createElement("span",null,this.props.file.node.frontmatter.title),o.a.createElement("div",{onClick:this.props.closeWindow,className:"closeButton"}," x ")),o.a.createElement("textarea",{className:"txtWindowtextarea",value:this.state.text,onChange:function(e){return t.handleChange(e)}}))):null},n}(o.a.Component);e.default=A},192:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return l});var n=a(0),o=a.n(n),i=(a(208),a(203)),r=a.n(i),A=a(188);var l=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).state={active:null},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var i=n.prototype;return i.toggleActive=function(t){this.setState({active:t})},i.closeWindow=function(){this.setState({active:null})},i.render=function(){var t=this;return this.props.data?o.a.createElement("div",{className:"iconContainer"},this.props.data.allMarkdownRemark.edges.map(function(e){return o.a.createElement("div",{className:"txtItem",key:e.node.id,tabIndex:"0",onDoubleClick:function(){t.closeWindow(),t.toggleActive(e)}},o.a.createElement("img",{src:r.a,alt:""}),o.a.createElement("span",null,e.node.frontmatter.title+".txt"))}),null!==this.state.active?o.a.createElement(A.default,{file:this.state.active,closeWindow:this.closeWindow.bind(this)}):null):null},n}(o.a.Component)},197:function(t,e,a){"use strict";a.r(e),a.d(e,"query",function(){return A});var n=a(0),o=a.n(n),i=a(187),r=a(192);e.default=function(t){var e=t.data;return o.a.createElement("div",{style:{background:"teal",height:"100%"}},o.a.createElement(i.default,null),o.a.createElement(r.default,{data:e}))};var A="3929649817"},203:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAFVBMVEUAAACAgIAAgID///8AAAAA///AwMBhN33UAAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQfiBhoALTAhTzgxAAAA+klEQVQ4y52UQQ7CIBBFW+MBStJeAIsHkMS1i6YHMNa9xXL/I1hgBgaGbvwLFrx8HsOCpvk7ohOixaVL+yctLzeJi3hEoOTyVAsu4zeBjcSOH6yc3jTrbHoEC20QoLLGaBPIFVb3dUUCyzZBvCKCXSEhQRFBrhDD1qPiBSeBAhq7YoWTQAGgnCIBpggONoWBRvlQEVQUAAqF2IKDKbDBFAiYwiAoFUNwcAU0uAIAUzi3B6XCjbE7uAIaXAGAKwwAphiCQzFFrUHB1ZI4hXe7W0kSp/BjuLeaSGbSgLTpvCNgCiAw4eKVhi4aOs8RuEfQiDzpazhPWY4/nR+uX/1xhzjAvQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOC0wNi0yNlQwMDo0NTo0OC0wNDowMGElB+4AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTgtMDYtMjZUMDA6NDU6NDgtMDQ6MDAQeL9SAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=component---src-pages-txt-js-966f8cf76adfac2e180b.js.map