(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{137:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(160),o=a(158),c=a(150);e.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement(c.a,null,r.a.createElement("h1",null,"Page Cannot Be Found"),r.a.createElement("h6",null,"You just hit a route that doesn't exist.")))}},143:function(t,e,a){"use strict";e.a={theme:{main:"#F16664",secondary:"#FFF6E6",lightaccent:"#79CCCD",accent:"#6BB7B9",darkaccent:"#007D8C",lightmain:"#F48583"},font:{dark:"#484848",light:"#767676"},border:{dark:"#484848",light:"#767676"}}},144:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),l=a.n(c);a.d(e,"Link",function(){return l.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var d=a(149),s=a.n(d);a.d(e,"PageRenderer",function(){return s.a});var u=a(32);a.d(e,"parsePath",function(){return u.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},149:function(t,e,a){var n;t.exports=(n=a(152))&&n.default||n},150:function(t,e,a){"use strict";var n=a(0),r=a.n(n),i=a(141),o=(a(143),i.a.div.withConfig({displayName:"section__StyledSection",componentId:"sc-18ueukn-0"})(["margin:32px 0 0 0;border-radius:3px;overflow:hidden;"," @media (max-width:768px){margin-left:12px;margin-right:12px;}"],function(t){var e=t.color;return"#fff"!==e&&"\n    background-color: rgba(0,0,0,0.08);\n    // border-bottom: 2px solid "+e+";\n    // border-left: 2px solid "+e+";\n    // border-right: 2px solid "+e+";\n  "}));e.a=function(t){var e=t.children,a=t.color||"#fff";return r.a.createElement(o,{color:a},e)}},151:function(t){t.exports={data:{site:{siteMetadata:{title:"BV Real Estate Partners",officialTitle:"BV Real Estate Partners, Inc."}}}}},152:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(52),l=a(2),d=function(t){var e=t.location,a=l.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};d.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=d},157:function(t,e,a){},158:function(t,e,a){"use strict";var n=a(159),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(164),d=a.n(l),s=a(144);function u(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(s.StaticQuery,{query:p,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(d.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},e.a=u;var p="1025518380"},159:function(t){t.exports={data:{site:{siteMetadata:{title:"BV Real Estate Partners",description:"A website to showcase BV Real Estate Partners",author:"Alex Kim <agk2144@columbia.edu>"}}}}},160:function(t,e,a){"use strict";var n=a(151),r=a(0),i=a.n(r),o=a(141),c=a(4),l=a.n(c),d=a(144),s=a(7),u=a.n(s),p=a(51),m=a.n(p),f=a(153),g=a(154),h=a(143),y=a(198),x=a(199),w=a(200),b=a(201),v=a(202),E=a(208),k=a(203),q=Object(o.a)(y.a).withConfig({displayName:"header__StyledNavbar",componentId:"zi46uq-0"})(["margin:24px auto;padding:0 24px !important;max-width:1540px;a{color:"," !important;}.nav-link{font-size:14px !important;font-weight:500;}.nav-item{margin:auto 10px;}.navbar-brand{font-size:16px !important;font-weight:700;}.navbar-toggler{border-color:white !important;path{fill:",";}}@media (max-width:768px){padding:0 18px !important;}"],h.a.font.dark,h.a.font.dark),C=Object(o.a)(x.a).withConfig({displayName:"header__StyledNav",componentId:"zi46uq-1"})(["@media (max-width:768px){.nav-item{margin:0 30px;border-bottom:1px solid ",";}}"],h.a.border.light),T=Object(o.a)(w.a).withConfig({displayName:"header__ActionButton",componentId:"zi46uq-2"})(["background-color:",";border-radius:3px;transition:all 0.2s;padding:2px 5px;border-radius:2px;a{color:white !important;transition:color 0.2s;}&:hover{box-shadow:0 3px 10px rgba(0,0,0,0.1);}@media (max-width:768px){display:none;}"],h.a.theme.main),R=function(t){function e(e){var a;return(a=t.call(this,e)||this).toggle=a.toggle.bind(m()(m()(a))),a.state={isOpen:!1},a}u()(e,t);var a=e.prototype;return a.toggle=function(){this.setState({isOpen:!this.state.isOpen})},a.render=function(){var t=this.props.siteTitle;return i.a.createElement(r.Fragment,null,i.a.createElement(q,{color:"#fff",light:!0,expand:"md"},i.a.createElement(b.a,{href:"/"},t),i.a.createElement(v.a,{onClick:this.toggle},i.a.createElement(f.a,{icon:g.a})),i.a.createElement(E.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(C,{className:"ml-auto",navbar:!0},i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"/contact/"},"Contact Us")),i.a.createElement(w.a,null,i.a.createElement(k.a,{href:"/faq"},"FAQ")),i.a.createElement(T,null,i.a.createElement(k.a,{href:"/inquiry"},"Work With Us"))))))},e}(r.Component);R.propTypes={siteTitle:l.a.string},R.defaultProps={siteTitle:""};var P=R,S=o.a.div.withConfig({displayName:"footer__StyledFooter",componentId:"sc-1o5r1n6-0"})(["margin:55px auto;padding:55px 24px !important;border-top:1px solid ",";max-width:1540px;"],h.a.border.light),_=function(t){var e=t.company;return i.a.createElement(S,null,"© ",e)};_.propTypes={company:l.a.string.isRequired};var F=_,B=(a(157),a(163),o.a.div.withConfig({displayName:"layout__Body",componentId:"sc-13x6kjw-0"})(["padding:0 24px;max-width:1540px;margin:auto;display:flex;flex-direction:column;@media (max-width:767px){padding:0 12px;}"])),N=function(t){var e=t.children;return i.a.createElement(d.StaticQuery,{query:"3926456875",render:function(t){var a=t.site;return i.a.createElement(r.Fragment,null,i.a.createElement(P,{siteTitle:a.siteMetadata.title}),i.a.createElement(B,null,e),i.a.createElement(F,{company:a.siteMetadata.officialTitle}))},data:n})};N.propTypes={children:l.a.node.isRequired};e.a=N}}]);
//# sourceMappingURL=component---src-pages-404-js-4a6f6689910ece642cdd.js.map