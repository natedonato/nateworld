(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{190:function(t,e,a){"use strict";a.r(e),a.d(e,"default",function(){return r});var n=a(0),i=a.n(n);a(206);function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var r=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).props.data&&(a.state={bank:a.props.data.allFile.edges,active:0,playing:!0}),a.nextImage=a.nextImage.bind(s(a)),a.previousImage=a.previousImage.bind(s(a)),a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){this.interval=setInterval(this.nextImage,3e3)},r.componentWillUnmount=function(){clearInterval(this.interval)},r.togglePlay=function(){this.state.playing?(clearInterval(this.interval),this.setState({playing:!1})):(this.nextImage(),this.interval=setInterval(this.nextImage,3e3),this.setState({playing:!0}))},r.pause=function(){clearInterval(this.interval),this.setState({playing:!1})},r.play=function(){this.interval=setInterval(this.nextImage,3500),this.setState({playing:!0})},r.nextImage=function(){var t=(this.state.active+1)%this.state.bank.length;this.setState({active:t})},r.previousImage=function(){var t=this.state.active-1;t<0&&(t=this.state.bank.length-1),this.setState({active:t})},r.render=function(){var t=this;return this.props.data?i.a.createElement("div",{className:"frame"},i.a.createElement("img",{src:"/nateworld/"+this.state.bank[this.state.active].node.publicURL,alt:"me",className:"portraitIMG",onClick:function(){return t.nextImage()}}),i.a.createElement("div",{className:"controls"},i.a.createElement("div",{className:"material-icons",onClick:this.previousImage}," arrow_left "),i.a.createElement("div",{className:"material-icons",onClick:function(){return t.togglePlay()}}," ",this.state.playing?"pause":"play_arrow"," "),i.a.createElement("div",{className:"material-icons",onClick:this.nextImage}," arrow_right "))):null},n}(i.a.Component)}}]);
//# sourceMappingURL=component---src-pages-portrait-portrait-js-82a6340ebb03f71f13ee.js.map