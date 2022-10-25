"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8366],{8366:function(a,e,n){n.r(e),n(7378);var t=n(2682);function s(){return s=Object.assign?Object.assign.bind():function(a){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(a[t]=n[t])}return a},s.apply(this,arguments)}function p(a){let{components:e,...n}=a;return(0,t.kt)("wrapper",s({components:e},n),(0,t.kt)("p",null,"While writing your code, you may have already added many code split points to load stuff on demand. After compiling you might notice that some chunks are too small - creating larger HTTP overhead. ",(0,t.kt)("inlineCode",{parentName:"p"},"LimitChunkCountPlugin")," can post-process your chunks by merging them."),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"optimize",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"LimitChunkCountPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// Options..."),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"options",parentName:"h2"}),"Options",(0,t.kt)("a",{href:"#options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"The following options are supported:"),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"maxchunks",parentName:"h3"}),"maxChunks",(0,t.kt)("a",{href:"#maxchunks","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"number")),(0,t.kt)("p",null,"Limit the maximum number of chunks using a value greater than or equal to ",(0,t.kt)("inlineCode",{parentName:"p"},"1"),". Using ",(0,t.kt)("inlineCode",{parentName:"p"},"1")," will prevent any additional chunks from being added as the entry/main chunk is also included in the count."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"const")," webpack ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"require"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'webpack'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\nmodule",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// ..."),"\n  plugins",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"["),"\n    ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"new")," ",(0,t.kt)("span",{className:"token class-name",parentName:"code"},"webpack",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"optimize",(0,t.kt)("span",{className:"token punctuation",parentName:"span"},"."),"LimitChunkCountPlugin"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      maxChunks",(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token number",parentName:"code"},"5"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"]"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("h3",null,(0,t.kt)("span",{id:"minchunksize",parentName:"h3"}),"minChunkSize",(0,t.kt)("a",{href:"#minchunksize","aria-hidden":"true",tabIndex:"-1",parentName:"h3"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"Keeping chunk size above the specified limit is no longer a feature of this plugin. Use ",(0,t.kt)("a",{href:"/plugins/min-chunk-size-plugin",parentName:"p"},"MinChunkSizePlugin")," instead."),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"usage-via-cli",parentName:"h2"}),"Usage via CLI",(0,t.kt)("a",{href:"#usage-via-cli","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"This plugin and it's options can also be invoked via the ",(0,t.kt)("a",{href:"/api/cli/",parentName:"p"},"CLI"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-bash",parentName:"pre"},"webpack --optimize-max-chunks ",(0,t.kt)("span",{className:"token number",parentName:"code"},"15"))))}p.isMDXComponent=!0,e.default=p}}]);