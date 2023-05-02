import{d as _,e as c,_ as u,o as d,c as n,a as t,f as s,p,g as f}from"./index-1f385c1a.js";const h=_("video",{state:()=>({videoUrl:"",errorMsg:"",loading:!1}),getters:{videoState:e=>e.loading?"loading":e.videoUrl?"ready":"no-file"},actions:{loadFile(e){if(this.loading)return;if(!e.type.includes("video/")){this.errorMsg="Bad video filetype selected.";return}this.loading=!0;const i=new FileReader;i.onload=()=>{this.videoUrl=i.result,this.errorMsg=void 0,this.loading=!1},i.readAsDataURL(e)},unload(){this.videoUrl="",this.loading=!1}}}),g={name:"VideoView",setup(){const e=h();return{handleFileInput:a=>{const o=a.target.files;if(!o||o.length===0)return;const l=o[0];e.loadFile(l)},videoUrl:c(()=>e.videoUrl),newFile:()=>e.unload(),videoState:c(()=>e.videoState)}},beforeUnmount(){this.newFile()}};const v=e=>(p("data-v-cbad7b7b"),e=e(),f(),e),b={key:0,class:"file-input"},S=v(()=>t("label",{for:"inp-video"},"Choose a video file",-1)),y={key:1},w=v(()=>t("p",null,"Loading video ...",-1)),F=[w],m={key:2},U={class:"video-wrapper"},V=["src"];function I(e,i,a,o,l,k){return d(),n("div",null,[o.videoState==="no-file"?(d(),n("div",b,[S,t("input",{id:"inp-video",type:"file",accept:"video/*",onChange:i[0]||(i[0]=(...r)=>o.handleFileInput&&o.handleFileInput(...r))},null,32)])):s("",!0),o.videoState=="loading"?(d(),n("div",y,F)):s("",!0),o.videoState==="ready"?(d(),n("div",m,[t("div",U,[t("video",{src:o.videoUrl,controls:"",autoplay:""},null,8,V),t("button",{onClick:i[1]||(i[1]=r=>o.newFile())},"Choose new file")])])):s("",!0)])}const x=u(g,[["render",I],["__scopeId","data-v-cbad7b7b"]]);export{x as default};
