(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2,4],{187:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(66),o=n.n(s);n(193);e.default=function(){return a.a.createElement("div",{className:"navBar"},a.a.createElement(o.a,{to:"/",className:"colorBox"},a.a.createElement("div",null),"Nate Donato"),a.a.createElement("div",null,a.a.createElement(o.a,{to:"/",activeClassName:"activeLink"},"Index"),a.a.createElement(o.a,{to:"/txt",activeClassName:"activeLink"},"Txt")))}},189:function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return r});var i=n(0),a=n.n(i);function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}var r=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:1e3,height:1e3,last:Date.now(),lastBox:Date.now(),boxes:[{x:100,y:100,velx:80,vely:20,w:720,h:80},{x:200,y:200,velx:400,vely:8,w:720,h:80}]},n.updateAnimationState=n.updateAnimationState.bind(s(n)),n.updateDimensions=n.updateDimensions.bind(s(n)),n}o(e,t);var n=e.prototype;return n.spawnText=function(t){(this.state.lastBox-t)/1e3<-.2&&this.state.boxes.length<20&&(this.state.boxes.push({x:this.state.width/2-420,y:this.state.height/2,velx:80,vely:80,w:720,h:80}),this.setState({lastBox:Date.now()}))},n.updateDimensions=function(t){console.log(t),this.setState({width:t.width,height:t.height})},n.componentDidMount=function(){this.rAF=requestAnimationFrame(this.updateAnimationState)},n.updateAnimationState=function(){var t=this,e=Date.now(),n=this.state.last-e,i=this.state.boxes||[];i.forEach(function(i){i.x=i.x+i.velx*n/1e3,i.y=i.y+i.vely*n/1e3,i.vely-=9.8,i.y<0&&(i.y=0,i.vely=-i.vely),i.x<0&&(i.x=0,i.velx=-i.velx),i.y+i.h>t.state.height&&(i.y=t.state.height-i.h,i.vely=-i.vely),i.x+i.w>t.state.width&&(i.x=t.state.width-i.w,i.velx=-i.velx),t.spawnText(e)}),this.setState({boxes:i,last:e}),this.rAF=requestAnimationFrame(this.updateAnimationState)},n.componentWillUnmount=function(){cancelAnimationFrame(this.rAF)},n.render=function(){return a.a.createElement(h,{boxes:this.state.boxes,updateDimensions:this.updateDimensions})},e}(a.a.Component),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).saveContext=n.saveContext.bind(s(n)),n.bgColor="blue",n}o(e,t);var n=e.prototype;return n.saveContext=function(t){this.ctx=t},n.componentDidUpdate=function(){var t=this,e=this.ctx.canvas.width,n=this.ctx.canvas.height;this.ctx.clearRect(0,0,e,n),this.ctx.fillStyle=this.bgColor,this.ctx.fillRect(0,0,e,n),this.ctx.fillStyle="black",this.ctx.font="80px Arial",this.props.boxes&&this.props.boxes.forEach(function(e){t.ctx.fillText("NATEWORLD.INFO",e.x,e.y+e.h)})},n.render=function(){return a.a.createElement(l,{contextRef:this.saveContext,updateDimensions:this.props.updateDimensions})},e}(a.a.Component),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={width:0,height:0},n}o(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("resize",this.resize),this.resize()},n.resize=function(){if(this.divElement){var t=this.divElement.clientHeight,e=this.divElement.clientWidth;this.setState({height:t,width:e}),this.props.updateDimensions({height:t,width:e})}},n.componentWillUnmount=function(){window.removeEventListener("resize",this.resize)},n.render=function(){var t=this;return a.a.createElement("div",{ref:function(e){return t.divElement=e},style:{width:"100%",height:"100%"}},a.a.createElement("canvas",{style:{width:"100%",height:"100%"},width:this.state.width,height:this.state.height,ref:function(e){return e?t.props.contextRef(e.getContext("2d")):null}}))},e}(a.a.Component)},191:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),s=n(187),o=n(189);n(196);e.default=function(){return a.a.createElement("div",{style:{height:"100%",display:"flex",flexFlow:"column"}},a.a.createElement(s.default,null),a.a.createElement(o.default,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3fc867caf0e0b9a3321b.js.map