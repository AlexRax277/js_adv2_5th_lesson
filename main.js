(()=>{"use strict";class t{constructor(){this.parent=document.body,this.onShow=!1,this.popEl=document.createElement("h3")}show(t){this.popEl.classList="popover",this.popEl.textContent="My Popover",this.parent.appendChild(this.popEl);const e=document.createElement("div");return e.classList="popText",e.textContent=t,this.popEl.appendChild(e),this.popEl.classList.add("popOn"),this.onShow=!0,this.popEl}cordDetecting(){const t=document.querySelector(".btn"),{left:e,top:o}=t.getBoundingClientRect();this.popEl.style.left=`${e+(t.offsetWidth-this.popEl.offsetWidth)/2}px`,this.popEl.style.bottom=`${o+t.offsetHeight+5}px`}hide(){this.popEl.classList.remove("popOn"),this.popEl.classList.add("popOff"),this.onShow=!1}}class e{constructor(e,o){this.name=e,this.parent=o,this.data=[],this.popover=new t}createButton(){const t=document.createElement("button");return t.classList="btn",t.textContent=this.name,this.parent.appendChild(t),t}addingPopover(t){const e=this.popover.show(t);this.popover.cordDetecting();const o=performance.now();return this.data.push({id:o,element:e}),o}removingPopover(t){const e=this.popover,o=new Promise(((t,o)=>t(e.hide()))),s=this.data.find((e=>e.id===t)),n=()=>{this.popover.onShow||s.element.remove()};o.then((()=>{setTimeout((()=>{n()}),2e3)})),this.data=this.data.filter((e=>e.id!==t))}}!function(){const t=document.createElement("div");t.classList="container",document.body.appendChild(t);const o=new e("Push me",t);let s;o.createButton().addEventListener("click",(()=>{null!==document.querySelector(".popOn")?o.removingPopover(s):s=o.addingPopover("some text...")}))}()})();