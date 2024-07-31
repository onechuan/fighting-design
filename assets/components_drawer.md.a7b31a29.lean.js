import{d as b,f as p,c as f,C as t,y as e,v as s,M as h,a as l,A as r,o as m}from"./chunks/framework.bf8f9e64.js";const C=h('<h1 id="drawer-抽屉" tabindex="-1">Drawer 抽屉 <a class="header-anchor" href="#drawer-抽屉" aria-label="Permalink to &quot;Drawer 抽屉&quot;">​</a></h1><p>在浏览器中使用抽屉</p><ul><li><a href="https://github.com/FightingDesign/fighting-design/tree/master/packages/fighting-design/drawer" target="_blank" rel="noreferrer">源代码</a></li><li><a href="https://github.com/FightingDesign/fighting-design/blob/master/docs/components/drawer.md" target="_blank" rel="noreferrer">文档编辑</a></li></ul><h2 id="基本使用" tabindex="-1">基本使用 <a class="header-anchor" href="#基本使用" aria-label="Permalink to &quot;基本使用&quot;">​</a></h2><p><code>v-model:visible</code> 属性来控制展示状态</p>',5),g=s("h3",null,"沁园春·雪",-1),v=s("p",null,"北国风光，千里冰封，万里雪飘。",-1),_=s("p",null,"望长城内外，惟余莽莽；大河上下，顿失滔滔。",-1),w=s("p",null,"山舞银蛇，原驰蜡象，欲与天公试比高。",-1),k=s("p",null,"须晴日，看红装素裹，分外妖娆。",-1),x=s("br",null,null,-1),q=s("p",null,"江山如此多娇，引无数英雄竞折腰。",-1),S=s("p",null,"惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。",-1),P=s("p",null,"一代天骄，成吉思汗，只识弯弓射大雕。",-1),T=s("p",null,"俱往矣，数风流人物，还看今朝。",-1),z=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onShow('left')"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"从左往右开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onShow('right')"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"从右往左开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onShow('top')"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"从上往下开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onShow('bottom')"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"从下往上开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-space"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible1"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Title"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":direction"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"direction"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"h3"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"沁园春·雪"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"h3"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"北国风光，千里冰封，万里雪飘。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"望长城内外，惟余莽莽；大河上下，顿失滔滔。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"山舞银蛇，原驰蜡象，欲与天公试比高。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"须晴日，看红装素裹，分外妖娆。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"br"),s("span",{style:{color:"#89DDFF"}}," />")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"江山如此多娇，引无数英雄竞折腰。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"一代天骄，成吉思汗，只识弯弓射大雕。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"俱往矣，数风流人物，还看今朝。"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"p"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"type"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"DrawerDirection"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"fighting-design"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," visible1 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," direction "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#FFCB6B"}},"DrawerDirection"),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"right"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," onShow "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#BABED8","font-style":"italic"}},"dir"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FFCB6B"}},"DrawerDirection"),s("span",{style:{color:"#89DDFF"}},"):"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#FFCB6B"}},"void"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#C792EA"}},"=>"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"direction"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"value"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"dir")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#BABED8"}},"visible1"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#BABED8"}},"value"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),N=s("h2",{id:"多层嵌套",tabindex:"-1"},[l("多层嵌套 "),s("a",{class:"header-anchor",href:"#多层嵌套","aria-label":'Permalink to "多层嵌套"'},"​")],-1),$=s("p",null,[s("code",null,"drawer"),l(" 组件也拥有多层嵌套的方法")],-1),I=s("div",{class:"language-html"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"html"),s("pre",{class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible2 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"打开"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Title"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"append-to-body"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible2"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"primary"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible3 = true"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}},"打开内层 drawer"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"title"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Title"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"v-model:visible"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"visible3"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#BABED8"}}," 内层 drawer "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"f-drawer"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"lang"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"ts"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"setup"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"import"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"{"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#BABED8"}},"ref"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"}"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"from"),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"vue"),s("span",{style:{color:"#89DDFF"}},"'")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," visible2 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#BABED8"}},"  "),s("span",{style:{color:"#C792EA"}},"const"),s("span",{style:{color:"#BABED8"}}," visible3 "),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#BABED8"}}," "),s("span",{style:{color:"#82AAFF"}},"ref"),s("span",{style:{color:"#BABED8"}},"("),s("span",{style:{color:"#FF9CAC"}},"false"),s("span",{style:{color:"#BABED8"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1),U=h('<h2 id="attributes" tabindex="-1">Attributes <a class="header-anchor" href="#attributes" aria-label="Permalink to &quot;Attributes&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model:visible</code></td><td>绑定值，控制是否展示</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>append-to-body</code></td><td>是否追加到 body</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>direction</code></td><td>弹出方向</td><td><a href="#drawerdirection">DrawerDirection</a></td><td><code>top</code> <code>left</code> <code>bottom</code> <code>right</code></td><td>right</td></tr><tr><td><code>title</code></td><td>标题文字内容</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>show-mask</code></td><td>是否展示遮罩层</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>show-header</code></td><td>是否展示头部</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>mask-close</code></td><td>点击遮罩层是否可关闭</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>mask-opacity</code></td><td>遮罩层透明度</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>mask-background</code></td><td>遮罩层背景色</td><td>string</td><td>——</td><td>——</td></tr><tr><td><code>modal-blur</code></td><td>是否模糊遮罩层</td><td>boolean</td><td>——</td><td>false</td></tr><tr><td><code>close-icon</code></td><td>自定义关闭按钮 icon</td><td><a href="/components/interface.html#fightingicon">FightingIcon</a></td><td>——</td><td>——</td></tr><tr><td><code>show-close-icon</code></td><td>是否展示关闭按钮</td><td>boolean</td><td>——</td><td>true</td></tr><tr><td><code>z-index</code></td><td>层级，原生 <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/z-index" target="_blank" rel="noreferrer">z-index</a> 属性</td><td>number</td><td>——</td><td>——</td></tr><tr><td><code>on-open</code></td><td>打开动画开始的回调</td><td><a href="/components/dialog.html#dialogcallback">DialogCallback</a></td><td>——</td><td>——</td></tr><tr><td><code>on-open-end</code></td><td>打开动画结束的回调</td><td><a href="/components/dialog.html#dialogcallback">DialogCallback</a></td><td>——</td><td>——</td></tr><tr><td><code>on-close</code></td><td>关闭动画开始的回调</td><td><a href="/components/dialog.html#dialogcallback">DialogCallback</a></td><td>——</td><td>——</td></tr><tr><td><code>on-close-end</code></td><td>关闭动画结束的回调</td><td><a href="/components/dialog.html#dialogcallback">DialogCallback</a></td><td>——</td><td>——</td></tr></tbody></table></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="vp-table__container"><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td><code>default</code></td><td>默认内容</td></tr><tr><td><code>header</code></td><td>自定义顶部内容</td></tr><tr><td><code>footer</code></td><td>自定义底部内容</td></tr><tr><td><code>closeIcon</code></td><td>自定义关闭按钮图标</td></tr></tbody></table></div><h2 id="interface" tabindex="-1">Interface <a class="header-anchor" href="#interface" aria-label="Permalink to &quot;Interface&quot;">​</a></h2><p>组件导出以下类型定义：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">type</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DrawerInstance</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DrawerProps</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#BABED8;">DrawerDirection</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">fighting-design</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h3 id="drawerdirection" tabindex="-1">DrawerDirection <a class="header-anchor" href="#drawerdirection" aria-label="Permalink to &quot;DrawerDirection&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#BABED8;"> </span><span style="color:#FFCB6B;">DrawerDirection</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">=</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">left</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">top</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">right</span><span style="color:#89DDFF;">&#39;</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">|</span><span style="color:#BABED8;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bottom</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="contributors" tabindex="-1">Contributors <a class="header-anchor" href="#contributors" aria-label="Permalink to &quot;Contributors&quot;">​</a></h2>',10),V={href:"https://github.com/Tyh2001",target:"_blank"},J={href:"https://github.com/wang-zhixin",target:"_blank"},j=JSON.parse('{"title":"Drawer 抽屉","description":"","frontmatter":{},"headers":[],"relativePath":"components/drawer.md","filePath":"components/drawer.md","lastUpdated":1718865782000}'),M={name:"components/drawer.md"},G=b({...M,setup(O){const D=p(!1),F=p(!1),y=p(!1),i=p("right"),c=B=>{i.value=B,D.value=!0};return(B,o)=>{const n=r("f-button"),u=r("f-space"),d=r("f-drawer"),E=r("vp-demo"),A=r("f-avatar");return m(),f("div",null,[C,t(E,{source:""},{source:e(()=>[t(u,null,{default:e(()=>[t(n,{type:"primary",onClick:o[0]||(o[0]=a=>c("left"))},{default:e(()=>[l("从左往右开")]),_:1}),t(n,{type:"primary",onClick:o[1]||(o[1]=a=>c("right"))},{default:e(()=>[l("从右往左开")]),_:1}),t(n,{type:"primary",onClick:o[2]||(o[2]=a=>c("top"))},{default:e(()=>[l("从上往下开")]),_:1}),t(n,{type:"primary",onClick:o[3]||(o[3]=a=>c("bottom"))},{default:e(()=>[l("从下往上开")]),_:1})]),_:1}),t(d,{visible:D.value,"onUpdate:visible":o[4]||(o[4]=a=>D.value=a),title:"Title",direction:i.value},{default:e(()=>[g,v,_,w,k,x,q,S,P,T]),_:1},8,["visible","direction"])]),default:e(()=>[z]),_:1}),N,$,t(E,{source:""},{source:e(()=>[s("div",null,[t(n,{type:"primary",onClick:o[5]||(o[5]=a=>F.value=!0)},{default:e(()=>[l("打开")]),_:1}),t(d,{visible:F.value,"onUpdate:visible":o[8]||(o[8]=a=>F.value=a),title:"Title",size:"50%","append-to-body":""},{default:e(()=>[t(n,{type:"primary",onClick:o[6]||(o[6]=a=>y.value=!0)},{default:e(()=>[l("打开内层 drawer")]),_:1}),t(d,{visible:y.value,"onUpdate:visible":o[7]||(o[7]=a=>y.value=a),title:"Title"},{default:e(()=>[l(" 内层 drawer ")]),_:1},8,["visible"])]),_:1},8,["visible"])])]),default:e(()=>[I]),_:1}),U,s("a",V,[t(A,{round:"",src:"https://avatars.githubusercontent.com/u/73180970?v=4"})]),s("a",J,[t(A,{round:"",src:"https://avatars.githubusercontent.com/u/50623519?v=4"})])])}}});export{j as __pageData,G as default};
