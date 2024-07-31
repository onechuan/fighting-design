import{F}from"./chunks/index.d6a3c1e6.js";import{F as e}from"./chunks/index.022426ba.js";import{d as m,c as h,C as t,y as l,v as s,M as y,a as o,A as a,o as A}from"./chunks/framework.bf8f9e64.js";import"./chunks/index.c8e6718a.js";import"./chunks/index.a881d7d5.js";import"./chunks/index.f96b7fa5.js";import"./chunks/index.9c0beef1.js";const f=y('<h1 id="confirm-box-确认框" tabindex="-1">Confirm Box 确认框 <a class="header-anchor" href="#confirm-box-确认框" aria-label="Permalink to &quot;Confirm Box 确认框&quot;">​</a></h1><p>操作之前加点料？</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/confirm-box" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/confirm-box.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="使用前" tabindex="-1">使用前 <a class="header-anchor" href="#使用前" aria-label="Permalink to &quot;使用前&quot;">​</a></h2><p>使用前，你需要先引入：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">FConfirmBox</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p>传递一个配置对象，可打开确认框</p><p><code>title</code> 和 <code>content</code> 配置标题和提示的内容信息</p><p><code>on-confirm</code> 和 <code>on-cancel</code> 分别处理点击确定和点击取消的回调方法</p>',10),C=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":on-click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"open1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"提示"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FConfirmBox"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"fighting-design"),s("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," open1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"():"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FFCB6B"}},"void"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"FConfirmBox"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      title"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"标题"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"这是内容"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"onConfirm"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"success"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了确定"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"onCancel"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"danger"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了取消"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),E=s("h2",{id:"异步调用",tabindex:"-1"},[o("异步调用 "),s("a",{class:"header-anchor",href:"#异步调用","aria-label":'Permalink to "异步调用"'},"​")],-1),u=s("p",null,[s("code",null,"on-confirm"),o(" 和 "),s("code",null,"on-cancel"),o(" 可传入一个异步方法或者 "),s("code",null,"Promise"),o("，那么会等待方法响应之后再关闭")],-1),g=s("p",null,"在未响应期间，按钮和关闭按钮处于禁用状态",-1),b=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":on-click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"open2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"提示"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FConfirmBox"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"fighting-design"),s("span",{style:{color:"#89DDFF"}},"'")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," getDate "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"Promise"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"resolve"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"reject"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"setTimeout"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#82AAFF"}},"resolve"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," code"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"200"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," res"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," ["),s("span",{style:{color:"#F78C6C"}},"1"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"2"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"3"),s("span",{style:{color:"#F07178"}},"] "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"2000"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"}),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," open2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"():"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FFCB6B"}},"void"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#82AAFF"}},"FConfirmBox"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      title"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"标题"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      content"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"这是内容"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"onConfirm"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"async"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"await"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#82AAFF"}},"getDate"),s("span",{style:{color:"#F07178"}},"()")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"success"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了确定"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"},")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#82AAFF"}},"onCancel"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"new"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FFCB6B"}},"Promise"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"resolve"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8","font-style":"italic"}},"reject"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#82AAFF"}},"setTimeout"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#BABED8"}},"FMessage"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"danger"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"点击了取消"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"            "),s("span",{style:{color:"#82AAFF"}},"resolve"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"123"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          "),s("span",{style:{color:"#89DDFF"}},"},"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#F78C6C"}},"2000"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#F07178"}},")")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),o(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),_=y('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>title</code></td><td>标题</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>content</code></td><td>提示内容</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>confirm-text</code></td><td>确认按钮文字</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>z-index</code></td><td>层级，原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index</a> 属性</td><td>number</td><td>——</td><td>1000</td></tr><tr><td><code>cancel-text</code></td><td>取消按钮文字</td><td>string / number</td><td>——</td><td>——</td></tr><tr><td><code>on-confirm</code></td><td>点击确定执行的回调方法</td><td><a href="/components/interface.html#handlemouse">HandleMouse</a></td><td>——</td><td>——</td></tr><tr><td><code>on-cancel</code></td><td>点击取消执行的回调方法</td><td><a href="/components/interface.html#handlemouse">HandleMouse</a></td><td>——</td><td>——</td></tr><tr><td><code>on-open</code></td><td>开启之后执行的回调方法</td><td><a href="/components/interface.html#handlechange">HandleChange</a></td><td>——</td><td>——</td></tr><tr><td><code>on-close</code></td><td>关闭之后执行的回调方法</td><td><a href="/components/interface.html#handlechange">HandleChange</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',3),x={href:"https://github.com/Tyh2001",target:"_blank"},j=JSON.parse('{"title":"Confirm Box 确认框","description":"","frontmatter":{},"headers":[],"relativePath":"components/confirm-box.md","filePath":"components/confirm-box.md","lastUpdated":1718865782000}'),v={name:"components/confirm-box.md"},H=m({...v,setup(k){const D=()=>{F({title:"标题",content:"这是内容",onConfirm:()=>{e.success("点击了确定")},onCancel:()=>{e.danger("点击了取消")}})},i=()=>new Promise((n,c)=>{setTimeout(()=>{n({code:200,res:[1,2,3]})},2e3)}),d=()=>{F({title:"标题",content:"这是内容",onConfirm:async()=>{await i(),e.success("点击了确定")},onCancel:()=>new Promise((n,c)=>{setTimeout(()=>{e.danger("点击了取消"),n("123")},2e3)})})};return(n,c)=>{const r=a("f-button"),p=a("vp-demo"),B=a("f-avatar");return A(),h("div",null,[f,t(p,{source:""},{source:l(()=>[t(r,{"on-click":D},{default:l(()=>[o("提示")]),_:1})]),default:l(()=>[C]),_:1}),E,u,g,t(p,{source:""},{source:l(()=>[t(r,{"on-click":d},{default:l(()=>[o("提示")]),_:1})]),default:l(()=>[b]),_:1}),_,s("a",x,[t(B,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})])])}}});export{j as __pageData,H as default};
