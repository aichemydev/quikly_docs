"use strict";(self.webpackChunktest_gold=self.webpackChunktest_gold||[]).push([[195],{6160:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var i=n(7294),a=n(6010),r=n(4814),s=n(9960),c=n(2263),o="heroBanner_etFc",l="buttons_+YzY",d=n(7462),g="features_n4mZ",m="featureSvg_d3xR",u=[];function h(e){var t=e.Svg,n=e.title,r=e.description;return i.createElement("div",{className:(0,a.Z)("col col--4")},i.createElement("div",{className:"text--center"},i.createElement(t,{className:m,alt:n})),i.createElement("hr",null),i.createElement("div",{className:"text--center padding-horiz--md"},i.createElement("h3",null,n),i.createElement("p",null,r)))}function p(){return i.createElement("section",{className:g},i.createElement("div",{className:"container"},i.createElement("div",{className:"row"},u.map((function(e,t){return i.createElement(h,(0,d.Z)({key:t},e))})))))}var v="__ga4React__";class y{constructor(e,t,n,i,a){if(this.gaCode=e,this.gaConfig=t,this.additionalGaCode=n,this.timeout=i,this.options=a,this.scriptSyncId="ga4ReactScriptSync",this.scriptAsyncId="ga4ReactScriptAsync",this.nonceAsync="",this.nonceSync="",this.gaConfig=t||{},this.gaCode=e,this.timeout=i||5e3,this.additionalGaCode=n,this.options=a,this.options){var{nonce:r}=this.options;this.nonceAsync=r&&r[0]?r[0]:"",this.nonceSync=r&&r[1]?r[1]:""}}outputOnResolve(){return{pageview:this.pageview,event:this.event,gtag:this.gtag}}initialize(){return new Promise(((e,t)=>{y.isInitialized()&&t(new Error("GA4React is being initialized"));var n=document.getElementById(this.scriptAsyncId);n&&n.remove();var i=document.getElementsByTagName("head")[0],a=document.createElement("script");a.setAttribute("id",this.scriptAsyncId),a.setAttribute("async",""),this.nonceAsync&&"string"==typeof this.nonceAsync&&this.nonceAsync.length>0&&a.setAttribute("nonce",this.nonceAsync),a.setAttribute("src","https://www.googletagmanager.com/gtag/js?id="+this.gaCode),a.onload=()=>{var t=document.getElementById(this.scriptSyncId);t&&t.remove();var n=document.getElementById(this.scriptSyncId);n&&n.remove();var a=document.createElement("script");a.setAttribute("id",this.scriptSyncId),this.nonceSync&&"string"==typeof this.nonceSync&&this.nonceSync.length>0&&a.setAttribute("nonce",this.nonceSync);var r="window.dataLayer = window.dataLayer || [];\n        function gtag(){dataLayer.push(arguments);};\n        gtag('js', new Date());\n        gtag('config', '"+this.gaCode+"', "+JSON.stringify(this.gaConfig)+");";this.additionalGaCode&&this.additionalGaCode.forEach((e=>{r+="\ngtag('config', '"+e+"', "+JSON.stringify(this.gaConfig)+");"})),a.innerHTML=r,i.appendChild(a);var s=this.outputOnResolve();Object.assign(window,{[v]:s}),e(s)},a.onerror=e=>{if("string"==typeof e)t("GA4React intialization failed "+e);else{var n=new Error;n.name="GA4React intialization failed",n.message=JSON.stringify(e,["message","arguments","type","name"]),t(n)}};var r=()=>{switch(document.readyState){case"interactive":case"complete":y.isInitialized()||(i.appendChild(a),document.removeEventListener("readystatechange",r))}};"complete"!==document.readyState?document.addEventListener("readystatechange",r):r(),setTimeout((()=>{t(new Error("GA4React Timeout"))}),this.timeout)}))}pageview(e,t,n){return this.gtag("event","page_view",{page_path:e,page_location:t||window.location,page_title:n||document.title})}event(e,t,n,i){return void 0===i&&(i=!1),this.gtag("event",e,{event_label:t,event_category:n,non_interaction:i})}gtag(){return window.gtag(...arguments)}static isInitialized(){return void 0!==window.__ga4React__==!0}static getGA4React(){if(y.isInitialized())return window.__ga4React__;console.error(new Error("GA4React is not initialized"))}}var f=y;try{setTimeout((function(e){new f("G-3FMKJ7EPND").initialize().catch((function(e){return console.error(e)}))}),4e3)}catch(_){console.error(_)}function E(){var e=(0,c.Z)().siteConfig;return i.createElement("header",{className:(0,a.Z)("hero hero--primary",o)},i.createElement("div",{className:"container"},i.createElement("h1",{className:"hero__title"},e.title),i.createElement("p",{className:"hero__subtitle"},e.tagline),i.createElement("div",{className:l},i.createElement(s.Z,{className:"button button--secondary button--lg",to:"/docs/intro"},"Get Started"))))}function w(){var e=(0,c.Z)().siteConfig;return i.createElement(r.Z,{title:"Documentation "+e.title,description:"Description will go into a meta tag in <head />"},i.createElement(E,null),i.createElement("main",null,i.createElement(p,null)))}}}]);