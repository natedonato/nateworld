(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8,10],{187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(66),c=a.n(i);a(200);t.default=function(e){var t=e.style;return r.a.createElement("div",{className:"navBar",style:t},r.a.createElement(c.a,{to:"/",className:"colorBox"},r.a.createElement("div",null),"Nate Donato"),r.a.createElement("div",null,r.a.createElement(c.a,{to:"/",activeClassName:"activeLink"},"Index"),r.a.createElement(c.a,{to:"/face",activeClassName:"activeLink"},"Face"),r.a.createElement(c.a,{to:"/gifs",activeClassName:"activeLink"},"Gif"),r.a.createElement(c.a,{to:"/txt",activeClassName:"activeLink"},"Txt")))}},190:function(e,t,a){"use strict";a.r(t),a.d(t,"default",function(){return i});var n=a(0),r=a.n(n);a(204);var i=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).props.data&&(a.state={bank:a.props.data.allFile.edges,active:0}),a.nextImage=a.nextImage.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){this.interval=setInterval(this.nextImage,4e3)},i.componentWillUnmount=function(){clearInterval(this.interval)},i.nextImage=function(){var e=(this.state.active+1)%this.state.bank.length;this.setState({active:e})},i.render=function(){var e=this;return this.props.data?r.a.createElement("div",{className:"frame"},r.a.createElement("img",{src:this.state.bank[this.state.active].node.publicURL,alt:"me",className:"portraitIMG",onClick:function(){return e.nextImage()}})):null},n}(r.a.Component)},194:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return l});var n=a(0),r=a.n(n),i=a(187),c=a(190);t.default=function(e){var t=e.data;return r.a.createElement("div",{style:{height:"100%",display:"flex",flexFlow:"column"}},r.a.createElement(i.default,{style:{background:"antiquewhite"}}),r.a.createElement("div",{className:"portraitBG"},r.a.createElement(c.default,{data:t})))};var l="2681950672"}}]);
//# sourceMappingURL=component---src-pages-face-js-bc4e48b9f666c7cb7556.js.map