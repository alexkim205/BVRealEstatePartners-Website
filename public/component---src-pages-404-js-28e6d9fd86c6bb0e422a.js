(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(162),o=n(160),l=n(148);e.default=function(){return i.a.createElement(r.a,null,i.a.createElement(o.a,{title:"404: Not found"}),i.a.createElement(l.b,null,i.a.createElement("h1",null,"Page Cannot Be Found"),i.a.createElement("h6",null,"You just hit a route that doesn't exist.")))}},146:function(t,e,n){"use strict";e.a={theme:{main:"#F16664",secondary:"#FFF6E6",lightaccent:"#9CD6D2",accent:"#6BB7B9",darkaccent:"#007D8C",lightmain:"#F48583"},font:{dark:"#484848",light:"#767676"},border:{dark:"#484848",light:"#767676",lighter:"rgba(0,0,0,0.2)"}}},147:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return f}),n.d(e,"StaticQueryContext",function(){return u}),n.d(e,"StaticQuery",function(){return m});var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(145),d=n.n(l);n.d(e,"Link",function(){return d.a}),n.d(e,"withPrefix",function(){return l.withPrefix}),n.d(e,"navigate",function(){return l.navigate}),n.d(e,"push",function(){return l.push}),n.d(e,"replace",function(){return l.replace}),n.d(e,"navigateTo",function(){return l.navigateTo});var c=n(149),p=n.n(c);n.d(e,"PageRenderer",function(){return p.a});var s=n(32);n.d(e,"parsePath",function(){return s.a});var u=i.a.createContext({}),m=function(t){return i.a.createElement(u.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},148:function(t,e,n){"use strict";n.d(e,"b",function(){return l}),n.d(e,"a",function(){return c});var a=n(0),i=n.n(a),r=n(144),o=(n(146),r.a.div.withConfig({displayName:"section__StyledSection",componentId:"sc-18ueukn-0"})(["margin:32px 0 0 0;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:12px;margin-right:12px;}"],function(t){var e=t.color;return"#fff"!==e&&"\n    background-color: rgba(0,0,0,0.08);\n    // border-bottom: 2px solid "+e+";\n    // border-left: 2px solid "+e+";\n    // border-right: 2px solid "+e+";\n  "})),l=function(t){var e=t.children,n=t.color||"#fff";return i.a.createElement(o,{color:n},e)},d=r.a.div.withConfig({displayName:"section__StyledFullSection",componentId:"sc-18ueukn-1"})(["margin:32px -24px 0 -24px;padding:0 24px;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:-12px;margin-right:-12px;}@media (min-width:1540px){margin-left:0px;margin-right:0px;}"],function(t){var e=t.color;return"#fff"!==e&&"\n    // background-color: rgba(0,0,0,0.08);\n    background-color: "+e+";\n    // color: white !important;\n    h2{color: white !important;}\n    span{color: white !important;}\n    p{color: white !important;}\n    *{color: white !important;}\n    // border-bottom: 2px solid "+e+";\n    // border-left: 2px solid "+e+";\n    // border-right: 2px solid "+e+";\n  "}),c=function(t){var e=t.children,n=t.color||"#fff";return i.a.createElement(d,{color:n},e)}},149:function(t,e,n){var a;t.exports=(a=n(158))&&a.default||a},157:function(t){t.exports={data:{site:{siteMetadata:{title:"Trustbnb",officialTitle:"Trustbnb, Co."}}}}},158:function(t,e,n){"use strict";n.r(e);n(33);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),l=n(52),d=n(2),c=function(t){var e=t.location,n=d.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(l.a,Object.assign({location:e,pageResources:n},n.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=c},159:function(t,e,n){},160:function(t,e,n){"use strict";var a=n(161),i=n(0),r=n.n(i),o=n(4),l=n.n(o),d=n(168),c=n.n(d),p=n(147);function s(t){var e=t.description,n=t.lang,i=t.meta,o=t.keywords,l=t.title;return r.a.createElement(p.StaticQuery,{query:u,render:function(t){var a=e||t.site.siteMetadata.description;return r.a.createElement(c.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})},data:a})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},e.a=s;var u="1025518380"},161:function(t){t.exports={data:{site:{siteMetadata:{title:"Trustbnb",description:"A website to showcase BV Real Estate Partners",author:"Alex Kim <agk2144@columbia.edu>"}}}}},162:function(t,e,n){"use strict";var a=n(157),i=n(0),r=n.n(i),o=n(144),l=n(4),d=n.n(l),c=n(147),p=n(7),s=n.n(p),u=n(51),m=n.n(u),f=n(150),g=n(151),h=n(146),x=n(221),y=o.a.div.withConfig({displayName:"header__StyledNavbar",componentId:"zi46uq-0"})(["margin:0px auto;width:100%;padding:12px 24px 12px 24px;position:fixed;display:flex;top:0;background-color:white;align-items:center;z-index:2;a{color:"," !important;}.navbar-brand{font-size:18px !important;font-weight:700;}.navbar-toggler{border-color:white !important;path{fill:",";}}@media (max-width:885px){.navbar-collapse{display:none;}}"],h.a.font.dark,h.a.font.dark),w=o.a.div.withConfig({displayName:"header__FlexGrow",componentId:"zi46uq-1"})(["flex:1;"]),b=o.a.div.withConfig({displayName:"header__NavItem",componentId:"zi46uq-2"})(["margin:auto 10px;a{color:"," !important;font-size:14px !important;font-weight:500;}@media (max-width:885px){display:none;}"],h.a.font.dark),v=o.a.div.withConfig({displayName:"header__Dropdown",componentId:"zi46uq-3"})(["display:none;position:absolute;top:75px;left:0;width:100%;background-color:white;padding:0 20px 12px 20px;z-index:2;@media (max-width:885px){display:",";flex-direction:column;}"],function(t){return t.isOpen?"flex":"none"}),E=o.a.div.withConfig({displayName:"header__DDNavItem",componentId:"zi46uq-4"})(["margin:5px 30px;border-bottom:2px solid ",";"],h.a.border.lighter),k=o.a.div.withConfig({displayName:"header__StyledNavbarToggler",componentId:"zi46uq-5"})(["display:none;margin:0 30px;height:42px;@media (max-width:885px){display:flex !important;align-items:center;}"]),q=o.a.div.withConfig({displayName:"header__StyledNav",componentId:"zi46uq-6"})(["display:flex;"]),_=o.a.div.withConfig({displayName:"header__ActionButton",componentId:"zi46uq-7"})(["background-color:",";border-radius:3px;transition:all 0.2s;padding:8px 15px;margin:0 5px;border-radius:3px;display:flex;align-items:center;a{color:white !important;font-size:14px !important;font-weight:500;transition:color 0.2s;&:hover{text-decoration:none;}}&:hover{box-shadow:0 3px 10px rgba(0,0,0,0.1);}@media (max-width:885px){display:visible;}@media (max-width:630px){display:none;}"],h.a.theme.main),C=(Object(o.a)(_).withConfig({displayName:"header__ActionButtonOutline",componentId:"zi46uq-8"})(["border:2px solid ",";background-color:white;a{color:"," !important;transition:color 0.2s;}"],h.a.theme.accent,h.a.font.dark),function(t){function e(e){var n;return(n=t.call(this,e)||this).toggle=n.toggle.bind(m()(m()(n))),n.state={isOpen:!1},n}s()(e,t);var n=e.prototype;return n.toggle=function(){this.setState({isOpen:!this.state.isOpen})},n.render=function(){var t=this.props.siteTitle;return console.log(this.state.isOpen),r.a.createElement(i.Fragment,null,r.a.createElement(y,{color:"#fff",light:!0,expand:"md"},r.a.createElement(x.a,{href:"/"},t),r.a.createElement(w,null),r.a.createElement(k,{onClick:this.toggle},r.a.createElement(f.a,{icon:g.a})),r.a.createElement(v,{isOpen:this.state.isOpen},r.a.createElement(E,null,r.a.createElement(c.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(E,null,r.a.createElement(c.Link,{to:"/faq/"},"FAQ")),r.a.createElement(E,null,r.a.createElement(c.Link,{to:"/contact/"},"Work With Us"))),r.a.createElement(q,{navbar:!0},r.a.createElement(b,null,r.a.createElement(c.Link,{to:"/listings/"},"Our Listings")),r.a.createElement(b,null,r.a.createElement(c.Link,{to:"/faq"},"FAQ")),r.a.createElement(_,null,r.a.createElement(c.Link,{to:"/contact"},"Work With Us")))))},e}(i.Component));C.propTypes={siteTitle:d.a.string},C.defaultProps={siteTitle:""};var N=C,T=o.a.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1o5r1n6-0"})(["margin:180px auto 50px auto;padding:55px 24px !important;border-top:1px solid ",";max-width:1540px;"],h.a.border.light),I=function(t){var e=t.company;return r.a.createElement(T,null,"© ",e)};I.propTypes={company:d.a.string.isRequired};var S=I,z=(n(159),n(167),o.a.div.withConfig({displayName:"layout__Body",componentId:"sc-13x6kjw-0"})(["padding:0 24px;max-width:1540px;margin:auto;margin-top:100px;display:flex;flex-direction:column;@media (max-width:767px){padding:0 12px;}"])),F=function(t){var e=t.children;return r.a.createElement(c.StaticQuery,{query:"3926456875",render:function(t){var n=t.site;return r.a.createElement(i.Fragment,null,r.a.createElement(N,{siteTitle:n.siteMetadata.title}),r.a.createElement(z,null,e),r.a.createElement(S,{company:n.siteMetadata.officialTitle}))},data:a})};F.propTypes={children:d.a.node.isRequired};e.a=F}}]);
//# sourceMappingURL=component---src-pages-404-js-28e6d9fd86c6bb0e422a.js.map