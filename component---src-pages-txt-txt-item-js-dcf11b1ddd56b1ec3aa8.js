(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{188:function(t,e,n){"use strict";n.r(e);n(49);var a=n(0),o=n.n(a);var r=function(t){var e,n;function a(e){var n;return(n=t.call(this,e)||this).props.file&&(n.state={text:n.props.file.text}),n}n=t,(e=a).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var r=a.prototype;return r.componentDidUpdate=function(t){this.props.file.text!==t.file.text&&this.setState({text:this.props.file.text})},r.handleChange=function(t){this.setState({text:t.target.value})},r.render=function(){var t=this;return this.props.file?o.a.createElement("div",{style:{zIndex:10},className:"txtWindow"},o.a.createElement("div",{className:"txtWindowNav",onClick:this.props.closeWindow},this.props.file.name),o.a.createElement("textarea",{className:"txtWindowtextarea",value:this.state.text,onChange:function(e){return t.handleChange(e)}})):null},a}(o.a.Component);e.default=r}}]);
//# sourceMappingURL=component---src-pages-txt-txt-item-js-dcf11b1ddd56b1ec3aa8.js.map